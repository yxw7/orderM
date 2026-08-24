import { prdBlock, prdSection, prdTable } from '@/prd/prd-html-builder';

const item5951 = prdBlock('5.9.5.1', '筛选查询', `
<div id="overview">
${prdSection('', '功能描述')}
<p>多条件检索订户列表，支持展开更多条件。</p>
${prdSection('', '页面要素')}
${prdTable(['字段', '控件', '说明'], [
  ['订户名称（name）', '文本', '模糊匹配'],
  ['资源类型（resourceType）', '下拉', '全部 / 纸质书 / 视听资料'],
  ['预算名称（budget）', '文本', '模糊匹配订户已配预算'],
  ['订户状态（status）', '下拉（展开）', '全部 / 使用中 / 已停用'],
  ['创建日期（createDate）', '日期范围（展开）', '起止日期']
])}
<ul>
<li>「检索」「重置」；布局约 3 列</li>
</ul>
</div>
<div id="rules">
${prdSection('', '交互逻辑')}
<ul>
<li>点「检索」按当前条件过滤并回到第 1 页</li>
<li>点「重置」清空条件并恢复全量列表</li>
</ul>
${prdSection('', '业务规则')}
<ul>
<li>各已填条件为 AND 组合</li>
<li>资源类型、预算按订户已配置的业务范围字段匹配</li>
</ul>
</div>
<div id="exception">
${prdSection('', '异常处理')}
<ul>
<li>无匹配：表格空态「暂无数据」</li>
</ul>
</div>
`);

const item5952 = prdBlock('5.9.5.2', '数据表格与行操作', `
<div id="overview">
${prdSection('', '功能描述')}
<p>分页展示订户；提供新增、编辑、启停、删除及查看馆员入口。</p>
${prdSection('', '页面要素')}
<ul>
<li>工具栏：「新增订户」</li>
<li>表格列：序号、订户名称、单件所属馆、资源类型、预算名称、订户状态、馆员列表、创建日期、操作</li>
<li>订户名称：蓝色链接，点开查看详情</li>
<li>订户状态：使用中（绿色）/ 已停用（红色）</li>
<li>馆员列表：有数据且可查看时蓝色「查看」；否则灰色「查看」不可点</li>
<li>操作列：编辑；使用中另有停用、删除；已停用另有启用、删除（无「配置」）</li>
<li>创建日期列头可切换升/降序（默认降序）</li>
<li>分页：默认 50 条/页，可选 10 / 20 / 50</li>
</ul>
</div>
<div id="interaction">
${prdSection('', '交互逻辑')}
<ul>
<li>点「新增订户」打开完整表单弹窗（新增模式）</li>
<li>点「编辑」打开完整表单弹窗（编辑模式）</li>
<li>点状态操作打开对应确认弹窗</li>
<li>点馆员「查看」打开馆员名单弹窗</li>
</ul>
${prdSection('', '业务规则')}
<ul>
<li>列表「单件所属馆 / 资源类型 / 预算名称」取自该订户编辑保存的业务字段；未填时展示为空或「—」类空态</li>
<li>新增订户默认状态为使用中；业务与查重字段在新增/编辑弹窗中一次维护</li>
</ul>
</div>
`);

const item5953 = prdBlock('5.9.5.3', '新增/编辑订户', `
<div id="overview">
${prdSection('', '功能描述')}
<p>新增与编辑共用同一完整表单：业务字段 + 灰线分隔的查重范围。本版无独立「配置」弹窗，无数据归属，无所属分馆排序。</p>
${prdSection('', '页面要素')}
<ul>
<li>标题：新增订户 / 编辑订户</li>
<li>查重范围：备注下方与馆藏地下方各一条灰色横线分隔</li>
<li>底部：取消 / 提交（新增）或 取消 / 保存（编辑）</li>
</ul>
${prdTable(['字段', '必填', '控件', '说明'], [
  ['订户名称（name）', '是', '文本', '去首尾空格；最长 50；不可与其他订户重名'],
  ['单件所属馆（branchId）', '是', '可搜索单选', '使用中分馆；展示编码 | 名称'],
  ['资源类型（types）', '是', '多选', '纸质书、视听资料等'],
  ['预算名称（budgets）', '是', '多选', '预算主数据选项'],
  ['条码号类型（barcodeTypes）', '是', '多选', '条码类型主数据选项'],
  ['备注（remark）', '否', '多行文本', '最长 500'],
  ['所属分馆（dedupBranchCodes）', '否', '可搜索多选', '空 = 不限；无排序 UI'],
  ['所属馆藏地（dedupCollectionCodes）', '否', '可搜索多选', '已选分馆 → 下级并集；未选分馆 → 全部']
])}
<p>查重区块提示：「查重范围 · 未选分馆/馆藏地视为不限」</p>
</div>
<div id="rules">
${prdSection('', '交互逻辑')}
<ul>
<li>打开时带入当前订户已存数据（编辑）或空表（新增）</li>
<li>变更所属分馆后，剔除不再合法的所属馆藏地选项</li>
<li>校验失败时字段下展示错误文案，不关闭弹窗</li>
<li>提交成功后关闭弹窗并刷新列表</li>
</ul>
${prdSection('', '业务规则')}
<ul>
<li>查重两字段均可空：空 = 该订户侧不限制范围贡献</li>
<li>不强制「选了分馆必须选馆藏地」</li>
<li>分馆停用：编辑时仍保留已选项展示</li>
<li><strong>馆员多订户合并（供馆藏查重提交）</strong>：按馆员关联订户先后顺序拼接各订户所属分馆（首次出现保留），所属馆藏地取并集；皆空则馆藏查重不限范围（见 5.3.5.5）</li>
<li>合并后的分馆顺序<strong>本版仅用于</strong>馆藏检索范围合并；订单查重不使用本范围</li>
</ul>
${prdSection('', '异常处理')}
${prdTable(['场景', '提示'], [
  ['名称为空', '请输入'],
  ['名称超长', '已超字符限制'],
  ['名称重复', '已存在'],
  ['备注超长', '已超字符限制'],
  ['单件所属馆/资源类型/预算/条码类型未选', '请选择']
])}
</div>
`);

