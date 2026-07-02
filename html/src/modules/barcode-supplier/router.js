/** 条码号供应商代码模块路由 */
export const barcodeSupplierRoutes = [
  {
    path: 'barcode-supplier',
    name: 'barcode-supplier',
    component: () => import('@/modules/barcode-supplier/views/BarcodeSupplierView.vue'),
    meta: { title: '条码号供应商代码', module: 'barcode-supplier' }
  }
];
