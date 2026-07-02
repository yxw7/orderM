import { defineStore } from 'pinia';
import { shortageRows } from '@/modules/acceptance/data/shortage-manage';
import { buildShortageListRows } from '@/modules/order/data/shortage-generate';

export const useShortageStore = defineStore('shortage', {
  state: () => ({
    rows: shortageRows.map(row => ({ ...row })),
    lastGenerated: []
  }),

  actions: {
    addGeneratedShortages(groups, orders) {
      const nextId = this.rows.length ? Math.max(...this.rows.map(row => row.id)) + 1 : 1;
      const built = buildShortageListRows(groups, orders, nextId);
      this.lastGenerated = built.map(({ lineRows, ...row }) => ({ ...row }));
      built.forEach(row => {
        this.rows.unshift({ ...row });
      });
      return this.lastGenerated;
    },

    findByShortageId(shortageId) {
      return this.rows.find(row => row.shortageId === shortageId);
    }
  }
});
