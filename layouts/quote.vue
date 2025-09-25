<script setup>
import { computed } from 'vue'
const props = defineProps({
  color: {
    default: 'light',
  },
  author: {
    default: null,
  },
  quotesize: {
    default: 'text-2xl',
  },
  authorsize: {
    default: 'text-l',
  },
})

const colorscheme = computed(() => {
  return `company-${props.color}-scheme`
})
</script>
<template>
  <div class="slidev-layout quote slidecolor" :class="colorscheme">
    <div class="my-auto">
      <div class="p-5 w-95% ml-auto mr-auto rounded-lg border-1px quotecolor" :class="colorscheme">
        <div class="leading-normal" :class="quotesize">
          <slot name="default" /><br />
          <div v-if="author !== null" class="quote_author" :class="authorsize">- {{ author }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.quotecolor {
  background-color: var(--company-bg-primary);
  color: var(--company-text-primary);
  border-color: var(--company-border-primary);
  /* add a drop shadow */
  box-shadow: 5px 4px 6px rgba(0, 0, 0, 0.1);
}

.quote_author {
  font-family: var(--company-font-heading);
  font-weight: 400;
  text-align: right;
}

.slidev-layout.quote {
  /* margin-top: 2em; */
  padding-left: 1em;
}

.slidev-layout.quote p {
  font-size: 1.5em;
  font-family: var(--company-font-quote);
  line-height: 1.2em;
  font-weight: 400;
  text-align: left;
}
</style>
