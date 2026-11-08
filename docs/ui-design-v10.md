# HiAi 首页 / 产品选型 UI 设计评审稿

状态：IN REVIEW。2026-11-08。页面 ID HIAI-UI-HOME-V10。独立评审入口 `/ui-design.html`，并未替换现有交互原型。需求来源：用户“去掉 GPU 分类，安排原型验收，进入 UI 设计”；继承 v9 交接的供应源、价格来源和咨询候选边界。

## 方向卡与信息架构

- 场景：Web / H5 产品选型，Operate。沿用已选 HiAi 蓝白、现有字标和 hero-v5-1 素材；不另行更换品牌。参考为现有 index.html。方向只继承品牌，不表示本稿获用户批准。
- 首屏：品牌导航 → 简短价值说明 → 产品分类 → 搜索 → 供应源 → 模型卡 → 采购入口。辨识点是蓝白选型工作区和输入/输出双列价格，避免装饰抢占选择空间。
- 关键流程：搜索/供应源筛选 → 精确型号链接进入既有原型 → 查看供应信息 / 对比；分类进入现有预置吞吐量或订阅目录；供需入口进入 demand.html。
- 本页仅模型 API 选集 12 个系列各一版本，排序继承 recognition-v6.js 的月度知名度参考顺序，不是能力排名。仅保留模型 API、模型预置吞吐量、软件订阅三个分类。
- 边界：不新增交易、账户、支付、认证或供应能力；不写入浏览器业务资料，不发送信息。

## 四阶段证据

1. frontend-design：已读 Skill 和 KB-UI-FOUR-SKILLS-001、KB-UI-PLATFORMS-001；继承既有品牌，方向如上。
2. ui-ux-pro-max：已读 Skill；系统 python 为 Windows 别名、py 不存在，改用 codex-primary-runtime/dependencies/python/python.exe 执行 search.py 'AI B2B marketplace clean blue white compact catalog' --design-system -p 'HiAi UI Review' 成功。命中 Marketplace / Directory、Trust & Authority。采纳搜索与分类优先的目录结构；不采用无事实支持的资质、指标或证书效果，也不以新字体/配色覆盖既有品牌。唯一 Token 源为 ui-design.css。
3. impeccable：已运行 context.mjs --target output/hiai-market/ui-design.html，读取 polish 与 craft-floor。工具提示新文件缺 PRODUCT.md；本任务为既有 HiAi 页面视觉方案的隔离评审，已有权威品牌和业务输入，未修改仓库通用 PRODUCT.md。精修以已存在品牌优先。
4. web-design-guidelines：2026-11-08 获取 https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md；核对语义、焦点、标签、图片尺寸、键盘、减少动效与小屏。运行结果见追加验收记录。

## 最小设计系统与开发验收

CSS 权威：output/hiai-market/ui-design.css。品牌蓝 #245bd7，悬停 #1745ae，主文字 #142642，次文字 #52647b，页面底 #f6f8fb，白底 #ffffff，边框 #dce3ee。字体沿用 Segoe UI / Microsoft YaHei / PingFang SC / sans-serif，系统回退，不引入外部字体下载；越南语由 Segoe UI 支持。

间距：4 / 8 / 12 / 16 / 24 / 32 / 48px。内容最大 1240px，桌面左右 32px，移动 16px。卡片三列，1000px 以下双列、600px 以下单列；间距桌面16px、手机12px。卡片圆角14px，按钮8px。正文16px，说明12–14px，卡片标题20px，桌面主标题44px、手机34px；长型号完整换行。金额采用等宽数字与 Intl 格式化。

组件：HIAI-HEADER-01 导航；HIAI-SOURCE-01 来源筛选；HIAI-MODEL-01 型号卡；HIAI-PRICE-01 输入/输出价格；HIAI-STATE-01 状态区。均为本项目自有结构，标识与素材沿用 assets 原来源/许可清单，未宣称新增商标授权。

