# 书目查询 — 捐赠来源方与新建订单字段规则 — 实现计划

**日期**：2026-07-06  
**设计规格**：[`2026-07-06-bib-join-order-donation-source-party-design.md`](../specs/2026-07-06-bib-join-order-donation-source-party-design.md)

---

## 任务清单

| # | 任务 | 文件 | 状态 |
|---|------|------|------|
| 0 | 34 省级行政区常量 | `html/src/constants/provinces.js` | 待做 |
| 1 | 捐赠人 mock 数据与检索/建档 API | `html/src/modules/order/data/donors.js` | 待做 |
| 2 | 扩展待发订订单 mock（含捐赠样例） | `html/src/modules/order/data/bib.js` | 待做 |
| 3 | 加入订单表单缓存扩展 sourceParty | `html/src/modules/order/data/bib-order-form-cache.js` | 待做 |
| 4 | 新建订单捐赠模式字段禁用与校验 | `html/src/modules/order/components/BibCreateOrderModal.vue` | 待做 |
| 5 | 加入订单来源方 UI 与交互 | `html/src/modules/order/components/BibJoinOrderModal.vue` | 待做 |
| 6 | 提交逻辑：反向维护 + 订单行写入 | `html/src/modules/order/views/BibQueryView.vue` | 待做 |
| 7 | 订单行数据扩展 sourceParty 字段 | `html/src/modules/order/data/bib.js`（或 `orders.js`） | 待做 |
| 8 | 构建验证 | `npm run build`（`html/` 目录） | 待做 |

---

## 实现顺序

```
1 数据层（donors.js + mock 捐赠订单）
    ↓
2 新建订单捐赠字段规则（独立、可先行验证）
    ↓
3 加入订单来源方 UI + 缓存
    ↓
4 BibQueryView 提交接线 + 订单行落库
    ↓
5 构建验证
```

**原因**：先建捐赠人数据源，UI 层才有检索/建档可调用；新建订单改动面小，可并行或提前完成；提交接线依赖 modal payload 定型。

---

## 任务 0：省份常量

**文件**：`html/src/constants/provinces.js`（新建）

导出 `PROVINCE_OPTIONS` 数组，含 34 个省级行政区（与设计规格 §4.3.6 一致）。`BibJoinOrderModal` 与 `donors.js` mock 数据共用此常量。

---

## 任务 1：捐赠人 mock 数据层

**文件**：`html/src/modules/order/data/donors.js`（新建）

### 1.1 导出常量与类型

```javascript
// 内存可变列表，模拟供应商系统
let donorRecords = [ /* 初始 mock */ ];

export const DONOR_TYPE = { PERSONAL: 'personal', GROUP: 'group' };
```

### 1.2 初始 mock 数据（≥4 条）

| name | type | phone | province | addressDetail | status |
|------|------|-------|----------|---------------|--------|
| 张明 | personal | 13800138001 | 北京市 | 朝阳区XX路1号 | active |
| 李华 | personal | 13900139002 | | | active |
| 王慈善基金会 | group | 010-12345678 | 北京市 | 海淀区YY大厦 | active |
| 某大学图书馆 | group | | 湖北省 | 武汉市ZZ区 | active |
| 陈旧捐赠人 | personal | | | | inactive（用于停用校验） |

每条含 `id`（如 `donor-001`）、`supplierCode`（如 `jz001`）。

### 1.3 导出函数

| 函数 | 行为 |
|------|------|
| `getActiveDonors()` | 返回 `status === 'active'` 的全量列表 |
| `searchDonors(keyword)` | trim 后按 `name` 包含匹配（中文逐字），仅 active |
| `getDonorById(id)` | 按 ID 查找 |
| `findDonorByNameAndType(name, type)` | 精确匹配姓名+类型，仅 active |
| `createDonor({ name, phone, province, addressDetail, type })` | 若同名同类型已存在 → `{ ok: false, message: '捐赠人已存在，请从列表中选择' }`；否则追加记录并返回 `{ ok: true, donor }`；`addressDetail` 校验 ≤100 字 |

