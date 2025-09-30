# Timeline Component

An interactive horizontal timeline component that displays events chronologically with automatic full-width scaling and integrated navigation controls.

## Features

- **Full-Width Layout**: Automatically fills 100% of available horizontal space with dynamic spacing between items
- **Compact Design**: Optimized vertical spacing for better slide layout efficiency
- **Interactive**: Click on any timeline dot to reveal its description
- **Sequential Mode**: Optional step-by-step progression prevents jumping ahead and enables arrow key navigation
- **Arrow Key Navigation**: When sequential mode is enabled, use left/right arrow keys to step through timeline items
- **Navigation Override**: In sequential mode, seamlessly integrates with Slidev - navigate through timeline items before advancing to the next slide
- **Visual Progress**: Active items shown in dark color, future items in gray, with connecting lines showing progression
- **Extended Lines**: Timeline extends beyond first and last dots for a continuous appearance
- **Theme Integration**: Uses company fonts and color variables for consistent theming
- **Bold Active State**: Year labels and event names appear bold when active
- **Smooth Transitions**: Animated state changes for professional presentations

## Usage

### Basic Example

```vue
<Timeline
  title="Company Growth"
  subtitle="2018-2024"
  :items="[
    { year: '2018', label: 'Foundation', description: 'Company established with vision for innovation' },
    { year: '2020', label: 'Growth', description: 'Expanded team and operations significantly' },
    { year: '2022', label: 'Innovation', description: 'Launched breakthrough product line' },
    { year: '2024', label: 'Leadership', description: 'Recognized as industry leader' }
  ]"
  :default-active="0"
/>
```

**Result**: A full-width timeline that automatically distributes 4 items evenly across the available space.

### In Slidev Markdown

````markdown
---
layout: default
---

<Timeline
  title="Notable Inventions"
  subtitle="1910–2000"
  :items="[
    { year: '1910', label: 'headset', description: 'And future Call of Duty players would thank them.' },
    { year: '1920', label: 'jungle gym', description: 'Because every kid should get to be Tarzan for a day.' },
    { year: '1930', label: 'chocolate chip cookie', description: 'And the world rejoiced.' },
    { year: '1940', label: 'Jeep', description: 'Because building roads is inconvenient.' },
    { year: '1950', label: 'leaf blower', description: 'Ain\'t nobody got time to rake.' },
    { year: '1960', label: 'magnetic stripe card', description: 'Because paper currency is for noobs.' },
    { year: '1970', label: 'wireless LAN', description: 'Nobody likes cords. Nobody.' },
    { year: '1980', label: 'flash memory', description: 'Brighter than glow memory.' },
    { year: '1990', label: 'World Wide Web', description: 'To capitalize on an as-yet nascent market for cat photos.' },
    { year: '2000', label: 'Google AdWords', description: 'Because organic search rankings take work.' }
  ]"
  :default-active="2"
/>
````

### In Two-Column Layout

Combine timeline with supporting content:

````markdown
---
layout: two-cols-full
color: light
---

# Project Timeline

::left::

## Key Achievements

- Market entry success
- Team expansion
- International growth
- Industry recognition

**Timeline shows our progression through major milestones**

::right::

<Timeline
  :items="[
    { year: '2018', label: 'Start', description: 'Founded with vision' },
    { year: '2020', label: 'Growth', description: 'Expanded operations' },
    { year: '2022', label: 'Innovation', description: 'New products launched' },
    { year: '2024', label: 'Leadership', description: 'Market leader' }
  ]"
  :default-active="2"
/>
````

### Quarterly Roadmap

Use quarters or any custom labels:

```vue
<Timeline
  title="Product Roadmap"
  subtitle="2024"
  :items="[
    { year: 'Q1', label: 'Planning', description: 'Requirements and architecture' },
    { year: 'Q2', label: 'Development', description: 'Core features and MVP' },
    { year: 'Q3', label: 'Testing', description: 'Beta with early adopters' },
    { year: 'Q4', label: 'Launch', description: 'Public release' }
  ]"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | String | `''` | Main title displayed above the timeline |
| `subtitle` | String | `''` | Subtitle text (often a date range) |
| `items` | Array | **Required** | Array of timeline items (see Item Structure) |
| `defaultActive` | Number | `0` | Index of the initially active item |
| `enableNavigation` | Boolean | `true` | Enable arrow key navigation override |
| `sequential` | Boolean | `false` | Require users to go through items sequentially (no jumping) |

## Navigation Override

The Timeline component integrates with Slidev's navigation system using the `useNavigationOverride` composable. **Arrow key navigation is only enabled when `sequential` is set to `true`.**

When `sequential: true` and a slide containing a Timeline is visible:

- **Arrow Right/Space**: Move to the next timeline item
- **Arrow Left**: Move to the previous timeline item
- Once you reach the last item, the next navigation will move to the next slide
- When you go back before the first item, it will move to the previous slide

This creates a natural step-by-step progression through your timeline items during presentations.

When `sequential: false` (default), arrow keys advance directly to the next slide without stepping through timeline items.

### Disabling Navigation Override Completely

You can explicitly disable arrow key navigation even in sequential mode:

```vue
<Timeline
  :items="timelineItems"
  :sequential="true"
  :enable-navigation="false"
