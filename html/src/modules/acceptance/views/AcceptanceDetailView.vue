<template>
  <div :class="embedded ? '' : 'page-panel'">
    <nav v-if="!embedded" class="flex items-center gap-2 mb-4 text-sm shrink-0">
      <a
        href="#"
        class="flex items-center gap-1 text-gray-500 hover:text-sky-600"
        @click.prevent="goBackToAcceptance"
      >
        <span>&lsaquo;</span> 验收单管理
      </a>
      <span class="text-gray-400">/</span>
      <span class="text-gray-800 font-medium">验收详情</span>
    </nav>

    <div class="bg-white rounded border border-gray-200 px-5 py-3 mb-4 shrink-0">
      <div class="grid grid-cols-5 gap-x-4 gap-y-2 text-sm text-gray-700">
        <span>验收单号：<span class="text-gray-900">{{ header.acceptanceId }}</span></span>
        <span>验收单名称：<span class="text-gray-900">{{ header.name }}</span></span>
        <span>资源类型：<span class="text-gray-900">{{ header.type }}</span></span>
        <span>语种：<span class="text-gray-900">{{ header.lang }}</span></span>
        <span>发货单号：<span class="text-gray-900">{{ header.shipNo }}</span></span>
        <span>供应商：<span class="text-gray-900">{{ header.supplier }}</span></span>
        <span class="col-span-5">验收备注：<span class="text-gray-900">{{ header.remark }}</span></span>
        <span>总种数：<span class="text-gray-900">{{ header.totalSpecies }}</span></span>
        <span>总册数：<span class="text-gray-900">{{ header.totalVolumes }}</span></span>
        <span>总码洋：<span class="text-gray-900">{{ header.totalListPrice }}</span></span>
        <span>总实洋：<span class="text-gray-900">{{ header.totalNetPrice }}</span></span>
      </div>
    </div>

    <div class="flex gap-8 border-b border-gray-200 mb-4 shrink-0 bg-white px-1">
      <button
        type="button"
        class="order-tab px-1 py-2.5 text-sm border-b-2 border-transparent"
        :class="{ active: viewMode === 'species' }"
        @click="switchView('species')"
      >
        按种
      </button>
      <button
        type="button"
        class="order-tab px-1 py-2.5 text-sm border-b-2 border-transparent"
        :class="{ active: viewMode === 'volume' }"
        @click="switchView('volume')"
      >
        按册
      </button>
    </div>

    <SearchPanel
      v-model="search"
      :fields="detailConfig.fields"
      :cols="4"
      label-width="4rem"
      @search="filterRows"
      @reset="resetSearch"
    />

    <div class="relative z-20 flex items-center gap-2 mb-4 shrink-0">
      <DropdownButton :label="detailConfig.exportLabel" :items="exportItems" @select="onExport" />
      <span v-if="viewMode === 'volume'" class="text-sm text-gray-700">仅提供收货详情</span>
    </div>

    <DataTable
      :selectable="false"
      :columns="tableColumns"
      :rows="pagedRows"
      :total="filteredRows.length"
      row-id-key="id"
      v-model:page="page"
      v-model:page-size="pageSize"
      :page-sizes="[10, 20, 50]"
      unit="条记录"
    >
      <template #cell-orderLine="{ row }">
        <button
          type="button"
          class="text-sky-600 hover:underline whitespace-nowrap"
          @click="goOrderLine(row)"
        >{{ row.orderLine }}</button>
      </template>
      <template #cell-reason="{ row }">
        <HoverTooltip v-if="row.reason && !isReasonDisabled(row)" :text="row.reason">
          <span class="text-sky-600 hover:underline cursor-pointer">查看</span>
        </HoverTooltip>
        <span v-else class="text-gray-400">—</span>
      </template>
      <template #cell-actions="{ row }">
        <template v-if="acceptanceStatus === 'inProgress' && viewMode === 'species'">
          <button v-if="speciesCounts(row).received" type="button" class="text-sky-600 hover:underline mr-3" @click="openRevoke(row)">撤销收货</button>
          <button v-if="speciesCounts(row).exchange" type="button" class="text-sky-600 hover:underline mr-3" @click="revokeExchange(row)">撤销换货</button>
          <button v-if="speciesCounts(row).returned" type="button" class="text-sky-600 hover:underline" @click="revokeReturn(row)">撤销退货</button>
          <span v-if="!hasSpeciesOps(row)" class="text-gray-400">—</span>
        </template>
        <span v-else class="text-gray-400">—</span>
      </template>
    </DataTable>

    <AcceptanceExportConfigModal
      :open="exportConfigOpen"
      :resource-type="header.type === '视听资料' ? '视听资料' : '纸质书'"
      :view-mode="viewMode"
      @close="exportConfigOpen = false"
      @confirm="onExportConfigSave"
    />
    <RevokeReceiveModal
      :open="revokeOpen"
      @close="revokeOpen = false"
      @confirm="submitRevoke"
    />
    <PrdSpecDrawer
      v-if="!embedded"
      page-id="acceptance-detail"
      :active-tab="viewMode"
    />
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import SearchPanel from '@/components/common/SearchPanel.vue';
import DataTable from '@/components/common/DataTable.vue';
import DropdownButton from '@/components/common/DropdownButton.vue';
import HoverTooltip from '@/modules/acceptance/components/HoverTooltip.vue';
import AcceptanceExportConfigModal from '@/modules/acceptance/components/AcceptanceExportConfigModal.vue';
import RevokeReceiveModal from '@/modules/acceptance/components/RevokeReceiveModal.vue';
import PrdSpecDrawer from '@/components/common/PrdSpecDrawer.vue';
import { createAcceptanceRows } from '@/modules/acceptance/data/acceptance-list';
import {
  getAcceptanceDetailConfig,
  acceptanceHeaderDefaults,
  getDefaultDetailRows,
  calcAcceptanceHeaderTotals,
  getSpeciesRuntimeRows
} from '@/modules/acceptance/data/acceptance-detail';
import {
  filterDetailRows,
  isSpeciesReasonDisabled,
  parseSpeciesCounts,
  updateSpeciesCounts,
  formatSpeciesReason
} from '@/modules/acceptance/data/detail-utils';
import { useAcceptanceStore } from '@/modules/acceptance/stores/acceptance';
import { useBreadcrumbBack } from '@/composables/use-breadcrumb-back';

