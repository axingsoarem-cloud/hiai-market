# HiAi 模型目录核对

采集日期：2026-11-07；状态：IN REVIEW。

- 型号、模态、价格：https://openrouter.ai/api/v1/models （官方目录，采用浏览工具读取并提取完整 JSON 型号对象；描述可能为浏览工具摘要，不视为完整模型卡）。
- 热度：https://openrouter.ai/rankings ，Today 表最新完整 UTC 日为 2026-11-06，只公开提取到前 10 型号。
- 定义：OpenRouter 公共流量的输入加输出 Token 用量；不代表全球总流量、用户数、收入或质量。
- 数据接口说明：https://openrouter.ai/docs/cookbook/administration/data-api ，完整每日前 50 型号数据需要有效 API key；本次未调用认证接口。系列总量未取得，popularityRank 全部为 null。
- 顺序：已观测型号的榜单名次优先，然后编辑候选顺序。不是全球 TOP30，也不是 30 个系列完整热度排名。
- 排名归属：Source: OpenRouter (openrouter.ai/rankings), data through 2026-11-06, collected 2026-11-07. Licensed under CC BY 4.0.
- 价格：OpenRouter 模型目录公布的参考输入/输出单价，美元每百万 Token；不是 HiAi 实际报价。额外图像、视频、音频等费用可能另计。
- 全模态仅在同一版本同时明确支持文本、视觉、音频时标注；Realtime 需要明确实时端点证据，流式文本不算实时音频；向量需 embedding 证据。没有证据的模态不添加。
- Logo 只复用已有已记录资源；未有本地商标素材时 logo=null，界面应显示品牌文本，不伪造 logo。

下载工具错误：PowerShell HTTPS Authentication failed；curl schannel SEC_E_NO_CREDENTIALS。已使用浏览工具读取官方源完成数据核对。未关闭 TLS 校验。
