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
backgroundImage: /difo/space.png
# Global slide logo settings are now defined in CSS variables
presenters:
  - name: Peter-Christoph Haider
    title: Managing Director, Munich
    email: phaider@difo.de
    photo: /people/phaider-512.png
---

---
layout: agenda
---

# Complete Reference Guide

1. **Layouts (17 total)** - Every available layout
2. **Components (15 total)** - All interactive components  
3. **Kawaii Components (8 total)** - Animated elements
4. **Light & Dark Versions** - Both color schemes
5. **Usage Examples** - How to implement each

---
layout: section
---

# Layouts Reference

**17 Available Layouts**

---
layout: default
---

# Layout: default

**Standard content layout**

```yaml
---
layout: default
---
```

✅ **Best for:** Regular content slides  
✅ **Features:** Clean typography, consistent spacing  
✅ **Content:** Markdown, lists, images, components

---
layout: default
color: dark
---

# Layout: default (Dark)

**Standard content layout - Dark version**

```yaml
---
layout: default
color: dark
---
```

✅ **Best for:** Regular content slides  
✅ **Features:** Dark theme styling  
✅ **Content:** All markdown elements supported

---
layout: full
---

<div class="h-full flex items-center justify-center text-center">

# Layout: full

**Full-screen layout**

```yaml
---
layout: full
---
```

✅ **Best for:** Large visuals, centered content  
✅ **Features:** Complete control over positioning  
✅ **Content:** Custom HTML layouts

</div>

---
layout: full
color: dark
---

<div class="h-full flex items-center justify-center text-center">

# Layout: full (Dark)

**Full-screen layout - Dark version**

```yaml
---
layout: full
color: dark
---
```

✅ **Best for:** Dark-themed full layouts  
✅ **Features:** Dark background styling  
✅ **Content:** Custom positioned elements

</div>

---
layout: two-cols
---

# Layout: two-cols

**Two column layout**

```yaml
---
layout: two-cols
---

# Left Column
Content here

::right::

# Right Column
Content here
```

::right::

## Features

✅ **Split content**  
✅ **Equal width columns**  
✅ **Flexible content**  
✅ **Responsive design**

---
layout: two-cols
color: dark
---

# Layout: two-cols (Dark)

**Two column layout - Dark version**

```yaml
---
layout: two-cols
color: dark
---
```

::right::

## Dark Features

✅ **Dark theme colors**  
✅ **High contrast text**  
✅ **Professional appearance**  
✅ **Easy on the eyes**

---
layout: side-title
---

# Layout: side-title

**Side title with content area**

```yaml
---
layout: side-title
---

# Side Title Layout
Content flows in main area
```

**Best for:**
- Detailed content
- Technical documentation  
- Long explanations
- Process descriptions

**Features:**
- Title stays fixed on side
- More content space
- Clean hierarchy

---
layout: side-title
color: dark
---

# Layout: side-title (Dark)

**Side title layout - Dark version**

```yaml
---
layout: side-title
color: dark
---
```

**Dark theme benefits:**
- Reduced eye strain
- Professional appearance
- High contrast readability
- Modern aesthetic

---
layout: top-title
---

# Layout: top-title

**Title at top with content below**

```yaml
---
layout: top-title
---

# Top Title Layout
Content flows naturally below
```

**Perfect for:**
- Maximum content space
- Clear hierarchy
- Professional presentations
- Detailed information

**Features:**
- Clean top positioning
- Full width content area
- Consistent branding

---
layout: top-title
color: dark
---

# Layout: top-title (Dark)

**Top title layout - Dark version**

```yaml
---
layout: top-title
color: dark
---
```

**Dark version benefits:**
- Modern professional look
- Reduced screen glare
- Better focus on content
- Elegant presentation style

---
layout: intro
---

# Layout: intro

**Introduction/transition layout**

```yaml
---
layout: intro
---

# Intro Layout
Perfect for section introductions
```

✅ **Centered content**  
✅ **Prominent typography**  
✅ **Brand styling**  
✅ **Great for transitions**

---
layout: intro
color: dark
---

# Layout: intro (Dark)

**Introduction layout - Dark version**

```yaml
---
layout: intro
color: dark
---
```

