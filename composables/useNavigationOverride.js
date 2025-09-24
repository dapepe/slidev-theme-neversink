import { ref, onMounted, onUnmounted, readonly } from 'vue'

/**
 * Global Navigation Override Composable
 * 
 * Provides a reusable system for overriding Slidev's navigation
 * to handle custom step-by-step interactions within slides.
 * 
 * @param {Object} options - Configuration options
 * @param {Function} options.onNext - Handler for next navigation (should return true if handled, false if not)
 * @param {Function} options.onPrev - Handler for previous navigation (should return true if handled, false if not)
 * @param {Function} options.isActive - Function to check if override should be active (optional)
 * @param {Object} options.slideElement - Vue ref to the slide element for visibility detection (optional)
 * @param {Function} options.onSlideEnter - Called when slide becomes visible (optional)
 * @param {boolean} options.debug - Enable debug logging (default: false)
 * 
 * @returns {Object} Navigation override controls
 */
export function useNavigationOverride(options = {}) {
  const {
    onNext = () => false,
    onPrev = () => false,
    isActive = () => true,
    slideElement = null,
    onSlideEnter = null,
    debug = false
  } = options

  // State
  const isOverrideActive = ref(false)
  const isSlideVisible = ref(false)
  let keyboardHandler = null
  let slidevOverride = null
  let visibilityObserver = null

  // Logging helper
  const log = (...args) => {
    if (debug) {
      console.log('[NavigationOverride]', ...args)
    }
  }

  /**
   * Check if the slide is currently visible
   */
  const checkSlideVisibility = (onVisibilityChange = null) => {
    if (!slideElement || !slideElement.value) {
      // If no slide element provided, check if any component element is visible
      return true
    }

    // Use Intersection Observer to detect visibility
    if (!visibilityObserver) {
      visibilityObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          const wasVisible = isSlideVisible.value
          isSlideVisible.value = entry.isIntersecting && entry.intersectionRatio > 0.5
          
          if (wasVisible !== isSlideVisible.value) {
            log(`Slide visibility changed: ${isSlideVisible.value ? 'visible' : 'hidden'}`)
            
            // Call slide enter callback when slide becomes visible
            if (isSlideVisible.value && !wasVisible && onSlideEnter) {
              log('Calling onSlideEnter callback')
              onSlideEnter()
            }
            
            // Call visibility change callback if provided
            if (onVisibilityChange) {
              onVisibilityChange(isSlideVisible.value, wasVisible)
            }
          }
        })
      }, { 
        threshold: [0, 0.5, 1],
        rootMargin: '-10px'
      })
      
      visibilityObserver.observe(slideElement.value)
      log('Visibility observer setup complete')
    }

    return isSlideVisible.value
  }

  /**
   * Combined check for override activation
   */
  const shouldOverrideBeActive = () => {
    const componentActive = isActive()
    const slideVisible = slideElement ? isSlideVisible.value : true
    const result = componentActive && slideVisible
    
    if (debug && !result) {
      log(`Override inactive - component: ${componentActive}, slide visible: ${slideVisible}`)
    }
    
    return result
  }

  /**
   * Setup keyboard event interception
   */
  const setupKeyboardInterception = () => {
    keyboardHandler = (e) => {
      // Check if override should be active (including slide visibility)
      if (!shouldOverrideBeActive()) {
        return
      }

      if (e.key === 'ArrowRight' || e.key === ' ') {
        log('Right/Space pressed on visible slide')
        const handled = onNext()
        if (handled) {
          e.preventDefault()
          e.stopPropagation()
          e.stopImmediatePropagation()
          log('Navigation handled by override, prevented default')
        } else {
          log('Navigation not handled, allowing default')
        }
      } else if (e.key === 'ArrowLeft') {
        log('Left arrow pressed on visible slide')
        const handled = onPrev()
        if (handled) {
          e.preventDefault()
          e.stopPropagation()
          e.stopImmediatePropagation()
          log('Navigation handled by override, prevented default')
        } else {
          log('Navigation not handled, allowing default')
        }
      }
    }

    document.addEventListener('keydown', keyboardHandler, { 
      capture: true, 
      passive: false 
    })
    log('Keyboard interception setup complete')
  }

  /**
   * Setup Slidev navigation override (fallback method)
   */
  const setupSlidevOverride = () => {
    // Try different ways to access Slidev
    const slidevInstance = window.__slidev__ || window.$slidev || window.slidev

    if (!slidevInstance || !slidevInstance.nav) {
      log('Slidev instance not found for override')
      return false
    }

    log('Setting up Slidev navigation override')

    // Store original functions
    const originalNext = slidevInstance.nav.next
    const originalPrev = slidevInstance.nav.prev

    // Override navigation functions
    slidevInstance.nav.next = () => {
      if (shouldOverrideBeActive()) {
        log('Slidev next() called on visible slide, checking override')
        const handled = onNext()
        if (handled) {
          log('Navigation handled by override')
          return
        }
      }
      log('Calling original next()')
      originalNext.call(slidevInstance.nav)
    }

    slidevInstance.nav.prev = () => {
      if (shouldOverrideBeActive()) {
        log('Slidev prev() called on visible slide, checking override')
        const handled = onPrev()
        if (handled) {
          log('Navigation handled by override')
          return
        }
      }
      log('Calling original prev()')
      originalPrev.call(slidevInstance.nav)
    }

    // Store for cleanup
    slidevOverride = {
      instance: slidevInstance,
      originalNext,
      originalPrev
    }

    log('Slidev navigation override setup complete')
    return true
  }

  /**
   * Activate the navigation override
   */
  const activate = (onVisibilityChange = null) => {
    if (isOverrideActive.value) {
      log('Override already active')
      return
    }

    log('Activating navigation override')
    
    // Setup slide visibility detection if slide element is provided
    if (slideElement) {
      checkSlideVisibility(onVisibilityChange)
    }
    
    setupKeyboardInterception()
    setupSlidevOverride()
    isOverrideActive.value = true
  }

  /**
   * Deactivate the navigation override
   */
  const deactivate = () => {
    if (!isOverrideActive.value) {
      log('Override already inactive')
      return
    }

    log('Deactivating navigation override')

    // Remove keyboard handler
    if (keyboardHandler) {
      document.removeEventListener('keydown', keyboardHandler, { 
        capture: true, 
        passive: false 
      })
      keyboardHandler = null
    }

    // Restore Slidev navigation
    if (slidevOverride) {
      slidevOverride.instance.nav.next = slidevOverride.originalNext
      slidevOverride.instance.nav.prev = slidevOverride.originalPrev
      slidevOverride = null
    }

    // Clean up visibility observer
    if (visibilityObserver) {
      visibilityObserver.disconnect()
      visibilityObserver = null
    }

    isOverrideActive.value = false
    isSlideVisible.value = false
  }

  /**
   * Auto-setup on mount and cleanup on unmount
   */
  onMounted(() => {
    log('Component mounted, activating navigation override')
    activate()
  })

  onUnmounted(() => {
    log('Component unmounting, deactivating navigation override')
    deactivate()
  })

  return {
    // State
    isOverrideActive: readonly(isOverrideActive),
    isSlideVisible: readonly(isSlideVisible),
    
    // Methods
    activate,
    deactivate,
    checkSlideVisibility,
    
    // Manual control (if needed)
    setupKeyboardInterception,
    setupSlidevOverride
  }
}

