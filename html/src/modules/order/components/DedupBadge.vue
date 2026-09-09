<template>
  <span v-if="value === null || value === undefined" />
  <template v-else-if="variant === 'holding'">
    <button
      v-if="cityCount > 0"
      type="button"
      class="text-sky-600 hover:underline"
      @click="$emit('view')"
    >
      {{ holdingLabel }}
    </button>
    <span v-else class="text-gray-600">{{ holdingLabel }}</span>
  </template>
  <template v-else>
    <span v-if="value === false" class="text-gray-600">无</span>
    <button v-else type="button" class="text-sky-600 hover:underline" @click="$emit('view')">有</button>
  </template>
</template>

<script setup>
import { computed } from 'vue';
import { formatHoldingDuplicateLabel } from '@/modules/order/data/dedup';

const props = defineProps({
  value: { type: [Boolean, null], default: null },
  /** holding：馆藏重复（本馆/全市）；order：订单重复有/无 */
  variant: { type: String, default: 'order' },
  localCount: { type: Number, default: 0 },
  cityCount: { type: Number, default: 0 }
});

defineEmits(['view']);

const holdingLabel = computed(() => (
  formatHoldingDuplicateLabel(props.value, props.localCount, props.cityCount)
));
</script>
