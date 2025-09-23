<script setup lang="js">
import { computed, ref, onMounted } from 'vue'
import { useSlideContext } from '@slidev/client'

const props = defineProps({
  color: {
    default: 'white',
  },
  style: {
    type: String,
    default: 'classic', // 'classic', 'modern', 'minimal', 'celebration'
    validator: (value) => ['classic', 'modern', 'minimal', 'celebration'].includes(value)
  },
  showContact: {
    type: Boolean,
    default: true
  },
  showSocial: {
    type: Boolean,
    default: true
  },
  animated: {
    type: Boolean,
    default: true
  }
})

const { $frontmatter, $slidev } = useSlideContext()

const colorscheme = computed(() => {
  return `company-${props.color}-scheme`
})

const thankYouText = computed(() => {
  return $frontmatter.thankYou || $frontmatter.title || 'Thank You!'
})

const subtitle = computed(() => {
  return $frontmatter.subtitle || $frontmatter.message || 'Questions & Discussion'
})

const contactInfo = computed(() => {
  return {
    name: $frontmatter.presenter || $frontmatter.author || 'Presenter',
    title: $frontmatter.presenterTitle || $frontmatter.position || '',
    email: $frontmatter.email || '',
    phone: $frontmatter.phone || '',
    website: $frontmatter.website || ''
  }
})

const socialLinks = computed(() => {
  return $frontmatter.social || []
})

const isVisible = ref(false)

onMounted(() => {
  if (props.animated) {
    setTimeout(() => {
      isVisible.value = true
    }, 300)
  } else {
    isVisible.value = true
  }
})

const containerClass = computed(() => {
  const baseClass = 'thank-you-container'
  
  switch(props.style) {
    case 'modern':
      return `${baseClass} modern-style`
    case 'minimal':
      return `${baseClass} minimal-style`
    case 'celebration':
      return `${baseClass} celebration-style`
    case 'classic':
    default:
      return `${baseClass} classic-style`
  }
})
</script>

<template>
  <div class="slidev-layout thank-you h-full slidecolor" :class="[colorscheme]">
    <div class="h-full flex items-center justify-center">
      <div :class="containerClass">
        <!-- Main Thank You Message -->
        <div class="thank-you-content text-center">
          <!-- Icon/Emoji -->
          <div v-if="style !== 'minimal'" class="thank-you-icon mb-8">
            <div v-if="style === 'celebration'" class="celebration-emoji text-8xl">
              🎉
            </div>
            <div v-else class="thank-you-symbol text-6xl">
              <i class="fas fa-handshake"></i>
            </div>
          </div>
          
          <!-- Main Text -->
          <h1 
            class="thank-you-title text-5xl font-bold mb-6"
            :class="{ 'animate-bounce-in': animated && isVisible }"
          >
            {{ thankYouText }}
          </h1>
          
          <!-- Subtitle -->
          <p 
            v-if="subtitle"
            class="thank-you-subtitle text-xl text-gray-600 mb-8"
            :class="{ 'animate-fade-in-delayed': animated && isVisible }"
          >
            {{ subtitle }}
          </p>
          
          <!-- Contact Information -->
          <div 
            v-if="showContact"
            class="contact-info mt-12"
            :class="{ 'animate-slide-up-delayed': animated && isVisible }"
          >
            <h3 class="text-lg font-semibold mb-4">Get in Touch</h3>
            <div class="contact-details space-y-2">
              <div v-if="contactInfo.name" class="contact-item">
                <i class="fas fa-user mr-2"></i>
                <span class="font-medium">{{ contactInfo.name }}</span>
                <span v-if="contactInfo.title" class="text-gray-600 ml-2">{{ contactInfo.title }}</span>
              </div>
              <div v-if="contactInfo.email" class="contact-item">
                <i class="fas fa-envelope mr-2"></i>
                <a :href="`mailto:${contactInfo.email}`" class="text-blue-600 hover:underline">
                  {{ contactInfo.email }}
                </a>
              </div>
              <div v-if="contactInfo.phone" class="contact-item">
                <i class="fas fa-phone mr-2"></i>
                <a :href="`tel:${contactInfo.phone}`" class="text-blue-600 hover:underline">
                  {{ contactInfo.phone }}
                </a>
              </div>
              <div v-if="contactInfo.website" class="contact-item">
                <i class="fas fa-globe mr-2"></i>
                <a :href="contactInfo.website" target="_blank" class="text-blue-600 hover:underline">
                  {{ contactInfo.website }}
                </a>
              </div>
            </div>
          </div>
          
          <!-- Social Links -->
          <div 
            v-if="showSocial && socialLinks.length > 0"
            class="social-links mt-8"
            :class="{ 'animate-fade-in-delayed': animated && isVisible }"
          >
            <h4 class="text-sm font-medium mb-4 text-gray-600">Follow Us</h4>
            <div class="flex justify-center space-x-4">
              <a
                v-for="(link, index) in socialLinks"
                :key="index"
                :href="link.url"
                target="_blank"
                class="social-link p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
                :title="link.name"
              >
                <i :class="['fab', link.icon, 'text-xl']"></i>
              </a>
            </div>
          </div>
        </div>
        
        <!-- Background decoration for celebration style -->
        <div v-if="style === 'celebration'" class="celebration-bg">
          <div class="confetti confetti-1"></div>
          <div class="confetti confetti-2"></div>
          <div class="confetti confetti-3"></div>
          <div class="confetti confetti-4"></div>
          <div class="confetti confetti-5"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.slidev-layout.thank-you {
  font-family: var(--company-font-primary);
  background: linear-gradient(135deg, var(--theme-bg-primary), var(--theme-bg-secondary));
}

