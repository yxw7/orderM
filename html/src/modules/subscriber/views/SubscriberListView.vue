<template>
  <div class="page-panel page-panel--scroll">
    <SearchPanel
      v-model="search"
      :fields="subscriberSearchFields"
      :cols="3"
      label-width="5rem"
      @search="filterRows"
      @reset="resetSearch"
    />
    <div class="flex items-center gap-2 mb-4 shrink-0">
      <button type="button" class="inline-flex items-center gap-1 px-4 py-1.5 bg-sky-600 text-white text-sm rounded hover:bg-sky-700" @click="openAdd">
        <span class="text-base leading-none">+</span>
        新增订户
      </button>
    </div>
    <DataTable
      :selectable="false"
      :columns="SUBSCRIBER_COLUMNS"
      :rows="pagedRows"
      :total="sortedRows.length"
      row-id-key="id"
      v-model:page="page"
      v-model:page-size="pageSize"
      :page-sizes="[10, 20, 50]"
      unit="条记录"
    >
      <template #header-created>
        <button type="button" class="inline-flex items-center gap-1 hover:text-sky-600" @click="toggleSort">
          创建日期
          <span class="inline-flex flex-col text-[10px] leading-none text-gray-400">
            <span :class="createdSort === 'asc' ? 'text-sky-600' : ''">▲</span>
            <span :class="createdSort === 'desc' ? 'text-sky-600' : ''">▼</span>
          </span>
        </button>
      </template>
      <template #cell-name="{ row }">
        <button type="button" class="text-sky-600 hover:underline" @click="openDetail(row)">{{ row.name }}</button>
      </template>
      <template #cell-types="{ row }">{{ formatMultiValueText(row.types, '、') }}</template>
      <template #cell-budgets="{ row }">
        <span class="leading-relaxed break-all">{{ formatMultiValueText(row.budgets, ';') }}</span>
      </template>
      <template #cell-status="{ row }">
        <span :class="SUBSCRIBER_STATUS_MAP[row.status]?.cls">{{ SUBSCRIBER_STATUS_MAP[row.status]?.text }}</span>
      </template>
      <template #cell-librarians="{ row }">
        <button
          v-if="canViewLibrarians(row) && hasSubscriberLibrarians(row.name, row.hasLibrarian)"
          type="button"
          class="text-sky-600 hover:underline"
          @click="openLibrarianModal(row)"
        >查看</button>
        <span v-else class="text-gray-400">查看</span>
      </template>
      <template #cell-actions="{ row }">
        <button type="button" class="text-sky-600 hover:underline mr-3" @click="openEdit(row)">编辑</button>
        <template v-if="row.status === 'active'">
          <button type="button" class="text-sky-600 hover:underline mr-3" @click="openStatusModal('disable', row)">停用</button>
          <button type="button" class="text-sky-600 hover:underline" @click="openStatusModal('delete', row)">删除</button>
        </template>
        <template v-else>
          <button type="button" class="text-sky-600 hover:underline mr-3" @click="openStatusModal('enable', row)">启用</button>
          <button type="button" class="text-sky-600 hover:underline" @click="openStatusModal('delete', row)">删除</button>
        </template>
      </template>
    </DataTable>

    <SubscriberFormModal
      :open="formOpen"
      :mode="formMode"
      :row="formRow"
      :existing-names="existingNames"
      @close="formOpen = false"
      @confirm="submitForm"
    />
    <SubscriberDetailModal :open="detailOpen" :row="detailRow" @close="detailOpen = false" />
    <SubscriberStatusModal
      :open="statusOpen"
      :action="statusAction"
      :row="statusRow"
      @close="statusOpen = false"
      @confirm="submitStatus"
    />
    <SubscriberLibrarianModal
      :open="librarianOpen"
      :names="librarianNames"
      @close="librarianOpen = false"
    />
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import SearchPanel from '@/components/common/SearchPanel.vue';
import DataTable from '@/components/common/DataTable.vue';
import SubscriberFormModal from '@/modules/subscriber/components/SubscriberFormModal.vue';
import SubscriberDetailModal from '@/modules/subscriber/components/SubscriberDetailModal.vue';
import SubscriberStatusModal from '@/modules/subscriber/components/SubscriberStatusModal.vue';
import SubscriberLibrarianModal from '@/modules/subscriber/components/SubscriberLibrarianModal.vue';
import {
  SUBSCRIBER_COLUMNS,
  SUBSCRIBER_STATUS_MAP,
  canViewLibrarians,
  enrichSubscriberRow,
  filterSubscriberRows,
  formatMultiValueText,
  getTodayString,
  sortSubscriberRows,
  subscriberRows,
  subscriberSearchFields
} from '@/modules/subscriber/data/subscriber-manage';
import { getSubscriberLibrarianNames, hasSubscriberLibrarians } from '@/modules/subscriber/stores/association';

