<template>
  <div class="chart-container" :style="{ width: width, height: height }">
    <canvas ref="canvasRef"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  BarController,
  LineController,
  PieController,
  DoughnutController,
  RadarController,
  RadialLinearScale
} from 'chart.js'

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  BarController,
  LineController,
  PieController,
  DoughnutController,
  RadarController
)

const props = defineProps({
  type: {
    type: String,
    default: 'line',
    validator: (value) => ['line', 'bar', 'pie', 'doughnut', 'radar', 'area'].includes(value)
  },
  data: {
    type: Object,
    required: true
  },
  options: {
    type: Object,
    default: () => ({})
  },
  width: {
    type: String,
    default: '100%'
  },
  height: {
    type: String,
    default: '400px'
  },
  responsive: {
    type: Boolean,
    default: true
  },
  theme: {
    type: String,
    default: 'light',
    validator: (value) => ['light', 'dark'].includes(value)
  }
})

const canvasRef = ref(null)
let chartInstance = null

// Default theme colors
const themes = {
  light: {
    background: '#ffffff',
    text: '#374151',
    grid: '#e5e7eb',
    primary: '#3b82f6',
    secondary: '#10b981',
    accent: '#f59e0b'
  },
  dark: {
    background: '#1f2937',
    text: '#f3f4f6',
    grid: '#374151',
    primary: '#60a5fa',
    secondary: '#34d399',
    accent: '#fbbf24'
  }
}

// Generate theme-aware colors
const getThemeColors = () => {
  const theme = themes[props.theme]
  return [
    theme.primary,
    theme.secondary,
    theme.accent,
    '#ef4444', // red
    '#8b5cf6', // violet
    '#ec4899', // pink
    '#06b6d4', // cyan
    '#84cc16'  // lime
  ]
}

// Create default options based on theme
const getDefaultOptions = () => {
  const theme = themes[props.theme]
  
  return {
    responsive: props.responsive,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: theme.text,
          font: {
            family: 'Inter, system-ui, sans-serif'
          }
        }
      },
      title: {
        color: theme.text,
        font: {
          family: 'Inter, system-ui, sans-serif',
          size: 16,
          weight: 'bold'
        }
      },
      tooltip: {
        backgroundColor: theme.background,
        titleColor: theme.text,
        bodyColor: theme.text,
        borderColor: theme.grid,
        borderWidth: 1
      }
    },
    scales: props.type === 'pie' || props.type === 'doughnut' ? {} : {
      x: {
        grid: {
          color: theme.grid
        },
        ticks: {
          color: theme.text,
          font: {
            family: 'Inter, system-ui, sans-serif'
          }
        }
      },
      y: {
        grid: {
          color: theme.grid
        },
        ticks: {
          color: theme.text,
          font: {
            family: 'Inter, system-ui, sans-serif'
          }
        }
      }
    }
  }
}

// Process data to apply theme colors
const processData = () => {
  const colors = getThemeColors()
  const processedData = JSON.parse(JSON.stringify(props.data))
  
  if (processedData.datasets) {
    processedData.datasets.forEach((dataset, index) => {
      const color = colors[index % colors.length]
      
      if (props.type === 'pie' || props.type === 'doughnut') {
        // For pie/doughnut charts, use different colors for each segment
        dataset.backgroundColor = dataset.backgroundColor || colors.slice(0, dataset.data?.length || colors.length)
        dataset.borderColor = themes[props.theme].background
        dataset.borderWidth = 2
      } else if (props.type === 'area') {
        // For area charts, use fill
        dataset.backgroundColor = dataset.backgroundColor || color + '20' // Add transparency
        dataset.borderColor = dataset.borderColor || color
        dataset.fill = true
      } else {
        // For line/bar charts
        dataset.backgroundColor = dataset.backgroundColor || (props.type === 'bar' ? color : color + '20')
        dataset.borderColor = dataset.borderColor || color
        dataset.borderWidth = dataset.borderWidth || 2
      }
    })
  }
  
  return processedData
}

// Create chart
const createChart = async () => {
  if (!canvasRef.value) return
  
  await nextTick()
  
  const ctx = canvasRef.value.getContext('2d')
  const chartType = props.type === 'area' ? 'line' : props.type
  
  const defaultOptions = getDefaultOptions()
  const mergedOptions = {
    ...defaultOptions,
    ...props.options,
    plugins: {
      ...defaultOptions.plugins,
      ...props.options.plugins
    },
    scales: {
      ...defaultOptions.scales,
      ...props.options.scales
    }
  }
  
  chartInstance = new ChartJS(ctx, {
    type: chartType,
    data: processData(),
    options: mergedOptions
  })
}

// Destroy chart
const destroyChart = () => {
  if (chartInstance) {
    chartInstance.destroy()
    chartInstance = null
  }
}

// Update chart
const updateChart = () => {
  if (chartInstance) {
    chartInstance.data = processData()
    chartInstance.options = {
      ...getDefaultOptions(),
      ...props.options
    }
    chartInstance.update()
  }
}

// Watch for prop changes
watch([() => props.data, () => props.options, () => props.theme], () => {
  updateChart()
}, { deep: true })

watch(() => props.type, () => {
  destroyChart()
  createChart()
})

onMounted(() => {
  createChart()
})

onUnmounted(() => {
  destroyChart()
})
</script>

<style scoped>
.chart-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.chart-container canvas {
  max-width: 100%;
  max-height: 100%;
}
</style>
