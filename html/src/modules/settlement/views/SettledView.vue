<template>
  <div class="page-panel page-panel--scroll">
    <SearchPanel
      v-model="search"
      :fields="settledSearchFields"
      :cols="3"
      label-width="6rem"
      @search="filterRows"
      @reset="resetSearch"
    />
    <DataTable
      :selectable="false"
      :columns="SETTLED_COLUMNS"
      :rows="pagedRows"
      :total="filteredRows.length"
      row-id-key="id"
      v-model:page="page"
      v-model:page-size="pageSize"
    >
      <template #cell-settleId="{ row }">
        <button type="button" class="text-sky-600 hover:underline whitespace-nowrap" @click="openDetail(row)">{{ row.settleId }}</button>
      </template>
      <template #cell-deliveryId="{ value }">{{ value || '—' }}</template>
      <template #cell-actions="{ row }">
        <button type="button" class="text-sky-600 hover:underline mr-3" @click="openDetail(row)">详情</button>
        <button type="button" class="text-sky-600 hover:underline" @click="openList(row)">清单</button>
      </template>
    </DataTable>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import SearchPanel from '@/components/common/SearchPanel.vue';
import DataTable from '@/components/common/DataTable.vue';
import {
  SETTLED_COLUMNS,
  filterSettledRows,
  settledRows,
  settledSearchFields
} from '@/modules/settlement/data/settled';

defineOptions({ name: 'SettledView' });

const router = useRouter();
const allRows = ref(settledRows.map(r => ({ ...r })));
const filteredRows = ref([...allRows.value]);
const search = ref({});
const page = ref(1);
const pageSize = ref(10);

const pagedRows = computed(() => {
  const start = (page.value - 1) * pageSize.value;
  return filteredRows.value.slice(start, start + pageSize.value);
});

function filterRows() {
  filteredRows.value = filterSettledRows(allRows.value, search.value);
  page.value = 1;
}

function resetSearch() {
  search.value = {};
  filteredRows.value = [...allRows.value];
}

function openDetail(row) {
  router.push({ name: 'settlement-detail', params: { settleId: row.settleId } });
}

function openList(row) {
  router.push({ name: 'settlement-list', params: { settleId: row.settleId } });
}
</script>
