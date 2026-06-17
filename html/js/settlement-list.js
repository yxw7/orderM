/**
 * 结算清单页：列表展示、导出配置与 Excel 导出
 */
const SettlementListPage = {
  /** @type {string} */
  exportConfigStorageKey: 'orderm_settlement_list_export_config',

  /** @type {Object[]} */
  allRows: [],

  /** @type {Object[]} */
  filteredRows: [],

  /** @type {string} */
  currentSettleId: '',

  /** @type {'book'|'av'} */
  currentResourceType: 'book',

  /** 结算单资源类型映射 */
  settlementResourceTypeMap: {
    jsPG00120260602001: 'book',
    jsPG09120260602001: 'book',
    jsPG09120260602002: 'book',
    jsPG09120260602003: 'av',
    jsPG09120260602004: 'book',
    jsPG09120260602005: 'av',
    jsPG09120260602006: 'book'
  },

  /** 结算单级导出字段（纸质书/视听资料共用） */
  exportHeaderFields: [
    { key: 'settleId', label: '结算单号' },
    { key: 'settleTime', label: '结算时间' },
    { key: 'settleOperator', label: '结算操作人' },
    { key: 'supplier', label: '供应商' },
    { key: 'totalSpecies', label: '实收总种数' },
    { key: 'totalSets', label: '实收总套数' },
    { key: 'totalVolumes', label: '实收总册数' },
    { key: 'totalListPrice', label: '实收总码洋' },
    { key: 'totalActualPrice', label: '实收总实洋' },
    { key: 'settleRemark', label: '结算备注' }
  ],

  /** 纸质书订单行级导出字段 */
  exportBookLineFields: [
    { key: 'orderLineNo', label: '订单行号' },
    { key: 'isbn', label: 'ISBN' },
    { key: 'title', label: '正题名' },
    { key: 'subtitle', label: '副题名' },
    { key: 'author', label: '作者' },
    { key: 'publisher', label: '出版社' },
    { key: 'publishYear', label: '出版年' },
    { key: 'series', label: '丛编' },
    { key: 'classificationNo', label: '分类号' },
    { key: 'textLanguage', label: '正文语种' },
    { key: 'price', label: '定价' },
    { key: 'currency', label: '币种' },
    { key: 'actualPrice', label: '实洋' },
    { key: 'binding', label: '装帧' },
    { key: 'size', label: '尺寸' },
    { key: 'subjectHeadings', label: '主题词' },
    { key: 'edition', label: '版本' },
    { key: 'targetAudience', label: '读者对象' },
    { key: 'notes', label: '附注' },
    { key: 'bookIntro', label: '图书简介' },
    { key: 'volumesInSet', label: '套内册数' },
    { key: 'settledSets', label: '结算套数' },
    { key: 'settledVolumes', label: '结算册数' },
    { key: 'settlementAmount', label: '结算金额' },
    { key: 'remark', label: '备注' }
  ],

  /** 视听资料订单行级导出字段 */
  exportAvLineFields: [
    { key: 'orderLineNo', label: '订单行号' },
    { key: 'isbn', label: 'ISBN' },
    { key: 'isrc', label: 'ISRC' },
    { key: 'productBarcode', label: '商品条码' },
    { key: 'catalogNo', label: '目录号' },
    { key: 'carrier', label: '载体' },
    { key: 'versionFormat', label: '版本/格式' },
    { key: 'title', label: '题名' },
    { key: 'author', label: '作者' },
    { key: 'listPrice', label: '码洋' },
    { key: 'currency', label: '币种' },
    { key: 'actualPrice', label: '实洋' },
    { key: 'piecesInSet', label: '套内件数' },
    { key: 'settledSets', label: '结算套数' },
    { key: 'settledVolumes', label: '结算册数' },
    { key: 'vinylColor', label: '彩胶颜色' },
    { key: 'label', label: '厂牌' },
    { key: 'limitedNo', label: '限量编号' },
    { key: 'isOldRecord', label: '是否老唱片' },
    { key: 'settlementAmount', label: '结算金额' },
    { key: 'remark', label: '备注' }
  ],

  /** 结算单概要示例数据 */
  settlementSummaryMap: {
    jsPG00120260602001: {
      settleId: 'jsPG00120260602001',
      resourceType: 'book',
      settleTime: '2026-06-02 09:53:18',
      settleOperator: '杨现规',
      supplier: '北京市图书进出口有限公司',
      totalSpecies: 1,
      totalSets: 2,
      totalVolumes: 6,
      totalListPrice: '240.00',
      totalActualPrice: '192.00',
      settleRemark: 'jiesuan20260602测试'
    },
    jsPG09120260602001: {
      settleId: 'jsPG09120260602001',
      resourceType: 'book',
      settleTime: '2026-06-02 09:53:18',
      settleOperator: '系统',
      supplier: '北京人天',
      totalSpecies: 2,
      totalSets: 8,
      totalVolumes: 8,
      totalListPrice: '694.00',
      totalActualPrice: '555.20',
      settleRemark: '纸质书20260602001结算'
    },
    jsPG09120260602002: {
      settleId: 'jsPG09120260602002',
      resourceType: 'book',
      settleTime: '2026-06-02 10:20:00',
      settleOperator: '系统',
      supplier: '湖北三新',
      totalSpecies: 1,
      totalSets: 3,
      totalVolumes: 3,
      totalListPrice: '135.00',
      totalActualPrice: '108.00',
      settleRemark: ''
    },
    jsPG09120260602003: {
      settleId: 'jsPG09120260602003',
      resourceType: 'av',
      settleTime: '2020-06-02 11:08:42',
      settleOperator: '系统',
      supplier: '中国嘉德',
      totalSpecies: 2,
      totalSets: 4,
      totalVolumes: 4,
      totalListPrice: '320.00',
      totalActualPrice: '256.00',
      settleRemark: '视听资料20260602003结算'
    },
    jsPG09120260602005: {
      settleId: 'jsPG09120260602005',
      resourceType: 'av',
      settleTime: '2020-06-02 15:40:17',
      settleOperator: '系统',
      supplier: '北京人天',
      totalSpecies: 1,
      totalSets: 2,
      totalVolumes: 2,
      totalListPrice: '156.00',
      totalActualPrice: '124.80',
      settleRemark: ''
    }
  },

  /** 结算清单示例数据 */
  settlementListMap: {
    jsPG00120260602001: [
      {
        no: 1,
        orderLineNo: 'PG001B20260602003-5',
        title: '现代精细油藏描述',
        resourceId: '9787518359066',
        subtitle: '',
        author: '陈欢庆著',
        publisher: '石油工业出版社',
        publishYear: '2020',
        series: '',
        classificationNo: 'TE357',
        textLanguage: 'chi',
        price: '120.00',
        currency: 'CNY',
        actualPrice: '96.00',
        binding: '平装',
        size: '26cm',
        subjectHeadings: '油藏描述',
        edition: '第1版',
        targetAudience: '专业人员',
        notes: '',
        bookIntro: '介绍现代精细油藏描述方法与实践。',
        volumesInSet: 3,
        settledSets: 2,
        settledVolumes: 6,
        remark: ''
      }
    ],
    jsPG09120260602001: [
      {
        no: 1,
        orderLineNo: 'PG00120260602001-1',
        title: '中国图书馆分类法',
        resourceId: '9787501341234',
        subtitle: '',
        author: '国家图书馆编',
        publisher: '国家图书馆出版社',
        publishYear: '2010',
        series: '',
        classificationNo: 'G254.1',
        textLanguage: 'chi',
        price: '98.00',
        currency: 'CNY',
        actualPrice: '78.40',
        binding: '精装',
        size: '21cm',
        subjectHeadings: '图书分类',
        edition: '第5版',
        targetAudience: '图书馆员',
        notes: '',
        bookIntro: '中国图书馆分类工具书。',
        volumesInSet: 1,
        settledSets: 5,
        settledVolumes: 5,
        remark: ''
      },
      {
        no: 2,
        orderLineNo: 'PG00120260602001-2',
        title: '信息组织原理',
        resourceId: '9787302567890',
        subtitle: '',
        author: '周宁编著',
        publisher: '清华大学出版社',
        publishYear: '2018',
        series: '信息管理与信息系统系列教材',
        classificationNo: 'G254',
        textLanguage: 'chi',
        price: '68.00',
        currency: 'CNY',
        actualPrice: '54.40',
        binding: '平装',
        size: '23cm',
        subjectHeadings: '信息组织',
        edition: '第3版',
        targetAudience: '高校师生',
        notes: '',
        bookIntro: '信息组织基础理论与方法。',
        volumesInSet: 1,
        settledSets: 3,
        settledVolumes: 3,
        remark: '重点采购'
      }
    ],
    jsPG09120260602002: [
      {
        no: 1,
        orderLineNo: 'PG00120260602002-1',
        title: '图书馆学基础',
        resourceId: '9787040456789',
        subtitle: '',
        author: '吴慰慈著',
        publisher: '高等教育出版社',
        publishYear: '2015',
        series: '',
        classificationNo: 'G250',
        textLanguage: 'chi',
        price: '45.00',
        currency: 'CNY',
        actualPrice: '36.00',
        binding: '平装',
        size: '23cm',
        subjectHeadings: '图书馆学',
        edition: '第4版',
        targetAudience: '高校师生',
        notes: '',
        bookIntro: '图书馆学入门教材。',
        volumesInSet: 1,
        settledSets: 3,
        settledVolumes: 3,
        remark: ''
      }
    ],
    jsPG09120260602003: [
      {
        no: 1,
        orderLineNo: 'PG00120260602003-1',
        isbn: '9787559826398',
        resourceId: '9787559826398',
        isrc: 'CN-A68-22-00123',
        productBarcode: '017685110221',
        catalogNo: 'CD-1102',
        carrier: 'CD',
        versionFormat: '1:1母盘直刻',
        title: '人间草木',
        author: '汪曾祺',
        price: '39.80',
        currency: 'CNY',
        actualPrice: '39.80',
        piecesInSet: 1,
        settledSets: 2,
        settledVolumes: 2,
        vinylColor: '',
        label: '上海声像',
        limitedNo: '',
        isOldRecord: '否',
        remark: ''
      },
      {
        no: 2,
        orderLineNo: 'PG00120260602003-2',
        isbn: '',
        resourceId: '',
        isrc: 'CN-C60-22-00456',
        productBarcode: '6901234567890',
        catalogNo: 'LP-2208',
        carrier: 'LP',
        versionFormat: '黑胶唱片',
        title: '古典音乐精选',
        author: '维也纳爱乐',
        price: '128.00',
        currency: 'CNY',
        actualPrice: '102.40',
        piecesInSet: 2,
        settledSets: 2,
        settledVolumes: 4,
        vinylColor: '透明红',
        label: 'Deutsche Grammophon',
        limitedNo: 'No.128/500',
        isOldRecord: '否',
        remark: '限量发行'
      }
    ],
    jsPG09120260602005: [
      {
        no: 1,
        orderLineNo: 'PG00120260602005-1',
        isbn: '9787559826398',
        resourceId: '9787559826398',
        isrc: '',
        productBarcode: '',
        catalogNo: 'DVD-3301',
        carrier: 'DVD',
        versionFormat: '高清版',
        title: '国家地理纪录片',
        author: '国家地理',
        price: '78.00',
        currency: 'CNY',
        actualPrice: '62.40',
        piecesInSet: 1,
        settledSets: 2,
        settledVolumes: 2,
        vinylColor: '',
        label: 'National Geographic',
        limitedNo: '',
        isOldRecord: '否',
        remark: ''
      }
    ]
  },

  /**
   * 根据 URL 参数获取结算单号
   * @returns {string}
   */
  getSettleIdFromUrl() {
    const params = new URLSearchParams(location.search);
    return params.get('id') || '';
  },

  /**
   * 获取当前结算单号
   * @returns {string}
   */
  getCurrentSettleId() {
    return this.currentSettleId || 'jsPG00120260602001';
  },

  /**
   * 根据结算单号获取清单数据
   * @param {string} settleId - 结算单号
   * @returns {Object[]}
   */
  getListData(settleId) {
    return this.settlementListMap[settleId] || this.settlementListMap.jsPG00120260602001;
  },

  /**
   * 获取结算单概要
   * @returns {Object}
   */
  getSettlementSummary() {
    const settleId = this.getCurrentSettleId();
    return this.settlementSummaryMap[settleId] || this.settlementSummaryMap.jsPG00120260602001;
  },

  /**
   * 计算结算金额（结算套数 × 实洋）
   * @param {Object} row - 行数据
   * @returns {string}
   */
  calcSettlementAmount(row) {
    const amount = row.settledSets * parseFloat(row.actualPrice);
    return Number.isFinite(amount) ? amount.toFixed(2) : '';
  },

  /**
   * 获取当前结算单资源类型
   * @returns {'book'|'av'}
   */
  getCurrentResourceType() {
    const settleId = this.getCurrentSettleId();
    const summary = this.settlementSummaryMap[settleId];
    if (summary?.resourceType === 'av') return 'av';
    return this.settlementResourceTypeMap[settleId] || 'book';
  },

  /**
   * 获取当前资源类型对应的订单行级导出字段
   * @param {'book'|'av'} [resourceType] - 资源类型
   * @returns {Object[]}
   */
  getExportLineFields(resourceType = this.getCurrentResourceType()) {
    return resourceType === 'av' ? this.exportAvLineFields : this.exportBookLineFields;
  },

  /**
   * 获取导出配置 localStorage key
   * @param {'book'|'av'} [resourceType] - 资源类型
   * @returns {string}
   */
  getExportConfigStorageKey(resourceType = this.getCurrentResourceType()) {
    return `${this.exportConfigStorageKey}_${resourceType}`;
  },

  /**
   * 获取指定资源类型的全部可导出字段 key
   * @param {'book'|'av'} [resourceType] - 资源类型
   * @returns {string[]}
   */
  getAllExportFieldKeys(resourceType = this.getCurrentResourceType()) {
    return [
      ...this.exportHeaderFields.map(field => field.key),
      ...this.getExportLineFields(resourceType).map(field => field.key)
    ];
  },

  /**
   * 读取已保存的导出字段配置
   * @param {'book'|'av'} [resourceType] - 资源类型
   * @returns {string[]}
   */
  loadExportConfig(resourceType = this.getCurrentResourceType()) {
    try {
      const raw = localStorage.getItem(this.getExportConfigStorageKey(resourceType));
      if (!raw) return this.getAllExportFieldKeys(resourceType);
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed) || !parsed.length) return this.getAllExportFieldKeys(resourceType);
      const validKeys = new Set(this.getAllExportFieldKeys(resourceType));
      return parsed.filter(key => validKeys.has(key));
    } catch (error) {
      console.warn('[SettlementList] 读取导出配置失败', error);
      return this.getAllExportFieldKeys(resourceType);
    }
  },

  /**
   * 保存导出字段配置
   * @param {string[]} selectedKeys - 已勾选字段 key 列表
   * @param {'book'|'av'} [resourceType] - 资源类型
   */
  saveExportConfig(selectedKeys, resourceType = this.getCurrentResourceType()) {
    localStorage.setItem(this.getExportConfigStorageKey(resourceType), JSON.stringify(selectedKeys));
  },

  /**
   * 获取弹窗内当前可见的导出字段复选框
   * @returns {NodeListOf<HTMLInputElement>}
   */
  getVisibleExportFieldInputs() {
    const resourceType = this.getCurrentResourceType();
    const headerFields = document.querySelectorAll('.settlement-list-export-header-field');
    const linePanel = document.getElementById(
      resourceType === 'av'
        ? 'settlement-list-export-av-line-fields'
        : 'settlement-list-export-book-line-fields'
    );
    const lineFields = linePanel?.querySelectorAll('.settlement-list-export-line-field') || [];
    return [...headerFields, ...lineFields];
  },

  /**
   * 将配置应用到弹窗勾选状态
   * @param {string[]} selectedKeys - 已勾选字段 key 列表
   */
  applyExportConfigToModal(selectedKeys) {
    const selectedSet = new Set(selectedKeys);
    this.getVisibleExportFieldInputs().forEach(input => {
      input.checked = selectedSet.has(input.dataset.fieldKey || '');
    });
    this.syncExportSelectAllState();
  },

  /**
   * 同步全选复选框状态
   */
  syncExportSelectAllState() {
    const selectAll = document.getElementById('settlement-list-export-select-all');
    const fields = this.getVisibleExportFieldInputs();
    if (!selectAll || !fields.length) return;

    const checkedCount = fields.filter(field => field.checked).length;
    selectAll.checked = checkedCount === fields.length;
    selectAll.indeterminate = checkedCount > 0 && checkedCount < fields.length;
  },

  /**
   * 读取弹窗当前勾选的字段 key
   * @returns {string[]}
   */
  getSelectedExportFieldKeysFromModal() {
    return this.getVisibleExportFieldInputs()
      .filter(input => input.checked)
      .map(input => input.dataset.fieldKey)
      .filter(Boolean);
  },

  /**
   * 按资源类型切换导出配置弹窗展示
   */
  renderExportConfigModalView() {
    const resourceType = this.getCurrentResourceType();
    this.currentResourceType = resourceType;

    const bookSidebar = document.getElementById('settlement-list-export-type-book');
    const avSidebar = document.getElementById('settlement-list-export-type-av');
    const bookLinePanel = document.getElementById('settlement-list-export-book-line-fields');
    const avLinePanel = document.getElementById('settlement-list-export-av-line-fields');
    const activeClass = ['text-sky-600', 'font-medium', 'border-l-2', 'border-sky-600', 'bg-white'];
    const inactiveClass = ['text-gray-600', 'border-l-2', 'border-transparent'];

    if (resourceType === 'av') {
      bookSidebar?.classList.add('hidden');
      avSidebar?.classList.remove('hidden');
      bookLinePanel?.classList.add('hidden');
      avLinePanel?.classList.remove('hidden');
      avSidebar?.classList.add(...activeClass);
      avSidebar?.classList.remove(...inactiveClass);
    } else {
      avSidebar?.classList.add('hidden');
      bookSidebar?.classList.remove('hidden');
      avLinePanel?.classList.add('hidden');
      bookLinePanel?.classList.remove('hidden');
      bookSidebar?.classList.add(...activeClass);
      bookSidebar?.classList.remove(...inactiveClass);
    }
  },

  /**
   * 关闭导出下拉菜单
   */
  closeExportMenu() {
    document.querySelectorAll('[data-dropdown-menu]').forEach(menu => menu.classList.add('hidden'));
  },

  /**
   * 打开导出配置弹窗
   */
  openExportConfigModal() {
    this.closeExportMenu();
    this.renderExportConfigModalView();
    this.applyExportConfigToModal(this.loadExportConfig());
    document.getElementById('settlement-list-export-config-modal')?.classList.remove('hidden');
  },

  /**
   * 获取结算单级字段导出值
   * @param {string} key - 字段 key
   * @param {Object} summary - 结算单概要
   * @returns {string|number}
   */
  getHeaderExportValue(key, summary) {
    return summary[key] ?? '';
  },

  /**
   * 获取订单行级字段导出值
   * @param {string} key - 字段 key
   * @param {Object} row - 行数据
   * @returns {string|number}
   */
  getLineExportValue(key, row) {
    if (key === 'isbn') return row.isbn || row.resourceId || '';
    if (key === 'listPrice') return row.listPrice ?? row.price ?? '';
    if (key === 'piecesInSet') return row.piecesInSet ?? row.volumesInSet ?? '';
    if (key === 'settlementAmount') return this.calcSettlementAmount(row);
    return row[key] ?? '';
  },

  /**
   * 生成导出文件名
   * @returns {string}
   */
  buildExportFilename() {
    const settleId = this.getCurrentSettleId();
    const timestamp = new Date().toISOString().replace(/[-:T]/g, '').slice(0, 14);
    return `${settleId}_${timestamp}.xlsx`;
  },

  /**
   * 按配置导出结算清单 Excel
   */
  exportList() {
    this.closeExportMenu();

    const selectedKeys = this.loadExportConfig();
    const headerFields = this.exportHeaderFields.filter(field => selectedKeys.includes(field.key));
    const lineFields = this.getExportLineFields().filter(field => selectedKeys.includes(field.key));

    if (!headerFields.length && !lineFields.length) {
      alert('请先在导出配置中勾选至少一个字段');
      return;
    }

    const rows = this.filteredRows;
    if (!rows.length) {
      alert('暂无可导出的清单数据');
      return;
    }

    if (typeof XLSX === 'undefined') {
      alert('导出组件加载失败，请刷新页面后重试');
      return;
    }

    const summary = this.getSettlementSummary();
    const sheetData = [];

    if (headerFields.length) {
      sheetData.push(headerFields.map(field => field.label));
      sheetData.push(headerFields.map(field => this.getHeaderExportValue(field.key, summary)));
      sheetData.push([]);
    }

    if (lineFields.length) {
      sheetData.push(lineFields.map(field => field.label));
      rows.forEach(row => {
        sheetData.push(lineFields.map(field => this.getLineExportValue(field.key, row)));
      });
    }

    const worksheet = XLSX.utils.aoa_to_sheet(sheetData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, '结算清单');
    XLSX.writeFile(workbook, this.buildExportFilename());
  },

  /**
   * 渲染表格行
   * @param {Object} row - 行数据
   * @returns {string}
   */
  renderTableRow(row) {
    const resourceId = row.isbn || row.resourceId || '';
    const publisher = row.publisher || '—';
    const volumes = row.piecesInSet ?? row.volumesInSet ?? '';

    return `
      <tr class="hover:bg-gray-50">
        <td class="px-3 py-2 text-gray-600">${row.no}</td>
        <td class="px-3 py-2 whitespace-nowrap">
          <a href="01_01_02_订单行详情_纸质书.html" class="text-sky-600 hover:underline">${row.orderLineNo}</a>
        </td>
        <td class="px-3 py-2">${row.title}</td>
        <td class="px-3 py-2 whitespace-nowrap">${resourceId}</td>
        <td class="px-3 py-2">${row.author}</td>
        <td class="px-3 py-2">${publisher}</td>
        <td class="px-3 py-2">${row.price}</td>
        <td class="px-3 py-2">${row.currency}</td>
        <td class="px-3 py-2">${row.actualPrice}</td>
        <td class="px-3 py-2">${volumes}</td>
        <td class="px-3 py-2">${row.settledSets}</td>
        <td class="px-3 py-2">${row.settledVolumes}</td>
        <td class="px-3 py-2">${this.calcSettlementAmount(row)}</td>
      </tr>`;
  },

  /**
   * 刷新表格与分页统计
   */
  renderTable() {
    const tbody = document.getElementById('settlement-list-table-body');
    const totalEl = document.getElementById('settlement-list-total');
    if (!tbody || !totalEl) return;

    tbody.innerHTML = this.filteredRows.map(row => this.renderTableRow(row)).join('');
    totalEl.textContent = `共 ${this.filteredRows.length} 条`;
  },

  /**
   * 按检索条件过滤清单
   */
  applySearch() {
    const form = document.getElementById('settlement-list-search-form');
    if (!form) return;

    const orderLineNo = (form.elements.orderLineNo.value || '').trim().toLowerCase();
    const resourceId = (form.elements.resourceId.value || '').trim().toLowerCase();
    const title = (form.elements.title.value || '').trim().toLowerCase();

    this.filteredRows = this.allRows.filter(row => {
      const matchOrderLine = !orderLineNo || row.orderLineNo.toLowerCase().includes(orderLineNo);
      const matchResource = !resourceId || row.resourceId.toLowerCase().includes(resourceId);
      const matchTitle = !title || row.title.toLowerCase().includes(title);
      return matchOrderLine && matchResource && matchTitle;
    }).map((row, index) => ({ ...row, no: index + 1 }));

    this.renderTable();
  },

  /**
   * 重置检索并恢复全部数据
   */
  resetSearch() {
    this.filteredRows = this.allRows.map((row, index) => ({ ...row, no: index + 1 }));
    this.renderTable();
  },

  /**
   * 绑定导出配置弹窗交互
   */
  bindExportConfigModal() {
    const selectAll = document.getElementById('settlement-list-export-select-all');
    if (!selectAll) return;

    selectAll.addEventListener('change', () => {
      this.getVisibleExportFieldInputs().forEach(field => { field.checked = selectAll.checked; });
      selectAll.indeterminate = false;
    });

    document.querySelectorAll('.settlement-list-export-header-field, .settlement-list-export-line-field')
      .forEach(field => {
        field.addEventListener('change', () => this.syncExportSelectAllState());
      });

    document.getElementById('settlement-list-export-config-save')?.addEventListener('click', () => {
      const selectedKeys = this.getSelectedExportFieldKeysFromModal();
      if (!selectedKeys.length) {
        alert('请至少勾选一个导出字段');
        return;
      }
      this.saveExportConfig(selectedKeys);
      document.getElementById('settlement-list-export-config-modal')?.classList.add('hidden');
    });
  },

  /**
   * 绑定导出相关事件
   */
  bindExportEvents() {
    document.getElementById('settlement-list-export-config')?.addEventListener('click', e => {
      e.preventDefault();
      this.openExportConfigModal();
    });

    document.getElementById('settlement-list-export-list')?.addEventListener('click', e => {
      e.preventDefault();
      this.exportList();
    });
  },

  /**
   * 初始化结算清单页
   */
  init() {
    const settleId = this.getSettleIdFromUrl();
    this.currentSettleId = settleId || 'jsPG00120260602001';
    this.currentResourceType = this.getCurrentResourceType();

    const settleIdEl = document.getElementById('settlement-list-settle-id');
    if (settleIdEl) {
      settleIdEl.textContent = this.currentSettleId;
    }

    this.allRows = this.getListData(settleId);
    this.resetSearch();

    const form = document.getElementById('settlement-list-search-form');
    if (form) {
      form.addEventListener('submit', e => {
        e.preventDefault();
        this.applySearch();
      });
    }

    this.bindExportConfigModal();
    this.bindExportEvents();
  }
};

document.addEventListener('DOMContentLoaded', () => SettlementListPage.init());
