<template>
  <FormModal
    v-if="open"
    title="删除订单"
    width-class="w-full max-w-md"
    @close="emit('close')"
    @confirm="emit('confirm')"
  >
    <p class="text-sm text-gray-700">
      确定删除订单「{{ orderId }}」吗？删除后不可恢复。
    </p>
  </FormModal>
</template>

<script setup>
import FormModal from '@/modules/order/components/FormModal.vue';

defineProps({
  open: { type: Boolean, default: false },
  orderId: { type: String, default: '' }
});

const emit = defineEmits(['close', 'confirm']);
</script>
