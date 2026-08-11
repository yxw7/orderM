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
    <div v-if="showBranchScope" class="space-y-4">
      <div class="text-sm text-gray-700">
        查重范围
        <span class="text-gray-400">（未选择时按不限范围查重）</span>
      </div>
      <div class="flex items-start gap-3">
        <label class="text-sm text-gray-600 w-24 text-right pt-2 shrink-0">所属分馆</label>
        <div class="flex-1 min-w-0">
          <SearchableMultiSelect
            v-model="selectedBranchCodes"
            :options="branchOptions"
            placeholder="请选择所属分馆"
            :disabled="submitting"
          />
        </div>
      </div>
      <div class="flex items-start gap-3">
        <label class="text-sm text-gray-600 w-24 text-right pt-2 shrink-0">所属馆藏地</label>
        <div class="flex-1 min-w-0">
          <SearchableMultiSelect
            v-model="selectedCollectionCodes"
            :options="collectionOptions"
            placeholder="请选择所属馆藏地"
            :disabled="submitting"
          />
        </div>
      </div>
    </div>
  </FormModal>
</template>

<script setup>
import { computed, onMounted, ref, watch } from 'vue';
import SearchableMultiSelect from '@/components/common/SearchableMultiSelect.vue';
import FormModal from '@/modules/order/components/FormModal.vue';
import {
  buildBranchCodeSelectOptions,
  buildCollectionCodeSelectOptions
} from '@/modules/location/data/location-manage';
import { useLocationStore } from '@/modules/location/stores/location';
import {
  findEmptyDedupFieldsOnLines,
  formatEmptyDedupFieldsMessage,
  getDedupDefaultFieldKeys,
  getDedupFields
} from '@/modules/order/data/dedup';
import { useOrderStore } from '@/modules/order/stores/order';

const props = defineProps({
  resourceType: { type: String, default: '纸质书' },
  languageCategory: { type: String, default: '中文' }
});

const emit = defineEmits(['close']);

const store = useOrderStore();
const locationStore = useLocationStore();

const duplicateTypeOptions = [
  { value: 'all', label: '不限' },
  { value: 'order', label: '订单查重' },
  { value: 'holding', label: '馆藏查重' }
];

const duplicateType = ref('all');
const selectedFields = ref([]);
const selectedBranchCodes = ref([]);
const selectedCollectionCodes = ref([]);
const submitting = ref(false);

const fields = computed(() => getDedupFields(props.resourceType, props.languageCategory));
const showBranchScope = computed(() => duplicateType.value === 'all' || duplicateType.value === 'holding');

/** 四级馆藏地：使用中分馆（分馆编码 | 分馆名称） */
const branchOptions = computed(() => buildBranchCodeSelectOptions(locationStore.branchRows));

/** 四级馆藏地：已选分馆时取其下级馆藏地并集；未选分馆时展示全部使用中馆藏地 */
const collectionOptions = computed(() =>
  buildCollectionCodeSelectOptions(
    locationStore.collectionRows,
    locationStore.branchRows,
    selectedBranchCodes.value
  )
);

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

watch(selectedBranchCodes, () => {
  if (!selectedCollectionCodes.value.length) return;
  const valid = new Set(collectionOptions.value.map(opt => opt.value));
  const next = selectedCollectionCodes.value.filter(code => valid.has(code));
  if (next.length !== selectedCollectionCodes.value.length) {
    selectedCollectionCodes.value = next;
  }
}, { deep: true });

onMounted(() => {
  locationStore.ensureInitialized();
});

function toggleAll(event) {
  selectedFields.value = event.target.checked ? fields.value.map(f => f.value) : [];
}

function handleClose() {
  if (submitting.value) return;
  emit('close');
}

/**
 * 提交查重配置（防抖：加载中忽略重复点击）
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

  submitting.value = true;
  try {
    await store.submitDedup({
      duplicateType: duplicateType.value,
      fieldKeys: [...selectedFields.value],
      branchCodes: showBranchScope.value ? [...selectedBranchCodes.value] : [],
      collectionCodes: showBranchScope.value ? [...selectedCollectionCodes.value] : []
    });
  } catch {
    window.alert('查重失败，请稍后重试');
    submitting.value = false;
  }
}
</script>
