<template>
  <div v-if="open" class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4" @click.self="emit('close')">
    <div class="bg-white rounded-lg shadow-xl w-full max-w-6xl max-h-[90vh] flex flex-col" @click.stop>
      <div class="flex items-center justify-between px-6 py-4 border-b border-gray-200 shrink-0">
        <h2 class="text-base font-medium text-gray-800">
          结算清单
          <span v-if="settleId" class="text-gray-600 font-normal ml-2">{{ settleId }}</span>
        </h2>
        <button type="button" class="text-gray-400 hover:text-gray-600 text-xl leading-none" @click="emit('close')">&times;</button>
      </div>
      <div class="px-6 py-4 border-b border-gray-100 shrink-0">
        <form class="grid grid-cols-4 gap-4 items-center" @submit.prevent="filterRows">
          <div class="flex items-center gap-2">
            <label class="text-sm text-gray-600 whitespace-nowrap shrink-0">订单行号</label>
            <input v-model="search.orderLineNo" type="text" placeholder="请输入"
              class="flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-sky-500">
          </div>
          <div class="flex items-center gap-2">
            <label class="text-sm text-gray-600 whitespace-nowrap shrink-0">资源标识</label>
            <input v-model="search.resourceId" type="text" placeholder="请输入"
              class="flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-sky-500">
          </div>
          <div class="flex items-center gap-2">
            <label class="text-sm text-gray-600 whitespace-nowrap shrink-0">正题名</label>
            <input v-model="search.title" type="text" placeholder="请输入"
              class="flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-sky-500">
          </div>
          <div class="flex items-center gap-2 justify-end">
            <button type="submit" class="px-5 py-1.5 bg-sky-600 text-white text-sm rounded hover:bg-sky-700">查询</button>
            <button type="button" class="px-5 py-1.5 border border-gray-300 text-gray-600 text-sm rounded hover:bg-gray-50" @click="resetSearch">重置</button>
          </div>
        </form>
      </div>
      <div class="px-6 py-3 shrink-0">
        <DropdownButton label="导出结算清单" variant="amber" :items="exportItems" @select="onExport" />
      </div>
      <div class="flex-1 min-h-0 px-6 pb-6">
        <DataTable
          :selectable="false"
          :columns="SETTLEMENT_LIST_COLUMNS"
          :rows="pagedRows"
          :total="filteredRows.length"
          row-id-key="no"
          v-model:page="page"
          v-model:page-size="pageSize"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue';
import DataTable from '@/components/common/DataTable.vue';
import DropdownButton from '@/components/common/DropdownButton.vue';
import {
  SETTLEMENT_LIST_COLUMNS,
  filterSettlementListRows,
  getSettlementListRows
} from '@/modules/settlement/data/settled-list';

const props = defineProps({
  open: { type: Boolean, default: false },
  settleId: { type: String, default: '' }
});

const emit = defineEmits(['close']);

const allRows = ref([]);
const filteredRows = ref([]);
const search = ref({});
const page = ref(1);
const pageSize = ref(10);

const exportItems = [{ label: '导出配置' }, { label: '导出清单' }];

const pagedRows = computed(() => {
  const start = (page.value - 1) * pageSize.value;
  return filteredRows.value.slice(start, start + pageSize.value);
});

watch(() => props.open, open => {
  if (open && props.settleId) {
    allRows.value = getSettlementListRows(props.settleId);
    filteredRows.value = [...allRows.value];
    search.value = {};
    page.value = 1;
  }
});

function filterRows() {
  filteredRows.value = filterSettlementListRows(allRows.value, search.value);
  page.value = 1;
}

function resetSearch() {
  search.value = {};
  filteredRows.value = [...allRows.value];
  page.value = 1;
}

function onExport(item) {
  window.alert(`${item.label}功能为原型演示`);
}
</script>
