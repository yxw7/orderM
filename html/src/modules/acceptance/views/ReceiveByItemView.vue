<template>
  <div class="page-panel flex flex-col h-full overflow-hidden">
    <div class="bg-white rounded border border-gray-200 px-5 py-3 mb-4 shrink-0">
      <div class="grid grid-cols-5 gap-x-4 gap-y-2 text-sm text-gray-700">
        <span class="text-left">验收单号：
          <button
            v-if="current?.id"
            type="button"
            class="text-sky-600 hover:underline bg-transparent border-0 p-0 font-normal cursor-pointer"
            @click="goAcceptanceDetail"
          >{{ current.id }}</button>
          <span v-else class="text-gray-900">—</span>
        </span>
        <span class="text-left">验收单名称：<span class="text-gray-900">{{ current?.name || '—' }}</span></span>
        <span class="text-left">供应商：<span class="text-gray-900">{{ current?.supplier || '—' }}</span></span>
        <span class="text-left">语种：
          <span
            :class="current?.lang ? 'text-red-500 font-medium' : 'text-gray-900'"
          >{{ current?.lang || '—' }}</span>
        </span>
        <span class="text-left">发货单号：<span class="text-gray-900">{{ current?.shipNo || '—' }}</span></span>
        <span class="text-left">总种数：<span class="text-gray-900">{{ headerTotals.totalSpecies }}</span></span>
        <span class="text-left">总册数：<span class="text-gray-900">{{ headerTotals.totalVolumes }}</span></span>
        <span class="text-left">总码洋：<span class="text-gray-900">{{ headerTotals.totalListPrice }}</span></span>
        <span class="text-left">总实洋：<span class="text-gray-900">{{ headerTotals.totalNetPrice }}</span></span>
        <span class="text-left col-start-1">收货套数：<span class="text-gray-900">{{ setStats.received }}</span></span>
        <span class="text-left">换货套数：<span class="text-gray-900">{{ setStats.exchanged }}</span></span>
        <span class="text-left">退货套数：<span class="text-gray-900">{{ setStats.returned }}</span></span>
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
        <select
          v-model="location"
          class="border border-gray-300 rounded px-3 py-1.5 text-sm min-w-[10rem] disabled:bg-gray-100 disabled:text-gray-400"
          :disabled="!current"
        >
          <option v-for="opt in activeSiteFilterOptions" :key="opt" :value="opt">{{ opt }}</option>
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
          @change="selectRow(row)"
        >
      </template>
      <template #cell-orderLine="{ row }">
        <button type="button" class="text-sky-600 hover:underline whitespace-nowrap" @click.stop="goOrderLine(row)">{{ row.orderLine }}</button>
      </template>
      <template #cell-remark="{ row }">
        <HoverTooltip v-if="row.remark" :text="row.remarkText || '查看备注'">
          <span class="text-sky-600 hover:underline cursor-pointer">查看</span>
        </HoverTooltip>
      </template>
    </DataTable>

    <ReceiveDispositionModal
      :open="dispositionOpen"
      :row="selectedRow"
      :resource-type="current?.type || '纸质书'"
      :acceptance-lang="current?.lang || '中文'"
      :acceptance-id="current?.id || ''"
      :needs-barcode-allocation="needsBarcodeAllocationEnabled"
      @close="dispositionOpen = false"
      @preview="onBarcodePreview"
      @confirm="onDispositionConfirm"
    />
    <BarcodePreviewModal
      :open="barcodePreviewOpen"
      :preview="barcodePreview"
      :auto-close-ms="3000"
      @close="barcodePreviewOpen = false"
      @accept="barcodePreviewOpen = false"
      @reject="barcodePreviewOpen = false"
    />
    <PrdSpecDrawer page-id="receive-by-item" />
  </div>
</template>