.thank-you-container {
  max-width: 600px;
  padding: 2rem;
  position: relative;
}

/* Classic Style */
.classic-style {
  text-align: center;
}

.classic-style .thank-you-title {
  color: var(--company-text-primary);
  font-family: var(--company-font-heading);
}

/* Modern Style */
.modern-style {
  background: white;
  border-radius: 1rem;
  box-shadow: var(--theme-shadow-xl);
  padding: 3rem;
}

.modern-style .thank-you-title {
  background: var(--theme-gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Minimal Style */
.minimal-style {
  padding: 1rem;
}

.minimal-style .thank-you-title {
  color: var(--company-text-primary);
  font-weight: 300;
}

/* Celebration Style */
.celebration-style {
  text-align: center;
  position: relative;
  overflow: hidden;
}

.celebration-style .thank-you-title {
  color: var(--theme-primary-color);
  font-family: var(--company-font-heading);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.celebration-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1;
}

.confetti {
  position: absolute;
  width: 10px;
  height: 10px;
  background: var(--theme-primary-color);
  animation: confetti-fall 3s linear infinite;
}

.confetti-1 { left: 10%; animation-delay: 0s; background: #ff6b6b; }
.confetti-2 { left: 20%; animation-delay: 0.5s; background: #4ecdc4; }
.confetti-3 { left: 30%; animation-delay: 1s; background: #45b7d1; }
.confetti-4 { left: 40%; animation-delay: 1.5s; background: #f9ca24; }
.confetti-5 { left: 50%; animation-delay: 2s; background: #f0932b; }

@keyframes confetti-fall {
  0% {
    transform: translateY(-100vh) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: translateY(100vh) rotate(720deg);
    opacity: 0;
  }
}

/* Animations */
@keyframes bounce-in {
  0% {
    transform: scale(0.3);
    opacity: 0;
  }
  50% {
    transform: scale(1.05);
  }
  70% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes fade-in-delayed {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-up-delayed {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-bounce-in {
  animation: bounce-in 0.8s ease-out forwards;
}

.animate-fade-in-delayed {
  animation: fade-in-delayed 0.6s ease-out 0.3s forwards;
  opacity: 0;
}

.animate-slide-up-delayed {
  animation: slide-up-delayed 0.6s ease-out 0.6s forwards;
  opacity: 0;
}

/* Contact info styles */
.contact-info {
  background: var(--theme-bg-secondary);
  border-radius: 0.5rem;
  padding: 1.5rem;
  border: 1px solid var(--theme-border-primary);
}

.contact-item {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
}

.social-link {
  transition: all 0.3s ease;
}

.social-link:hover {
  transform: translateY(-2px);
  box-shadow: var(--theme-shadow-md);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .thank-you-container {
    padding: 1rem;
  }
  
  .thank-you-title {
    font-size: 2.5rem !important;
  }
  
  .thank-you-subtitle {
    font-size: 1.125rem !important;
  }
  
  .celebration-emoji {
    font-size: 4rem !important;
  }
}
</style>
