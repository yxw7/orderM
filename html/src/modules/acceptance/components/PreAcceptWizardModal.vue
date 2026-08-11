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
            :disabled="validatePhase === 'progress' || ingestPhase === 'progress'"
            @click="handleClose"
          >
            &times;
          </button>
        </div>

        <div class="px-6 py-4 border-b shrink-0">
          <div class="flex items-start max-w-3xl mx-auto">
            <template v-for="(step, idx) in PRE_ACCEPT_STEPS" :key="step.step">
              <div class="flex flex-col items-center flex-1 min-w-0">
                <div
                  class="w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium border-2"
                  :class="stepCircleClass(step.step)"
                >
                  {{ step.step }}
                </div>
                <p
                  class="mt-2 text-sm text-center"
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
                  演示提示：文件名含「表头」时默认表头在第 4 行；含「部分」模拟部分收套数；含「差异」模拟字段差异（仅勾选是否校验时失败）；含「超收」模拟套数非法；含「不匹配」或「头不一致」模拟验收单头不一致；含「入库失败」模拟第 4 步入库失败。
                </p>
              </div>
            </div>
          </div>

          <!-- Step 2: Mapping (header + template + must-match) -->
          <div v-else-if="currentStep === 2" class="flex flex-col h-full min-h-0">
            <div class="flex flex-wrap items-center gap-3 mb-3 shrink-0">
              <label class="text-sm text-gray-600 whitespace-nowrap">映射模板</label>
              <select
                v-model="selectedTemplateName"
                class="border border-gray-300 rounded px-3 py-1.5 text-sm min-w-[160px]"
                @change="onTemplateSelect"
              >
                <option value="">选择模板</option>
                <option v-for="tpl in templateList" :key="tpl.name" :value="tpl.name">{{ tpl.name }}</option>
              </select>

              <label class="text-sm text-gray-600 whitespace-nowrap">
                <span class="text-red-500">*</span> 表头行号
              </label>
              <input
                v-model.number="headerRowInput"
                type="number"
                min="1"
                :max="Math.max(rawMatrix.length, 1)"
                class="w-20 border border-gray-300 rounded px-3 py-1.5 text-sm"
              >
              <button
                type="button"
                class="px-3 py-1.5 text-sm rounded border border-sky-600 text-sky-600 hover:bg-sky-50"
                @click="readHeaderRow"
              >
                读取表头
              </button>
              <button
                type="button"
                class="px-3 py-1.5 text-sm text-sky-600 border border-sky-200 rounded hover:bg-sky-50"
                @click="saveOrUpdateTemplate"
              >
                保存模板
              </button>
              <button
                type="button"
                class="px-3 py-1.5 text-sm text-red-500 border border-red-200 rounded hover:bg-red-50 disabled:opacity-40 disabled:cursor-not-allowed"
                :disabled="!selectedTemplateName"
                @click="removeTemplate"
              >
                删除模板
              </button>
            </div>
            <p v-if="headerApplyError" class="text-red-500 text-xs mb-2 shrink-0">{{ headerApplyError }}</p>
            <p
              v-else-if="headerRowInput !== appliedHeaderRow && fileColumns.length"
              class="text-xs text-amber-600 mb-2 shrink-0"
            >
              表头行号已变更，请点击「读取表头」后继续
            </p>

            <p class="text-sm text-gray-600 mb-2 shrink-0">
              将文件列映射到系统标准字段（标<span class="text-red-500">*</span>为必填；勾选「是否校验」的字段与订单行不等则失败）
            </p>
            <p
              v-if="!fileColumns.length && !headerApplyError"
              class="text-sm text-gray-400 mb-2 shrink-0"
            >
              请填写表头行号后点击「读取表头」，再进行列映射
            </p>

            <div class="overflow-auto flex-1 min-h-0">
              <table v-if="fileColumns.length" class="w-full text-sm">
                <thead class="bg-gray-50 border-b sticky top-0">
                  <tr>
                    <th class="px-3 py-2 text-left text-gray-600">文件列名</th>
                    <th class="px-3 py-2 text-left text-gray-600">系统标准字段</th>
                    <th class="px-3 py-2 text-center text-gray-600 w-24">是否校验</th>
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
                          <option
                            v-for="field in group.fields"
                            :key="field.value + col"
                            :value="field.value"
                          >
                            {{ field.label }}{{ field.required ? ' *' : '' }}
                          </option>
                        </template>
                      </select>
                    </td>
                    <td class="px-3 py-2 text-center">
                      <input
                        type="checkbox"
                        class="rounded text-sky-600 disabled:opacity-40"
                        :disabled="!canToggleMustMatch(col)"
                        :checked="!!mustMatchByCol[col]"
                        @change="onMustMatchToggle(col, $event.target.checked)"
                      >
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- Step 3: Parse -->
          <div
            v-else-if="currentStep === 3"
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
              <p class="text-sm text-orange-500">
                点击「下一步」按钮，只导入成功行，不导入失败行。
              </p>
              <div v-if="validated.failCount > 0" class="pt-1">
                <button
                  type="button"
                  class="px-3 py-1.5 text-sm rounded border border-gray-300 hover:bg-gray-50"
                  @click="exportResult"
                >
                  下载失败数据
                </button>
              </div>
            </div>
          </div>

          <!-- Step 4: Ingest -->
          <div
            v-else
            class="flex flex-col h-full min-h-0 items-center justify-center"
          >
            <div v-if="ingestPhase === 'progress'" class="w-full max-w-md space-y-3">
              <p class="text-sm text-gray-700 text-center">正在入库，请稍候…</p>
              <div class="h-2 bg-gray-200 rounded overflow-hidden">
                <div
                  class="h-full bg-sky-600 transition-all duration-150"
                  :style="{ width: `${ingestProgress}%` }"
                />
              </div>
              <p class="text-sm text-gray-500 text-center">{{ ingestProgress }}%</p>
            </div>
            <div
              v-else-if="ingestPhase === 'success'"
              class="flex items-center gap-3"
            >
              <span class="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center text-xl">✓</span>
              <span class="text-base text-gray-800">入库成功</span>
            </div>
            <div
              v-else-if="ingestPhase === 'fail'"
              class="flex items-center gap-3"
            >
              <span class="w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center text-xl">×</span>
              <span class="text-base text-gray-800">入库失败，请联系管理员</span>
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
              v-if="currentStep > 1"
              type="button"
              class="px-4 py-1.5 text-sm rounded border border-gray-300 text-gray-700 hover:bg-gray-50"
              @click="goPrev"
            >
              上一步
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
              class="px-4 py-1.5 text-sm rounded border border-gray-300 text-gray-700 hover:bg-gray-50"
              @click="handleClose"
            >
              取消
            </button>
            <button
              type="button"
              class="px-4 py-1.5 text-sm rounded bg-sky-600 text-white hover:bg-sky-700 disabled:opacity-40 disabled:cursor-not-allowed"
              :disabled="validated.passCount <= 0"
              @click="goIngest"
            >
              下一步
            </button>
          </template>
          <template v-else-if="currentStep === 4 && (ingestPhase === 'success' || ingestPhase === 'fail')">
            <button
              type="button"
              class="px-4 py-1.5 text-sm rounded bg-sky-600 text-white hover:bg-sky-700"
              @click="handleClose"
            >
              关闭
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
  getMappingTemplateEntry,
  saveMappingTemplate,
  deleteMappingTemplate,
  isAllowedDeliveryFileName
} from '@/modules/acceptance/data/delivery-import';
import { upsertPreAcceptDrafts } from '@/modules/acceptance/data/pre-accept-drafts';
import {
  PRE_ACCEPT_STEPS,
  PRE_ACCEPT_TEMPLATE_CTX,
  PRE_ACCEPT_DEFAULT_MUST_MATCH_FIELDS,
  canPreAcceptMustMatch,
  isPreAcceptDefaultMustMatch,
  collectPreAcceptMustMatchFields,
  buildMustMatchByCol,
  getPreAcceptStandardFieldGroups,
  buildPreAcceptDefaultColumnMapping,
  validatePreAcceptMapping,
  parsePreAcceptFileMock,
  applyPreAcceptHeaderRow,
  buildPreAcceptShipRows,
  validatePreAcceptRows,
  exportPreAcceptValidationResult,
  sanitizePreAcceptColumnMapping
} from '@/modules/acceptance/data/pre-accept-wizard';

