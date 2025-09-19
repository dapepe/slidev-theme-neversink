---
theme: ../
colorSchema: light
layout: cover
color: bright
routerMode: hash
title: Digital Foundations
slug: "difo"
logo: "difo/difo-logo_bright-solid.svg"
style: "--slide-bg-image: url('/difo/space.png')"
---

<link rel="stylesheet" href="difo/styles.css">

# CRM WORKSHOP ROLLER

07.08.2025, Version 1.0

<!-- <div class="absolute top-10 left-10">
  <img src="/difo/difo-logo_bright-solid.svg" class="w-48 opacity-90" />
</div> -->

<!-- <div class="absolute bottom-10 left-10">
  <img src="/difo/difo-logo_bright-solid.svg" class="w-32 opacity-80" />
</div> -->

---
layout: cover
color: bright
---

# DEFAULT BACKGROUND

## Solid & Clean

This cover uses **default solid** background (no style needed)

---
layout: cover
color: bright
style: "--slide-bg-image: url('/difo/space.png')"
---

# CUSTOM IMAGE

## Direct URL

This cover uses **custom background** (`style: "--slide-bg-image: url('/path/image.png')"`)

---
layout: cover
color: bright
style: "--slide-bg-image: url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920')"
---

# EXTERNAL IMAGE

## From URL

This cover uses **external image** from Unsplash

---
layout: section
color: dark
---

# This is a dark section

This slide uses `layout: section` and `color: dark` in the frontmatter.

The **highlight color** is now set to `--global-accent-color`

---
layout: section
color: light
---

# This is a light section

This slide uses `layout: section` and `color: light` in the frontmatter.

The **highlight color** is now set to `--global-accent-color`

---
layout: default
color: light
---

# This is a default slide

- Activate with `layout: default`
- Uses `color: light`
- Clean and professional presentation style
- Uses the default color

> Can includ quotes

- You can also include code

```javascript
console.log("Hello world")
```

---
layout: default
color: dark
---

# This is a default slide

- Activate with `layout: default`
- Uses `color: light`
- Clean and professional presentation style
- Uses the default color
- ==UPPERCASE EMPHASIS== styling

> Can includ quotes

- You can also include code

```javascript
console.log("Hello world")
```

---
layout: section
color: light
---

# Backward Compatibility
<hr>

The system maintains full backward compatibility with existing color schemes.

---
theme: ../
colorSchema: light
layout: cover
color: cmsit-dark
routerMode: hash
title: CMS-IT Presentation
slug: "CMS IT-Consulting GmbH"
logo: "cms-it/logo-green.svg"
---

# Welcome to CMS IT-Consulting GmbH

### Professional IT Services & Solutions

---
layout: section
color: cmsit-highlight
---

# About Our Company

---
layout: default
color: cmsit-light
---

# Who We Are

- A leading provider of **IT services** and **solutions**
- Focused on ==innovation== and ==customer satisfaction==
- Over 10 years of industry experience
- Team of certified professionals

<div class="cmsit-card">
  Our mission is to deliver cutting-edge technology solutions that empower businesses to achieve their goals efficiently and effectively.
</div>


---
layout: cover
---

# This is the `cover` layout

**Todd Gureckis**   
_New York University_ <a href="https://todd.gureckislab.org" class="ns-c-iconlink"><mdi-open-in-new /></a>  

:: note ::

<div class="fw-200" >

\* Optional `:: note ::` slot for mentioning ==notes== at the bottom.

</div>


---
layout: cover
color: dark
---

# This is the `cover` layout

**Todd Gureckis**   
_New York University_ <a href="https://todd.gureckislab.org" class="ns-c-iconlink"><mdi-open-in-new /></a>  

:: note ::

<div class="fw-200" >

\* Here we set `color: dark` in the frontmatter.

</div>


---
layout: cover
color: amber
---

# This is the `cover` layout

