<script setup>
import { computed } from 'vue'
const props = defineProps({
  color: {
    default: 'light',
  },
  speed: {
    default: 0.5,
  },
  loop: {
    default: false,
  },
})

const colorscheme = computed(() => {
  return `company-${props.color}-scheme`
})
</script>
<template>
  <div class="slidecolor slidev-layout full" :class="colorscheme">
    <div class="my-auto w-full h-full">
      <CreditScroll :speed="props.speed" :loop="props.loop">
        <slot name="default"></slot>
      </CreditScroll>
    </div>
  </div>
</template>

<style scoped>
.quote {
  background-color: var(--company-bg-primary);
  color: var(--company-text-primary);
  border-color: var(--company-border-primary);
}
</style>
