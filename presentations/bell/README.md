# Bell Computer Networks Presentation

This directory contains presentation materials for Bell Computer Networks, featuring professional blue theme branding.

## Brand Colors

- **Primary**: #2b3681 (Bell primary blue)
- **Secondary**: #23438c (Bell secondary blue)
- **Accent**: #797d82 (Professional gray)

## Usage

To use this presentation theme, add the following to your presentation frontmatter:

```yaml
---
theme: neversink
css: ./presentations/bell/styles.css
---
```

## Files

- `styles.css` - Bell brand-specific styling and variables
- `example-bell.md` - Example presentation demonstrating Bell branding
- `difo-logo_bell-bright.svg` - Logo for dark backgrounds
- `difo-logo_bell-color.svg` - Logo for light backgrounds

## Features

- **Professional Blue Theme**: Trust-inspiring blue color palette
- **Custom Components**: `.bell-card` and `.bell-button` classes
- **Logo Integration**: Automatic logo positioning based on theme
- **Shiki Integration**: Code syntax highlighting with brand colors
- **Network Focus**: Styling optimized for technical presentations

## Custom CSS Classes

### Cards
```html
<div class="bell-card">
  <h3>Network Solutions</h3>
  <p>Content with Bell branding</p>
</div>
```

### Buttons
```html
<button class="bell-button">Get Started</button>
```

## Logo Usage

The presentation automatically displays the appropriate logo:
- **Light schemes**: Color logo (`difo-logo_bell-color.svg`)
- **Dark schemes**: Bright logo (`difo-logo_bell-bright.svg`)

## Example

See `example-bell.md` for a complete presentation example showcasing:
- Cover slide with branding
- Network-focused content
- Code blocks with syntax highlighting
- Custom components
- Professional blue styling
- Performance metrics display

## Theme Variations

The Bell theme supports multiple color schemes:
- `bell-light-scheme` - Light blue backgrounds
- `bell-dark-scheme` - Dark blue backgrounds
- `neversink-light-scheme` - Standard light theme
- `neversink-dark-scheme` - Standard dark theme
