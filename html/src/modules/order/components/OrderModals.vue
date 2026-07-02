<template>
  <NewOrderFormModal
    :open="store.modal === 'newOrder'"
    @close="store.closeModal()"
    @confirm="submitNewOrder"
  />

  <ImportOrderModal
    :open="store.modal === 'importOrder'"
    :order="importTargetOrder"
    @close="store.closeModal()"
    @import="submitOrderImport"
    @success="store.closeModal()"
  />

  <DeleteOrderConfirmModal
    :open="store.modal === 'deleteOrder'"
    :order-id="store.modalContext.orderId || ''"
    @close="store.closeModal()"
    @confirm="submitDeleteOrder"
  />

  <FormModal v-if="store.modal === 'editOrder'" title="编辑订单" @close="store.closeModal()" @confirm="submitEditOrder">
    <div class="flex items-start gap-3">
      <label class="text-sm text-gray-600 w-28 text-right pt-2 shrink-0"><span class="text-red-500">*</span> 预算名称</label>
      <select v-model="store.forms.editOrder.budget" class="flex-1 border border-gray-300 rounded px-3 py-2 text-sm">
        <option value="">请选择</option>
        <option v-for="opt in BUDGET_OPTIONS" :key="opt" :value="opt">{{ opt }}</option>
      </select>
    </div>
    <div class="flex items-start gap-3">
      <label class="text-sm text-gray-600 w-28 text-right pt-2 shrink-0"><span class="text-red-500">*</span> 供应商</label>
      <select v-model="store.forms.editOrder.supplier" class="flex-1 border border-gray-300 rounded px-3 py-2 text-sm">
        <option value="">请选择</option>
        <option v-for="opt in SUPPLIER_OPTIONS" :key="opt" :value="opt">{{ opt }}</option>
      </select>
    </div>
    <div class="flex items-start gap-3">
      <label class="text-sm text-gray-600 w-28 text-right pt-2 shrink-0">发订备注</label>
      <textarea v-model="store.forms.editOrder.issueRemark" rows="4" placeholder="请输入" class="flex-1 border border-gray-300 rounded px-3 py-2 text-sm resize-none" />
    </div>
  </FormModal>

  <IssueOrderModal
    :open="store.modal === 'issueOrder'"
    @close="store.closeModal()"
    @confirm="submitIssueOrder"
  />

  <CancelOrderReasonModal
    :open="store.modal === 'cancelOrder'"
    @close="store.closeModal()"
    @confirm="submitCancelOrder"
  />

  <FormModal
    v-if="store.modal === 'editLine'"
    title="编辑订单行"
    width-class="w-full max-w-4xl max-h-[90vh]"
    confirm-text="保存"
    body-class="space-y-4"
    @close="store.closeModal()"
    @confirm="submitEditLine"
  >
    <div
      v-for="(row, rowIndex) in EDIT_ORDER_LINE_FORM_ROWS"
      :key="rowIndex"
      class="grid grid-cols-3 gap-4"
    >
      <div v-for="field in row" :key="field.key" class="flex items-center gap-3">
        <label class="text-sm text-gray-600 w-20 text-right shrink-0">{{ field.label }}</label>
        <select
          v-if="field.type === 'select'"
          v-model="store.forms.editLine[field.key]"
          class="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-sky-500"
        >
          <option value="">请选择</option>
          <template v-if="field.options === 'currency'">
            <option v-for="opt in EDIT_LINE_CURRENCY_OPTIONS" :key="opt.value" :value="opt.value">
              {{ opt.label }}
            </option>
          </template>
          <template v-else-if="field.options === 'textLanguage'">
            <option v-for="opt in TEXT_LANGUAGE_OPTIONS" :key="opt" :value="opt">{{ opt }}</option>
          </template>
        </select>
        <input
          v-else
          v-model="store.forms.editLine[field.key]"
          type="text"
          placeholder="请输入"
          class="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-sky-500"
        >
      </div>
    </div>
    <div class="flex items-start gap-3">
      <label class="text-sm text-gray-600 w-20 text-right shrink-0 pt-2">备注</label>
      <textarea
        v-model="store.forms.editLine.remark"
        rows="4"
        placeholder="请输入"
        class="flex-1 border border-gray-300 rounded px-3 py-2 text-sm resize-none focus:outline-none focus:border-sky-500"
      />
    </div>
  </FormModal>

  <FormModal
    v-if="store.modal === 'exportConfig'"
    title="导出配置"
    width-class="w-full max-w-3xl max-h-[90vh]"
    @close="store.closeModal()"
    @confirm="submit('exportConfig')"
  >
    <label class="inline-flex items-center gap-2 text-sm text-gray-700 mb-4">
      <input v-model="exportAll" type="checkbox" class="rounded text-sky-600"> 全选
    </label>
    <div class="grid grid-cols-4 gap-3 text-sm text-gray-700">
      <label v-for="field in currentExportFields" :key="field" class="inline-flex items-center gap-2">
        <input v-model="selectedExportFields" type="checkbox" :value="field" class="rounded text-sky-600">{{ field }}
      </label>
    </div>
  </FormModal>
