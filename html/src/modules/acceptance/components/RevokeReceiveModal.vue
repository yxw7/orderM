<template>
  <FormModal
    v-if="open"
    title="撤销收货"
    width-class="w-full max-w-lg"
    @close="emit('close')"
    @confirm="submit"
  >
    <p class="text-sm text-gray-600 mb-4">请选择撤销收货原因（可多选）</p>
    <div class="space-y-2 max-h-56 overflow-y-auto">
      <label v-for="reason in reasons" :key="reason.id" class="flex items-center gap-2 text-sm text-gray-700">
        <input v-model="selected" type="checkbox" :value="reason.content" class="rounded text-sky-600">
        <span>{{ reason.content }}</span>
      </label>
    </div>
  </FormModal>
</template>

<script setup>
import { ref, watch } from 'vue';
import FormModal from '@/modules/order/components/FormModal.vue';
import { defaultReasonData } from '@/data/mock-reason-params';

const props = defineProps({
  open: { type: Boolean, default: false }
});

const emit = defineEmits(['close', 'confirm']);

const reasons = defaultReasonData.revokeReceive.filter(r => r.status === 'active');
const selected = ref([]);

watch(() => props.open, isOpen => {
  if (isOpen) selected.value = [];
});

function submit() {
  if (!selected.value.length) {
    window.alert('请选择撤销收货原因');
    return;
  }
  emit('confirm', [...selected.value]);
}
</script>
