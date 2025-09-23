<script setup>
import { computed } from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: 'info',
  },
  color: {
    type: String,
    default: 'white',
  },
  width: {
    type: String,
    default: '100%',
  },
})
</script>

<template>
  <Admonition :type="type" :color="color" :width="width">
    <slot></slot>
  </Admonition>
</template>