</template>

<script setup>
import { computed, ref, watch } from 'vue';
import FormModal from '@/modules/order/components/FormModal.vue';
import NewOrderFormModal from '@/modules/order/components/NewOrderFormModal.vue';
import IssueOrderModal from '@/modules/order/components/IssueOrderModal.vue';
import ImportOrderModal from '@/modules/order/components/ImportOrderModal.vue';
import DeleteOrderConfirmModal from '@/modules/order/components/DeleteOrderConfirmModal.vue';
import CancelOrderReasonModal from '@/modules/order/components/CancelOrderReasonModal.vue';
import { useOrderStore } from '@/modules/order/stores/order';
import {
  BUDGET_OPTIONS,
  SUPPLIER_OPTIONS,
  EDIT_ORDER_LINE_FORM_ROWS,
  EDIT_LINE_CURRENCY_OPTIONS,
  TEXT_LANGUAGE_OPTIONS,
  EXPORT_ORDER_FIELDS,
  EXPORT_LINE_FIELDS
} from '@/modules/order/constants';

const store = useOrderStore();

const importTargetOrder = computed(() =>
  store.orders.find(row => row.orderId === store.modalContext.orderId) || null
);

const currentExportFields = computed(() =>
  store.forms.exportScope === 'line' ? EXPORT_LINE_FIELDS : EXPORT_ORDER_FIELDS
);

const selectedExportFields = ref([...EXPORT_ORDER_FIELDS]);
const exportAll = ref(true);

watch(() => store.modal, name => {
  if (name === 'exportConfig') {
    selectedExportFields.value = [...currentExportFields.value];
    exportAll.value = true;
  }
});

watch(exportAll, val => {
  selectedExportFields.value = val ? [...currentExportFields.value] : [];
});

function submit(type) {
  window.alert(`${type} 已提交（原型演示）`);
  store.closeModal();
}

/**
 * 提交撤订
 * @param {string} reason - 撤订原因
 */
function submitCancelOrder(reason) {
  const result = store.cancelOrders(reason);
  if (!result.ok) {
    window.alert(result.message || '撤订失败');
    return;
  }
  store.closeModal();
  window.alert('撤订成功');
}

function submitNewOrder(form) {
  store.addOrder(form);
  store.closeModal();
}

function submitIssueOrder(issueRemark) {
  if (store.issueOrder(issueRemark)) {
    store.closeModal();
  }
}

function submitOrderImport(parseResult) {
  store.completeOrderImport(parseResult);
}

function submitDeleteOrder() {
  if (store.deleteOrder()) {
    store.closeModal();
  }
}

function submitEditOrder() {
  const { budget, supplier, issueRemark } = store.forms.editOrder;
  if (!budget) return window.alert('请选择预算名称');
  if (!supplier) return window.alert('请选择供应商');
  store.updateOrder(store.modalContext.orderId, { budget, supplier, issueRemark });
  window.alert('订单已保存（原型演示）');
  store.closeModal();
}

function submitEditLine() {
  store.updateLine(store.modalContext.lineNo, { ...store.forms.editLine });
  window.alert('订单行已保存（原型演示）');
  store.closeModal();
}
</script>