状态：正常显示数据；加载文字在脚本执行前可见；空结果可清除筛选；目录缺失给错误与返回入口；图片错误采用品牌文字回退；价格未知用“待核实”。本页为公开只读浏览，无登录或权限判断，不模拟无权限业务；未来受限操作应禁用且给原因及恢复入口。来源筛选 aria-pressed 表明选中，原生 select 支持键盘；状态区 role=status，跳转链接保持真实 URL。所有主要点击区至少44px高；focus-visible 3px轮廓。无自动轮播/连续动效，减少动态效果关闭滚动与过渡。仅本页筛选无需伪造加载计时。

## 数据边界

沿用 catalog-v3.js、supply-sources-v9.js、supply-quotes-v9.js。报价通过精确 modelId 关联，不用品牌级价格冒充具体型号。默认优先可用官方价格，缺失时显示 OpenRouter 参考价；选官方不回落聚合价，选云平台显示询价，选聚合仅展示聚合价。卡片注明报价来源、状态、核验日期、币种与单位。登记来源数与云平台咨询候选分开，均不代表已认证、已签约或已可供货。当前动态官方价仍在既有原型核查。

## 基线与交付边界

HiAi v9 发布基线 Site SHA：00d3a948c218a12bb7d1b9b4be68a468e548932d。工作区 Git SHA：903e4c859fdf3986ae79752c482446977665364f。只新增 ui-design.html/css/js 与此文档；其他 Agent 同时改动既有原型。预计 20–30 分钟，Token 中。回滚方式：从部署包排除这三个独立文件，无需回退原型页面或他人改动。未提交、不建标签、不宣称正式发布。

## 本地浏览器验收

Edge headless / Playwright，http://127.0.0.1:8769/ui-design.html。output/hiai-market-evidence/v10/ui/checks.json：11/11 通过，覆盖12卡、1440/768/390/320无横向溢出、空状态重置、键盘供应源切换、减少动效、型号真实链接进入原型、返回UI、控制台无错误。已查看1440与390整页截图。未发现需改变品牌或组件结构的问题，不进行额外装饰精修。

截图：同目录1440.png、768.png、390.png、320.png；1440/390/320另有 -viewport.png 首屏。补充 a11y-static-runtime.json 为本Agent语义与运行检查，非独立读屏验收。公开域名由主 Agent 部署后验证；用户视觉确认、真机/读屏、独立可访问性审核未完成。工具或技能自带“AAA”文字不是本页合规结论。

主 Agent 记忆提案：保存 HIAI-UI-HOME-V10 作为 IN REVIEW 独立视觉候选，保留上述证据；用户确认后再把获批视觉逐项迁移到现有交互页面，不能据本稿单独完成业务验收。

## 冻结修正与差异复验

按主 Agent 源码复核意见补齐：默认官方价格优先，官方/云/聚合价格严格随选中来源切换；继承 recognition-v6 月度知名度顺序；family 查询为显示名称；恢复 HTTPS 在线体验/API 参考；采购与供应分别携带 kind/family/version/source 上下文。所有实际详情/对比操作继续由既有原型执行。

最终脚本 output/hiai-market-evidence/v10/ui-final-check.cjs（支持 HIAI_BASE_URL）；最终报告 ui/final-source-checks.json，14/14通过。包括顺序、官方优先、来源价格隔离、上下文链接、四视口、图片解码及控制台。最终截图已更新。初版默认官方优先断言错误地假设首卡 GPT 有官方价，修正为逐型号核对官方价格状态后通过，未因此改动正确产品逻辑。原8769服务随会话结束，复验改用测试脚本自持静态服务；ERR_CONNECTION_REFUSED 属测试环境错误，原场景恢复后通过。

独立 UI 三文件冻结；文档与截图为待用户确认的设计证据，不构成生产发布或正式业务验收。供需链接只预填，不自动提交。
