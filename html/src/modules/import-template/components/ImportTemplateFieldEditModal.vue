<template>
  <div v-if="open" class="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 p-4" @click.self="emit('close')">
    <div class="bg-white rounded-lg shadow-xl w-full max-w-lg" @click.stop>
      <div class="flex items-center justify-between px-6 py-4 border-b border-gray-200">
        <h2 class="text-base font-medium text-gray-800">编辑字段</h2>
        <button type="button" class="text-gray-400 hover:text-gray-600 text-xl leading-none" @click="emit('close')">&times;</button>
      </div>
      <form class="px-6 py-5 space-y-4" @submit.prevent="submit">
        <div class="flex items-start gap-3">
          <label class="text-sm text-gray-600 w-24 text-right pt-2 shrink-0">字段代码</label>
          <input :value="field?.fieldCode" type="text" readonly
            class="flex-1 border border-gray-200 rounded px-3 py-2 text-sm bg-gray-50 text-gray-600 cursor-not-allowed">
        </div>
        <div class="flex items-start gap-3">
          <label class="text-sm text-gray-600 w-24 text-right pt-2 shrink-0">字段名</label>
          <input :value="field?.fieldName" type="text" readonly
            class="flex-1 border border-gray-200 rounded px-3 py-2 text-sm bg-gray-50 text-gray-600 cursor-not-allowed">
        </div>
        <div class="flex items-start gap-3">
          <label class="text-sm text-gray-600 w-24 text-right pt-2 shrink-0"><span class="text-red-500">*</span> 显示名</label>
          <div class="flex-1">
            <input v-model="form.displayName" type="text" placeholder="请输入"
              class="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-sky-500"
              :class="errors.displayName ? 'border-red-500' : 'border-gray-300'">
            <p v-if="errors.displayName" class="text-red-500 text-xs mt-1">{{ errors.displayName }}</p>
          </div>
        </div>
        <div class="flex items-start gap-3">
          <label class="text-sm text-gray-600 w-24 text-right pt-2 shrink-0">是否必填</label>
          <select v-model="form.required"
            class="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-sky-500">
            <option value="yes">是</option>
            <option value="no">否</option>
          </select>
        </div>
        <div class="flex items-start gap-3">
          <label class="text-sm text-gray-600 w-24 text-right pt-2 shrink-0">默认值</label>
          <input v-model="form.defaultValue" type="text" placeholder="请输入"
            class="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-sky-500">
        </div>
        <div class="flex items-start gap-3">
          <label class="text-sm text-gray-600 w-24 text-right pt-2 shrink-0"><span class="text-red-500">*</span> 排序值</label>
          <div class="flex-1">
            <input v-model="form.sortValue" type="number" min="1" placeholder="请输入"
              class="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-sky-500"
              :class="errors.sortValue ? 'border-red-500' : 'border-gray-300'">
            <p v-if="errors.sortValue" class="text-red-500 text-xs mt-1">{{ errors.sortValue }}</p>
          </div>
        </div>
      </form>
      <div class="flex justify-end gap-3 px-6 py-4 border-t border-gray-200 bg-gray-50 rounded-b-lg">
        <button type="button" class="px-5 py-1.5 text-sm rounded border border-gray-300 text-gray-600 hover:bg-gray-50" @click="emit('close')">取消</button>
        <button type="button" class="px-5 py-1.5 text-sm rounded bg-sky-600 text-white hover:bg-sky-700" @click="submit">确定</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  open: { type: Boolean, default: false },
  field: { type: Object, default: null }
});

const emit = defineEmits(['close', 'confirm']);

const form = ref({ displayName: '', required: 'yes', defaultValue: '', sortValue: '' });
const errors = ref({});

watch(() => props.open, open => {
  if (!open || !props.field) return;
  errors.value = {};
  form.value = {
    displayName: props.field.displayName,
    required: props.field.required ? 'yes' : 'no',
    defaultValue: props.field.defaultValue || '',
    sortValue: String(props.field.sortValue)
  };
});

function submit() {
  const next = {};
  if (!form.value.displayName.trim()) next.displayName = '请输入';
  const sortValue = Number(form.value.sortValue);
  if (!form.value.sortValue || Number.isNaN(sortValue) || sortValue < 1) next.sortValue = '请输入';
  errors.value = next;
  if (Object.keys(next).length) return;
  emit('confirm', {
    displayName: form.value.displayName.trim(),
    required: form.value.required === 'yes',
    defaultValue: form.value.defaultValue.trim(),
    sortValue
  });
}
</script>
