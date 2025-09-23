<script setup lang="ts">
import { computed } from 'vue'
import Line from './Line.vue'

const props = defineProps({
  id: { type: String, default: undefined },
  pos: { type: String, default: '100,100,300,300' },
  // Support both naming conventions
  startX: { type: [Number, String], default: undefined },
  startY: { type: [Number, String], default: undefined },
  endX: { type: [Number, String], default: undefined },
  endY: { type: [Number, String], default: undefined },
  x1: { type: [Number, String], default: undefined },
  y1: { type: [Number, String], default: undefined },
  x2: { type: [Number, String], default: undefined },
  y2: { type: [Number, String], default: undefined },
  width: { type: [Number, String], default: 2 },
  thickness: { type: [Number, String], default: undefined },
  color: { type: String, default: 'black' },
  interactive: { type: [Boolean, String], default: false }
})

// Parse position from pos prop or use individual props
const parsePosition = () => {
  // Priority 1: x1, y1, x2, y2 props (direct Line component props)
  if (props.x1 !== undefined && props.y1 !== undefined && 
      props.x2 !== undefined && props.y2 !== undefined) {
    return {
      x1: +props.x1,
      y1: +props.y1,
      x2: +props.x2,
      y2: +props.y2
    }
  }
  
  // Priority 2: startX, startY, endX, endY props
  if (props.startX !== undefined && props.startY !== undefined && 
      props.endX !== undefined && props.endY !== undefined) {
    return {
      x1: +props.startX,
      y1: +props.startY,
      x2: +props.endX,
      y2: +props.endY
    }
  }
  
  // Priority 3: Parse from pos string (format: "x1,y1,x2,y2")
  const parts = props.pos.split(',').map(p => +p.trim())
  if (parts.length >= 4) {
    return {
      x1: parts[0],
      y1: parts[1], 
      x2: parts[2],
      y2: parts[3]
    }
  }
  
  // Default fallback
  return { x1: 100, y1: 100, x2: 300, y2: 300 }
}

const position = computed(() => parsePosition())
const lineWidth = computed(() => props.thickness || props.width)
</script>

<template>
  <Line
    :x1="position.x1"
    :y1="position.y1"
    :x2="position.x2"
    :y2="position.y2"
    :width="lineWidth"
    :color="props.color"
  />
</template>