defineOptions({ name: 'AcceptanceDetailView' });

const props = defineProps({
  embedded: { type: Boolean, default: false },
  acceptanceId: { type: String, default: '' }
});

const route = useRoute();
const router = useRouter();
const acceptanceStore = useAcceptanceStore();
const { goBackAndCloseTab } = useBreadcrumbBack();

const viewMode = ref(route.query.view === 'volume' ? 'volume' : 'species');
const search = ref({});
const detailRows = ref([]);
const volumeRows = ref([]);
const filteredRows = ref([]);
const page = ref(1);
const pageSize = ref(10);
const exportConfigOpen = ref(false);
const revokeOpen = ref(false);
const revokeTarget = ref(null);

const exportItems = [{ label: '导出明细' }, { label: '导出配置' }];

const effectiveAcceptanceId = computed(() =>
  props.embedded ? props.acceptanceId : route.params.acceptanceId
);

const listRow = computed(() => {
  const id = effectiveAcceptanceId.value;
  return createAcceptanceRows().find(r => r.acceptanceId === id);
});

const contextAcceptance = computed(() => {
  const ctx = acceptanceStore.detailContext;
  if (ctx?.acceptance?.acceptanceId === effectiveAcceptanceId.value) return ctx.acceptance;
  if (props.embedded && acceptanceStore.current?.id === effectiveAcceptanceId.value) {
    const c = acceptanceStore.current;
    return {
      acceptanceId: c.id,
      name: c.name,
      type: c.type,
      lang: c.lang,
      shipNo: c.shipNo,
      supplier: c.supplier,
      remarkText: c.remarkText,
      status: c.status
    };
  }
  return listRow.value;
});

const acceptanceStatus = computed(() => contextAcceptance.value?.status || listRow.value?.status || 'finished');

const header = computed(() => {
  const row = listRow.value;
  const ctx = contextAcceptance.value;
  if (!row && !ctx) return acceptanceHeaderDefaults;
  const type = row?.type || ctx?.type || '纸质书';
  const totals = calcAcceptanceHeaderTotals(type, detailRows.value);
  return {
    acceptanceId: row?.acceptanceId || ctx?.acceptanceId || acceptanceHeaderDefaults.acceptanceId,
    name: row?.name || ctx?.name || '—',
    type,
    lang: row?.lang || ctx?.lang || '—',
    shipNo: row?.shipNo || ctx?.shipNo || '—',
    supplier: row?.supplier || ctx?.supplier || '—',
    remark: row?.remarkText || ctx?.remarkText || '—',
    ...totals
  };
});

const detailConfig = computed(() =>
  getAcceptanceDetailConfig(header.value.type, viewMode.value, detailRows.value, volumeRows.value)
);

const tableColumns = computed(() =>
  viewMode.value === 'volume'
    ? detailConfig.value.columns
    : detailConfig.value.columns
);

const pagedRows = computed(() => {
  const start = (page.value - 1) * pageSize.value;
  return filteredRows.value.slice(start, start + pageSize.value);
});

function loadDetailData() {
  const row = listRow.value;
  const ctx = acceptanceStore.loadDetailContext();
  const type = row?.type || ctx?.acceptance?.type || '纸质书';
  const defaultEmpty = getDefaultDetailRows(type, row?.counts || ctx?.acceptance?.counts);
  const species = ctx?.detailRows !== undefined
    ? [...ctx.detailRows]
    : defaultEmpty !== undefined
      ? defaultEmpty
      : [...getAcceptanceDetailConfig(type, 'species').rows];
  detailRows.value = species.map(r => ({ ...r, reason: formatSpeciesReason(r) }));
  volumeRows.value = ctx?.volumeRows
    ? [...ctx.volumeRows]
    : [...getAcceptanceDetailConfig(type, 'volume').rows];
  filteredRows.value = [...detailConfig.value.rows];
}

