<script setup lang="js">
import { computed, useSlots } from 'vue'

const props = defineProps({
  color: {
    default: 'light',
    validator: (value) => ['light', 'dark'].includes(value)
  },
  leftTitle: {
    default: 'English',
  },
  rightTitle: {
    default: 'Translation',
  },
  fontSize: {
    default: '14px', // Direct font size for content
  },
  headingSize: {
    default: '48px', // Direct font size for headings (H1 in detailed mode, column headers in bilingual mode)
  },
  columnRatio: {
    default: '1-1', // Options: '1-1', '1-2', '2-1'
  },
  mode: {
    default: 'auto', // Options: 'auto', 'detailed', 'bilingual'
  },
  leftBg: {
    default: null, // Optional background color for left column
  },
  rightBg: {
    default: null, // Optional background color for right column
  },
})

const slots = useSlots()

// Determine mode: if both left and right slots exist, use bilingual, otherwise detailed
const isBilingual = computed(() => {
  if (props.mode === 'bilingual') return true
  if (props.mode === 'detailed') return false
  // Auto mode: check if both left and right slots are provided
  return slots.left && slots.right
})

const colorscheme = computed(() => {
  return `company-${props.color}-scheme`
})

const gridColumns = computed(() => {
  const ratios = {
    '1-1': '1fr 1fr',
    '1-2': '1fr 2fr',
    '2-1': '2fr 1fr',
  }
  return ratios[props.columnRatio] || '1fr 1fr'
})
</script>

<template>
  <div class="slidev-layout disclaimer slidecolor" :class="[colorscheme, { 'is-bilingual': isBilingual }]">
    <div class="disclaimer-container">
      <!-- Bilingual Mode -->
      <div v-if="isBilingual" class="disclaimer-columns">
        <div class="disclaimer-column left-column" :style="leftBg ? { backgroundColor: leftBg } : {}">
          <div class="column-header">{{ leftTitle }}</div>
          <div class="column-content">
            <slot name="left" />
          </div>
        </div>
        <div class="disclaimer-column right-column" :style="rightBg ? { backgroundColor: rightBg } : {}">
          <div class="column-header">{{ rightTitle }}</div>
          <div class="column-content">
            <slot name="right" />
          </div>
        </div>
      </div>
      
      <!-- Detailed Mode (Single Column) -->
      <div v-else class="disclaimer-content">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.disclaimer {
  padding: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
}

.disclaimer-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 0;
}

/* Detailed Mode (Single Column) Styles */
.disclaimer-content {
  flex: 1;
  overflow-y: auto;
  padding: var(--company-default-padding);
  line-height: 1.8;
  font-size: v-bind(fontSize);
}

.disclaimer-content :deep(*) {
  font-size: inherit;
}

.disclaimer-content :deep(h1) {
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  margin-bottom: 1.5rem;
  font-size: v-bind(headingSize);
}

.disclaimer-content :deep(h2) {
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  margin-bottom: 1.5rem;
}

/* Bilingual Mode (Two Column) Styles */
.disclaimer-columns {
  flex: 1;
  display: grid;
  grid-template-columns: v-bind(gridColumns);
  gap: 0;
  overflow: hidden;
}

.disclaimer-column {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  padding: 4rem 4rem;
}

.left-column {
  border-right: 1px solid rgba(0, 0, 0, 0.1);
}

.column-header {
  font-family: var(--company-font-heading);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  margin-bottom: 2rem;
  color: var(--company-text-primary);
  line-height: 1.2;
  font-size: v-bind(headingSize);
  min-height: 6rem;
  display: flex;
  align-items: flex-start;
}

.column-content {
  flex: 1;
  overflow-y: auto;
  line-height: 1.8;
  padding-right: 1.5rem;
  font-size: v-bind(fontSize);
}

.column-content :deep(*) {
  font-size: inherit;
}

.column-content :deep(p),
.column-content :deep(ul),
.column-content :deep(ol) {
  margin-bottom: 1rem;
}

.column-content :deep(strong) {
  display: block;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  min-height: 1.5em;
  line-height: 1.5;
}

/* Scrollbar Styles */
.disclaimer-content::-webkit-scrollbar,
.column-content::-webkit-scrollbar {
  width: 8px;
}

.disclaimer-content::-webkit-scrollbar-track,
.column-content::-webkit-scrollbar-track {
  background: transparent;
}

.disclaimer-content::-webkit-scrollbar-thumb,
.column-content::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
}

.disclaimer-content::-webkit-scrollbar-thumb:hover,
.column-content::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0.3);
}

/* Content Formatting */
.disclaimer-content :deep(p),
.column-content :deep(p) {
  margin-bottom: 1.25rem;
}

.disclaimer-content :deep(ul),
.disclaimer-content :deep(ol),
.column-content :deep(ul),
.column-content :deep(ol) {
  margin-left: 0;
  margin-bottom: 1.25rem;
  list-style-position: outside;
  padding-left: 1.5rem;
}

.disclaimer-content :deep(li),
.column-content :deep(li) {
  margin-bottom: 0.5rem;
}

.disclaimer-content :deep(strong),
.column-content :deep(strong) {
  font-weight: 700;
  color: var(--company-text-primary);
}

.disclaimer-content :deep(em),
.column-content :deep(em) {
  font-style: italic;
}

/* Bilingual column headings */
.column-content :deep(h3),
.column-content :deep(h4) {
  font-weight: 600;
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
}

.column-content :deep(h3) {
  font-size: 1.1em;
}

.column-content :deep(h4) {
  font-size: 1em;
}
</style>