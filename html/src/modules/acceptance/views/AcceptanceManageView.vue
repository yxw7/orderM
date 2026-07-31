<template>
  <div class="page-panel page-panel--scroll">
    <SearchPanel
      v-model="search"
      :fields="acceptanceSearchFields"
      :cols="4"
      label-width="5rem"
      @search="filterRows"
      @reset="resetSearch"
    />

    <div class="relative z-20 flex items-center gap-2 mb-4 flex-wrap">
      <button type="button" class="px-4 py-1.5 bg-sky-600 text-white text-sm rounded hover:bg-sky-700" @click="openAdd">
        新增验收单
      </button>
      <button
        type="button"
        class="px-4 py-1.5 text-sm rounded"
        :class="canImport ? 'border border-sky-600 text-sky-600 bg-white hover:bg-sky-50' : 'border border-gray-300 text-gray-400 bg-gray-50 cursor-not-allowed'"
        :disabled="!canImport"
        :title="importTitle"
        @click="goPreAccept"
      >
        预验收
      </button>
      <button
        type="button"
        class="px-4 py-1.5 text-sm rounded"
        :class="canImport ? 'border border-sky-600 text-sky-600 bg-white hover:bg-sky-50' : 'border border-gray-300 text-gray-400 bg-gray-50 cursor-not-allowed'"
        :disabled="!canImport"
        :title="importTitle"
        @click="goDeliveryImport"
      >
        批验收
      </button>
      <button type="button" class="px-4 py-1.5 bg-amber-500 text-white text-sm rounded hover:bg-amber-600" @click="openSettlement">
        申请结算
      </button>
      <DropdownButton label="导出列表" :items="[{ label: '导出配置' }, { label: '导出清单' }]" @select="onExport" />
      <span v-if="selectedIds.length" class="text-sm text-gray-500 ml-auto">已选 {{ selectedIds.length }} 条</span>
    </div>

    <DataTable
      v-model:selected-keys="selectedIds"
      :columns="ACCEPTANCE_LIST_COLUMNS"
      :rows="pagedRows"
      :total="filteredRows.length"
      row-id-key="id"
      unit="条记录"
      v-model:page="page"
      v-model:page-size="pageSize"
    >
      <template #cell-acceptanceId="{ row }">
        <button type="button" class="text-sky-600 hover:underline" @click="goDetail(row)">{{ row.acceptanceId }}</button>
      </template>
      <template #cell-defaultAccept="{ row }">
        <input
          type="radio"
          name="defaultAccept"
          :checked="row.defaultAccept"
          :disabled="row.status === 'finished'"
          :class="row.status === 'finished' ? 'opacity-40 cursor-not-allowed' : ''"
          @change="setDefaultAccept(row)"
        >
      </template>
      <template #cell-status="{ row }">
        <span :class="ACCEPTANCE_STATUS_MAP[row.status]?.cls">{{ ACCEPTANCE_STATUS_MAP[row.status]?.text }}</span>
      </template>
      <template #cell-settlement="{ row }">
        <span :class="SETTLEMENT_STATUS_MAP[row.settlement]?.cls">{{ SETTLEMENT_STATUS_MAP[row.settlement]?.text }}</span>
      </template>
      <template #cell-remark="{ row }">
        <HoverTooltip v-if="row.remark && row.remarkText" :text="row.remarkText">
          <span class="text-sky-600 hover:underline cursor-pointer">查看</span>
        </HoverTooltip>
        <span v-else class="text-gray-300 cursor-default select-none">查看</span>
      </template>
      <template #cell-actions="{ row }">
        <template v-if="row.status === 'notStarted'">
          <button type="button" class="text-sky-600 hover:underline mr-3" @click="openEdit(row)">编辑</button>
          <button type="button" class="text-red-500 hover:underline" @click="deleteRow(row)">删除</button>
        </template>
        <template v-else-if="row.status === 'inProgress'">
          <button type="button" class="text-sky-600 hover:underline mr-3" @click="openEdit(row)">编辑</button>
          <button type="button" class="text-sky-600 hover:underline" @click="finishRow(row)">结束验收</button>
        </template>
        <span v-else class="text-gray-400">—</span>
      </template>
    </DataTable>

    <AcceptanceFormModal
      :open="formModal.open"
      :mode="formModal.mode"
      :row="formModal.row"
      @close="formModal.open = false"
      @submit="onFormSubmit"
    />
    <AcceptanceSettlementModal
      :open="settlementOpen"
      :count="selectedIds.length"
      @close="settlementOpen = false"
      @confirm="confirmSettlement"
    />
    <AcceptanceExportConfigModal
      :open="exportConfigOpen"
      :fields="ACCEPTANCE_LIST_EXPORT_FIELDS"
      @close="exportConfigOpen = false"
      @confirm="onExportConfigSave"
    />
    <PreAcceptWizardModal
      :open="preAcceptOpen"
      :ctx="batchImportCtx"
      @close="preAcceptOpen = false"
    />
    <BatchImportWizardModal
      :open="batchImportOpen"
      :ctx="batchImportCtx"
      @close="batchImportOpen = false"
      @confirmed="onBatchImportConfirmed"
    />
    <PrdSpecDrawer page-id="acceptance-manage" />
  </div>
