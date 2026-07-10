<template>
  <Teleport to="body">
    <div
      v-if="open"
      class="fixed inset-0 z-[120] flex items-center justify-center bg-black/40 p-4"
      @click.self="handleMaskClose"
    >
      <div class="bg-white rounded-lg shadow-xl flex flex-col max-h-[90vh]" :class="widthClass" @click.stop>
        <div class="flex items-center justify-between px-6 py-4 border-b shrink-0">
          <h2 class="text-base font-medium text-gray-800">{{ title }}</h2>
          <button
            type="button"
            class="text-gray-400 text-xl leading-none hover:text-gray-600 disabled:opacity-40 disabled:cursor-not-allowed"
            :disabled="confirmLoading"
            @click="handleClose"
          >
            &times;
          </button>
        </div>
        <div class="px-6 py-5 overflow-y-auto flex-1 min-h-0" :class="bodyClass">
          <slot />
        </div>
        <div class="flex justify-end gap-3 px-6 py-4 border-t bg-gray-50 rounded-b-lg shrink-0">
          <button
            type="button"
            class="px-5 py-1.5 text-sm border border-gray-300 rounded text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            :disabled="confirmLoading"
            @click="handleClose"
          >
            {{ cancelText }}
          </button>
          <button
            type="button"
            class="inline-flex items-center justify-center gap-2 min-w-[88px] px-5 py-1.5 text-sm bg-sky-600 text-white rounded hover:bg-sky-700 disabled:opacity-70 disabled:cursor-not-allowed"
            :disabled="confirmLoading || confirmDisabled"
            @click="$emit('confirm')"
          >
            <svg
              v-if="confirmLoading"
              class="w-4 h-4 animate-spin"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            {{ confirmLoading ? loadingText : confirmText }}
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
  confirmText: { type: String, default: '确定' },
  /** 确定按钮加载中 */
  confirmLoading: { type: Boolean, default: false },
  /** 确定按钮禁用（不含加载态） */
  confirmDisabled: { type: Boolean, default: false },
  /** 加载中文案 */
  loadingText: { type: String, default: '加载中...' }
});

const emit = defineEmits(['close', 'confirm']);

function handleClose() {
  if (props.confirmLoading) return;
  emit('close');
}

function handleMaskClose() {
  handleClose();
}

watch(() => props.open, val => {
  document.body.style.overflow = val ? 'hidden' : '';
}, { immediate: true });

onUnmounted(() => {
  document.body.style.overflow = '';
});
</script>
