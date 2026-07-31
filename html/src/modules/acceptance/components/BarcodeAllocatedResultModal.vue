<template>
  <div
    v-if="open"
    class="fixed inset-0 z-[90] flex items-center justify-center bg-black/40 p-4"
    @keydown.enter.prevent="onAcknowledge"
  >
    <div class="bg-white rounded-lg shadow-xl w-full max-w-md" @click.stop>
      <div class="px-8 py-6 space-y-4">
        <div class="flex gap-8 text-sm">
          <span class="text-gray-700 shrink-0 pt-0.5">已分配</span>
          <div class="text-gray-900 space-y-1">
            <div v-for="(range, index) in result.allocatedRanges" :key="index">{{ range }}</div>
            <div v-if="!result.allocatedRanges.length">—</div>
          </div>
        </div>
        <div v-if="result.unallocated.length" class="flex gap-8 text-sm">
          <span class="text-gray-700 shrink-0 pt-0.5">未分配</span>
          <span class="text-gray-900">{{ result.unallocatedText }}</span>
        </div>
        <p v-if="result.hasEmpty" class="text-sm text-gray-700">注意：本次收货有空条码</p>
      </div>
      <div class="flex justify-end px-6 pb-6">
        <button
          ref="ackButtonRef"
          type="button"
          class="px-5 py-1.5 text-sm border border-gray-300 rounded text-gray-700 hover:bg-gray-50"
          @click="onAcknowledge"
        >
          已知晓
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { nextTick, onBeforeUnmount, ref, watch } from 'vue';

const props = defineProps({
  open: { type: Boolean, default: false },
  result: {
    type: Object,
    default: () => ({
      displayType: 'single',
      allocatedRanges: [],
      unallocated: [],
      unallocatedText: '',
      hasEmpty: false
    })
  },
  /** >0 时自动「已知晓」并关闭（毫秒） */
  autoCloseMs: { type: Number, default: 0 }
});

const emit = defineEmits(['acknowledge']);

/** @type {import('vue').Ref<HTMLButtonElement|null>} */
const ackButtonRef = ref(null);
/** @type {ReturnType<typeof setTimeout>|null} */
let autoCloseTimer = null;

function clearAutoClose() {
  if (autoCloseTimer != null) {
    clearTimeout(autoCloseTimer);
    autoCloseTimer = null;
  }
}

function onAcknowledge() {
  clearAutoClose();
  emit('acknowledge');
}

watch(
  () => props.open,
  async open => {
    clearAutoClose();
    if (!open) return;
    await nextTick();
    ackButtonRef.value?.focus();
    if (props.autoCloseMs > 0) {
      autoCloseTimer = setTimeout(() => {
        autoCloseTimer = null;
        emit('acknowledge');
      }, props.autoCloseMs);
    }
  }
);

onBeforeUnmount(clearAutoClose);
</script>
