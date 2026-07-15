<template>
  <Teleport to="body">
    <div
      v-if="open"
      class="fixed inset-0 z-[120] flex items-center justify-center bg-black/40 p-4"
      @click.self="handleClose"
    >
      <div class="bg-white rounded-lg shadow-xl flex flex-col w-full max-w-4xl h-[560px]" @click.stop>
        <div class="flex items-center justify-between px-6 py-4 border-b shrink-0">
          <h2 class="text-base font-medium text-gray-800">导入发货单</h2>
          <button
            type="button"
            class="text-gray-400 text-xl leading-none hover:text-gray-600 disabled:opacity-40"
            :disabled="creating"
            @click="handleClose"
          >
            &times;
          </button>
        </div>

        <div class="px-6 py-4 border-b shrink-0">
          <div class="flex items-start">
            <template v-for="(step, idx) in DELIVERY_IMPORT_CREATE_STEPS" :key="step.step">
              <div class="flex flex-col items-center flex-1">
                <div class="w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium border-2" :class="stepCircleClass(step.step)">
                  {{ step.step }}
                </div>
                <p class="mt-2 text-sm" :class="currentStep >= step.step ? 'text-sky-600 font-medium' : 'text-gray-400'">{{ step.title }}</p>
              </div>
              <div v-if="idx < DELIVERY_IMPORT_CREATE_STEPS.length - 1" class="flex-shrink-0 w-12 h-0.5 mt-4" :class="currentStep > step.step ? 'bg-sky-600' : 'bg-gray-200'" />
            </template>
          </div>
        </div>

        <div class="px-6 py-5 overflow-y-auto flex-1 min-h-0">
          <!-- Step 1 -->
          <div v-if="currentStep === 1" class="h-full">
            <div class="flex items-start gap-3 max-w-2xl">
              <label class="text-sm text-gray-600 w-28 text-right pt-2 shrink-0"><span class="text-red-500">*</span> 文件上传</label>
              <div class="flex-1">
                <div class="flex items-center gap-3 flex-wrap">
                  <button type="button" class="inline-flex items-center gap-1.5 px-4 py-1.5 text-sm rounded border border-gray-300 hover:bg-gray-50" @click="triggerFileInput">
                    上传文件
                  </button>
                  <input ref="fileInputRef" type="file" accept=".xls,.xlsx" class="hidden" @change="onFileChange">
                  <div v-if="uploadedFile" class="flex items-center gap-2 text-sm text-gray-700">
                    <span>{{ uploadedFile.name }}</span>
                    <button type="button" class="text-gray-400 hover:text-gray-600 text-lg leading-none" @click="clearFile">&times;</button>
                  </div>
                </div>
                <p class="text-sm text-orange-500 mt-2">支持类型：xls、xlsx</p>
                <p v-if="fileFormatError" class="text-red-500 text-xs mt-1">请上传 xls/xlsx 格式文件</p>
              </div>
            </div>
          </div>

          <!-- Step 2 -->
          <div v-else-if="currentStep === 2" class="flex flex-col h-full">
            <p class="text-sm text-gray-600 mb-4 shrink-0">将文件列映射到系统标准字段（<span class="text-red-500">发货套数</span> 必填）</p>
            <div class="flex flex-wrap items-center gap-3 mb-4 shrink-0">
              <label class="text-sm text-gray-600 whitespace-nowrap">映射模板</label>
              <select v-model="selectedTemplateName" class="border border-gray-300 rounded px-3 py-1.5 text-sm min-w-[180px]" @change="onTemplateSelect">
                <option value="">— 选择已保存模板 —</option>
                <option v-for="tpl in templateList" :key="tpl.name" :value="tpl.name">{{ tpl.name }}</option>
              </select>
              <template v-if="selectedTemplateName">
                <button
                  type="button"
                  class="px-3 py-1.5 text-sm text-sky-600 border border-sky-200 rounded hover:bg-sky-50"
                  @click="updateSelectedTemplate"
                >
                  更新模板
                </button>
                <button
                  type="button"
                  class="px-3 py-1.5 text-sm text-red-500 border border-red-200 rounded hover:bg-red-50"
                  @click="removeTemplate"
                >
                  删除模板
                </button>
              </template>
              <template v-else>
                <label class="inline-flex items-center gap-2 text-sm text-gray-700 whitespace-nowrap cursor-pointer">
                  <input v-model="saveAsTemplate" type="checkbox" class="rounded text-sky-600">
                  保存为模板
                </label>
                <input
                  v-if="saveAsTemplate"
                  v-model="templateNameInput"
                  type="text"
                  placeholder="请输入模板名称"
                  class="border border-gray-300 rounded px-3 py-1.5 text-sm min-w-[160px]"
                >
              </template>
            </div>
            <div class="overflow-auto flex-1 min-h-0">
              <table class="w-full text-sm">
                <thead class="bg-gray-50 border-b sticky top-0">
                  <tr>
                    <th class="px-3 py-2 text-left text-gray-600">文件列名</th>
                    <th class="px-3 py-2 text-left text-gray-600">系统标准字段</th>
                  </tr>
                </thead>
                <tbody class="divide-y">
                  <tr v-for="col in fileColumns" :key="col">
                    <td class="px-3 py-2">{{ col }}</td>
                    <td class="px-3 py-2">
                      <select
                        :value="columnMapping[col] || ''"
                        class="min-w-[200px] border border-gray-300 rounded px-2 py-1 text-sm"
                        @change="onMappingChange(col, $event.target.value)"
                      >
                        <option v-for="field in standardFields" :key="field.value + col" :value="field.value">
                          {{ field.label }}{{ field.required ? ' *' : '' }}
                        </option>
                      </select>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- Step 3 -->
          <div v-else-if="currentStep === 3" class="h-full">
            <p class="text-sm text-gray-600 mb-4">从已映射字段中选择用于匹配订单行的字段（至少选 1 项）</p>
            <div class="flex flex-wrap gap-4">
              <label v-for="opt in matchFieldOptionsList" :key="opt.value" class="inline-flex items-center gap-2 text-sm">
                <input v-model="selectedMatchFields" type="checkbox" :value="opt.value" class="rounded text-sky-600">
                {{ opt.label }}
              </label>
            </div>
            <p v-if="!matchFieldOptionsList.length" class="text-sm text-amber-600 mt-4">请返回上一步完成字段映射</p>
          </div>

          <!-- Step 4 -->
          <div v-else class="h-full flex flex-col items-center justify-center px-4">
            <template v-if="creating">
              <div class="w-10 h-10 border-[3px] border-gray-200 border-t-sky-600 rounded-full animate-spin" />
              <p class="mt-4 text-sm text-gray-600">正在创建导入任务…</p>
            </template>
            <p v-else-if="createSuccess" class="text-sm text-gray-700 text-center leading-relaxed">
              导入任务已创建，后台正在匹配订单行。您可在「导入任务」列表中查看进度。
            </p>
            <p v-else class="text-sm text-red-500 text-center leading-relaxed">
              任务创建失败，请重试或联系系统管理员
            </p>
          </div>
        </div>

        <div class="flex justify-end gap-3 px-6 py-4 border-t bg-gray-50 rounded-b-lg shrink-0">
          <button
            v-if="currentStep > 1 && currentStep < 4"
            type="button"
            class="px-5 py-1.5 text-sm border border-gray-300 rounded text-gray-600 hover:bg-white disabled:opacity-50"
            :disabled="creating"
            @click="prevStep"
          >
            上一步
          </button>
          <button
            v-if="currentStep === 1"
            type="button"
            class="px-5 py-1.5 text-sm border border-gray-300 rounded text-gray-600 hover:bg-white disabled:opacity-50"
            :disabled="creating"
            @click="handleClose"
          >
            取消
          </button>
          <button
            v-if="currentStep === 4 && !creating && !createSuccess"
            type="button"
            class="px-5 py-1.5 text-sm border border-gray-300 rounded text-gray-600 hover:bg-white"
            @click="handleClose"
          >
            关闭
          </button>
          <button
            v-if="currentStep === 4 && !creating && !createSuccess"
            type="button"
            class="px-5 py-1.5 text-sm bg-sky-600 text-white rounded hover:bg-sky-700"
            @click="runCreateTask"
          >
            重试
          </button>
          <button
            v-if="currentStep === 4 && !creating && createSuccess"
            type="button"
            class="px-5 py-1.5 text-sm bg-sky-600 text-white rounded hover:bg-sky-700"
            @click="finishAndClose"
          >
            关闭
          </button>
          <button
            v-if="currentStep < 4"
            type="button"
            class="inline-flex items-center justify-center gap-2 min-w-[100px] px-5 py-1.5 text-sm rounded text-white disabled:opacity-70"
            :class="canProceed ? 'bg-sky-600 hover:bg-sky-700' : 'bg-gray-300 cursor-not-allowed'"
            :disabled="!canProceed || creating"
            @click="handlePrimaryAction"
          >
            下一步
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { computed, ref, watch } from 'vue';
import {
  DELIVERY_IMPORT_CREATE_STEPS,
  MOCK_FILE_COLUMNS,
  MOCK_PARSED_ROWS,
  isAllowedDeliveryFileName,
  getActiveStandardFields,
  buildDefaultColumnMapping,
  listMappingTemplates,
  getMappingTemplateByName,
  saveMappingTemplate,
  deleteMappingTemplate,
  validateMappingStep,
  prepareStep2ForMatching,
  resolveDefaultMatchFields,
  validateMatchFieldsStep
} from '@/modules/acceptance/data/delivery-import';
import { createDeliveryImportTask } from '@/modules/acceptance/data/delivery-import-tasks';