</template>

<script setup>
import { computed, onActivated, onMounted, reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import SearchPanel from '@/components/common/SearchPanel.vue';
import DataTable from '@/components/common/DataTable.vue';
import DropdownButton from '@/components/common/DropdownButton.vue';
import PrdSpecDrawer from '@/components/common/PrdSpecDrawer.vue';
import AcceptanceFormModal from '@/modules/acceptance/components/AcceptanceFormModal.vue';
import AcceptanceSettlementModal from '@/modules/acceptance/components/AcceptanceSettlementModal.vue';
import AcceptanceExportConfigModal from '@/modules/acceptance/components/AcceptanceExportConfigModal.vue';
import PreAcceptWizardModal from '@/modules/acceptance/components/PreAcceptWizardModal.vue';
import BatchImportWizardModal from '@/modules/acceptance/components/BatchImportWizardModal.vue';
import HoverTooltip from '@/modules/acceptance/components/HoverTooltip.vue';
import { ACCEPTANCE_LIST_COLUMNS, ACCEPTANCE_LIST_EXPORT_FIELDS } from '@/modules/acceptance/constants';
import {
  acceptanceSearchFields,
  createAcceptanceRows,
  filterAcceptanceRows,
  buildNewAcceptanceId,
  formatAcceptanceDateTime,
  isImportableAcceptance,
  ACCEPTANCE_STATUS_MAP,
  SETTLEMENT_STATUS_MAP
} from '@/modules/acceptance/data/acceptance-list';
import { useAcceptanceStore, acceptanceFromRow } from '@/modules/acceptance/stores/acceptance';
import {
  hasCurrentLibrarianAssociatedSubscribers,
  NO_ASSOCIATED_SUBSCRIBER_IMPORT_PERMISSION_MESSAGE
} from '@/modules/subscriber/data/current-librarian';

defineOptions({ name: 'AcceptanceManageView' });

const router = useRouter();
const acceptanceStore = useAcceptanceStore();

const rows = ref(createAcceptanceRows());
const filteredRows = ref([...rows.value]);
const search = ref({});
const selectedIds = ref([]);
const page = ref(1);
const pageSize = ref(10);
const settlementOpen = ref(false);
const exportConfigOpen = ref(false);
const preAcceptOpen = ref(false);
const batchImportOpen = ref(false);
const formModal = reactive({ open: false, mode: 'add', row: null });

const pagedRows = computed(() => {
  const start = (page.value - 1) * pageSize.value;
  return filteredRows.value.slice(start, start + pageSize.value);
});

const selectedRow = computed(() => {
  if (selectedIds.value.length !== 1) return null;
  return rows.value.find(r => r.id === selectedIds.value[0]) || null;
});

const canImport = computed(() => isImportableAcceptance(selectedRow.value));

const importTitle = computed(() => {
  if (selectedIds.value.length !== 1) return '请勾选一条未开始或进行中的验收单';
  if (!canImport.value) return '仅未开始或进行中的验收单可预验收/批验收';
  return '';
});

const batchImportCtx = computed(() => {
  if (!selectedRow.value) return acceptanceStore.current || {};
  return acceptanceFromRow(selectedRow.value);
});

onMounted(() => {
  acceptanceStore.initFromStorage();
  syncImportStatusesFromSource();
  syncDefaultFromStore();
});

onActivated(() => {
  syncImportStatusesFromSource();
});

/** 批验收确认后 BASE_ROWS 可能已改为进行中，同步到当前列表 */
function syncImportStatusesFromSource() {
  const fresh = createAcceptanceRows();
  const statusById = Object.fromEntries(fresh.map(r => [r.acceptanceId, r.status]));
  rows.value.forEach(r => {
    if (statusById[r.acceptanceId]) r.status = statusById[r.acceptanceId];
  });
  filteredRows.value = filterAcceptanceRows(rows.value, search.value);
}

function syncDefaultFromStore() {
  const stored = acceptanceStore.current;
  if (stored?.no) {
    const matched = rows.value.find(r => r.no === stored.no);
    if (matched?.status === 'finished') {
      acceptanceStore.clearCurrent();
      return;
    }
    if (matched) {
      rows.value.forEach(r => {
        r.defaultAccept = r.no === stored.no;
        r.setCurrent = r.no === stored.no;
      });
      return;
    }
  }
  const defaultRow = rows.value.find(r => r.defaultAccept);
  if (defaultRow) setCurrent(defaultRow, true);
}

function filterRows() {
  filteredRows.value = filterAcceptanceRows(rows.value, search.value);
  page.value = 1;
}

function resetSearch() {
  search.value = {};
  filteredRows.value = [...rows.value];
  page.value = 1;
}

function setCurrent(row, silent = false) {
  acceptanceStore.setCurrent(acceptanceFromRow(row));
  if (!silent) window.alert(`已将「${row.name}」设为当前工作验收单`);
}

function setDefaultAccept(row) {
  if (row.status === 'finished') return;
  rows.value.forEach(r => {
    r.defaultAccept = r.id === row.id;
    r.setCurrent = r.id === row.id;
  });
  setCurrent(row, true);
}

function goDetail(row) {
  acceptanceStore.saveDetailContext({
    acceptance: {
      acceptanceId: row.acceptanceId,
      name: row.name,
      type: row.type,
      lang: row.lang,
      shipNo: row.shipNo,
      supplier: row.supplier,
      remarkText: row.remarkText || '',
      status: row.status,
      counts: row.counts
    },
    viewMode: 'species',
    detailRows: row.type === '视听资料' && row.counts === '0/0/0' ? [] : undefined
  });
  router.push(`/acceptance/detail/${encodeURIComponent(row.acceptanceId)}`);
}

function goPreAccept() {
  if (!hasCurrentLibrarianAssociatedSubscribers()) {
    window.alert(NO_ASSOCIATED_SUBSCRIBER_IMPORT_PERMISSION_MESSAGE);
    return;
  }
  if (selectedIds.value.length !== 1) {
    window.alert('请先在列表中勾选一条未开始或进行中的验收单');
    return;
  }
  if (!canImport.value || !selectedRow.value) {
    window.alert('请先在列表中勾选一条未开始或进行中的验收单');
    return;
  }
  setCurrent(selectedRow.value, true);
  preAcceptOpen.value = true;
}

function goDeliveryImport() {
  if (!hasCurrentLibrarianAssociatedSubscribers()) {
    window.alert(NO_ASSOCIATED_SUBSCRIBER_IMPORT_PERMISSION_MESSAGE);
    return;
  }
  if (selectedIds.value.length !== 1) {
    window.alert('请先在列表中勾选一条未开始或进行中的验收单');
    return;
  }
  if (!canImport.value || !selectedRow.value) {
    window.alert('请先在列表中勾选一条未开始或进行中的验收单');
    return;
  }
  setCurrent(selectedRow.value, true);
  batchImportOpen.value = true;
}

function onBatchImportConfirmed() {
  batchImportOpen.value = false;
  syncImportStatusesFromSource();
}

function openAdd() {
  formModal.mode = 'add';
  formModal.row = null;
  formModal.open = true;
}

function openEdit(row) {
  formModal.mode = 'edit';
  formModal.row = row;
  formModal.open = true;
}

function onFormSubmit(form) {
  if (formModal.mode === 'add') {
    const nextNo = rows.value.length ? Math.max(...rows.value.map(r => r.no)) + 1 : 1;
    const newRow = {
      no: nextNo,
      id: nextNo,
      acceptanceId: buildNewAcceptanceId(),
      name: form.name,
      type: form.resourceType,
      lang: form.language,
      method: form.method,
      supplier: form.supplier,
      shipNo: form.shipNo,
      status: 'notStarted',
      settlement: 'notApplied',
      counts: '0/0/0',
      remark: !!form.remark.trim(),
      remarkText: form.remark.trim(),
      autoBarcode: form.autoBarcode,
      barcodeType: form.barcodeType,
      initialBarcode: form.initialBarcode,
      barcode: form.autoBarcode ? '是' : '否',
      time: formatAcceptanceDateTime(),
      creator: '当前用户',
      defaultAccept: false,
      setCurrent: false
    };
    if (form.setCurrent) {
      rows.value.forEach(r => { r.defaultAccept = false; r.setCurrent = false; });
      newRow.defaultAccept = true;
      newRow.setCurrent = true;
    }
    rows.value.unshift(newRow);
    if (form.setCurrent) setCurrent(newRow, true);
    window.alert('验收单已创建');
  } else if (formModal.row) {
    const row = formModal.row;
    row.name = form.name;
    if (row.status !== 'inProgress') {
      row.type = form.resourceType;
      row.lang = form.language;
      row.method = form.method;
      row.supplier = form.supplier;
      row.autoBarcode = form.autoBarcode;
      row.barcodeType = form.barcodeType;
      row.initialBarcode = form.initialBarcode;
      row.barcode = form.autoBarcode ? '是' : '否';
    }
    row.shipNo = form.shipNo;
    row.remarkText = form.remark.trim();
    row.remark = !!row.remarkText;
    if (form.setCurrent) {
      rows.value.forEach(r => { r.defaultAccept = r.id === row.id; r.setCurrent = r.id === row.id; });
      setCurrent(row, true);
    } else if (row.defaultAccept) {
      row.defaultAccept = false;
      row.setCurrent = false;
      acceptanceStore.clearCurrent();
    }
    window.alert('验收单已保存');
  }
  formModal.open = false;
  filterRows();
}

function deleteRow(row) {
  if (!window.confirm(`确定删除验收单「${row.name}」？`)) return;
  rows.value = rows.value.filter(r => r.id !== row.id);
  if (row.defaultAccept) acceptanceStore.clearCurrent();
  selectedIds.value = selectedIds.value.filter(id => id !== row.id);
  filterRows();
}

function finishRow(row) {
  if (!window.confirm(`确定结束验收单「${row.name}」？`)) return;
  row.status = 'finished';
  if (row.defaultAccept) {
    row.defaultAccept = false;
    row.setCurrent = false;
    acceptanceStore.clearCurrent();
  }
  filterRows();
}

function openSettlement() {
  if (!selectedIds.value.length) {
    window.alert('请先勾选验收单');
    return;
  }
  settlementOpen.value = true;
}

function confirmSettlement() {
  rows.value.forEach(row => {
    if (selectedIds.value.includes(row.id) && row.settlement === 'notApplied') {
      row.settlement = 'pending';
    }
  });
  settlementOpen.value = false;
  window.alert(`已为 ${selectedIds.value.length} 条验收单提交结算申请`);
  filterRows();
}

function onExport(item) {
  if (item.label === '导出配置') {
    exportConfigOpen.value = true;
    return;
  }
  window.alert(`${item.label}（原型演示）`);
}

function onExportConfigSave(fields) {
  exportConfigOpen.value = false;
  window.alert(`导出配置已保存（${fields.length} 个字段）`);
}
</script>
