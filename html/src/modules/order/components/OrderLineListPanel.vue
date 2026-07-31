<template>
  <div class="order-line-list-panel flex flex-col flex-1 min-h-0 overflow-hidden">
    <OrderLineSearchPanel
      v-model="search"
      @search="filterRows"
      @reset="resetSearch"
    />
    <div class="relative z-20 flex items-center gap-2 mb-4 shrink-0 flex-wrap">
    <button
      type="button"
      class="px-4 py-1.5 text-sm rounded border"
      :class="canShortage ? 'border-gray-300 text-gray-600 bg-white hover:bg-gray-50' : 'border-gray-200 text-gray-400 bg-gray-50 cursor-not-allowed'"
      :disabled="!canShortage"
      @click="openShortageModal"
    >
      生成催缺单
    </button>
    <button
      type="button"
      class="px-4 py-1.5 text-sm rounded border"
      :class="canChangeSupplier ? 'border-gray-300 text-gray-600 bg-white hover:bg-gray-50' : 'border-gray-200 text-gray-400 bg-gray-50 cursor-not-allowed'"
      :disabled="!canChangeSupplier"
      @click="openChangeSupplierModal"
    >
      更换供应商
    </button>
    <button
      type="button"
      class="px-4 py-1.5 text-sm rounded"
      :class="canDedup ? 'bg-teal-500 text-white hover:bg-teal-600' : 'border border-gray-200 text-gray-400 bg-gray-50 cursor-not-allowed'"
      :disabled="!canDedup"
      @click="store.openBatchDedupModal(selectedIds)"
    >
      查重
    </button>
    <button type="button" class="px-4 py-1.5 bg-orange-500 text-white text-sm rounded hover:bg-orange-600" @click="openCancelModal">
      撤订
    </button>
    <DropdownButton label="导出订单行" :items="exportItems" @select="onExport" />
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
    <GenerateShortageSuccessModal
      :open="shortageSuccessOpen"
      @cancel="shortageSuccessOpen = false"
      @confirm="confirmViewShortage"
    />
    <GenerateShortageSuccessModal
      :open="changeSupplierSuccessOpen"
      :lines="changeSupplierSuccessLines"
      @cancel="changeSupplierSuccessOpen = false"
      @confirm="confirmViewNewOrder"
    />
    <OrderLineChangeSupplierModal
      :open="changeSupplierOpen"
      :source-order="changeSupplierSourceOrder"
      @close="changeSupplierOpen = false"
      @confirm="confirmChangeSupplier"
    />
  </div>
  <DataTable
    v-model:selected-keys="selectedIds"
    class="flex-1 min-h-0"
    :columns="visibleColumns"
    :rows="pagedRows"
    :total="filteredRows.length"
    row-id-key="id"
    unit="条"
    cell-nowrap
    :select-on-row-click="false"
    v-model:page="page"
    v-model:page-size="pageSize"
    :page-sizes="[50, 100, 200]"
  >
    <template #cell-no="{ row }">{{ row.no }}</template>
    <template #cell-orderName="{ row }">
      <div class="whitespace-normal min-w-[140px] max-w-[220px] text-sm leading-snug break-words">
        {{ row.orderName || '—' }}
      </div>
    </template>
    <template #cell-orderLineNo="{ row }">
      <button
        type="button"
        class="text-sky-600 hover:underline"
        @click.stop="goLineDetail(row.orderLineNo)"
      >
        {{ row.orderLineNo }}
      </button>
    </template>
    <template #cell-site="{ row }">
      <EllipsisCell :text="row.site" max-width-class="max-w-[120px]" />
    </template>
    <template #cell-title="{ row }">
      <EllipsisCell :text="row.title" max-width-class="max-w-[180px]" />
    </template>
    <template #cell-author="{ row }">
      <EllipsisCell :text="row.author" max-width-class="max-w-[140px]" />
    </template>
    <template #cell-publisher="{ row }">
      <EllipsisCell :text="row.publisher" max-width-class="max-w-[160px]" />
    </template>
    <template #cell-supplier="{ row }">
      <EllipsisCell :text="row.supplier" max-width-class="max-w-[140px]" />
    </template>
    <template #cell-budget="{ row }">
      <EllipsisCell :text="row.budget" max-width-class="max-w-[180px]" />
    </template>
    <template #cell-bibRecordNo="{ row }">
      <span class="inline-flex items-center gap-1 max-w-full">
        <span class="truncate">{{ row.bibRecordNo || '' }}</span>
        <ActualBibRecordNoMarker
          :record-nos="getOrderLineListActualBibRecordNos(row)"
          @open-record="recordNo => openCatalogRecordWindow(recordNo, row)"
        />
      </span>
    </template>
    <template #cell-holdingDuplicate="{ row }">
      <span @click.stop>
        <DedupBadge :value="row.holdingDuplicate" @view="store.openDedupDrawer(row, 'holding')" />
      </span>
    </template>
    <template #cell-orderDuplicate="{ row }">
      <span @click.stop>
        <DedupBadge :value="row.orderDuplicate" @view="store.openDedupDrawer(row, 'order')" />
      </span>
    </template>
    <template #cell-remark="{ row }">
      <span v-if="row.hasRemark" class="text-sky-600 hover:underline cursor-pointer">查看</span>
      <span v-else class="text-gray-300">—</span>
    </template>
    <template #cell-actions="{ row }">
      <button
        v-if="canDedupLine(row)"
        type="button"
        class="text-sky-600 hover:underline mr-2"
        @click.stop="store.openDedupModal([row.orderLineNo])"
      >
        查重
      </button>
      <button type="button" class="text-sky-600 hover:underline mr-2" @click.stop="store.openModal('editLine', { lineNo: row.orderLineNo, line: row })">编辑</button>
      <button type="button" class="text-sky-600 hover:underline" @click.stop="store.openModal('cancelOrder', { lineNo: row.orderLineNo })">撤订</button>
    </template>
  </DataTable>
  <CatalogRecordWindowStack
    :windows="catalogRecordWindows"
    @close="closeCatalogRecordWindow"
    @focus="focusCatalogRecordWindow"
    @update-layout="onCatalogRecordWindowLayout"
  />
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import OrderLineSearchPanel from '@/modules/order/components/OrderLineSearchPanel.vue';
import DataTable from '@/components/common/DataTable.vue';
import EllipsisCell from '@/components/common/EllipsisCell.vue';
import DropdownButton from '@/components/common/DropdownButton.vue';
import ColumnDisplayPopover from '@/components/common/ColumnDisplayPopover.vue';
import { useColumnDisplay } from '@/composables/useColumnDisplay';
import DedupBadge from '@/modules/order/components/DedupBadge.vue';
import ActualBibRecordNoMarker from '@/modules/order/components/ActualBibRecordNoMarker.vue';
import CatalogRecordWindowStack from '@/modules/order/components/CatalogRecordWindowStack.vue';
import GenerateShortageSuccessModal from '@/modules/order/components/GenerateShortageSuccessModal.vue';
import OrderLineChangeSupplierModal from '@/modules/order/components/OrderLineChangeSupplierModal.vue';
import { useCatalogRecordWindows } from '@/modules/order/composables/useCatalogRecordWindows';
import { useShortageStore } from '@/modules/acceptance/stores/shortage';
import { useOrderStore } from '@/modules/order/stores/order';
import {
  canOrderLineGenerateShortage,
  generateShortageOrdersByOrderId
} from '@/modules/order/data/shortage-generate';
import { canChangeSupplierSelection } from '@/modules/order/data/order-line-change-supplier';
import { ORDER_LINE_COLUMNS, canBatchDedup } from '@/modules/order/constants';
import {
  createDefaultOrderLineSearch,
  filterOrderLineRows
} from '@/modules/order/data/order-line-filter';
import { canDedupOrderLine } from '@/modules/order/data/dedup';
import { getOrderLineListActualBibRecordNos } from '@/modules/order/data/order-line-detail';

