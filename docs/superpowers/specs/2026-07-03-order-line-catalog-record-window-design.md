# 订单行列表 — 实际关联书目记录号浮动弹窗 — 设计规格

**日期**：2026-07-03  
**状态**：已实现  
**模块**：非连续出版物订单 / 订单行列表（`OrderLineListPanel.vue`）

---

## 1. 背景与目标

### 1.1 业务痛点

订单行列表「书目记录号」列中，存在实际关联书目记录号（`actualBibRecordNos`，多卷书拆分/合并后回传）时，当前仅通过「实」标记悬停浮层**只读展示**记录号列表，用户无法快速查看各记录号对应的编目单件与 MARC 著录。

若需查看，必须进入订单行详情页并切换「单件信息」「MARC信息」Tab，路径较长；多卷书对比不同卷册的著录与单件时，详情页下拉切换也不便于并排对照。

### 1.2 目标

- 在订单行列表「实」标记悬停浮层内，将每条实际关联书目记录号改为**可点击链接**。
- 点击后以**可拖拽浮动弹窗**展示该记录号的编目数据，弹窗内提供 **MARC信息** 与 **单件（N）** 两个 Tab（MARC 在前、默认展示）。
- 支持同时打开最多 **3** 个弹窗并排对比；重复点击同一记录号聚焦已有弹窗；列表背景无遮罩、仍可操作。
- 复用订单行详情页已有编目查询逻辑，避免重复实现。

### 1.3 非目标（本期不做）

- 订单行详情页、查重结果、书目查询等其他页面的相同入口。
- 无 `actualBibRecordNos` 时点击 `bibRecordNo` 打开弹窗（本功能仅针对实际关联记录号）。
- 弹窗内编辑 MARC 或单件信息。
- 「复制全部」记录号（本期移除该能力）。
- 后端编目接口联调（仍为 mock 数据，与详情页一致）。

---

## 2. 需求决策摘要

| 项 | 决策 |
|---|---|
| 弹窗粒度 | 单个 `actualBibRecordNo` |
| 弹窗形态 | 可拖拽浮动窗，无遮罩 |
| Tab 顺序 | **MARC信息** → **单件（N）** |
| 默认 Tab | **MARC信息** |
| 单件 Tab 命名 | `单件（N）`，N = 该记录号下单件行数（一行一条） |
| 入口 | 「实」浮层内记录号可点；移除「复制全部」 |
| 重复点击同记录号 | 聚焦已有弹窗，不新建 |
| 同时打开上限 | 3 个；第 4 个提示后拒绝打开 |
| 背景列表 | 仍可滚动、勾选、操作 |
| 范围 | 仅订单行列表 |

---

## 3. 方案选型

| 方案 | 说明 | 结论 |
|------|------|------|
| **A. Composable + 弹窗栈容器** | `useCatalogRecordWindows` 管理状态，`CatalogRecordWindowStack` 渲染 0~3 个浮动窗 | **采用** |
| B. 扩展 `orderStore` | 在 Pinia 中维护 `catalogWindows[]` | UI 状态污染业务 store，不采用 |
| C. 单弹窗内分栏对比 | 一个弹窗内并排 2~3 条记录 | 与「多浮动窗」需求不符，不采用 |

---

## 4. 入口交互

### 4.1 触发位置

`OrderLineListPanel` → 书目记录号列 → `ActualBibRecordNoMarker` 悬停浮层。

### 4.2 浮层内容变更

**变更前**：记录号纯文本列表 +「复制全部」按钮。

**变更后**：

- 标题：「实际关联书目记录号」
- 每条记录号：蓝色可点击链接（`text-sky-600 hover:underline cursor-pointer`）
- 点击链接 → 调用 `openWindow({ recordNo, orderLineRow })`
- **移除**「复制全部」及相关 `copied` 状态
- 浮层在点击链接后**不立即关闭**，便于连续点开多条记录号；鼠标离开浮层仍按现有 120ms 延迟收起逻辑

### 4.3 前置条件

- 订单行 `actualBibRecordNos` 非空（「实」标记才显示，与现逻辑一致）
- 用户有订单行列表查看权限（与列表页一致，无额外权限）

