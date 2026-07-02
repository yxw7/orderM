<template>
  <table class="w-full text-sm">
    <thead class="bg-gray-50 border-b sticky top-0">
      <tr>
        <th class="px-3 py-2 text-left text-gray-600 w-20">字段名</th>
        <th class="px-3 py-2 text-left text-gray-600 w-16 whitespace-nowrap">指示符</th>
        <th class="px-3 py-2 text-left text-gray-600">字段内容</th>
      </tr>
    </thead>
    <tbody class="divide-y">
      <tr v-for="(item, index) in fields" :key="index">
        <td class="px-3 py-2 align-top">{{ item.field }}</td>
        <td class="px-3 py-2 align-top whitespace-nowrap">{{ item.indicator || '—' }}</td>
        <td class="px-3 py-2 align-top break-all leading-relaxed">{{ item.content }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
defineProps({
  fields: { type: Array, default: () => [] }
});
</script>
