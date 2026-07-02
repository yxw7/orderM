<template>
  <div class="page-panel flex flex-col min-h-0">
    <nav class="flex items-center gap-2 mb-4 text-sm shrink-0">
      <RouterLink to="/acceptance" class="flex items-center gap-1 text-gray-500 hover:text-sky-600">
        <span>&lsaquo;</span> 验收单管理
      </RouterLink>
      <span class="text-gray-400">/</span>
      <span class="text-gray-800 font-medium">导入发货单</span>
    </nav>

    <div class="bg-white rounded border border-gray-200 px-5 py-3 mb-4 shrink-0 text-sm text-gray-700">
      <div class="flex flex-wrap gap-x-8 gap-y-2">
        <span>验收单号：<span class="text-gray-900">{{ ctx.id || '—' }}</span></span>
        <span>验收单名称：<span class="text-gray-900">{{ ctx.name || '—' }}</span></span>
        <span>资源类型：<span class="text-gray-900">{{ ctx.type || '—' }}</span></span>
        <span>语种：<span class="text-gray-900">{{ ctx.lang || '—' }}</span></span>
        <span>发货单号：<span class="text-gray-900">{{ ctx.shipNo || '—' }}</span></span>
        <span>供应商：<span class="text-gray-900">{{ ctx.supplier || '—' }}</span></span>
        <span class="inline-flex items-center gap-1 min-w-0">
          验收备注：
          <HoverTooltip v-if="ctx.remarkText" :text="ctx.remarkText">
            <span class="text-gray-900 max-w-[200px] truncate inline-block align-bottom">{{ ctx.remarkText }}</span>
          </HoverTooltip>
          <span v-else class="text-gray-900">—</span>
        </span>
      </div>
    </div>

    <div class="bg-white rounded border border-gray-200 px-6 py-4 mb-4 shrink-0">
      <div class="flex items-start">
        <template v-for="(step, idx) in DELIVERY_IMPORT_STEPS" :key="step.step">
          <div class="flex flex-col items-center flex-1">
            <div class="w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium border-2" :class="stepCircleClass(step.step)">
              {{ step.step }}
            </div>
            <p class="mt-2 text-sm" :class="currentStep >= step.step ? 'text-sky-600 font-medium' : 'text-gray-400'">{{ step.title }}</p>
          </div>
          <div v-if="idx < DELIVERY_IMPORT_STEPS.length - 1" class="flex-shrink-0 w-12 h-0.5 mt-4" :class="currentStep > step.step ? 'bg-sky-600' : 'bg-gray-200'" />
        </template>
      </div>
    </div>

    <div class="flex-1 min-h-0 overflow-auto relative">
      <!-- Step 1 -->
      <div v-if="currentStep === 1" class="bg-white rounded border border-gray-200 p-6">
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
      <div v-else-if="currentStep === 2" class="bg-white rounded border border-gray-200 p-4 flex flex-col min-h-[320px]">
        <p class="text-sm text-gray-600 mb-4">将文件列映射到系统标准字段（<span class="text-red-500">发货套数</span> 必填）</p>
        <div class="flex flex-wrap items-center gap-3 mb-4">
          <label class="text-sm text-gray-600 whitespace-nowrap">映射模板</label>
          <select
            v-model="selectedTemplateName"
            class="border border-gray-300 rounded px-3 py-1.5 text-sm min-w-[180px]"
            @change="onTemplateSelect"
          >
            <option value="">— 选择已保存模板 —</option>
            <option v-for="tpl in templateList" :key="tpl.name" :value="tpl.name">{{ tpl.name }}</option>
          </select>
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
          <button
            v-if="selectedTemplateName"
            type="button"
            class="px-3 py-1.5 text-sm text-red-500 border border-red-200 rounded hover:bg-red-50"
            @click="removeTemplate"
          >
            删除模板
          </button>
        </div>
        <div class="overflow-auto flex-1">
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
      <div v-else-if="currentStep === 3" class="bg-white rounded border border-gray-200 p-6">
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
      <div v-else-if="currentStep === 4" class="bg-white rounded border border-gray-200 flex flex-col min-h-[360px]">
        <div v-if="isPreviewMatching" class="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white/80">
          <div class="w-10 h-10 border-[3px] border-gray-200 border-t-sky-600 rounded-full animate-spin" />
          <p class="mt-4 text-sm text-gray-600">正在匹配订单行…</p>
        </div>
        <div class="overflow-auto flex-1">
          <table class="w-full text-xs">
            <thead class="bg-gray-50 border-b sticky top-0">
              <tr>
                <th class="px-2 py-2 w-8" />
                <th class="px-2 py-2 text-left text-gray-600">序号</th>
                <th class="px-2 py-2 text-left text-gray-600">状态</th>
                <th v-for="col in previewDisplayColumns" :key="col.value" class="px-2 py-2 text-left text-gray-600 whitespace-nowrap">{{ col.label }}</th>
                <th v-if="showReceiveQtyColumn" class="px-2 py-2 text-left text-gray-600 whitespace-nowrap">发货套数</th>
                <th class="px-2 py-2 text-left text-gray-600">操作</th>
              </tr>
            </thead>
            <tbody>
              <template v-for="(row, rowIdx) in previewRows" :key="row.id">
                <tr class="border-b hover:bg-gray-50/80">
                  <td class="px-2 py-2">
                    <button type="button" class="text-gray-500" :class="row.expanded ? 'rotate-90' : ''" @click="row.expanded = !row.expanded">›</button>
                  </td>
                  <td class="px-2 py-2">{{ rowIdx + 1 }}</td>
                  <td class="px-2 py-2 whitespace-nowrap">
                    <span :class="getMatchStatusDisplay(row.status).cls">{{ getMatchStatusDisplay(row.status).text }}</span>
                  </td>
                  <td v-for="col in previewDisplayColumns" :key="col.value + row.id" class="px-2 py-2 whitespace-nowrap">
                    {{ row.fieldValues[col.value] ?? '—' }}
                  </td>
                  <td v-if="showReceiveQtyColumn" class="px-2 py-2 whitespace-nowrap">
                    {{ row.fieldValues.receiveQty ?? '—' }}
                  </td>
                  <td class="px-2 py-2 whitespace-nowrap">
                    <button type="button" class="text-sky-600 hover:underline mr-2" @click="openPickModal(rowIdx)">选择订单行</button>
                    <button type="button" class="text-red-500 hover:underline" @click="removePreviewRow(rowIdx)">删除</button>
                  </td>
                </tr>
                <tr v-if="row.expanded">
                  <td :colspan="previewMainColspan" class="px-4 py-3 bg-gray-50/50">
                    <p class="text-xs text-gray-500 mb-2">订单行信息（可与上行发货单字段对照查看）</p>
                    <div class="overflow-x-auto border border-gray-200 rounded bg-white">
                      <table class="w-full text-xs">
                        <thead class="bg-gray-50">
                          <tr>
                            <th class="px-2 py-1.5 text-left text-gray-600 whitespace-nowrap">馆址</th>
                            <th class="px-2 py-1.5 text-left text-gray-600 whitespace-nowrap">订单行号</th>
                            <th v-for="col in previewDisplayColumns" :key="'c-' + col.value" class="px-2 py-1.5 text-left text-gray-600 whitespace-nowrap">{{ col.label }}</th>
                            <th class="px-2 py-1.5 text-left text-gray-600 whitespace-nowrap">待收套数</th>
                            <th class="px-2 py-1.5 text-left text-gray-600 whitespace-nowrap">收货套数</th>
                            <th class="px-2 py-1.5 text-left text-gray-600 whitespace-nowrap">换货套数</th>
                            <th class="px-2 py-1.5 text-left text-gray-600 whitespace-nowrap">换货原因</th>
                            <th class="px-2 py-1.5 text-left text-gray-600 whitespace-nowrap">退货套数</th>
                            <th class="px-2 py-1.5 text-left text-gray-600 whitespace-nowrap">退货原因</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(child, ci) in row.children" :key="child.lineNo + ci" class="border-t">
                            <td class="px-2 py-1.5 whitespace-nowrap">{{ child.location }}</td>
                            <td class="px-2 py-1.5 whitespace-nowrap">{{ child.lineNo }}</td>
                            <td v-for="col in previewDisplayColumns" :key="'v-' + col.value + ci" class="px-2 py-1.5 whitespace-nowrap">
                              {{ child.fieldValues?.[col.value] ?? '—' }}
                            </td>
                            <td class="px-2 py-1.5 whitespace-nowrap">{{ child.pending }}</td>
                            <td class="px-2 py-1.5">
                              <input
                                v-model.number="child.receive"
                                type="number"
                                min="0"
                                class="w-16 border border-gray-300 rounded px-1 py-0.5"
                                :title="`待收套数 ${child.pending}`"
                              >
                            </td>
                            <td class="px-2 py-1.5">
                              <input v-model.number="child.exchange" type="number" min="0" class="w-14 border border-gray-300 rounded px-1 py-0.5">
                            </td>
                            <td class="px-2 py-1.5">
                              <select v-model="child.exchangeReason" class="border border-gray-300 rounded px-1 py-0.5 min-w-[100px]">
                                <option value="">请选择</option>
                                <option v-for="r in EXCHANGE_REASON_OPTIONS" :key="r" :value="r">{{ r }}</option>
                              </select>
                            </td>
                            <td class="px-2 py-1.5">
                              <input v-model.number="child.ret" type="number" min="0" class="w-14 border border-gray-300 rounded px-1 py-0.5">
                            </td>
                            <td class="px-2 py-1.5">
                              <select v-model="child.returnReason" class="border border-gray-300 rounded px-1 py-0.5 min-w-[100px]">
                                <option value="">请选择</option>
                                <option v-for="r in RETURN_REASON_OPTIONS" :key="r" :value="r">{{ r }}</option>
                              </select>
                            </td>
                          </tr>
                          <tr v-if="!row.children.length">
                            <td :colspan="previewChildColspan" class="px-2 py-4 text-center text-gray-400">暂无匹配订单行，请点击「选择订单行」</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </td>
                </tr>
              </template>
              <tr v-if="!previewRows.length && !isPreviewMatching">
                <td :colspan="previewMainColspan" class="px-4 py-8 text-center text-gray-400">暂无预览数据</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Step 5 -->
      <div v-else class="bg-white rounded border border-gray-200 p-6">
        <template v-if="!submitDone">
          <p class="text-sm text-gray-700 mb-4">确认后将写入当前验收单：</p>
          <div class="text-sm text-gray-600 space-y-2">
            <p>收货：<strong>{{ confirmSummary.receive.count }}</strong> 行，<strong>{{ confirmSummary.receive.qty }}</strong> 套</p>
            <p>换货：<strong>{{ confirmSummary.exchange.count }}</strong> 行，<strong>{{ confirmSummary.exchange.qty }}</strong> 套</p>
            <p>退货：<strong>{{ confirmSummary.returned.count }}</strong> 行，<strong>{{ confirmSummary.returned.qty }}</strong> 套</p>
          </div>
          <p class="text-sm text-gray-500 mt-4">确认后将写入当前验收单</p>
        </template>
        <template v-else-if="submitFailed">
          <p class="text-red-500 text-sm mb-4">提交失败，请重新提交或者联系管理员</p>
        </template>
        <template v-else>
          <p class="text-green-600 text-sm">发货单导入成功</p>
        </template>
      </div>
    </div>

    <div
      class="flex items-center mt-4 shrink-0 gap-3 flex-wrap"
      :class="isStep5SubmitSuccess ? 'justify-end' : 'justify-between'"
    >
      <div v-if="!isStep5SubmitSuccess" class="flex gap-2">
        <button
          v-if="showPrevBtn"
          type="button"
          class="px-5 py-1.5 text-sm border border-gray-300 rounded hover:bg-gray-50"
          @click="prevStep"
        >
          上一步
        </button>
        <button
          v-if="showCancelBtn"
          type="button"
          class="px-5 py-1.5 text-sm border border-gray-300 rounded hover:bg-gray-50"
          @click="cancelImport"
        >
          取消
        </button>
      </div>
      <div class="flex gap-2">
        <button
          v-if="showRetryBtn"
          type="button"
          class="px-5 py-1.5 text-sm bg-sky-600 text-white rounded hover:bg-sky-700"
          @click="retrySubmit"
        >
          重新提交
        </button>
        <button
          v-if="showReturnBtn"
          type="button"
          class="px-5 py-1.5 text-sm bg-sky-600 text-white rounded hover:bg-sky-700"
          @click="goBackToAcceptance"
        >
          返回
        </button>
        <button
          v-if="showNextBtn"
          type="button"
          class="px-5 py-1.5 text-sm rounded text-white"
          :class="canProceed ? 'bg-sky-600 hover:bg-sky-700' : 'bg-gray-300 cursor-not-allowed'"
          :disabled="!canProceed"
          @click="nextStep"
        >
          {{ nextBtnLabel }}
        </button>
      </div>
    </div>

    <DeliveryImportPickOrderLineModal
      :open="pickModalOpen"
      :rows="pickOrderLinePool"
      :resource-type="ctx.type || '纸质书'"
      @close="pickModalOpen = false"
      @confirm="onPickOrderLines"
    />
  </div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import HoverTooltip from '@/modules/acceptance/components/HoverTooltip.vue';
