<template>
  <div class="page-panel page-panel--scroll">
    <SearchPanel
      v-model="search"
      :fields="searchFields"
      :cols="4"
      label-width="5rem"
      @search="filterRows"
      @reset="resetSearch"
    />

    <div class="flex items-center gap-2 mb-4 shrink-0">
      <button
        type="button"
        class="px-4 py-1.5 text-sm rounded border"
        :class="hasChecked ? 'border-gray-300 text-gray-600 hover:bg-gray-50' : 'border-gray-200 text-gray-400 bg-gray-50 cursor-not-allowed'"
        :disabled="!hasChecked"
        @click="openCancelModal()"
      >撤订</button>
      <button
        type="button"
        class="px-4 py-1.5 text-sm rounded border"
        :class="hasChecked ? 'border-gray-300 text-gray-600 hover:bg-gray-50' : 'border-gray-200 text-gray-400 bg-gray-50 cursor-not-allowed'"
        :disabled="!hasChecked"
        @click="openSupplierModal()"
      >更换供应商</button>
      <DropdownButton label="批量导出" variant="amber" :items="exportItems" @select="onExport" />
    </div>

    <DataTable
      v-model:selected-keys="selectedIds"
      :columns="SHORTAGE_COLUMNS"
      :rows="pagedRows"
      :total="filteredRows.length"
      row-id-key="id"
      unit="条"
      v-model:page="page"
      v-model:page-size="pageSize"
      :page-sizes="[10, 20, 50]"
    >
      <template #cell-shortageId="{ row }">
        <button type="button" class="text-sky-600 hover:underline whitespace-nowrap" @click="openDetail(row)">{{ row.shortageId }}</button>
      </template>
      <template #cell-orderId="{ row }">
        <button type="button" class="text-sky-600 hover:underline whitespace-nowrap" @click="goOrder(row)">{{ row.orderId }}</button>
      </template>
      <template #cell-status="{ row }">
        <span :class="SHORTAGE_STATUS_MAP[row.status]?.cls">{{ SHORTAGE_STATUS_MAP[row.status]?.text }}</span>
      </template>
      <template #cell-remark="{ row }">
        <HoverTooltip v-if="row.remark && row.remarkText" :text="row.remarkText">
          <span class="text-sky-600 hover:underline cursor-pointer">查看</span>
        </HoverTooltip>
      </template>
      <template #cell-actions="{ row }">
        <template v-if="hasShortageActions(row)">
          <button type="button" class="text-sky-600 hover:underline mr-3" @click="openCancelModal(row)">撤订</button>
          <button type="button" class="text-sky-600 hover:underline" @click="openSupplierModal(row)">更换供应商</button>
        </template>
        <span v-else class="text-gray-400">—</span>
      </template>
    </DataTable>

    <ShortageCancelModal
      :open="cancelModalOpen"
      @close="cancelModalOpen = false"
      @confirm="submitCancel"
    />
    <ShortageChangeSupplierModal
      :open="supplierModalOpen"
      @close="supplierModalOpen = false"
      @confirm="submitSupplier"
    />
    <ShortageDetailModal
      :open="detailOpen"
      :row="detailRow"
      @close="detailOpen = false"
    />
  </div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useShortageStore } from '@/modules/acceptance/stores/shortage';
import SearchPanel from '@/components/common/SearchPanel.vue';
import DataTable from '@/components/common/DataTable.vue';
import DropdownButton from '@/components/common/DropdownButton.vue';
import HoverTooltip from '@/modules/acceptance/components/HoverTooltip.vue';
import ShortageCancelModal from '@/modules/acceptance/components/ShortageCancelModal.vue';
import ShortageChangeSupplierModal from '@/modules/acceptance/components/ShortageChangeSupplierModal.vue';
import ShortageDetailModal from '@/modules/acceptance/components/ShortageDetailModal.vue';
import { useSiteSelectOptions } from '@/composables/use-site-options';
import {
  SHORTAGE_COLUMNS,
  SHORTAGE_STATUS_MAP,
  filterShortageRows,
  hasShortageActions,
  shortageSearchFields
} from '@/modules/acceptance/data/shortage-manage';

defineOptions({ name: 'ShortageManageView' });

const router = useRouter();
const route = useRoute();
const shortageStore = useShortageStore();
const { withSiteSearchFields } = useSiteSelectOptions();
const searchFields = withSiteSearchFields(shortageSearchFields);

const allRows = computed(() => shortageStore.rows);
const filteredRows = ref([...allRows.value]);
const search = ref({});
const selectedIds = ref([]);
const page = ref(1);
const pageSize = ref(20);
const cancelModalOpen = ref(false);
const supplierModalOpen = ref(false);
const detailOpen = ref(false);
const detailRow = ref(null);
const actionTargetIds = ref([]);

const exportItems = [{ label: '导出配置' }, { label: '导出清单' }];

const hasChecked = computed(() => selectedIds.value.length > 0);

const pagedRows = computed(() => {
  const start = (page.value - 1) * pageSize.value;
  return filteredRows.value.slice(start, start + pageSize.value);
});

watch(allRows, rows => {
  filteredRows.value = filterShortageRows(rows, search.value);
}, { deep: true });

function filterRows() {
  filteredRows.value = filterShortageRows(allRows.value, search.value);
  page.value = 1;
}

function resetSearch() {
  search.value = {};
  filteredRows.value = [...allRows.value];
  page.value = 1;
}

function openGeneratedDetailFromQuery() {
  const shortageId = route.query.shortageId;
  if (!shortageId) return;
  const row = shortageStore.findByShortageId(String(shortageId));
  if (row) openDetail(row);
}

onMounted(() => {
  filterRows();
  openGeneratedDetailFromQuery();
});

watch(() => route.query.shortageId, () => {
  openGeneratedDetailFromQuery();
});

function resolveTargetIds(row) {
  if (row) return [row.id];
  if (!selectedIds.value.length) {
    window.alert('请先勾选催缺数据');
    return null;
  }
  return [...selectedIds.value];
}

function openCancelModal(row) {
  const ids = resolveTargetIds(row);
  if (!ids) return;
  actionTargetIds.value = ids;
  cancelModalOpen.value = true;
}

function openSupplierModal(row) {
  const ids = resolveTargetIds(row);
  if (!ids) return;
  actionTargetIds.value = ids;
  supplierModalOpen.value = true;
}

function submitCancel(reason) {
  shortageStore.rows.forEach(row => {
    if (actionTargetIds.value.includes(row.id) && hasShortageActions(row)) {
      row.status = 'done';
      row.actions = false;
      row.remark = true;
      row.remarkText = `撤订原因：${reason}`;
    }
  });
  cancelModalOpen.value = false;
  actionTargetIds.value = [];
  selectedIds.value = [];
  filterRows();
  window.alert('撤订成功');
}

function submitSupplier() {
  supplierModalOpen.value = false;
  actionTargetIds.value = [];
  window.alert('生成新订单成功');
}

function openDetail(row) {
  detailRow.value = row;
  detailOpen.value = true;
}

function goOrder(row) {
  router.push({ name: 'orders', query: { tab: 'order-line', orderId: row.orderId } });
}

function onExport(item) {
  const count = filteredRows.value.length;
  if (item.label === '导出清单' && !count) {
    window.alert('暂无可导出的催缺清单');
    return;
  }
  window.alert(item.label === '导出配置' ? '导出配置已保存' : `已导出 ${count} 条催缺清单`);
}
</script>
