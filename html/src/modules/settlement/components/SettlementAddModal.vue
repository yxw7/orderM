<template>
  <div v-if="open" class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4" @click.self="emit('close')">
    <div class="bg-white rounded-lg shadow-xl w-full max-w-5xl max-h-[90vh] flex flex-col" @click.stop>
      <div class="flex items-center justify-between px-6 py-4 border-b border-gray-200 shrink-0">
        <h2 class="text-base font-medium text-gray-800">新增结算</h2>
        <button type="button" class="text-gray-400 hover:text-gray-600 text-xl leading-none" @click="emit('close')">&times;</button>
      </div>
      <div class="px-6 py-5 overflow-y-auto space-y-4">
        <div class="flex items-center gap-3">
          <label class="text-sm text-gray-600 w-28 text-right shrink-0">
            <span class="text-red-500">*</span> 结算单名称
          </label>
          <input
            v-model="form.name"
            type="text"
            placeholder="请输入结算单名称"
            autocomplete="off"
            class="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-sky-500"
          >
        </div>
        <div class="flex items-start gap-2 bg-sky-50 border border-sky-100 rounded px-4 py-3 text-sm text-sky-700">
          <svg class="w-4 h-4 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M12 3a9 9 0 100 18 9 9 0 000-18z"/>
          </svg>
          <span>本次将要结算的供应商是{{ group?.supplier }}（{{ group?.resourceType }}），明细如下：</span>
        </div>
        <div class="space-y-3 text-sm text-gray-700">
          <template v-for="(row, idx) in rows" :key="row.id">
            <div v-if="idx > 0" class="border-t border-gray-100 pt-3" />
            <div class="space-y-2">
              <div class="flex flex-wrap items-center gap-x-10 gap-y-2">
                <div class="flex items-center whitespace-nowrap text-sm"><span class="text-gray-500">验收单号：</span><span class="text-gray-900">{{ row.acceptId }}</span></div>
                <div class="flex items-center whitespace-nowrap text-sm"><span class="text-gray-500">发货单号：</span><span class="text-gray-900">{{ row.deliveryId || '—' }}</span></div>
                <div class="flex items-center whitespace-nowrap text-sm"><span class="text-gray-500">实收种数：</span><span class="text-gray-900">{{ row.species }}</span></div>
                <div class="flex items-center whitespace-nowrap text-sm"><span class="text-gray-500">实收套数：</span><span class="text-gray-900">{{ row.sets }}</span></div>
              </div>
              <div class="flex flex-wrap items-center gap-x-10 gap-y-2">
                <div class="flex items-center whitespace-nowrap text-sm"><span class="text-gray-500">实收册数：</span><span class="text-gray-900">{{ row.volumes }}</span></div>
                <div class="flex items-center whitespace-nowrap text-sm"><span class="text-gray-500">实收总码洋(元)：</span><span class="text-gray-900">{{ row.listPrice }}</span></div>
                <div class="flex items-center whitespace-nowrap text-sm"><span class="text-gray-500">实收总实洋(元)：</span><span class="text-gray-900">{{ row.netPrice }}</span></div>
              </div>
            </div>
          </template>
        </div>
        <div class="border-t border-gray-100 pt-3 text-sm text-gray-700">
          <div class="flex flex-wrap items-center gap-x-10 gap-y-2 w-full">
            <span class="text-gray-600 font-medium whitespace-nowrap">合计：</span>
            <div class="flex items-center whitespace-nowrap text-sm"><span class="text-gray-500">实收总种数：</span><span class="font-medium text-gray-900">{{ totals.species }}</span></div>
            <div class="flex items-center whitespace-nowrap text-sm"><span class="text-gray-500">实收总套数：</span><span class="font-medium text-gray-900">{{ totals.sets }}</span></div>
            <div class="flex items-center whitespace-nowrap text-sm"><span class="text-gray-500">实收总册数：</span><span class="font-medium text-gray-900">{{ totals.volumes }}</span></div>
            <div class="flex items-center whitespace-nowrap text-sm"><span class="text-gray-500">实收总码洋(元)：</span><span class="font-medium text-gray-900">{{ totals.listPrice }}</span></div>
            <div class="flex items-center whitespace-nowrap text-sm"><span class="text-gray-500">实收总实洋(元)：</span><span class="font-medium text-gray-900">{{ totals.netPrice }}</span></div>
          </div>
        </div>
        <div class="flex items-start gap-3">
          <label class="text-sm text-gray-600 w-28 text-right pt-2 shrink-0">结算备注</label>
          <div class="flex-1 relative">
            <textarea
              v-model="form.remark"
              rows="4"
              maxlength="500"
              placeholder="请输入结算备注"
              class="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-sky-500 resize-none"
            />
            <span class="absolute bottom-2 right-3 text-xs text-gray-400">{{ form.remark.length }} / 500</span>
          </div>
        </div>
      </div>
      <div class="flex justify-end gap-3 px-6 py-4 border-t border-gray-200 bg-gray-50 rounded-b-lg shrink-0">
        <button type="button" class="px-5 py-1.5 text-sm rounded border border-gray-300 text-gray-600 hover:bg-gray-50" @click="emit('close')">取消</button>
        <button type="button" class="px-5 py-1.5 text-sm rounded bg-sky-600 text-white hover:bg-sky-700" @click="submit">确定</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue';
import { calcSettlementTotals } from '@/modules/settlement/data/pending-settlement';

const props = defineProps({
  open: { type: Boolean, default: false },
  rows: { type: Array, default: () => [] },
  group: { type: Object, default: null }
});

const emit = defineEmits(['close', 'confirm']);

const form = ref({ name: '', remark: '' });

const totals = computed(() => calcSettlementTotals(props.rows));

watch(() => props.open, open => {
  if (open) form.value = { name: '', remark: '' };
});

function submit() {
  if (!form.value.name.trim()) {
    window.alert('请输入结算单名称');
    return;
  }
  emit('confirm', { ...form.value });
}
</script>