import DeliveryImportPickOrderLineModal from '@/modules/acceptance/components/DeliveryImportPickOrderLineModal.vue';
import { useAcceptanceStore } from '@/modules/acceptance/stores/acceptance';
import { markAcceptanceInProgressAfterImport } from '@/modules/acceptance/data/acceptance-list';
import {
  DELIVERY_IMPORT_STEPS,
  PREVIEW_MATCHING_DURATION_MS,
  EXCHANGE_REASON_OPTIONS,
  RETURN_REASON_OPTIONS,
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
  validateMatchFieldsStep,
  validatePreviewStep,
  buildShipFieldValues,
  buildPreviewRows,
  buildChildrenFromPickedLines,
  getMatchableOrderLines,
  summarizeAction,
  getMatchStatusDisplay,
  isImportableAcceptanceContext
} from '@/modules/acceptance/data/delivery-import';

defineOptions({ name: 'DeliveryImportView' });

const router = useRouter();
const acceptanceStore = useAcceptanceStore();

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
const isPreviewMatching = ref(false);
/** @type {import('vue').Ref<object[]>} */
const previewRows = ref([]);
const pickModalOpen = ref(false);
const pickingRowIndex = ref(null);
const submitDone = ref(false);
const submitFailed = ref(false);

const ctx = computed(() => acceptanceStore.current || {});

