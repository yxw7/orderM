import { prdBlock, prdSection, prdTable } from '@/prd/prd-html-builder';

const item5851 = prdBlock('5.8.5.1', '当前工作验收单头信息', `
<div id="overview">
${prdSection('', '功能描述')}
<p>页面顶部展示当前工作验收单的头信息与本单累计收/换/退套数，并提供跳转验收单详情入口。</p>
${prdSection('', '页面要素')}
<ul>
<li>验收单号（acceptanceId）：有值时蓝色链接，点击进入验收单详情（按种视角）</li>
<li>验收单名称（name）、供应商（supplier）、语种（lang）、发货单号（shipNo）</li>
<li>总种数、总册数、总码洋、总实洋（随验收明细汇总刷新）</li>
<li>收货套数、换货套数、退货套数（本验收单按种累计）</li>
<li>若无当前工作验收单：对应字段显示「—」，并提示先在验收单管理设为当前工作验收单</li>
</ul>
</div>
<div id="rules">
${prdSection('', '业务规则')}
<ul>
<li>语种有值时以红色强调展示</li>
<li>头信息只读；切换当前工作验收单后本页检索结果与选中行清空</li>
</ul>
</div>
`);

const item5852 = prdBlock('5.8.5.2', '订单行检索', `
<div id="overview">
${prdSection('', '功能描述')}
<p>按当前验收单资源类型提供检索字段与馆址过滤，点击「检索」加载可处置的订单行。</p>
${prdSection('', '页面要素')}
<ul>
<li>检索字段下拉 + 关键字输入 + 「检索」按钮</li>
<li>馆址（location）下拉：含「全部」与使用中馆址选项</li>
<li>若资源类型为视听资料：额外展示载体（carrier）下拉</li>
</ul>
</div>
<div id="rules">
${prdSection('', '业务规则')}
${prdTable(['资源类型', '检索字段选项'], [
  ['纸质书', 'ISBN（isbn）、订单行号（orderLine）、正题名（title）'],
  ['视听资料', '资源标识（resourceId）、订单行号（orderLine）、题名（title）']
])}
<ul>
<li>无当前工作验收单时：检索控件禁用，占位提示「请先选择验收单」；点击检索提示「请先在验收单管理中选择当前工作验收单」</li>
<li>检索后分页回到第 1 页；清空原选中行并关闭处置弹窗（除非结果仅 1 条，见 5.8.5.3）</li>
<li>各条件与馆址、载体为组合过滤（AND）</li>
</ul>
</div>
<div id="exception">
${prdSection('', '异常处理')}
<ul>
<li>未检索前表格空态：「请输入检索条件后点击检索」</li>
<li>无当前验收单空态：「请先在验收单管理中选择当前工作验收单」</li>
<li>检索无数据：「暂无数据」</li>
</ul>
</div>
`);

const item5853 = prdBlock('5.8.5.3', '订单行列表与选行打开', `
<div id="overview">
${prdSection('', '功能描述')}
<p>以表格展示检索结果；选中一行即打开「逐条收货/换货/退货」处置弹窗。页面<strong>不再</strong>提供底栏独立「收货 / 换货 / 退货」按钮。</p>
${prdSection('', '表格列')}
<p><strong>纸质书</strong>：单选、馆址（location）、订单行号（orderLine）、正题名（title）、ISBN（isbn）、作者（author）、出版社（publisher）、版本（edition）、定价（price）、币种（currency）、套内册数（copies）、发/收/换/退/撤订（counts）、备注（remark）、发订人（orderer）、发订时间（orderTime）</p>
<p><strong>视听资料</strong>：单选、馆址、订单行号、载体（carrier）、ISBN、商品条码（barcode）、目录号（catalogNo）、题名（title）、版本/格式（format）、著者（author）、码洋（price）、币种、套内件数（copies）、发/收/换/退/撤订、备注、发订人、发订时间</p>
</div>
<div id="interaction">
${prdSection('', '交互逻辑')}
<ul>
<li>点击行或点行首单选：选中该行并<strong>自动打开</strong>处置弹窗（默认「收货」页签）</li>
<li>若检索结果<strong>仅 1 条</strong>：检索完成后自动选中并打开处置弹窗</li>
<li>订单行号：蓝色链接，点击跳转订单行详情（不触发行选中打开，使用 stop）</li>
<li>备注：有内容时蓝色「查看」悬停全文</li>
<li>分页：默认 <strong>10</strong> 条/页，可选 5 / 10 / 20</li>
<li>处置弹窗打开期间全屏遮罩，列表与检索区不可点；换行须先关闭弹窗再选另一行</li>
<li>再次检索或切换当前验收单导致选中行不在结果中：关闭弹窗并清空选中</li>
</ul>
</div>
`);

