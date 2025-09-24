# Thank You Layout

The `thank-you` layout provides a comprehensive template for ending presentations with style. It supports multiple visual styles, contact information, social links, and animations to create memorable closing slides.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `color` | String | `'white'` | Color scheme for the slide |
| `style` | String | `'classic'` | Visual style of the thank-you slide |
| `showContact` | Boolean | `true` | Whether to display contact information |
| `showSocial` | Boolean | `true` | Whether to display social media links |
| `animated` | Boolean | `true` | Whether to animate elements on load |

## Styles

The layout supports 7 different visual styles:

### Classic (`style: "classic"`)
- Clean, traditional design
- Centered layout with standard typography
- Works well with any color scheme
- Professional and timeless

### Modern (`style: "modern"`)
- Contemporary card-based design
- White background with shadow
- Gradient text effects
- Clean and sophisticated

### Minimal (`style: "minimal"`)
- Ultra-clean design
- Reduced visual elements
- Light typography
- Perfect for minimalist presentations

### Celebration (`style: "celebration"`)
- Fun and energetic design
- Animated confetti background
- Emoji elements (🎉)
- Great for project completions

### Corporate (`style: "corporate"`)
- Professional business style
- Bordered container
- Formal typography
- Ideal for business presentations

### Gradient (`style: "gradient"`)
- Modern gradient background
- White text on colorful background
- Glass-morphism effects
- Eye-catching and modern

### Elegant (`style: "elegant"`)
- Sophisticated design
- Subtle color accent bar
- Refined typography
- Perfect for high-end presentations

## Frontmatter Options

Configure the thank-you slide through frontmatter:

### Basic Configuration

```yaml
---
layout: thank-you
style: "modern"
color: light
thankYou: "Thank You!"
subtitle: "Questions & Discussion"
---
```

### Contact Information

```yaml
---
layout: thank-you
presenter: "John Doe"
presenterTitle: "Senior Developer"
email: "john.doe@company.com"
phone: "+1 (555) 123-4567"
website: "https://johndoe.dev"
---
```

### Social Media Links

```yaml
---
layout: thank-you
social:
  - name: "LinkedIn"
    icon: "fa-linkedin"
    url: "https://linkedin.com/in/johndoe"
  - name: "Twitter"
    icon: "fa-twitter"
    url: "https://twitter.com/johndoe"
  - name: "GitHub"
    icon: "fa-github"
    url: "https://github.com/johndoe"
---
```

### Control Visibility

```yaml
---
layout: thank-you
showContact: false    # Hide contact information
showSocial: false     # Hide social media links
animated: false       # Disable animations
---
```

## Usage Examples

### Professional Business Presentation

```markdown
---
layout: thank-you
style: "corporate"
color: light
thankYou: "Thank You for Your Partnership"
subtitle: "Driving success together"
presenter: "Sarah Johnson"
presenterTitle: "Account Manager"
email: "sarah.johnson@company.com"
phone: "+1 (555) 987-6543"
website: "https://company.com"
social:
  - name: "LinkedIn"
    icon: "fa-linkedin"
    url: "https://linkedin.com/company/company"
---
```

### Creative Project Presentation

```markdown
---
layout: thank-you
style: "celebration"
color: light
thankYou: "Mission Accomplished!"
subtitle: "Another successful project delivered"
presenter: "Creative Team"
showContact: false
animated: true
---
```

### Technical Conference Talk

```markdown
---
layout: thank-you
style: "modern"
color: dark
thankYou: "Thank You for Listening"
subtitle: "Let's build the future together"
presenter: "Alex Chen"
presenterTitle: "Senior Software Engineer"
email: "alex.chen@techcorp.com"
website: "https://alexchen.dev"
social:
  - name: "GitHub"
    icon: "fa-github"
    url: "https://github.com/alexchen"
  - name: "Twitter"
    icon: "fa-twitter"
    url: "https://twitter.com/alexchen_dev"
---
```

### Minimalist Design Presentation

```markdown
---
layout: thank-you
style: "minimal"
color: light
thankYou: "Thanks"
subtitle: "Simple. Clean. Effective."
showContact: false
showSocial: false
---
```

### International Presentation

```markdown
---
layout: thank-you
style: "elegant"
color: dark
thankYou: "Merci Beaucoup"
subtitle: "Your trust drives our excellence"
presenter: "Marie Dubois"
presenterTitle: "International Relations"
email: "marie.dubois@global.com"
showSocial: false
---
```

### Startup Pitch

```markdown
---
layout: thank-you
style: "gradient"
color: dark
thankYou: "Thank You"
subtitle: "Ready to disrupt the market together?"
presenter: "Startup Team"
email: "hello@startup.com"
website: "https://startup.com"
social:
  - name: "LinkedIn"
    icon: "fa-linkedin"
    url: "https://linkedin.com/company/startup"
  - name: "AngelList"
    icon: "fa-angellist"
    url: "https://angel.co/startup"
---
```

## Frontmatter Reference

### Text Content
- `thankYou` / `title` - Main thank you message
- `subtitle` / `message` - Subtitle or additional message

### Contact Information
- `presenter` / `author` - Presenter's name
- `presenterTitle` / `position` - Job title or position
- `email` - Email address (becomes clickable link)
- `phone` - Phone number (becomes clickable link)
- `website` - Website URL (becomes clickable link)

### Social Media
- `social` - Array of social media links
  - `name` - Display name
  - `icon` - FontAwesome icon class (e.g., "fa-linkedin")
  - `url` - Link URL

### Display Options
- `showContact` - Show/hide contact information section
- `showSocial` - Show/hide social media links
- `animated` - Enable/disable entrance animations

## Animations

When `animated: true` (default), elements appear with staggered animations:
1. **Main title**: Bounces in
2. **Subtitle**: Fades in with delay
3. **Contact info**: Slides up with delay
4. **Social links**: Fades in last

Disable animations for static presentations or when you prefer immediate display.

## Responsive Design

The layout automatically adapts to different screen sizes:
- **Desktop**: Full-size layout with all elements
- **Tablet**: Adjusted spacing and font sizes
- **Mobile**: Compact layout with smaller fonts

## Color Schemes

Works seamlessly with all theme color schemes:
- **Light**: Dark text on light background
- **Dark**: Light text on dark background
- **Company colors**: Integrates with brand theming

## Integration Features

- **Company theming**: Automatic font and color integration
- **Logo support**: Works with theme logo system
- **Icon support**: FontAwesome icons for contact and social
- **Accessibility**: Proper contrast and semantic markup
- **Print-friendly**: Optimized for PDF export

## Best Practices

1. **Keep it simple**: Don't overwhelm with too much information
2. **Match the tone**: Choose a style that fits your presentation theme
3. **Essential contacts only**: Include only the most relevant contact information
4. **Test animations**: Ensure animations work well in your presentation environment
5. **Brand consistency**: Use colors that match your brand identity

The thank-you layout is perfect for ending presentations on a professional and memorable note while providing clear next steps for your audience to connect with you.
