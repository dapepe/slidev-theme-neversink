<script setup>
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
const props = defineProps({
  color: {
    type: String,
    default: 'white',
  },
  type: {
    type: String,
    default: 'info',
  },
  title: {
    type: String,
    default: 'Note',
  },
  icon: {
    type: String,
    default: 'mdi-information-variant-circle-outline',
  },
  width: {
    type: String,
    default: '100%',
  },
})

const colorscheme = computed(() => {
  return `company-${props.color}-scheme`
})

const typeStyles = computed(() => {
  switch (props.type) {
    case 'info':
      return {
        borderColor: 'var(--company-info)',
        backgroundColor: 'var(--company-info-bg)',
        iconColor: 'var(--company-info)',
        icon: props.icon || 'mdi-information-variant-circle-outline',
        title: props.title || 'Information'
      }
    case 'warning':
      return {
        borderColor: 'var(--company-warning)',
        backgroundColor: 'var(--company-warning-bg)',
        iconColor: 'var(--company-warning)',
        icon: props.icon || 'mdi-alert-outline',
        title: props.title || 'Warning'
      }
    case 'success':
      return {
        borderColor: 'var(--company-success)',
        backgroundColor: 'var(--company-success-bg)',
        iconColor: 'var(--company-success)',
        icon: props.icon || 'mdi-check-circle-outline',
        title: props.title || 'Success'
      }
    case 'error':
      return {
        borderColor: 'var(--company-error)',
        backgroundColor: 'var(--company-error-bg)',
        iconColor: 'var(--company-error)',
        icon: props.icon || 'mdi-alert-circle-outline',
        title: props.title || 'Error'
      }
    case 'tip':
      return {
        borderColor: 'var(--company-accent)',
        backgroundColor: 'var(--company-accent-bg)',
        iconColor: 'var(--company-accent)',
        icon: props.icon || 'mdi-lightbulb-outline',
        title: props.title || 'Tip'
      }
    default:
      return {
        borderColor: 'var(--company-primary)',
        backgroundColor: 'var(--company-bg-secondary)',
        iconColor: 'var(--company-primary)',
        icon: props.icon || 'mdi-information-variant-circle-outline',
        title: props.title || 'Note'
      }
  }
})
</script>

<template>
  <div class="markdown-alert markdown-alert-custom" :class="colorscheme" :style="{ 
    backgroundColor: typeStyles.backgroundColor, 
    borderLeftColor: typeStyles.borderColor 
  }">
    <p class="markdown-alert-title-custom">
      <span class="font-size-1.3rem" :style="{ color: typeStyles.iconColor }">
        <Icon :icon="typeStyles.icon" />
      </span>&nbsp;&nbsp;{{ typeStyles.title }}
    </p>
    <p><slot></slot></p>
  </div>
</template>

<style scoped>
.markdown-alert {
  padding: 8px 16px;
  margin: 10px;
  margin-left: 0;
  margin-top: 2px;
  margin-bottom: 5px;
  color: inherit;
  border-radius: 6px;
  font-size: 0.75em;
  width: v-bind(props.width);
  font-family: var(--company-font-primary);
  font-size: 0.85rem;
}

.markdown-alert p {
  margin: 0;
  margin-bottom: 2px;
}
.markdown-alert > :first-child {
  margin-top: 0;
}
.markdown-alert > :last-child {
  margin-bottom: 0;
}
.markdown-alert.markdown-alert-custom {
  color: var(--company-text-primary);
  border: 1px solid var(--company-border-primary);
  border-left: 6px solid var(--company-primary);
  border-radius: var(--company-radius-base);
  box-shadow: var(--company-shadow-sm);
  transition: var(--company-transition-all);
}
.markdown-alert .markdown-alert-title-custom {
  display: flex;
  align-items: center;
  position: relative;
  font-weight: 700;
  color: var(--company-text-primary);
}
@media print {
  .markdown-alert .markdown-alert-title:before {
    display: none;
  }
}
</style>
