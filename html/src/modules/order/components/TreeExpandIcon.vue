<template>
  <span
    class="tree-expand-icon inline-flex items-center justify-center shrink-0 text-gray-400"
    :class="sizeClass"
    aria-hidden="true"
  >
    <svg
      class="transition-transform duration-200"
      :class="[svgClass, expanded ? '' : '-rotate-90']"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
    </svg>
  </span>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  /** 是否展开 */
  expanded: { type: Boolean, default: false },
  /** 尺寸：sm | md */
  size: { type: String, default: 'sm' }
});

const sizeClass = computed(() => (props.size === 'md' ? 'w-5 h-5' : 'w-4 h-4'));
const svgClass = computed(() => (props.size === 'md' ? 'w-4 h-4' : 'w-3.5 h-3.5'));
</script>
