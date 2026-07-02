<template>
  <div class="page-panel">
    <SearchPanel
      v-model="search"
      :fields="marcMappingSearchFields"
      :cols="3"
      label-width="7rem"
      @search="filterRows"
      @reset="resetSearch"
    />
    <DataTable
      :selectable="false"
      :columns="MARC_MAPPING_COLUMNS"
      :rows="pagedRows"
      :total="filteredRows.length"
      row-id-key="id"
      v-model:page="page"
      v-model:page-size="pageSize"
      :page-sizes="[10, 20, 50]"
      unit="条记录"
      empty-text="未检索到结果"
    >
      <template #cell-carrier="{ row }">
        <span>{{ row.carrier || '' }}</span>
      </template>
    </DataTable>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import SearchPanel from '@/components/common/SearchPanel.vue';
import DataTable from '@/components/common/DataTable.vue';
import {
  MARC_MAPPING_COLUMNS,
  filterMarcMappingRows,
  marcMappingRows,
  marcMappingSearchFields
} from '@/modules/marc-mapping/data/marc-mapping-manage';

defineOptions({ name: 'MarcMappingView' });

const allRows = ref(marcMappingRows.map(row => ({ ...row })));
const filteredRows = ref([...allRows.value]);
const search = ref({});
const page = ref(1);
const pageSize = ref(50);

const pagedRows = computed(() => {
  const start = (page.value - 1) * pageSize.value;
  return filteredRows.value.slice(start, start + pageSize.value);
});

function filterRows() {
  filteredRows.value = filterMarcMappingRows(allRows.value, search.value);
  page.value = 1;
}

function resetSearch() {
  search.value = {};
  filteredRows.value = [...allRows.value];
  page.value = 1;
}
</script>
