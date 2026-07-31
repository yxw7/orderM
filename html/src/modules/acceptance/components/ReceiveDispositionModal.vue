<template>
  <div
    v-if="open"
    class="fixed inset-0 z-[80] flex items-center justify-center bg-black/40 p-4"
    @click.self="emit('close')"
  >
    <div
      class="bg-white rounded-lg shadow-xl w-full max-w-4xl flex flex-col h-[min(90vh,720px)]"
      @click.stop
    >
      <div class="flex items-center justify-between px-6 py-4 border-b shrink-0">
        <h2 class="text-base font-medium text-gray-800">
          逐条收货/换货/退货
          <span v-if="row?.orderLine" class="text-gray-500 font-normal">— {{ row.orderLine }}</span>
        </h2>
        <button type="button" class="text-gray-400 text-xl leading-none" @click="emit('close')">&times;</button>
      </div>

      <div class="px-6 py-3 bg-gray-50 border-b shrink-0 space-y-2 text-sm text-gray-700">
        <div class="flex flex-wrap gap-x-8 gap-y-1">
          <span>发订套数：<span class="text-gray-900">{{ summary.ordered }}</span></span>
          <span>已收货套数：<span class="text-gray-900">{{ summary.received }}</span></span>
          <span>已换货套数：<span class="text-gray-900">{{ summary.exchange }}</span></span>
          <span>已退货套数：<span class="text-gray-900">{{ summary.returned }}</span></span>
          <span>待收货套数：<span class="text-gray-900 font-medium">{{ summary.pending }}</span></span>
        </div>
        <div class="flex items-center gap-1 min-w-0">
          <span class="shrink-0">订单行备注：</span>
          <div class="min-w-0 flex-1" @mouseenter="updateRemarkOverflow">
            <HoverTooltip :text="remarkTooltipText" class="!block w-full min-w-0">
              <span ref="remarkEl" class="block truncate text-gray-900">{{ orderLineRemark }}</span>
            </HoverTooltip>
          </div>
        </div>
      </div>

      <div class="flex border-b shrink-0 px-4 bg-white">
        <button
          v-for="tab in tabs"
          :key="tab.key"
          type="button"
          class="px-5 py-2.5 text-sm border-b-2 -mb-px transition-colors"
          :class="activeTab === tab.key
            ? `${tab.activeClass} border-current font-medium`
            : 'border-transparent text-gray-500 hover:text-gray-700'"
          @click="activeTab = tab.key"
        >{{ tab.label }}</button>
      </div>

      <div class="flex-1 min-h-0 overflow-y-auto px-6 py-4 space-y-3 text-sm">
        <!-- 收货 -->
        <div v-show="activeTab === 'receive'" class="space-y-3">
          <template v-if="isAv">
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div class="flex items-center gap-2">
                <label class="text-gray-600 w-16 text-right shrink-0">ISBN</label>
                <input v-model="avForm.isbn" type="text" class="flex-1 border border-gray-300 rounded px-2 py-1.5 text-sm">
              </div>
              <div class="flex items-center gap-2">
                <label class="text-gray-600 w-14 text-right shrink-0">ISRC</label>
                <input v-model="avForm.isrc" type="text" class="flex-1 border border-gray-300 rounded px-2 py-1.5 text-sm">
              </div>
              <div class="flex items-center gap-2">
                <label class="text-gray-600 w-16 text-right shrink-0">商品条码</label>
                <input v-model="avForm.barcode" type="text" class="flex-1 border border-gray-300 rounded px-2 py-1.5 text-sm">
              </div>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div class="flex items-center gap-2">
                <label class="text-gray-600 w-16 text-right shrink-0">目录号</label>
                <input v-model="avForm.catalogNo" type="text" class="flex-1 border border-gray-300 rounded px-2 py-1.5 text-sm">
              </div>
              <div class="flex items-center gap-2">
                <label class="text-gray-600 w-14 text-right shrink-0"><span class="text-red-500">*</span> 载体</label>
                <select v-model="avForm.carrier" class="flex-1 border border-gray-300 rounded px-2 py-1.5 text-sm">
                  <option value="">请选择</option>
                  <option v-for="c in carrierOptions" :key="c" :value="c">{{ c }}</option>
                </select>
              </div>
              <div class="flex items-center gap-2">
                <label class="text-gray-600 w-16 text-right shrink-0">版本/格式</label>
                <input v-model="avForm.format" type="text" class="flex-1 border border-gray-300 rounded px-2 py-1.5 text-sm">
              </div>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div class="sm:col-span-2 flex items-center gap-2">
                <label class="text-gray-600 w-16 text-right shrink-0"><span class="text-red-500">*</span> 题名</label>
                <input v-model="avForm.title" type="text" class="flex-1 border border-gray-300 rounded px-2 py-1.5 text-sm">
              </div>
              <div class="flex items-center gap-2">
                <label class="text-gray-600 w-14 text-right shrink-0">著者</label>
                <input v-model="avForm.author" type="text" class="flex-1 border border-gray-300 rounded px-2 py-1.5 text-sm">
              </div>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div class="flex items-center gap-2">
                <label class="text-gray-600 w-16 text-right shrink-0"><span class="text-red-500">*</span> 码洋</label>
                <input v-model="avForm.price" type="text" class="flex-1 border border-gray-300 rounded px-2 py-1.5 text-sm">
              </div>
              <div class="flex items-center gap-2">
                <label class="text-gray-600 w-14 text-right shrink-0">币种</label>
                <select v-model="avForm.currency" class="flex-1 border border-gray-300 rounded px-2 py-1.5 text-sm">
                  <option v-for="opt in currencyOptions" :key="opt" :value="opt">{{ opt }} - {{ currencyLabel(opt) }}</option>
                </select>
              </div>
              <div class="flex items-center gap-2">
                <label class="text-gray-600 w-16 text-right shrink-0"><span class="text-red-500">*</span> 实洋</label>
                <input v-model="avForm.actualPrice" type="text" class="flex-1 border border-gray-300 rounded px-2 py-1.5 text-sm">
              </div>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div class="flex items-center gap-2">
                <label class="text-gray-600 w-16 text-right shrink-0">彩胶颜色</label>
                <input v-model="avForm.vinylColor" type="text" class="flex-1 border border-gray-300 rounded px-2 py-1.5 text-sm">
              </div>
              <div class="flex items-center gap-2">
                <label class="text-gray-600 w-14 text-right shrink-0">厂牌</label>
                <input v-model="avForm.brand" type="text" class="flex-1 border border-gray-300 rounded px-2 py-1.5 text-sm">
              </div>
              <div class="flex items-center gap-2">
                <label class="text-gray-600 w-16 text-right shrink-0">限量编号</label>
                <input v-model="avForm.limitedNo" type="text" class="flex-1 border border-gray-300 rounded px-2 py-1.5 text-sm">
              </div>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div class="flex items-center gap-2">
                <label class="text-gray-600 w-20 text-right shrink-0"><span class="text-red-500">*</span> 套内件数</label>
                <input v-model="avForm.copies" type="text" class="flex-1 border border-gray-300 rounded px-2 py-1.5 text-sm">
              </div>
              <div class="flex items-center gap-2">
                <label class="text-gray-600 w-16 text-right shrink-0">收货套数</label>
                <input v-model="avForm.receiveSets" type="text" class="flex-1 border border-gray-300 rounded px-2 py-1.5 text-sm">
              </div>
            </div>
            <div class="flex items-start gap-2">
              <label class="text-gray-600 w-16 text-right pt-1.5 shrink-0">收货备注</label>
              <div class="flex-1 relative">
                <textarea v-model="avForm.remark" rows="3" maxlength="500" placeholder="请输入收货备注" class="w-full border border-gray-300 rounded px-2 py-1.5 text-sm resize-none" />
                <span class="absolute bottom-2 right-2 text-xs text-gray-400">{{ avForm.remark.length }}</span>
              </div>
            </div>
          </template>
          <template v-else>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div class="flex items-center gap-2">
                <label class="text-gray-600 w-16 text-right shrink-0">ISBN</label>
                <input v-model="paperForm.isbn" type="text" class="flex-1 border border-gray-300 rounded px-2 py-1.5 text-sm">
              </div>
              <div class="flex items-center gap-2">
                <label class="text-gray-600 w-16 text-right shrink-0">作者</label>
                <input v-model="paperForm.author" type="text" class="flex-1 border border-gray-300 rounded px-2 py-1.5 text-sm">
              </div>
            </div>
            <div class="flex items-center gap-2">
              <label class="text-gray-600 w-16 text-right shrink-0"><span class="text-red-500">*</span> 正题名</label>
              <input v-model="paperForm.title" type="text" class="flex-1 border border-gray-300 rounded px-2 py-1.5 text-sm">
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div class="flex items-center gap-2">
                <label class="text-gray-600 w-16 text-right shrink-0"><span class="text-red-500">*</span> 定价</label>
                <input v-model="paperForm.price" type="text" class="flex-1 border border-gray-300 rounded px-2 py-1.5 text-sm">
              </div>
              <div class="flex items-center gap-2">
                <label class="text-gray-600 w-12 text-right shrink-0">币种</label>
                <select v-model="paperForm.currency" class="flex-1 border border-gray-300 rounded px-2 py-1.5 text-sm">
                  <option v-for="opt in currencyOptions" :key="opt" :value="opt">{{ opt }} - {{ currencyLabel(opt) }}</option>
                </select>
              </div>
              <div class="flex items-center gap-2">
                <label class="text-gray-600 w-16 text-right shrink-0"><span class="text-red-500">*</span> 实洋</label>
                <input v-model="paperForm.actualPrice" type="text" class="flex-1 border border-gray-300 rounded px-2 py-1.5 text-sm">
              </div>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div class="flex items-center gap-2">
                <label class="text-gray-600 w-20 text-right shrink-0"><span class="text-red-500">*</span> 套内册数</label>
                <input v-model="paperForm.volumesPerSet" type="text" class="flex-1 border border-gray-300 rounded px-2 py-1.5 text-sm">
              </div>
              <div class="flex items-center gap-2">
                <label class="text-gray-600 w-16 text-right shrink-0">收货套数</label>
                <input v-model="paperForm.receiveSets" type="text" class="flex-1 border border-gray-300 rounded px-2 py-1.5 text-sm">
              </div>
              <div class="flex items-center gap-2">
                <label class="text-gray-600 w-20 text-right shrink-0">
                  <span v-if="needsBarcodeAllocation" class="text-red-500">*</span> 条码初始号
                </label>
                <input v-model="paperForm.barcodeStart" type="text" class="flex-1 border border-gray-300 rounded px-2 py-1.5 text-sm">
              </div>
            </div>
            <div class="flex items-start gap-2">
              <label class="text-gray-600 w-16 text-right pt-1.5 shrink-0">收货备注</label>
              <textarea
                v-model="paperForm.remark"
                rows="3"
                maxlength="200"
                placeholder="请输入收货备注"
                class="flex-1 border border-gray-300 rounded px-2 py-1.5 text-sm resize-none"
              />
            </div>
          </template>
        </div>

        <!-- 换货 -->
        <div v-show="activeTab === 'exchange'" class="space-y-3 max-w-xl">
          <div class="flex items-center gap-2">
            <label class="text-gray-600 w-20 text-right shrink-0"><span class="text-red-500">*</span> 换货数量</label>
            <input v-model="exchangeForm.exchangeQty" type="text" placeholder="请输入" class="flex-1 border border-gray-300 rounded px-2 py-1.5 text-sm">
          </div>
          <div class="flex items-center gap-2">
            <label class="text-gray-600 w-20 text-right shrink-0"><span class="text-red-500">*</span> 换货原因</label>
            <select v-model="exchangeForm.exchangeReason" class="flex-1 border border-gray-300 rounded px-2 py-1.5 text-sm">
              <option value="">请选择</option>
              <option v-for="opt in EXCHANGE_REASON_OPTIONS" :key="opt" :value="opt">{{ opt }}</option>
            </select>
          </div>
          <div class="flex items-start gap-2">
            <label class="text-gray-600 w-20 text-right pt-1.5 shrink-0">换货备注</label>
            <div class="flex-1 relative">
              <textarea v-model="exchangeForm.remark" rows="4" maxlength="500" placeholder="请输入换货备注" class="w-full border border-gray-300 rounded px-2 py-1.5 text-sm resize-none" />
              <span class="absolute bottom-2 right-2 text-xs text-gray-400">{{ exchangeForm.remark.length }} / 500</span>
            </div>
          </div>
        </div>

        <!-- 退货 -->
        <div v-show="activeTab === 'return'" class="space-y-3 max-w-xl">
          <div class="flex items-center gap-2">
            <label class="text-gray-600 w-20 text-right shrink-0"><span class="text-red-500">*</span> 退货数量</label>
            <input v-model="returnForm.returnQty" type="text" placeholder="请输入" class="flex-1 border border-gray-300 rounded px-2 py-1.5 text-sm">
          </div>
          <div class="flex items-center gap-2">
            <label class="text-gray-600 w-20 text-right shrink-0"><span class="text-red-500">*</span> 退货原因</label>
            <select v-model="returnForm.returnReason" class="flex-1 border border-gray-300 rounded px-2 py-1.5 text-sm">
              <option value="">请选择</option>
              <option v-for="opt in RETURN_REASON_OPTIONS" :key="opt" :value="opt">{{ opt }}</option>
            </select>
          </div>
          <div class="flex items-start gap-2">
            <label class="text-gray-600 w-20 text-right pt-1.5 shrink-0">退货备注</label>
            <div class="flex-1 relative">
              <textarea v-model="returnForm.remark" rows="4" maxlength="500" placeholder="请输入退货备注" class="w-full border border-gray-300 rounded px-2 py-1.5 text-sm resize-none" />
              <span class="absolute bottom-2 right-2 text-xs text-gray-400">{{ returnForm.remark.length }} / 500</span>
            </div>
          </div>
        </div>
      </div>

      <div class="flex items-center justify-end gap-2 px-6 py-3 border-t bg-gray-50 rounded-b-lg shrink-0">
        <button type="button" class="px-5 py-1.5 text-sm border border-gray-300 rounded text-gray-600 hover:bg-gray-50" @click="emit('close')">关闭</button>
        <template v-if="activeTab === 'receive'">
          <button
            v-if="!isAv && needsBarcodeAllocation"
            type="button"
            class="px-4 py-1.5 text-sm rounded bg-amber-500 text-white hover:bg-amber-600"
            @click="onPaperPreview"
          >预览</button>
          <button
            type="button"
            class="px-4 py-1.5 text-sm bg-emerald-500 text-white rounded hover:bg-emerald-600"
            @click="submitReceive"
          >确认收货</button>
        </template>
        <button
          v-else-if="activeTab === 'exchange'"
          type="button"
          class="px-4 py-1.5 text-sm bg-sky-600 text-white rounded hover:bg-sky-700"
          @click="submitExchange"
        >确认换货</button>
        <button
          v-else
          type="button"
          class="px-4 py-1.5 text-sm bg-orange-500 text-white rounded hover:bg-orange-600"
          @click="submitReturn"
        >确认退货</button>
      </div>
    </div>

    <BarcodeAllocatedResultModal
      :open="barcodeResultOpen"
      :result="barcodeResult"
      :auto-close-ms="3000"
      @acknowledge="onBarcodeAcknowledge"
    />
  </div>
