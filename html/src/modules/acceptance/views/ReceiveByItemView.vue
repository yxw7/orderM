<template>
  <div class="page-panel flex flex-col h-full overflow-hidden">
    <div class="bg-white rounded border border-gray-200 px-5 py-3 mb-4 shrink-0">
      <div class="flex items-start justify-between gap-4">
        <div class="flex flex-wrap items-center gap-x-10 gap-y-2 text-sm text-gray-700 flex-1 min-w-0">
          <span>验收单名称：<span class="text-gray-900">{{ current?.name || '—' }}</span></span>
          <span>供应商：<span class="text-gray-900">{{ current?.supplier || '—' }}</span></span>
          <span>语种：
            <span
              :class="current?.lang ? 'text-red-500 font-medium' : 'text-gray-900'"
            >{{ current?.lang || '—' }}</span>
          </span>
          <span>发货单号：<span class="text-gray-900">{{ current?.shipNo || '—' }}</span></span>
        </div>
        <button
          type="button"
          class="shrink-0 text-sm bg-transparent border-0 p-0 font-normal"
          :class="current ? 'text-sky-600 hover:underline cursor-pointer' : 'text-gray-300 cursor-default'"
          :disabled="!current"
          @click="openDetailDrawer"
        >
          查看详情
        </button>
      </div>
      <p v-if="!current" class="text-xs text-amber-600 mt-2">
        请先在「验收单管理」列表选择设为验收单，或在新增/编辑窗口勾选「设为当前工作验收单」
      </p>
    </div>

    <div class="bg-white rounded border border-gray-200 px-5 py-3 mb-4 shrink-0">
      <form class="flex items-center gap-3 flex-wrap" @submit.prevent="doSearch">
        <select
          v-model="searchField"
          class="border border-gray-300 rounded px-3 py-1.5 text-sm w-32 disabled:bg-gray-100 disabled:text-gray-400"
          :disabled="!current"
        >
          <option v-if="!current" value="">请先选择验收单</option>
          <option v-for="opt in searchFieldOptions" :key="opt.value" :value="opt.value">{{ opt.label }}</option>
        </select>
        <input
          v-model="keyword"
          type="text"
          :placeholder="current ? '请输入' : '请先选择验收单'"
          class="flex-1 max-w-md border border-gray-300 rounded px-3 py-1.5 text-sm disabled:bg-gray-100"
          :disabled="!current"
        >
        <select
          v-if="isAvType"
          v-model="carrier"
          class="border border-gray-300 rounded px-3 py-1.5 text-sm w-36 disabled:bg-gray-100"
          :disabled="!current"
        >
          <option value="">请选择载体</option>
          <option v-for="c in carrierOptions" :key="c" :value="c">{{ c }}</option>
        </select>
        <button
          type="submit"
          class="flex items-center gap-1.5 px-5 py-1.5 bg-sky-600 text-white text-sm rounded hover:bg-sky-700"
        >
          检索
        </button>
      </form>
    </div>

    <DataTable
      :selectable="false"
      :columns="tableColumns"
      :rows="pagedRows"
      :total="displayTotal"
      :empty-text="emptyText"
      :show-pagination="searchDone"
      row-id-key="no"
      unit="个项目"
      v-model:page="page"
      v-model:page-size="pageSize"
      :page-sizes="[5, 10, 20]"
      @row-click="selectRow"
    >
      <template #cell-select="{ row }">
        <input
          type="radio"
          name="receive-order-line"
          class="text-sky-600"
          :checked="selectedNo === row.no"
          @click.stop
          @change="selectedNo = row.no"
        >
      </template>
      <template #cell-orderLine="{ row }">
        <button type="button" class="text-sky-600 hover:underline whitespace-nowrap" @click.stop="openDetailDrawer">{{ row.orderLine }}</button>
      </template>
      <template #cell-remark="{ row }">
        <HoverTooltip v-if="row.remark" :text="row.remarkText || '查看备注'">
          <span class="text-sky-600 hover:underline cursor-pointer">查看</span>
        </HoverTooltip>
      </template>
    </DataTable>

    <div class="flex items-center justify-center gap-4 mt-4 pb-4 shrink-0">
      <button
        type="button"
        class="px-8 py-2 bg-emerald-500 text-white text-sm rounded hover:bg-emerald-600 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
        :disabled="!current"
        @click="openReceive"
      >收货</button>
      <button
        type="button"
        class="px-8 py-2 bg-sky-600 text-white text-sm rounded hover:bg-sky-700 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
        :disabled="!current"
        @click="openExchange"
      >换货</button>
      <button
        type="button"
        class="px-8 py-2 bg-orange-500 text-white text-sm rounded hover:bg-orange-600 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
        :disabled="!current"
        @click="openReturn"
      >退货</button>
    </div>

    <ReceiveDetailDrawer
      :open="drawerOpen"
      :acceptance-id="current?.id || ''"
      @close="drawerOpen = false"
    />
    <PaperReceiveModal
      :open="paperReceiveOpen"
      :row="selectedRow"
      :acceptance-lang="current?.lang || '中文'"
      :needs-barcode-allocation="needsBarcodeAllocationEnabled"
      @close="paperReceiveOpen = false"
      @preview="onBarcodePreview"
      @confirm="onPaperReceive"
    />
    <AvReceiveModal
      :open="avReceiveOpen"
      :row="selectedRow"
      :acceptance-lang="current?.lang || '中文'"
      @close="avReceiveOpen = false"
      @confirm="onAvReceive"
    />
    <ReceiveExchangeModal
      :open="exchangeOpen"
      :row="selectedRow"
      :resource-type="current?.type || '纸质书'"
      @close="exchangeOpen = false"
      @confirm="onExchange"
    />
    <ReceiveReturnModal
      :open="returnOpen"
      :row="selectedRow"
      :resource-type="current?.type || '纸质书'"
      @close="returnOpen = false"
      @confirm="onReturn"
    />
    <BarcodePreviewModal
      :open="barcodePreviewOpen"
      :preview="barcodePreview"
      @close="barcodePreviewOpen = false"
      @accept="barcodePreviewOpen = false"
      @reject="barcodePreviewOpen = false"
    />
  </div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from 'vue';
