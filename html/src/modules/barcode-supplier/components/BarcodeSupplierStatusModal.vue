<template>
  <FormModal
    v-if="open"
    :title="titleMap[action]"
    width-class="w-full max-w-2xl max-h-[90vh]"
    @close="emit('close')"
    @confirm="emit('confirm')"
  >
    <div class="flex items-start gap-3">
      <label class="text-sm text-gray-600 w-28 text-right pt-2 shrink-0">名称</label>
      <input :value="row?.supplierName || ''" type="text" readonly
        class="flex-1 border border-gray-200 rounded px-3 py-2 text-sm bg-gray-50 text-gray-600 cursor-not-allowed">
    </div>
    <div class="flex items-start gap-3">
      <label class="text-sm text-gray-600 w-28 text-right pt-2 shrink-0">编码</label>
      <input :value="row?.supplierCode || ''" type="text" readonly
        class="flex-1 border border-gray-200 rounded px-3 py-2 text-sm bg-gray-50 text-gray-600 cursor-not-allowed">
    </div>
    <div class="flex items-start gap-3">
      <label class="text-sm text-gray-600 w-28 text-right pt-2 shrink-0">备注</label>
      <input v-model="remark" type="text" placeholder="请输入"
        class="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-sky-500">
    </div>
  </FormModal>
</template>

<script setup>
import { ref, watch } from 'vue';
import FormModal from '@/modules/order/components/FormModal.vue';

const titleMap = {
  disable: '停用条码号供应商代码',
  enable: '启用条码号供应商代码',
  delete: '删除条码号供应商代码'
};

const props = defineProps({
  open: { type: Boolean, default: false },
  action: { type: String, default: 'disable' },
  row: { type: Object, default: null }
});

const emit = defineEmits(['close', 'confirm']);

const remark = ref('');

watch(() => props.open, open => {
  if (open) remark.value = '';
});
</script>
