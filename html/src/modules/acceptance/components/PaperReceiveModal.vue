<template>
  <div v-if="open" class="fixed inset-0 z-[80] flex items-center justify-center bg-black/40 p-4" @click.self="emit('close')">
    <div class="bg-white rounded-lg shadow-xl w-full max-w-4xl flex flex-col max-h-[90vh]" @click.stop>
      <div class="flex items-center justify-between px-6 py-4 border-b shrink-0">
        <h2 class="text-base font-medium text-gray-800">新增收货</h2>
        <button type="button" class="text-gray-400 text-xl" @click="emit('close')">&times;</button>
      </div>
      <div class="px-6 py-5 overflow-y-auto space-y-4">
        <div class="bg-gray-50 rounded px-4 py-3 space-y-2 text-sm text-gray-700">
          <div class="flex flex-wrap gap-x-10 gap-y-1">
            <span>发订套数：<span class="text-gray-900">{{ form.orderedSets || '—' }}</span></span>
            <span>已收货套数：<span class="text-gray-900">{{ form.receivedSets || '—' }}</span></span>
            <span>已换货套数：<span class="text-gray-900">{{ form.exchangedSets || '—' }}</span></span>
            <span>已退货套数：<span class="text-gray-900">{{ form.returnedSets || '—' }}</span></span>
            <span>待收货套数：<span class="text-gray-900">{{ form.pendingSets || '—' }}</span></span>
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
        <div class="grid grid-cols-2 gap-4">
          <div class="flex items-center gap-3"><label class="text-sm text-gray-600 w-20 text-right shrink-0">ISBN</label><input v-model="form.isbn" type="text" class="flex-1 border border-gray-300 rounded px-3 py-2 text-sm"></div>
          <div class="flex items-center gap-3"><label class="text-sm text-gray-600 w-20 text-right shrink-0">作者</label><input v-model="form.author" type="text" class="flex-1 border border-gray-300 rounded px-3 py-2 text-sm"></div>
        </div>
        <div class="flex items-center gap-3">
          <label class="text-sm text-gray-600 w-20 text-right shrink-0"><span class="text-red-500">*</span> 正题名</label>
          <input v-model="form.title" type="text" class="flex-1 border border-gray-300 rounded px-3 py-2 text-sm">
        </div>
        <div class="grid grid-cols-3 gap-4">
          <div class="flex items-center gap-3">
            <label class="text-sm text-gray-600 w-20 text-right shrink-0"><span class="text-red-500">*</span> 定价</label>
            <input v-model="form.price" type="text" class="flex-1 border border-gray-300 rounded px-3 py-2 text-sm">
          </div>
          <div class="flex items-center gap-3">
            <label class="text-sm text-gray-600 w-16 text-right shrink-0">币种</label>
            <select v-model="form.currency" class="flex-1 border border-gray-300 rounded px-3 py-2 text-sm">
              <option value="CNY">CNY - 人民币</option>
              <option value="USD">USD - 美元</option>
              <option value="EUR">EUR - 欧元</option>
              <option value="GBP">GBP - 英镑</option>
              <option value="JPY">JPY - 日元</option>
              <option value="HKD">HKD - 港币</option>
            </select>
          </div>
          <div class="flex items-center gap-3">
            <label class="text-sm text-gray-600 w-20 text-right shrink-0"><span class="text-red-500">*</span> 实洋</label>
            <input v-model="form.actualPrice" type="text" class="flex-1 border border-gray-300 rounded px-3 py-2 text-sm">
          </div>
        </div>
        <div class="grid grid-cols-3 gap-4">
          <div class="flex items-center gap-3">
            <label class="text-sm text-gray-600 w-24 text-right shrink-0"><span class="text-red-500">*</span> 套内册数</label>
            <input v-model="form.volumesPerSet" type="text" class="flex-1 border border-gray-300 rounded px-3 py-2 text-sm">
          </div>
          <div class="flex items-center gap-3">
            <label class="text-sm text-gray-600 w-20 text-right shrink-0">收货套数</label>
            <input v-model="form.receiveSets" type="text" class="flex-1 border border-gray-300 rounded px-3 py-2 text-sm">
          </div>
          <div class="flex items-center gap-3">
            <label class="text-sm text-gray-600 w-24 text-right shrink-0">
              <span v-if="needsBarcodeAllocation" class="text-red-500">*</span> 条码初始号
            </label>
            <input v-model="form.barcodeStart" type="text" class="flex-1 border border-gray-300 rounded px-3 py-2 text-sm">
          </div>
        </div>
        <div class="flex items-start gap-3">
          <label class="text-sm text-gray-600 w-20 text-right pt-2 shrink-0">收货备注</label>
          <textarea
            v-model="form.remark"
            rows="4"
            maxlength="200"
            placeholder="请输入收货备注"
            class="flex-1 border border-gray-300 rounded px-3 py-2 text-sm resize-none"
          />
        </div>
      </div>
      <div class="flex items-center justify-end gap-3 px-6 py-4 border-t shrink-0">
        <button type="button" class="px-5 py-1.5 text-sm border border-gray-300 rounded text-gray-600 hover:bg-gray-50" @click="emit('close')">取消</button>
        <button
          v-if="needsBarcodeAllocation && showPreview"
          type="button"
          class="px-5 py-1.5 text-sm rounded bg-amber-500 text-white hover:bg-amber-600 shadow-sm"
          @click="onPreview"
        >
          预览
        </button>
        <button type="button" class="px-5 py-1.5 text-sm bg-sky-600 text-white rounded hover:bg-sky-700" @click="submit">确定</button>
      </div>
    </div>

    <BarcodeAllocatedResultModal
      :open="barcodeResultOpen"
      :result="barcodeResult"
      @acknowledge="onBarcodeAcknowledge"
    />
  </div>
