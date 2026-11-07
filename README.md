# HiAi 模型市场

私有仓库：`axingsoarem-cloud/hiai-market`。当前为评审版本；目标域名 `hiai.oss.baiopen.com`。价格任务通过受保护的专用端点更新线上目录，不修改 DNS 或重新发布整站。上线和自动化运行状态以部署记录为准。

## 本地查看与检查

使用 Node.js 22 或更新版本；更新器与测试无第三方依赖，无需 API 密钥。

```sh
npm test
npm run prices:check
npm run prices:update
```

静态页面位于 `public/`。可直接打开 `public/index.html` 查看离线目录，或使用已有本地静态文件服务器将 `public/` 作为网站根目录。JSON 与同内容的 JS 数据包同时保留，避免离线查看必须读取远程接口。主页面由站点工作包维护，首次同步 `public/` 后才能运行价格更新命令。

`prices:check` 只检查来源并生成报告，不修改目录；部分来源失败退出码为 2。`prices:update` 写回 JSON/JS，并允许部分来源失败时退出 0，但报告的 `status: partial` 不会被隐藏。完整报告在 `public/pricing-update-report.json`。

## 数据与来源

- 目录包含 30 个候选系列、62 个版本。OpenRouter 平台热度仅代表其公共流量，不是全球完整热度榜。
- 原有 OpenRouter 参考价格独立保留，不能标为模型作者的官方价格，也不是 HiAi 供应商实际报价。
- 每个版本的 `officialPricing` 都有状态。已有 8 个版本人工或自动核实官方基础价格；54 个版本尚未核实同型号标准价格。品牌部分覆盖不表示其所有版本已覆盖。
- 5 个官方来源适配器面向 7 个精确型号：DeepSeek、Z.AI、Anthropic、OpenAI、xAI。本机曾成功自动读取 DeepSeek 与 Z.AI 两个型号；其他来源遇到地区跳转、403 或网络限制时保留旧价与旧 `updatedAt`，标记 `stale`。MiniMax M2.7 为人工核实价，暂未自动覆盖。
- `updatedAt` 是该价格成功核验时间，`checkedAt` 是抓取尝试时间。两者不能混用。
- 价格默认 USD/百万 tokens，仅表示基础输入/输出。DeepSeek 高峰/低峰、OpenAI Standard 短上下文档位等保存在 `tier` 和附加字段；缓存、工具、地域、音视频等费用另计。不同单位不得直接比较。
- 官方品牌体验入口优先，OpenRouter 为备选。品牌工作台不保证直达所选历史型号；登录、区域及可用性由原厂控制。价格文档不是 API 参考文档，不能互相冒充。

来源登记在 `scripts/hiai/official-sources.json`，人工核对记录在 `official-seed-provenance.json`。`fixtures/` 包含用于验证解析边界的已保存来源表格；其他适配器的合成测试不等于真实联网成功。

## 定时更新与部署

`.github/workflows/update-prices.yml` 配置 `0 1 * * *`，即每天北京时间 09:00，并支持手动 `workflow_dispatch`。GitHub 计划触发可能延迟；只有工作流已推送并在远端运行后，才可确认自动更新生效。

工作流固定检出 `main`，先测试再更新；使用 concurrency 防止本工作流重叠。只提交 `public/catalog-v3.json`、`public/catalog-v3.js`、`public/pricing-update-report.json` 三个数据文件。部分失败会产生 GitHub Actions warning 和步骤摘要。

工作流通过专用令牌调用 `/api/prices`，写入独立 R2 价格对象并读取 `/api/price-status` 核验更新时间，然后只提交上述三项数据文件。页面的 `catalog-v3.js` 从最新有效存储读取；失败保留旧价。GitHub Secrets 需要 `HIAI_PRICE_UPDATE_TOKEN`，私有站点另需 `HIAI_SITE_BYPASS_TOKEN`；不使用 OSS 账户凭据。凭据配置、首次真实运行与域名验证必须分别记录，不能把工作流文件存在当作自动更新已完成。

更新后上传 `public/` 静态站点 artifact，保留 7 天。默认不重新部署 UI；新 UI 版本通过独立 Sites 源仓库发布。`worker/hiai-worker.mjs` 与 `scripts/hiai/build-worker.mjs` 是无依赖服务端源与构建器，站点身份及运行密钥不随此仓库公开。

## 浏览器存储限制

当前界面的收藏、对比、询价草稿等若使用浏览器本地存储，只属于当前浏览器及站点源。清理浏览器数据、无痕模式、切换设备、从本地文件改为域名访问，可能导致原数据不可见。它不等同于账号同步、服务器订单记录或已发送给供应商；敏感凭据不应写入浏览器存储。
