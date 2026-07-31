<template>
  <Teleport to="body">
    <div
      v-if="open"
      class="fixed inset-0 z-[120] flex items-center justify-center bg-black/40 p-4"
      @click.self="handleClose"
    >
      <div
        class="bg-white rounded-lg shadow-xl flex flex-col w-full max-w-5xl h-[640px]"
        @click.stop
      >
        <div class="flex items-center justify-between px-6 py-4 border-b shrink-0">
          <h2 class="text-base font-medium text-gray-800">预验收</h2>
          <button
            type="button"
            class="text-gray-400 text-xl leading-none hover:text-gray-600 disabled:opacity-40"
            :disabled="validatePhase === 'progress'"
            @click="handleClose"
          >
            &times;
          </button>
        </div>

        <div class="px-6 py-4 border-b shrink-0">
          <div class="flex items-start max-w-2xl mx-auto">
            <template v-for="(step, idx) in PRE_ACCEPT_STEPS" :key="step.step">
              <div class="flex flex-col items-center flex-1">
                <div
                  class="w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium border-2"
                  :class="stepCircleClass(step.step)"
                >
                  {{ step.step }}
                </div>
                <p
                  class="mt-2 text-sm"
                  :class="currentStep >= step.step ? 'text-sky-600 font-medium' : 'text-gray-400'"
                >
                  {{ step.title }}
                </p>
              </div>
              <div
                v-if="idx < PRE_ACCEPT_STEPS.length - 1"
                class="flex-shrink-0 w-12 h-0.5 mt-4"
                :class="currentStep > step.step ? 'bg-sky-600' : 'bg-gray-200'"
              />
            </template>
          </div>
        </div>

        <div class="px-6 py-5 overflow-y-auto flex-1 min-h-0">
          <!-- Step 1: Upload -->
          <div v-if="currentStep === 1" class="max-w-2xl">
            <div class="flex items-start gap-3">
              <label class="text-sm text-gray-600 w-28 text-right pt-2 shrink-0">
                <span class="text-red-500">*</span> 文件上传
              </label>
              <div class="flex-1">
                <div class="flex items-center gap-3 flex-wrap">
                  <button
                    type="button"
                    class="inline-flex items-center gap-1.5 px-4 py-1.5 text-sm rounded border border-gray-300 hover:bg-gray-50"
                    @click="triggerFileInput"
                  >
                    上传文件
                  </button>
                  <input
                    ref="fileInputRef"
                    type="file"
                    accept=".xls,.xlsx"
                    class="hidden"
                    @change="onFileChange"
                  >
                  <div v-if="uploadedFile" class="flex items-center gap-2 text-sm text-gray-700">
                    <span>{{ uploadedFile.name }}</span>
                    <button
                      type="button"
                      class="text-gray-400 hover:text-gray-600 text-lg leading-none"
                      @click="clearFile"
                    >
                      &times;
                    </button>
                  </div>
                </div>
                <p class="text-sm text-orange-500 mt-2">支持类型：xls、xlsx</p>
                <p v-if="uploadError" class="text-red-500 text-xs mt-1">{{ uploadError }}</p>
                <p class="text-xs text-gray-400 mt-3">
                  演示提示：文件名含「差异」可模拟字段不一致；含「超收」模拟套数非法；含「不匹配」或「头不一致」模拟与验收单头属性不一致。
                </p>
              </div>
            </div>
          </div>

          <!-- Step 2: Mapping -->
          <div v-else-if="currentStep === 2" class="flex flex-col h-full min-h-0">
            <p class="text-sm text-gray-600 mb-4 shrink-0">
              将文件列映射到系统标准字段（标<span class="text-red-500">*</span>字段为必填）
            </p>
            <div class="flex flex-wrap items-center gap-3 mb-4 shrink-0">
              <label class="text-sm text-gray-600 whitespace-nowrap">映射模板</label>
              <select
                v-model="selectedTemplateName"
                class="border border-gray-300 rounded px-3 py-1.5 text-sm min-w-[180px]"
                @change="onTemplateSelect"
              >
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
            <p v-if="mappingError" class="text-red-500 text-xs mb-3 shrink-0">{{ mappingError }}</p>
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
                      <template v-for="group in standardFieldGroups" :key="group.name || 'blank'">
                        <optgroup v-if="group.name" :label="group.name">
                          <option
                            v-for="field in group.fields"
                            :key="field.value + col"
                            :value="field.value"
                          >
                            {{ field.label }}{{ field.required ? ' *' : '' }}
                          </option>
                        </optgroup>
                        <option
                          v-for="field in group.fields"
                          v-else
                          :key="field.value + col"
                          :value="field.value"
                        >
                          {{ field.label }}
                        </option>
                      </template>
                      </select>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- Step 3: Validate -->
          <div
            v-else
            class="flex flex-col h-full min-h-0 items-center justify-center"
          >
            <div v-if="validatePhase === 'progress'" class="w-full max-w-md space-y-3">
              <p class="text-sm text-gray-700 text-center">正在校验，请稍候…</p>
              <div class="h-2 bg-gray-200 rounded overflow-hidden">
                <div
                  class="h-full bg-sky-600 transition-all duration-150"
                  :style="{ width: `${validateProgress}%` }"
                />
              </div>
              <p class="text-sm text-gray-500 text-center">{{ validateProgress }}%</p>
            </div>
            <div v-else class="text-sm text-gray-700 text-center space-y-3">
              <p>
                共校验到 {{ validated.rows.length }} 条数据，其中
                <span class="text-emerald-600">{{ validated.passCount }}</span> 条成功，
                <span :class="validated.failCount ? 'text-red-600' : 'text-gray-700'">{{ validated.failCount }}</span> 条失败。
              </p>
              <div v-if="validated.failCount > 0" class="pt-1">
                <button
                  type="button"
                  class="px-3 py-1.5 text-sm rounded border border-gray-300 hover:bg-gray-50"
                  @click="exportResult"
                >
                  下载校验结果
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="flex items-center justify-end gap-2 px-6 py-4 border-t shrink-0">
          <template v-if="currentStep < 3 && validatePhase !== 'progress'">
            <button
              type="button"
              class="px-4 py-1.5 text-sm rounded border border-gray-300 text-gray-700 hover:bg-gray-50"
              @click="handleClose"
            >
              取消
            </button>
            <button
              type="button"
              class="px-4 py-1.5 text-sm rounded bg-sky-600 text-white hover:bg-sky-700 disabled:opacity-40 disabled:cursor-not-allowed"
              :disabled="!canGoNext"
              @click="goNext"
            >
              {{ currentStep === 1 ? '上传' : '下一步' }}
            </button>
          </template>
          <template v-else-if="currentStep === 3 && validatePhase === 'done'">
            <button
              type="button"
              class="px-4 py-1.5 text-sm rounded bg-sky-600 text-white hover:bg-sky-700"
              @click="handleClose"
            >
              完成
            </button>
          </template>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { computed, ref, watch } from 'vue';
