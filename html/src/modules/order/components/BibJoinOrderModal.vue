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
              <label class="text-sm text-gray-600 w-16 text-right shrink-0">订单名称</label>
              <input
                v-model="search.orderName"
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
            <table class="w-full text-sm min-w-[1540px]">
              <thead class="bg-gray-50 border-b sticky top-0 z-10">
                <tr>
                  <th class="px-3 py-2 w-10" />
                  <th class="px-3 py-2 text-left text-gray-600">订单号</th>
                  <th class="px-3 py-2 text-left text-gray-600 min-w-[140px]">订单名称</th>
                  <th class="px-3 py-2 text-left text-gray-600">订户</th>
                  <th class="px-3 py-2 text-left text-gray-600">馆址</th>
                  <th class="bib-join-order-col-method px-3 py-2 text-left text-gray-600">采选方式</th>
                  <th class="bib-join-order-col-resource-type px-3 py-2 text-left text-gray-600">资源类型</th>
                  <th class="bib-join-order-col-language px-3 py-2 text-left text-gray-600">语种</th>
                  <th class="px-3 py-2 text-left text-gray-600">供应商</th>
                  <th class="px-3 py-2 text-left text-gray-600 min-w-[140px]">预算名称</th>
                  <th class="px-3 py-2 text-left text-gray-600">折扣</th>
                  <th class="px-3 py-2 text-left text-gray-600">发订状态</th>
                  <th class="px-3 py-2 text-left text-gray-600">创建时间</th>
                </tr>
              </thead>
              <tbody class="divide-y">
                <tr v-if="!displayOrders.length">
                  <td colspan="13" class="px-3 py-8 text-center text-gray-400">{{ emptyText }}</td>
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
                  <td class="px-3 py-2 max-w-[180px] truncate" :title="order.orderName">{{ order.orderName || '—' }}</td>
                  <td class="px-3 py-2">{{ order.subscriber }}</td>
                  <td class="px-3 py-2">{{ order.site }}</td>
                  <td class="bib-join-order-col-method px-3 py-2 whitespace-nowrap">{{ order.method }}</td>
                  <td class="bib-join-order-col-resource-type px-3 py-2 whitespace-nowrap">{{ order.resourceType }}</td>
                  <td class="bib-join-order-col-language px-3 py-2 whitespace-nowrap">{{ order.language }}</td>
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
          <div class="bib-join-order-form-row flex items-start gap-3">
            <div class="bib-join-order-form-label shrink-0" aria-hidden="true" />
            <div class="bib-join-order-form-body flex-1 min-w-0 flex items-start gap-2">
              <label class="bib-join-order-inline-label text-sm text-gray-600 shrink-0 pt-2">
                <span class="text-red-500">*</span> 馆址
              </label>
              <div class="flex-1 min-w-0 space-y-3">
                <p v-if="!siteRows.length" class="text-sm text-gray-400 py-2">请先在上方的列表中选择订单</p>
                <div v-for="row in siteRows" :key="row.orderId" class="flex items-start gap-3">
                  <div class="flex-1 min-w-0">
                    <input type="text" :value="row.site" readonly class="w-full border border-gray-200 rounded px-3 py-2 text-sm bg-gray-50">
                    <p class="mt-1 text-xs text-gray-400">{{ row.orderId }}</p>
                  </div>
                  <input
                    v-model="row.sets"
                    type="text"
                    inputmode="numeric"
                    placeholder="套数"
                    class="w-28 shrink-0 border border-gray-300 rounded px-3 py-2 text-sm"
                    @input="onSetsInput(row, $event)"
                  >
                </div>
              </div>
            </div>
          </div>

          <!-- 下：币种 / 定价 / 套内册数 / 备注 -->
          <div class="border-t border-gray-200" />
          <div class="bib-join-order-form-row flex items-center gap-3">
            <div class="bib-join-order-form-label shrink-0" aria-hidden="true" />
            <div class="bib-join-order-form-body bib-join-order-price-fields flex-1 min-w-0">
              <div class="bib-join-order-price-field">
                <label class="bib-join-order-inline-label text-sm text-gray-600 shrink-0">
                  <span v-if="currencyPriceRequired" class="text-red-500">*</span> 币种
                </label>
                <select v-model="form.currency" class="bib-join-order-price-control border border-gray-300 rounded px-3 py-2 text-sm">
                  <option value="">请选择</option>
                  <option v-for="opt in currencyOptions" :key="opt.code" :value="opt.code">{{ opt.code }}</option>
                </select>
              </div>
              <div class="bib-join-order-price-field">
                <label class="bib-join-order-inline-label text-sm text-gray-600 shrink-0">
                  <span v-if="currencyPriceRequired" class="text-red-500">*</span> 定价
                </label>
                <input
                  v-model="form.price"
                  placeholder="请输入"
                  class="bib-join-order-price-control border border-gray-300 rounded px-3 py-2 text-sm"
                  @input="onPriceInput"
                >
              </div>
              <div class="bib-join-order-price-field">
                <label class="bib-join-order-inline-label text-sm text-gray-600 shrink-0">套内册数</label>
                <input
                  v-model="form.copiesInSet"
                  type="text"
                  inputmode="numeric"
                  placeholder="套内册数"
                  class="bib-join-order-price-control border border-gray-300 rounded px-3 py-2 text-sm"
                  @input="onCopiesInSetInput"
                >
              </div>
            </div>
          </div>
          <div class="bib-join-order-form-row flex items-start gap-3">
            <div class="bib-join-order-form-label shrink-0" aria-hidden="true" />
            <div class="bib-join-order-form-body flex-1 min-w-0 flex items-start gap-2">
              <label class="bib-join-order-inline-label text-sm text-gray-600 shrink-0 pt-2">备注</label>
              <textarea
                v-model="form.remark"
                rows="3"
                maxlength="500"
                placeholder="请输入"
                class="flex-1 min-w-0 border border-gray-300 rounded px-3 py-2 text-sm resize-none"
              />
            </div>
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
import { getActiveCurrencyOptions } from '@/modules/currency/data/currency-manage';
import { ORDER_STATUS_LABELS } from '@/modules/order/data/bib';
import { BIB_JOIN_ORDER_METHOD_FILTER_OPTIONS } from '@/modules/order/data/bib-create-order-options';
import { loadJoinOrderFormCache, saveJoinOrderFormCache } from '@/modules/order/data/bib-order-form-cache';
import {
  ORDER_REMARK_MAX_LENGTH,
  JOIN_ORDER_SAME_TYPE_LANGUAGE_MESSAGE,
  isForeignPaperBookOrder,
  isValidNonNegativeInteger,
  isValidPositiveInteger,
  sanitizeDecimalInput,
  sanitizeNonNegativeIntegerInput,
  sanitizePositiveIntegerInput,
  validateOptionalOrderPrice,
  validateOrderPrice,
  validateSelectedOrdersSameResourceAndLanguage
} from '@/modules/order/data/order-field-input';

