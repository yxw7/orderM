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
        <h2 class="text-base font-medium text-gray-800">逐条收货/换货/退货</h2>
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

      <div class="flex-1 min-h-0 overflow-y-auto px-6 py-4 space-y-6 text-sm">
        <!-- 收货 -->
        <section class="space-y-3">
          <div class="flex items-center gap-2 border-b border-gray-200 pb-1.5">
            <h3 class="text-sm font-medium text-gray-800">收货</h3>
            <span
              v-if="hasPreAcceptDraft"
              class="inline-flex items-center px-1.5 py-0.5 rounded text-xs text-sky-700 bg-sky-50 border border-sky-100"
            >
              已带入预验收数据
            </span>
          </div>
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
                <textarea v-model="avForm.remark" rows="3" maxlength="500" placeholder="请输入收货备注（换/退货共用）" class="w-full border border-gray-300 rounded px-2 py-1.5 text-sm resize-none" />
                <span class="absolute bottom-2 right-2 text-xs text-gray-400">{{ avForm.remark.length }}</span>
              </div>
            </div>
            <label
              v-if="showAgainstExchange"
              class="flex items-center gap-2 pl-[4.5rem] text-sm text-gray-700 cursor-pointer select-none"
            >
              <input v-model="againstExchange" type="checkbox" class="rounded border-gray-300">
              <span>优先对换货记录收货</span>
            </label>
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
              <div class="flex-1 relative">
                <textarea
                  v-model="paperForm.remark"
                  rows="3"
                  maxlength="500"
                  placeholder="请输入收货备注（换/退货共用）"
                  class="w-full border border-gray-300 rounded px-2 py-1.5 text-sm resize-none"
                />
                <span class="absolute bottom-2 right-2 text-xs text-gray-400">{{ paperForm.remark.length }}</span>
              </div>
            </div>
            <label
              v-if="showAgainstExchange"
              class="flex items-center gap-2 pl-[4.5rem] text-sm text-gray-700 cursor-pointer select-none"
            >
              <input v-model="againstExchange" type="checkbox" class="rounded border-gray-300">
              <span>优先对换货记录收货</span>
            </label>
          </template>
        </section>

        <!-- 换货 -->
        <section class="space-y-3">
          <h3 class="text-sm font-medium text-gray-800 border-b border-gray-200 pb-1.5">换货</h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div class="flex items-center gap-2">
              <label class="text-gray-600 w-20 text-right shrink-0">换货数量</label>
              <input v-model="exchangeForm.exchangeQty" type="text" placeholder="请输入" class="flex-1 border border-gray-300 rounded px-2 py-1.5 text-sm">
            </div>
            <div class="flex items-center gap-2">
              <label class="text-gray-600 w-20 text-right shrink-0">换货原因</label>
              <ReasonSelect
                v-model="exchangeForm.exchangeReason"
                reason-type="exchange"
                class="flex-1"
                trigger-class="px-2 py-1.5"
                placeholder="请选择"
              />
            </div>
          </div>
        </section>

        <!-- 退货 -->
        <section class="space-y-3">
          <h3 class="text-sm font-medium text-gray-800 border-b border-gray-200 pb-1.5">退货</h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div class="flex items-center gap-2">
              <label class="text-gray-600 w-20 text-right shrink-0">退货数量</label>
              <input v-model="returnForm.returnQty" type="text" placeholder="请输入" class="flex-1 border border-gray-300 rounded px-2 py-1.5 text-sm">
            </div>
            <div class="flex items-center gap-2">
              <label class="text-gray-600 w-20 text-right shrink-0">退货原因</label>
              <ReasonSelect
                v-model="returnForm.returnReason"
                reason-type="return"
                class="flex-1"
                trigger-class="px-2 py-1.5"
                placeholder="请选择"
              />
            </div>
          </div>
        </section>
      </div>

      <div class="flex items-center justify-end gap-2 px-6 py-3 border-t bg-gray-50 rounded-b-lg shrink-0">
        <button type="button" class="px-5 py-1.5 text-sm border border-gray-300 rounded text-gray-600 hover:bg-gray-50" @click="emit('close')">关闭</button>
        <button
          v-if="!isAv && needsBarcodeAllocation"
          type="button"
          class="px-4 py-1.5 text-sm rounded bg-amber-500 text-white hover:bg-amber-600"
          @click="onPaperPreview"
        >预览</button>
        <button
          type="button"
          class="px-4 py-1.5 text-sm bg-emerald-500 text-white rounded hover:bg-emerald-600"
          @click="submitAll"
        >确定</button>
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
import ReasonSelect from '@/components/common/ReasonSelect.vue';
import {
  RECEIVE_CARRIER_OPTIONS,
  calcBarcodeAllocation,
  isChineseAcceptanceLang,
  resolveReceiveSetSummary
} from '@/modules/acceptance/data/receive-by-item';
import { getPreAcceptDraft } from '@/modules/acceptance/data/pre-accept-drafts';