✅ **Dark theme elegance**  
✅ **High impact presentation**  
✅ **Professional transitions**  
✅ **Modern appearance**

---
layout: section
---

# Layout: section

**Section divider layout**

```yaml
---
layout: section
---

# Section Layout
Divides presentation sections
```

---
layout: section
color: dark
---

# Layout: section (Dark)

**Section divider - Dark version**

```yaml
---
layout: section
color: dark
---
```

---
layout: quote
---

> Layout: quote

**Quote layout for testimonials**

```yaml
---
layout: quote
---

> "Your quote here"
**Author Name** - *Title*
```

**Perfect for testimonials and key statements**

---
layout: quote
color: dark
---

> Layout: quote (Dark)

**Quote layout - Dark version**

```yaml
---
layout: quote
color: dark
---
```

**Elegant dark theme for impactful quotes**

---
layout: quotation
quoteStyle: modern
---

"Layout: quotation"

**Modern quotation layout**

```yaml
---
layout: quotation
quoteStyle: modern
---

"Your quotation text here"
**Source** - *Context*
```

**DIFO Digital Solutions** - *Advanced Styling*

---
layout: quotation
quoteStyle: modern
color: dark
---

"Layout: quotation (Dark)"

**Modern quotation - Dark version**

```yaml
---
layout: quotation
quoteStyle: modern
color: dark
---
```

**Sophisticated dark theme quotations**

---
layout: cover
---

# Layout: cover

**Presentation cover layout**

```yaml
---
layout: cover
title: Your Title
subtitle: Your Subtitle
logo: /path/to/logo.svg
presenters:
  - name: Name
    title: Title
    email: email@domain.com
---
```

---
layout: cover
color: dark
---

# Layout: cover (Dark)

**Cover layout - Dark version**

```yaml
---
layout: cover
color: dark
---
```

**Professional dark theme cover**

---
layout: agenda
---

# Layout: agenda

**Agenda/outline layout**

```yaml
---
layout: agenda
---

# Agenda
1. First item
2. Second item
3. Third item
```

**Perfect for presentation outlines**

---
layout: agenda
color: dark
---

# Layout: agenda (Dark)

**Agenda layout - Dark version**

```yaml
---
layout: agenda
color: dark
---
```

**Dark theme agenda presentation**

---
layout: chart
chartType: bar
---

# Layout: chart

**Chart presentation layout**

```yaml
---
layout: chart
chartType: bar
---

# Chart Layout
Perfect for data visualization
```

**Optimized for charts and graphs**

---
layout: chart
chartType: bar
color: dark
---

# Layout: chart (Dark)

**Chart layout - Dark version**

```yaml
---
layout: chart
color: dark
---
```

**Dark theme for professional data presentation**

---
layout: credits
---

# Layout: credits

**Credits and acknowledgments**

```yaml
---
layout: credits
---

# Credits Layout
- Team member 1
- Team member 2
- Special thanks
```

**Perfect for team acknowledgments**

---
layout: credits
color: dark
---

# Layout: credits (Dark)

**Credits layout - Dark version**

```yaml
---
layout: credits
color: dark
---
```

**Elegant dark theme for acknowledgments**

---
layout: thank-you
style: corporate
---

# Layout: thank-you

**Thank you slide layout**

```yaml
---
layout: thank-you
style: corporate
---

# Thank You
Contact information and next steps
```

**Professional closing slide**

---
layout: thank-you
style: corporate
color: dark
---

# Layout: thank-you (Dark)

**Thank you layout - Dark version**

```yaml
---
layout: thank-you
color: dark
---
```

**Sophisticated dark theme closing**

---
layout: four-cell
---

# Layout: four-cell

**Four quadrant layout**

```yaml
---
layout: four-cell
---
```

**Perfect for:**
- Comparisons
- Feature grids
- Process steps
- Category organization

---
layout: four-cell
color: dark
---

# Layout: four-cell (Dark)

**Four-cell layout - Dark version**

```yaml
---
layout: four-cell
color: dark
---
```

**Dark theme quadrant layout**

---
layout: top-title-two-cols
---

# Layout: top-title-two-cols

**Top title with two columns below**

```yaml
---
layout: top-title-two-cols
---

# Title Here

::left::
Left content

::right::
Right content
```

