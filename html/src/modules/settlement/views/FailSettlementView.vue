<template>
  <div class="page-panel page-panel--scroll">
    <SearchPanel
      v-model="search"
      :fields="failSettlementSearchFields"
      :cols="3"
      label-width="6rem"
      @search="filterRows"
      @reset="resetSearch"
    />
    <div class="flex items-center gap-2 mb-4 shrink-0">
      <button
        type="button"
        disabled
        class="px-4 py-1.5 text-sm rounded border border-gray-200 text-gray-400 bg-gray-50 cursor-not-allowed"
      >重新结算</button>
    </div>
    <DataTable
      v-model:selected-keys="selectedIds"
      :columns="FAIL_SETTLEMENT_COLUMNS"
      :rows="pagedRows"
      :total="filteredRows.length"
      row-id-key="id"
      v-model:page="page"
      v-model:page-size="pageSize"
    >
      <template #cell-acceptId="{ row }">
        <button type="button" class="text-sky-600 hover:underline whitespace-nowrap" @click.stop="goAcceptanceDetail(row)">{{ row.acceptId }}</button>
      </template>
      <template #cell-deliveryId="{ value }">{{ value || '—' }}</template>
    </DataTable>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import SearchPanel from '@/components/common/SearchPanel.vue';
import DataTable from '@/components/common/DataTable.vue';
import {
  FAIL_SETTLEMENT_COLUMNS,
  failSettlementRows,
  failSettlementSearchFields,
  filterFailSettlementRows
} from '@/modules/settlement/data/fail-settlement';

defineOptions({ name: 'FailSettlementView' });

const router = useRouter();

const allRows = ref(failSettlementRows.map(r => ({ ...r })));
const filteredRows = ref([...allRows.value]);
const search = ref({});
const selectedIds = ref([]);
const page = ref(1);
const pageSize = ref(10);

const pagedRows = computed(() => {
  const start = (page.value - 1) * pageSize.value;
  return filteredRows.value.slice(start, start + pageSize.value);
});

function filterRows() {
  filteredRows.value = filterFailSettlementRows(allRows.value, search.value);
  page.value = 1;
}

function resetSearch() {
  search.value = {};
  filteredRows.value = [...allRows.value];
}

function goAcceptanceDetail(row) {
  router.push({ name: 'acceptance-detail', params: { acceptanceId: row.acceptId } });
}
</script>
