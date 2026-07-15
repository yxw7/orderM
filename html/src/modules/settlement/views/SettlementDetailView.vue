<template>
  <div class="page-panel page-panel--scroll">
    <nav class="flex items-center gap-2 mb-4 text-sm shrink-0">
      <a
        href="#"
        class="flex items-center gap-1 text-gray-500 hover:text-sky-600"
        @click.prevent="goBackAndCloseTab('/settled')"
      >
        <span>&lsaquo;</span> 已结算
      </a>
      <span class="text-gray-400">/</span>
      <span class="text-gray-800">结算详情</span>
      <span class="text-gray-800 font-medium">{{ detail.settleId }}</span>
    </nav>

    <div class="bg-white rounded border border-gray-200 px-6 py-5 space-y-4">
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
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useBreadcrumbBack } from '@/composables/use-breadcrumb-back';
import {
  SETTLEMENT_DETAIL_ITEM_COLUMNS,
  getSettlementDetail,
  settledRows
} from '@/modules/settlement/data/settled';

defineOptions({ name: 'SettlementDetailView' });

const route = useRoute();
const { goBackAndCloseTab } = useBreadcrumbBack();
const settleId = computed(() => route.params.settleId || '');
const listRow = computed(() => settledRows.find(row => row.settleId === settleId.value) || null);
const detail = computed(() => getSettlementDetail(settleId.value, listRow.value));
</script>
