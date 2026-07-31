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
          <h2 class="text-base font-medium text-gray-800">{{ title }}</h2>
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
              <span class="text-gray-500">重复记录数：</span>{{ totalCount }}
            </span>
          </div>
        </div>
        <div class="flex flex-1 flex-col min-h-0 overflow-hidden">
          <div
            v-if="duplicateType === 'holding' && results.length"
            class="flex gap-4 border-b px-5 shrink-0 bg-white"
          >
            <button
              v-for="tab in holdingTabs"
              :key="tab.key"
              type="button"
              class="px-1 py-2 text-sm border-b-2 -mb-px"
              :class="holdingTab === tab.key ? 'text-sky-600 border-sky-600' : 'text-gray-600 border-transparent'"
              @click="holdingTab = tab.key"
            >
              {{ tab.label }}
            </button>
          </div>
          <div
            ref="panelBodyRef"
            class="dedup-result-panel__body relative flex-1 min-h-0 overflow-hidden"
          >
            <template v-if="!results.length">
              <div class="absolute inset-0 overflow-y-auto overflow-x-hidden px-5 py-4">
                <p class="text-gray-400 text-sm">暂无查重结果</p>
              </div>
            </template>
            <template v-else-if="duplicateType === 'holding'">
              <div
                v-show="holdingTab === 'bib'"
                ref="bibPanelRef"
                class="dedup-result-panel__tab absolute inset-0 overflow-y-auto overflow-x-hidden px-5 py-4 bg-white"
              >
                <div class="overflow-x-auto w-full max-w-full">
                <table class="text-sm border border-gray-200 min-w-full w-max">
                  <thead class="bg-gray-50 border-b sticky top-0 z-10">
                    <tr>
                      <th class="px-2 py-2 w-10 shrink-0" aria-label="展开" />
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
                    <template v-for="(item, index) in pagedResults" :key="item.bibRecordNo || index">
                      <tr class="hover:bg-gray-50">
                        <td class="px-2 py-2 align-middle">
                          <button
                            type="button"
                            class="inline-flex items-center justify-center hover:opacity-80"
                            @click="toggleExpand(item.bibRecordNo)"
                          >
                            <TreeExpandIcon :expanded="expandedIds.has(item.bibRecordNo)" />
                          </button>
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
                          <button type="button" class="text-sky-600 hover:underline mr-2" @click="viewMarc(item)">
                            查看
                          </button>
                          <button type="button" class="text-sky-600 hover:underline mr-2" @click="viewItems(item)">
                            单件
                          </button>
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
                      <tr v-if="expandedIds.has(item.bibRecordNo)">
                        <td :colspan="holdingBibCardFields.length + 3" class="px-3 py-3 bg-gray-50/50">
                          <HoldingTree
                            v-if="hasHoldingDistribution(item)"
                            :nodes="buildDisplayHoldingTree(item.holdingTree, item.unassignedCopyCount)"
                          />
                          <p v-else class="text-gray-400 text-sm">暂无馆藏分布</p>
                        </td>
                      </tr>
                    </template>
                  </tbody>
                </table>
                </div>
              </div>
              <div
                v-show="holdingTab === 'marc'"
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
                  <div ref="marcLeftPanelRef" class="flex-1 min-h-0 overflow-y-auto px-3 py-3 space-y-2 text-sm">
                    <div
                      v-for="item in orderLineDetailFields"
                      :key="item.key"
                    >
                      <span class="text-gray-500">{{ item.label }}：</span>
                      <span class="text-gray-800 break-words">{{ formatDetailValue(item.value) }}</span>
                    </div>
                    <p v-if="!orderLineDetailFields.length" class="text-gray-400">暂无订单行信息</p>
                  </div>
                </aside>
                <div
                  class="dedup-marc-resizer shrink-0 w-1.5 mx-1 cursor-col-resize self-stretch relative group"
                  title="拖拽调整宽度"
                  @mousedown.prevent="startMarcSplitDrag"
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
              <div
                v-show="holdingTab === 'items'"
                ref="itemsPanelRef"
                class="dedup-result-panel__tab absolute inset-0 overflow-y-auto overflow-x-hidden px-5 py-4 bg-white"
              >
                <div v-if="activePhysicalItems.length" class="overflow-x-auto w-full max-w-full">
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
                      <tr v-for="row in activePhysicalItems" :key="row.id" class="hover:bg-gray-50">
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
            </template>
            <template v-else>
              <div class="dedup-result-panel__tab absolute inset-0 overflow-y-auto overflow-x-hidden px-5 py-4 bg-white">
                <div class="overflow-x-auto w-full max-w-full">
                <table class="text-sm border border-gray-200 min-w-[1400px] w-max">
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
                    <tr v-for="item in pagedResults" :key="item.orderLineNo" class="hover:bg-gray-50">
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
              </div>
            </template>
          </div>
          <div
            v-if="results.length && !hidePaginationBar"
            class="flex items-center justify-between px-5 py-3 border-t shrink-0 bg-white text-sm text-gray-600"
          >
            <span class="text-gray-500">共 {{ results.length }} 条记录</span>
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
import TreeExpandIcon from '@/modules/order/components/TreeExpandIcon.vue';
import {
  buildDisplayHoldingTree,
  countBibHoldingCopies,
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
import { useOrderStore } from '@/modules/order/stores/order';

const props = defineProps({
  open: { type: Boolean, default: false },
  duplicateType: { type: String, default: 'holding' },
  line: { type: Object, default: null },
  results: { type: Array, default: () => [] }
});

defineEmits(['close']);

const orderStore = useOrderStore();

const holdingTabs = [
  { key: 'bib', label: '书目' },
  { key: 'marc', label: 'MARC信息' },
  { key: 'items', label: '单件' }
];
const holdingTab = ref('bib');
const expandedIds = ref(new Set());
const activeHoldingBib = ref(null);
const panelBodyRef = ref(null);
const bibPanelRef = ref(null);
const marcPanelRef = ref(null);
const marcLeftPanelRef = ref(null);
const marcSplitRef = ref(null);
const itemsPanelRef = ref(null);
const page = ref(1);
const pageSize = ref(50);
/** MARC 页签左侧宽度百分比，默认各 50% */
const marcLeftPercent = ref(50);
const MARC_SPLIT_MIN = 20;
const MARC_SPLIT_MAX = 80;

/** 优先取 store 中最新订单行，保证关联后字段同步 */
const displayLine = computed(() => {
  const orderLineNo = props.line?.orderLineNo;
  if (!orderLineNo) return props.line;
  return orderStore.lines.find(row => row.orderLineNo === orderLineNo) || props.line;
});

const title = computed(() => (props.duplicateType === 'holding' ? '馆藏查重结果' : '订单查重结果'));
const fieldLabels = computed(() => formatDedupFieldLabels(displayLine.value?.lastDedupFieldKeys));
const totalCount = computed(() => props.results.length);
const totalPages = computed(() => Math.max(1, Math.ceil(props.results.length / pageSize.value)));
const pageSizeOptions = computed(() => (
  props.duplicateType === 'order' ? [50, 100, 200] : [5, 10, 20, 50]
));
const pagedResults = computed(() => {
  const start = (page.value - 1) * pageSize.value;
  return props.results.slice(start, start + pageSize.value);
});

const lineResourceType = computed(() => {
  if (!displayLine.value) return '纸质书';
  return getOrderLineResourceType(displayLine.value, orderStore.orders);
});

const lineLanguageCategory = computed(() => {
  if (!displayLine.value) return '中文';
  return getOrderLineLanguageCategory(displayLine.value, orderStore.orders);
});

/** 订单行明细字段（按资源类型 / 语种） */
const orderLineDetailFields = computed(() => {
  if (!displayLine.value) return [];
  return buildOrderLineBibFields(displayLine.value, lineResourceType.value, lineLanguageCategory.value);
});

/**
 * 明细字段空值展示为 —
 * @param {*} value 字段值
 * @returns {string}
 */
function formatDetailValue(value) {
  if (value == null || String(value).trim() === '') return '—';
  return String(value);
}

/** 馆藏查重书目卡片字段（随查重订单行资源类型与语种变化） */
const holdingBibCardFields = computed(() =>
  getHoldingBibCardFields(lineResourceType.value, lineLanguageCategory.value)
);

/** 馆藏查重 MARC 页签字段（随语种过滤） */
const holdingLanguageCategory = lineLanguageCategory;

const activeMarcFields = computed(() => {
  if (!activeHoldingBib.value?.marcFields?.length) return [];
  return filterHoldingDedupMarcFields(activeHoldingBib.value.marcFields, holdingLanguageCategory.value);
});

const activePhysicalItems = computed(() => getHoldingDedupPhysicalItems(activeHoldingBib.value));

const itemColumns = HOLDING_DEDUP_ITEM_COLUMNS;

const hidePaginationBar = computed(() => (
  props.duplicateType === 'holding' && (holdingTab.value === 'marc' || holdingTab.value === 'items')
));

/** 馆藏 MARC/单件页签用更高面板，小分辨率下保证内容区可读 */
const panelHeightClass = computed(() => {
  if (props.duplicateType === 'holding' && (holdingTab.value === 'marc' || holdingTab.value === 'items')) {
    return 'h-[min(88vh,calc(100vh-1.5rem))]';
  }
  return 'h-[min(75vh,calc(100vh-2rem))]';
});

watch(() => props.open, val => {
  if (val) {
    page.value = 1;
    pageSize.value = props.duplicateType === 'order' ? 50 : 5;
    holdingTab.value = 'bib';
    marcLeftPercent.value = 50;
    expandedIds.value = new Set();
    activeHoldingBib.value = props.results[0] || null;
  }
});

watch(() => props.results, val => {
  activeHoldingBib.value = val[0] || null;
});

watch(holdingTab, async () => {
  await nextTick();
  resetPanelScroll();
  if ((holdingTab.value === 'marc' || holdingTab.value === 'items')
    && !activeHoldingBib.value
    && props.results.length) {
    activeHoldingBib.value = props.results[0];
  }
});

/**
 * 重置当前页签内容区滚动位置
 */
function resetPanelScroll() {
  let panel = panelBodyRef.value;
  if (props.duplicateType === 'holding') {
    if (holdingTab.value === 'marc') {
      marcPanelRef.value?.scrollTo({ top: 0 });
      marcLeftPanelRef.value?.scrollTo({ top: 0 });
      return;
    }
    if (holdingTab.value === 'items') panel = itemsPanelRef.value;
    else panel = bibPanelRef.value;
  }
  panel?.scrollTo({ top: 0 });
}

/**
 * 开始拖拽调整 MARC 左右分栏宽度
 * @param {MouseEvent} event
 */
function startMarcSplitDrag(event) {
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

function toggleExpand(id) {
  const next = new Set(expandedIds.value);
  if (next.has(id)) next.delete(id);
  else next.add(id);
  expandedIds.value = next;
}

function viewMarc(item) {
  activeHoldingBib.value = item;
  holdingTab.value = 'marc';
  resetPanelScroll();
}

/**
 * 切换到单件页签并展示指定书目的单件
 * @param {Object} item 馆藏查重书目
 */
function viewItems(item) {
  activeHoldingBib.value = item;
  holdingTab.value = 'items';
  resetPanelScroll();
}

/**
 * 获取书目单件数量（已分配馆藏地 + 未关联馆藏）
 * @param {Object} item 馆藏查重书目
 * @returns {number}
 */
function getBibCopyCount(item) {
  return countBibHoldingCopies(item);
}

/**
 * 判断馆藏书目是否与当前订单行已关联
 * @param {Object} item 馆藏查重书目
 * @returns {boolean}
 */
function isBibAssociated(item) {
  const bibRecordNo = displayLine.value?.bibRecordNo?.trim();
  if (!bibRecordNo || !item?.bibRecordNo) return false;
  return bibRecordNo === item.bibRecordNo;
}

/**
 * 将馆藏书目记录号关联到当前订单行
 * @param {Object} item 馆藏查重书目
 */
function associateBib(item) {
  const orderLineNo = displayLine.value?.orderLineNo;
  if (!orderLineNo || !item?.bibRecordNo) return;
  orderStore.updateLine(orderLineNo, { bibRecordNo: item.bibRecordNo });
}

/** 取消当前订单行与馆藏书目的关联 */
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
