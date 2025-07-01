# Slidev Theme - CMSIT

A professional company theme for [Slidev](https://sli.dev) presentations, designed for CMSIT.

## Features

- 🎨 **Brand Colors** - Uses CMSIT's primary color palette
- 🔤 **Brand Typography** - Implements Titillium Web font family
- 🖼️ **Custom Layouts** - Special layouts for company presentations
- 📊 **Presentation Components** - Custom components styled with company branding
- 🪄 **Visual Consistency** - Ensures consistent look and feel across all slides

## Installation

### Using npm
```bash
npm i slidev-theme-cmsit
```

### Using pnpm (recommended)
```bash
# Install pnpm if you haven't already
npm install -g pnpm

# Install the theme
pnpm add slidev-theme-cmsit
```

## Usage

Add the following frontmatter to your `slides.md`:

```yaml
---
theme: cmsit
---
```

## Running Presentations

### Using npx
```bash
# Run your presentation
npx slidev your-presentation.md

# Run your presentation and open it in the browser
npx slidev your-presentation.md --open

# Run your presentation in dev mode with hot reload
npx slidev your-presentation.md --dev
```

### Using pnpm
```bash
# Run your presentation
pnpm exec slidev your-presentation.md

# Run your presentation and open it in the browser
pnpm exec slidev your-presentation.md --open
```

## Layouts

This theme provides several custom layouts:

- `cmsit-cover` - Cover slide with company logo
- `cmsit-section` - Section divider slide
- `default` with `color: cmsit-dark|cmsit-light|cmsit-highlight` - Default slides with company colors

And all the other layouts from the base Slidev theme.

## Color Schemes

The theme includes three primary color schemes:

- `cmsit-dark` - Dark background (#333249) with light text
- `cmsit-light` - Light background with dark text
- `cmsit-highlight` - Green accent color (#00a650) as background

Apply them using the `color` property:

```yaml
---
layout: default
color: cmsit-dark
---
```

## Custom Components

The theme includes several custom components:

- `cmsit-card` - Styled information cards 
- `cmsit-button` - Branded buttons

Example:

```html
<div class="cmsit-card">
  Important information goes here
</div>

<div class="cmsit-button">
  Click Me
</div>
```

## Icons

This theme works with various icon sets. For best compatibility, use the Carbon icon set:

```html
<!-- Use Carbon icons -->
<carbon-logo-linkedin class="text-3xl" />
<carbon-document class="text-3xl" />
```

## Logo Display

This theme will automatically display the company logo in the slide footer. You can control which logo to show by setting the appropriate color scheme:

- Dark backgrounds use the white logo
- Light backgrounds use the green logo

## Troubleshooting

If you encounter dependency issues when running your presentation, try these solutions:

1. **Missing dependencies**: Install with pnpm for better dependency resolution
   ```bash
   pnpm install
   ```

2. **Icon errors**: Make sure to use icons from the Carbon set or install additional icon sets:
   ```bash
   pnpm add @iconify-json/mdi
   ```

## License

MIT License 