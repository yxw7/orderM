<template>
  <table class="w-full text-sm border-separate border-spacing-0">
    <thead class="sticky top-0 z-10">
      <tr>
        <th class="px-3 py-2 text-left text-gray-600 w-20 bg-gray-50 border-b">字段名</th>
        <th class="px-3 py-2 text-left text-gray-600 w-16 whitespace-nowrap bg-gray-50 border-b">指示符</th>
        <th class="px-3 py-2 text-left text-gray-600 bg-gray-50 border-b">字段内容</th>
      </tr>
    </thead>
    <tbody class="divide-y">
      <tr v-for="(item, index) in fields" :key="index" class="bg-white">
        <td class="px-3 py-2 align-top border-b border-gray-100">{{ item.field }}</td>
        <td class="px-3 py-2 align-top whitespace-nowrap border-b border-gray-100">{{ item.indicator || '—' }}</td>
        <td class="px-3 py-2 align-top break-all leading-relaxed border-b border-gray-100">{{ item.content }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
defineProps({
  fields: { type: Array, default: () => [] }
});
</script>
