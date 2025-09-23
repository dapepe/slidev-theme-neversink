<script setup lang="js">
import { computed, ref } from 'vue'

const props = defineProps({
  tasks: {
    type: Array,
    required: true,
    default: () => []
  },
  showProgress: {
    type: Boolean,
    default: true
  },
  color: {
    type: String,
    default: 'white'
  },
  layout: {
    type: String,
    default: 'list', // 'list', 'grid', 'timeline'
    validator: (value) => ['list', 'grid', 'timeline'].includes(value)
  }
})

const colorscheme = computed(() => {
  return `company-${props.color}-scheme`
})

const taskStats = computed(() => {
  const total = props.tasks.length
  const completed = props.tasks.filter(task => task.status === 'done').length
  const inProgress = props.tasks.filter(task => task.status === 'ongoing').length
  const pending = props.tasks.filter(task => task.status === 'pending').length
  const feedback = props.tasks.filter(task => task.status === 'feedback').length
  
  return { total, completed, inProgress, pending, feedback }
})

const progressPercentage = computed(() => {
  if (taskStats.value.total === 0) return 0
  return Math.round((taskStats.value.completed / taskStats.value.total) * 100)
})

const getStatusIcon = (status) => {
  const iconMap = {
    'done': 'fa-check-circle',
    'ongoing': 'fa-spinner',
    'pending': 'fa-clock',
    'feedback': 'fa-comments',
    'blocked': 'fa-exclamation-triangle',
    'cancelled': 'fa-times-circle'
  }
  return iconMap[status] || 'fa-circle'
}

const getStatusColor = (status) => {
  const colorMap = {
    'done': '#10b981', // green
    'ongoing': '#3b82f6', // blue
    'pending': '#6b7280', // gray
    'feedback': '#f59e0b', // amber
    'blocked': '#ef4444', // red
    'cancelled': '#9ca3af' // gray-400
  }
  return colorMap[status] || '#6b7280'
}

const getStatusText = (status) => {
  const textMap = {
    'done': 'Completed',
    'ongoing': 'In Progress',
    'pending': 'Pending',
    'feedback': 'Awaiting Feedback',
    'blocked': 'Blocked',
    'cancelled': 'Cancelled'
  }
  return textMap[status] || status
}

const getTaskClass = (task) => {
  const baseClass = 'task-item p-4 rounded-lg border-l-4 transition-all duration-300'
  const statusClass = `status-${task.status}`
  return `${baseClass} ${statusClass}`
}
</script>