**Combines top title with column layout**

---
layout: top-title-two-cols
color: dark
---

# Layout: top-title-two-cols (Dark)

**Top title two columns - Dark version**

```yaml
---
layout: top-title-two-cols
color: dark
---
```

**Dark theme with title and columns**

---
layout: two-cols-title
---

# Layout: two-cols-title

**Two columns with title**

```yaml
---
layout: two-cols-title
---

::left::
Left column with title

::right::
Right column content
```

**Flexible column layout with titles**

---
layout: two-cols-title
color: dark
---

# Layout: two-cols-title (Dark)

**Two columns title - Dark version**

```yaml
---
layout: two-cols-title
color: dark
---
```

**Dark theme column layout**

---
layout: section
---

# Components Reference

**15 Interactive Components**

---
layout: default
---

# Component: CardGrid

<CardGrid 
  :cards="[
    {
      title: 'Card 1',
      content: 'Example content for card demonstration',
      icon: 'fa-star',
      color: '#1e3a8a'
    },
    {
      title: 'Card 2',
      content: 'Another card example with different styling',
      icon: 'fa-heart',
      color: '#059669'
    }
  ]"
  :columns="2"
/>

```vue
<CardGrid 
  :cards="[{title: 'Card', content: 'Content', icon: 'fa-star', color: '#1e3a8a'}]"
  :columns="2"
/>
```

---
layout: default
color: dark
---

# Component: CardGrid (Dark)

<CardGrid 
  :cards="[
    {
      title: 'Dark Card 1',
      content: 'Card content in dark theme',
      icon: 'fa-moon',
      color: '#6366f1'
    },
    {
      title: 'Dark Card 2',
      content: 'Another dark theme card example',
      icon: 'fa-star',
      color: '#ec4899'
    }
  ]"
  :columns="2"
/>

**Dark theme card grid styling**

---
layout: default
---

# Component: TaskOverview

<TaskOverview 
  :tasks="[
    {
      title: 'Completed Task',
      description: 'This task has been finished',
      status: 'done',
      icon: 'fa-check-circle'
    },
    {
      title: 'In Progress',
      description: 'Currently working on this',
      status: 'ongoing',
      icon: 'fa-spinner'
    },
    {
      title: 'Pending Task',
      description: 'Waiting to start this task',
      status: 'pending',
      icon: 'fa-clock'
    }
  ]"
/>

```vue
<TaskOverview :tasks="[{title: 'Task', description: 'Desc', status: 'done', icon: 'fa-check'}]" />
```

---
layout: default
color: dark
---

# Component: TaskOverview (Dark)

<TaskOverview 
  :tasks="[
    {
      title: 'Dark Theme Task',
      description: 'Task shown in dark mode',
      status: 'done',
      icon: 'fa-check-circle'
    },
    {
      title: 'Ongoing Work',
      description: 'Progress in dark theme',
      status: 'ongoing',
      icon: 'fa-cog'
    }
  ]"
/>

**Task overview with dark theme styling**

---
layout: default
---

# Component: SpeechBubble

<div class="flex justify-center my-8">
  <SpeechBubble color="blue-light" position="b">
    This is a speech bubble component! Perfect for callouts, tips, and highlighting important information in your presentations.
  </SpeechBubble>
</div>

```vue
<SpeechBubble color="blue-light" position="b">
  Your message here
</SpeechBubble>
```

**Available colors:** blue-light, green-light, yellow-light, red-light  
**Positions:** t (top), b (bottom), l (left), r (right)

---
layout: default
color: dark
---

# Component: SpeechBubble (Dark)

<div class="flex justify-center my-8">
  <SpeechBubble color="blue-dark" position="b">
    Speech bubble in dark theme! Great for dark presentations and professional styling.
  </SpeechBubble>
</div>

```vue
<SpeechBubble color="blue-dark" position="b">
  Dark theme message
</SpeechBubble>
```

**Dark theme speech bubbles for professional presentations**

---
layout: default
---

# Component: StickyNote

<div class="flex justify-center my-8">
  <StickyNote color="yellow-light" title="Important Note">
    Sticky notes are perfect for highlighting key points, reminders, or important information that needs to stand out from the main content.
  </StickyNote>