const props = defineProps({
  open: { type: Boolean, default: false },
  orders: { type: Array, default: () => [] }
});

const emit = defineEmits(['close', 'confirm']);

const methodOptions = BIB_JOIN_ORDER_METHOD_FILTER_OPTIONS;

/** 币种下拉：货币信息中状态为使用中的货币代码 */
const currencyOptions = computed(() => getActiveCurrencyOptions());

/**
 * 默认币种：优先 CNY（若仍为使用中），否则取第一项使用中货币代码
 * @returns {string}
 */
function getDefaultCurrencyCode() {
  const codes = currencyOptions.value.map(item => item.code);
  if (codes.includes('CNY')) return 'CNY';
  return codes[0] || '';
}

/**
 * 若币种不在使用中列表则回退默认值
 * @param {string} [code]
 * @returns {string}
 */
function resolveActiveCurrencyCode(code) {
  const codes = currencyOptions.value.map(item => item.code);
  if (code && codes.includes(code)) return code;
  return getDefaultCurrencyCode();
}

const search = reactive({ orderName: '', method: '全部', supplier: '全部' });
const activeSearch = reactive({ orderName: '', method: '全部', supplier: '全部' });
const selectedIds = ref(new Set());
const siteRows = ref([]);
const form = reactive({ currency: getDefaultCurrencyCode(), price: '', copiesInSet: '1', remark: '' });

/** 供应商下拉选项：全部 + 当前列表中出现过的供应商 */
const supplierOptions = computed(() => {
  const names = [...new Set(props.orders.map(order => order.supplier).filter(Boolean))];
  return ['全部', ...names];
});

