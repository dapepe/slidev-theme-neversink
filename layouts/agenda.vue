<script setup lang="js">
import { computed, ref, onMounted } from 'vue'
import { useSlideContext } from '@slidev/client'

const props = defineProps({
  color: {
    default: 'white',
  },
  showTimeAllocation: {
    type: Boolean,
    default: false
  },
  currentItem: {
    type: Number,
    default: 0
  },
  highlightCurrent: {
    type: Boolean,
    default: true
  }
})

const { $frontmatter, $slidev } = useSlideContext()

const colorscheme = computed(() => {
  return `company-${props.color}-scheme`
})

const agendaItems = computed(() => {
  return $frontmatter.agenda || []
})

const totalTime = computed(() => {
  if (!props.showTimeAllocation) return 0
  return agendaItems.value.reduce((total, item) => total + (item.time || 0), 0)
})

const getItemClass = (index) => {
  const baseClass = 'agenda-item p-4 mb-3 rounded-lg transition-all duration-300'
  const isCurrent = props.highlightCurrent && index === props.currentItem
  const isPast = props.highlightCurrent && index < props.currentItem
  
  if (isCurrent) {
    return `${baseClass} bg-blue-100 border-l-4 border-blue-500 shadow-md`
  } else if (isPast) {
    return `${baseClass} bg-gray-100 opacity-75`
  } else {
    return `${baseClass} bg-white border border-gray-200 hover:shadow-sm`
  }
}

const getTimePercentage = (item) => {
  if (!props.showTimeAllocation || totalTime.value === 0) return 0
  return ((item.time || 0) / totalTime.value) * 100
}
</script>

<template>
  <div class="slidev-layout agenda h-full slidecolor" :class="[colorscheme]">
    <div class="h-full flex flex-col">
      <!-- Header -->
      <div class="agenda-header mb-8">
        <h1 class="text-4xl font-bold mb-2">Agenda</h1>
        <div v-if="showTimeAllocation && totalTime > 0" class="text-lg text-gray-600">
          Total Duration: {{ totalTime }} minutes
        </div>
      </div>
      
      <!-- Agenda Items -->
      <div class="agenda-content flex-1">
        <div v-for="(item, index) in agendaItems" :key="index" :class="getItemClass(index)">
          <div class="flex items-center justify-between">
            <div class="flex-1">
              <h3 class="text-xl font-semibold mb-2">{{ item.title }}</h3>
              <p v-if="item.description" class="text-gray-600">{{ item.description }}</p>
            </div>
            <div v-if="showTimeAllocation && item.time" class="text-right ml-4">
              <div class="text-lg font-medium">{{ item.time }} min</div>
              <div class="w-20 bg-gray-200 rounded-full h-2 mt-1">
                <div 
                  class="bg-blue-500 h-2 rounded-full transition-all duration-500"
                  :style="{ width: `${getTimePercentage(item)}%` }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Progress indicator -->
      <div v-if="agendaItems.length > 0" class="agenda-progress mt-6">
        <div class="flex items-center justify-between text-sm text-gray-500 mb-2">
          <span>Progress</span>
          <span>{{ Math.min(currentItem + 1, agendaItems.length) }} / {{ agendaItems.length }}</span>
        </div>
        <div class="w-full bg-gray-200 rounded-full h-2">
          <div 
            class="bg-blue-500 h-2 rounded-full transition-all duration-500"
            :style="{ width: `${(Math.min(currentItem + 1, agendaItems.length) / agendaItems.length) * 100}%` }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.agenda-item {
  transition: all 0.3s ease;
}

.agenda-item:hover {
  transform: translateX(4px);
}

.slidev-layout.agenda {
  font-family: var(--company-font-primary);
}

.slidev-layout.agenda h1 {
  font-family: var(--company-font-heading);
  color: var(--company-text-heading);
}

.slidev-layout.agenda h3 {
  font-family: var(--company-font-heading);
  color: var(--company-text-heading);
}
</style>
