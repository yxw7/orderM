<template>
  <FormModal
    v-if="open"
    title="撤销收货"
    width-class="w-full max-w-lg"
    :confirm-disabled="!reason"
    @close="emit('close')"
    @confirm="submit"
  >
    <p class="text-sm text-gray-600 mb-3">请选择撤销收货原因</p>
    <ReasonSelect v-model="reason" reason-type="revokeReceive" placeholder="请选择撤销收货原因" />
  </FormModal>
</template>

<script setup>
import { ref, watch } from 'vue';
import FormModal from '@/modules/order/components/FormModal.vue';
import ReasonSelect from '@/components/common/ReasonSelect.vue';

const props = defineProps({
  open: { type: Boolean, default: false }
});

const emit = defineEmits(['close', 'confirm']);

const reason = ref('');

watch(() => props.open, isOpen => {
  if (isOpen) reason.value = '';
});

function submit() {
  if (!reason.value) {
    window.alert('请选择撤销收货原因');
    return;
  }
  emit('confirm', reason.value);
}
</script>