**Todd Gureckis**   
_New York University_ <a href="https://todd.gureckislab.org" class="ns-c-iconlink"><mdi-open-in-new /></a>  


:: note ::

<div class="fw-200">

\* Here we set `color: amber` in the frontmatter.

</div>


---
layout: cover
color: amber-light
---

# This is the `cover` layout

**Todd Gureckis**   
_New York University_ <a href="https://todd.gureckislab.org" class="ns-c-iconlink"><mdi-open-in-new /></a>  


:: note ::

<div class="fw-200" >

\* Here we set `color: amber-light` in the frontmatter.  Notice how the color scheme brings along many of the elements on the page.

</div>


---
layout: cover
color: pink
---

### This is the `cover` layout with a longer title for your talk you just use more `#`s

**Todd Gureckis**   
_New York University_ <a href="https://todd.gureckislab.org" class="ns-c-iconlink"><mdi-open-in-new /></a>  


:: note ::

<div class="fw-200" >

\* Here we set `color: pink` in the frontmatter.  Different choices convey a different vibe for the intro of your talk.  There's lots of choices available.

</div>


---
layout: intro
color: emerald-light
---

# This is the `intro` layout

**Todd Gureckis**   
_New York University_ <a href="https://todd.gureckislab.org" class="ns-c-iconlink"><mdi-open-in-new /></a>  


<br />

This is like the cover slide but with a little less decoration.
It also has a frontmatter option of `color: emerald-light`.

---
layout: section
color: sky
---

# The `default` layout 

The default layout also has an optional `color` option in the frontmatter.
For example this is

```md
---
layout: default
color: sky
---
```

---
layout: section
color: indigo
---

# The `section` layout
<hr>

This is `color: indigo` and the line and font is a light indigo shade.


---
layout: section
color: navy
---

<div class="w-2/3 ml-30">

# The `section` layout
<hr>

<span class='text-amber-300'>
You can use HTML and inline CSS to modify the look and feel.
</span>

</div>

---
layout: quote
color: dark
quotesize: text-sm
authorsize: text-sm
author: "Todd Gureckis"
---

"This is a quote slide.  It has a frontmatter option of `quote` which is the text that appears in the quote box and `author` and options for the size of the text(`quotesize: text-2xl` and `authorsize: text-l`).  I feel it is a little uninspired but might save you some time."


---
layout: full
color: dark
title: Full Layout
---

<div class='border-1px v-full h-full p-5'>

This is `layout: full` which fills the whole screen for the most part.
The grey box is just showing you the full addressable space.
Full can be useful for arbitrary layouts such as on the next slide which uses
the `v-drag` directive to position elements.

</div>

---
layout: full
color: dark
title: Full with Arbitrary Layout
---

<div class='v-full h-full'>

  <SpeechBubble position="l" shape="round"  color='pink-light' v-drag="[555,342,274,58]">

  Hello, I'm an **ice cream**!
  </SpeechBubble>

  <SpeechBubble position="bl" shape="round"  color='emerald-light' v-drag="[445,258,274,57]">

  Hello, I'm **kawaii**.
  </SpeechBubble>

  <SpeechBubble position="r" shape="round" animation="float"  color='sky' v-drag="[143,391,274,84]">

  I'm v-dragged out and ==floating==.
  </SpeechBubble>

  <IceCream :size="150" mood="lovestruck" color="#FDA7DC" v-drag="[439,341,85,150]" />

  <div class="ns-c-tight" v-drag="[143,33,277,214]">

  <span class="bg-red-100 text-red-600 p-2 border-l-6 border-2 border-red-200 rounded-lg pl-4 pr-4">Here's a list of somethings</span>

  - Novelty bonuses
  - Cumulative prediction error
  - Learning progress
  - Surprise
  - Suspense
  - Information gain

  </div>

  <div class="ns-c-tight" v-drag="[461,63,293,148,17]">

  <span class="bg-emerald-100 text-emerald-500 p-2 border-l-6 border-2 border-emerald-200 rounded-lg pl-4 pr-4">Here's another list of things</span>

  - Structured behaviors
  - Compositional
  - Communicable

  </div>

