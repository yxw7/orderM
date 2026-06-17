/**
 * 将原型原始标注转化为结构化、总结化的需求规格（参考 VSTECS 产品需求说明书格式）
 */

/** 模块导航路径 */
const NAV_PATHS = {
  '00': '业务规则与流程',
  '01': '左侧导航 > 订单管理 > 非连续出版物订单',
  '02_01': '左侧导航 > 采访验收 > 验收单管理',
  '02_02': '左侧导航 > 采访验收 > 逐条收货',
  '02_03': '左侧导航 > 采访验收 > 批量验收',
  '02_04': '左侧导航 > 采访验收 > 换货管理',
  '02_05': '左侧导航 > 采访验收 > 退货管理',
  '02_06': '左侧导航 > 采访验收 > 催缺管理',
  '03_01': '左侧导航 > 采访结算 > 待结算',
  '03_02': '左侧导航 > 采访结算 > 已结算',
  '03_03': '左侧导航 > 采访结算 > 结算失败处理',
  '04_01': '左侧导航 > 订户管理 > 订户列表',
  '04_02': '左侧导航 > 订户管理 > 馆员列表',
  '05_01': '左侧导航 > 货币管理 > 货币信息',
  '07_01': '左侧导航 > 设置 > 退换撤订原因参数',
  '07_02': '左侧导航 > 设置 > 催缺配置',
  '07_03': '左侧导航 > 设置 > 条码号供应商代码',
  '07_04': '左侧导航 > 设置 > 订单与MARC类型映射关系',
  '07_05': '左侧导航 > 设置 > 订单导入模板配置',
  '07_06': '左侧导航 > 设置 > 馆址管理'
};

/** 页面类型推断关键词 */
const PAGE_TYPE_KEYWORDS = {
  list: ['列表', '管理', '查重', '待结算', '已结算', '配置'],
  form: ['新增', '编辑', '新建', '创建', '导入'],
  modal: ['弹窗', '删除', '撤订', '撤销', '发订', '导出配置', '申请结算', '重启'],
  detail: ['详情', '查看'],
  flow: ['流转', '流程']
};

/**
 * 推断页面类型
 * @param {string} name
 * @returns {string}
 */
function inferPageType(name) {
  if (/流转|流程/.test(name)) return 'flow';
  if (/详情|查看/.test(name)) return 'detail';
  if (/新增|编辑|新建|导入|创建|发订|撤销|删除|弹窗|配置$/.test(name)) return 'modal';
  return 'list';
}

/**
 * 获取导航路径
 * @param {string} code
 * @param {string} module
 * @param {string} name
 * @returns {string}
 */
function getNavPath(code, module, name) {
  const prefixes = [code, code.replace(/_\d+$/, ''), module + '_' + code.split('_')[1], module];
  for (const p of prefixes) {
    if (NAV_PATHS[p]) return NAV_PATHS[p];
  }
  return NAV_PATHS[module] || `模块 ${module}`;
}

/**
 * 清洗单行原型文本
 * @param {string} line
 * @returns {string}
 */