const standardFields = computed(() => getActiveStandardFields(ctx.value));

const templateList = computed(() => listMappingTemplates(ctx.value));

const matchFieldOptionsList = computed(() => {
  const mapped = new Set(Object.values(columnMapping.value).filter(Boolean));
  return standardFields.value.filter(f => f.matchable !== false && f.value && mapped.has(f.value));
});

const previewMappedColumns = computed(() => {
  const mapped = new Set(Object.values(columnMapping.value).filter(Boolean));
  return standardFields.value.filter(f => f.value && mapped.has(f.value));
});

/** 主表展示列（不含发货套数，发货套数固定置于操作列左侧） */
const previewDisplayColumns = computed(() =>
  previewMappedColumns.value.filter(f => f.value !== 'receiveQty')
);

/** 是否展示独立发货套数列 */
const showReceiveQtyColumn = computed(() =>
  previewMappedColumns.value.some(f => f.value === 'receiveQty')
);

/** 主表总列数（含展开、序号、状态、操作） */
const previewMainColspan = computed(() =>
  previewDisplayColumns.value.length + (showReceiveQtyColumn.value ? 1 : 0) + 4
);

/** 子表总列数（馆址、订单行号、处置相关 6 列） */
const previewChildColspan = computed(() => previewDisplayColumns.value.length + 8);