const props = defineProps({
  open: { type: Boolean, default: false },
  row: { type: Object, default: null },
  resourceType: { type: String, default: '纸质书' },
  acceptanceLang: { type: String, default: '中文' },
  /** 当前工作验收单号，用于读取预验收草稿 */
  acceptanceId: { type: String, default: '' },
  needsBarcodeAllocation: { type: Boolean, default: false }
});

const emit = defineEmits(['close', 'confirm', 'preview']);

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
const hasPreAcceptDraft = computed(() => (
  Boolean(getPreAcceptDraft(props.acceptanceId, props.row?.orderLine))
));

const summary = computed(() => (
  props.row
    ? resolveReceiveSetSummary(props.row)
    : { ordered: '—', received: '—', exchange: '—', returned: '—', pending: '—' }
));

const showAgainstExchange = computed(() => (Number(summary.value.exchange) || 0) > 0);
const againstExchange = ref(false);

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

const exchangeForm = reactive({ exchangeQty: '', exchangeReason: '' });
const returnForm = reactive({ returnQty: '', returnReason: '' });

const barcodeResultOpen = ref(false);
const barcodeResult = ref({
  displayType: 'single',
  allocatedRanges: [],
  unallocated: [],
  unallocatedText: '',
  hasEmpty: false
});
/** @type {import('vue').Ref<object|null>} */
const pendingConfirmPayload = ref(null);

function receiveRemark() {
  return isAv.value ? (avForm.remark || '') : (paperForm.remark || '');
}

/**
 * @param {string|number} raw
 * @returns {number} 有效正数或 0
 */
function positiveQty(raw) {
  const n = Number(raw);
  return Number.isFinite(n) && n > 0 ? n : 0;
}

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
  applyPreAcceptDraftToPaper(row);
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
  applyPreAcceptDraftToAv(row);
}

/**
 * @param {object} row
 */
function applyPreAcceptDraftToPaper(row) {
  const draft = getPreAcceptDraft(props.acceptanceId, row?.orderLine);
  if (!draft) return;
  if (draft.receiveSets !== '' && draft.receiveSets != null) {
    paperForm.receiveSets = String(draft.receiveSets);
  }
  if (draft.price || draft.listPrice) {
    paperForm.price = String(draft.price || draft.listPrice);
  }
  if (draft.netPrice !== '' && draft.netPrice != null) {
    paperForm.actualPrice = String(draft.netPrice);
  }
  if (draft.copiesInSet !== '' && draft.copiesInSet != null) {
    paperForm.volumesPerSet = String(draft.copiesInSet);
  }
}

/**
 * @param {object} row
 */
function applyPreAcceptDraftToAv(row) {
  const draft = getPreAcceptDraft(props.acceptanceId, row?.orderLine);
  if (!draft) return;
  if (draft.receiveSets !== '' && draft.receiveSets != null) {
    avForm.receiveSets = String(draft.receiveSets);
  }
  if (draft.listPrice || draft.price) {
    avForm.price = String(draft.listPrice || draft.price);
  }
  if (draft.netPrice !== '' && draft.netPrice != null) {
    avForm.actualPrice = String(draft.netPrice);
  }
  if (draft.copiesInSet !== '' && draft.copiesInSet != null) {
    avForm.copies = String(draft.copiesInSet);
  }
}

function fillExchangeFromRow(row) {
  exchangeForm.exchangeQty = row?.defaultExchangeQty != null && row.defaultExchangeQty !== ''
    ? String(row.defaultExchangeQty)
    : '';
  exchangeForm.exchangeReason = row?.defaultExchangeReason || '';
}

