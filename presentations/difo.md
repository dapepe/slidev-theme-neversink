---
theme: ../
company: difo
color: dark
layout: cover
title: DIFO Digital Solutions
subtitle: Complete Component & Layout Reference
date: 23.09.2025
version: 1.0
logos:
  - '/difo/difo-logo_bright-solid.svg'
  - '/bell/difo-logo_bell-bright.svg'
  - '/bell/difo-logo_bell-bright.svg'
logoSize: medium
backgroundImage: /difo/space.png
presenters:
  - name: Peter-Christoph Haider
    title: Managing Director, Munich
    email: phaider@difo.de
    photo: /difo/PETER.png
  - name: Hery-Christian Henry
    title: Solution Specialist, London
    email: hhenry@difo.de
    photo: /difo/HENRY.png
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

---
layout: chart
chartType: "bar"
color: light
title: "Quarterly Sales Performance"
subtitle: "Revenue growth across quarters"
chartData:
  labels: ["Q1 2024", "Q2 2024", "Q3 2024", "Q4 2024"]
  datasets:
    - label: "Revenue (€M)"
      data: [2.5, 3.2, 4.1, 3.8]
    - label: "Profit (€M)"
      data: [0.8, 1.2, 1.8, 1.5]
---

**Key insights:** Q3 showed the highest revenue growth with strong profit margins.

---
layout: chart
chartType: "line"
color: dark
title: "User Growth Trend"
subtitle: "Monthly active users over time"
chartData:
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
  datasets:
    - label: "Active Users"
      data: [1200, 1350, 1500, 1800, 2100, 2400]
      tension: 0.4
---

**Growth rate:** 100% increase in user base over 6 months.

---
layout: chart
chartType: "pie"
color: light
title: "Market Share Distribution"
subtitle: "Current market position"
chartData:
  labels: ["DIFO", "Competitor A", "Competitor B", "Others"]
  datasets:
    - label: "Market Share (%)"
      data: [35, 25, 20, 20]
---

**Market position:** DIFO leads with 35% market share in the digital solutions sector.

---
layout: chart
chartType: "doughnut"
color: dark
title: "Technology Stack"
subtitle: "Distribution of technologies used"
chartData:
  labels: ["Frontend", "Backend", "Database", "DevOps", "AI/ML"]
  datasets:
    - label: "Usage (%)"
      data: [30, 25, 20, 15, 10]
---

**Technology focus:** Frontend and backend development represent 55% of our technical expertise.

---
layout: chart
chartType: "area"
color: light
title: "Performance Metrics"
subtitle: "System performance over time"
chartData:
  labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"]
  datasets:
    - label: "Response Time (ms)"
      data: [120, 110, 95, 85, 75]
    - label: "Throughput (req/s)"
      data: [800, 950, 1100, 1250, 1400]
---

**Performance improvement:** 37% reduction in response time with 75% increase in throughput.

---
layout: default
---

# Chart Component Examples

You can also use the Chart component directly in any slide:

<div class="grid grid-cols-2 gap-8">

<Chart
  type="bar"
  :data="{
    labels: ['Product A', 'Product B', 'Product C'],
    datasets: [{
      label: 'Sales',
      data: [120, 190, 300]
    }]
  }"
  height="300px"
  theme="light"
/>

<Chart
  type="line"
  :data="{
    labels: ['Jan', 'Feb', 'Mar', 'Apr'],
    datasets: [{
      label: 'Growth',
      data: [10, 25, 40, 60]
    }]
  }"
  height="300px"
  theme="light"
/>

</div>

## Available Chart Types

- **Bar Charts** - Perfect for comparing categories
- **Line Charts** - Great for showing trends over time
- **Pie Charts** - Ideal for showing proportions
- **Doughnut Charts** - Modern alternative to pie charts
- **Area Charts** - Excellent for cumulative data

---
layout: thank-you
style: "classic"
color: light
thankYou: "Thank You!"
subtitle: "Questions & Discussion"
presenter: "DIFO Team"
presenterTitle: "Digital Innovation Experts"
email: "contact@difo.com"
website: "https://difo.com"
social:
  - name: "LinkedIn"
    icon: "fa-linkedin"
    url: "https://linkedin.com/company/difo"
  - name: "Twitter"
    icon: "fa-twitter"
    url: "https://twitter.com/difo"
---

---
layout: thank-you
style: "modern"
color: dark
thankYou: "Thank You for Your Attention"
subtitle: "Let's innovate together!"
presenter: "Digital Solutions Team"
email: "hello@difo.com"
phone: "+1 (555) 123-4567"
showContact: true
showSocial: false
---

---
layout: thank-you
style: "celebration"
color: light
thankYou: "Mission Accomplished!"
subtitle: "Ready for the next challenge"
presenter: "Project Team"
animated: true
showContact: false
---

---
layout: thank-you
style: "gradient"
color: dark
thankYou: "Thank You"
subtitle: "Building the future, one solution at a time"
presenter: "DIFO Innovation Lab"
presenterTitle: "Technology Partners"
email: "innovation@difo.com"
website: "https://innovation.difo.com"
---

---
layout: thank-you
style: "elegant"
color: light
thankYou: "Merci Beaucoup"
subtitle: "Your trust drives our excellence"
presenter: "DIFO Leadership"
email: "leadership@difo.com"
showSocial: false
---

---
layout: thank-you
style: "minimal"
color: dark
thankYou: "Thanks"
subtitle: "Simple. Effective. Done."
showContact: false
showSocial: false
---

---
layout: thank-you
style: "corporate"
color: light
thankYou: "Thank You for Your Partnership"
subtitle: "Driving digital transformation together"
presenter: "DIFO Executive Team"
presenterTitle: "Strategic Partners"
email: "partnerships@difo.com"
phone: "+1 (555) 987-6543"
website: "https://partners.difo.com"
social:
  - name: "LinkedIn"
    icon: "fa-linkedin"
    url: "https://linkedin.com/company/difo"
  - name: "GitHub"
    icon: "fa-github"
    url: "https://github.com/difo"
---