<template>
  <div class="page-panel page-panel--scroll">
    <nav class="flex items-center gap-2 mb-4 text-sm shrink-0">
      <a
        href="#"
        class="flex items-center gap-1 text-gray-500 hover:text-sky-600"
        @click.prevent="goBackAndCloseTab('/shortage')"
      >
        <span>&lsaquo;</span> 催缺管理
      </a>
      <span class="text-gray-400">/</span>
      <span class="text-gray-800 font-medium">催缺详情</span>
    </nav>

    <SearchPanel
      v-model="search"
      :fields="shortageDetailSearchFields"
      :cols="3"
      label-width="5rem"
      @search="filterRows"
      @reset="resetSearch"
    />

    <div class="flex items-center gap-2 mb-4 shrink-0">
      <button
        type="button"
        class="px-4 py-1.5 text-sm rounded border"
        :class="hasCheckedCancelable
          ? 'border-gray-300 text-gray-600 hover:bg-gray-50'
          : 'border-gray-200 text-gray-400 bg-gray-50 cursor-not-allowed'"
        :disabled="!hasCheckedCancelable"
        @click="openCancelModal()"
      >批量撤订</button>
      <button
        type="button"
        class="flex items-center gap-1 px-4 py-1.5 text-sm rounded bg-amber-500 text-white hover:bg-amber-600"
        @click="exportList"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        导出清单
      </button>
    </div>

    <DataTable
      v-model:selected-keys="selectedIds"
      :columns="SHORTAGE_DETAIL_COLUMNS"
      :rows="pagedRows"
      :total="filteredRows.length"
      row-id-key="id"
      unit="条"
      v-model:page="page"
      v-model:page-size="pageSize"
      :page-sizes="[10, 20, 50]"
    >
      <template #cell-orderLineNo="{ row }">
        <button
          type="button"
          class="text-sky-600 hover:underline whitespace-nowrap"
          @click="goOrderLine(row)"
        >{{ row.orderLineNo }}</button>
      </template>
      <template #cell-status="{ row }">
        <span :class="SHORTAGE_STATUS_MAP[row.status]?.cls">{{ SHORTAGE_STATUS_MAP[row.status]?.text }}</span>
      </template>
      <template #cell-remark="{ row }">
        <HoverTooltip v-if="row.remark && row.remarkText" :text="row.remarkText">
          <span class="text-sky-600 hover:underline cursor-pointer">查看</span>
        </HoverTooltip>
        <span v-else class="text-gray-300">—</span>
      </template>
      <template #cell-actions="{ row }">
        <button
          v-if="canCancelShortageLine(row)"
          type="button"
          class="text-sky-600 hover:underline"
          @click="openCancelModal(row)"
        >撤订</button>
        <span v-else class="text-gray-400">—</span>
      </template>
    </DataTable>

    <ShortageCancelModal
      :open="cancelModalOpen"
      @close="cancelModalOpen = false"
      @confirm="submitCancel"
    />
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import SearchPanel from '@/components/common/SearchPanel.vue';
import DataTable from '@/components/common/DataTable.vue';
import HoverTooltip from '@/modules/acceptance/components/HoverTooltip.vue';
import ShortageCancelModal from '@/modules/acceptance/components/ShortageCancelModal.vue';
import { useBreadcrumbBack } from '@/composables/use-breadcrumb-back';
import { useShortageStore } from '@/modules/acceptance/stores/shortage';
import { SHORTAGE_STATUS_MAP } from '@/modules/acceptance/data/shortage-manage';
import {
  SHORTAGE_DETAIL_COLUMNS,
  canCancelShortageLine,
  filterShortageDetailRows,
  getShortageDetailRows,
  shortageDetailSearchFields
} from '@/modules/acceptance/data/shortage-detail';

defineOptions({ name: 'ShortageDetailView' });

const route = useRoute();
const router = useRouter();
const shortageStore = useShortageStore();
const { goBackAndCloseTab } = useBreadcrumbBack();

const shortageId = computed(() => decodeURIComponent(route.params.shortageId || ''));
const listRow = computed(() => shortageStore.findByShortageId(shortageId.value) || null);

const search = ref({ status: '全部', resourceIdType: '' });
const detailRows = ref([]);
const filteredRows = ref([]);
const selectedIds = ref([]);
const page = ref(1);
const pageSize = ref(20);
const cancelModalOpen = ref(false);
const actionTargetIds = ref([]);

const hasCheckedCancelable = computed(() => {
  if (!selectedIds.value.length) return false;
  return detailRows.value.some(row =>
    selectedIds.value.includes(row.id) && canCancelShortageLine(row)
  );
});

const pagedRows = computed(() => {
  const start = (page.value - 1) * pageSize.value;
  return filteredRows.value.slice(start, start + pageSize.value);
});

function loadDetailRows() {
  const row = listRow.value;
  if (row) {
    detailRows.value = shortageStore.ensureDetailLines(row).map(r => ({ ...r }));
  } else {
    detailRows.value = getShortageDetailRows(shortageId.value, null).map((r, index) => ({
      ...r,
      id: index + 1
    }));
  }
  filteredRows.value = filterShortageDetailRows(detailRows.value, search.value);
  selectedIds.value = [];
  page.value = 1;
}

function filterRows() {
  filteredRows.value = filterShortageDetailRows(detailRows.value, search.value);
  page.value = 1;
}

function resetSearch() {
  search.value = { status: '全部', resourceIdType: '' };
  filteredRows.value = [...detailRows.value];
  page.value = 1;
}

function goOrderLine(row) {
  router.push({ name: 'order-line-detail', params: { lineNo: row.orderLineNo } });
}

function openCancelModal(row) {
  if (row) {
    if (!canCancelShortageLine(row)) return;
    actionTargetIds.value = [row.id];
  } else {
    const ids = selectedIds.value.filter(id => {
      const target = detailRows.value.find(r => r.id === id);
      return target && canCancelShortageLine(target);
    });
    if (!ids.length) {
      window.alert('请先勾选可撤订的明细');
      return;
    }
    actionTargetIds.value = ids;
  }
  cancelModalOpen.value = true;
}

function submitCancel(reason) {
  const shortageRow = listRow.value;
  if (!shortageRow) {
    window.alert('未找到催缺单');
    cancelModalOpen.value = false;
    return;
  }
  const orderLineNos = detailRows.value
    .filter(row => actionTargetIds.value.includes(row.id))
    .map(row => row.orderLineNo);
  const result = shortageStore.cancelShortage(shortageRow.id, reason, { orderLineNos });
  cancelModalOpen.value = false;
  actionTargetIds.value = [];
  selectedIds.value = [];
  loadDetailRows();
  window.alert(result.message);
}

function exportList() {
  const count = filteredRows.value.length;
  if (!count) {
    window.alert('暂无可导出的催缺清单');
    return;
  }
  window.alert(`已导出 ${count} 条催缺清单`);
}

watch(shortageId, loadDetailRows, { immediate: true });
</script>
