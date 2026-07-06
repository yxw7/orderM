<template>
  <Teleport to="body">
    <div
      v-if="open"
      class="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-4"
      @click.self="emit('close')"
    >
      <div class="bg-white rounded-lg shadow-xl flex flex-col w-full max-w-5xl max-h-[90vh]" @click.stop>
        <div class="flex items-center justify-between px-6 py-4 border-b shrink-0">
          <h2 class="text-base font-medium text-gray-800">加入订单</h2>
          <button type="button" class="text-gray-400 text-xl leading-none hover:text-gray-600" @click="emit('close')">&times;</button>
        </div>

        <div class="px-6 py-5 overflow-y-auto flex-1 min-h-0 space-y-4">
          <!-- 上：检索 + 待发订订单列表 -->
          <div class="flex flex-wrap items-end gap-3">
            <div class="flex items-center gap-2">
              <label class="text-sm text-gray-600 w-16 text-right shrink-0">订单号</label>
              <input
                v-model="search.orderId"
                placeholder="模糊查询"
                class="bib-join-order-search-control border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-sky-500"
              >
            </div>
            <div class="flex items-center gap-2">
              <label class="text-sm text-gray-600 w-16 text-right shrink-0">采选方式</label>
              <select
                v-model="search.method"
                class="bib-join-order-search-control border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-sky-500"
              >
                <option v-for="opt in methodOptions" :key="opt" :value="opt">{{ opt }}</option>
              </select>
            </div>
            <div class="flex items-center gap-2">
              <label class="text-sm text-gray-600 w-16 text-right shrink-0">供应商</label>
              <select
                v-model="search.supplier"
                class="bib-join-order-search-control border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-sky-500"
              >
                <option v-for="opt in supplierOptions" :key="opt" :value="opt">{{ opt }}</option>
              </select>
            </div>
            <div class="flex items-center gap-2 ml-auto shrink-0">
              <button type="button" class="px-4 py-2 text-sm rounded bg-sky-600 text-white hover:bg-sky-700" @click="applySearch">检索</button>
              <button type="button" class="px-4 py-2 text-sm rounded border border-gray-300 text-gray-600 hover:bg-gray-50" @click="resetSearch">重置</button>
            </div>
          </div>

          <div class="border border-gray-200 rounded overflow-x-auto max-h-56 overflow-y-auto">
            <table class="w-full text-sm min-w-[1200px]">
              <thead class="bg-gray-50 border-b sticky top-0 z-10">
                <tr>
                  <th class="px-3 py-2 w-10" />
                  <th class="px-3 py-2 text-left text-gray-600">订单号</th>
                  <th class="px-3 py-2 text-left text-gray-600">订户</th>
                  <th class="px-3 py-2 text-left text-gray-600">馆址</th>
                  <th class="px-3 py-2 text-left text-gray-600">采选方式</th>
                  <th class="px-3 py-2 text-left text-gray-600">供应商</th>
                  <th class="px-3 py-2 text-left text-gray-600 min-w-[140px]">预算名称</th>
                  <th class="px-3 py-2 text-left text-gray-600">折扣</th>
                  <th class="px-3 py-2 text-left text-gray-600">发订状态</th>
                  <th class="px-3 py-2 text-left text-gray-600">创建时间</th>
                </tr>
              </thead>
              <tbody class="divide-y">
                <tr v-if="!displayOrders.length">
                  <td colspan="10" class="px-3 py-8 text-center text-gray-400">{{ emptyText }}</td>
                </tr>
                <tr
                  v-for="order in displayOrders"
                  :key="order.orderId"
                  class="cursor-pointer"
                  :class="selectedIds.has(order.orderId) ? 'bg-yellow-100' : 'hover:bg-gray-50'"
                  @click="toggleOrder(order.orderId)"
                >
                  <td class="px-3 py-2" @click.stop>
                    <input type="checkbox" class="rounded text-sky-600" :checked="selectedIds.has(order.orderId)" @change="toggleOrder(order.orderId)">
                  </td>
                  <td class="px-3 py-2 whitespace-nowrap">{{ order.orderId }}</td>
                  <td class="px-3 py-2">{{ order.subscriber }}</td>
                  <td class="px-3 py-2">{{ order.site }}</td>
                  <td class="px-3 py-2">{{ order.method }}</td>
                  <td class="px-3 py-2">{{ order.supplier }}</td>
                  <td class="px-3 py-2 max-w-[180px] truncate" :title="order.budget">{{ order.budget }}</td>
                  <td class="px-3 py-2">{{ order.discount }}</td>
                  <td class="px-3 py-2">{{ statusLabel(order.orderStatus) }}</td>
                  <td class="px-3 py-2 whitespace-nowrap">{{ order.createTime }}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- 中：馆址分配 -->
          <div class="border-t border-gray-200" />
          <div class="flex items-start gap-3">
            <label class="text-sm text-gray-600 w-28 text-right pt-2 shrink-0"><span class="text-red-500">*</span> 馆址</label>
            <div class="flex-1 space-y-3">
              <p v-if="!siteRows.length" class="text-sm text-gray-400 py-2">请先在上方的列表中选择订单</p>
              <div v-for="row in siteRows" :key="row.orderId" class="flex items-start gap-3">
                <div class="flex-1 min-w-0">
                  <input type="text" :value="row.site" readonly class="w-full border border-gray-200 rounded px-3 py-2 text-sm bg-gray-50">
                  <p class="mt-1 text-xs text-gray-400">{{ row.orderId }}</p>
                </div>
                <input v-model="row.sets" type="number" min="0" placeholder="套数" class="w-28 shrink-0 border border-gray-300 rounded px-3 py-2 text-sm">
              </div>
            </div>
          </div>

          <!-- 下：币种 / 定价 / 套内册数 / 备注 -->
          <div class="border-t border-gray-200" />
          <div class="flex items-start gap-3">
            <label class="text-sm text-gray-600 w-28 text-right pt-2 shrink-0"><span class="text-red-500">*</span> 币种</label>
            <select v-model="form.currency" class="flex-1 border border-gray-300 rounded px-3 py-2 text-sm">
              <option value="">请选择</option>
              <option value="CNY">人民币</option>
              <option value="USD">美元</option>
              <option value="EUR">欧元</option>
            </select>
          </div>
          <div class="flex items-start gap-3">
            <label class="text-sm text-gray-600 w-28 text-right pt-2 shrink-0"><span class="text-red-500">*</span> 定价</label>
            <input v-model="form.price" placeholder="请输入" class="flex-1 border border-gray-300 rounded px-3 py-2 text-sm">
          </div>
          <div class="flex items-start gap-3">
            <label class="text-sm text-gray-600 w-28 text-right pt-2 shrink-0"><span class="text-red-500">*</span> 套内册数</label>
            <input v-model="form.copiesInSet" type="number" min="1" placeholder="套内册数" class="flex-1 border border-gray-300 rounded px-3 py-2 text-sm">
          </div>
          <div class="flex items-start gap-3">
            <label class="text-sm text-gray-600 w-28 text-right pt-2 shrink-0">备注</label>
            <textarea v-model="form.remark" rows="3" placeholder="请输入" class="flex-1 border border-gray-300 rounded px-3 py-2 text-sm resize-none" />
          </div>
        </div>

        <div class="flex justify-end gap-3 px-6 py-4 border-t bg-gray-50 rounded-b-lg shrink-0">
          <button type="button" class="px-5 py-1.5 text-sm border border-gray-300 rounded text-gray-600 hover:bg-gray-50" @click="emit('close')">取消</button>
          <button type="button" class="px-5 py-1.5 text-sm bg-sky-600 text-white rounded hover:bg-sky-700" @click="submit">确定</button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { computed, onUnmounted, reactive, ref, watch } from 'vue';
