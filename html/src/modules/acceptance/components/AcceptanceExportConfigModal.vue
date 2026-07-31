<template>
  <FormModal
    :open="open"
    title="导出配置"
    :width-class="isTypedLayout ? 'w-full max-w-5xl max-h-[90vh]' : 'w-full max-w-3xl max-h-[90vh]'"
    :body-class="isTypedLayout ? '!p-0 overflow-hidden flex flex-col' : ''"
    @close="emit('close')"
    @confirm="emit('confirm', selectedFields)"
  >
    <div v-if="isTypedLayout" class="flex min-h-[360px] max-h-[70vh]">
      <aside class="w-36 shrink-0 border-r border-gray-200 bg-gray-50 py-3">
        <div class="px-4 py-2 text-sm text-sky-600 font-medium border-r-2 border-sky-600 bg-white">
          {{ resourceTypeLabel }}
        </div>
      </aside>
      <div class="flex-1 min-w-0 px-5 py-4 overflow-y-auto">
        <label class="inline-flex items-center gap-2 text-sm text-gray-700 mb-4">
          <input v-model="selectAll" type="checkbox" class="rounded text-sky-600" @change="toggleAll">
          <span class="font-medium">全选</span>
        </label>
        <div class="grid grid-cols-6 gap-x-3 gap-y-3 text-sm text-gray-700">
          <label
            v-for="field in headerFields"
            :key="`h-${field}`"
            class="inline-flex items-center gap-2 min-w-0"
          >
            <input v-model="selectedFields" type="checkbox" :value="field" class="rounded text-sky-600 shrink-0">
            <span class="truncate" :title="field">{{ field }}</span>
          </label>
        </div>
        <div class="border-t border-gray-200 my-4" />
        <div class="grid grid-cols-6 gap-x-3 gap-y-3 text-sm text-gray-700">
          <label
            v-for="field in detailFields"
            :key="`d-${field}`"
            class="inline-flex items-center gap-2 min-w-0"
          >
            <input v-model="selectedFields" type="checkbox" :value="field" class="rounded text-sky-600 shrink-0">
            <span class="truncate" :title="field">{{ field }}</span>
          </label>
        </div>
      </div>
    </div>

    <template v-else>
      <label class="inline-flex items-center gap-2 text-sm text-gray-700 mb-4">
        <input v-model="selectAll" type="checkbox" class="rounded text-sky-600" @change="toggleAll">
        <span class="font-medium">全选</span>
      </label>
      <div class="grid grid-cols-4 gap-3 text-sm text-gray-700 max-h-80 overflow-y-auto">
        <label v-for="field in flatFields" :key="field" class="inline-flex items-center gap-2">
          <input v-model="selectedFields" type="checkbox" :value="field" class="rounded text-sky-600">
          <span>{{ field }}</span>
        </label>
      </div>
    </template>
  </FormModal>
</template>

<script setup>
import { computed, ref, watch } from 'vue';
import FormModal from '@/modules/order/components/FormModal.vue';
import { getAcceptanceDetailExportFieldGroups } from '@/modules/acceptance/constants';

const props = defineProps({
  open: { type: Boolean, default: false },
  /** 扁平字段列表（验收单列表导出等） */
  fields: { type: Array, default: () => [] },
  /**
   * 验收详情按资源类型导出配置；传入后走左侧类型 + 头/明细分组布局
   * @type {'纸质书'|'视听资料'|''}
   */
  resourceType: { type: String, default: '' },
  /**
   * 按种 / 按册：决定使用哪套明细字段（与按种配置相互独立）
   * @type {'species'|'volume'}
   */
  viewMode: { type: String, default: 'species' }
});

const emit = defineEmits(['close', 'confirm']);

const selectedFields = ref([]);
const selectAll = ref(true);

const isTypedLayout = computed(() => Boolean(props.resourceType));

const resourceTypeLabel = computed(() => props.resourceType || '纸质书');

const typedGroups = computed(() => (
  isTypedLayout.value
    ? getAcceptanceDetailExportFieldGroups(props.resourceType, props.viewMode === 'volume' ? 'volume' : 'species')
    : { header: [], detail: [] }
));

const headerFields = computed(() => typedGroups.value.header);
const detailFields = computed(() => typedGroups.value.detail);

const flatFields = computed(() => props.fields || []);

const allFields = computed(() => (
  isTypedLayout.value
    ? [...headerFields.value, ...detailFields.value]
    : [...flatFields.value]
));

watch(
  () => [props.open, props.resourceType, props.viewMode, props.fields],
  ([isOpen]) => {
    if (!isOpen) return;
    selectedFields.value = [...allFields.value];
    selectAll.value = true;
  }
);

watch(selectedFields, vals => {
  const total = allFields.value.length;
  selectAll.value = total > 0 && vals.length === total;
});

function toggleAll() {
  selectedFields.value = selectAll.value ? [...allFields.value] : [];
}
</script>
