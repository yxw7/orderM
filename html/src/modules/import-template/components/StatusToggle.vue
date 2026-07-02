<template>
  <label class="inline-flex items-center gap-2 cursor-pointer select-none">
    <input type="checkbox" class="sr-only" :checked="modelValue" @change="emit('update:modelValue', $event.target.checked)">
    <span class="relative w-10 h-5 rounded-full transition-colors" :class="modelValue ? 'bg-sky-600' : 'bg-gray-200'">
      <span
        class="absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-all"
        :style="{ left: modelValue ? '22px' : '2px' }"
      />
    </span>
    <span class="text-sm text-gray-700">{{ modelValue ? '开启' : '关闭' }}</span>
  </label>
</template>

<script setup>
defineProps({
  modelValue: { type: Boolean, default: true }
});

const emit = defineEmits(['update:modelValue']);
</script>
