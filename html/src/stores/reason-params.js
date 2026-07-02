import { defineStore } from 'pinia';
import { defaultReasonData } from '@/data/mock-reason-params';

const STORAGE_KEY = 'orderm_reason_params';

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

    addReason(type, reason) {
      const list = this.data[type] || [];
      list.push({
        ...reason,
        id: `${type}-${Date.now()}`,
        status: 'active',
        creator: reason.creator || '赵付',
        created: reason.created || new Date().toISOString().slice(0, 19).replace('T', ' ')
      });
      this.data[type] = list;
      this.persist();
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
