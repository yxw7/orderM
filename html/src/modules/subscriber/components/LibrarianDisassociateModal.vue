<template>
  <FormModal
    v-if="open"
    title="取消关联"
    width-class="w-full max-w-2xl max-h-[90vh]"
    confirm-text="确定"
    @close="emit('close')"
    @confirm="emit('confirm')"
  >
    <p class="text-sm text-gray-600">确定取消馆员「{{ row?.name }}」与订户的关联关系？</p>
  </FormModal>
</template>

<script setup>
import FormModal from '@/modules/order/components/FormModal.vue';

defineProps({
  open: { type: Boolean, default: false },
  row: { type: Object, default: null }
});

defineEmits(['close', 'confirm']);
</script>
