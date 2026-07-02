<template>
  <Teleport to="body">
    <div v-if="open" class="fixed inset-0 z-[70] flex items-center justify-center bg-black/40 p-4" @click.self="$emit('close')">
      <aside class="bg-white rounded-lg shadow-xl w-full max-w-5xl max-h-[90vh] flex flex-col" @click.stop>
        <div class="flex items-center justify-between px-6 py-4 border-b shrink-0">
          <h2 class="text-base font-medium text-gray-800">详细信息</h2>
          <button type="button" class="text-gray-400 hover:text-gray-600 text-xl leading-none" @click="$emit('close')">&times;</button>
        </div>
        <div class="px-6 py-3 border-b shrink-0 bg-white text-sm text-gray-700">
          书目记录号【{{ row?.bibRecordNo || '—' }}】
        </div>
        <div class="flex-1 overflow-y-auto min-h-0">
          <MarcTable :fields="marcFields" />
        </div>
      </aside>
    </div>
  </Teleport>
</template>

<script setup>
import { computed } from 'vue';
import MarcTable from '@/modules/order/components/MarcTable.vue';
import { buildMarcDetailFields } from '@/modules/order/data/bib';

const props = defineProps({
  open: { type: Boolean, default: false },
  row: { type: Object, default: null }
});

defineEmits(['close']);

const marcFields = computed(() => buildMarcDetailFields(props.row));
</script>
