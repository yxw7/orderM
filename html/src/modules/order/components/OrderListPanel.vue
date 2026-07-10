<template>
  <div class="flex flex-col flex-1 min-h-0 overflow-hidden">
    <SearchPanel
      v-model="search"
      :fields="searchFields"
      :cols="3"
      label-width="5rem"
      @search="filterRows"
      @reset="resetSearch"
    />
    <div class="relative z-20 flex items-center gap-2 mb-4 shrink-0 flex-wrap">
      <button type="button" class="px-4 py-1.5 bg-sky-600 text-white text-sm rounded hover:bg-sky-700" @click="store.openModal('newOrder')">
        新建订单
      </button>
      <button type="button" class="px-4 py-1.5 bg-orange-500 text-white text-sm rounded hover:bg-orange-600" @click="openCancelModal">
        撤订
      </button>
      <DropdownButton label="批量导出" :items="exportItems" @select="onExport" />
      <ColumnDisplayPopover
        class="ml-auto"
        :unpinned-columns="unpinnedColumns"
        :left-pinned-columns="leftPinnedColumns"
        :right-pinned-columns="rightPinnedColumns"
        :select-all-checked="selectAllChecked"
        :select-all-indeterminate="selectAllIndeterminate"
        @reset="resetColumns"
        @toggle-all="toggleAllColumns"
        @move="moveColumn"
        @pin="setColumnPin"
      />
    </div>
    <DataTable
      v-model:selected-keys="selectedIds"
      :columns="visibleColumns"
      :rows="pagedRows"
      :total="filteredRows.length"
      row-id-key="id"
      unit="条记录"
      v-model:page="page"
      v-model:page-size="pageSize"
    >
    <template #cell-no="{ row }">{{ row.no }}</template>
    <template #cell-subscriber="{ row }">
      <WrapCell :text="row.subscriber" max-width-class="max-w-[120px]" />
    </template>
    <template #cell-site="{ row }">
      <WrapCell :text="row.site" max-width-class="max-w-[100px]" />
    </template>
    <template #cell-supplier="{ row }">
      <WrapCell :text="row.supplier" max-width-class="max-w-[140px]" />
    </template>
    <template #cell-budget="{ row }">
      <WrapCell :text="row.budget" max-width-class="max-w-[180px]" />
    </template>
    <template #cell-orderTime="{ row }">
      <WrapCell :text="row.orderTime" max-width-class="max-w-[110px]" />
    </template>
    <template #cell-issueTime="{ row }">
      <WrapCell :text="row.issueTime" max-width-class="max-w-[110px]" />
    </template>
    <template #cell-orderId="{ row }">
      <button type="button" class="text-sky-600 hover:underline" @click="$emit('go-lines', row.orderId)">{{ row.orderId }}</button>
    </template>
    <template #cell-issueRemark="{ row }">
      <span v-if="!row.issueRemark?.trim()" class="text-gray-300">查看</span>
      <span v-else class="text-sky-600 hover:underline cursor-pointer" :title="row.issueRemark">查看</span>
    </template>
    <template #cell-orderStatus="{ row }">
      <span :class="ORDER_STATUS_MAP[row.orderStatus]?.cls">{{ ORDER_STATUS_MAP[row.orderStatus]?.text }}</span>
    </template>
    <template #cell-settlementStatus="{ row }">
      {{ row.settlementStatus === 'settled' ? '已结算' : '未结算' }}
    </template>
    <template #cell-actions="{ row }">
      <template v-for="(action, i) in getOrderActions(row)" :key="action.key">
        <button type="button" class="text-sky-600 hover:underline" :class="{ 'mr-2': i < getOrderActions(row).length - 1 }" @click="onAction(action.key, row)">
          {{ action.text }}
        </button>
      </template>
    </template>
    </DataTable>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import SearchPanel from '@/components/common/SearchPanel.vue';
import DataTable from '@/components/common/DataTable.vue';
import WrapCell from '@/components/common/WrapCell.vue';
import DropdownButton from '@/components/common/DropdownButton.vue';
import ColumnDisplayPopover from '@/components/common/ColumnDisplayPopover.vue';
import { useColumnDisplay } from '@/composables/useColumnDisplay';
import { useOrderStore } from '@/modules/order/stores/order';
import { useSiteSelectOptions } from '@/composables/use-site-options';
import { ORDER_LIST_COLUMNS, getOrderActions } from '@/modules/order/constants';
import { ORDER_STATUS_MAP, orderSearchFields } from '@/modules/order/data/orders';
import { filterOrderRows } from '@/modules/order/data/order-filter';

defineEmits(['go-lines']);

const router = useRouter();
const store = useOrderStore();
const { withSiteSearchFields } = useSiteSelectOptions();
const searchFields = withSiteSearchFields(orderSearchFields);

const {
  unpinnedColumns,
  leftPinnedColumns,
  rightPinnedColumns,
  visibleColumns,
  selectAllChecked,
  selectAllIndeterminate,
  resetColumns,
  toggleAllColumns,
  moveColumn,
  setColumnPin
} = useColumnDisplay('order-list-columns-v2', ORDER_LIST_COLUMNS);

const search = ref({});
const filteredRows = ref([...store.orders]);
const selectedIds = ref([]);
const page = ref(1);
const pageSize = ref(10);

const exportItems = [{ label: '导出配置' }, { label: '导出订单' }];

const pagedRows = computed(() => {
  const start = (page.value - 1) * pageSize.value;
  return filteredRows.value.slice(start, start + pageSize.value);
});

function filterRows() {
  filteredRows.value = filterOrderRows(store.orders, search.value);
  page.value = 1;
}

function resetSearch() {
  search.value = {};
  filteredRows.value = [...store.orders];
}

watch(() => store.orders, () => {
  filterRows();
}, { deep: true });

function onAction(key, row) {
  if (key === 'edit') store.openModal('editOrder', { orderId: row.orderId, order: row });
  else if (key === 'import') store.openModal('importOrder', { orderId: row.orderId });
  else if (key === 'issue') store.openModal('issueOrder', { orderId: row.orderId });
  else if (key === 'cancel') store.openModal('cancelOrder', { orderId: row.orderId });
  else if (key === 'export') window.alert('导出订单（原型演示）');
  else if (key === 'delete') store.openModal('deleteOrder', { orderId: row.orderId });
}

/**
 * 打开撤订弹窗（批量）
 */
function openCancelModal() {
  if (!selectedIds.value.length) {
    window.alert('请先勾选要撤订的订单');
    return;
  }
  const orderIds = store.orders
    .filter(row => selectedIds.value.includes(row.id))
    .map(row => row.orderId);
  store.openModal('cancelOrder', { orderIds });
}

function onExport(item) {
  if (item.label === '导出配置') store.openModal('exportConfig', { scope: 'order' });
  else window.alert(`${item.label}（原型演示）`);
}
</script>