<script setup>
import { computed, nextTick, onMounted, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import DataTable from '@/components/common/DataTable.vue';
import HoverTooltip from '@/modules/acceptance/components/HoverTooltip.vue';
import ReceiveDispositionModal from '@/modules/acceptance/components/ReceiveDispositionModal.vue';
import BarcodePreviewModal from '@/modules/acceptance/components/BarcodePreviewModal.vue';
import PrdSpecDrawer from '@/components/common/PrdSpecDrawer.vue';
import { useSiteSelectOptions } from '@/composables/use-site-options';
import { useAcceptanceStore } from '@/modules/acceptance/stores/acceptance';
import { RECEIVE_SEARCH_FIELDS } from '@/modules/acceptance/constants';
import {
  AV_COLUMNS,
  PAPER_BOOK_COLUMNS,
  RECEIVE_CARRIER_OPTIONS,
  calcBarcodePreview,
  filterReceiveRows,
  getReceiveOrderRows,
  needsBarcodeAllocation,
  applyReceiveFlowToPendingRow,
  resolveReceiveSetSummary,
  splitReceiveAgainstExchange
} from '@/modules/acceptance/data/receive-by-item';
import { createAcceptanceRows } from '@/modules/acceptance/data/acceptance-list';
import {
  calcAcceptanceHeaderTotals,
  applyAcceptanceSpeciesFlow,
  sumAcceptanceSpeciesSetStats
} from '@/modules/acceptance/data/acceptance-detail';
import { applyExchangeOffsetToRecords } from '@/modules/acceptance/data/exchange-manage';
import { clearPreAcceptDraft } from '@/modules/acceptance/data/pre-accept-drafts';

defineOptions({ name: 'ReceiveByItemView' });

const acceptanceStore = useAcceptanceStore();
const router = useRouter();
const current = computed(() => acceptanceStore.current);
const { activeSiteFilterOptions } = useSiteSelectOptions();

const headerTotals = computed(() => {
  if (!current.value) {
    return {
      totalSpecies: '—',
      totalVolumes: '—',
      totalListPrice: '—',
      totalNetPrice: '—'
    };
  }
  return calcAcceptanceHeaderTotals(current.value.type);
});

const setStats = computed(() => {
  if (!current.value) {
    return { received: '—', exchanged: '—', returned: '—' };
  }
  const stats = sumAcceptanceSpeciesSetStats(current.value.type);
  return {
    received: String(stats.received),
    exchanged: String(stats.exchanged),
    returned: String(stats.returned)
  };
});

const allRows = ref([]);
const filteredRows = ref([]);
const searchField = ref('isbn');
const keyword = ref('');
const carrier = ref('');
const location = ref('全部');
const searchDone = ref(false);
const selectedNo = ref(null);

const page = ref(1);
const pageSize = ref(10);

const dispositionOpen = ref(false);
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
  dispositionOpen.value = false;
  keyword.value = '';
  carrier.value = '';
  location.value = '全部';
  page.value = 1;
  const fields = RECEIVE_SEARCH_FIELDS[val?.type];
  searchField.value = fields?.[0]?.value || 'isbn';
}, { immediate: true });

watch([filteredRows, selectedNo, dispositionOpen], () => {
  if (!dispositionOpen.value) return;
  if (!selectedNo.value || !filteredRows.value.some(r => r.no === selectedNo.value)) {
    dispositionOpen.value = false;
    selectedNo.value = null;
  }
});

onMounted(() => acceptanceStore.initFromStorage());

function doSearch() {
  if (!current.value) {
    window.alert('请先在验收单管理中选择当前工作验收单');
    return;
  }
  const rows = filterReceiveRows(allRows.value, {
    searchField: searchField.value,
    keyword: keyword.value,
    carrier: carrier.value,
    location: location.value
  }, current.value.type);
  filteredRows.value = rows;
  searchDone.value = true;
  page.value = 1;

  if (rows.length === 1) {
    selectedNo.value = rows[0].no;
    dispositionOpen.value = false;
    nextTick(() => {
      dispositionOpen.value = true;
    });
  } else {
    selectedNo.value = null;
    dispositionOpen.value = false;
  }
}

function selectRow(row) {
  if (!row) return;
  // 遮罩打开时底层不可点；此处仍防护，避免程序化选行打断当前处置
  if (dispositionOpen.value) return;
  selectedNo.value = row.no;
  dispositionOpen.value = true;
}

function goOrderLine(row) {
  if (!row?.orderLine) return;
  router.push({ name: 'order-line-detail', params: { lineNo: row.orderLine } });
}

function goAcceptanceDetail() {
  if (!current.value?.id) return;
  acceptanceStore.saveDetailContext({
    acceptance: {
      acceptanceId: current.value.id,
      name: current.value.name,
      type: current.value.type,
      lang: current.value.lang,
      shipNo: current.value.shipNo,
      supplier: current.value.supplier,
      remarkText: current.value.remarkText || '',
      status: current.value.status
    },
    viewMode: 'species'
  });
  router.push(`/acceptance/detail/${encodeURIComponent(current.value.id)}`);
}

