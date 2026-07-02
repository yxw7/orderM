<template>
  <div class="page-panel page-panel--scroll">
    <SearchPanel
      v-model="search"
      :fields="batchAcceptanceSearchFields"
      :cols="4"
      label-width="5rem"
      @search="filterRows"
      @reset="resetSearch"
    />

    <div class="flex items-center gap-2 mb-4 shrink-0">
      <button type="button" class="px-4 py-1.5 text-sm rounded bg-sky-600 text-white hover:bg-sky-700" @click="openAdd">
        新增验收单
      </button>
      <button type="button" class="px-4 py-1.5 text-sm rounded bg-amber-500 text-white hover:bg-amber-600" @click="openSettlement">
        申请结算
      </button>
    </div>

    <DataTable
      v-model:selected-keys="selectedNos"
      :columns="BATCH_ACCEPTANCE_COLUMNS"
      :rows="pagedRows"
      :total="filteredRows.length"
      row-id-key="no"
      unit="个项目"
      v-model:page="page"
      v-model:page-size="pageSize"
    >
      <template #cell-acceptanceId="{ row }">
        <button type="button" class="text-sky-600 hover:underline whitespace-nowrap" @click="goDetail(row)">
          {{ row.acceptanceId }}
        </button>
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
        <template v-if="canApplyBatchSettlement(row)">
          <button type="button" class="text-sky-600 hover:underline mr-3" @click="restartAcceptance(row)">重启验收</button>
          <button type="button" class="text-sky-600 hover:underline" @click="openRowSettlement(row)">申请结算</button>
        </template>
        <span v-else class="text-gray-400">—</span>
      </template>
    </DataTable>

    <BatchAcceptanceFormModal
      :open="addOpen"
      @close="addOpen = false"
      @submit="onAddSubmit"
    />
    <AcceptanceSettlementModal
      :open="settlementOpen"
      :count="selectedNos.length"
      message="确定申请结算该验收单吗？"
      @close="settlementOpen = false"
      @confirm="confirmSettlement"
    />
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import SearchPanel from '@/components/common/SearchPanel.vue';
import DataTable from '@/components/common/DataTable.vue';
import HoverTooltip from '@/modules/acceptance/components/HoverTooltip.vue';
import BatchAcceptanceFormModal from '@/modules/acceptance/components/BatchAcceptanceFormModal.vue';
import AcceptanceSettlementModal from '@/modules/acceptance/components/AcceptanceSettlementModal.vue';
import { ACCEPTANCE_STATUS_MAP, SETTLEMENT_STATUS_MAP } from '@/modules/acceptance/data/acceptance-list';
import {
  BATCH_ACCEPTANCE_COLUMNS,
  batchAcceptanceRows,
  batchAcceptanceSearchFields,
  canApplyBatchSettlement,
  createBatchAcceptanceRow,
  filterBatchAcceptanceRows
} from '@/modules/acceptance/data/batch-acceptance';

defineOptions({ name: 'BatchAcceptanceView' });

const router = useRouter();

const rows = ref(batchAcceptanceRows.map(r => ({ ...r })));
const filteredRows = ref([...rows.value]);
const search = ref({});
const selectedNos = ref([]);
const page = ref(1);
const pageSize = ref(10);
const addOpen = ref(false);
const settlementOpen = ref(false);
const settlementTargetNo = ref(null);

const pagedRows = computed(() => {
  const start = (page.value - 1) * pageSize.value;
  return filteredRows.value.slice(start, start + pageSize.value);
});

function renumberRows() {
  rows.value.forEach((row, index) => {
    row.no = index + 1;
  });
}

function filterRows() {
  filteredRows.value = filterBatchAcceptanceRows(rows.value, search.value);
  page.value = 1;
}

function resetSearch() {
  search.value = {};
  filteredRows.value = [...rows.value];
  page.value = 1;
}

function openAdd() {
  addOpen.value = true;
}

function onAddSubmit(form) {
  const newRow = createBatchAcceptanceRow(form);
  rows.value.unshift(newRow);
  renumberRows();
  filterRows();
  addOpen.value = false;
  window.alert('新增验收单成功');
}

function openSettlement() {
  if (!selectedNos.value.length) {
    window.alert('请先勾选验收单');
    return;
  }
  settlementTargetNo.value = null;
  settlementOpen.value = true;
}

function openRowSettlement(row) {
  settlementTargetNo.value = row.no;
  selectedNos.value = [row.no];
  settlementOpen.value = true;
}

function confirmSettlement() {
  const targets = settlementTargetNo.value
    ? [settlementTargetNo.value]
    : [...selectedNos.value];
  rows.value.forEach(row => {
    if (targets.includes(row.no) && canApplyBatchSettlement(row)) {
      row.settlement = 'pending';
    }
  });
  settlementOpen.value = false;
  settlementTargetNo.value = null;
  window.alert('申请结算成功');
}

function restartAcceptance(row) {
  if (!window.confirm(`确定重启验收单「${row.name}」？`)) return;
  row.status = 'inProgress';
  row.receivedCount = 0;
  window.alert('重启验收成功');
}

function goDetail(row) {
  router.push({ name: 'acceptance-detail', params: { acceptanceId: row.acceptanceId } });
}
</script>
