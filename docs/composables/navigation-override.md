# Navigation Override System

The global navigation override system provides a reusable way to add step-by-step interactions to any Slidev layout or component. It automatically handles slide visibility detection and provides both keyboard and Slidev navigation integration.

## Composables

### `useStepNavigation(options)`

High-level composable for step-based navigation (recommended for most use cases).

```javascript
import { useStepNavigation } from '../composables/useNavigationOverride.js'

const stepNavigation = useStepNavigation({
  maxSteps: 5,                    // Total number of steps
  initialStep: 1,                 // Starting step (default: 1)
  slideElement: layoutRef,        // Vue ref for visibility detection
  onStepChange: (step, direction) => {
    // Handle step changes
    console.log(`Step ${step}, direction: ${direction}`)
  },
  isActive: () => true,           // Custom activation logic
  debug: true                     // Enable debug logging
})
```

### `useNavigationOverride(options)`

Low-level composable for custom navigation handling.

```javascript
import { useNavigationOverride } from '../composables/useNavigationOverride.js'

const navigationOverride = useNavigationOverride({
  onNext: () => {
    // Handle next navigation
    // Return true if handled, false to allow default navigation
    return true
  },
  onPrev: () => {
    // Handle previous navigation
    // Return true if handled, false to allow default navigation
    return true
  },
  slideElement: layoutRef,        // Vue ref for visibility detection
  isActive: () => true,           // Custom activation logic
  debug: true                     // Enable debug logging
})
```

## Examples

### Cards Grid Layout

Sequential card reveal with navigation override:

```vue
<script setup>
import { ref } from 'vue'
import { useStepNavigation } from '../composables/useNavigationOverride.js'

const layoutRef = ref(null)
const cards = [/* card data */]

const stepNavigation = useStepNavigation({
  maxSteps: cards.length,
  initialStep: 0, // Start with no cards visible
  slideElement: layoutRef,
  onStepChange: (step, direction) => {
    console.log(`Card ${step} ${direction === 'next' ? 'shown' : 'hidden'}`)
  },
  isActive: () => cards.length > 0,
  debug: true
})

const isCardVisible = (index) => {
  return index < stepNavigation.currentStep.value
}
</script>

<template>
  <div ref="layoutRef" class="cards-container">
    <div 
      v-for="(card, index) in cards"
      :key="index"
      :class="{ 'visible': isCardVisible(index) }"
    >
      <!-- Card content -->
    </div>
  </div>
</template>
```

### Custom Animation Layout

```vue
<script setup>
import { ref } from 'vue'
import { useStepNavigation } from '../composables/useNavigationOverride.js'

const animationRef = ref(null)
const animations = ['fadeIn', 'slideUp', 'bounce', 'rotate']

const stepNavigation = useStepNavigation({
  maxSteps: animations.length,
  slideElement: animationRef,
  onStepChange: (step, direction) => {
    if (direction === 'next') {
      triggerAnimation(animations[step - 1])
    } else if (direction === 'prev') {
      reverseAnimation(animations[step])
    }
  }
})

const triggerAnimation = (animationType) => {
  // Custom animation logic
}
</script>
```

### Interactive Diagram

```vue
<script setup>
import { ref } from 'vue'
import { useNavigationOverride } from '../composables/useNavigationOverride.js'

const diagramRef = ref(null)
let currentHighlight = 0
const maxHighlights = 4

const navigationOverride = useNavigationOverride({
  slideElement: diagramRef,
  onNext: () => {
    if (currentHighlight < maxHighlights) {
      highlightElement(currentHighlight++)
      return true // Handled
    }
    return false // Allow slide navigation
  },
  onPrev: () => {
    if (currentHighlight > 0) {
      unhighlightElement(--currentHighlight)
      return true // Handled
    }
    return false // Allow slide navigation
  },
  isActive: () => maxHighlights > 0
})
</script>
```

## Features

### ✅ Automatic Slide Visibility Detection
- Uses `IntersectionObserver` to detect when slides are visible
- Only intercepts navigation when the slide is actually shown
- Automatically deactivates when slide is hidden

### ✅ Dual Navigation Methods
- **Primary**: Direct keyboard event interception (highest priority)
- **Fallback**: Slidev navigation function override
- Handles both arrow keys and spacebar

### ✅ Smart Event Handling
- `preventDefault()`, `stopPropagation()`, `stopImmediatePropagation()`
- Capture phase event handling for maximum priority
- Automatic cleanup on component unmount

### ✅ Debug Support
- Comprehensive logging when `debug: true`
- Tracks visibility changes, step changes, and navigation events
- Helps troubleshoot integration issues

## Integration Checklist

When adding navigation override to a layout:

1. **Import the composable**
   ```javascript
   import { useStepNavigation } from '../composables/useNavigationOverride.js'
   ```

2. **Create a layout reference**
   ```javascript
   const layoutRef = ref(null)
   ```

3. **Setup the composable**
   ```javascript
   const stepNavigation = useStepNavigation({
     maxSteps: yourStepCount,
     slideElement: layoutRef,
     onStepChange: yourStepHandler,
     isActive: () => yourCondition
   })
   ```

4. **Add ref to template**
   ```vue
   <div ref="layoutRef" class="your-layout">
   ```

5. **Use step state in template**
   ```vue
   :class="{ 'visible': index < stepNavigation.currentStep.value }"
   ```

## Migration from Old System

If you have existing navigation code:

### Before (old `useSlideNavigation`)
```javascript
const { currentStep, startBlocking, stopBlocking } = useSlideNavigation({
  enableNavigation: true,
  navInstance: $slidev?.nav,
  onNext: handleNext
})
```

### After (new `useStepNavigation`)
```javascript
const stepNavigation = useStepNavigation({
  maxSteps: totalSteps,
  slideElement: layoutRef,
  onStepChange: (step, direction) => {
    if (direction === 'next') handleNext(step)
  }
})
```

The new system automatically handles:
- Slide visibility detection (no manual observer needed)
- Navigation blocking/unblocking (automatic)
- Cleanup (automatic)
- Keyboard event handling (automatic)

## Troubleshooting

### Navigation not working?
1. Enable debug mode: `debug: true`
2. Check console for visibility and activation logs
3. Ensure `slideElement` ref is properly attached
4. Verify `isActive()` returns `true`

### Multiple layouts interfering?
- Each layout gets its own navigation scope
- Visibility detection ensures only active slide intercepts navigation
- No manual coordination needed between layouts

### Performance concerns?
- Uses efficient `IntersectionObserver` for visibility detection
- Event listeners are automatically cleaned up
- Minimal overhead when inactive
