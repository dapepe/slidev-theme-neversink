<script setup lang="js">
import { computed } from 'vue'

const props = defineProps({
  color: {
    default: 'cmsit-highlight',
  },
})

const colorScheme = computed(() => {
  return `cmsit-${props.color}-scheme`;
})
</script>

<template>
  <div class="slidev-layout section h-full slidecolor flex flex-col items-center justify-center" :class="colorScheme">
    <div>
      <slot />
      <hr class="mt-2 border-2" :style="{ borderColor: 'var(--cmsit-highlight-color)' }" />
    </div>
  </div>
</template>

<style>
/* Section slide type */
.slidev-layout.section {
  font-family: var(--cmsit-main-font);
}

.slidev-layout.section h1 {
  font-size: 3rem;
  font-family: var(--cmsit-title-font);
  font-weight: 600;
  letter-spacing: 0.05em;
}

.slidev-layout.section h1 + p {
  margin-top: 1.5rem;
  opacity: 0.8;
}

.slidev-layout.section hr {
  width: 100%;
  border-width: 2px;
}
</style> 