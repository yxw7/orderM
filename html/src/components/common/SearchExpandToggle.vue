<template>
  <button
    type="button"
    class="flex items-center gap-1 text-sm text-sky-600 hover:text-sky-700"
    :class="buttonClass"
    @click="emit('toggle')"
  >
    {{ expanded ? '收起' : '展开' }}
    <svg
      class="w-3 h-3 transition-transform"
      :class="{ 'rotate-180': expanded }"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
    </svg>
  </button>
</template>

<script setup>
defineProps({
  expanded: { type: Boolean, default: false },
  buttonClass: { type: String, default: '' }
});

const emit = defineEmits(['toggle']);
</script>