`createDonor` 生成 `id`（`donor-${Date.now()}`）与 `supplierCode`（`jz${seq}`）。

---

## 任务 2：扩展待发订订单 mock

**文件**：`html/src/modules/order/data/bib.js`

在 `pendingOrdersForBib` 追加 **2 条捐赠订单**（资源类型/语种与现有书目可匹配）：

```javascript
{
  orderId: 'PG001B20240706001',
  subscriber: '捐赠订户', site: '首都华威桥馆', method: '捐赠',
  resourceType: '纸质书', language: '中文',
  supplier: '', budget: '', discount: '',
  orderStatus: 'pending', createTime: '2026-07-06 10:00:00'
},
{
  orderId: 'PG001B20240706002',
  subscriber: '捐赠订户', site: '北京城市图书馆', method: '捐赠',
  resourceType: '纸质书', language: '中文',
  supplier: '', budget: '', discount: '',
  orderStatus: 'pendingImport', createTime: '2026-07-06 11:00:00'
}
```

确保 `getJoinOrderCandidates` 过滤后，中文纸质书书目能见到捐赠订单。

---

## 任务 3：表单缓存扩展

**文件**：`html/src/modules/order/data/bib-order-form-cache.js`

无需改接口签名；`BibJoinOrderModal` 在 `saveJoinOrderFormCache` / `loadJoinOrderFormCache` 时增加 `sourceParty` 字段：

```javascript
sourceParty: {
  mode: 'new',
  donorType: 'personal',
  donorId: null,
  name: '',
  phone: '',
  province: '',
  addressDetail: '',
  syncToSupplier: true
}
```

恢复缓存时校验 `donorId`：若 `getDonorById` 返回 inactive 或 null，清空 sourceParty 并 `window.alert('原捐赠人已停用，请重新选择')`。

---

## 任务 4：新建订单捐赠字段规则

**文件**：`html/src/modules/order/components/BibCreateOrderModal.vue`

### 4.1 计算属性

```javascript
const isDonationMethod = computed(() => form.method === '捐赠');
```

### 4.2 模板改动

对 **预算名称、供应商、折扣** 三个字段：

- `:disabled="isDonationMethod"`
- `disabled` 时加 `bg-gray-50` 类
- 必填星号 `*` 用 `v-if="!isDonationMethod"` 控制显示

### 4.3 watch `form.method`

```javascript
watch(() => form.method, (val) => {
  if (val === '捐赠') {
    form.budget = '';
    form.supplier = '';
    form.discount = '';
  }
});
```

### 4.4 提交校验调整

替换 `BIB_CREATE_ORDER_REQUIRED_FIELDS` 全量遍历，改为：

```javascript
const fields = isDonationMethod.value
  ? BIB_CREATE_ORDER_REQUIRED_FIELDS.filter(f => !['budget', 'supplier'].includes(f.key))
  : BIB_CREATE_ORDER_REQUIRED_FIELDS;
```

`submit` emit 时，捐赠订单 `budget`/`supplier`/`discount` 保持空字符串。

---

## 任务 5：加入订单来源方 UI

**文件**：`html/src/modules/order/components/BibJoinOrderModal.vue`

### 5.1 新增 state

```javascript
const sourceParty = reactive({
  mode: 'new',       // 'existing' | 'new'
  donorType: 'personal',
  donorId: null,
  name: '',
  phone: '',
  province: '',
  addressDetail: '',
  syncToSupplier: true
});
const donorSuggestions = ref([]);
const showDonorDropdown = ref(false);
```

### 5.2 计算属性

```javascript
const hasDonationOrder = computed(() =>
  props.orders.some(o => selectedIds.value.has(o.orderId) && o.method === '捐赠')
);
const isExistingDonor = computed(() => sourceParty.mode === 'existing');
const isNewDonor = computed(() => sourceParty.mode === 'new');
```

