<script setup lang="js">
import { computed } from 'vue'
import { useSlideContext } from '@slidev/client'

const props = defineProps({
  color: {
    default: 'white',
  },
  logoSize: {
    default: 'large', // 'large', 'medium', 'small'
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
  return `neversink-${props.color}-scheme`
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
</script>

<template>
  <div class="slidev-layout cover h-full slidecolor" :class="[colorscheme]">
    <div v-if="$frontmatter.logo" class="logo-container">
      <img :src="$frontmatter.logo" :class="logoClass" />
    </div>
    <div class="content w-full" :class="{ 'myauto': !isCmsitTheme }">
      <slot />
    </div>
    <div class="note absolute bottom-3">
      <slot name="note" />
    </div>
  </div>
</template>

<style>
/* cover slide type */

.slidev-layout.cover {
  font-family: var(--neversink-main-font);
  font-weight: 300;
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
  font-family: var(--neversink-title-font);
  font-weight: 500;
  font-size: 3em;
  line-height: normal;
  margin-bottom: 0.9rem;
  margin-top: 40px;
}

.slidev-layout.cover h2 {
  font-family: var(--neversink-title-font);
  font-weight: 500;
  font-size: 2.5em;
  line-height: normal;
  margin-bottom: 0.9rem;
  margin-top: 40px;
}

.slidev-layout.cover h3 {
  font-family: var(--neversink-title-font);
  font-weight: 500;
  font-size: 1.9em;
  line-height: normal;
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
  border-bottom: 1px solid var(--neversink-highlight-color);
}

</style>
