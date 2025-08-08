# CMS-IT Presentation Styles

This directory demonstrates the new presentation-specific styles functionality.

## Using Custom Styles

You can now load CSS files directly from your presentation directory by using file paths in the `styles` frontmatter property:

```yaml
---
styles: ./cms-it/style.css
---
```

## How It Works

The system detects whether the `styles` value is:
- **A file path** (starts with `./`, `../`, or `/`) - loads the CSS file directly
- **A theme name** (e.g., `cmsit`, `difo`) - loads from `/styles/theme-{name}.css`

## Benefits

- **Presentation-specific styling**: Each presentation can have its own unique styles
- **Easy organization**: Keep styles close to your presentation content
- **Backward compatibility**: Existing theme names continue to work
- **Dynamic loading**: Styles are loaded and unloaded as you navigate slides

## Example

See `style.css` in this directory for custom styles that demonstrate:
- Custom components (`.presentation-specific-card`)
- Layout overrides (`.slidev-layout.section`)
- Animations (`@keyframes presentation-fade-in`)
- Interactive elements (`.presentation-btn`)