function cleanLine(line) {
  return line
    .replace(/#FF3399[^>]*>?/g, '')
    .replace(/^\s*[-•]\s*/, '')
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * 将原型段落拆为行
 * @param {string[]} rawBlocks
 * @returns {string[]}
 */
function flattenRawBlocks(rawBlocks) {
  const lines = [];
  rawBlocks.forEach((block) => {
    block.split(/\n+/).forEach((l) => {
      const c = cleanLine(l);
      if (c.length >= 4) lines.push(c);
    });
  });
  return lines;
}

/**
 * 解析字段约束行
 * @param {string} line
 * @returns {{ field: string, type: string, constraint: string }|null}
 */
function parseFieldLine(line) {
  const m = line.match(/^(\d+(?:\.\d+)*)?\s*([^：:]{1,12})[：:]\s*(.+)$/);
  if (!m) return null;
  const field = m[2].trim();
  if (!field || /检索区|列表|操作|按钮|用户行为|封面图/.test(field)) return null;

  const rest = m[3];
  const parts = [];
  if (/默认为空|缺省.*空/.test(rest)) parts.push('默认：空');
  if (/默认全部/.test(rest)) parts.push('默认：全部');
  const hintMatch = rest.match(/提示词[：:]\s*([^，。]+)/);
  if (hintMatch) parts.push(`提示：${hintMatch[1]}`);
  if (/精确匹配/.test(rest)) parts.push('匹配：精确');
  if (/模糊匹配/.test(rest)) parts.push('匹配：模糊');
  const valueMatch = rest.match(/取值[：:]\s*([^。]+)/);
  if (valueMatch) parts.push(`取值：${valueMatch[1]}`);
  const selectMatch = rest.match(/下拉取值[：:]\s*([^。]+)/);
  if (selectMatch) parts.push(`枚举：${selectMatch[1]}`);
  if (/枚举|包括/.test(rest) && !parts.length) parts.push(rest);

  const type = /下拉|取值|全部/.test(rest) ? '下拉' : '文本';
  return { field, type, constraint: parts.filter(Boolean).join('；') || summarizeConstraint(rest) };
}

/**
 * 压缩约束描述
 * @param {string} text
 * @returns {string}
 */
function summarizeConstraint(text) {
  return text.replace(/默认为/g, '默认').replace(/提示词/g, '提示').slice(0, 80);
}

/**
 * 总结带序号的条件分支行
 * @param {string} line
 * @returns {string|null}
 */
function summarizeConditionLine(line) {
  const t = line.replace(/^\d+[\s.、]*/, '').trim();
  if (/纸质书.*中文.*图书简介/.test(t)) {
    return '纸质书且语种为中文时，书目信息展示至「图书简介」字段。';
  }
  if (/纸质书.*外文.*全部展示/.test(t)) {
    return '纸质书且语种为外文时，书目信息全部字段展示。';
  }
  if (/从.*列表.*点击/.test(t)) {
    return '从上级列表点击单号/链接进入本详情页。';
  }
  if (/资源类型是/.test(t) && t.length < 80) {
    return t.replace(/点击的订单行/, '当订单行').replace(/，订单行详情页/, '时，详情页');
  }
  return null;
}

/**
 * 将原始行归类为逻辑规则
 * @param {string} line
 * @returns {{ type: string, text: string }|null}
 */
function classifyLogicLine(line) {
  const condensed = summarizeConditionLine(line);
  if (condensed) return { type: '展示', text: condensed };

  if (/数据隔离|只能看到|所在订户/.test(line)) {
    return { type: '权限', text: '列表与检索结果按当前登录用户所属订户隔离，仅展示本订户数据。' };
  }
  if (/缺省状态是空|初始.*空/.test(line)) {
    return { type: '初始化', text: '页面初始不加载数据，需用户主动检索或从关联入口进入后展示结果。' };
  }
  if (/展开|收起|第一行检索/.test(line)) {
    return { type: '交互', text: '检索区默认展示首行条件；支持展开查看全部条件，收起后恢复默认展示。' };
  }
  if (/点击检索|未检索到任何结果/.test(line)) {
    return { type: '检索', text: '点击「检索」刷新当前列表；无匹配数据时保留表头并提示「未检索到任何结果」。' };
  }
  if (/点击.*订单号/.test(line)) {
    return { type: '联动', text: '从订单列表点击订单号可下钻至该订单下的订单行列表。' };
  }
  if (/精确匹配/.test(line) && /或.*关系/.test(line)) {
    return { type: '检索', text: '书目标识类字段（ISBN/ISRC 等）支持「或」组合，采用精确匹配。' };
  }
  if (/模糊匹配/.test(line)) {
    return { type: '检索', text: '题名、作者、出版社等书目描述字段采用模糊匹配。' };
  }
  if (/不可|必须|仅当|不允许/.test(line)) {
    return { type: '校验', text: line.replace(/^\d+[\s.、]*/, '') };
  }
  if (/点击/.test(line) && line.length < 100) {
    const short = line.replace(/^\d+[\s.、]*/, '').trim();
    if (short.length >= 8 && short.length <= 80) {
      return { type: '操作', text: short };
    }
  }
  return null;
}

/**
 * 生成页面概述
 * @param {string} name
 * @param {string} pageType
 * @param {string} moduleName
 * @returns {string}
 */
function buildOverview(name, pageType, moduleName) {
  const cleanName = name.replace(/_/g, ' ').replace(/\d{4}_更新|0617_暂缓/g, '').trim();
  const templates = {
    list: `在${moduleName}模块中，提供「${cleanName}」的查询筛选、列表展示与批量操作能力。`,
    modal: `提供「${cleanName}」的表单录入/确认交互，通常以弹窗或独立页面承载。`,
    detail: `展示「${cleanName}」的完整业务信息，支持查看明细及相关操作入口。`,
    flow: `描述「${cleanName}」涉及的业务状态流转路径，供研发理解状态机与操作约束。`,
    form: `支持「${cleanName}」相关数据的维护与提交。`
  };
  return templates[pageType] || templates.list;
}

/**
 * 生成需求描述（1-2 句总结）
 * @param {string} name
 * @param {string[]} logicSummaries
 * @param {string} pageType
 * @returns {string}
 */
function buildRequirementDesc(name, logicSummaries, pageType) {
  const cleanName = name.replace(/_/g, ' ');
  if (pageType === 'flow') {
    return `明确${cleanName}各环节的状态节点、触发条件及允许流转方向，作为订单/验收/结算等模块状态控制的依据。`;
  }
  if (logicSummaries.length) {
    const joined = logicSummaries.slice(0, 2).map((t) => t.replace(/。+$/, '')).join('；');
    return `满足${cleanName}场景下的业务处理需要：${joined}。`;
  }
  return `实现${cleanName}相关功能，界面与交互遵循原型设计，业务细节以原型标注为准。`;
}

/**
 * 生成功能说明条目
 * @param {string} name
 * @param {string} pageType
 * @param {string[]} rawLines
 * @param {object[]} fields
 * @returns {string[]}
 */
function buildFunctionDesc(name, pageType, rawLines, fields) {
  const items = [];
  const cleanName = name.replace(/_/g, ' ');

  if (pageType === 'list') {
    items.push(`支持按多条件组合检索${cleanName}数据。`);
    items.push('支持列表分页浏览、勾选及行内操作。');
    if (/导出/.test(name)) items.push('支持配置导出字段并生成导出文件。');
  } else if (pageType === 'modal' || pageType === 'form') {
    items.push(`完成${cleanName}所需信息的录入或确认。`);
    items.push('提交前进行必填项与业务规则校验。');
  } else if (pageType === 'detail') {
    items.push(`集中展示${cleanName}的全部关键字段。`);
    items.push('提供返回列表或触发后续业务操作的入口。');
  } else if (pageType === 'flow') {
    items.push('以流程图形式呈现状态节点与转换关系。');
    items.push('研发需据此实现状态字段展示与按钮可用性控制。');
  }

  if (/导入/.test(name)) items.push('支持模板下载、文件上传、解析预览及入库。');
  if (/批量/.test(name)) items.push('支持对多条记录执行批量业务处理。');

  rawLines.forEach((line) => {
    if (/列表.*展示|表头|列/.test(line) && items.length < 5) {
      items.push('列表字段及排序规则按原型表格定义展示。');
    }
  });

  return [...new Set(items)].slice(0, 5);
}

/**
 * 生成操作说明
 * @param {string} navPath
 * @param {string} name
 * @param {string} pageType
 * @returns {string[]}
 */
function buildOperationSteps(navPath, name, pageType) {
  const steps = [`进入路径：${navPath}。`];
  if (pageType === 'list') {
    steps.push('按需填写检索条件，点击「检索」查询数据。');
    steps.push('在列表中勾选记录或点击行内操作按钮执行后续业务。');
  } else if (pageType === 'modal' || pageType === 'form') {
    steps.push(`在列表页点击「${name.includes('编辑') ? '编辑' : name.includes('新增') || name.includes('新建') ? '新增' : '对应操作'}」按钮进入本功能。`);
    steps.push('填写表单后点击「确定/保存/提交」完成操作，或点击「取消」放弃。');
  } else if (pageType === 'detail') {
    steps.push('从列表页点击单号/名称链接进入详情页。');
    steps.push('查看完整信息后返回列表或执行关联操作。');
  }
  return steps;
}

/**
 * 核心：将原型原始文本总结为结构化规格
 * @param {object} opts
 * @returns {object}
 */
function summarizeSpec(opts) {
  const { code, name, module, moduleName, rawBlocks, html, filename } = opts;
  const rawLines = flattenRawBlocks(rawBlocks || []);
  const pageType = inferPageType(name);
  const navPath = getNavPath(code, module, name);

  const fields = [];
  const logicMap = new Map();

  rawLines.forEach((line) => {
    const field = parseFieldLine(line);
    if (field && !fields.find((f) => f.field === field.field)) fields.push(field);

    const logic = classifyLogicLine(line);
    if (logic && !logicMap.has(logic.text)) logicMap.set(logic.text, logic.type);
  });

  /** 从前端 HTML 补充字段 */
  if (html && fields.length < 3) {
    const labelRegex = /<label[^>]*>([^<：]+)[：:]?<\/label>/gi;
    let m;
    while ((m = labelRegex.exec(html)) !== null) {
      const fieldName = m[1].trim().replace(/&nbsp;/g, '');
      if (fieldName.length >= 2 && fieldName.length <= 12 && !fields.find((f) => f.field === fieldName)) {
        fields.push({ field: fieldName, type: '文本/下拉', constraint: '见逻辑说明' });
      }
    }
  }

  /** 补充 HTML 交互规则 */
  if (html && html.includes('search-expand-btn')) {
    logicMap.set('检索区默认展示首行条件，支持展开/收起切换。', '交互');
  }
  if (html && html.includes('data-modal')) {
    logicMap.set('弹窗类功能通过模态框承载，支持确定提交与取消关闭。', '交互');
  }

  let logicRules = [...logicMap.entries()].map(([text, type]) => ({ type, text }));

  if (pageType === 'detail') {
    logicRules = logicRules.filter((r) => !/检索区|展开.*条件|检索结果/.test(r.text));
  }
  if (pageType === 'flow') {
    logicRules = logicRules.filter((r) => r.type !== '交互' || /状态/.test(r.text));
  }

  /** 若原型解析不足，从原始行提取精简规则（跳过已归类的编号行） */
  if (logicRules.length < 2 && rawLines.length) {
    rawLines.slice(0, 8).forEach((line) => {
      if (/^\d+[\s.、]/.test(line) && line.length > 40) return;
      const simplified = line
        .replace(/^\d+(\.\d+)*\s*/, '')
        .replace(/检索区\s*/, '')
        .slice(0, 100);
      if (simplified.length >= 10 && !logicRules.find((r) => r.text === simplified)) {
        logicRules.push({ type: '业务', text: simplified });
      }
    });
  }

  const logicTexts = logicRules.map((r) => r.text);

  return {
    overview: buildOverview(name, pageType, moduleName || '系统'),
    requirementDesc: buildRequirementDesc(name, logicTexts, pageType),
    businessFlow: pageType === 'flow' ? '见本章流程图及步骤说明。' : '无独立流程图，遵循所属模块业务流程。',
    functionDesc: buildFunctionDesc(name, pageType, rawLines, fields),
    operationSteps: buildOperationSteps(navPath, name, pageType),
    logicRules: logicRules.slice(0, 12),
    fields: fields.slice(0, 15)
  };
}

/**
 * 业务规则类章节的预设总结
 */
const PRESET_SPECS = {
  '00_01_01': {
    overview: '定义系统核心名词、编号命名规则及实体层级关系，作为全局业务约束。',
    requirementDesc: '统一订单、订单行、订户等关键概念的定义与编码规则，确保各模块数据标识一致、可追溯。',
    businessFlow: '无。',
    functionDesc: [
      '规范订单号、订单行号、验收单号等编码组成与示例。',
      '明确订单与订单行的层级关系及金额汇总规则。',
      '定义订户、馆址、馆藏地等组织类名词。'
    ],
    operationSteps: ['本章节为全局参考规则，无独立操作入口。'],
    logicRules: [
      { type: '编码', text: '订单号 = 租客代码(5位) + 来源(A征订/B非征订) + 下单日期(8位) + 流水(3位)。' },
      { type: '编码', text: '订单行号 = 关联订单号 + "-" + 序号。' },
      { type: '关系', text: '一个订单包含多个订单行；订单总金额由各订单行金额汇总。' },
      { type: '关系', text: '订单状态可随订单行状态变化联动更新（如部分收货时订单为「处理中」）。' }
    ],
    fields: [
      { field: '订单号', type: '编码', constraint: '示例：st001A20241112001' },
      { field: '订单行号', type: '编码', constraint: '示例：st001A20241112001-001' }
    ]
  },
  '00_01_02': {
    overview: '定义资源类型与采选方式枚举，为订单创建与筛选提供统一取值范围。',
    requirementDesc: '明确不同出版物/资料类型的分类及采购来源方式，部分取值尚待业务最终确认。',
    businessFlow: '无。',
    functionDesc: [
      '资源类型区分纸质书、视听资料等载体。',
      '采选方式区分征订目录、现采、交存、捐赠等渠道。'
    ],
    operationSteps: ['在订单/订单行表单及检索条件的对应下拉框中使用。'],
    logicRules: [
      { type: '枚举', text: '资源类型影响后续验收、编目等业务分支处理。' },
      { type: '枚举', text: '采选方式与订单号来源标识（A/B）存在对应关系。' }
    ],
    fields: [
      { field: '资源类型', type: '枚举', constraint: '纸质书、视听资料等' },
      { field: '采选方式', type: '枚举', constraint: '征订目录、现采、交存、捐赠' }
    ]
  }
};

module.exports = {
  summarizeSpec,
  PRESET_SPECS,
  getNavPath,
  inferPageType,
  flattenRawBlocks
};