</div>


---
layout: full
title: Full Layout - 2 Col Fig
---

This is an example of using unocss atomic classes to put two figures side by side.

<div class="grid w-full h-fit grid-cols-2 grid-rows-2 mt-10 mb-auto">
<div class="grid-item grid-col-span-1"><!-- Image placeholder --></div>
<div class="grid-item grid-col-span-1"><!-- Image placeholder --></div>
<div class="grid-item grid-col-span-2 text-center h-fit">

**Figure show this**: this is a two column figure

</div>
</div>

---
layout: full
title: Full Layout - 3 Col Fig
---

This is an example of using unocss atomic classes to put three figures side by side.

<div class="grid w-full h-fit grid-cols-3 grid-rows-2 mt-20 mb-auto">
<div class="grid-item grid-col-span-1"><!-- Image placeholder --></div>
<div class="grid-item grid-col-span-1"><!-- Image placeholder --></div>
<div class="grid-item grid-col-span-1"><!-- Image placeholder --></div>
<div class="grid-item grid-col-span-3 text-center h-fit">

**Figure show this**: this is a three column figure

</div>

</div>

---
layout: image-left
image: /images/photo.png
class: mycoolclass
---

<br />

# Image left

This is the `layout: image-left` layout.

---
layout: image-right
image: /images/photo2.png
slide_info: false
class: mycoolclass
---

# Image right

This is the `layout: image-right` layout.

---
layout: image
image: /images/photo.png
title: Image Layout
---

---
layout: iframe-left
title: iframe Left Layout
# the web page source
url: https://gureckislab.org

# a custom class name to the content
class: my-cool-content-on-the-right
---

<br />

# This is a website on the left

This is useful for showing a website but loads live on the web so requires and internet connection.

---
layout: iframe-right
title: iframe Right Layout
# the web page source
url: https://gureckislab.org

# a custom class name to the content
class: my-cool-content-on-the-right
slide_info: false
---

# This is a website on the right

This is useful for showing a website but loads live on the web so requires and internet connection.

---
layout: iframe
title: iframe Layout
# the web page source
url: https://gureckislab.org
slide_info: false
---


---
layout: two-cols-title
columns: is-6
align: l-lt-lt
title: Two Cols Title - Header (Info)
---

:: title ::

# `two-cols-title`

:: left ::

This is `layout: two-cols-title`. 

- There are three slots: `:: title ::`, `:: left ::`, and `:: right ::` along with the default which is implicit before any named slots.

- It additionally provides three configuration options in the slide YAML front matter:
  `color`, `columns` and `align`.

:: right ::

- `color` is the color scheme.

- `columns` is the relative spacing given to the left versus right column. The overall space is divided into 12 columns. Instructions like `is-5` will give 5 units to the left and 7 to the right.

- The <code>align</code> parameter determines how the columns look. The notation is for example
  <code>align: l-cm-cm</code>. The first part is for the header, the second for the left column, the third part is for the right column. The first letter is (<code>c</code> for center, <code>l</code> for left, <code>r</code> for right), the second letter
  is vertical alignment (<code>t</code> for top, <code>m</code> for middle, <code>b</code> for bottom). Only c/l/r works for the header.


---
layout: two-cols-title
columns: is-2
align: l-lt-lt
title: Two Cols Title - Header (is-2)
---

:: title ::

<div class='w-full h-20 bg-indigo-100'>
</div>


:: left ::
<div class='w-full h-100 bg-gray-300'></div>

:: right ::
<div class='w-full h-100 bg-pink-300'></div>


---
layout: two-cols-title
columns: is-4
align: l-lt-lt
title: Two Cols Title - Header (is-4)
---

:: title ::

<div class='w-full h-20 bg-indigo-100'>
</div>


:: left ::
<div class='w-full h-100 bg-gray-300'></div>