const pickOrderLinePool = computed(() => getMatchableOrderLines(ctx.value));

const confirmSummary = computed(() => ({
  receive: summarizeAction(previewRows.value, 'receive'),
  exchange: summarizeAction(previewRows.value, 'exchange'),
  returned: summarizeAction(previewRows.value, 'return')
}));

const canProceed = computed(() => {
  if (currentStep.value === 1) return !!uploadedFile.value && !fileFormatError.value;
  if (currentStep.value === 2) return !validateMappingStep(columnMapping.value, ctx.value);
  if (currentStep.value === 3) return !validateMatchFieldsStep(selectedMatchFields.value);
  if (currentStep.value === 4) return !isPreviewMatching.value && previewRows.value.length > 0;
  return true;
});

/** 第 ⑤ 步提交成功 */
const isStep5SubmitSuccess = computed(() =>
  currentStep.value === 5 && submitDone.value && !submitFailed.value
);

/** 第 ⑤ 步提交失败 */
const isStep5SubmitFailed = computed(() =>
  currentStep.value === 5 && submitDone.value && submitFailed.value
);

const showPrevBtn = computed(() => {
  if (isStep5SubmitSuccess.value || isStep5SubmitFailed.value) return false;
  if (currentStep.value === 5 && submitDone.value) return false;
  return currentStep.value > 1;
});