</template>

<script setup>
import { computed, nextTick, reactive, ref, watch } from 'vue';
import BarcodeAllocatedResultModal from '@/modules/acceptance/components/BarcodeAllocatedResultModal.vue';
import HoverTooltip from '@/modules/acceptance/components/HoverTooltip.vue';
import {
  calcBarcodeAllocation,
  isChineseAcceptanceLang,
  resolveReceiveSetSummary
} from '@/modules/acceptance/data/receive-by-item';

const props = defineProps({
  open: { type: Boolean, default: false },
  row: { type: Object, default: null },
  acceptanceLang: { type: String, default: '中文' },
  /** 当前验收批次是否需要分配条码号 */
  needsBarcodeAllocation: { type: Boolean, default: false },
  /** 是否显示「预览」按钮（导入任务详情等场景可隐藏） */
  showPreview: { type: Boolean, default: true }
});

const emit = defineEmits(['close', 'confirm', 'preview']);

const isForeign = computed(() => !isChineseAcceptanceLang(props.acceptanceLang));

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

watch(() => [props.open, orderLineRemark.value], async () => {
  remarkOverflow.value = false;
  if (!props.open) return;
  await nextTick();
  updateRemarkOverflow();
});

const form = reactive({
  orderedSets: '', receivedSets: '', exchangedSets: '', returnedSets: '', pendingSets: '',
  isbn: '', author: '', title: '',
  price: '', currency: 'CNY', actualPrice: '',
  volumesPerSet: '', receiveSets: '', barcodeStart: '', remark: ''
});

const barcodeResultOpen = ref(false);
const barcodeResult = ref({
  displayType: 'single',
  allocatedRanges: [],
  unallocated: [],
  unallocatedText: '',
  hasEmpty: false
});

watch(() => [props.open, props.row], ([open, row]) => {
  if (!open || !row) return;
  barcodeResultOpen.value = false;
  const summary = resolveReceiveSetSummary(row);
  form.orderedSets = String(summary.ordered);
  form.receivedSets = String(summary.received);
  form.exchangedSets = String(summary.exchange);
  form.returnedSets = String(summary.returned);
  form.pendingSets = String(summary.pending);
  form.isbn = row.isbn || '';
  form.author = row.author || '';
  form.title = row.title || '';
  form.volumesPerSet = String(row.copies || '');
  form.receiveSets = String(row.defaultReceiveSets ?? summary.pending);
  form.barcodeStart = row.barcodeStart || '';
  form.remark = row.receiveRemark || '';
  if (isForeign.value) {
    form.price = row.originalPrice || row.price || '';
    form.currency = row.currency || 'USD';
    form.actualPrice = row.actualPrice || '';
  } else {
    form.price = row.price || '';
    form.currency = row.currency || 'CNY';
    form.actualPrice = row.actualPrice || row.price || '';
  }
});

/**
 * @returns {boolean}
 */
function validateForm() {
  if (!form.title.trim()) {
    window.alert('请填写正题名');
    return false;
  }
  if (!form.price.trim() || !form.actualPrice.trim()) {
    window.alert('请填写定价和实洋');
    return false;
  }
  if (!form.volumesPerSet.trim()) {
    window.alert('请填写套内册数');
    return false;
  }
  if (props.needsBarcodeAllocation && !form.barcodeStart.trim()) {
    window.alert('请输入条码初始号');
    return false;
  }
  return true;
}

function onPreview() {
  if (!props.needsBarcodeAllocation) return;
  if (!form.barcodeStart.trim()) return window.alert('请输入条码初始号');
  const receiveSets = Number(form.receiveSets);
  const volumesPerSet = Number(form.volumesPerSet);
  if (!receiveSets || receiveSets <= 0) return window.alert('请输入有效的收货套数');
  if (!volumesPerSet || volumesPerSet <= 0) return window.alert('请输入有效的套内册数');
  emit('preview', { ...form });
}

function submit() {
  if (!validateForm()) return;

  if (props.needsBarcodeAllocation) {
    barcodeResult.value = calcBarcodeAllocation(
      form.barcodeStart,
      Number(form.receiveSets),
      Number(form.volumesPerSet)
    );
    barcodeResultOpen.value = true;
    return;
  }

  emit('confirm', { ...form });
  emit('close');
}

function onBarcodeAcknowledge() {
  barcodeResultOpen.value = false;
  emit('confirm', { ...form, barcodeResult: { ...barcodeResult.value } });
  emit('close');
}
</script>
