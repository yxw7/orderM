<template>
  <div class="page-panel page-panel--scroll">
    <SearchPanel
      v-model="search"
      :fields="currencySearchFields"
      :cols="3"
      label-width="5rem"
      @search="filterRows"
      @reset="resetSearch"
    />
    <div class="flex items-center gap-2 mb-4 shrink-0">
      <button type="button" class="px-4 py-1.5 bg-sky-600 text-white text-sm rounded hover:bg-sky-700" @click="openAdd">
        新增货币信息
      </button>
    </div>
    <DataTable
      :selectable="false"
      :columns="CURRENCY_COLUMNS"
      :rows="pagedRows"
      :total="filteredRows.length"
      row-id-key="id"
      v-model:page="page"
      v-model:page-size="pageSize"
      :page-sizes="[10, 20, 50]"
      unit="条记录"
    >
      <template #cell-status="{ row }">
        <span :class="CURRENCY_STATUS_MAP[row.status]?.cls">{{ CURRENCY_STATUS_MAP[row.status]?.text }}</span>
      </template>
      <template #cell-actions="{ row }">
        <template v-if="row.status === 'active'">
          <button type="button" class="text-sky-600 hover:underline mr-3" @click="openEdit(row)">编辑</button>
          <button type="button" class="text-sky-600 hover:underline mr-3" @click="openStatusModal('disable', row)">停用</button>
          <button type="button" class="text-sky-600 hover:underline" @click="openRateHistory(row)">汇率更新记录</button>
        </template>
        <template v-else>
          <button type="button" class="text-sky-600 hover:underline mr-3" @click="openEdit(row)">启用</button>
          <button type="button" class="text-sky-600 hover:underline mr-3" @click="openRateHistory(row)">汇率更新记录</button>
          <button type="button" class="text-sky-600 hover:underline" @click="openStatusModal('delete', row)">删除</button>
        </template>
      </template>
    </DataTable>

    <CurrencyFormModal
      :open="formOpen"
      :mode="formMode"
      :row="formRow"
      :existing-codes="existingCodes"
      @close="formOpen = false"
      @confirm="submitForm"
    />
    <CurrencyStatusModal
      :open="statusOpen"
      :action="statusAction"
      :row="statusRow"
      @close="statusOpen = false"
      @confirm="submitStatus"
    />
    <CurrencyRateHistoryModal
      :open="historyOpen"
      :currency-code="historyCode"
      :currency-name="historyName"
      @close="historyOpen = false"
    />
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import SearchPanel from '@/components/common/SearchPanel.vue';
import DataTable from '@/components/common/DataTable.vue';
import CurrencyFormModal from '@/modules/currency/components/CurrencyFormModal.vue';
import CurrencyStatusModal from '@/modules/currency/components/CurrencyStatusModal.vue';
import CurrencyRateHistoryModal from '@/modules/currency/components/CurrencyRateHistoryModal.vue';
import {
  CURRENCY_COLUMNS,
  CURRENCY_STATUS_MAP,
  appendRateHistory,
  currencyRows,
  currencySearchFields,
  filterCurrencyRows
} from '@/modules/currency/data/currency-manage';

defineOptions({ name: 'CurrencyInfoView' });

const allRows = ref(currencyRows.map(r => ({ ...r })));
const filteredRows = ref([...allRows.value]);
const search = ref({});
const page = ref(1);
const pageSize = ref(50);

const formOpen = ref(false);
const formMode = ref('add');
const formRow = ref(null);
const statusOpen = ref(false);
const statusAction = ref('disable');
const statusRow = ref(null);
const historyOpen = ref(false);
const historyCode = ref('');
const historyName = ref('');

const existingCodes = computed(() => allRows.value.map(row => row.code));

const pagedRows = computed(() => {
  const start = (page.value - 1) * pageSize.value;
  return filteredRows.value.slice(start, start + pageSize.value);
});

function filterRows() {
  filteredRows.value = filterCurrencyRows(allRows.value, search.value);
  page.value = 1;
}

function resetSearch() {
  search.value = {};
  filteredRows.value = [...allRows.value];
  page.value = 1;
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

function openStatusModal(action, row) {
  statusAction.value = action;
  statusRow.value = row;
  statusOpen.value = true;
}

function openRateHistory(row) {
  historyCode.value = row.code;
  historyName.value = row.name;
  historyOpen.value = true;
}

function submitForm(payload) {
  if (formMode.value === 'add') {
    allRows.value.push({
      id: allRows.value.length + 1,
      name: payload.name,
      code: payload.code,
      rate: payload.rate,
      status: payload.status
    });
    appendRateHistory(payload.code, payload.rate);
  } else if (formRow.value) {
    const index = allRows.value.findIndex(row => row.id === formRow.value.id);
    if (index >= 0) {
      const prevRate = allRows.value[index].rate;
      allRows.value[index] = {
        ...allRows.value[index],
        name: payload.name,
        rate: payload.rate,
        status: payload.status
      };
      if (payload.rate !== prevRate) {
        appendRateHistory(allRows.value[index].code, payload.rate);
      }
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
