<template>
  <div v-if="open" class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4" @click.self="emit('close')">
    <div class="bg-white rounded-lg shadow-xl w-full max-w-3xl flex flex-col max-h-[90vh]" @click.stop>
      <div class="flex items-center justify-between px-6 py-4 border-b border-gray-200 shrink-0">
        <h2 class="text-base font-medium text-gray-800">{{ mode === 'edit' ? '编辑订户' : '新增订户' }}</h2>
        <button type="button" class="text-gray-400 hover:text-gray-600 text-xl leading-none" @click="emit('close')">&times;</button>
      </div>
      <form class="px-6 py-5 overflow-y-auto flex-1 min-h-0 space-y-5" @submit.prevent="submit">
        <div class="space-y-4">
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
        </div>

        <div class="border border-gray-200 rounded-lg overflow-hidden">
          <div class="flex border-b border-gray-200 bg-slate-50">
            <button
              v-for="tab in PERMISSION_TABS"
              :key="tab.key"
              type="button"
              class="flex-1 px-3 py-2.5 text-sm border-b-2 -mb-px transition-colors"
              :class="activePermission === tab.key
                ? 'border-sky-600 text-sky-700 font-medium bg-white'
                : 'border-transparent text-gray-500 hover:text-gray-700'"
              @click="activePermission = tab.key"
            >
              {{ tab.label }}
            </button>
          </div>
          <div class="p-5 space-y-4 min-h-[200px]">
            <template v-if="activePermission === 'biz'">
              <div class="flex items-start gap-3">
                <label class="text-sm text-gray-600 w-28 text-right pt-2 shrink-0"><span class="text-red-500">*</span> 资源类型</label>
                <div class="flex-1 min-w-0">
                  <SiteMultiSelect v-model="form.types" :options="RESOURCE_TYPE_OPTIONS" placeholder="请选择" :error="errors.types" />
                </div>
              </div>
              <div class="flex items-start gap-3">
                <label class="text-sm text-gray-600 w-28 text-right pt-2 shrink-0"><span class="text-red-500">*</span> 预算管理</label>
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
            </template>

            <template v-else-if="activePermission === 'dedupDisplay'">
              <div class="flex items-start gap-3">
                <label class="text-sm text-gray-600 w-28 text-right pt-2 shrink-0">所属分馆</label>
                <div class="flex-1 min-w-0">
                  <SearchableMultiSelect
                    v-model="form.displayBranchCodes"
                    :options="displayBranchOptions"
                    placeholder="请选择所属分馆"
                  />
                </div>
              </div>
              <div class="flex items-start gap-3">
                <label class="text-sm text-gray-600 w-28 text-right pt-2 shrink-0">所属馆藏地</label>
                <div class="flex-1 min-w-0">
                  <SearchableMultiSelect
                    v-model="form.displayCollectionCodes"
                    :options="displayCollectionOptions"
                    placeholder="请选择所属馆藏地"
                  />
                </div>
              </div>
            </template>

            <template v-else>
              <div class="flex items-start gap-3">
                <label class="text-sm text-gray-600 w-28 text-right pt-2 shrink-0"><span class="text-red-500">*</span> 所属机构</label>
                <div class="flex-1 min-w-0">
                  <SearchableSingleSelect
                    v-model="form.institutionId"
                    :options="institutionOptions"
                    placeholder="请选择"
                    :error="errors.institutionId"
                  />
                </div>
              </div>
              <div class="flex items-start gap-3">
                <label class="text-sm text-gray-600 w-28 text-right pt-2 shrink-0">所属馆</label>
                <div class="flex-1 min-w-0">
                  <SearchableSingleSelect
                    v-model="form.branchId"
                    :options="orgBranchOptions"
                    placeholder="请选择"
                    :disabled="!form.institutionId"
                  />
                </div>
              </div>
              <div class="flex items-start gap-3">
                <label class="text-sm text-gray-600 w-28 text-right pt-2 shrink-0">所属馆藏地</label>
                <div class="flex-1 min-w-0">
                  <SearchableSingleSelect
                    v-model="form.collectionId"
                    :options="orgCollectionOptions"
                    placeholder="请选择"
                    :disabled="!form.branchId"
                  />
                </div>
              </div>
            </template>
          </div>
        </div>
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
  buildCollectionCodeSelectOptions
} from '@/modules/location/data/location-manage';
import { useLocationStore } from '@/modules/location/stores/location';
import {
  buildBranchSelectOptionsByInstitution,
  buildCollectionSelectOptionsByBranch,
  buildInstitutionSelectOptions,
  getCampusIdForBranch
} from '@/modules/subscriber/data/org-hierarchy';
import {
  BARCODE_TYPE_OPTIONS,
  BUDGET_OPTIONS,
  PERMISSION_TABS,
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
const { branchRows, collectionRows } = storeToRefs(locationStore);

const form = ref(createEmptyForm());
const errors = ref({});
const activePermission = ref('biz');
let syncingOrg = false;
let prevDisplayBranchCodes = [];

const institutionOptions = computed(() =>
  buildInstitutionSelectOptions([form.value.institutionId])
);

const orgBranchOptions = computed(() =>
  buildBranchSelectOptionsByInstitution(form.value.institutionId, branchRows.value, [form.value.branchId])
);

const orgCollectionOptions = computed(() =>
  buildCollectionSelectOptionsByBranch(form.value.branchId, collectionRows.value, [form.value.collectionId])
);

const displayBranchOptions = computed(() => buildBranchCodeSelectOptions(branchRows.value));

const displayCollectionOptions = computed(() =>
  buildCollectionCodeSelectOptions(
    collectionRows.value,
    branchRows.value,
    form.value.displayBranchCodes
  )
);

watch(() => props.open, open => {
  if (!open) return;
  errors.value = {};
  activePermission.value = 'biz';
  syncingOrg = true;
  form.value = props.mode === 'edit' && props.row
    ? createFormFromRow(props.row)
    : createEmptyForm();
  prevDisplayBranchCodes = [...form.value.displayBranchCodes];
  syncingOrg = false;
});

watch(() => form.value.institutionId, (next, prev) => {
  if (syncingOrg || next === prev) return;
  form.value.branchId = '';
  form.value.collectionId = '';
  form.value.campusId = '';
});

watch(() => form.value.branchId, (next, prev) => {
  if (syncingOrg || next === prev) return;
  form.value.collectionId = '';
  form.value.campusId = next ? getCampusIdForBranch(next, branchRows.value) : '';
});

watch(
  () => [...form.value.displayBranchCodes],
  (codes) => {
    const prev = prevDisplayBranchCodes;
    const nextSet = new Set(codes);
    const sameSet = prev.length === codes.length && prev.every(code => nextSet.has(code));
    if (sameSet) {
      prevDisplayBranchCodes = [...codes];
      return;
    }
    prevDisplayBranchCodes = [...codes];
    if (!form.value.displayCollectionCodes.length) return;
    const valid = new Set(displayCollectionOptions.value.map(opt => opt.value));
    const nextCollections = form.value.displayCollectionCodes.filter(code => valid.has(code));
    if (nextCollections.length !== form.value.displayCollectionCodes.length) {
      form.value.displayCollectionCodes = nextCollections;
    }
  }
);

function createEmptyForm() {
  return {
    name: '',
    remark: '',
    institutionId: '',
    campusId: '',
    branchId: '',
    collectionId: '',
    types: [],
    budgets: [],
    barcodeTypes: [],
    displayBranchCodes: [],
    displayCollectionCodes: []
  };
}

function createFormFromRow(row) {
  return {
    name: row.name || '',
    remark: row.remark || '',
    institutionId: row.institutionId || '',
    campusId: row.campusId || getCampusIdForBranch(row.branchId || '', branchRows.value) || '',
    branchId: row.branchId || '',
    collectionId: row.collectionId || '',
    types: [...(row.types || [])],
    budgets: [...(row.budgets || [])],
    barcodeTypes: [...(row.barcodeTypes || [])],
    displayBranchCodes: [...(row.displayBranchCodes || [])],
    displayCollectionCodes: [...(row.displayCollectionCodes || [])]
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
  if (!form.value.types.length) next.types = '请选择';
  if (!form.value.budgets.length) next.budgets = '请选择';
  if (!form.value.barcodeTypes.length) next.barcodeTypes = '请选择';
  if (!form.value.institutionId) next.institutionId = '请选择';
  errors.value = next;

  if (next.types || next.budgets || next.barcodeTypes) activePermission.value = 'biz';
  else if (next.institutionId) activePermission.value = 'org';

  return Object.keys(next).length === 0;
}

function submit() {
  if (!validate()) return;
  const campusId = form.value.branchId
    ? getCampusIdForBranch(form.value.branchId, branchRows.value)
    : '';
  emit('confirm', {
    name: form.value.name.trim(),
    remark: form.value.remark.trim(),
    institutionId: form.value.institutionId,
    campusId,
    branchId: form.value.branchId,
    collectionId: form.value.collectionId,
    types: [...form.value.types],
    budgets: [...form.value.budgets],
    barcodeTypes: [...form.value.barcodeTypes],
    displayBranchCodes: [...form.value.displayBranchCodes],
    displayCollectionCodes: [...form.value.displayCollectionCodes]
  });
}
</script>
