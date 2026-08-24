import { defineStore } from 'pinia';
import { defaultReasonData } from '@/data/mock-reason-params';

const STORAGE_KEY = 'orderm_reason_params';

function normalizeContent(content) {
  return String(content ?? '').trim();
}

export const useReasonParamsStore = defineStore('reasonParams', {
  state: () => ({
    data: structuredClone(defaultReasonData)
  }),

  getters: {
    getByType: state => type => state.data[type] || [],

    getActiveByType: state => type =>
      (state.data[type] || [])
        .filter(item => item.status === 'active')
        .sort((a, b) => (a.sort || 0) - (b.sort || 0))
  },

  actions: {
    initFromStorage() {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
          this.data = JSON.parse(raw);
        } else {
          this.persist();
        }
      } catch {
        this.data = structuredClone(defaultReasonData);
      }
    },

    persist() {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.data));
    },

    /**
     * 同类内 trim 后全文精确匹配（含停用）
     * @param {string} type
     * @param {string} content
     */
    isDuplicate(type, content) {
      const text = normalizeContent(content);
      if (!text) return false;
      return (this.data[type] || []).some(item => normalizeContent(item.content) === text);
    },

    /**
     * @param {string} type
     * @returns {number}
     */
    nextSort(type) {
      const list = this.data[type] || [];
      if (!list.length) return 1;
      return Math.max(...list.map(item => Number(item.sort) || 0)) + 1;
    },

    addReason(type, reason) {
      const content = normalizeContent(reason.content);
      const list = this.data[type] || [];
      const sort = reason.sort != null ? reason.sort : this.nextSort(type);
      const item = {
        ...reason,
        content,
        sort,
        remark: reason.remark ?? '',
        id: `${type}-${Date.now()}`,
        status: 'active',
        creator: reason.creator || '赵付',
        created: reason.created || new Date().toISOString().slice(0, 19).replace('T', ' ')
      };
      list.push(item);
      this.data[type] = list;
      this.persist();
      return item;
    },

    updateReason(type, id, patch) {
      const list = this.data[type] || [];
      const idx = list.findIndex(r => r.id === id);
      if (idx >= 0) {
        list[idx] = { ...list[idx], ...patch };
        this.persist();
      }
    },

    toggleStatus(type, id) {
      const item = (this.data[type] || []).find(r => r.id === id);
      if (item) {
        item.status = item.status === 'active' ? 'disabled' : 'active';
        this.persist();
      }
    }
  }
});
