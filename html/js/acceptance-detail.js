/**
 * 验收单详情页公共逻辑（按种视图）
 */
const AcceptanceDetail = {
  STORAGE_KEY: 'acceptanceDetailContext',

  /** @type {'book'|'av'} */
  mode: 'book',

  /** @type {Object|null} */
  acceptance: null,

  /** @type {Object[]} */
  allRows: [],

  /** @type {Object[]} */
  filteredRows: [],

  /** @type {Object[]} */
  volumeRows: [],

  /** @type {Object[]} */
  filteredVolumeRows: [],

  /** @type {number|null} */
  currentRevokeReceiveRowNo: null,

  /** 各资源类型配置 */
  CONFIG: {
    book: {
      resourceType: '纸质书',
      speciesPage: '02_01_02_验收详情按种_纸质书.html',
      volumePage: '02_01_11_验收单详情按册_纸质书.html',
      searchFields: [
        { value: 'isbn', label: 'ISBN' },
        { value: 'orderLine', label: '订单行号' },
        { value: 'title', label: '正题名' }
      ],
      volumeSearchFields: [
        { value: 'barcode', label: '条码号' },
        { value: 'isbn', label: 'ISBN' },
        { value: 'title', label: '正题名' }
      ],
      sampleRows: [
        {
          no: 1,
          orderLine: 'PG001B20260602003-5',
          isbn: '9787518359066',
          title: '现代精细油藏描述',
          author: '陈欢庆 著',
          price: '¥120.00',
          currency: 'CNY',
          counts: '2 / 2 / 0 / 0',
          lastTime: '2026-06-02 09:51:57',
          lastInspector: '杨晓购'
        },
        {
          no: 2,
          orderLine: 'PG001B20260602003-6',
          isbn: '9787565855375',
          title: '地质勘查工程与生态修复',
          author: '张昕, 冯红彬, 张海燕主编',
          price: '¥58.00',
          currency: 'CNY',
          counts: '3 / 1 / 1 / 0',
          exchangeReason: '残缺损',
          lastTime: '2026-06-01 14:20:10',
          lastInspector: '王二小'
        },
        {
          no: 3,
          orderLine: 'PG001B20260602003-7',
          isbn: '9787559826398',
          title: 'Python从入门到实践',
          author: '[美] 埃里克·马瑟斯',
          price: '¥89.00',
          currency: 'CNY',
          counts: '2 / 0 / 0 / 1',
          returnReason: '损坏退货',
          lastTime: '2026-05-30 16:05:33',
          lastInspector: '赵付'
        },
        {
          no: 4,
          orderLine: 'PG001B20260602003-8',
          isbn: '9787518359067',
          title: '石油勘探技术',
          author: '李明',
          price: '¥66.00',
          currency: 'CNY',
          counts: '2 / 0 / 0 / 0',
          revokeReceiveReasons: ['录入错误'],
          lastTime: '2026-05-29 11:20:00',
          lastInspector: '杨晓购'
        },
        {
          no: 5,
          orderLine: 'PG001B20260602003-9',
          isbn: '9787518359068',
          title: '油气田开发综合示例',
          author: '示例作者',
          price: '¥88.00',
          currency: 'CNY',
          counts: '4 / 0 / 1 / 1',
          exchangeReason: '破损换货',
          returnReason: '破损退货',
          revokeReceiveReasons: ['操作失误重新收货'],
          lastTime: '2026-05-28 10:00:00',
          lastInspector: '杨晓购'
        }
      ],
      sampleVolumeRows: [
        { no: 1, barcode: '001T268700006', isbn: '9787518359066', title: '现代精细油藏描述', author: '陈欢庆 著', price: '¥110.00', discount: '0.60', currency: 'CNY', volumesInSet: 3, receiver: '杨晓娴', receiveTime: '2026-06-02 09:51:57' },
        { no: 2, barcode: '001T268700005', isbn: '9787518359066', title: '现代精细油藏描述', author: '陈欢庆 著', price: '¥110.00', discount: '0.60', currency: 'CNY', volumesInSet: 3, receiver: '杨晓娴', receiveTime: '2026-06-02 09:51:57' },
        { no: 3, barcode: '001T268700004', isbn: '9787518359066', title: '现代精细油藏描述', author: '陈欢庆 著', price: '¥110.00', discount: '0.60', currency: 'CNY', volumesInSet: 3, receiver: '杨晓娴', receiveTime: '2026-06-02 09:51:57' },
        { no: 4, barcode: '001T268700003', isbn: '9787518359066', title: '现代精细油藏描述', author: '陈欢庆 著', price: '¥100.00', discount: '0.60', currency: 'CNY', volumesInSet: 3, receiver: '杨晓娴', receiveTime: '2026-06-02 09:51:57' },
        { no: 5, barcode: '001T268700002', isbn: '9787518359066', title: '现代精细油藏描述', author: '陈欢庆 著', price: '¥100.00', discount: '0.60', currency: 'CNY', volumesInSet: 3, receiver: '杨晓娴', receiveTime: '2026-06-02 09:51:57' },
        { no: 6, barcode: '001T268700001', isbn: '9787518359066', title: '现代精细油藏描述', author: '陈欢庆 著', price: '¥100.00', discount: '0.60', currency: 'CNY', volumesInSet: 3, receiver: '杨晓娴', receiveTime: '2026-06-02 09:51:57' }
      ]
    },
    av: {
      resourceType: '视听资料',
      speciesPage: '02_01_05_验收详情按种_视听资料.html',
      volumePage: '02_01_12_验收单详情按册_视听资料.html',
      searchFields: [
        { value: 'isbn', label: 'ISBN/ISRC' },
        { value: 'title', label: '题名' },
        { value: 'author', label: '作者' },
        { value: 'productBarcode', label: '商品条码' },
        { value: 'catalogNo', label: '目录号' },
        { value: 'carrier', label: '载体' },
        { value: 'orderLine', label: '订单行号' },
        { value: 'discNo', label: '盘号' }
      ],
      volumeSearchFields: [
        { value: 'barcode', label: '条码号' },
        { value: 'isbn', label: 'ISBN' },
        { value: 'title', label: '题名' },
        { value: 'author', label: '作者' },
        { value: 'productBarcode', label: '商品条码' },
        { value: 'catalogNo', label: '目录号' },
        { value: 'carrier', label: '载体' },
        { value: 'discNo', label: '盘号' }
      ],
      sampleRows: [
        {
          no: 1,
          orderLine: 'PG001B20260529010-1',
          isbn: '9787883310679',
          carrier: 'CD',
          title: '中国经典民歌',
          productBarcode: '',
          catalogNo: '',
          author: '殷秀梅',
          price: '300.00',
          currency: 'CNY',
          piecesInSet: 1,
          counts: '1 / 1 / 0 / 0',
          lastTime: '2026-05-29 10:30:39',
          lastInspector: '王二小'
        },
        {
          no: 2,
          orderLine: 'PG001B20260529010-2',
          isbn: '9787883310678',
          carrier: 'LP',
          title: '古典音乐精选',
          productBarcode: '',
          catalogNo: '',
          author: '维也纳爱乐',
          price: '280.00',
          currency: 'CNY',
          piecesInSet: 2,
          counts: '2 / 0 / 1 / 0',
          exchangeReason: '换货',
          lastTime: '2026-05-28 11:15:20',
          lastInspector: '杨晓婉'
        },
        {
          no: 3,
          orderLine: 'PG001B20260529010-3',
          isbn: '',
          carrier: 'DVD',
          title: '国家地理纪录片',
          productBarcode: '017685110221',
          catalogNo: 'DVD-1102',
          author: '国家地理',
          price: '168.00',
          currency: 'CNY',
          piecesInSet: 1,
          counts: '1 / 0 / 0 / 1',
          returnReason: '退货',
          lastTime: '2026-05-27 09:40:08',
          lastInspector: '赵付'
        },
        {
          no: 4,
          orderLine: 'PG001B20260529010-4',
          isbn: '9787883310677',
          carrier: 'CD',
          title: '莫扎特钢琴协奏曲',
          productBarcode: '',
          catalogNo: '',
          author: '莫扎特',
          price: '120.00',
          currency: 'CNY',
          piecesInSet: 1,
          counts: '2 / 0 / 0 / 0',
          revokeReceiveReasons: ['重复收货'],
          lastTime: '2026-05-26 15:10:22',
          lastInspector: '王二小'
        },
        {
          no: 5,
          orderLine: 'PG001B20260529010-5',
          isbn: '9787883310676',
          carrier: 'CD',
          title: '综合场景示例',
          productBarcode: '',
          catalogNo: '',
          author: '示例作者',
          price: '200.00',
          currency: 'CNY',
          piecesInSet: 1,
          counts: '4 / 0 / 1 / 1',
          exchangeReason: '破损换货',
          returnReason: '破损退货',
          revokeReceiveReasons: ['操作失误重新收货'],
          lastTime: '2026-05-25 14:30:00',
          lastInspector: '杨晓婉'
        }
      ],
      sampleVolumeRows: [
        { no: 1, barcode: 'AV001001', isbn: '9787883310679', carrier: 'CD', title: '中国经典民歌', productBarcode: '', catalogNo: '', author: '殷秀梅', price: '110.00', discount: '0.60', currency: 'CNY', piecesInSet: 3, receiver: '王二小', receiveTime: '2026-05-29 10:30:39' },
        { no: 2, barcode: 'AV001002', isbn: '9787883310679', carrier: 'CD', title: '中国经典民歌', productBarcode: '', catalogNo: '', author: '殷秀梅', price: '110.00', discount: '0.60', currency: 'CNY', piecesInSet: 3, receiver: '王二小', receiveTime: '2026-05-29 10:30:39' },
        { no: 3, barcode: 'AV001003', isbn: '9787883310679', carrier: 'CD', title: '中国经典民歌', productBarcode: '', catalogNo: '', author: '殷秀梅', price: '110.00', discount: '0.60', currency: 'CNY', piecesInSet: 3, receiver: '王二小', receiveTime: '2026-05-29 10:30:39' }
      ]
    }
  },

  /**
   * 读取验收单详情上下文
   * @returns {Object|null}
   */
  loadContext() {
    try {
      const raw = sessionStorage.getItem(this.STORAGE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (error) {
      console.warn('[AcceptanceDetail] 上下文解析失败', error);
      return null;
    }
  },

  /**
   * 保存验收单详情上下文
   * @param {Object} context - 上下文数据
   */
  saveContext(context) {
    sessionStorage.setItem(this.STORAGE_KEY, JSON.stringify(context));
  },

  /**
   * 获取当前模式配置
   * @returns {Object}
   */
  getConfig() {
    return this.CONFIG[this.mode] || this.CONFIG.book;
  },

  /**
   * 初始化纸质书按种详情页
   */
  initBook() {
    this.init('book');
  },

  /**
   * 初始化视听资料按种详情页
   */
  initAv() {
    this.init('av');
  },

  /**
   * 初始化纸质书按册详情页
   */
  initBookVolume() {
    this.initVolume('book');
  },

  /**
   * 初始化视听资料按册详情页
   */
  initAvVolume() {
    this.initVolume('av');
  },

  /**
   * 渲染表格空状态
   * @param {number} colspan - 列数
   * @returns {string}
   */
  renderEmptyTableRow(colspan) {
    return `
      <tr>
        <td colspan="${colspan}" class="px-3 py-20">
          <div class="flex flex-col items-center justify-center text-gray-400">
            <svg class="w-16 h-16 mb-3 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"/>
            </svg>
            <span class="text-sm">暂无数据</span>
          </div>
        </td>
      </tr>`;
  },

  /**
   * 获取验收单汇总字段默认值
   * @param {'book'|'av'} mode - 资源类型模式
   * @returns {Object}
   */
  getAcceptanceSummaryDefaults(mode) {
    if (mode === 'av') {
      return {
        totalListPrice: '948.00',
        totalNetPrice: '568.80',
        discount: '0.60',
        totalSpeciesCount: 4,
        totalVolumeCount: 6
      };
    }
    return {
      totalListPrice: '1256.00',
      totalNetPrice: '753.60',
      discount: '0.60',
      totalSpeciesCount: 5,
      totalVolumeCount: 12
    };
  },

  /**
   * 合并验收单汇总字段
   * @param {Object} acceptance - 验收单数据
   * @param {'book'|'av'} mode - 资源类型模式
   * @returns {Object}
   */
  mergeAcceptanceSummary(acceptance, mode) {
    return {
      lang: '中文',
      ...this.getAcceptanceSummaryDefaults(mode),
      ...acceptance
    };
  },

  /**
   * 格式化验收单金额展示
   * @param {string|number|null|undefined} value - 金额
   * @returns {string}
   */
  formatSummaryAmount(value) {
    if (value == null || value === '') return '—';
    return String(value);
  },

  /**
   * 格式化验收单数量展示
   * @param {string|number|null|undefined} value - 数量
   * @returns {string}
   */
  formatSummaryCount(value) {
    if (value == null || value === '') return '—';
    return String(value);
  },
  /**
   * 初始化详情页
   * @param {'book'|'av'} mode - 资源类型模式
   */
  init(mode) {
    this.mode = mode;
    const config = this.getConfig();
    const context = this.loadContext();

    this.acceptance = this.mergeAcceptanceSummary(context?.acceptance || (mode === 'av' ? {
      id: 'ysPG00120260601001',
      name: '测试验收',
      type: config.resourceType,
      shipNo: '123123',
      supplier: '湖北三新',
      remarkText: '',
      status: 'inProgress'
    } : {
      id: 'ysPG00120260602001',
      name: '20260602ceshi',
      type: config.resourceType,
      shipNo: '997765460',
      supplier: '北京市图书进出口有限公司',
      remarkText: '',
      status: 'inProgress'
    }), mode);

    if (context?.acceptance?.type && context.acceptance.type !== config.resourceType) {
      console.warn('[AcceptanceDetail] 资源类型与页面不匹配', context.acceptance.type, config.resourceType);
    }

    if (context?.detailRows?.length) {
      this.allRows = [...context.detailRows];
    } else if (context?.detailRows !== undefined) {
      this.allRows = [];
    } else if (mode === 'av') {
      this.allRows = [...(config.sampleRows || [])];
    } else {
      this.allRows = [...config.sampleRows];
    }
    this.filteredRows = [...this.allRows];
    this.allRows.forEach(row => this.syncSpeciesRevokeReceiveReasons(row));

    this.renderSummary();
    this.renderSearchFields();
    this.renderTable();
    this.bindEvents();
  },

  /**
   * 渲染验收单摘要信息
   */
  renderSummary() {
    const a = this.acceptance;
    const fields = {
      'acceptance-detail-id': a.id,
      'acceptance-detail-name': a.name,
      'acceptance-detail-type': a.type,
      'acceptance-detail-lang': a.lang,
      'acceptance-detail-shipno': a.shipNo,
      'acceptance-detail-supplier': a.supplier,
      'acceptance-detail-total-list-price': this.formatSummaryAmount(a.totalListPrice),
      'acceptance-detail-total-net-price': this.formatSummaryAmount(a.totalNetPrice),
      'acceptance-detail-discount': this.formatSummaryAmount(a.discount),
      'acceptance-detail-total-species': this.formatSummaryCount(a.totalSpeciesCount),
      'acceptance-detail-total-volumes': this.formatSummaryCount(a.totalVolumeCount),
      'acceptance-detail-remark': a.remarkText || '—'
    };
    Object.entries(fields).forEach(([id, value]) => {
      const el = document.getElementById(id);
      if (el) el.textContent = value || '—';
    });

    const breadcrumbIdEl = document.getElementById('acceptance-detail-breadcrumb-id');
    if (breadcrumbIdEl) breadcrumbIdEl.textContent = a.id || '';
  },

  /**
   * 渲染检索字段下拉
   */
  renderSearchFields() {
    const select = document.getElementById('acceptance-detail-search-field');
    if (!select) return;
    const fields = this.getConfig().searchFields;
    select.innerHTML = fields.map((f, i) =>
      `<option value="${f.value}"${i === 0 ? ' selected' : ''}>${f.label}</option>`
    ).join('');
  },

  /**
   * 解析按种列表发/收/换/退套数
   * @param {Object} row - 行数据
   * @returns {{ ordered: number, received: number, exchange: number, returned: number }}
   */
  parseSpeciesCounts(row) {
    if (row.received != null || row.exchange != null || row.returned != null) {
      return {
        ordered: Number(row.ordered) || 0,
        received: Number(row.received) || 0,
        exchange: Number(row.exchange) || 0,
        returned: Number(row.returned) || 0
      };
    }
    const parts = String(row.counts || '0 / 0 / 0 / 0')
      .split('/')
      .map(part => Number(part.trim()) || 0);
    return {
      ordered: parts[0] || 0,
      received: parts[1] || 0,
      exchange: parts[2] || 0,
      returned: parts[3] || 0
    };
  },

  /**
   * 格式化按种列表发/收/换/退套数
   * @param {{ ordered: number, received: number, exchange: number, returned: number }} counts - 套数对象
   * @returns {string}
   */
  formatSpeciesCounts(counts) {
    return `${counts.ordered} / ${counts.received} / ${counts.exchange} / ${counts.returned}`;
  },

  /**
   * 更新订单行套数并同步 counts 字段
   * @param {Object} row - 行数据
   * @param {Partial<{ ordered: number, received: number, exchange: number, returned: number }>} patch - 套数变更
   */
  updateSpeciesCounts(row, patch) {
    const counts = { ...this.parseSpeciesCounts(row), ...patch };
    row.counts = this.formatSpeciesCounts(counts);
    if (patch.ordered != null) row.ordered = counts.ordered;
    if (patch.received != null) row.received = counts.received;
    if (patch.exchange != null) row.exchange = counts.exchange;
    if (patch.returned != null) row.returned = counts.returned;
    this.syncSpeciesRevokeReceiveReasons(row);
  },

  /**
   * 同步撤销收货原因：重新收货后清空，仅收货数量为 0 时保留
   * @param {Object} row - 行数据
   */
  syncSpeciesRevokeReceiveReasons(row) {
    const counts = this.parseSpeciesCounts(row);
    if (counts.received > 0) {
      row.revokeReceiveReasons = [];
    }
  },

  /**
   * 持久化按种详情上下文
   */
  persistDetailContext() {
    const context = this.loadContext() || {};
    this.saveContext({
      ...context,
      acceptance: this.acceptance,
      detailRows: this.allRows,
      volumeRows: context.volumeRows,
      viewMode: 'species'
    });
  },

  /**
   * 渲染按种列表操作列
   * @param {Object} row - 行数据
   * @returns {string}
   */
  renderSpeciesOps(row) {
    if (this.acceptance?.status !== 'inProgress') {
      return '<span class="text-gray-400">—</span>';
    }

    const counts = this.parseSpeciesCounts(row);
    const links = [];

    if (counts.received !== 0) {
      links.push(
        `<a href="#" class="text-sky-600 hover:underline mr-3 species-revoke-receive" data-row-no="${row.no}">撤销收货</a>`
      );
    }
    if (counts.exchange !== 0) {
      links.push(
        `<a href="#" class="text-sky-600 hover:underline mr-3 species-revoke-exchange" data-row-no="${row.no}">撤销换货</a>`
      );
    }
    if (counts.returned !== 0) {
      links.push(
        `<a href="#" class="text-sky-600 hover:underline species-revoke-return" data-row-no="${row.no}">撤销退货</a>`
      );
    }

    return links.length ? links.join('') : '<span class="text-gray-400">—</span>';
  },

  /**
   * 判断换/退/撤销收货原因「查看」是否置灰
   * @param {Object} row - 行数据
   * @returns {boolean}
   */
  isSpeciesReasonLinkDisabled(row) {
    const counts = this.parseSpeciesCounts(row);
    return counts.ordered === counts.received;
  },

  /**
   * 构建换/退/撤销收货原因浮层文案行（可同时包含多种原因）
   * @param {Object} row - 行数据
   * @returns {string[]}
   */
  buildSpeciesReasonTooltipLines(row) {
    const counts = this.parseSpeciesCounts(row);
    const lines = [];

    if (counts.exchange !== 0) {
      lines.push(`换货原因：${row.exchangeReason || '—'}`);
    }
    if (counts.returned !== 0) {
      lines.push(`退货原因：${row.returnReason || '—'}`);
    }

    if (counts.received === 0) {
      const revokeReasons = row.revokeReceiveReasons || [];
      revokeReasons.forEach(item => {
        const text = typeof item === 'string' ? item : item.reason;
        if (text) lines.push(`撤销收货原因：${text}`);
      });
    }

    return lines;
  },

  /**
   * 构建换/退/撤销收货原因浮层 HTML
   * @param {Object} row - 行数据
   * @returns {string}
   */
  buildSpeciesReasonTooltip(row) {
    const lines = this.buildSpeciesReasonTooltipLines(row);
    return lines
      .map(line => `<div>${this.escapeHtml(line)}</div>`)
      .join('');
  },

  /**
   * 转义 HTML 特殊字符
   * @param {string} text - 原始文本
   * @returns {string}
   */
  escapeHtml(text) {
    return String(text)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  },

  /**
   * 判断是否展示换/退/撤销收货原因浮层
   * @param {Object} row - 行数据
   * @returns {boolean}
   */
  shouldShowSpeciesReasonTooltip(row) {
    return this.buildSpeciesReasonTooltipLines(row).length > 0;
  },

  /**
   * 渲染换/退/撤销收货原因列
   * @param {Object} row - 行数据
   * @returns {string}
   */
  renderSpeciesReasonCell(row) {
    if (this.isSpeciesReasonLinkDisabled(row)) {
      return '<span class="text-gray-300 cursor-default select-none">查看</span>';
    }

    return `<span class="species-reason-trigger text-sky-600 hover:underline cursor-pointer" data-row-no="${row.no}">查看</span>`;
  },

  /**
   * 渲染明细表格
   */
  renderTable() {
    const tbody = document.getElementById('acceptance-detail-table-body');
    const totalEl = document.getElementById('acceptance-detail-total');
    if (!tbody) return;

    if (this.mode === 'av') {
      if (!this.filteredRows.length) {
        tbody.innerHTML = this.renderEmptyTableRow(16);
      } else {
        tbody.innerHTML = this.filteredRows.map(row => `
          <tr class="hover:bg-gray-50">
            <td class="px-3 py-2 text-gray-600">${row.no}</td>
            <td class="px-3 py-2 whitespace-nowrap">${row.orderLine || '—'}</td>
            <td class="px-3 py-2 whitespace-nowrap">${row.isbn || '—'}</td>
            <td class="px-3 py-2">${row.carrier || '—'}</td>
            <td class="px-3 py-2">${row.title || '—'}</td>
            <td class="px-3 py-2 whitespace-nowrap">${row.productBarcode || '—'}</td>
            <td class="px-3 py-2 whitespace-nowrap">${row.catalogNo || '—'}</td>
            <td class="px-3 py-2">${row.author || '—'}</td>
            <td class="px-3 py-2 whitespace-nowrap">${row.price || '—'}</td>
            <td class="px-3 py-2">${row.currency || '—'}</td>
            <td class="px-3 py-2 text-center">${row.piecesInSet ?? '—'}</td>
            <td class="px-3 py-2 whitespace-nowrap">${row.counts || '—'}</td>
            <td class="px-3 py-2 whitespace-nowrap">${row.lastTime || '—'}</td>
            <td class="px-3 py-2">${row.lastInspector || '—'}</td>
            <td class="px-3 py-2 whitespace-nowrap">${this.renderSpeciesReasonCell(row)}</td>
            <td class="px-3 py-2 whitespace-nowrap">${this.renderSpeciesOps(row)}</td>
          </tr>`).join('');
      }
    } else {
      tbody.innerHTML = this.filteredRows.length
        ? this.filteredRows.map(row => `
        <tr class="hover:bg-gray-50">
          <td class="px-3 py-2 text-gray-600">${row.no}</td>
          <td class="px-3 py-2 whitespace-nowrap">${row.orderLine}</td>
          <td class="px-3 py-2 whitespace-nowrap">${row.isbn}</td>
          <td class="px-3 py-2">${row.title}</td>
          <td class="px-3 py-2">${row.author}</td>
          <td class="px-3 py-2 whitespace-nowrap">${row.price}</td>
          <td class="px-3 py-2">${row.currency}</td>
          <td class="px-3 py-2 whitespace-nowrap">${row.counts}</td>
          <td class="px-3 py-2 whitespace-nowrap">${row.lastTime}</td>
          <td class="px-3 py-2">${row.lastInspector}</td>
          <td class="px-3 py-2 whitespace-nowrap">${this.renderSpeciesReasonCell(row)}</td>
          <td class="px-3 py-2 whitespace-nowrap">${this.renderSpeciesOps(row)}</td>
        </tr>`).join('')
        : this.renderEmptyTableRow(12);
    }

    if (totalEl) totalEl.textContent = `共 ${this.filteredRows.length} 条`;
  },

  /**
   * 执行检索过滤
   */
  applyFilter() {
    const form = document.getElementById('acceptance-detail-search-form');
    if (!form) return;

    const field = form.elements.searchField?.value || '';
    const keyword = (form.elements.keyword?.value || '').trim().toLowerCase();
    const inspector = (form.elements.inspector?.value || '').trim().toLowerCase();

    this.filteredRows = this.allRows.filter(row => {
      if (keyword) {
        const valueMap = {
          isbn: row.isbn,
          orderLine: row.orderLine,
          title: row.title,
          author: row.author,
          productBarcode: row.productBarcode,
          catalogNo: row.catalogNo,
          carrier: row.carrier,
          discNo: row.discNo
        };
        const target = (valueMap[field] || '').toLowerCase();
        if (!target.includes(keyword)) return false;
      }
      if (inspector && !(row.lastInspector || '').toLowerCase().includes(inspector)) {
        return false;
      }
      return true;
    });

    this.renderTable();
  },

  /**
   * 获取可用的 TabManager（嵌入模式下使用父窗口实例）
   * @returns {typeof TabManager|null}
   */
  getTabManager() {
    if (typeof TabManager !== 'undefined' && TabManager.getActiveManager) {
      return TabManager.getActiveManager();
    }
    return null;
  },

  /**
   * 跳转至按册详情页
   */
  navigateToVolume() {
    const volumePage = this.getConfig().volumePage;
    this.saveContext({
      acceptance: this.acceptance,
      detailRows: this.allRows,
      volumeRows: this.volumeRows.length ? this.volumeRows : this.getConfig().sampleVolumeRows,
      viewMode: 'volume'
    });

    const tabMgr = this.getTabManager();
    if (tabMgr) {
      const title = this.acceptance?.id ? `验收详情 - ${this.acceptance.id}` : '验收单详情按册';
      tabMgr.openTab(volumePage, title, { reload: true });
      return;
    }
    location.href = volumePage;
  },

  /**
   * 面包屑返回验收单管理（页签嵌入模式下切换回宿主页签）
   */
  bindBreadcrumbNavigation() {
    document.getElementById('acceptance-detail-breadcrumb-back')?.addEventListener('click', event => {
      event.preventDefault();
      const tabMgr = this.getTabManager();
      if (tabMgr?.hostPage) {
        tabMgr.switchTab(tabMgr.hostPage);
        return;
      }
      location.href = '02_01_验收单管理.html';
    });
  },

  /**
   * 绑定页面事件
   */
  bindEvents() {
    this.bindBreadcrumbNavigation();

    document.getElementById('acceptance-detail-search-form')?.addEventListener('submit', e => {
      e.preventDefault();
      this.applyFilter();
    });

    document.getElementById('acceptance-detail-search-reset')?.addEventListener('click', () => {
      const form = document.getElementById('acceptance-detail-search-form');
      if (form) form.reset();
      this.filteredRows = [...this.allRows];
      this.renderTable();
    });

    document.getElementById('acceptance-detail-tab-volume')?.addEventListener('click', () => {
      this.navigateToVolume();
    });

    document.getElementById('acceptance-species-export-detail')?.addEventListener('click', () => {
      this.exportSpeciesDetails();
    });

    document.getElementById('acceptance-species-export-config')?.addEventListener('click', () => {
      this.openSpeciesExportConfig();
    });

    this.bindSpeciesExportConfigModal();
    this.bindSpeciesRevokeActions();
    this.bindRevokeReceiveModal();
    this.bindSpeciesReasonTooltip();
  },

  /**
   * 渲染撤销收货原因下拉选项
   */
  renderRevokeReceiveReasonOptions() {
    const select = document.getElementById('species-revoke-receive-reason');
    if (!select || typeof ReasonParamsStore === 'undefined') return;

    const reasons = ReasonParamsStore.getActiveReasons('revokeReceive');
    select.innerHTML = [
      '<option value="">请选择</option>',
      ...reasons.map(item => `<option value="${item.content}">${item.content}</option>`)
    ].join('');
  },

  /**
   * 打开撤销收货弹窗
   * @param {Object} row - 订单行数据
   */
  openRevokeReceiveModal(row) {
    const modal = document.getElementById('species-revoke-receive-modal');
    const form = document.getElementById('species-revoke-receive-form');
    if (!modal || !form) return;

    this.currentRevokeReceiveRowNo = row.no;
    this.renderRevokeReceiveReasonOptions();
    form.reset();
    modal.classList.remove('hidden');
  },

  /**
   * 关闭撤销收货弹窗
   */
  closeRevokeReceiveModal() {
    const modal = document.getElementById('species-revoke-receive-modal');
    if (modal) modal.classList.add('hidden');
    this.currentRevokeReceiveRowNo = null;
  },

  /**
   * 提交撤销收货
   */
  submitRevokeReceive() {
    const form = document.getElementById('species-revoke-receive-form');
    const reason = form?.elements.reason?.value?.trim();
    if (!reason) {
      alert('请选择撤销收货原因');
      return;
    }

    const rowNo = this.currentRevokeReceiveRowNo;
    const row = this.allRows.find(item => item.no === rowNo);
    if (!row) return;

    this.updateSpeciesCounts(row, { received: 0 });
    if (!row.revokeReceiveReasons) row.revokeReceiveReasons = [];
    row.revokeReceiveReasons.push(reason);

    this.closeRevokeReceiveModal();
    this.renderTable();
    this.persistDetailContext();

    console.log('[AcceptanceDetail] 撤销收货成功', {
      acceptanceId: this.acceptance?.id,
      orderLine: row.orderLine,
      reason
    });
    alert('操作成功');
  },

  /**
   * 绑定撤销收货弹窗事件
   */
  bindRevokeReceiveModal() {
    document.getElementById('species-revoke-receive-submit')?.addEventListener('click', () => {
      this.submitRevokeReceive();
    });

    document.getElementById('species-revoke-receive-modal')?.addEventListener('click', event => {
      if (event.target.id === 'species-revoke-receive-modal') {
        this.closeRevokeReceiveModal();
      }
    });

    document.querySelectorAll('#species-revoke-receive-modal [data-modal-close]').forEach(btn => {
      btn.addEventListener('click', () => this.closeRevokeReceiveModal());
    });
  },

  /**
   * 定位换/退/撤销收货原因浮层
   * @param {HTMLElement} trigger - 触发元素
   */
  positionSpeciesReasonTooltip(trigger) {
    const tooltip = document.getElementById('species-reason-tooltip');
    if (!tooltip) return;

    const rect = trigger.getBoundingClientRect();
    const gap = 6;
    let top = rect.bottom + gap;
    let left = rect.left;

    tooltip.classList.remove('hidden');
    const tooltipRect = tooltip.getBoundingClientRect();

    if (left + tooltipRect.width > window.innerWidth - 8) {
      left = Math.max(8, window.innerWidth - tooltipRect.width - 8);
    }
    if (top + tooltipRect.height > window.innerHeight - 8) {
      top = Math.max(8, rect.top - tooltipRect.height - gap);
    }

    tooltip.style.top = `${top}px`;
    tooltip.style.left = `${left}px`;
  },

  /**
   * 隐藏换/退/撤销收货原因浮层
   */
  hideSpeciesReasonTooltip() {
    const tooltip = document.getElementById('species-reason-tooltip');
    if (!tooltip) return;
    tooltip.classList.add('hidden');
    tooltip.innerHTML = '';
  },

  /**
   * 绑定换/退/撤销收货原因浮层交互
   */
  bindSpeciesReasonTooltip() {
    const tbody = document.getElementById('acceptance-detail-table-body');
    const tooltip = document.getElementById('species-reason-tooltip');
    if (!tbody || !tooltip) return;

    tbody.addEventListener('mouseover', event => {
      const trigger = event.target.closest('.species-reason-trigger');
      if (!trigger) return;

      const row = this.filteredRows.find(item => item.no === Number(trigger.dataset.rowNo));
      if (!row || !this.shouldShowSpeciesReasonTooltip(row)) return;

      const content = this.buildSpeciesReasonTooltip(row);
      if (!content) return;

      tooltip.innerHTML = content;
      this.positionSpeciesReasonTooltip(trigger);
    });

    tbody.addEventListener('mouseout', event => {
      const trigger = event.target.closest('.species-reason-trigger');
      if (!trigger) return;

      const related = event.relatedTarget;
      if (related instanceof Node && trigger.contains(related)) return;
      this.hideSpeciesReasonTooltip();
    });

    window.addEventListener('scroll', () => this.hideSpeciesReasonTooltip(), true);
  },

  /**
   * 绑定按种列表撤销操作
   */
  bindSpeciesRevokeActions() {
    const tbody = document.getElementById('acceptance-detail-table-body');
    if (!tbody) return;

    tbody.addEventListener('click', event => {
      const receiveLink = event.target.closest('.species-revoke-receive');
      const exchangeLink = event.target.closest('.species-revoke-exchange');
      const returnLink = event.target.closest('.species-revoke-return');
      if (!receiveLink && !exchangeLink && !returnLink) return;

      event.preventDefault();
      const rowNo = Number((receiveLink || exchangeLink || returnLink).dataset.rowNo);
      const row = this.filteredRows.find(item => item.no === rowNo);
      if (!row) return;

      if (receiveLink) {
        this.openRevokeReceiveModal(row);
        return;
      }
      if (exchangeLink) {
        this.handleSpeciesRevoke('exchange', row);
        return;
      }
      this.handleSpeciesRevoke('return', row);
    });
  },

  /**
   * 处理按种列表撤销操作
   * @param {'receive'|'exchange'|'return'} actionType - 撤销类型
   * @param {Object} row - 订单行数据
   */
  handleSpeciesRevoke(actionType, row) {
    const labels = {
      receive: '撤销收货',
      exchange: '撤销换货',
      return: '撤销退货'
    };
    const label = labels[actionType];
    if (!window.confirm(`确定${label}吗？`)) return;

    console.log(`[AcceptanceDetail] ${label}`, {
      acceptanceId: this.acceptance?.id,
      orderLine: row.orderLine,
      actionType
    });
    alert(`${label}操作已提交`);
  },

  /**
   * 关闭导出下拉菜单
   */
  closeExportMenu() {
    document.querySelectorAll('[data-dropdown-menu]').forEach(menu => menu.classList.add('hidden'));
  },

  /**
   * 导出验收明细（按当前筛选结果）
   */
  exportSpeciesDetails() {
    this.closeExportMenu();
    const count = this.filteredRows.length;
    if (!count) {
      alert('暂无可导出的验收明细');
      return;
    }
    const acceptanceId = this.acceptance?.id || '验收单';
    const timestamp = new Date().toISOString().replace(/[-:T]/g, '').slice(0, 14);
    const filename = `${acceptanceId}_验收明细_${timestamp}.xlsx`;
    console.log('[AcceptanceDetail] 导出验收明细', { filename, count, rows: this.filteredRows });
    alert(`已按配置导出 ${count} 条验收明细\n文件名：${filename}`);
  },

  /**
   * 打开验收明细导出配置弹窗
   */
  openSpeciesExportConfig() {
    this.closeExportMenu();
    document.getElementById('acceptance-species-export-config-modal')?.classList.remove('hidden');
  },

  /**
   * 绑定按种导出配置弹窗全选逻辑
   */
  bindSpeciesExportConfigModal() {
    this.bindExportConfigModal({
      selectAllId: 'acceptance-species-export-select-all',
      fieldClass: 'acceptance-species-export-field',
      modalId: 'acceptance-species-export-config-modal',
      saveId: 'acceptance-species-export-config-save',
      logLabel: '验收明细导出配置'
    });
  },

  /**
   * 初始化按册详情页
   * @param {'book'|'av'} mode - 资源类型模式
   */
  initVolume(mode) {
    this.mode = mode;
    const config = this.getConfig();
    const context = this.loadContext();

    this.acceptance = this.mergeAcceptanceSummary(context?.acceptance || (mode === 'av' ? {
      id: 'ysPG00120260601001',
      name: '测试验收',
      type: config.resourceType,
      shipNo: '123123',
      supplier: '湖北三新',
      remarkText: ''
    } : {
      id: 'ysPG00120260602001',
      name: '20260602ceshi',
      type: config.resourceType,
      shipNo: '997765460',
      supplier: '北京市图书进出口有限公司',
      remarkText: ''
    }), mode);

    this.volumeRows = context?.volumeRows !== undefined
      ? [...context.volumeRows]
      : [...(config.sampleVolumeRows || [])];
    this.filteredVolumeRows = [...this.volumeRows];
    this.allRows = context?.detailRows !== undefined
      ? [...context.detailRows]
      : [...(config.sampleRows || [])];

    this.renderSummary();
    this.renderVolumeSearchFields();
    this.renderVolumeTable();
    this.bindVolumeEvents();
  },

  /**
   * 渲染按册检索字段下拉
   */
  renderVolumeSearchFields() {
    const select = document.getElementById('acceptance-volume-search-field');
    if (!select) return;
    const fields = this.getConfig().volumeSearchFields || [];
    select.innerHTML = fields.map((f, i) =>
      `<option value="${f.value}"${i === 0 ? ' selected' : ''}>${f.label}</option>`
    ).join('');
  },

  /**
   * 获取按册行的套内册/件数
   * @param {Object} row - 按册行数据
   * @returns {number}
   */
  getVolumeSetSize(row) {
    const size = this.mode === 'av' ? row.piecesInSet : row.volumesInSet;
    const parsed = Number(size);
    return Number.isFinite(parsed) && parsed > 0 ? parsed : 1;
  },

  /**
   * 解析金额字符串为数值
   * @param {string|number|null|undefined} value - 金额
   * @returns {number}
   */
  parseAmount(value) {
    if (value == null || value === '') return 0;
    if (typeof value === 'number') return Number.isFinite(value) ? value : 0;
    const num = parseFloat(String(value).replace(/[^\d.-]/g, ''));
    return Number.isFinite(num) ? num : 0;
  },

  /**
   * 解析折扣率（支持 0.80 或 80 等形式）
   * @param {string|number|null|undefined} value - 折扣
   * @returns {number}
   */
  parseDiscount(value) {
    if (value == null || value === '') return 1;
    const num = typeof value === 'number'
      ? value
      : parseFloat(String(value).replace(/[^\d.-]/g, ''));
    if (!Number.isFinite(num)) return 1;
    return num > 1 ? num / 100 : num;
  },

  /**
   * 计算套装实洋（定价 × 折扣）
   * @param {Object} row - 按册行数据
   * @returns {number}
   */
  calculateSetNetPrice(row) {
    const price = this.parseAmount(row.price);
    const discount = this.parseDiscount(row.discount);
    return Math.round(price * discount * 100) / 100;
  },

  /**
   * 将套装总价按册数拆分（前 n-1 册向下保留两位小数，最后一册补足差额）
   * @param {number} total - 套装总价
   * @param {number} count - 套内册/件数
   * @returns {number[]}
   */
  splitAmountByVolumeCount(total, count) {
    if (count <= 0) return [];
    if (count === 1) return [total];

    const unit = Math.floor(total * 100 / count) / 100;
    const amounts = Array(count - 1).fill(unit);
    const last = Math.round((total - unit * (count - 1)) * 100) / 100;
    amounts.push(last);
    return amounts;
  },

  /**
   * 格式化按册金额展示（保留两位小数）
   * @param {number|null|undefined} amount - 金额
   * @returns {string}
   */
  formatVolumeAmount(amount) {
    if (amount == null || !Number.isFinite(amount)) return '—';
    return amount.toFixed(2);
  },

  /**
   * 为按册行计算套装实洋与单册定价
   * @param {Object[]} rows - 按册行列表
   * @returns {Object[]}
   */
  enrichVolumeRowsWithPricing(rows) {
    const enriched = rows.map(row => ({
      ...row,
      setNetPrice: this.calculateSetNetPrice(row)
    }));
    const groups = new Map();

    rows.forEach((row, index) => {
      const setSize = this.getVolumeSetSize(row);
      const key = [
        row.isbn || '',
        this.parseAmount(row.price),
        setSize
      ].join('|');
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push({ index, row });
    });

    groups.forEach(items => {
      const setSize = this.getVolumeSetSize(items[0].row);
      for (let i = 0; i < items.length; i += setSize) {
        const setItems = items.slice(i, i + setSize);
        const volumeCount = setItems.length;
        const priceTotal = this.parseAmount(setItems[0].row.price);
        const unitListPrices = this.splitAmountByVolumeCount(priceTotal, volumeCount);

        setItems.forEach((item, volumeIndex) => {
          enriched[item.index].unitListPrice = unitListPrices[volumeIndex];
        });
      }
    });

    return enriched;
  },

  /**
   * 渲染按册明细表格
   */
  renderVolumeTable() {
    const tbody = document.getElementById('acceptance-volume-table-body');
    const totalEl = document.getElementById('acceptance-volume-total');
    if (!tbody) return;

    if (!this.filteredVolumeRows.length) {
      const colspan = this.mode === 'av' ? 15 : 12;
      tbody.innerHTML = this.renderEmptyTableRow(colspan);
    } else {
      const rows = this.enrichVolumeRowsWithPricing(this.filteredVolumeRows);
      if (this.mode === 'av') {
        tbody.innerHTML = rows.map(row => `
        <tr class="hover:bg-gray-50">
          <td class="px-3 py-2 text-gray-600">${row.no}</td>
          <td class="px-3 py-2 whitespace-nowrap">${row.barcode || '—'}</td>
          <td class="px-3 py-2 whitespace-nowrap">${row.isbn || '—'}</td>
          <td class="px-3 py-2">${row.carrier || '—'}</td>
          <td class="px-3 py-2">${row.title || '—'}</td>
          <td class="px-3 py-2 whitespace-nowrap">${row.productBarcode || '—'}</td>
          <td class="px-3 py-2 whitespace-nowrap">${row.catalogNo || '—'}</td>
          <td class="px-3 py-2">${row.author || '—'}</td>
          <td class="px-3 py-2 whitespace-nowrap">${row.price || '—'}</td>
          <td class="px-3 py-2">${row.currency || '—'}</td>
          <td class="px-3 py-2 whitespace-nowrap">${this.formatVolumeAmount(row.setNetPrice)}</td>
          <td class="px-3 py-2 whitespace-nowrap">${this.formatVolumeAmount(row.unitListPrice)}</td>
          <td class="px-3 py-2 text-center">${row.piecesInSet ?? '—'}</td>
          <td class="px-3 py-2">${row.receiver || '—'}</td>
          <td class="px-3 py-2 whitespace-nowrap">${row.receiveTime || '—'}</td>
        </tr>`).join('');
      } else {
        tbody.innerHTML = rows.map(row => `
        <tr class="hover:bg-gray-50">
          <td class="px-3 py-2 text-gray-600">${row.no}</td>
          <td class="px-3 py-2 whitespace-nowrap">${row.barcode}</td>
          <td class="px-3 py-2 whitespace-nowrap">${row.isbn}</td>
          <td class="px-3 py-2">${row.title}</td>
          <td class="px-3 py-2">${row.author}</td>
          <td class="px-3 py-2 whitespace-nowrap">${row.price}</td>
          <td class="px-3 py-2">${row.currency}</td>
          <td class="px-3 py-2 whitespace-nowrap">${this.formatVolumeAmount(row.setNetPrice)}</td>
          <td class="px-3 py-2 whitespace-nowrap">${this.formatVolumeAmount(row.unitListPrice)}</td>
          <td class="px-3 py-2 text-center">${row.volumesInSet}</td>
          <td class="px-3 py-2">${row.receiver}</td>
          <td class="px-3 py-2 whitespace-nowrap">${row.receiveTime}</td>
        </tr>`).join('');
      }
    }

    if (totalEl) totalEl.textContent = `共 ${this.filteredVolumeRows.length} 条`;
  },

  /**
   * 执行按册检索过滤
   */
  applyVolumeFilter() {
    const form = document.getElementById('acceptance-volume-search-form');
    if (!form) return;

    const field = form.elements.searchField?.value || '';
    const keyword = (form.elements.keyword?.value || '').trim().toLowerCase();
    const receiver = (form.elements.receiver?.value || '').trim().toLowerCase();

    this.filteredVolumeRows = this.volumeRows.filter(row => {
      if (keyword) {
        const valueMap = this.mode === 'av' ? {
          barcode: row.barcode,
          isbn: row.isbn,
          title: row.title,
          author: row.author,
          productBarcode: row.productBarcode,
          catalogNo: row.catalogNo,
          carrier: row.carrier,
          discNo: row.discNo
        } : {
          barcode: row.barcode,
          isbn: row.isbn,
          title: row.title
        };
        const target = (valueMap[field] || '').toLowerCase();
        if (!target.includes(keyword)) return false;
      }
      if (receiver && !(row.receiver || '').toLowerCase().includes(receiver)) {
        return false;
      }
      return true;
    });

    this.renderVolumeTable();
  },

  /**
   * 跳转至按种详情页
   */
  navigateToSpecies() {
    const config = this.getConfig();
    const speciesPage = config.speciesPage;
    if (!speciesPage) return;

    this.saveContext({
      acceptance: this.acceptance,
      detailRows: this.allRows.length ? this.allRows : undefined,
      volumeRows: this.volumeRows,
      viewMode: 'species'
    });

    const title = this.acceptance?.id ? `验收详情 - ${this.acceptance.id}` : '验收详情';
    const tabMgr = this.getTabManager();
    if (tabMgr) {
      tabMgr.openTab(speciesPage, title, { reload: true });
      return;
    }
    location.href = speciesPage;
  },

  /**
   * 关闭导出下拉菜单（兼容旧调用）
   */
  closeVolumeExportMenu() {
    this.closeExportMenu();
  },

  /**
   * 导出收货明细（按当前筛选结果）
   */
  exportVolumeDetails() {
    this.closeExportMenu();
    const count = this.filteredVolumeRows.length;
    if (!count) {
      alert('暂无可导出的收货明细');
      return;
    }
    const acceptanceId = this.acceptance?.id || '验收单';
    const timestamp = new Date().toISOString().replace(/[-:T]/g, '').slice(0, 14);
    const filename = `${acceptanceId}_收货明细_${timestamp}.xlsx`;
    console.log('[AcceptanceDetail] 导出收货明细', { filename, count, rows: this.filteredVolumeRows });
    alert(`已按配置导出 ${count} 条收货明细\n文件名：${filename}`);
  },

  /**
   * 打开收货明细导出配置弹窗
   */
  openVolumeExportConfig() {
    this.closeExportMenu();
    document.getElementById('acceptance-volume-export-config-modal')?.classList.remove('hidden');
  },

  /**
   * 绑定导出配置弹窗全选逻辑
   * @param {{ selectAllId: string, fieldClass: string, modalId: string, saveId: string, logLabel?: string }} options - 弹窗配置
   */
  bindExportConfigModal(options) {
    const selectAll = document.getElementById(options.selectAllId);
    const fields = document.querySelectorAll(`.${options.fieldClass}`);
    if (!selectAll || !fields.length) return;

    selectAll.addEventListener('change', () => {
      fields.forEach(field => { field.checked = selectAll.checked; });
      selectAll.indeterminate = false;
    });

    fields.forEach(field => {
      field.addEventListener('change', () => {
        const checkedCount = document.querySelectorAll(`.${options.fieldClass}:checked`).length;
        selectAll.checked = checkedCount === fields.length;
        selectAll.indeterminate = checkedCount > 0 && checkedCount < fields.length;
      });
    });

    document.getElementById(options.saveId)?.addEventListener('click', () => {
      const selected = Array.from(document.querySelectorAll(`.${options.fieldClass}:checked`))
        .map(el => el.closest('label')?.textContent?.trim())
        .filter(Boolean);
      console.log(`[AcceptanceDetail] 保存${options.logLabel || '导出配置'}`, selected);
      document.getElementById(options.modalId)?.classList.add('hidden');
    });
  },

  /**
   * 绑定按册导出配置弹窗全选逻辑
   */
  bindVolumeExportConfigModal() {
    this.bindExportConfigModal({
      selectAllId: 'acceptance-volume-export-select-all',
      fieldClass: 'acceptance-volume-export-field',
      modalId: 'acceptance-volume-export-config-modal',
      saveId: 'acceptance-volume-export-config-save',
      logLabel: '收货明细导出配置'
    });
  },

  /**
   * 绑定按册页面事件
   */
  bindVolumeEvents() {
    this.bindBreadcrumbNavigation();

    document.getElementById('acceptance-volume-search-form')?.addEventListener('submit', e => {
      e.preventDefault();
      this.applyVolumeFilter();
    });

    document.getElementById('acceptance-volume-search-reset')?.addEventListener('click', () => {
      const form = document.getElementById('acceptance-volume-search-form');
      if (form) form.reset();
      this.filteredVolumeRows = [...this.volumeRows];
      this.renderVolumeTable();
    });

    document.getElementById('acceptance-detail-tab-species')?.addEventListener('click', () => {
      this.navigateToSpecies();
    });

    document.getElementById('acceptance-volume-export-detail')?.addEventListener('click', () => {
      this.exportVolumeDetails();
    });

    document.getElementById('acceptance-volume-export-config')?.addEventListener('click', () => {
      this.openVolumeExportConfig();
    });

    this.bindVolumeExportConfigModal();
  }
};
