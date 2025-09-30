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
  - '/difo/images/difo-logo_bright-solid.svg'
  - '/bell/difo-logo_bell-bright.svg'
  - '/bell/difo-logo_bell-bright.svg'
logoSize: medium
backgroundImage: /difo/images/space.png
presenters:
  - name: Peter-Christoph Haider
    title: Managing Director, Munich
    email: phaider@difo.de
    photo: /difo/images/PETER.png
  - name: Hery-Christian Henry
    title: Solution Specialist, London
    email: hhenry@difo.de
    photo: /difo/images/HENRY.png
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
layout: two-cols-full
color: light
columns: is-5-7
---

:: left ::

<img src="/difo/images/agendaLeft.jpg" class="h-full w-full object-cover" alt="Agenda Left" />

:: right ::


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
layout: disclaimer
leftTitle: 'WICHTIG: VERTRAULICHE UNTERLAGEN'
rightTitle: 'ATTENTION: CONFIDENTIAL DOCUMENTS'
color: light
fontSize: 1rem
headingSize: 2rem
columnRatio: '1-1'
leftBg: '#e5e7eb'
---

::left::
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

::right::
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

---
layout: disclaimer
mode: detailed
color: white
fontSize: .7rem
headingSize: 1.2rem
---

# DISCLAIMER - IMPORTANT NOTICE

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.

Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.

Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.

**Contact**: Lorem ipsum dolor sit amet, consectetur adipiscing elit.

Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.

---
layout: cards-grid
color: light
iconFontSize: "2.5rem"
titleFontSize: "1.125rem"
contentFontSize: "0.9rem"
cards:
  - headline: "Strategy"
    content: "Comprehensive planning and strategic guidance for digital transformation initiatives."
    icon: "fas fa-chess"
    color: "#3b82f6"
  - headline: "Implementation"
    content: "Expert execution of digital solutions with proven methodologies and best practices."
    icon: "/difo/icons/billing.json"
    color: "#10b981"
  - headline: "Support"
    content: "Ongoing maintenance and support to ensure optimal performance and continuous improvement."
    icon: "fas fa-hands-helping"
    color: "#f97316"
theme: "light"
sequential: false
---

# Title

---
layout: cards-grid
color: dark
cards:
  - headline: "Analytics"
    content: "Data-driven insights and analytics solutions."
    icon: "fas fa-chart-line"
    color: "#3b82f6"
  - headline: "Security"
    content: "Enterprise-grade security and compliance."
    icon: "fas fa-shield-alt"
    color: "#ef4444"
  - headline: "Cloud"
    content: "Scalable cloud infrastructure and services."
    icon: "fas fa-cloud"
    color: "#14b8a6"
  - headline: "AI/ML"
    content: "Artificial intelligence and machine learning solutions."
    icon: "fas fa-brain"
    color: "#8b5cf6"
  - headline: "Integration"
    content: "Seamless system integration and connectivity."
    icon: "fas fa-plug"
    color: "#f97316"
  - headline: "Automation"
    content: "Process automation and workflow optimization."
    icon: "fas fa-robot"
    color: "#ec4899"
theme: "dark"
sequential: true
---

---
layout: full
color: light
---

# Title


<div class="h-3/4 w-full flex items-center justify-center mt-8">

<SvgNative
  src="/difo/images/EPBO-Process-EN-V1.0-Dynamic.svg"
  animation="fade-in"
  :duration="600"
  :stagger="100"
  layerPrefix="fade-in"
  :responsive="true"
  :interactive="true"
  :sequential="true"
  :maxStep="4"
  class="max-w-full max-h-full"
/>

</div>






---
layout: default
---
<TaskList
  title="Ongoing tasks"
  fontSize="1rem"
  :tasks="[
    [
      { title: 'Database Setup', status: 'completed', icon: 'fas fa-database' },
      { title: 'API Integration', status: 'completed', comment: 'REST endpoints configured', icon: 'fas fa-plug' },
      { title: 'Authentication', status: 'error', icon: 'fas fa-shield-alt' }
    ],
    [
      { title: 'Frontend Development', status: 'in-progress', icon: 'difo/icons/billing.json' },
      { title: 'Testing Suite', status: 'in-progress', icon: 'fas fa-vial' },
      { title: 'Deployment', status: 'pending', icon: 'fas fa-rocket' }
    ]
  ]"
  :sequential="true"
/>

---
layout: two-cols
color: light
columns: is-5-7
align: lt-lt
---

:: left ::

# Feature 1

At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.


:: right ::

<div class="w-full flex items-center justify-center">
  <img src="/difo/images/billing-screenshot.png" class="max-h-full max-w-full object-contain" alt="Billing Application Screenshot" />
</div>

**Caption:** Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus

---
layout: default
color: light
---

# Feature 2

<div class="w-full flex items-center justify-center mt-8">
  <img src="/difo/images/billing-screenshot.png" class="max-h-100 object-contain" alt="Billing Application Screenshot" />
</div>




---
layout: two-cols-full
color: light
columns: is-6-6
---

:: left ::

# Slide with image

At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.


:: right ::

<img src="/difo/images/agendaLeft.jpg" class="h-full w-full object-cover" alt="Agenda Left" />

---
layout: quote
author: "Albert Einstein"
color: dark
quotesize: "text-xl"
---

Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world, stimulating progress, giving birth to evolution.


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