import DataTable from '@/components/common/DataTable.vue';
import HoverTooltip from '@/modules/acceptance/components/HoverTooltip.vue';
import ReceiveDetailDrawer from '@/modules/acceptance/components/ReceiveDetailDrawer.vue';
import PaperReceiveModal from '@/modules/acceptance/components/PaperReceiveModal.vue';
import AvReceiveModal from '@/modules/acceptance/components/AvReceiveModal.vue';
import ReceiveExchangeModal from '@/modules/acceptance/components/ReceiveExchangeModal.vue';
import ReceiveReturnModal from '@/modules/acceptance/components/ReceiveReturnModal.vue';
import BarcodePreviewModal from '@/modules/acceptance/components/BarcodePreviewModal.vue';
import { useAcceptanceStore } from '@/modules/acceptance/stores/acceptance';
import { RECEIVE_SEARCH_FIELDS } from '@/modules/acceptance/constants';
import {
  AV_COLUMNS,
  PAPER_BOOK_COLUMNS,
  RECEIVE_CARRIER_OPTIONS,
  calcBarcodePreview,
  filterReceiveRows,
  getReceiveOrderRows,
  needsBarcodeAllocation
} from '@/modules/acceptance/data/receive-by-item';
import { createAcceptanceRows } from '@/modules/acceptance/data/acceptance-list';

defineOptions({ name: 'ReceiveByItemView' });

const acceptanceStore = useAcceptanceStore();
const current = computed(() => acceptanceStore.current);

const allRows = ref([]);
const filteredRows = ref([]);
const searchField = ref('isbn');
const keyword = ref('');
const carrier = ref('');
const searchDone = ref(false);
const selectedNo = ref(null);

const page = ref(1);
const pageSize = ref(5);

const drawerOpen = ref(false);
const paperReceiveOpen = ref(false);
const avReceiveOpen = ref(false);
const exchangeOpen = ref(false);
const returnOpen = ref(false);
const barcodePreviewOpen = ref(false);
const barcodePreview = ref({ allocated: '', unallocated: '无' });

const carrierOptions = RECEIVE_CARRIER_OPTIONS.filter(Boolean);

