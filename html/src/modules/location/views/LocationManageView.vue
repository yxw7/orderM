<template>
  <div class="page-panel">
    <div class="flex gap-8 border-b border-gray-200 mb-4 shrink-0 bg-white px-1">
      <button
        v-for="tab in tabs"
        :key="tab.key"
        type="button"
        class="order-tab px-1 py-2.5 text-sm text-gray-600 border-b-2 border-transparent hover:text-sky-600 transition-colors"
        :class="{ active: activeTab === tab.key }"
        @click="switchTab(tab.key)"
      >
        {{ tab.label }}
      </button>
    </div>

    <SearchPanel
      v-model="search"
      :fields="currentSearchFields"
      :cols="3"
      label-width="5rem"
      @search="filterRows"
      @reset="resetSearch"
    />

    <div class="flex items-center gap-2 mb-4 shrink-0">
      <button type="button" class="px-4 py-1.5 bg-sky-600 text-white text-sm rounded hover:bg-sky-700" @click="openAdd">
        {{ addButtonLabel }}
      </button>
      <button type="button" class="px-4 py-1.5 bg-sky-600 text-white text-sm rounded hover:bg-sky-700" @click="importOpen = true">
        批量导入
      </button>
    </div>

    <DataTable
      v-model:selected-keys="selectedKeys"
      :selectable="true"
      :columns="currentColumns"
      :rows="pagedRows"
      :total="filteredRows.length"
      row-id-key="id"
      v-model:page="page"
      v-model:page-size="pageSize"
      :page-sizes="[5, 10, 20]"
      unit="个项目"
      empty-text="未检索到结果"
    >
      <template #cell-code="{ row, value }">
        <span class="whitespace-nowrap">{{ value || '-' }}</span>
      </template>
      <template #cell-status="{ row }">
        <span :class="LOCATION_STATUS_MAP[row.status]?.cls">{{ LOCATION_STATUS_MAP[row.status]?.text }}</span>
      </template>
      <template #cell-remark="{ row }">
        <button
          v-if="row.remark"
          type="button"
          class="text-sky-600 hover:underline"
          @click="openRemark(row.remark)"
        >
          查看
        </button>
        <span v-else class="text-gray-400">-</span>
      </template>
      <template #cell-actions="{ row }">
        <button type="button" class="text-sky-600 hover:underline mr-2" @click="openEdit(row)">编辑</button>
        <button type="button" class="text-sky-600 hover:underline mr-2" @click="toggleStatus(row)">
          {{ row.status === 'active' ? '停用' : '启用' }}
        </button>
        <button type="button" class="text-sky-600 hover:underline" @click="deleteRow(row)">删除</button>
      </template>
    </DataTable>

    <LocationSiteFormModal
      :open="siteFormOpen"
      :mode="formMode"
      :row="formRow"
      :site-rows="siteRows"
      @close="siteFormOpen = false"
      @confirm="submitSiteForm"
      @invalid="showToast(false)"
    />
    <LocationBranchFormModal
      :open="branchFormOpen"
      :mode="formMode"
      :row="formRow"
      :site-rows="siteRows"
      :branch-rows="branchRows"
      @close="branchFormOpen = false"
      @confirm="submitBranchForm"
      @invalid="showToast(false)"
    />
    <LocationCollectionFormModal
      :open="collectionFormOpen"
      :mode="formMode"
      :row="formRow"
      :site-rows="siteRows"
      :branch-rows="branchRows"
      :collection-rows="collectionRows"
      @close="collectionFormOpen = false"
      @confirm="submitCollectionForm"
      @invalid="showToast(false)"
    />
    <LocationImportModal
      :open="importOpen"
      :type="activeTab"
      :site-rows="siteRows"
      :branch-rows="branchRows"
      :collection-rows="collectionRows"
      @close="importOpen = false"
      @confirm="submitImport"
      @invalid="msg => showToast(false, msg)"
    />
    <LocationToast v-model:show="toastShow" :success="toastSuccess" :message="toastMessage" />

    <div v-if="remarkOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4" @click.self="remarkOpen = false">
      <div class="bg-white rounded-lg shadow-xl w-full max-w-md" @click.stop>
        <div class="flex items-center justify-between px-6 py-4 border-b">
          <h2 class="text-base font-medium text-gray-800">备注</h2>
          <button type="button" class="text-gray-400 text-xl leading-none hover:text-gray-600" @click="remarkOpen = false">&times;</button>
        </div>
        <div class="px-6 py-5 text-sm text-gray-700 whitespace-pre-wrap">{{ remarkText }}</div>
        <div class="flex justify-end px-6 py-4 border-t bg-gray-50 rounded-b-lg">
          <button type="button" class="px-5 py-1.5 text-sm rounded bg-sky-600 text-white hover:bg-sky-700" @click="remarkOpen = false">确定</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { storeToRefs } from 'pinia';
