# 验收单头汇总（总册数 / 总码洋 / 总实洋）设计

**日期**：2026-08-17  
**状态**：待确认  
**模块**：验收单详情头信息；逐条收货头汇总（共用计算）  
**关联**：`calcAcceptanceHeaderTotals`；`applyAcceptanceSpeciesFlow`；按种演示数据；PRD `5.6.5.1`

---

## 1. 背景与目标

验收详情 / 逐条收货头部的「总册数、总码洋、总实洋」当前按资源类型写死占位值。业务口径改为按种明细按**套价**动态汇总，并随收货写回字段刷新。

### 1.1 目标

- 头汇总按按种明细实时计算
- 金额口径为**套价**：只乘收货套数，不再乘套内册数/件数
- 演示数据补齐套内册数/件数与实洋；缺字段贡献为 0
- 逐条收货 upsert 时写回套内册数/件数与实洋，保证后续操作后汇总仍正确

### 1.2 非目标

- 不改批验收向导汇总（仍可按现有「× 册数」逻辑，本次不统一改口径）
- 不改结算单「实收总码洋/实洋」计算
- 不在按种表格中新增「实洋 / 套内册数」列展示（仅数据字段与汇总使用；视听已有套内件数列）
- 真实后端 API

---

## 2. 方案

**方案 2：动态汇总 + 收货写回**

1. 重写 `calcAcceptanceHeaderTotals`：按种行求和  
2. 补齐纸质书 / 视听按种演示数据字段  
3. `applyAcceptanceSpeciesFlow` 在收货（及新建行）时写入 `volumesInSet` / `piecesInSet`、`netPrice`  
4. 同步 PRD「固定展示」描述为公式说明  

---

## 3. 计算公式

对当前验收单按种明细每一行 `i`：

| 指标 | 行贡献 | 字段 |
|------|--------|------|
| 册数 | `receivedSets_i × copiesInSet_i` | `counts` 中收货套数；纸质 `volumesInSet`，视听 `piecesInSet` |
| 码洋 | `receivedSets_i × listPrice_i` | `price`（纸质定价 / 视听码洋） |
| 实洋 | `receivedSets_i × netPrice_i` | `netPrice` |

头汇总：

```
totalSpecies   = 按种行数
totalVolumes   = Σ 册数行贡献
totalListPrice = Σ 码洋行贡献
totalNetPrice  = Σ 实洋行贡献
```

### 3.1 缺字段规则（约定 B）

- `volumesInSet` / `piecesInSet` 缺失或非数字 → 该行册数贡献 = `0`
- `netPrice` 缺失或非数字 → 该行实洋贡献 = `0`
- `price` 缺失或非数字 → 该行码洋贡献 = `0`
- `receivedSets` 取自 `parseSpeciesCounts(row).received`；无效按 `0`

不做默认 `1`、不做折扣推算实洋。

### 3.2 展示格式

- 总册数：整数字符串（如 `"12"`）
- 总码洋 / 总实洋：`¥` + 两位小数（如 `"¥423.00"`）

---

## 4. 数据与写回

### 4.1 演示数据

- 纸质书 `acceptanceSpeciesRows`：为每行补充合理的 `volumesInSet`、`netPrice`（与现有定价大致匹配即可）
- 视听 `acceptanceAvSpeciesRows`：已有 `piecesInSet`；补充 `netPrice`
- `acceptanceHeaderDefaults` 中对应汇总值改为与补全后演示数据按公式算出的结果一致（或改为由函数计算后赋值，避免再硬编码漂移）

### 4.2 收货写回（`applyAcceptanceSpeciesFlow`）

当 `flow === 'receive'`（含新建按种行）：

| 写入字段 | 来源（`meta`） | 说明 |
|----------|----------------|------|
| 纸质 `volumesInSet` | `meta.copies` / `meta.volumesInSet` | 有值则覆盖/写入 |
| 视听 `piecesInSet` | `meta.copies` / `meta.piecesInSet` | 已有逻辑保留并统一 |
| `netPrice` | `meta.actualPrice` / `meta.netPrice` | 规范化为 `¥x.xx` 或与现网 `formatPriceLabel` 一致 |
| `price` | `meta.price` | 已有新建逻辑；更新行时若 meta 带定价则同步 |

换货 / 退货不强制改价与套内册数（仅累加套数与原因）；若 meta 显式带入上述字段，允许更新以便与收货弹窗一致。

调用方（如 `ReceiveByItemView`）在 `applyAcceptanceSpeciesFlow` 的 `meta` 中传入收货表单的套内册数/件数与实洋。

---

## 5. 影响面

| 位置 | 变化 |
|------|------|
| `acceptance-detail.js` → `calcAcceptanceHeaderTotals` | 由固定值改为按行求和 |
| `detail-utils.js`（可选） | 可抽 `parseMoney` / 行贡献小函数，避免重复 |
| `AcceptanceDetailView` / `ReceiveByItemView` | 仍调用同一函数；收货后因 runtime 行更新而自动刷新 |
| PRD（`docs/prd.md`、`acceptance-detail-prd-data.js`） | 业务规则改为公式描述 |
| 批验收 `summarizeBatchImportReceive` | **不改** |

---

## 6. 验收标准

1. 纸质书 / 视听验收详情头：总种数 = 按种行数；总册数 / 总码洋 / 总实洋符合第 3 节公式  
2. 人为去掉某行 `netPrice` 或套内册数后，该行对应贡献为 0，其余行仍正常累计  
3. 逐条收货写入套内册数与实洋后，再打开验收详情（或同页头汇总）数值随收货套数增加  
4. 撤销收货使收货套数为 0 后，该行三项贡献为 0  
5. 批验收汇总行为与改前一致  

---

## 7. 风险与说明

- 与批验收「码洋/实洋 × 册数」口径不同，属有意区分（业务已确认套价 A）  
- 按种表若不展示实洋 / 套内册数，用户不易直观核对码洋/实洋；本期不强制加列，后续可另开需求  
