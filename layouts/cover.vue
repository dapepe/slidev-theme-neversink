<script setup lang="js">
import { computed } from 'vue'
import { useSlideContext } from '@slidev/client'

const { $slidev } = useSlideContext()

const props = defineProps({
  color: {
    default: 'light',
    validator: (value) => ['light', 'dark'].includes(value)
  },
  logoSize: {
    default: 'medium', // 'large', 'medium', 'small'
  },
  backgroundImage: {
    type: String,
    default: null
  },
  backgroundOverlay: {
    type: String,
    default: 'rgba(0, 0, 0, 0.4)'
  },
  showPresenter: {
    type: Boolean,
    default: true
  },
  subtitle: {
    type: String,
    default: ''
  },
  logos: {
    type: Array,
    default: () => []
  },
  presenters: {
    type: Array,
    default: () => []
  },
  version: {
    type: [String, Number],
    default: ''
  },
  date: {
    type: String,
    default: ''
  },
  styles: {
    type: String,
    default: ''
  }
})

const isCmsitTheme = computed(() => {
  return props.color?.startsWith('cmsit-')
})

const colorscheme = computed(() => {
  // Check for dynamic theme first
  if (props.styles) {
    const themeName = props.styles
    const colorName = props.color || 'light'
    if (colorName.startsWith(`${themeName}-`)) {
      return `${colorName}-scheme`
    }
    return `${themeName}-${colorName}-scheme`
  }
  
  // Legacy CMSIT theme detection
  if (isCmsitTheme.value) {
    const color = props.color?.startsWith('cmsit-') ? props.color : `cmsit-${props.color}`
    return `${color}-scheme`
  }
  
  // Default company scheme
  return `company-${props.color}-scheme`
})

const textColorScheme = computed(() => {
  // Use the color prop directly (already validated to be 'light' or 'dark')
  return props.color
})

const logoClass = computed(() => {
  switch(props.logoSize) {
    case 'small':
      return 'w-40 h-40 object-contain';
    case 'medium':
      return 'w-50 h-60 object-contain';
    case 'large':
    default:
      return 'w-80 h-80 object-contain';
  }
})


