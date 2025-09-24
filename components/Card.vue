<script setup lang="js">
import { computed } from 'vue'

const props = defineProps({
  headline: {
    type: String,
    default: ''
  },
  content: {
    type: String,
    default: ''
  },
  icon: {
    type: String,
    default: 'fas fa-star'
  },
  color: {
    type: String,
    default: 'blue'
  },
  animated: {
    type: Boolean,
    default: false
  },
  delay: {
    type: Number,
    default: 0
  },
  theme: {
    type: String,
    default: 'light',
    validator: (value) => ['light', 'dark'].includes(value)
  }
})

const colorClasses = computed(() => {
  const colorMap = {
    blue: 'card-blue',
    green: 'card-green',
    red: 'card-red',
    orange: 'card-orange',
    purple: 'card-purple',
    teal: 'card-teal',
    pink: 'card-pink',
    indigo: 'card-indigo'
  }
  return colorMap[props.color] || 'card-blue'
})

const iconClasses = computed(() => {
  let classes = props.icon
  if (props.animated) {
    classes += ' card-icon-animated'
  }
  return classes
})
</script>

<template>
  <div 
    class="card-component" 
    :class="[colorClasses, `card-theme-${props.theme}`]"
    :style="{ animationDelay: `${props.delay}ms` }"
  >
    <div class="card-header">
      <div class="card-icon">
        <i :class="iconClasses"></i>
      </div>
    </div>
    <div class="card-line"></div>
    
    <div class="card-content">
      <h3 class="card-headline">{{ headline }}</h3>
      <p class="card-text">{{ content }}</p>
    </div>
  </div>
</template>

<style scoped>
/* ===== CARD COMPONENT STYLING ===== */
.card-component {
  background: white;
  border-radius: 6px;
  padding: 0.75rem;
  box-shadow: 0 1px 3px -1px rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  opacity: 0;
  transform: translateY(20px);
  animation: cardReveal 0.6s ease forwards;
}

.card-component:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.card-header {
  display: flex;
  align-items: center;
  margin-bottom: 0.375rem;
}

.card-icon {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
}

.card-icon i {
  font-size: 0.875rem;
  color: white;
}

.card-line {
  width: 100%;
  height: 2px;
  border-radius: 1px;
  margin-bottom: 0.75rem;
  position: relative;
}

.card-content {
  position: relative;
  z-index: 1;
}

.card-headline {
  font-family: var(--company-font-heading, 'Inter', sans-serif);
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 0.375rem 0;
  color: var(--company-text-primary, #1f2937);
  line-height: 1.3;
}

.card-text {
  font-family: var(--company-font-primary, 'Inter', sans-serif);
  font-size: 0.75rem;
  color: var(--company-text-secondary, #6b7280);
  line-height: 1.4;
  margin: 0;
}

/* ===== COLOR VARIANTS ===== */
.card-blue .card-icon {
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
}

.card-blue .card-line {
  background: linear-gradient(90deg, #3b82f6, #1d4ed8);
}

.card-green .card-icon {
  background: linear-gradient(135deg, #10b981, #047857);
}

.card-green .card-line {
  background: linear-gradient(90deg, #10b981, #047857);
}

.card-red .card-icon {
  background: linear-gradient(135deg, #ef4444, #dc2626);
}

.card-red .card-line {
  background: linear-gradient(90deg, #ef4444, #dc2626);
}

.card-orange .card-icon {
  background: linear-gradient(135deg, #f97316, #ea580c);
}

.card-orange .card-line {
  background: linear-gradient(90deg, #f97316, #ea580c);
}

.card-purple .card-icon {
  background: linear-gradient(135deg, #8b5cf6, #7c3aed);
}

.card-purple .card-line {
  background: linear-gradient(90deg, #8b5cf6, #7c3aed);
}

.card-teal .card-icon {
  background: linear-gradient(135deg, #14b8a6, #0d9488);
}

.card-teal .card-line {
  background: linear-gradient(90deg, #14b8a6, #0d9488);
}

.card-pink .card-icon {
  background: linear-gradient(135deg, #ec4899, #db2777);
}

.card-pink .card-line {
  background: linear-gradient(90deg, #ec4899, #db2777);
}

.card-indigo .card-icon {
  background: linear-gradient(135deg, #6366f1, #4f46e5);
}

.card-indigo .card-line {
  background: linear-gradient(90deg, #6366f1, #4f46e5);
}

/* ===== ANIMATIONS ===== */
@keyframes cardReveal {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.card-icon-animated {
  animation: iconPulse 2s ease-in-out infinite;
}

@keyframes iconPulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

/* ===== THEME SUPPORT ===== */
.card-theme-light {
  background: white;
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.06);
}

.card-theme-light:hover {
  box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.card-theme-light .card-headline {
  color: #1f2937;
}

.card-theme-light .card-text {
  color: #6b7280;
}

.card-theme-dark {
  background: #1f2937;
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.3), 0 1px 2px -1px rgba(0, 0, 0, 0.2);
}

.card-theme-dark:hover {
  box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -2px rgba(0, 0, 0, 0.3);
}

.card-theme-dark .card-headline {
  color: #f9fafb;
}

.card-theme-dark .card-text {
  color: #d1d5db;
}

/* ===== RESPONSIVE DESIGN ===== */
@media (max-width: 768px) {
  .card-component {
    padding: 0.625rem;
  }
  
  .card-headline {
    font-size: 0.9rem;
  }
  
  .card-text {
    font-size: 0.7rem;
  }
  
  .card-icon {
    width: 1.75rem;
    height: 1.75rem;
  }
  
  .card-icon i {
    font-size: 0.75rem;
  }
}

@media (max-width: 480px) {
  .card-component {
    padding: 0.5rem;
  }
  
  .card-headline {
    font-size: 0.875rem;
  }
  
  .card-text {
    font-size: 0.65rem;
  }
  
  .card-icon {
    width: 1.5rem;
    height: 1.5rem;
  }
  
  .card-icon i {
    font-size: 0.7rem;
  }
}
</style>
