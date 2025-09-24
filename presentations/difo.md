---
theme: ../
company: difo
color: dark
layout: cover
title: DIFO Digital Solutions
subtitle: Complete Component & Layout Reference
date: 23.09.2025
version: 1.0
logo: /difo/difo-logo_bright-solid.svg
clientLogo: /bell/difo-logo_bell-bright.svg
logoSize: medium
backgroundImage: /difo/space.png
# Global slide logo settings are now defined in CSS variables
presenters:
  - name: Peter-Christoph Haider
    title: Managing Director, Munich
    email: phaider@difo.de
    photo: /photo.png
  - name: Peter-Christoph Haider
    title: Managing Director, Munich
    email: phaider@difo.de
    photo: /photo.png
---

---
layout: agenda
color: dark
currentItem: 1
highlightCurrent: true
title: AGENDA
agenda:
  - "GRUNDLAGEN"
  - "RISIKOMANAGEMENT"
  - "EINSATZSZENARIEN & WERKZEUGE"
  - "AUSBLICK"
---




---
layout: side-title
color: light
side: left
titlewidth: is-one-third
align: auto
---

:: title ::

# AGENDA

:: content ::

<AgendaTimed 
  :agenda="[
    `That's what we heard from you`,
    `Demonstration of Digital Foundations' capabilities matching your needs`,
    `Q&A, Summary & Next Steps`
  ]"
  :timing="['15 MIN', '60 MIN', '15 MIN']"
  :highlightCurrent="false"
/>

---
layout: cards-grid
color: light
cards:
  - headline: "Strategy"
    content: "Comprehensive planning and strategic guidance for digital transformation initiatives."
    icon: "fas fa-chess"
    color: "blue"
  - headline: "Implementation"
    content: "Expert execution of digital solutions with proven methodologies and best practices."
    icon: "fas fa-cogs"
    color: "green"
  - headline: "Support"
    content: "Ongoing maintenance and support to ensure optimal performance and continuous improvement."
    icon: "fas fa-hands-helping"
    color: "orange"
theme: "light"
sequential: false
---

**🎯 All cards visible:** Standard grid display with all cards shown

---
layout: cards-grid
color: dark
cards:
  - headline: "Analytics"
    content: "Data-driven insights and analytics solutions."
    icon: "fas fa-chart-line"
    color: "blue"
  - headline: "Security"
    content: "Enterprise-grade security and compliance."
    icon: "fas fa-shield-alt"
    color: "red"
  - headline: "Cloud"
    content: "Scalable cloud infrastructure and services."
    icon: "fas fa-cloud"
    color: "teal"
  - headline: "AI/ML"
    content: "Artificial intelligence and machine learning solutions."
    icon: "fas fa-brain"
    color: "purple"
  - headline: "Integration"
    content: "Seamless system integration and connectivity."
    icon: "fas fa-plug"
    color: "orange"
  - headline: "Automation"
    content: "Process automation and workflow optimization."
    icon: "fas fa-robot"
    color: "pink"
theme: "dark"
sequential: true
---

---
layout: full
color: light
---

# SVG Animation - Side by Side Test

<div class="grid grid-cols-2 gap-8 h-full items-center">

<div class="text-center">
<h2 class="text-xl mb-4">🎯 Sequential Mode</h2>
<p class="text-sm mb-4">Use <kbd>→</kbd> arrow key to reveal step-by-step</p>
<SvgNative
  src="/difo/testSvg.svg"
  animation="fade-in"
  :duration="600"
  :stagger="100"
  layerPrefix="fade-in"
  :responsive="true"
  :interactive="true"
  :sequential="true"
  :maxStep="4"
/>
</div>

<div class="text-center">
<h2 class="text-xl mb-4">🖼️ Non-Sequential Mode</h2>
<p class="text-sm mb-4">All elements shown immediately</p>
<SvgNative
  src="/difo/testSvg.svg"
  animation="fade-in"
  :duration="600"
  :stagger="100"
  layerPrefix="fade-in"
  :responsive="true"
  :interactive="true"
  :sequential="false"
  :maxStep="4"
/>
</div>

</div>






---
layout: default
---
<TaskList
  title="Ongoing tasks"
  :tasks="[
    { title: 'Task 1', status: 'completed' },
    { title: 'Task 2', status: 'completed', comment: 'Comment' },
    { title: 'Task 3', status: 'error' },
    { title: 'Task 4', status: 'in-progress' },
    { title: 'Task 5', status: 'in-progress' },
    { title: 'Task 6', status: 'pending' }
  ]"
/>

---
layout: default
---

# Inspirational Quotes

> "The people in the crazy ones, the misfits, the rebels, the troublemakers, the round pegs in the square holes... the ones who see things differently."
> 
> — **Steve Jobs**

---
layout: quote
author: "Steve Jobs"
color: light
---

The people in the crazy ones, the misfits, the rebels, the troublemakers, the round pegs in the square holes... the ones who see things differently -- they're not fond of rules...

---
layout: quote
author: "Albert Einstein"
color: dark
quotesize: "text-xl"
---

Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world, stimulating progress, giving birth to evolution.

---
layout: quotation
quote: "Innovation distinguishes between a leader and a follower."
author: "Steve Jobs"
quoteStyle: "modern"
fontSize: "large"
color: light
---

---
layout: quotation
quote: "The way to get started is to quit talking and begin doing."
author: "Walt Disney"
title: "Founder of Disney"
quoteStyle: "classic"
fontSize: "medium"
color: dark
---

---
layout: quotation
quote: "Success is not final, failure is not fatal: it is the courage to continue that counts."
author: "Winston Churchill"
title: "British Prime Minister"
source: "Speech, 1942"
quoteStyle: "elegant"
fontSize: "large"
color: light
---

---
layout: quotation
quote: "The only way to do great work is to love what you do."
author: "Steve Jobs"
quoteStyle: "minimal"
fontSize: "xlarge"
color: dark
---
