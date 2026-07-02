import { prdBlock, prdSection, prdTable } from '@/prd/prd-html-builder';

const item5451 = prdBlock('5.4.5.1', '书目信息', `
<div id="overview">
${prdSection('', '功能描述')}
<p>页面顶部展示当前订单行书目信息，采用可折叠卡片布局，默认<strong>展开</strong>。左侧为封面占位区，右侧为<strong>三列网格</strong>展示书目字段；字段集合与顺序由<strong>资源类型 + 语种</strong>决定，全部字段均展示（值为空时显示空白）。</p>
${prdSection('', '页面要素')}
<ul>
<li><strong>折叠标题栏</strong>：左侧「书目信息」，右侧「收起/展开」文字链</li>
<li><strong>封面区</strong>：100×140px；有 <code>coverUrl</code> 时展示图片，否则展示默认书籍 SVG 占位</li>
<li><strong>资源类型 / 语种</strong>：封面下方居中展示</li>
<li><strong>书目字段</strong>：三列网格；一般性附注、图书简介、备注、书评、作者简介、目次信息、馆藏信息等长文本字段占 3 列宽</li>
</ul>
</div>
<div id="fields">
${prdSection('', '字段展示规则（按资源类型 / 语种，顺序固定）')}
${prdSection('', '纸质书 · 中文')}
<p>正题名、ISBN、副题名、分卷号、分卷名、分类号、出版社、作者、出版年、定价、版本、丛编、主题词、读者对象、装帧形式、尺寸、正文语种、卷数、出版地、一般性附注、图书简介、备注</p>
${prdSection('', '纸质书 · 外文')}
<p>ISBN、学科大类、学科细分、中图分类号、中译名、题名、副题名、责任者、丛编、出版社、装帧形式、出版日期、版次、页数、币种、价格、主题词、读者对象、尺寸、语种、简介、精简装ISBN对照、馆藏信息、审读级别、获奖信息、目次信息、分卷号、分卷名、作者简介、书评、备注</p>
${prdSection('', '视听资料 · 中文')}
<p>ISBN、ISRC、题名、载体、出版社、版本/格式、著者、币种、码洋、彩胶颜色、限量编号、厂牌、系列名称、是否签名、是否老唱片、获奖信息、北京出版社、分类、盘号、老唱片品牌、剧种、年代、备注</p>
${prdSection('', '视听资料 · 外文')}
<p>ISRC、题名、载体、商品条码、目录号、外文原文题名、出版方、码洋、币种、备注、厂牌</p>
<blockquote>语种取自所属订单的 language 字段（中文 / 外文）。</blockquote>
</div>
<div id="interaction">
${prdSection('', '交互逻辑')}
<ul>
<li>点击标题栏任意区域切换展开/收起</li>
</ul>
</div>`);

const item5452 = prdBlock('5.4.5.2', '业务 Tab 页签', `
<div id="overview">
${prdSection('', '功能描述')}
<p>书目信息下方为业务 Tab 容器，用于切换查看订单行关联业务数据。Tab 顺序固定，默认激活<strong>相关订单行</strong>。</p>
${prdSection('', 'Tab 列表')}
<ol>
<li><strong>相关订单行</strong>（key: related，默认）</li>
<li><strong>验收记录</strong>（key: acceptance）</li>
<li><strong>结算记录</strong>（key: settlement）</li>
<li><strong>单件信息</strong>（key: items）</li>
<li><strong>MARC信息</strong>（key: marc）</li>
</ol>
</div>
<div id="interaction">
${prdSection('', '交互逻辑')}
<ul>
<li>点击 Tab 按钮切换下方内容区，当前 Tab 高亮（底部蓝色边框）</li>
<li>切换 Tab 不刷新书目信息区；各 Tab 内分页状态独立保持</li>
</ul>
</div>`);

