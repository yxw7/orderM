<template>
  <FormModal
    v-if="open"
    title="撤销收货"
    width-class="w-full max-w-lg"
    :confirm-disabled="!revokeReasons.length"
    @close="emit('close')"
    @confirm="submit"
  >
    <p class="text-sm text-gray-600 mb-3">请选择撤销收货原因</p>
    <select
      v-model="reason"
      class="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-700 focus:outline-none focus:border-sky-500"
    >
      <option value="">请选择撤销收货原因</option>
      <option v-for="item in revokeReasons" :key="item.id" :value="item.content">
        {{ item.content }}
      </option>
    </select>
    <p v-if="!revokeReasons.length" class="text-sm text-amber-600 mt-2">
      暂无可用撤销收货原因，请先在「设置 - 退换撤订原因参数」中配置。
    </p>
  </FormModal>
</template>

<script setup>
import { computed, ref, watch } from 'vue';
import FormModal from '@/modules/order/components/FormModal.vue';
import { useReasonParamsStore } from '@/stores/reason-params';

const props = defineProps({
  open: { type: Boolean, default: false }
});

const emit = defineEmits(['close', 'confirm']);

const reasonParamsStore = useReasonParamsStore();
const reason = ref('');

const revokeReasons = computed(() => reasonParamsStore.getActiveByType('revokeReceive'));

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
