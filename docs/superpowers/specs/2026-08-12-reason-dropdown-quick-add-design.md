# 原因下拉快捷添加设计

**日期**：2026-08-12  
**状态**：已实现；**本期临时关闭入口**（2026-08-24）  
**模块**：退换撤订原因参数；订单撤订 / 换供应商；验收换货·退货·撤销收货；发货单明细  
**关联**：设置页 `ReasonParamsView.vue`；store `reason-params.js`；组件 `ReasonSelect.vue`

> **本期说明（2026-08-24）**：业务原因下拉的「＋ 添加原因」快捷入口先隐藏。实现方式：`ReasonSelect.vue` 内 `ALLOW_QUICK_ADD = false`；选中 / 展开与设置页完整新增不变。恢复时将该常量改回 `true`。PRD 未单独描述快捷添加，无需删改。

---

## 1. 背景与目标

退货 / 换货 / 撤订 / 撤销收货等操作依赖「设置 - 退换撤订原因参数」中的原因下拉。现场常遇列表无合适项，必须离开业务弹窗去设置页新增，打断操作。需要在原因下拉内支持快捷添加，并写入同一参数库。

### 1.1 目标

- 所有使用四类原因下拉的入口，统一支持「下拉底部 ＋ 添加原因」
- 快捷添加只填「原因内容」，写入参数库后为**使用中**，并**自动选中**新原因
- 与设置页共用 `reason-params` store，设置页列表即时可见新记录

### 1.2 非目标

- 在下拉内编辑 / 停用原因
- 快捷添加中填写排序、备注（设置页完整新增/编辑不变）
- 权限控制、真实后端 API（仍走现有 localStorage store）
- 设置页 CRUD 交互改版
- 只读原因展示列（如验收明细「换/退/撤销原因」）改造

---

## 2. 方案

**统一 `ReasonSelect` 组件（方案 1）**

自定义下拉（输入框触发）：选项列表 + 底部「＋ 添加原因」+ 内联单字段输入（支持 Enter 保存）。按 `reasonType` 读写 store，替换各处原生原因 `<select>`。

---

## 3. 组件约定

| 项 | 约定 |
|----|------|
| 建议路径 | `html/src/components/common/ReasonSelect.vue` |
| `reasonType` | `exchange` \| `return` \| `cancel` \| `revokeReceive` |
| `modelValue` / `v-model` | 选中原因**文案**（`content` 字符串，与现网一致） |
| 可选 props | `disabled`、`placeholder`（默认「请选择」） |
| 选项数据 | `useReasonParamsStore().getActiveByType(reasonType)`，按 `sort` 排序 |
| 写入 | `addReason(reasonType, { content, sort, remark: '' })` |

### 3.1 交互流程

触发器外观为输入框样式（只读展示当前选中文案或 placeholder），不是原生 `<select>`。

1. **展开**：点击输入框，弹出下拉面板；面板内列出使用中原因，**最下方**固定「＋ 添加原因」
2. **单选**：点击已有选项 → 选中该项、关闭面板、输入框展示该文案
3. **进入添加**：点击「＋ 添加原因」→ 在面板内（或紧随面板）展示原因内容输入框（可保留取消 / 保存按钮）
4. **保存**：输入内容后点保存，或在输入框内按 **Enter** 快速保存 → 写入参数库 → **追加到列表** → **自动选中**新原因 → 关闭面板 / 退出添加态，输入框展示新文案
5. **取消添加**：点取消，或未保存时点击外侧关闭 → 丢弃未保存输入，回到普通下拉（原选中值不变）
6. `disabled` 时不可展开、不可添加

行内紧凑表格：同一组件；触发器可略收窄；下拉层需避免被表格 `overflow` 裁切（绝对定位 / portal 等，实现时择一）。

---

## 4. 数据规则

