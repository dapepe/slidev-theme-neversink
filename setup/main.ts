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
  // Register components
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
  // Vue App
  //   app.component('Cite', Cite)
  //   app.use(courseInfoPlugin)

  // Global styles are applied automatically
  // Components are registered and ready to use
})
