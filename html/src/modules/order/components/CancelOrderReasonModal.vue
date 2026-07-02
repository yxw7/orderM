<template>
  <div
    v-if="open"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
    @click.self="emit('close')"
  >
    <div class="bg-white rounded-lg shadow-xl w-full max-w-md" @click.stop>
      <div class="flex items-center justify-between px-6 py-4 border-b border-gray-200">
        <div class="flex items-center gap-2 min-w-0">
          <span
            class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-orange-400 text-white text-xs font-bold shrink-0"
            aria-hidden="true"
          >!</span>
          <h2 class="text-base font-medium text-gray-800">请选择撤订原因</h2>
        </div>
        <button
          type="button"
          class="text-gray-400 text-xl leading-none hover:text-gray-600 shrink-0"
          aria-label="关闭"
          @click="emit('close')"
        >&times;</button>
      </div>
      <div class="px-6 py-5">
        <select
          v-model="reason"
          class="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-700 focus:outline-none focus:border-sky-500"
        >
          <option value="">请选择</option>
          <option v-for="item in cancelReasons" :key="item.id" :value="item.content">
            {{ item.content }}
          </option>
        </select>
        <p v-if="!cancelReasons.length" class="text-sm text-amber-600 mt-2">
          暂无可用撤订原因，请先在「设置 - 退换撤订原因参数」中配置。
        </p>
      </div>
      <div class="flex justify-end gap-3 px-6 py-4 border-t border-gray-200">
        <button
          type="button"
          class="px-5 py-1.5 text-sm border border-gray-300 rounded text-gray-600 hover:bg-gray-50"
          @click="emit('close')"
        >
          取消
        </button>
        <button
          type="button"
          class="px-5 py-1.5 text-sm bg-sky-600 text-white rounded hover:bg-sky-700 disabled:opacity-50 disabled:cursor-not-allowed"
          :disabled="!cancelReasons.length"
          @click="submit"
        >
          确定
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue';
import { useReasonParamsStore } from '@/stores/reason-params';

const props = defineProps({
  open: { type: Boolean, default: false }
});

const emit = defineEmits(['close', 'confirm']);

const reasonParamsStore = useReasonParamsStore();
const reason = ref('');

/** @type {import('vue').ComputedRef<Object[]>} */
const cancelReasons = computed(() => reasonParamsStore.getActiveByType('cancel'));

watch(() => props.open, open => {
  if (open) reason.value = '';
});

/**
 * 提交撤订原因
 */
function submit() {
  if (!reason.value) {
    window.alert('请选择撤订原因');
    return;
  }
  emit('confirm', reason.value);
}
</script>
