<script setup lang="js">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useSlideNavigation } from '../composables/useSlideNavigation.js'

const props = defineProps({
  color: {
    default: 'dark',
    validator: (value) => ['light', 'dark'].includes(value)
  },
  agenda: {
    type: Array,
    default: () => []
  },
  title: {
    type: String,
    default: 'AGENDA'
  },
  enableAgendaNavigation: {
    type: Boolean,
    default: true
  }
})

const colorscheme = computed(() => {
  return `company-${props.color}-scheme`
})

const agendaItems = computed(() => {
  return props.agenda || []
})

// Use the slide navigation composable
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
  enableNavigation: props.enableAgendaNavigation,
  navInstance: $slidev?.nav, // Pass navigation instance
  currentLayout: 'agenda', // Pass current layout
  onNext: (step) => {
    console.log(`Agenda: Advanced to step ${step + 1}`)
  },
  onPrev: (step) => {
    console.log(`Agenda: Went back to step ${step + 1}`)
  },
  canGoNext: () => currentStep.value < totalSteps.value - 1,
  canGoPrev: () => currentStep.value > 0,
  onComplete: () => {
    console.log('Agenda: All items completed, allowing slide navigation')
  }
})

const getItemClass = (index) => {
  const isCurrent = index === currentStep.value
  return isCurrent ? 'agenda-item-current' : 'agenda-item'
}

const canGoNext = computed(() => {
  if (!props.enableAgendaNavigation) return true
  return currentStep.value >= agendaItems.value.length - 1
})

// Intersection Observer for visibility detection
let observer = null
const isDestroyed = ref(false)

// Initialize navigation with intersection observer
onMounted(() => {
  if (!props.enableAgendaNavigation) return
  
  // Create intersection observer to detect when component is visible
  observer = new IntersectionObserver((entries) => {
    // Check if component is still alive
    if (isDestroyed.value) return
    
    entries.forEach(entry => {
      if (isDestroyed.value) return // Double check during forEach
      
      if (entry.isIntersecting) {
        // Component is visible - start navigation override
        setTotalSteps(agendaItems.value.length)
        startBlocking()
      } else {
        // Component is not visible - stop navigation override
        stopBlocking()
      }
    })
  }, {
    threshold: 0.1 // Trigger when 10% of component is visible
  })
  
  // Start observing the agenda container
  const agendaContainer = document.querySelector('.slidev-layout.agenda')
  if (agendaContainer) {
    observer.observe(agendaContainer)
  }
})

// Cleanup navigation when component unmounts
onUnmounted(() => {
  isDestroyed.value = true
  
  if (observer) {
    observer.disconnect()
    observer = null
  }
  
  if (props.enableAgendaNavigation) {
    stopBlocking()
  }
})
</script>

<template>
  <div class="slidev-layout agenda h-full slidecolor" :class="[colorscheme]">
    <div class="h-full flex flex-col justify-start">
      <!-- Header -->
      <div class="agenda-header">
        <h1 class="agenda-title">{{ props.title }}</h1>
      </div>
      
      <!-- Agenda Items -->
      <div class="agenda-content">
        <div 
          v-for="(item, index) in agendaItems" 
          :key="index" 
          :class="getItemClass(index)"
          @click="enableAgendaNavigation && goToStep(index)"
          :style="{ cursor: enableAgendaNavigation ? 'pointer' : 'default' }"
        >
          <span class="agenda-item-text">{{ item.title || item }}</span>
        </div>
      </div>
      
    </div>
  </div>
</template>

<style scoped>
/* ===== AGENDA LAYOUT STYLING ===== */
.slidev-layout.agenda {
  font-family: var(--company-font-primary);
  padding: var(--company-space-8);
  margin: 0;
}

/* Header styling */
.agenda-header {
  margin-bottom: 5rem;
}

.agenda-title {
  font-family: var(--company-font-heading);
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  margin: 0;
  padding: 0;
  line-height: 1.1;
}

/* Content area */
.agenda-content {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

/* Agenda items */
.agenda-item {
  width:60%;
  padding:0.75rem 0rem 0.75rem 6rem;
  transition: all 0.3s ease;
}

.agenda-item-text {
  font-family: var(--company-font-heading);
  font-size: 1.5rem;
  font-weight: 400;
  letter-spacing: 0.02em;
  line-height: 1.3;
}

/* Current/highlighted item */
.agenda-item-current {
  margin: 0;
  border-radius: 0;
  position: relative;
  padding:0.75rem 0rem 0.75rem 6rem;
  max-width: 80%;
}

.agenda-item-current .agenda-item-text {
  font-weight: 700;
  text-align: left;
  display: block;
  width: 100%;
}

/* Navigation hint */
.agenda-navigation-hint {
  margin-top: 2rem;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  text-align: center;
}

.agenda-navigation-hint p {
  margin: 0;
  font-size: 0.9rem;
  opacity: 0.8;
}

/* ===== LIGHT SCHEME ===== */
.company-light-scheme.slidev-layout.agenda {
  background-color: var(--company-agenda-bg);
  color: var(--company-agenda-item-color);
}

.company-light-scheme.slidev-layout .agenda-title {
  color: var(--company-agenda-title-color);
}

.company-light-scheme.slidev-layout .agenda-item-text {
  color: var(--company-agenda-item-color);
}

.company-light-scheme.slidev-layout .agenda-item-current {
  background-color: var(--company-agenda-current-bg);
}

.company-light-scheme.slidev-layout .agenda-item-current .agenda-item-text {
  color: var(--company-agenda-current-text);
}

/* ===== DARK SCHEME ===== */
.company-dark-scheme.slidev-layout.agenda {
  background-color: var(--company-agenda-bg-dark);
  color: var(--company-agenda-item-color-dark);
}

.company-dark-scheme.slidev-layout .agenda-title {
  color: var(--company-agenda-title-color-dark);
}

.company-dark-scheme.slidev-layout .agenda-item-text {
  color: var(--company-agenda-item-color-dark);
}

.company-dark-scheme.slidev-layout .agenda-item-current {
  background-color: var(--company-agenda-current-bg-dark);
}

.company-dark-scheme.slidev-layout .agenda-item-current .agenda-item-text {
  color: var(--company-agenda-current-text-dark);
}

/* ===== RESPONSIVE ADJUSTMENTS ===== */
@media (max-width: 768px) {
  .agenda-title {
    font-size: 2.5rem;
  }
  
  .agenda-item-text {
    font-size: 1.25rem;
  }
}

@media (max-width: 480px) {
  .agenda-title {
    font-size: 2rem;
  }
  
  .agenda-item-text {
    font-size: 1.125rem;
  }
  
  .agenda-item-current {
    padding: 0.5rem 1rem;
    margin: 0 -1rem;
  }
}
</style>
