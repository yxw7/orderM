<template>
  <FormModal
    v-if="open"
    title="请选择撤订原因"
    confirm-text="确认撤订"
    @close="emit('close')"
    @confirm="submit"
  >
    <select v-model="reason" class="w-full border border-gray-300 rounded px-3 py-2 text-sm">
      <option value="">请选择撤订原因</option>
      <option v-for="opt in CANCEL_REASON_OPTIONS" :key="opt" :value="opt">{{ opt }}</option>
    </select>
  </FormModal>
</template>

<script setup>
import { ref, watch } from 'vue';
import FormModal from '@/modules/order/components/FormModal.vue';
import { CANCEL_REASON_OPTIONS } from '@/modules/acceptance/data/shortage-manage';

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