/**
 * Simple step-based navigation override
 * 
 * @param {Object} options - Step navigation options
 * @param {number} options.maxSteps - Maximum number of steps
 * @param {number} options.initialStep - Initial step (default: 1)
 * @param {Function} options.onStepChange - Callback when step changes (step, direction)
 * @param {Function} options.isActive - Function to check if override should be active
 * @param {Object} options.slideElement - Vue ref to the slide element for visibility detection
 * @param {boolean} options.debug - Enable debug logging
 * 
 * @returns {Object} Step navigation controls
 */
export function useStepNavigation(options = {}) {
  const {
    maxSteps = 1,
    initialStep = 1,
    onStepChange = () => {},
    isActive = () => true,
    slideElement = null,
    debug = false
  } = options

  const currentStep = ref(initialStep)

  const log = (...args) => {
    if (debug) {
      console.log('[StepNavigation]', ...args)
    }
  }

  const nextStep = () => {
    if (currentStep.value < maxSteps) {
      currentStep.value++
      log(`Advanced to step ${currentStep.value}`)
      onStepChange(currentStep.value, 'next')
      return true
    }
    log(`Already at max step ${maxSteps}`)
    return false
  }

  const prevStep = () => {
    if (currentStep.value > 1) {
      currentStep.value--
      log(`Went back to step ${currentStep.value}`)
      onStepChange(currentStep.value, 'prev')
      return true
    }
    log('Already at first step')
    return false
  }

  const reset = () => {
    log(`Resetting to step ${initialStep}`)
    currentStep.value = initialStep
    onStepChange(currentStep.value, 'reset')
  }

  const goToStep = (step) => {
    if (step >= 1 && step <= maxSteps) {
      const oldStep = currentStep.value
      currentStep.value = step
      log(`Jumped from step ${oldStep} to step ${step}`)
      onStepChange(currentStep.value, 'jump')
      return true
    }
    log(`Invalid step ${step}, must be between 1 and ${maxSteps}`)
    return false
  }

  // Setup navigation override with automatic reset on slide visibility
  const navigationOverride = useNavigationOverride({
    onNext: nextStep,
    onPrev: prevStep,
    isActive,
    slideElement,
    onSlideEnter: () => {
      // Reset when slide becomes visible (entering the slide)
      log(`Slide entered - resetting to step ${initialStep}`)
      reset()
    },
    debug
  })

  return {
    // State
    currentStep: readonly(currentStep),
    maxSteps,
    
    // Methods
    nextStep,
    prevStep,
    reset,
    goToStep,
    
    // Navigation override controls
    ...navigationOverride
  }
}
