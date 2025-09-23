<script setup lang="js">
import { computed } from 'vue'
import { useSlideContext } from '@slidev/client'

const props = defineProps({
  color: {
    default: 'white',
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
  }
})

const { $frontmatter, $slidev } = useSlideContext()

const isCmsitTheme = computed(() => {
  return props.color?.startsWith('cmsit-')
})

const colorscheme = computed(() => {
  // Check for dynamic theme first
  if ($frontmatter.styles) {
    const themeName = $frontmatter.styles
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
  
  // Default neversink scheme
  return `company-${props.color}-scheme`
})

const logoClass = computed(() => {
  switch(props.logoSize) {
    case 'small':
      return 'w-40';
    case 'medium':
      return 'w-60';
    case 'large':
    default:
      return 'w-80';
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
    :class="[colorscheme]"
    :style="backgroundStyle"
  >
    <!-- Background overlay -->
    <div 
      v-if="backgroundImage" 
      class="absolute inset-0 z-0"
      :style="{ backgroundColor: backgroundOverlay }"
    ></div>
    
    <!-- Logo Header Section -->
    <div class="logo-header absolute top-6 left-6 right-6 z-10 flex justify-between items-start">
      <!-- Left logos -->
      <div class="flex items-center gap-6">
        <div v-if="$frontmatter.logo" class="logo-container">
          <img :src="$frontmatter.logo" :class="logoClass" />
        </div>
        <div v-if="$frontmatter.logo2" class="logo-container">
          <img :src="$frontmatter.logo2" :class="logoClass" />
        </div>
      </div>
      
      <!-- Right logos -->
      <div class="flex items-center gap-6">
        <div v-if="$frontmatter.clientLogo" class="client-logo-container">
          <img :src="$frontmatter.clientLogo" :class="logoClass" />
        </div>
        <div v-if="$frontmatter.clientLogo2" class="client-logo-container">
          <img :src="$frontmatter.clientLogo2" :class="logoClass" />
        </div>
      </div>
    </div>
    
    <!-- Main content -->
    <div class="content w-full relative z-10 flex flex-col justify-center items-start px-6" :class="{ 'myauto': !isCmsitTheme }">
      <div class="main-content-area max-w-4xl">
        <slot />
        
        <!-- Version/Date information -->
        <div v-if="$frontmatter.version || $frontmatter.date" class="version-info mt-6 text-white text-lg opacity-90">
          <span v-if="$frontmatter.date">{{ $frontmatter.date }}</span>
          <span v-if="$frontmatter.version && $frontmatter.date">, </span>
          <span v-if="$frontmatter.version">Version {{ $frontmatter.version }}</span>
        </div>
      </div>
    </div>
    
    <!-- Presenter information -->
    <div v-if="showPresenter && ($frontmatter.presenters || $frontmatter.presenter || $frontmatter.author)" class="presenter-section absolute bottom-8 left-6 right-6 z-10">
      <!-- Multiple presenters -->
      <div v-if="$frontmatter.presenters" class="flex justify-start gap-12">
        <div
          v-for="(presenter, index) in $frontmatter.presenters"
          :key="index"
          class="presenter-card flex items-center gap-4"
        >
          <!-- Presenter photo -->
          <div v-if="presenter.photo" class="presenter-photo">
            <img 
              :src="presenter.photo" 
              :alt="presenter.name"
              class="w-16 h-16 rounded-full object-cover border-4 border-green-400"
            />
          </div>
          
          <!-- Presenter info -->
          <div class="presenter-info">
            <div class="presenter-name text-white font-semibold text-lg">
              {{ presenter.name }}
            </div>
            <div v-if="presenter.title" class="presenter-title text-white text-sm opacity-90">
              {{ presenter.title }}
            </div>
            <div v-if="presenter.email" class="presenter-email text-white text-sm opacity-80">
              {{ presenter.email }}
            </div>
          </div>
        </div>
      </div>
      
      <!-- Single presenter (legacy support) -->
      <div v-else-if="$frontmatter.presenter || $frontmatter.author" :class="presenterClass">
        <div v-if="$frontmatter.presenter" class="presenter-name font-medium">
          {{ $frontmatter.presenter }}
        </div>
        <div v-if="$frontmatter.author && $frontmatter.author !== $frontmatter.presenter" class="author-name text-sm opacity-80">
          {{ $frontmatter.author }}
        </div>
        <div v-if="$frontmatter.presenterTitle" class="presenter-title text-xs opacity-70 mt-1">
          {{ $frontmatter.presenterTitle }}
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

/* this is specific to this instance */
.slidev-layout.cover h1,
.slidev-layout.cover h2,
.slidev-layout.cover h3 {
  padding-bottom: 0.3em;
  border-bottom: 1px solid var(--company-primary);
}

</style>
