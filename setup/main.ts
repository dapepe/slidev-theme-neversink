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

// Auto-inject company CSS based on frontmatter (only when company changes)
let currentCompany: string | null = null

const injectCompanyCSS = (company: string | null | undefined) => {
  const companyKey = company?.toLowerCase() || 'difo'
  
  // Only inject if company has changed
  if (currentCompany === companyKey) {
    return companyKey
  }
  
  // Remove any existing company CSS
  const existingLink = document.querySelector('link[data-company-css]')
  if (existingLink) {
    existingLink.remove()
  }
  
  // Inject the company-specific CSS file
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = `${companyKey}/variables.css`
  link.setAttribute('data-company-css', companyKey)
  document.head.appendChild(link)
  
  currentCompany = companyKey
  console.log(`📄 Auto-injected ${companyKey}/variables.css (company changed)`)
  return companyKey
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
  
  // Auto-apply company theming and color schemes
  let currentColorScheme: string | null = null
  
  const applyCompanyTheme = (company: string | null | undefined, colorScheme: string | null | undefined = 'light') => {
    // Inject company CSS (only if company changed)
    injectCompanyCSS(company)
    
    // Apply color scheme class (only if scheme changed)
    const scheme = colorScheme?.toLowerCase() || 'light'
    
    if (currentColorScheme !== scheme) {
      const root = document.documentElement
      
      // Remove any existing company scheme classes
      root.classList.remove('company-light-scheme', 'company-white-scheme', 'company-dark-scheme')
      
      // Add the appropriate scheme class
      if (scheme === 'dark') {
        root.classList.add('company-dark-scheme')
      } else {
        root.classList.add('company-light-scheme')
      }
      
      currentColorScheme = scheme
      console.log(`🎨 Applied ${scheme} color scheme`)
    }
  }
  
  // Apply company theme on route change
  router.afterEach((to) => {
    const frontmatter = to.meta?.frontmatter as any
    const company = frontmatter?.company || 'difo'
    const colorScheme = frontmatter?.color || 'light'
    applyCompanyTheme(company, colorScheme)
  })
  
  // Apply initial company theme
  if (typeof window !== 'undefined') {
    setTimeout(() => {
      const currentRoute = router.currentRoute.value
      const frontmatter = currentRoute.meta?.frontmatter as any
      const company = frontmatter?.company || 'difo'
      const colorScheme = frontmatter?.color || 'light'
      applyCompanyTheme(company, colorScheme)
    }, 100)
  }

  // Global styles are applied automatically
  // Components are registered and ready to use
})