</div>

```vue
<StickyNote color="yellow-light" title="Note Title">
  Your note content here
</StickyNote>
```

**Available colors:** yellow-light, blue-light, green-light, pink-light

---
layout: default
color: dark
---

# Component: StickyNote (Dark)

<div class="flex justify-center my-8">
  <StickyNote color="blue-dark" title="Dark Theme Note">
    Sticky notes work great in dark themes too! Perfect for professional presentations with a modern look.
  </StickyNote>
</div>

```vue
<StickyNote color="blue-dark" title="Dark Note">
  Dark theme content
</StickyNote>
```

**Dark theme sticky notes for modern presentations**

---
layout: default
---

# Component: Admonition

<Admonition type="info" title="Information">
This is an info admonition. Perfect for providing additional context, helpful tips, or supplementary information.
</Admonition>

<Admonition type="warning" title="Warning">
Warning admonitions help highlight potential issues, important considerations, or things to be careful about.
</Admonition>

<Admonition type="success" title="Success">
Success admonitions are great for highlighting achievements, completed tasks, or positive outcomes.
</Admonition>

```vue
<Admonition type="info" title="Title">Content</Admonition>
```

**Types:** info, warning, success, error

---
layout: default
color: dark
---

# Component: Admonition (Dark)

<Admonition type="info" title="Dark Info">
Dark theme admonitions provide excellent contrast and readability in professional presentations.
</Admonition>

<Admonition type="warning" title="Dark Warning">
Warning messages in dark theme maintain visibility while fitting the overall design aesthetic.
</Admonition>

<Admonition type="success" title="Dark Success">
Success messages look great in dark mode with proper contrast and styling.
</Admonition>

**Dark theme admonitions for professional presentations**

---
layout: default
---

# Component: QRCode

<div class="flex justify-center my-8">
  <QRCode value="https://difo.de" :size="200" />
</div>

```vue
<QRCode value="https://your-url.com" :size="200" />
```

**Perfect for:**
- Website links
- Contact information  
- Event registration
- Digital resources
- Social media profiles

---
layout: default
color: dark
---

# Component: QRCode (Dark)

<div class="flex justify-center my-8">
  <QRCode value="https://difo.de/contact" :size="200" />
</div>

```vue
<QRCode value="https://your-url.com" :size="200" />
```

**QR codes work perfectly in dark themes**  
**Automatically adjusts for optimal scanning**

---
layout: default
---

# Component: SvgAnimation

<div class="flex justify-center my-8">
  <SvgAnimation 
    src="/svg/animated-diagram.svg"
    :auto-animate="true"
    animation-type="fade-in"
    :delay="500"
    :stagger="200"
  />
</div>

```vue
<SvgAnimation 
  src="/path/to/diagram.svg"
  :auto-animate="true"
  animation-type="fade-in"
  :delay="500"
/>
```

**Animation types:** fade-in, slide-up, scale-up

---
layout: default
color: dark
---

# Component: SvgAnimation (Dark)

<div class="flex justify-center my-8">
  <SvgAnimation 
    src="/svg/animated-diagram.svg"
    :auto-animate="true"
    animation-type="slide-up"
    :delay="300"
    :stagger="150"
  />
</div>

**SVG animations work beautifully in dark themes**  
**Perfect for technical diagrams and process flows**

---
layout: default
---

# Component: Box

<Box color="blue">
This is a Box component! Perfect for highlighting content, creating visual sections, or organizing information in a structured way.
</Box>

<Box color="green" style="margin-top: 1rem;">
Boxes come in different colors and can contain any markdown content including **bold text**, *italics*, and lists.
</Box>

```vue
<Box color="blue">
  Your content here
</Box>
```

**Available colors:** blue, green, yellow, red, gray

---
layout: default
color: dark
---

# Component: Box (Dark)

<Box color="blue">
Box component in dark theme! Excellent contrast and readability for professional presentations.
</Box>

<Box color="purple" style="margin-top: 1rem;">
Dark theme boxes maintain excellent visibility and professional appearance.
</Box>

**Dark theme boxes with professional styling**

---
layout: default
---

# Component: Email

