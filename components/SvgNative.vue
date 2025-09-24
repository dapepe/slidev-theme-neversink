<script setup lang="js">
import { ref, onMounted, onUnmounted, nextTick, watch, computed } from 'vue'
import { useStepNavigation } from '../composables/useNavigationOverride.js'

const props = defineProps({
  // SVG content or file path
  src: {
    type: String,
    required: false
  },
  content: {
    type: String,
    required: false
  },
  // Animation configuration
  animation: {
    type: String,
    default: 'fade-in',
    validator: (value) => [
      'fade-in', 'slide-up', 'slide-left', 'slide-right', 
      'scale-up', 'bounce', 'rotate', 'pulse'
    ].includes(value)
  },
  // Animation timing
  duration: {
    type: Number,
    default: 600
  },
  stagger: {
    type: Number,
    default: 100
  },
  // Layer configuration
  layerPrefix: {
    type: String,
    default: 'fadein'
  },
  // Responsive settings
  responsive: {
    type: Boolean,
    default: true
  },
  // Interactive settings
  interactive: {
    type: Boolean,
    default: false
  },
  // Sequential animation settings
  sequential: {
    type: Boolean,
    default: true
  },
  // Maximum step number
  maxStep: {
    type: Number,
    default: 0
  }
})

const emit = defineEmits(['svg-loaded', 'animation-complete'])

// Generate truly unique ID for this component instance
const componentId = `svg-native-${Date.now()}-${Math.random().toString(36).substr(2, 9)}-${performance.now().toString(36).replace('.', '')}`
const svgContainer = ref(null)
const svgContent = ref('')
const isLoaded = ref(false)

