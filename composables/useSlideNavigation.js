import { ref, onUnmounted } from 'vue'

/**
 * Vue composable for controlling slide navigation
 * Provides step-by-step navigation within slides
 */
export function useSlideNavigation(options = {}) {
  const {
    enableNavigation = true,
    onNext = null,
    onPrev = null,
    onComplete = null,
    navInstance = null,
    currentLayout = null
  } = options

  const isNavigationBlocked = ref(false)
  const currentStep = ref(0)
  const totalSteps = ref(1)

  // Navigation override state
  let originalNext = null
  let originalPrev = null
  let isOverridden = false

  // Create custom next navigation function
  const createCustomNext = () => {
    return () => {
      const canAdvance = currentStep.value < totalSteps.value - 1
      
      if (canAdvance) {
        // Advance to next step
        currentStep.value++
        
        if (onNext) {
          onNext(currentStep.value)
        }
        
        // Check if we've completed all steps
        if (currentStep.value >= totalSteps.value) {
          stopBlockingAndNavigate('next')
        }
        return true
      } else {
        // At last item - go to next slide
        stopBlockingAndNavigate('next')
        return true
      }
    }
  }

  // Create custom previous navigation function
  const createCustomPrev = () => {
    return () => {
      const canGoBack = currentStep.value > 0
      
      if (canGoBack) {
        // Go back to previous step
        currentStep.value--
        
        if (onPrev) {
          onPrev(currentStep.value)
        }
        
        // Check if we're at the beginning
        if (currentStep.value < 0) {
          stopBlockingAndNavigate('prev')
        }
        return true
      } else {
        // At first item - go to previous slide
        stopBlockingAndNavigate('prev')
        return true
      }
    }
  }

  // Helper function to stop blocking and navigate to next/prev slide
  const stopBlockingAndNavigate = (direction) => {
    isNavigationBlocked.value = false
    
    if (onComplete) {
      onComplete()
    }
    
    // Get original function before restoring
    const originalFunction = direction === 'next' ? originalNext : originalPrev
    
    // Restore original navigation
    restoreNavigation()
    
    // Call original function to navigate
    if (originalFunction) {
      return originalFunction()
    }
  }

  // Override navigation functions
  const overrideNavigation = () => {
    if (!navInstance || isOverridden) return false

    // Store original functions
    originalNext = navInstance.next
    originalPrev = navInstance.prev
    isOverridden = true

    // Override functions
    navInstance.next = createCustomNext()
    navInstance.prev = createCustomPrev()

    return true
  }

  // Restore original navigation functions
  const restoreNavigation = () => {
    if (!navInstance || !isOverridden || !originalNext || !originalPrev) {
      return false
    }

    // Restore original functions
    navInstance.next = originalNext
    navInstance.prev = originalPrev

    isOverridden = false
    return true
  }

  // Keyboard event handler
  const handleKeydown = (event) => {
    if (!isNavigationBlocked.value) return
    
    if (event.key === 'ArrowRight' || event.key === ' ') {
      event.preventDefault()
      event.stopPropagation()
      createCustomNext()()
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault()
      event.stopPropagation()
      createCustomPrev()()
    }
  }

  // Start blocking navigation
  const startBlocking = () => {
    if (!enableNavigation || !navInstance) {
      return
    }

    const success = overrideNavigation()
    if (success) {
      isNavigationBlocked.value = true
      document.addEventListener('keydown', handleKeydown, true)
    }
  }

  // Stop blocking navigation
  const stopBlocking = () => {
    document.removeEventListener('keydown', handleKeydown, true)
    restoreNavigation()
    isNavigationBlocked.value = false
  }

  // Set total steps
  const setTotalSteps = (steps) => {
    totalSteps.value = steps
  }

  // Reset to first step
  const reset = () => {
    currentStep.value = 0
    isNavigationBlocked.value = false
  }

  // Jump to specific step
  const goToStep = (step) => {
    if (step >= 0 && step < totalSteps.value) {
      currentStep.value = step
    }
  }

  // Cleanup on unmount
  onUnmounted(() => {
    stopBlocking()
  })

  return {
    currentStep,
    totalSteps,
    isNavigationBlocked,
    startBlocking,
    stopBlocking,
    setTotalSteps,
    reset,
    goToStep
  }
}
