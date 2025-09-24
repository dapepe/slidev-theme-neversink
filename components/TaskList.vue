<template>
  <div class="task-list-component">
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
      <div v-for="(task, index) in tasks" :key="index" class="task-item mb-0.5">
        <div class="flex items-center gap-1.5">
          <!-- Task Icon -->
          <div class="task-icon flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs" :class="getTaskIconClass(task.status)">
            <span v-html="getTaskIconSvg(task.status)"></span>
          </div>
          
          <!-- Task Content -->
          <div class="flex-1">
            <h3 class="text-2xl font-semibold text-black">
              {{ task.title }}
            </h3>
            <div v-if="task.comment" class="text-base text-gray-600">
              {{ task.comment }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
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
  }
})

// Task status icon classes
const getTaskIconClass = (status) => {
  switch (status) {
    case 'completed':
      return 'bg-green-500'
    case 'error':
      return 'bg-red-500'
    case 'in-progress':
      return 'bg-blue-500'
    case 'pending':
      return 'bg-gray-500'
    default:
      return 'bg-gray-500'
  }
}

// Task status icon SVGs
const getTaskIconSvg = (status) => {
  switch (status) {
    case 'completed':
      return '<svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>'
    case 'error':
      return '<svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" /></svg>'
    case 'in-progress':
      return '<svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" /></svg>'
    case 'pending':
      return '<svg class="w-3 h-3 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke-width="2" /></svg>'
    default:
      return '<svg class="w-3 h-3 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke-width="2" /></svg>'
  }
}
</script>

<style scoped>
.task-list-component {
  padding: 0.5rem;
}

.task-icon {
  transition: all 0.3s ease;
}

/* Hover effects */
.task-item:hover .task-icon {
  transform: scale(1.1);
}

.task-item:hover h3 {
  transform: translateX(4px);
  transition: transform 0.2s ease;
}
</style>