const showCancelBtn = computed(() => !isStep5SubmitSuccess.value);

const showReturnBtn = computed(() => isStep5SubmitSuccess.value);

const showRetryBtn = computed(() => isStep5SubmitFailed.value);

const showNextBtn = computed(() => {
  if (isStep5SubmitSuccess.value || isStep5SubmitFailed.value) return false;
  return true;
});

const nextBtnLabel = computed(() => {
  if (currentStep.value === 5) return '确认';
  return '下一步';
});

watch(
  () => [ctx.value.type, ctx.value.lang],
  () => {
    initDefaultMapping();
    initDefaultMatchFields();
  }
);

onMounted(() => {
  acceptanceStore.initFromStorage();
  if (!isImportableAcceptanceContext(ctx.value)) {
    window.alert('请先在验收单管理列表勾选一条未开始或进行中的验收单');
    router.replace('/acceptance');
    return;
  }
  initDefaultMapping();
  initDefaultMatchFields();
});

function initDefaultMapping() {
  columnMapping.value = buildDefaultColumnMapping(fileColumns.value, ctx.value);
}

function initDefaultMatchFields() {
  const defaults = resolveDefaultMatchFields(columnMapping.value, ctx.value);
  selectedMatchFields.value = defaults.length
    ? defaults
    : matchFieldOptionsList.value.slice(0, 1).map(f => f.value);
}

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
 * 将模板映射应用到当前文件列
 * @param {Record<string, string>} mapping
 */
function applyTemplateMapping(mapping) {
  const next = { ...columnMapping.value };
  fileColumns.value.forEach(col => {
    if (mapping[col]) next[col] = mapping[col];
  });
  columnMapping.value = next;
}

/**
 * 切换映射模板时自动应用
 */
function onTemplateSelect() {
  if (!selectedTemplateName.value) return;
  const mapping = getMappingTemplateByName(ctx.value, selectedTemplateName.value);
  if (mapping) applyTemplateMapping(mapping);
  initDefaultMatchFields();
}

/**
 * 勾选「保存为模板」时，在点击下一步前校验并写入模板
 * @returns {boolean}
 */