<template>
  <div class="task-overview-container" :class="[colorscheme]">
    <!-- Progress Header -->
    <div v-if="showProgress" class="progress-header mb-8">
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-2xl font-bold">Task Overview</h2>
        <div class="text-sm text-gray-600">
          {{ taskStats.completed }} of {{ taskStats.total }} completed
        </div>
      </div>
      
      <!-- Progress Bar -->
      <div class="w-full bg-gray-200 rounded-full h-3 mb-4">
        <div 
          class="bg-green-500 h-3 rounded-full transition-all duration-500"
          :style="{ width: `${progressPercentage}%` }"
        ></div>
      </div>
      
      <!-- Status Legend -->
      <div class="flex flex-wrap gap-4 text-sm">
        <div class="flex items-center gap-2">
          <i class="fas fa-check-circle text-green-500"></i>
          <span>{{ taskStats.completed }} Done</span>
        </div>
        <div class="flex items-center gap-2">
          <i class="fas fa-spinner text-blue-500"></i>
          <span>{{ taskStats.inProgress }} In Progress</span>
        </div>
        <div class="flex items-center gap-2">
          <i class="fas fa-clock text-gray-500"></i>
          <span>{{ taskStats.pending }} Pending</span>
        </div>
        <div v-if="taskStats.feedback > 0" class="flex items-center gap-2">
          <i class="fas fa-comments text-amber-500"></i>
          <span>{{ taskStats.feedback }} Feedback</span>
        </div>
      </div>
    </div>
    
    <!-- Tasks List -->
    <div class="tasks-container">
      <div v-if="layout === 'list'" class="space-y-3">
        <div
          v-for="(task, index) in tasks"
          :key="index"
          :class="getTaskClass(task)"
          :style="{ borderLeftColor: getStatusColor(task.status) }"
        >
          <div class="flex items-start gap-3">
            <div class="flex-shrink-0 mt-1">
              <i 
                :class="['fas', getStatusIcon(task.status)]"
                :style="{ color: getStatusColor(task.status) }"
              ></i>
            </div>
            <div class="flex-1">
              <h3 class="font-semibold text-lg mb-1">{{ task.title }}</h3>
              <p v-if="task.description" class="text-gray-600 mb-2">{{ task.description }}</p>
              <div class="flex items-center gap-4 text-sm">
                <span 
                  class="px-2 py-1 rounded-full text-white font-medium"
                  :style="{ backgroundColor: getStatusColor(task.status) }"
                >
                  {{ getStatusText(task.status) }}
                </span>
                <span v-if="task.assignee" class="text-gray-500">
                  <i class="fas fa-user mr-1"></i>
                  {{ task.assignee }}
                </span>
                <span v-if="task.dueDate" class="text-gray-500">
                  <i class="fas fa-calendar mr-1"></i>
                  {{ task.dueDate }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Grid Layout -->
      <div v-else-if="layout === 'grid'" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="(task, index) in tasks"
          :key="index"
          class="task-card p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300"
          :style="{ borderTopColor: getStatusColor(task.status), borderTopWidth: '4px' }"
        >
          <div class="flex items-center gap-2 mb-3">
            <i 
              :class="['fas', getStatusIcon(task.status)]"
              :style="{ color: getStatusColor(task.status) }"
            ></i>
            <span 
              class="text-xs px-2 py-1 rounded-full text-white font-medium"
              :style="{ backgroundColor: getStatusColor(task.status) }"
            >
              {{ getStatusText(task.status) }}
            </span>
          </div>
          <h3 class="font-semibold text-lg mb-2">{{ task.title }}</h3>
          <p v-if="task.description" class="text-gray-600 text-sm mb-3">{{ task.description }}</p>
          <div v-if="task.assignee || task.dueDate" class="text-xs text-gray-500 space-y-1">
            <div v-if="task.assignee" class="flex items-center gap-1">
              <i class="fas fa-user"></i>
              <span>{{ task.assignee }}</span>
            </div>
            <div v-if="task.dueDate" class="flex items-center gap-1">
              <i class="fas fa-calendar"></i>
              <span>{{ task.dueDate }}</span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Timeline Layout -->
      <div v-else-if="layout === 'timeline'" class="timeline-container">
        <div class="relative">
          <div class="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300"></div>
          <div
            v-for="(task, index) in tasks"
            :key="index"
            class="timeline-item relative pl-12 pb-8"
          >
            <div class="absolute left-2 w-4 h-4 rounded-full border-2 border-white shadow-sm" :style="{ backgroundColor: getStatusColor(task.status) }"></div>
            <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <div class="flex items-center gap-2 mb-2">
                <i 
                  :class="['fas', getStatusIcon(task.status)]"
                  :style="{ color: getStatusColor(task.status) }"
                ></i>
                <span 
                  class="text-xs px-2 py-1 rounded-full text-white font-medium"
                  :style="{ backgroundColor: getStatusColor(task.status) }"
                >
                  {{ getStatusText(task.status) }}
                </span>
              </div>
              <h3 class="font-semibold text-lg mb-1">{{ task.title }}</h3>
              <p v-if="task.description" class="text-gray-600 text-sm">{{ task.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.task-overview-container {
  font-family: var(--company-font-primary);
  color: var(--company-text-primary);
}

.task-item {
  background-color: var(--company-bg-primary);
  border-color: var(--company-border-primary);
  transition: var(--company-transition-all);
}

.task-item:hover {
  transform: translateX(4px);
  box-shadow: var(--company-shadow-sm);
}

.task-card {
  background-color: var(--company-bg-primary);
  border-color: var(--company-border-primary);
  border-radius: var(--company-radius-lg);
  transition: var(--company-transition-all);
}

.task-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--company-shadow-md);
}

.timeline-item:last-child {
  padding-bottom: 0;
}

/* Status-specific styles */
.status-done {
  background-color: var(--company-bg-secondary);
  border-color: var(--company-success);
}

.status-ongoing {
  background-color: var(--company-bg-secondary);
  border-color: var(--company-primary);
}

.status-pending {
  background-color: var(--company-bg-secondary);
  border-color: var(--company-text-muted);
}

.status-feedback {
  background-color: var(--company-bg-secondary);
  border-color: var(--company-warning);
}

.status-blocked {
  background-color: var(--company-bg-secondary);
  border-color: var(--company-error);
}

.status-cancelled {
  background-color: var(--company-bg-secondary);
  border-color: var(--company-text-muted);
}
</style>