import {
  listMappingTemplates,
  getMappingTemplateByName,
  saveMappingTemplate,
  deleteMappingTemplate
} from '@/modules/acceptance/data/delivery-import';
import {
  PRE_ACCEPT_STEPS,
  PRE_ACCEPT_TEMPLATE_CTX,
  PRE_ACCEPT_MOCK_FILE_COLUMNS,
  getPreAcceptStandardFieldGroups,
  buildPreAcceptDefaultColumnMapping,
  validatePreAcceptMapping,
  parsePreAcceptFileMock,
  buildPreAcceptShipRows,
  validatePreAcceptRows,
  exportPreAcceptValidationResult,
  sanitizePreAcceptColumnMapping
} from '@/modules/acceptance/data/pre-accept-wizard';

defineOptions({ name: 'PreAcceptWizardModal' });

const props = defineProps({
  open: { type: Boolean, default: false },
  /** 当前勾选验收单上下文（含 type 资源类型） */
  ctx: { type: Object, default: () => ({}) }
});

const emit = defineEmits(['close']);

const currentStep = ref(1);
const uploadedFile = ref(null);
const uploadError = ref('');
const fileInputRef = ref(null);
const fileColumns = ref([...PRE_ACCEPT_MOCK_FILE_COLUMNS]);
const parsedRows = ref([]);
/** @type {import('vue').Ref<Record<string, string>>} */
const columnMapping = ref({});
const shipRows = ref([]);
const validated = ref({
  rows: [],
  passCount: 0,
  failCount: 0,
  allPassed: false,
  viewableSubscribers: []
});
/** @type {import('vue').Ref<'idle'|'progress'|'done'>} */
const validatePhase = ref('idle');
const validateProgress = ref(0);
const selectedTemplateName = ref('');
const templateNameInput = ref('');
const saveAsTemplate = ref(false);
const templateListRevision = ref(0);

const resourceType = computed(() => props.ctx?.type || '纸质书');
const standardFieldGroups = computed(() => getPreAcceptStandardFieldGroups(resourceType.value));
const templateList = computed(() => {
  templateListRevision.value;
  return listMappingTemplates(PRE_ACCEPT_TEMPLATE_CTX);
});
const mappingError = computed(() => validatePreAcceptMapping(columnMapping.value));

const canGoNext = computed(() => {
  if (currentStep.value === 1) {
    return !!uploadedFile.value && !!parsedRows.value.length && !uploadError.value;
  }
  if (currentStep.value === 2) {
    return !mappingError.value;
  }
  return false;
});

watch(
  () => props.open,
  open => {
    document.body.style.overflow = open ? 'hidden' : '';
    if (open) resetState();
  }
);

