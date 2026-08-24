import { prdBlock, prdSection, prdTable } from '@/prd/prd-html-builder';

const item5651 = prdBlock('5.6.5.1', '验收单头信息', `
<div id="overview">
${prdSection('', '功能描述')}
<p>页面顶部展示当前验收单摘要信息，含基础属性与汇总指标。嵌入抽屉打开时布局与独立页一致（无面包屑）。</p>
${prdSection('', '页面要素')}
<ul>
<li>网格展示字段：验收单号（acceptanceId）、验收单名称（name）、资源类型（resourceType）、语种（language）、发货单号（shipNo）、供应商（supplier）</li>
<li>验收备注（acceptanceRemark）单独占满一行</li>
<li>汇总行：总种数（totalSpecies）、总册数（totalVolumes）、总码洋（totalListPrice）、总实洋（totalNetPrice）</li>
</ul>
</div>
<div id="rules">
${prdSection('', '业务规则')}
<ul>
<li><strong>总种数</strong>（totalSpecies）：取当前验收单按种明细行数</li>
<li><strong>总册数</strong>（totalVolumes）：Σ（收货套数 × 套内册数/件数）；套内册数/件数缺失时默认按 1</li>
<li><strong>总码洋</strong>（totalListPrice）：Σ（收货套数 × 定价/码洋）；定价缺失时该行贡献为 0</li>
<li><strong>总实洋</strong>（totalNetPrice）：Σ（收货套数 × 实洋）；实洋缺失时该行贡献为 0</li>
<li>无验收单上下文时，头信息使用默认占位值</li>
</ul>
</div>
`);

const item5652 = prdBlock('5.6.5.2', '按种 / 按册页签', `
<div id="overview">
${prdSection('', '功能描述')}
<p>头信息下方提供「按种」「按册」两个页签，切换明细视角与导出配置。</p>
</div>
<div id="interaction">
${prdSection('', '交互逻辑')}
<ul>
<li>默认进入<strong>按种</strong>；URL 带 <code>view=volume</code> 时进入按册</li>
<li>切换页签更新表格列、筛选字段、导出按钮文案与导出配置字段集；分页回到第 1 页</li>
<li>按册工具栏旁提示文案：「仅提供收货详情」</li>
</ul>
</div>
`);

const item5653 = prdBlock('5.6.5.3', '筛选查询', `
<div id="overview">
${prdSection('', '功能描述')}
<p>按当前页签与资源类型展示检索条件；支持检索、重置与展开附加条件。</p>
</div>
<div id="fields">
${prdSection('', '按种 · 纸质书')}
<p>组合检索（ISBN / 作者 / 正题名 / 订单行号）+ 验收人 + 验收时间（开始/结束日期）</p>
${prdSection('', '按种 · 视听资料')}
<p>组合检索（ISBN/ISRC / 题名 / 作者 / 商品条码 / 目录号 / 载体 / 订单行号）+ 验收人 + 验收时间（开始/结束日期）</p>
${prdSection('', '按册 · 纸质书')}
<p>组合检索（条码号 / ISBN / 作者 / 正题名）+ 收货人 + 收货时间（开始/结束日期）</p>
${prdSection('', '按册 · 视听资料')}
<p>组合检索（条码号 / ISBN/ISRC / 题名 / 作者 / 商品条码 / 目录号 / 载体）+ 收货人 + 收货时间（开始/结束日期）</p>
</div>
<div id="interaction">
${prdSection('', '交互逻辑')}
<ul>
<li>点击「检索」按条件过滤当前页签明细并回到第 1 页</li>
<li>点击「重置」清空条件并恢复当前页签全量明细</li>
</ul>
</div>
`);

const item5654 = prdBlock('5.6.5.4', '按种明细表格与操作', `
<div id="overview">
${prdSection('', '功能描述')}
<p>按种维度展示验收汇总行；验收单状态为<strong>进行中</strong>时可对行执行撤销收货 / 撤销换货 / 撤销退货。</p>
${prdSection('', '表格列（纸质书）')}
<p>序号、订单行号、ISBN、正题名、作者、定价、币种、发/收/换/退数、最近一次验收时间、最近一次验收人、换/退/撤销收货原因、操作</p>
${prdSection('', '表格列（视听资料）')}
<p>在纸质书基础上增加载体、商品条码、目录号、套内件数等视听字段（以页面列为准）</p>
</div>
<div id="interaction">
${prdSection('', '交互逻辑')}
<ul>
<li>换/退/撤销原因为空或不可用时显示「—」；有内容时「查看」悬停展示全文</li>
<li>仅当验收单状态为进行中且页签为按种时显示操作：有收货套数可「撤销收货」；有换货套数可「撤销换货」；有退货套数可「撤销退货」；均无则「—」</li>
<li>撤销换货 / 退货：确认后清零对应套数并刷新原因文案</li>
<li>撤销收货：打开撤销收货弹窗（见 5.6.5.7）</li>
<li>分页：默认 10 条/页，可选 10 / 20 / 50</li>
</ul>
</div>
`);

const item5655 = prdBlock('5.6.5.5', '按册明细表格', `
<div id="overview">
${prdSection('', '功能描述')}
<p>按册（收货单件）维度展示收货明细；本页签<strong>不提供</strong>撤销收货/换货/退货操作。</p>
${prdSection('', '表格列（纸质书）')}
<p>序号、条码号、ISBN、正题名、作者、定价、币种、实洋、单册定价、套内册数、收货人、收货时间</p>
${prdSection('', '表格列（视听资料）')}
<p>序号、条码号、ISBN/ISRC、载体、题名、商品条码、目录号、作者、定价、实洋、币种、套内件数、收货人、收货时间</p>
</div>
<div id="interaction">
${prdSection('', '交互逻辑')}
<ul>
<li>操作列固定展示「—」</li>
<li>分页规则同按种</li>
</ul>
</div>
`);

