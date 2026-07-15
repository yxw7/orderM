<template>
  <div class="page-panel">
    <nav class="flex items-center gap-2 mb-4 text-sm shrink-0">
      <a
        href="#"
        class="flex items-center gap-1 text-gray-500 hover:text-sky-600"
        @click.prevent="goBackAndCloseTab('/bib-query')"
      >
        <span>&lsaquo;</span> 书目查询
      </a>
      <span class="text-gray-400">/</span>
      <span class="text-gray-800">新建书目</span>
    </nav>

    <div class="bg-white rounded border border-gray-200 flex flex-col flex-1 min-h-0 overflow-hidden">
      <div class="flex items-center justify-between gap-4 px-4 py-2 border-b border-gray-200 shrink-0 flex-wrap">
        <div class="flex items-center gap-2 flex-wrap">
          <select v-model="bibDb" class="border border-gray-300 rounded px-3 py-1.5 text-sm">
            <option v-for="opt in bibDbOptions" :key="opt.value" :value="opt.value">{{ opt.label }}</option>
          </select>
          <select v-model="marcType" class="border border-gray-300 rounded px-3 py-1.5 text-sm">
            <option v-for="opt in marcTypeOptions" :key="opt.value" :value="opt.value">{{ opt.label }}</option>
          </select>
          <button v-for="btn in toolbarBtns" :key="btn" type="button" class="px-3 py-1.5 text-sm rounded bg-sky-600 text-white hover:bg-sky-700" @click="alertDemo(btn)">
            {{ btn }}
          </button>
        </div>
        <div class="text-xs text-gray-500">
          书目库 <span class="text-gray-800">{{ bibDb }}</span> · {{ marcTypeLabel }}
        </div>
      </div>

      <div class="flex flex-1 min-h-0 overflow-hidden">
        <aside class="w-52 shrink-0 border-r border-gray-200 flex flex-col">
          <div class="px-3 py-2 text-xs text-gray-500 border-b border-gray-100">最近编辑</div>
          <ul class="flex-1 overflow-y-auto text-sm">
            <li v-for="item in recentItems" :key="item.id">
              <button
                type="button"
                class="w-full text-left px-3 py-2 hover:bg-gray-50 truncate"
                :class="{ 'bg-sky-50 text-sky-600': activeRecordId === item.id }"
                @click="activeRecordId = item.id"
              >
                {{ item.isNew ? '*' : '' }}{{ item.id }}{{ item.title ? ` (${item.title})` : '' }}
              </button>
            </li>
          </ul>
        </aside>

        <div class="flex-1 min-h-0 overflow-auto">
          <table class="w-full text-sm new-bib-marc-table">
            <thead class="bg-gray-50 border-b border-gray-200 sticky top-0">
              <tr>
                <th class="px-3 py-2 text-left text-gray-600 w-36">字段名</th>
                <th class="px-3 py-2 text-left text-gray-600 w-16">字段</th>
                <th class="px-3 py-2 text-left text-gray-600 w-12">指示符1</th>
                <th class="px-3 py-2 text-left text-gray-600 w-12">指示符2</th>
                <th class="px-3 py-2 text-left text-gray-600">字段内容</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(field, idx) in marcFields" :key="idx" :class="idx % 2 ? 'bg-white' : 'bg-gray-50'">
                <td class="px-3 py-2 text-gray-600">{{ field.label }}</td>
                <td class="px-3 py-2 font-mono text-gray-800">{{ field.tag }}</td>
                <td class="px-3 py-2">
                  <input v-model="field.ind1" class="w-8 border border-gray-300 rounded px-1 py-0.5 text-center text-sm">
                </td>
                <td class="px-3 py-2">
                  <input v-model="field.ind2" class="w-8 border border-gray-300 rounded px-1 py-0.5 text-center text-sm">
                </td>
                <td class="px-3 py-2">
                  <input v-model="field.content" class="w-full border border-gray-300 rounded px-2 py-1 text-sm font-mono">
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="flex items-center justify-between px-4 py-2 border-t border-gray-200 bg-gray-50 shrink-0">
        <span class="text-xs text-gray-500">创建人：杨晓婉</span>
        <div class="flex gap-2">
          <button type="button" class="px-4 py-1.5 text-sm border border-gray-300 rounded" @click="alertDemo('取消')">取消</button>
          <button type="button" class="px-4 py-1.5 text-sm bg-sky-600 text-white rounded" :class="dirty ? 'hover:bg-sky-700' : 'opacity-60'" @click="saveRecord">
            保存{{ dirty ? ' *' : '' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue';
import { useBreadcrumbBack } from '@/composables/use-breadcrumb-back';
import { bibDbOptions, marcTypeOptions, newBibRecentItems, cloneMarcFields } from '@/modules/order/data/new-bib';

defineOptions({ name: 'NewBibView' });

const { goBackAndCloseTab } = useBreadcrumbBack();

const bibDb = ref('stl01');
const marcType = ref('CNMARC|中文图书');
const recentItems = ref([...newBibRecentItems]);
const activeRecordId = ref('stl01-NEW7');
const marcFields = ref(cloneMarcFields());
const dirty = ref(false);

const toolbarBtns = ['载入模板', '查重', '查询Z3950', '自动生成', '检查'];

const marcTypeLabel = computed(() => marcTypeOptions.find(o => o.value === marcType.value)?.label || marcType.value);

watch(marcFields, () => { dirty.value = true; }, { deep: true });

function saveRecord() {
  dirty.value = false;
  window.alert('书目已保存（原型演示）');
}

function alertDemo(action) {
  window.alert(`${action}功能为原型演示`);
}
</script>
