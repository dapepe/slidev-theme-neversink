<script setup lang="js">
import { computed } from 'vue'
import { useSlideContext } from '@slidev/client'

const props = defineProps({
  color: {
    default: 'cmsit-dark',
  },
  logoSize: {
    default: 'large', // 'large', 'medium', 'small'
  }
})

const { $frontmatter } = useSlideContext()

const colorScheme = computed(() => {
  return `cmsit-${props.color}-scheme`;
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
  <div class="slidev-layout cover h-full slidecolor" :class="colorScheme">
    <div v-if="$frontmatter.logo" class="logo-container mb-8">
      <img :src="$frontmatter.logo" :class="logoClass" />
    </div>
    <div class="content w-full">
      <slot />
    </div>
    <div class="note absolute bottom-3">
      <slot name="note" />
    </div>
  </div>
</template>

<style>
/* Cover slide type */
.slidev-layout.cover {
  font-family: var(--cmsit-main-font);
  font-weight: 300;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.slidev-layout.cover .logo-container {
  margin-bottom: 2rem;
}

.slidev-layout.cover p {
  letter-spacing: 0.05em;
  font-size: 0.95em;
  line-height: 1.5em;
}

.slidev-layout.cover strong {
  font-weight: 600;
  color: var(--cmsit-highlight-color);
}

.slidev-layout.cover .note {
  font-weight: 300;
  font-size: 0.9rem;
  margin-right: 200px;
}

.slidev-layout.cover h1 {
  font-family: var(--cmsit-title-font);
  font-weight: 600;
  font-size: 3em;
  line-height: normal;
  margin-bottom: 0.9rem;
}

.slidev-layout.cover h2 {
  font-family: var(--cmsit-title-font);
  font-weight: 500;
  font-size: 2.5em;
  line-height: normal;
  margin-bottom: 0.9rem;
}

.slidev-layout.cover h3 {
  font-family: var(--cmsit-title-font);
  font-weight: 400;
  font-size: 1.8em;
  line-height: normal;
  margin-bottom: 0.9rem;
}

.slidev-layout.cover h1 + p,
.slidev-layout.cover h2 + p,
.slidev-layout.cover h3 + p {
  padding: 0;
  margin: 0;
  opacity: 1;
}

/* Custom border for heading with brand color */
.slidev-layout.cover h1,
.slidev-layout.cover h2,
.slidev-layout.cover h3 {
  padding-bottom: 0.3em;
  border-bottom: 3px solid var(--cmsit-highlight-color);
  display: inline-block;
}
</style> 