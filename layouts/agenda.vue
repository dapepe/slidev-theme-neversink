<script setup lang="js">
import { computed } from 'vue'

const props = defineProps({
  color: {
    default: 'dark',
    validator: (value) => ['light', 'dark'].includes(value)
  },
  currentItem: {
    type: Number,
    default: 0
  },
  highlightCurrent: {
    type: Boolean,
    default: true
  },
  // Agenda items as props
  agenda: {
    type: Array,
    default: () => []
  },
  title: {
    type: String,
    default: 'AGENDA'
  }
})

const colorscheme = computed(() => {
  return `company-${props.color}-scheme`
})

const agendaItems = computed(() => {
  return props.agenda || []
})

const getItemClass = (index) => {
  const isCurrent = props.highlightCurrent && index === props.currentItem
  return isCurrent ? 'agenda-item-current' : 'agenda-item'
}
</script>

<template>
  <div class="slidev-layout agenda h-full slidecolor" :class="[colorscheme]">
    <div class="h-full flex flex-col justify-start">
      <!-- Header -->
      <div class="agenda-header">
        <h1 class="agenda-title">{{ props.title }}</h1>
      </div>
      
      <!-- Agenda Items -->
      <div class="agenda-content">
        <div v-for="(item, index) in agendaItems" :key="index" :class="getItemClass(index)">
          <span class="agenda-item-text">{{ item.title || item }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* ===== AGENDA LAYOUT STYLING ===== */
.slidev-layout.agenda {
  font-family: var(--company-font-primary);
  padding: var(--company-space-8);
  margin: 0;
}

/* Header styling */
.agenda-header {
  margin-bottom: 5rem;
}

.agenda-title {
  font-family: var(--company-font-heading);
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  margin: 0;
  padding: 0;
  line-height: 1.1;
}

/* Content area */
.agenda-content {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

/* Agenda items */
.agenda-item {
  width:60%;
  padding:0.75rem 0rem 0.75rem 6rem;
  transition: all 0.3s ease;
}

.agenda-item-text {
  font-family: var(--company-font-heading);
  font-size: 1.5rem;
  font-weight: 400;
  letter-spacing: 0.02em;
  line-height: 1.3;
}

/* Current/highlighted item */
.agenda-item-current {
  margin: 0;
  border-radius: 0;
  position: relative;
  padding:0.75rem 0rem 0.75rem 6rem;
  max-width: 80%;
}

.agenda-item-current .agenda-item-text {
  font-weight: 700;
  text-align: left;
  display: block;
  width: 100%;
}

/* ===== LIGHT SCHEME ===== */
.company-light-scheme.slidev-layout.agenda {
  background-color: var(--company-agenda-bg);
  color: var(--company-agenda-item-color);
}

.company-light-scheme.slidev-layout .agenda-title {
  color: var(--company-agenda-title-color);
}

.company-light-scheme.slidev-layout .agenda-item-text {
  color: var(--company-agenda-item-color);
}

.company-light-scheme.slidev-layout .agenda-item-current {
  background-color: var(--company-agenda-current-bg);
}

.company-light-scheme.slidev-layout .agenda-item-current .agenda-item-text {
  color: var(--company-agenda-current-text);
}

/* ===== DARK SCHEME ===== */
.company-dark-scheme.slidev-layout.agenda {
  background-color: var(--company-agenda-bg-dark);
  color: var(--company-agenda-item-color-dark);
}

.company-dark-scheme.slidev-layout .agenda-title {
  color: var(--company-agenda-title-color-dark);
}

.company-dark-scheme.slidev-layout .agenda-item-text {
  color: var(--company-agenda-item-color-dark);
}

.company-dark-scheme.slidev-layout .agenda-item-current {
  background-color: var(--company-agenda-current-bg-dark);
}

.company-dark-scheme.slidev-layout .agenda-item-current .agenda-item-text {
  color: var(--company-agenda-current-text-dark);
}

/* ===== RESPONSIVE ADJUSTMENTS ===== */
@media (max-width: 768px) {
  .agenda-title {
    font-size: 2.5rem;
  }
  
  .agenda-item-text {
    font-size: 1.25rem;
  }
}

@media (max-width: 480px) {
  .agenda-title {
    font-size: 2rem;
  }
  
  .agenda-item-text {
    font-size: 1.125rem;
  }
  
  .agenda-item-current {
    padding: 0.5rem 1rem;
    margin: 0 -1rem;
  }
}
</style>
