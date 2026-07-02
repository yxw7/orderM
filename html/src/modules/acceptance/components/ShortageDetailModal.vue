<template>
  <div v-if="open" class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4" @click.self="emit('close')">
    <div class="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] flex flex-col" @click.stop>
      <div class="flex items-center justify-between px-6 py-4 border-b shrink-0">
        <h2 class="text-base font-medium text-gray-800">催缺详情</h2>
        <button type="button" class="text-gray-400 text-xl" @click="emit('close')">&times;</button>
      </div>
      <div v-if="row" class="px-6 py-5 overflow-y-auto space-y-4">
        <div class="flex items-start gap-3"><label class="text-sm text-gray-600 w-28 text-right pt-2 shrink-0">催缺单号</label><div class="flex-1 text-sm text-gray-900 pt-2">{{ row.shortageId }}</div></div>
        <div class="flex items-start gap-3"><label class="text-sm text-gray-600 w-28 text-right pt-2 shrink-0">订单号</label><div class="flex-1 text-sm text-gray-900 pt-2">{{ row.orderId }}</div></div>
        <div class="flex items-start gap-3"><label class="text-sm text-gray-600 w-28 text-right pt-2 shrink-0">催缺状态</label><div class="flex-1 pt-2"><span :class="SHORTAGE_STATUS_MAP[row.status]?.cls">{{ SHORTAGE_STATUS_MAP[row.status]?.text }}</span></div></div>
        <div class="flex items-start gap-3"><label class="text-sm text-gray-600 w-28 text-right pt-2 shrink-0">备注</label><div class="flex-1 text-sm text-gray-900 pt-2">{{ row.remarkText || '—' }}</div></div>
        <div class="flex items-start gap-3"><label class="text-sm text-gray-600 w-28 text-right pt-2 shrink-0">供应商</label><div class="flex-1 text-sm text-gray-900 pt-2">{{ row.supplier }}</div></div>
        <div class="flex items-start gap-3"><label class="text-sm text-gray-600 w-28 text-right pt-2 shrink-0">预算名称</label><div class="flex-1 text-sm text-gray-900 pt-2">{{ row.budget }}</div></div>
        <div class="flex items-start gap-3"><label class="text-sm text-gray-600 w-28 text-right pt-2 shrink-0">催缺套数</label><div class="flex-1 text-sm text-gray-900 pt-2">{{ row.sets }}</div></div>
        <div class="flex items-start gap-3"><label class="text-sm text-gray-600 w-28 text-right pt-2 shrink-0">到货套数</label><div class="flex-1 text-sm text-gray-900 pt-2">{{ row.arrived }}</div></div>
      </div>
      <div class="flex justify-end gap-3 px-6 py-4 border-t bg-gray-50 rounded-b-lg shrink-0">
        <button type="button" class="px-5 py-1.5 text-sm rounded bg-sky-600 text-white hover:bg-sky-700" @click="emit('close')">确定</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { SHORTAGE_STATUS_MAP } from '@/modules/acceptance/data/shortage-manage';

defineProps({
  open: { type: Boolean, default: false },
  row: { type: Object, default: null }
});

defineEmits(['close']);
</script>