const item5955 = prdBlock('5.9.5.5', '查看订户详情', `
<div id="overview">
${prdSection('', '功能描述')}
<p>只读展示订户基本信息、业务范围、查重范围。本版无数据归属、无所属分馆顺序。</p>
${prdSection('', '页面要素')}
<ul>
<li>标题：查看订户；页签：基本信息 / 业务范围 / 查重范围</li>
<li>基本信息：订户名称、订户状态、创建日期、备注</li>
<li>业务范围：单件所属馆、资源类型、预算名称、条码号类型</li>
<li>查重范围：所属分馆（空则「不限」）、所属馆藏地（空则「不限」）</li>
<li>底部：关闭</li>
</ul>
</div>
<div id="interaction">
${prdSection('', '交互逻辑')}
<ul>
<li>点订户名称打开；默认基本信息页签；关闭不修改数据</li>
</ul>
</div>
`);

const item5956 = prdBlock('5.9.5.6', '停用 / 启用 / 删除', `
<div id="overview">
${prdSection('', '功能描述')}
<p>对订户执行停用、启用或删除；弹窗标题随操作为「停用订户 / 启用订户 / 删除订户」。</p>
${prdSection('', '页面要素')}
<ul>
<li>展示当前订户名称、编码（序号）及备注输入（原型字段；确认即执行状态变更或删除）</li>
</ul>
</div>
<div id="rules">
${prdSection('', '交互逻辑')}
<ul>
<li>确认后：停用 → 状态已停用；启用 → 使用中；删除 → 从列表移除</li>
<li>取消或关闭不变更</li>
</ul>
${prdSection('', '业务规则')}
<ul>
<li>使用中可停用/删除；已停用可启用/删除</li>
<li>删除为物理移除列表行（原型）；正式环境是否软删由后端约定</li>
</ul>
</div>
`);

const item5957 = prdBlock('5.9.5.7', '馆员列表查看', `
<div id="overview">
${prdSection('', '功能描述')}
<p>查看已关联到该订户的馆员姓名列表。</p>
${prdSection('', '页面要素')}
<ul>
<li>弹窗表格列：序号、馆员姓名；支持关键字检索与重置；底部关闭</li>
</ul>
</div>
<div id="rules">
${prdSection('', '交互逻辑')}
<ul>
<li>仅当订户已关联馆员且当前用户具备查看权限时，「查看」可点</li>
</ul>
${prdSection('', '业务规则')}
<ul>
<li>关联关系来自馆员-订户关联维护；本弹窗只读</li>
</ul>
${prdSection('', '异常处理')}
<ul>
<li>无关联或无权限：列表展示灰色不可点「查看」</li>
</ul>
</div>
`);

export const subscriberManagePrdData = {
  title: '订户管理-订户列表',
  items: [
    { id: '5.9.5.1', title: '筛选查询', htmlContent: item5951 },
    { id: '5.9.5.2', title: '数据表格与行操作', htmlContent: item5952 },
    { id: '5.9.5.3', title: '新增/编辑订户', htmlContent: item5953 },
    { id: '5.9.5.5', title: '查看订户详情', htmlContent: item5955 },
    { id: '5.9.5.6', title: '停用 / 启用 / 删除', htmlContent: item5956 },
    { id: '5.9.5.7', title: '馆员列表查看', htmlContent: item5957 }
  ]
};

export function registerSubscriberManagePrdData() {
  window.PRD_DATA_MAP = window.PRD_DATA_MAP || {};
  window.PRD_DATA_MAP['subscriber-manage'] = subscriberManagePrdData;
}