defineOptions({ name: 'DeliveryImportCreateModal' });

const props = defineProps({
  open: { type: Boolean, default: false },
  /** @type {import('vue').PropType<object>} */
  ctx: { type: Object, default: () => ({}) }
});

const emit = defineEmits(['close', 'created']);

const currentStep = ref(1);
const uploadedFile = ref(null);
const fileFormatError = ref(false);
const fileInputRef = ref(null);
const fileColumns = ref([...MOCK_FILE_COLUMNS]);
const parsedRows = ref([...MOCK_PARSED_ROWS]);
/** @type {import('vue').Ref<Record<string, string>>} */
const columnMapping = ref({});
const selectedMatchFields = ref(['isbn', 'title']);
const selectedTemplateName = ref('');
const templateNameInput = ref('');
const saveAsTemplate = ref(false);
/** 触发映射模板列表刷新 */
const templateListRevision = ref(0);
const creating = ref(false);
const createSuccess = ref(false);
/** @type {import('vue').Ref<object|null>} */
const createdTask = ref(null);

const standardFields = computed(() => getActiveStandardFields(props.ctx));
const templateList = computed(() => {
  templateListRevision.value;
  return listMappingTemplates(props.ctx);
});

const matchFieldOptionsList = computed(() => {
  const mapped = new Set(Object.values(columnMapping.value).filter(Boolean));
  return standardFields.value.filter(f => f.matchable !== false && f.value && mapped.has(f.value));
});

