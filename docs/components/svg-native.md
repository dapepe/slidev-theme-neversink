# SvgNative Component

A Slidev component that provides native SVG animation capabilities using Slidev's built-in `v-click` system with a clean component API.

## Features

- **Native Performance** - Uses Slidev's built-in v-click system
- **Configurable Props** - Animation type, timing, and behavior
- **Responsive Design** - Automatic SVG scaling
- **Interactive Support** - Hover effects and click handling
- **Layer Detection** - Automatic v-click attribute injection

## Usage

### Basic Usage

```vue
<SvgNative
  :content="svgContent"
  animation="fade-in"
/>
```

### Advanced Configuration

```vue
<SvgNative
  src="/path/to/diagram.svg"
  animation="slide-up"
  :duration="800"
  :stagger="150"
  layer-prefix="step"
  :responsive="true"
  :interactive="true"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | String | - | SVG file path |
| `content` | String | - | Inline SVG content |
| `animation` | String | `'fade-in'` | Animation type: `fade-in`, `slide-up`, `slide-left`, `slide-right`, `scale-up`, `bounce`, `rotate`, `pulse` |
| `duration` | Number | `600` | Animation duration in ms |
| `stagger` | Number | `100` | Delay between layers in ms |
| `layerPrefix` | String | `'fadein'` | Layer naming prefix |
| `responsive` | Boolean | `true` | Enable responsive scaling |
| `interactive` | Boolean | `false` | Enable interactive features |
| `sequential` | Boolean | `true` | Enable step-by-step navigation |
| `maxStep` | Number | `0` | Maximum steps (auto-calculated if 0) |

## Sequential vs Non-Sequential Mode

### Sequential Mode (`sequential: true`)
- **Step-by-step reveal** using arrow keys or clicks
- **Navigation override** - intercepts slide navigation
- **Perfect for presentations** where you want to control pacing
- Elements are revealed one by one based on their number prefix (e.g., `1-fade-in`, `2-fade-in`)

### Non-Sequential Mode (`sequential: false`)
- **All elements shown immediately** when slide loads
- **No navigation override** - normal slide navigation works
- **Perfect for static diagrams** where all parts should be visible
- All elements with the layer prefix are shown at once

```vue
<!-- Sequential: Use arrow keys to reveal step-by-step -->
<SvgNative 
  src="/diagram.svg" 
  :sequential="true" 
  layer-prefix="fade-in"
/>

<!-- Non-sequential: Show all elements immediately -->
<SvgNative 
  src="/diagram.svg" 
  :sequential="false" 
  layer-prefix="fade-in"
/>
```

## Animation Types

The `SvgNative` component supports 8 different animation types:

### Transform-based Animations
- **`fade-in`** - Simple opacity transition (default)
- **`slide-up`** - Slides in from bottom (translateY)
- **`slide-left`** - Slides in from right (translateX)
- **`slide-right`** - Slides in from left (translateX)
- **`scale-up`** - Scales from 80% to 100%
- **`rotate`** - Rotates from -10deg while scaling

### Keyframe Animations
- **`bounce`** - Bouncy scale effect (0.8 → 1.1 → 1.0)
- **`pulse`** - Pulsing scale effect (0.95 → 1.05 → 1.0)

```vue
<!-- Animation examples -->
<SvgNative src="/diagram.svg" animation="slide-up" :duration="800" />
<SvgNative src="/diagram.svg" animation="bounce" :duration="1000" />
<SvgNative src="/diagram.svg" animation="rotate" :duration="600" />
```

## Layer Detection

The component automatically detects elements with naming patterns:
- `fadein-1`, `fadein-2`, etc.
- `layer-1`, `layer-2`, etc.
- `step-1`, `step-2`, etc.

## Events

| Event | Description |
|-------|-------------|
| `svg-loaded` | Emitted when SVG is loaded |
| `animation-complete` | Emitted when all animations complete |

## Examples

### Simple Animation

```vue
<template>
  <SvgNative
    :content="simpleSvg"
    animation="fade-in"
    :duration="600"
  />
</template>

<script setup>
const simpleSvg = `<svg width="400" height="300" viewBox="0 0 400 300">
  <rect class="fadein-1" width="100" height="80" fill="blue"/>
  <circle class="fadein-2" cx="200" cy="150" r="40" fill="red"/>
  <text class="fadein-3" x="200" y="250">Step 3</text>
</svg>`
</script>
```

### File-based Animation

```vue
<template>
  <SvgNative
    src="/diagrams/process-flow.svg"
    animation="slide-up"
    :duration="800"
    :stagger="150"
    layer-prefix="step"
    :responsive="true"
  />
</template>
```

### Interactive Animation

```vue
<template>
  <SvgNative
    :content="interactiveSvg"
    animation="bounce"
    :duration="1000"
    :stagger="200"
    :interactive="true"
  />
</template>
```

## How It Works

1. **Loads SVG content** from props or file
2. **Processes SVG** for native compatibility
3. **Adds v-click attributes** to elements with layer naming
4. **Injects CSS animations** based on animation type
5. **Handles responsive scaling** automatically

## CSS Injection

The component automatically injects CSS for animations:

```css
.slidev-vclick-target {
  transition: all 600ms ease-out;
}

.slidev-vclick-hidden {
  opacity: 0;
  transform: translateY(20px) scale(0.95);
}
```

## Benefits

- ✅ **Native Performance** - Uses Slidev's built-in features
- ✅ **Better Compatibility** - Works with all Slidev versions
- ✅ **Clean API** - Simple prop-based configuration
- ✅ **Automatic Processing** - Handles SVG preparation
- ✅ **Responsive Design** - Automatic scaling
- ✅ **Interactive Support** - Hover and click effects

## Best Practices

1. **Use consistent layer naming** - `fadein-1`, `fadein-2`, etc.
2. **Test responsiveness** - Check on different screen sizes
3. **Optimize SVG content** - Keep files small for better performance
4. **Choose appropriate animations** - Match animation type to content
5. **Consider timing** - Use appropriate duration and stagger values

## Troubleshooting

### Common Issues

1. **Animations not working**
   - Check layer naming conventions
   - Verify SVG structure
   - Ensure proper v-click attributes

2. **Performance issues**
   - Optimize SVG content
   - Reduce animation complexity
   - Use simpler transforms

3. **Responsive issues**
   - Check viewBox attributes
   - Test on different screen sizes
   - Verify CSS scaling

### Debug Tips

```vue
<!-- Add debug attributes -->
<SvgNative
  :content="svgContent"
  animation="fade-in"
  :duration="600"
  debug
/>
```

## Migration from Custom Components

If you were using custom SVG animation components, you can easily migrate:

```vue
<!-- Before: Custom component -->
<SvgAnimation
  src="/diagram.svg"
  animation-type="slide-up"
  :duration="600"
  :stagger="100"
/>

<!-- After: SvgNative component -->
<SvgNative
  src="/diagram.svg"
  animation="slide-up"
  :duration="600"
  :stagger="100"
/>
```

The API is very similar, making migration straightforward.
