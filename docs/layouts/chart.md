# Chart Layout

The `chart` layout provides a dedicated slide template for displaying charts with titles, subtitles, and optional content. It uses the Chart component internally and supports all chart types.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `color` | String | `'white'` | Color scheme for the slide |
| `chartType` | String | `'bar'` | Type of chart to display |
| `animated` | Boolean | `true` | Whether to animate the chart on load |
| `showLegend` | Boolean | `true` | Whether to show the chart legend |
| `height` | String | `'400px'` | Height of the chart container |
| `title` | String | `'📊 Chart Layout'` | Main title for the slide |
| `subtitle` | String | `''` | Subtitle for the slide |

## Frontmatter Options

The chart layout supports additional configuration through frontmatter:

### chartData
Define the chart data directly in the slide frontmatter:

```yaml
---
layout: chart
chartType: "bar"
title: "Sales Performance"
chartData:
  labels: ["Q1", "Q2", "Q3", "Q4"]
  datasets:
    - label: "Revenue"
      data: [100, 150, 200, 180]
    - label: "Profit"
      data: [30, 45, 80, 70]
---
```

### chartOptions
Customize Chart.js options:

```yaml
---
layout: chart
chartType: "line"
chartOptions:
  plugins:
    legend:
      position: "bottom"
  scales:
    y:
      beginAtZero: true
      max: 100
---
```

## Usage Examples

### Basic Bar Chart

```markdown
---
layout: chart
chartType: "bar"
color: light
title: "Quarterly Revenue"
subtitle: "2024 Performance"
chartData:
  labels: ["Q1", "Q2", "Q3", "Q4"]
  datasets:
    - label: "Revenue (€M)"
      data: [2.5, 3.2, 4.1, 3.8]
---

**Key insight:** Q3 showed the highest revenue growth.
```

### Line Chart with Trend

```markdown
---
layout: chart
chartType: "line"
color: dark
title: "User Growth"
subtitle: "Monthly active users"
chartData:
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
  datasets:
    - label: "Users"
      data: [1200, 1350, 1500, 1800, 2100, 2400]
      tension: 0.4
---

**Growth rate:** 100% increase over 6 months.
```

### Pie Chart for Distribution

```markdown
---
layout: chart
chartType: "pie"
color: light
title: "Market Share"
subtitle: "Current position"
chartData:
  labels: ["Company A", "Company B", "Company C", "Others"]
  datasets:
    - label: "Market Share (%)"
      data: [35, 25, 20, 20]
---

**Position:** Leading with 35% market share.
```

### Doughnut Chart with Custom Colors

```markdown
---
layout: chart
chartType: "doughnut"
color: dark
title: "Technology Stack"
subtitle: "Distribution by category"
chartData:
  labels: ["Frontend", "Backend", "Database", "DevOps"]
  datasets:
    - label: "Usage (%)"
      data: [30, 25, 20, 25]
chartOptions:
  plugins:
    legend:
      position: "right"
---

**Focus:** Frontend and backend represent 55% of our stack.
```

### Area Chart for Cumulative Data

```markdown
---
layout: chart
chartType: "area"
color: light
title: "Performance Metrics"
subtitle: "System improvement over time"
chartData:
  labels: ["Week 1", "Week 2", "Week 3", "Week 4"]
  datasets:
    - label: "Response Time (ms)"
      data: [120, 110, 95, 85]
    - label: "Throughput (req/s)"
      data: [800, 950, 1100, 1250]
---

**Improvement:** 29% faster response time, 56% higher throughput.
```

## Chart Types

The layout supports all chart types available in the Chart component:

- **`bar`** - Bar charts for comparing categories
- **`line`** - Line charts for trends over time
- **`pie`** - Pie charts for proportions
- **`doughnut`** - Doughnut charts (modern pie charts)
- **`area`** - Area charts for cumulative data
- **`radar`** - Radar charts for multi-dimensional data

## Styling

### Color Schemes
- `light` - Light background with dark text
- `dark` - Dark background with light text

### Animation
Charts animate by default when the slide loads. Disable with `animated: false`.

### Legend
The chart legend is shown by default. Hide with `showLegend: false`.

## Content Slots

The layout supports additional content through the default slot:

```markdown
---
layout: chart
chartType: "bar"
title: "Revenue Analysis"
chartData:
  # ... chart data
---

**Key Insights:**
- Q3 performance exceeded expectations
- Growth trend is accelerating
- Market expansion opportunities identified

**Next Steps:**
1. Analyze Q3 success factors
2. Plan Q4 scaling strategy
3. Evaluate new market segments
```

## Responsive Design

Charts automatically adapt to different screen sizes and maintain their aspect ratio. The layout ensures optimal display across devices.

## Integration

The chart layout integrates seamlessly with:
- Company theming system
- Color schemes (light/dark)
- Logo positioning
- Slide transitions
- Print layouts

For more advanced chart customization, consider using the [Chart component](../components/chart.md) directly in other layouts.