<div class="flex justify-center my-8">
  <Email 
    to="phaider@difo.de"
    subject="DIFO Inquiry"
    body="Hello DIFO team, I'm interested in your services."
  >
    Contact DIFO
  </Email>
</div>

```vue
<Email 
  to="email@domain.com"
  subject="Subject"
  body="Email body"
>
  Button Text
</Email>
```

**Perfect for contact slides and call-to-action buttons**

---
layout: default
color: dark
---

# Component: Email (Dark)

<div class="flex justify-center my-8">
  <Email 
    to="phaider@difo.de"
    subject="DIFO Partnership"
    body="Interested in collaboration opportunities."
  >
    Contact Us (Dark)
  </Email>
</div>

**Email component with dark theme styling**  
**Professional appearance for business presentations**

---
layout: default
---

# Component: Thumb

<div class="flex justify-center space-x-8 my-8">
  <Thumb direction="up" size="large" color="green" />
  <Thumb direction="down" size="large" color="red" />
</div>

```vue
<Thumb direction="up" size="large" color="green" />
<Thumb direction="down" size="large" color="red" />
```

**Perfect for:**
- Feedback indicators
- Rating systems
- Approval/rejection status
- User interaction elements

---
layout: default
color: dark
---

# Component: Thumb (Dark)

<div class="flex justify-center space-x-8 my-8">
  <Thumb direction="up" size="large" color="green" />
  <Thumb direction="down" size="large" color="red" />
</div>

**Thumb components work great in dark themes**  
**Clear visibility and professional appearance**

---
layout: default
---

# Component: Line

<div class="my-8">
  <Line color="blue" thickness="2" style="dashed" />
  <div class="my-4">Content between lines</div>
  <Line color="green" thickness="3" style="solid" />
</div>

```vue
<Line color="blue" thickness="2" style="dashed" />
<Line color="green" thickness="3" style="solid" />
```

**Perfect for:**
- Section dividers
- Visual separation
- Design elements
- Content organization

---
layout: default
color: dark
---

# Component: Line (Dark)

<div class="my-8">
  <Line color="cyan" thickness="2" style="dashed" />
  <div class="my-4">Dark theme line separators</div>
  <Line color="purple" thickness="3" style="solid" />
</div>

**Line components with dark theme styling**  
**Great for organizing content in professional presentations**

---
layout: default
---

# Component: ArrowDraw

<div class="flex justify-center my-8">
  <ArrowDraw 
    from="0,50" 
    to="200,50" 
    color="blue" 
    thickness="3"
    style="solid"
  />
</div>

```vue
<ArrowDraw 
  from="0,50" 
  to="200,50" 
  color="blue" 
  thickness="3"
/>
```

**Perfect for:**
- Process flows
- Directional indicators
- Diagram connections
- Visual relationships

---
layout: default
color: dark
---

# Component: ArrowDraw (Dark)

<div class="flex justify-center my-8">
  <ArrowDraw 
    from="0,50" 
    to="200,50" 
    color="cyan" 
    thickness="3"
    style="solid"
  />
</div>

**Arrow drawing with dark theme colors**  
**Perfect for technical diagrams and flow charts**

---
layout: default
---

# Component: ArrowHeads

<div class="flex justify-center space-x-8 my-8">
  <ArrowHeads direction="up" size="large" color="blue" />
  <ArrowHeads direction="right" size="large" color="green" />
  <ArrowHeads direction="down" size="large" color="red" />
  <ArrowHeads direction="left" size="large" color="purple" />
</div>

```vue
<ArrowHeads direction="up" size="large" color="blue" />
<ArrowHeads direction="right" size="large" color="green" />
```

**Directional arrow heads for navigation and flow indication**

---
layout: default
color: dark
---

# Component: ArrowHeads (Dark)

<div class="flex justify-center space-x-8 my-8">
  <ArrowHeads direction="up" size="large" color="cyan" />
  <ArrowHeads direction="right" size="large" color="green" />
  <ArrowHeads direction="down" size="large" color="orange" />
  <ArrowHeads direction="left" size="large" color="purple" />
</div>

**Arrow heads with dark theme color palette**  
**Clear directional indicators for professional presentations**

---
layout: default
---

# Component: VDragLine

