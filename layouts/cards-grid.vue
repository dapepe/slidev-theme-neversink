<script setup lang="js">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useStepNavigation } from '../composables/useNavigationOverride.js'
import Card from '../components/Card.vue'

const props = defineProps({
  cards: {
    type: Array,
    default: () => []
  },
  theme: {
    type: String,
    default: 'light',
    validator: (value) => ['light', 'dark'].includes(value)
  },
  color: {
    default: 'dark',
    validator: (value) => ['light', 'dark'].includes(value)
  },
  sequential: {
    type: Boolean,
    default: false
  },
  gridId: {
    type: String,
    default: ''
  }
})

const colorscheme = computed(() => {
  return `company-${props.color}-scheme`
})

// Auto-generate gridId when sequential is enabled
const computedGridId = computed(() => {
  if (props.sequential) {
    // Generate unique ID based on timestamp and random number
    return `nav-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
  }
  return props.gridId || 'static'
})

// Debug: Log cards and props
console.log('Cards Grid Layout - Props:', {
  cards: props.cards,
  sequential: props.sequential,
  theme: props.theme,
  color: props.color,
  gridId: computedGridId.value
})

// Layout reference for visibility detection
const layoutRef = ref(null)

// Use new step navigation composable for sequential reveal
const stepNavigation = useStepNavigation({
  maxSteps: props.cards.length,
  initialStep: props.sequential ? 1 : props.cards.length, // Start at 1 for sequential (first card), show all for non-sequential
  onStepChange: (step, direction) => {
    if (direction === 'next') {
      console.log(`Card ${step} revealed (total visible: ${step})`)
    } else if (direction === 'prev') {
      console.log(`Card ${step + 1} hidden (total visible: ${step})`)
    } else if (direction === 'reset') {
      console.log(`Cards grid reset - showing ${props.sequential ? '1 card' : 'all cards'}`)
    }
  },
  isActive: () => {
    // Only active when sequential mode is enabled and we have cards
    return props.sequential && props.cards.length > 0
  },
  slideElement: layoutRef, // Pass layout ref for visibility detection
  debug: true
})

// Extract current step for template usage
const currentStep = stepNavigation.currentStep

// Check if card should be visible based on current step
const isCardVisible = (index) => {
  if (!props.sequential) {
    console.log(`Card ${index}: Sequential disabled, visible=true`)
    return true
  }
  // In step navigation, step 1 means first card visible, step 2 means first two cards visible, etc.
  const visible = index < currentStep.value
  console.log(`Card ${index}: Sequential enabled, currentStep=${currentStep.value}, visible=${visible}`)
  return visible
}

// Auto layout optimization for max 4 columns - based on total cards, not visible cards
const gridLayout = computed(() => {
  const totalCardCount = props.cards.length
  
  // Auto layout optimization for max 4 columns
  if (totalCardCount === 1) {
    return {
      gridTemplateColumns: '1fr',
      maxWidth: '350px',
      margin: '0 auto'
    }
  } else if (totalCardCount === 2) {
    return {
      gridTemplateColumns: 'repeat(2, 1fr)'
    }
  } else if (totalCardCount === 3) {
    return {
      gridTemplateColumns: 'repeat(3, 1fr)'
    }
  } else if (totalCardCount === 4) {
    return {
      gridTemplateColumns: 'repeat(2, 1fr)'
    }
  } else if (totalCardCount === 5 || totalCardCount === 6) {
    return {
      gridTemplateColumns: 'repeat(3, 1fr)'
    }
  } else if (totalCardCount === 7 || totalCardCount === 8) {
    return {
      gridTemplateColumns: 'repeat(4, 1fr)'
    }
  } else {
    // Fallback for more than 8 cards (shouldn't happen)
    return {
      gridTemplateColumns: 'repeat(4, 1fr)'
    }
  }
})
</script>

<template>
  <div class="slidev-layout cards-grid h-full slidecolor" :class="[colorscheme]" ref="layoutRef">
    <div class="h-full flex flex-col justify-center">
      <!-- Title Slot -->
      <div v-if="$slots.default" class="cards-title mb-8">
        <slot />
      </div>
      
      <!-- Cards Grid -->
      <div class="cards-container" :style="gridLayout">
        <div 
          v-for="(card, index) in props.cards" 
          :key="index"
          class="card-wrapper"
          :class="{ 'card-visible': isCardVisible(index) }"
        >
          <Card
            :headline="card.headline"
            :content="card.content"
            :icon="card.icon"
            :color="card.color"
            :theme="props.theme"
            :animated="card.animated"
            :delay="card.delay"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* ===== CARDS GRID LAYOUT STYLING ===== */
.slidev-layout.cards-grid {
  font-family: var(--company-font-primary);
  padding: var(--company-space-8);
  margin: 0;
}

.cards-container {
  position: relative;
  width: 100%;
  max-width: 1000px;
  min-height: 300px;
  display: grid;
  gap: 1rem;
}

.card-wrapper {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.5s ease;
  pointer-events: none;
  position: relative;
  z-index: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.card-wrapper.card-visible {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
  z-index: 1;
}

/* Ensure cards stretch to fill available height */
.card-wrapper :deep(.card-component) {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.card-wrapper :deep(.card-content) {
  flex: 1;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
}


/* ===== RESPONSIVE BREAKPOINTS FOR MAX 4 COLUMNS ===== */
@media (max-width: 1400px) {
  .cards-container {
    grid-template-columns: repeat(3, 1fr) !important;
  }
}

@media (max-width: 1000px) {
  .cards-container {
    grid-template-columns: repeat(2, 1fr) !important;
  }
}

@media (max-width: 600px) {
  .cards-container {
    grid-template-columns: 1fr !important;
    max-width: 350px;
    margin: 0 auto;
  }
}

/* ===== NAVIGATION HINT ===== */
.navigation-hint {
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 0.75rem 1rem;
  border-radius: 6px;
  font-size: 0.875rem;
  z-index: 10;
  backdrop-filter: blur(4px);
}

.navigation-hint p {
  margin: 0;
  line-height: 1.4;
}

.navigation-hint p:first-child {
  margin-bottom: 0.25rem;
  opacity: 0.9;
}

/* ===== TITLE SLOT STYLING ===== */
.cards-title {
  color: var(--company-text-heading);
}

.cards-title h1 {
  font-family: var(--company-font-heading);
  font-size: var(--company-font-size-4xl);
  font-weight: var(--company-font-weight-bold);
  margin-bottom: 0.5rem;
}

.cards-title h2 {
  font-family: var(--company-font-heading);
  font-size: var(--company-font-size-2xl);
  font-weight: var(--company-font-weight-semibold);
  opacity: 0.8;
}

</style>
