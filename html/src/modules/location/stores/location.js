import { defineStore } from 'pinia';
import {
  buildBranchSelectOptions,
  buildSiteFilterOptions,
  getActiveBranches,
  getActiveSiteNames,
  getActiveSites,
  initialBranchRows,
  initialCollectionRows,
  initialSiteRows
} from '@/modules/location/data/location-manage';

const STORAGE_KEY = 'orderm_location_data';

function cloneInitialRows() {
  return {
    siteRows: initialSiteRows.map(row => ({ ...row })),
    branchRows: initialBranchRows.map(row => ({ ...row })),
    collectionRows: initialCollectionRows.map(row => ({ ...row }))
  };
}

export const useLocationStore = defineStore('location', {
  state: () => ({
    initialized: false,
    siteRows: [],
    branchRows: [],
    collectionRows: []
  }),

  getters: {
    activeSites(state) {
      return getActiveSites(state.siteRows);
    },

    activeSiteNames(state) {
      return getActiveSiteNames(state.siteRows);
    },

    activeSiteFilterOptions(state) {
      return buildSiteFilterOptions(state.siteRows);
    },

    activeBranches(state) {
      return getActiveBranches(state.branchRows);
    },

    activeBranchSelectOptions(state) {
      return buildBranchSelectOptions(state.branchRows);
    }
  },

  actions: {
    initFromStorage() {
      if (this.initialized) return;
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
          const parsed = JSON.parse(raw);
          this.siteRows = Array.isArray(parsed.siteRows) ? parsed.siteRows : cloneInitialRows().siteRows;
          this.branchRows = Array.isArray(parsed.branchRows) ? parsed.branchRows : cloneInitialRows().branchRows;
          this.collectionRows = Array.isArray(parsed.collectionRows) ? parsed.collectionRows : cloneInitialRows().collectionRows;
        } else {
          this.resetToInitial();
        }
      } catch {
        this.resetToInitial();
      }
      this.initialized = true;
    },

    ensureInitialized() {
      if (!this.initialized) this.initFromStorage();
    },

    resetToInitial() {
      const initial = cloneInitialRows();
      this.siteRows = initial.siteRows;
      this.branchRows = initial.branchRows;
      this.collectionRows = initial.collectionRows;
      this.persist();
    },

    persist() {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        siteRows: this.siteRows,
        branchRows: this.branchRows,
        collectionRows: this.collectionRows
      }));
    },

    replaceSiteRows(rows) {
      this.siteRows = rows;
      this.persist();
    },

    replaceBranchRows(rows) {
      this.branchRows = rows;
      this.persist();
    },

    replaceCollectionRows(rows) {
      this.collectionRows = rows;
      this.persist();
    }
  }
});