### 5.3 显示/隐藏联动

`watch(hasDonationOrder)`：

- `false` → 调用 `resetSourceParty()` 清空
- `true` → 保持当前输入（或从缓存恢复）

### 5.4 姓名 combobox 交互

**结构**：`input` + 绝对定位 `ul` 下拉（不引入新依赖）。

| 事件 | 行为 |
|------|------|
| `input` 姓名 | `mode='new'`；`donorId=null`；`searchDonors(name)` 更新 suggestions；`showDonorDropdown=true` |
| 点击 suggestion | 填入 donor 信息；`mode='existing'`；`donorId` 赋值；关闭下拉；字段 readonly |
| 输入不匹配任何项 | 保持 `mode='new'`；显示类型单选 + 同步复选框 |
| `blur`（延迟 150ms） | 关闭下拉 |

### 5.5 模板区块（`v-if="hasDonationOrder"`）

位置：馆址分配 `border-t` 之后、币种下拉之前。

```
来源方
  [仅 isNewDonor] 类型单选：个人捐赠 / 团体捐赠
  * 姓名 [combobox input]
  电话 [input :readonly="isExistingDonor"]
  省份 [select :disabled="isExistingDonor"，选项来自 PROVINCE_OPTIONS]
  详细地址 [input :readonly="isExistingDonor" maxlength=100]
  [仅 isNewDonor] ☑ 同步新增到供应商系统
```

### 5.6 提交校验扩展

在现有 `submit()` 中，`hasDonationOrder` 时追加：

1. `sourceParty.name.trim()` 为空 → `请填写来源方姓名`
2. 长度校验：name≤50, phone≤20, addressDetail≤100
3. `mode='new' && syncToSupplier` → 调用 `findDonorByNameAndType`，已存在则提示并 return

### 5.7 emit payload

```javascript
emit('confirm', {
  siteRows: activeRows,
  form: { ...form },
  sourceParty: hasDonationOrder.value ? { ...sourceParty } : undefined
});
```

`persistCache` / `restoreFromCache` 同步读写 `sourceParty`。

### 5.8 采选方式检索单选

设计规格要求采选方式单选。当前 `methodOptions` 含「全部」。**本期保持「全部」选项**，通过 `hasDonationOrder`（基于勾选订单 `method`）控制来源方显示，不强制移除「全部」。若后续需强制单选，可另开迭代。

---

## 任务 6：BibQueryView 提交接线

**文件**：`html/src/modules/order/views/BibQueryView.vue`

### 6.1 扩展 `onJoinOrder(payload)`

```javascript
async function onJoinOrder(payload) {
  const { siteRows, form, sourceParty } = payload;
  const orderMap = new Map(joinOrderCandidates.value.map(o => [o.orderId, o]));

  // 1. 反向维护（仅 new + syncToSupplier）
  let resolvedDonorId = sourceParty?.donorId ?? null;
  if (sourceParty?.mode === 'new' && sourceParty.syncToSupplier) {
    const result = createDonor({
      name: sourceParty.name.trim(),
      phone: sourceParty.phone?.trim(),
      province: sourceParty.province?.trim(),
      addressDetail: sourceParty.addressDetail?.trim(),
      type: sourceParty.donorType
    });
    if (!result.ok) {
      window.alert(result.message);
      return;
    }
    resolvedDonorId = result.donor.id;
  }

  // 2. 为每条 siteRow 生成订单行
  for (const row of siteRows) {
    const order = orderMap.get(row.orderId);
    if (!order) continue;
    const lineBase = { /* 现有字段：price, currency, copiesInSet, sets, remark, bibRow... */ };
    if (order.method === '捐赠' && sourceParty) {
      Object.assign(lineBase, {
        sourcePartyName: sourceParty.name.trim(),
        sourcePartyDonorId: resolvedDonorId || sourceParty.donorId || ''
      });
    }
    appendBibOrderLine(lineBase); // 新增辅助函数
  }

  window.alert(`已为 ${siteRows.length} 个订单加入书目（原型演示）`);
}
```

