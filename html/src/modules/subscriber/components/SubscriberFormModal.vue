<template>
  <div v-if="open" class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4" @click.self="emit('close')">
    <div class="bg-white rounded-lg shadow-xl w-full max-w-xl flex flex-col max-h-[90vh]" @click.stop>
      <div class="flex items-center justify-between px-6 py-4 border-b border-gray-200 shrink-0">
        <h2 class="text-base font-medium text-gray-800">{{ mode === 'edit' ? '编辑订户' : '新增订户' }}</h2>
        <button type="button" class="text-gray-400 hover:text-gray-600 text-xl leading-none" @click="emit('close')">&times;</button>
      </div>
      <form class="px-6 py-5 space-y-4 overflow-y-auto flex-1 min-h-0" @submit.prevent="submit">
        <div class="flex items-start gap-3">
          <label class="text-sm text-gray-600 w-28 text-right pt-2 shrink-0"><span class="text-red-500">*</span> 订户名称</label>
          <div class="flex-1">
            <input
              v-model="form.name"
              type="text"
              maxlength="50"
              placeholder="请输入"
              autocomplete="off"
              class="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-sky-500"
              :class="errors.name ? 'border-red-500' : 'border-gray-300'"
            >
            <p v-if="errors.name" class="text-red-500 text-xs mt-1">{{ errors.name }}</p>
          </div>
        </div>
        <div class="flex items-start gap-3">
          <label class="text-sm text-gray-600 w-28 text-right pt-2 shrink-0"><span class="text-red-500">*</span> 单件所属馆</label>
          <div class="flex-1 min-w-0">
            <SearchableSingleSelect
              v-model="form.branchId"
              :options="branchOptions"
              placeholder="请选择"
              :error="errors.branchId"
            />
          </div>
        </div>
        <div class="flex items-start gap-3">
          <label class="text-sm text-gray-600 w-28 text-right pt-2 shrink-0"><span class="text-red-500">*</span> 资源类型</label>
          <div class="flex-1 min-w-0">
            <SiteMultiSelect v-model="form.types" :options="RESOURCE_TYPE_OPTIONS" placeholder="请选择" :error="errors.types" />
          </div>
        </div>
        <div class="flex items-start gap-3">
          <label class="text-sm text-gray-600 w-28 text-right pt-2 shrink-0"><span class="text-red-500">*</span> 预算名称</label>
          <div class="flex-1 min-w-0">
            <SiteMultiSelect v-model="form.budgets" :options="BUDGET_OPTIONS" placeholder="请选择" :error="errors.budgets" />
          </div>
        </div>
        <div class="flex items-start gap-3">
          <label class="text-sm text-gray-600 w-28 text-right pt-2 shrink-0"><span class="text-red-500">*</span> 条码号类型</label>
          <div class="flex-1 min-w-0">
            <SiteMultiSelect v-model="form.barcodeTypes" :options="BARCODE_TYPE_OPTIONS" placeholder="请选择" :error="errors.barcodeTypes" />
          </div>
        </div>
        <div class="flex items-start gap-3">
          <label class="text-sm text-gray-600 w-28 text-right pt-2 shrink-0">备注</label>
          <div class="flex-1">
            <textarea
              v-model="form.remark"
              rows="3"
              maxlength="500"
              placeholder="请输入"
              class="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-sky-500 resize-y"
              :class="errors.remark ? 'border-red-500' : 'border-gray-300'"
            />
            <p v-if="errors.remark" class="text-red-500 text-xs mt-1">{{ errors.remark }}</p>
          </div>
        </div>

        <div class="border-t border-gray-300 pt-4 space-y-4">
          <p class="text-xs text-gray-400 ml-[7.5rem]">查重范围 · 未选分馆/馆藏地视为不限</p>
          <div class="flex items-start gap-3">
            <label class="text-sm text-gray-600 w-28 text-right pt-2 shrink-0">所属分馆</label>
            <div class="flex-1 min-w-0">
              <SearchableMultiSelect
                v-model="form.dedupBranchCodes"
                :options="dedupBranchOptions"
                placeholder="请选择所属分馆"
              />
            </div>
          </div>
          <div class="flex items-start gap-3">
            <label class="text-sm text-gray-600 w-28 text-right pt-2 shrink-0">所属馆藏地</label>
            <div class="flex-1 min-w-0">
              <SearchableMultiSelect
                v-model="form.dedupCollectionCodes"
                :options="dedupCollectionOptions"
                placeholder="请选择所属馆藏地"
              />
            </div>
          </div>
        </div>
        <div class="border-t border-gray-300" />
      </form>
      <div class="flex justify-end gap-3 px-6 py-4 border-t border-gray-200 bg-gray-50 rounded-b-lg shrink-0">
        <button type="button" class="px-5 py-1.5 text-sm rounded border border-gray-300 text-gray-600 hover:bg-gray-50" @click="emit('close')">取消</button>
        <button type="button" class="px-5 py-1.5 text-sm rounded bg-sky-600 text-white hover:bg-sky-700" @click="submit">{{ mode === 'edit' ? '保存' : '提交' }}</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue';
