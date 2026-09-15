# 组合处置视听收货扩展字段

**日期**：2026-09-15  
**状态**：已确认  
**模块**：逐条验收 · 组合处置面板（`ReceiveDispositionModal`）视听「收货」区  
**关联**：
- `2026-07-29-receive-by-item-combined-disposition-design.md`
- `2026-08-06-pre-accept-draft-receive-autofill-design.md`
- 订单行详情视听字段（`AV_CN_SPEC` / 预验收标准字段）

---

## 1. 背景与目标

组合处置面板视听收货区已有 ISBN/ISRC、载体、题名、码洋、彩胶颜色、厂牌、限量编号等，但缺少订单行详情与预验收发货单中已存在的系列/签名/老唱片等扩展信息，馆员收货时无法核对与修正。

### 1.1 目标

1. 在组合处置面板视听「收货」区增加 10 个可编辑、全部选填字段。
2. 打开时从订单行带出；若存在预验收草稿，用草稿已映射非空值覆盖。
3. 有收货套数提交时，字段值随 receive payload 带回。
4. 实现阶段同步 PRD / 抽屉「收货 · 视听」字段列表与预验收带入说明。

### 1.2 非目标

- 不改造独立「新增收货」窗（`AvReceiveModal`）。
- 不改纸质书收货区、换货区、退货区。
- 不新增这 10 个字段的必填校验。
- 不扩展预验收向导标准字段清单（字段已在向导中存在）。
- 不改草稿写入结构（仍用既有 `fieldValues`）；仅扩展收货侧读取覆盖。

---

## 2. 方案选型

**已选：方案 1 — 就地扩展 `ReceiveDispositionModal` 视听表单**

| 方案 | 说明 | 结论 |
|------|------|------|
| 1 | 在现有三列网格中插入字段；扩展 `avForm` / fill / draft 覆盖 | **采用** |
| 2 | 抽出 AvReceive 与组合处置共用组件 | 本期不改独立窗，抽象过早 |
| 3 | 「扩展信息」折叠区承载新字段 | 易漏看带出值 |

---

## 3. 字段与控件

插入位置：现有「彩胶颜色 / 厂牌 / 限量编号」行与「套内件数 / 收货套数」行之间。  
布局：三列网格，顺序如下。

| 序号 | 中文名 | 表单键 | 控件 | 必填 |
|------|--------|----------------|------|------|
| 1 | 系列名称 | seriesName | 文本 | 否 |
| 2 | 是否签名 | isSigned | 下拉：请选择 / 是 / 否 | 否 |
| 3 | 是否老唱片 | isOldRecord | 下拉：请选择 / 是 / 否 | 否 |
| 4 | 获奖信息 | award | 文本 | 否 |
| 5 | 北京出版社 | bjPublisher | 文本 | 否 |
| 6 | 分类 | category | 文本 | 否 |
| 7 | 盘号 | discNo | 文本 | 否 |
| 8 | 老唱片品牌 | oldRecordBrand | 文本 | 否 |
| 9 | 剧种 | operaType | 文本 | 否 |
| 10 | 年代 | era | 文本 | 否 |

说明：用户口述「CD唱片品类」落实为「是否老唱片 + 老唱片品牌」，与订单行详情 / 预验收标准字段一致。

---

## 4. 数据流

### 4.1 打开面板（视听）

1. `fillAvFromRow`：用订单行填充既有字段 + 本节 10 字段。  
2. `applyPreAcceptDraftToAv`：覆盖收货套数、码洋、实洋、套内件数（现状不变），并覆盖本节 10 字段（草稿侧非空才覆盖）。  
3. 存在草稿时继续展示「已带入预验收数据」。

### 4.2 订单行 → 表单

| 表单键 | 订单行优先 | 兼容别名 |
|--------|------------|----------|
| seriesName | seriesName | — |
| isSigned | isSigned | — |
| isOldRecord | isVintageRecord | isOldRecord |
| award | awardInfo | award |
| bjPublisher | beijingPublisher | bjPublisher |
| category | category | — |
| discNo | discNo | — |
| oldRecordBrand | vintageLabel | oldRecordBrand |
| operaType | operaGenre | operaType |
| era | era | — |

取值规则：优先键有值则用优先键，否则用兼容别名；皆空则为空字符串（下拉为空=「请选择」）。

### 4.3 预验收草稿 → 表单

从 `draft.fieldValues`（及同名顶层键，若有）读取预验收标准 key：

`seriesName`、`isSigned`、`isOldRecord`、`award`、`bjPublisher`、`category`、`discNo`、`oldRecordBrand`、`operaType`、`era`

仅当对应值非 `null`/`undefined`/空字符串时覆盖表单。

### 4.4 提交

有收货套数时，`confirm` 的 receive 对象展开当前 `avForm`（已含 10 字段）。  
无收货套数时不参与收货提交（与现逻辑一致）；这 10 字段不单独触发校验。  
确认收货成功后清除该行预验收草稿（不变）。

---

## 5. 实现落点

| 落点 | 变更 |
|------|------|
| `ReceiveDispositionModal.vue` | 模板插入 10 控件；`avForm` 增键；`fillAvFromRow` / `applyPreAcceptDraftToAv` 读写；提交沿用 `...avForm` |
| `receive-by-item.js` | `avOrderRows` / `foreignAvOrderRows` 至少 1～2 行补示例扩展字段，便于演示带出 |
| `docs/prd.md` + `receive-by-item-prd-data.js` | 「收货 · 视听」字段列表追加 10 项；预验收带入说明补充视听扩展字段覆盖规则 |

---

## 6. 验收标准

1. 组合处置 · 视听收货区在限量编号与套内件数之间可见上述 10 字段，顺序与控件类型符合 §3。  
2. 无草稿时，订单行上有值的扩展字段正确带出；无值则为空/请选择。  
3. 有草稿且 `fieldValues` 含上述标准 key 非空值时，打开后覆盖对应控件，并显示「已带入预验收数据」。  
4. 草稿仅含部分扩展字段时，仅覆盖有值项，其余保留订单行带出值。  
5. 有收货套数提交时，payload 含 10 字段当前编辑值；留空不阻断提交。  
6. 独立 `AvReceiveModal`、纸质收货、换/退区行为无回归。  
7. PRD / 抽屉文案与页面字段列表一致。

---

## 7. 风险与注意

- 订单行与预验收标准字段命名不一致（如 `isVintageRecord` vs `isOldRecord`），实现须按 §4.2 / §4.3 显式映射，避免漏带。  
- 面板高度固定，新增约 4 行后收货区滚动变长，属可接受；不引入折叠。  
- 本期不改 `AvReceiveModal`，两窗字段集暂时不一致；若后续要对齐，可再抽共用表单片段。