const item5656 = prdBlock('5.6.5.6', '导出明细与导出配置', `
<div id="overview">
${prdSection('', '功能描述')}
<p>工具栏下拉提供「导出明细」「导出配置」。按种按钮文案为「导出验收明细」，按册为「导出收货明细」。按种与按册为<strong>两套独立导出配置</strong>；配置弹窗仅展示<strong>当前验收单资源类型</strong>（纸质书或视听资料）对应字段，左侧类型标签不可切换另一类型。</p>
</div>
<div id="ui">
${prdSection('', '导出配置弹窗 UI')}
<ul>
<li>左侧：当前资源类型标签（高亮）</li>
<li>右侧：全选；上方为验收单头字段；分隔线下方为明细字段；六列网格勾选</li>
<li>打开时默认全选当前类型全部字段；确定保存勾选结果（原型提示已保存字段数）</li>
</ul>
</div>
<div id="header-fields">
${prdSection('', '共用头字段（按种 / 按册 · 纸质书 / 视听）')}
<p>验收单号、验收单名称、资源类型、语种、供应商、发货单号、总码洋、总实洋、折扣率、总种数、总册数、创建人、创建时间、验收备注</p>
</div>
<div id="species-detail">
${prdSection('', '按种 · 纸质书明细字段')}
<p>订单行号、ISBN、正题名、副题名、作者、出版社、出版年、分类号、正文语种、丛编、定价、币种、实洋、装帧、尺寸、主题词、版本、读者对象、附注、图书简介、套内册数、发订套数、收货套数、<strong>收货册数</strong>、换货套数、退货套数</p>
${prdSection('', '按种 · 视听资料明细字段')}
<p>ISBN、ISRC、商品条码、目录号、载体、题名、著者、码洋、币种、实洋、出版社、版本/格式、彩胶颜色、厂牌、限量编号、套内件数、发订套数、收货套数、<strong>收货件数</strong>、换货套数、退货套数</p>
</div>
<div id="volume-detail">
${prdSection('', '按册 · 纸质书明细字段')}
<p>条码号、订单行号、订单号、ISBN、正题名、副题名、作者、出版社、出版年、分类号、正文语种、丛编、定价、币种、实洋、套内册数、单册定价、装帧、尺寸、主题词、版本、读者对象、附注、图书简介、收货人、验收时间、收货备注</p>
${prdSection('', '按册 · 视听资料明细字段')}
<p>条码号、订单行号、载体、ISBN、ISRC、商品条码、目录号、题名、著者、码洋、币种、实洋、套内件数、单册定价、收货人、验收时间、验收备注</p>
</div>
<div id="rules">
${prdSection('', '导出计算规则')}
${prdTable(['字段', '资源类型', '计算规则'], [
  ['收货册数（receiveVolumes）', '纸质书·按种', '若套内册数（copiesInSet）为空，则收货册数为空；否则收货册数 = 收货套数（receiveSets） × 套内册数'],
  ['收货件数（receivePieces）', '视听资料·按种', '若套内件数（piecesInSet）为空，则收货件数为空；否则收货件数 = 收货套数（receiveSets） × 套内件数']
])}
<ul>
<li>导出明细：若当前筛选结果为空，提示暂无可导出明细；否则提示已导出及文件名（验收单号_验收明细 / 收货明细）</li>
</ul>
</div>
`);

const item5657 = prdBlock('5.6.5.7', '撤销收货', `
<div id="overview">
${prdSection('', '功能描述')}
<p>按种明细在进行中状态下，对已收货行可打开「撤销收货」弹窗，填写原因后清零收货套数。</p>
</div>
<div id="interaction">
${prdSection('', '交互逻辑')}
<ul>
<li>确认后更新该行发/收/换/退数中的收货套数为 0，记录撤销原因，刷新原因列，提示「撤销收货成功」</li>
<li>取消关闭弹窗不改数据</li>
</ul>
</div>
`);

export const acceptanceDetailPrdData = {
  title: '验收单详情',
  tabs: {
    species: { label: '按种' },
    volume: { label: '按册' }
  },
  items: [
    { id: '5.6.5.1', title: '验收单头信息', tab: 'species', htmlContent: item5651 },
    { id: '5.6.5.2', title: '按种 / 按册页签', tab: 'species', htmlContent: item5652 },
    { id: '5.6.5.3', title: '筛选查询', tab: 'species', htmlContent: item5653 },
    { id: '5.6.5.4', title: '按种明细表格与操作', tab: 'species', htmlContent: item5654 },
    { id: '5.6.5.6', title: '导出明细与导出配置', tab: 'species', htmlContent: item5656 },
    { id: '5.6.5.7', title: '撤销收货', tab: 'species', htmlContent: item5657 },
    { id: '5.6.5.1', title: '验收单头信息', tab: 'volume', htmlContent: item5651 },
    { id: '5.6.5.2', title: '按种 / 按册页签', tab: 'volume', htmlContent: item5652 },
    { id: '5.6.5.3', title: '筛选查询', tab: 'volume', htmlContent: item5653 },
    { id: '5.6.5.5', title: '按册明细表格', tab: 'volume', htmlContent: item5655 },
    { id: '5.6.5.6', title: '导出明细与导出配置', tab: 'volume', htmlContent: item5656 }
  ]
};

export function registerAcceptanceDetailPrdData() {
  window.PRD_DATA_MAP = window.PRD_DATA_MAP || {};
  window.PRD_DATA_MAP['acceptance-detail'] = acceptanceDetailPrdData;
}
