<template>
  <div class="order-line-list-panel flex flex-col flex-1 min-h-0 overflow-hidden">
    <OrderLineSearchPanel
      v-model="search"
      @search="filterRows"
      @reset="resetSearch"
    />
    <div class="flex items-center gap-2 mb-4 shrink-0 flex-wrap">
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
    <GenerateShortageSuccessModal
      :open="shortageSuccessOpen"
      @cancel="shortageSuccessOpen = false"
      @confirm="confirmViewShortage"
    />
  </div>
  <DataTable
    v-model:selected-keys="selectedIds"
    class="flex-1 min-h-0"
    :columns="ORDER_LINE_COLUMNS"
    :rows="pagedRows"
    :total="filteredRows.length"
    row-id-key="id"
    unit="条"
    v-model:page="page"
    v-model:page-size="pageSize"
  >
    <template #cell-orderLineNo="{ row }">
      <button type="button" class="text-sky-600 hover:underline" @click="goLineDetail(row.orderLineNo)">{{ row.orderLineNo }}</button>
    </template>
    <template #cell-bibRecordNo="{ row }">
      <span class="inline-flex items-center gap-1 max-w-full">
        <span class="truncate">{{ row.bibRecordNo || '' }}</span>
        <ActualBibRecordNoMarker :record-nos="getActualBibRecordNos(row)" />
      </span>
    </template>
    <template #cell-holdingDuplicate="{ row }">
      <DedupBadge :value="row.holdingDuplicate" @view="store.openDedupDrawer(row, 'holding')" />
    </template>
    <template #cell-orderDuplicate="{ row }">
      <DedupBadge :value="row.orderDuplicate" @view="store.openDedupDrawer(row, 'order')" />
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
        @click="store.openDedupModal([row.orderLineNo])"
      >
        查重
      </button>
      <button type="button" class="text-sky-600 hover:underline mr-2" @click="store.openModal('editLine', { lineNo: row.orderLineNo, line: row })">编辑</button>
      <button type="button" class="text-sky-600 hover:underline" @click="store.openModal('cancelOrder', { lineNo: row.orderLineNo })">撤订</button>
    </template>
  </DataTable>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import OrderLineSearchPanel from '@/modules/order/components/OrderLineSearchPanel.vue';
import DataTable from '@/components/common/DataTable.vue';
import DropdownButton from '@/components/common/DropdownButton.vue';
import DedupBadge from '@/modules/order/components/DedupBadge.vue';
import ActualBibRecordNoMarker from '@/modules/order/components/ActualBibRecordNoMarker.vue';
import GenerateShortageSuccessModal from '@/modules/order/components/GenerateShortageSuccessModal.vue';
import { useShortageStore } from '@/modules/acceptance/stores/shortage';
import { useOrderStore } from '@/modules/order/stores/order';
import {
  canOrderLineGenerateShortage,
  generateShortageOrdersByOrderId
} from '@/modules/order/data/shortage-generate';
import { ORDER_LINE_COLUMNS, canBatchDedup } from '@/modules/order/constants';
import {
  createDefaultOrderLineSearch,
  filterOrderLineRows
} from '@/modules/order/data/order-line-filter';
import { canDedupOrderLine } from '@/modules/order/data/dedup';

const props = defineProps({
  presetOrderId: { type: String, default: '' }
});

const router = useRouter();
const store = useOrderStore();
const shortageStore = useShortageStore();

const search = ref(createDefaultOrderLineSearch(props.presetOrderId));
const filteredRows = ref([...store.lines]);
const selectedIds = ref([]);
const page = ref(1);
const pageSize = ref(10);
const shortageSuccessOpen = ref(false);
const lastGeneratedShortages = ref([]);

const exportItems = [{ label: '导出配置' }, { label: '导出清单' }];

const pagedRows = computed(() => {
  const start = (page.value - 1) * pageSize.value;
  return filteredRows.value.slice(start, start + pageSize.value);
});

const canDedup = computed(() => canBatchDedup(store.lines, selectedIds.value, store.orders));

const canShortage = computed(() => {
  if (!selectedIds.value.length) return false;
  return store.lines
    .filter(r => selectedIds.value.includes(r.id))
    .every(r => canOrderLineGenerateShortage(r));
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

function getActualBibRecordNos(row) {
  if (!Array.isArray(row?.actualBibRecordNos)) return [];
  return row.actualBibRecordNos.filter(Boolean);
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

  const checkedRows = store.lines.filter(r => selectedIds.value.includes(r.id));
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

function confirmViewShortage() {
  shortageSuccessOpen.value = false;
  if (!lastGeneratedShortages.value.length) return;

  if (lastGeneratedShortages.value.length === 1) {
    router.push({
      name: 'shortage',
      query: { shortageId: lastGeneratedShortages.value[0].shortageId }
    });
    return;
  }
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