| 规则 | 约定 |
|------|------|
| 必填 | 原因内容 trim 后非空；否则 `alert`「请输入原因内容」，输入区保持打开 |
| 状态 | `active`（使用中） |
| 备注 | 空字符串 |
| 排序 | 同类现有最大 `sort + 1`；无记录则为 `1` |
| 创建人 / 创建日期 | 与设置页 `addReason` 现有默认一致 |
| 查重 | 同类内 trim 后全文精确匹配，**含停用项**；重复则 `alert`「该原因已存在」，不写入、**不改当前选中** |

设置页完整新增/编辑弹窗行为不变；快捷添加产生的记录可在设置页继续编辑、停用。

---

## 5. 改造范围

下列原因下拉全部替换为 `ReasonSelect`：

| 场景 | 位置（约） | `reasonType` |
|------|------------|--------------|
| 订单 / 订单行撤订 | `CancelOrderReasonModal.vue` | `cancel` |
| 催缺撤订 | `ShortageCancelModal.vue` | `cancel` |
| 更换供应商（行内 / 批量） | `OrderLineChangeSupplierModal.vue`、`BatchChangeSupplierModal.vue` | `cancel` |
| 收货换货 / 退货 | `ReceiveExchangeModal.vue`、`ReceiveReturnModal.vue`、`ExchangeReturnModal.vue` | `exchange` / `return` |
| 按册处置面板 | `ReceiveDispositionModal.vue` | `exchange` + `return` |
| 撤销收货 | `RevokeReceiveModal.vue` | `revokeReceive` |
| 发货单明细行内换 / 退 | `DeliveryImportView.vue`；任务详情若存在同类可编辑下拉则一并替换 | `exchange` / `return` |

### 5.1 数据源统一

部分入口仍使用硬编码常量（如 `EXCHANGE_REASON_OPTIONS`、`RETURN_REASON_OPTIONS`、`CANCEL_REASON_OPTIONS`，见 `receive-by-item.js`、`delivery-import.js`、`shortage-manage.js`），与设置页参数库不一致。本期替换为 `ReasonSelect` 后，**一律以 `reason-params` store 的使用中项为准**；上述常量不再作为业务下拉数据源（可删除或仅留作迁移期对照，实现时清理无引用常量）。

若默认 mock 参数库缺少现场常用文案（如「换货」「残缺损」），在 `mock-reason-params` 中补齐为使用中项，避免替换后选项变少。

### 5.2 父级按钮启用逻辑

原先「无可用原因则禁用确定」的入口，改为以**是否已有选中值**控制确定按钮（允许空列表时先快捷添加再确定）。「暂无可用原因，请先在设置中配置」类提示可改为更轻量文案，或不阻碍添加入口（实现时与 `ReasonSelect` 空态一致即可）。

### 5.3 Store 小改

- 调用方或 `addReason` 内计算默认 `sort`（最大 + 1）
- 提供查重能力（如 `isDuplicate(type, content)`），供组件在写入前校验（含停用）

---

## 6. 错误与边界

- 空内容保存 → 提示，不关闭输入区
- 重复（含停用同名）→ 提示，不写入、不改选中
- 空选项列表 → 仍可展开并「＋ 添加原因」
- 组件禁用 → 无展开、无添加

---

## 7. 测试要点

1. 点击输入框展开面板；点击已有项完成单选并关闭
2. 「＋ 添加原因」→ 输入 → 点保存 / **按 Enter**：列表追加、自动选中、输入框展示新文案；设置页可见且为使用中
3. 四类原因各走一遍至业务确定成功
4. 与已有使用中 / 停用同名文案冲突时拒绝新增（Enter 与点保存行为一致）
5. 空列表仅靠快捷添加完成一次撤订或退货
6. 取消添加不改变原选中值；关闭业务弹窗再开，添加输入已清空
7. 抽查撤订弹窗、处置面板双下拉、发货单行内下拉，交互一致且不被裁切

---

## 8. PRD / 文档

PRD 现有表述（原因取自「退换撤订原因参数」、无可用时提示去设置配置）与本期隐藏快捷入口一致，**不**补充「业务下拉支持快捷添加」类文案。重新打开 `ALLOW_QUICK_ADD` 时再视需要同步 PRD。
