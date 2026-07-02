import { defineStore } from 'pinia';

const STORAGE_KEY = 'orderm_current_acceptance';
const DETAIL_CONTEXT_KEY = 'acceptanceDetailContext';

export function acceptanceFromRow(row) {
  return {
    no: row.no,
    id: row.acceptanceId,
    name: row.name,
    type: row.type,
    lang: row.lang,
    method: row.method,
    supplier: row.supplier,
    shipNo: row.shipNo,
    status: row.status,
    remarkText: row.remarkText || ''
  };
}

export const useAcceptanceStore = defineStore('acceptance', {
  state: () => ({
    current: null,
    detailContext: null
  }),

  getters: {
    hasCurrent: state => !!state.current
  },

  actions: {
    initFromStorage() {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        this.current = raw ? JSON.parse(raw) : null;
      } catch {
        this.current = null;
      }
      this.loadDetailContext();
    },

    setCurrent(acceptance) {
      this.current = acceptance;
      if (acceptance) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(acceptance));
      } else {
        localStorage.removeItem(STORAGE_KEY);
      }
    },

    clearCurrent() {
      this.setCurrent(null);
    },

    saveDetailContext(context) {
      this.detailContext = context;
      sessionStorage.setItem(DETAIL_CONTEXT_KEY, JSON.stringify(context));
    },

    loadDetailContext() {
      try {
        const raw = sessionStorage.getItem(DETAIL_CONTEXT_KEY);
        this.detailContext = raw ? JSON.parse(raw) : null;
      } catch {
        this.detailContext = null;
      }
      return this.detailContext;
    },

    clearDetailContext() {
      this.detailContext = null;
      sessionStorage.removeItem(DETAIL_CONTEXT_KEY);
    }
  }
});