const item5453 = prdBlock('5.4.5.3', '相关订单行', `
<div id="overview">
${prdSection('', '功能描述')}
<p>展示与当前订单行<strong>书目匹配</strong>的其他订单行记录，<strong>包含当前订单行本身</strong>。数据范围限定为当前登录馆员<strong>关联订户可查看范围</strong>内的订单行，按发订时间倒序排列。</p>
${prdSection('', '表格列')}
<p>序号、订户、订单行号、采购方式、预算名称、供应商、折扣、发订人、发订时间</p>
</div>
<div id="rules">
${prdSection('', '书目匹配规则')}
${prdTable(['资源类型', '语种', '匹配条件'], [
  ['纸质书', '—', '资源标识（ISBN）<strong>且</strong> 正题名均相同'],
  ['视听资料', '中文', '正题名 <strong>且</strong> 载体均相同'],
  ['视听资料', '外文', '商品条码 <strong>且</strong> 目录号均相同']
])}
<ul>
<li>订户范围：取系统配置 <code>viewableSubscribers</code>，仅展示所属订单订户在范围内的记录</li>
<li>发订人、发订时间为空时展示空白</li>
<li><strong>订单行号</strong>为普通文本，<strong>不可点击跳转</strong></li>
</ul>
</div>
<div id="interaction">
${prdSection('', '交互与分页')}
<ul>
<li>分页：默认 50 条/页，可选 10 / 20 / 50</li>
<li>无匹配数据时表格为空</li>
</ul>
</div>`);

const item5454 = prdBlock('5.4.5.4', '验收记录', `
<div id="overview">
${prdSection('', '功能描述')}
<p>展示当前订单行关联的验收汇总记录（按种维度）。从验收模块按订单行号匹配；<strong>无匹配时表格展示「暂无数据」</strong>，不使用订单行字段构造。</p>
${prdSection('', '表格列')}
<p>序号、订单行号、ISBN（视听为 ISBN/ISRC）、正题名、作者、定价、币种、发/收/换/退套数、最近一次验收时间、最近一次验收人</p>
</div>
<div id="rules">
${prdSection('', '业务规则')}
<ul>
<li>发/收/换/退套数格式：<code>发订/收货/换货/退货</code>，数据来源于验收模块</li>
<li>无匹配：表格展示「暂无数据」</li>
</ul>
</div>
<div id="interaction">
${prdSection('', '交互逻辑')}
<ul>
<li>默认每页 50 条；有数据时显示分页，通常仅 1 条记录</li>
<li>表格不可勾选</li>
</ul>
</div>`);

const item5455 = prdBlock('5.4.5.5', '结算记录', `
<div id="overview">
${prdSection('', '功能描述')}
<p>展示当前订单行结算明细。从结算模块 <code>settlementListMap</code> 按订单行号匹配；<strong>无匹配时表格展示「暂无数据」</strong>，不使用订单行字段推算。</p>
${prdSection('', '表格列')}
<p>复用「已结算」列表字段：序号、订单行号、正题名、资源标识、作者、出版社、定价、币种、实洋、套内册数、结算套数、结算册数、结算金额等（与结算模块 SETTLEMENT_LIST_COLUMNS 一致）</p>
</div>
<div id="rules">
${prdSection('', '业务规则')}
<ul>
<li>从结算模块 <code>settlementListMap</code> 按订单行号精确匹配</li>
<li>无匹配：表格展示「暂无数据」</li>
</ul>
</div>
<div id="exception">
${prdSection('', '异常处理')}
<ul>
<li>无匹配：表格展示「暂无数据」</li>
</ul>
</div>`);