</template>

<script setup>
import { computed, nextTick, reactive, ref, watch } from 'vue';
import BarcodeAllocatedResultModal from '@/modules/acceptance/components/BarcodeAllocatedResultModal.vue';
import HoverTooltip from '@/modules/acceptance/components/HoverTooltip.vue';
import {
  EXCHANGE_REASON_OPTIONS,
  RETURN_REASON_OPTIONS,
  RECEIVE_CARRIER_OPTIONS,
  calcBarcodeAllocation,
  isChineseAcceptanceLang,
  resolveReceiveSetSummary
} from '@/modules/acceptance/data/receive-by-item';

const props = defineProps({
  open: { type: Boolean, default: false },
  row: { type: Object, default: null },
  resourceType: { type: String, default: '纸质书' },
  acceptanceLang: { type: String, default: '中文' },
  needsBarcodeAllocation: { type: Boolean, default: false },
  /** 成功提交后由父组件递增，用于清空对应区块 */
  receiveResetKey: { type: Number, default: 0 },
  exchangeResetKey: { type: Number, default: 0 },
  returnResetKey: { type: Number, default: 0 }
});

const emit = defineEmits(['close', 'confirm-receive', 'confirm-exchange', 'confirm-return', 'preview']);

const tabs = [
  { key: 'receive', label: '收货', activeClass: 'text-emerald-600' },
  { key: 'exchange', label: '换货', activeClass: 'text-sky-600' },
  { key: 'return', label: '退货', activeClass: 'text-orange-600' }
];
const activeTab = ref('receive');

