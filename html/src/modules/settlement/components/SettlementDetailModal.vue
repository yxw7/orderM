<template>
  <div v-if="open" class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4" @click.self="emit('close')">
    <div class="bg-white rounded-lg shadow-xl w-full max-w-6xl max-h-[90vh] flex flex-col" @click.stop>
      <div class="flex items-center justify-between px-6 py-4 border-b border-gray-200 shrink-0">
        <h2 class="text-base font-medium text-gray-800">结算详情</h2>
        <button type="button" class="text-gray-400 hover:text-gray-600 text-xl leading-none" @click="emit('close')">&times;</button>
      </div>
      <div class="px-6 py-5 overflow-y-auto space-y-4">
        <div class="space-y-3 text-sm">
          <div class="flex flex-wrap items-center gap-x-12 gap-y-2">
            <div class="flex items-center whitespace-nowrap"><span class="text-gray-500">结算单号：</span><span class="text-gray-900">{{ detail.settleId }}</span></div>
            <div class="flex items-center whitespace-nowrap"><span class="text-gray-500">结算时间：</span><span class="text-gray-900">{{ detail.settleTime }}</span></div>
            <div class="flex items-center whitespace-nowrap"><span class="text-gray-500">结算操作人：</span><span class="text-gray-900">{{ detail.operator }}</span></div>
          </div>
          <div class="flex items-start gap-1">
            <span class="text-gray-500 shrink-0">结算备注：</span>
            <span class="text-gray-900">{{ detail.remark || '—' }}</span>
          </div>
          <div class="flex flex-wrap items-center gap-x-10 gap-y-2 pt-1">
            <div class="flex items-center whitespace-nowrap"><span class="text-gray-500">实收总种数：</span><span class="text-gray-900">{{ detail.totals.species }}</span></div>
            <div class="flex items-center whitespace-nowrap"><span class="text-gray-500">实收总套数：</span><span class="text-gray-900">{{ detail.totals.sets }}</span></div>
            <div class="flex items-center whitespace-nowrap"><span class="text-gray-500">实收总册数：</span><span class="text-gray-900">{{ detail.totals.volumes }}</span></div>
            <div class="flex items-center whitespace-nowrap"><span class="text-gray-500">实收总码洋(元)：</span><span class="text-gray-900">{{ detail.totals.listPrice }}</span></div>
            <div class="flex items-center whitespace-nowrap"><span class="text-gray-500">实收总实洋(元)：</span><span class="text-gray-900">{{ detail.totals.netPrice }}</span></div>
          </div>
        </div>
        <div class="border border-gray-200 rounded overflow-hidden">
          <div class="overflow-x-auto table-scroll">
            <table class="w-full text-sm">
              <thead class="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th
                    v-for="col in SETTLEMENT_DETAIL_ITEM_COLUMNS"
                    :key="col.key"
                    class="px-3 py-2.5 text-left text-gray-600 font-medium whitespace-nowrap"
                    :class="col.minWidth"
                  >{{ col.label }}</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-100">
                <tr v-for="item in detail.items" :key="item.no" class="hover:bg-gray-50">
                  <td v-for="col in SETTLEMENT_DETAIL_ITEM_COLUMNS" :key="col.key" class="px-3 py-2" :class="col.minWidth">
                    {{ col.key === 'deliveryId' ? (item.deliveryId || '—') : (item[col.key] ?? '—') }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="flex justify-end px-6 py-4 border-t border-gray-200 bg-gray-50 rounded-b-lg shrink-0">
        <button type="button" class="px-5 py-1.5 text-sm rounded border border-gray-300 text-gray-600 hover:bg-gray-50" @click="emit('close')">关闭</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { SETTLEMENT_DETAIL_ITEM_COLUMNS, getSettlementDetail } from '@/modules/settlement/data/settled';

const props = defineProps({
  open: { type: Boolean, default: false },
  settleId: { type: String, default: '' },
  row: { type: Object, default: null }
});

defineEmits(['close']);

const detail = computed(() => getSettlementDetail(props.settleId, props.row));
</script>
