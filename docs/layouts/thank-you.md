# Thank You Layout

The `thank-you` layout provides a clean and professional template for ending presentations with contact information displayed in a modern card-based design.

## Design

The layout features:
- **Company logos** at the top (centered)
- **Multi-language thank you message** on the left ("Danke! Thank you! Merci! Дякую!")
- **Contact cards** on the right with photos, names, titles, and emails
- **Footer disclaimer** at the bottom (optional)

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `color` | String | `'white'` | Color scheme for the slide (light/dark/white) |

## Frontmatter Options

Configure the thank-you slide through frontmatter:

### Logos

Display company or partner logos at the top of the slide:

```yaml
logos:
  - '/path/to/logo1.svg'
  - '/path/to/logo2.svg'
  - '/path/to/logo3.svg'
```

### Presenters/Contacts

Display contact cards with profile photos:

```yaml
presenters:
  - name: Peter-Christoph Haider
    title: Managing Director, Munich
    email: phaider@company.com
    photo: /people/photo1.png
  - name: Jane Smith
    title: Solution Specialist, London
    email: jsmith@company.com
    photo: /people/photo2.png
```

Each presenter card includes:
- `name` - Full name of the contact
- `title` - Job title and location
- `email` - Email address
- `photo` - Path to circular profile photo

### Disclaimer (Optional)

Add a footer disclaimer or legal text:

```yaml
disclaimer: 'This document contains confidential information. Do not copy or distribute without permission.'
```

Alternatively, you can use markdown content in the slide body for more complex disclaimers.

## Usage Example

### Complete Example

```markdown
---
layout: thank-you
color: dark
logos:
  - '/company/logo1.svg'
  - '/company/logo2.svg'
  - '/company/logo3.svg'
presenters:
  - name: Peter-Christoph Haider
    title: Managing Director, Munich
    email: phaider@company.com
    photo: /people/peter.png
  - name: Jane Smith
    title: Solution Specialist, London
    email: jsmith@company.com
    photo: /people/jane.png
disclaimer: 'This document contains confidential information. Do not distribute without permission.'
---
```

### With Custom Disclaimer Content

```markdown
---
layout: thank-you
color: light
logos:
  - '/company/logo.svg'
presenters:
  - name: John Doe
    title: CEO
    email: john@company.com
    photo: /people/john.png
---

This presentation is confidential and proprietary. All rights reserved © 2025 Company Name.
```

## Responsive Design

The layout automatically adapts to different screen sizes:
- **Desktop**: Side-by-side layout with thank you text and contact cards
- **Tablet**: Adjusted spacing and font sizes
- **Mobile**: Stacked layout with smaller elements

## Color Schemes

The layout works with all theme color schemes:
- **Light**: Light background with dark text
- **Dark**: Dark background with light text
- **White**: White background

Colors are controlled through CSS variables:
- `--company-text-primary` - Main text color
- `--company-text-secondary` - Secondary text color (subtitles)
- `--company-bg-primary` - Background color
- `--company-font-heading` - Font for thank you text
- `--company-font-primary` - Font for body text

## Customization

### Custom Thank You Text

While the default text is "Danke! Thank you! Merci! Дякую!", you can customize it by editing the layout file directly if needed, or use CSS to override the content.

### Photo Styling

Profile photos are displayed as circles with a border. Make sure to use:
- Square images (1:1 aspect ratio)
- High resolution (at least 512x512px)
- Good contrast with the background

### Logo Sizing

Logos are automatically sized to fit the layout. For best results:
- Use SVG format for crisp rendering
- Ensure logos work on both light and dark backgrounds
- Logos should have transparent backgrounds

## Best Practices

1. **Use 2-3 logos maximum**: Too many logos can clutter the top section
2. **Keep contact info concise**: Include only the most important contacts (2-3 people max)
3. **Professional photos**: Use high-quality, professional headshots
4. **Match color scheme**: Choose dark/light based on your brand colors
5. **Brief disclaimer**: Keep footer text short and readable

## Integration with Cover Slide

The thank-you layout is designed to complement the `cover` layout. You can use the same logos and presenters data across both slides:

```markdown
---
# Cover slide
layout: cover
logos:
  - '/company/logo.svg'
presenters:
  - name: John Doe
    title: CEO
    email: john@company.com
    photo: /people/john.png
---

# Your presentation content...

---
# Thank you slide
layout: thank-you
color: dark
logos:
  - '/company/logo.svg'
presenters:
  - name: John Doe
    title: CEO
    email: john@company.com
    photo: /people/john.png
---
```

## Accessibility

The layout includes:
- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images
- Sufficient color contrast
- Responsive text sizing

The thank-you layout provides a professional and memorable way to end your presentations while making it easy for your audience to contact you.