<div class="my-8">
  <VDragLine 
    :startX="50"
    :startY="100"
    :endX="250"
    :endY="300"
    color="blue"
    thickness="2"
  />
</div>

```vue
<VDragLine 
  :startX="50"
  :startY="100"
  :endX="250"
  :endY="300"
  color="blue"
  thickness="2"
/>
```

**Interactive vertical drag line for dynamic presentations**

---
layout: default
color: dark
---

# Component: VDragLine (Dark)

<div class="my-8">
  <VDragLine 
    :startX="50"
    :startY="100"
    :endX="250"
    :endY="300"
    color="cyan"
    thickness="2"
  />
</div>

**Vertical drag line with dark theme styling**  
**Interactive elements for engaging presentations**

---
layout: section
---

# Kawaii Components

**8 Animated Characters**

---
layout: default
---

# Component: Cat

<div class="flex justify-center space-x-8 my-8">
  <div class="text-center">
    <Cat :size=120 mood="happy" color="#1e3a8a" />
    <p class="mt-2">Happy Cat</p>
  </div>
  <div class="text-center">
    <Cat :size=120 mood="excited" color="#059669" />
    <p class="mt-2">Excited Cat</p>
  </div>
  <div class="text-center">
    <Cat :size=120 mood="sad" color="#ef4444" />
    <p class="mt-2">Sad Cat</p>
  </div>
</div>

```vue
<Cat :size=120 mood="happy" color="#1e3a8a" />
```

**Moods:** happy, excited, sad, shocked, blissful

---
layout: default
color: dark
---

# Component: Cat (Dark)

<div class="flex justify-center space-x-8 my-8">
  <div class="text-center">
    <Cat :size=120 mood="blissful" color="#6366f1" />
    <p class="mt-2">Blissful Cat</p>
  </div>
  <div class="text-center">
    <Cat :size=120 mood="shocked" color="#ec4899" />
    <p class="mt-2">Shocked Cat</p>
  </div>
</div>

**Kawaii cats with dark theme color palette**

---
layout: default
---

# Component: Ghost

<div class="flex justify-center space-x-8 my-8">
  <div class="text-center">
    <Ghost :size=120 mood="happy" color="#1e3a8a" />
    <p class="mt-2">Happy Ghost</p>
  </div>
  <div class="text-center">
    <Ghost :size=120 mood="excited" color="#059669" />
    <p class="mt-2">Excited Ghost</p>
  </div>
  <div class="text-center">
    <Ghost :size=120 mood="shocked" color="#f59e0b" />
    <p class="mt-2">Shocked Ghost</p>
  </div>
</div>

```vue
<Ghost :size=120 mood="happy" color="#1e3a8a" />
```

**Perfect for adding personality to presentations**

---
layout: default
color: dark
---

# Component: Ghost (Dark)

<div class="flex justify-center space-x-8 my-8">
  <div class="text-center">
    <Ghost :size=120 mood="blissful" color="#6366f1" />
    <p class="mt-2">Blissful Ghost</p>
  </div>
  <div class="text-center">
    <Ghost :size=120 mood="sad" color="#ec4899" />
    <p class="mt-2">Sad Ghost</p>
  </div>
</div>

**Kawaii ghosts with dark theme styling**

---
layout: default
---

# Component: Planet

<div class="flex justify-center space-x-8 my-8">
  <div class="text-center">
    <Planet :size=120 mood="happy" color="#1e3a8a" />
    <p class="mt-2">Happy Planet</p>
  </div>
  <div class="text-center">
    <Planet :size=120 mood="excited" color="#059669" />
    <p class="mt-2">Excited Planet</p>
  </div>
  <div class="text-center">
    <Planet :size=120 mood="blissful" color="#f59e0b" />
    <p class="mt-2">Blissful Planet</p>
  </div>
</div>

```vue
<Planet :size=120 mood="happy" color="#1e3a8a" />
```

**Great for space themes and global concepts**

---
layout: default
color: dark
---

# Component: Planet (Dark)

<div class="flex justify-center space-x-8 my-8">
  <div class="text-center">
    <Planet :size=120 mood="shocked" color="#6366f1" />
    <p class="mt-2">Shocked Planet</p>
  </div>
  <div class="text-center">
    <Planet :size=120 mood="sad" color="#ec4899" />
    <p class="mt-2">Sad Planet</p>
  </div>
