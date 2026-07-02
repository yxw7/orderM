<template>
  <Teleport to="body">
    <div class="fixed inset-0 z-[70]" :class="{ 'pointer-events-none': !open }">
      <div
        class="absolute inset-0 bg-slate-900/40 transition-opacity duration-300"
        :class="open ? 'opacity-100' : 'opacity-0'"
        @click="$emit('close')"
      />
      <aside
        class="absolute top-0 right-0 h-full bg-white shadow-[-8px_0_24px_rgba(15,23,42,0.12)] flex flex-col transition-transform duration-300"
        :class="open ? 'translate-x-0' : 'translate-x-full'"
        style="width: 75%; min-width: 520px; max-width: 960px;"
        role="dialog"
        aria-modal="true"
      >
        <div class="flex items-center justify-between px-5 py-4 border-b shrink-0">
          <h2 class="text-base font-medium text-gray-800">{{ title }}</h2>
          <button type="button" class="text-gray-400 hover:text-gray-600 text-xl leading-none" @click="$emit('close')">&times;</button>
        </div>
        <div class="px-5 py-4 border-b bg-gray-50 shrink-0 text-sm text-gray-600 space-y-1">
          <p><span class="text-gray-500">订单行号：</span>{{ line?.orderLineNo || '—' }}</p>
          <p><span class="text-gray-500">查重字段：</span>{{ fieldLabels || '—' }}</p>
          <p><span class="text-gray-500">重复记录数：</span>{{ totalCount }}</p>
          <p v-if="duplicateType === 'holding'"><span class="text-gray-500">总复本数：</span>{{ totalCopies }}</p>
          <p v-if="duplicateType === 'order'"><span class="text-gray-500">总套数：</span>{{ totalSets }}</p>
        </div>
        <div class="flex-1 flex flex-col min-h-0 overflow-hidden">
          <div class="flex-1 overflow-y-auto overflow-x-hidden px-5 py-4 min-h-0 min-w-0">
            <template v-if="!results.length">
              <p class="text-gray-400 text-sm">暂无查重结果</p>
            </template>
            <template v-else-if="duplicateType === 'holding'">
              <div class="flex gap-4 border-b mb-4">
                <button
                  v-for="tab in holdingTabs"
                  :key="tab.key"
                  type="button"
                  class="px-1 py-2 text-sm border-b-2"
                  :class="holdingTab === tab.key ? 'text-sky-600 border-sky-600' : 'text-gray-600 border-transparent'"
                  @click="holdingTab = tab.key"
                >
                  {{ tab.label }}
                </button>
              </div>
              <div v-if="holdingTab === 'bib'" class="space-y-3">
                <article
                  v-for="(item, index) in pagedResults"
                  :key="item.bibRecordNo || index"
                  class="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <div class="flex items-start gap-3 p-3 bg-gray-50">
                    <button
                      type="button"
                      class="flex flex-1 items-start gap-3 min-w-0 text-left hover:opacity-80"
                      @click="toggleExpand(item.bibRecordNo)"
                    >
                      <TreeExpandIcon
                        class="mt-0.5"
                        :expanded="expandedIds.has(item.bibRecordNo)"
                      />
                      <div class="flex-1 min-w-0">
                        <div class="font-medium text-gray-800">{{ item.title || '—' }}</div>
                        <div class="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-500">
                          <span>书目记录号：{{ item.bibRecordNo || '—' }}</span>
                          <span>ISBN：{{ item.isbn || item.standardNo || '—' }}</span>
                          <span>作者：{{ item.author || '—' }}</span>
                          <span>出版社：{{ item.publisher || '—' }}</span>
                          <span v-if="countHoldingTreeCopies(item.holdingTree)">
                            复本数：{{ countHoldingTreeCopies(item.holdingTree) }}本
                          </span>
                        </div>
                      </div>
                    </button>
                    <button type="button" class="text-sky-600 text-sm shrink-0 hover:underline pt-0.5" @click="viewMarc(item)">
                      查看
                    </button>
                  </div>
                  <div v-if="expandedIds.has(item.bibRecordNo)" class="p-3 border-t border-gray-100 bg-white text-sm">
                    <HoldingTree v-if="item.holdingTree?.length" :nodes="item.holdingTree" />
                    <p v-else class="text-gray-400 text-sm">暂无馆藏分布</p>
                  </div>
                </article>
              </div>
              <div v-else>
                <MarcTable v-if="activeMarc" :fields="activeMarc.marcFields || []" />
                <p v-else class="text-gray-400 text-sm">暂无MARC信息</p>
              </div>
            </template>
            <template v-else>
              <div class="overflow-x-auto w-full max-w-full">
                <table class="text-sm border border-gray-200 min-w-[1100px] w-max">
                  <thead class="bg-gray-50 border-b">
                    <tr>
                      <th class="px-3 py-2 text-left text-gray-600 whitespace-nowrap">订单行号</th>
                      <th class="px-3 py-2 text-left text-gray-600 whitespace-nowrap">馆址</th>
                      <th class="px-3 py-2 text-left text-gray-600 whitespace-nowrap min-w-[140px]">正题名</th>
                      <th class="px-3 py-2 text-left text-gray-600 whitespace-nowrap min-w-[100px]">作者</th>
                      <th class="px-3 py-2 text-left text-gray-600 whitespace-nowrap min-w-[120px]">出版社</th>
                      <th class="px-3 py-2 text-left text-gray-600 whitespace-nowrap">出版时间</th>
                      <th class="px-3 py-2 text-left text-gray-600 whitespace-nowrap">套内册数</th>
                      <th class="px-3 py-2 text-left text-gray-600 whitespace-nowrap">套数</th>
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
                      <td class="px-3 py-2 whitespace-nowrap">{{ item.copiesInSet ?? '—' }}</td>
                      <td class="px-3 py-2 whitespace-nowrap">{{ item.sets ?? '—' }}</td>
                      <td class="px-3 py-2 whitespace-nowrap">{{ item.issueTime || '—' }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </template>
          </div>
          <div v-if="results.length" class="flex items-center justify-between px-5 py-3 border-t shrink-0 bg-white text-sm text-gray-600">
            <span class="text-gray-500">共 {{ results.length }} 条记录</span>
            <div class="flex items-center gap-2">
              <span>第 {{ page }}/{{ totalPages }} 页</span>
              <button type="button" class="px-2 py-1 border rounded" :disabled="page <= 1" @click="page--">‹</button>
              <button type="button" class="px-2 py-1 border rounded" :disabled="page >= totalPages" @click="page++">›</button>
              <select v-model.number="pageSize" class="border rounded px-2 py-1">
                <option :value="5">5条/页</option>
                <option :value="10">10条/页</option>
                <option :value="20">20条/页</option>
                <option :value="50">50条/页</option>
              </select>
            </div>
          </div>
        </div>
      </aside>
    </div>
  </Teleport>
</template>

<script setup>
import { computed, ref, watch } from 'vue';
import HoldingTree from '@/modules/order/components/HoldingTree.vue';
import MarcTable from '@/modules/order/components/MarcTable.vue';
import TreeExpandIcon from '@/modules/order/components/TreeExpandIcon.vue';
import {
  countHoldingTreeCopies,
  formatDedupFieldLabels,
  getHoldingDedupTotalCopies,
  getOrderDedupTotalSets
} from '@/modules/order/data/dedup';

const props = defineProps({
  open: { type: Boolean, default: false },
  duplicateType: { type: String, default: 'holding' },
  line: { type: Object, default: null },
  results: { type: Array, default: () => [] }
});

defineEmits(['close']);

const holdingTabs = [{ key: 'bib', label: '书目' }, { key: 'marc', label: 'MARC信息' }];
const holdingTab = ref('bib');
const expandedIds = ref(new Set());
const activeMarc = ref(null);
const page = ref(1);
const pageSize = ref(5);

const title = computed(() => `${props.duplicateType === 'holding' ? '馆藏重复' : '订单重复'}查重结果`);
const fieldLabels = computed(() => formatDedupFieldLabels(props.line?.lastDedupFieldKeys));
const totalCount = computed(() => props.results.length);
const totalCopies = computed(() => getHoldingDedupTotalCopies(props.results));
const totalSets = computed(() => getOrderDedupTotalSets(props.results));
const totalPages = computed(() => Math.max(1, Math.ceil(props.results.length / pageSize.value)));
const pagedResults = computed(() => {
  const start = (page.value - 1) * pageSize.value;
  return props.results.slice(start, start + pageSize.value);
});

watch(() => props.open, val => {
  if (val) {
    page.value = 1;
    holdingTab.value = 'bib';
    const firstBibId = props.results[0]?.bibRecordNo;
    expandedIds.value = firstBibId ? new Set([firstBibId]) : new Set();
    activeMarc.value = props.results[0] || null;
  }
});

watch(() => props.results, val => {
  activeMarc.value = val[0] || null;
});

function toggleExpand(id) {
  const next = new Set(expandedIds.value);
  if (next.has(id)) next.delete(id);
  else next.add(id);
  expandedIds.value = next;
}

function viewMarc(item) {
  activeMarc.value = item;
  holdingTab.value = 'marc';
}
</script>