function resetState() {
  currentStep.value = 1;
  uploadedFile.value = null;
  uploadError.value = '';
  fileColumns.value = [...PRE_ACCEPT_MOCK_FILE_COLUMNS];
  parsedRows.value = [];
  columnMapping.value = {};
  shipRows.value = [];
  validated.value = {
    rows: [],
    passCount: 0,
    failCount: 0,
    allPassed: false,
    viewableSubscribers: []
  };
  validatePhase.value = 'idle';
  validateProgress.value = 0;
  selectedTemplateName.value = '';
  templateNameInput.value = '';
  saveAsTemplate.value = false;
  if (fileInputRef.value) fileInputRef.value.value = '';
}

function initDefaultMapping() {
  columnMapping.value = buildPreAcceptDefaultColumnMapping(fileColumns.value, resourceType.value);
}

function applyTemplateMapping(mapping) {
  const next = { ...columnMapping.value };
  fileColumns.value.forEach(col => {
    if (mapping[col]) next[col] = mapping[col];
  });
  columnMapping.value = sanitizePreAcceptColumnMapping(next, resourceType.value);
}

function stepCircleClass(step) {
  if (currentStep.value > step) return 'bg-sky-600 border-sky-600 text-white';
  if (currentStep.value === step) return 'border-sky-600 text-sky-600 bg-white';
  return 'border-gray-300 text-gray-400 bg-white';
}

function triggerFileInput() {
  fileInputRef.value?.click();
}

function clearFile() {
  uploadedFile.value = null;
  uploadError.value = '';
  parsedRows.value = [];
  if (fileInputRef.value) fileInputRef.value.value = '';
}

function onFileChange(event) {
  const file = event.target.files?.[0];
  uploadError.value = '';
  parsedRows.value = [];
  if (!file) {
    uploadedFile.value = null;
    return;
  }
  uploadedFile.value = file;
  const parsed = parsePreAcceptFileMock(file.name, props.ctx);
  if (!parsed.ok) {
    uploadError.value = parsed.error;
    parsedRows.value = [];
    return;
  }
  fileColumns.value = parsed.fileColumns;
  parsedRows.value = parsed.parsedRows;
  selectedTemplateName.value = '';
  initDefaultMapping();
}

function onMappingChange(fileCol, stdFieldKey) {
  columnMapping.value = { ...columnMapping.value, [fileCol]: stdFieldKey };
}

function onTemplateSelect() {
  if (!selectedTemplateName.value) {
    saveAsTemplate.value = false;
    return;
  }
  saveAsTemplate.value = false;
  templateNameInput.value = '';
  const mapping = getMappingTemplateByName(PRE_ACCEPT_TEMPLATE_CTX, selectedTemplateName.value);
  if (mapping) applyTemplateMapping(mapping);
}

function trySaveTemplateIfNeeded() {
  if (selectedTemplateName.value || !saveAsTemplate.value) return true;
  const name = templateNameInput.value.trim();
  if (!name) {
    window.alert('请输入模板名称');
    return false;
  }
  saveMappingTemplate(PRE_ACCEPT_TEMPLATE_CTX, name, columnMapping.value);
  templateListRevision.value += 1;
  return true;
}

function updateSelectedTemplate() {
  if (!selectedTemplateName.value) return;
  saveMappingTemplate(PRE_ACCEPT_TEMPLATE_CTX, selectedTemplateName.value, columnMapping.value);
  templateListRevision.value += 1;
  window.alert('模板已更新');
}

function removeTemplate() {
  if (!selectedTemplateName.value) return;
  if (!window.confirm(`确定删除模板「${selectedTemplateName.value}」？`)) return;
  deleteMappingTemplate(PRE_ACCEPT_TEMPLATE_CTX, selectedTemplateName.value);
  selectedTemplateName.value = '';
  templateListRevision.value += 1;
}

function runValidate() {
  shipRows.value = buildPreAcceptShipRows(
    parsedRows.value,
    columnMapping.value,
    fileColumns.value
  );
  validated.value = validatePreAcceptRows(shipRows.value, props.ctx, columnMapping.value);
}

function exportResult() {
  exportPreAcceptValidationResult(
    validated.value.rows,
    `预验收校验结果_${Date.now()}.xls`,
    fileColumns.value
  );
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function goNext() {
  if (currentStep.value === 1) {
    if (!canGoNext.value) return;
    currentStep.value = 2;
    return;
  }
  if (currentStep.value === 2) {
    if (!canGoNext.value) return;
    if (!trySaveTemplateIfNeeded()) return;
    currentStep.value = 3;
    validatePhase.value = 'progress';
    validateProgress.value = 0;
    validated.value = {
      rows: [],
      passCount: 0,
      failCount: 0,
      allPassed: false,
      viewableSubscribers: []
    };

    const tick = window.setInterval(() => {
      if (validateProgress.value < 90) validateProgress.value += 10;
    }, 100);

    await sleep(1200);
    window.clearInterval(tick);
    validateProgress.value = 100;
    await sleep(150);

    runValidate();
    validatePhase.value = 'done';
  }
}

function handleClose() {
  if (validatePhase.value === 'progress') return;
  emit('close');
}
</script>
