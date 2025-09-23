<script setup lang="js">
import { computed } from 'vue'
import { useSlideContext } from '@slidev/client'

const props = defineProps({
  color: {
    default: 'white',
  },
  quoteStyle: {
    type: String,
    default: 'classic', // 'classic', 'modern', 'minimal', 'elegant'
    validator: (value) => ['classic', 'modern', 'minimal', 'elegant'].includes(value)
  },
  showAuthor: {
    type: Boolean,
    default: true
  },
  showTitle: {
    type: Boolean,
    default: true
  },
  fontSize: {
    type: String,
    default: 'large', // 'small', 'medium', 'large', 'xlarge'
    validator: (value) => ['small', 'medium', 'large', 'xlarge'].includes(value)
  }
})

const { $frontmatter, $slidev } = useSlideContext()

const colorscheme = computed(() => {
  return `company-${props.color}-scheme`
})

const quoteText = computed(() => {
  return $frontmatter.quote || $frontmatter.quotation || 'Your quote here...'
})

const quoteAuthor = computed(() => {
  return $frontmatter.author || $frontmatter.quoteAuthor || 'Unknown Author'
})

const quoteTitle = computed(() => {
  return $frontmatter.title || $frontmatter.quoteTitle || ''
})

const quoteSource = computed(() => {
  return $frontmatter.source || $frontmatter.quoteSource || ''
})

const quoteClass = computed(() => {
  const baseClass = 'quote-text font-light leading-relaxed'
  
  switch(props.fontSize) {
    case 'small':
      return `${baseClass} text-lg`
    case 'medium':
      return `${baseClass} text-xl`
    case 'large':
      return `${baseClass} text-2xl`
    case 'xlarge':
      return `${baseClass} text-3xl`
    default:
      return `${baseClass} text-2xl`
  }
})

const containerClass = computed(() => {
  const baseClass = 'quotation-container'
  
  switch(props.quoteStyle) {
    case 'modern':
      return `${baseClass} modern-style`
    case 'minimal':
      return `${baseClass} minimal-style`
    case 'elegant':
      return `${baseClass} elegant-style`
    case 'classic':
    default:
      return `${baseClass} classic-style`
  }
})
</script>

<template>
  <div class="slidev-layout quotation h-full slidecolor" :class="[colorscheme]">
    <div class="h-full flex items-center justify-center">
      <div :class="containerClass">
        <!-- Quote Icon -->
        <div v-if="quoteStyle !== 'minimal'" class="quote-icon mb-6">
          <i class="fas fa-quote-left text-4xl opacity-30"></i>
        </div>
        
        <!-- Quote Text -->
        <blockquote :class="quoteClass">
          {{ quoteText }}
        </blockquote>
        
        <!-- Quote Author -->
        <div v-if="showAuthor && quoteAuthor" class="quote-attribution mt-8">
          <div class="author-name text-lg font-semibold">
            {{ quoteAuthor }}
          </div>
          <div v-if="showTitle && quoteTitle" class="author-title text-sm text-gray-600 mt-1">
            {{ quoteTitle }}
          </div>
          <div v-if="quoteSource" class="quote-source text-sm text-gray-500 mt-1">
            {{ quoteSource }}
          </div>
        </div>
        
        <!-- Quote Icon (bottom) -->
        <div v-if="quoteStyle === 'elegant'" class="quote-icon-bottom mt-6 text-right">
          <i class="fas fa-quote-right text-4xl opacity-30"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.slidev-layout.quotation {
  font-family: var(--company-font-quote);
}

.quotation-container {
  max-width: 800px;
  text-align: center;
  padding: 2rem;
}

/* Classic Style */
.classic-style {
  border-left: 4px solid var(--theme-primary-color);
  padding-left: 2rem;
  text-align: left;
}

.classic-style .quote-text {
  font-style: italic;
  color: var(--company-text-quote);
}

.classic-style .quote-attribution {
  text-align: left;
  border-top: 1px solid var(--theme-border-primary);
  padding-top: 1rem;
}

/* Modern Style */
.modern-style {
  background: linear-gradient(135deg, var(--theme-bg-primary), var(--theme-bg-secondary));
  border-radius: 1rem;
  box-shadow: var(--theme-shadow-lg);
  padding: 3rem;
}

.modern-style .quote-text {
  color: var(--company-text-quote);
  position: relative;
}

.modern-style .quote-text::before {
  content: '"';
  font-size: 6rem;
  color: var(--theme-primary-color);
  position: absolute;
  top: -2rem;
  left: -1rem;
  opacity: 0.3;
  font-family: serif;
}

.modern-style .quote-attribution {
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 2px solid var(--theme-primary-color);
}

/* Minimal Style */
.minimal-style {
  padding: 1rem;
}

.minimal-style .quote-text {
  color: var(--company-text-quote);
  font-weight: 300;
}

.minimal-style .quote-attribution {
  margin-top: 2rem;
}

.minimal-style .author-name {
  font-weight: 500;
}

/* Elegant Style */
.elegant-style {
  position: relative;
  padding: 3rem;
}

.elegant-style .quote-text {
  color: var(--company-text-quote);
  font-style: italic;
  position: relative;
}

.elegant-style .quote-text::before,
.elegant-style .quote-text::after {
  content: '"';
  font-size: 4rem;
  color: var(--theme-primary-color);
  opacity: 0.5;
  font-family: serif;
  position: absolute;
}

.elegant-style .quote-text::before {
  top: -1rem;
  left: -1rem;
}

.elegant-style .quote-text::after {
  bottom: -2rem;
  right: -1rem;
}

.elegant-style .quote-attribution {
  margin-top: 3rem;
  position: relative;
}

.elegant-style .quote-attribution::before {
  content: '';
  position: absolute;
  top: -1rem;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 2px;
  background: var(--theme-primary-color);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .quotation-container {
    padding: 1rem;
  }
  
  .classic-style {
    padding-left: 1rem;
  }
  
  .modern-style {
    padding: 2rem;
  }
  
  .elegant-style {
    padding: 2rem;
  }
  
  .quote-text {
    font-size: 1.25rem !important;
  }
}
</style>
