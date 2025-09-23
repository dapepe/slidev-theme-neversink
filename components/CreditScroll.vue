<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
// Removed useSlideContext imports - using alternative approach

// const { $renderContext } = useSlideContext() // Not available in this version
const props = defineProps({
  speed: {
    default: 0.5,
  },
  loop: {
    default: false,
  },
})

const containerRef = ref(null)
const scrollPosition = ref(0)
const isScrolling = ref(false)

let animationFrameId = null

const scroll = () => {
  scrollPosition.value -= props.speed
  if (Math.abs(scrollPosition.value) >= 550) {
    if (props.loop.value) {
      resetScroll()
    } else {
      stopScrolling()
      return
    }
  } else {
    animationFrameId = requestAnimationFrame(scroll)
  }
}

const startScrolling = () => {
  animationFrameId = requestAnimationFrame(scroll)
}

const stopScrolling = () => {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId)
  }
}

const resetScroll = () => {
  scrollPosition.value = 480 //containerRef.value.offsetHeight * 2.5
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId)
  }
}

// Intersection Observer to detect when component becomes visible
let observer = null
let isDestroyed = false

onMounted(() => {
  
  // Create intersection observer to detect when component is visible
  observer = new IntersectionObserver((entries) => {
    // Check if component is still alive
    if (isDestroyed) return
    
    entries.forEach(entry => {
      if (isDestroyed) return // Double check during forEach
      
      if (entry.isIntersecting) {
        // Component is visible - start scrolling
        resetScroll()
        startScrolling()
      } else {
        // Component is not visible - stop scrolling
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId)
          animationFrameId = null
        }
      }
    })
  }, {
    threshold: 0.1 // Trigger when 10% of component is visible
  })
  
  // Start observing the container with a small delay to ensure DOM is ready
  nextTick(() => {
    if (containerRef.value && observer && !isDestroyed) {
      observer.observe(containerRef.value)
    }
  })
})

onBeforeUnmount(() => {
  // Mark as destroyed to prevent any async operations
  isDestroyed = true
  
  // Clean up animation frame
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId)
    animationFrameId = null
  }
  
  // Clean up intersection observer
  if (observer) {
    observer.disconnect()
    observer = null
  }
})
</script>

<template>
  <div class="scroll-container" ref="containerRef">
    <div class="scroll-content" :style="{ transform: `translateY(${scrollPosition}px)` }">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.scroll-container {
  height: 100vh; /* Use full viewport height */
  overflow: hidden;
  position: relative;
  cursor: pointer;
}

.scroll-content {
  position: absolute;
  width: 100%;
}
</style>