const canProceed = computed(() => {
  if (currentStep.value === 1) return !!uploadedFile.value && !fileFormatError.value;
  if (currentStep.value === 2) return !validateMappingStep(columnMapping.value, props.ctx);
  if (currentStep.value === 3) return !validateMatchFieldsStep(selectedMatchFields.value);
  return false;
});

watch(
  () => props.open,
  val => {
    document.body.style.overflow = val ? 'hidden' : '';
    if (val) resetWizard();
  }
);

watch(
  () => [props.ctx.type, props.ctx.lang],
  () => {
    if (props.open) {
      initDefaultMapping();
      initDefaultMatchFields();
    }
  }
);

/**
 * 重置向导状态
 */
function resetWizard() {
  currentStep.value = 1;
  uploadedFile.value = null;
  fileFormatError.value = false;
  fileColumns.value = [...MOCK_FILE_COLUMNS];
  parsedRows.value = [...MOCK_PARSED_ROWS];
  selectedTemplateName.value = '';
  templateNameInput.value = '';
  saveAsTemplate.value = false;
  creating.value = false;
  createSuccess.value = false;
  createdTask.value = null;
  initDefaultMapping();
  initDefaultMatchFields();
}

function initDefaultMapping() {
  columnMapping.value = buildDefaultColumnMapping(fileColumns.value, props.ctx);
}

function initDefaultMatchFields() {
  const defaults = resolveDefaultMatchFields(columnMapping.value, props.ctx);
  selectedMatchFields.value = defaults.length
    ? defaults
    : matchFieldOptionsList.value.slice(0, 1).map(f => f.value);
}

/**
 * @param {number} step
 * @returns {string}
 */
function stepCircleClass(step) {
  if (currentStep.value > step) return 'border-sky-600 bg-sky-50 text-sky-600';
  if (currentStep.value === step) return 'border-sky-600 bg-sky-600 text-white';
  return 'border-gray-300 text-gray-400';
}

function triggerFileInput() {
  fileInputRef.value?.click();
}

/**
 * @param {Event} event
 */
function onFileChange(event) {
  const file = event.target.files?.[0];
  fileFormatError.value = false;
  if (!file) return;
  if (!isAllowedDeliveryFileName(file.name)) {
    fileFormatError.value = true;
    uploadedFile.value = null;
    return;
  }
  uploadedFile.value = file;
  fileColumns.value = [...MOCK_FILE_COLUMNS];
  parsedRows.value = [...MOCK_PARSED_ROWS];
  initDefaultMapping();
  selectedTemplateName.value = '';
}