const currencyOptions = ['CNY', 'USD', 'EUR', 'GBP', 'JPY', 'HKD'];
const currencyLabels = {
  CNY: '人民币', USD: '美元', EUR: '欧元', GBP: '英镑', JPY: '日元', HKD: '港币'
};
function currencyLabel(code) {
  return currencyLabels[code] || code;
}

const carrierOptions = RECEIVE_CARRIER_OPTIONS.filter(Boolean);
const isAv = computed(() => props.resourceType === '视听资料');
const isForeign = computed(() => !isChineseAcceptanceLang(props.acceptanceLang));

const summary = computed(() => (
  props.row
    ? resolveReceiveSetSummary(props.row)
    : { ordered: '—', received: '—', exchange: '—', returned: '—', pending: '—' }
));

const orderLineRemark = computed(() => {
  const text = props.row?.remarkText;
  return text && String(text).trim() ? String(text).trim() : '—';
});

const remarkEl = ref(null);
const remarkOverflow = ref(false);
const remarkTooltipText = computed(() => (
  orderLineRemark.value !== '—' && remarkOverflow.value ? orderLineRemark.value : ''
));

function updateRemarkOverflow() {
  const el = remarkEl.value;
  remarkOverflow.value = !!(el && el.scrollWidth > el.clientWidth);
}

