<script setup lang="js">
import { computed } from 'vue'

const props = defineProps({
  color: {
    default: 'light',
    validator: (value) => ['light', 'dark'].includes(value)
  },
  logoSize: {
    default: 'large', // 'large', 'medium', 'small'
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
  presenterPosition: {
    type: String,
    default: 'bottom-right', // 'bottom-left', 'bottom-right', 'top-left', 'top-right'
    validator: (value) => ['bottom-left', 'bottom-right', 'top-left', 'top-right'].includes(value)
  },
  // Frontmatter props
  title: {
    type: String,
    default: 'Presentation Title'
  },
  subtitle: {
    type: String,
    default: ''
  },
  logo: {
    type: String,
    default: ''
  },
  logo2: {
    type: String,
    default: ''
  },
  clientLogo: {
    type: String,
    default: ''
  },
  clientLogo2: {
    type: String,
    default: ''
  },
  presenter: {
    type: String,
    default: ''
  },
  presenterTitle: {
    type: String,
    default: ''
  },
  author: {
    type: String,
    default: ''
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
      return 'w-60 h-60 object-contain';
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

const presenterClass = computed(() => {
  const baseClass = 'presenter-info absolute text-sm font-light'
  switch(props.presenterPosition) {
    case 'bottom-left':
      return `${baseClass} bottom-4 left-4`
    case 'top-left':
      return `${baseClass} top-4 left-4`
    case 'top-right':
      return `${baseClass} top-4 right-4`
    case 'bottom-right':
    default:
      return `${baseClass} bottom-4 right-4`
  }
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
    <div class="logo-header absolute top-6 left-6 right-6 z-10 flex gap-6 items-center">
      <!-- Left logos -->
      <div class="flex items-center gap-6">
        <div v-if="props.logo" class="logo-container">
          <img :src="props.logo" :class="logoClass" />
        </div>
        <div v-if="props.logo2" class="logo-container">
          <img :src="props.logo2" :class="logoClass" />
        </div>
      </div>
      
      <!-- Right logos -->
      <div class="flex items-center gap-6">
        <div v-if="props.clientLogo" class="client-logo-container">
          <img :src="props.clientLogo" :class="logoClass" />
        </div>
        <div v-if="props.clientLogo2" class="client-logo-container">
          <img :src="props.clientLogo2" :class="logoClass" />
        </div>
      </div>
    </div>
    
    <!-- Main content -->
    <div class="content w-full relative z-10 flex flex-col justify-center items-start pr-6" :class="{ 'myauto': !isCmsitTheme }">
      <div class="main-content-area max-w-4xl">
        <!-- Title and Subtitle -->
        <h1 v-if="props.title" class="cover-title">{{ props.title }}</h1>
        <h2 v-if="props.subtitle" class="cover-subtitle">{{ props.subtitle }}</h2>
        
        <!-- Slot content (for additional content) -->
        <slot />
        
        <!-- Version/Date information -->
        <div v-if="props.version || props.date" class="version-info mt-6 text-white text-lg opacity-90">
          <span v-if="props.date">{{ props.date }}</span>
          <span v-if="props.version && props.date">, </span>
          <span v-if="props.version">Version {{ props.version }}</span>
        </div>
      </div>
    </div>
    
    <!-- Presenter information -->
    <div v-if="props.showPresenter && (props.presenters.length > 0 || props.presenter || props.author)" class="presenter-section absolute bottom-8 left-6 right-6 z-10">
      <!-- Multiple presenters -->
      <div v-if="props.presenters.length > 0" class="flex justify-start gap-12">
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
              class="w-16 h-16 rounded-full object-cover border-4 border-green-400"
            />
          </div>
          
          <!-- Presenter info -->
          <div class="presenter-info">
            <div class="presenter-name text-white font-semibold text-lg">
              {{ presenterItem.name }}
            </div>
            <div v-if="presenterItem.title" class="presenter-title text-white text-sm opacity-90">
              {{ presenterItem.title }}
            </div>
            <div v-if="presenterItem.email" class="presenter-email text-white text-sm opacity-80">
              {{ presenterItem.email }}
            </div>
          </div>
        </div>
      </div>
      
      <!-- Single presenter (legacy support) -->
      <div v-else-if="props.presenter || props.author" :class="presenterClass">
        <div v-if="props.presenter" class="presenter-name font-medium">
          {{ props.presenter }}
        </div>
        <div v-if="props.author && props.author !== props.presenter" class="author-name text-sm opacity-80">
          {{ props.author }}
        </div>
        <div v-if="props.presenterTitle" class="presenter-title text-xs opacity-70 mt-1">
          {{ props.presenterTitle }}
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

/* Logo container styling for consistent sizing */
.slidev-layout.cover .logo-container,
.slidev-layout.cover .client-logo-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: fit-content;
  min-height: fit-content;
}

.slidev-layout.cover .logo-container img,
.slidev-layout.cover .client-logo-container img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  object-position: center;
}

</style>
