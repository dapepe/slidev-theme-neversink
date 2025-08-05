import { defineAppSetup } from '@slidev/types'
import { ref, watch } from 'vue'
import { useSlideContext } from '@slidev/client'
// import courseInfoPlugin from '../plugins/courseInfoPlugin'
// import Cite from '../../src/components/Cite.vue'
//import Bibliography from '../../src/components/Bibliography'
//import CreditScroll from '../components/CreditScroll.vue'
// import Admonition from '../components/Admonition.vue'
// import AdmonitionType from '../components/AdmonitionType.vue'
import QrcodeVue from 'qrcode.vue'
// import SpeechBubble from '../components/SpeechBubble.vue'
// import StickyNote from '../components/StickyNote.vue'

// // Vue3 Kawaii
// import Backpack from '../components/vue3-kawaii/components/backpack/Backpack.vue'
// import Browser from '../components/vue3-kawaii/components/browser/Browser.vue'
// import Cat from '../components/vue3-kawaii/components/cat/Cat.vue'
// import CreditCard from '../components/vue3-kawaii/components/creditCard/CreditCard.vue'
// import Ghost from '../components/vue3-kawaii/components/ghost/Ghost.vue'
// import IceCream from '../components/vue3-kawaii/components/iceCream/IceCream.vue'
// import Mug from '../components/vue3-kawaii/components/mug/Mug.vue'
// import Planet from '../components/vue3-kawaii/components/planet/Planet.vue'
// import SpeechBubbleGuy from '../components/vue3-kawaii/components/speechBubble/SpeechBubbleGuy.vue'

// import { GeistSans } from 'geist/font/sans'
// import { GeistMono } from 'geist/font/mono'

// Keep the original cmsit-theme.css import for backward compatibility
import '../styles/cmsit-theme.css'

// Dynamic CSS loader for theme styles
const loadedStyles = ref(new Set<string>())

// Function to dynamically load CSS
function loadThemeCSS(themeName: string) {
  if (loadedStyles.value.has(themeName)) return

  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = `/styles/theme-${themeName}.css`
  link.id = `theme-${themeName}`
  link.onload = () => {
    console.log(`Theme ${themeName} loaded successfully`)
    loadedStyles.value.add(themeName)
  }
  link.onerror = () => {
    console.warn(`Failed to load theme: ${themeName}`)
  }
  document.head.appendChild(link)
}

// Function to unload CSS
function unloadThemeCSS(themeName: string) {
  const existingLink = document.getElementById(`theme-${themeName}`)
  if (existingLink) {
    existingLink.remove()
    loadedStyles.value.delete(themeName)
    console.log(`Theme ${themeName} unloaded`)
  }
}

// Function to setup theme watcher for a specific slide context
function setupThemeWatcher(frontmatter: any) {
  let currentTheme: string | null = null

  // Watch for changes in the styles property
  watch(
    () => frontmatter?.styles,
    (newTheme: string | undefined, oldTheme: string | undefined) => {
      // Unload old theme if it exists and is different
      if (oldTheme && oldTheme !== newTheme) {
        unloadThemeCSS(oldTheme)
      }

      // Load new theme if specified
      if (newTheme && newTheme !== oldTheme) {
        loadThemeCSS(newTheme)
        currentTheme = newTheme
      }
    },
    { immediate: true }
  )

  // Initial load if styles property is set
  if (frontmatter?.styles) {
    loadThemeCSS(frontmatter.styles)
    currentTheme = frontmatter.styles
  }
}

export default defineAppSetup(({ app, router }) => {
  // Register components
  // app.component('CreditScroll', CreditScroll)
  // app.component('Admonition', Admonition)
  // app.component('AdmonitionType', AdmonitionType)
  app.component('QRCode', QrcodeVue)
  // app.component('SpeechBubble', SpeechBubble)
  // app.component('StickyNote', StickyNote)
  // app.component('BackPack', Backpack)
  // app.component('Browser', Browser)
  // app.component('Cat', Cat)
  // app.component('CreditCard', CreditCard)
  // app.component('Ghost', Ghost)
  // app.component('IceCream', IceCream)
  // app.component('Mug', Mug)
  // app.component('Planet', Planet)
  // app.component('SpeechBubbleGuy', SpeechBubbleGuy)
  // Vue App
  //   app.component('Cite', Cite)
  //   app.use(courseInfoPlugin)

  // Setup global theme watcher
  // This will be called for each slide context
  app.mixin({
    setup() {
      try {
        const slideContext = useSlideContext()
        if (slideContext && slideContext.$frontmatter) {
          setupThemeWatcher(slideContext.$frontmatter)
        }
      } catch (error) {
        // Gracefully handle cases where slide context is not available
        console.debug('Slide context not available for theme watcher')
      }
    }
  })

  // Expose global functions for manual theme management
  if (typeof window !== 'undefined') {
    const globalWindow = window as any
    globalWindow.loadTheme = loadThemeCSS
    globalWindow.unloadTheme = unloadThemeCSS
    globalWindow.getLoadedThemes = () => Array.from(loadedStyles.value)
  }
})
