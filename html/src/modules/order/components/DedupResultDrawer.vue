<template>
  <Teleport to="body">
    <div class="fixed inset-0 z-[70]" :class="{ 'pointer-events-none': !open }">
      <div
        class="absolute inset-0 bg-slate-900/40 transition-opacity duration-300"
        :class="open ? 'opacity-100' : 'opacity-0'"
        @click="$emit('close')"
      />
      <section
        class="dedup-result-panel absolute top-0 inset-x-0 bg-white flex flex-col transition-transform duration-300 ease-out shadow-[0_8px_24px_rgba(15,23,42,0.12)] max-h-[85vh] overflow-hidden"
        :class="open ? 'translate-y-0' : '-translate-y-full'"
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
              <span class="text-gray-500">订单行号：</span>{{ line?.orderLineNo || '—' }}
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
            class="dedup-result-panel__body flex-1 overflow-y-auto overflow-x-hidden px-5 py-4 min-h-0 min-w-0"
          >
            <template v-if="!results.length">
              <p class="text-gray-400 text-sm">暂无查重结果</p>
            </template>
            <template v-else-if="duplicateType === 'holding'">
              <div v-if="holdingTab === 'bib'" key="holding-bib" class="overflow-x-auto w-full max-w-full">
                <table class="text-sm border border-gray-200 min-w-full w-max">
                  <thead class="bg-gray-50 border-b sticky top-0 z-10">
                    <tr>
                      <th class="px-2 py-2 w-10 shrink-0" aria-label="展开" />
                      <th
                        v-for="field in holdingBibCardFields"
                        :key="field.key"
                        class="px-3 py-2 text-left text-gray-600 whitespace-nowrap"
                      >
                        {{ field.label }}
                      </th>
                      <th class="px-3 py-2 text-left text-gray-600 whitespace-nowrap w-20">操作</th>
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
                        <td
                          v-for="field in holdingBibCardFields"
                          :key="field.key"
                          class="px-3 py-2 align-middle max-w-[200px] truncate whitespace-nowrap"
                          :title="getHoldingBibFieldDisplayValue(item, field.key)"
                        >
                          {{ getHoldingBibFieldDisplayValue(item, field.key) }}
                        </td>
                        <td class="px-3 py-2 align-middle whitespace-nowrap">
                          <button type="button" class="text-sky-600 hover:underline" @click="viewMarc(item)">
                            查看
                          </button>
                        </td>
                      </tr>
                      <tr v-if="expandedIds.has(item.bibRecordNo)">
                        <td :colspan="holdingBibCardFields.length + 2" class="px-3 py-3 bg-gray-50/50">
                          <HoldingTree v-if="item.holdingTree?.length" :nodes="item.holdingTree" />
                          <p v-else class="text-gray-400 text-sm">暂无馆藏分布</p>
                        </td>
                      </tr>
                    </template>
                  </tbody>
                </table>
              </div>
              <div v-else-if="holdingTab === 'marc'" key="holding-marc" class="relative z-0 bg-white">
                <MarcTable v-if="activeMarcFields.length" :fields="activeMarcFields" />
                <p v-else class="text-gray-400 text-sm">暂无MARC信息</p>
              </div>
            </template>
            <template v-else>
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
            </template>
          </div>
          <div
            v-if="results.length && !(duplicateType === 'holding' && holdingTab === 'marc')"
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
import { computed, nextTick, ref, watch } from 'vue';
import HoldingTree from '@/modules/order/components/HoldingTree.vue';
import MarcTable from '@/modules/order/components/MarcTable.vue';
import TreeExpandIcon from '@/modules/order/components/TreeExpandIcon.vue';
import {
  filterHoldingDedupMarcFields,
  formatDedupFieldLabels,
  getHoldingBibCardFields,
  getHoldingBibFieldDisplayValue,
  getOrderLineLanguageCategory,
  getOrderLineResourceType
} from '@/modules/order/data/dedup';
import { useOrderStore } from '@/modules/order/stores/order';

const props = defineProps({
  open: { type: Boolean, default: false },
  duplicateType: { type: String, default: 'holding' },
  line: { type: Object, default: null },
  results: { type: Array, default: () => [] }
});

defineEmits(['close']);

const orderStore = useOrderStore();

const holdingTabs = [{ key: 'bib', label: '书目' }, { key: 'marc', label: 'MARC信息' }];
const holdingTab = ref('bib');
const expandedIds = ref(new Set());
const activeMarc = ref(null);
const panelBodyRef = ref(null);
const page = ref(1);
const pageSize = ref(50);

const title = computed(() => (props.duplicateType === 'holding' ? '馆藏查重结果' : '订单查重结果'));
const fieldLabels = computed(() => formatDedupFieldLabels(props.line?.lastDedupFieldKeys));
const totalCount = computed(() => props.results.length);
const totalPages = computed(() => Math.max(1, Math.ceil(props.results.length / pageSize.value)));
const pageSizeOptions = computed(() => (
  props.duplicateType === 'order' ? [50, 100, 200] : [5, 10, 20, 50]
));
const pagedResults = computed(() => {
  const start = (page.value - 1) * pageSize.value;
  return props.results.slice(start, start + pageSize.value);
});

/** 馆藏查重书目卡片字段（随查重订单行资源类型与语种变化） */
const holdingBibCardFields = computed(() => {
  if (!props.line) return getHoldingBibCardFields('纸质书', '中文');
  const resourceType = getOrderLineResourceType(props.line, orderStore.orders);
  const languageCategory = getOrderLineLanguageCategory(props.line, orderStore.orders);
  return getHoldingBibCardFields(resourceType, languageCategory);
});

/** 馆藏查重 MARC 页签字段（随语种过滤） */
const holdingLanguageCategory = computed(() => {
  if (!props.line) return '中文';
  return getOrderLineLanguageCategory(props.line, orderStore.orders);
});

const activeMarcFields = computed(() => {
  if (!activeMarc.value?.marcFields?.length) return [];
  return filterHoldingDedupMarcFields(activeMarc.value.marcFields, holdingLanguageCategory.value);
});

watch(() => props.open, val => {
  if (val) {
    page.value = 1;
    pageSize.value = props.duplicateType === 'order' ? 50 : 5;
    holdingTab.value = 'bib';
    const firstBibId = props.results[0]?.bibRecordNo;
    expandedIds.value = firstBibId ? new Set([firstBibId]) : new Set();
    activeMarc.value = props.results[0] || null;
  }
});

watch(() => props.results, val => {
  activeMarc.value = val[0] || null;
});

watch(holdingTab, async () => {
  await nextTick();
  panelBodyRef.value?.scrollTo({ top: 0 });
});

/**
 * 重置结果内容区滚动位置
 */
function resetPanelScroll() {
  panelBodyRef.value?.scrollTo({ top: 0 });
}

function toggleExpand(id) {
  const next = new Set(expandedIds.value);
  if (next.has(id)) next.delete(id);
  else next.add(id);
  expandedIds.value = next;
}

function viewMarc(item) {
  activeMarc.value = item;
  holdingTab.value = 'marc';
  resetPanelScroll();
}
</script>

<style scoped>
.dedup-result-panel__body {
  flex: 1 1 0%;
  overscroll-behavior: contain;
  isolation: isolate;
  background: #fff;
}
</style>
