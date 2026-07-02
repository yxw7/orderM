import { ref } from 'vue';
import {
  buildAllLibrarianPool,
  buildLibrarianNameByAccount,
  buildSubscriberLibrarianAssoc,
  createInitialLibrarianRows,
  syncLibrarianRowsFromAssoc
} from '@/modules/subscriber/data/librarian-manage';
import { buildSubscriberLibrarianMap } from '@/modules/subscriber/data/subscriber-manage';

export const librarianRows = ref(createInitialLibrarianRows());
export const subscriberLibrarianAssoc = ref(buildSubscriberLibrarianAssoc(librarianRows.value));
export const librarianNameByAccount = ref(buildLibrarianNameByAccount(librarianRows.value));
export const allLibrarianPool = ref(buildAllLibrarianPool(librarianRows.value));

/** 静态示例映射（原型初始数据） */
const staticNameMap = buildSubscriberLibrarianMap();

export function getSubscriberLibrarianNames(subscriberName) {
  const accounts = subscriberLibrarianAssoc.value[subscriberName];
  if (accounts?.length) {
    return accounts.map(account => librarianNameByAccount.value[account] || account);
  }
  return staticNameMap[subscriberName] || [];
}

export function hasSubscriberLibrarians(subscriberName, fallback = true) {
  const accounts = subscriberLibrarianAssoc.value[subscriberName];
  if (accounts?.length) return true;
  return fallback && (staticNameMap[subscriberName]?.length > 0);
}

export function applySubscriberAssociation(subscriberName, accounts) {
  subscriberLibrarianAssoc.value = {
    ...subscriberLibrarianAssoc.value,
    [subscriberName]: [...accounts]
  };
  syncLibrarianRowsFromAssoc(
    librarianRows.value,
    subscriberLibrarianAssoc.value,
    librarianNameByAccount.value
  );
  librarianNameByAccount.value = buildLibrarianNameByAccount(librarianRows.value);
}

export function removeLibrarianAssociation(row) {
  Object.keys(subscriberLibrarianAssoc.value).forEach(subscriber => {
    subscriberLibrarianAssoc.value[subscriber] = subscriberLibrarianAssoc.value[subscriber]
      .filter(account => account !== row.account);
  });
  syncLibrarianRowsFromAssoc(
    librarianRows.value,
    subscriberLibrarianAssoc.value,
    librarianNameByAccount.value
  );
}