:: right ::
<div class='w-full h-100 bg-pink-300'></div>

---
layout: two-cols-title
columns: is-6
align: l-lt-lt
title: Two Cols Title - Header (is-6)
---

:: title ::

<div class='w-full h-20 bg-indigo-100'>
</div>


:: left ::
<div class='w-full h-100 bg-gray-300'></div>

:: right ::
<div class='w-full h-100 bg-pink-300'></div>


---
layout: two-cols-title
columns: is-8
align: l-lt-lt
title: Two Cols Title - Header (is-8)
---

:: title ::

<div class='w-full h-20 bg-indigo-100'>
</div>


:: left ::
<div class='w-full h-100 bg-gray-300'></div>

:: right ::
<div class='w-full h-100 bg-pink-300'></div>


---
layout: two-cols-title
columns: is-10
align: l-lt-lt
title: Two Cols Title - Header (is-10)
---

:: title ::

<div class='w-full h-20 bg-indigo-100'>
</div>


:: left ::
<div class='w-full h-100 bg-gray-300'></div>

:: right ::
<div class='w-full h-100 bg-pink-300'></div>


---
layout: two-cols-title
columns: is-10
align: l-lt-lt
titlepos: b
title: Two Cols Title - Footer (is-10)
---

:: title ::

<div class='w-full h-20 bg-indigo-100'>
</div>


:: left ::
<div class='w-full h-100 bg-gray-300'></div>

:: right ::
<div class='w-full h-100 bg-pink-300'></div>


---
layout: two-cols-title
columns: is-4
align: l-lt-lt
titlepos: b
title: Two Cols Title - no title (is-4)
---



:: left ::
<div class='w-full h-120 bg-gray-300'></div>

:: right ::
<div class='w-full h-120 bg-pink-300'></div>






---
layout: side-title
side: l
color: violet
titlewidth: is-4
align: rm-lm
title: Side Title Layout (Another)
---

:: title ::

# `side-title`

# <mdi-arrow-right />

:: content ::

This is `layout: side-title` with `side: left` in the front matter.

```yaml
side: left
color: violet
titlewidth: is-4
align: rm-lm
```



---
layout: side-title
side: r
color: pink-light
titlewidth: is-6
align: lm-lb
title: Side Title Layout (Another)
---

:: title ::
 
# `side-title`

# <mdi-arrow-right />

:: content ::

This is `layout: side-title` with `side: right` in the front matter.

```yaml
side: right
color: pink-light
titlewidth: is-6
align: lm-lb
```


---
layout: top-title
color: violet
align: l
title: Top Title (Another)
---

:: title ::

# `top-title`: A variation with different parameters


:: content ::

Todd has used this navy color on many projects in the past. This is a top title layout.

I sort of like the `###` font style the best.

```yaml
layout: top-title
color: violet
titlewidth: is-2
align: lm
```

---
layout: top-title-two-cols
color: navy
columns: is-6
align: l-lt-lt
title: Top Title (Another)
---


:: title ::

### `top-title-two-cols`: A variation with two columns

:: left ::

- This is the left column
- This is a nice way to add color and distinction to a slide
- Options are `columns` which is the size of the left column, `color` (default `light`), and `align` which is the alignment of the title and columns (e.g., `l-lt-lt`)

:: right ::

- This is the right column
- This is a nice way to add color and distinction to a slide


---
layout: default
---

# Extras

In addition to these custom layouts, the **Neversink** theme includes a few custom components that can be used in your slides. These include sticky notes, speech bubbles, cute icons, QR codes, and more.  The next few slides walks through them:

<div class="ns-c-tight">

- admonitions
- sticky notes
- speech bubbles
- cute icons
- QR codes
</div>


---
layout: two-cols-title
columns: is-6
title: Admonitions
---

<Admonition title="Draggable Note" color="teal-light" width="300px" v-drag="[93,303,300,145,-14]">
If you want to v-drag an admonition, you should set the width to a fixed value.
</Admonition>

