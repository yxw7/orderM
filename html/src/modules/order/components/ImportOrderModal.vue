<template>
  <div v-if="open" class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4" @click.self="emit('close')">
    <div class="bg-white rounded-lg shadow-xl w-full max-w-3xl flex flex-col max-h-[90vh]" @click.stop>
      <div class="flex items-center justify-between px-6 py-4 border-b shrink-0">
        <h2 class="text-base font-medium text-gray-800">导入订单</h2>
        <button type="button" class="text-gray-400 text-xl leading-none hover:text-gray-600" @click="emit('close')">&times;</button>
      </div>

      <div class="px-6 py-5 overflow-y-auto flex-1 min-h-0">
        <div class="flex items-start mb-6">
          <template v-for="(step, idx) in IMPORT_ORDER_STEPS" :key="step.step">
            <div class="flex flex-col items-center flex-1 min-w-0">
              <div
                class="w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium border-2 shrink-0"
                :class="stepCircleClass(step.step)"
              >
                {{ step.step }}
              </div>
              <p class="mt-2 text-sm text-center" :class="currentStep >= step.step ? 'text-sky-600 font-medium' : 'text-gray-400'">
                {{ step.title }}
              </p>
              <p v-if="step.subtitle" class="mt-1 text-xs text-gray-400 text-center px-1 leading-snug">
                {{ step.subtitle }}
              </p>
            </div>
            <div
              v-if="idx < IMPORT_ORDER_STEPS.length - 1"
              class="flex-shrink-0 w-10 h-0.5 mt-4"
              :class="currentStep > step.step ? 'bg-sky-600' : 'bg-gray-200'"
            />
          </template>
        </div>

        <!-- Step 1 -->
        <div v-if="currentStep === 1" class="space-y-5 max-w-2xl">
          <div class="flex items-start gap-3">
            <label class="text-sm text-gray-600 w-28 text-right pt-2 shrink-0 whitespace-nowrap">
              <span class="text-red-500">*</span> 模板文件：
            </label>
            <div class="flex-1 min-w-0">
              <div class="flex items-center gap-3">
                <select
                  v-model="templateId"
                  class="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-sky-500"
                  @change="uploadErrors = []"
                >
                  <option value="">请选择</option>
                  <option v-for="tpl in templateOptions" :key="tpl.id" :value="tpl.id">{{ tpl.templateName }}</option>
                </select>
                <button
                  type="button"
                  class="text-sm text-sky-600 hover:underline shrink-0 disabled:text-gray-400 disabled:no-underline"
                  :disabled="!selectedTemplate"
                  @click="downloadTemplate"
                >
                  下载模板
                </button>
              </div>
              <p v-if="!templateOptions.length" class="text-sm text-orange-500 mt-2">暂无与当前订单匹配的导入模板</p>
            </div>
          </div>

          <div class="flex items-start gap-3">
            <label class="text-sm text-gray-600 w-28 text-right pt-2 shrink-0 whitespace-nowrap">
              <span class="text-red-500">*</span> 文件上传：
            </label>
            <div class="flex-1 min-w-0">
              <div class="flex items-center gap-3 flex-wrap">
                <button
                  type="button"
                  class="inline-flex items-center gap-1.5 px-4 py-1.5 text-sm rounded border border-gray-300 hover:bg-gray-50"
                  @click="fileInput?.click()"
                >
                  <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/>
                  </svg>
                  上传文件
                </button>
                <div v-if="uploadedFile" class="flex items-center gap-2 text-sm text-gray-700">
                  <span class="truncate max-w-[200px]" :title="uploadedFile.name">{{ uploadedFile.name }}</span>
                  <button type="button" class="text-gray-400 hover:text-gray-600 shrink-0" @click="clearFile">&times;</button>
                </div>
              </div>
              <input
                ref="fileInput"
                type="file"
                accept=".xls,.xlsx"
                class="hidden"
                @change="onFileChange"
              >
              <p class="text-sm text-orange-500 mt-2">支持类型：xls、xlsx</p>
              <div v-if="uploadErrors.length" class="mt-2 space-y-1">
                <p v-for="(msg, i) in uploadErrors" :key="i" class="text-sm text-red-500">{{ msg }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Step 2 -->
        <div v-else-if="currentStep === 2 && parseResult" class="py-4">
          <div class="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-700">
            <span>
              共解析到 {{ parseResult.total }} 条数据，其中
              <span class="text-green-600 font-medium">{{ parseResult.success }}</span> 条成功，
              <span class="text-red-500 font-medium">{{ parseResult.fail }}</span> 条失败
            </span>
            <button type="button" class="text-sky-600 hover:underline" @click="downloadResult">下载解析结果</button>
          </div>
          <p class="text-sm text-amber-600 mt-4">提示：解析全部成功，才可入库</p>
        </div>

        <!-- Step 3 -->
        <div v-else-if="currentStep === 3" class="py-10 flex flex-col items-center justify-center min-h-[160px]">
          <div v-if="importStatus === 'loading'" class="flex flex-col items-center gap-3 text-gray-500">
            <svg class="w-10 h-10 animate-spin text-gray-400" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
            </svg>
          </div>
          <div v-else-if="importStatus === 'success'" class="flex items-center gap-3">
            <span class="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center text-xl">✓</span>
            <span class="text-base text-gray-800">入库成功</span>
          </div>
          <div v-else-if="importStatus === 'failed'" class="flex items-center gap-3">
            <span class="w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center text-xl">×</span>
            <span class="text-base text-gray-800">入库失败，请联系管理员</span>
          </div>
        </div>
      </div>

      <div class="flex justify-end gap-3 px-6 py-4 border-t bg-gray-50 rounded-b-lg shrink-0">
        <template v-if="importStatus === 'success'">
          <button type="button" class="px-5 py-1.5 text-sm bg-sky-600 text-white rounded hover:bg-sky-700" @click="emit('success')">
            关闭
          </button>
        </template>
        <template v-else>
          <button type="button" class="px-5 py-1.5 text-sm border border-gray-300 rounded text-gray-600 hover:bg-gray-50" @click="emit('close')">
            取消
          </button>
          <button
            v-if="currentStep === 1"
            type="button"
            class="px-5 py-1.5 text-sm bg-sky-600 text-white rounded hover:bg-sky-700"
            @click="handleUpload"
          >
            上传
          </button>
          <button
            v-else-if="currentStep === 2"
            type="button"
            class="px-5 py-1.5 text-sm rounded text-white"
            :class="parseResult?.canProceed ? 'bg-sky-600 hover:bg-sky-700' : 'bg-gray-300 cursor-not-allowed'"
            :disabled="!parseResult?.canProceed"
            @click="startImport"
          >
            下一步
          </button>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue';
import { importTemplateRows, getAvailableTemplates } from '@/modules/import-template/data/import-template-manage';
import {
  IMPORT_ORDER_STEPS,
  downloadImportResult,
  simulateOrderImportParse,
  validateImportUpload
} from '@/modules/order/data/order-import';

const props = defineProps({
  open: { type: Boolean, default: false },
  order: { type: Object, default: null }
});

const emit = defineEmits(['close', 'success', 'import']);

const currentStep = ref(1);
const templateId = ref('');
const uploadedFile = ref(null);
const uploadErrors = ref([]);
const parseResult = ref(null);
const importStatus = ref('idle');
const fileInput = ref(null);

const templateOptions = computed(() => {
  if (!props.order) return [];
  return getAvailableTemplates(importTemplateRows, props.order);
});

const selectedTemplate = computed(() =>
  templateOptions.value.find(tpl => tpl.id === Number(templateId.value)) || null
);

watch(() => props.open, open => {
  if (!open) return;
  resetState();
  if (templateOptions.value.length === 1) {
    templateId.value = String(templateOptions.value[0].id);
  }
});

watch(templateOptions, options => {
  if (!props.open || templateId.value) return;
  if (options.length === 1) templateId.value = String(options[0].id);
});

function resetState() {
  currentStep.value = 1;
  templateId.value = '';
  uploadedFile.value = null;
  uploadErrors.value = [];
  parseResult.value = null;
  importStatus.value = 'idle';
  if (fileInput.value) fileInput.value.value = '';
}

function stepCircleClass(step) {
  if (currentStep.value > step) return 'bg-sky-600 border-sky-600 text-white';
  if (currentStep.value === step) return 'bg-sky-600 border-sky-600 text-white';
  return 'bg-white border-gray-300 text-gray-400';
}

function onFileChange(event) {
  const file = event.target.files?.[0];
  uploadedFile.value = file || null;
  uploadErrors.value = [];
}

function clearFile() {
  uploadedFile.value = null;
  uploadErrors.value = [];
  if (fileInput.value) fileInput.value.value = '';
}

function downloadTemplate() {
  if (!selectedTemplate.value) return;
  window.alert(`正在下载模板：${selectedTemplate.value.templateName}`);
}

function handleUpload() {
  uploadErrors.value = validateImportUpload({
    templateId: templateId.value,
    file: uploadedFile.value
  });
  if (uploadErrors.value.length) return;
  parseResult.value = simulateOrderImportParse(uploadedFile.value);
  currentStep.value = 2;
}

function downloadResult() {
  if (parseResult.value) downloadImportResult(parseResult.value);
}

function startImport() {
  if (!parseResult.value?.canProceed) return;
  currentStep.value = 3;
  importStatus.value = 'loading';
  window.setTimeout(() => {
    emit('import', parseResult.value);
    importStatus.value = 'success';
  }, 800);
}
</script>
