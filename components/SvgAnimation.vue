<script setup lang="js">
import { ref, onMounted, nextTick, computed } from 'vue'

const props = defineProps({
  src: {
    type: String,
    required: true
  },
  animationType: {
    type: String,
    default: 'fade-in', // 'fade-in', 'slide-up', 'slide-left', 'slide-right', 'scale-up'
    validator: (value) => ['fade-in', 'slide-up', 'slide-left', 'slide-right', 'scale-up'].includes(value)
  },
  delay: {
    type: Number,
    default: 0
  },
  duration: {
    type: Number,
    default: 600
  },
  stagger: {
    type: Number,
    default: 100
  },
  autoAnimate: {
    type: Boolean,
    default: true
  },
  layerPrefix: {
    type: String,
    default: 'fadein'
  },
  color: {
    type: String,
    default: 'white'
  }
})

const emit = defineEmits(['animation-complete'])

const svgContainer = ref(null)
const isVisible = ref(false)
const animationComplete = ref(false)
const svgContent = ref('')

const colorscheme = computed(() => {
  return `company-${props.color}-scheme`
})

// Load SVG content
const loadSvgContent = async () => {
  try {
    const response = await fetch(props.src)
    const svgText = await response.text()
    svgContent.value = svgText
  } catch (error) {
    console.error('Failed to load SVG:', error)
    svgContent.value = `<div class="text-red-500">Failed to load SVG: ${props.src}</div>`
  }
}

const animationClass = computed(() => {
  const baseClass = 'svg-animation'
  if (!isVisible.value) return `${baseClass} opacity-0`
  
  switch(props.animationType) {
    case 'slide-up':
      return `${baseClass} animate-slide-up`
    case 'slide-left':
      return `${baseClass} animate-slide-left`
    case 'slide-right':
      return `${baseClass} animate-slide-right`
    case 'scale-up':
      return `${baseClass} animate-scale-up`
    case 'fade-in':
    default:
      return `${baseClass} animate-fade-in`
  }
})

const animateLayers = async () => {
  if (!svgContainer.value) return
  
  const layers = svgContainer.value.querySelectorAll(`[class*="${props.layerPrefix}"]`)
  
  for (let i = 0; i < layers.length; i++) {
    const layer = layers[i]
    const layerNumber = layer.className.match(new RegExp(`${props.layerPrefix}-(\\d+)`))
    const delay = layerNumber ? parseInt(layerNumber[1]) * props.stagger : i * props.stagger
    
    setTimeout(() => {
      layer.style.opacity = '1'
      layer.style.transform = 'translateY(0) scale(1)'
    }, delay)
  }
  
  // Emit completion event after all animations
  const totalDelay = layers.length * props.stagger + props.duration
  setTimeout(() => {
    animationComplete.value = true
    emit('animation-complete')
  }, totalDelay)
}

onMounted(async () => {
  await loadSvgContent()
  
  if (props.autoAnimate) {
    await nextTick()
    
    // Initial delay
    setTimeout(() => {
      isVisible.value = true
      animateLayers()
    }, props.delay)
  }
})

// Expose methods for manual control
const startAnimation = () => {
  isVisible.value = true
  animateLayers()
}

const resetAnimation = () => {
  isVisible.value = false
  animationComplete.value = false
  
  if (svgContainer.value) {
    const layers = svgContainer.value.querySelectorAll(`[class*="${props.layerPrefix}"]`)
    layers.forEach(layer => {
      layer.style.opacity = '0'
      layer.style.transform = 'translateY(20px) scale(0.95)'
    })
  }
}

defineExpose({
  startAnimation,
  resetAnimation,
  isVisible: computed(() => isVisible.value),
  animationComplete: computed(() => animationComplete.value)
})
</script>

<template>
  <div 
    ref="svgContainer"
    class="svg-container"
    :class="[colorscheme, animationClass]"
    :style="{ 
      transitionDuration: `${duration}ms`,
      transitionDelay: `${delay}ms`
    }"
  >
    <div v-html="svgContent" class="svg-content"></div>
  </div>
</template>

<style scoped>
.svg-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.svg-content {
  width: 100%;
  height: 100%;
}

.svg-content :deep(svg) {
  width: 100%;
  height: 100%;
}

/* Animation keyframes */
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-left {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slide-right {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes scale-up {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Animation classes */
.animate-fade-in {
  animation: fade-in var(--animation-duration, 600ms) ease-out forwards;
}

.animate-slide-up {
  animation: slide-up var(--animation-duration, 600ms) ease-out forwards;
}

.animate-slide-left {
  animation: slide-left var(--animation-duration, 600ms) ease-out forwards;
}

.animate-slide-right {
  animation: slide-right var(--animation-duration, 600ms) ease-out forwards;
}

.animate-scale-up {
  animation: scale-up var(--animation-duration, 600ms) ease-out forwards;
}

/* Layer animation styles */
.svg-content :deep([class*="fadein"]) {
  opacity: 0;
  transform: translateY(20px) scale(0.95);
  transition: all 0.6s ease-out;
}

.svg-content :deep([class*="slidein"]) {
  opacity: 0;
  transform: translateX(-20px);
  transition: all 0.6s ease-out;
}

.svg-content :deep([class*="scalein"]) {
  opacity: 0;
  transform: scale(0.8);
  transition: all 0.6s ease-out;
}
</style>
