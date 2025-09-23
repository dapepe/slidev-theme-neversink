<script setup lang="js">
import { computed, ref, onMounted, nextTick } from 'vue'

const props = defineProps({
  color: {
    default: 'white',
  },
  chartType: {
    type: String,
    default: 'bar', // 'bar', 'line', 'pie', 'doughnut', 'area'
    validator: (value) => ['bar', 'line', 'pie', 'doughnut', 'area'].includes(value)
  },
  animated: {
    type: Boolean,
    default: true
  },
  showLegend: {
    type: Boolean,
    default: true
  },
  showDataLabels: {
    type: Boolean,
    default: true
  },
  height: {
    type: String,
    default: '400px'
  },
  title: {
    type: String,
    default: '📊 Chart Layout'
  },
  subtitle: {
    type: String,
    default: ''
  }
})

const colorscheme = computed(() => {
  return `company-${props.color}-scheme`
})

const chartData = computed(() => {
  // Default chart data - this would normally come from frontmatter
  return {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [{
      label: 'Sales',
      data: [65, 59, 80, 81],
      backgroundColor: [
        'rgba(34, 197, 94, 0.8)',
        'rgba(59, 130, 246, 0.8)',
        'rgba(245, 158, 11, 0.8)',
        'rgba(239, 68, 68, 0.8)'
      ],
      borderColor: [
        'rgb(34, 197, 94)',
        'rgb(59, 130, 246)',
        'rgb(245, 158, 11)',
        'rgb(239, 68, 68)'
      ],
      borderWidth: 2
    }]
  }
})

const chartOptions = computed(() => {
  const baseOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: props.showLegend,
        position: 'top'
      },
      datalabels: {
        display: props.showDataLabels
      }
    },
    animation: {
      duration: props.animated ? 1000 : 0
    }
  }

  if (props.chartType === 'line' || props.chartType === 'area') {
    baseOptions.scales = {
      y: {
        beginAtZero: true
      }
    }
  }

  return baseOptions
})

const chartRef = ref(null)
const isVisible = ref(false)

onMounted(async () => {
  await nextTick()
  isVisible.value = true
})
</script>

<template>
  <div class="slidev-layout chart h-full slidecolor" :class="[colorscheme]">
    <div class="h-full flex flex-col">
      <!-- Chart Title -->
      <div class="chart-header mb-6">
        <h1 class="text-3xl font-bold mb-2">{{ title }}</h1>
        <p v-if="subtitle" class="text-gray-600 text-lg">{{ subtitle }}</p>
        <p v-else class="text-gray-600 text-lg">{{ chartType.charAt(0).toUpperCase() + chartType.slice(1) }} Chart Example</p>
      </div>
      
      <!-- Chart Container -->
      <div class="chart-container flex-1 flex items-center justify-center">
        <div 
          class="chart-wrapper bg-white rounded-lg shadow-lg p-6"
          :style="{ height: height, width: '100%' }"
        >
          <!-- Placeholder for Chart.js or other charting library -->
          <div 
            ref="chartRef"
            class="chart-canvas w-full h-full flex items-center justify-center"
            :class="{ 'animate-fade-in': animated && isVisible }"
          >
            <!-- This would be replaced with actual chart implementation -->
            <div class="text-center">
              <div class="text-6xl mb-4">📊</div>
              <h3 class="text-xl font-semibold mb-2">{{ chartType.toUpperCase() }} Chart</h3>
              <p class="text-gray-600">Chart implementation would go here</p>
              <div class="mt-4 text-sm text-gray-500">
                <p>Data: {{ JSON.stringify(chartData, null, 2) }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Chart Notes -->
      <div class="chart-notes mt-6">
        <div class="bg-gray-50 rounded-lg p-4">
          <h4 class="font-semibold mb-2">Notes:</h4>
          <p class="text-sm text-gray-600">This is a placeholder chart layout. In a real implementation, you would integrate Chart.js or another charting library.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.slidev-layout.chart {
  font-family: var(--company-font-primary);
}

.slidev-layout.chart h1 {
  font-family: var(--company-font-heading);
  color: var(--company-text-heading);
}

.chart-wrapper {
  border: 1px solid var(--theme-border-primary);
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out forwards;
}

/* Chart type specific styles */
.chart-canvas[data-type="pie"],
.chart-canvas[data-type="doughnut"] {
  max-width: 400px;
  margin: 0 auto;
}

.chart-canvas[data-type="bar"],
.chart-canvas[data-type="line"],
.chart-canvas[data-type="area"] {
  min-height: 300px;
}
</style>
