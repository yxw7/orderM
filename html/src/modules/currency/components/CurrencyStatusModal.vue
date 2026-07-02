<template>
  <FormModal
    v-if="open"
    :title="titleMap[action]"
    width-class="w-full max-w-2xl max-h-[90vh]"
    @close="emit('close')"
    @confirm="submit"
  >
    <div class="flex items-start gap-3">
      <label class="text-sm text-gray-600 w-28 text-right pt-2 shrink-0">名称</label>
      <input v-model="form.name" type="text" placeholder="请输入"
        class="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-sky-500">
    </div>
    <div class="flex items-start gap-3">
      <label class="text-sm text-gray-600 w-28 text-right pt-2 shrink-0">编码</label>
      <input v-model="form.code" type="text" placeholder="请输入"
        class="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-sky-500">
    </div>
    <div class="flex items-start gap-3">
      <label class="text-sm text-gray-600 w-28 text-right pt-2 shrink-0">备注</label>
      <input v-model="form.remark" type="text" placeholder="请输入"
        class="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-sky-500">
    </div>
  </FormModal>
</template>

<script setup>
import { ref, watch } from 'vue';
import FormModal from '@/modules/order/components/FormModal.vue';

const titleMap = {
  disable: '停用货币',
  enable: '启用货币',
  delete: '删除货币'
};

const props = defineProps({
  open: { type: Boolean, default: false },
  action: { type: String, default: 'disable' },
  row: { type: Object, default: null }
});

const emit = defineEmits(['close', 'confirm']);

const form = ref({ name: '', code: '', remark: '' });

watch(() => props.open, open => {
  if (open && props.row) {
    form.value = { name: props.row.name, code: props.row.code, remark: '' };
  }
});

function submit() {
  emit('confirm', { ...form.value });
}
</script>
