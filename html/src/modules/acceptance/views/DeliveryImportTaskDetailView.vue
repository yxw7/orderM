<template>
  <div class="page-panel flex flex-col min-h-0">
    <nav class="flex items-center gap-2 mb-4 text-sm shrink-0">
      <a
        href="#"
        class="flex items-center gap-1 text-gray-500 hover:text-sky-600"
        @click.prevent="goBackAndCloseTab('/acceptance/delivery-import/tasks')"
      >
        <span>&lsaquo;</span> 导入任务
      </a>
      <span class="text-gray-400">/</span>
      <span class="text-gray-800 font-medium">任务详情</span>
    </nav>

    <div v-if="!task" class="bg-white rounded border border-gray-200 p-8 text-center text-gray-500">
      任务不存在或已删除
      <div class="mt-4">
        <a href="#" class="text-sky-600 hover:underline" @click.prevent="goBackAndCloseTab('/acceptance/delivery-import/tasks')">返回任务列表</a>
      </div>
    </div>

    <template v-else>
      <div class="bg-white rounded border border-gray-200 px-5 py-3 mb-4 shrink-0 text-sm text-gray-700">
        <div class="flex flex-wrap gap-x-8 gap-y-2">
          <span>验收单号：<span class="text-gray-900">{{ ctx.id || '—' }}</span></span>
          <span>验收单名称：<span class="text-gray-900">{{ ctx.name || '—' }}</span></span>
          <span>资源类型：<span class="text-gray-900">{{ ctx.type || '—' }}</span></span>
          <span>语种：<span class="text-gray-900">{{ ctx.lang || '—' }}</span></span>
          <span>发货单号：<span class="text-gray-900">{{ ctx.shipNo || '—' }}</span></span>
          <span>供应商：<span class="text-gray-900">{{ ctx.supplier || '—' }}</span></span>
        </div>
        <div class="flex flex-wrap gap-x-8 gap-y-2 mt-2 pt-2 border-t border-gray-100">
          <span>任务编号：<span class="text-gray-900">{{ task.taskId }}</span></span>
          <span>文件名：<span class="text-gray-900">{{ task.fileName }}</span></span>
          <span>上传时间：<span class="text-gray-900">{{ formatTaskDateTime(task.createdAt) }}</span></span>
          <span>状态：<span :class="TASK_STATUS_MAP[task.status]?.cls">{{ TASK_STATUS_MAP[task.status]?.text }}</span></span>
          <span>更新时间：<span class="text-gray-900">{{ formatTaskDateTime(taskLastUpdatedAt) }}</span></span>
        </div>
      </div>

      <!-- 匹配进度 -->
      <div v-if="showProgressPanel" class="bg-white rounded border border-gray-200 p-8 flex flex-col items-center shrink-0">
        <template v-if="task.status === 'not_started'">
          <p class="text-sm text-gray-600 mb-2">任务未开始匹配，请稍候或从任务列表稍后查看</p>
          <div class="w-10 h-10 border-[3px] border-gray-200 border-t-sky-600 rounded-full animate-spin mt-4" />
        </template>
        <template v-else-if="task.status === 'matching'">
          <p class="text-sm text-gray-600 mb-4">后台正在匹配订单行，您可以关闭页面稍后从任务列表继续查看</p>
          <div class="w-full max-w-md">
            <div class="flex justify-between text-sm text-gray-600 mb-2">
              <span>{{ formatTaskProgressText(task) }}</span>
              <span>{{ task.progress ?? 0 }}%</span>
            </div>
            <div class="h-2 bg-gray-200 rounded overflow-hidden">
              <div class="h-full bg-sky-600 transition-all duration-300" :style="{ width: `${task.progress ?? 0}%` }" />
            </div>
          </div>
          <div class="w-10 h-10 border-[3px] border-gray-200 border-t-sky-600 rounded-full animate-spin mt-6" />
        </template>
        <template v-else-if="task.status === 'match_failed'">
          <p class="text-red-500 text-sm mb-2">匹配失败</p>
          <p class="text-sm text-gray-600">{{ task.failReason || '未知错误' }}</p>
        </template>
      </div>

      <!-- 预览核对：上下主从 -->
      <template v-if="showPreviewPanel">
        <div class="bg-white rounded border border-gray-200 flex flex-col flex-1 min-h-0">
          <div class="flex gap-8 border-b border-gray-200 shrink-0 px-4">
            <button
              v-for="tab in PREVIEW_TAB_OPTIONS"
              :key="tab.key"
              type="button"
              class="order-tab px-1 py-2.5 text-sm text-gray-600 border-b-2 border-transparent hover:text-sky-600 transition-colors"
              :class="{ active: activeTab === tab.key }"
              @click="switchTab(tab.key)"
            >
              {{ tab.label }}
            </button>
          </div>
          <div v-if="canEdit" class="flex items-center px-4 py-3 shrink-0 border-b border-gray-100">
            <button
              type="button"
              class="px-5 py-1.5 text-sm rounded"
              :class="canSubmitCurrentTab ? 'bg-sky-600 text-white hover:bg-sky-700' : 'bg-gray-200 text-gray-400 cursor-not-allowed'"
              :disabled="!canSubmitCurrentTab"
              @click="submitCurrentTab"
            >
              提交
            </button>
          </div>

          <!-- 上区 60%：发货主行 -->
          <div class="flex flex-col min-h-0 shrink-0 border-b border-gray-200" style="flex: 6">
            <div class="overflow-auto flex-1 min-h-0">
              <table class="w-full text-xs">
                <thead class="bg-gray-50 border-b sticky top-0">
                  <tr>
                    <th v-if="canEdit" class="px-2 py-2 w-8">
                      <input
                        type="checkbox"
                        :checked="allPageSelected"
                        :indeterminate="somePageSelected && !allPageSelected"
                        class="rounded text-sky-600"
                        @change="toggleSelectAllPage"
                      >
                    </th>
                    <th class="px-2 py-2 text-left text-gray-600">序号</th>
                    <th class="px-2 py-2 text-left text-gray-600">状态</th>
                    <th v-for="col in previewDisplayColumns" :key="col.value" class="px-2 py-2 text-left text-gray-600 whitespace-nowrap">{{ col.label }}</th>
                    <th v-if="showReceiveQtyColumn" class="px-2 py-2 text-left text-gray-600 whitespace-nowrap">发货套数</th>
                    <th class="px-2 py-2 text-left text-gray-600 whitespace-nowrap">子行数</th>
                    <th class="px-2 py-2 text-left text-gray-600">操作</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(row, rowIdx) in pagedPreviewLines"
                    :key="row.lineId"
                    class="border-b cursor-pointer transition-colors"
                    :class="selectedLineId === row.lineId ? 'bg-sky-50 border-l-4 border-l-sky-600' : 'hover:bg-gray-50/80 border-l-4 border-l-transparent'"
                    @click="selectShipmentRow(row)"
                  >
                    <td v-if="canEdit" class="px-2 py-2" @click.stop>
                      <input v-model="row.selected" type="checkbox" class="rounded text-sky-600">
                    </td>
                    <td class="px-2 py-2">{{ tabRowStartIndex + rowIdx + 1 }}</td>
                    <td class="px-2 py-2 whitespace-nowrap">
                      <span :class="getShipmentRowStatusDisplay(row).cls">{{ getShipmentRowStatusDisplay(row).text }}</span>
                    </td>
                    <td v-for="col in previewDisplayColumns" :key="col.value + row.lineId" class="px-2 py-2 whitespace-nowrap">
                      {{ row.fieldValues[col.value] ?? '—' }}
                    </td>
                    <td v-if="showReceiveQtyColumn" class="px-2 py-2 whitespace-nowrap">
                      {{ row.fieldValues.receiveQty ?? '—' }}
                    </td>
                    <td class="px-2 py-2 whitespace-nowrap text-gray-600">
                      {{ (row.children || []).length }} 馆址
                    </td>
                    <td class="px-2 py-2 whitespace-nowrap" @click.stop>
                      <button
                        v-if="canEditRow(row)"
                        type="button"
                        class="text-red-500 hover:underline"
                        @click="removeShipmentLine(row.lineId)"
                      >
                        删除
                      </button>
                      <span v-else class="text-gray-400">—</span>
                    </td>
                  </tr>
                  <tr v-if="!pagedPreviewLines.length">
                    <td :colspan="upperTableColspan" class="px-4 py-8 text-center text-gray-400">暂无数据</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <PaginationBar
              :total="filteredLines.length"
              :checked-count="shipmentSelectedCount"
              unit="条"
              v-model:page="previewPage"
              v-model:page-size="previewPageSize"
              :page-sizes="[10, 20, 50]"
            />
          </div>

          <!-- 下区 40%：订单行列表 -->
          <div ref="lowerPanelRef" class="flex flex-col min-h-0 border-t border-gray-200" style="flex: 4">
            <div v-if="canEditChildArea" class="flex items-center gap-3 px-4 py-2 border-b border-gray-100 shrink-0">
              <button type="button" class="px-4 py-1.5 text-sm border border-sky-600 text-sky-600 rounded hover:bg-sky-50" @click="openAddOrderLineModal">
                添加订单行
              </button>
              <button
                type="button"
                class="px-4 py-1.5 text-sm border rounded"
                :class="canDeleteSelectedOrderLines ? 'border-red-300 text-red-500 hover:bg-red-50' : 'border-gray-200 text-gray-400 cursor-not-allowed'"
                :disabled="!canDeleteSelectedOrderLines"
                @click="deleteSelectedOrderLines"
              >
                删除订单行
              </button>
            </div>
            <div class="overflow-auto flex-1 min-h-0">
              <div v-if="!selectedRow" class="h-full flex items-center justify-center text-sm text-gray-400 py-8">
                请从上方选择一条发货记录
              </div>
              <div v-else-if="!(selectedRow.children || []).length" class="h-full flex items-center justify-center text-sm text-gray-400 py-8">
                暂无订单行，请点击「添加订单行」
              </div>
              <table v-else class="w-full text-xs min-w-max">
                <thead class="bg-gray-50 border-b sticky top-0">
                  <tr>
                    <th v-if="canEditChildArea" class="px-2 py-2 w-8" />
                    <th v-for="col in PICK_ORDER_LINE_COLUMNS" :key="col.key" class="px-2 py-2 text-left text-gray-600 font-medium whitespace-nowrap">
                      {{ col.label }}
                    </th>
                    <th class="px-2 py-2 text-left text-gray-600 font-medium whitespace-nowrap">收货套数</th>
                    <th class="px-2 py-2 text-left text-gray-600 font-medium whitespace-nowrap">换货套数</th>
                    <th class="px-2 py-2 text-left text-gray-600 font-medium whitespace-nowrap">退货套数</th>
                    <th class="px-2 py-2 text-left text-gray-600 font-medium whitespace-nowrap">操作</th>
                  </tr>
                </thead>
                <tbody class="divide-y">
                  <tr
                    v-for="(child, ci) in selectedRow.children"
                    :key="child.lineNo + ci"
                    class="hover:bg-gray-50/80"
                    :class="{ 'bg-red-50': child.submitConflict }"
                  >
                    <td v-if="canEditChildArea" class="px-2 py-2">
                      <input v-model="child.deleteSelected" type="checkbox" class="rounded text-sky-600">
                    </td>
                    <td v-for="col in PICK_ORDER_LINE_COLUMNS" :key="col.key + ci" class="px-2 py-2 text-gray-700 whitespace-nowrap">
                      {{ getChildDisplayValue(child, col.key) }}
                    </td>
                    <td class="px-2 py-2 whitespace-nowrap text-gray-700">{{ formatChildQty(child.receive) }}</td>
                    <td class="px-2 py-2 whitespace-nowrap text-gray-700">{{ formatChildQty(child.exchange) }}</td>
                    <td class="px-2 py-2 whitespace-nowrap text-gray-700">{{ formatChildQty(child.ret) }}</td>
                    <td class="px-2 py-2 whitespace-nowrap">
                      <div v-if="canEditChildArea" class="flex items-center gap-2">
                        <button type="button" class="text-emerald-600 hover:underline" @click="openChildReceive(child)">收货</button>
                        <button type="button" class="text-sky-600 hover:underline" @click="openChildExchange(child)">换货</button>
                        <button type="button" class="text-orange-500 hover:underline" @click="openChildReturn(child)">退货</button>
                      </div>
                      <span v-else class="text-gray-400">—</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </template>
    </template>

    <DeliveryImportPickOrderLineModal
      :open="pickModalOpen"
      :rows="pickOrderLinePool"
      :resource-type="ctx.type || '纸质书'"
      @close="pickModalOpen = false"
      @confirm="onPickOrderLines"
    />

    <PaperReceiveModal
      :open="paperReceiveOpen"
      :row="dispositionModalRow"
      :acceptance-lang="ctx.lang || '中文'"
      :needs-barcode-allocation="needsBarcodeAllocationEnabled"
      :show-preview="false"
      @close="paperReceiveOpen = false"
      @preview="onBarcodePreview"
      @confirm="onChildReceiveConfirm"
    />
    <AvReceiveModal
      :open="avReceiveOpen"
      :row="dispositionModalRow"
      :acceptance-lang="ctx.lang || '中文'"
      @close="avReceiveOpen = false"
      @confirm="onChildReceiveConfirm"
    />
    <ReceiveExchangeModal
      :open="exchangeOpen"
      :row="dispositionModalRow"
      :resource-type="ctx.type || '纸质书'"
      @close="exchangeOpen = false"
      @confirm="onChildExchangeConfirm"
    />
    <ReceiveReturnModal
      :open="returnOpen"
      :row="dispositionModalRow"
      :resource-type="ctx.type || '纸质书'"
      @close="returnOpen = false"
      @confirm="onChildReturnConfirm"
    />
    <BarcodePreviewModal
      :open="barcodePreviewOpen"
      :preview="barcodePreview"
      @close="barcodePreviewOpen = false"
      @accept="barcodePreviewOpen = false"
      @reject="barcodePreviewOpen = false"
    />
  </div>
