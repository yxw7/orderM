/** 馆址/分馆数据（与馆址管理模块保持一致） */
import {
  formatBranchLabel,
  getBranchById as getBranchByIdFromRows,
  getSiteById as getSiteByIdFromRows
} from '@/modules/location/data/location-manage';
import { useLocationStore } from '@/modules/location/stores/location';

export function getActiveSites() {
  const store = useLocationStore();
  store.ensureInitialized();
  return store.activeSites;
}

export function getSiteById(siteId) {
  const store = useLocationStore();
  store.ensureInitialized();
  return getSiteByIdFromRows(store.siteRows, siteId);
}

export function getSiteName(siteId) {
  return getSiteById(siteId)?.name || '';
}

export function getBranchById(branchId) {
  const store = useLocationStore();
  store.ensureInitialized();
  return getBranchByIdFromRows(store.branchRows, branchId);
}

export function getBranchLabel(branchId) {
  return formatBranchLabel(getBranchById(branchId));
}

export function getActiveBranchSelectOptions() {
  const store = useLocationStore();
  store.ensureInitialized();
  return store.activeBranchSelectOptions;
}

/** @deprecated 请使用 useLocationStore().siteRows */
export const siteRows = [];
