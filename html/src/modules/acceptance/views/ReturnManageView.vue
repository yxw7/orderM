<template>
  <div class="page-panel page-panel--scroll">
    <div class="bg-white rounded border border-gray-200 p-4 mb-4 shrink-0">
      <form @submit.prevent="filterRows">
        <div class="grid grid-cols-4 gap-4 items-center">
          <div class="flex items-center gap-2">
            <label class="text-sm text-gray-600 whitespace-nowrap shrink-0">资源标识</label>
            <select
              v-model="search.idField"
              class="border border-gray-300 rounded-l px-2 py-1.5 text-sm text-gray-700 border-r-0 focus:outline-none w-24"
            >
              <option v-for="opt in RESOURCE_ID_FIELD_OPTIONS" :key="opt.value" :value="opt.value">{{ opt.label }}</option>
            </select>
            <input
              v-model="search.keyword"
              type="text"
              placeholder="请输入"
              class="flex-1 border border-gray-300 rounded-r px-3 py-1.5 text-sm focus:outline-none focus:border-sky-500 -ml-px"
            >
          </div>
          <div class="flex items-center gap-2">
            <label class="text-sm text-gray-600 whitespace-nowrap w-16 text-right">供应商</label>
            <select v-model="search.supplier" class="flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm">
              <option v-for="opt in RETURN_SUPPLIER_OPTIONS" :key="opt" :value="opt">{{ opt }}</option>
            </select>
          </div>
          <div class="flex items-center gap-2">
            <label class="text-sm text-gray-600 whitespace-nowrap w-20 text-right">发货单号</label>
            <input v-model="search.shipNo" type="text" placeholder="请输入" class="flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm">
          </div>
          <div class="flex items-center gap-2 justify-end">
            <SearchExpandToggle
              :expanded="expanded"
              class="mr-2"
              @toggle="expanded = !expanded"
            />
            <button type="submit" class="px-5 py-1.5 bg-sky-600 text-white text-sm rounded hover:bg-sky-700">检索</button>
            <button type="button" class="px-5 py-1.5 border border-gray-300 text-gray-600 text-sm rounded hover:bg-gray-50" @click="resetSearch">重置</button>
          </div>
        </div>
        <div v-show="expanded" class="grid grid-cols-4 gap-4 mt-3">
          <div class="flex items-center gap-2">
            <label class="text-sm text-gray-600 whitespace-nowrap w-16 text-right">馆址</label>
            <select v-model="search.site" class="flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm">
              <option v-for="opt in activeSiteFilterOptions" :key="opt" :value="opt">{{ opt }}</option>
            </select>
          </div>
          <div class="flex items-center gap-2">
            <label class="text-sm text-gray-600 whitespace-nowrap w-16 text-right">退货原因</label>
            <input v-model="search.reason" type="text" placeholder="请输入" class="flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm">
          </div>
          <div class="flex items-center gap-2">
            <label class="text-sm text-gray-600 whitespace-nowrap w-20 text-right">退货批次</label>
            <input v-model="search.batch" type="text" placeholder="请输入" class="flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm">
          </div>
          <div class="flex items-center gap-2">
            <label class="text-sm text-gray-600 whitespace-nowrap w-20 text-right">退货时间</label>
            <input v-model="search.returnDate" type="date" class="flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm">
          </div>
        </div>
      </form>
    </div>

    <div class="flex items-center gap-2 mb-4 shrink-0">
      <DropdownButton label="导出清单" variant="amber" :items="exportItems" @select="onExport" />
    </div>

    <DataTable
      :selectable="false"
      :columns="RETURN_COLUMNS"
      :rows="pagedRows"
      :total="filteredRows.length"
      row-id-key="id"
      unit="条"
      v-model:page="page"
      v-model:page-size="pageSize"
    >
      <template #cell-author="{ value }">
        <span :class="value === '—' ? 'text-gray-400' : ''">{{ value }}</span>
      </template>
      <template #cell-orderLineNo="{ row }">
        <button type="button" class="text-sky-600 hover:underline whitespace-nowrap" @click="goOrderLine(row)">{{ row.orderLineNo }}</button>
      </template>
      <template #cell-reasonRemark="{ row }">
        <div class="text-xs leading-relaxed">
          <div>原因：{{ row.reason }}</div>
          <div class="text-gray-500">备注：{{ row.remark || '' }}</div>
        </div>
      </template>
      <template #cell-returnBatch="{ row }">
        <button type="button" class="text-sky-600 hover:underline whitespace-nowrap" @click="goAcceptanceDetail(row)">{{ row.returnBatch }}</button>
      </template>
      <template #cell-actions="{ row }">
        <button v-if="canCancelReturn(row)" type="button" class="text-sky-600 hover:underline" @click="revokeReturn(row)">撤销退货</button>
        <span v-else class="text-gray-400">—</span>
      </template>
    </DataTable>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import DataTable from '@/components/common/DataTable.vue';
import DropdownButton from '@/components/common/DropdownButton.vue';
import SearchExpandToggle from '@/components/common/SearchExpandToggle.vue';
import { useSiteSelectOptions } from '@/composables/use-site-options';
import {
  RETURN_COLUMNS,
  RETURN_SUPPLIER_OPTIONS,
  RESOURCE_ID_FIELD_OPTIONS,
  canCancelReturn,
  filterReturnRows,
  returnRows
} from '@/modules/acceptance/data/return-manage';

defineOptions({ name: 'ReturnManageView' });

const router = useRouter();
const { activeSiteFilterOptions } = useSiteSelectOptions();

const defaultSearch = () => ({
  idField: 'resourceId',
  keyword: '',
  supplier: '全部',
  shipNo: '',
  site: '全部',
  reason: '',
  batch: '',
  returnDate: ''
});

const allRows = ref(returnRows.map(r => ({ ...r })));
const filteredRows = ref([...allRows.value]);
const search = ref(defaultSearch());
const expanded = ref(false);
const page = ref(1);
const pageSize = ref(10);

const exportItems = [{ label: '导出配置' }, { label: '导出清单' }];

const pagedRows = computed(() => {
  const start = (page.value - 1) * pageSize.value;
  return filteredRows.value.slice(start, start + pageSize.value);
});

function filterRows() {
  filteredRows.value = filterReturnRows(allRows.value, search.value);
  page.value = 1;
}

function resetSearch() {
  search.value = defaultSearch();
  filteredRows.value = [...allRows.value];
  page.value = 1;
}

function goOrderLine(row) {
  router.push({ name: 'order-line-detail', params: { lineNo: row.orderLineNo } });
}

function goAcceptanceDetail(row) {
  router.push({ name: 'acceptance-detail', params: { acceptanceId: row.returnBatch } });
}

function revokeReturn(row) {
  if (!window.confirm(`确定撤销退货「${row.title}」？`)) return;
  row.status = 'cancelled';
  window.alert('撤销退货成功');
}

function onExport(item) {
  const count = filteredRows.value.length;
  if (item.label === '导出清单' && !count) {
    window.alert('暂无可导出的退货清单');
    return;
  }
  window.alert(item.label === '导出配置' ? '导出配置已保存' : `已导出 ${count} 条退货清单`);
}
</script>
