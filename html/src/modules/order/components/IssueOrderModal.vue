<template>
  <FormModal
    v-if="open"
    title="请填写发订备注："
    width-class="w-full max-w-lg"
    body-class="py-2"
    @close="emit('close')"
    @confirm="submit"
  >
    <textarea
      v-model="remark"
      rows="8"
      autocomplete="off"
      class="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-sky-500 resize-y min-h-[180px]"
    />
  </FormModal>
</template>

<script setup>
import { ref, watch } from 'vue';
import FormModal from '@/modules/order/components/FormModal.vue';

const props = defineProps({
  open: { type: Boolean, default: false }
});

const emit = defineEmits(['close', 'confirm']);

const remark = ref('');

watch(() => props.open, open => {
  if (open) remark.value = '';
});

function submit() {
  emit('confirm', remark.value);
}
</script>
