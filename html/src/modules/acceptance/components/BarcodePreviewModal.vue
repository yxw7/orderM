<template>
  <div v-if="open" class="fixed inset-0 z-[85] flex items-center justify-center bg-black/40 p-4" @click.self="emit('close')">
    <div class="bg-white rounded-lg shadow-xl w-full max-w-lg" @click.stop>
      <div class="flex items-center justify-between px-6 py-4 border-b">
        <h2 class="text-base font-medium text-gray-800">条码预览</h2>
        <button type="button" class="text-gray-400 text-xl" @click="emit('close')">&times;</button>
      </div>
      <div class="px-6 py-5 space-y-4">
        <div>
          <p class="text-sm text-gray-600 mb-2">预分配</p>
          <div class="bg-gray-50 border border-gray-200 rounded px-4 py-3 text-sm text-gray-800 min-h-[44px]">{{ preview.allocated || '—' }}</div>
        </div>
        <div>
          <p class="text-sm text-gray-600 mb-2">未分配</p>
          <div class="bg-gray-50 border border-gray-200 rounded px-4 py-3 text-sm text-gray-800 min-h-[44px]">{{ preview.unallocated || '无' }}</div>
        </div>
      </div>
      <div class="flex justify-end gap-3 px-6 py-4 border-t bg-gray-50 rounded-b-lg">
        <template v-if="autoCloseMs > 0">
          <button type="button" class="px-5 py-1.5 text-sm border border-gray-300 rounded text-gray-700 hover:bg-gray-50" @click="emit('close')">已知晓</button>
        </template>
        <template v-else>
          <button type="button" class="px-5 py-1.5 text-sm rounded bg-amber-500 text-white hover:bg-amber-600" @click="emit('reject')">不接受</button>
          <button type="button" class="px-5 py-1.5 text-sm rounded bg-sky-600 text-white hover:bg-sky-700" @click="emit('accept')">接受</button>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onBeforeUnmount, watch } from 'vue';

const props = defineProps({
  open: { type: Boolean, default: false },
  preview: { type: Object, default: () => ({ allocated: '', unallocated: '无' }) },
  /** >0 时自动关闭（毫秒）；开启后底栏显示「已知晓」 */
  autoCloseMs: { type: Number, default: 0 }
});

const emit = defineEmits(['close', 'accept', 'reject']);

/** @type {ReturnType<typeof setTimeout>|null} */
let autoCloseTimer = null;

function clearAutoClose() {
  if (autoCloseTimer != null) {
    clearTimeout(autoCloseTimer);
    autoCloseTimer = null;
  }
}

watch(
  () => props.open,
  open => {
    clearAutoClose();
    if (!open || props.autoCloseMs <= 0) return;
    autoCloseTimer = setTimeout(() => {
      autoCloseTimer = null;
      emit('close');
    }, props.autoCloseMs);
  }
);

onBeforeUnmount(clearAutoClose);
</script>