:: title ::

# Admonitions

:: left ::

- Admonitions are boxes that you can use to call out things.

<Admonition title="Custom title" color='amber-light'>
This is my admon message
</Admonition>

:: right ::

<AdmonitionType type='note' >
This is note text
</AdmonitionType>

<!--
> [!note]
> This is note text
-->

<AdmonitionType type='important' >
This is important text
</AdmonitionType>

<AdmonitionType type='tip' >
This is a tip
</AdmonitionType>

<AdmonitionType type='warning' >
This is a tip
</AdmonitionType>

<AdmonitionType type='caution' >
This is warning text
</AdmonitionType>

---
layout: two-cols-title
columns: is-6
title: Bubbles
---

<SpeechBubble position="l" color='sky' shape="round"  v-drag="[83,364,274,109]">

Hello, I'm a **speech bubble**! I'm a longer speech bubble. I'm still going.
</SpeechBubble>

:: title ::

# Bubbles

:: left ::

- Bubbles are moveable elements that act as speech bubbles
- They can be configured for where you want the arrow to point
- The can be move around if you enable `v-drag` on the element

:: right ::

<SpeechBubble position="bl" color='amber-light' shape="round">

Hello, I'm a **speech bubble**! I'm a longer speech bubble. I'm still going.
Hello, I'm a **speech bubble**! I'm a longer speech bubble. I'm still going.
Hello, I'm a **speech bubble**! I'm a longer speech bubble. I'm still going.
</SpeechBubble>

---
layout: default
title: Sticky Notes
---

<StickyNote color="amber-light" textAlign="left" width="180px" title="Title" v-drag="[66,318,185,171]">

Hello, I'm a **sticky note**.
</StickyNote>

<StickyNote color="sky-light" textAlign="left" width="180px" title="This is my title" v-drag="[375,306,180,180,-15]">

Hello, I'm also a **sticky note** but am blue sky title.
</StickyNote>

<StickyNote color="pink-light" textAlign="left" width="180px"  v-drag="[667,299,185,171,8]">

Hello, I'm also a **sticky note** but I lack a title.
</StickyNote>

# Sticky Notes

- Sticky notes are moveable elements you can use for notes.
- Syntax is

```js
<StickyNote color="amber-light" textAlign="left" width="180px" title="Title" v-drag>
  Hello, I'm a **sticky note**.
</StickyNote>
```

---
layout: default
title: Kawaii 1
---

# Kawaii

- Kawaii is a Japanese term that means cute

<IceCream :size="80" mood="sad" color="#FDA7DC" />
<IceCream :size="80" mood="shocked" color="#FDA7DC" />
<IceCream :size="80" mood="happy" color="#FDA7DC" />
<IceCream :size="80" mood="blissful" color="#FDA7DC" />
<IceCream :size="80" mood="lovestruck" color="#FDA7DC" />
<IceCream :size="80" mood="excited" color="#FDA7DC" />
<IceCream :size="80" mood="ko" color="#FDA7DC" /><br/>

<BackPack :size="80" mood="sad" color="#FFD882" />
<BackPack :size="80" mood="shocked" color="#FFD882" />
<BackPack :size="80" mood="happy" color="#FFD882"/>
<BackPack :size="80" mood="blissful" color="#FFD882" />
<BackPack :size="80" mood="lovestruck" color="#FFD882" />
<BackPack :size="80" mood="excited" color="#FFD882" />
<BackPack :size="80" mood="ko" color="#FFD882" /><br/>

<Cat :size="80" mood="sad" color="#FFD882" />
<Cat :size="80" mood="shocked" color="#FFD882" />
<Cat :size="80" mood="happy" color="#FFD882"/>
<Cat :size="80" mood="blissful" color="#FFD882" />
<Cat :size="80" mood="lovestruck" color="#FFD882" />
<Cat :size="80" mood="excited" color="#FFD882" />
<Cat :size="80" mood="ko" color="#FFD882" /><br/>