const paperForm = reactive({
  isbn: '', author: '', title: '',
  price: '', currency: 'CNY', actualPrice: '',
  volumesPerSet: '', receiveSets: '', barcodeStart: '', remark: ''
});

const avForm = reactive({
  isbn: '', isrc: '', barcode: '', catalogNo: '', carrier: '', format: '',
  title: '', author: '', price: '', currency: 'CNY', actualPrice: '',
  vinylColor: '', brand: '', limitedNo: '', copies: '', receiveSets: '', remark: ''
});

const exchangeForm = reactive({ exchangeQty: '', exchangeReason: '', remark: '' });
const returnForm = reactive({ returnQty: '', returnReason: '', remark: '' });

const barcodeResultOpen = ref(false);
const barcodeResult = ref({
  displayType: 'single',
  allocatedRanges: [],
  unallocated: [],
  unallocatedText: '',
  hasEmpty: false
});

function fillPaperFromRow(row) {
  const s = resolveReceiveSetSummary(row);
  paperForm.isbn = row.isbn || '';
  paperForm.author = row.author || '';
  paperForm.title = row.title || '';
  paperForm.volumesPerSet = String(row.copies || '');
  paperForm.receiveSets = String(row.defaultReceiveSets ?? s.pending);
  paperForm.barcodeStart = row.barcodeStart || '';
  paperForm.remark = row.receiveRemark || '';
  if (isForeign.value) {
    paperForm.price = row.originalPrice || row.price || '';
    paperForm.currency = row.currency || 'USD';
    paperForm.actualPrice = row.actualPrice || '';
  } else {
    paperForm.price = row.price || '';
    paperForm.currency = row.currency || 'CNY';
    paperForm.actualPrice = row.actualPrice || row.price || '';
  }
}