/** 按创建时间倒序排列待发订订单 */
const displayOrders = computed(() => {
  const filtered = props.orders.filter(order => {
    const nameKey = activeSearch.orderName.trim().toLowerCase();
    if (nameKey && !String(order.orderName || '').toLowerCase().includes(nameKey)) return false;
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

/** 当前已勾选的候选订单 */
const selectedOrders = computed(() =>
  props.orders.filter(order => selectedIds.value.has(order.orderId))
);

/** 纸质书 · 外文时币种与定价必填 */
const currencyPriceRequired = computed(() => {
  const first = selectedOrders.value[0];
  if (!first) return false;
  return isForeignPaperBookOrder(first.resourceType, first.language);
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
  const defaultSearch = { orderName: '', method: '全部', supplier: '全部' };

  if (!cached) {
    Object.assign(search, defaultSearch);
    Object.assign(activeSearch, defaultSearch);
    selectedIds.value = new Set();
    siteRows.value = [];
    form.currency = getDefaultCurrencyCode();
    form.price = '';
    form.copiesInSet = '1';
    form.remark = '';
    return;
  }

  Object.assign(search, pickJoinOrderSearch(cached.search, defaultSearch));
  Object.assign(activeSearch, pickJoinOrderSearch(cached.activeSearch || cached.search, defaultSearch));
  if (!BIB_JOIN_ORDER_METHOD_FILTER_OPTIONS.includes(search.method)) {
    search.method = '全部';
  }
  if (!BIB_JOIN_ORDER_METHOD_FILTER_OPTIONS.includes(activeSearch.method)) {
    activeSearch.method = '全部';
  }

  const validOrderIds = new Set(props.orders.map(order => order.orderId));
  const cachedIds = (cached.selectedOrderIds || []).filter(id => validOrderIds.has(id));
  selectedIds.value = new Set(cachedIds);

  form.currency = resolveActiveCurrencyCode(cached.form?.currency);
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
  const order = props.orders.find(item => item.orderId === orderId);
  if (!order) return;

  const next = new Set(selectedIds.value);
  if (next.has(orderId)) {
    next.delete(orderId);
  } else {
    const currentSelected = props.orders.filter(item => next.has(item.orderId));
    if (currentSelected.length) {
      const first = currentSelected[0];
      if (order.resourceType !== first.resourceType || order.language !== first.language) {
        window.alert(JOIN_ORDER_SAME_TYPE_LANGUAGE_MESSAGE);
        return;
      }
    }
    next.add(orderId);
  }
  selectedIds.value = next;
  const setsByOrderId = Object.fromEntries(siteRows.value.map(row => [row.orderId, row.sets]));
  rebuildSiteRows(setsByOrderId);
}

/**
 * 归一化检索条件：忽略旧缓存中的订单号字段
 * @param {Record<string, unknown>} [source]
 * @param {{ orderName: string, method: string, supplier: string }} fallback
 */
function pickJoinOrderSearch(source, fallback) {
  return {
    orderName: source?.orderName != null ? String(source.orderName) : fallback.orderName,
    method: source?.method != null ? String(source.method) : fallback.method,
    supplier: source?.supplier != null ? String(source.supplier) : fallback.supplier
  };
}

/** 应用检索条件 */
function applySearch() {
  activeSearch.orderName = search.orderName;
  activeSearch.method = search.method;
  activeSearch.supplier = search.supplier;
}

/** 重置检索条件 */
function resetSearch() {
  search.orderName = '';
  search.method = '全部';
  search.supplier = '全部';
  activeSearch.orderName = '';
  activeSearch.method = '全部';
  activeSearch.supplier = '全部';
}

/**
 * 套数输入：仅保留大于等于 0 的整数文本
 * @param {{ sets: string }} row
 * @param {Event} event
 */
function onSetsInput(row, event) {
  row.sets = sanitizeNonNegativeIntegerInput(event.target.value);
}

/**
 * 套内册数输入：仅保留正整数文本
 * @param {Event} event
 */
function onCopiesInSetInput(event) {
  form.copiesInSet = sanitizePositiveIntegerInput(event.target.value);
}

/**
 * 定价输入：限制为最多两位小数的数值文本
 * @param {Event} event
 */
function onPriceInput(event) {
  form.price = sanitizeDecimalInput(event.target.value);
}

/** 提交加入订单 */
function submit() {
  if (!siteRows.value.length) return window.alert('请至少选择一个订单');

  const selected = selectedOrders.value;
  const sameTypeLanguageResult = validateSelectedOrdersSameResourceAndLanguage(selected);
  if (!sameTypeLanguageResult.valid) {
    return window.alert(sameTypeLanguageResult.message);
  }

  if (currencyPriceRequired.value) {
    if (!form.currency) return window.alert('请选择币种');
    const priceResult = validateOrderPrice(form.price);
    if (!priceResult.valid) return window.alert(priceResult.message);
  } else {
    const priceResult = validateOptionalOrderPrice(form.price);
    if (!priceResult.valid) return window.alert(priceResult.message);
  }

  if (form.copiesInSet && !isValidPositiveInteger(form.copiesInSet)) {
    return window.alert('套内册数须为正整数');
  }
  if (siteRows.value.some(row => !isValidNonNegativeInteger(row.sets))) {
    return window.alert('请为每个馆址填写有效套数');
  }
  const activeRows = siteRows.value.filter(row => Number(row.sets) > 0);
  if (!activeRows.length) return window.alert('请至少为一个馆址填写大于0的套数');
  if (form.remark.length > ORDER_REMARK_MAX_LENGTH) {
    return window.alert(`备注最多${ORDER_REMARK_MAX_LENGTH}个字符`);
  }

  persistCache();
  emit('confirm', { siteRows: activeRows, form: { ...form } });
  emit('close');
}
</script>

<style scoped>
.bib-join-order-search-control {
  width: 11rem;
}

.bib-join-order-col-method {
  min-width: 6.5rem;
}

.bib-join-order-col-resource-type {
  min-width: 6rem;
}

.bib-join-order-col-language {
  min-width: 4.5rem;
}

/** 三行统一左侧等宽占位（与币种行对齐） */
.bib-join-order-form-label {
  width: 1.5rem;
  flex-shrink: 0;
}

.bib-join-order-form-body {
  max-width: 100%;
}

/** 币种 / 定价 / 套内册数：内容区内三列等分 */
.bib-join-order-price-fields {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.75rem;
}

.bib-join-order-price-field {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  min-width: 0;
}

.bib-join-order-price-control {
  flex: 1;
  min-width: 0;
  width: 100%;
}

/** 币种 / 定价 / 套内册数行内字段标签 */
.bib-join-order-inline-label {
  width: 4.5rem;
  flex-shrink: 0;
  text-align: left;
}
</style>
