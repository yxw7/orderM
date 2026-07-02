<template>
  <div v-if="open" class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4" @click.self="emit('close')">
    <div class="bg-white rounded-lg shadow-xl w-full max-w-2xl flex flex-col max-h-[90vh]" @click.stop>
      <div class="flex items-center justify-between px-6 py-4 border-b border-gray-200 shrink-0">
        <h2 class="text-base font-medium text-gray-800">{{ mode === 'edit' ? '编辑导入模板' : '新增导入模板' }}</h2>
        <button type="button" class="text-gray-400 hover:text-gray-600 text-xl leading-none" @click="emit('close')">&times;</button>
      </div>
      <form class="px-6 py-5 space-y-4 overflow-y-auto" @submit.prevent="submit">
        <div class="flex items-start gap-3">
          <label class="text-sm text-gray-600 w-28 text-right pt-2 shrink-0"><span class="text-red-500">*</span> 采访资源类型</label>
          <div class="flex-1">
            <select v-model="form.resourceType"
              class="w-full border rounded px-3 py-2 text-sm text-gray-700 focus:outline-none focus:border-sky-500"
              :class="errors.resourceType ? 'border-red-500' : 'border-gray-300'">
              <option value="">请选择</option>
              <option value="纸质图书">纸质图书</option>
              <option value="视听资料">视听资料</option>
            </select>
            <p v-if="errors.resourceType" class="text-red-500 text-xs mt-1">{{ errors.resourceType }}</p>
          </div>
        </div>
        <div class="flex items-start gap-3">
          <label class="text-sm text-gray-600 w-28 text-right pt-2 shrink-0"><span class="text-red-500">*</span> 语种</label>
          <div class="flex-1">
            <select v-model="form.language"
              class="w-full border rounded px-3 py-2 text-sm text-gray-700 focus:outline-none focus:border-sky-500"
              :class="errors.language ? 'border-red-500' : 'border-gray-300'">
              <option value="">请选择</option>
              <option value="中文">中文</option>
              <option value="外文">外文</option>
            </select>
            <p v-if="errors.language" class="text-red-500 text-xs mt-1">{{ errors.language }}</p>
          </div>
        </div>
        <div class="flex items-start gap-3">
          <label class="text-sm text-gray-600 w-28 text-right pt-2 shrink-0"><span class="text-red-500">*</span> 模板名称</label>
          <div class="flex-1">
            <input v-model="form.templateName" type="text" maxlength="64" placeholder="请输入"
              class="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-sky-500"
              :class="errors.templateName ? 'border-red-500' : 'border-gray-300'">
            <p v-if="errors.templateName" class="text-red-500 text-xs mt-1">{{ errors.templateName }}</p>
          </div>
        </div>
        <div class="flex items-start gap-3">
          <label class="text-sm text-gray-600 w-28 text-right pt-2 shrink-0">关联订户</label>
          <div class="flex-1">
            <SiteMultiSelect v-model="form.subscribers" :options="SUBSCRIBER_OPTIONS" placeholder="请选择" />
          </div>
        </div>
        <div class="flex items-start gap-3">
          <label class="text-sm text-gray-600 w-28 text-right pt-2 shrink-0">状态</label>
          <StatusToggle v-model="form.statusEnabled" />
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
        <button type="button" class="px-5 py-1.5 text-sm rounded bg-sky-600 text-white hover:bg-sky-700" @click="submit">确定</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import SiteMultiSelect from '@/components/common/SiteMultiSelect.vue';
import StatusToggle from '@/modules/import-template/components/StatusToggle.vue';
import {
  SUBSCRIBER_OPTIONS,
  fromFormResourceType,
  toFormResourceType,
  validateTemplateForm
} from '@/modules/import-template/data/import-template-manage';

const props = defineProps({
  open: { type: Boolean, default: false },
  mode: { type: String, default: 'add' },
  row: { type: Object, default: null },
  existingNames: { type: Array, default: () => [] },
  excludeIndex: { type: Number, default: -1 }
});

const emit = defineEmits(['close', 'confirm', 'invalid']);

const form = ref(createEmptyForm());
const errors = ref({});

function createEmptyForm() {
  return {
    resourceType: '',
    language: '',
    templateName: '',
    subscribers: [],
    statusEnabled: true,
    remark: ''
  };
}

watch(() => props.open, open => {
  if (!open) return;
  errors.value = {};
  if (props.mode === 'edit' && props.row) {
    form.value = {
      resourceType: toFormResourceType(props.row),
      language: props.row.language,
      templateName: props.row.templateName,
      subscribers: [...(props.row.subscribers || [])],
      statusEnabled: props.row.status === 'active',
      remark: props.row.remark || ''
    };
  } else {
    form.value = createEmptyForm();
  }
});

function submit() {
  const { valid, errors: nextErrors } = validateTemplateForm(form.value, props.existingNames, props.excludeIndex);
  errors.value = nextErrors;
  if (!valid) {
    emit('invalid');
    return;
  }
  const resource = fromFormResourceType(form.value.resourceType);
  emit('confirm', {
    subscribers: [...form.value.subscribers],
    resourceType: resource.resourceType,
    resourceTypeFilter: resource.resourceTypeFilter,
    language: form.value.language,
    templateName: form.value.templateName.trim(),
    status: form.value.statusEnabled ? 'active' : 'inactive',
    remark: form.value.remark.trim()
  });
}
</script>
