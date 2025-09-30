<script setup lang="js">
import { computed } from 'vue'

const props = defineProps({
  color: {
    default: 'white',
  },
  logos: {
    type: Array,
    default: () => []
  },
  presenters: {
    type: Array,
    default: () => []
  },
  disclaimer: {
    type: String,
    default: ''
  }
})

const colorscheme = computed(() => {
  return `company-${props.color}-scheme`
})
</script>

<template>
  <div class="slidev-layout thank-you h-full slidecolor" :class="[colorscheme]">
    <!-- Logos at the top -->
    <div v-if="props.logos && props.logos.length > 0" class="logo-container">
      <img 
        v-for="(logo, index) in props.logos" 
        :key="index" 
        :src="logo" 
        class="logo" 
        alt="Logo"
      />
          </div>
          
    <!-- Main content area with thank you text and contacts -->
    <div class="content-container">
      <!-- Left side: Thank you text -->
      <div class="thank-you-text">
        <div class="thank-you-line">Danke!</div>
        <div class="thank-you-line">Thank you!</div>
        <div class="thank-you-line">Merci!</div>
        <div class="thank-you-line">Дякую!</div>
          </div>
          
      <!-- Vertical divider -->
      <div class="divider"></div>

      <!-- Right side: Contact cards -->
      <div class="contacts-container">
        <div 
          v-for="(presenter, index) in props.presenters" 
                :key="index"
          class="contact-card"
        >
          <img 
            v-if="presenter.photo" 
            :src="presenter.photo" 
            class="contact-photo" 
            alt="Contact photo"
          />
          <div class="contact-info">
            <div class="contact-name">{{ presenter.name }}</div>
            <div class="contact-title">{{ presenter.title }}</div>
            <a v-if="presenter.email" :href="`mailto:${presenter.email}`" class="contact-email">{{ presenter.email }}</a>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer disclaimer -->
    <div v-if="props.disclaimer" class="footer-disclaimer">
      {{ props.disclaimer }}
    </div>
    
    <!-- Default slot for custom content -->
    <div v-if="$slots.default" class="footer-disclaimer">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.slidev-layout.thank-you {
  font-family: var(--company-font-primary);
  display: flex;
  flex-direction: column;
  padding: var(--company-default-padding);
}

/* Light theme */
.company-light-scheme.slidev-layout.thank-you {
  background: var(--company-bg-primary, #fff);
  color: var(--company-text-primary, #000);
}

/* Dark theme */
.company-dark-scheme.slidev-layout.thank-you {
  background: var(--company-bg-primary, #000);
  color: var(--company-text-primary, #fff);
}

/* White theme (default fallback) */
.company-white-scheme.slidev-layout.thank-you {
  background: #fff;
  color: #000;
}

/* Logo container at the top */
.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  /* margin-bottom: 2rem; */
}

.logo {
  height: 4.5rem;
  width: auto;
  object-fit: contain;
}

/* Main content with thank you and contacts */
.content-container {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}

/* Thank you text on the left */
.thank-you-text {
  text-align: right;
  padding-right: 2rem;
}

.thank-you-line {
  font-size: 2.5rem;
  font-weight: bold;
  line-height: 1.2;
  font-family: var(--company-font-heading, monospace);
  margin-bottom: 0.5rem;
}

.company-light-scheme .thank-you-line {
  color: var(--company-text-primary, #000);
}

.company-dark-scheme .thank-you-line {
  color: var(--company-text-primary, #fff);
}

.company-white-scheme .thank-you-line {
  color: #000;
}

/* Vertical divider */
.divider {
  width: 2px;
  height: 18rem;
}

.company-light-scheme .divider {
  background: var(--company-text-primary, #000);
}

.company-dark-scheme .divider {
  background: var(--company-text-primary, #fff);
}

.company-white-scheme .divider {
  background: #000;
}

/* Contact cards on the right */
.contacts-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.contact-card {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.contact-photo {
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  object-fit: cover;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.contact-name {
  font-size: 1.25rem;
  font-weight: bold;
}

.company-light-scheme .contact-name {
  color: var(--company-text-primary, #000);
}

.company-dark-scheme .contact-name {
  color: var(--company-text-primary, #fff);
}

.company-white-scheme .contact-name {
  color: #000;
}

.contact-title {
  font-size: 0.95rem;
  line-height: 1.3;
}

.company-light-scheme .contact-title {
  color: var(--company-text-secondary, #666);
}

.company-dark-scheme .contact-title {
  color: var(--company-text-secondary, #ccc);
}

.company-white-scheme .contact-title {
  color: #666;
}

.contact-email {
  font-size: 0.9rem;
  text-decoration: none;
  cursor: pointer;
  transition: opacity 0.2s ease;
  border: none;
}

.company-light-scheme .contact-email {
  color: var(--company-text-primary, #000);
}

.company-dark-scheme .contact-email {
  color: var(--company-text-primary, #fff);
}

.company-white-scheme .contact-email {
  color: #000;
}

.contact-email:hover {
  opacity: 0.8;
  text-decoration: none;
  border: none;
}

/* Footer disclaimer */
.footer-disclaimer {
  margin-top: auto;
  padding:2rem 0;
  font-size: 0.75rem;
  line-height: 1.4;
  text-align: left;
}

.company-light-scheme .footer-disclaimer {
  color: var(--company-text-secondary, #666);
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.company-dark-scheme .footer-disclaimer {
  color: var(--company-text-secondary, #999);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.company-white-scheme .footer-disclaimer {
  color: #666;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .content-container {
    gap: 2rem;
  }
  
  .thank-you-line {
    font-size: 2.5rem;
  }
  
  .logo {
    height: 2.5rem;
  }
}

@media (max-width: 768px) {
  .slidev-layout.thank-you {
    padding: 2rem;
  }
  
  .content-container {
    flex-direction: column;
    gap: 2rem;
  }
  
  .thank-you-text {
    text-align: center;
    padding-right: 0;
  }
  
  .thank-you-line {
    font-size: 2rem;
  }
  
  .divider {
    width: 12rem;
    height: 2px;
  }
  
  .logo-container {
    flex-wrap: wrap;
    gap: 1.5rem;
  }
  
  .logo {
    height: 2rem;
  }
  
  .contact-photo {
    width: 4rem;
    height: 4rem;
  }
}
</style>