function fillReturnFromRow(row) {
  returnForm.returnQty = row?.defaultReturnQty != null && row.defaultReturnQty !== ''
    ? String(row.defaultReturnQty)
    : '';
  returnForm.returnReason = row?.defaultReturnReason || '';
}

function resetAllFromRow(row) {
  if (!row) return;
  barcodeResultOpen.value = false;
  pendingConfirmPayload.value = null;
  againstExchange.value = false;
  fillPaperFromRow(row);
  fillAvFromRow(row);
  fillExchangeFromRow(row);
  fillReturnFromRow(row);
}

watch(() => [props.open, props.row], ([open, row]) => {
  if (!open || !row) return;
  resetAllFromRow(row);
}, { immediate: true });

watch(() => [props.open, orderLineRemark.value], async () => {
  remarkOverflow.value = false;
  if (!props.open) return;
  await nextTick();
  updateRemarkOverflow();
});

function onPaperPreview() {
  if (!props.needsBarcodeAllocation) return;
  if (!paperForm.barcodeStart.trim()) return window.alert('请输入条码初始号');
  const receiveSets = Number(paperForm.receiveSets);
  const volumesPerSet = Number(paperForm.volumesPerSet);
  if (!receiveSets || receiveSets <= 0) return window.alert('请输入有效的收货套数');
  if (!volumesPerSet || volumesPerSet <= 0) return window.alert('请输入有效的套内册数');
  emit('preview', { ...paperForm });
}

function validatePaperReceiveFields() {
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
  return true;
}

function validateAvReceiveFields() {
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
  return true;
}

/**
 * @returns {{ receive: object|null, exchange: object|null, return: object|null }|null}
 */
function buildValidatedPayload() {
  const receiveQty = positiveQty(isAv.value ? avForm.receiveSets : paperForm.receiveSets);
  const exchangeQty = positiveQty(exchangeForm.exchangeQty);
  const returnQty = positiveQty(returnForm.returnQty);

  if (!receiveQty && !exchangeQty && !returnQty) {
    window.alert('请至少填写一种验收套数');
    return null;
  }

  const pending = Number(summary.value.pending) || 0;
  const total = receiveQty + exchangeQty + returnQty;
  if (total > pending) {
    window.alert(`验收套数合计不能大于待收套数（当前待收 ${pending}）`);
    return null;
  }

  if (receiveQty) {
    if (isAv.value) {
      if (!validateAvReceiveFields()) return null;
    } else if (!validatePaperReceiveFields()) {
      return null;
    }
  }

  if (exchangeQty && !exchangeForm.exchangeReason) {
    window.alert('请选择换货原因');
    return null;
  }
  if (returnQty && !returnForm.returnReason) {
    window.alert('请选择退货原因');
    return null;
  }

  const sharedRemark = receiveRemark();
  /** @type {object|null} */
  let receive = null;
  if (receiveQty) {
    receive = isAv.value
      ? {
          ...avForm,
          receiveSets: String(receiveQty),
          againstExchange: showAgainstExchange.value ? againstExchange.value : false
        }
      : {
          ...paperForm,
          receiveSets: String(receiveQty),
          againstExchange: showAgainstExchange.value ? againstExchange.value : false
        };
  }

  return {
    receive,
    exchange: exchangeQty
      ? {
          exchangeQty: String(exchangeQty),
          exchangeReason: exchangeForm.exchangeReason,
          remark: sharedRemark
        }
      : null,
    return: returnQty
      ? {
          returnQty: String(returnQty),
          returnReason: returnForm.returnReason,
          remark: sharedRemark
        }
      : null
  };
}

function submitAll() {
  const payload = buildValidatedPayload();
  if (!payload) return;

  if (
    payload.receive
    && !isAv.value
    && props.needsBarcodeAllocation
  ) {
    barcodeResult.value = calcBarcodeAllocation(
      paperForm.barcodeStart,
      Number(paperForm.receiveSets),
      Number(paperForm.volumesPerSet)
    );
    pendingConfirmPayload.value = {
      ...payload,
      receive: { ...payload.receive, barcodeResult: { ...barcodeResult.value } }
    };
    barcodeResultOpen.value = true;
    return;
  }

  emit('confirm', payload);
}

function onBarcodeAcknowledge() {
  barcodeResultOpen.value = false;
  const payload = pendingConfirmPayload.value;
  pendingConfirmPayload.value = null;
  if (payload) emit('confirm', payload);
}
</script>
