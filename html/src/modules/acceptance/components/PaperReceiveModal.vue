<template>
  <div v-if="open" class="fixed inset-0 z-[80] flex items-center justify-center bg-black/40 p-4" @click.self="emit('close')">
    <div class="bg-white rounded-lg shadow-xl w-full max-w-3xl flex flex-col max-h-[90vh]" @click.stop>
      <div class="flex items-center justify-between px-6 py-4 border-b shrink-0">
        <h2 class="text-base font-medium text-gray-800">新增收货</h2>
        <button type="button" class="text-gray-400 text-xl" @click="emit('close')">&times;</button>
      </div>
      <div class="px-6 py-5 overflow-y-auto space-y-4">
        <div class="bg-gray-50 rounded px-4 py-3 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-700">
          <div class="flex items-center gap-2"><label>发订套数</label><input v-model="form.orderedSets" type="text" readonly class="w-16 border border-gray-300 rounded px-2 py-1 text-sm bg-white"></div>
          <div class="flex items-center gap-2"><label>已收货套数</label><input v-model="form.receivedSets" type="text" readonly class="w-16 border border-gray-300 rounded px-2 py-1 text-sm bg-white"></div>
          <div class="flex items-center gap-2"><label>待收货套数</label><input v-model="form.pendingSets" type="text" readonly class="w-16 border border-gray-300 rounded px-2 py-1 text-sm bg-white"></div>
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
            <label class="text-sm text-gray-600 w-24 text-right shrink-0"><span class="text-red-500">*</span> 条码初始号</label>
            <input v-model="form.barcodeStart" type="text" class="flex-1 border border-gray-300 rounded px-3 py-2 text-sm">
          </div>
        </div>
        <div class="flex items-start gap-3">
          <label class="text-sm text-gray-600 w-20 text-right pt-2 shrink-0">收货备注</label>
          <div class="flex-1 relative">
            <textarea v-model="form.remark" rows="4" maxlength="200" placeholder="请输入收货备注" class="w-full border border-gray-300 rounded px-3 py-2 text-sm resize-none" />
            <span class="absolute bottom-2 right-3 text-xs text-gray-400">{{ form.remark.length }}</span>
          </div>
        </div>
      </div>
      <div class="flex items-center gap-3 px-6 py-4 border-t bg-gray-50 rounded-b-lg shrink-0">
        <button type="button" class="px-5 py-1.5 text-sm rounded bg-amber-500 text-white hover:bg-amber-600 mr-auto" @click="onPreview">预览</button>
        <button type="button" class="px-5 py-1.5 text-sm border border-gray-300 rounded text-gray-600 hover:bg-gray-50" @click="emit('close')">取消</button>
        <button type="button" class="px-5 py-1.5 text-sm bg-sky-600 text-white rounded hover:bg-sky-700" @click="submit">收货</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, reactive, watch } from 'vue';
import { isChineseAcceptanceLang, parseReceiveCounts } from '@/modules/acceptance/data/receive-by-item';

const props = defineProps({
  open: { type: Boolean, default: false },
  row: { type: Object, default: null },
  acceptanceLang: { type: String, default: '中文' }
});

const emit = defineEmits(['close', 'confirm', 'preview']);

const isForeign = computed(() => !isChineseAcceptanceLang(props.acceptanceLang));

const form = reactive({
  orderedSets: '', receivedSets: '', pendingSets: '',
  isbn: '', author: '', title: '',
  price: '', currency: 'CNY', actualPrice: '',
  volumesPerSet: '', receiveSets: '', barcodeStart: '', remark: ''
});

watch(() => [props.open, props.row], ([open, row]) => {
  if (!open || !row) return;
  const counts = parseReceiveCounts(row.counts);
  form.orderedSets = String(row.orderedSets ?? counts.ordered);
  form.receivedSets = String(row.receivedSets ?? counts.received);
  form.pendingSets = String(row.pendingSets ?? counts.pending);
  form.isbn = row.isbn || '';
  form.author = row.author || '';
  form.title = row.title || '';
  form.volumesPerSet = String(row.copies || '');
  form.receiveSets = String(row.pendingSets ?? counts.pending);
  form.barcodeStart = row.barcodeStart || '';
  form.remark = '';
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

function onPreview() {
  if (!form.barcodeStart.trim()) return window.alert('请输入条码初始号');
  const receiveSets = Number(form.receiveSets);
  const volumesPerSet = Number(form.volumesPerSet);
  if (!receiveSets || receiveSets <= 0) return window.alert('请输入有效的收货套数');
  if (!volumesPerSet || volumesPerSet <= 0) return window.alert('请输入有效的套内册数');
  emit('preview', { ...form });
}

function submit() {
  if (!form.title.trim()) return window.alert('请填写正题名');
  if (!form.price.trim() || !form.actualPrice.trim()) return window.alert('请填写定价和实洋');
  if (!form.volumesPerSet.trim()) return window.alert('请填写套内册数');
  if (!form.barcodeStart.trim()) return window.alert('请输入条码初始号');
  emit('confirm', { ...form });
}
</script>
