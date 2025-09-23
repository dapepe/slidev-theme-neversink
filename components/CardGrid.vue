<script setup lang="js">
import { computed, ref, onMounted, nextTick } from 'vue'

const props = defineProps({
  cards: {
    type: Array,
    required: true,
    default: () => []
  },
  columns: {
    type: Number,
    default: 0 // 0 means auto-calculate
  },
  gap: {
    type: String,
    default: '6'
  },
  animated: {
    type: Boolean,
    default: true
  },
  animationDelay: {
    type: Number,
    default: 200
  },
  color: {
    type: String,
    default: 'white'
  }
})

const emit = defineEmits(['card-click'])

const cardRefs = ref([])
const isVisible = ref(false)

const colorscheme = computed(() => {
  return `company-${props.color}-scheme`
})

const gridColumns = computed(() => {
  if (props.columns > 0) return props.columns
  
  const cardCount = props.cards.length
  if (cardCount <= 2) return 2
  if (cardCount <= 4) return 2
  if (cardCount <= 6) return 3
  if (cardCount <= 8) return 4
  return 4
})

const gridClass = computed(() => {
  const baseClass = `grid gap-${props.gap}`
  const cols = gridColumns.value
  
  switch(cols) {
    case 1: return `${baseClass} grid-cols-1`
    case 2: return `${baseClass} grid-cols-1 md:grid-cols-2`
    case 3: return `${baseClass} grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
    case 4: return `${baseClass} grid-cols-1 md:grid-cols-2 lg:grid-cols-4`
    case 5: return `${baseClass} grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5`
    case 6: return `${baseClass} grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6`
    default: return `${baseClass} grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`
  }
})

const handleCardClick = (card, index) => {
  emit('card-click', { card, index })
}

onMounted(async () => {
  if (props.animated) {
    await nextTick()
    isVisible.value = true
  }
})
</script>

<template>
  <div class="card-grid-container" :class="[colorscheme]">
    <div :class="gridClass">
      <div
        v-for="(card, index) in cards"
        :key="index"
        :ref="el => cardRefs[index] = el"
        class="card-item"
        :class="{
          'animate-fade-in': animated && isVisible,
          'cursor-pointer': card.clickable !== false
        }"
        :style="animated ? { animationDelay: `${index * animationDelay}ms` } : {}"
        @click="handleCardClick(card, index)"
      >
        <div class="card-content">
          <!-- Icon -->
          <div v-if="card.icon" class="card-icon mb-4">
            <i 
              v-if="card.icon.startsWith('fa-')" 
              :class="['fas', card.icon, 'text-3xl']"
              :style="{ color: card.color || 'var(--theme-primary-color)' }"
            ></i>
            <img 
              v-else 
              :src="card.icon" 
              :alt="card.title"
              class="w-12 h-12 object-contain"
            />
          </div>
          
          <!-- Color line -->
          <div 
            v-if="card.color" 
            class="card-color-line h-1 w-full mb-3 rounded"
            :style="{ backgroundColor: card.color }"
          ></div>
          
          <!-- Title -->
          <h3 v-if="card.title" class="card-title text-xl font-semibold mb-3">
            {{ card.title }}
          </h3>
          
          <!-- Content -->
          <div v-if="card.content" class="card-text text-gray-600 leading-relaxed">
            <div v-if="typeof card.content === 'string'" v-html="card.content"></div>
            <div v-else>
              <component :is="card.content" />
            </div>
          </div>
          
          <!-- Badge -->
          <div v-if="card.badge" class="card-badge mt-3">
            <span 
              class="inline-block px-3 py-1 text-xs font-medium rounded-full"
              :style="{ 
                backgroundColor: card.badgeColor || 'var(--theme-primary-color)',
                color: 'white'
              }"
            >
              {{ card.badge }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-item {
  background-color: var(--company-bg-primary);
  border: 1px solid var(--company-border-primary);
  border-radius: var(--company-radius-lg);
  padding: var(--company-space-xl);
  box-shadow: var(--company-shadow-sm);
  transition: var(--company-transition-all);
}

.card-item:hover {
  box-shadow: var(--company-shadow-md);
  transform: translateY(-4px);
}

.card-item.cursor-pointer:hover {
  cursor: pointer;
}

.card-title {
  font-family: var(--company-font-heading);
  color: var(--company-text-primary);
  font-weight: var(--company-font-weight-semibold);
}

.card-text {
  color: var(--company-text-secondary);
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.6s ease-out forwards;
  opacity: 0;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .card-item {
    @apply p-4;
  }
  
  .card-title {
    @apply text-lg;
  }
}
</style>
