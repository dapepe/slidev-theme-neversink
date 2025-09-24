<script setup lang="js">
import { computed } from 'vue'

const props = defineProps({
  agenda: {
    type: Array,
    default: () => []
  },
  timing: {
    type: Array,
    default: () => []
  },
  currentItem: {
    type: Number,
    default: -1
  },
  highlightCurrent: {
    type: Boolean,
    default: false
  },
  color: {
    default: 'dark',
    validator: (value) => ['light', 'dark'].includes(value)
  }
})

const colorscheme = computed(() => {
  return `company-${props.color}-scheme`
})

const agendaItems = computed(() => {
  return props.agenda || []
})

const timingItems = computed(() => {
  return props.timing || []
})

const getItemClass = (index) => {
  const isCurrent = props.highlightCurrent && index === props.currentItem
  return isCurrent ? 'agenda-timed-item-current' : 'agenda-timed-item'
}
</script>

<template>
  <div class="slidev-layout agenda-timed h-full slidecolor" :class="[colorscheme]">
    <div class="h-full flex flex-col justify-start">
      <!-- Agenda Items -->
      <div class="agenda-timed-content">
        <div 
          v-for="(item, index) in agendaItems" 
          :key="index" 
          :class="getItemClass(index)"
          :style="{ cursor: 'default' }"
        >
          <div class="agenda-timed-item-container">
            <span v-if="timingItems[index]" class="agenda-timed-timing">{{ timingItems[index] }}</span>
            <span class="agenda-timed-text">{{ item.title || item }}</span>
          </div>
        </div>
      </div>
      
      <!-- Default slot for additional content -->
      <div class="agenda-timed-additional">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* ===== AGENDA TIMED LAYOUT STYLING ===== */
.slidev-layout.agenda-timed {
  font-family: var(--company-font-primary);
  padding: var(--company-space-6);
  margin: 0;
}

/* Content area */
.agenda-timed-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
}

.agenda-timed-additional {
  margin-top: 2rem;
}

/* Agenda items */
.agenda-timed-item {
  padding: 0.75rem 0;
  transition: all 0.3s ease;
}

.agenda-timed-item-container {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.agenda-timed-timing {
  font-family: var(--company-font-heading);
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  opacity: 0.7;
}

.agenda-timed-text {
  font-family: var(--company-font-heading);
  font-size: 1.25rem;
  font-weight: 400;
  letter-spacing: 0.02em;
  line-height: 1.3;
}

/* Current/highlighted item */
.agenda-timed-item-current {
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
}

.agenda-timed-item-current .agenda-timed-timing {
  font-weight: 700;
  opacity: 1;
}

.agenda-timed-item-current .agenda-timed-text {
  font-weight: 600;
}

/* ===== LIGHT SCHEME ===== */
.company-light-scheme.slidev-layout.agenda-timed {
  background-color: var(--company-bg-primary);
  color: var(--company-text-primary);
}

.company-light-scheme.slidev-layout .agenda-timed-timing {
  color: var(--company-primary-color);
}

.company-light-scheme.slidev-layout .agenda-timed-text {
  color: var(--company-text-primary);
}

.company-light-scheme.slidev-layout .agenda-timed-item-current {
  background-color: var(--company-agenda-current-bg, rgba(0, 0, 0, 0.05));
}

.company-light-scheme.slidev-layout .agenda-timed-item-current .agenda-timed-timing {
  color: var(--company-agenda-current-text, var(--company-primary-color));
}

.company-light-scheme.slidev-layout .agenda-timed-item-current .agenda-timed-text {
  color: var(--company-agenda-current-text, var(--company-text-primary));
}

/* ===== DARK SCHEME ===== */
.company-dark-scheme.slidev-layout.agenda-timed {
  background-color: var(--company-bg-primary-dark);
  color: var(--company-text-primary-dark);
}

.company-dark-scheme.slidev-layout .agenda-timed-timing {
  color: var(--company-primary-color);
}

.company-dark-scheme.slidev-layout .agenda-timed-text {
  color: var(--company-text-primary-dark);
}

.company-dark-scheme.slidev-layout .agenda-timed-item-current {
  background-color: var(--company-agenda-current-bg-dark, rgba(255, 255, 255, 0.1));
}

.company-dark-scheme.slidev-layout .agenda-timed-item-current .agenda-timed-timing {
  color: var(--company-agenda-current-text-dark, var(--company-primary-color));
}

.company-dark-scheme.slidev-layout .agenda-timed-item-current .agenda-timed-text {
  color: var(--company-agenda-current-text-dark, var(--company-text-primary-dark));
}

/* ===== RESPONSIVE ADJUSTMENTS ===== */
@media (max-width: 768px) {
  .agenda-timed-timing {
    font-size: 0.9rem;
  }
  
  .agenda-timed-text {
    font-size: 1.125rem;
  }
}

@media (max-width: 480px) {
  .agenda-timed-timing {
    font-size: 0.8rem;
  }
  
  .agenda-timed-text {
    font-size: 1rem;
  }
  
  .agenda-timed-item-current {
    padding: 0.5rem 0.75rem;
  }
}
</style>