// Load SVG content
const loadSvgContent = async () => {
  try {
    let content = ''
    
    if (props.content) {
      content = props.content
    } else if (props.src) {
      const response = await fetch(props.src)
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`)
      }
      content = await response.text()
      
      if (!content || content.trim() === '') {
        throw new Error('SVG content is empty')
      }
    } else {
      throw new Error('Either content or src must be provided')
    }
    
    // Process SVG for native Slidev v-click compatibility
    const processed = processSvgForVClick(content)
    svgContent.value = processed.content
    isLoaded.value = true
    emit('svg-loaded')
    
    await nextTick()
    setupAnimations()
  } catch (error) {
    svgContent.value = `<div class="text-red-500">Failed to load SVG: ${error.message}</div>`
  }
}

// Process SVG for native Slidev v-click compatibility
const processSvgForVClick = (content) => {
  let processed = content
  
  // Add responsive attributes if needed
  if (props.responsive) {
    processed = processed.replace(/<svg([^>]*)>/g, '<svg$1 class="svg-responsive">')
  }
  
  // Add interactive attributes if needed
  if (props.interactive) {
    processed = processed.replace(/<svg([^>]*)>/g, '<svg$1 class="svg-interactive">')
  }
  
  // Add data attributes to numbered groups for manual handling
  const numberedGroupRegex = new RegExp(`<g([^>]*class="(\\d+)-${props.layerPrefix}"[^>]*)>`, 'g')

  processed = processed.replace(numberedGroupRegex, (match, attributes, stepNumber) => {
    // Add data-step attribute for manual handling
    return `<g${attributes} data-step="${stepNumber}">`
  })
  
  return { content: processed, steps: [] }
}

// Animation transform helpers
const getInitialTransform = (animation) => {
  switch (animation) {
    case 'fade-in':
      return 'none'
    case 'slide-up':
      return 'translateY(20px)'
    case 'slide-left':
      return 'translateX(20px)'
    case 'slide-right':
      return 'translateX(-20px)'
    case 'scale-up':
      return 'scale(0.8)'
    case 'bounce':
      return 'scale(0.8)'
    case 'rotate':
      return 'rotate(-10deg) scale(0.9)'
    case 'pulse':
      return 'scale(0.95)'
    default:
      return 'none'
  }
}

const getActiveTransform = (animation) => {
  switch (animation) {
    case 'fade-in':
    case 'slide-up':
    case 'slide-left':
    case 'slide-right':
    case 'scale-up':
    case 'rotate':
      return 'none'
    case 'bounce':
    case 'pulse':
      return 'scale(1)' // Final state for keyframe animations
    default:
      return 'none'
  }
}

const getAnimationKeyframes = (animation) => {
  switch (animation) {
    case 'bounce':
      return `animation: bounce-in ${props.duration}ms ease-out;`
    case 'pulse':
      return `animation: pulse-in ${props.duration}ms ease-out;`
    default:
      return ''
  }
}

// Setup animations after SVG is loaded
const setupAnimations = () => {
  if (!svgContainer.value) return
  
  // Add animation CSS classes based on props
  const style = document.createElement('style')
  style.textContent = `
    .svg-responsive {
      width: 100%;
      height: auto;
      max-width: 100%;
    }
    
    .svg-interactive {
      cursor: pointer;
    }
    
    .svg-interactive:hover {
      transform: scale(1.01);
      transition: transform 0.2s ease;
    }
    
    /* SVG animation styles scoped to this component instance */
    [data-svg-id="${componentId}"] [class*="-${props.layerPrefix}"] {
      opacity: ${props.sequential ? '0' : '1'};
      transform: ${getInitialTransform(props.animation)};
      transition: all ${props.duration}ms ease-out;
    }
    
    ${props.sequential ? `
    /* Sequential mode: Show step 1 by default and when active */
    [data-svg-id="${componentId}"] [data-step="1"] {
      opacity: 1;
    }
    
    [data-svg-id="${componentId}"] [class*="-${props.layerPrefix}"].active {
      opacity: 1;
      transform: ${getActiveTransform(props.animation)};
      ${getAnimationKeyframes(props.animation)}
    }
    ` : ''}
    
    /* Keyframe animations */
    @keyframes bounce-in {
      0% { transform: scale(0.8); }
      50% { transform: scale(1.1); }
      100% { transform: scale(1); }
    }
    
    @keyframes pulse-in {
      0% { transform: scale(0.95); }
      50% { transform: scale(1.05); }
      100% { transform: scale(1); }
    }
  `
  
  document.head.appendChild(style)
  
  // Setup manual click handling that integrates with Slidev
  setupManualClickHandling()
  
  // Initialize display based on mode (same pattern as cards grid)
  setTimeout(() => {
    if (svgContainer.value) {
      if (props.sequential) {
        // Sequential mode: show first step by default
        const firstStepElements = svgContainer.value.querySelectorAll('[data-step="1"]')
        firstStepElements.forEach(el => {
          el.classList.add('active')
        })
      } else {
        // Non-sequential mode: show all elements (CSS already handles this, but add active class for consistency)
        const allElements = svgContainer.value.querySelectorAll(`[class*="-${props.layerPrefix}"]`)
        allElements.forEach(el => {
          el.classList.add('active')
        })
      }
    }
  }, 100)
}

// Global observer reference for cleanup
let globalObserver = null

// Function to get maximum step number (fallback if maxStep prop not provided)
const getMaxStep = () => {
  if (!svgContainer.value) return 0
  
  const elements = svgContainer.value.querySelectorAll('[data-step]')
  let max = 0
  elements.forEach(el => {
    const step = parseInt(el.getAttribute('data-step'))
    if (!isNaN(step) && step > max) max = step
  })
  return max
}

// Function to show specific step
const showStep = (step) => {
  if (!svgContainer.value) return
  
  const elements = svgContainer.value.querySelectorAll(`[data-step="${step}"]`)
  elements.forEach(el => {
    el.classList.add('active')
  })
}

// Function to reset animation (same pattern as cards grid)
const resetAnimation = () => {
  if (!svgContainer.value) return
  
  // Always reset the step navigation
  stepNavigation.reset()
}

// Setup step-based navigation using the composable (same pattern as cards grid)
const maxSteps = computed(() => props.maxStep || 4) // Default to 4, will be updated after SVG loads

const stepNavigation = useStepNavigation({
  maxSteps: maxSteps.value,
  initialStep: props.sequential ? 1 : maxSteps.value, // Start at 1 for sequential, show all for non-sequential
  onStepChange: (step, direction) => {
    if (direction === 'next') {
      showStep(step)
    } else if (direction === 'prev') {
      // Hide the next step when going backwards
      const nextStep = step + 1
      const elements = svgContainer.value?.querySelectorAll(`[data-step="${nextStep}"]`)
      elements?.forEach(el => {
        el.classList.remove('active')
      })
    } else if (direction === 'reset') {
      // First, clear all active classes
      const allElements = svgContainer.value?.querySelectorAll(`[class*="-${props.layerPrefix}"]`)
      allElements?.forEach(el => {
        el.classList.remove('active')
      })
      
      if (props.sequential) {
        // Sequential mode: show only the reset step (usually step 1)
        showStep(step)
      } else {
        // Non-sequential mode: show all elements
        allElements?.forEach(el => {
          el.classList.add('active')
        })
      }
    }
  },
  isActive: () => {
    // Only active when sequential mode is enabled, SVG container is visible and contains elements
    if (!props.sequential || !svgContainer.value || maxSteps.value <= 0) {
      return false
    }
    
    // Each component should be independent - check if this specific component should be active
    // Use the unique component ID to ensure each component manages its own navigation
    const thisComponentId = svgContainer.value.getAttribute('data-svg-id')
    
    // Find the current slide container
    const slideContainer = svgContainer.value.closest('.slidev-layout') || 
                          svgContainer.value.closest('[data-slidev-slide]') ||
                          svgContainer.value.closest('.slide')
    
    if (!slideContainer) {
      // Fallback: if we can't find slide container, this component is active if sequential
      return true
    }
    
    // Find all sequential SVGs within the current slide only
    const sequentialSvgsInSlide = slideContainer.querySelectorAll('[data-svg-sequential="true"]')
    
    // Find this specific component among the sequential ones
    let thisComponentIndex = -1
    for (let i = 0; i < sequentialSvgsInSlide.length; i++) {
      if (sequentialSvgsInSlide[i].getAttribute('data-svg-id') === thisComponentId) {
        thisComponentIndex = i
        break
      }
    }
    
    // Only the first sequential SVG in this slide should handle navigation
    return thisComponentIndex === 0
  },
  slideElement: svgContainer // Pass the SVG container as slide element for visibility detection
})

// Extract current step for template usage
const currentStep = stepNavigation.currentStep

// Setup manual click handling for direct SVG clicks
const setupManualClickHandling = () => {
  if (!svgContainer.value) return
  
  // Only setup click handling in sequential mode (same pattern as cards grid)
  if (props.sequential) {
    // Listen for clicks on the SVG container to advance steps
    svgContainer.value.addEventListener('click', () => {
      stepNavigation.nextStep()
    })
  }
  
  // Listen for slide changes to reset animation
  const handleSlideChange = () => {
    resetAnimation()
  }
  
  // Listen for route changes (slide changes)
  if (window.$router) {
    window.$router.afterEach(handleSlideChange)
  }
  
  // Also listen for visibility changes (when slide becomes visible)
  if (svgContainer.value) {
    globalObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Reset when slide becomes visible
          resetAnimation()
        }
      })
    }, { threshold: 0.1 })
    
    globalObserver.observe(svgContainer.value)
  }
  
  // Expose methods for external control
  window.svgNativeControls = {
    showNext: () => stepNavigation.nextStep(),
    showPrev: () => stepNavigation.prevStep(),
    showStep: showStep,
    reset: resetAnimation,
    currentStep: () => stepNavigation.currentStep.value,
    maxSteps: () => maxSteps.value,
    isSequential: () => props.sequential
  }
}

// Lifecycle
onMounted(() => {
  loadSvgContent()
})

// Watch for changes
watch(() => props.src, () => {
  loadSvgContent()
})

watch(() => props.content, () => {
  loadSvgContent()
})

// Cleanup on unmount
onUnmounted(() => {
  // Clean up observer if it exists
  if (globalObserver) {
    globalObserver.disconnect()
    globalObserver = null
  }
  
  // Clean up global controls
  if (window.svgNativeControls) {
    delete window.svgNativeControls
  }
  
  // Navigation cleanup is handled by the composable
})
</script>

<template>
  <div 
    ref="svgContainer"
    class="svg-native-container"
    :class="{
      'svg-responsive': props.responsive,
      'svg-interactive': props.interactive
    }"
    :style="{
      '--animation-duration': `${props.duration}ms`,
      '--animation-stagger': `${props.stagger}ms`
    }"
    :data-svg-sequential="props.sequential.toString()"
    :data-svg-id="componentId"
  >
    <!-- SVG content with v-click attributes -->
    <div v-html="svgContent" class="svg-content"></div>
    
    <!-- Loading indicator -->
    <div v-if="!isLoaded" class="svg-loading">
      <div class="loading-spinner"></div>
      <span>Loading SVG...</span>
    </div>
  </div>
</template>

<style scoped>
.svg-native-container {
  width: 100%;
  height: 100%;
  position: relative;
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


/* Loading state */
.svg-loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  color: #666;
}

.loading-spinner {
  width: 20px;
  height: 20px;
  border: 2px solid #f3f3f3;
  border-top: 2px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Responsive SVG */
.svg-responsive .svg-content :deep(svg) {
  width: 100%;
  height: auto;
  max-width: 100%;
}

.svg-responsive .svg-step-content :deep(svg) {
  width: 100%;
  height: auto;
  max-width: 100%;
}

/* Interactive states */
.svg-interactive {
  cursor: pointer;
}

.svg-interactive:hover {
  transform: scale(1.01);
  transition: transform 0.2s ease;
}
</style>