import SearchPanel from '@/components/common/SearchPanel.vue';
import DataTable from '@/components/common/DataTable.vue';
import LocationSiteFormModal from '@/modules/location/components/LocationSiteFormModal.vue';
import LocationBranchFormModal from '@/modules/location/components/LocationBranchFormModal.vue';
import LocationCollectionFormModal from '@/modules/location/components/LocationCollectionFormModal.vue';
import LocationImportModal from '@/modules/location/components/LocationImportModal.vue';
import LocationToast from '@/modules/location/components/LocationToast.vue';
import {
  applyBranchImport,
  applyCollectionImport,
  applySiteImport,
  BRANCH_COLUMNS,
  branchSearchFields,
  COLLECTION_COLUMNS,
  collectionSearchFields,
  filterBranchRows,
  filterCollectionRows,
  filterSiteRows,
  getBranchById,
  getCollectionById,
  getSiteById,
  LOCATION_STATUS_MAP,
  SITE_COLUMNS,
  siteSearchFields
} from '@/modules/location/data/location-manage';
import { useLocationStore } from '@/modules/location/stores/location';

defineOptions({ name: 'LocationManageView' });

const locationStore = useLocationStore();
locationStore.ensureInitialized();
const { siteRows, branchRows, collectionRows } = storeToRefs(locationStore);

const tabs = [
  { key: 'site', label: '馆址列表' },
  { key: 'branch', label: '分馆列表' },
  { key: 'collection', label: '馆藏地列表' }
];

const addLabelMap = {
  site: '新增馆址',
  branch: '新增分馆',
  collection: '新增馆藏地'
};

const columnMap = {
  site: SITE_COLUMNS,
  branch: BRANCH_COLUMNS,
  collection: COLLECTION_COLUMNS
};

const searchFieldMap = {
  site: siteSearchFields,
  branch: branchSearchFields,
  collection: collectionSearchFields
};

const activeTab = ref('site');
const search = ref({});
const filteredRows = ref([]);
const page = ref(1);
const pageSize = ref(5);
const selectedKeys = ref([]);

const formMode = ref('add');
const formRow = ref(null);
const siteFormOpen = ref(false);
const branchFormOpen = ref(false);
const collectionFormOpen = ref(false);
const importOpen = ref(false);

const remarkOpen = ref(false);
const remarkText = ref('');

const toastShow = ref(false);
const toastSuccess = ref(true);
const toastMessage = ref('');

const currentSearchFields = computed(() => searchFieldMap[activeTab.value]);
const currentColumns = computed(() => columnMap[activeTab.value]);
const addButtonLabel = computed(() => addLabelMap[activeTab.value]);

const pagedRows = computed(() => {
  const start = (page.value - 1) * pageSize.value;
  return filteredRows.value.slice(start, start + pageSize.value).map((row, index) => ({
    ...row,
    seq: start + index + 1
  }));
});

function showToast(success, message = '') {
  toastSuccess.value = success;
  toastMessage.value = message;
  toastShow.value = true;
}

function refreshFilteredRows() {
  if (activeTab.value === 'site') {
    filteredRows.value = filterSiteRows(siteRows.value, search.value);
  } else if (activeTab.value === 'branch') {
    filteredRows.value = filterBranchRows(branchRows.value, siteRows.value, search.value);
  } else {
    filteredRows.value = filterCollectionRows(collectionRows.value, branchRows.value, siteRows.value, search.value);
  }
}

function switchTab(key) {
  activeTab.value = key;
  search.value = {};
  selectedKeys.value = [];
  page.value = 1;
  refreshFilteredRows();
}