---

## 5. 浮动弹窗

### 5.1 布局结构

```
┌─ 拖拽标题栏 ─────────────────────────────── × ┐
│ 书目记录号：bjlib9001202406135002-001          │
│ 订单行号：PG001B...-1  ·  正题名：图书馆学概论 │
├───────────────────────────────────────────────┤
│ [MARC信息]  [单件（3）]    ← MARC 默认激活     │
├───────────────────────────────────────────────┤
│ （Tab 内容区，max-height 420px 可滚动）        │
└───────────────────────────────────────────────┘
  宽 560px；fixed 定位；无遮罩
```

### 5.2 标题栏

| 要素 | 说明 |
|---|---|
| 拖拽 | 标题栏区域可拖拽；限制在视口内 |
| 关闭 | 右侧 ×，仅关闭当前弹窗 |
| 书目记录号 | 当前弹窗对应的 `actualBibRecordNo` |
| 订单行号 | 来源订单行 `orderLineNo` |
| 正题名 | 来源订单行 `title`（超长 truncate + title 提示） |

### 5.3 Tab 页签

| Tab | key | 标签文案 | 默认 |
|-----|-----|----------|------|
| MARC | `marc` | `MARC信息` | **是** |
| 单件 | `items` | `单件（N）` | 否 |

**单件数量 N 规则**：

- N = 按当前 `recordNo` 查询编目系统返回的单件条数
- 一行单件记录计 1；无数据时 N = 0，标签为 `单件（0）`
- 打开弹窗或切换至单件 Tab 时实时计算（与 mock 数据一致即可）

### 5.4 MARC Tab 内容

- 复用 `MarcTable` 组件
- 数据：`getOrderLineMarcFields(orderLineRow, recordNo)`
- 无 MARC 数据：居中展示「暂无 MARC 信息」
- 展示格式与订单行详情页 MARC Tab、书目查询页一致

### 5.5 单件 Tab 内容

- 复用 `getOrderLineItemColumns()` 列定义
- 数据：`getCatalogItemsByBibRecordNo(recordNo)`（新增导出，见 §7）
- 表格不可勾选；无分页（单记录号下单件量通常较少；若超过 10 条仍展示全部，内容区滚动）
- 无单件数据：表格空态（与详情页一致）

### 5.6 尺寸与样式

| 属性 | 值 |
|---|---|
| 宽度 | 560px |
| 内容区最大高度 | 420px（内部滚动） |
| z-index 基线 | `z-[120]`（高于浮层 `z-[110]`） |
| 阴影 | `shadow-xl`，白底圆角边框 |
| 遮罩 | 无 |

---

## 6. 多窗管理规则

### 6.1 窗口唯一键

`recordNo`（实际关联书目记录号字符串，全局唯一）。

### 6.2 打开逻辑（`openWindow`）

1. 若 `recordNo` 已在栈中 → **聚焦**：置顶 z-index，标题栏短暂高亮（如 `ring-2 ring-sky-400`，300ms 后消失），不新建。
2. 若栈长度 ≥ 3 且为新 `recordNo` → `alert('最多同时打开 3 个书目详情弹窗，请先关闭部分弹窗')`，拒绝打开。
3. 否则新建窗口：
   - 初始位置：`(80 + n×32, 100 + n×32)` px，n 为当前栈长度（0-based）
   - 默认 Tab：`marc`
   - 携带上下文：`recordNo`、`orderLineRow`

### 6.3 关闭逻辑

- 单窗 × 关闭：仅从栈移除该窗，不影响其他窗。
- 路由离开订单行列表页（组件卸载）：**清空全部弹窗**。

### 6.4 与列表的共存

- 无遮罩；用户可继续滚动列表、勾选、使用工具栏。
- 弹窗为 `position: fixed`，不随表格滚动。
- 点击弹窗外部（列表区域）不关闭弹窗（避免误关）；仅 × 关闭。

---

## 7. 数据层

### 7.1 新增导出函数

文件：`html/src/modules/order/data/order-line-detail.js`

