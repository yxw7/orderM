/**
 * 订单行详情页公共逻辑（含管理驾驶舱与全链路明细）
 */
const OrderLineDetail = {
  STORAGE_KEY: 'orderLineDetailContext',

  /** @type {string} */
  activeTab: 'lifecycle',

  /** Tab 配置 */
  TABS: [
    { id: 'lifecycle', label: '全链路明细' },
    { id: 'acceptance', label: '验收记录' },
    { id: 'items', label: '单件明细' },
    { id: 'settlement', label: '结算记录' },
    { id: 'related', label: '相关订单行' }
  ],

  /**
   * 读取订单行详情上下文
   * @returns {Object|null}
   */
  loadContext() {
    try {
      const raw = sessionStorage.getItem(this.STORAGE_KEY);
      const ctx = raw ? JSON.parse(raw) : null;
      if (ctx?.row?.orderLineNo) return ctx;
      return this.getDemoContext();
    } catch (error) {
      console.warn('orderLineDetailContext 解析失败', error);
      return this.getDemoContext();
    }
  },

  /**
   * 无上下文时的演示数据（便于直接打开详情页预览）
   * @returns {Object}
   */
  getDemoContext() {
    return {
      row: {
        orderId: 'PG001B202406030001',
        site: '华威桥馆',
        orderLineNo: 'PG001B202406030001-2',
        bibRecordNo: 'bjlib9001202406135002',
        title: '图书馆学概论',
        resourceId: '9787501345678',
        carrier: 'AP',
        author: '吴慰慈著',
        publisher: '国家图书馆出版社',
        publishTime: '2023-06',
        volumeNo: '—',
        volumeName: '—',
        price: '68.00',
        currency: 'CNY',
        copiesInSet: 1,
        sets: 1,
        lineStatus: '处理中',
        acceptanceStatus: '部分收货',
        settlementStatus: '待申请',
        isShortage: '是',
        flowStats: '1/1/0/0/0',
        issueTime: '2026-05-29 10:54:51',
        textLanguage: '中文',
        subTitle: '',
        series: '',
        classNo: 'G250',
        edition: '第5版',
        binding: '平装',
        size: '23 cm',
        subject: '图书馆学',
        audience: '图书馆学专业师生',
        note: '',
        summary: '本书系统介绍图书馆学的基本理论与方法。'
      },
      order: {
        subscriber: 'ceshi',
        method: '现采',
        supplier: '湖南长沙',
        budget: '2024年首都图书馆图书购置费中文普通图书(一)',
        discount: '0.80',
        issuer: '杨现规',
        issueTime: '2024-06-03 10:12:18'
      },
      subscriber: 'ceshi',
      resourceType: '纸质书',
      relatedLines: []
    };
  },

  /**
   * 解析发/收/换/退/撤订套数
   * @param {string} [flowStats] - 形如 3/2/0/0/0
   * @returns {{ issued: number, received: number, exchanged: number, returned: number, cancelled: number }}
   */
  parseFlowStats(flowStats) {
    const parts = (flowStats || '0/0/0/0/0').split('/').map(v => parseInt(v, 10) || 0);
    return {
      issued: parts[0] || 0,
      received: parts[1] || 0,
      exchanged: parts[2] || 0,
      returned: parts[3] || 0,
      cancelled: parts[4] || 0
    };
  },

  /**
   * 解析金额为数字
   * @param {string|number} [value] - 金额
   * @returns {number}
   */
  parseAmount(value) {
    const num = parseFloat(String(value || '0').replace(/[^\d.-]/g, ''));
    return Number.isFinite(num) ? num : 0;
  },

  /**
   * 格式化金额展示
   * @param {number} amount - 金额
   * @param {string} [currency] - 币种
   * @returns {string}
   */
  formatAmount(amount, currency) {
    const prefix = currency === 'CNY' || !currency ? '¥' : '';
    return `${prefix}${amount.toFixed(2)}${currency && currency !== 'CNY' ? ` ${currency}` : ''}`;
  },

  /**
   * 计算发订至今天数
   * @param {string} [issueTime] - 发订时间
   * @returns {number|null}
   */
  daysSinceIssue(issueTime) {
    if (!issueTime) return null;
    const issued = new Date(issueTime.replace(/-/g, '/'));
    if (Number.isNaN(issued.getTime())) return null;
    return Math.floor((Date.now() - issued.getTime()) / (1000 * 60 * 60 * 24));
  },

  /**
   * 获取全链路四阶段进度
   * @param {Object} row - 订单行
   * @returns {Array<{ key: string, label: string, status: 'done'|'active'|'pending'|'warn', summary: string }>}
   */
  getPipelineStages(row) {
    const flow = this.parseFlowStats(row.flowStats);
    const issued = flow.issued || row.sets || 0;
    const expectedReceive = Math.max(issued - flow.cancelled, 0);

    const issueDone = row.lineStatus !== '待发订';
    const receiveDone = row.acceptanceStatus === '收货完成';
    const receivePartial = ['部分收货', '换货中'].includes(row.acceptanceStatus)
      || (flow.received > 0 && flow.received < expectedReceive);
    const itemCount = flow.received * (row.copiesInSet || 1);
    const settleDone = row.settlementStatus === '已结算';

    return [
      {
        key: 'issue',
        label: '发订',
        status: issueDone ? 'done' : (row.lineStatus === '待发订' ? 'pending' : 'active'),
        summary: issueDone
          ? `${row.lineStatus} · ${issued} 套`
          : '待发订'
      },
      {
        key: 'acceptance',
        label: '验收',
        status: receiveDone ? 'done' : (receivePartial || row.acceptanceStatus ? 'active' : 'pending'),
        summary: row.acceptanceStatus
          ? `${row.acceptanceStatus} · 收 ${flow.received}/${expectedReceive || issued} 套`
          : '未开始'
      },
      {
        key: 'items',
        label: '单件入库',
        status: itemCount > 0 ? (receiveDone ? 'done' : 'active') : 'pending',
        summary: itemCount > 0 ? `已生成 ${itemCount} 件` : '待收货后生成'
      },
      {
        key: 'settlement',
        label: '结算',
        status: settleDone ? 'done' : (row.settlementStatus === '待结算' ? 'active' : 'pending'),
        summary: row.settlementStatus || '—'
      }
    ];
  },

  /**
   * 检测管理异常提示
   * @param {Object} row - 订单行
   * @param {Object} [order] - 订单
   * @returns {Array<{ type: string, message: string, link?: string, linkLabel?: string }>}
   */
  detectAlerts(row, order) {
    const alerts = [];
    const flow = this.parseFlowStats(row.flowStats);
    const issued = flow.issued || row.sets || 0;
    const expectedReceive = Math.max(issued - flow.cancelled, 0);
    const days = this.daysSinceIssue(row.issueTime || order?.issueTime);

    if (row.isShortage === '是') {
      alerts.push({
        type: 'shortage',
        message: '已提交催缺，请关注供应商回告',
        link: '02_06_催缺管理.html',
        linkLabel: '查看催缺'
      });
    }

    if (row.lineStatus === '已发订' && row.acceptanceStatus === '待验收' && days !== null && days >= 7) {
      alerts.push({
        type: 'overdue',
        message: `已发订 ${days} 天，仍未收货`,
        link: '02_01_验收单管理.html',
        linkLabel: '查看验收'
      });
    }

    if (expectedReceive > 0 && flow.received < expectedReceive && row.acceptanceStatus !== '待验收') {
      alerts.push({
        type: 'incomplete',
        message: `收货不完整：发 ${issued} 套，已收 ${flow.received} 套，缺 ${expectedReceive - flow.received} 套`
      });
    }

    if (row.acceptanceStatus === '换货中') {
      alerts.push({
        type: 'exchange',
        message: '换货进行中，请关注换货处理进度',
        link: '02_04_换货管理.html',
        linkLabel: '查看换货'
      });
    }

    if (row.acceptanceStatus === '收货完成' && row.settlementStatus !== '已结算') {
      alerts.push({
        type: 'settlement',
        message: `收货已完成，结算状态为「${row.settlementStatus || '待申请'}」`,
        link: '03_02_已结算.html',
        linkLabel: '查看结算'
      });
    }

    if (row.acceptanceStatus === '部分收货') {
      alerts.push({
        type: 'partial',
        message: '部分收货，请跟进剩余套数验收'
      });
    }

    return alerts;
  },

  /**
   * 构建全链路事件时间轴（静态推导，对接 API 前使用）
   * @param {Object} row - 订单行
   * @param {Object} [order] - 订单
   * @returns {Object[]}
   */
  buildLifecycleEvents(row, order) {
    const events = [];
    const flow = this.parseFlowStats(row.flowStats);
    const operator = order?.issuer || '—';
    const issueTime = row.issueTime || order?.issueTime;

    if (row.lineStatus !== '待发订' && issueTime) {
      events.push({
        time: issueTime,
        stage: '发订',
        event: '订单发订',
        operator,
        quantity: `${flow.issued || row.sets || 0} 套`,
        remark: row.orderId ? `订单号 ${row.orderId}` : '',
        abnormal: false
      });
    }

    if (flow.received > 0) {
      events.push({
        time: this.offsetTime(issueTime, 3),
        stage: '验收',
        event: `收货 ${flow.received} 套`,
        operator: '杨晓购',
        quantity: `+${flow.received} 套`,
        remark: '验收单 ysPG00120260602001',
        abnormal: false,
        link: '02_01_02_验收详情按种_纸质书.html',
        linkLabel: '验收详情'
      });
    }

    if (flow.exchanged > 0 || row.acceptanceStatus === '换货中') {
      events.push({
        time: this.offsetTime(issueTime, 5),
        stage: '换货',
        event: flow.exchanged > 0 ? `换货 ${flow.exchanged} 套` : '发起换货',
        operator: '王二小',
        quantity: flow.exchanged > 0 ? `${flow.exchanged} 套` : '处理中',
        remark: '残缺损',
        abnormal: true,
        link: '02_04_换货管理.html',
        linkLabel: '换货管理'
      });
    }

    if (flow.returned > 0) {
      events.push({
        time: this.offsetTime(issueTime, 6),
        stage: '退货',
        event: `退货 ${flow.returned} 套`,
        operator: '赵付',
        quantity: `-${flow.returned} 套`,
        remark: '损坏退货',
        abnormal: true,
        link: '02_05_退货管理.html',
        linkLabel: '退货管理'
      });
    }

    if (flow.cancelled > 0) {
      events.push({
        time: this.offsetTime(issueTime, 2),
        stage: '撤订',
        event: `撤订 ${flow.cancelled} 套`,
        operator,
        quantity: `-${flow.cancelled} 套`,
        remark: '催缺撤订',
        abnormal: true
      });
    }

    if (row.isShortage === '是') {
      events.push({
        time: this.offsetTime(issueTime, 8),
        stage: '催缺',
        event: '提交催缺',
        operator,
        quantity: '—',
        remark: '供应商缺货',
        abnormal: true,
        link: '02_06_催缺管理.html',
        linkLabel: '催缺详情'
      });
    }

    if (row.settlementStatus === '已结算') {
      events.push({
        time: this.offsetTime(issueTime, 10),
        stage: '结算',
        event: '纳入结算单',
        operator: '杨现规',
        quantity: this.formatAmount(this.parseAmount(row.price) * flow.received, row.currency),
        remark: '结算单 jsPG09120260602001',
        abnormal: false,
        link: '03_02_01_结算详情.html',
        linkLabel: '结算详情'
      });
    } else if (row.settlementStatus === '待结算') {
      events.push({
        time: this.offsetTime(issueTime, 9),
        stage: '结算',
        event: '提交结算申请',
        operator: '系统',
        quantity: '—',
        remark: '待财务确认',
        abnormal: false
      });
    }

    return events.sort((a, b) => (b.time || '').localeCompare(a.time || ''));
  },

  /**
   * 在时间字符串上偏移天数（演示用）
   * @param {string} [timeStr] - 原始时间
   * @param {number} dayOffset - 天数偏移
   * @returns {string}
   */
  offsetTime(timeStr, dayOffset) {
    if (!timeStr) return '—';
    const date = new Date(timeStr.replace(/-/g, '/'));
    if (Number.isNaN(date.getTime())) return timeStr;
    date.setDate(date.getDate() + dayOffset);
    const pad = (n) => String(n).padStart(2, '0');
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
  },

  /**
   * 渲染状态标签
   * @param {string} label - 标签名
   * @param {string} value - 状态值
   * @returns {string}
   */
  renderStatusChip(label, value) {
    const colorMap = {
      '待发订': 'bg-amber-50 text-amber-700 border-amber-200',
      '已发订': 'bg-green-50 text-green-700 border-green-200',
      '处理中': 'bg-blue-50 text-blue-700 border-blue-200',
      '已关闭': 'bg-gray-50 text-gray-600 border-gray-200',
      '已撤订': 'bg-gray-50 text-gray-500 border-gray-200',
      '待验收': 'bg-orange-50 text-orange-700 border-orange-200',
      '部分收货': 'bg-orange-50 text-orange-700 border-orange-200',
      '收货完成': 'bg-green-50 text-green-700 border-green-200',
      '换货中': 'bg-purple-50 text-purple-700 border-purple-200',
      '已退货': 'bg-red-50 text-red-700 border-red-200',
      '待申请': 'bg-gray-50 text-gray-600 border-gray-200',
      '待结算': 'bg-blue-50 text-blue-700 border-blue-200',
      '已结算': 'bg-green-50 text-green-700 border-green-200'
    };
    const cls = colorMap[value] || 'bg-gray-50 text-gray-600 border-gray-200';
    return `
      <span class="inline-flex items-center gap-1.5 text-xs">
        <span class="text-gray-500">${label}</span>
        <span class="px-2 py-0.5 rounded border ${cls}">${value || '—'}</span>
      </span>`;
  },

  /**
   * 渲染进度条阶段节点
   * @param {Array} stages - 阶段列表
   * @returns {string}
   */
  renderPipeline(stages) {
    const nodeCls = {
      done: 'bg-green-500 border-green-500 text-white',
      active: 'bg-sky-500 border-sky-500 text-white',
      warn: 'bg-orange-500 border-orange-500 text-white',
      pending: 'bg-white border-gray-300 text-gray-400'
    };
    const lineCls = {
      done: 'bg-green-400',
      active: 'bg-sky-300',
      warn: 'bg-orange-300',
      pending: 'bg-gray-200'
    };

    return `
      <div class="flex items-start justify-between gap-2">
        ${stages.map((stage, index) => {
          const isLast = index === stages.length - 1;
          const icon = stage.status === 'done' ? '✓' : String(index + 1);
          return `
            <div class="flex-1 min-w-0 ${isLast ? '' : 'relative'}">
              <div class="flex items-center">
                <div class="w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-medium shrink-0 ${nodeCls[stage.status] || nodeCls.pending}">${icon}</div>
                ${isLast ? '' : `<div class="flex-1 h-0.5 mx-2 ${lineCls[stage.status] || lineCls.pending}"></div>`}
              </div>
              <p class="mt-2 text-sm font-medium text-gray-800">${stage.label}</p>
              <p class="mt-0.5 text-xs text-gray-500 leading-5">${stage.summary}</p>
            </div>`;
        }).join('')}
      </div>`;
  },

  /**
   * 渲染管理驾驶舱
   * @param {Object} ctx - 详情上下文
   */
  renderCockpit(ctx) {
    const cockpitEl = document.getElementById('order-line-cockpit');
    if (!cockpitEl) return;

    const row = ctx?.row || {};
    const order = ctx?.order || {};
    const flow = this.parseFlowStats(row.flowStats);
    const unitPrice = this.parseAmount(row.price);
    const discount = this.parseAmount(order.discount) || 1;
    const issuedAmount = unitPrice * (flow.issued || row.sets || 0);
    const receivedAmount = unitPrice * flow.received;
    const settledAmount = row.settlementStatus === '已结算' ? receivedAmount * discount : 0;
    const stages = this.getPipelineStages(row);

    cockpitEl.innerHTML = `
      <div class="flex flex-col xl:flex-row gap-6">
        <div class="flex-1 min-w-0">
          <div class="flex flex-wrap items-start justify-between gap-3 mb-4">
            <div class="min-w-0">
              <p class="text-xs text-gray-500 mb-1">订单行号</p>
              <h2 class="text-lg font-bold text-gray-900 truncate">${row.orderLineNo || '—'}</h2>
              <p class="text-sm text-gray-700 mt-1 truncate" title="${row.title || ''}">${row.title || '—'}</p>
              <p class="text-xs text-gray-500 mt-1">
                ${row.resourceId || '—'} · ${row.author || '—'} · ${row.publisher || '—'}
              </p>
            </div>
            <div class="flex flex-wrap gap-2">
              ${this.renderStatusChip('行状态', row.lineStatus)}
              ${this.renderStatusChip('验收', row.acceptanceStatus || '—')}
              ${this.renderStatusChip('结算', row.settlementStatus || '—')}
            </div>
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm mb-5">
            <div><span class="text-gray-500">书目记录号：</span><span class="text-gray-800">${row.bibRecordNo || '—'}</span></div>
            <div><span class="text-gray-500">馆址：</span><span class="text-gray-800">${row.site || '—'}</span></div>
            <div class="sm:col-span-2"><span class="text-gray-500">供应商：</span><span class="text-gray-800">${order.supplier || '—'}</span></div>
            <div class="sm:col-span-2"><span class="text-gray-500">预算：</span><span class="text-gray-800">${order.budget || '—'}</span></div>
            <div><span class="text-gray-500">发订人：</span><span class="text-gray-800">${order.issuer || '—'}</span></div>
            <div><span class="text-gray-500">发订时间：</span><span class="text-gray-800">${row.issueTime || order.issueTime || '—'}</span></div>
          </div>
          <div class="pt-4 border-t border-gray-100">
            ${this.renderPipeline(stages)}
          </div>
        </div>
        <div class="xl:w-72 shrink-0 space-y-3">
          <div class="rounded-lg border border-gray-200 p-4 bg-gray-50">
            <p class="text-xs font-medium text-gray-500 mb-3">套数进度（发/收/换/退/撤订）</p>
            <div class="grid grid-cols-5 gap-1 text-center">
              ${[
                { label: '发订', value: flow.issued },
                { label: '已收', value: flow.received },
                { label: '换货', value: flow.exchanged },
                { label: '退货', value: flow.returned },
                { label: '撤订', value: flow.cancelled }
              ].map(item => `
                <div>
                  <p class="text-lg font-semibold ${item.label === '已收' && flow.received < flow.issued ? 'text-orange-600' : 'text-gray-900'}">${item.value}</p>
                  <p class="text-xs text-gray-500 mt-0.5">${item.label}</p>
                </div>`).join('')}
            </div>
          </div>
          <div class="rounded-lg border border-gray-200 p-4">
            <p class="text-xs font-medium text-gray-500 mb-3">金额概览</p>
            <div class="space-y-2 text-sm">
              <div class="flex justify-between"><span class="text-gray-500">发订码洋</span><span class="text-gray-800">${this.formatAmount(issuedAmount, row.currency)}</span></div>
              <div class="flex justify-between"><span class="text-gray-500">已收码洋</span><span class="text-gray-800">${this.formatAmount(receivedAmount, row.currency)}</span></div>
              <div class="flex justify-between border-t border-gray-100 pt-2">
                <span class="text-gray-500">已结算实洋</span>
                <span class="font-medium ${row.settlementStatus === '已结算' ? 'text-green-600' : 'text-orange-600'}">${this.formatAmount(settledAmount, row.currency)}</span>
              </div>
              ${flow.received < flow.issued ? `
                <p class="text-xs text-orange-600 pt-1">未收 ${flow.issued - flow.received} 套 · ${this.formatAmount(unitPrice * (flow.issued - flow.received), row.currency)}</p>` : ''}
            </div>
          </div>
        </div>
      </div>`;
  },

  /**
   * 渲染异常提示条
   * @param {Object} ctx - 详情上下文
   */
  renderAlerts(ctx) {
    const alertsEl = document.getElementById('order-line-alerts');
    if (!alertsEl) return;

    const alerts = this.detectAlerts(ctx?.row || {}, ctx?.order);
    if (!alerts.length) {
      alertsEl.classList.add('hidden');
      alertsEl.innerHTML = '';
      return;
    }

    alertsEl.classList.remove('hidden');
    alertsEl.innerHTML = alerts.map(alert => `
      <div class="flex items-center justify-between gap-3 px-4 py-2.5 rounded border border-orange-200 bg-orange-50 text-sm">
        <div class="flex items-center gap-2 text-orange-800">
          <svg class="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
          </svg>
          <span>${alert.message}</span>
        </div>
        ${alert.link ? `<a href="${alert.link}" class="text-sky-600 hover:underline whitespace-nowrap shrink-0">${alert.linkLabel || '查看'}</a>` : ''}
      </div>`).join('');
  },

  /**
   * 渲染全链路明细 Tab
   * @param {Object} ctx - 详情上下文
   */
  renderLifecycleTab(ctx) {
    const el = document.getElementById('order-line-tab-lifecycle');
    if (!el) return;

    const events = this.buildLifecycleEvents(ctx?.row || {}, ctx?.order);
    if (!events.length) {
      el.innerHTML = '<p class="text-sm text-gray-400 text-center py-10">暂无全链路记录</p>';
      return;
    }

    el.innerHTML = `
      <div class="overflow-x-auto table-scroll">
        <table class="w-full text-sm">
          <thead class="bg-gray-50 border-b border-gray-200">
            <tr>
              <th class="px-3 py-2.5 text-left text-gray-600 font-medium whitespace-nowrap w-4"></th>
              <th class="px-3 py-2.5 text-left text-gray-600 font-medium whitespace-nowrap">时间</th>
              <th class="px-3 py-2.5 text-left text-gray-600 font-medium whitespace-nowrap">环节</th>
              <th class="px-3 py-2.5 text-left text-gray-600 font-medium whitespace-nowrap">事件</th>
              <th class="px-3 py-2.5 text-left text-gray-600 font-medium whitespace-nowrap">操作人</th>
              <th class="px-3 py-2.5 text-left text-gray-600 font-medium whitespace-nowrap">数量/金额</th>
              <th class="px-3 py-2.5 text-left text-gray-600 font-medium whitespace-nowrap min-w-[160px]">备注</th>
              <th class="px-3 py-2.5 text-left text-gray-600 font-medium whitespace-nowrap">操作</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100">
            ${events.map(evt => `
              <tr class="hover:bg-gray-50 ${evt.abnormal ? 'bg-orange-50/40' : ''}">
                <td class="px-3 py-2.5">
                  ${evt.abnormal ? '<span class="inline-block w-2 h-2 rounded-full bg-orange-500" title="异常节点"></span>' : ''}
                </td>
                <td class="px-3 py-2.5 whitespace-nowrap text-gray-600">${evt.time || '—'}</td>
                <td class="px-3 py-2.5 whitespace-nowrap text-gray-800">${evt.stage}</td>
                <td class="px-3 py-2.5 text-gray-800">${evt.event}</td>
                <td class="px-3 py-2.5 text-gray-600">${evt.operator || '—'}</td>
                <td class="px-3 py-2.5 whitespace-nowrap text-gray-800">${evt.quantity || '—'}</td>
                <td class="px-3 py-2.5 text-gray-500 max-w-[200px] truncate" title="${evt.remark || ''}">${evt.remark || '—'}</td>
                <td class="px-3 py-2.5 whitespace-nowrap">
                  ${evt.link ? `<a href="${evt.link}" class="text-sky-600 hover:underline">${evt.linkLabel || '查看'}</a>` : '—'}
                </td>
              </tr>`).join('')}
          </tbody>
        </table>
      </div>
      <p class="text-xs text-gray-400 mt-3">按时间倒序展示；异常节点以橙色标记。</p>`;
  },

  /**
   * 渲染占位 Tab（待后续迭代）
   * @param {string} tabId - Tab 标识
   * @param {string} title - 模块名称
   * @param {string} description - 说明
   */
  renderPlaceholderTab(tabId, title, description) {
    const el = document.getElementById(`order-line-tab-${tabId}`);
    if (!el) return;
    el.innerHTML = `
      <div class="text-center py-12">
        <p class="text-sm font-medium text-gray-700 mb-1">${title}</p>
        <p class="text-sm text-gray-400">${description}</p>
      </div>`;
  },

  /**
   * 渲染相关订单行 Tab
   * @param {Object[]} relatedLines - 相关订单行
   */
  renderRelatedTab(relatedLines) {
    const el = document.getElementById('order-line-tab-related');
    if (!el) return;

    const lines = relatedLines || [];
    el.innerHTML = `
      <div class="overflow-x-auto table-scroll">
        <table class="w-full text-sm">
          <thead class="bg-gray-50 border-b border-gray-200">
            <tr>
              <th class="px-3 py-2.5 text-left text-gray-600 font-medium whitespace-nowrap w-14">序号</th>
              <th class="px-3 py-2.5 text-left text-gray-600 font-medium whitespace-nowrap">订户</th>
              <th class="px-3 py-2.5 text-left text-gray-600 font-medium whitespace-nowrap">订单行号</th>
              <th class="px-3 py-2.5 text-left text-gray-600 font-medium whitespace-nowrap">采选方式</th>
              <th class="px-3 py-2.5 text-left text-gray-600 font-medium whitespace-nowrap">预算名称</th>
              <th class="px-3 py-2.5 text-left text-gray-600 font-medium whitespace-nowrap">供应商</th>
              <th class="px-3 py-2.5 text-left text-gray-600 font-medium whitespace-nowrap">折扣</th>
              <th class="px-3 py-2.5 text-left text-gray-600 font-medium whitespace-nowrap">发订人</th>
              <th class="px-3 py-2.5 text-left text-gray-600 font-medium whitespace-nowrap">发订时间</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100">
            ${lines.length ? lines.map(line => `
              <tr class="hover:bg-gray-50">
                <td class="px-3 py-2 text-gray-600">${line.no}</td>
                <td class="px-3 py-2 text-gray-600">${line.subscriber || '—'}</td>
                <td class="px-3 py-2 whitespace-nowrap text-gray-600">${line.orderLineNo || '—'}</td>
                <td class="px-3 py-2 text-gray-600">${line.method || '—'}</td>
                <td class="px-3 py-2 max-w-[180px] truncate" title="${line.budget || ''}">${line.budget || '—'}</td>
                <td class="px-3 py-2 text-gray-600">${line.supplier || '—'}</td>
                <td class="px-3 py-2 text-gray-600">${line.discount || '—'}</td>
                <td class="px-3 py-2 text-gray-600">${line.orderer || '—'}</td>
                <td class="px-3 py-2 whitespace-nowrap text-gray-600">${line.issueTime || '—'}</td>
              </tr>`).join('') : `<tr><td colspan="9" class="px-3 py-8 text-center text-gray-400">暂无相关订单行</td></tr>`}
          </tbody>
        </table>
      </div>
      <p class="text-sm text-gray-500 mt-3">共 ${lines.length} 条记录</p>`;
  },

  /**
   * 渲染 Tab 导航
   */
  renderTabs() {
    const tabsEl = document.getElementById('order-line-detail-tabs');
    if (!tabsEl) return;

    tabsEl.innerHTML = this.TABS.map(tab => `
      <button type="button"
        class="order-line-tab-btn px-4 py-2 text-sm rounded-t border-b-2 -mb-px transition-colors
          ${tab.id === this.activeTab
            ? 'border-sky-600 text-sky-600 font-medium bg-white'
            : 'border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50'}"
        data-tab="${tab.id}">${tab.label}</button>`).join('');

    tabsEl.querySelectorAll('.order-line-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.switchTab(btn.dataset.tab);
      });
    });
  },

  /**
   * 切换 Tab
   * @param {string} tabId - Tab 标识
   */
  switchTab(tabId) {
    this.activeTab = tabId;
    this.TABS.forEach(tab => {
      const panel = document.getElementById(`order-line-tab-${tab.id}`);
      if (panel) panel.classList.toggle('hidden', tab.id !== tabId);
    });
    document.querySelectorAll('.order-line-tab-btn').forEach(btn => {
      const isActive = btn.dataset.tab === tabId;
      btn.classList.toggle('border-sky-600', isActive);
      btn.classList.toggle('text-sky-600', isActive);
      btn.classList.toggle('font-medium', isActive);
      btn.classList.toggle('bg-white', isActive);
      btn.classList.toggle('border-transparent', !isActive);
      btn.classList.toggle('text-gray-600', !isActive);
    });
  },

  /**
   * 绑定书目信息展开/收起
   */
  bindBibToggle() {
    const panel = document.getElementById('order-line-bib-panel');
    const toggleBtn = document.getElementById('order-line-bib-toggle');
    const toggleText = document.getElementById('order-line-bib-toggle-text');
    if (!panel || !toggleBtn) return;

    let expanded = false;
    toggleBtn.addEventListener('click', () => {
      expanded = !expanded;
      panel.classList.toggle('hidden', !expanded);
      if (toggleText) toggleText.textContent = expanded ? '收起' : '展开';
    });
  },

  /**
   * 渲染书目信息字段
   * @param {string} label - 字段名
   * @param {string} [value] - 字段值
   * @param {{ colSpan?: number, actionHtml?: string, inline?: boolean }} [options] - 渲染选项
   * @returns {string}
   */
  renderField(label, value, options = {}) {
    const display = value || '';
    const colSpanClass = options.colSpan === 3 ? 'col-span-3' : '';
    const actionHtml = options.actionHtml || '';
    return `
      <div class="text-sm leading-7 ${colSpanClass}">
        <span class="font-semibold text-gray-800">${label}：</span>
        <span class="text-gray-600">${display}</span>${actionHtml}
      </div>`;
  },

  /**
   * 渲染通栏书目信息字段（附注、图书简介等）
   * @param {string} label - 字段名
   * @param {string} [value] - 字段值
   * @param {{ actionHtml?: string }} [options] - 渲染选项
   * @returns {string}
   */
  renderFullWidthField(label, value, options = {}) {
    const display = value || '';
    const actionHtml = options.actionHtml || '';
    return `
      <div class="text-sm leading-7">
        <span class="font-semibold text-gray-800">${label}：</span>
        <span class="text-gray-600 leading-relaxed">${display}</span>${actionHtml}
      </div>`;
  },

  /**
   * 判断是否为中文纸质书
   * @param {Object} row - 订单行数据
   * @returns {boolean}
   */
  isChineseBook(row) {
    const lang = (row.textLanguage || '中文').toLowerCase();
    return lang === '中文' || lang === 'chi' || lang === 'zho' || lang === '汉语';
  },

  /**
   * 渲染封面占位区
   * @param {string} resourceType - 资源类型
   */
  renderCover(resourceType) {
    const coverEl = document.getElementById('order-line-detail-cover');
    const typeEl = document.getElementById('order-line-detail-resource-type');
    if (typeEl) typeEl.textContent = `资源类型：${resourceType || '—'}`;

    if (coverEl) {
      coverEl.innerHTML = `
        <div class="w-[110px] h-[148px] border border-gray-200 rounded overflow-hidden bg-gradient-to-br from-green-50 via-emerald-50 to-teal-100 flex items-center justify-center">
          <svg class="w-16 h-16 text-emerald-300/70" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z"/>
            <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z"/>
          </svg>
        </div>`;
    }
  },

  /**
   * 绑定外文纸质书扩展字段展开/收起
   */
  bindBookExtraToggle() {
    const extraEl = document.getElementById('order-line-detail-extra');
    const toggleBtn = document.getElementById('order-line-detail-extra-toggle');
    if (!extraEl || !toggleBtn) return;

    let expanded = true;
    toggleBtn.addEventListener('click', () => {
      expanded = !expanded;
      extraEl.classList.toggle('hidden', !expanded);
      toggleBtn.textContent = expanded ? '收起' : '展开';
    });
  },

  /**
   * 获取视听资料 ISBN 展示值
   * @param {Object} row - 订单行数据
   * @returns {string}
   */
  getAudiovisualIsbn(row) {
    const resourceId = row.resourceId || '';
    return /^978\d{10}$/.test(resourceId) ? resourceId : '';
  },

  /**
   * 渲染视听资料书目信息字段
   * @param {Object} row - 订单行数据
   */
  renderAudiovisualFields(row) {
    const fieldsEl = document.getElementById('order-line-detail-fields');
    if (!fieldsEl) return;

    fieldsEl.innerHTML = [
      this.renderField('ISBN', this.getAudiovisualIsbn(row)),
      this.renderField('商品条码', row.productBarcode),
      this.renderField('载体', row.carrier),
      this.renderField('目录号', row.catalogNo),
      this.renderField('版本/格式', row.versionFormat),
      this.renderField('出版社', row.publisher),
      this.renderField('作者', row.author),
      this.renderField('定价', row.price),
      this.renderField('币种', row.currency)
    ].join('');
  },

  /**
   * 渲染纸质书书目信息字段
   * @param {Object} row - 订单行数据
   * @param {boolean} isChinese - 是否为中文文献
   */
  renderBookFields(row, isChinese) {
    const fieldsEl = document.getElementById('order-line-detail-fields');
    const fullFieldsEl = document.getElementById('order-line-detail-full-fields');
    const extraEl = document.getElementById('order-line-detail-extra');
    if (!fieldsEl) return;

    fieldsEl.innerHTML = [
      this.renderField('ISBN', row.resourceId),
      this.renderField('副题名', row.subTitle),
      this.renderField('丛编', row.series),
      this.renderField('作者', row.author),
      this.renderField('出版社', row.publisher),
      this.renderField('出版年', row.publishTime),
      this.renderField('分类号', row.classNo),
      this.renderField('分卷号', row.volumeNo),
      this.renderField('分卷名', row.volumeName),
      this.renderField('定价', row.price),
      this.renderField('币种', row.currency),
      this.renderField('正文语种', row.textLanguage),
      this.renderField('版本', row.edition),
      this.renderField('装帧', row.binding),
      this.renderField('尺寸', row.size),
      this.renderField('主题词', row.subject),
      this.renderField('读者对象', row.audience)
    ].join('');

    if (fullFieldsEl) {
      fullFieldsEl.innerHTML = [
        this.renderFullWidthField('附注', row.note),
        this.renderFullWidthField(
          '图书简介',
          row.summary,
          {
            actionHtml: isChinese ? '' : `
              <button type="button" id="order-line-detail-extra-toggle"
                class="ml-3 text-sky-600 hover:underline text-sm font-normal">收起</button>`
          }
        )
      ].join('');
    }

    if (!extraEl) return;

    if (isChinese) {
      extraEl.innerHTML = '';
      extraEl.classList.add('hidden');
      return;
    }

    extraEl.classList.remove('hidden');
    extraEl.innerHTML = `
      <div class="grid grid-cols-3 gap-x-10 gap-y-1">
        ${[
          this.renderField('学科大类', row.disciplineMajor),
          this.renderField('学科细分', row.disciplineMinor),
          this.renderField('中译名', row.translatedTitle),
          this.renderField('页数', row.pageCount),
          this.renderField('精平装ISBN对照', row.isbnBindingMap),
          this.renderField('审读级别', row.reviewLevel),
          this.renderField('获奖信息', row.awards)
        ].join('')}
      </div>
      <div class="mt-3 space-y-3">
        ${[
          this.renderFullWidthField('馆藏信息', row.holdingInfo),
          this.renderFullWidthField('目次信息', row.tocInfo),
          this.renderFullWidthField('作者简介', row.authorBio),
          this.renderFullWidthField('书评', row.bookReview)
        ].join('')}
      </div>`;

    this.bindBookExtraToggle();
  },

  /**
   * 渲染管理视图公共区块
   * @param {Object} ctx - 详情上下文
   */
  renderManagementView(ctx) {
    this.renderAlerts(ctx);
    this.renderCockpit(ctx);
    this.renderTabs();
    this.renderLifecycleTab(ctx);
    this.renderPlaceholderTab('acceptance', '验收记录', '将展示与本订单行关联的验收批次汇总（P2 迭代）');
    this.renderPlaceholderTab('items', '单件明细', '将展示条码级单件状态摘要与明细（P3 迭代）');
    this.renderPlaceholderTab('settlement', '结算记录', '将展示本订单行涉及的结算单与金额（P2 迭代）');
    this.renderRelatedTab(ctx?.relatedLines || []);
    this.switchTab(this.activeTab);
    this.bindBibToggle();
  },

  /**
   * 初始化视听资料订单行详情
   */
  initAudiovisual() {
    const ctx = this.loadContext();
    const row = ctx?.row || {};
    const resourceType = ctx?.resourceType || '视听资料';

    this.renderCover(resourceType);

    const titleEl = document.getElementById('order-line-detail-title');
    if (titleEl) titleEl.textContent = row.title || '—';

    this.renderAudiovisualFields(row);
    this.renderManagementView(ctx);
  },

  /**
   * 初始化纸质书订单行详情
   */
  initBook() {
    const ctx = this.loadContext();
    const row = ctx?.row || {};
    const resourceType = ctx?.resourceType || '纸质书';
    const isChinese = this.isChineseBook(row);

    this.renderCover(resourceType);

    const titleEl = document.getElementById('order-line-detail-title');
    if (titleEl) titleEl.textContent = row.title || '—';

    this.renderBookFields(row, isChinese);
    this.renderManagementView(ctx);
  }
};