function fillAvFromRow(row) {
  const s = resolveReceiveSetSummary(row);
  avForm.isbn = row.isbn || '';
  avForm.isrc = row.isrc || '';
  avForm.barcode = row.barcode || '';
  avForm.catalogNo = row.catalogNo || '';
  avForm.carrier = row.carrier || '';
  avForm.format = row.format || '';
  avForm.title = row.title || '';
  avForm.author = row.author || '';
  avForm.vinylColor = row.vinylColor || '';
  avForm.brand = row.label || '';
  avForm.limitedNo = row.limitedNo || '';
  avForm.copies = String(row.copies || '');
  avForm.receiveSets = String(row.defaultReceiveSets ?? s.pending);
  avForm.remark = row.receiveRemark || '';
  if (isForeign.value) {
    avForm.price = row.originalPrice || row.price || '';
    avForm.currency = row.currency || 'USD';
    avForm.actualPrice = row.actualPrice || '';
  } else {
    avForm.price = row.price || '';
    avForm.currency = row.currency || 'CNY';
    avForm.actualPrice = row.actualPrice || row.price || '';
  }
}

function fillExchangeFromRow(row) {
  exchangeForm.exchangeQty = row?.defaultExchangeQty != null && row.defaultExchangeQty !== ''
    ? String(row.defaultExchangeQty)
    : '';
  exchangeForm.exchangeReason = row?.defaultExchangeReason || '';
  exchangeForm.remark = row?.defaultExchangeRemark || '';
}

function fillReturnFromRow(row) {
  returnForm.returnQty = row?.defaultReturnQty != null && row.defaultReturnQty !== ''
    ? String(row.defaultReturnQty)
    : '';
  returnForm.returnReason = row?.defaultReturnReason || '';
  returnForm.remark = row?.defaultReturnRemark || '';
}

function resetAllFromRow(row) {
  if (!row) return;
  barcodeResultOpen.value = false;
  fillPaperFromRow(row);
  fillAvFromRow(row);
  fillExchangeFromRow(row);
  fillReturnFromRow(row);
}

watch(() => [props.open, props.row], ([open, row]) => {
  if (!open || !row) return;
  activeTab.value = 'receive';
  resetAllFromRow(row);
}, { immediate: true });