</div>

**Kawaii planets with dark theme colors**

---
layout: default
---

# Component: IceCream

<div class="flex justify-center space-x-8 my-8">
  <div class="text-center">
    <IceCream :size=120 mood="happy" color="#1e3a8a" />
    <p class="mt-2">Happy Ice Cream</p>
  </div>
  <div class="text-center">
    <IceCream :size=120 mood="excited" color="#059669" />
    <p class="mt-2">Excited Ice Cream</p>
  </div>
  <div class="text-center">
    <IceCream :size=120 mood="blissful" color="#ef4444" />
    <p class="mt-2">Blissful Ice Cream</p>
  </div>
</div>

```vue
<IceCream :size=120 mood="happy" color="#1e3a8a" />
```

**Sweet characters for fun presentations**

---
layout: default
color: dark
---

# Component: IceCream (Dark)

<div class="flex justify-center space-x-8 my-8">
  <div class="text-center">
    <IceCream :size=120 mood="shocked" color="#6366f1" />
    <p class="mt-2">Shocked Ice Cream</p>
  </div>
  <div class="text-center">
    <IceCream :size=120 mood="sad" color="#ec4899" />
    <p class="mt-2">Sad Ice Cream</p>
  </div>
</div>

**Sweet kawaii characters in dark theme**

---
layout: default
---

# Component: Mug

<div class="flex justify-center space-x-8 my-8">
  <div class="text-center">
    <Mug :size=120 mood="happy" color="#1e3a8a" />
    <p class="mt-2">Happy Mug</p>
  </div>
  <div class="text-center">
    <Mug :size=120 mood="excited" color="#059669" />
    <p class="mt-2">Excited Mug</p>
  </div>
  <div class="text-center">
    <Mug :size=120 mood="blissful" color="#f59e0b" />
    <p class="mt-2">Coffee Bliss</p>
  </div>
</div>

```vue
<Mug :size=120 mood="happy" color="#1e3a8a" />
```

**Perfect for coffee-themed or morning presentations**

---
layout: default
color: dark
---

# Component: Mug (Dark)

<div class="flex justify-center space-x-8 my-8">
  <div class="text-center">
    <Mug :size=120 mood="shocked" color="#6366f1" />
    <p class="mt-2">Shocked Mug</p>
  </div>
  <div class="text-center">
    <Mug :size=120 mood="sad" color="#ec4899" />
    <p class="mt-2">Empty Mug</p>
  </div>
</div>

**Coffee mugs with dark theme styling**

---
layout: default
---

# Component: BackPack

<div class="flex justify-center space-x-8 my-8">
  <div class="text-center">
    <BackPack :size=120 mood="happy" color="#1e3a8a" />
    <p class="mt-2">Happy BackPack</p>
  </div>
  <div class="text-center">
    <BackPack :size=120 mood="excited" color="#059669" />
    <p class="mt-2">Adventure Pack</p>
  </div>
  <div class="text-center">
    <BackPack :size=120 mood="blissful" color="#ef4444" />
    <p class="mt-2">Ready to Go</p>
  </div>
</div>

```vue
<BackPack :size=120 mood="happy" color="#1e3a8a" />
```

**Great for travel, education, or adventure themes**

---
layout: default
color: dark
---

# Component: BackPack (Dark)

<div class="flex justify-center space-x-8 my-8">
  <div class="text-center">
    <BackPack :size=120 mood="shocked" color="#6366f1" />
    <p class="mt-2">Surprised Pack</p>
  </div>
  <div class="text-center">
    <BackPack :size=120 mood="sad" color="#ec4899" />
    <p class="mt-2">Heavy Load</p>
  </div>
</div>

**Adventure backpacks in dark theme**

---
layout: default
---

# Component: Browser

<div class="flex justify-center space-x-8 my-8">
  <div class="text-center">
    <Browser :size=120 mood="happy" color="#1e3a8a" />
    <p class="mt-2">Happy Browser</p>
  </div>
  <div class="text-center">
    <Browser :size=120 mood="excited" color="#059669" />
    <p class="mt-2">Fast Loading</p>
  </div>
  <div class="text-center">
    <Browser :size=120 mood="blissful" color="#f59e0b" />
    <p class="mt-2">Perfect Code</p>
  </div>