### 6.2 新增 `appendBibOrderLine` 辅助函数

**文件**：`html/src/modules/order/data/bib.js`

向 `bibRelatedOrderLines` 追加一条记录（可变数组 `push`），供关联订单行页签即时可见。生成 `orderLineNo`（`orderId-${seq}`）。

### 6.3 扩展 `onCreateOrder`

接收 `BibCreateOrderModal` emit 的 form，将捐赠订单（`method==='捐赠'`）写入 `pendingOrdersForBib`，`supplier`/`budget`/`discount` 为空。当前 `onCreateOrder` 仅关闭弹窗，需补全写入逻辑使捐赠订单出现在加入订单候选列表。

---

## 任务 7：订单行字段扩展

在 `appendBibOrderLine` 生成的对象上增加：

| 字段 | 来源 |
|------|------|
| `sourcePartyName` | `sourceParty.name` |
| `sourcePartyDonorId` | 解析后的 donorId |

电话、省份、详细地址仅用于表单录入与供应商建档，**不写入订单行**。非捐赠订单行不携带上述字段。

---

## 关键约束

1. **已有捐赠人只读**：`mode='existing'` 时姓名/电话只读，省份下拉 `disabled`，详细地址只读；不展示类型单选与同步复选框。
2. **同步仅新建**：`createDonor` 仅在 `mode='new' && syncToSupplier` 时调用。
3. **捐赠订单行才写来源方**：`order.method === '捐赠'` 判断不可省略。
4. **停用捐赠人**：缓存恢复时校验，无效则清空并提示。
5. **不引入新 UI 库**：combobox 用原生 input + 绝对定位列表实现。
6. **mock 可变状态**：`donorRecords` 用模块级数组，`createDonor` 后新捐赠人可被后续 `searchDonors` 检索到。

---

## 验收步骤（手动）

### 新建订单

1. 打开书目查询 → 新建订单 → 采选方式选「捐赠」
2. 确认预算、供应商、折扣禁用且无红色必填星号
3. 切换为「现采」→ 三字段恢复可编辑，预算/供应商显示必填星号
4. 创建捐赠订单 → 检查 `pendingOrdersForBib` 新记录 supplier/budget/discount 为空

### 加入订单 — 来源方

5. 选中中文纸质书书目 → 加入订单 → 勾选捐赠订单
6. 确认来源方区域出现；取消捐赠订单勾选 → 区域消失
7. 姓名输入「张」→ 下拉出现「张明」→ 选中 → 姓名/电话/省份/详细地址只读、无类型/同步控件
8. 清空姓名，输入新名「赵新捐赠人」→ 类型单选与同步复选框出现
9. 姓名留空提交 → 提示「请填写来源方姓名」
10. 新增 + 勾选同步 + 提交 → 再次检索可找到新捐赠人
11. 新增 + 取消同步 + 提交 → 订单行有来源方，检索列表无新捐赠人
12. 输入已存在姓名「张明」+ 个人类型 + 勾选同步 → 提示「捐赠人已存在，请从列表中选择」
13. 关闭弹窗重开 → 来源方从缓存恢复

### 构建

14. `cd html && npm run build` 无报错

---

## 文件变更汇总

| 操作 | 路径 |
|------|------|
| 新建 | `html/src/constants/provinces.js` |
| 新建 | `html/src/modules/order/data/donors.js` |
| 修改 | `html/src/modules/order/data/bib.js` |
| 修改 | `html/src/modules/order/data/bib-order-form-cache.js`（调用方读写，文件本身可能无需改） |
| 修改 | `html/src/modules/order/components/BibCreateOrderModal.vue` |
| 修改 | `html/src/modules/order/components/BibJoinOrderModal.vue` |
| 修改 | `html/src/modules/order/views/BibQueryView.vue` |

**不改动**：`constants.js`（校验逻辑内联于组件）、`orders.js`（订单列表页）、后端 API。