const props = defineProps({
  presetOrderId: { type: String, default: '' }
});

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
} = useColumnDisplay('order-line-columns-v5', ORDER_LINE_COLUMNS);

const router = useRouter();
const store = useOrderStore();
const shortageStore = useShortageStore();
const {
  windows: catalogRecordWindows,
  openWindow: openCatalogRecordWindowInternal,
  closeWindow: closeCatalogRecordWindow,
  focusWindow: focusCatalogRecordWindow,
  updateLayout: applyCatalogRecordWindowLayout
} = useCatalogRecordWindows();

const search = ref(createDefaultOrderLineSearch(props.presetOrderId));
const filteredRows = ref(filterOrderLineRows(store.lines, search.value));
const selectedIds = ref([]);
const page = ref(1);
const pageSize = ref(50);
const shortageSuccessOpen = ref(false);
const lastGeneratedShortages = ref([]);
const changeSupplierOpen = ref(false);
const changeSupplierSuccessOpen = ref(false);
const lastChangeSupplierOrderId = ref('');

const changeSupplierSuccessLines = computed(() => {
  const orderId = lastChangeSupplierOrderId.value || '—';
  return [
    `已生成新订单 ${orderId}，原行未收货已按更换供应商撤订，是否立即查看？`
  ];
});

const exportItems = [{ label: '导出配置' }, { label: '导出清单' }];