defineOptions({ name: 'PreAcceptWizardModal' });

const props = defineProps({
  open: { type: Boolean, default: false },
  ctx: { type: Object, default: () => ({}) }
});

const emit = defineEmits(['close']);

const currentStep = ref(1);
const uploadedFile = ref(null);
const uploadError = ref('');
const fileInputRef = ref(null);
/** @type {import('vue').Ref<string[][]>} */
const rawMatrix = ref([]);
const headerRow = ref(1);
const headerRowInput = ref(1);
/** 最近一次「读取表头」成功应用的行号；与 input 不一致时需重新读取 */
const appliedHeaderRow = ref(0);
const headerApplyError = ref('');
const fileColumns = ref([]);
const parsedRows = ref([]);
/** @type {import('vue').Ref<Record<string, string>>} */
const columnMapping = ref({});
/** @type {import('vue').Ref<Record<string, boolean>>} */
const mustMatchByCol = ref({});
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
const ingestPhase = ref('idle');
const ingestProgress = ref(0);
const selectedTemplateName = ref('');
const templateListRevision = ref(0);

const resourceType = computed(() => props.ctx?.type || '纸质书');
const acceptanceLang = computed(() => props.ctx?.lang || '中文');
const standardFieldGroups = computed(() => (
  getPreAcceptStandardFieldGroups(resourceType.value, acceptanceLang.value)
));
const templateList = computed(() => {
  templateListRevision.value;
  return listMappingTemplates(PRE_ACCEPT_TEMPLATE_CTX);
});
const mappingError = computed(() => (
  validatePreAcceptMapping(columnMapping.value, resourceType.value, acceptanceLang.value)
));
const mustMatchFields = computed(() => (
  collectPreAcceptMustMatchFields(columnMapping.value, mustMatchByCol.value)
));

