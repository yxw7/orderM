# 图书馆采选订单管理系统 - 前端

TOB 图书馆采选订单管理系统前端，基于 Axure 原型设计，采用 **Vue 3 + Vite + Pinia + Vue Router + Tailwind CSS** 实现。

历史 HTML 静态原型页面已全部移除，功能由 Vue SPA 承载。

## 目录结构

```
OrderM/
├── docs/                   # 需求文档（prd.md 等）
├── html/                   # 前端工程（Vue SPA）
│   ├── app.html            # Vue SPA 入口（开发与构建均使用此文件）
│   ├── index.html          # 静态引导页（说明如何正确打开原型）
│   ├── src/
│   │   ├── main.js         # 应用入口
│   │   ├── router/         # 路由
│   │   ├── config/         # 导航与全局配置
│   │   ├── components/     # 公共组件（布局、表格、检索等）
│   │   ├── constants/      # 跨模块常量
│   │   ├── modules/        # 业务模块（order、acceptance、settlement 等）
│   │   ├── stores/         # 全局 Pinia store
│   │   ├── data/           # Mock 数据
│   │   └── styles/         # 全局样式
│   ├── dist/               # 构建产物（npm run build）
│   └── pages/              # 已清空（原 Axure 静态页，不再使用）
├── prototype/              # Axure 原型源文件
└── scripts/                # 页面生成、PRD 生成等脚本
```

## 打开原型（推荐）

**双击** `html/打开原型.bat`，浏览器会自动打开原型页面。

- 固定地址：`http://localhost:8080/app.html#/orders`
- **不要关闭**弹出的黑色命令行窗口，关闭后页面会无法访问

> 首次使用或代码有更新时，请先在 `html` 目录执行 `npm run build`，再双击 `打开原型.bat`。

> **说明**：不能直接双击 HTML 文件打开。Vue 应用受浏览器安全限制，必须通过本地服务（bat 脚本或 dev 服务）访问 **`/app.html`**。若误双击 `index.html`，会看到静态引导页而非应用界面。

## 开发（需要改代码时）

```bash
cd html
npm install
npm run dev
```

终端会显示实际端口（如 `http://localhost:5173/`），浏览器访问 **`/app.html`**（例如 `http://localhost:5173/app.html`），路由采用 Hash 模式（如 `#/orders`）。

## 构建

```bash
cd html
npm run build    # 输出至 html/dist/
npm run start    # 等同于双击「打开原型.bat」
```

## 功能模块与路由

| 模块 | 路由 | 说明 |
|------|------|------|
| 订单管理 | `#/orders` | 订单列表、订单行、新建/编辑/发订等 |
| 书目查询 | `#/bib-query` | 书目检索、建单、查重；子路由含新建书目、Z3950 |
| 验收单管理 | `#/acceptance` | 验收单 CRUD、导入发货单、验收详情 |
| 逐条收货 | `#/receive` | 纸质书 / 视听资料逐条收货 |
| 批量验收 | `#/batch-acceptance` | 批量验收单管理 |
| 换货 / 退货 / 催缺 | `#/exchange` `#/return` `#/shortage` | 换退催缺业务 |
| 待结算 / 已结算 / 结算失败 | `#/pending-settlement` 等 | 采访结算 |
| 订户 / 馆员 | `#/subscribers` `#/librarians` | 订户管理 |
| 货币信息 | `#/currency` | 货币与汇率 |
| 设置 | `#/reason-params` 等 | 原因参数、催缺配置、条码供应商、MARC 映射、导入模板、馆址 |

侧边栏菜单配置见 `html/src/config/app-config.js`。

## 技术说明

- **框架**：Vue 3 Composition API、Pinia 状态管理、Vue Router（Hash 历史）
- **样式**：Tailwind CSS v3，布局为深色顶栏 + 左侧菜单 + 白色内容区
- **数据**：当前为前端 Mock，无后端依赖，可离线演示
- **模块划分**：`html/src/modules/` 下按业务域拆分（views、components、stores、data、router）

## 原型与文档

- Axure 原型源文件位于 `prototype/`
- 产品需求见 `docs/prd.md`
- 从原型重新生成静态 HTML 可使用 `node scripts/generate-pages.js`（输出至 `html/pages/`，当前目录已不使用静态页）