</template>

<script setup>
import { computed, nextTick, onUnmounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import PaginationBar from '@/components/common/PaginationBar.vue';
import { useBreadcrumbBack } from '@/composables/use-breadcrumb-back';
import DeliveryImportPickOrderLineModal from '@/modules/acceptance/components/DeliveryImportPickOrderLineModal.vue';
import PaperReceiveModal from '@/modules/acceptance/components/PaperReceiveModal.vue';
import AvReceiveModal from '@/modules/acceptance/components/AvReceiveModal.vue';
import ReceiveExchangeModal from '@/modules/acceptance/components/ReceiveExchangeModal.vue';
import ReceiveReturnModal from '@/modules/acceptance/components/ReceiveReturnModal.vue';
import BarcodePreviewModal from '@/modules/acceptance/components/BarcodePreviewModal.vue';
import {
  PICK_ORDER_LINE_COLUMNS,
  getPreviewMappedColumns,
  getPreviewDisplayColumns,
  getPreviewShowReceiveQtyColumn,
  buildChildrenFromPickedLines,
  buildReceiveModalRowFromImportChild,
  buildDispositionModalRowFromImportChild,
  formatPickOrderLineDisplayRow,
  getMatchableOrderLines,
  getMatchStatusDisplay
} from '@/modules/acceptance/data/delivery-import';
import { calcBarcodePreview, needsBarcodeAllocation } from '@/modules/acceptance/data/receive-by-item';
import { createAcceptanceRows } from '@/modules/acceptance/data/acceptance-list';
import {
  TASK_STATUS_MAP,
  PREVIEW_TAB_OPTIONS,
  getDeliveryImportTask,
  saveTaskDraft,
  submitTaskTab,
  formatTaskDateTime,
  formatTaskProgressText,
  getTaskLastUpdatedAt,
  canEditTaskPreview,
  startMatchJob
} from '@/modules/acceptance/data/delivery-import-tasks';

defineOptions({ name: 'DeliveryImportTaskDetailView' });

const route = useRoute();
const { goBackAndCloseTab } = useBreadcrumbBack();

const task = ref(null);
/** @type {import('vue').Ref<object[]>} */
const previewLines = ref([]);
const activeTab = ref('all');
const previewPage = ref(1);
const previewPageSize = ref(50);
const pickModalOpen = ref(false);
const pickingLineId = ref(null);
/** @type {import('vue').Ref<string|null>} */
const selectedLineId = ref(null);
/** @type {import('vue').Ref<object|null>} */
const dispositionTargetChild = ref(null);
/** @type {import('vue').Ref<object|null>} */
const dispositionModalRow = ref(null);
const paperReceiveOpen = ref(false);
const avReceiveOpen = ref(false);
const exchangeOpen = ref(false);
const returnOpen = ref(false);
const barcodePreviewOpen = ref(false);
const barcodePreview = ref({ allocated: '', unallocated: '无' });
/** @type {import('vue').Ref<HTMLElement|null>} */
const lowerPanelRef = ref(null);
/** @type {ReturnType<typeof setTimeout>|null} */
let autoSaveTimer = null;
/** @type {ReturnType<typeof setInterval>|null} */
let pollTimer = null;

const taskId = computed(() => String(route.params.id || ''));

const ctx = computed(() => task.value?.acceptanceSnapshot || {});

const needsBarcodeAllocationEnabled = computed(() => {
  const snapshot = ctx.value;
  if (needsBarcodeAllocation(snapshot)) return true;
  const row = createAcceptanceRows().find(item => item.acceptanceId === snapshot.id);
  return needsBarcodeAllocation(row || snapshot);
});

/** 任务最近一次修改或提交时间 */
const taskLastUpdatedAt = computed(() => getTaskLastUpdatedAt(task.value));

const showProgressPanel = computed(() =>
  task.value && ['not_started', 'matching', 'match_failed'].includes(task.value.status)
);

const showPreviewPanel = computed(() =>
  task.value && ['pending_review', 'reviewing', 'completed', 'cancelled'].includes(task.value.status)
);

const canEdit = computed(() => canEditTaskPreview(task.value));

/** 当前 Tab 下可提交的已勾选未提交行数 */
const submitEligibleCount = computed(() =>
  previewLines.value.filter(l =>
    l.selected && l.submitStatus === 'pending' && lineMatchesTab(l, activeTab.value)
  ).length
);

/** 提交按钮是否可点击 */
const canSubmitCurrentTab = computed(() => canEdit.value && submitEligibleCount.value > 0);

const upperTableColspan = computed(() => {
  let n = 4;
  if (canEdit.value) n += 1;
  n += previewDisplayColumns.value.length;
  if (showReceiveQtyColumn.value) n += 1;
  return n;
});

/** 任务创建时保存的列映射与文件列顺序 */
const taskMappingConfig = computed(() => task.value?.mappingConfig || {});
const taskFileColumns = computed(() => task.value?.fileColumns || []);

const previewMappedColumns = computed(() =>
  getPreviewMappedColumns(taskMappingConfig.value, ctx.value, taskFileColumns.value)
);

const previewDisplayColumns = computed(() =>
  getPreviewDisplayColumns(taskMappingConfig.value, ctx.value, taskFileColumns.value)
);

const showReceiveQtyColumn = computed(() =>
  getPreviewShowReceiveQtyColumn(taskMappingConfig.value, ctx.value, taskFileColumns.value)
);

const pickOrderLinePool = computed(() => getMatchableOrderLines(ctx.value));

const selectedRow = computed(() =>
  previewLines.value.find(l => l.lineId === selectedLineId.value) || null
);

const canEditChildArea = computed(() =>
  selectedRow.value ? canEditRow(selectedRow.value) : false
);

/** 下区是否已勾选至少一条订单行 */
const canDeleteSelectedOrderLines = computed(() => {
  if (!canEditChildArea.value || !selectedRow.value) return false;
  return (selectedRow.value.children || []).some(c => c.deleteSelected);
});

/**
 * 预览行是否可编辑（已提交行只读）
 * @param {object} row
 * @returns {boolean}
 */
function canEditRow(row) {
  return canEdit.value && activeTab.value !== 'submitted' && row.submitStatus !== 'submitted';
}

/**
 * @param {object} line
 * @param {string} tab
 */
function lineMatchesTab(line, tab) {
  if (tab === 'all') return true;
  if (tab === 'submitted') return line.submitStatus === 'submitted';
  if (line.submitStatus === 'submitted') return false;
  return line.status === tab;
}

const filteredLines = computed(() =>
  previewLines.value.filter(line => lineMatchesTab(line, activeTab.value))
);


const tabRowStartIndex = computed(() => (previewPage.value - 1) * previewPageSize.value);

const pagedPreviewLines = computed(() => {
  const start = tabRowStartIndex.value;
  return filteredLines.value.slice(start, start + previewPageSize.value);
});

const allPageSelected = computed(() =>
  pagedPreviewLines.value.length > 0 && pagedPreviewLines.value.every(r => r.selected)
);

const somePageSelected = computed(() =>
  pagedPreviewLines.value.some(r => r.selected)
);

/** 上区已勾选条数（当前 Tab 过滤范围内） */
const shipmentSelectedCount = computed(() =>
  filteredLines.value.filter(l => l.selected).length
);

/**
 * 发货主行状态展示（已提交优先）
 * @param {object} row
 * @returns {{ text: string, cls: string }}
 */
function getShipmentRowStatusDisplay(row) {
  if (row.submitStatus === 'submitted') {
    return { text: '已提交', cls: 'text-gray-600' };
  }
  return getMatchStatusDisplay(row.status);
}

watch(taskId, () => {
  loadTask();
}, { immediate: true });

watch(
  () => task.value?.status,
  status => {
    if (status === 'not_started' || status === 'matching') startPolling();
    else stopPolling();
    if (['pending_review', 'reviewing', 'completed', 'cancelled'].includes(status)) {
      syncPreviewFromTask();
    }
  }
);

watch([activeTab, previewPage, previewPageSize], () => {
  selectFirstRowOnPage();
});

watch(pagedPreviewLines, () => {
  selectFirstRowOnPage();
});

onUnmounted(() => {
  stopPolling();
  if (autoSaveTimer) clearTimeout(autoSaveTimer);
});

/**
 * 加载任务详情
 */
function loadTask() {
  const data = getDeliveryImportTask(taskId.value);
  task.value = data;
  if (!data) return;

  if (data.status === 'not_started' || data.status === 'matching') {
    startMatchJob(data.taskId);
    startPolling();
  }

  if (['pending_review', 'reviewing', 'completed', 'cancelled'].includes(data.status)) {
    syncPreviewFromTask();
  }
}

/**
 * 从订单行池补全子行 orderLineData
 * @param {object} child
 * @returns {object}
 */
function enrichChildData(child) {
  const next = {
    ...child,
    deleteSelected: child.deleteSelected ?? false
  };
  if (next.orderLineData) return next;
  const found = pickOrderLinePool.value.find(l => l.orderLine === child.lineNo);
  if (found) next.orderLineData = { ...found };
  return next;
}

/**
 * 从任务同步预览行到本地状态
 */
function syncPreviewFromTask() {
  previewLines.value = (task.value?.lines || []).map(l => ({
    ...l,
    children: (l.children || []).map(c => enrichChildData(c))
  }));
  selectFirstRowOnPage();
}

/**
 * @param {object} child
 * @param {string} key
 * @returns {string|number}
 */
function getChildDisplayValue(child, key) {
  const orderLine = child.orderLineData || {
    orderLine: child.lineNo,
    location: child.location,
    ...(child.fieldValues || {})
  };
  const display = formatPickOrderLineDisplayRow(orderLine);
  return display[key] ?? '—';
}

/**
 * @param {number|string|null|undefined} qty
 * @returns {string|number}
 */
function formatChildQty(qty) {
  if (qty === null || qty === undefined || qty === '') return '—';
  return qty;
}

/**
 * @param {object} child
 */
function openChildReceive(child) {
  if (!canEditChildArea.value || !selectedRow.value) return;
  dispositionTargetChild.value = child;
  dispositionModalRow.value = buildReceiveModalRowFromImportChild(
    selectedRow.value.fieldValues || {},
    child,
    ctx.value
  );
  if (ctx.value.type === '纸质书') paperReceiveOpen.value = true;
  else if (ctx.value.type === '视听资料') avReceiveOpen.value = true;
}

/**
 * @param {object} child
 */
function openChildExchange(child) {
  if (!canEditChildArea.value) return;
  dispositionTargetChild.value = child;
  dispositionModalRow.value = buildDispositionModalRowFromImportChild(child);
  exchangeOpen.value = true;
}

/**
 * @param {object} child
 */
function openChildReturn(child) {
  if (!canEditChildArea.value) return;
  dispositionTargetChild.value = child;
  dispositionModalRow.value = buildDispositionModalRowFromImportChild(child);
  returnOpen.value = true;
}

/**
 * @param {object} form
 */
function onBarcodePreview(form) {
  barcodePreview.value = calcBarcodePreview(
    form.barcodeStart,
    Number(form.receiveSets),
    Number(form.volumesPerSet)
  );
  barcodePreviewOpen.value = true;
}

/**
 * @param {object} form
 */
function onChildReceiveConfirm(form) {
  const child = dispositionTargetChild.value;
  if (!child) return;
  child.receive = Number(form.receiveSets) || 0;
  paperReceiveOpen.value = false;
  avReceiveOpen.value = false;
  clearSubmitConflicts();
  saveDraftQuiet();
}

/**
 * @param {object} form
 */
function onChildExchangeConfirm(form) {
  const child = dispositionTargetChild.value;
  if (!child) return;
  child.exchange = Number(form.exchangeQty) || 0;
  child.exchangeReason = form.exchangeReason || '';
  exchangeOpen.value = false;
  clearSubmitConflicts();
  saveDraftQuiet();
}

/**
 * @param {object} form
 */
function onChildReturnConfirm(form) {
  const child = dispositionTargetChild.value;
  if (!child) return;
  child.ret = Number(form.returnQty) || 0;
  child.returnReason = form.returnReason || '';
  returnOpen.value = false;
  clearSubmitConflicts();
  saveDraftQuiet();
}

/**
 * 当前页默认选中第一条发货行
 */
function selectFirstRowOnPage() {
  const ids = pagedPreviewLines.value.map(r => r.lineId);
  if (selectedLineId.value && ids.includes(selectedLineId.value)) return;
  selectedLineId.value = pagedPreviewLines.value[0]?.lineId ?? null;
}

/**
 * @param {object} row
 */
function selectShipmentRow(row) {
  selectedLineId.value = row.lineId;
  nextTick(() => {
    lowerPanelRef.value?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });
}

/**
 * 静默保存草稿（行内修改后自动触发）
 */
function saveDraftQuiet() {
  if (!canEdit.value) return;
  const saved = saveTaskDraft(taskId.value, previewLines.value);
  if (saved) task.value = saved;
}

/**
 * 防抖自动保存
 */
function scheduleAutoSave() {
  if (!canEdit.value) return;
  clearSubmitConflicts();
  if (autoSaveTimer) clearTimeout(autoSaveTimer);
  autoSaveTimer = setTimeout(() => {
    autoSaveTimer = null;
    saveDraftQuiet();
  }, 400);
}

/**
 * 提交前立即落盘待保存的修改
 */
function flushAutoSave() {
  if (autoSaveTimer) {
    clearTimeout(autoSaveTimer);
    autoSaveTimer = null;
  }
  saveDraftQuiet();
}

function startPolling() {
  stopPolling();
  pollTimer = setInterval(() => {
    const prevStatus = task.value?.status;
    const fresh = getDeliveryImportTask(taskId.value);
    if (!fresh) return;
    task.value = fresh;
    if (
      (prevStatus === 'matching' || prevStatus === 'not_started')
      && fresh.status === 'pending_review'
    ) {
      syncPreviewFromTask();
    }
  }, 3000);
}

function stopPolling() {
  if (pollTimer) {
    clearInterval(pollTimer);
    pollTimer = null;
  }
}

/**
 * @param {string} tabKey
 */
function switchTab(tabKey) {
  activeTab.value = tabKey;
  previewPage.value = 1;
}

/**
 * 打开添加订单行弹窗
 */
function openAddOrderLineModal() {
  if (!selectedRow.value || !canEditRow(selectedRow.value)) return;
  pickingLineId.value = selectedRow.value.lineId;
  pickModalOpen.value = true;
}

/**
 * 删除发货主行
 * @param {string} lineId
 */
function removeShipmentLine(lineId) {
  previewLines.value = previewLines.value.filter(l => l.lineId !== lineId);
  if (selectedLineId.value === lineId) {
    selectedLineId.value = null;
    selectFirstRowOnPage();
  }
  saveDraftQuiet();
}

/**
 * 批量删除下区已勾选订单行
 */
function deleteSelectedOrderLines() {
  if (!canDeleteSelectedOrderLines.value) return;
  const row = selectedRow.value;
  if (!row || !canEditRow(row)) return;

  const toDelete = (row.children || []).filter(c => c.deleteSelected).map(c => c.lineNo);
  if (!toDelete.length) {
    window.alert('请至少选择一条订单行');
    return;
  }
  const deleteSet = new Set(toDelete);
  row.children = (row.children || []).filter(c => !deleteSet.has(c.lineNo));
  clearSubmitConflicts();
  saveDraftQuiet();
}

/**
 * 追加订单行并重新分配套数
 * @param {object[]} lines
 */
function onPickOrderLines(lines) {
  const lineId = pickingLineId.value;
  const row = previewLines.value.find(l => l.lineId === lineId);
  if (!row) return;

  const shipQty = Number(row.fieldValues?.receiveQty) || 0;
  const mappedKeys = previewMappedColumns.value.map(c => c.value);

  /** @type {object[]} */
  const existingOrderLines = (row.children || [])
    .map(ch => ch.orderLineData || pickOrderLinePool.value.find(l => l.orderLine === ch.lineNo))
    .filter(Boolean);

  const existingNos = new Set(existingOrderLines.map(l => l.orderLine));
  const toAdd = lines.filter(l => !existingNos.has(l.orderLine));
  if (!toAdd.length) return;

  const merged = [...existingOrderLines, ...toAdd];
  row.children = buildChildrenFromPickedLines(merged, shipQty, mappedKeys);
  clearSubmitConflicts();
  saveDraftQuiet();
}

/**
 * @param {Event} event
 */
function toggleSelectAllPage(event) {
  const checked = event.target.checked;
  pagedPreviewLines.value.forEach(row => {
    row.selected = checked;
  });
}

/**
 * 清除提交冲突标记
 */
function clearSubmitConflicts() {
  previewLines.value.forEach(row => {
    (row.children || []).forEach(child => {
      child.submitConflict = false;
    });
  });
}

/**
 * 根据提交冲突结果标红子行并定位到首条冲突发货行
 * @param {object[]} conflicts
 */
function applySubmitConflicts(conflicts) {
  clearSubmitConflicts();
  conflicts.forEach(c => {
    const row = previewLines.value.find(l => l.lineId === c.shipmentLineId);
    if (!row) return;
    const child = (row.children || []).find(ch => ch.lineNo === c.orderLineNo);
    if (child) child.submitConflict = true;
  });
  if (conflicts[0]?.shipmentLineId) {
    selectedLineId.value = conflicts[0].shipmentLineId;
  }
}

/**
 * 按当前 Tab 分批提交
 */
function submitCurrentTab() {
  if (!canSubmitCurrentTab.value) return;
  flushAutoSave();

  const selectedIds = previewLines.value
    .filter(l => l.selected && l.submitStatus === 'pending' && lineMatchesTab(l, activeTab.value))
    .map(l => l.lineId);

  const result = submitTaskTab(taskId.value, activeTab.value, selectedIds);
  if (!result.ok) {
    if (result.conflicts?.length) {
      applySubmitConflicts(result.conflicts);
    }
    window.alert(result.errors?.join('\n') || '提交失败');
    return;
  }

  clearSubmitConflicts();
  task.value = result.task;
  syncPreviewFromTask();
  window.alert('提交成功');
}
</script>

<style scoped>
@keyframes spin {
  to { transform: rotate(360deg); }
}
.animate-spin {
  animation: spin 0.8s linear infinite;
}
</style>