<Browser :size="50" mood="lovestruck" color="#61DDBC" />
<Mug :size="50" mood="lovestruck" color="#61DDBC" />
<Planet :size="50" mood="lovestruck" color="#61DDBC" />
<SpeechBubbleGuy :size="50" mood="lovestruck" color="#d3d3d3" />
<Ghost :size="50" mood="blissful" color="#E0E4E8" />
<CreditCard :size="50" mood="blissful" color="#E0E4E8" />

---
layout: default
title: QR Codes
---

# In-line QR Codes

- Send people to a url with a easy to configure QR code

```vue
<QRCode value="https://gureckislab.org" :size="200" render-as="svg" />
```

<br />
Result:

<QRCode value="https://gureckislab.org" :size="200" render-as='svg'/>



---
layout: default
title: Lines
---

# Lines

<Line :x1=0 :y1=0 :x2=200 :y2=200 :width=2 color='red' v-drag="[326,136,250,250]" />

---
layout: side-title
side: left
color: violet
titlewidth: is-4
align: rm-lt
title: Code Example
---

<SpeechBubble position="br" shape="round" borderWidth="0" animation="float" v-drag="[19,335,261,83]">

Slidev is great at code formatting!
</SpeechBubble>

:: title ::

# <mdi-code-braces /> Code

<IceCream :size="80" mood="excited" color="#FDA7DC" v-drag="[232,444,50,80]" />

:: content ::

Plain javascript:

```js
console.log('Hello, World!')
```

Highlight lines 2 and 3:

```ts {2,3}
function helloworld() {
  console.log('Hello, World!')
  console.log('Hello, World!')
  console.log('Hello, World!')
}
```

Crazy clicking through

```ts {2,3|5|all}
function helloworld() {
  console.log('Hello, World!')
  console.log('Hello, World!')
  console.log('Hello, World!')
  console.log('Hello, World!')
  console.log('Hello, World!')
  console.log('Hello, World!')
}
```

---
layout: side-title
side: left
color: violet
titlewidth: is-4
align: rm-lt
title: Code Example
---


:: title ::

# <mdi-code-braces /> Code

More cool code stuff

:: content ::

Scrollable with clicks 🤯

```ts {2|3|7|12}{maxHeight:'100px'}
function helloworld() {
  console.log('Hello, World 1!')
  console.log('Hello, World 2!')
  console.log('Hello, World 3!')
  console.log('Hello, World 4!')
  console.log('Hello, World 5!')
  console.log('Hello, World 6!')
  console.log('Hello, World 7!')
  console.log('Hello, World 8!')
  console.log('Hello, World 9!')
  console.log('Hello, World 10!')
  console.log('Hello, World 11!')
}
```

You can even edit the code in the browser

```ts {monaco}
console.log('HelloWorld')
```

You can even run the code in the browser

```ts {monaco-run} {showOutputAt:'+1'}
function distance(x: number, y: number) {
  return Math.sqrt(x ** 2 + y ** 2)
}
console.log(distance(3, 4))
```

---
layout: side-title
side: left
color: lime
titlewidth: is-4
align: rm-lt
title: LaTeX Example
---

:: title ::

# <mdi-math-integral-box /> LaTeX Equations

Yeah it does this fine

<Mug :size="80" mood="excited" color="#FDA7DC" v-drag="[342,288,77,80]" />

:: content ::

Inline equations: $\sqrt{3x-1}+(1+x)^2$

Block rendering:

$$
\begin{array}{c}

\nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t} &
= \frac{4\pi}{c}\vec{\mathbf{j}}    \nabla \cdot \vec{\mathbf{E}} & = 4 \pi \rho \\

\nabla \times \vec{\mathbf{E}}\, +\, \frac1c\, \frac{\partial\vec{\mathbf{B}}}{\partial t} & = \vec{\mathbf{0}} \\