function onBarcodePreview(form) {
  barcodePreview.value = calcBarcodePreview(
    form.barcodeStart,
    Number(form.receiveSets),
    Number(form.volumesPerSet)
  );
  barcodePreviewOpen.value = true;
}

function buildFlowMeta(row, form = {}) {
  const summary = resolveReceiveSetSummary(row);
  return {
    isbn: form.isbn ?? row.isbn,
    isrc: row.isrc,
    title: form.title ?? row.title,
    author: form.author ?? row.author,
    price: form.price ?? row.price,
    actualPrice: form.actualPrice ?? row.actualPrice,
    currency: form.currency ?? row.currency,
    orderedSets: summary.ordered,
    carrier: row.carrier,
    barcode: row.barcode,
    catalogNo: row.catalogNo,
    copies: form.volumesPerSet ?? form.copies ?? row.copies,
    volumesInSet: form.volumesPerSet ?? form.copies ?? row.copies,
    piecesInSet: form.copies ?? row.copies,
    reason: form.exchangeReason || form.returnReason || ''
  };
}

function commitFlow(flow, sets, form = {}, opts = {}) {
  const row = selectedRow.value;
  const cur = current.value;
  const qty = Number(sets) || 0;
  if (!row || !cur || qty <= 0) {
    window.alert('操作失败：套数无效');
    return false;
  }
  const pending = resolveReceiveSetSummary(row).pending;
  if (qty > pending) {
    window.alert(`超过待收货套数（当前待收 ${pending}）`);
    return false;
  }
  const deductExchange = Number(opts.deductExchange) || 0;
  applyAcceptanceSpeciesFlow({
    resourceType: cur.type,
    orderLine: row.orderLine,
    flow,
    sets: qty,
    meta: {
      ...buildFlowMeta(row, form),
      ...(deductExchange > 0 ? { deductExchange } : {})
    }
  });
  applyReceiveFlowToPendingRow(row, flow, qty, deductExchange > 0 ? { deductExchange } : {});
  return true;
}

/**
 * 收货：按是否优先换货拆分普通量 / 冲销量后写库
 * @param {object} form
 * @returns {boolean}
 */
function commitReceiveSplit(form) {
  const row = selectedRow.value;
  const cur = current.value;
  if (!row || !cur) return false;
  const qty = Number(form.receiveSets) || 0;
  if (qty <= 0) {
    window.alert('操作失败：套数无效');
    return false;
  }
  const summary = resolveReceiveSetSummary(row);
  if (qty > summary.pending) {
    window.alert(`超过待收货套数（当前待收 ${summary.pending}）`);
    return false;
  }

  const { normal, offset } = splitReceiveAgainstExchange(
    qty,
    summary.pending,
    summary.exchange,
    Boolean(form.againstExchange)
  );

  const writeNormal = () => {
    if (normal <= 0) return true;
    return commitFlow('receive', normal, form);
  };
  const writeOffset = () => {
    if (offset <= 0) return true;
    const { applied, shortfall } = applyExchangeOffsetToRecords(
      row.orderLine,
      offset,
      cur.id || ''
    );
    if (shortfall > 0) {
      window.alert(`换货记录可冲销量不足（已冲 ${applied}，缺口 ${shortfall}），已按实际可冲量更新`);
    }
    return commitFlow('receive', offset, form, { deductExchange: applied });
  };

  if (form.againstExchange) {
    if (!writeOffset()) return false;
    if (!writeNormal()) return false;
  } else {
    if (!writeNormal()) return false;
    if (!writeOffset()) return false;
  }
  return true;
}

/**
 * 一次确定：按收 → 换 → 退依次写库；成功后一律关面板
 * @param {{ receive?: object|null, exchange?: object|null, return?: object|null }} payload
 */
function onDispositionConfirm(payload) {
  const row = selectedRow.value;
  const receive = payload?.receive || null;
  const exchange = payload?.exchange || null;
  const ret = payload?.return || null;

  if (receive) {
    if (!commitReceiveSplit(receive)) return;
    if (current.value?.id && row?.orderLine) {
      clearPreAcceptDraft(current.value.id, row.orderLine);
    }
  }
  if (exchange) {
    if (!commitFlow('exchange', exchange.exchangeQty, exchange)) return;
  }
  if (ret) {
    if (!commitFlow('return', ret.returnQty, ret)) return;
  }

  window.alert('提交成功');
  dispositionOpen.value = false;
}
</script>