watch(() => [props.open, orderLineRemark.value], async () => {
  remarkOverflow.value = false;
  if (!props.open) return;
  await nextTick();
  updateRemarkOverflow();
});

watch(() => props.receiveResetKey, (key, prev) => {
  if (!props.open || !props.row || key === prev) return;
  if (isAv.value) fillAvFromRow(props.row);
  else fillPaperFromRow(props.row);
});

watch(() => props.exchangeResetKey, (key, prev) => {
  if (!props.open || !props.row || key === prev) return;
  fillExchangeFromRow(props.row);
  exchangeForm.exchangeQty = '';
  exchangeForm.exchangeReason = '';
  exchangeForm.remark = '';
});

watch(() => props.returnResetKey, (key, prev) => {
  if (!props.open || !props.row || key === prev) return;
  fillReturnFromRow(props.row);
  returnForm.returnQty = '';
  returnForm.returnReason = '';
  returnForm.remark = '';
});

function assertQtyWithinPending(qty) {
  const pending = Number(summary.value.pending) || 0;
  if (!qty || qty <= 0) {
    window.alert('操作失败：套数无效');
    return false;
  }
  if (qty > pending) {
    window.alert(`超过待收货套数（当前待收 ${pending}）`);
    return false;
  }
  return true;
}

function onPaperPreview() {
  if (!props.needsBarcodeAllocation) return;
  if (!paperForm.barcodeStart.trim()) return window.alert('请输入条码初始号');
  const receiveSets = Number(paperForm.receiveSets);
  const volumesPerSet = Number(paperForm.volumesPerSet);
  if (!receiveSets || receiveSets <= 0) return window.alert('请输入有效的收货套数');
  if (!volumesPerSet || volumesPerSet <= 0) return window.alert('请输入有效的套内册数');
  emit('preview', { ...paperForm });
}

function validatePaperReceive() {
  if (!paperForm.title.trim()) {
    window.alert('请填写正题名');
    return false;
  }
  if (!paperForm.price.trim() || !paperForm.actualPrice.trim()) {
    window.alert('请填写定价和实洋');
    return false;
  }
  if (!paperForm.volumesPerSet.trim()) {
    window.alert('请填写套内册数');
    return false;
  }
  if (props.needsBarcodeAllocation && !paperForm.barcodeStart.trim()) {
    window.alert('请输入条码初始号');
    return false;
  }
  if (!assertQtyWithinPending(Number(paperForm.receiveSets))) return false;
  return true;
}

function validateAvReceive() {
  if (!avForm.carrier) {
    window.alert('请选择载体');
    return false;
  }
  if (!avForm.title.trim()) {
    window.alert('请填写题名');
    return false;
  }
  if (!avForm.price.trim() || !avForm.actualPrice.trim()) {
    window.alert('请填写码洋和实洋');
    return false;
  }
  if (!avForm.copies.trim()) {
    window.alert('请填写套内件数');
    return false;
  }
  if (!assertQtyWithinPending(Number(avForm.receiveSets))) return false;
  return true;
}

function submitReceive() {
  if (isAv.value) {
    if (!validateAvReceive()) return;
    emit('confirm-receive', { ...avForm });
    return;
  }
  if (!validatePaperReceive()) return;
  if (props.needsBarcodeAllocation) {
    barcodeResult.value = calcBarcodeAllocation(
      paperForm.barcodeStart,
      Number(paperForm.receiveSets),
      Number(paperForm.volumesPerSet)
    );
    barcodeResultOpen.value = true;
    return;
  }
  emit('confirm-receive', { ...paperForm });
}

function onBarcodeAcknowledge() {
  barcodeResultOpen.value = false;
  emit('confirm-receive', { ...paperForm, barcodeResult: { ...barcodeResult.value } });
}

function submitExchange() {
  if (!exchangeForm.exchangeQty.trim()) return window.alert('请填写换货数量');
  if (!exchangeForm.exchangeReason) return window.alert('请选择换货原因');
  if (!assertQtyWithinPending(Number(exchangeForm.exchangeQty))) return;
  emit('confirm-exchange', { ...exchangeForm });
}

function submitReturn() {
  if (!returnForm.returnQty.trim()) return window.alert('请填写退货数量');
  if (!returnForm.returnReason) return window.alert('请选择退货原因');
  if (!assertQtyWithinPending(Number(returnForm.returnQty))) return;
  emit('confirm-return', { ...returnForm });
}
</script>
