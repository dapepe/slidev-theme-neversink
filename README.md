# Slidev Theme Neversink

An education and academia oriented [Slidev](https://sli.dev/) theme designed with whimsical elements and modern aesthetics. Perfect for lectures, academic presentations, educational content, and conference talks.

This theme combines professional academic styling with playful kawaii-style components, offering a unique balance between serious educational content and engaging visual elements.

🎯 **Perfect for**: University lectures, academic conferences, educational workshops, student presentations, and online courses.

📖 Example [slides](https://gureckis.github.io/slidev-theme-neversink/example/) | 📚 Full [documentation](https://gureckis.github.io/slidev-theme-neversink/) | 🎨 Learn about [Slidev](https://sli.dev/)

## ✨ Key Features

- **🎨 Multiple Color Schemes**: Professional and vibrant color palettes
- **📐 Custom Layouts**: Specialized layouts for different presentation needs
- **🏷️ Brand Customization**: Easy logo and branding integration
- **🧩 Rich Components**: Interactive elements like sticky notes, speech bubbles, and admonitions
- **📝 Enhanced Markdown**: Extended syntax for academic presentations
- **😸 Kawaii Elements**: Optional cute characters and illustrations
- **📱 Responsive Design**: Works perfectly on all screen sizes
- **⚡ Fast Performance**: Optimized for smooth presentations

## 📦 Installation

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (version 16 or higher)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/) or [yarn](https://yarnpkg.com/)

### Install the Theme

```bash
# Using npm
npm install slidev-theme-neversink

# Using pnpm (recommended)
pnpm add slidev-theme-neversink

# Using yarn
yarn add slidev-theme-neversink
```

### Quick Start

1. **Create a new Slidev project** (if you don't have one):
   ```bash
   npm init slidev@latest my-presentation
   cd my-presentation
   ```

2. **Install the theme**:
   ```bash
   npm install slidev-theme-neversink
   ```

3. **Configure your slides** by adding the theme to your `slides.md` frontmatter:
   ```md
   ---
   theme: neversink
   background: https://source.unsplash.com/1920x1080/?nature,water
   title: 'My Amazing Presentation'
   ---
   
   # Welcome to My Presentation
   
   This is the first slide!
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

## 🚀 Usage

### Basic Configuration

Add the theme to the frontmatter of your first slide in `slides.md`:

```md
---
theme: neversink
title: 'Your Presentation Title'
author: 'Your Name'
institution: 'Your Institution'
colorSchema: 'auto'  # or 'light', 'dark'
---
```

### Advanced Configuration

```md
---
theme: neversink
title: 'Advanced Academic Presentation'
author: 'Dr. Jane Smith'
institution: 'University of Excellence'
email: 'jane.smith@university.edu'
website: 'https://yourwebsite.com'
colorSchema: 'light'
highlighter: 'shiki'
lineNumbers: true
drawings:
  enabled: true
  persist: false
  presenterOnly: false
  syncAll: true
fonts:
  sans: 'Inter'
  serif: 'Crimson Text'
  mono: 'Fira Code'
---
```

### Using Custom Layouts

The theme provides several specialized layouts:

```md
---
layout: cover
background: /path/to/your/image.jpg
---

# Your Presentation Title
## Subtitle Here

Your Name • Institution • Date

---
layout: section
---

# Section Header
Brief description of what's coming next

---
layout: two-cols-title
title: 'Comparison Analysis'
---

::left::
## Left Column
- Point 1
- Point 2
- Point 3

::right::
## Right Column
- Point A
- Point B
- Point C

---
layout: quote
author: 'Albert Einstein'
---

"The important thing is not to stop questioning."
```

## 🎨 Features Deep Dive

### [Color Schemes](/docs/colors.md)
Choose from multiple professionally designed color palettes:
- **Light Mode**: Clean, bright, perfect for well-lit rooms
- **Dark Mode**: Easy on the eyes, great for dark environments
- **Auto Mode**: Automatically adapts to system preferences

### [Custom Layouts](/docs/layouts.md)
Specialized layouts designed for academic presentations:
- `cover` - Title slides with branding
- `section` - Section dividers
- `two-cols-title` - Two-column layouts with titles
- `side-title` - Content with sidebar titles
- `quote` - Elegant quote displays
- `credits` - End credits and acknowledgments

### [Branding](/docs/branding.md)
Easily customize the theme with your institution's branding:
- Logo integration
- Custom color schemes
- Font customization
- Header/footer styling

### [Interactive Components](/docs/components.md)
Rich components to enhance your presentations:
- **Sticky Notes**: `<StickyNote>` for highlights and annotations
- **Speech Bubbles**: `<SpeechBubble>` for dialogue and emphasis
- **Admonitions**: Warning boxes, info panels, tips
- **Kawaii Characters**: Cute illustrations to lighten the mood
- **Email Links**: Styled contact information
- **Arrow Drawings**: Interactive arrow annotations

### [Enhanced Markdown](/docs/markdown.md)
Extended Slidev markdown syntax with academic features:
- LaTeX math support
- Code syntax highlighting
- Mermaid diagrams
- Custom containers
- Image galleries

## 📋 Examples

### Simple Academic Presentation
```md
---
theme: neversink
title: 'Introduction to Machine Learning'
author: 'Prof. Data Science'
institution: 'Tech University'
---

# Introduction to Machine Learning

---
layout: section
---

# What is Machine Learning?

---

## Definition

<Admonition type="info">
Machine Learning is a subset of artificial intelligence that enables computers to learn and improve from experience without being explicitly programmed.
</Admonition>

### Key Concepts:
- **Supervised Learning**: Learning with labeled data
- **Unsupervised Learning**: Finding patterns in unlabeled data
- **Reinforcement Learning**: Learning through interaction and feedback

---
layout: two-cols-title
title: 'Types of ML Algorithms'
---

::left::
## Supervised Learning
- Linear Regression
- Decision Trees
- Neural Networks
- Support Vector Machines

::right::
## Unsupervised Learning
- K-Means Clustering
- Principal Component Analysis
- Association Rules
- Hierarchical Clustering
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](/docs/contributing.md) for details on:
- Reporting bugs
- Suggesting enhancements
- Submitting pull requests
- Development setup

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support & Troubleshooting

### Common Issues

**Theme not loading?**
- Ensure you've installed the theme: `npm install slidev-theme-neversink`
- Check that your frontmatter includes `theme: neversink`
- Restart your development server

**Components not rendering?**
- Make sure you're using the correct component syntax
- Check the [components documentation](/docs/components.md) for examples

**Need help?**
- Check the [full documentation](https://gureckis.github.io/slidev-theme-neversink/)
- View the [example slides](https://gureckis.github.io/slidev-theme-neversink/example/)
- Open an issue on GitHub

---

**Built with ❤️ for educators and researchers worldwide**
