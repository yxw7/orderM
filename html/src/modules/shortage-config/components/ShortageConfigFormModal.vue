<template>
  <div v-if="open" class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4" @click.self="emit('close')">
    <div class="bg-white rounded-lg shadow-xl w-full max-w-2xl flex flex-col max-h-[90vh]" @click.stop>
      <div class="flex items-center justify-between px-6 py-4 border-b border-gray-200 shrink-0">
        <h2 class="text-base font-medium text-gray-800">{{ title }}</h2>
        <button type="button" class="text-gray-400 hover:text-gray-600 text-xl leading-none" @click="emit('close')">&times;</button>
      </div>
      <form class="px-6 py-5 space-y-5 overflow-y-auto" @submit.prevent="submit">
        <div class="flex items-start gap-3">
          <label class="text-sm text-gray-600 w-36 text-right pt-2 shrink-0">
            <span v-if="!readonly" class="text-red-500">*</span> 订户
          </label>
          <div class="flex-1">
            <select
              v-if="!readonly && mode === 'add'"
              v-model="form.subscriber"
              class="w-full border rounded px-3 py-2 text-sm text-gray-700 focus:outline-none focus:border-sky-500"
              :class="errors.subscriber ? 'border-red-500' : 'border-gray-300'"
            >
              <option value="">请选择</option>
              <option v-for="name in subscriberOptions" :key="name" :value="name">{{ name }}</option>
            </select>
            <input
              v-else
              :value="form.subscriber"
              type="text"
              readonly
              class="w-full border border-gray-200 rounded px-3 py-2 text-sm bg-gray-50 text-gray-600 cursor-not-allowed"
            >
            <p v-if="errors.subscriber" class="text-red-500 text-xs mt-1">{{ errors.subscriber }}</p>
          </div>
        </div>

        <div class="flex items-start gap-3">
          <label class="text-sm text-gray-600 w-36 text-right pt-2 shrink-0">{{ autoEnabledLabel }}</label>
          <div class="flex-1 flex items-center flex-wrap gap-3 pt-1.5">
            <label v-if="!readonly" class="inline-flex items-center gap-2 cursor-pointer select-none">
              <input type="checkbox" class="sr-only" :checked="form.autoEnabled" @change="form.autoEnabled = $event.target.checked">
              <span class="relative w-10 h-5 rounded-full transition-colors" :class="form.autoEnabled ? 'bg-sky-600' : 'bg-gray-200'">
                <span
                  class="absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-all"
                  :style="{ left: form.autoEnabled ? '22px' : '2px' }"
                />
              </span>
              <span class="text-sm text-gray-700">{{ form.autoEnabled ? '启用' : '关闭' }}</span>
            </label>
            <template v-else>
              <span class="text-sm text-gray-700">{{ form.autoEnabled ? '启用' : '关闭' }}</span>
            </template>
            <span class="text-sm text-orange-500">启用后将根据规则自动生成催缺单</span>
          </div>
        </div>

        <div class="space-y-3">
          <div class="flex items-start gap-3">
            <div class="w-36 shrink-0" />
            <label class="flex-1 flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
              <input
                v-model="form.triggerType"
                type="radio"
                value="days"
                class="text-sky-600 focus:ring-sky-500"
                :disabled="readonly"
                @change="clearTriggerErrors"
              >
              <span class="whitespace-nowrap">触发条件1：订单发订</span>
              <input
                v-model="form.triggerDays"
                type="text"
                inputmode="numeric"
                placeholder="天数"
                class="w-20 border rounded px-2 py-1 text-sm focus:outline-none focus:border-sky-500"
                :class="[
                  errors.triggerDays ? 'border-red-500' : 'border-gray-300',
                  triggerDaysDisabled ? 'bg-gray-50 text-gray-400 cursor-not-allowed' : ''
                ]"
                :readonly="readonly || triggerDaysDisabled"
                :disabled="triggerDaysDisabled"
              >
              <span class="whitespace-nowrap">天，未到货</span>
            </label>
          </div>
          <p v-if="errors.triggerDays" class="text-red-500 text-xs ml-[9.5rem]">{{ errors.triggerDays }}</p>

          <div class="flex items-start gap-3">
            <div class="w-36 shrink-0" />
            <label class="flex-1 flex items-center gap-2 text-sm text-gray-700 cursor-pointer flex-wrap">
              <input
                v-model="form.triggerType"
                type="radio"
                value="dateRange"
                class="text-sky-600 focus:ring-sky-500"
                :disabled="readonly"
                @change="clearTriggerErrors"
              >
              <span class="whitespace-nowrap">触发条件2：发订日期</span>
              <div class="flex items-center gap-2">
                <input
                  v-model="form.triggerStartDate"
                  type="date"
                  class="border rounded px-2 py-1 text-sm focus:outline-none focus:border-sky-500"
                  :class="[
                    errors.triggerStartDate ? 'border-red-500' : 'border-gray-300',
                    triggerDateDisabled ? 'bg-gray-50 text-gray-400 cursor-not-allowed' : ''
                  ]"
                  :readonly="readonly"
                  :disabled="triggerDateDisabled"
                >
                <span class="text-gray-400">→</span>
                <input
                  v-model="form.triggerEndDate"
                  type="date"
                  class="border rounded px-2 py-1 text-sm focus:outline-none focus:border-sky-500"
                  :class="[
                    errors.triggerEndDate ? 'border-red-500' : 'border-gray-300',
                    triggerDateDisabled ? 'bg-gray-50 text-gray-400 cursor-not-allowed' : ''
                  ]"
                  :readonly="readonly"
                  :disabled="triggerDateDisabled"
                >
              </div>
              <span class="whitespace-nowrap">未到货</span>
            </label>
          </div>
          <p v-if="errors.triggerStartDate || errors.triggerEndDate" class="text-red-500 text-xs ml-[9.5rem]">
            {{ errors.triggerStartDate || errors.triggerEndDate }}
          </p>
        </div>

        <div class="flex items-start gap-3">
          <label class="text-sm text-gray-600 w-36 text-right pt-2 shrink-0">备注</label>
          <textarea
            v-model="form.remark"
            rows="4"
            placeholder="请输入"
            :readonly="readonly"
            class="flex-1 border rounded px-3 py-2 text-sm focus:outline-none focus:border-sky-500 resize-y"
            :class="readonly ? 'border-gray-200 bg-gray-50 text-gray-600 cursor-not-allowed' : 'border-gray-300'"
          />
        </div>
      </form>
      <div class="flex justify-end gap-3 px-6 py-4 border-t border-gray-200 bg-gray-50 rounded-b-lg shrink-0">
        <button type="button" class="px-5 py-1.5 text-sm rounded border border-gray-300 text-gray-600 hover:bg-gray-50" @click="emit('close')">
          {{ readonly ? '关闭' : '取消' }}
        </button>
        <button v-if="!readonly" type="button" class="px-5 py-1.5 text-sm rounded bg-sky-600 text-white hover:bg-sky-700" @click="submit">
          提交
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue';
import {
  SHORTAGE_SUBSCRIBER_OPTIONS,
  buildShortageConfigPayload,
  rowToForm,
  validateShortageConfigForm
} from '@/modules/shortage-config/data/shortage-config-manage';

