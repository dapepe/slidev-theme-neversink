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
    <div class="task-list" :class="[useMultiColumn ? `task-columns-${tasks.length}` : 'task-columns-1', columnGapClass]" :style="columnGapStyle">
      <!-- Multi-column layout -->
      <div v-if="useMultiColumn" v-for="(column, columnIndex) in tasks" :key="`column-${columnIndex}`" class="task-column">
        <div 
          v-for="(task, taskIndex) in column" 
          :key="`${columnIndex}-${taskIndex}`" 
          :class="[taskItemClass, { 'task-visible': isTaskVisibleInColumn(columnIndex, taskIndex) }]"
          :style="taskItemStyle"
        >
          <div :class="taskGapClass" :style="taskGapStyle">
            <!-- Task Icon -->
            <div class="task-icon flex-shrink-0" :class="[getTaskIconClass(task.status), iconContainerClass]" :style="iconContainerSize ? { width: iconContainerSize, height: iconContainerSize } : {}">
              <!-- Custom Icon (Auto-detected) -->
              <div v-if="task.icon && isAnimatedIcon(task.icon)" class="lottie-container" :style="{ width: iconSize || '2rem', height: iconSize || '2rem' }">
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
                :style="{ width: iconSize || '2rem', height: iconSize || '2rem' }"
                v-html="task.icon"
              ></div>
              <!-- FontAwesome Icon (Custom or Default) -->
              <i v-else :class="[task.icon || getTaskIconFA(task.status), iconClass]" :style="iconSize ? { fontSize: iconSize } : {}"></i>
            </div>
            
            <!-- Task Content -->
            <div class="flex-1 flex flex-col">
              <h3 :class="taskTitleClass" :style="taskTitleStyle" class="flex-1">
                {{ task.title }}
              </h3>
              <div v-if="task.comment" :class="taskCommentClass" :style="taskCommentStyle" class="mt-0.5">
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
        :class="[taskItemClass, { 'task-visible': isTaskVisible(index) }]"
        :style="taskItemStyle"
      >
        <div :class="taskGapClass" :style="taskGapStyle">
          <!-- Task Icon -->
          <div class="task-icon flex-shrink-0" :class="[getTaskIconClass(task.status), iconContainerClass]" :style="iconContainerSize ? { width: iconContainerSize, height: iconContainerSize } : {}">
            <!-- Custom Icon (Auto-detected) -->
            <div v-if="task.icon && isAnimatedIcon(task.icon)" class="lottie-container" :style="{ width: iconSize || '2rem', height: iconSize || '2rem' }">
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
              :style="{ width: iconSize || '2rem', height: iconSize || '2rem' }"
              v-html="task.icon"
            ></div>
            <!-- FontAwesome Icon (Custom or Default) -->
            <i v-else :class="[task.icon || getTaskIconFA(task.status), iconClass]" :style="iconSize ? { fontSize: iconSize } : {}"></i>
          </div>
          
          <!-- Task Content -->
          <div class="flex-1 flex flex-col">
            <h3 :class="taskTitleClass" :style="taskTitleStyle" class="flex-1">
              {{ task.title }}
            </h3>
            <div v-if="task.comment" :class="taskCommentClass" :style="taskCommentStyle" class="mt-0.5">
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
  },
  fontSize: {
    type: String,
    default: '2xl'
  }
})

// Create a ref to the TaskList container element
const taskListRef = ref(null)

// Determine if we're using a multi-column structure (multidimensional array)
const useMultiColumn = computed(() => {
  return props.tasks.length > 0 && Array.isArray(props.tasks[0])
})

// Check if fontSize is a direct CSS value (contains px, rem, em, etc.)
const isDirectFontSize = computed(() => {
  return /^\d+(\.\d+)?(px|rem|em|%|vh|vw)$/i.test(props.fontSize)
})

// Font size classes based on fontSize prop
const taskTitleClass = computed(() => {
  if (isDirectFontSize.value) {
    return 'font-semibold text-black'
  }
  return `text-${props.fontSize} font-semibold text-black`
})

const taskCommentClass = computed(() => {
  if (isDirectFontSize.value) {
    return 'text-gray-600'
  }
  // Scale down comment size relative to title size
  const sizeMap = {
    'xs': 'text-xs',
    'sm': 'text-xs', 
    'base': 'text-sm',
    'lg': 'text-base',
    'xl': 'text-lg',
    '2xl': 'text-lg',
    '3xl': 'text-xl',
    '4xl': 'text-2xl',
    '5xl': 'text-3xl',
    '6xl': 'text-4xl'
  }
  return `${sizeMap[props.fontSize] || 'text-lg'} text-gray-600`
})

// Dynamic font size styles for direct CSS values
const taskTitleStyle = computed(() => {
  if (isDirectFontSize.value) {
    return { fontSize: props.fontSize }
  }
  return {}
})

const taskCommentStyle = computed(() => {
  if (isDirectFontSize.value) {
    // Scale down comment size to 80% of title size
    const numericValue = parseFloat(props.fontSize)
    const unit = props.fontSize.replace(numericValue.toString(), '')
    const commentSize = (numericValue) + unit
    return { fontSize: commentSize }
  }
  return {}
})

