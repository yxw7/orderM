<template>
  <div v-if="open" class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4" @click.self="emit('close')">
    <div class="bg-white rounded-lg shadow-xl w-full max-w-3xl flex flex-col max-h-[85vh]" @click.stop>
      <div class="flex items-center justify-between px-6 py-4 border-b border-gray-200 shrink-0">
        <h2 class="text-base font-medium text-gray-800">
          汇率更新记录
          <span v-if="currencyName" class="text-gray-600 font-normal ml-2">{{ currencyName }}（{{ currencyCode }}）</span>
        </h2>
        <button type="button" class="text-gray-400 hover:text-gray-600 text-xl leading-none" @click="emit('close')">&times;</button>
      </div>
      <div class="px-6 py-4 overflow-y-auto flex-1 min-h-0">
        <table class="w-full text-sm">
          <thead class="bg-gray-50 border-b border-gray-200 sticky top-0">
            <tr>
              <th v-for="col in RATE_HISTORY_COLUMNS" :key="col.key" class="px-3 py-2.5 text-left text-gray-600 font-medium whitespace-nowrap">{{ col.label }}</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100">
            <tr v-for="row in rows" :key="row.id" class="hover:bg-gray-50">
              <td v-for="col in RATE_HISTORY_COLUMNS" :key="col.key" class="px-3 py-2">{{ row[col.key] }}</td>
            </tr>
            <tr v-if="!rows.length">
              <td :colspan="RATE_HISTORY_COLUMNS.length" class="px-3 py-8 text-center text-gray-400">暂无记录</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="flex justify-end px-6 py-4 border-t border-gray-200 bg-gray-50 rounded-b-lg shrink-0">
        <button type="button" class="px-5 py-1.5 text-sm rounded border border-gray-300 text-gray-600 hover:bg-gray-50" @click="emit('close')">关闭</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { RATE_HISTORY_COLUMNS, getCurrencyRateHistory } from '@/modules/currency/data/currency-manage';

const props = defineProps({
  open: { type: Boolean, default: false },
  currencyCode: { type: String, default: '' },
  currencyName: { type: String, default: '' }
});

defineEmits(['close']);

const rows = computed(() =>
  props.currencyCode ? getCurrencyRateHistory(props.currencyCode) : []
);
</script>