watch(
  () => [effectiveAcceptanceId.value, route.query.view],
  () => {
    if (!props.embedded) {
      viewMode.value = route.query.view === 'volume' ? 'volume' : 'species';
    }
    loadDetailData();
    search.value = createDefaultSearch();
    page.value = 1;
  },
  { immediate: true }
);

watch(detailConfig, () => {
  filteredRows.value = filterDetailRows(detailConfig.value.rows, search.value, viewMode.value);
}, { deep: true });

function persistContext() {
  acceptanceStore.saveDetailContext({
    acceptance: {
      acceptanceId: header.value.acceptanceId,
      name: header.value.name,
      type: header.value.type,
      lang: header.value.lang,
      shipNo: header.value.shipNo,
      supplier: header.value.supplier,
      remarkText: header.value.remark,
      status: acceptanceStatus.value,
      counts: listRow.value?.counts
    },
    detailRows: detailRows.value,
    volumeRows: volumeRows.value,
    viewMode: viewMode.value
  });
}

function switchView(mode) {
  viewMode.value = mode;
  if (!props.embedded) {
    router.replace({ path: route.path, query: mode === 'volume' ? { view: 'volume' } : {} });
  }
  search.value = createDefaultSearch();
  filteredRows.value = filterDetailRows(detailConfig.value.rows, search.value, viewMode.value);
  page.value = 1;
}

function createDefaultSearch() {
  const fields = detailConfig.value?.fields || [];
  const selectText = fields.find(f => f.type === 'selectText');
  if (selectText?.selectKey && selectText.options?.length) {
    const first = selectText.options[0];
    return { [selectText.selectKey]: first.value ?? first };
  }
  return {};
}

function filterRows() {
  filteredRows.value = filterDetailRows(detailConfig.value.rows, search.value, viewMode.value);
  page.value = 1;
}

function resetSearch() {
  search.value = createDefaultSearch();
  filteredRows.value = [...detailConfig.value.rows];
  page.value = 1;
}

function goOrderLine(row) {
  if (!row?.orderLine) return;
  router.push({ name: 'order-line-detail', params: { lineNo: row.orderLine } });
}

function speciesCounts(row) {
  return parseSpeciesCounts(row);
}

function isReasonDisabled(row) {
  return isSpeciesReasonDisabled(row);
}

function hasSpeciesOps(row) {
  const c = speciesCounts(row);
  return c.received || c.exchange || c.returned;
}

function syncRuntimeSpeciesCounts(row, patch) {
  const runtimeRow = getSpeciesRuntimeRows(header.value.type).find(r => r.orderLine === row.orderLine);
  if (!runtimeRow) return;
  updateSpeciesCounts(runtimeRow, patch);
  if (patch.exchange === 0) runtimeRow.exchangeReason = '';
  if (patch.returned === 0) runtimeRow.returnReason = '';
  if (Array.isArray(row.revokeReceiveReasons)) {
    runtimeRow.revokeReceiveReasons = [...row.revokeReceiveReasons];
  }
  runtimeRow.reason = formatSpeciesReason(runtimeRow);
}

function openRevoke(row) {
  revokeTarget.value = row;
  revokeOpen.value = true;
}

function submitRevoke(reason) {
  const row = revokeTarget.value;
  if (!row) return;
  updateSpeciesCounts(row, { received: 0 });
  row.revokeReceiveReasons = [reason];
  row.reason = formatSpeciesReason(row);
  syncRuntimeSpeciesCounts(row, { received: 0 });
  persistContext();
  filterRows();
  revokeOpen.value = false;
  revokeTarget.value = null;
  window.alert('撤销收货成功');
}

function revokeExchange(row) {
  if (!window.confirm('确定撤销换货？')) return;
  updateSpeciesCounts(row, { exchange: 0 });
  row.exchangeReason = '';
  row.reason = formatSpeciesReason(row);
  syncRuntimeSpeciesCounts(row, { exchange: 0 });
  persistContext();
  filterRows();
}

function revokeReturn(row) {
  if (!window.confirm('确定撤销退货？')) return;
  updateSpeciesCounts(row, { returned: 0 });
  row.returnReason = '';
  row.reason = formatSpeciesReason(row);
  syncRuntimeSpeciesCounts(row, { returned: 0 });
  persistContext();
  filterRows();
}

function onExport(item) {
  if (item.label === '导出配置') {
    exportConfigOpen.value = true;
    return;
  }
  const count = filteredRows.value.length;
  if (!count) {
    window.alert(`暂无可导出的${viewMode.value === 'volume' ? '收货' : '验收'}明细`);
    return;
  }
  const filename = `${header.value.acceptanceId}_${viewMode.value === 'volume' ? '收货' : '验收'}明细.xlsx`;
  window.alert(`已导出 ${count} 条明细\n文件名：${filename}`);
}

function onExportConfigSave(fields) {
  exportConfigOpen.value = false;
  window.alert(`导出配置已保存（${fields.length} 个字段）`);
}

/**
 * 面包屑返回验收单管理：关闭当前标签页并跳转
 */
function goBackToAcceptance() {
  goBackAndCloseTab('/acceptance');
}
</script>