/>
```

This creates a sequential timeline where users must click through items one at a time, but arrow keys won't work.

### Sequential Mode

By default, users can click on any timeline dot to jump directly to that item. Enable sequential mode to require step-by-step progression:

```vue
<Timeline
  title="Step-by-Step Process"
  :items="processSteps"
  :sequential="true"
/>
```

**With `sequential` enabled:**
- Users can only advance to the next item or go back to the previous item
- Clicking on non-adjacent dots is ignored
- Arrow key navigation is enabled for step-by-step progression
- Useful for training, tutorials, or processes that must be followed in order

**Without `sequential` (default):**
- Users can freely jump to any timeline item by clicking its dot
- Arrow key navigation is disabled (click-only interaction)
- Better for exploratory or reference timelines where order doesn't matter

## Item Structure

Each item in the `items` array should have the following properties:

```typescript
{
  year: string;        // The year/date to display (below dot)
  label: string;       // Short label for the event (above dot)
  description: string; // Full description shown when active (centered below timeline)
}
```

### Notes on Item Data

- **`year`**: Can be any string - years (`'2024'`), quarters (`'Q1'`), dates (`'Jan'`), etc.
- **`label`**: Short text label displayed above the dot (keep concise for best appearance)
- **`description`**: Any length text shown below the timeline when the item is active

## Styling

The component uses CSS variables from your company theme that can be customized in `variables.css`:

```css
/* Timeline styling */
--company-timeline-active: #2C3E50;         /* Color for active items */
--company-timeline-inactive: #AEB6BF;       /* Color for inactive items */
--company-timeline-dot-size: 25px;          /* Size of timeline dots */
--company-timeline-line-height: 5px;        /* Height of connecting lines */
```

### Customizing Colors

To customize timeline colors, modify these variables in your `presentations/{company}/variables.css` file:

```css
:root {
  --company-timeline-active: #1e3a8a;      /* Your brand color */
  --company-timeline-inactive: #cbd5e0;    /* Your muted color */
  --company-timeline-dot-size: 30px;       /* Larger dots */
  --company-timeline-line-height: 6px;     /* Thicker lines */
}
```

## Design Specifications

- **Dot Size**: 25px diameter circles
- **Line Thickness**: 5px connecting lines
- **Colors**: Active (`#2C3E50`), Inactive (`#AEB6BF`)
- **Font Sizes**: Year labels (13px), Event labels (11px), Descriptions (20px)
- **Spacing**: Year labels 30px below dots, Event labels 50px above dots
- **Layout**: Full-width with automatic spacing between items

## Tips & Best Practices

1. **Optimal Number of Items**: Works best with 4-10 timeline items for presentation slides
2. **Short Labels**: Keep event labels concise (1-2 words) for clean appearance
3. **Description Length**: Keep descriptions roughly similar length for consistent layout
4. **Date Format**: Use consistent formatting for years/dates (e.g., all 4-digit years)
5. **Full Width**: Timeline automatically fills 100% width - works great in two-column layouts

## Examples in Use

### Tech Company Timeline

```vue
<Timeline
  title="Our Journey"
  subtitle="From Startup to Scale-up"
  :items="[
    { year: '2018', label: 'Inception', description: 'Founded by three developers in a garage.' },
    { year: '2019', label: 'First Product', description: 'Launched our flagship SaaS platform.' },
    { year: '2020', label: 'Growth', description: 'Reached 1,000 customers and $1M ARR.' },
    { year: '2021', label: 'Funding', description: 'Closed $5M Series A round.' },
    { year: '2022', label: 'Expansion', description: 'Opened offices in Europe and Asia.' },
    { year: '2023', label: 'Today', description: '10,000+ customers across 50 countries.' }
  ]"
/>
```

### Project Timeline

```vue
<Timeline
  title="Project Phases"
  :items="[
    { year: 'Phase 1', label: 'Discovery', description: 'Research and requirements gathering.' },
    { year: 'Phase 2', label: 'Design', description: 'UX/UI design and prototyping.' },
    { year: 'Phase 3', label: 'Build', description: 'Development and implementation.' },
    { year: 'Phase 4', label: 'Deploy', description: 'Testing and production release.' },
    { year: 'Phase 5', label: 'Support', description: 'Ongoing maintenance and updates.' }
  ]"
/>
```

## Credits

Inspired by [responsive timeline v3](https://codepen.io/cjl750/pen/mXbMyo) by Clay Larson.
