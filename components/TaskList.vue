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
    <div class="task-list" :class="useMultiColumn ? `task-columns-${tasks.length}` : 'task-columns-1'">
      <!-- Multi-column layout -->
      <div v-if="useMultiColumn" v-for="(column, columnIndex) in tasks" :key="`column-${columnIndex}`" class="task-column">
        <div 
          v-for="(task, taskIndex) in column" 
          :key="`${columnIndex}-${taskIndex}`" 
          class="task-item mb-0.5"
          :class="{ 'task-visible': isTaskVisibleInColumn(columnIndex, taskIndex) }"
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
      
      <!-- Legacy single array layout -->
      <div v-else 
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

// Determine if we're using a multi-column structure (multidimensional array)
const useMultiColumn = computed(() => {
  return props.tasks.length > 0 && Array.isArray(props.tasks[0])
})

// Calculate total tasks for navigation
const totalTasks = computed(() => {
  if (useMultiColumn.value) {
    return props.tasks.reduce((total, column) => total + column.length, 0)
  }
  return props.tasks.length
})

// Sequential navigation - only initialize if sequential is true
let navigation = null
if (props.sequential) {
  navigation = useStepNavigation({
    maxSteps: totalTasks.value,
    initialStep: 1,
    slideElement: taskListRef,
    isActive: () => {
      // Only active when sequential is enabled and element exists
      return props.sequential && taskListRef.value !== null
    },
    debug: true
  })
}

// Check if a task should be visible (legacy single array)
const isTaskVisible = (index) => {
  if (!props.sequential || !navigation) return true
  
  // Single column: show tasks from 0 to currentStep-1 (0-based indexing)
  const visible = index < navigation.currentStep.value
  console.log(`Task ${index}: currentStep=${navigation.currentStep.value}, visible=${visible}`)
  return visible
}

// Check if a task should be visible in column-based layout
const isTaskVisibleInColumn = (columnIndex, taskIndex) => {
  if (!props.sequential || !navigation) return true
  
  // Calculate the global task index for this column/task combination
  let globalIndex = 0
  for (let i = 0; i < columnIndex; i++) {
    globalIndex += props.tasks[i].length
  }
  globalIndex += taskIndex
  
  // Show tasks from 0 to currentStep-1 (0-based indexing)
  const visible = globalIndex < navigation.currentStep.value
  console.log(`Column ${columnIndex}, Task ${taskIndex} (global ${globalIndex}): step=${navigation.currentStep.value}, visible=${visible}`)
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

/* Multi-column layouts */
.task-columns-1 {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.task-columns-2 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  align-items: start;
}

.task-columns-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  align-items: start;
}

.task-columns-4 {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  align-items: start;
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
