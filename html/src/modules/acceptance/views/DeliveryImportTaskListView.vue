<template>
  <div class="page-panel page-panel--scroll">
    <div class="bg-white rounded border border-gray-200 p-4 mb-4 shrink-0">
      <form @submit.prevent="applyFilter">
        <div class="grid grid-cols-4 gap-4 items-center">
          <div class="flex items-center gap-2">
            <label class="text-sm text-gray-600 whitespace-nowrap w-20 text-right">验收单号</label>
            <input v-model="search.acceptanceId" type="text" placeholder="请输入" class="flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm">
          </div>
          <div class="flex items-center gap-2">
            <label class="text-sm text-gray-600 whitespace-nowrap w-16 text-right">状态</label>
            <select v-model="search.status" class="flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm">
              <option value="">全部</option>
              <option v-for="opt in statusOptions" :key="opt.value" :value="opt.value">{{ opt.label }}</option>
            </select>
          </div>
          <div class="flex items-center gap-2">
            <label class="text-sm text-gray-600 whitespace-nowrap w-16 text-right">文件名</label>
            <input v-model="search.fileName" type="text" placeholder="关键词" class="flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm">
          </div>
          <div class="flex items-center gap-2 justify-end">
            <button type="submit" class="px-5 py-1.5 bg-sky-600 text-white text-sm rounded hover:bg-sky-700">搜索</button>
            <button type="button" class="px-5 py-1.5 border border-gray-300 text-gray-600 text-sm rounded hover:bg-gray-50" @click="resetFilter">重置</button>
          </div>
        </div>
      </form>
    </div>

    <DataTable
      :selectable="false"
      :columns="TASK_LIST_COLUMNS"
      :rows="pagedRows"
      :total="filteredRows.length"
      row-id-key="taskId"
      unit="条任务"
      v-model:page="page"
      v-model:page-size="pageSize"
    >
      <template #cell-status="{ row }">
        <HoverTooltip
          v-if="row.status === 'match_failed'"
          :text="row.failReason || '未知错误'"
        >
          <span :class="[TASK_STATUS_MAP[row.status]?.cls, 'cursor-help']">{{ TASK_STATUS_MAP[row.status]?.text }}</span>
        </HoverTooltip>
        <span v-else :class="TASK_STATUS_MAP[row.status]?.cls">{{ TASK_STATUS_MAP[row.status]?.text }}</span>
      </template>
      <template #cell-progress="{ row }">
        <span v-if="row.status === 'matching'" class="text-sm text-gray-600">{{ formatTaskProgressText(row) }}</span>
        <span v-else class="text-gray-400">—</span>
      </template>
      <template #cell-createdAt="{ row }">
        {{ formatTaskDateTime(row.createdAt) }}
      </template>
      <template #cell-actions="{ row }">
        <template v-if="row.status === 'not_started' || row.status === 'matching'">
          <button type="button" class="text-red-500 hover:underline" @click="cancelTask(row)">取消</button>
        </template>
        <template v-else-if="row.status === 'pending_review' || row.status === 'reviewing'">
          <button type="button" class="text-sky-600 hover:underline mr-3" @click="enterTask(row)">核对</button>
          <button type="button" class="text-red-500 hover:underline" @click="cancelTask(row)">取消</button>
        </template>
        <template v-else-if="row.status === 'match_failed'">
          <button type="button" class="text-sky-600 hover:underline" @click="reimportTask(row)">重新导入</button>
        </template>
        <span v-else class="text-gray-400">—</span>
      </template>
    </DataTable>

    <DeliveryImportCreateModal
      :open="createModalOpen"
      :ctx="reimportCtx"
      @close="createModalOpen = false"
      @created="onReimportCreated"
    />
  </div>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import DataTable from '@/components/common/DataTable.vue';
import DeliveryImportCreateModal from '@/modules/acceptance/components/DeliveryImportCreateModal.vue';
import HoverTooltip from '@/modules/acceptance/components/HoverTooltip.vue';
import { useAcceptanceStore } from '@/modules/acceptance/stores/acceptance';
import {
  TASK_STATUS_MAP,
  listDeliveryImportTasks,
  cancelDeliveryImportTask,
  formatTaskProgressText,
  formatTaskDateTime
} from '@/modules/acceptance/data/delivery-import-tasks';

defineOptions({ name: 'DeliveryImportTaskListView' });

const router = useRouter();
const acceptanceStore = useAcceptanceStore();

const TASK_LIST_COLUMNS = [
  { key: 'taskId', label: '任务编号', minWidth: 'min-w-[140px]' },
  { key: 'acceptanceId', label: '验收单号' },
  { key: 'acceptanceName', label: '验收单名称', minWidth: 'min-w-[160px]' },
  { key: 'fileName', label: '文件名', minWidth: 'min-w-[160px]' },
  { key: 'createdAt', label: '上传时间', minWidth: 'min-w-[150px]' },
  { key: 'totalRows', label: '行数' },
  { key: 'status', label: '状态' },
  { key: 'progress', label: '进度', minWidth: 'min-w-[130px]' },
  { key: 'actions', label: '操作', sticky: true }
];

const statusOptions = Object.entries(TASK_STATUS_MAP).map(([value, meta]) => ({
  value,
  label: meta.text
}));

const search = ref({ acceptanceId: '', status: '', fileName: '' });
const appliedSearch = ref({ acceptanceId: '', status: '', fileName: '' });
const allRows = ref([]);
const page = ref(1);
const pageSize = ref(10);
const createModalOpen = ref(false);
/** @type {import('vue').Ref<object>} */
const reimportCtx = ref({});
/** @type {ReturnType<typeof setInterval>|null} */
let refreshTimer = null;

const filteredRows = computed(() =>
  listDeliveryImportTasks(appliedSearch.value)
);

const pagedRows = computed(() => {
  const start = (page.value - 1) * pageSize.value;
  return filteredRows.value.slice(start, start + pageSize.value);
});

onMounted(() => {
  refreshList();
  refreshTimer = setInterval(refreshList, 3000);
});

onUnmounted(() => {
  if (refreshTimer) clearInterval(refreshTimer);
});

function refreshList() {
  allRows.value = listDeliveryImportTasks(appliedSearch.value);
}

function applyFilter() {
  appliedSearch.value = { ...search.value };
  page.value = 1;
  refreshList();
}

function resetFilter() {
  search.value = { acceptanceId: '', status: '', fileName: '' };
  appliedSearch.value = { ...search.value };
  page.value = 1;
  refreshList();
}

/**
 * @param {object} row
 */
function enterTask(row) {
  router.push(`/acceptance/delivery-import/tasks/${encodeURIComponent(row.taskId)}`);
}

/**
 * @param {object} row
 */
function cancelTask(row) {
  if (!window.confirm('确定取消该导入任务？取消后本次匹配结果与未提交草稿将不再生效。')) return;
  cancelDeliveryImportTask(row.taskId);
  refreshList();
  window.alert('任务已取消');
}

/**
 * 匹配失败后重新导入：打开创建向导
 * @param {object} row
 */
function reimportTask(row) {
  const ctx = row.acceptanceSnapshot || {
    id: row.acceptanceId,
    name: row.acceptanceName
  };
  acceptanceStore.setCurrent(ctx);
  reimportCtx.value = ctx;
  createModalOpen.value = true;
}

function onReimportCreated() {
  createModalOpen.value = false;
  refreshList();
}
</script>
