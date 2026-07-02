<template>
  <FormModal
    v-if="open"
    title="新增退货"
    confirm-text="退货"
    @close="emit('close')"
    @confirm="submit"
  >
    <div class="flex items-center gap-3">
      <label class="text-sm text-gray-600 w-24 text-right shrink-0"><span class="text-red-500">*</span> 退货原因</label>
      <select v-model="form.returnReason" class="flex-1 border border-gray-300 rounded px-3 py-2 text-sm">
        <option value="">请选择</option>
        <option v-for="opt in RETURN_REASON_OPTIONS" :key="opt" :value="opt">{{ opt }}</option>
      </select>
    </div>
    <div class="flex items-start gap-3">
      <label class="text-sm text-gray-600 w-24 text-right pt-2 shrink-0">退货备注</label>
      <div class="flex-1 relative">
        <textarea v-model="form.remark" rows="4" maxlength="500" placeholder="请输入退货备注" class="w-full border border-gray-300 rounded px-3 py-2 text-sm resize-none" />
        <span class="absolute bottom-2 right-3 text-xs text-gray-400">{{ form.remark.length }} / 500</span>
      </div>
    </div>
  </FormModal>
</template>

<script setup>
import { reactive, watch } from 'vue';
import FormModal from '@/modules/order/components/FormModal.vue';
import { RETURN_REASON_OPTIONS } from '@/modules/acceptance/data/receive-by-item';

const props = defineProps({
  open: { type: Boolean, default: false }
});

const emit = defineEmits(['close', 'confirm']);

const form = reactive({ returnReason: '', remark: '' });

watch(() => props.open, open => {
  if (!open) return;
  form.returnReason = '';
  form.remark = '';
});

function submit() {
  if (!form.returnReason) return window.alert('请选择退货原因');
  emit('confirm', { ...form });
}
</script>
