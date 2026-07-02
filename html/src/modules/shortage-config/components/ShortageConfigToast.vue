<template>
  <Teleport to="body">
    <div v-if="visible" class="fixed top-6 left-1/2 -translate-x-1/2 z-[70] min-w-[240px]">
      <div
        class="flex items-center gap-2 px-4 py-2.5 rounded shadow-lg text-sm text-white"
        :class="success ? 'bg-green-500' : 'bg-red-500'"
      >
        <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            v-if="success"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 13l4 4L19 7"
          />
          <path
            v-else
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
        <span>{{ message || (success ? '提交成功' : '提交失败') }}</span>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  show: { type: Boolean, default: false },
  success: { type: Boolean, default: true },
  message: { type: String, default: '' }
});

const emit = defineEmits(['update:show']);

const visible = ref(false);
let timer = null;

watch(() => props.show, show => {
  if (timer) clearTimeout(timer);
  visible.value = show;
  if (show) {
    timer = setTimeout(() => {
      visible.value = false;
      emit('update:show', false);
    }, 3000);
  }
});
</script>
