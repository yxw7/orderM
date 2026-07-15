<template>
  <div class="page-panel page-panel--scroll">
    <nav class="flex items-center gap-2 mb-4 text-sm shrink-0">
      <a
        href="#"
        class="flex items-center gap-1 text-gray-500 hover:text-sky-600"
        @click.prevent="goBackAndCloseTab('/settled')"
      >
        <span>&lsaquo;</span> 已结算
      </a>
      <span class="text-gray-400">/</span>
      <span class="text-gray-800">结算清单</span>
      <span class="text-gray-800 font-medium">{{ settleId }}</span>
    </nav>

    <SearchPanel
      v-model="search"
      :fields="listSearchFields"
      :cols="4"
      label-width="4rem"
      @search="filterRows"
      @reset="resetSearch"
    />

    <div class="mb-4 shrink-0">
      <DropdownButton label="导出结算清单" variant="amber" :items="exportItems" @select="onExport" />
    </div>

    <DataTable
      :selectable="false"
      :columns="SETTLEMENT_LIST_COLUMNS"
      :rows="pagedRows"
      :total="filteredRows.length"
      row-id-key="no"
      v-model:page="page"
      v-model:page-size="pageSize"
    />
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import SearchPanel from '@/components/common/SearchPanel.vue';
import DataTable from '@/components/common/DataTable.vue';
import DropdownButton from '@/components/common/DropdownButton.vue';
import { useBreadcrumbBack } from '@/composables/use-breadcrumb-back';
import {
  SETTLEMENT_LIST_COLUMNS,
  filterSettlementListRows,
  getSettlementListRows
} from '@/modules/settlement/data/settled-list';

defineOptions({ name: 'SettlementListView' });

const route = useRoute();
const { goBackAndCloseTab } = useBreadcrumbBack();
const settleId = computed(() => route.params.settleId || '');

const allRows = ref([]);
const filteredRows = ref([]);
const search = ref({});
const page = ref(1);
const pageSize = ref(10);

const exportItems = [{ label: '导出配置' }, { label: '导出清单' }];
const listSearchFields = [
  { key: 'orderLineNo', label: '订单行号' },
  { key: 'resourceId', label: '资源标识' },
  { key: 'title', label: '正题名' }
];

const pagedRows = computed(() => {
  const start = (page.value - 1) * pageSize.value;
  return filteredRows.value.slice(start, start + pageSize.value);
});

function loadRows() {
  if (!settleId.value) return;
  allRows.value = getSettlementListRows(settleId.value);
  filteredRows.value = [...allRows.value];
  search.value = {};
  page.value = 1;
}

watch(settleId, loadRows, { immediate: true });

function filterRows() {
  filteredRows.value = filterSettlementListRows(allRows.value, search.value);
  page.value = 1;
}

function resetSearch() {
  search.value = {};
  filteredRows.value = [...allRows.value];
  page.value = 1;
}

function onExport(item) {
  window.alert(`${item.label}功能为原型演示`);
}
</script>
