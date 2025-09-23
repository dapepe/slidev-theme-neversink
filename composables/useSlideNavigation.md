# useSlideNavigation Composable

A Vue composable for implementing step-by-step navigation within Slidev presentations. This composable allows you to override the default slide navigation and create custom sequential navigation experiences.

## Features

- **Step-by-step navigation**: Navigate through items one by one
- **Keyboard override**: Intercepts arrow keys and space bar
- **Automatic boundary handling**: Seamlessly transitions to normal slide navigation at boundaries
- **Intersection observer support**: Only activates when component is visible
- **Clean lifecycle management**: Automatically cleans up event listeners

## Installation

The composable is located at `composables/useSlideNavigation.js` and is ready to use.

## Basic Usage

```javascript
import { useSlideNavigation } from '../composables/useSlideNavigation.js'

const {
  currentStep,
  totalSteps,
  isNavigationBlocked,
  startBlocking,
  stopBlocking,
  setTotalSteps,
  reset,
  goToStep
} = useSlideNavigation({
  enableNavigation: true,
  navInstance: $slidev?.nav,
  currentLayout: 'your-layout-name',
  onNext: (step) => {
    console.log(`Advanced to step ${step + 1}`)
  },
  onPrev: (step) => {
    console.log(`Went back to step ${step + 1}`)
  },
  onComplete: () => {
    console.log('All steps completed, allowing slide navigation')
  }
})
```

## Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `enableNavigation` | Boolean | `true` | Enable/disable the navigation override |
| `navInstance` | Object | `null` | Slidev navigation instance (usually `$slidev?.nav`) |
| `currentLayout` | String | `null` | Current layout name (used for conditional activation) |
| `onNext` | Function | `null` | Callback when advancing to next step |
| `onPrev` | Function | `null` | Callback when going back to previous step |
| `onComplete` | Function | `null` | Callback when all steps are completed |

## Return Values

| Property | Type | Description |
|----------|------|-------------|
| `currentStep` | Ref<Number> | Current step index (0-based) |
| `totalSteps` | Ref<Number> | Total number of steps |
| `isNavigationBlocked` | Ref<Boolean> | Whether navigation is currently blocked |
| `startBlocking` | Function | Start the navigation override |
| `stopBlocking` | Function | Stop the navigation override |
| `setTotalSteps` | Function | Set the total number of steps |
| `reset` | Function | Reset to first step |
| `goToStep` | Function | Jump to a specific step |

## Complete Example

Here's a complete example of how to implement sequential navigation in a layout:

```vue
<script setup lang="js">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useSlideNavigation } from '../composables/useSlideNavigation.js'

const props = defineProps({
  items: {
    type: Array,
    default: () => []
  },
  enableNavigation: {
    type: Boolean,
    default: true
  }
})

// Use the slide navigation composable
const {
  currentStep,
  totalSteps,
  isNavigationBlocked,
  startBlocking,
  stopBlocking,
  setTotalSteps,
  goToStep
} = useSlideNavigation({
  enableNavigation: props.enableNavigation,
  navInstance: $slidev?.nav,
  currentLayout: 'your-layout-name',
  onNext: (step) => {
    console.log(`Advanced to step ${step + 1}`)
  },
  onPrev: (step) => {
    console.log(`Went back to step ${step + 1}`)
  },
  onComplete: () => {
    console.log('All steps completed, allowing slide navigation')
  }
})

// Intersection Observer for visibility detection
let observer = null
const isDestroyed = ref(false)

// Initialize navigation with intersection observer
onMounted(() => {
  if (!props.enableNavigation) return
  
  // Create intersection observer to detect when component is visible
  observer = new IntersectionObserver((entries) => {
    if (isDestroyed.value) return
    
    entries.forEach(entry => {
      if (isDestroyed.value) return
      
      if (entry.isIntersecting) {
        // Component is visible - start navigation override
        setTotalSteps(props.items.length)
        startBlocking()
      } else {
        // Component is not visible - stop navigation override
        stopBlocking()
      }
    })
  }, {
    threshold: 0.1 // Trigger when 10% of component is visible
  })
  
  // Start observing the component
  const component = document.querySelector('.your-layout-class')
  if (component) {
    observer.observe(component)
  }
})

// Cleanup navigation when component unmounts
onUnmounted(() => {
  isDestroyed.value = true
  
  if (observer) {
    observer.disconnect()
    observer = null
  }
  
  if (props.enableNavigation) {
    stopBlocking()
  }
})

// Helper functions
const getItemClass = (index) => {
  const isCurrent = index === currentStep.value
  return isCurrent ? 'item-current' : 'item'
}

const canGoNext = computed(() => {
  if (!props.enableNavigation) return true
  return currentStep.value >= props.items.length - 1
})
</script>

<template>
  <div class="your-layout-class">
    <div class="items">
      <div 
        v-for="(item, index) in props.items" 
        :key="index" 
        :class="getItemClass(index)"
        @click="enableNavigation && goToStep(index)"
        :style="{ cursor: enableNavigation ? 'pointer' : 'default' }"
      >
        {{ item.title || item }}
      </div>
    </div>
    
    <!-- Navigation hint -->
    <div v-if="enableNavigation && !canGoNext" class="navigation-hint">
      <p>Click on items or use arrow keys to progress</p>
      <p><strong>Current: {{ currentStep + 1 }} / {{ props.items.length }}</strong></p>
    </div>
  </div>
</template>
```

## Navigation Behavior

### Keyboard Controls
- **Right Arrow** or **Space**: Advance to next step
- **Left Arrow**: Go back to previous step

### Boundary Handling
- **At first step + Left Arrow**: Goes to previous slide
- **At last step + Right Arrow**: Goes to next slide
- **Completed all steps**: Automatically allows normal slide navigation

### Visual Feedback
- Current step is highlighted
- Navigation hints show progress
- Smooth transitions between steps

## Best Practices

1. **Always use intersection observer**: Only activate navigation when component is visible
2. **Clean up properly**: Remove event listeners and observers on unmount
3. **Handle boundaries**: Let users navigate to other slides when appropriate
4. **Provide visual feedback**: Show current step and progress
5. **Make it optional**: Allow disabling the navigation override

## Troubleshooting

### Navigation not working
- Check that `navInstance` is properly passed (`$slidev?.nav`)
- Ensure `currentLayout` matches your layout name
- Verify that `enableNavigation` is `true`

### Navigation stuck
- Check that `totalSteps` is set correctly
- Ensure the component is visible (intersection observer)
- Verify that keyboard events are not being blocked by other components

### Memory leaks
- Always call `stopBlocking()` in `onUnmounted`
- Disconnect intersection observers
- Remove event listeners properly

## Examples in Codebase

- **Agenda Layout**: See `layouts/agenda.vue` for a commented example
- **Credit Scroll**: See `components/CreditScroll.vue` for intersection observer pattern

## API Reference

### Methods

#### `startBlocking()`
Starts the navigation override. Only works if:
- `enableNavigation` is `true`
- `navInstance` is provided
- `currentLayout` matches the current layout

#### `stopBlocking()`
Stops the navigation override and restores normal slide navigation.

#### `setTotalSteps(steps)`
Sets the total number of steps for navigation.

#### `goToStep(step)`
Jumps to a specific step (0-based index).

#### `reset()`
Resets to the first step and stops blocking.

### Reactive Properties

#### `currentStep`
Current step index (0-based). Updates automatically when navigating.

#### `totalSteps`
Total number of steps. Set via `setTotalSteps()`.

#### `isNavigationBlocked`
Whether navigation is currently being blocked. `true` when override is active.