function filterRows() {
  refreshFilteredRows();
  page.value = 1;
}

function resetSearch() {
  search.value = {};
  refreshFilteredRows();
  page.value = 1;
}

function openAdd() {
  formMode.value = 'add';
  formRow.value = null;
  if (activeTab.value === 'site') siteFormOpen.value = true;
  else if (activeTab.value === 'branch') branchFormOpen.value = true;
  else collectionFormOpen.value = true;
}

function openEdit(row) {
  formMode.value = 'edit';
  if (activeTab.value === 'site') {
    formRow.value = getSiteById(siteRows.value, row.id);
    siteFormOpen.value = true;
  } else if (activeTab.value === 'branch') {
    formRow.value = getBranchById(branchRows.value, row.id);
    branchFormOpen.value = true;
  } else {
    formRow.value = getCollectionById(collectionRows.value, row.id);
    collectionFormOpen.value = true;
  }
}

function openRemark(text) {
  remarkText.value = text || '';
  remarkOpen.value = true;
}

function toggleStatus(row) {
  const target = activeTab.value === 'site'
    ? getSiteById(siteRows.value, row.id)
    : activeTab.value === 'branch'
      ? getBranchById(branchRows.value, row.id)
      : getCollectionById(collectionRows.value, row.id);
  if (!target) return;
  target.status = target.status === 'active' ? 'inactive' : 'active';
  refreshFilteredRows();
  locationStore.persist();
  showToast(true);
}

function deleteRow(row) {
  if (activeTab.value === 'site') {
    siteRows.value = siteRows.value.filter(item => item.id !== row.id);
  } else if (activeTab.value === 'branch') {
    branchRows.value = branchRows.value.filter(item => item.id !== row.id);
  } else {
    collectionRows.value = collectionRows.value.filter(item => item.id !== row.id);
  }
  selectedKeys.value = selectedKeys.value.filter(id => id !== row.id);
  refreshFilteredRows();
  locationStore.persist();
  showToast(true);
}

function submitSiteForm(payload) {
  if (formMode.value === 'edit' && payload.siteId) {
    const row = getSiteById(siteRows.value, payload.siteId);
    if (row) Object.assign(row, payload);
  } else {
    siteRows.value.unshift({
      id: `site-${Date.now()}`,
      code: payload.code,
      name: payload.name,
      status: payload.status,
      remark: payload.remark || ''
    });
  }
  siteFormOpen.value = false;
  refreshFilteredRows();
  locationStore.persist();
  showToast(true);
}

function submitBranchForm(payload) {
  if (formMode.value === 'edit' && payload.branchId) {
    const row = getBranchById(branchRows.value, payload.branchId);
    if (row) Object.assign(row, payload);
  } else {
    branchRows.value.unshift({
      id: `branch-${Date.now()}`,
      siteId: payload.siteId,
      code: payload.code,
      name: payload.name,
      status: payload.status,
      remark: payload.remark || ''
    });
  }
  branchFormOpen.value = false;
  refreshFilteredRows();
  locationStore.persist();
  showToast(true);
}

function submitCollectionForm(payload) {
  if (formMode.value === 'edit' && payload.collectionId) {
    const row = getCollectionById(collectionRows.value, payload.collectionId);
    if (row) Object.assign(row, { branchId: payload.branchId, code: payload.code, name: payload.name, status: payload.status, remark: payload.remark || '' });
  } else {
    collectionRows.value.unshift({
      id: `col-${Date.now()}`,
      branchId: payload.branchId,
      code: payload.code,
      name: payload.name,
      status: payload.status,
      remark: payload.remark || ''
    });
  }
  collectionFormOpen.value = false;
  refreshFilteredRows();
  locationStore.persist();
  showToast(true);
}

function submitImport(successRows) {
  if (activeTab.value === 'site') {
    applySiteImport(siteRows.value, successRows);
  } else if (activeTab.value === 'branch') {
    applyBranchImport(branchRows.value, successRows);
  } else {
    applyCollectionImport(collectionRows.value, successRows);
  }
  importOpen.value = false;
  refreshFilteredRows();
  locationStore.persist();
  showToast(true, '导入成功');
}

refreshFilteredRows();
</script>