import { ACQUISITION_METHOD_FILTER_OPTIONS } from '@/constants/acquisition-methods';
import { ORDER_STATUS_LABELS } from '@/modules/order/data/bib';
import { loadJoinOrderFormCache, saveJoinOrderFormCache } from '@/modules/order/data/bib-order-form-cache';

const props = defineProps({
  open: { type: Boolean, default: false },
  orders: { type: Array, default: () => [] }
});

const emit = defineEmits(['close', 'confirm']);

const methodOptions = ACQUISITION_METHOD_FILTER_OPTIONS;

const search = reactive({ orderId: '', method: '全部', supplier: '全部' });
const activeSearch = reactive({ orderId: '', method: '全部', supplier: '全部' });
const selectedIds = ref(new Set());
const siteRows = ref([]);
const form = reactive({ currency: 'CNY', price: '', copiesInSet: '1', remark: '' });

/** 供应商下拉选项：全部 + 当前列表中出现过的供应商 */
const supplierOptions = computed(() => {
  const names = [...new Set(props.orders.map(order => order.supplier).filter(Boolean))];
  return ['全部', ...names];
});

/** 按创建时间倒序排列待发订订单 */
const displayOrders = computed(() => {
  const filtered = props.orders.filter(order => {
    const idKey = activeSearch.orderId.trim().toLowerCase();
    if (idKey && !order.orderId.toLowerCase().includes(idKey)) return false;
    if (activeSearch.method !== '全部' && order.method !== activeSearch.method) return false;
    if (activeSearch.supplier !== '全部' && order.supplier !== activeSearch.supplier) return false;
    return true;
  });
  return filtered.sort((a, b) => String(b.createTime || '').localeCompare(String(a.createTime || '')));
});

