<script setup lang="js">
import { computed, ref, onMounted, nextTick } from 'vue'
import { useSlideContext } from '@slidev/client'
import Chart from '../components/Chart.vue'

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
    default: 'Title'
  },
  subtitle: {
    type: String,
    default: ''
  }
})

const colorscheme = computed(() => {
  return `company-${props.color}-scheme`
})

const { $slidev } = useSlideContext()

const chartData = computed(() => {
  // Use frontmatter data if available, otherwise use default
  return $slidev.nav.currentRoute.meta?.slide?.frontmatter?.chartData || {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [{
      label: 'Sales',
      data: [65, 59, 80, 81]
    }]
  }
})

const chartOptions = computed(() => {
  // Use frontmatter options if available, otherwise use default
  const frontmatterOptions = $slidev.nav.currentRoute.meta?.slide?.frontmatter?.chartOptions || {}
  
  const baseOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: props.showLegend,
        position: 'top'
      },
      title: {
        display: !!props.title,
        text: props.title
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

  // Merge with frontmatter options
  return { ...baseOptions, ...frontmatterOptions }
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
          <!-- Chart Component -->
          <div 
            ref="chartRef"
            class="chart-canvas w-full h-full"
            :class="{ 'animate-fade-in': animated && isVisible }"
          >
            <Chart
              :type="chartType"
              :data="chartData"
              :options="chartOptions"
              :theme="color === 'dark' ? 'dark' : 'light'"
              width="100%"
              height="100%"
            />
          </div>
        </div>
      </div>
      
      <!-- Chart Notes -->
      <div v-if="$slots.default" class="chart-notes mt-6">
        <div class="bg-gray-50 rounded-lg p-4">
          <slot />
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