const backgroundStyle = computed(() => {
  if (props.backgroundImage) {
    return {
      backgroundImage: `url(${props.backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }
  }
  return {}
})

</script>

<template>
  <div 
    class="slidev-layout cover h-full slidecolor relative" 
    :class="[colorscheme, `company-${textColorScheme}-scheme`]"
    :style="backgroundStyle"
  >
    <!-- Background overlay -->
    <div 
      v-if="props.backgroundImage" 
      class="absolute inset-0 z-0"
      :style="{ backgroundColor: props.backgroundOverlay }"
    ></div>
    
    <!-- Logo Header Section -->
    <div v-if="props.logos.length > 0" class="logo-header absolute top-12 left-6 right-6 z-10">
      <div class="flex items-center justify-start gap-8">
        <div 
          v-for="(logo, index) in props.logos" 
          :key="index" 
          class="logo-container flex items-center justify-center"
        >
          <img :src="logo" :class="logoClass" />
        </div>
      </div>
    </div>
    
    <!-- Main content -->
    <div class="content w-full relative z-10 flex flex-col justify-center items-start pr-6" :class="{ 'myauto': !isCmsitTheme }">
      <div class="main-content-area max-w-4xl">
        <!-- Title and Subtitle -->
        <h1 v-if="$slidev?.configs?.title" class="cover-title">{{ $slidev.configs.title }}</h1>
        <h2 v-if="props.subtitle" class="cover-subtitle">{{ props.subtitle }}</h2>
        
        <!-- Slot content (for additional content) -->
        <slot />
        
        <!-- Version/Date information -->
        <div v-if="props.version || props.date" class="version-info mt-6 text-lg opacity-90">
          <span v-if="props.date">{{ props.date }}</span>
          <span v-if="props.version && props.date">, </span>
          <span v-if="props.version">Version {{ props.version }}</span>
        </div>
      </div>
    </div>
    
    <!-- Presenter information -->
    <div v-if="props.showPresenter && props.presenters.length > 0" class="presenter-section absolute bottom-8 left-6 right-6 z-10">
      <div class="flex justify-start gap-12">
        <div
          v-for="(presenterItem, index) in props.presenters"
          :key="index"
          class="presenter-card flex items-center gap-4"
        >
          <!-- Presenter photo -->
          <div v-if="presenterItem.photo" class="presenter-photo">
            <img 
              :src="presenterItem.photo" 
              :alt="presenterItem.name"
              class="w-16 h-16 rounded-full object-cover"
            />
          </div>
          
          <!-- Presenter info -->
          <div class="presenter-info">
            <div class="presenter-name font-semibold text-lg">
              {{ presenterItem.name }}
            </div>
            <div v-if="presenterItem.title" class="presenter-title text-sm opacity-90">
              {{ presenterItem.title }}
            </div>
            <div v-if="presenterItem.email" class="presenter-email text-sm opacity-80">
              <a :href="`mailto:${presenterItem.email}`" class="no-underline hover:opacity-100 transition-opacity duration-200">
                {{ presenterItem.email }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Note slot -->
    <div class="note absolute bottom-3 left-6 z-10">
      <slot name="note" />
    </div>
  </div>
</template>

<style>
/* cover slide type */

.slidev-layout.cover {
  font-family: var(--company-font-primary);
  font-weight: var(--company-font-weight-light);
}

.slidev-layout.cover {
  margin-bottom: 0px;
}

.slidev-layout.cover p {
  letter-spacing: 0.05em;
  font-size: 0.85em;
  line-height: 1.4em;
}

.slidev-layout.cover strong {
  font-weight: 500;
}

.slidev-layout.cover .note {
  font-weight: 300;
  font-size: 0.9rem;
  margin-right: 200px;
}

.slidev-layout.cover h1 {
  font-family: var(--company-font-heading);
  font-weight: var(--company-cover-title-weight);
  font-size: var(--company-cover-title-size);
  line-height: var(--company-line-height-tight);
  margin-bottom: 0.9rem;
  margin-top: 40px;
}

.slidev-layout.cover h2 {
  font-family: var(--company-font-heading);
  font-weight: var(--company-cover-subtitle-weight);
  font-size: var(--company-cover-subtitle-size);
  line-height: var(--company-line-height-tight);
  margin-bottom: 0.9rem;
  margin-top: 40px;
}

.slidev-layout.cover h3 {
  font-family: var(--company-font-heading);
  font-weight: var(--company-font-weight-medium);
  font-size: var(--company-font-size-xl);
  line-height: var(--company-line-height-tight);
  margin-bottom: 0.9rem;
  margin-top: 40px;
}

.slidev-layout.cover h1 + p {
  padding: 0;
  margin: 0;
  opacity: 1;
}

.slidev-layout.cover h2 + p {
  padding: 0;
  margin: 0;
  opacity: 1;
}

.slidev-layout.cover h3 + p {
  padding: 0;
  margin: 0;
  opacity: 1;
}

/* Cover title and subtitle specific styling */
.slidev-layout.cover .cover-title {
  font-family: var(--company-font-heading);
  font-weight: var(--company-cover-title-weight);
  font-size: var(--company-cover-title-size);
  line-height: var(--company-line-height-tight);
  margin-bottom: 0.9rem;
  margin-top: 40px;
  color: var(--company-text-heading);
}

.slidev-layout.cover .cover-subtitle {
  font-family: var(--company-font-heading);
  font-weight: var(--company-cover-subtitle-weight);
  font-size: var(--company-cover-subtitle-size);
  line-height: var(--company-line-height-tight);
  margin-bottom: 0.9rem;
  margin-top: 0;
  color: var(--company-text-secondary);
}

/* Logo container styling */
.slidev-layout.cover .logo-container img {
  object-fit: contain;
}

/* Version/Date information styling */
.slidev-layout.cover .version-info {
  color: #ffffff;
}

/* Presenter information styling */
.slidev-layout.cover .presenter-name,
.slidev-layout.cover .presenter-title,
.slidev-layout.cover .presenter-email {
  color: #ffffff;
}

/* Presenter email link styling - override global link styles */
.slidev-layout.cover .presenter-email a {
  color: #ffffff;
  text-decoration: none;
  border: none;
  outline: none;
  transition: var(--company-transition-colors);
}

.slidev-layout.cover .presenter-email a:hover {
  color: #ffffff;
  text-decoration: none;
  border: none;
  outline: none;
  opacity: 1;
}

.slidev-layout.cover .presenter-email a:focus {
  color: #ffffff;
  text-decoration: none;
  border: none;
  outline: none;
  opacity: 1;
}

</style>

