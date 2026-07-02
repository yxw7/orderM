import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useLocationStore } from '@/modules/location/stores/location';
import { injectSiteSelectOptions } from '@/modules/location/data/location-manage';

/** 馆址下拉选项：取自设置-馆址管理-馆址列表中已启用的馆址名称 */
export function useSiteSelectOptions() {
  const store = useLocationStore();
  store.ensureInitialized();

  const { activeSites, activeSiteNames, activeSiteFilterOptions } = storeToRefs(store);

  function withSiteSearchFields(fields) {
    return computed(() => injectSiteSelectOptions(fields, activeSiteFilterOptions.value));
  }

  return {
    activeSites,
    activeSiteNames,
    activeSiteFilterOptions,
    withSiteSearchFields
  };
}