\nabla \cdot \vec{\mathbf{B}} & = 0

\end{array}
$$

Line highlighting with clicks!

$$
{1|3|all}
\begin{array}{c}
\nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t} &
= \frac{4\pi}{c}\vec{\mathbf{j}}    \nabla \cdot \vec{\mathbf{E}} & = 4 \pi \rho \\
\nabla \times \vec{\mathbf{E}}\, +\, \frac1c\, \frac{\partial\vec{\mathbf{B}}}{\partial t} & = \vec{\mathbf{0}} \\
\nabla \cdot \vec{\mathbf{B}} & = 0
\end{array}
$$

---
layout: side-title
side: left
color: sky
titlewidth: is-4
align: rm-cm
title: Mermaid Example
---

:: title ::

# Mermaid Diagrams

Everyone is talking about this

:: content ::

```mermaid
sequenceDiagram
  Alice->John: Hello John, how are you?
  Note over Alice,John: A typical interaction
```

---
layout: side-title
side: left
color: sky
titlewidth: is-4
align: rm-cm
title: Mermaid Example
---

:: title ::

# Mermaid Diagrams

Everyone is talking about this

:: content ::

```mermaid {theme: 'neutral', scale: 0.8}
graph TD
B[Text] --> C{Decision}
C -->|One| D[Result 1]
C -->|Two| E[Result 2]
```

A mermaid diagram with two circles side by side horizontally with an arrow pointing from the left circle to the right circle

```mermaid {theme: 'neutral', scale: 0.8}
graph LR
A([Circle 1]) --> B((Circle 2))
```

---
layout: section
color: light
---

# ÜBER DIFO DIGITAL FOUNDATION
<hr>

Ihr Partner für digitale Transformation und innovative Technologielösungen

---
layout: default
color: dark
---

# UNSERE MISSION

## Digitale Transformation ermöglichen

DIFO Digital Foundation steht für **Innovation**, **Exzellenz** und **Vertrauen** in der digitalen Welt. Wir helfen Unternehmen dabei, ihre digitale Zukunft zu gestalten.

<div class="difo-card">
<h3>Vision 2025</h3>
<p>Führender Anbieter für ganzheitliche digitale Transformationslösungen in Europa</p>
</div>

<div class="difo-card">
<h3>Unsere Werte</h3>
<p>Innovation • Qualität • Nachhaltigkeit • Partnerschaft • Exzellenz</p>
</div>

---
layout: two-cols-title
title: 'DIFO Services Portfolio'
columns: is-6
align: l-lt-lt
color: light
---

::title::

# DIFO SERVICES PORTFOLIO

::left::

## Digital Strategy & Consulting
- **Digital Roadmaps** - Strategische Planung
- **Technology Assessment** - Technologie-Bewertung
- **Change Management** - Organisationsentwicklung
- **Innovation Labs** - Experimentelle Ansätze


::right::

## Software Development
- **Custom Applications** - Maßgeschneiderte Lösungen
- **API Integration** - Systemvernetzung
- **Mobile Apps** - iOS, Android, PWA
- **AI & Machine Learning** - Intelligente Systeme


---
layout: side-title
side: r
titlewidth: is-4
align: lm-lm
title: DIFO Technology Stack
color: dark
---

::title::

# <mdi-code-braces /> TECHNOLOGY STACK

**Modern. Scalable. Secure.**

::content::

## Frontend Technologies

```typescript
// React mit TypeScript
interface DIFOComponent {
  name: string;
  version: string;
  features: string[];
}

const difoStack: DIFOComponent = {
  name: "DIFO Frontend Platform",
  version: "2024.1",
  features: [
    "React 18 + TypeScript",
    "Next.js 14 Framework", 
    "Tailwind CSS Styling",
    "Zustand State Management"
  ]
};
```
---
layout: full
title: DIFO Client Success Stories
color: light
---

<div class="v-full h-full p-8">

# DIFO CLIENT SUCCESS STORIES

