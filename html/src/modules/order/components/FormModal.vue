<template>
  <Teleport to="body">
    <div v-if="open" class="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-4" @click.self="$emit('close')">
      <div class="bg-white rounded-lg shadow-xl flex flex-col max-h-[90vh]" :class="widthClass" @click.stop>
        <div class="flex items-center justify-between px-6 py-4 border-b shrink-0">
          <h2 class="text-base font-medium text-gray-800">{{ title }}</h2>
          <button type="button" class="text-gray-400 text-xl leading-none hover:text-gray-600" @click="$emit('close')">&times;</button>
        </div>
        <div class="px-6 py-5 overflow-y-auto flex-1 min-h-0" :class="bodyClass">
          <slot />
        </div>
        <div class="flex justify-end gap-3 px-6 py-4 border-t bg-gray-50 rounded-b-lg shrink-0">
          <button type="button" class="px-5 py-1.5 text-sm border border-gray-300 rounded text-gray-600 hover:bg-gray-50" @click="$emit('close')">
            {{ cancelText }}
          </button>
          <button type="button" class="px-5 py-1.5 text-sm bg-sky-600 text-white rounded hover:bg-sky-700" @click="$emit('confirm')">
            {{ confirmText }}
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { onUnmounted, watch } from 'vue';

const props = defineProps({
  title: { type: String, required: true },
  open: { type: Boolean, default: true },
  widthClass: { type: String, default: 'w-full max-w-lg max-h-[90vh]' },
  bodyClass: { type: String, default: 'space-y-4' },
  cancelText: { type: String, default: '取消' },
  confirmText: { type: String, default: '确定' }
});

defineEmits(['close', 'confirm']);

watch(() => props.open, val => {
  document.body.style.overflow = val ? 'hidden' : '';
}, { immediate: true });

onUnmounted(() => {
  document.body.style.overflow = '';
});
</script>