// Icon sizing based on fontSize prop
const iconSize = computed(() => {
  if (isDirectFontSize.value) {
    // Use the same size as the title for both width and height
    return props.fontSize
  }
  return null
})

// Icon container size for consistent dimensions
const iconContainerSize = computed(() => {
  if (isDirectFontSize.value) {
    // Make container slightly larger than font size for better visual balance
    const numericValue = parseFloat(props.fontSize)
    const unit = props.fontSize.replace(numericValue.toString(), '')
    const containerSize = (numericValue * 1.2) + unit
    return containerSize
  }
  return null
})

const iconClass = computed(() => {
  if (isDirectFontSize.value) {
    return ''
  }
  // Use the same size as the title
  return `text-${props.fontSize}`
})

// Icon container class for consistent dimensions
const iconContainerClass = computed(() => {
  if (isDirectFontSize.value) {
    return 'flex items-center justify-center'
  }
  // Map Tailwind font sizes to container sizes
  const containerSizeMap = {
    'xs': 'w-3 h-3',
    'sm': 'w-4 h-4', 
    'base': 'w-4 h-4',
    'lg': 'w-5 h-5',
    'xl': 'w-6 h-6',
    '2xl': 'w-6 h-6',
    '3xl': 'w-8 h-8',
    '4xl': 'w-10 h-10',
    '5xl': 'w-12 h-12',
    '6xl': 'w-16 h-16'
  }
  return `flex items-center justify-center ${containerSizeMap[props.fontSize] || 'w-6 h-6'}`
})

// Dynamic spacing based on font size
const taskItemStyle = computed(() => {
  if (isDirectFontSize.value) {
    const numericValue = parseFloat(props.fontSize)
    const unit = props.fontSize.replace(numericValue.toString(), '')
    // Scale margin bottom based on font size (0.05x the font size - much smaller)
    const marginBottom = (numericValue * 0.05) + unit
    return { marginBottom }
  }
  return {}
})

const taskItemClass = computed(() => {
  if (isDirectFontSize.value) {
    return 'task-item'
  }
  // Map Tailwind font sizes to margin classes - much smaller margins
  const marginMap = {
    'xs': 'mb-0',
    'sm': 'mb-0', 
    'base': 'mb-0',
    'lg': 'mb-0',
    'xl': 'mb-0.5',
    '2xl': 'mb-0.5',
    '3xl': 'mb-0.5',
    '4xl': 'mb-1',
    '5xl': 'mb-1',
    '6xl': 'mb-1'
  }
  return `task-item ${marginMap[props.fontSize] || 'mb-0.5'}`
})

const taskGapStyle = computed(() => {
  if (isDirectFontSize.value) {
    const numericValue = parseFloat(props.fontSize)
    const unit = props.fontSize.replace(numericValue.toString(), '')
    // Scale gap based on font size (0.1x the font size - much smaller)
    const gap = (numericValue * 0.1) + unit
    return { gap }
  }
  return {}
})

const taskGapClass = computed(() => {
  if (isDirectFontSize.value) {
    return 'flex items-baseline'
  }
  // Map Tailwind font sizes to gap classes - much smaller gaps
  const gapMap = {
    'xs': 'gap-0',
    'sm': 'gap-0.5', 
    'base': 'gap-0.5',
    'lg': 'gap-0.5',
    'xl': 'gap-1',
    '2xl': 'gap-1',
    '3xl': 'gap-1',
    '4xl': 'gap-1.5',
    '5xl': 'gap-2',
    '6xl': 'gap-2'
  }
  return `flex items-baseline ${gapMap[props.fontSize] || 'gap-1'}`
})

// Dynamic spacing for multi-column layouts
const columnGapStyle = computed(() => {
  if (isDirectFontSize.value) {
    const numericValue = parseFloat(props.fontSize)
    const unit = props.fontSize.replace(numericValue.toString(), '')
    // Scale column gap based on font size (0.25x the font size - much smaller)
    const columnGap = (numericValue * 0.25) + unit
    return { gap: columnGap }
  }
  return {}
})

const columnGapClass = computed(() => {
  if (isDirectFontSize.value) {
    return ''
  }
  // Map Tailwind font sizes to column gap classes - much smaller gaps
  const columnGapMap = {
    'xs': 'gap-0',
    'sm': 'gap-0.5', 
    'base': 'gap-0.5',
    'lg': 'gap-1',
    'xl': 'gap-1',
    '2xl': 'gap-1',
    '3xl': 'gap-1.5',
    '4xl': 'gap-2',
    '5xl': 'gap-2',
    '6xl': 'gap-3'
  }
  return columnGapMap[props.fontSize] || 'gap-1'
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
  padding: 0;
}

/* Multi-column layouts */
.task-columns-1 {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.task-columns-2 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0;
  align-items: start;
}

.task-columns-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
  align-items: start;
}

.task-columns-4 {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
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

/* Reset margins */
.task-item h3 {
  margin: 0;
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

/* PDF/Print: Show all tasks in final state */
@media print {
  .task-item {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
}
</style>