const props = defineProps({
  open: { type: Boolean, default: false },
  mode: { type: String, default: 'add' },
  row: { type: Object, default: null },
  rows: { type: Array, default: () => [] },
  readonly: { type: Boolean, default: false }
});

const emit = defineEmits(['close', 'confirm', 'invalid']);

const subscriberOptions = SHORTAGE_SUBSCRIBER_OPTIONS;
const form = ref(createEmptyForm());
const errors = ref({});

const title = computed(() => {
  if (props.readonly) return '查看配置';
  return props.mode === 'edit' ? '编辑配置' : '新增配置';
});

const autoEnabledLabel = computed(() =>
  props.mode === 'add' ? '是否启用系统催缺' : '是否启用自动生成'
);

const triggerDaysDisabled = computed(() => form.value.triggerType !== 'days');
const triggerDateDisabled = computed(() => form.value.triggerType !== 'dateRange');

function createEmptyForm() {
  return {
    subscriber: '',
    remark: '',
    autoEnabled: true,
    triggerType: 'days',
    triggerDays: '',
    triggerStartDate: '',
    triggerEndDate: ''
  };
}

watch(() => props.open, open => {
  if (!open) return;
  errors.value = {};
  if ((props.mode === 'edit' || props.readonly) && props.row) {
    form.value = rowToForm(props.row);
  } else {
    form.value = createEmptyForm();
  }
});

function clearTriggerErrors() {
  errors.value = {
    ...errors.value,
    triggerDays: '',
    triggerStartDate: '',
    triggerEndDate: ''
  };
}

function submit() {
  const { valid, errors: nextErrors } = validateShortageConfigForm(
    form.value,
    props.rows,
    props.mode === 'edit' ? props.row?.id : null
  );
  errors.value = nextErrors;
  if (!valid) {
    emit('invalid');
    return;
  }
  emit('confirm', buildShortageConfigPayload(form.value));
}
</script>
