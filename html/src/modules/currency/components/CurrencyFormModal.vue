<template>
  <div v-if="open" class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4" @click.self="emit('close')">
    <div class="bg-white rounded-lg shadow-xl w-full max-w-2xl flex flex-col max-h-[90vh]" @click.stop>
      <div class="flex items-center justify-between px-6 py-4 border-b border-gray-200 shrink-0">
        <h2 class="text-base font-medium text-gray-800">{{ mode === 'edit' ? '编辑货币' : '新增货币' }}</h2>
        <button type="button" class="text-gray-400 hover:text-gray-600 text-xl leading-none" @click="emit('close')">&times;</button>
      </div>
      <form class="px-6 py-5 space-y-4 overflow-y-auto" @submit.prevent="submit">
        <div class="flex items-start gap-3">
          <label class="text-sm text-gray-600 w-28 text-right pt-2 shrink-0"><span class="text-red-500">*</span> 货币名称</label>
          <div class="flex-1">
            <input v-model="form.name" type="text" placeholder="请输入"
              class="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-sky-500"
              :class="errors.name ? 'border-red-500' : 'border-gray-300'">
            <p v-if="errors.name" class="text-red-500 text-xs mt-1">{{ errors.name }}</p>
          </div>
        </div>
        <div class="flex items-start gap-3">
          <label class="text-sm text-gray-600 w-28 text-right pt-2 shrink-0"><span class="text-red-500">*</span> 货币代码</label>
          <div class="flex-1">
            <input v-model="form.code" type="text" placeholder="请输入" maxlength="10"
              class="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-sky-500 uppercase"
              :class="errors.code ? 'border-red-500' : 'border-gray-300'"
              :readonly="mode === 'edit'">
            <p v-if="errors.code" class="text-red-500 text-xs mt-1">{{ errors.code }}</p>
          </div>
        </div>
        <div class="flex items-start gap-3">
          <label class="text-sm text-gray-600 w-28 text-right pt-2 shrink-0"><span class="text-red-500">*</span> 货币汇率</label>
          <div class="flex-1">
            <input v-model="form.rate" type="text" placeholder="请输入"
              class="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-sky-500"
              :class="errors.rate ? 'border-red-500' : 'border-gray-300'">
            <p v-if="errors.rate" class="text-red-500 text-xs mt-1">{{ errors.rate }}</p>
          </div>
        </div>
        <div class="flex items-start gap-3">
          <label class="text-sm text-gray-600 w-28 text-right pt-2 shrink-0">状态</label>
          <select v-model="form.status"
            class="flex-1 border border-gray-300 rounded px-3 py-2 text-sm text-gray-700 focus:outline-none focus:border-sky-500">
            <option value="active">使用中</option>
            <option value="disabled">已停用</option>
          </select>
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
import { validateCurrencyForm } from '@/modules/currency/data/currency-manage';

const props = defineProps({
  open: { type: Boolean, default: false },
  mode: { type: String, default: 'add' },
  row: { type: Object, default: null },
  existingCodes: { type: Array, default: () => [] }
});

const emit = defineEmits(['close', 'confirm']);

const form = ref({ name: '', code: '', rate: '', status: 'active' });
const errors = ref({});

watch(() => props.open, open => {
  if (!open) return;
  errors.value = {};
  if (props.mode === 'edit' && props.row) {
    form.value = {
      name: props.row.name,
      code: props.row.code,
      rate: props.row.rate,
      status: props.row.status
    };
  } else {
    form.value = { name: '', code: '', rate: '', status: 'active' };
  }
});

function submit() {
  const result = validateCurrencyForm(
    form.value,
    props.existingCodes,
    props.mode === 'edit' ? props.row?.code : ''
  );
  errors.value = result.errors;
  if (!result.valid) return;
  emit('confirm', result.normalized);
}
</script>
