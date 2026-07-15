# 订单行详情业务 Tab 记录数展示

## 背景

订单行详情页业务 Tab 此前仅「单件」页签展示记录数 `单件（N）`。馆员需要在不切换页签的情况下，一眼看到各业务数据量。

## 目标

页签文案统一为：

`相关订单行（N）` · `验收记录（N）` · `结算记录（N）` · `单件（N）` · `MARC信息`

## 规则

| 页签 | 文案 | N 的含义 |
|------|------|----------|
| related | 相关订单行（N） | 相关订单行表格总行数（含当前行，受可查看订户范围过滤） |
| acceptance | 验收记录（N） | 验收记录表格总行数 |
| settlement | 结算记录（N） | 结算记录表格总行数 |
| items | 单件（N） | 单件表格总行数（编目合并结果） |
| marc | MARC信息 | 不加数量 |

- N 与分页无关，取对应列表 `.length`
- 无数据时仍显示 `（0）`
- Tab 顺序、默认激活「相关订单行」不变

## 实现要点

- `getOrderLineTabs(counts)` 接收 `{ related, acceptance, settlement, items }`，对可计数 key 拼 `名称（N）`
- `OrderLineDetailView` 用已有 computed 列表长度传入，无额外请求
- PRD §5.4.5.2 与 `order-line-detail-prd-data.js` 同步

## 不改范围

- 各 Tab 表格列、查询与分页逻辑
- MARC 选书目记录号与字段展示
- 书目信息区、流水线 stages
