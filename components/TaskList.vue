<template>
  <div class="task-list-component" ref="taskListRef">
    <!-- Header -->
    <div class="task-header mb-2">
      <h1 v-if="title" class="text-4xl font-bold mb-0">
        {{ title }}
      </h1>
      <div v-if="subtitle" class="text-lg opacity-75">
        {{ subtitle }}
      </div>
    </div>

    <!-- Task List -->
    <div class="task-list">
      <div 
        v-for="(task, index) in tasks" 
        :key="index" 
        class="task-item mb-0.5"
        :class="{ 'task-visible': isTaskVisible(index) }"
      >
        <div class="flex items-center gap-1.5">
          <!-- Task Icon -->
          <div class="task-icon flex-shrink-0 flex items-center justify-center" :class="getTaskIconClass(task.status)">
            <!-- Custom Icon (Auto-detected) -->
            <div v-if="task.icon && isAnimatedIcon(task.icon)" class="lottie-container" style="width: 2rem; height: 2rem;">
              <lottie-player
                :src="task.icon"
                background="transparent"
                speed="1"
                loop
                autoplay
                direction="1"
                mode="normal"
                style="width: 100%; height: 100%;"
              ></lottie-player>
            </div>
            <!-- SVG Icon -->
            <div 
              v-else-if="task.icon && isSvgIcon(task.icon)" 
              class="svg-container"
              style="width: 2rem; height: 2rem;"
              v-html="task.icon"
            ></div>
            <!-- FontAwesome Icon (Custom or Default) -->
            <i v-else :class="task.icon || getTaskIconFA(task.status)" class="text-2xl"></i>
          </div>
          
          <!-- Task Content -->
          <div class="flex-1">
            <h3 class="text-2xl font-semibold text-black">
              {{ task.title }}
            </h3>
            <div v-if="task.comment" class="text-lg text-gray-600">
              {{ task.comment }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue'
import { useStepNavigation } from '../composables/useNavigationOverride.js'
import '@lottiefiles/lottie-player'

const props = defineProps({
  title: {
    type: String,
    default: 'Ongoing tasks'
  },
  subtitle: {
    type: String,
    default: ''
  },
  tasks: {
    type: Array,
    default: () => []
  },
  sequential: {
    type: Boolean,
    default: false
  }
})

// Create a ref to the TaskList container element
const taskListRef = ref(null)

// Sequential navigation - only initialize if sequential is true
let navigation = null
if (props.sequential) {
  navigation = useStepNavigation({
    maxSteps: props.tasks.length,
    initialStep: 1,
    slideElement: taskListRef,
    isActive: () => {
      // Only active when sequential is enabled and element exists
      return props.sequential && taskListRef.value !== null
    },
    debug: true
  })
}

// Check if a task should be visible
const isTaskVisible = (index) => {
  if (!props.sequential || !navigation) return true
  // Show tasks from 0 to currentStep-1 (0-based indexing)
  const visible = index < navigation.currentStep.value
  console.log(`Task ${index}: currentStep=${navigation.currentStep.value}, visible=${visible}`)
  return visible
}

// Auto-detect icon type functions
const isAnimatedIcon = (icon) => {
  return icon && (icon.endsWith('.json') || icon.startsWith('http'))
}

const isSvgIcon = (icon) => {
  return icon && (icon.includes('<svg') || icon.includes('</svg>'))
}

// Task status icon classes
const getTaskIconClass = (status) => {
  switch (status) {
    case 'completed':
      return 'text-green-600'
    case 'error':
      return 'text-red-600'
    case 'in-progress':
      return 'text-blue-600'
    case 'pending':
      return 'text-gray-600'
    default:
      return 'text-gray-600'
  }
}

// Task status Font Awesome icons
const getTaskIconFA = (status) => {
  switch (status) {
    case 'completed':
      return 'fas fa-check-circle'
    case 'error':
      return 'fas fa-exclamation-triangle'
    case 'in-progress':
      return 'fas fa-play-circle'
    case 'pending':
      return 'far fa-circle'
    default:
      return 'far fa-circle'
  }
}
</script>

<style scoped>
.task-list-component {
  padding: 0.5rem;
}

.task-icon i {
  color: inherit !important;
  font-style: normal !important;
}

/* Lottie Animation Styles */
.lottie-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* SVG Icon Styles */
.svg-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.svg-container svg {
  width: 100%;
  height: 100%;
  fill: currentColor;
}

/* Task status colors */
.text-green-600 i {
  color: #16a34a !important;
}

.text-red-600 i {
  color: #dc2626 !important;
}

.text-blue-600 i {
  color: #2563eb !important;
}

.text-gray-600 i {
  color: #4b5563 !important;
}

/* Sequential animation */
.task-item {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease;
}

.task-item.task-visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