import { storeToRefs } from 'pinia';
import SearchableMultiSelect from '@/components/common/SearchableMultiSelect.vue';
import SearchableSingleSelect from '@/components/common/SearchableSingleSelect.vue';
import SiteMultiSelect from '@/components/common/SiteMultiSelect.vue';
import {
  buildBranchCodeSelectOptions,
  buildCollectionCodeSelectOptions,
  formatBranchLabel
} from '@/modules/location/data/location-manage';
import { useLocationStore } from '@/modules/location/stores/location';
import {
  BARCODE_TYPE_OPTIONS,
  BUDGET_OPTIONS,
  RESOURCE_TYPE_OPTIONS
} from '@/modules/subscriber/data/subscriber-manage';

const props = defineProps({
  open: { type: Boolean, default: false },
  mode: { type: String, default: 'add' },
  row: { type: Object, default: null },
  existingNames: { type: Array, default: () => [] }
});

const emit = defineEmits(['close', 'confirm']);

const locationStore = useLocationStore();
locationStore.ensureInitialized();
const { activeBranchSelectOptions, branchRows, collectionRows } = storeToRefs(locationStore);

const form = ref(createEmptyForm());
const errors = ref({});
let prevDedupBranchCodes = [];

const branchOptions = computed(() => {
  const options = [...activeBranchSelectOptions.value];
  const currentId = form.value.branchId;
  if (!currentId || options.some(opt => opt.value === currentId)) return options;
  const current = branchRows.value.find(row => row.id === currentId);
  if (!current) return options;
  return [
    {
      value: current.id,
      label: formatBranchLabel(current),
      code: current.code,
      name: current.name
    },
    ...options
  ];
});

const dedupBranchOptions = computed(() => buildBranchCodeSelectOptions(branchRows.value));

const dedupCollectionOptions = computed(() =>
  buildCollectionCodeSelectOptions(collectionRows.value, branchRows.value, form.value.dedupBranchCodes)
);

watch(() => props.open, open => {
  if (!open) return;
  errors.value = {};
  form.value = props.mode === 'edit' && props.row
    ? createFormFromRow(props.row)
    : createEmptyForm();
  prevDedupBranchCodes = [...form.value.dedupBranchCodes];
});

watch(
  () => [...form.value.dedupBranchCodes],
  (codes) => {
    const prev = prevDedupBranchCodes;
    const nextSet = new Set(codes);
    const sameSet = prev.length === codes.length && prev.every(code => nextSet.has(code));
    if (sameSet) {
      prevDedupBranchCodes = [...codes];
      return;
    }
    prevDedupBranchCodes = [...codes];
    if (!form.value.dedupCollectionCodes.length) return;
    const valid = new Set(dedupCollectionOptions.value.map(opt => opt.value));
    const nextCollections = form.value.dedupCollectionCodes.filter(code => valid.has(code));
    if (nextCollections.length !== form.value.dedupCollectionCodes.length) {
      form.value.dedupCollectionCodes = nextCollections;
    }
  }
);

function createEmptyForm() {
  return {
    name: '',
    remark: '',
    branchId: '',
    types: [],
    budgets: [],
    barcodeTypes: [],
    dedupBranchCodes: [],
    dedupCollectionCodes: []
  };
}

function createFormFromRow(row) {
  return {
    name: row.name || '',
    remark: row.remark || '',
    branchId: row.branchId || '',
    types: [...(row.types || [])],
    budgets: [...(row.budgets || [])],
    barcodeTypes: [...(row.barcodeTypes || [])],
    dedupBranchCodes: [...(row.dedupBranchCodes || [])],
    dedupCollectionCodes: [...(row.dedupCollectionCodes || [])]
  };
}

function validate() {
  const next = {};
  const name = form.value.name.trim();
  if (!name) next.name = '请输入';
  else if (name.length > 50) next.name = '已超字符限制';
  else if (props.existingNames.includes(name) && (props.mode !== 'edit' || props.row?.name !== name)) {
    next.name = '已存在';
  }
  if (form.value.remark.length > 500) next.remark = '已超字符限制';
  if (!form.value.branchId) next.branchId = '请选择';
  if (!form.value.types.length) next.types = '请选择';
  if (!form.value.budgets.length) next.budgets = '请选择';
  if (!form.value.barcodeTypes.length) next.barcodeTypes = '请选择';
  errors.value = next;
  return Object.keys(next).length === 0;
}

function submit() {
  if (!validate()) return;
  emit('confirm', {
    name: form.value.name.trim(),
    remark: form.value.remark.trim(),
    branchId: form.value.branchId,
    types: [...form.value.types],
    budgets: [...form.value.budgets],
    barcodeTypes: [...form.value.barcodeTypes],
    dedupBranchCodes: [...form.value.dedupBranchCodes],
    dedupCollectionCodes: [...form.value.dedupCollectionCodes]
  });
}
</script>
