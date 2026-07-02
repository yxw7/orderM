export const STATUS_MAP = {
  active: { text: '使用中', cls: 'text-green-600' },
  disabled: { text: '已停用', cls: 'text-red-500' },
  inactive: { text: '已停用', cls: 'text-red-500' }
};

export {
  shortageConfigRows,
  shortageConfigSearchFields
} from '@/modules/shortage-config/data/shortage-config-manage';

export {
  barcodeSupplierRows,
  barcodeSupplierSearchFields
} from '@/modules/barcode-supplier/data/barcode-supplier-manage';

export {
  marcMappingRows,
  marcMappingSearchFields,
  parseMarcTypeLabel,
  resolveOrderFieldsFromMarcMapping
} from '@/modules/marc-mapping/data/marc-mapping-manage';

export {
  importTemplateRows,
  importTemplateSearchFields,
  getAvailableTemplates,
  formatSubscribers as formatImportTemplateSubscribers
} from '@/modules/import-template/data/import-template-manage';

export {
  initialSiteRows as siteRows,
  initialBranchRows as branchRows,
  initialCollectionRows as collectionRows,
  siteSearchFields,
  branchSearchFields,
  collectionSearchFields,
  LOCATION_STATUS_MAP as STATUS_MAP
} from '@/modules/location/data/location-manage';