const canGoNext = computed(() => {
  if (currentStep.value === 1) {
    return !!uploadedFile.value && !!rawMatrix.value.length && !uploadError.value;
  }
  if (currentStep.value === 2) {
    return appliedHeaderRow.value >= 1
      && appliedHeaderRow.value === headerRowInput.value
      && !headerApplyError.value
      && !!parsedRows.value.length;
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
  rawMatrix.value = [];
  headerRow.value = 1;
  headerRowInput.value = 1;
  appliedHeaderRow.value = 0;
  headerApplyError.value = '';
  fileColumns.value = [];
  parsedRows.value = [];
  columnMapping.value = {};
  mustMatchByCol.value = {};
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
  ingestPhase.value = 'idle';
  ingestProgress.value = 0;
  selectedTemplateName.value = '';
  if (fileInputRef.value) fileInputRef.value.value = '';
}

/**
 * @param {{ keepMapping?: boolean, mustMatchFields?: string[] }} [opts]
 */
function applyHeaderForMapping(opts = {}) {
  const rowNo = Math.floor(Number(headerRowInput.value) || 0);
  if (rowNo < 1 || rowNo > rawMatrix.value.length) {
    headerApplyError.value = '表头行号无效';
    appliedHeaderRow.value = 0;
    fileColumns.value = [];
    parsedRows.value = [];
    return false;
  }
  headerRow.value = rowNo;
  const applied = applyPreAcceptHeaderRow(rawMatrix.value, rowNo);
  if (!applied.ok) {
    headerApplyError.value = applied.error;
    appliedHeaderRow.value = 0;
    fileColumns.value = [];
    parsedRows.value = [];
    return false;
  }
  headerApplyError.value = '';
  headerRow.value = applied.headerRow;
  headerRowInput.value = applied.headerRow;
  appliedHeaderRow.value = applied.headerRow;
  fileColumns.value = applied.fileColumns;
  parsedRows.value = applied.parsedRows;

  if (opts.keepMapping) {
    const sanitized = sanitizePreAcceptColumnMapping(
      columnMapping.value,
      resourceType.value,
      acceptanceLang.value
    );
    /** @type {Record<string, string>} */
    const next = {};
    fileColumns.value.forEach(col => {
      next[col] = sanitized[col] || '';
    });
    columnMapping.value = next;
  } else {
    columnMapping.value = buildPreAcceptDefaultColumnMapping(
      fileColumns.value,
      resourceType.value,
      acceptanceLang.value
    );
  }

  mustMatchByCol.value = buildMustMatchByCol(
    columnMapping.value,
    opts.mustMatchFields !== undefined
      ? opts.mustMatchFields
      : PRE_ACCEPT_DEFAULT_MUST_MATCH_FIELDS
  );
  return true;
}

/** 用户点击「读取表头」：已有映射则尽量保留；首次读取走默认映射并默认勾选是否校验 */
function readHeaderRow() {
  const hasMapped = Object.values(columnMapping.value).some(Boolean);
  applyHeaderForMapping({
    keepMapping: hasMapped,
    ...(hasMapped ? { mustMatchFields: mustMatchFields.value } : {})
  });
}

function canToggleMustMatch(col) {
  return canPreAcceptMustMatch(columnMapping.value[col]);
}

function onMappingChange(fileCol, stdFieldKey) {
  columnMapping.value = { ...columnMapping.value, [fileCol]: stdFieldKey };
  const next = { ...mustMatchByCol.value };
  if (!canPreAcceptMustMatch(stdFieldKey)) {
    next[fileCol] = false;
  } else {
    next[fileCol] = isPreAcceptDefaultMustMatch(stdFieldKey);
  }
  // 同步：同标准字段其它列勾选状态
  if (canPreAcceptMustMatch(stdFieldKey) && next[fileCol]) {
    Object.entries(columnMapping.value).forEach(([c, std]) => {
      if (std === stdFieldKey) next[c] = true;
    });
  }
  mustMatchByCol.value = next;
}

function onMustMatchToggle(fileCol, checked) {
  const std = columnMapping.value[fileCol];
  if (!canPreAcceptMustMatch(std)) return;
  const next = { ...mustMatchByCol.value };
  Object.entries(columnMapping.value).forEach(([c, s]) => {
    if (s === std) next[c] = checked;
  });
  mustMatchByCol.value = next;
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
  rawMatrix.value = [];
  parsedRows.value = [];
  fileColumns.value = [];
  if (fileInputRef.value) fileInputRef.value.value = '';
}

function onFileChange(event) {
  const file = event.target.files?.[0];
  uploadError.value = '';
  rawMatrix.value = [];
  parsedRows.value = [];
  fileColumns.value = [];
  appliedHeaderRow.value = 0;
  if (!file) {
    uploadedFile.value = null;
    return;
  }
  if (!isAllowedDeliveryFileName(file.name)) {
    uploadedFile.value = null;
    uploadError.value = '请上传 xls/xlsx 格式文件';
    if (fileInputRef.value) fileInputRef.value.value = '';
    return;
  }
  uploadedFile.value = file;
  const parsed = parsePreAcceptFileMock(file.name, props.ctx);
  if (!parsed.ok) {
    uploadError.value = parsed.error;
    uploadedFile.value = null;
    if (fileInputRef.value) fileInputRef.value.value = '';
    return;
  }
  rawMatrix.value = parsed.rawMatrix;
  headerRowInput.value = parsed.defaultHeaderRow || 1;
  headerRow.value = headerRowInput.value;
  selectedTemplateName.value = '';
  columnMapping.value = {};
  mustMatchByCol.value = {};
}

function onTemplateSelect() {
  if (!selectedTemplateName.value) {
    // 切回「选择模板」：清空列映射与是否校验
    if (fileColumns.value.length) {
      /** @type {Record<string, string>} */
      const cleared = {};
      /** @type {Record<string, boolean>} */
      const matchCleared = {};
      fileColumns.value.forEach(col => {
        cleared[col] = '';
        matchCleared[col] = false;
      });
      columnMapping.value = cleared;
      mustMatchByCol.value = matchCleared;
    } else {
      columnMapping.value = {};
      mustMatchByCol.value = {};
    }
    return;
  }
  const entry = getMappingTemplateEntry(PRE_ACCEPT_TEMPLATE_CTX, selectedTemplateName.value);
  if (!entry) return;
  if (entry.headerRow) {
    headerRowInput.value = entry.headerRow;
    headerRow.value = entry.headerRow;
  }
  if (!applyHeaderForMapping({ keepMapping: false })) return;
  const next = { ...columnMapping.value };
  fileColumns.value.forEach(col => {
    if (entry.mapping[col]) next[col] = entry.mapping[col];
  });
  columnMapping.value = sanitizePreAcceptColumnMapping(
    next,
    resourceType.value,
    acceptanceLang.value
  );
  mustMatchByCol.value = buildMustMatchByCol(
    columnMapping.value,
    entry.mustMatchFields != null
      ? entry.mustMatchFields
      : PRE_ACCEPT_DEFAULT_MUST_MATCH_FIELDS
  );
}

function templateMeta() {
  return {
    headerRow: headerRow.value,
    mustMatchFields: mustMatchFields.value
  };
}

function saveOrUpdateTemplate() {
  if (!fileColumns.value.length || appliedHeaderRow.value < 1) {
    window.alert('请先读取表头后再保存模板');
    return;
  }
  if (selectedTemplateName.value) {
    saveMappingTemplate(
      PRE_ACCEPT_TEMPLATE_CTX,
      selectedTemplateName.value,
      columnMapping.value,
      templateMeta()
    );
    templateListRevision.value += 1;
    window.alert('模板已更新');
    return;
  }
  const name = window.prompt('请输入模板名称');
  if (name == null) return;
  const trimmed = name.trim();
  if (!trimmed) {
    window.alert('请输入模板名称');
    return;
  }
  if (templateList.value.some(t => t.name === trimmed)) {
    if (!window.confirm(`模板「${trimmed}」已存在，是否覆盖？`)) return;
  }
  saveMappingTemplate(PRE_ACCEPT_TEMPLATE_CTX, trimmed, columnMapping.value, templateMeta());
  selectedTemplateName.value = trimmed;
  templateListRevision.value += 1;
  window.alert('模板已保存');
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
  validated.value = validatePreAcceptRows(
    shipRows.value,
    props.ctx,
    columnMapping.value,
    mustMatchFields.value
  );
}

function exportResult() {
  exportPreAcceptValidationResult(
    validated.value.rows,
    `预验收失败数据_${Date.now()}.xls`,
    fileColumns.value
  );
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function goPrev() {
  if (currentStep.value <= 1 || validatePhase.value === 'progress' || ingestPhase.value === 'progress') return;
  if (currentStep.value === 3) {
    validatePhase.value = 'idle';
    validateProgress.value = 0;
  }
  if (currentStep.value === 4) return;
  currentStep.value -= 1;
}

async function goNext() {
  if (currentStep.value === 1) {
    if (!canGoNext.value) return;
    if (!uploadedFile.value || !isAllowedDeliveryFileName(uploadedFile.value.name)) {
      uploadError.value = '请上传 xls/xlsx 格式文件';
      return;
    }
    // 不自动读取表头；第 2 步由用户点「读取表头」
    currentStep.value = 2;
    return;
  }
  if (currentStep.value === 2) {
    if (!canGoNext.value) return;
    if (headerRowInput.value !== appliedHeaderRow.value) {
      window.alert('表头行号已变更，请先点击「读取表头」');
      return;
    }
    if (mappingError.value) {
      window.alert(mappingError.value);
      return;
    }
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

async function goIngest() {
  if (validatePhase.value !== 'done' || validated.value.passCount <= 0) return;
  const passed = validated.value.rows.filter(r => r.result === '通过');
  if (!passed.length) return;

  currentStep.value = 4;
  ingestPhase.value = 'progress';
  ingestProgress.value = 0;

  const tick = window.setInterval(() => {
    if (ingestProgress.value < 90) ingestProgress.value += 10;
  }, 80);

  await sleep(900);
  window.clearInterval(tick);
  ingestProgress.value = 100;
  await sleep(120);

  const fileName = uploadedFile.value?.name || '';
  const acceptanceId = props.ctx?.id || props.ctx?.acceptanceId || '';
  try {
    if (/入库失败/i.test(fileName) || !acceptanceId) {
      throw new Error('ingest failed');
    }
    const count = upsertPreAcceptDrafts(acceptanceId, passed);
    ingestPhase.value = count > 0 ? 'success' : 'fail';
  } catch {
    ingestPhase.value = 'fail';
  }
}

function handleClose() {
  if (validatePhase.value === 'progress' || ingestPhase.value === 'progress') return;
  emit('close');
}
</script>
