<template>
  <div v-if="open" class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4" @click.self="emit('close')">
    <div class="bg-white rounded-lg shadow-xl w-full max-w-2xl flex flex-col max-h-[90vh]" @click.stop>
      <div class="flex items-center justify-between px-6 py-4 border-b border-gray-200 shrink-0">
        <h2 class="text-base font-medium text-gray-800">批量导入</h2>
        <button type="button" class="text-gray-400 hover:text-gray-600 text-xl leading-none" @click="emit('close')">&times;</button>
      </div>

      <div v-if="step === 'upload'" class="px-6 py-5 space-y-5 overflow-y-auto">
        <div class="flex items-start gap-3">
          <label class="text-sm text-gray-600 w-24 text-right pt-1 shrink-0">导入模板</label>
          <button type="button" class="px-4 py-1.5 text-sm rounded bg-sky-600 text-white hover:bg-sky-700" @click="downloadImportTemplate(type)">
            下载导入模板
          </button>
        </div>
        <div class="flex items-start gap-3">
          <label class="text-sm text-gray-600 w-24 text-right pt-1 shrink-0">导入说明</label>
          <ol class="flex-1 text-sm text-gray-600 list-decimal list-inside space-y-1">
            <li>文件格式必须为 Excel 格式</li>
            <li>数据记录不超过 2000 条</li>
            <li>模板的表头不可更改，不可删除</li>
          </ol>
        </div>
        <p class="text-sm text-orange-500 pl-[7.5rem]">支持扩展名：.xls .xlsx</p>
        <div class="flex items-start gap-3">
          <label class="text-sm text-gray-600 w-24 text-right pt-1 shrink-0">文件上传</label>
          <div class="flex-1">
            <div class="flex items-center gap-3 flex-wrap">
              <button type="button" class="px-4 py-1.5 text-sm rounded border border-gray-300 text-gray-700 hover:bg-gray-50" @click="fileInput?.click()">
                上传文件
              </button>
              <input ref="fileInput" type="file" accept=".xls,.xlsx" class="hidden" @change="onFileChange">
              <div v-if="uploadedFile" class="flex items-center gap-2 text-sm text-gray-700">
                <span>{{ uploadedFile.name }}</span>
                <button type="button" class="text-gray-400 hover:text-gray-600 text-lg leading-none" @click="removeFile">&times;</button>
              </div>
            </div>
            <p v-if="fileError" class="text-red-500 text-xs mt-1">{{ fileError }}</p>
            <p v-if="parseError" class="text-red-500 text-xs mt-1">{{ parseError }}</p>
          </div>
        </div>
      </div>

      <div v-else class="px-6 py-8 space-y-4 overflow-y-auto">
        <p v-if="parseResult" class="text-sm text-gray-700">
          共解析到 {{ parseResult.total }} 条数据，其中
          <span class="text-teal-600">{{ parseResult.success }}</span> 条成功，
          <span class="text-red-500">{{ parseResult.fail }}</span> 条失败
        </p>
        <div v-if="parseResult?.fail > 0">
          <button type="button" class="text-sm text-sky-600 hover:underline" @click="downloadImportErrorFile(type, parseResult.errorRows)">
            下载解析结果
          </button>
        </div>
        <p class="text-sm text-orange-500">提示：解析全部成功，才可入库</p>
      </div>

      <div class="flex justify-end gap-3 px-6 py-4 border-t border-gray-200 bg-gray-50 rounded-b-lg shrink-0">
        <button type="button" class="px-5 py-1.5 text-sm rounded border border-gray-300 text-gray-600 hover:bg-gray-50" @click="emit('close')">取消</button>
        <button
          v-if="step === 'upload'"
          type="button"
          class="px-5 py-1.5 text-sm rounded bg-sky-600 text-white hover:bg-sky-700"
          @click="startParse"
        >
          开始解析
        </button>
        <button
          v-else
          type="button"
          class="px-5 py-1.5 text-sm rounded bg-sky-600 text-white hover:bg-sky-700 disabled:opacity-50 disabled:cursor-not-allowed"
          :disabled="!parseResult || parseResult.fail > 0"
          @click="confirmImport"
        >
          确定导入
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import {
  downloadImportErrorFile,
  downloadImportTemplate,
  simulateImportParse
} from '@/modules/location/data/location-manage';

const props = defineProps({
  open: { type: Boolean, default: false },
  type: { type: String, default: 'site' },
  siteRows: { type: Array, default: () => [] },
  branchRows: { type: Array, default: () => [] },
  collectionRows: { type: Array, default: () => [] }
});

const emit = defineEmits(['close', 'confirm', 'invalid']);

const step = ref('upload');
const fileInput = ref(null);
const uploadedFile = ref(null);
const parseResult = ref(null);
const fileError = ref('');
const parseError = ref('');

watch(() => props.open, open => {
  if (!open) return;
  step.value = 'upload';
  uploadedFile.value = null;
  parseResult.value = null;
  fileError.value = '';
  parseError.value = '';
  if (fileInput.value) fileInput.value.value = '';
});

function onFileChange(event) {
  const file = event.target.files?.[0] || null;
  uploadedFile.value = file;
  fileError.value = '';
  parseError.value = '';
}

function removeFile() {
  uploadedFile.value = null;
  if (fileInput.value) fileInput.value.value = '';
}

function startParse() {
  parseError.value = '';
  if (!uploadedFile.value) {
    fileError.value = '请上传文件';
    return;
  }
  fileError.value = '';
  const outcome = simulateImportParse(props.type, uploadedFile.value, {
    siteRows: props.siteRows,
    branchRows: props.branchRows,
    collectionRows: props.collectionRows
  });
  if (!outcome.ok) {
    parseError.value = outcome.message || '解析失败';
    return;
  }
  parseResult.value = outcome.result;
  step.value = 'result';
}

function confirmImport() {
  if (!parseResult.value || parseResult.value.fail > 0) {
    emit('invalid', '解析全部成功，才可入库');
    return;
  }
  emit('confirm', parseResult.value.successRows);
}
</script>
