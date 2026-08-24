<template>
  <FormModal
    title="查重"
    width-class="w-full max-w-2xl"
    confirm-text="确定"
    loading-text="查重中..."
    :confirm-loading="submitting"
    @close="handleClose"
    @confirm="submit"
  >
    <div>
      <div class="text-sm text-gray-700 mb-3">重复类型</div>
      <div class="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-700">
        <label
          v-for="opt in duplicateTypeOptions"
          :key="opt.value"
          class="inline-flex items-center gap-2"
          :class="submitting ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'"
        >
          <input
            v-model="duplicateType"
            type="radio"
            :value="opt.value"
            class="text-sky-600"
            :disabled="submitting"
          >
          <span>{{ opt.label }}</span>
        </label>
      </div>
    </div>
    <div>
      <div class="text-sm text-gray-700 mb-3">查重字段</div>
      <div class="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-700">
        <label
          class="inline-flex items-center gap-2"
          :class="submitting ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'"
        >
          <input
            v-model="selectAll"
            type="checkbox"
            class="rounded text-sky-600"
            :disabled="submitting"
            @change="toggleAll"
          >
          <span>全部</span>
        </label>
        <label
          v-for="field in fields"
          :key="field.value"
          class="inline-flex items-center gap-2"
          :class="submitting ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'"
        >
          <input
            v-model="selectedFields"
            type="checkbox"
            :value="field.value"
            class="rounded text-sky-600"
            :disabled="submitting"
          >
          <span>{{ field.label }}</span>
        </label>
      </div>
    </div>
  </FormModal>
</template>

<script setup>
import { computed, ref, watch } from 'vue';
import FormModal from '@/modules/order/components/FormModal.vue';
import {
  findEmptyDedupFieldsOnLines,
  formatEmptyDedupFieldsMessage,
  getDedupDefaultFieldKeys,
  getDedupFields
} from '@/modules/order/data/dedup';
import { resolveLibrarianDedupScope } from '@/modules/subscriber/data/current-librarian';
import { useOrderStore } from '@/modules/order/stores/order';

const props = defineProps({
  resourceType: { type: String, default: '纸质书' },
  languageCategory: { type: String, default: '中文' }
});

const emit = defineEmits(['close']);

const store = useOrderStore();

const duplicateTypeOptions = [
  { value: 'all', label: '不限' },
  { value: 'order', label: '订单查重' },
  { value: 'holding', label: '馆藏查重' }
];

const duplicateType = ref('all');
const selectedFields = ref([]);
const submitting = ref(false);

const fields = computed(() => getDedupFields(props.resourceType, props.languageCategory));
const includeHoldingScope = computed(() => duplicateType.value === 'all' || duplicateType.value === 'holding');

const selectAll = computed({
  get: () => fields.value.length > 0 && selectedFields.value.length === fields.value.length,
  set: () => {}
});

watch(() => [props.resourceType, props.languageCategory], () => {
  selectedFields.value = [...getDedupDefaultFieldKeys(props.resourceType, props.languageCategory)];
}, { immediate: true });

watch(selectedFields, val => {
  selectAll.value = val.length === fields.value.length;
}, { deep: true });

function toggleAll(event) {
  selectedFields.value = event.target.checked ? fields.value.map(f => f.value) : [];
}

function handleClose() {
  if (submitting.value) return;
  emit('close');
}

/**
 * 提交查重配置（范围取自馆员关联订户编辑中的查重范围合并结果）
 */
async function submit() {
  if (submitting.value) return;

  if (!selectedFields.value.length) {
    window.alert('请至少选择一个查重字段');
    return;
  }

  const emptyFieldIssues = findEmptyDedupFieldsOnLines(
    store.lines,
    store.dedupTargetLineNos,
    selectedFields.value
  );
  if (emptyFieldIssues.length) {
    window.alert(formatEmptyDedupFieldsMessage(emptyFieldIssues));
    return;
  }

  const scope = includeHoldingScope.value
    ? resolveLibrarianDedupScope()
    : { branchCodes: [], collectionCodes: [] };

  submitting.value = true;
  try {
    await store.submitDedup({
      duplicateType: duplicateType.value,
      fieldKeys: [...selectedFields.value],
      branchCodes: scope.branchCodes,
      collectionCodes: scope.collectionCodes
    });
  } catch {
    window.alert('查重失败，请稍后重试');
    submitting.value = false;
  }
}
</script>
