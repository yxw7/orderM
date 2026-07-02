import { createRouter, createWebHashHistory } from 'vue-router';
import AppLayout from '@/components/layout/AppLayout.vue';

import { orderRoutes } from '@/modules/order/router';
import { acceptanceRoutes } from '@/modules/acceptance/router';
import { settlementRoutes } from '@/modules/settlement/router';
import { subscriberRoutes } from '@/modules/subscriber/router';
import { currencyRoutes } from '@/modules/currency/router';
import { importTemplateRoutes } from '@/modules/import-template/router';
import { shortageConfigRoutes } from '@/modules/shortage-config/router';
import { barcodeSupplierRoutes } from '@/modules/barcode-supplier/router';
import { marcMappingRoutes } from '@/modules/marc-mapping/router';
import { locationRoutes } from '@/modules/location/router';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: AppLayout,
      redirect: '/orders',
      children: [
        ...orderRoutes,
        ...acceptanceRoutes,
        ...settlementRoutes,
        ...subscriberRoutes,
        ...currencyRoutes,
        ...importTemplateRoutes,
        ...shortageConfigRoutes,
        ...barcodeSupplierRoutes,
        ...marcMappingRoutes,
        ...locationRoutes,
        {
          path: 'reason-params',
          name: 'reason-params',
          component: () => import('@/views/ReasonParamsView.vue'),
          meta: { title: '退换撤订原因参数' }
        },
        {
          path: 'placeholder/:slug',
          name: 'placeholder',
          component: () => import('@/views/PlaceholderView.vue'),
          meta: { title: '待迁移' }
        }
      ]
    }
  ]
});

router.beforeEach((to, _from, next) => {
  document.title = `${to.meta.title || '页面'} - 图书馆采选订单管理系统`;
  next();
});

export default router;
