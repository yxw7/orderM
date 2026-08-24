<template>
  <FormModal
    v-if="open"
    title="请选择撤订原因"
    confirm-text="确认撤订"
    @close="emit('close')"
    @confirm="submit"
  >
    <ReasonSelect v-model="reason" reason-type="cancel" placeholder="请选择撤订原因" />
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

watch(() => props.open, open => {
  if (open) reason.value = '';
});

function submit() {
  if (!reason.value) return window.alert('请选择撤订原因');
  emit('confirm', reason.value);
}
</script>