const item5854 = prdBlock('5.8.5.4', '逐条收货/换货/退货处置弹窗', `
<div id="overview">
${prdSection('', '功能描述')}
<p>合并处置弹窗标题为「逐条收货/换货/退货」，以页签切换收货、换货、退货；各页签独立确认提交，互不捆绑。弹窗固定高度，切换页签高度不变。</p>
${prdSection('', '壳与统计条')}
<ul>
<li>顶栏：标题 + 订单行号（orderLine）+ 关闭</li>
<li>统计条（只读，提交成功后刷新）：发订套数、已收货套数、已换货套数、已退货套数、<strong>待收货套数</strong>、订单行备注（过长截断，悬停全文）</li>
<li>页签：收货 / 换货 / 退货；打开时默认「收货」；切换页签保留未提交草稿</li>
<li>底栏：「关闭」+ 当前页签确认按钮（收货页在需分配条码时可含「预览」）</li>
<li>点遮罩或关闭：关弹窗，不提交任何页签草稿；行选中可保留，再次点该行可再打开</li>
</ul>
</div>
<div id="pending">
${prdSection('', '待收货套数')}
<p><strong>待收货套数（pendingSets）</strong> = max(0, 发订套数 − 已收货套数 − 已退货套数)。<strong>不含</strong>已换货套数——已有换货仍可继续收货。</p>
<ul>
<li>收货 / 换货 / 退货本次套数须为正数，且不超过提交时刻的待收货套数</li>
<li>任一确认成功后：若待收货套数 = 0 → 自动关闭弹窗；若仍 &gt; 0 → 保持打开，刷新统计与行数据，并清空<strong>本次已提交</strong>页签表单</li>
</ul>
</div>
<div id="receive">
${prdSection('', '收货页签')}
<p>按当前验收单资源类型展示完整收货表单（与原独立收货弹窗字段一致）。</p>
${prdTable(['资源类型', '主要字段', '必填要点'], [
  ['纸质书', 'ISBN、作者、正题名、定价、币种、实洋、套内册数、收货套数、条码初始号、收货备注', '正题名、定价、实洋、套内册数；若验收单开启自动分配条码则条码初始号必填'],
  ['视听资料', 'ISBN、ISRC、商品条码、目录号、载体、版本/格式、题名、著者、码洋、币种、实洋、彩胶颜色、厂牌、限量编号、套内件数、收货套数、收货备注', '载体、题名、码洋、实洋、套内件数']
])}
<ul>
<li>外文语种验收单：定价/码洋可带出原币价，币种默认外币；中文则按行内定价与币种预填</li>
<li>收货套数默认带出当前待收货套数（可改）</li>
<li>确认收货成功提示「收货成功」，并写回验收详情按种明细与本行发/收/换/退统计</li>
</ul>
${prdSection('', '条码预览与分配结果（纸质 · 需分配条码时）')}
<ul>
<li>「预览」：根据条码初始号、收货套数、套内册数展示预分配/未分配区间；约 3 秒自动关闭，也可点「已知晓」提前关闭（不视为提交）</li>
<li>「确认收货」：先展示已分配/未分配结果；约 3 秒自动「已知晓」并完成收货确认，亦可手动点「已知晓」；若有空条码提示「注意：本次收货有空条码」</li>
</ul>
</div>
<div id="exchange-return">
${prdSection('', '换货页签')}
${prdTable(['字段', '必填', '说明'], [
  ['换货数量（exchangeQty）', '是', '正数，且 ≤ 待收货套数'],
  ['换货原因（exchangeReason）', '是', '选项：换货、残缺损'],
  ['换货备注', '否', '最多 500 字']
])}
<p>确认成功提示「换货成功」。</p>
${prdSection('', '退货页签')}
${prdTable(['字段', '必填', '说明'], [
  ['退货数量（returnQty）', '是', '正数，且 ≤ 待收货套数'],
  ['退货原因（returnReason）', '是', '选项：退货、损坏退货'],
  ['退货备注', '否', '最多 500 字']
])}
<p>确认成功提示「退货成功」。</p>
</div>
<div id="exception">
${prdSection('', '异常处理')}
<ul>
<li>收货缺必填：对应提示（如「请填写正题名」「请选择载体」等）</li>
<li>换/退未填数量或原因：提示请填写数量 / 请选择原因</li>
<li>套数无效或超过待收：「操作失败：套数无效」或「超过待收货套数（当前待收 N）」；不写库、不关弹窗</li>
<li>预览前未填条码初始号/有效收货套数/套内册数：对应提示，不打开预览</li>
</ul>
</div>
`);

export const receiveByItemPrdData = {
  title: '逐条收货',
  items: [
    { id: '5.8.5.1', title: '当前工作验收单头信息', htmlContent: item5851 },
    { id: '5.8.5.2', title: '订单行检索', htmlContent: item5852 },
    { id: '5.8.5.3', title: '订单行列表与选行打开', htmlContent: item5853 },
    { id: '5.8.5.4', title: '逐条收货/换货/退货处置弹窗', htmlContent: item5854 }
  ]
};

export function registerReceiveByItemPrdData() {
  window.PRD_DATA_MAP = window.PRD_DATA_MAP || {};
  window.PRD_DATA_MAP['receive-by-item'] = receiveByItemPrdData;
}