```js
/** 按单个书目记录号（含实际关联记录号）查编目单件 */
export function getCatalogItemsByBibRecordNo(recordNo) {
  // 复用内部 catalogItemsByActualBibRecordNo[recordNo]
  // 返回带序号 no 的数组，格式与 getOrderLineItems 单条映射一致
}
```

### 7.2 复用现有函数

| 用途 | 函数 |
|---|---|
| MARC 字段 | `getOrderLineMarcFields(orderLineRow, recordNo)` |
| 单件列定义 | `getOrderLineItemColumns()` |

### 7.3 数据来源（原型）

与订单行详情页相同 mock：`catalogItemsByActualBibRecordNo`、`marcBibMetaByRecordNo`。后续接编目 API 时，详情页与列表弹窗共用同一查询层。

---

## 8. 组件结构

```
OrderLineListPanel.vue
├── ActualBibRecordNoMarker.vue          @open-record(recordNo)
├── CatalogRecordWindowStack.vue         渲染弹窗栈
│   └── CatalogRecordFloatingWindow.vue  单个可拖拽弹窗（×N）
└── useCatalogRecordWindows.js           composable：open/close/focus/栈状态
```

### 8.1 职责边界

| 单元 | 职责 |
|---|---|
| `ActualBibRecordNoMarker` | 悬停浮层、可点记录号链接、emit 事件 |
| `useCatalogRecordWindows` | 栈 CRUD、上限校验、聚焦、初始位置、路由卸载清理 |
| `CatalogRecordFloatingWindow` | 单窗 UI：标题栏拖拽、Tab、MARC/单件内容 |
| `CatalogRecordWindowStack` | Teleport to body，v-for 渲染栈内窗口 |

### 8.2 挂载范围

`CatalogRecordWindowStack` **仅**挂载于 `OrderLineListPanel`，不提升至 App 根节点。

---

## 9. 异常与边界

| 场景 | 处理 |
|---|---|
| 记录号无 MARC | MARC Tab 展示「暂无 MARC 信息」 |
| 记录号无单件 | 单件 Tab 表格空，标签 `单件（0）` |
| 第 4 个弹窗 | alert 提示，不打开 |
| 重复点击同记录号 | 聚焦已有窗 |
| 快速连续点不同记录号 | 依次入栈，最多 3 个 |
| 离开列表页 / 切换页签 | 清空弹窗栈 |

---

## 10. PRD 同步项

在 `docs/prd.md` §5.3 订单行列表补充：

1. **「实」标记浮层**：记录号可点击打开书目详情浮动弹窗；移除「复制全部」。
2. **书目详情浮动弹窗**（新小节）：入口、多窗规则（最多 3、聚焦去重）、Tab 顺序与命名、默认 MARC、数据来源。

可选：在 `html/src/prd/` 增加订单行列表 PRD 数据块（若项目维护页面级 PRD drawer）。

---

## 11. 验收标准

- [ ] 有 `actualBibRecordNos` 的行显示「实」标记；悬停浮层中每条记录号为可点链接
- [ ] 浮层无「复制全部」
- [ ] 点击记录号打开浮动弹窗；默认展示 MARC Tab；Tab 顺序为 MARC → 单件（N）
- [ ] 单件 Tab 标签 N 与表格行数一致
- [ ] 可同时打开 3 个不同记录号弹窗；第 4 个 alert 且不打开
- [ ] 重复点击已打开记录号：弹窗置顶高亮，不重复创建
- [ ] 弹窗可拖拽；无遮罩；列表仍可操作
- [ ] 关闭单窗不影响其他窗；离开列表页清空全部弹窗
- [ ] MARC / 单件展示与订单行详情页同源 mock 数据一致

---

## 12. 参考实现

| 文件 | 参考点 |
|---|---|
| `OrderLineDetailView.vue` | MARC Tab、单件 Tab 内容与列 |
| `ActualBibRecordNoMarker.vue` | 现有浮层定位与 hover 逻辑 |
| `DedupResultDrawer.vue` | 书目/MARC 双 Tab 切换模式 |
| `order-line-detail.js` | 编目 mock 与 MARC 构建 |
