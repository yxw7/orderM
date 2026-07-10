<template>
  <div v-if="open" class="fixed inset-0 z-[80] flex items-center justify-center bg-black/40 p-4" @click.self="emit('close')">
    <div class="bg-white rounded-lg shadow-xl w-full max-w-4xl flex flex-col max-h-[90vh]" @click.stop>
      <div class="flex items-center justify-between px-6 py-4 border-b shrink-0">
        <h2 class="text-base font-medium text-gray-800">新增收货</h2>
        <button type="button" class="text-gray-400 text-xl" @click="emit('close')">&times;</button>
      </div>
      <div class="px-6 py-5 overflow-y-auto space-y-4">
        <div class="bg-gray-50 rounded px-4 py-3 text-sm text-gray-700">{{ summaryText }}</div>
        <div class="grid grid-cols-3 gap-4">
          <div class="flex items-center gap-3"><label class="text-sm text-gray-600 w-20 text-right shrink-0">ISBN</label><input v-model="form.isbn" type="text" class="flex-1 border border-gray-300 rounded px-3 py-2 text-sm"></div>
          <div class="flex items-center gap-3"><label class="text-sm text-gray-600 w-16 text-right shrink-0">ISRC</label><input v-model="form.isrc" type="text" class="flex-1 border border-gray-300 rounded px-3 py-2 text-sm"></div>
          <div class="flex items-center gap-3"><label class="text-sm text-gray-600 w-20 text-right shrink-0">商品条码</label><input v-model="form.barcode" type="text" class="flex-1 border border-gray-300 rounded px-3 py-2 text-sm"></div>
        </div>
        <div class="grid grid-cols-3 gap-4">
          <div class="flex items-center gap-3"><label class="text-sm text-gray-600 w-20 text-right shrink-0">目录号</label><input v-model="form.catalogNo" type="text" class="flex-1 border border-gray-300 rounded px-3 py-2 text-sm"></div>
          <div class="flex items-center gap-3">
            <label class="text-sm text-gray-600 w-16 text-right shrink-0"><span class="text-red-500">*</span> 载体</label>
            <select v-model="form.carrier" class="flex-1 border border-gray-300 rounded px-3 py-2 text-sm">
              <option value="">请选择</option>
              <option v-for="c in carrierOptions" :key="c" :value="c">{{ c }}</option>
            </select>
          </div>
          <div class="flex items-center gap-3"><label class="text-sm text-gray-600 w-20 text-right shrink-0">版本/格式</label><input v-model="form.format" type="text" class="flex-1 border border-gray-300 rounded px-3 py-2 text-sm"></div>
        </div>
        <div class="grid grid-cols-3 gap-4">
          <div class="col-span-2 flex items-center gap-3">
            <label class="text-sm text-gray-600 w-20 text-right shrink-0"><span class="text-red-500">*</span> 题名</label>
            <input v-model="form.title" type="text" class="flex-1 border border-gray-300 rounded px-3 py-2 text-sm">
          </div>
          <div class="flex items-center gap-3"><label class="text-sm text-gray-600 w-16 text-right shrink-0">著者</label><input v-model="form.author" type="text" class="flex-1 border border-gray-300 rounded px-3 py-2 text-sm"></div>
        </div>
        <div class="grid grid-cols-3 gap-4">
          <div class="flex items-center gap-3">
            <label class="text-sm text-gray-600 w-20 text-right shrink-0"><span class="text-red-500">*</span> 码洋</label>
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
          <div class="flex items-center gap-3"><label class="text-sm text-gray-600 w-20 text-right shrink-0">彩胶颜色</label><input v-model="form.vinylColor" type="text" class="flex-1 border border-gray-300 rounded px-3 py-2 text-sm"></div>
          <div class="flex items-center gap-3"><label class="text-sm text-gray-600 w-16 text-right shrink-0">厂牌</label><input v-model="form.brand" type="text" class="flex-1 border border-gray-300 rounded px-3 py-2 text-sm"></div>
          <div class="flex items-center gap-3"><label class="text-sm text-gray-600 w-20 text-right shrink-0">限量编号</label><input v-model="form.limitedNo" type="text" class="flex-1 border border-gray-300 rounded px-3 py-2 text-sm"></div>
        </div>
        <div class="grid grid-cols-3 gap-4">
          <div class="flex items-center gap-3">
            <label class="text-sm text-gray-600 w-24 text-right shrink-0"><span class="text-red-500">*</span> 套内件数</label>
            <input v-model="form.copies" type="text" class="flex-1 border border-gray-300 rounded px-3 py-2 text-sm">
          </div>
          <div class="flex items-center gap-3">
            <label class="text-sm text-gray-600 w-20 text-right shrink-0">收货套数</label>
            <input v-model="form.receiveSets" type="text" class="flex-1 border border-gray-300 rounded px-3 py-2 text-sm">
          </div>
        </div>
        <div class="flex items-start gap-3">
          <label class="text-sm text-gray-600 w-20 text-right pt-2 shrink-0">收货备注</label>
          <div class="flex-1 relative">
            <textarea v-model="form.remark" rows="4" maxlength="500" placeholder="请输入收货备注" class="w-full border border-gray-300 rounded px-3 py-2 text-sm resize-none" />
            <span class="absolute bottom-2 right-3 text-xs text-gray-400">{{ form.remark.length }}</span>
          </div>
        </div>
      </div>
      <div class="flex justify-end gap-3 px-6 py-4 border-t bg-gray-50 rounded-b-lg shrink-0">
        <button type="button" class="px-5 py-1.5 text-sm border border-gray-300 rounded text-gray-600 hover:bg-gray-50" @click="emit('close')">取消</button>
        <button type="button" class="px-5 py-1.5 text-sm bg-sky-600 text-white rounded hover:bg-sky-700" @click="submit">收货</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, reactive, watch } from 'vue';
