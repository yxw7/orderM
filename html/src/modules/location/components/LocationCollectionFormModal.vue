<template>
  <div v-if="open" class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4" @click.self="emit('close')">
    <div class="bg-white rounded-lg shadow-xl w-full max-w-lg flex flex-col max-h-[90vh]" @click.stop>
      <div class="flex items-center justify-between px-6 py-4 border-b border-gray-200 shrink-0">
        <h2 class="text-base font-medium text-gray-800">{{ mode === 'edit' ? '编辑馆藏地' : '新增馆藏地' }}</h2>
        <button type="button" class="text-gray-400 hover:text-gray-600 text-xl leading-none" @click="emit('close')">&times;</button>
      </div>
      <form class="px-6 py-5 space-y-4 overflow-y-auto" @submit.prevent="submit">
        <div class="flex items-start gap-3">
          <label class="text-sm text-gray-600 w-28 text-right pt-2 shrink-0"><span class="text-red-500">*</span> 馆址名称</label>
          <div class="flex-1">
            <select
              v-model="form.siteId"
              class="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-sky-500"
              :class="[
                errors.siteId ? 'border-red-500' : 'border-gray-300',
                mode === 'edit' ? 'bg-gray-50 text-gray-600 cursor-not-allowed border-gray-200' : ''
              ]"
              :disabled="mode === 'edit'"
              @change="onSiteChange"
            >
              <option value="">请选择</option>
              <option v-for="site in activeSites" :key="site.id" :value="site.id">{{ site.name }}</option>
            </select>
            <p v-if="errors.siteId" class="text-red-500 text-xs mt-1">{{ errors.siteId }}</p>
          </div>
        </div>
        <div class="flex items-start gap-3">
          <label class="text-sm text-gray-600 w-28 text-right pt-2 shrink-0"><span class="text-red-500">*</span> 分馆名称</label>
          <div class="flex-1">
            <select
              v-model="form.branchId"
              class="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-sky-500"
              :class="[
                errors.branchId ? 'border-red-500' : 'border-gray-300',
                mode === 'edit' || !form.siteId ? 'bg-gray-50 text-gray-600 cursor-not-allowed border-gray-200' : ''
              ]"
              :disabled="mode === 'edit' || !form.siteId"
            >
              <option value="">{{ form.siteId ? '请选择' : '请先选择馆址' }}</option>
              <option v-for="branch in branchOptions" :key="branch.id" :value="branch.id">{{ branch.name }}</option>
            </select>
            <p v-if="errors.branchId" class="text-red-500 text-xs mt-1">{{ errors.branchId }}</p>
          </div>
        </div>
        <div class="flex items-start gap-3">
          <label class="text-sm text-gray-600 w-28 text-right pt-2 shrink-0"><span class="text-red-500">*</span> 馆藏地编码</label>
          <div class="flex-1">
            <input
              v-model="form.code"
              type="text"
              placeholder="请输入"
              autocomplete="off"
              class="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-sky-500"
              :class="[
                errors.code ? 'border-red-500' : 'border-gray-300',
                mode === 'edit' ? 'bg-gray-50 text-gray-600 cursor-not-allowed border-gray-200' : ''
              ]"
              :readonly="mode === 'edit'"
            >
            <p v-if="errors.code" class="text-red-500 text-xs mt-1">{{ errors.code }}</p>
          </div>
        </div>
        <div class="flex items-start gap-3">
          <label class="text-sm text-gray-600 w-28 text-right pt-2 shrink-0"><span class="text-red-500">*</span> 馆藏地名称</label>
          <div class="flex-1">
            <input
              v-model="form.name"
              type="text"
              placeholder="请输入"
              autocomplete="off"
              class="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-sky-500"
              :class="errors.name ? 'border-red-500' : 'border-gray-300'"
            >
            <p v-if="errors.name" class="text-red-500 text-xs mt-1">{{ errors.name }}</p>
          </div>
        </div>
        <div class="flex items-start gap-3">
          <label class="text-sm text-gray-600 w-28 text-right pt-2 shrink-0"><span class="text-red-500">*</span> 状态</label>
          <div class="flex-1 pt-1">
            <StatusToggle v-model="form.statusEnabled" />
          </div>
        </div>
        <div class="flex items-start gap-3">
          <label class="text-sm text-gray-600 w-28 text-right pt-2 shrink-0">备注</label>
          <div class="flex-1">
            <textarea
              v-model="form.remark"
              rows="4"
              placeholder="请输入"
              class="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-sky-500 resize-none"
              :class="errors.remark ? 'border-red-500' : 'border-gray-300'"
            />
            <p v-if="errors.remark" class="text-red-500 text-xs mt-1">{{ errors.remark }}</p>
          </div>
        </div>
      </form>
      <div class="flex justify-end gap-3 px-6 py-4 border-t border-gray-200 bg-gray-50 rounded-b-lg shrink-0">
        <button type="button" class="px-5 py-1.5 text-sm rounded border border-gray-300 text-gray-600 hover:bg-gray-50" @click="emit('close')">取消</button>
        <button type="button" class="px-5 py-1.5 text-sm rounded bg-sky-600 text-white hover:bg-sky-700" @click="submit">提交</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue';
import StatusToggle from '@/modules/import-template/components/StatusToggle.vue';
import {
  getActiveBranchesBySiteId,
  getActiveSites,
  getBranchById,
  validateCollectionForm
} from '@/modules/location/data/location-manage';

const props = defineProps({
  open: { type: Boolean, default: false },
  mode: { type: String, default: 'add' },
  row: { type: Object, default: null },
  siteRows: { type: Array, default: () => [] },
  branchRows: { type: Array, default: () => [] },
  collectionRows: { type: Array, default: () => [] }
});

const emit = defineEmits(['close', 'confirm', 'invalid']);

const form = ref(createEmptyForm());
const errors = ref({});

const activeSites = computed(() => getActiveSites(props.siteRows));
const branchOptions = computed(() =>
  form.value.siteId ? getActiveBranchesBySiteId(props.branchRows, form.value.siteId) : []
);

function createEmptyForm() {
  return { collectionId: '', siteId: '', branchId: '', code: '', name: '', statusEnabled: true, remark: '' };
}

watch(() => props.open, open => {
  if (!open) return;
  errors.value = {};
  if (props.mode === 'edit' && props.row) {
    const branch = getBranchById(props.branchRows, props.row.branchId);
    form.value = {
      collectionId: props.row.id,
      siteId: branch?.siteId || '',
      branchId: props.row.branchId,
      code: props.row.code,
      name: props.row.name,
      statusEnabled: props.row.status === 'active',
      remark: props.row.remark || ''
    };
  } else {
    form.value = createEmptyForm();
  }
});

function onSiteChange() {
  if (props.mode === 'edit') return;
  form.value.branchId = '';
}

function submit() {
  const payload = {
    collectionId: form.value.collectionId || null,
    siteId: form.value.siteId,
    branchId: form.value.branchId,
    code: form.value.code.trim(),
    name: form.value.name.trim(),
    remark: form.value.remark || '',
    status: form.value.statusEnabled ? 'active' : 'inactive'
  };
  const result = validateCollectionForm(
    { ...payload, remark: form.value.remark },
    props.collectionRows,
    props.mode === 'edit'
  );
  if (!result.valid) {
    errors.value = result.errors;
    emit('invalid');
    return;
  }
  emit('confirm', payload);
}
</script>
