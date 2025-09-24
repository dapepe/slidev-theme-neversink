# Chart Component

The `Chart` component provides a flexible way to display various types of charts using Chart.js. It supports multiple chart types with theming and customization options.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | String | `'line'` | The type of chart to display. Options: `'line'`, `'bar'`, `'pie'`, `'doughnut'`, `'radar'`, `'area'` |
| `data` | Object | Required | Chart.js data object containing labels and datasets |
| `options` | Object | `{}` | Chart.js options object for customization |
| `width` | String | `'100%'` | Width of the chart container |
| `height` | String | `'400px'` | Height of the chart container |
| `responsive` | Boolean | `true` | Whether the chart should be responsive |
| `theme` | String | `'light'` | Theme for the chart. Options: `'light'`, `'dark'` |

## Chart Types

### Line Charts
Perfect for showing trends over time or continuous data.

```vue
<Chart
  type="line"
  :data="{
    labels: ['Jan', 'Feb', 'Mar', 'Apr'],
    datasets: [{
      label: 'Sales',
      data: [10, 25, 40, 60]
    }]
  }"
  theme="light"
/>
```

### Bar Charts
Ideal for comparing different categories or discrete values.

```vue
<Chart
  type="bar"
  :data="{
    labels: ['Product A', 'Product B', 'Product C'],
    datasets: [{
      label: 'Revenue',
      data: [120, 190, 300]
    }]
  }"
  theme="light"
/>
```

### Pie Charts
Great for showing proportions of a whole.

```vue
<Chart
  type="pie"
  :data="{
    labels: ['Desktop', 'Mobile', 'Tablet'],
    datasets: [{
      label: 'Usage',
      data: [60, 30, 10]
    }]
  }"
  theme="light"
/>
```

### Doughnut Charts
A modern alternative to pie charts with a hollow center.

```vue
<Chart
  type="doughnut"
  :data="{
    labels: ['Frontend', 'Backend', 'DevOps'],
    datasets: [{
      label: 'Skills',
      data: [40, 35, 25]
    }]
  }"
  theme="light"
/>
```

### Area Charts
Excellent for showing cumulative data over time.

```vue
<Chart
  type="area"
  :data="{
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [{
      label: 'Growth',
      data: [100, 150, 200, 300]
    }]
  }"
  theme="light"
/>
```

### Radar Charts
Perfect for comparing multiple metrics across different categories.

```vue
<Chart
  type="radar"
  :data="{
    labels: ['Speed', 'Reliability', 'Comfort', 'Safety'],
    datasets: [{
      label: 'Product A',
      data: [80, 90, 70, 85]
    }]
  }"
  theme="light"
/>
```

## Theming

The component supports light and dark themes that automatically adjust colors, text, and grid lines.

### Light Theme
- Background: White
- Text: Dark gray
- Grid: Light gray
- Primary colors: Blue, green, amber, red, violet, pink, cyan, lime

### Dark Theme
- Background: Dark gray
- Text: Light gray
- Grid: Medium gray
- Primary colors: Lighter variants of the light theme colors

## Advanced Usage

### Custom Options
You can pass custom Chart.js options to override defaults:

```vue
<Chart
  type="line"
  :data="chartData"
  :options="{
    plugins: {
      legend: {
        position: 'bottom'
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100
      }
    }
  }"
  theme="dark"
/>
```

### Multiple Datasets
Display multiple data series in a single chart:

```vue
<Chart
  type="line"
  :data="{
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Revenue',
        data: [100, 150, 200, 180]
      },
      {
        label: 'Profit',
        data: [30, 45, 80, 70]
      }
    ]
  }"
  theme="light"
/>
```

## Usage in Slides

The Chart component can be used in any slide layout:

```markdown
---
layout: default
---

# Sales Performance

<div class="grid grid-cols-2 gap-8">

<Chart
  type="bar"
  :data="quarterlyData"
  height="300px"
  theme="light"
/>

<Chart
  type="pie"
  :data="marketShare"
  height="300px"
  theme="light"
/>

</div>
```

## Integration with Chart Layout

The Chart component is automatically used by the `chart` layout. See the [Chart Layout documentation](../layouts/chart.md) for more information.