function trySaveTemplateIfNeeded() {
  if (!saveAsTemplate.value) return true;
  const name = templateNameInput.value.trim();
  if (!name) {
    window.alert('请输入模板名称');
    return false;
  }
  saveMappingTemplate(ctx.value, name, columnMapping.value);
  selectedTemplateName.value = name;
  return true;
}

function removeTemplate() {
  if (!selectedTemplateName.value) return;
  if (!window.confirm(`确定删除模板「${selectedTemplateName.value}」？`)) return;
  deleteMappingTemplate(ctx.value, selectedTemplateName.value);
  selectedTemplateName.value = '';
  templateNameInput.value = '';
  window.alert('已删除映射模板');
}

function runPreviewMatching() {
  isPreviewMatching.value = true;
  window.setTimeout(() => {
    const shipRows = buildShipFieldValues(parsedRows.value, columnMapping.value);
    const mappedKeys = previewMappedColumns.value.map(c => c.value);
    previewRows.value = buildPreviewRows(
      shipRows,
      [...selectedMatchFields.value],
      ctx.value,
      mappedKeys
    );
    isPreviewMatching.value = false;
  }, PREVIEW_MATCHING_DURATION_MS);
}

function prevStep() {
  if (currentStep.value <= 1) return;
  if (currentStep.value === 5 && !submitDone.value) {
    currentStep.value = 4;
    return;
  }
  currentStep.value -= 1;
}

function nextStep() {
  if (!canProceed.value) return;

  if (currentStep.value === 1) {
    currentStep.value = 2;
    return;
  }

  if (currentStep.value === 2) {
    const prepared = prepareStep2ForMatching(columnMapping.value, ctx.value);
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
    runPreviewMatching();
    return;
  }

  if (currentStep.value === 4) {
    const errors = validatePreviewStep(previewRows.value);
    if (errors.length) return window.alert(errors.join('\n'));
    submitDone.value = false;
    submitFailed.value = false;
    currentStep.value = 5;
    return;
  }

  if (currentStep.value === 5) {
    submitImport();
  }
}

function submitImport() {
  submitDone.value = true;
  submitFailed.value = false;
  if (uploadedFile.value?.name?.includes('失败')) {
    submitFailed.value = true;
    return;
  }
  if (ctx.value?.status === 'notStarted' && ctx.value?.id) {
    markAcceptanceInProgressAfterImport(ctx.value.id);
    acceptanceStore.setCurrent({ ...ctx.value, status: 'inProgress' });
  }
}

function retrySubmit() {
  submitDone.value = false;
  submitFailed.value = false;
  submitImport();
}

function goBackToAcceptance() {
  router.push('/acceptance');
}

function cancelImport() {
  if (window.confirm('确定取消导入发货单？未保存的数据将丢失。')) {
    router.push('/acceptance');
  }
}

/**
 * @param {number} rowIdx
 */
function openPickModal(rowIdx) {
  pickingRowIndex.value = rowIdx;
  pickModalOpen.value = true;
}

/**
 * @param {number} rowIdx
 */
function removePreviewRow(rowIdx) {
  previewRows.value.splice(rowIdx, 1);
}

/**
 * @param {object[]} lines
 */
function onPickOrderLines(lines) {
  const idx = pickingRowIndex.value;
  if (idx == null || !previewRows.value[idx]) return;
  const row = previewRows.value[idx];
  const shipQty = Number(row.fieldValues?.receiveQty) || 0;
  const mappedKeys = previewMappedColumns.value.map(c => c.value);
  row.children = buildChildrenFromPickedLines(lines, shipQty, mappedKeys);
  row.expanded = true;
}
</script>

<style scoped>
@keyframes spin {
  to { transform: rotate(360deg); }
}
.animate-spin {
  animation: spin 0.8s linear infinite;
}
button.rotate-90 {
  transform: rotate(90deg);
  display: inline-block;
  transition: transform 0.2s ease;
}
</style>