function clearFile() {
  uploadedFile.value = null;
  fileFormatError.value = false;
  if (fileInputRef.value) fileInputRef.value.value = '';
}

/**
 * @param {string} fileCol
 * @param {string} stdFieldKey
 */
function onMappingChange(fileCol, stdFieldKey) {
  columnMapping.value = { ...columnMapping.value, [fileCol]: stdFieldKey };
}

/**
 * @param {Record<string, string>} mapping
 */
function applyTemplateMapping(mapping) {
  const next = { ...columnMapping.value };
  fileColumns.value.forEach(col => {
    if (mapping[col]) next[col] = mapping[col];
  });
  columnMapping.value = next;
}

function onTemplateSelect() {
  if (!selectedTemplateName.value) {
    saveAsTemplate.value = false;
    return;
  }
  saveAsTemplate.value = false;
  templateNameInput.value = '';
  const mapping = getMappingTemplateByName(props.ctx, selectedTemplateName.value);
  if (mapping) applyTemplateMapping(mapping);
  initDefaultMatchFields();
}

/**
 * @returns {boolean}
 */
function trySaveTemplateIfNeeded() {
  if (selectedTemplateName.value || !saveAsTemplate.value) return true;
  const name = templateNameInput.value.trim();
  if (!name) {
    window.alert('请输入模板名称');
    return false;
  }
  saveMappingTemplate(props.ctx, name, columnMapping.value);
  selectedTemplateName.value = name;
  saveAsTemplate.value = false;
  templateListRevision.value += 1;
  return true;
}

/**
 * 用当前列映射覆盖已选模板
 */
function updateSelectedTemplate() {
  if (!selectedTemplateName.value) return;
  const err = validateMappingStep(columnMapping.value, props.ctx);
  if (err) {
    window.alert(err);
    return;
  }
  saveMappingTemplate(props.ctx, selectedTemplateName.value, columnMapping.value);
  templateListRevision.value += 1;
  window.alert(`已更新模板「${selectedTemplateName.value}」`);
}

function removeTemplate() {
  if (!selectedTemplateName.value) return;
  if (!window.confirm(`确定删除模板「${selectedTemplateName.value}」？`)) return;
  deleteMappingTemplate(props.ctx, selectedTemplateName.value);
  selectedTemplateName.value = '';
  templateNameInput.value = '';
  saveAsTemplate.value = false;
  templateListRevision.value += 1;
  window.alert('已删除映射模板');
}

function prevStep() {
  if (currentStep.value > 1) currentStep.value -= 1;
}

function handlePrimaryAction() {
  if (!canProceed.value || creating.value) return;

  if (currentStep.value === 1) {
    currentStep.value = 2;
    return;
  }

  if (currentStep.value === 2) {
    const prepared = prepareStep2ForMatching(columnMapping.value, props.ctx);
    if (prepared.error) return window.alert(prepared.error);
    if (!trySaveTemplateIfNeeded()) return;
    selectedMatchFields.value = prepared.defaultMatchFields;
    currentStep.value = 3;
    return;
  }

  if (currentStep.value === 3) {
    const err = validateMatchFieldsStep(selectedMatchFields.value);
    if (err) return window.alert(err);
    currentStep.value = 4;
    runCreateTask();
  }
}

/**
 * 第 ④ 步：创建导入任务并触发异步匹配
 */
function runCreateTask() {
  creating.value = true;
  createSuccess.value = false;
  createdTask.value = null;

  window.setTimeout(() => {
    if ((uploadedFile.value?.name || '').includes('创建失败')) {
      creating.value = false;
      createSuccess.value = false;
      return;
    }

    try {
      const task = createDeliveryImportTask(props.ctx, {
        fileName: uploadedFile.value?.name || '未命名.xlsx',
        columnMapping: columnMapping.value,
        matchFields: [...selectedMatchFields.value],
        fileColumns: fileColumns.value,
        parsedRows: parsedRows.value
      });

      creating.value = false;
      createSuccess.value = true;
      createdTask.value = task;
    } catch {
      creating.value = false;
      createSuccess.value = false;
    }
  }, 600);
}

/**
 * 创建成功后关闭弹窗
 */
function finishAndClose() {
  if (createdTask.value) emit('created', createdTask.value);
  emit('close');
}

function handleClose() {
  if (creating.value) return;
  if (currentStep.value === 4 && createSuccess.value && createdTask.value) {
    emit('created', createdTask.value);
  }
  emit('close');
}
</script>

<style scoped>
@keyframes spin {
  to { transform: rotate(360deg); }
}
.animate-spin {
  animation: spin 0.8s linear infinite;
}
</style>