const item5456 = prdBlock('5.4.5.6', '单件信息', `
<div id="overview">
${prdSection('', '功能描述')}
<p>按<strong>实际关联书目记录号</strong>从编目系统查询单件（馆藏件）信息并汇总展示，展示编目系统返回的全部单件记录。</p>
${prdSection('', '表格列')}
<p>序号（01 格式）、条码号、索书号、所属馆、所属馆藏地、所在馆藏地、借阅类型、卷册描述、登到日期</p>
</div>
<div id="rules">
${prdSection('', '查询与数量规则')}
${prdTable(['字段', '说明'], [
  ['<code>actualBibRecordNos</code>', '实际关联书目记录号数组；编目拆分/合并后回传，可多值；一般仅多卷书存在'],
  ['<code>bibRecordNo</code>', '书目记录号；<code>actualBibRecordNos</code> 为空时作为查询回退值'],
  ['查询逻辑', '遍历实际关联书目记录号（无则回退书目记录号），分别查编目系统后合并列表']
])}
<ul>
<li>所在馆藏地、卷册描述为空时展示空白</li>
</ul>
</div>
<div id="interaction">
${prdSection('', '交互与分页')}
<ul>
<li>分页：默认 10 条/页，可选 10 / 20 / 50</li>
<li>无单件数据时表格为空</li>
</ul>
</div>`);

const item5457 = prdBlock('5.4.5.7', 'MARC信息', `
<div id="overview">
${prdSection('', '功能描述')}
<p>按<strong>实际关联书目记录号</strong>从编目系统查询 MARC 字段；无实际关联时回退<strong>书目记录号</strong>。列表上方提供书目记录号下拉框，默认选中第一个，切换后刷新 MARC 表格。</p>
${prdSection('', '页面要素')}
<ul>
<li><strong>书目记录号下拉框</strong>：位于 MARC 表格上方；选项为可查询的书目记录号列表</li>
<li><strong>MARC 表格</strong>：列「字段名」「指示符」「字段内容」，最大高度 480px 可滚动</li>
<li>无可用书目记录号或无 MARC 数据时居中展示「暂无 MARC 信息」</li>
</ul>
</div>
<div id="rules">
${prdSection('', '书目记录号列表规则')}
<ul>
<li>若 <code>actualBibRecordNos</code> 非空：下拉选项为其全部有效值</li>
<li>若为空且 <code>bibRecordNo</code> 有值：下拉仅含书目记录号一项</li>
<li>切换订单行或列表变化时，下拉默认重置为<strong>第一项</strong></li>
</ul>
<blockquote>下拉框标签文案为「书目记录号」，选项值为实际用于查编目的记录号（含实际关联书目记录号）。</blockquote>
</div>
<div id="interaction">
${prdSection('', '交互逻辑')}
<ul>
<li>切换下拉选项即时刷新下方 MARC 表格，无需额外确认</li>
<li>展示格式与书目查询页 MARC 详情一致（010/200/210 等 CNMARC 字段）</li>
</ul>
</div>`);

export const orderLineDetailPrdData = {
  title: '订单行详情',
  tabs: {
    related: {
      label: '相关订单行',
      itemIds: ['5.4.5.1', '5.4.5.2', '5.4.5.3']
    },
    acceptance: {
      label: '验收记录',
      itemIds: ['5.4.5.4']
    },
    settlement: {
      label: '结算记录',
      itemIds: ['5.4.5.5']
    },
    items: {
      label: '单件信息',
      itemIds: ['5.4.5.6']
    },
    marc: {
      label: 'MARC信息',
      itemIds: ['5.4.5.7']
    }
  },
  items: [
    { id: '5.4.5.1', title: '书目信息', tab: 'related', htmlContent: item5451 },
    { id: '5.4.5.2', title: '业务 Tab 页签', tab: 'related', htmlContent: item5452 },
    { id: '5.4.5.3', title: '相关订单行', tab: 'related', htmlContent: item5453 },
    { id: '5.4.5.4', title: '验收记录', tab: 'acceptance', htmlContent: item5454 },
    { id: '5.4.5.5', title: '结算记录', tab: 'settlement', htmlContent: item5455 },
    { id: '5.4.5.6', title: '单件信息', tab: 'items', htmlContent: item5456 },
    { id: '5.4.5.7', title: 'MARC信息', tab: 'marc', htmlContent: item5457 }
  ]
};

export function registerOrderLineDetailPrdData() {
  window.PRD_DATA_MAP = window.PRD_DATA_MAP || {};
  window.PRD_DATA_MAP['order-line-detail'] = orderLineDetailPrdData;
}
