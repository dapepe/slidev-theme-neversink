<template>
  <div ref="timelineElement" class="timeline-component">
    <h1 v-if="title" class="timeline-title">
      {{ title }} <span v-if="subtitle">{{ subtitle }}</span>
    </h1>
    
    <div class="flex-parent">
      <div class="input-flex-container">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="input"
          :class="{ active: activeIndex === index }"
          @click="selectItem(index)"
        >
          <span :data-year="item.year" :data-info="item.label"></span>
        </div>
      </div>
      
      <div class="description-flex-container">
        <p
          v-for="(item, index) in items"
          :key="index"
          :class="{ active: activeIndex === index }"
        >
          {{ item.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useStepNavigation } from '../composables/useNavigationOverride.js'

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  subtitle: {
    type: String,
    default: ''
  },
  items: {
    type: Array,
    required: true,
    // Example: [{ year: '2020', label: 'Event', description: 'Description' }]
  },
  defaultActive: {
    type: Number,
    default: 0
  },
  enableNavigation: {
    type: Boolean,
    default: true
  }
})

const activeIndex = ref(props.defaultActive)
const timelineElement = ref(null)

// Dynamic sizing based on number of items
const DOT_SIZE = 25           // px - diameter of each dot
const LINE_HEIGHT = 5         // px - thickness of connecting lines

const numItems = computed(() => props.items.length)

const selectItem = (index) => {
  activeIndex.value = index
}

// Setup navigation override for arrow key navigation
const { currentStep } = useStepNavigation({
  maxSteps: numItems.value,
  initialStep: props.defaultActive + 1, // Steps are 1-based
  onStepChange: (step) => {
    activeIndex.value = step - 1 // Convert back to 0-based index
  },
  isActive: () => props.enableNavigation,
  slideElement: timelineElement,
  debug: false
})

onMounted(() => {
  // Ensure there's a default active item
  if (props.items && props.items.length > 0 && activeIndex.value >= props.items.length) {
    activeIndex.value = 0
  }
})
</script>

<style scoped>
/* ===== Timeline Component Styles ===== */

/* Main container */
.timeline-component {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0 25px;
  font-family: var(--company-font-primary, 'Quicksand', sans-serif);
  font-weight: 500;
  color: var(--company-text-primary, #424949);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Title */
.timeline-title {
  text-align: center;
  height: 38px;
  margin: 30px 0 40px 0;
  font-size: 1.8rem;
  font-weight: 500;
  color: var(--company-text-primary, #424949);
}

.timeline-title span {
  white-space: nowrap;
}

/* Layout containers */
.flex-parent {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.input-flex-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  position: relative;
  z-index: 1;
}

/* Timeline dot */
.input {
  width: v-bind('DOT_SIZE + "px"');
  height: v-bind('DOT_SIZE + "px"');
  background-color: #2C3E50;
  position: relative;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease;
  z-index: 2;
}

/* Connecting line to next dot (only ::after) */
.input::after {
  content: '';
  position: absolute;
  z-index: -1;
  top: 50%;
  left: 100%;
  transform: translateY(-50%);
  width: 100vw;
  height: v-bind('LINE_HEIGHT + "px"');
  background-color: #2C3E50 !important;
  background-image: none !important;
}

/* Hide line on last dot */
.input:last-child::after {
  display: none;
}

/* Extended line on first dot (left side) */
.input:first-child::before {
  content: '';
  position: absolute;
  z-index: -1;
  top: 50%;
  right: 100%;
  transform: translateY(-50%);
  width: 50px;
  height: v-bind('LINE_HEIGHT + "px"');
  background-color: #AEB6BF !important;
  background-image: none !important;
}

/* Extended line on last dot (right side) */
.input:last-child::before {
  content: '';
  position: absolute;
  z-index: -1;
  top: 50%;
  left: 100%;
  transform: translateY(-50%);
  width: 50px;
  height: v-bind('LINE_HEIGHT + "px"');
  background-color: #AEB6BF !important;
  background-image: none !important;
}

/* Active state - line after active dot is gray */
.input.active::after {
  background-color: #AEB6BF !important;
}

.input.active span::before,
.input.active span::after {
  font-weight: 700 !important;
}

/* Inactive state (all dots after active) */
.input.active ~ .input {
  background-color: #AEB6BF;
}

.input.active ~ .input::after {
  background-color: #AEB6BF !important;
  background-image: none !important;
}

/* Hidden container for pseudo-element labels */
.input span {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  visibility: hidden;
}

/* Shared label styles */
.input span::before,
.input span::after {
  visibility: visible;
  position: absolute;
  left: 50%;
  z-index: 10;
  font-family: var(--company-font-primary, -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif);
  font-weight: 400 !important;
  line-height: 1;
  white-space: nowrap;
  color: var(--company-text-primary, #424949) !important;
  background: none !important;
  background-image: none !important;
  pointer-events: none;
}

/* Year label (below dot) */
.input span::after {
  content: attr(data-year);
  top: 30px;
  transform: translateX(-50%);
  font-size: 13px;
}

/* Event label (above dot, rotated) */
.input span::before {
  content: attr(data-info);
  top: -60px;
  transform: translateX(-50%) rotateZ(-45deg);
  transform-origin: center center;
  font-size: 11px;
}

/* Description container */
.description-flex-container {
  width: 100%;
  margin-top: 60px;
  font-size: 20px;
  font-weight: 400;
  color: var(--company-text-primary, #424949);
  text-align: center;
}

.description-flex-container p {
  margin-top: 0;
  display: none;
}

.description-flex-container p.active {
  display: block;
}
</style>