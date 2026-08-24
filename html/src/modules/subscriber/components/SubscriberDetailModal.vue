<template>
  <div v-if="open" class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4" @click.self="emit('close')">
    <div class="bg-white rounded-lg shadow-xl w-full max-w-3xl flex flex-col max-h-[90vh]" @click.stop>
      <div class="flex items-center justify-between px-6 py-4 border-b border-gray-200 shrink-0">
        <h2 class="text-base font-medium text-gray-800">查看订户</h2>
        <button type="button" class="text-gray-400 hover:text-gray-600 text-xl leading-none" @click="emit('close')">&times;</button>
      </div>

      <div v-if="row" class="flex border-b border-gray-200 shrink-0 bg-slate-50">
        <button
          v-for="tab in tabs"
          :key="tab.key"
          type="button"
          class="flex-1 px-3 py-2.5 text-sm border-b-2 -mb-px"
          :class="activeTab === tab.key
            ? 'border-sky-600 text-sky-700 font-medium bg-white'
            : 'border-transparent text-gray-500'"
          @click="activeTab = tab.key"
        >
          {{ tab.label }}
        </button>
      </div>

      <div v-if="row" class="px-6 py-5 overflow-y-auto text-sm flex-1 min-h-0 space-y-3">
        <template v-if="activeTab === 'basic'">
          <div class="flex items-start gap-3"><span class="text-gray-600 w-28 text-right shrink-0">订户名称</span><span class="text-gray-900 flex-1">{{ row.name }}</span></div>
          <div class="flex items-start gap-3"><span class="text-gray-600 w-28 text-right shrink-0">订户状态</span><span class="text-gray-900 flex-1">{{ SUBSCRIBER_STATUS_MAP[row.status]?.text }}</span></div>
          <div class="flex items-start gap-3"><span class="text-gray-600 w-28 text-right shrink-0">创建日期</span><span class="text-gray-900 flex-1">{{ row.created }}</span></div>
          <div class="flex items-start gap-3"><span class="text-gray-600 w-28 text-right shrink-0">备注</span><span class="text-gray-900 flex-1">{{ row.remark || '—' }}</span></div>
        </template>

        <template v-else-if="activeTab === 'biz'">
          <div class="flex items-start gap-3"><span class="text-gray-600 w-28 text-right shrink-0">单件所属馆</span><span class="text-gray-900 flex-1">{{ row.siteName || '—' }}</span></div>
          <div class="flex items-start gap-3"><span class="text-gray-600 w-28 text-right shrink-0">资源类型</span><span class="text-gray-900 flex-1">{{ formatMultiValueText(row.types, '、') || '—' }}</span></div>
          <div class="flex items-start gap-3"><span class="text-gray-600 w-28 text-right shrink-0">预算名称</span><span class="text-gray-900 flex-1 break-all">{{ formatMultiValueText(row.budgets, ';') || '—' }}</span></div>
          <div class="flex items-start gap-3"><span class="text-gray-600 w-28 text-right shrink-0">条码号类型</span><span class="text-gray-900 flex-1">{{ formatMultiValueText(row.barcodeTypes, '、') || '—' }}</span></div>
        </template>

        <template v-else>
          <div class="flex items-start gap-3">
            <span class="text-gray-600 w-28 text-right shrink-0">所属分馆</span>
            <span class="text-gray-900 flex-1 break-all">{{ formatDedupBranchText(row) }}</span>
          </div>
          <div class="flex items-start gap-3">
            <span class="text-gray-600 w-28 text-right shrink-0">所属馆藏地</span>
            <span class="text-gray-900 flex-1 break-all">{{ formatMultiValueText(row.dedupCollectionCodes, '、') || '不限' }}</span>
          </div>
        </template>
      </div>

      <div class="flex justify-end px-6 py-4 border-t border-gray-200 bg-gray-50 rounded-b-lg shrink-0">
        <button type="button" class="px-5 py-1.5 text-sm rounded border border-gray-300 text-gray-600 hover:bg-gray-50" @click="emit('close')">关闭</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import {
  SUBSCRIBER_STATUS_MAP,
  formatMultiValueText
} from '@/modules/subscriber/data/subscriber-manage';

const props = defineProps({
  open: { type: Boolean, default: false },
  row: { type: Object, default: null }
});

defineEmits(['close']);

const tabs = [
  { key: 'basic', label: '基本信息' },
  { key: 'biz', label: '业务范围' },
  { key: 'dedup', label: '查重范围' }
];

const activeTab = ref('basic');

watch(() => props.open, open => {
  if (open) activeTab.value = 'basic';
});

function formatDedupBranchText(row) {
  const codes = row?.dedupBranchCodes || [];
  if (!codes.length) return '不限';
  return codes.join('、');
}
</script>
