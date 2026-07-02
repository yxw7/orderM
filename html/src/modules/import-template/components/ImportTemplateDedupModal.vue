<template>
  <div v-if="open" class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4" @click.self="emit('close')">
    <div class="bg-white rounded-lg shadow-xl w-full max-w-lg flex flex-col max-h-[90vh]" @click.stop>
      <div class="flex items-center justify-between px-6 py-4 border-b border-gray-200 shrink-0">
        <h2 class="text-base font-medium text-gray-800">查重规则</h2>
        <button type="button" class="text-gray-400 hover:text-gray-600 text-xl leading-none" @click="emit('close')">&times;</button>
      </div>
      <form class="px-6 py-5 space-y-4 overflow-y-auto" @submit.prevent="submit">
        <div class="flex items-start gap-3">
          <label class="text-sm text-gray-600 w-28 text-right pt-2 shrink-0"><span class="text-red-500">*</span> 规则名称</label>
          <div class="flex-1">
            <input v-model="form.ruleName" type="text" :maxlength="DEDUP_RULE_NAME_MAX" placeholder="请输入"
              class="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-sky-500"
              :class="errors.ruleName ? 'border-red-500' : 'border-gray-300'">
            <p v-if="errors.ruleName" class="text-red-500 text-xs mt-1">{{ errors.ruleName }}</p>
          </div>
        </div>
        <div class="flex items-start gap-3">
          <label class="text-sm text-gray-600 w-28 text-right pt-2 shrink-0"><span class="text-red-500">*</span> 字段组合</label>
          <div class="flex-1 relative" ref="comboRef">
            <div
              class="min-h-[38px] border rounded px-2 py-1.5 flex flex-wrap gap-1.5 items-center cursor-text bg-white"
              :class="errors.fieldCombo ? 'border-red-500' : 'border-gray-300'"
              @click="dropdownOpen = !dropdownOpen"
            >
              <span
                v-for="code in selectedCodes"
                :key="code"
                class="inline-flex items-center gap-1 bg-white border border-gray-200 rounded px-2 py-0.5 text-sm text-gray-700"
              >
                {{ fieldNameMap[code] || code }}
                <button type="button" class="text-gray-400 hover:text-gray-600 leading-none" @click.stop="removeCode(code)">&times;</button>
              </span>
              <span v-if="!selectedCodes.length" class="text-sm text-gray-400 px-1">请选择</span>
              <span class="ml-auto text-gray-400 text-xs pr-1">▼</span>
            </div>
            <div
              v-if="dropdownOpen"
              class="absolute left-0 right-0 top-full mt-1 bg-white border border-gray-200 rounded shadow-lg z-10 max-h-48 overflow-auto"
            >
              <ul class="py-1 text-sm">
                <li v-if="!availableFields.length" class="px-3 py-2 text-gray-400">无可选字段</li>
                <li v-for="field in availableFields" :key="field.fieldCode">
                  <button
                    type="button"
                    class="w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-50"
                    @click.stop="addCode(field.fieldCode)"
                  >
                    {{ field.fieldName }}
                  </button>
                </li>
              </ul>
            </div>
            <p v-if="errors.fieldCombo" class="text-red-500 text-xs mt-1">{{ errors.fieldCombo }}</p>
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
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import {
  DEDUP_RULE_NAME_MAX,
  getTemplateDedupRule,
  getTemplateFields,
  syncTemplateFieldDedupFlags,
  validateDedupForm
} from '@/modules/import-template/data/import-template-manage';

const props = defineProps({
  open: { type: Boolean, default: false },
  template: { type: Object, default: null }
});

const emit = defineEmits(['close', 'confirm']);

const form = ref({ ruleName: '' });
const selectedCodes = ref([]);
const errors = ref({});
const dropdownOpen = ref(false);
const comboRef = ref(null);

const fieldNameMap = computed(() => {
  if (!props.template) return {};
  return Object.fromEntries(getTemplateFields(props.template).map(f => [f.fieldCode, f.fieldName]));
});

const availableFields = computed(() => {
  if (!props.template) return [];
  const selected = new Set(selectedCodes.value);
  return [...getTemplateFields(props.template)]
    .sort((a, b) => a.sortValue - b.sortValue)
    .filter(f => !selected.has(f.fieldCode));
});

watch(() => props.open, open => {
  if (!open || !props.template) return;
  syncTemplateFieldDedupFlags(props.template);
  const dedup = getTemplateDedupRule(props.template);
  const validCodes = new Set(getTemplateFields(props.template).map(f => f.fieldCode));
  form.value = { ruleName: dedup.ruleName || '' };
  selectedCodes.value = dedup.fieldCodes.filter(code => validCodes.has(code));
  errors.value = {};
  dropdownOpen.value = false;
});

function addCode(code) {
  if (!selectedCodes.value.includes(code)) {
    selectedCodes.value = [...selectedCodes.value, code];
  }
  errors.value = { ...errors.value, fieldCombo: '' };
  dropdownOpen.value = false;
}

function removeCode(code) {
  selectedCodes.value = selectedCodes.value.filter(c => c !== code);
}

function submit() {
  const { valid, errors: nextErrors } = validateDedupForm(form.value.ruleName, selectedCodes.value);
  errors.value = nextErrors;
  if (!valid) return;
  emit('confirm', {
    ruleName: form.value.ruleName.trim(),
    fieldCodes: [...selectedCodes.value]
  });
}

function onDocClick(e) {
  if (!dropdownOpen.value) return;
  if (comboRef.value && !comboRef.value.contains(e.target)) {
    dropdownOpen.value = false;
  }
}

onMounted(() => document.addEventListener('click', onDocClick));
onBeforeUnmount(() => document.removeEventListener('click', onDocClick));
</script>
