<template>
  <div class="page-panel page-panel--scroll flex flex-col gap-0 h-full">
    <div class="bg-white rounded border border-gray-200 mt-4">
      <BibSearchPanel v-model="search" @search="filterRows" @reset="resetSearch" />

      <!-- 书目列表 -->
      <div class="border-b border-gray-200">
        <div class="flex items-center justify-between px-4 py-2 border-b border-gray-100 flex-wrap gap-2">
          <button type="button" class="px-1 py-1 text-sm text-sky-600 border-b-2 border-sky-600 font-medium">
            书目({{ filteredRows.length }})
          </button>
          <div class="flex items-center gap-2 flex-wrap justify-end">
            <button type="button" class="px-3 py-1 text-sm rounded bg-orange-500 text-white hover:bg-orange-600" @click="alertDemo('批量书目处理')">批量书目处理...</button>
            <button type="button" class="px-3 py-1 text-sm rounded border border-gray-300 text-gray-600 hover:bg-gray-50" @click="alertDemo('取消屏蔽')">取消屏蔽</button>
            <button type="button" class="px-3 py-1 text-sm rounded border border-gray-300 text-gray-600 hover:bg-gray-50" @click="alertDemo('屏蔽书目')">屏蔽书目</button>
            <button type="button" class="px-3 py-1 text-sm rounded border border-gray-300 text-gray-600 hover:bg-gray-50" @click="alertDemo('合并书目')">合并书目</button>
            <button type="button" class="px-3 py-1 text-sm rounded border border-gray-300 text-gray-600 hover:bg-gray-50" @click="alertDemo('修改MARC类型')">修改MARC类型</button>
            <button type="button" class="px-3 py-1 text-sm rounded border border-gray-300 text-gray-600 hover:bg-gray-50" @click="alertDemo('删除')">删除</button>
            <button type="button" class="px-3 py-1 text-sm rounded border border-gray-300 text-gray-600 hover:bg-gray-50" @click="alertDemo('复制书目')">复制书目</button>
            <button type="button" class="px-3 py-1 text-sm rounded bg-sky-600 text-white hover:bg-sky-700" @click="router.push('/bib-query/new-bib')">新建书目</button>
            <button type="button" class="px-3 py-1 text-sm rounded bg-teal-500 text-white hover:bg-teal-600" @click="router.push('/bib-query/z3950')">查Z3950</button>
            <button type="button" class="p-1.5 text-gray-400 hover:text-gray-600 rounded hover:bg-gray-50" title="刷新" @click="filterRows">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
            </button>
            <button type="button" class="p-1.5 text-gray-400 hover:text-gray-600 rounded hover:bg-gray-50" title="列设置" @click="showColumnSettings = !showColumnSettings">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
            </button>
          </div>
        </div>

        <div v-if="showColumnSettings" class="mx-4 mb-2 p-3 border border-gray-200 rounded bg-white shadow-lg text-sm">
          <div class="flex items-center justify-between mb-2">
            <label class="inline-flex items-center gap-2">
              <input v-model="columnSelectAll" type="checkbox" class="rounded text-sky-600" @change="toggleAllColumns">
              <span class="font-medium">列展示</span>
            </label>
            <button type="button" class="text-sky-600" @click="resetColumns">重置</button>
          </div>
          <div class="text-xs text-gray-400 border-b border-gray-100 pb-2 mb-2">不固定</div>
          <div class="grid grid-cols-3 gap-2 max-h-56 overflow-y-auto">
            <label v-for="col in configurableColumns" :key="col.key" class="inline-flex items-center gap-2">
              <input v-model="col.visible" type="checkbox" class="rounded text-sky-600">
              <span>{{ col.label }}</span>
            </label>
          </div>
          <div class="text-xs text-gray-400 border-t border-gray-100 pt-2 mt-2">固定在右侧</div>
          <label class="inline-flex items-center gap-2 mt-2 text-gray-700">
            <input type="checkbox" checked disabled class="rounded text-sky-600">
            <span>操作</span>
          </label>
        </div>

        <DataTable
          v-model:selected-keys="selectedIds"
          :columns="visibleColumns"
          :rows="pagedRows"
          :total="filteredRows.length"
          row-id-key="id"
          unit="条记录"
          highlight-selected
          v-model:page="page"
          v-model:page-size="pageSize"
          :page-sizes="[5, 10, 20, 50]"
          @row-click="selectBib"
        >
          <template #cell-title="{ row }">
            <span class="text-gray-900">{{ row.title }}</span>
          </template>
          <template #cell-actions="{ row }">
            <button type="button" class="text-sky-600 hover:underline mr-2" @click.stop="openDetail(row)">详细信息</button>
            <button type="button" class="text-sky-600 hover:underline" @click.stop="openCreateOrder(row)">新建订单</button>
          </template>
        </DataTable>
      </div>
    </div>

    <!-- 单件/关联订单区 -->
    <div class="bg-white border border-gray-200 rounded-b mt-0">
      <div class="flex items-center gap-6 px-4 border-b">
        <button
          v-for="tab in itemTabs"
          :key="tab.key"
          type="button"
          class="px-1 py-2.5 text-sm border-b-2 transition-colors"
          :class="activeItemTab === tab.key ? 'text-sky-600 border-sky-600' : 'text-gray-600 border-transparent hover:text-sky-600'"
          @click="activeItemTab = tab.key"
        >
          {{ tab.label }}<template v-if="tab.countKey">({{ tabCounts[tab.countKey] }})</template>
        </button>
      </div>

      <div v-if="activeItemTab === 'physical'" class="flex min-h-[280px]">
        <div class="w-40 border-r border-gray-200 shrink-0 bg-gray-50">
          <div class="px-3 py-2 text-sm font-medium text-gray-700 border-b border-gray-200">馆藏记录</div>
          <div v-if="!selectedBib" class="px-3 py-3 text-sm text-gray-500">请先选中书目</div>
          <div v-else-if="!holdingRecords.length" class="px-3 py-3 text-sm text-gray-500">未关联馆藏记录</div>
          <ul v-else class="py-1">
            <li>
              <button
                type="button"
                class="w-full px-3 py-2 text-left text-sm hover:bg-gray-100"
                :class="!activeHoldingId ? 'text-sky-600 bg-sky-50' : 'text-gray-700'"
                @click="activeHoldingId = ''"
              >
                全部单件
              </button>
            </li>
            <li v-for="record in holdingRecords" :key="record.id">
              <button
                type="button"
                class="w-full px-3 py-2 text-left text-sm hover:bg-gray-100 break-words"
                :class="activeHoldingId === record.id ? 'text-sky-600 bg-sky-50' : 'text-gray-700'"
                @click="activeHoldingId = record.id"
              >
                {{ record.label }}
              </button>
            </li>
          </ul>
        </div>
        <div class="flex flex-col flex-1 min-w-0">
          <div class="flex items-center justify-end gap-2 px-4 py-2 border-b border-gray-100 shrink-0 flex-wrap">
            <button
              v-for="btn in physicalToolbarButtons"
              :key="btn"
              type="button"
              class="px-3 py-1 text-sm rounded border border-gray-300 text-gray-600 hover:bg-gray-50"
              :class="{ 'bg-sky-600 text-white border-sky-600 hover:bg-sky-700': btn === '新增单件' }"
              :disabled="!selectedBib"
              @click="alertDemo(btn)"
            >
              {{ btn }}
            </button>
          </div>
          <div class="overflow-x-auto flex-1">
            <table class="w-full text-sm min-w-[960px]">
              <thead class="bg-gray-50 border-b border-gray-200 sticky top-0 z-10">
                <tr>
                  <th class="px-3 py-2.5 text-left w-10">
                    <input type="checkbox" class="rounded text-sky-600" :disabled="!physicalItems.length" @change="toggleAllPhysicalItems">
                  </th>
                  <th class="px-3 py-2.5 text-left text-gray-600 whitespace-nowrap w-14">序</th>
                  <th class="px-3 py-2.5 text-left text-gray-600 whitespace-nowrap">所属馆</th>
                  <th class="px-3 py-2.5 text-left text-gray-600 whitespace-nowrap">资产所属馆</th>
                  <th class="px-3 py-2.5 text-left text-gray-600 whitespace-nowrap">所属馆藏地</th>
                  <th class="px-3 py-2.5 text-left text-gray-600 whitespace-nowrap">所在馆藏地</th>
                  <th class="px-3 py-2.5 text-left text-gray-600 whitespace-nowrap">馆藏状态</th>
                  <th class="px-3 py-2.5 text-left text-gray-600 whitespace-nowrap">条码号</th>
                  <th class="px-3 py-2.5 text-left text-gray-600 whitespace-nowrap">操作</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-100">
                <tr v-if="!selectedBib">
                  <td colspan="9" class="px-3 py-16 text-center text-gray-400">请先选中书目</td>
                </tr>
                <tr v-else-if="!physicalItems.length">
                  <td colspan="9" class="px-3 py-16 text-center text-gray-400">暂无数据</td>
                </tr>
                <tr v-for="item in physicalItems" :key="item.id" class="hover:bg-gray-50">
                  <td class="px-3 py-2">
                    <input v-model="selectedPhysicalIds" type="checkbox" class="rounded text-sky-600" :value="item.id">
                  </td>
                  <td class="px-3 py-2 text-gray-600">{{ item.no }}</td>
                  <td class="px-3 py-2 whitespace-nowrap">{{ item.ownerLibrary }}</td>
                  <td class="px-3 py-2 whitespace-nowrap">{{ item.assetLibrary }}</td>
                  <td class="px-3 py-2">{{ item.homeLocation }}</td>
                  <td class="px-3 py-2">{{ item.currentLocation }}</td>
                  <td class="px-3 py-2 whitespace-nowrap">
                    <span :class="holdingStatusClass(item.holdingStatus)">{{ item.holdingStatus }}</span>
                  </td>
                  <td class="px-3 py-2 whitespace-nowrap font-mono text-xs">{{ item.barcode }}</td>
                  <td class="px-3 py-2 whitespace-nowrap">
                    <button type="button" class="text-sky-600 hover:underline mr-2" @click="alertDemo('编辑')">编辑</button>
                    <button type="button" class="text-sky-600 hover:underline" @click="alertDemo('移动')">移动</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div v-if="selectedBib" class="px-4 py-2 border-t text-sm text-gray-500 shrink-0">
            共 {{ physicalItems.length }} 条记录
          </div>
        </div>
      </div>

      <div v-else-if="activeItemTab === 'catalog'" class="p-4">
        <div v-if="!selectedBib" class="py-12 text-center text-gray-400 text-sm">请先选中书目</div>
        <div v-else class="max-h-[360px] overflow-y-auto">
          <MarcTable :fields="catalogFields" />
        </div>
      </div>

      <div v-else class="p-0">
        <div class="flex items-center justify-end gap-2 px-4 py-2 border-b flex-wrap">
          <button type="button" class="px-3 py-1 text-sm rounded bg-sky-600 text-white hover:bg-sky-700" :disabled="!selectedBib" @click="openCreateOrder(selectedBib)">新建订单</button>
          <button
            type="button"
            class="px-3 py-1 text-sm rounded bg-sky-600 text-white hover:bg-sky-700 disabled:opacity-50 disabled:cursor-not-allowed"
            :disabled="!selectedBib"
            @click="openJoinOrder"
          >加入订单</button>
        </div>
        <div v-if="selectedBib" class="flex items-center flex-wrap gap-x-6 gap-y-1 px-4 py-2 border-b bg-slate-50 text-sm text-gray-600">
          <span>发订数量：<strong class="text-slate-900">{{ flowStats.issued }}</strong></span>
          <span>收货数量：<strong class="text-slate-900">{{ flowStats.received }}</strong></span>
          <span>换货数量：<strong class="text-slate-900">{{ flowStats.exchanged }}</strong></span>
          <span>退货数量：<strong class="text-slate-900">{{ flowStats.returned }}</strong></span>
          <span>撤订数量：<strong class="text-slate-900">{{ flowStats.cancelled }}</strong></span>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-sm min-w-[1600px]">
            <thead class="bg-gray-50 border-b">
              <tr>
                <th v-for="col in relatedOrderColumns" :key="col" class="px-3 py-2 text-left text-gray-600 whitespace-nowrap">{{ col }}</th>
              </tr>
            </thead>
            <tbody class="divide-y">
              <tr v-if="!relatedLines.length">
                <td :colspan="relatedOrderColumns.length" class="px-3 py-16 text-center text-gray-400">
                  {{ selectedBib ? '暂无关联订单行' : '请先选中书目' }}
                </td>
              </tr>
              <tr v-for="(line, index) in relatedLines" :key="line.orderLineNo" class="hover:bg-gray-50">
                <td class="px-3 py-2">{{ index + 1 }}</td>
                <td class="px-3 py-2 whitespace-nowrap">{{ line.orderId }}</td>
                <td class="px-3 py-2">{{ line.site }}</td>
                <td class="px-3 py-2 whitespace-nowrap">{{ line.orderLineNo }}</td>
                <td class="px-3 py-2 max-w-[160px] truncate" :title="line.title">{{ line.title }}</td>
                <td class="px-3 py-2">{{ line.resourceId }}</td>
                <td class="px-3 py-2">{{ line.carrier }}</td>
                <td class="px-3 py-2">{{ line.author }}</td>
                <td class="px-3 py-2">{{ line.publisher }}</td>
                <td class="px-3 py-2">{{ line.publishTime }}</td>
                <td class="px-3 py-2">{{ line.price }}</td>
                <td class="px-3 py-2">{{ line.currency }}</td>
                <td class="px-3 py-2">{{ line.copiesInSet }}</td>
                <td class="px-3 py-2">{{ line.sets }}</td>
                <td class="px-3 py-2">{{ line.lineStatus }}</td>
                <td class="px-3 py-2">{{ line.acceptanceStatus || '—' }}</td>
                <td class="px-3 py-2">{{ line.settlementStatus }}</td>
                <td class="px-3 py-2 whitespace-nowrap">{{ line.issueTime || '—' }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="px-4 py-2 border-t text-sm text-gray-500">共 {{ relatedLines.length }} 条记录</div>
      </div>
    </div>

    <BibDetailDrawer :open="detailOpen" :row="detailRow" @close="detailOpen = false" />
    <BibJoinOrderModal :open="joinOrderOpen" :orders="joinOrderCandidates" @close="joinOrderOpen = false" @confirm="onJoinOrder" />
    <BibCreateOrderModal
      :open="createOrderOpen"
      :bib-row="createOrderBib"
      @close="createOrderOpen = false"
      @confirm="onCreateOrder"
    />
  </div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import DataTable from '@/components/common/DataTable.vue';
import MarcTable from '@/modules/order/components/MarcTable.vue';
import BibSearchPanel from '@/modules/order/components/BibSearchPanel.vue';
import BibDetailDrawer from '@/modules/order/components/BibDetailDrawer.vue';
import BibJoinOrderModal from '@/modules/order/components/BibJoinOrderModal.vue';
import BibCreateOrderModal from '@/modules/order/components/BibCreateOrderModal.vue';
import { createDefaultBibSearch, applyBibSearchFilter } from '@/modules/order/data/bib-search';
import {
  bibRows,
  DEFAULT_BIB_COLUMNS,
  buildMarcDetailFields,
  getRelatedOrderLines,
  summarizeRelatedOrderFlow,
  getJoinOrderCandidates,
  getHoldingRecordsForBib,
  getPhysicalItemsForBib
} from '@/modules/order/data/bib';

defineOptions({ name: 'BibQueryView' });

const router = useRouter();

const allRows = ref([...bibRows]);
const filteredRows = ref([]);
const search = ref(createDefaultBibSearch());
const selectedIds = ref([]);
const selectedBib = ref(null);
const page = ref(1);
const pageSize = ref(5);
const activeItemTab = ref('related-order');
const showColumnSettings = ref(false);
const columnConfig = ref(DEFAULT_BIB_COLUMNS.map(col => ({ ...col })));
const detailOpen = ref(false);
const detailRow = ref(null);
const joinOrderOpen = ref(false);
const joinOrderCandidates = ref([]);
const createOrderOpen = ref(false);
const createOrderBib = ref(null);
const activeHoldingId = ref('');
const selectedPhysicalIds = ref([]);

const physicalToolbarButtons = [
  '新建馆藏', '关联馆藏', '取消关联馆藏', '编辑单件索书号',
  '批量新增', '批量编辑', '移动单件', '新增单件'
];

const itemTabs = [
  { key: 'physical', label: '实体单件', countKey: 'physical' },
  { key: 'catalog', label: '编目数据查看' },
  { key: 'related-order', label: '关联订单行', countKey: 'related' }
];

const relatedOrderColumns = [
  '序号', '订单号', '馆址', '订单行号', '正题名', '资源标识', '载体', '作者', '出版社', '出版时间',
  '定价', '币种', '套内册数', '套数', '行状态', '验收状态', '结算状态', '发订时间'
];

const configurableColumns = computed(() => columnConfig.value.filter(col => col.key !== 'actions'));
const visibleColumns = computed(() => columnConfig.value.filter(col => col.visible));
const columnSelectAll = computed({
  get: () => configurableColumns.value.every(col => col.visible),
  set: () => {}
});

const pagedRows = computed(() => {
  const start = (page.value - 1) * pageSize.value;
  return filteredRows.value.slice(start, start + pageSize.value).map((row, index) => ({
    ...row,
    no: start + index + 1
  }));
});

onMounted(() => {
  filterRows();
  if (filteredRows.value.length) selectBib(filteredRows.value[0]);
});

const relatedLines = computed(() => {
  if (!selectedBib.value) return [];
  return getRelatedOrderLines(selectedBib.value.bibRecordNo);
});

const flowStats = computed(() => summarizeRelatedOrderFlow(relatedLines.value));

const catalogFields = computed(() => buildMarcDetailFields(selectedBib.value));

const holdingRecords = computed(() => {
  if (!selectedBib.value) return [];
  return getHoldingRecordsForBib(selectedBib.value.bibRecordNo);
});

const physicalItems = computed(() => {
  if (!selectedBib.value) return [];
  return getPhysicalItemsForBib(selectedBib.value.bibRecordNo, activeHoldingId.value);
});

const tabCounts = computed(() => ({
  physical: selectedBib.value
    ? getPhysicalItemsForBib(selectedBib.value.bibRecordNo).length
    : 0,
  related: relatedLines.value.length
}));

watch(selectedIds, ids => {
  if (ids.length === 1) {
    const row = allRows.value.find(r => r.id === ids[0]);
    if (row) {
      selectedBib.value = row;
      activeHoldingId.value = '';
      selectedPhysicalIds.value = [];
    }
  }
});

function holdingStatusClass(status) {
  if (status === '在馆') return 'text-green-600';
  if (status === '借出') return 'text-amber-600';
  if (status === '加工中') return 'text-blue-600';
  return 'text-gray-600';
}

function toggleAllPhysicalItems(event) {
  selectedPhysicalIds.value = event.target.checked
    ? physicalItems.value.map(item => item.id)
    : [];
}

function filterRows() {
  filteredRows.value = applyBibSearchFilter(allRows.value, search.value);
  page.value = 1;
  if (filteredRows.value.length) {
    const stillSelected = filteredRows.value.find(r => r.id === selectedIds.value[0]);
    if (!stillSelected) selectBib(filteredRows.value[0]);
  } else {
    selectedBib.value = null;
    selectedIds.value = [];
  }
}

function resetSearch() {
  search.value = createDefaultBibSearch();
  filteredRows.value = [...allRows.value];
  page.value = 1;
  selectedBib.value = null;
  selectedIds.value = [];
}

function selectBib(row) {
  selectedBib.value = row;
  selectedIds.value = [row.id];
  activeHoldingId.value = '';
  selectedPhysicalIds.value = [];
}

function openDetail(row) {
  detailRow.value = row;
  detailOpen.value = true;
}

function resetColumns() {
  columnConfig.value = DEFAULT_BIB_COLUMNS.map(col => ({ ...col }));
}

function toggleAllColumns(event) {
  const checked = event.target.checked;
  columnConfig.value.forEach(col => {
    if (col.key !== 'actions') col.visible = checked;
  });
}

function openJoinOrder() {
  if (!selectedBib.value) {
    window.alert('请先选中书目');
    return;
  }
  const candidates = getJoinOrderCandidates(selectedBib.value);
  if (candidates === null) {
    window.alert('无法根据当前书目 MARC 类型匹配订单资源类型与语种');
    return;
  }
  joinOrderCandidates.value = candidates;
  joinOrderOpen.value = true;
}

function onJoinOrder(payload) {
  window.alert(`已为 ${payload.siteRows.length} 个订单加入书目（原型演示）`);
}

function openCreateOrder(bibRow) {
  if (!bibRow) {
    window.alert('请先选中书目');
    return;
  }
  createOrderBib.value = bibRow;
  createOrderOpen.value = true;
}

function onCreateOrder() {
  createOrderOpen.value = false;
  createOrderBib.value = null;
}

function alertDemo(action) {
  window.alert(`${action}功能为原型演示`);
}
</script>