const emptyText = computed(() => {
  if (!props.orders.length) return '暂无匹配的待发订订单';
  return '未找到符合条件的订单';
});

watch(() => props.open, val => {
  document.body.style.overflow = val ? 'hidden' : '';
  if (val) {
    restoreFromCache();
  } else {
    persistCache();
  }
});

/**
 * 从缓存恢复上次输入与选择
 */
function restoreFromCache() {
  const cached = loadJoinOrderFormCache();
  const defaultSearch = { orderId: '', method: '全部', supplier: '全部' };

  if (!cached) {
    Object.assign(search, defaultSearch);
    Object.assign(activeSearch, defaultSearch);
    selectedIds.value = new Set();
    siteRows.value = [];
    form.currency = 'CNY';
    form.price = '';
    form.copiesInSet = '1';
    form.remark = '';
    return;
  }

  Object.assign(search, cached.search || defaultSearch);
  Object.assign(activeSearch, cached.activeSearch || cached.search || defaultSearch);

  const validOrderIds = new Set(props.orders.map(order => order.orderId));
  const cachedIds = (cached.selectedOrderIds || []).filter(id => validOrderIds.has(id));
  selectedIds.value = new Set(cachedIds);

  form.currency = cached.form?.currency ?? 'CNY';
  form.price = cached.form?.price ?? '';
  form.copiesInSet = cached.form?.copiesInSet ?? '1';
  form.remark = cached.form?.remark ?? '';

  rebuildSiteRows(cached.siteSetsByOrderId || {});
}

/**
 * 按当前勾选订单重建馆址分配行
 * @param {Record<string, string>} [setsByOrderId]
 */
function rebuildSiteRows(setsByOrderId = {}) {
  siteRows.value = props.orders
    .filter(order => selectedIds.value.has(order.orderId))
    .sort((a, b) => String(b.createTime || '').localeCompare(String(a.createTime || '')))
    .map(order => ({
      orderId: order.orderId,
      site: order.site,
      sets: setsByOrderId[order.orderId] ?? '1'
    }));
}

/** 缓存当前表单与选择 */
function persistCache() {
  saveJoinOrderFormCache({
    search: { ...search },
    activeSearch: { ...activeSearch },
    selectedOrderIds: [...selectedIds.value],
    siteSetsByOrderId: Object.fromEntries(siteRows.value.map(row => [row.orderId, row.sets])),
    form: { ...form }
  });
}

onUnmounted(() => {
  document.body.style.overflow = '';
});

/**
 * 发订状态展示文案
 * @param {string} status
 * @returns {string}
 */
function statusLabel(status) {
  return ORDER_STATUS_LABELS[status] || status;
}

/**
 * 切换订单勾选并同步馆址分配行
 * @param {string} orderId
 */
function toggleOrder(orderId) {
  const next = new Set(selectedIds.value);
  if (next.has(orderId)) next.delete(orderId);
  else next.add(orderId);
  selectedIds.value = next;
  const setsByOrderId = Object.fromEntries(siteRows.value.map(row => [row.orderId, row.sets]));
  rebuildSiteRows(setsByOrderId);
}

/** 应用检索条件 */
function applySearch() {
  activeSearch.orderId = search.orderId;
  activeSearch.method = search.method;
  activeSearch.supplier = search.supplier;
}

/** 重置检索条件 */
function resetSearch() {
  search.orderId = '';
  search.method = '全部';
  search.supplier = '全部';
  activeSearch.orderId = '';
  activeSearch.method = '全部';
  activeSearch.supplier = '全部';
}

/** 提交加入订单 */
function submit() {
  if (!siteRows.value.length) return window.alert('请至少选择一个订单');
  if (!form.currency || !form.price || !form.copiesInSet) return window.alert('请填写必填项');
  if (siteRows.value.some(row => row.sets === '' || row.sets === null || Number(row.sets) < 0)) {
    return window.alert('请为每个馆址填写有效套数');
  }

  const activeRows = siteRows.value.filter(row => Number(row.sets) > 0);
  if (!activeRows.length) return window.alert('请至少为一个馆址填写大于0的套数');

  persistCache();
  emit('confirm', { siteRows: activeRows, form: { ...form } });
  emit('close');
}
</script>

<style scoped>
.bib-join-order-search-control {
  width: 11rem;
}
</style>
