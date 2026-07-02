import { defineStore } from 'pinia';
import { appConfig, getRouteTitle, getHighlightRoute } from '@/config/app-config';

const STORAGE_KEY = 'orderm_spa_tabs';

export const useAppStore = defineStore('app', {
  state: () => ({
    config: appConfig,
    tabs: [{ route: '/orders', title: '订单管理' }],
    activeRoute: '/orders',
    expandedGroups: appConfig.sidebar
      .filter(g => g.expanded)
      .map(g => g.id)
  }),

  getters: {
    highlightRoute: state => getHighlightRoute(state.activeRoute),
    currentAcceptance: state => state._currentAcceptance
  },

  actions: {
    initFromStorage() {
      try {
        const raw = sessionStorage.getItem(STORAGE_KEY);
        if (!raw) return;
        const data = JSON.parse(raw);
        if (Array.isArray(data.tabs) && data.tabs.length) {
          this.tabs = data.tabs;
          this.activeRoute = data.activeRoute || this.tabs[0].route;
        }
      } catch {
        /* ignore */
      }
    },

    persistTabs() {
      sessionStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ tabs: this.tabs, activeRoute: this.activeRoute })
      );
    },

    openTab(route, title) {
      const displayTitle = title || getRouteTitle(route);
      const existing = this.tabs.find(t => t.route === route);
      if (!existing) {
        this.tabs.push({ route, title: displayTitle });
      } else {
        existing.title = displayTitle;
      }
      this.activeRoute = route;
      this.persistTabs();
    },

    switchTab(route) {
      this.activeRoute = route;
      this.persistTabs();
    },

    closeTab(route) {
      if (this.tabs.length <= 1) return;
      const index = this.tabs.findIndex(t => t.route === route);
      if (index === -1) return;
      this.tabs.splice(index, 1);
      if (this.activeRoute === route) {
        const next = this.tabs[Math.max(0, index - 1)] || this.tabs[0];
        this.activeRoute = next.route;
      }
      this.persistTabs();
    },

    toggleGroup(groupId) {
      const idx = this.expandedGroups.indexOf(groupId);
      if (idx >= 0) {
        this.expandedGroups.splice(idx, 1);
      } else {
        this.expandedGroups.push(groupId);
      }
    },

    isGroupExpanded(groupId, activeRoute) {
      if (this.expandedGroups.includes(groupId)) return true;
      const group = this.config.sidebar.find(g => g.id === groupId);
      return group?.children.some(c => getHighlightRoute(activeRoute) === c.route);
    }
  }
});