const isAvType = computed(() => current.value?.type === '视听资料');

const needsBarcodeAllocationEnabled = computed(() => {
  const cur = current.value;
  if (!cur) return false;
  if (cur.autoBarcode != null || cur.barcode) return needsBarcodeAllocation(cur);
  const row = createAcceptanceRows().find(item => item.acceptanceId === cur.id);
  return needsBarcodeAllocation(row || cur);
});

const searchFieldOptions = computed(() => {
  const type = current.value?.type;
  return RECEIVE_SEARCH_FIELDS[type] || [];
});

const tableColumns = computed(() => {
  if (current.value?.type === '视听资料') return AV_COLUMNS;
  if (current.value?.type === '纸质书') return PAPER_BOOK_COLUMNS;
  return [{ key: 'orderLine', label: '订单行号' }];
});

const emptyText = computed(() => {
  if (!current.value) return '请先在验收单管理中选择当前工作验收单';
  if (!searchDone.value) return '请输入检索条件后点击检索';
  return '暂无数据';
});

const displayTotal = computed(() => (searchDone.value ? 85 : 0));

const pagedRows = computed(() => {
  if (!searchDone.value) return [];
  const start = (page.value - 1) * pageSize.value;
  return filteredRows.value.slice(start, start + pageSize.value);
});

const selectedRow = computed(() =>
  filteredRows.value.find(r => r.no === selectedNo.value) || null
);

watch(current, val => {
  allRows.value = getReceiveOrderRows(val);
  filteredRows.value = [];
  searchDone.value = false;
  selectedNo.value = null;
  keyword.value = '';
  carrier.value = '';
  page.value = 1;
  const fields = RECEIVE_SEARCH_FIELDS[val?.type];
  searchField.value = fields?.[0]?.value || 'isbn';
}, { immediate: true });

onMounted(() => acceptanceStore.initFromStorage());

function doSearch() {
  if (!current.value) {
    window.alert('请先在验收单管理中选择当前工作验收单');
    return;
  }
  filteredRows.value = filterReceiveRows(allRows.value, {
    searchField: searchField.value,
    keyword: keyword.value,
    carrier: carrier.value
  }, current.value.type);
  searchDone.value = true;
  selectedNo.value = null;
  page.value = 1;
}

function selectRow(row) {
  selectedNo.value = row.no;
}

function requireSelection() {
  if (!current.value) {
    window.alert('请先在验收单管理中选择当前工作验收单');
    return false;
  }
  if (!searchDone.value) {
    window.alert('请先检索订单行数据');
    return false;
  }
  if (!selectedRow.value) {
    window.alert('请先选择一条订单行数据');
    return false;
  }
  return true;
}

function openDetailDrawer() {
  if (!current.value) return;
  acceptanceStore.saveDetailContext({
    acceptance: {
      acceptanceId: current.value.id,
      name: current.value.name,
      type: current.value.type,
      lang: current.value.lang,
      shipNo: current.value.shipNo,
      supplier: current.value.supplier,
      remarkText: current.value.remarkText,
      status: current.value.status
    },
    viewMode: 'species'
  });
  drawerOpen.value = true;
}

function openReceive() {
  if (!requireSelection()) return;
  if (current.value.type === '纸质书') paperReceiveOpen.value = true;
  else if (current.value.type === '视听资料') avReceiveOpen.value = true;
}

function openExchange() {
  if (!requireSelection()) return;
  exchangeOpen.value = true;
}

function openReturn() {
  if (!requireSelection()) return;
  returnOpen.value = true;
}

function onBarcodePreview(form) {
  barcodePreview.value = calcBarcodePreview(
    form.barcodeStart,
    Number(form.receiveSets),
    Number(form.volumesPerSet)
  );
  barcodePreviewOpen.value = true;
}

function onPaperReceive() {
  paperReceiveOpen.value = false;
  window.alert('收货成功');
}

function onAvReceive() {
  avReceiveOpen.value = false;
  window.alert('收货成功');
}

function onExchange() {
  exchangeOpen.value = false;
  window.alert('换货成功');
}

function onReturn() {
  returnOpen.value = false;
  window.alert('退货成功');
}
</script>