import {
  isChineseAcceptanceLang,
  parseReceiveCounts,
  RECEIVE_CARRIER_OPTIONS
} from '@/modules/acceptance/data/receive-by-item';

const props = defineProps({
  open: { type: Boolean, default: false },
  row: { type: Object, default: null },
  acceptanceLang: { type: String, default: '中文' }
});

const emit = defineEmits(['close', 'confirm']);

const carrierOptions = RECEIVE_CARRIER_OPTIONS.filter(Boolean);

const isForeign = computed(() => !isChineseAcceptanceLang(props.acceptanceLang));

const form = reactive({
  isbn: '', isrc: '', barcode: '', catalogNo: '', carrier: '', format: '',
  title: '', author: '', price: '', currency: 'CNY', actualPrice: '',
  vinylColor: '', brand: '', limitedNo: '', copies: '', receiveSets: '', remark: ''
});

const summaryText = computed(() => {
  if (!props.row) return '';
  const counts = parseReceiveCounts(props.row.counts);
  const ordered = props.row.orderedSets ?? counts.ordered;
  const received = props.row.receivedSets ?? counts.received;
  const pending = props.row.pendingSets ?? counts.pending;
  return `发订套数：${ordered}，已收货套数：${received}，待收货套数：${pending}`;
});

watch(() => [props.open, props.row], ([open, row]) => {
  if (!open || !row) return;
  const counts = parseReceiveCounts(row.counts);
  form.isbn = row.isbn || '';
  form.isrc = row.isrc || '';
  form.barcode = row.barcode || '';
  form.catalogNo = row.catalogNo || '';
  form.carrier = row.carrier || '';
  form.format = row.format || '';
  form.title = row.title || '';
  form.author = row.author || '';
  form.vinylColor = row.vinylColor || '';
  form.brand = row.label || '';
  form.limitedNo = row.limitedNo || '';
  form.copies = String(row.copies || '');
  form.receiveSets = String(row.pendingSets ?? counts.pending);
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

function submit() {
  if (!form.carrier) return window.alert('请选择载体');
  if (!form.title.trim()) return window.alert('请填写题名');
  if (!form.price.trim() || !form.actualPrice.trim()) return window.alert('请填写码洋和实洋');
  if (!form.copies.trim()) return window.alert('请填写套内件数');
  emit('confirm', { ...form });
}
</script>