defineOptions({ name: 'SubscriberListView' });

const allRows = ref(subscriberRows.map(r => ({ ...r })));
const filteredRows = ref([...allRows.value]);
const search = ref({});
const page = ref(1);
const pageSize = ref(50);
const createdSort = ref('desc');

const formOpen = ref(false);
const formMode = ref('add');
const formRow = ref(null);
const detailOpen = ref(false);
const detailRow = ref(null);
const statusOpen = ref(false);
const statusAction = ref('disable');
const statusRow = ref(null);
const librarianOpen = ref(false);
const librarianNames = ref([]);

const existingNames = computed(() => allRows.value.map(row => row.name));

const sortedRows = computed(() => sortSubscriberRows(filteredRows.value, createdSort.value));

const pagedRows = computed(() => {
  const start = (page.value - 1) * pageSize.value;
  return sortedRows.value.slice(start, start + pageSize.value);
});

function filterRows() {
  filteredRows.value = filterSubscriberRows(allRows.value, search.value);
  page.value = 1;
}

function resetSearch() {
  search.value = {};
  filteredRows.value = [...allRows.value];
  page.value = 1;
}

function toggleSort() {
  createdSort.value = createdSort.value === 'desc' ? 'asc' : 'desc';
}

function openAdd() {
  formMode.value = 'add';
  formRow.value = null;
  formOpen.value = true;
}

function openEdit(row) {
  formMode.value = 'edit';
  formRow.value = row;
  formOpen.value = true;
}

function openDetail(row) {
  detailRow.value = row;
  detailOpen.value = true;
}

function openLibrarianModal(row) {
  librarianNames.value = getSubscriberLibrarianNames(row.name);
  librarianOpen.value = true;
}

function openStatusModal(action, row) {
  statusAction.value = action;
  statusRow.value = row;
  statusOpen.value = true;
}

function submitForm(payload) {
  if (formMode.value === 'add') {
    const newRow = enrichSubscriberRow({
      ...payload,
      id: allRows.value.length + 1,
      status: 'active',
      created: getTodayString(),
      hasLibrarian: false
    });
    allRows.value.unshift(newRow);
  } else if (formRow.value) {
    const index = allRows.value.findIndex(row => row.id === formRow.value.id);
    if (index >= 0) {
      allRows.value[index] = enrichSubscriberRow({
        ...allRows.value[index],
        ...payload
      });
    }
  }
  filterRows();
  formOpen.value = false;
}

function submitStatus() {
  if (!statusRow.value) return;
  const index = allRows.value.findIndex(row => row.id === statusRow.value.id);
  if (index < 0) return;
  if (statusAction.value === 'disable') {
    allRows.value[index] = { ...allRows.value[index], status: 'disabled' };
  } else if (statusAction.value === 'enable') {
    allRows.value[index] = { ...allRows.value[index], status: 'active' };
  } else if (statusAction.value === 'delete') {
    allRows.value.splice(index, 1);
  }
  filterRows();
  statusOpen.value = false;
  statusRow.value = null;
}
</script>
