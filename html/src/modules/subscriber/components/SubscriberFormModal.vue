<template>
  <div v-if="open" class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4" @click.self="emit('close')">
    <div class="bg-white rounded-lg shadow-xl w-full max-w-2xl flex flex-col max-h-[90vh]" @click.stop>
      <div class="flex items-center justify-between px-6 py-4 border-b border-gray-200 shrink-0">
        <h2 class="text-base font-medium text-gray-800">{{ mode === 'edit' ? '编辑订户' : '新增订户' }}</h2>
        <button type="button" class="text-gray-400 hover:text-gray-600 text-xl leading-none" @click="emit('close')">&times;</button>
      </div>
      <form class="px-6 py-5 space-y-4 overflow-y-auto" @submit.prevent="submit">
        <div class="flex items-start gap-3">
          <label class="text-sm text-gray-600 w-28 text-right pt-2 shrink-0"><span class="text-red-500">*</span> 订户名称</label>
          <div class="flex-1">
            <input v-model="form.name" type="text" maxlength="50" placeholder="请输入" autocomplete="off"
              class="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-sky-500"
              :class="errors.name ? 'border-red-500' : 'border-gray-300'">
            <p v-if="errors.name" class="text-red-500 text-xs mt-1">{{ errors.name }}</p>
          </div>
        </div>
        <div class="flex items-start gap-3">
          <label class="text-sm text-gray-600 w-28 text-right pt-2 shrink-0"><span class="text-red-500">*</span> 所属馆</label>
          <div class="flex-1">
            <select v-model="form.siteId"
              class="w-full border rounded px-3 py-2 text-sm text-gray-700 focus:outline-none focus:border-sky-500"
              :class="errors.siteId ? 'border-red-500' : 'border-gray-300'">
              <option value="">请选择</option>
              <option v-for="site in activeSites" :key="site.id" :value="site.id">{{ site.name }}</option>
            </select>
            <p v-if="errors.siteId" class="text-red-500 text-xs mt-1">{{ errors.siteId }}</p>
          </div>
        </div>
        <div class="flex items-start gap-3">
          <label class="text-sm text-gray-600 w-28 text-right pt-2 shrink-0"><span class="text-red-500">*</span> 资源类型</label>
          <div class="flex-1">
            <SiteMultiSelect v-model="form.types" :options="RESOURCE_TYPE_OPTIONS" placeholder="请选择" :error="errors.types" />
          </div>
        </div>
        <div class="flex items-start gap-3">
          <label class="text-sm text-gray-600 w-28 text-right pt-2 shrink-0"><span class="text-red-500">*</span> 预算名称</label>
          <div class="flex-1">
            <SiteMultiSelect v-model="form.budgets" :options="BUDGET_OPTIONS" placeholder="请选择" :error="errors.budgets" />
          </div>
        </div>
        <div class="flex items-start gap-3">
          <label class="text-sm text-gray-600 w-28 text-right pt-2 shrink-0"><span class="text-red-500">*</span> 条码号类型</label>
          <div class="flex-1">
            <SiteMultiSelect v-model="form.barcodeTypes" :options="BARCODE_TYPE_OPTIONS" placeholder="请选择" :error="errors.barcodeTypes" />
          </div>
        </div>
        <div class="flex items-start gap-3">
          <label class="text-sm text-gray-600 w-28 text-right pt-2 shrink-0">备注</label>
          <div class="flex-1">
            <textarea v-model="form.remark" rows="4" maxlength="500" placeholder="请输入"
              class="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-sky-500 resize-y"
              :class="errors.remark ? 'border-red-500' : 'border-gray-300'" />
            <p v-if="errors.remark" class="text-red-500 text-xs mt-1">{{ errors.remark }}</p>
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
import { ref, watch } from 'vue';
import SiteMultiSelect from '@/components/common/SiteMultiSelect.vue';
import { useSiteSelectOptions } from '@/composables/use-site-options';
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

const { activeSites } = useSiteSelectOptions();
const form = ref(createEmptyForm());
const errors = ref({});

function createEmptyForm() {
  return { name: '', siteId: '', types: [], budgets: [], barcodeTypes: [], remark: '' };
}

watch(() => props.open, open => {
  if (!open) return;
  errors.value = {};
  if (props.mode === 'edit' && props.row) {
    form.value = {
      name: props.row.name,
      siteId: props.row.siteId || '',
      types: [...(props.row.types || [])],
      budgets: [...(props.row.budgets || [])],
      barcodeTypes: [...(props.row.barcodeTypes || [])],
      remark: props.row.remark || ''
    };
  } else {
    form.value = createEmptyForm();
  }
});

function validate() {
  const next = {};
  const name = form.value.name.trim();
  if (!form.value.siteId) next.siteId = '请选择';
  if (!name) next.name = '请输入';
  else if (name.length > 50) next.name = '已超字符限制';
  else if (props.existingNames.includes(name) && (props.mode !== 'edit' || props.row?.name !== name)) {
    next.name = '已存在';
  }
  if (!form.value.types.length) next.types = '请选择';
  if (!form.value.budgets.length) next.budgets = '请选择';
  if (!form.value.barcodeTypes.length) next.barcodeTypes = '请选择';
  if (form.value.remark.length > 500) next.remark = '已超字符限制';
  errors.value = next;
  return Object.keys(next).length === 0;
}

function submit() {
  if (!validate()) return;
  emit('confirm', {
    name: form.value.name.trim(),
    siteId: form.value.siteId,
    types: [...form.value.types],
    budgets: [...form.value.budgets],
    barcodeTypes: [...form.value.barcodeTypes],
    remark: form.value.remark.trim()
  });
}
</script>
