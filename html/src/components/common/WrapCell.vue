<template>
  <HoverTooltip v-if="displayText" :text="displayText">
    <span
      class="block line-clamp-2 break-words max-w-full"
      :class="maxWidthClass"
    >
      {{ displayText }}
    </span>
  </HoverTooltip>
  <span v-else class="text-gray-400">{{ emptyText }}</span>
</template>

<script setup>
import { computed } from 'vue';
import HoverTooltip from '@/modules/acceptance/components/HoverTooltip.vue';

const props = defineProps({
  text: { type: [String, Number], default: '' },
  maxWidthClass: { type: String, default: '' },
  emptyText: { type: String, default: '—' }
});

const displayText = computed(() => {
  const value = props.text;
  if (value == null || value === '') return '';
  return String(value);
});
</script>
