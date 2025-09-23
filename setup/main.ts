import { defineAppSetup } from '@slidev/types'
// import courseInfoPlugin from '../plugins/courseInfoPlugin'
// import Cite from '../../src/components/Cite.vue'
//import Bibliography from '../../src/components/Bibliography'
//import CreditScroll from '../components/CreditScroll.vue'
import Admonition from '../components/Admonition.vue'
import AdmonitionType from '../components/AdmonitionType.vue'
import QrcodeVue from 'qrcode.vue'
import SpeechBubble from '../components/SpeechBubble.vue'
import StickyNote from '../components/StickyNote.vue'

// New components
import CardGrid from '../components/CardGrid.vue'
import TaskOverview from '../components/TaskOverview.vue'
import SvgAnimation from '../components/SvgAnimation.vue'

// Auto company theming - import configurations
import difoConfig from '../presentations/difo/config.js'
import bellConfig from '../presentations/bell/config.js'
import zeyosConfig from '../presentations/zeyos/config.js'

// Company configurations map
const companyConfigs = {
  difo: difoConfig,
  bell: bellConfig,
  zeyos: zeyosConfig
}

// Vue3 Kawaii
import BackPack from '../components/vue3-kawaii/components/backpack/BackPack.vue'
import Browser from '../components/vue3-kawaii/components/browser/Browser.vue'
import Cat from '../components/vue3-kawaii/components/cat/Cat.vue'
import CreditCard from '../components/vue3-kawaii/components/creditCard/CreditCard.vue'
import Ghost from '../components/vue3-kawaii/components/ghost/Ghost.vue'
import IceCream from '../components/vue3-kawaii/components/iceCream/IceCream.vue'
import Mug from '../components/vue3-kawaii/components/mug/Mug.vue'
import Planet from '../components/vue3-kawaii/components/planet/Planet.vue'
import SpeechBubbleGuy from '../components/vue3-kawaii/components/speechBubble/SpeechBubbleGuy.vue'

// import { GeistSans } from 'geist/font/sans'
// import { GeistMono } from 'geist/font/mono'

// Global styles are automatically loaded via styles/index.ts
// Custom presentation-specific styles can be added to the public folder
// and imported directly in presentations as needed

export default defineAppSetup(({ app, router }) => {
  // Register existing components
  // app.component('CreditScroll', CreditScroll)
  app.component('Admonition', Admonition)
  app.component('AdmonitionType', AdmonitionType)
  app.component('QRCode', QrcodeVue)
  app.component('SpeechBubble', SpeechBubble)
  app.component('StickyNote', StickyNote)
  app.component('BackPack', BackPack)
  app.component('Browser', Browser)
  app.component('Cat', Cat)
  app.component('CreditCard', CreditCard)
  app.component('Ghost', Ghost)
  app.component('IceCream', IceCream)
  app.component('Mug', Mug)
  app.component('Planet', Planet)
  app.component('SpeechBubbleGuy', SpeechBubbleGuy)
  
  // Register new components
  app.component('CardGrid', CardGrid)
  app.component('TaskOverview', TaskOverview)
  app.component('SvgAnimation', SvgAnimation)
  
  // Auto-apply company theming
  const applyCompanyTheme = (company: string | null | undefined, colorScheme: string | null | undefined = 'light') => {
    const companyKey = (company?.toLowerCase() || 'difo') as keyof typeof companyConfigs
    const config = companyConfigs[companyKey] || companyConfigs.difo
    const root = document.documentElement
    
    // Apply all configuration variables (both base and -dark variants)
    Object.entries(config).forEach(([key, value]) => {
      // Skip non-style properties
      if (key === 'name') return
      
      const cssVar = `--company-${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`
      root.style.setProperty(cssVar, value as string)
    })
    
    // CSS classes handle switching between light and dark variants
    const scheme = colorScheme?.toLowerCase() || 'light'
    console.log(`🎨 Applied ${companyKey} company theme (${Object.keys(config).length - 1} variables, ${scheme} mode handled by CSS)`)
    return config
  }
  
  // Apply company theme on route change
  router.afterEach((to) => {
    const frontmatter = to.meta?.frontmatter as any
    const company = frontmatter?.company || 'difo'
    const colorScheme = frontmatter?.color || 'light'
    applyCompanyTheme(company, colorScheme)
  })
  
  // Apply initial theme
  if (typeof window !== 'undefined') {
    setTimeout(() => {
      const currentRoute = router.currentRoute.value
      const frontmatter = currentRoute.meta?.frontmatter as any
      const company = frontmatter?.company || 'difo'
      const colorScheme = frontmatter?.color || 'light'
      applyCompanyTheme(company, colorScheme)
    }, 100)
  }
  
  // Make helper available globally
  app.config.globalProperties.$applyCompanyTheme = applyCompanyTheme

  // Global styles are applied automatically
  // Components are registered and ready to use
})
