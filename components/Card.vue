<script setup lang="js">
import { computed } from 'vue'
import '@lottiefiles/lottie-player'

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
    default: '#3b82f6'
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
  },
  // New props for animated icons support
  lottieUrl: {
    type: String,
    default: ''
  },
  lottieData: {
    type: Object,
    default: null
  },
  iconType: {
    type: String,
    default: 'fontawesome', // 'fontawesome', 'animated', 'svg'
    validator: (value) => ['fontawesome', 'animated', 'svg'].includes(value)
  }
})

const iconClasses = computed(() => {
  let classes = props.icon
  if (props.animated) {
    classes += ' card-icon-animated'
  }
  return classes
})

// Auto-detect icon type
const isAnimatedIcon = computed(() => {
  return props.icon.endsWith('.json') || props.icon.startsWith('http') || props.lottieUrl || props.lottieData
})

const isSvgIcon = computed(() => {
  return props.icon.includes('<svg') || props.icon.includes('</svg>')
})


const lineStyle = computed(() => {
  return {
    background: props.color
  }
})

</script>

<template>
  <div 
    class="card-component" 
    :class="`card-theme-${props.theme}`"
    :style="{ animationDelay: `${props.delay}ms` }"
  >
    <div class="card-header">
      <div class="card-icon">
        <!-- FontAwesome Icons -->
        <i 
          v-if="!isAnimatedIcon && !isSvgIcon" 
          :class="iconClasses" 
          :style="{ color: props.color, fontSize: '3.5rem' }"
        ></i>
        
        <!-- Animated Icon (Auto-detected) -->
        <div 
          v-else-if="isAnimatedIcon" 
          class="lottie-container"
          :style="{ width: '3.5rem', height: '3.5rem' }"
        >
          <lottie-player
            v-if="lottieUrl"
            :src="lottieUrl"
            background="transparent"
            speed="1"
            loop
            autoplay
            direction="1"
            mode="normal"
            :style="{ width: '100%', height: '100%' }"
          ></lottie-player>
          <lottie-player
            v-else
            :src="icon"
            background="transparent"
            speed="1"
            loop
            autoplay
            direction="1"
            mode="normal"
            :style="{ width: '100%', height: '100%' }"
          ></lottie-player>
        </div>
        
        <!-- SVG Icons (Auto-detected) -->
        <div 
          v-else-if="isSvgIcon" 
          class="svg-container"
          :style="{ width: '3.5rem', height: '3.5rem', color: props.color }"
          v-html="icon"
        ></div>
      </div>
    </div>
    
    <div class="card-content">
      <h3 class="card-headline">{{ headline }}</h3>
    <div class="card-line" :style="lineStyle"></div>

      <p class="card-text">{{ content }}</p>
    </div>
  </div>
</template>

<style scoped>
/* ===== CARD COMPONENT STYLING ===== */
.card-component {
  /* background: white; */
  border-radius: 6px;
  padding: 0.75rem;
  /* Removed all shadows */
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  opacity: 0;
  transform: translateY(20px);
  animation: cardReveal 0.6s ease forwards;
}

.card-component:hover {
  /* Removed hover shadow effects */
  transform: translateY(-2px);
}

.card-header {
  display: flex;
  align-items: center;
  margin-bottom: 0.375rem;
}

.card-icon {
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
}

.card-icon i {
  font-style: normal !important;
  /* Font size is set directly via inline style */
}

.card-line {
  width: 100%;
  height: 2px;
  border-radius: 1px;
  margin-bottom: 0.75rem;
  position: relative;
  background: #3b82f6; /* Default blue color */
  /* Background can be overridden dynamically via :style="lineStyle" */
}

.card-content {
  position: relative;
  z-index: 1;
}

.card-headline {
  font-family: var(--company-font-heading, 'Inter', sans-serif);
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
  color: var(--company-text-primary, #1f2937);
  line-height: 1.3;
}

.card-text {
  font-family: var(--company-font-primary, 'Inter', sans-serif);
  font-size: 1rem;
  color: var(--company-text-secondary, #6b7280);
  line-height: 1.5;
  margin: 0;
}

/* ===== COLOR VARIANTS ===== */
/* Colors are now dynamically applied via props */

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

/* Lottie Animation Styles */
.lottie-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.lottie-data-container {
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
  /* background: white; */
  /* Removed all shadows */
}

.card-theme-light:hover {
  /* Removed hover shadow effects */
}

.card-theme-light .card-headline {
  color: #1f2937;
}

.card-theme-light .card-text {
  color: #6b7280;
}

.card-theme-dark {
  /* background: #1f2937; */
  /* Removed all shadows */
}

.card-theme-dark:hover {
  /* Removed hover shadow effects */
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
    font-size: 1.125rem;
  }
  
  .card-text {
    font-size: 0.9rem;
  }
  
  .card-icon {
    width: fit-content;
    height: fit-content;
  }
}

@media (max-width: 480px) {
  .card-component {
    padding: 0.5rem;
  }
  
  .card-headline {
    font-size: 1rem;
  }
  
  .card-text {
    font-size: 0.875rem;
  }
  
  .card-icon {
    width: fit-content;
    height: fit-content;
  }
}
</style>
