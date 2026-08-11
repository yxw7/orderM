<template>
  <Teleport to="body">
    <div class="fixed inset-0 z-[70]" :class="{ 'pointer-events-none': !open }">
      <div
        class="absolute inset-0 bg-slate-900/40 transition-opacity duration-300"
        :class="open ? 'opacity-100' : 'opacity-0'"
        @click="$emit('close')"
      />
      <section
        class="dedup-result-panel absolute top-0 inset-x-0 bg-white flex flex-col transition-transform duration-300 ease-out shadow-[0_8px_24px_rgba(15,23,42,0.12)] overflow-hidden"
        :class="[
          open ? 'translate-y-0' : '-translate-y-full',
          panelHeightClass
        ]"
        role="dialog"
        aria-modal="true"
      >
        <div class="flex items-center justify-between px-5 py-4 border-b shrink-0">
          <h2 class="text-base font-medium text-gray-800">查重结果</h2>
          <button type="button" class="text-gray-400 hover:text-gray-600 text-xl leading-none" @click="$emit('close')">&times;</button>
        </div>
        <div class="px-5 py-3 border-b bg-gray-50 shrink-0 text-sm text-gray-600">
          <div class="flex flex-wrap items-center gap-x-6 gap-y-1">
            <span class="whitespace-nowrap">
              <span class="text-gray-500">订单行号：</span>{{ displayLine?.orderLineNo || '—' }}
            </span>
            <span class="min-w-0 truncate" :title="fieldLabels || '—'">
              <span class="text-gray-500">查重字段：</span>{{ fieldLabels || '—' }}
            </span>
            <span class="whitespace-nowrap">
              <span class="text-gray-500">重复记录数：</span>馆藏 {{ holdingCount }} · 订单 {{ orderCount }}
            </span>
          </div>
        </div>
        <div class="flex flex-1 flex-col min-h-0 overflow-hidden">
          <div class="flex gap-4 border-b px-5 shrink-0 bg-white">
            <button
              v-for="tab in resultTabs"
              :key="tab.key"
              type="button"
              class="px-1 py-2 text-sm border-b-2 -mb-px"
              :class="resultTab === tab.key ? 'text-sky-600 border-sky-600' : 'text-gray-600 border-transparent'"
              @click="switchTab(tab.key)"
            >
              {{ tab.label }}
            </button>
          </div>
          <div
            ref="panelBodyRef"
            class="dedup-result-panel__body relative flex-1 min-h-0 overflow-hidden"
          >
            <!-- 书目 -->
            <div
              v-show="resultTab === 'bib'"
              ref="bibPanelRef"
              class="dedup-result-panel__tab absolute inset-0 overflow-y-auto overflow-x-hidden px-5 py-4 bg-white"
            >
              <template v-if="holdingResults.length">
                <div class="overflow-x-auto w-full max-w-full">
                  <table class="text-sm border border-gray-200 min-w-full w-max">
                    <thead class="bg-gray-50 border-b sticky top-0 z-10">
                      <tr>
                        <th class="px-2 py-2 w-10 shrink-0" aria-label="选择" />
                        <th class="px-3 py-2 text-left text-gray-600 whitespace-nowrap">单件数量</th>
                        <th
                          v-for="field in holdingBibCardFields"
                          :key="field.key"
                          class="px-3 py-2 text-left text-gray-600 whitespace-nowrap"
                        >
                          {{ field.label }}
                        </th>
                        <th class="px-3 py-2 text-left text-gray-600 whitespace-nowrap min-w-[160px]">操作</th>
                      </tr>
                    </thead>
                    <tbody class="divide-y">
                      <tr
                        v-for="(item, index) in pagedHoldingResults"
                        :key="item.bibRecordNo || index"
                        class="hover:bg-gray-50"
                      >
                        <td class="px-2 py-2 align-middle">
                          <input
                            type="radio"
                            name="dedup-holding-bib"
                            class="text-sky-600"
                            :checked="isBibSelected(item)"
                            @change="selectBib(item)"
                          >
                        </td>
                        <td class="px-3 py-2 align-middle whitespace-nowrap">
                          <span
                            class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium"
                            :class="getBibCopyCount(item) > 0 ? 'bg-sky-50 text-sky-600' : 'bg-gray-100 text-gray-500'"
                          >
                            {{ getBibCopyCount(item) }}本
                          </span>
                        </td>
                        <td
                          v-for="field in holdingBibCardFields"
                          :key="field.key"
                          class="px-3 py-2 align-middle max-w-[200px] truncate whitespace-nowrap"
                          :title="getHoldingBibFieldDisplayValue(item, field.key)"
                        >
                          {{ getHoldingBibFieldDisplayValue(item, field.key) }}
                        </td>
                        <td class="px-3 py-2 align-middle whitespace-nowrap">
                          <button
                            v-if="isBibAssociated(item)"
                            type="button"
                            class="text-sky-600 hover:underline"
                            @click="disassociateBib"
                          >
                            取消关联
                          </button>
                          <button
                            v-else
                            type="button"
                            class="text-sky-600 hover:underline"
                            @click="associateBib(item)"
                          >
                            关联
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </template>
              <p v-else class="text-gray-400 text-sm">暂无查重结果</p>
            </div>

            <!-- MARC -->
            <div
              v-show="resultTab === 'marc'"
              ref="marcSplitRef"
              class="dedup-result-panel__tab absolute inset-0 flex min-h-0 bg-white px-4 py-3 sm:px-5 sm:py-4"
            >
              <aside
                class="flex flex-col min-h-0 border border-gray-200 overflow-hidden bg-white min-w-0"
                :style="{ flex: `0 0 ${marcLeftPercent}%` }"
              >
                <div class="shrink-0 px-3 py-2 bg-gray-50 border-b border-gray-200 text-sm font-medium text-gray-700">
                  订单行信息
                </div>
                <template v-if="orderLineDetailFields.length">
                  <div class="shrink-0 bg-gray-50 border-b border-gray-200">
                    <table class="w-full text-sm table-fixed">
                      <colgroup>
                        <col class="w-28">
                        <col>
                      </colgroup>
                      <thead>
                        <tr>
                          <th class="px-3 py-2 text-left text-gray-600 font-medium whitespace-nowrap">字段名</th>
                          <th class="px-3 py-2 text-left text-gray-600 font-medium">字段内容</th>
                        </tr>
                      </thead>
                    </table>
                  </div>
                  <div ref="marcLeftPanelRef" class="flex-1 min-h-0 overflow-y-auto bg-white">
                    <table class="w-full text-sm table-fixed">
                      <colgroup>
                        <col class="w-28">
                        <col>
                      </colgroup>
                      <tbody>
                        <tr
                          v-for="item in orderLineDetailFields"
                          :key="item.key"
                          class="border-b border-gray-100 last:border-b-0"
                        >
                          <td class="px-3 py-2 align-top text-gray-600 whitespace-nowrap">{{ item.label }}</td>
                          <td class="px-3 py-2 align-top text-gray-800 break-all leading-relaxed">{{ formatDetailValue(item.value) }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </template>
                <p v-else class="px-3 py-4 text-gray-400 text-sm">暂无订单行信息</p>
              </aside>
              <div
                class="dedup-marc-resizer shrink-0 w-1.5 mx-1 cursor-col-resize self-stretch relative group"
                title="拖拽调整宽度"
                @mousedown.prevent="startSplitDrag"
              >
                <span class="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-gray-200 group-hover:bg-sky-400 group-active:bg-sky-500" />
              </div>
              <div class="flex-1 min-w-0 flex flex-col min-h-0 border border-gray-200 overflow-hidden bg-white">
                <div class="shrink-0 px-3 py-2 bg-gray-50 border-b border-gray-200 text-sm font-medium text-gray-700">
                  MARC信息
                </div>
                <template v-if="activeMarcFields.length">
                  <div class="shrink-0 bg-gray-50 border-b border-gray-200">
                    <table class="w-full text-sm table-fixed">
                      <colgroup>
                        <col class="w-20">
                        <col class="w-16">
                        <col>
                      </colgroup>
                      <thead>
                        <tr>
                          <th class="px-3 py-2 text-left text-gray-600 font-medium">字段名</th>
                          <th class="px-3 py-2 text-left text-gray-600 font-medium whitespace-nowrap">指示符</th>
                          <th class="px-3 py-2 text-left text-gray-600 font-medium">字段内容</th>
                        </tr>
                      </thead>
                    </table>
                  </div>
                  <div ref="marcPanelRef" class="flex-1 min-h-0 overflow-y-auto bg-white">
                    <table class="w-full text-sm table-fixed">
                      <colgroup>
                        <col class="w-20">
                        <col class="w-16">
                        <col>
                      </colgroup>
                      <tbody>
                        <tr
                          v-for="(item, index) in activeMarcFields"
                          :key="index"
                          class="border-b border-gray-100 last:border-b-0"
                        >
                          <td class="px-3 py-2 align-top">{{ item.field }}</td>
                          <td class="px-3 py-2 align-top whitespace-nowrap">{{ item.indicator || '—' }}</td>
                          <td class="px-3 py-2 align-top break-all leading-relaxed">{{ item.content }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </template>
                <p v-else class="px-3 py-4 text-gray-400 text-sm">暂无MARC信息</p>
              </div>
            </div>

            <!-- 单件：左树右表（左侧固定 20%，不可拖拽） -->
            <div
              v-show="resultTab === 'items'"
              class="dedup-result-panel__tab absolute inset-0 flex min-h-0 bg-white px-4 py-3 sm:px-5 sm:py-4 gap-2"
            >
              <aside
                class="flex flex-col min-h-0 border border-gray-200 overflow-hidden bg-white min-w-0"
                style="flex: 0 0 20%"
              >
                <div class="shrink-0 px-3 py-2 bg-gray-50 border-b border-gray-200 text-sm font-medium text-gray-700">
                  馆藏分布
                </div>
                <div ref="itemsTreePanelRef" class="flex-1 min-h-0 overflow-auto px-3 py-3">
                  <HoldingTree
                    v-if="activeHoldingBib && hasHoldingDistribution(activeHoldingBib)"
                    class="min-w-max"
                    :nodes="activeHoldingTree"
                    :selected-key="selectedLeafKey"
                    @select-leaf="onSelectLeaf"
                  />
                  <p v-else class="text-gray-400 text-sm">暂无馆藏分布</p>
                </div>
              </aside>
              <div class="flex-1 min-w-0 flex flex-col min-h-0 border border-gray-200 overflow-hidden bg-white">
                <div class="shrink-0 px-3 py-2 bg-gray-50 border-b border-gray-200 text-sm font-medium text-gray-700">
                  单件列表
                </div>
                <div ref="itemsPanelRef" class="flex-1 min-h-0 overflow-auto px-3 py-3">
                  <div v-if="filteredPhysicalItems.length" class="overflow-x-auto w-full max-w-full">
                    <table class="text-sm border border-gray-200 min-w-full w-max">
                      <thead class="bg-gray-50 border-b sticky top-0 z-10">
                        <tr>
                          <th
                            v-for="col in itemColumns"
                            :key="col.key"
                            class="px-3 py-2 text-left text-gray-600 whitespace-nowrap"
                            :class="col.minWidth"
                          >
                            {{ col.label }}
                          </th>
                        </tr>
                      </thead>
                      <tbody class="divide-y">
                        <tr v-for="row in filteredPhysicalItems" :key="row.id" class="hover:bg-gray-50">
                          <td
                            v-for="col in itemColumns"
                            :key="col.key"
                            class="px-3 py-2 align-middle whitespace-nowrap"
                            :class="col.minWidth"
                          >
                            {{ row[col.key] || '—' }}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p v-else class="text-gray-400 text-sm">暂无单件信息</p>
                </div>
              </div>
            </div>

            <!-- 订单 -->
            <div
              v-show="resultTab === 'order'"
              ref="orderPanelRef"
              class="dedup-result-panel__tab absolute inset-0 overflow-y-auto overflow-x-hidden px-5 py-4 bg-white"
            >
              <template v-if="orderResults.length">
                <div class="flex items-center flex-wrap gap-x-6 gap-y-1 px-3 py-2 mb-3 border border-gray-200 rounded bg-slate-50 text-sm text-gray-600">
                  <span>发订数量：<strong class="text-slate-900">{{ orderFlowStats.issued }}</strong></span>
                  <span>收货数量：<strong class="text-slate-900">{{ orderFlowStats.received }}</strong></span>
                  <span>换货数量：<strong class="text-slate-900">{{ orderFlowStats.exchanged }}</strong></span>
                  <span>退货数量：<strong class="text-slate-900">{{ orderFlowStats.returned }}</strong></span>
                  <span>撤订数量：<strong class="text-slate-900">{{ orderFlowStats.cancelled }}</strong></span>
                </div>
                <div class="w-full overflow-x-auto">
                  <table class="w-full min-w-[1100px] text-sm border border-gray-200">
                    <thead class="bg-gray-50 border-b sticky top-0 z-10">
                      <tr>
                        <th class="px-3 py-2 text-left text-gray-600 whitespace-nowrap">订单行号</th>
                        <th class="px-3 py-2 text-left text-gray-600 whitespace-nowrap">馆址</th>
                        <th class="px-3 py-2 text-left text-gray-600 whitespace-nowrap min-w-[140px]">正题名</th>
                        <th class="px-3 py-2 text-left text-gray-600 whitespace-nowrap min-w-[100px]">作者</th>
                        <th class="px-3 py-2 text-left text-gray-600 whitespace-nowrap min-w-[120px]">出版社</th>
                        <th class="px-3 py-2 text-left text-gray-600 whitespace-nowrap">出版时间</th>
                        <th class="px-3 py-2 text-left text-gray-600 whitespace-nowrap">定价</th>
                        <th class="px-3 py-2 text-left text-gray-600 whitespace-nowrap">币种</th>
                        <th class="px-3 py-2 text-left text-gray-600 whitespace-nowrap">套内册数</th>
                        <th class="px-3 py-2 text-left text-gray-600 whitespace-nowrap">套数</th>
                        <th class="px-3 py-2 text-left text-gray-600 whitespace-nowrap">行状态</th>
                        <th class="px-3 py-2 text-left text-gray-600 whitespace-nowrap">发订时间</th>
                      </tr>
                    </thead>
                    <tbody class="divide-y">
                      <tr v-for="item in pagedOrderResults" :key="item.orderLineNo" class="hover:bg-gray-50">
                        <td class="px-3 py-2 whitespace-nowrap">{{ item.orderLineNo }}</td>
                        <td class="px-3 py-2 whitespace-nowrap">{{ item.site || '—' }}</td>
                        <td class="px-3 py-2 max-w-[200px] truncate" :title="item.title">{{ item.title || '—' }}</td>
                        <td class="px-3 py-2 max-w-[140px] truncate" :title="item.author">{{ item.author || '—' }}</td>
                        <td class="px-3 py-2 max-w-[160px] truncate" :title="item.publisher">{{ item.publisher || '—' }}</td>
                        <td class="px-3 py-2 whitespace-nowrap">{{ item.publishTime || '—' }}</td>
                        <td class="px-3 py-2 whitespace-nowrap">{{ item.price ?? '—' }}</td>
                        <td class="px-3 py-2 whitespace-nowrap">{{ item.currency || '—' }}</td>
                        <td class="px-3 py-2 whitespace-nowrap">{{ item.copiesInSet ?? '—' }}</td>
                        <td class="px-3 py-2 whitespace-nowrap">{{ item.sets ?? '—' }}</td>
                        <td class="px-3 py-2 whitespace-nowrap">{{ item.lineStatus || '—' }}</td>
                        <td class="px-3 py-2 whitespace-nowrap">{{ item.issueTime || '—' }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </template>
              <p v-else class="text-gray-400 text-sm">暂无查重结果</p>
            </div>
          </div>
          <div
            v-if="showPaginationBar"
            class="flex items-center justify-between px-5 py-3 border-t shrink-0 bg-white text-sm text-gray-600"
          >
            <span class="text-gray-500">共 {{ paginationTotal }} 条记录</span>
            <div class="flex items-center gap-2">
              <span>第 {{ page }}/{{ totalPages }} 页</span>
              <button type="button" class="px-2 py-1 border rounded" :disabled="page <= 1" @click="page--">‹</button>
              <button type="button" class="px-2 py-1 border rounded" :disabled="page >= totalPages" @click="page++">›</button>
              <select v-model.number="pageSize" class="border rounded px-2 py-1">
                <option v-for="size in pageSizeOptions" :key="size" :value="size">{{ size }}条/页</option>
              </select>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Teleport>
</template>

<script setup>
import { computed, nextTick, onBeforeUnmount, ref, watch } from 'vue';
import HoldingTree from '@/modules/order/components/HoldingTree.vue';
import {
  buildDisplayHoldingTree,
  countBibHoldingCopies,
  filterHoldingDedupItemsByLeaf,
  filterHoldingDedupMarcFields,
  formatDedupFieldLabels,
  getHoldingBibCardFields,
  getHoldingBibFieldDisplayValue,
  getHoldingDedupPhysicalItems,
  hasHoldingDistribution,
  HOLDING_DEDUP_ITEM_COLUMNS,
  getOrderLineLanguageCategory,
  getOrderLineResourceType
} from '@/modules/order/data/dedup';
import { buildOrderLineBibFields } from '@/modules/order/data/order-line-detail';
import { summarizeRelatedOrderFlow } from '@/modules/order/data/bib';
import { useOrderStore } from '@/modules/order/stores/order';

const props = defineProps({
  open: { type: Boolean, default: false },
  /** 入口类型：holding → 默认书目；order → 默认订单 */
  entryType: { type: String, default: 'holding' },
  line: { type: Object, default: null }
});

defineEmits(['close']);

const orderStore = useOrderStore();

const resultTabs = [
  { key: 'bib', label: '书目' },
  { key: 'marc', label: 'MARC信息' },
  { key: 'items', label: '单件' },
  { key: 'order', label: '订单' }
];

const resultTab = ref('bib');
const selectedBibRecordNo = ref('');
const selectedLeafKey = ref('');
const selectedLeafFilter = ref(null);
const panelBodyRef = ref(null);
const bibPanelRef = ref(null);
const marcPanelRef = ref(null);
const marcLeftPanelRef = ref(null);
const marcSplitRef = ref(null);
const itemsTreePanelRef = ref(null);
const itemsPanelRef = ref(null);
const orderPanelRef = ref(null);
const page = ref(1);
const pageSize = ref(5);
const marcLeftPercent = ref(50);
const MARC_SPLIT_MIN = 20;
const MARC_SPLIT_MAX = 80;

const displayLine = computed(() => {
  const orderLineNo = props.line?.orderLineNo;
  if (!orderLineNo) return props.line;
  return orderStore.lines.find(row => row.orderLineNo === orderLineNo) || props.line;
});

const holdingResults = computed(() => displayLine.value?.holdingDedupResults || []);
const orderResults = computed(() => displayLine.value?.orderDedupResults || []);
const holdingCount = computed(() => holdingResults.value.length);
const orderCount = computed(() => orderResults.value.length);
/** 订单查重结果发/收/换/退/撤订汇总（与书目查询关联订单行一致） */
const orderFlowStats = computed(() => summarizeRelatedOrderFlow(orderResults.value));

const fieldLabels = computed(() => formatDedupFieldLabels(displayLine.value?.lastDedupFieldKeys));

const paginationList = computed(() => (
  resultTab.value === 'order' ? orderResults.value : holdingResults.value
));
const paginationTotal = computed(() => paginationList.value.length);
const totalPages = computed(() => Math.max(1, Math.ceil(paginationTotal.value / pageSize.value)));
const pageSizeOptions = computed(() => (
  resultTab.value === 'order' ? [50, 100, 200] : [5, 10, 20, 50]
));

const pagedHoldingResults = computed(() => {
  const start = (page.value - 1) * pageSize.value;
  return holdingResults.value.slice(start, start + pageSize.value);
});

const pagedOrderResults = computed(() => {
  const start = (page.value - 1) * pageSize.value;
  return orderResults.value.slice(start, start + pageSize.value);
});

const lineResourceType = computed(() => {
  if (!displayLine.value) return '纸质书';
  return getOrderLineResourceType(displayLine.value, orderStore.orders);
});

const lineLanguageCategory = computed(() => {
  if (!displayLine.value) return '中文';
  return getOrderLineLanguageCategory(displayLine.value, orderStore.orders);
});

const orderLineDetailFields = computed(() => {
  if (!displayLine.value) return [];
  return buildOrderLineBibFields(displayLine.value, lineResourceType.value, lineLanguageCategory.value);
});

function formatDetailValue(value) {
  if (value == null || String(value).trim() === '') return '—';
  return String(value);
}

const holdingBibCardFields = computed(() =>
  getHoldingBibCardFields(lineResourceType.value, lineLanguageCategory.value)
);

const activeHoldingBib = computed(() => {
  const no = selectedBibRecordNo.value;
  if (!no) return holdingResults.value[0] || null;
  return holdingResults.value.find(item => item.bibRecordNo === no) || holdingResults.value[0] || null;
});

const activeMarcFields = computed(() => {
  if (!activeHoldingBib.value?.marcFields?.length) return [];
  return filterHoldingDedupMarcFields(activeHoldingBib.value.marcFields, lineLanguageCategory.value);
});

const activeHoldingTree = computed(() => {
  if (!activeHoldingBib.value) return [];
  return buildDisplayHoldingTree(
    activeHoldingBib.value.holdingTree,
    activeHoldingBib.value.unassignedCopyCount
  );
});

const allPhysicalItems = computed(() => getHoldingDedupPhysicalItems(activeHoldingBib.value));

const filteredPhysicalItems = computed(() =>
  filterHoldingDedupItemsByLeaf(allPhysicalItems.value, selectedLeafFilter.value)
);

const itemColumns = HOLDING_DEDUP_ITEM_COLUMNS;

const showPaginationBar = computed(() => {
  if (resultTab.value === 'marc' || resultTab.value === 'items') return false;
  if (resultTab.value === 'bib') return holdingResults.value.length > 0;
  return orderResults.value.length > 0;
});

const panelHeightClass = computed(() => {
  if (resultTab.value === 'marc' || resultTab.value === 'items') {
    return 'h-[min(88vh,calc(100vh-1.5rem))]';
  }
  return 'h-[min(75vh,calc(100vh-2rem))]';
});

/**
 * 默认选中当前页第一条书目
 */
function ensureDefaultBibSelection() {
  const first = pagedHoldingResults.value[0] || holdingResults.value[0];
  selectedBibRecordNo.value = first?.bibRecordNo || '';
  clearLeafFilter();
}

function clearLeafFilter() {
  selectedLeafKey.value = '';
  selectedLeafFilter.value = null;
}

function isBibSelected(item) {
  return Boolean(item?.bibRecordNo) && item.bibRecordNo === selectedBibRecordNo.value;
}

function selectBib(item) {
  if (selectedBibRecordNo.value === (item?.bibRecordNo || '')) {
    clearLeafFilter();
    return;
  }
  selectedBibRecordNo.value = item?.bibRecordNo || '';
  // leaf 由 watch(selectedBibRecordNo) 清理
}

function switchTab(key) {
  if (key === resultTab.value) return;
  const prev = resultTab.value;
  resultTab.value = key;
  if ((key === 'bib' || key === 'order') && (prev === 'bib' || prev === 'order') && prev !== key) {
    page.value = 1;
    pageSize.value = key === 'order' ? 50 : 5;
  } else if (key === 'order' && prev !== 'order') {
    page.value = 1;
    pageSize.value = 50;
  } else if (key === 'bib' && prev === 'order') {
    page.value = 1;
    pageSize.value = 5;
  }
  if ((key === 'marc' || key === 'items') && !selectedBibRecordNo.value && holdingResults.value.length) {
    ensureDefaultBibSelection();
  }
}

watch(() => props.open, val => {
  if (!val) return;
  resultTab.value = props.entryType === 'order' ? 'order' : 'bib';
  page.value = 1;
  pageSize.value = props.entryType === 'order' ? 50 : 5;
  marcLeftPercent.value = 50;
  ensureDefaultBibSelection();
});

watch(pagedHoldingResults, list => {
  if (resultTab.value !== 'bib') return;
  if (!list.length) {
    selectedBibRecordNo.value = '';
    return;
  }
  const stillVisible = list.some(item => item.bibRecordNo === selectedBibRecordNo.value);
  if (!stillVisible) {
    selectedBibRecordNo.value = list[0].bibRecordNo || '';
    clearLeafFilter();
  }
});

watch(resultTab, async () => {
  await nextTick();
  resetPanelScroll();
});

watch(selectedBibRecordNo, () => {
  clearLeafFilter();
});

function resetPanelScroll() {
  if (resultTab.value === 'marc') {
    marcPanelRef.value?.scrollTo({ top: 0 });
    marcLeftPanelRef.value?.scrollTo({ top: 0 });
    return;
  }
  if (resultTab.value === 'items') {
    itemsTreePanelRef.value?.scrollTo({ top: 0 });
    itemsPanelRef.value?.scrollTo({ top: 0 });
    return;
  }
  if (resultTab.value === 'order') {
    orderPanelRef.value?.scrollTo({ top: 0 });
    return;
  }
  bibPanelRef.value?.scrollTo({ top: 0 });
}

/**
 * 开始拖拽调整 MARC 左右分栏宽度
 * @param {MouseEvent} event
 */
function startSplitDrag(event) {
  const container = marcSplitRef.value;
  if (!container) return;

  const rect = container.getBoundingClientRect();
  const startX = event.clientX;
  const startPercent = marcLeftPercent.value;
  const width = rect.width || 1;

  function onMove(moveEvent) {
    const deltaPercent = ((moveEvent.clientX - startX) / width) * 100;
    const next = Math.min(MARC_SPLIT_MAX, Math.max(MARC_SPLIT_MIN, startPercent + deltaPercent));
    marcLeftPercent.value = Math.round(next * 10) / 10;
  }

  function onUp() {
    document.removeEventListener('mousemove', onMove);
    document.removeEventListener('mouseup', onUp);
    document.body.style.cursor = '';
    document.body.style.userSelect = '';
  }

  document.body.style.cursor = 'col-resize';
  document.body.style.userSelect = 'none';
  document.addEventListener('mousemove', onMove);
  document.addEventListener('mouseup', onUp);
}

onBeforeUnmount(() => {
  document.body.style.cursor = '';
  document.body.style.userSelect = '';
});

function onSelectLeaf(payload) {
  selectedLeafKey.value = payload.pathKey;
  if (payload.node?.unassigned) {
    selectedLeafFilter.value = { unassigned: true };
  } else {
    selectedLeafFilter.value = { name: payload.node?.name || '' };
  }
}

function getBibCopyCount(item) {
  return countBibHoldingCopies(item);
}

function isBibAssociated(item) {
  const bibRecordNo = displayLine.value?.bibRecordNo?.trim();
  if (!bibRecordNo || !item?.bibRecordNo) return false;
  return bibRecordNo === item.bibRecordNo;
}

function associateBib(item) {
  const orderLineNo = displayLine.value?.orderLineNo;
  if (!orderLineNo || !item?.bibRecordNo) return;
  orderStore.updateLine(orderLineNo, { bibRecordNo: item.bibRecordNo });
}

function disassociateBib() {
  const orderLineNo = displayLine.value?.orderLineNo;
  if (!orderLineNo) return;
  orderStore.updateLine(orderLineNo, { bibRecordNo: '' });
}
</script>

<style scoped>
.dedup-result-panel__body {
  flex: 1 1 0%;
  background: #fff;
}

.dedup-result-panel__tab {
  overscroll-behavior: contain;
}
</style>
