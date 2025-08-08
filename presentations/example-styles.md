---
theme: ../
colorSchema: light
layout: cover
color: dark
routerMode: hash
title: Global CSS Styling System
slug: "Modern Slidev Presentation"
logo: "cms-it/difo-logo_cms-it-bright.svg"
---

# Global CSS Styling System

### Unified styling approach for all slides

**Global styles are automatically applied to every slide:**
- **Consistent typography** across all presentations
- **Responsive design** that adapts to different screen sizes
- **Utility classes** for common styling needs

---
layout: section
color: light
---

# Global Typography
<hr>

The new system uses **Inter** font family for clean, modern readability across all slides.

---
layout: default
color: light
---

# Clean and Modern Design

- Modern **Inter** font family for excellent readability
- Consistent spacing and typography hierarchy
- Professional color schemes with CSS custom properties
- Built-in responsive design

<div class="global-card">
  This is a global card component that uses the unified styling system. It automatically adapts to light and dark themes.
</div>

<button class="global-button">Professional Button</button>

---
layout: section
color: dark
---

# Global Utility Classes
<hr>

The global system provides utility classes for common styling patterns.

---
layout: default
color: light
---

# Available Global Classes

## Cards and Containers
```html
<div class="global-card">
  Styled container with consistent padding and borders
</div>
```

## Buttons
```html
<button class="global-button">Accent-colored button</button>
```

## Text Styling
```html
<span class="global-highlight">Highlighted text</span>
<span class="global-accent-text">Accent-colored text</span>
```

---
layout: default
color: light
---

# Animation Classes

<div class="global-card global-fade-in">
  <h3>Fade In Animation</h3>
  <p>This card uses the <code>global-fade-in</code> class for smooth entrance animation.</p>
</div>

<div class="global-card global-slide-in">
  <h3>Slide In Animation</h3>
  <p>This card uses the <code>global-slide-in</code> class for horizontal sliding animation.</p>
</div>

---
layout: default
color: light
---

# Typography Hierarchy

# H1 Heading (2.5rem)
## H2 Heading (2rem)  
### H3 Heading (1.5rem)

**Bold text** gets the accent color automatically.

Regular paragraph text has optimal line-height for readability. Code snippets like `const example = true` are styled with the mono font.

> Blockquotes are styled with accent borders and background for emphasis.

---
layout: default
color: light
---

# Color System

The global system uses CSS custom properties for consistent theming:

- `--global-bg-color`: Main background
- `--global-text-color`: Primary text  
- `--global-accent-color`: Accent/highlight color
- `--global-secondary-color`: Secondary text
- `--global-border-color`: Borders and dividers

<div class="global-card">
  <span class="global-accent-text">Accent text example</span> | 
  <span class="global-highlight">Highlighted text</span>
</div>

---
layout: section  
color: dark
---

# Responsive Design
<hr>

The global styles automatically adapt to different screen sizes and device preferences.

---
layout: default
color: light
---

# Dark Mode Support

The system supports both:
- **Automatic dark mode** based on system preferences
- **Manual dark mode** using the `dark-theme` class

Colors automatically adjust between light and dark themes while maintaining consistent branding and readability.

---
layout: default
color: light
---

# Code Highlighting

```typescript
// Global styles provide consistent code styling
const globalConfig = {
  typography: {
    titleFont: 'Inter, sans-serif',
    mainFont: 'Inter, sans-serif', 
    monoFont: 'Fira Code, monospace'
  },
  colors: {
    accent: '#3b82f6',
    background: '#ffffff',
    text: '#1a202c'
  }
}
```

---
layout: default
color: light
---

# Tables

| Feature | Global Styles | Old Theme System |
|---------|---------------|------------------|
| **Consistency** | ✅ Unified across all slides | ❌ Varies by theme |
| **Maintenance** | ✅ Single source of truth | ❌ Multiple theme files |
| **Performance** | ✅ No dynamic loading | ❌ Runtime CSS loading |
| **Customization** | ✅ CSS custom properties | ❌ Theme-specific overrides |

---
layout: section
color: dark
---

# Benefits of Global Styling
<hr>

Simplified, consistent, and performant styling for all presentations.

---
layout: default
color: light
---

# Key Advantages

## 🎨 **Design Consistency**
All slides share the same typography, spacing, and visual hierarchy

## ⚡ **Better Performance** 
No dynamic CSS loading or theme switching overhead

## 🛠️ **Easier Maintenance**
Single global stylesheet instead of multiple theme files

## 🎯 **Focus on Content**
Spend time on your presentation content, not styling configuration

---
layout: default
color: light
---

# Getting Started

1. **Global styles** are automatically applied to all slides
2. **Use utility classes** like `global-card`, `global-button` for common patterns
3. **Customize with CSS custom properties** in your own stylesheets
4. **Add presentation-specific styles** in the public folder if needed

<div class="global-card global-fade-in">
  <h3>Ready to Go!</h3>
  <p>Your slides now have consistent, professional styling out of the box.</p>
  <button class="global-button">Start Creating</button>
</div>

---
layout: cover
color: dark
---

# Thank You

### Modern, consistent styling for every slide

**Global CSS System** - Simple, fast, and beautiful