</div>

```vue
<Browser :size=120 mood="happy" color="#1e3a8a" />
```

**Perfect for web development and tech presentations**

---
layout: default
color: dark
---

# Component: Browser (Dark)

<div class="flex justify-center space-x-8 my-8">
  <div class="text-center">
    <Browser :size=120 mood="shocked" color="#6366f1" />
    <p class="mt-2">Bug Found!</p>
  </div>
  <div class="text-center">
    <Browser :size=120 mood="sad" color="#ec4899" />
    <p class="mt-2">404 Error</p>
  </div>
</div>

**Tech browsers with dark theme styling**

---
layout: default
---

# Component: CreditCard

<div class="flex justify-center space-x-8 my-8">
  <div class="text-center">
    <CreditCard :size=120 mood="happy" color="#1e3a8a" />
    <p class="mt-2">Happy Payment</p>
  </div>
  <div class="text-center">
    <CreditCard :size=120 mood="excited" color="#059669" />
    <p class="mt-2">Approved!</p>
  </div>
  <div class="text-center">
    <CreditCard :size=120 mood="blissful" color="#f59e0b" />
    <p class="mt-2">Cashback</p>
  </div>
</div>

```vue
<CreditCard :size=120 mood="happy" color="#1e3a8a" />
```

**Perfect for payment, finance, and e-commerce themes**

---
layout: default
color: dark
---

# Component: CreditCard (Dark)

<div class="flex justify-center space-x-8 my-8">
  <div class="text-center">
    <CreditCard :size=120 mood="shocked" color="#6366f1" />
    <p class="mt-2">High Bill!</p>
  </div>
  <div class="text-center">
    <CreditCard :size=120 mood="sad" color="#ec4899" />
    <p class="mt-2">Declined</p>
  </div>
</div>

**Financial kawaii characters in dark theme**

---
layout: default
---

# Component: SpeechBubbleGuy

<div class="flex justify-center my-8">
  <SpeechBubbleGuy 
    :size=120 
    mood="happy" 
    color="#1e3a8a"
    message="Hello from DIFO!"
  />
</div>

```vue
<SpeechBubbleGuy 
  :size=120 
  mood="happy" 
  color="#1e3a8a"
  message="Your message here"
/>
```

**Kawaii character with built-in speech bubble**

---
layout: default
color: dark
---

# Component: SpeechBubbleGuy (Dark)

<div class="flex justify-center my-8">
  <SpeechBubbleGuy 
    :size=120 
    mood="excited" 
    color="#6366f1"
    message="Dark theme rocks!"
  />
</div>

**Speech bubble character with dark theme styling**

---
layout: section
---

# Usage Summary

**Complete Component Library**

---
layout: two-cols
---

# Quick Reference

## 🎨 **17 Layouts**
- `default`, `full`, `two-cols`
- `side-title`, `top-title`, `intro`
- `section`, `quote`, `quotation`
- `cover`, `agenda`, `chart`
- `credits`, `thank-you`
- `four-cell`, `top-title-two-cols`
- `two-cols-title`

## 🧩 **15 Components**
- `CardGrid`, `TaskOverview`
- `SpeechBubble`, `StickyNote`
- `Admonition`, `QRCode`
- `SvgAnimation`, `Box`, `Email`

::right::

## 🎭 **8 Kawaii**
- `Cat`, `Ghost`, `Planet`
- `IceCream`, `Mug`, `BackPack`
- `Browser`, `CreditCard`
- `SpeechBubbleGuy`

## 🎯 **Other Components**
- `Thumb`, `Line`, `ArrowDraw`
- `ArrowHeads`, `VDragLine`

## 🌓 **Both Themes**
✅ **Light theme** - Default  
✅ **Dark theme** - Add `color: dark`

---
layout: thank-you
style: corporate
---

# Complete Reference

## Every Component & Layout Available

**Ready to build amazing presentations with DIFO branding!**

🚀 **150+ variables** in `presentations/difo/config.js`  
🎨 **Automatic styling** with `company: difo`  
📱 **Responsive design** for all devices