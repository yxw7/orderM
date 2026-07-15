import { useRoute, useRouter } from 'vue-router';
import { useAppStore } from '@/stores/app';

/**
 * 面包屑返回：关闭当前标签页并跳转至目标路由
 * @returns {{ goBackAndCloseTab: (targetRoute: string) => void }}
 */
export function useBreadcrumbBack() {
  const route = useRoute();
  const router = useRouter();
  const appStore = useAppStore();

  /**
   * @param {string} targetRoute
   */
  function goBackAndCloseTab(targetRoute) {
    const currentRoute = route.path;
    if (appStore.tabs.length > 1) {
      appStore.closeTab(currentRoute);
    }
    router.push(targetRoute);
  }

  return { goBackAndCloseTab };
}
