<script setup>
import { onMounted, ref } from 'vue'
import { useSlideContext } from '@slidev/client'
const { $slidev, $frontmatter } = useSlideContext()

const fg_default = 'text-gray-800'
const bg_default = 'bg-gray-100'
const label = ref('')
const fg = ref(fg_default)
const bg = ref(bg_default)
const logoPath = ref('/logos/cmsit/logo-green.svg')

function process_colors() {
  if ($frontmatter.color) {
    if ($frontmatter.color == 'cmsit-dark') {
      fg.value = `text-gray-100`
      bg.value = `bg-gray-800`
      logoPath.value = '/logos/cmsit/logo-white.svg'
    } else if ($frontmatter.color == 'cmsit-light') {
      fg.value = fg_default
      bg.value = bg_default
      logoPath.value = '/logos/cmsit/logo-green.svg'
    } else if ($frontmatter.color == 'cmsit-highlight') {
      fg.value = `text-gray-100`
      bg.value = `bg-green-500`
      logoPath.value = '/logos/cmsit/logo-white.svg'
    } else {
      // Default to other theme colors if using Neversink schemes
      if ($frontmatter.color == 'black' || $frontmatter.color == 'dark' || $frontmatter.color == 'navy') {
        logoPath.value = '/logos/cmsit/logo-white.svg'
      } else {
        logoPath.value = '/logos/cmsit/logo-green.svg'
      }
    }
  }
}

function checkvars() {
  if ($frontmatter.slide_info_color === undefined) {
    // default
    fg.value = fg_default
    bg.value = bg_default
  }

  if ($frontmatter.slide_info_color && $frontmatter.slide_info_color.includes(',')) {
    // slide info
    const parts = $frontmatter.slide_info.split(',')
    fg.value = parts[0]
    bg.value = parts[1]
  }
  
  // Process colors based on layout type
  process_colors()
}

function getlabel() {
  if ($frontmatter.slug) {
    label.value = $frontmatter.slug
} else if ($slidev.configs.slug) {
    label.value = $slidev.configs.slug
  } else {
    label.value = 'CMSIT'
  }
}

onMounted(() => {
  getlabel()
  checkvars()
})
</script>

<template>
  <footer v-if="$frontmatter.slide_info !== false" class="absolute bottom-0 right-0 left-0 p-2 pr-3 full-width z-10">
    <div class="absolute bottom-2 right-2 p-1">
      <span class="pl-3 pr-3 p-2 font-mono font-size-2 rounded" :class="fg + ' ' + bg">
        <img :src="logoPath" class="inline h-4 mr-2" /> {{ $slidev.nav.currentPage }} / {{ $slidev.nav.total }}
      </span>
    </div>
    <div v-if="label" class="absolute bottom-2 left-2 p-1">
      <span class="pl-3 pr-3 p-2 font-mono font-size-2 rounded" :class="fg + ' ' + bg">
        {{ label }}
      </span>
    </div>
  </footer>
</template>

<style scoped>
</style> 