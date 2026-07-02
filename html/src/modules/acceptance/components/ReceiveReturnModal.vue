<template>
  <FormModal
    v-if="open"
    title="新增退货"
    confirm-text="退货"
    @close="emit('close')"
    @confirm="submit"
  >
    <div class="bg-gray-50 rounded px-4 py-3 text-sm text-gray-700">{{ summaryText }}</div>
    <div class="flex items-center gap-3">
      <label class="text-sm text-gray-600 w-20 text-right shrink-0"><span class="text-red-500">*</span> 退货数量</label>
      <input v-model="form.returnQty" type="text" placeholder="请输入" class="flex-1 border border-gray-300 rounded px-3 py-2 text-sm">
    </div>
    <div class="flex items-center gap-3">
      <label class="text-sm text-gray-600 w-20 text-right shrink-0"><span class="text-red-500">*</span> 退货原因</label>
      <select v-model="form.returnReason" class="flex-1 border border-gray-300 rounded px-3 py-2 text-sm">
        <option value="">请选择</option>
        <option v-for="opt in RETURN_REASON_OPTIONS" :key="opt" :value="opt">{{ opt }}</option>
      </select>
    </div>
    <div class="flex items-start gap-3">
      <label class="text-sm text-gray-600 w-20 text-right pt-2 shrink-0">退货备注</label>
      <div class="flex-1 relative">
        <textarea v-model="form.remark" rows="4" maxlength="500" placeholder="请输入退货备注" class="w-full border border-gray-300 rounded px-3 py-2 text-sm resize-none" />
        <span class="absolute bottom-2 right-3 text-xs text-gray-400">{{ form.remark.length }} / 500</span>
      </div>
    </div>
  </FormModal>
</template>

<script setup>
import { computed, reactive, watch } from 'vue';
import FormModal from '@/modules/order/components/FormModal.vue';
import { RETURN_REASON_OPTIONS, parseReceiveCounts } from '@/modules/acceptance/data/receive-by-item';

const props = defineProps({
  open: { type: Boolean, default: false },
  row: { type: Object, default: null },
  resourceType: { type: String, default: '纸质书' }
});

const emit = defineEmits(['close', 'confirm']);

const form = reactive({ returnQty: '', returnReason: '', remark: '' });

const summaryText = computed(() => {
  if (!props.row) return '';
  const counts = parseReceiveCounts(props.row.counts);
  const ordered = props.row.orderedSets ?? counts.ordered;
  const received = props.row.receivedSets ?? counts.received;
  const pending = props.row.pendingSets ?? counts.pending;
  const unit = props.resourceType === '视听资料' ? '套内件数' : '套内册数';
  return `${unit}：${props.row.copies || 0}，发订套数：${ordered}，已收货套数：${received}，待收货套数：${pending}`;
});

watch(() => props.open, open => {
  if (!open) return;
  form.returnQty = '';
  form.returnReason = '';
  form.remark = '';
});

function submit() {
  if (!form.returnQty.trim()) return window.alert('请填写退货数量');
  if (!form.returnReason) return window.alert('请选择退货原因');
  emit('confirm', { ...form });
}
</script>
