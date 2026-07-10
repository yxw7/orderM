<template>
  <FormModal
    :open="open"
    title="导出配置"
    width-class="w-full max-w-3xl max-h-[90vh]"
    @close="emit('close')"
    @confirm="emit('confirm', selectedFields)"
  >
    <label class="inline-flex items-center gap-2 text-sm text-gray-700 mb-4">
      <input v-model="selectAll" type="checkbox" class="rounded text-sky-600" @change="toggleAll">
      <span class="font-medium">全选</span>
    </label>
    <div class="grid grid-cols-4 gap-3 text-sm text-gray-700 max-h-80 overflow-y-auto">
      <label v-for="field in fields" :key="field" class="inline-flex items-center gap-2">
        <input v-model="selectedFields" type="checkbox" :value="field" class="rounded text-sky-600">
        <span>{{ field }}</span>
      </label>
    </div>
  </FormModal>
</template>

<script setup>
import { ref, watch } from 'vue';
import FormModal from '@/modules/order/components/FormModal.vue';

const props = defineProps({
  open: { type: Boolean, default: false },
  fields: { type: Array, default: () => [] }
});

const emit = defineEmits(['close', 'confirm']);

const selectedFields = ref([]);
const selectAll = ref(true);

watch(
  () => [props.open, props.fields],
  ([isOpen, fields]) => {
    if (!isOpen) return;
    selectedFields.value = [...fields];
    selectAll.value = true;
  }
);

function toggleAll() {
  selectedFields.value = selectAll.value ? [...props.fields] : [];
}
</script>
