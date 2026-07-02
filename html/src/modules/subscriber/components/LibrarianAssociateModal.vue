<template>
  <div v-if="open" class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4" @click.self="emit('close')">
    <div class="bg-white rounded-lg shadow-xl w-full max-w-3xl h-[640px] flex flex-col" @click.stop>
      <div class="flex items-center justify-between px-6 py-4 border-b border-gray-200 shrink-0">
        <h2 class="text-base font-medium text-gray-800">订户关联馆员</h2>
        <button type="button" class="text-gray-400 hover:text-gray-600 text-xl leading-none" @click="emit('close')">&times;</button>
      </div>
      <div class="px-6 py-5 flex flex-col flex-1 min-h-0 gap-4 overflow-hidden">
        <div class="flex items-start gap-3 shrink-0">
          <label class="text-sm text-gray-600 w-28 text-right pt-2 shrink-0"><span class="text-red-500">*</span> 订户名称</label>
          <div class="flex-1">
            <select v-model="subscriberName"
              class="w-full border rounded px-3 py-2 text-sm text-gray-700 focus:outline-none focus:border-sky-500"
              :class="error ? 'border-red-500' : 'border-gray-300'"
              @change="onSubscriberChange">
              <option value="">请选择</option>
              <option v-for="opt in subscriberOptions" :key="opt" :value="opt">{{ opt }}</option>
            </select>
            <p v-if="error" class="text-red-500 text-xs mt-1">请选择</p>
          </div>
        </div>
        <TransferList
          v-model="selectedAccounts"
          :items="allPool"
          left-search-placeholder="请输入馆员账号"
          :filter-fn="item => item"
          :label-fn="item => item"
          class="flex-1 min-h-0"
        />
      </div>
      <div class="flex justify-end gap-3 px-6 py-4 border-t border-gray-200 bg-gray-50 rounded-b-lg shrink-0">
        <button type="button" class="px-5 py-1.5 text-sm rounded border border-gray-300 text-gray-600 hover:bg-gray-50" @click="emit('close')">取消</button>
        <button type="button" class="px-5 py-1.5 text-sm rounded bg-sky-600 text-white hover:bg-sky-700" @click="submit">提交</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import TransferList from '@/modules/subscriber/components/TransferList.vue';

const props = defineProps({
  open: { type: Boolean, default: false },
  subscriberOptions: { type: Array, default: () => [] },
  allPool: { type: Array, default: () => [] },
  assoc: { type: Object, default: () => ({}) }
});

const emit = defineEmits(['close', 'confirm']);

const subscriberName = ref('');
const selectedAccounts = ref([]);
const error = ref(false);

watch(() => props.open, open => {
  if (open) {
    subscriberName.value = '';
    selectedAccounts.value = [];
    error.value = false;
  }
});

function onSubscriberChange() {
  error.value = false;
  selectedAccounts.value = props.assoc[subscriberName.value] ? [...props.assoc[subscriberName.value]] : [];
}

function submit() {
  if (!subscriberName.value) {
    error.value = true;
    return;
  }
  emit('confirm', {
    subscriberName: subscriberName.value,
    accounts: [...selectedAccounts.value]
  });
}
</script>