const selectedLines = computed(() =>
  store.lines.filter(row => selectedIds.value.includes(row.id))
);

const pagedRows = computed(() => {
  const start = (page.value - 1) * pageSize.value;
  return filteredRows.value.slice(start, start + pageSize.value).map((row, index) => ({
    ...row,
    no: start + index + 1
  }));
});

const canDedup = computed(() => canBatchDedup(store.lines, selectedIds.value, store.orders));

const canShortage = computed(() => {
  if (!selectedIds.value.length) return false;
  return selectedLines.value.every(r => canOrderLineGenerateShortage(r));
});

const canChangeSupplier = computed(() => canChangeSupplierSelection(selectedLines.value).ok);

const changeSupplierSourceOrder = computed(() => {
  const orderId = selectedLines.value[0]?.orderId;
  if (!orderId) return null;
  return store.orders.find(order => order.orderId === orderId) || null;
});
watch(() => store.lines, () => {
  filterRows();
}, { deep: true });

watch(() => props.presetOrderId, id => {
  search.value = createDefaultOrderLineSearch(id || '');
  filterRows();
}, { immediate: true });

function canDedupLine(row) {
  return canDedupOrderLine(row, store.orders);
}

function openCatalogRecordWindow(recordNo, orderLineRow) {
  openCatalogRecordWindowInternal({ recordNo, orderLineRow });
}

function onCatalogRecordWindowLayout({ recordNo, x, y, width, height }) {
  applyCatalogRecordWindowLayout(recordNo, { x, y, width, height });
}

function filterRows() {
  filteredRows.value = filterOrderLineRows(store.lines, search.value);
  page.value = 1;
}

function resetSearch() {
  search.value = createDefaultOrderLineSearch(props.presetOrderId);
  filteredRows.value = filterOrderLineRows(store.lines, search.value);
  page.value = 1;
}

function goLineDetail(lineNo) {
  router.push(`/orders/line/${encodeURIComponent(lineNo)}`);
}

function openShortageModal() {
  if (!canShortage.value) return;

  const checkedRows = selectedLines.value;
  const generated = generateShortageOrdersByOrderId(checkedRows);
  if (!generated.length) {
    window.alert('所选订单行均已收货或已退货，无法生成催缺单');
    return;
  }

  const created = shortageStore.addGeneratedShortages(generated, store.orders);
  generated.forEach(group => {
    group.lineRows.forEach(line => {
      store.updateLine(line.orderLineNo, { isShortage: '是' });
    });
  });

  lastGeneratedShortages.value = created;
  shortageSuccessOpen.value = true;
}

function openChangeSupplierModal() {
  const check = canChangeSupplierSelection(selectedLines.value);
  if (!check.ok) {
    window.alert(check.reason || '当前勾选不满足更换供应商条件');
    return;
  }
  changeSupplierOpen.value = true;
}

function confirmChangeSupplier(form) {
  const result = store.changeSupplierGenerateOrder(selectedIds.value, form);
  if (!result.ok) {
    window.alert(result.message || '生成新订单失败');
    return;
  }
  changeSupplierOpen.value = false;
  selectedIds.value = [];
  lastChangeSupplierOrderId.value = result.newOrderId || '';
  changeSupplierSuccessOpen.value = true;
}

function confirmViewNewOrder() {
  changeSupplierSuccessOpen.value = false;
  store.setActiveTab('order-list');
  router.replace({ path: '/orders' });
}

function confirmViewShortage() {
  shortageSuccessOpen.value = false;
  if (!lastGeneratedShortages.value.length) return;
  router.push({ name: 'shortage' });
}

function onExport(item) {
  if (item.label === '导出配置') store.openModal('exportConfig', { scope: 'line' });
  else window.alert(`${item.label}（原型演示）`);
}

/**
 * 打开撤订弹窗（批量）
 */
function openCancelModal() {
  if (!selectedIds.value.length) {
    window.alert('请先勾选要撤订的订单行');
    return;
  }
  const lineNos = store.lines
    .filter(row => selectedIds.value.includes(row.id))
    .map(row => row.orderLineNo);
  store.openModal('cancelOrder', { lineNos });
}
</script>