<div class="grid grid-cols-3 gap-6 mt-8">

<div class="difo-card">
<h3>FinTech Startup</h3>
<h4>Digital Banking Platform</h4>
<p>• Cloud-native Architektur<br/>• 99.9% Uptime<br/>• 500k+ Benutzer<br/>• PCI DSS Compliance</p>
<div class="text-sm mt-4 text-blue-600">6 Monate Entwicklungszeit</div>
</div>

<div class="difo-card">
<h3>Retail Chain</h3>
<h4>Omnichannel E-Commerce</h4>
<p>• 200+ Filialen vernetzt<br/>• Real-time Inventory<br/>• Mobile-first Design<br/>• AI-powered Recommendations</p>
<div class="text-sm mt-4 text-blue-600">300% Umsatzsteigerung</div>
</div>

<div class="difo-card">
<h3>Manufacturing</h3>
<h4>IoT & Industry 4.0</h4>
<p>• Predictive Maintenance<br/>• Real-time Monitoring<br/>• Energy Optimization<br/>• Quality Control</p>
<div class="text-sm mt-4 text-blue-600">40% Effizienzsteigerung</div>
</div>

</div>
</div>

---
layout: quote
author: 'Dr. Sarah Schmidt, CTO DIFO'
quotesize: text-xl
authorsize: text-lg
color: dark
---

"Bei DIFO glauben wir daran, dass jede digitale Transformation mit den Menschen beginnt. Technologie ist nur so gut wie die Teams, die sie einsetzen."

---
layout: image-left
image: /difo/space.png
color: light
---

# DIFO INNOVATION LAB

## Zukunftstechnologien erforschen

Im DIFO Innovation Lab experimentieren wir mit den neuesten Technologien und entwickeln die Lösungen von morgen.
---
layout: top-title-two-cols
columns: is-6
align: l-lt-lt
title: DIFO Team & Culture
color: dark
---

::title::

# DIFO TEAM & CULTURE

::left::

## Unser Team

<div class="difo-card">
<h3>50+ Experten</h3>
<p>• Software Engineers<br/>• Solution Architects<br/>• UX/UI Designer<br/>• DevOps Engineers</p>
</div>

<div class="difo-card">
<h3>Internationale Präsenz</h3>
<p>• Hauptsitz: Berlin<br/>• Niederlassungen: München, Wien<br/>• Remote-first Culture<br/>• 15+ Nationalitäten</p>
</div>

::right::

## Work Culture

<div class="difo-card">
<h3>Innovation First</h3>
<p>• 20% Zeit für eigene Projekte<br/>• Hackathons & Tech Talks<br/>• Continuous Learning<br/>• Conference Budget</p>
</div>

<div class="difo-card">
<h3>Work-Life Balance</h3>
<p>• Flexible Arbeitszeiten<br/>• Remote Work Options<br/>• Wellness Programme<br/>• Team Events</p>
</div>

---
layout: default
title: DIFO Certifications & Awards
color: light
---

# ZERTIFIZIERUNGEN & AUSZEICHNUNGEN

## Industry Certifications

- **ISO 27001** - Information Security Management
- **ISO 9001** - Quality Management System  
- **AWS Advanced Consulting Partner** - Cloud Excellence
- **Microsoft Gold Partner** - Azure Expertise
- **Google Cloud Partner** - GCP Specialization



<IceCream :size="80" mood="excited" color="#6b7bc7" />
<BackPack :size="80" mood="happy" color="#3b4b8c" />
<Cat :size="80" mood="blissful" color="#5a6bb8" />

---
layout: default
title: DIFO Contact & Locations
color: dark
---

# KONTAKT & STANDORTE

## Hauptsitz Berlin

**DIFO Digital Foundation GmbH**  
Unter den Linden 21  
10117 Berlin, Deutschland

- **Telefon:** +49 (0) 30 123 456-789
- **Email:** info@difo.digital
- **Web:** https://difo.digital


