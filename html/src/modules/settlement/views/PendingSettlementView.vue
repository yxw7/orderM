<template>
  <div class="page-panel page-panel--scroll">
    <SearchPanel
      v-model="search"
      :fields="pendingSettlementSearchFields"
      :cols="3"
      label-width="6rem"
      @search="filterRows"
      @reset="resetSearch"
    />
    <div class="flex items-center gap-2 mb-4 shrink-0">
      <button
        type="button"
        class="px-4 py-1.5 text-sm rounded border"
        :class="canAddSettlement ? 'border-gray-300 text-gray-600 hover:bg-gray-50' : 'border-gray-200 text-gray-400 bg-gray-50 cursor-not-allowed'"
        :disabled="!canAddSettlement"
        @click="openAddModal"
      >新增结算</button>
    </div>
    <DataTable
      v-model:selected-keys="selectedIds"
      :columns="PENDING_SETTLEMENT_COLUMNS"
      :rows="pagedRows"
      :total="filteredRows.length"
      row-id-key="id"
      v-model:page="page"
      v-model:page-size="pageSize"
      :is-row-selectable="isRowSelectable"
      @update:selected-keys="onSelectionChange"
    >
      <template #cell-acceptId="{ row }">
        <button type="button" class="text-sky-600 hover:underline whitespace-nowrap" @click.stop="goAcceptanceDetail(row)">{{ row.acceptId }}</button>
      </template>
      <template #cell-deliveryId="{ value }">{{ value || '—' }}</template>
      <template #cell-actions="{ row }">
        <button type="button" class="text-sky-600 hover:underline" @click.stop="openRevokeModal(row)">撤销申请结算</button>
      </template>
    </DataTable>

    <SettlementAddModal
      :open="addModalOpen"
      :rows="checkedRows"
      :group="settlementGroup"
      @close="addModalOpen = false"
      @confirm="submitAdd"
    />
    <RevokeSettlementModal
      :open="revokeModalOpen"
      :row="revokeRow"
      @close="revokeModalOpen = false"
      @confirm="submitRevoke"
    />
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import SearchPanel from '@/components/common/SearchPanel.vue';
import DataTable from '@/components/common/DataTable.vue';
import SettlementAddModal from '@/modules/settlement/components/SettlementAddModal.vue';
import RevokeSettlementModal from '@/modules/settlement/components/RevokeSettlementModal.vue';
import {
  PENDING_SETTLEMENT_COLUMNS,
  SETTLEMENT_GROUP_MSG,
  filterPendingSettlementRows,
  getSettlementGroup,
  isSameSettlementGroup,
  pendingSettlementRows,
  pendingSettlementSearchFields
} from '@/modules/settlement/data/pending-settlement';

defineOptions({ name: 'PendingSettlementView' });

const router = useRouter();

const allRows = ref(pendingSettlementRows.map(r => ({ ...r })));
const filteredRows = ref([...allRows.value]);
const search = ref({});
const selectedIds = ref([]);
const page = ref(1);
const pageSize = ref(10);
const addModalOpen = ref(false);
const revokeModalOpen = ref(false);
const revokeRow = ref(null);

const checkedRows = computed(() =>
  allRows.value.filter(r => selectedIds.value.includes(r.id))
);

const settlementGroup = computed(() => getSettlementGroup(checkedRows.value));

const canAddSettlement = computed(() => {
  if (!checkedRows.value.length) return false;
  const group = settlementGroup.value;
  return checkedRows.value.every(r => isSameSettlementGroup(r, group));
});

const pagedRows = computed(() => {
  const start = (page.value - 1) * pageSize.value;
  return filteredRows.value.slice(start, start + pageSize.value);
});

function isRowSelectable(row) {
  return isSameSettlementGroup(row, settlementGroup.value);
}

function onSelectionChange(ids) {
  if (ids.length <= 1) return;
  const rows = allRows.value.filter(r => ids.includes(r.id));
  const group = getSettlementGroup([rows[0]]);
  const valid = rows.every(r => isSameSettlementGroup(r, group));
  if (!valid) {
    window.alert(SETTLEMENT_GROUP_MSG);
    selectedIds.value = [ids[ids.length - 1]];
  }
}

function filterRows() {
  filteredRows.value = filterPendingSettlementRows(allRows.value, search.value);
  selectedIds.value = [];
  page.value = 1;
}

function resetSearch() {
  search.value = {};
  filteredRows.value = [...allRows.value];
  selectedIds.value = [];
}

function openAddModal() {
  if (!canAddSettlement.value) return;
  addModalOpen.value = true;
}

function submitAdd() {
  addModalOpen.value = false;
  selectedIds.value = [];
  window.alert('新增结算成功（原型演示）');
}

function openRevokeModal(row) {
  revokeRow.value = row;
  revokeModalOpen.value = true;
}

function submitRevoke() {
  if (revokeRow.value) {
    allRows.value = allRows.value.filter(r => r.id !== revokeRow.value.id);
    filteredRows.value = filterPendingSettlementRows(allRows.value, search.value);
    selectedIds.value = selectedIds.value.filter(id => id !== revokeRow.value.id);
  }
  revokeModalOpen.value = false;
  revokeRow.value = null;
}

function goAcceptanceDetail(row) {
  router.push({ name: 'acceptance-detail', params: { acceptanceId: row.acceptId } });
}
</script>
