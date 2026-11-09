window.HIAI_CATALOG = {
  "meta": {
    "version": 3,
    "collectedAt": "2026-11-07",
    "status": "IN REVIEW",
    "familyCount": 30,
    "title": "全球模型系列目录（30 个候选）",
    "rankingLabel": "已观测热度优先 · 其余为候选",
    "rankingLimitation": "未取得30系列完整热度数据；不是全球TOP30。已观测次序来自OpenRouter最近完整日型号榜，不能视作系列合计排名。",
    "rankingMetric": "OpenRouter 公共流量输入及输出 Token 用量",
    "rankingPeriod": "2026-11-06 UTC",
    "rankingSource": "https://openrouter.ai/rankings",
    "rankingAttribution": "Source: OpenRouter (openrouter.ai/rankings), data through 2026-11-06, collected 2026-11-07. Licensed under CC BY 4.0.",
    "priceDisclaimer": "OpenRouter 平台参考价格，USD / 百万 tokens，不是HiAi供应商实际报价；图像、音频、视频等额外费用以来源为准。",
    "source": "https://openrouter.ai/api/v1/models",
    "modalities": [
      "全模态",
      "文本",
      "视觉",
      "语音",
      "向量",
      "Realtime"
    ],
    "limitations": [
      "目录为编辑候选，未声称全部为全球最主流。",
      "部分品牌缺少本地官方Logo，以品牌文字回退。",
      "向量与Realtime尚未取得本次目录内可验证型号，筛选可显示空结果。",
      "API及Playground链接采用OpenRouter标准型号路由，未逐一执行付费调用。"
    ],
    "officialPricingPolicy": "优先同型号官方标准输入/输出价；未覆盖或失败保留明确状态，不以OpenRouter价冒充官方价。",
    "priceUpdateSchedule": "每天北京时间09:00（UTC 01:00），由仓库Actions配置；本字段不代表远程任务已启用。"
  },
  "families": [
    {
      "id": "deepseek",
      "family": "DeepSeek",
      "brand": "DeepSeek",
      "logo": "assets/deepseek.ico",
      "popularityRank": null,
      "bestObservedModelRank": 1,
      "popularitySource": "https://openrouter.ai/rankings",
      "popularityPeriod": "2026-11-06 UTC（最近完整日）",
      "versions": [
        {
          "name": "DeepSeek V4.1 Flash 1017",
          "version": "DeepSeek V4.1 Flash 1017",
          "modelId": "deepseek/deepseek-v4.1-flash-1017",
          "modalities": [
            "文本",
            "视觉"
          ],
          "inputModalities": [
            "text",
            "image"
          ],
          "outputModalities": [
            "text"
          ],
          "desc": "DeepSeek DeepSeek 系列；支持文本、视觉。",
          "description": "DeepSeek DeepSeek 系列；支持文本、视觉。",
          "source": "https://openrouter.ai/api/v1/models",
          "sourceUrl": "https://openrouter.ai/deepseek/deepseek-v4.1-flash-1017",
          "apiUrl": "https://openrouter.ai/deepseek/deepseek-v4.1-flash-1017/api",
          "playgroundUrl": "https://openrouter.ai/chat?models=deepseek%2Fdeepseek-v4.1-flash-1017",
          "inputPrice": 0.15,
          "outputPrice": 0.6,
          "currency": "USD",
          "unit": "百万 tokens",
          "billing": "按量计费",
          "priceLabel": "OpenRouter 参考价",
          "priceSource": "https://openrouter.ai/api/v1/models",
          "collectedAt": "2026-11-07",
          "bestObservedModelRank": 1,
          "contextLength": 1048576,
          "rawPricing": {
            "prompt": "0.00000015",
            "completion": "0.0000006",
            "input_cache_read": "0.000000003",
            "overrides": [
              {
                "utc_days": [
                  "saturday",
                  "sunday"
                ],
                "prompt": "0.00000015",
                "completion": "0.0000006",
                "input_cache_read": "0.000000003"
              },
              {
                "utc_days": [
                  "monday",
                  "tuesday",
                  "wednesday",
                  "thursday",
                  "friday"
                ],
                "utc_start": 0,
                "utc_end": 100,
                "prompt": "0.00000015",
                "completion": "0.0000006",
                "input_cache_read": "0.000000003"
              },
              {
                "utc_days": [
                  "monday",
                  "tuesday",
                  "wednesday",
                  "thursday",
                  "friday"
                ],
                "utc_start": 100,
                "utc_end": 400,
                "prompt": "0.0000003",
                "completion": "0.0000012",
                "input_cache_read": "0.000000006"
              },
              {
                "utc_days": [
                  "monday",
                  "tuesday",
                  "wednesday",
                  "thursday",
                  "friday"
                ],
                "utc_start": 400,
                "utc_end": 600,
                "prompt": "0.00000015",
                "completion": "0.0000006",
                "input_cache_read": "0.000000003"
              },
              {
                "utc_days": [
                  "monday",
                  "tuesday",
                  "wednesday",
                  "thursday",
                  "friday"
                ],
                "utc_start": 600,
                "utc_end": 1000,
                "prompt": "0.0000003",
                "completion": "0.0000012",
                "input_cache_read": "0.000000006"
              },
              {
                "utc_days": [
                  "monday",
                  "tuesday",
                  "wednesday",
                  "thursday",
                  "friday"
                ],
                "utc_start": 1000,
                "utc_end": 0,
                "prompt": "0.00000015",
                "completion": "0.0000006",
                "input_cache_read": "0.000000003"
              }
            ]
          },
          "officialPricing": {
            "input": 0.3,
            "output": 1.2,
            "tier": "高峰标准价；低峰价另列",
            "offPeakInput": 0.15,
            "offPeakOutput": 0.6,
            "note": "高峰：周一至周五 UTC 01:00–04:00、06:00–10:00，中国法定节假日除外；其他时间为低峰。",
            "unit": "百万 tokens",
            "currency": "USD",
            "sourceUrl": "https://api-docs.deepseek.com/quick_start/pricing/",
            "updatedAt": "2026-11-09T07:39:51.562Z",
            "checkedAt": "2026-11-09T07:39:51.562Z",
            "status": "verified",
            "method": "official-source-parser",
            "evidenceHash": "af6679690eb9a7838c47727bfc5ffdc4ac91c4445a0c1219741ffe00c076ece5"
          },
          "officialPlaygroundUrl": null,
          "officialPlaygroundScope": null,
          "officialPlaygroundNote": null,
          "officialApiUrl": null
        },
        {
          "name": "DeepSeek V3 0324",
          "version": "DeepSeek V3 0324",
          "modelId": "deepseek/deepseek-chat-v3-0324",
          "modalities": [
            "文本"
          ],
          "inputModalities": [
            "text"
          ],
          "outputModalities": [
            "text"
          ],
          "desc": "DeepSeek DeepSeek 系列；支持文本。",
          "description": "DeepSeek DeepSeek 系列；支持文本。",
          "source": "https://openrouter.ai/api/v1/models",
          "sourceUrl": "https://openrouter.ai/deepseek/deepseek-chat-v3-0324",
          "apiUrl": "https://openrouter.ai/deepseek/deepseek-chat-v3-0324/api",
          "playgroundUrl": "https://openrouter.ai/chat?models=deepseek%2Fdeepseek-chat-v3-0324",
          "inputPrice": 0.29,
          "outputPrice": 1.1400000000000001,
          "currency": "USD",
          "unit": "百万 tokens",
          "billing": "按量计费",
          "priceLabel": "OpenRouter 参考价",
          "priceSource": "https://openrouter.ai/api/v1/models",
          "collectedAt": "2026-11-07",
          "bestObservedModelRank": null,
          "contextLength": 163840,
          "rawPricing": {
            "prompt": "0.00000029",
            "completion": "0.00000114",
            "input_cache_read": "0.00000011"
          },
          "officialPricing": {
            "input": null,
            "output": null,
            "unit": "百万 tokens",
            "currency": "USD",
            "sourceUrl": null,
            "updatedAt": null,
            "status": "unsupported",
            "note": "同型号官方标准价尚未核实；OpenRouter平台参考价单独保留。"
          },
          "officialPlaygroundUrl": null,
          "officialPlaygroundScope": null,
          "officialPlaygroundNote": null,
          "officialApiUrl": null
        }
      ]
    },
    {
      "id": "hy",
      "family": "Hunyuan / Hy",
      "brand": "Tencent",
      "logo": "assets/hunyuan.svg",
      "popularityRank": null,
      "bestObservedModelRank": 2,
      "popularitySource": "https://openrouter.ai/rankings",
      "popularityPeriod": "2026-11-06 UTC（最近完整日）",
      "versions": [
        {
          "name": "Hy4",
          "version": "Hy4",
          "modelId": "tencent/hy4",
          "modalities": [
            "文本",
            "视觉"
          ],
          "inputModalities": [
            "text",
            "image"
          ],
          "outputModalities": [
            "text"
          ],
          "desc": "Tencent Hunyuan / Hy 系列；支持文本、视觉。",
          "description": "Tencent Hunyuan / Hy 系列；支持文本、视觉。",
          "source": "https://openrouter.ai/api/v1/models",
          "sourceUrl": "https://openrouter.ai/tencent/hy4",
          "apiUrl": "https://openrouter.ai/tencent/hy4/api",
          "playgroundUrl": "https://openrouter.ai/chat?models=tencent%2Fhy4",
          "inputPrice": 0.417,
          "outputPrice": 1.2505,
          "currency": "USD",
          "unit": "百万 tokens",
          "billing": "按量计费",
          "priceLabel": "OpenRouter 参考价",
          "priceSource": "https://openrouter.ai/api/v1/models",
          "collectedAt": "2026-11-07",
          "bestObservedModelRank": 2,
          "contextLength": 1048576,
          "rawPricing": {
            "prompt": "0.000000417",
            "completion": "0.0000012505",
            "input_cache_read": "0.000000021"
          },
          "officialPricing": {
            "input": null,
            "output": null,
            "unit": "百万 tokens",
            "currency": "USD",
            "sourceUrl": null,
            "updatedAt": null,
            "status": "unsupported",
            "note": "同型号官方标准价尚未核实；OpenRouter平台参考价单独保留。"
          },
          "officialPlaygroundUrl": null,
          "officialPlaygroundScope": null,
          "officialPlaygroundNote": null,
          "officialApiUrl": null
        }
      ]
    },
    {
      "id": "glm",
      "family": "GLM",
      "brand": "Z.ai",
      "logo": "assets/glm.svg",
      "popularityRank": null,
      "bestObservedModelRank": 4,
      "popularitySource": "https://openrouter.ai/rankings",
      "popularityPeriod": "2026-11-06 UTC（最近完整日）",
      "versions": [
        {
          "name": "GLM 5.3 FlashX Legal",
          "version": "GLM 5.3 FlashX Legal",
          "modelId": "z-ai/glm-5.3-flashx-legal",
          "modalities": [
            "文本",
            "视觉"
          ],
          "inputModalities": [
            "text",
            "image",
            "video"
          ],
          "outputModalities": [
            "text"
          ],
          "desc": "Z.ai GLM 系列；支持文本、视觉。",
          "description": "Z.ai GLM 系列；支持文本、视觉。",
          "source": "https://openrouter.ai/api/v1/models",
          "sourceUrl": "https://openrouter.ai/z-ai/glm-5.3-flashx-legal",
          "apiUrl": "https://openrouter.ai/z-ai/glm-5.3-flashx-legal/api",
          "playgroundUrl": "https://openrouter.ai/chat?models=z-ai%2Fglm-5.3-flashx-legal",
          "inputPrice": 0.37,
          "outputPrice": 1.25,
          "currency": "USD",
          "unit": "百万 tokens",
          "billing": "按量计费",
          "priceLabel": "OpenRouter 参考价",
          "priceSource": "https://openrouter.ai/api/v1/models",
          "collectedAt": "2026-11-07",
          "bestObservedModelRank": null,
          "contextLength": 1048576,
          "rawPricing": {
            "prompt": "0.00000037",
            "completion": "0.00000125",
            "input_cache_read": "0.000000075"
          },
          "officialPricing": {
            "input": 0.37,
            "output": 1.25,
            "tier": "Standard",
            "unit": "百万 tokens",
            "currency": "USD",
            "sourceUrl": "https://docs.z.ai/guides/overview/pricing",
            "updatedAt": "2026-11-09T07:39:51.562Z",
            "checkedAt": "2026-11-09T07:39:51.562Z",
            "status": "verified",
            "method": "official-source-parser",
            "evidenceHash": "4ee3a3e9eab6eab9d8a06309fe6984d82db7351586786bb8422deee1f16f78bf"
          },
          "officialPlaygroundUrl": "https://chat.z.ai/",
          "officialPlaygroundScope": "brand-portal",
          "officialPlaygroundNote": "官方品牌体验入口；需登录并自行确认型号可用性，不保证直达当前版本。",
          "officialApiUrl": null
        },
        {
          "name": "GLM 5V Turbo",
          "version": "GLM 5V Turbo",
          "modelId": "z-ai/glm-5v-turbo",
          "modalities": [
            "文本",
            "视觉"
          ],
          "inputModalities": [
            "image",
            "text",
            "video"
          ],
          "outputModalities": [
            "text"
          ],
          "desc": "Z.ai GLM 系列；支持文本、视觉。",
          "description": "Z.ai GLM 系列；支持文本、视觉。",
          "source": "https://openrouter.ai/api/v1/models",
          "sourceUrl": "https://openrouter.ai/z-ai/glm-5v-turbo",
          "apiUrl": "https://openrouter.ai/z-ai/glm-5v-turbo/api",
          "playgroundUrl": "https://openrouter.ai/chat?models=z-ai%2Fglm-5v-turbo",
          "inputPrice": 1.2,
          "outputPrice": 4,
          "currency": "USD",
          "unit": "百万 tokens",
          "billing": "按量计费",
          "priceLabel": "OpenRouter 参考价",
          "priceSource": "https://openrouter.ai/api/v1/models",
          "collectedAt": "2026-11-07",
          "bestObservedModelRank": null,
          "contextLength": 202752,
          "rawPricing": {
            "prompt": "0.0000012",
            "completion": "0.000004",
            "input_cache_read": "0.00000024"
          },
          "officialPricing": {
            "input": null,
            "output": null,
            "unit": "百万 tokens",
            "currency": "USD",
            "sourceUrl": "https://docs.z.ai/guides/overview/pricing",
            "updatedAt": null,
            "status": "unsupported",
            "note": "同型号官方标准价尚未核实；OpenRouter平台参考价单独保留。"
          },
          "officialPlaygroundUrl": "https://chat.z.ai/",
          "officialPlaygroundScope": "brand-portal",
          "officialPlaygroundNote": "官方品牌体验入口；需登录并自行确认型号可用性，不保证直达当前版本。",
          "officialApiUrl": null
        },
        {
          "name": "GLM 5 Turbo",
          "version": "GLM 5 Turbo",
          "modelId": "z-ai/glm-5-turbo",
          "modalities": [
            "文本"
          ],
          "inputModalities": [
            "text"
          ],
          "outputModalities": [
            "text"
          ],
          "desc": "Z.ai GLM 系列；支持文本。",
          "description": "Z.ai GLM 系列；支持文本。",
          "source": "https://openrouter.ai/api/v1/models",
          "sourceUrl": "https://openrouter.ai/z-ai/glm-5-turbo",
          "apiUrl": "https://openrouter.ai/z-ai/glm-5-turbo/api",
          "playgroundUrl": "https://openrouter.ai/chat?models=z-ai%2Fglm-5-turbo",
          "inputPrice": 1.2,
          "outputPrice": 4,
          "currency": "USD",
          "unit": "百万 tokens",
          "billing": "按量计费",
          "priceLabel": "OpenRouter 参考价",
          "priceSource": "https://openrouter.ai/api/v1/models",
          "collectedAt": "2026-11-07",
          "bestObservedModelRank": null,
          "contextLength": 202752,
          "rawPricing": {
            "prompt": "0.0000012",
            "completion": "0.000004",
            "input_cache_read": "0.00000024"
          },
          "officialPricing": {
            "input": null,
            "output": null,
            "unit": "百万 tokens",
            "currency": "USD",
            "sourceUrl": "https://docs.z.ai/guides/overview/pricing",
            "updatedAt": null,
            "status": "unsupported",
            "note": "同型号官方标准价尚未核实；OpenRouter平台参考价单独保留。"
          },
          "officialPlaygroundUrl": "https://chat.z.ai/",
          "officialPlaygroundScope": "brand-portal",
          "officialPlaygroundNote": "官方品牌体验入口；需登录并自行确认型号可用性，不保证直达当前版本。",
          "officialApiUrl": null
        }
      ]
    },
    {
      "id": "gpt",
      "family": "GPT",
      "brand": "OpenAI",
      "logo": "assets/openai.svg",
      "popularityRank": null,
      "bestObservedModelRank": 5,
      "popularitySource": "https://openrouter.ai/rankings",
      "popularityPeriod": "2026-11-06 UTC（最近完整日）",
      "versions": [
        {
          "name": "GPT-6.1 Terra Pro",
          "version": "GPT-6.1 Terra Pro",
          "modelId": "openai/gpt-6.1-terra-pro",
          "modalities": [
            "文本",
            "视觉"
          ],
          "inputModalities": [
            "file",
            "image",
            "text"
          ],
          "outputModalities": [
            "text"
          ],
          "desc": "OpenAI GPT 系列；支持文本、视觉。",
          "description": "OpenAI GPT 系列；支持文本、视觉。",
          "source": "https://openrouter.ai/api/v1/models",
          "sourceUrl": "https://openrouter.ai/openai/gpt-6.1-terra-pro",
          "apiUrl": "https://openrouter.ai/openai/gpt-6.1-terra-pro/api",
          "playgroundUrl": "https://openrouter.ai/chat?models=openai%2Fgpt-6.1-terra-pro",
          "inputPrice": 1,
          "outputPrice": 5,
          "currency": "USD",
          "unit": "百万 tokens",
          "billing": "按量计费",
          "priceLabel": "OpenRouter 参考价",
          "priceSource": "https://openrouter.ai/api/v1/models",
          "collectedAt": "2026-11-07",
          "bestObservedModelRank": null,
          "contextLength": 1050000,
          "rawPricing": {
            "prompt": "0.000001",
            "completion": "0.000005",
            "web_search": "0.01",
            "input_cache_read": "0.00000005",
            "input_cache_write": "0.00000125",
            "overrides": [
              {
                "min_prompt_tokens": 272000,
                "prompt": "0.000002",
                "completion": "0.0000075",
                "input_cache_read": "0.0000001",
                "input_cache_write": "0.0000025"
              }
            ]
          },
          "officialPricing": {
            "input": null,
            "output": null,
            "unit": "百万 tokens",
            "currency": "USD",
            "sourceUrl": "https://developers.openai.com/api/docs/pricing",
            "updatedAt": null,
            "status": "unsupported",
            "note": "同型号官方标准价尚未核实；OpenRouter平台参考价单独保留。"
          },
          "officialPlaygroundUrl": "https://platform.openai.com/playground",
          "officialPlaygroundScope": "brand-portal",
          "officialPlaygroundNote": "官方品牌体验入口；需登录并自行确认型号可用性，不保证直达当前版本。",
          "officialApiUrl": null
        },
        {
          "name": "GPT-6.1 Terra",
          "version": "GPT-6.1 Terra",
          "modelId": "openai/gpt-6.1-terra",
          "modalities": [
            "文本",
            "视觉"
          ],
          "inputModalities": [
            "file",
            "image",
            "text"
          ],
          "outputModalities": [
            "text"
          ],
          "desc": "OpenAI GPT 系列；支持文本、视觉。",
          "description": "OpenAI GPT 系列；支持文本、视觉。",
          "source": "https://openrouter.ai/api/v1/models",
          "sourceUrl": "https://openrouter.ai/openai/gpt-6.1-terra",
          "apiUrl": "https://openrouter.ai/openai/gpt-6.1-terra/api",
          "playgroundUrl": "https://openrouter.ai/chat?models=openai%2Fgpt-6.1-terra",
          "inputPrice": 1,
          "outputPrice": 5,
          "currency": "USD",
          "unit": "百万 tokens",
          "billing": "按量计费",
          "priceLabel": "OpenRouter 参考价",
          "priceSource": "https://openrouter.ai/api/v1/models",
          "collectedAt": "2026-11-07",
          "bestObservedModelRank": null,
          "contextLength": 1050000,
          "rawPricing": {
            "prompt": "0.000001",
            "completion": "0.000005",
            "web_search": "0.01",
            "input_cache_read": "0.00000005",
            "input_cache_write": "0.00000125",
            "overrides": [
              {
                "min_prompt_tokens": 272000,
                "prompt": "0.000002",
                "completion": "0.0000075",
                "input_cache_read": "0.0000001",
                "input_cache_write": "0.0000025"
              }
            ]
          },
          "officialPricing": {
            "input": 1,
            "output": 5,
            "unit": "百万 tokens",
            "currency": "USD",
            "sourceUrl": "https://developers.openai.com/api/docs/pricing",
            "updatedAt": "2026-11-07T10:30:05.368Z",
            "status": "stale",
            "method": "official-page-manual-verification",
            "tier": "Standard；Short context（以官方档位定义为准）",
            "note": "仅基础输入/输出价格，缓存、工具、特殊模态及其他档位另计。",
            "checkedAt": "2026-11-09T07:39:51.562Z",
            "lastError": "未取得同型号、同档位官方价格；保留已有价格及其核验时间。"
          },
          "officialPlaygroundUrl": "https://platform.openai.com/playground",
          "officialPlaygroundScope": "brand-portal",
          "officialPlaygroundNote": "官方品牌体验入口；需登录并自行确认型号可用性，不保证直达当前版本。",
          "officialApiUrl": null
        },
        {
          "name": "GPT-6 Luna",
          "version": "GPT-6 Luna",
          "modelId": "openai/gpt-6-luna",
          "modalities": [
            "文本",
            "视觉"
          ],
          "inputModalities": [
            "file",
            "image",
            "text"
          ],
          "outputModalities": [
            "text"
          ],
          "desc": "OpenAI GPT 系列；支持文本、视觉。",
          "description": "OpenAI GPT 系列；支持文本、视觉。",
          "source": "https://openrouter.ai/api/v1/models",
          "sourceUrl": "https://openrouter.ai/openai/gpt-6-luna",
          "apiUrl": "https://openrouter.ai/openai/gpt-6-luna/api",
          "playgroundUrl": "https://openrouter.ai/chat?models=openai%2Fgpt-6-luna",
          "inputPrice": 0.09999999999999999,
          "outputPrice": 0.5,
          "currency": "USD",
          "unit": "百万 tokens",
          "billing": "按量计费",
          "priceLabel": "OpenRouter 参考价",
          "priceSource": "https://openrouter.ai/api/v1/models",
          "collectedAt": "2026-11-07",
          "bestObservedModelRank": 5,
          "contextLength": 1050000,
          "rawPricing": {
            "prompt": "0.0000001",
            "completion": "0.0000005",
            "web_search": "0.01",
            "input_cache_read": "0.00000001",
            "input_cache_write": "0.000000125",
            "overrides": [
              {
                "min_prompt_tokens": 272000,
                "prompt": "0.0000002",
                "completion": "0.00000075",
                "input_cache_read": "0.00000002",
                "input_cache_write": "0.00000025"
              }
            ]
          },
          "officialPricing": {
            "input": 0.1,
            "output": 0.5,
            "unit": "百万 tokens",
            "currency": "USD",
            "sourceUrl": "https://developers.openai.com/api/docs/pricing",
            "updatedAt": "2026-11-07T10:30:05.368Z",
            "status": "stale",
            "method": "official-page-manual-verification",
            "tier": "Standard；Short context（以官方档位定义为准）",
            "note": "仅基础输入/输出价格，缓存、工具、特殊模态及其他档位另计。",
            "checkedAt": "2026-11-09T07:39:51.562Z",
            "lastError": "未取得同型号、同档位官方价格；保留已有价格及其核验时间。"
          },
          "officialPlaygroundUrl": "https://platform.openai.com/playground",
          "officialPlaygroundScope": "brand-portal",
          "officialPlaygroundNote": "官方品牌体验入口；需登录并自行确认型号可用性，不保证直达当前版本。",
          "officialApiUrl": null
        },
        {
          "name": "GPT-6 Sol Pro",
          "version": "GPT-6 Sol Pro",
          "modelId": "openai/gpt-6-sol-pro",
          "modalities": [
            "文本",
            "视觉"
          ],
          "inputModalities": [
            "file",
            "image",
            "text"
          ],
          "outputModalities": [
            "text"
          ],
          "desc": "OpenAI GPT 系列；支持文本、视觉。",
          "description": "OpenAI GPT 系列；支持文本、视觉。",
          "source": "https://openrouter.ai/api/v1/models",
          "sourceUrl": "https://openrouter.ai/openai/gpt-6-sol-pro",
          "apiUrl": "https://openrouter.ai/openai/gpt-6-sol-pro/api",
          "playgroundUrl": "https://openrouter.ai/chat?models=openai%2Fgpt-6-sol-pro",
          "inputPrice": 2,
          "outputPrice": 10,
          "currency": "USD",
          "unit": "百万 tokens",
          "billing": "按量计费",
          "priceLabel": "OpenRouter 参考价",
          "priceSource": "https://openrouter.ai/api/v1/models",
          "collectedAt": "2026-11-07",
          "bestObservedModelRank": null,
          "contextLength": 1050000,
          "rawPricing": {
            "prompt": "0.000002",
            "completion": "0.00001",
            "web_search": "0.01",
            "input_cache_read": "0.0000002",
            "input_cache_write": "0.0000025",
            "overrides": [
              {
                "min_prompt_tokens": 272000,
                "prompt": "0.000004",
                "completion": "0.000015",
                "input_cache_read": "0.0000004",
                "input_cache_write": "0.000005"
              }
            ]
          },
          "officialPricing": {
            "input": null,
            "output": null,
            "unit": "百万 tokens",
            "currency": "USD",
            "sourceUrl": "https://developers.openai.com/api/docs/pricing",
            "updatedAt": null,
            "status": "unsupported",
            "note": "同型号官方标准价尚未核实；OpenRouter平台参考价单独保留。"
          },
          "officialPlaygroundUrl": "https://platform.openai.com/playground",
          "officialPlaygroundScope": "brand-portal",
          "officialPlaygroundNote": "官方品牌体验入口；需登录并自行确认型号可用性，不保证直达当前版本。",
          "officialApiUrl": null
        }
      ]
    },
    {
      "id": "claude",
      "family": "Claude",
      "brand": "Anthropic",
      "logo": "assets/claude.svg",
      "popularityRank": null,
      "bestObservedModelRank": 7,
      "popularitySource": "https://openrouter.ai/rankings",
      "popularityPeriod": "2026-11-06 UTC（最近完整日）",
      "versions": [
        {
          "name": "Claude Opus 5.5",
          "version": "Claude Opus 5.5",
          "modelId": "anthropic/claude-opus-5.5",
          "modalities": [
            "文本",
            "视觉"
          ],
          "inputModalities": [
            "text",
            "image",
            "file"
          ],
          "outputModalities": [
            "text"
          ],
          "desc": "Anthropic Claude 系列；支持文本、视觉。",
          "description": "Anthropic Claude 系列；支持文本、视觉。",
          "source": "https://openrouter.ai/api/v1/models",
          "sourceUrl": "https://openrouter.ai/anthropic/claude-opus-5.5",
          "apiUrl": "https://openrouter.ai/anthropic/claude-opus-5.5/api",
          "playgroundUrl": "https://openrouter.ai/chat?models=anthropic%2Fclaude-opus-5.5",
          "inputPrice": 4,
          "outputPrice": 20,
          "currency": "USD",
          "unit": "百万 tokens",
          "billing": "按量计费",
          "priceLabel": "OpenRouter 参考价",
          "priceSource": "https://openrouter.ai/api/v1/models",
          "collectedAt": "2026-11-07",
          "bestObservedModelRank": 7,
          "contextLength": 1000000,
          "rawPricing": {
            "prompt": "0.000004",
            "completion": "0.00002",
            "web_search": "0.01",
            "input_cache_read": "0.0000002",
            "input_cache_write": "0.000005",
            "input_cache_write_1h": "0.000008"
          },
          "officialPricing": {
            "input": 4,
            "output": 20,
            "unit": "百万 tokens",
            "currency": "USD",
            "sourceUrl": "https://platform.claude.com/docs/en/about-claude/pricing",
            "updatedAt": "2026-11-07T10:30:05.368Z",
            "status": "stale",
            "method": "official-page-manual-verification",
            "tier": "Standard；Global",
            "note": "仅基础输入/输出价格，缓存、工具、特殊模态及其他档位另计。",
            "checkedAt": "2026-11-09T07:39:51.562Z",
            "lastError": "未取得同型号、同档位官方价格；保留已有价格及其核验时间。"
          },
          "officialPlaygroundUrl": "https://platform.claude.com/playground",
          "officialPlaygroundScope": "brand-portal",
          "officialPlaygroundNote": "官方品牌体验入口；需登录并自行确认型号可用性，不保证直达当前版本。",
          "officialApiUrl": null
        },
        {
          "name": "Claude Haiku 4.5",
          "version": "Claude Haiku 4.5",
          "modelId": "anthropic/claude-haiku-4.5",
          "modalities": [
            "文本",
            "视觉"
          ],
          "inputModalities": [
            "text",
            "image",
            "file"
          ],
          "outputModalities": [
            "text"
          ],
          "desc": "Anthropic Claude 系列；支持文本、视觉。",
          "description": "Anthropic Claude 系列；支持文本、视觉。",
          "source": "https://openrouter.ai/api/v1/models",
          "sourceUrl": "https://openrouter.ai/anthropic/claude-haiku-4.5",
          "apiUrl": "https://openrouter.ai/anthropic/claude-haiku-4.5/api",
          "playgroundUrl": "https://openrouter.ai/chat?models=anthropic%2Fclaude-haiku-4.5",
          "inputPrice": 1,
          "outputPrice": 5,
          "currency": "USD",
          "unit": "百万 tokens",
          "billing": "按量计费",
          "priceLabel": "OpenRouter 参考价",
          "priceSource": "https://openrouter.ai/api/v1/models",
          "collectedAt": "2026-11-07",
          "bestObservedModelRank": null,
          "contextLength": 200000,
          "rawPricing": {
            "prompt": "0.000001",
            "completion": "0.000005",
            "web_search": "0.01",
            "input_cache_read": "0.0000001",
            "input_cache_write": "0.00000125",
            "input_cache_write_1h": "0.000002"
          },
          "officialPricing": {
            "input": 1,
            "output": 5,
            "unit": "百万 tokens",
            "currency": "USD",
            "sourceUrl": "https://platform.claude.com/docs/en/about-claude/pricing",
            "updatedAt": "2026-11-07T10:30:05.368Z",
            "status": "stale",
            "method": "official-page-manual-verification",
            "tier": "Standard；Global",
            "note": "仅基础输入/输出价格，缓存、工具、特殊模态及其他档位另计。",
            "checkedAt": "2026-11-09T07:39:51.562Z",
            "lastError": "未取得同型号、同档位官方价格；保留已有价格及其核验时间。"
          },
          "officialPlaygroundUrl": "https://platform.claude.com/playground",
          "officialPlaygroundScope": "brand-portal",
          "officialPlaygroundNote": "官方品牌体验入口；需登录并自行确认型号可用性，不保证直达当前版本。",
          "officialApiUrl": null
        }
      ]
    },
    {
      "id": "minimax",
      "family": "MiniMax",
      "brand": "MiniMax",
      "logo": "assets/minimax.svg",
      "popularityRank": null,
      "bestObservedModelRank": 9,
      "popularitySource": "https://openrouter.ai/rankings",
      "popularityPeriod": "2026-11-06 UTC（最近完整日）",
      "versions": [
        {
          "name": "MiniMax M3.1 Flash",
          "version": "MiniMax M3.1 Flash",
          "modelId": "minimax/minimax-m3.1-flash",
          "modalities": [
            "文本",
            "视觉"
          ],
          "inputModalities": [
            "text",
            "image",
            "video"
          ],
          "outputModalities": [
            "text"
          ],
          "desc": "MiniMax MiniMax 系列；支持文本、视觉。",
          "description": "MiniMax MiniMax 系列；支持文本、视觉。",
          "source": "https://openrouter.ai/api/v1/models",
          "sourceUrl": "https://openrouter.ai/minimax/minimax-m3.1-flash",
          "apiUrl": "https://openrouter.ai/minimax/minimax-m3.1-flash/api",
          "playgroundUrl": "https://openrouter.ai/chat?models=minimax%2Fminimax-m3.1-flash",
          "inputPrice": 0.15,
          "outputPrice": 0.6,
          "currency": "USD",
          "unit": "百万 tokens",
          "billing": "按量计费",
          "priceLabel": "OpenRouter 参考价",
          "priceSource": "https://openrouter.ai/api/v1/models",
          "collectedAt": "2026-11-07",
          "bestObservedModelRank": 9,
          "contextLength": 1048576,
          "rawPricing": {
            "prompt": "0.00000015",
            "completion": "0.0000006",
            "input_cache_read": "0.000000015",
            "overrides": [
              {
                "utc_start": 1500,
                "utc_end": 100,
                "prompt": "0.000000075",
                "completion": "0.0000003",
                "input_cache_read": "0.0000000075"
              },
              {
                "utc_start": 100,
                "utc_end": 1500,
                "prompt": "0.00000015",
                "completion": "0.0000006",
                "input_cache_read": "0.000000015"
              }
            ]
          },
          "officialPricing": {
            "input": null,
            "output": null,
            "unit": "百万 tokens",
            "currency": "USD",
            "sourceUrl": "https://www.minimax.io/",
            "updatedAt": null,
            "status": "unsupported",
            "note": "同型号官方标准价尚未核实；OpenRouter平台参考价单独保留。"
          },
          "officialPlaygroundUrl": "https://agent.minimax.io/",
          "officialPlaygroundScope": "brand-portal",
          "officialPlaygroundNote": "官方品牌体验入口；需登录并自行确认型号可用性，不保证直达当前版本。",
          "officialApiUrl": null
        },
        {
          "name": "MiniMax M2.7",
          "version": "MiniMax M2.7",
          "modelId": "minimax/minimax-m2.7",
          "modalities": [
            "文本"
          ],
          "inputModalities": [
            "text"
          ],
          "outputModalities": [
            "text"
          ],
          "desc": "MiniMax MiniMax 系列；支持文本。",
          "description": "MiniMax MiniMax 系列；支持文本。",
          "source": "https://openrouter.ai/api/v1/models",
          "sourceUrl": "https://openrouter.ai/minimax/minimax-m2.7",
          "apiUrl": "https://openrouter.ai/minimax/minimax-m2.7/api",
          "playgroundUrl": "https://openrouter.ai/chat?models=minimax%2Fminimax-m2.7",
          "inputPrice": 0.21,
          "outputPrice": 0.84,
          "currency": "USD",
          "unit": "百万 tokens",
          "billing": "按量计费",
          "priceLabel": "OpenRouter 参考价",
          "priceSource": "https://openrouter.ai/api/v1/models",
          "collectedAt": "2026-11-07",
          "bestObservedModelRank": null,
          "contextLength": 204800,
          "rawPricing": {
            "prompt": "0.00000021",
            "completion": "0.00000084",
            "input_cache_read": "0.000000042"
          },
          "officialPricing": {
            "input": 0.3,
            "output": 1.2,
            "unit": "百万 tokens",
            "currency": "USD",
            "sourceUrl": "https://platform.minimax.io/subscribe/token-plan?tab=api-enterprise",
            "updatedAt": "2026-11-07T10:30:05.368Z",
            "status": "verified",
            "method": "official-page-manual-verification",
            "tier": "Standard",
            "note": "仅基础输入/输出价格，缓存、工具、特殊模态及其他档位另计。"
          },
          "officialPlaygroundUrl": "https://agent.minimax.io/",
          "officialPlaygroundScope": "brand-portal",
          "officialPlaygroundNote": "官方品牌体验入口；需登录并自行确认型号可用性，不保证直达当前版本。",
          "officialApiUrl": "https://www.minimax.io/"
        }
      ]
    },
    {
      "id": "kimi",
      "family": "Kimi",
      "brand": "Moonshot AI",
      "logo": "assets/kimi.png",
      "popularityRank": null,
      "bestObservedModelRank": null,
      "popularitySource": "https://openrouter.ai/rankings",
      "popularityPeriod": "2026-11-06 UTC（最近完整日）",
      "versions": [
        {
          "name": "Kimi K3.1 Pro",
          "version": "Kimi K3.1 Pro",
          "modelId": "moonshotai/kimi-k3.1-pro",
          "modalities": [
            "文本",
            "视觉"
          ],
          "inputModalities": [
            "text",
            "image",
            "video"
          ],
          "outputModalities": [
            "text"
          ],
          "desc": "Moonshot AI Kimi 系列；支持文本、视觉。",
          "description": "Moonshot AI Kimi 系列；支持文本、视觉。",
          "source": "https://openrouter.ai/api/v1/models",
          "sourceUrl": "https://openrouter.ai/moonshotai/kimi-k3.1-pro",
          "apiUrl": "https://openrouter.ai/moonshotai/kimi-k3.1-pro/api",
          "playgroundUrl": "https://openrouter.ai/chat?models=moonshotai%2Fkimi-k3.1-pro",
          "inputPrice": 2,
          "outputPrice": 10,
          "currency": "USD",
          "unit": "百万 tokens",
          "billing": "按量计费",
          "priceLabel": "OpenRouter 参考价",
          "priceSource": "https://openrouter.ai/api/v1/models",
          "collectedAt": "2026-11-07",
          "bestObservedModelRank": null,
          "contextLength": 1048576,
          "rawPricing": {
            "prompt": "0.000002",
            "completion": "0.00001",
            "input_cache_read": "0.0000002"
          },
          "officialPricing": {
            "input": null,
            "output": null,
            "unit": "百万 tokens",
            "currency": "USD",
            "sourceUrl": "https://platform.kimi.ai/docs/pricing/chat",
            "updatedAt": null,
            "status": "unsupported",
            "note": "同型号官方标准价尚未核实；OpenRouter平台参考价单独保留。"
          },
          "officialPlaygroundUrl": "https://www.kimi.com/",
          "officialPlaygroundScope": "brand-portal",
          "officialPlaygroundNote": "官方品牌体验入口；需登录并自行确认型号可用性，不保证直达当前版本。",
          "officialApiUrl": null
        },
        {
          "name": "Kimi K3",
          "version": "Kimi K3",
          "modelId": "moonshotai/kimi-k3",
          "modalities": [
            "文本",
            "视觉"
          ],
          "inputModalities": [
            "text",
            "image",
            "video"
          ],
          "outputModalities": [
            "text"
          ],
          "desc": "Moonshot AI Kimi 系列；支持文本、视觉。",
          "description": "Moonshot AI Kimi 系列；支持文本、视觉。",
          "source": "https://openrouter.ai/api/v1/models",
          "sourceUrl": "https://openrouter.ai/moonshotai/kimi-k3",
          "apiUrl": "https://openrouter.ai/moonshotai/kimi-k3/api",
          "playgroundUrl": "https://openrouter.ai/chat?models=moonshotai%2Fkimi-k3",
          "inputPrice": 0.192,
          "outputPrice": 16,
          "currency": "USD",
          "unit": "百万 tokens",
          "billing": "按量计费",
          "priceLabel": "OpenRouter 参考价",
          "priceSource": "https://openrouter.ai/api/v1/models",
          "collectedAt": "2026-11-07",
          "bestObservedModelRank": null,
          "contextLength": 1048576,
          "rawPricing": {
            "prompt": "0.000000192",
            "completion": "0.000016",
            "input_cache_read": "0.000000182"
          },
          "officialPricing": {
            "input": null,
            "output": null,
            "unit": "百万 tokens",
            "currency": "USD",
            "sourceUrl": "https://platform.kimi.ai/docs/pricing/chat",
            "updatedAt": null,
            "status": "unsupported",
            "note": "同型号官方标准价尚未核实；OpenRouter平台参考价单独保留。"
          },
          "officialPlaygroundUrl": "https://www.kimi.com/",
          "officialPlaygroundScope": "brand-portal",
          "officialPlaygroundNote": "官方品牌体验入口；需登录并自行确认型号可用性，不保证直达当前版本。",
          "officialApiUrl": null
        },
        {
          "name": "Kimi K2 Thinking",
          "version": "Kimi K2 Thinking",
          "modelId": "moonshotai/kimi-k2-thinking",
          "modalities": [
            "文本"
          ],
          "inputModalities": [
            "text"
          ],
          "outputModalities": [
            "text"
          ],
          "desc": "Moonshot AI Kimi 系列；支持文本。",
          "description": "Moonshot AI Kimi 系列；支持文本。",
          "source": "https://openrouter.ai/api/v1/models",
          "sourceUrl": "https://openrouter.ai/moonshotai/kimi-k2-thinking",
          "apiUrl": "https://openrouter.ai/moonshotai/kimi-k2-thinking/api",
          "playgroundUrl": "https://openrouter.ai/chat?models=moonshotai%2Fkimi-k2-thinking",
          "inputPrice": 0.6,
          "outputPrice": 2.5,
          "currency": "USD",
          "unit": "百万 tokens",
          "billing": "按量计费",
          "priceLabel": "OpenRouter 参考价",
          "priceSource": "https://openrouter.ai/api/v1/models",
          "collectedAt": "2026-11-07",
          "bestObservedModelRank": null,
          "contextLength": 262144,
          "rawPricing": {
            "prompt": "0.0000006",
            "completion": "0.0000025",
            "input_cache_read": "0.00000015"
          },
          "officialPricing": {
            "input": null,
            "output": null,
            "unit": "百万 tokens",
            "currency": "USD",
            "sourceUrl": "https://platform.kimi.ai/docs/pricing/chat",
            "updatedAt": null,
            "status": "unsupported",
            "note": "同型号官方标准价尚未核实；OpenRouter平台参考价单独保留。"
          },
          "officialPlaygroundUrl": "https://www.kimi.com/",
          "officialPlaygroundScope": "brand-portal",
          "officialPlaygroundNote": "官方品牌体验入口；需登录并自行确认型号可用性，不保证直达当前版本。",
          "officialApiUrl": null
        }
      ]
    },
    {
      "id": "gemini",
      "family": "Gemini",
      "brand": "Google",
      "logo": "assets/gemini.svg",
      "popularityRank": null,
      "bestObservedModelRank": null,
      "popularitySource": "https://openrouter.ai/rankings",
      "popularityPeriod": "2026-11-06 UTC（最近完整日）",
      "versions": [
        {
          "name": "Gemini Omni 1.2 Flash",
          "version": "Gemini Omni 1.2 Flash",
          "modelId": "google/gemini-omni-1.2-flash",
          "modalities": [
            "文本",
            "视觉"
          ],
          "inputModalities": [
            "text",
            "image",
            "video"
          ],
          "outputModalities": [
            "text",
            "video"
          ],
          "desc": "Google Gemini 系列；支持文本、视觉。",
          "description": "Google Gemini 系列；支持文本、视觉。",
          "source": "https://openrouter.ai/api/v1/models",
          "sourceUrl": "https://openrouter.ai/google/gemini-omni-1.2-flash",
          "apiUrl": "https://openrouter.ai/google/gemini-omni-1.2-flash/api",
          "playgroundUrl": "https://openrouter.ai/chat?models=google%2Fgemini-omni-1.2-flash",
          "inputPrice": 1.5,
          "outputPrice": 9,
          "currency": "USD",
          "unit": "百万 tokens",
          "billing": "按量计费",
          "priceLabel": "OpenRouter 参考价",
          "priceSource": "https://openrouter.ai/api/v1/models",
          "collectedAt": "2026-11-07",
          "bestObservedModelRank": null,
          "contextLength": 131072,
          "rawPricing": {
            "prompt": "0.0000015",
            "completion": "0.000009",
            "web_search": "0.014"
          },
          "officialPricing": {
            "input": null,
            "output": null,
            "unit": "百万 tokens",
            "currency": "USD",
            "sourceUrl": "https://ai.google.dev/gemini-api/docs/pricing",
            "updatedAt": null,
            "status": "unsupported",
            "note": "同型号官方标准价尚未核实；OpenRouter平台参考价单独保留。"
          },
          "officialPlaygroundUrl": "https://aistudio.google.com/",
          "officialPlaygroundScope": "brand-portal",
          "officialPlaygroundNote": "官方品牌体验入口；需登录并自行确认型号可用性，不保证直达当前版本。",
          "officialApiUrl": null
        },
        {
          "name": "Gemini Omni 1.1 Flash",
          "version": "Gemini Omni 1.1 Flash",
          "modelId": "google/gemini-omni-1.1-flash",
          "modalities": [
            "文本",
            "视觉"
          ],
          "inputModalities": [
            "text",
            "image",
            "video"
          ],
          "outputModalities": [
            "text",
            "video"
          ],
          "desc": "Google Gemini 系列；支持文本、视觉。",
          "description": "Google Gemini 系列；支持文本、视觉。",
          "source": "https://openrouter.ai/api/v1/models",
          "sourceUrl": "https://openrouter.ai/google/gemini-omni-1.1-flash",
          "apiUrl": "https://openrouter.ai/google/gemini-omni-1.1-flash/api",
          "playgroundUrl": "https://openrouter.ai/chat?models=google%2Fgemini-omni-1.1-flash",
          "inputPrice": 1.5,
          "outputPrice": 9,
          "currency": "USD",
          "unit": "百万 tokens",
          "billing": "按量计费",
          "priceLabel": "OpenRouter 参考价",
          "priceSource": "https://openrouter.ai/api/v1/models",
          "collectedAt": "2026-11-07",
          "bestObservedModelRank": null,
          "contextLength": 131072,
          "rawPricing": {
            "prompt": "0.0000015",
            "completion": "0.000009",
            "web_search": "0.014"
          },
          "officialPricing": {
            "input": null,
            "output": null,
            "unit": "百万 tokens",
            "currency": "USD",
            "sourceUrl": "https://ai.google.dev/gemini-api/docs/pricing",
            "updatedAt": null,
            "status": "unsupported",
            "note": "同型号官方标准价尚未核实；OpenRouter平台参考价单独保留。"
          },
          "officialPlaygroundUrl": "https://aistudio.google.com/",
          "officialPlaygroundScope": "brand-portal",
          "officialPlaygroundNote": "官方品牌体验入口；需登录并自行确认型号可用性，不保证直达当前版本。",
          "officialApiUrl": null
        },
        {
          "name": "Gemini 3.5 Flash Lite",
          "version": "Gemini 3.5 Flash Lite",
          "modelId": "google/gemini-3.5-flash-lite",
          "modalities": [
            "全模态",
            "文本",
            "视觉",
            "语音"
          ],
          "inputModalities": [
            "text",
            "image",
            "video",
            "file",
            "audio"
          ],
          "outputModalities": [
            "text"
          ],
          "desc": "Google Gemini 系列；支持文本、视觉、语音。",
          "description": "Google Gemini 系列；支持文本、视觉、语音。",
          "source": "https://openrouter.ai/api/v1/models",
          "sourceUrl": "https://openrouter.ai/google/gemini-3.5-flash-lite",
          "apiUrl": "https://openrouter.ai/google/gemini-3.5-flash-lite/api",
          "playgroundUrl": "https://openrouter.ai/chat?models=google%2Fgemini-3.5-flash-lite",
          "inputPrice": 0.3,
          "outputPrice": 2.5,
          "currency": "USD",
          "unit": "百万 tokens",
          "billing": "按量计费",
          "priceLabel": "OpenRouter 参考价",
          "priceSource": "https://openrouter.ai/api/v1/models",
          "collectedAt": "2026-11-07",
          "bestObservedModelRank": null,
          "contextLength": 1048576,
          "rawPricing": {
            "prompt": "0.0000003",
            "completion": "0.0000025",
            "image": "0.0000003",
            "audio": "0.0000003",
            "input_audio_cache": "0.00000003",
            "web_search": "0.014",
            "internal_reasoning": "0.0000025",
            "input_cache_read": "0.00000003",
            "input_cache_write": "0.0000000833333333333333"
          },
          "officialPricing": {
            "input": null,
            "output": null,
            "unit": "百万 tokens",
            "currency": "USD",
            "sourceUrl": "https://ai.google.dev/gemini-api/docs/pricing",
            "updatedAt": null,
            "status": "unsupported",
            "note": "同型号官方标准价尚未核实；OpenRouter平台参考价单独保留。"
          },
          "officialPlaygroundUrl": "https://aistudio.google.com/",
          "officialPlaygroundScope": "brand-portal",
          "officialPlaygroundNote": "官方品牌体验入口；需登录并自行确认型号可用性，不保证直达当前版本。",
          "officialApiUrl": null
        },
        {
          "name": "Nano Banana (Gemini 2.5 Flash Image)",
          "version": "Nano Banana (Gemini 2.5 Flash Image)",
          "modelId": "google/gemini-2.5-flash-image",
          "modalities": [
            "文本",
            "视觉"
          ],
          "inputModalities": [
            "image",
            "text"
          ],
          "outputModalities": [
            "image",
            "text"
          ],
          "desc": "Google Gemini 系列；支持文本、视觉。",
          "description": "Google Gemini 系列；支持文本、视觉。",
          "source": "https://openrouter.ai/api/v1/models",
          "sourceUrl": "https://openrouter.ai/google/gemini-2.5-flash-image",
          "apiUrl": "https://openrouter.ai/google/gemini-2.5-flash-image/api",
          "playgroundUrl": "https://openrouter.ai/chat?models=google%2Fgemini-2.5-flash-image",
          "inputPrice": 0.3,
          "outputPrice": 2.5,
          "currency": "USD",
          "unit": "百万 tokens",
          "billing": "按量计费",
          "priceLabel": "OpenRouter 参考价",
          "priceSource": "https://openrouter.ai/api/v1/models",
          "collectedAt": "2026-11-07",
          "bestObservedModelRank": null,
          "contextLength": 32768,
          "rawPricing": {
            "prompt": "0.0000003",
            "completion": "0.0000025",
            "image": "0.0000003",
            "image_output": "0.00003",
            "audio": "0.000001",
            "input_audio_cache": "0.0000001",
            "web_search": "0.014",
            "internal_reasoning": "0.0000025",
            "input_cache_read": "0.00000003",
            "input_cache_write": "0.0000000833333333333333"
          },
          "officialPricing": {
            "input": null,
            "output": null,
            "unit": "百万 tokens",
            "currency": "USD",
            "sourceUrl": "https://ai.google.dev/gemini-api/docs/pricing",
            "updatedAt": null,
            "status": "unsupported",
            "note": "同型号官方标准价尚未核实；OpenRouter平台参考价单独保留。"
          },
          "officialPlaygroundUrl": "https://aistudio.google.com/",
          "officialPlaygroundScope": "brand-portal",
          "officialPlaygroundNote": "官方品牌体验入口；需登录并自行确认型号可用性，不保证直达当前版本。",
          "officialApiUrl": null
        }
      ]
    },
    {
      "id": "qwen",
      "family": "Qwen",
      "brand": "Alibaba",
      "logo": "assets/qwen.png",
      "popularityRank": null,
      "bestObservedModelRank": null,
      "popularitySource": "https://openrouter.ai/rankings",
      "popularityPeriod": "2026-11-06 UTC（最近完整日）",
      "versions": [
        {
          "name": "Qwen3.6 Plus",
          "version": "Qwen3.6 Plus",
          "modelId": "qwen/qwen3.6-plus",
          "modalities": [
            "文本",
            "视觉"
          ],
          "inputModalities": [
            "text",
            "image",
            "video"
          ],
          "outputModalities": [
            "text"
          ],
          "desc": "Alibaba Qwen 系列；支持文本、视觉。",
          "description": "Alibaba Qwen 系列；支持文本、视觉。",
          "source": "https://openrouter.ai/api/v1/models",
          "sourceUrl": "https://openrouter.ai/qwen/qwen3.6-plus",
          "apiUrl": "https://openrouter.ai/qwen/qwen3.6-plus/api",
          "playgroundUrl": "https://openrouter.ai/chat?models=qwen%2Fqwen3.6-plus",
          "inputPrice": 0.325,
          "outputPrice": 1.95,
          "currency": "USD",
          "unit": "百万 tokens",
          "billing": "按量计费",
          "priceLabel": "OpenRouter 参考价",
          "priceSource": "https://openrouter.ai/api/v1/models",
          "collectedAt": "2026-11-07",
          "bestObservedModelRank": null,
          "contextLength": 1000000,
          "rawPricing": {
            "prompt": "0.000000325",
            "completion": "0.00000195",
            "input_cache_write": "0.00000040625",
            "overrides": [
              {
                "min_prompt_tokens": 256000,
                "prompt": "0.0000013",
                "completion": "0.0000039",
                "input_cache_write": "0.000001625"
              }
            ]
          },
          "officialPricing": {
            "input": null,
            "output": null,
            "unit": "百万 tokens",
            "currency": "USD",
            "sourceUrl": "https://chat.qwen.ai/",
            "updatedAt": null,
            "status": "unsupported",
            "note": "同型号官方标准价尚未核实；OpenRouter平台参考价单独保留。"
          },
          "officialPlaygroundUrl": "https://chat.qwen.ai/",
          "officialPlaygroundScope": "brand-portal",
          "officialPlaygroundNote": "官方品牌体验入口；需登录并自行确认型号可用性，不保证直达当前版本。",
          "officialApiUrl": null
        },
        {
          "name": "Qwen3 VL 8B Instruct",
          "version": "Qwen3 VL 8B Instruct",
          "modelId": "qwen/qwen3-vl-8b-instruct",
          "modalities": [
            "文本",
            "视觉"
          ],
          "inputModalities": [
            "image",
            "text"
          ],
          "outputModalities": [
            "text"
          ],
          "desc": "Alibaba Qwen 系列；支持文本、视觉。",
          "description": "Alibaba Qwen 系列；支持文本、视觉。",
          "source": "https://openrouter.ai/api/v1/models",
          "sourceUrl": "https://openrouter.ai/qwen/qwen3-vl-8b-instruct",
          "apiUrl": "https://openrouter.ai/qwen/qwen3-vl-8b-instruct/api",
          "playgroundUrl": "https://openrouter.ai/chat?models=qwen%2Fqwen3-vl-8b-instruct",
          "inputPrice": 0.25,
          "outputPrice": 0.75,
          "currency": "USD",
          "unit": "百万 tokens",
          "billing": "按量计费",
          "priceLabel": "OpenRouter 参考价",
          "priceSource": "https://openrouter.ai/api/v1/models",
          "collectedAt": "2026-11-07",
          "bestObservedModelRank": null,
          "contextLength": 262144,
          "rawPricing": {
            "prompt": "0.00000025",
            "completion": "0.00000075",
            "input_cache_read": "0.00000012"
          },
          "officialPricing": {
            "input": null,
            "output": null,
            "unit": "百万 tokens",
            "currency": "USD",
            "sourceUrl": "https://chat.qwen.ai/",
            "updatedAt": null,
            "status": "unsupported",
            "note": "同型号官方标准价尚未核实；OpenRouter平台参考价单独保留。"
          },
          "officialPlaygroundUrl": "https://chat.qwen.ai/",
          "officialPlaygroundScope": "brand-portal",
          "officialPlaygroundNote": "官方品牌体验入口；需登录并自行确认型号可用性，不保证直达当前版本。",
          "officialApiUrl": null
        },
        {
          "name": "Qwen3 VL 30B A3B Thinking",
          "version": "Qwen3 VL 30B A3B Thinking",
          "modelId": "qwen/qwen3-vl-30b-a3b-thinking",
          "modalities": [
            "文本",
            "视觉"
          ],
          "inputModalities": [
            "text",
            "image"
          ],
          "outputModalities": [
            "text"
          ],
          "desc": "Alibaba Qwen 系列；支持文本、视觉。",
          "description": "Alibaba Qwen 系列；支持文本、视觉。",
          "source": "https://openrouter.ai/api/v1/models",
          "sourceUrl": "https://openrouter.ai/qwen/qwen3-vl-30b-a3b-thinking",
          "apiUrl": "https://openrouter.ai/qwen/qwen3-vl-30b-a3b-thinking/api",
          "playgroundUrl": "https://openrouter.ai/chat?models=qwen%2Fqwen3-vl-30b-a3b-thinking",
          "inputPrice": 0.29,
          "outputPrice": 1,
          "currency": "USD",
          "unit": "百万 tokens",
          "billing": "按量计费",
          "priceLabel": "OpenRouter 参考价",
          "priceSource": "https://openrouter.ai/api/v1/models",
          "collectedAt": "2026-11-07",
          "bestObservedModelRank": null,
          "contextLength": 262144,
          "rawPricing": {
            "prompt": "0.00000029",
            "completion": "0.000001"
          },
          "officialPricing": {
            "input": null,
            "output": null,
            "unit": "百万 tokens",
            "currency": "USD",
            "sourceUrl": "https://chat.qwen.ai/",
            "updatedAt": null,
            "status": "unsupported",
            "note": "同型号官方标准价尚未核实；OpenRouter平台参考价单独保留。"
          },
          "officialPlaygroundUrl": "https://chat.qwen.ai/",
          "officialPlaygroundScope": "brand-portal",
          "officialPlaygroundNote": "官方品牌体验入口；需登录并自行确认型号可用性，不保证直达当前版本。",
          "officialApiUrl": null
        },
        {
          "name": "Qwen3 VL 30B A3B Instruct",
          "version": "Qwen3 VL 30B A3B Instruct",
          "modelId": "qwen/qwen3-vl-30b-a3b-instruct",
          "modalities": [
            "文本",
            "视觉"
          ],
          "inputModalities": [
            "text",
            "image"
          ],
          "outputModalities": [
            "text"
          ],
          "desc": "Alibaba Qwen 系列；支持文本、视觉。",
          "description": "Alibaba Qwen 系列；支持文本、视觉。",
          "source": "https://openrouter.ai/api/v1/models",
          "sourceUrl": "https://openrouter.ai/qwen/qwen3-vl-30b-a3b-instruct",
          "apiUrl": "https://openrouter.ai/qwen/qwen3-vl-30b-a3b-instruct/api",
          "playgroundUrl": "https://openrouter.ai/chat?models=qwen%2Fqwen3-vl-30b-a3b-instruct",
          "inputPrice": 0.15,
          "outputPrice": 0.6,
          "currency": "USD",
          "unit": "百万 tokens",
          "billing": "按量计费",
          "priceLabel": "OpenRouter 参考价",
          "priceSource": "https://openrouter.ai/api/v1/models",
          "collectedAt": "2026-11-07",
          "bestObservedModelRank": null,
          "contextLength": 262144,
          "rawPricing": {
            "prompt": "0.00000015",
            "completion": "0.0000006"
          },
          "officialPricing": {
            "input": null,
            "output": null,
            "unit": "百万 tokens",
            "currency": "USD",
            "sourceUrl": "https://chat.qwen.ai/",
            "updatedAt": null,
            "status": "unsupported",
            "note": "同型号官方标准价尚未核实；OpenRouter平台参考价单独保留。"
          },
          "officialPlaygroundUrl": "https://chat.qwen.ai/",
          "officialPlaygroundScope": "brand-portal",
          "officialPlaygroundNote": "官方品牌体验入口；需登录并自行确认型号可用性，不保证直达当前版本。",
          "officialApiUrl": null
        }
      ]
    },
    {
      "id": "grok",
      "family": "Grok",
      "brand": "xAI",
      "logo": "assets/grok.svg",
      "popularityRank": null,
      "bestObservedModelRank": null,
      "popularitySource": "https://openrouter.ai/rankings",
      "popularityPeriod": "2026-11-06 UTC（最近完整日）",
      "versions": [
        {
          "name": "Grok 4.7",
          "version": "Grok 4.7",
          "modelId": "x-ai/grok-4.7",
          "modalities": [
            "文本",
            "视觉"
          ],
          "inputModalities": [
            "text",
            "image",
            "file"
          ],
          "outputModalities": [
            "text"
          ],
          "desc": "xAI Grok 系列；支持文本、视觉。",
          "description": "xAI Grok 系列；支持文本、视觉。",
          "source": "https://openrouter.ai/api/v1/models",
          "sourceUrl": "https://openrouter.ai/x-ai/grok-4.7",
          "apiUrl": "https://openrouter.ai/x-ai/grok-4.7/api",
          "playgroundUrl": "https://openrouter.ai/chat?models=x-ai%2Fgrok-4.7",
          "inputPrice": 2,
          "outputPrice": 6,
          "currency": "USD",
          "unit": "百万 tokens",
          "billing": "按量计费",
          "priceLabel": "OpenRouter 参考价",
          "priceSource": "https://openrouter.ai/api/v1/models",
          "collectedAt": "2026-11-07",
          "bestObservedModelRank": null,
          "contextLength": 500000,
          "rawPricing": {
            "prompt": "0.000002",
            "completion": "0.000006",
            "web_search": "0.005",
            "input_cache_read": "0.0000005",
            "overrides": [
              {
                "min_prompt_tokens": 200000,
                "prompt": "0.000004",
                "completion": "0.000012",
                "input_cache_read": "0.000001"
              }
            ]
          },
          "officialPricing": {
            "input": 2,
            "output": 6,
            "unit": "百万 tokens",
            "currency": "USD",
            "sourceUrl": "https://docs.x.ai/developers/models",
            "updatedAt": "2026-11-07T10:30:05.368Z",
            "status": "stale",
            "method": "official-page-manual-verification",
            "tier": "Standard",
            "note": "仅基础输入/输出价格，缓存、工具、特殊模态及其他档位另计。",
            "checkedAt": "2026-11-09T07:39:51.562Z",
            "lastError": "未取得同型号、同档位官方价格；保留已有价格及其核验时间。"
          },
          "officialPlaygroundUrl": "https://console.x.ai/team/default/chat?model=grok-4.7",
          "officialPlaygroundScope": "model-query",
          "officialPlaygroundNote": "官方控制台体验，需要登录；旧型号可用性以控制台为准。",
          "officialApiUrl": null
        },
        {
          "name": "Grok 4.20 Multi-Agent",
          "version": "Grok 4.20 Multi-Agent",
          "modelId": "x-ai/grok-4.20-multi-agent",
          "modalities": [
            "文本",
            "视觉"
          ],
          "inputModalities": [
            "text",
            "image",
            "file"
          ],
          "outputModalities": [
            "text"
          ],
          "desc": "xAI Grok 系列；支持文本、视觉。",
          "description": "xAI Grok 系列；支持文本、视觉。",
          "source": "https://openrouter.ai/api/v1/models",
          "sourceUrl": "https://openrouter.ai/x-ai/grok-4.20-multi-agent",
          "apiUrl": "https://openrouter.ai/x-ai/grok-4.20-multi-agent/api",
          "playgroundUrl": "https://openrouter.ai/chat?models=x-ai%2Fgrok-4.20-multi-agent",
          "inputPrice": 1.25,
          "outputPrice": 2.5,
          "currency": "USD",
          "unit": "百万 tokens",
          "billing": "按量计费",
          "priceLabel": "OpenRouter 参考价",
          "priceSource": "https://openrouter.ai/api/v1/models",
          "collectedAt": "2026-11-07",
          "bestObservedModelRank": null,
          "contextLength": 2000000,
          "rawPricing": {
            "prompt": "0.00000125",
            "completion": "0.0000025",
            "web_search": "0.005",
            "input_cache_read": "0.0000002",
            "overrides": [
              {
                "min_prompt_tokens": 200000,
                "prompt": "0.0000025",
                "completion": "0.000005",
                "input_cache_read": "0.0000004"
              }
            ]
          },
          "officialPricing": {
            "input": null,
            "output": null,
            "unit": "百万 tokens",
            "currency": "USD",
            "sourceUrl": null,
            "updatedAt": null,
            "status": "unsupported",
            "note": "同型号官方标准价尚未核实；OpenRouter平台参考价单独保留。"
          },
          "officialPlaygroundUrl": "https://console.x.ai/team/default/chat?model=grok-4.20-multi-agent",
          "officialPlaygroundScope": "model-query",
          "officialPlaygroundNote": "官方控制台体验，需要登录；旧型号可用性以控制台为准。",
          "officialApiUrl": null
        },
        {
          "name": "Grok 4.20",
          "version": "Grok 4.20",
          "modelId": "x-ai/grok-4.20",
          "modalities": [
            "文本",
            "视觉"
          ],
          "inputModalities": [
            "text",
            "image",
            "file"
          ],
          "outputModalities": [
            "text"
          ],
          "desc": "xAI Grok 系列；支持文本、视觉。",
          "description": "xAI Grok 系列；支持文本、视觉。",
          "source": "https://openrouter.ai/api/v1/models",
          "sourceUrl": "https://openrouter.ai/x-ai/grok-4.20",
          "apiUrl": "https://openrouter.ai/x-ai/grok-4.20/api",
          "playgroundUrl": "https://openrouter.ai/chat?models=x-ai%2Fgrok-4.20",
          "inputPrice": 1.25,
          "outputPrice": 2.5,
          "currency": "USD",
          "unit": "百万 tokens",
          "billing": "按量计费",
          "priceLabel": "OpenRouter 参考价",
          "priceSource": "https://openrouter.ai/api/v1/models",
          "collectedAt": "2026-11-07",
          "bestObservedModelRank": null,
          "contextLength": 2000000,
          "rawPricing": {
            "prompt": "0.00000125",
            "completion": "0.0000025",
            "web_search": "0.005",
            "input_cache_read": "0.0000002",
            "overrides": [
              {
                "min_prompt_tokens": 200000,
                "prompt": "0.0000025",
                "completion": "0.000005",
                "input_cache_read": "0.0000004"
              }
            ]
          },
          "officialPricing": {
            "input": null,
            "output": null,
            "unit": "百万 tokens",
            "currency": "USD",
            "sourceUrl": null,
            "updatedAt": null,
            "status": "unsupported",
            "note": "同型号官方标准价尚未核实；OpenRouter平台参考价单独保留。"
          },
          "officialPlaygroundUrl": "https://console.x.ai/team/default/chat?model=grok-4.20",
          "officialPlaygroundScope": "model-query",
          "officialPlaygroundNote": "官方控制台体验，需要登录；旧型号可用性以控制台为准。",
          "officialApiUrl": null
        }
      ]
    },
    {
      "id": "mimo",
      "family": "MiMo",
      "brand": "Xiaomi",
      "logo": "assets/xiaomimimo.svg",
      "popularityRank": null,
      "bestObservedModelRank": null,
      "popularitySource": "https://openrouter.ai/rankings",
      "popularityPeriod": "2026-11-06 UTC（最近完整日）",
      "versions": [
        {
          "name": "MiMo-V2.6-Pro-UltraSpeed",
          "version": "MiMo-V2.6-Pro-UltraSpeed",
          "modelId": "xiaomi/mimo-v2.6-pro-ultraspeed",
          "modalities": [
            "全模态",
            "文本",
            "视觉",
            "语音"
          ],
          "inputModalities": [
            "text",
            "image",
            "video",
            "audio"
          ],
          "outputModalities": [
            "text"
          ],
          "desc": "Xiaomi MiMo 系列；支持文本、视觉、语音。",
          "description": "Xiaomi MiMo 系列；支持文本、视觉、语音。",
          "source": "https://openrouter.ai/api/v1/models",
          "sourceUrl": "https://openrouter.ai/xiaomi/mimo-v2.6-pro-ultraspeed",
          "apiUrl": "https://openrouter.ai/xiaomi/mimo-v2.6-pro-ultraspeed/api",
          "playgroundUrl": "https://openrouter.ai/chat?models=xiaomi%2Fmimo-v2.6-pro-ultraspeed",
          "inputPrice": 4.35,
          "outputPrice": 8.7,
          "currency": "USD",
          "unit": "百万 tokens",
          "billing": "按量计费",
          "priceLabel": "OpenRouter 参考价",
          "priceSource": "https://openrouter.ai/api/v1/models",
          "collectedAt": "2026-11-07",
          "bestObservedModelRank": null,
          "contextLength": 1048576,
          "rawPricing": {
            "prompt": "0.00000435",
            "completion": "0.0000087",
            "input_cache_read": "0.000000036"
          },
          "officialPricing": {
            "input": null,
            "output": null,
            "unit": "百万 tokens",
            "currency": "USD",
            "sourceUrl": null,
            "updatedAt": null,
            "status": "unsupported",
            "note": "同型号官方标准价尚未核实；OpenRouter平台参考价单独保留。"
          },
          "officialPlaygroundUrl": null,
          "officialPlaygroundScope": null,
          "officialPlaygroundNote": null,
          "officialApiUrl": null
        },
        {
          "name": "MiMo-V2.6-Flash",
          "version": "MiMo-V2.6-Flash",
          "modelId": "xiaomi/mimo-v2.6-flash",
          "modalities": [
            "全模态",
            "文本",
            "视觉",
            "语音"
          ],
          "inputModalities": [
            "text",
            "image",
            "video",
            "audio"
          ],
          "outputModalities": [
            "text"
          ],
          "desc": "Xiaomi MiMo 系列；支持文本、视觉、语音。",
          "description": "Xiaomi MiMo 系列；支持文本、视觉、语音。",
          "source": "https://openrouter.ai/api/v1/models",
          "sourceUrl": "https://openrouter.ai/xiaomi/mimo-v2.6-flash",
          "apiUrl": "https://openrouter.ai/xiaomi/mimo-v2.6-flash/api",
          "playgroundUrl": "https://openrouter.ai/chat?models=xiaomi%2Fmimo-v2.6-flash",
          "inputPrice": 0.14,
          "outputPrice": 0.28,
          "currency": "USD",
          "unit": "百万 tokens",
          "billing": "按量计费",
          "priceLabel": "OpenRouter 参考价",
          "priceSource": "https://openrouter.ai/api/v1/models",
          "collectedAt": "2026-11-07",
          "bestObservedModelRank": null,
          "contextLength": 1050000,
          "rawPricing": {
            "prompt": "0.00000014",
            "completion": "0.00000028",
            "input_cache_read": "0.0000000028"
          },
          "officialPricing": {
            "input": null,
            "output": null,
            "unit": "百万 tokens",
            "currency": "USD",
            "sourceUrl": null,
            "updatedAt": null,
            "status": "unsupported",
            "note": "同型号官方标准价尚未核实；OpenRouter平台参考价单独保留。"
          },
          "officialPlaygroundUrl": null,
          "officialPlaygroundScope": null,
          "officialPlaygroundNote": null,
          "officialApiUrl": null
        },
        {
          "name": "MiMo-V2.6-Pro",
          "version": "MiMo-V2.6-Pro",
          "modelId": "xiaomi/mimo-v2.6-pro",
          "modalities": [
            "全模态",
            "文本",
            "视觉",
            "语音"
          ],
          "inputModalities": [
            "text",
            "image",
            "video",
            "audio"
          ],
          "outputModalities": [
            "text"
          ],
          "desc": "Xiaomi MiMo 系列；支持文本、视觉、语音。",
          "description": "Xiaomi MiMo 系列；支持文本、视觉、语音。",
          "source": "https://openrouter.ai/api/v1/models",
          "sourceUrl": "https://openrouter.ai/xiaomi/mimo-v2.6-pro",
          "apiUrl": "https://openrouter.ai/xiaomi/mimo-v2.6-pro/api",
          "playgroundUrl": "https://openrouter.ai/chat?models=xiaomi%2Fmimo-v2.6-pro",
          "inputPrice": 0.435,
          "outputPrice": 0.87,
          "currency": "USD",
          "unit": "百万 tokens",
          "billing": "按量计费",
          "priceLabel": "OpenRouter 参考价",
          "priceSource": "https://openrouter.ai/api/v1/models",
          "collectedAt": "2026-11-07",
          "bestObservedModelRank": null,
          "contextLength": 1050000,
          "rawPricing": {
            "prompt": "0.000000435",
            "completion": "0.00000087",
            "input_cache_read": "0.0000000036"
          },
          "officialPricing": {
            "input": null,
            "output": null,
            "unit": "百万 tokens",
            "currency": "USD",
            "sourceUrl": null,
            "updatedAt": null,
            "status": "unsupported",
            "note": "同型号官方标准价尚未核实；OpenRouter平台参考价单独保留。"
          },
          "officialPlaygroundUrl": null,
          "officialPlaygroundScope": null,
          "officialPlaygroundNote": null,
          "officialApiUrl": null
        }
      ]
    },
    {
      "id": "mistral",
      "family": "Mistral",
      "brand": "Mistral AI",
      "logo": "assets/mistral.svg",
      "popularityRank": null,
      "bestObservedModelRank": null,
      "popularitySource": "https://openrouter.ai/rankings",
      "popularityPeriod": "2026-11-06 UTC（最近完整日）",
      "versions": [
        {
          "name": "Mistral Small 4",
          "version": "Mistral Small 4",
          "modelId": "mistralai/mistral-small-2603",
          "modalities": [
            "文本",
            "视觉"
          ],
          "inputModalities": [
            "text",
            "image"
          ],
          "outputModalities": [
            "text"
          ],
          "desc": "Mistral AI Mistral 系列；支持文本、视觉。",
          "description": "Mistral AI Mistral 系列；支持文本、视觉。",
          "source": "https://openrouter.ai/api/v1/models",
          "sourceUrl": "https://openrouter.ai/mistralai/mistral-small-2603",
          "apiUrl": "https://openrouter.ai/mistralai/mistral-small-2603/api",
          "playgroundUrl": "https://openrouter.ai/chat?models=mistralai%2Fmistral-small-2603",
          "inputPrice": 0.15,
          "outputPrice": 0.6,
          "currency": "USD",
          "unit": "百万 tokens",
          "billing": "按量计费",
          "priceLabel": "OpenRouter 参考价",
          "priceSource": "https://openrouter.ai/api/v1/models",
          "collectedAt": "2026-11-07",
          "bestObservedModelRank": null,
          "contextLength": 262144,
          "rawPricing": {
            "prompt": "0.00000015",
            "completion": "0.0000006",
            "input_cache_read": "0.000000015"
          },
          "officialPricing": {
            "input": null,
            "output": null,
            "unit": "百万 tokens",
            "currency": "USD",
            "sourceUrl": "https://docs.mistral.ai/models",
            "updatedAt": null,
            "status": "unsupported",
            "note": "同型号官方标准价尚未核实；OpenRouter平台参考价单独保留。"
          },
          "officialPlaygroundUrl": "https://console.mistral.ai/",
          "officialPlaygroundScope": "brand-portal",
          "officialPlaygroundNote": "官方品牌体验入口；需登录并自行确认型号可用性，不保证直达当前版本。",
          "officialApiUrl": null
        },
        {
          "name": "Mistral Small 3.1 24B",
          "version": "Mistral Small 3.1 24B",
          "modelId": "mistralai/mistral-small-3.1-24b-instruct",
          "modalities": [
            "文本",
            "视觉"
          ],
          "inputModalities": [
            "text",
            "image"
          ],
          "outputModalities": [
            "text"
          ],
          "desc": "Mistral AI Mistral 系列；支持文本、视觉。",
          "description": "Mistral AI Mistral 系列；支持文本、视觉。",
          "source": "https://openrouter.ai/api/v1/models",
          "sourceUrl": "https://openrouter.ai/mistralai/mistral-small-3.1-24b-instruct",
          "apiUrl": "https://openrouter.ai/mistralai/mistral-small-3.1-24b-instruct/api",
          "playgroundUrl": "https://openrouter.ai/chat?models=mistralai%2Fmistral-small-3.1-24b-instruct",
          "inputPrice": 0.351,
          "outputPrice": 0.5549999999999999,
          "currency": "USD",
          "unit": "百万 tokens",
          "billing": "按量计费",
          "priceLabel": "OpenRouter 参考价",
          "priceSource": "https://openrouter.ai/api/v1/models",
          "collectedAt": "2026-11-07",
          "bestObservedModelRank": null,
          "contextLength": 128000,
          "rawPricing": {
            "prompt": "0.000000351",
            "completion": "0.000000555"
          },
          "officialPricing": {
            "input": null,
            "output": null,
            "unit": "百万 tokens",
            "currency": "USD",
            "sourceUrl": "https://docs.mistral.ai/models",
            "updatedAt": null,
            "status": "unsupported",
            "note": "同型号官方标准价尚未核实；OpenRouter平台参考价单独保留。"
          },
          "officialPlaygroundUrl": "https://console.mistral.ai/",
          "officialPlaygroundScope": "brand-portal",
          "officialPlaygroundNote": "官方品牌体验入口；需登录并自行确认型号可用性，不保证直达当前版本。",
          "officialApiUrl": null
        },
        {
          "name": "Saba",
          "version": "Saba",
          "modelId": "mistralai/mistral-saba",
          "modalities": [
            "文本"
          ],
          "inputModalities": [
            "text",
            "file"
          ],
          "outputModalities": [
            "text"
          ],
          "desc": "Mistral AI Mistral 系列；支持文本。",
          "description": "Mistral AI Mistral 系列；支持文本。",
          "source": "https://openrouter.ai/api/v1/models",
          "sourceUrl": "https://openrouter.ai/mistralai/mistral-saba",
          "apiUrl": "https://openrouter.ai/mistralai/mistral-saba/api",
          "playgroundUrl": "https://openrouter.ai/chat?models=mistralai%2Fmistral-saba",
          "inputPrice": 0.19999999999999998,
          "outputPrice": 0.6,
          "currency": "USD",
          "unit": "百万 tokens",
          "billing": "按量计费",
          "priceLabel": "OpenRouter 参考价",
          "priceSource": "https://openrouter.ai/api/v1/models",
          "collectedAt": "2026-11-07",
          "bestObservedModelRank": null,
          "contextLength": 32768,
          "rawPricing": {
            "prompt": "0.0000002",
            "completion": "0.0000006",
            "input_cache_read": "0.00000002"
          },
          "officialPricing": {
            "input": null,
            "output": null,
            "unit": "百万 tokens",
            "currency": "USD",
            "sourceUrl": "https://docs.mistral.ai/models",
            "updatedAt": null,
            "status": "unsupported",
            "note": "同型号官方标准价尚未核实；OpenRouter平台参考价单独保留。"
          },
          "officialPlaygroundUrl": "https://console.mistral.ai/",
          "officialPlaygroundScope": "brand-portal",
          "officialPlaygroundNote": "官方品牌体验入口；需登录并自行确认型号可用性，不保证直达当前版本。",
          "officialApiUrl": null
        }
      ]
    },
    {
      "id": "llama",
      "family": "Llama",
      "brand": "Meta",
      "logo": "assets/meta.svg",
      "popularityRank": null,
      "bestObservedModelRank": null,
      "popularitySource": "https://openrouter.ai/rankings",
      "popularityPeriod": "2026-11-06 UTC（最近完整日）",
      "versions": [
        {
          "name": "Llama 4 Maverick",
          "version": "Llama 4 Maverick",
          "modelId": "meta-llama/llama-4-maverick",
          "modalities": [
            "文本",
            "视觉"
          ],
          "inputModalities": [
            "text",
            "image"
          ],
          "outputModalities": [
            "text"
          ],
          "desc": "Meta Llama 系列；支持文本、视觉。",
          "description": "Meta Llama 系列；支持文本、视觉。",
          "source": "https://openrouter.ai/api/v1/models",
          "sourceUrl": "https://openrouter.ai/meta-llama/llama-4-maverick",
          "apiUrl": "https://openrouter.ai/meta-llama/llama-4-maverick/api",
          "playgroundUrl": "https://openrouter.ai/chat?models=meta-llama%2Fllama-4-maverick",
          "inputPrice": 0.35,
          "outputPrice": 1,
          "currency": "USD",
          "unit": "百万 tokens",
          "billing": "按量计费",
          "priceLabel": "OpenRouter 参考价",
          "priceSource": "https://openrouter.ai/api/v1/models",
          "collectedAt": "2026-11-07",
          "bestObservedModelRank": null,
          "contextLength": 524288,
          "rawPricing": {
            "prompt": "0.00000035",
            "completion": "0.000001",
            "input_cache_read": "0.00000017"
          },
          "officialPricing": {
            "input": null,
            "output": null,
            "unit": "百万 tokens",
            "currency": "USD",
            "sourceUrl": null,
            "updatedAt": null,
            "status": "unsupported",
            "note": "同型号官方标准价尚未核实；OpenRouter平台参考价单独保留。"
          },
          "officialPlaygroundUrl": null,
          "officialPlaygroundScope": null,
          "officialPlaygroundNote": null,
          "officialApiUrl": null
        },
        {
          "name": "Llama 4 Scout",
          "version": "Llama 4 Scout",
          "modelId": "meta-llama/llama-4-scout",
          "modalities": [
            "文本",
            "视觉"
          ],
          "inputModalities": [
            "text",
            "image"
          ],
          "outputModalities": [
            "text"
          ],
          "desc": "Meta Llama 系列；支持文本、视觉。",
          "description": "Meta Llama 系列；支持文本、视觉。",
          "source": "https://openrouter.ai/api/v1/models",
          "sourceUrl": "https://openrouter.ai/meta-llama/llama-4-scout",
          "apiUrl": "https://openrouter.ai/meta-llama/llama-4-scout/api",
          "playgroundUrl": "https://openrouter.ai/chat?models=meta-llama%2Fllama-4-scout",
          "inputPrice": 0.09999999999999999,
          "outputPrice": 0.3,
          "currency": "USD",
          "unit": "百万 tokens",
          "billing": "按量计费",
          "priceLabel": "OpenRouter 参考价",
          "priceSource": "https://openrouter.ai/api/v1/models",
          "collectedAt": "2026-11-07",
          "bestObservedModelRank": null,
          "contextLength": 1310720,
          "rawPricing": {
            "prompt": "0.0000001",
            "completion": "0.0000003"
          },
          "officialPricing": {
            "input": null,
            "output": null,
            "unit": "百万 tokens",
            "currency": "USD",
            "sourceUrl": null,
            "updatedAt": null,
            "status": "unsupported",
            "note": "同型号官方标准价尚未核实；OpenRouter平台参考价单独保留。"
          },
          "officialPlaygroundUrl": null,
          "officialPlaygroundScope": null,
          "officialPlaygroundNote": null,
          "officialApiUrl": null
        }
      ]
    },
    {
      "id": "gemma",
      "family": "Gemma",
      "brand": "Google",
      "logo": "assets/google.svg",
      "popularityRank": null,
      "bestObservedModelRank": null,
      "popularitySource": "https://openrouter.ai/rankings",
      "popularityPeriod": "2026-11-06 UTC（最近完整日）",
      "versions": [
        {
          "name": "Gemma 4 31B (free)",
          "version": "Gemma 4 31B (free)",
          "modelId": "google/gemma-4-31b-it:free",
          "modalities": [
            "文本",
            "视觉"
          ],
          "inputModalities": [
            "image",
            "text",
            "video"
          ],
          "outputModalities": [
            "text"
          ],
          "desc": "Google Gemma 系列；支持文本、视觉。",
          "description": "Google Gemma 系列；支持文本、视觉。",
          "source": "https://openrouter.ai/api/v1/models",
          "sourceUrl": "https://openrouter.ai/google/gemma-4-31b-it:free",
          "apiUrl": "https://openrouter.ai/google/gemma-4-31b-it:free/api",
          "playgroundUrl": "https://openrouter.ai/chat?models=google%2Fgemma-4-31b-it%3Afree",
          "inputPrice": 0,
          "outputPrice": 0,
          "currency": "USD",
          "unit": "百万 tokens",
          "billing": "按量计费",
          "priceLabel": "OpenRouter 参考价",
          "priceSource": "https://openrouter.ai/api/v1/models",
          "collectedAt": "2026-11-07",
          "bestObservedModelRank": null,
          "contextLength": 262144,
          "rawPricing": {
            "prompt": "0",
            "completion": "0"
          },
          "officialPricing": {
            "input": null,
            "output": null,
            "unit": "百万 tokens",
            "currency": "USD",
            "sourceUrl": null,
            "updatedAt": null,
            "status": "unsupported",
            "note": "同型号官方标准价尚未核实；OpenRouter平台参考价单独保留。"
          },
          "officialPlaygroundUrl": null,
          "officialPlaygroundScope": null,
          "officialPlaygroundNote": null,
          "officialApiUrl": null
        },
        {
          "name": "Gemma 3 4B",
          "version": "Gemma 3 4B",
          "modelId": "google/gemma-3-4b-it",
          "modalities": [
            "文本",
            "视觉"
          ],
          "inputModalities": [
            "text",
            "image"
          ],
          "outputModalities": [
            "text"
          ],
          "desc": "Google Gemma 系列；支持文本、视觉。",
          "description": "Google Gemma 系列；支持文本、视觉。",
          "source": "https://openrouter.ai/api/v1/models",
          "sourceUrl": "https://openrouter.ai/google/gemma-3-4b-it",
          "apiUrl": "https://openrouter.ai/google/gemma-3-4b-it/api",
          "playgroundUrl": "https://openrouter.ai/chat?models=google%2Fgemma-3-4b-it",
          "inputPrice": 0.049999999999999996,
          "outputPrice": 0.09999999999999999,
          "currency": "USD",
          "unit": "百万 tokens",
          "billing": "按量计费",
          "priceLabel": "OpenRouter 参考价",
          "priceSource": "https://openrouter.ai/api/v1/models",
          "collectedAt": "2026-11-07",
          "bestObservedModelRank": null,
          "contextLength": 131072,
          "rawPricing": {
            "prompt": "0.00000005",
            "completion": "0.0000001"
          },
          "officialPricing": {
            "input": null,
            "output": null,
            "unit": "百万 tokens",
            "currency": "USD",
            "sourceUrl": null,
            "updatedAt": null,
            "status": "unsupported",
            "note": "同型号官方标准价尚未核实；OpenRouter平台参考价单独保留。"
          },
          "officialPlaygroundUrl": null,
          "officialPlaygroundScope": null,
          "officialPlaygroundNote": null,
          "officialApiUrl": null
        },
        {
          "name": "Gemma 3 12B",
          "version": "Gemma 3 12B",
          "modelId": "google/gemma-3-12b-it",
          "modalities": [
            "文本",
            "视觉"
          ],
          "inputModalities": [
            "text",
            "image"
          ],
          "outputModalities": [
            "text"
          ],
          "desc": "Google Gemma 系列；支持文本、视觉。",
          "description": "Google Gemma 系列；支持文本、视觉。",
          "source": "https://openrouter.ai/api/v1/models",
          "sourceUrl": "https://openrouter.ai/google/gemma-3-12b-it",
          "apiUrl": "https://openrouter.ai/google/gemma-3-12b-it/api",
          "playgroundUrl": "https://openrouter.ai/chat?models=google%2Fgemma-3-12b-it",
          "inputPrice": 0.049999999999999996,
          "outputPrice": 0.15,
          "currency": "USD",
          "unit": "百万 tokens",
          "billing": "按量计费",
          "priceLabel": "OpenRouter 参考价",
          "priceSource": "https://openrouter.ai/api/v1/models",
          "collectedAt": "2026-11-07",
          "bestObservedModelRank": null,
          "contextLength": 131072,
          "rawPricing": {
            "prompt": "0.00000005",
            "completion": "0.00000015"
          },
          "officialPricing": {
            "input": null,
            "output": null,
            "unit": "百万 tokens",
            "currency": "USD",
            "sourceUrl": null,
            "updatedAt": null,
            "status": "unsupported",
            "note": "同型号官方标准价尚未核实；OpenRouter平台参考价单独保留。"
          },
          "officialPlaygroundUrl": null,
          "officialPlaygroundScope": null,
          "officialPlaygroundNote": null,
          "officialApiUrl": null
        },
        {
          "name": "Gemma 3 27B",
          "version": "Gemma 3 27B",
          "modelId": "google/gemma-3-27b-it",
          "modalities": [
            "文本",
            "视觉"
          ],
          "inputModalities": [
            "text",
            "image"
          ],
          "outputModalities": [
            "text"
          ],
          "desc": "Google Gemma 系列；支持文本、视觉。",
          "description": "Google Gemma 系列；支持文本、视觉。",
          "source": "https://openrouter.ai/api/v1/models",
          "sourceUrl": "https://openrouter.ai/google/gemma-3-27b-it",
          "apiUrl": "https://openrouter.ai/google/gemma-3-27b-it/api",
          "playgroundUrl": "https://openrouter.ai/chat?models=google%2Fgemma-3-27b-it",
          "inputPrice": 0.08,
          "outputPrice": 0.35,
          "currency": "USD",
          "unit": "百万 tokens",
          "billing": "按量计费",
          "priceLabel": "OpenRouter 参考价",
          "priceSource": "https://openrouter.ai/api/v1/models",
          "collectedAt": "2026-11-07",
          "bestObservedModelRank": null,
          "contextLength": 131072,
          "rawPricing": {
            "prompt": "0.00000008",
            "completion": "0.00000035",
            "input_cache_read": "0.00000004"
          },
          "officialPricing": {
            "input": null,
            "output": null,
            "unit": "百万 tokens",
            "currency": "USD",
            "sourceUrl": null,
            "updatedAt": null,
            "status": "unsupported",
            "note": "同型号官方标准价尚未核实；OpenRouter平台参考价单独保留。"
          },
          "officialPlaygroundUrl": null,
          "officialPlaygroundScope": null,
          "officialPlaygroundNote": null,
          "officialApiUrl": null
        }
      ]
    },
    {
      "id": "nova",
      "family": "Nova",
      "brand": "Amazon",
      "logo": "assets/aws.svg",
      "popularityRank": null,
      "bestObservedModelRank": null,
      "popularitySource": "https://openrouter.ai/rankings",
      "popularityPeriod": "2026-11-06 UTC（最近完整日）",
      "versions": [
        {
          "name": "Nova Premier 1.0",
          "version": "Nova Premier 1.0",
          "modelId": "amazon/nova-premier-v1",
          "modalities": [
            "文本",
            "视觉"
          ],
          "inputModalities": [
            "text",
            "image"
          ],
          "outputModalities": [
            "text"
          ],
          "desc": "Amazon Nova 系列；支持文本、视觉。",
          "description": "Amazon Nova 系列；支持文本、视觉。",
          "source": "https://openrouter.ai/api/v1/models",
          "sourceUrl": "https://openrouter.ai/amazon/nova-premier-v1",
          "apiUrl": "https://openrouter.ai/amazon/nova-premier-v1/api",
          "playgroundUrl": "https://openrouter.ai/chat?models=amazon%2Fnova-premier-v1",
          "inputPrice": 2.5,
          "outputPrice": 12.5,
          "currency": "USD",
          "unit": "百万 tokens",
          "billing": "按量计费",
          "priceLabel": "OpenRouter 参考价",
          "priceSource": "https://openrouter.ai/api/v1/models",
          "collectedAt": "2026-11-07",
          "bestObservedModelRank": null,
          "contextLength": 1000000,
          "rawPricing": {
            "prompt": "0.0000025",
            "completion": "0.0000125",
            "input_cache_read": "0.000000625"
          },
          "officialPricing": {
            "input": null,
            "output": null,
            "unit": "百万 tokens",
            "currency": "USD",
            "sourceUrl": null,
            "updatedAt": null,
            "status": "unsupported",
            "note": "同型号官方标准价尚未核实；OpenRouter平台参考价单独保留。"
          },
          "officialPlaygroundUrl": null,
          "officialPlaygroundScope": null,
          "officialPlaygroundNote": null,
          "officialApiUrl": null
        }
      ]
    },
    {
      "id": "sonar",
      "family": "Sonar",
      "brand": "Perplexity",
      "logo": "assets/perplexity.svg",
      "popularityRank": null,
      "bestObservedModelRank": null,
      "popularitySource": "https://openrouter.ai/rankings",
      "popularityPeriod": "2026-11-06 UTC（最近完整日）",
      "versions": [
        {
          "name": "Sonar Pro Search",
          "version": "Sonar Pro Search",
          "modelId": "perplexity/sonar-pro-search",
          "modalities": [
            "文本",
            "视觉"
          ],
          "inputModalities": [
            "text",
            "image"
          ],
          "outputModalities": [
            "text"
          ],
          "desc": "Perplexity Sonar 系列；支持文本、视觉。",
          "description": "Perplexity Sonar 系列；支持文本、视觉。",
          "source": "https://openrouter.ai/api/v1/models",
          "sourceUrl": "https://openrouter.ai/perplexity/sonar-pro-search",
          "apiUrl": "https://openrouter.ai/perplexity/sonar-pro-search/api",
          "playgroundUrl": "https://openrouter.ai/chat?models=perplexity%2Fsonar-pro-search",
          "inputPrice": 3,
          "outputPrice": 15,
          "currency": "USD",
          "unit": "百万 tokens",
          "billing": "按量计费",
          "priceLabel": "OpenRouter 参考价",
          "priceSource": "https://openrouter.ai/api/v1/models",
          "collectedAt": "2026-11-07",
          "bestObservedModelRank": null,
          "contextLength": 200000,
          "rawPricing": {
            "prompt": "0.000003",
            "completion": "0.000015",
            "web_search": "0.018"
          },
          "officialPricing": {
            "input": null,
            "output": null,
            "unit": "百万 tokens",
            "currency": "USD",
            "sourceUrl": null,
            "updatedAt": null,
            "status": "unsupported",
            "note": "同型号官方标准价尚未核实；OpenRouter平台参考价单独保留。"
          },
          "officialPlaygroundUrl": null,
          "officialPlaygroundScope": null,
          "officialPlaygroundNote": null,
          "officialApiUrl": null
        },
        {
          "name": "Sonar Reasoning Pro",
          "version": "Sonar Reasoning Pro",
          "modelId": "perplexity/sonar-reasoning-pro",
          "modalities": [
            "文本",
            "视觉"
          ],
          "inputModalities": [
            "text",
            "image"
          ],
          "outputModalities": [
            "text"
          ],
          "desc": "Perplexity Sonar 系列；支持文本、视觉。",
          "description": "Perplexity Sonar 系列；支持文本、视觉。",
          "source": "https://openrouter.ai/api/v1/models",
          "sourceUrl": "https://openrouter.ai/perplexity/sonar-reasoning-pro",
          "apiUrl": "https://openrouter.ai/perplexity/sonar-reasoning-pro/api",
          "playgroundUrl": "https://openrouter.ai/chat?models=perplexity%2Fsonar-reasoning-pro",
          "inputPrice": 2,
          "outputPrice": 8,
          "currency": "USD",
          "unit": "百万 tokens",
          "billing": "按量计费",
          "priceLabel": "OpenRouter 参考价",
          "priceSource": "https://openrouter.ai/api/v1/models",
          "collectedAt": "2026-11-07",
          "bestObservedModelRank": null,
          "contextLength": 128000,
          "rawPricing": {
            "prompt": "0.000002",
            "completion": "0.000008",
            "web_search": "0.005"
          },
          "officialPricing": {
            "input": null,
            "output": null,
            "unit": "百万 tokens",
            "currency": "USD",
            "sourceUrl": null,
            "updatedAt": null,
            "status": "unsupported",
            "note": "同型号官方标准价尚未核实；OpenRouter平台参考价单独保留。"
          },
          "officialPlaygroundUrl": null,
          "officialPlaygroundScope": null,
          "officialPlaygroundNote": null,
          "officialApiUrl": null
        },
        {
          "name": "Sonar Pro",
          "version": "Sonar Pro",
          "modelId": "perplexity/sonar-pro",
          "modalities": [
            "文本",
            "视觉"
          ],
          "inputModalities": [
            "text",
            "image"
          ],
          "outputModalities": [
            "text"
          ],
          "desc": "Perplexity Sonar 系列；支持文本、视觉。",
          "description": "Perplexity Sonar 系列；支持文本、视觉。",
          "source": "https://openrouter.ai/api/v1/models",
          "sourceUrl": "https://openrouter.ai/perplexity/sonar-pro",
          "apiUrl": "https://openrouter.ai/perplexity/sonar-pro/api",
          "playgroundUrl": "https://openrouter.ai/chat?models=perplexity%2Fsonar-pro",
          "inputPrice": 3,
          "outputPrice": 15,
          "currency": "USD",
          "unit": "百万 tokens",
          "billing": "按量计费",
          "priceLabel": "OpenRouter 参考价",
          "priceSource": "https://openrouter.ai/api/v1/models",
          "collectedAt": "2026-11-07",
          "bestObservedModelRank": null,
          "contextLength": 200000,
          "rawPricing": {
            "prompt": "0.000003",
            "completion": "0.000015",
            "web_search": "0.005"
          },
          "officialPricing": {
            "input": null,
            "output": null,
            "unit": "百万 tokens",
            "currency": "USD",
            "sourceUrl": null,
            "updatedAt": null,
            "status": "unsupported",
            "note": "同型号官方标准价尚未核实；OpenRouter平台参考价单独保留。"
          },
          "officialPlaygroundUrl": null,
          "officialPlaygroundScope": null,
          "officialPlaygroundNote": null,
          "officialApiUrl": null
        },
        {
          "name": "Sonar Deep Research",
          "version": "Sonar Deep Research",
          "modelId": "perplexity/sonar-deep-research",
          "modalities": [
            "文本"
          ],
          "inputModalities": [
            "text"
          ],
          "outputModalities": [
            "text"
          ],
          "desc": "Perplexity Sonar 系列；支持文本。",
          "description": "Perplexity Sonar 系列；支持文本。",
          "source": "https://openrouter.ai/api/v1/models",
          "sourceUrl": "https://openrouter.ai/perplexity/sonar-deep-research",
          "apiUrl": "https://openrouter.ai/perplexity/sonar-deep-research/api",
          "playgroundUrl": "https://openrouter.ai/chat?models=perplexity%2Fsonar-deep-research",
          "inputPrice": 2,
          "outputPrice": 8,
          "currency": "USD",
          "unit": "百万 tokens",
          "billing": "按量计费",
          "priceLabel": "OpenRouter 参考价",
          "priceSource": "https://openrouter.ai/api/v1/models",
          "collectedAt": "2026-11-07",
          "bestObservedModelRank": null,
          "contextLength": 128000,
          "rawPricing": {
            "prompt": "0.000002",
            "completion": "0.000008",
            "web_search": "0.005",
            "internal_reasoning": "0.000003"
          },
          "officialPricing": {
            "input": null,
            "output": null,
            "unit": "百万 tokens",
            "currency": "USD",
            "sourceUrl": null,
            "updatedAt": null,
            "status": "unsupported",
            "note": "同型号官方标准价尚未核实；OpenRouter平台参考价单独保留。"
          },
          "officialPlaygroundUrl": null,
          "officialPlaygroundScope": null,
          "officialPlaygroundNote": null,
          "officialApiUrl": null
        }
      ]
    },
    {
      "id": "command",
      "family": "Command",
      "brand": "Cohere",
      "logo": "assets/cohere.svg",
      "popularityRank": null,
      "bestObservedModelRank": null,
      "popularitySource": "https://openrouter.ai/rankings",
      "popularityPeriod": "2026-11-06 UTC（最近完整日）",
      "versions": [
        {
          "name": "Command A",
          "version": "Command A",
          "modelId": "cohere/command-a",
          "modalities": [
            "文本"
          ],
          "inputModalities": [
            "text"
          ],
          "outputModalities": [
            "text"
          ],
          "desc": "Cohere Command 系列；支持文本。",
          "description": "Cohere Command 系列；支持文本。",
          "source": "https://openrouter.ai/api/v1/models",
          "sourceUrl": "https://openrouter.ai/cohere/command-a",
          "apiUrl": "https://openrouter.ai/cohere/command-a/api",
          "playgroundUrl": "https://openrouter.ai/chat?models=cohere%2Fcommand-a",
          "inputPrice": 2.5,
          "outputPrice": 10,
          "currency": "USD",
          "unit": "百万 tokens",
          "billing": "按量计费",
          "priceLabel": "OpenRouter 参考价",
          "priceSource": "https://openrouter.ai/api/v1/models",
          "collectedAt": "2026-11-07",
          "bestObservedModelRank": null,
          "contextLength": 256000,
          "rawPricing": {
            "prompt": "0.0000025",
            "completion": "0.00001"
          },
          "officialPricing": {
            "input": null,
            "output": null,
            "unit": "百万 tokens",
            "currency": "USD",
            "sourceUrl": null,
            "updatedAt": null,
            "status": "unsupported",
            "note": "同型号官方标准价尚未核实；OpenRouter平台参考价单独保留。"
          },
          "officialPlaygroundUrl": null,
          "officialPlaygroundScope": null,
          "officialPlaygroundNote": null,
          "officialApiUrl": null
        }
      ]
    },
    {
      "id": "reka",
      "family": "Reka",
      "brand": "Reka",
      "logo": "assets/reka.svg",
      "popularityRank": null,
      "bestObservedModelRank": null,
      "popularitySource": "https://openrouter.ai/rankings",
      "popularityPeriod": "2026-11-06 UTC（最近完整日）",
      "versions": [
        {
          "name": "Reka Edge",
          "version": "Reka Edge",
          "modelId": "rekaai/reka-edge",
          "modalities": [
            "文本",
            "视觉"
          ],
          "inputModalities": [
            "image",
            "text",
            "video"
          ],
          "outputModalities": [
            "text"
          ],
          "desc": "Reka Reka 系列；支持文本、视觉。",
          "description": "Reka Reka 系列；支持文本、视觉。",
          "source": "https://openrouter.ai/api/v1/models",
          "sourceUrl": "https://openrouter.ai/rekaai/reka-edge",
          "apiUrl": "https://openrouter.ai/rekaai/reka-edge/api",
          "playgroundUrl": "https://openrouter.ai/chat?models=rekaai%2Freka-edge",
          "inputPrice": 0.09999999999999999,
          "outputPrice": 0.09999999999999999,
          "currency": "USD",
          "unit": "百万 tokens",
          "billing": "按量计费",
          "priceLabel": "OpenRouter 参考价",
          "priceSource": "https://openrouter.ai/api/v1/models",
          "collectedAt": "2026-11-07",
          "bestObservedModelRank": null,
          "contextLength": 16384,
          "rawPricing": {
            "prompt": "0.0000001",
            "completion": "0.0000001"
          },
          "officialPricing": {
            "input": null,
            "output": null,
            "unit": "百万 tokens",
            "currency": "USD",
            "sourceUrl": null,
            "updatedAt": null,
            "status": "unsupported",
            "note": "同型号官方标准价尚未核实；OpenRouter平台参考价单独保留。"
          },
          "officialPlaygroundUrl": null,
          "officialPlaygroundScope": null,
          "officialPlaygroundNote": null,
          "officialApiUrl": null
        },
        {
          "name": "Reka Flash 3",
          "version": "Reka Flash 3",
          "modelId": "rekaai/reka-flash-3",
          "modalities": [
            "文本"
          ],
          "inputModalities": [
            "text"
          ],
          "outputModalities": [
            "text"
          ],
          "desc": "Reka Reka 系列；支持文本。",
          "description": "Reka Reka 系列；支持文本。",
          "source": "https://openrouter.ai/api/v1/models",
          "sourceUrl": "https://openrouter.ai/rekaai/reka-flash-3",
          "apiUrl": "https://openrouter.ai/rekaai/reka-flash-3/api",
          "playgroundUrl": "https://openrouter.ai/chat?models=rekaai%2Freka-flash-3",
          "inputPrice": 0.09999999999999999,
          "outputPrice": 0.19999999999999998,
          "currency": "USD",
          "unit": "百万 tokens",
          "billing": "按量计费",
          "priceLabel": "OpenRouter 参考价",
          "priceSource": "https://openrouter.ai/api/v1/models",
          "collectedAt": "2026-11-07",
          "bestObservedModelRank": null,
          "contextLength": 65536,
          "rawPricing": {
            "prompt": "0.0000001",
            "completion": "0.0000002"
          },
          "officialPricing": {
            "input": null,
            "output": null,
            "unit": "百万 tokens",
            "currency": "USD",
            "sourceUrl": null,
            "updatedAt": null,
            "status": "unsupported",
            "note": "同型号官方标准价尚未核实；OpenRouter平台参考价单独保留。"
          },
          "officialPlaygroundUrl": null,
          "officialPlaygroundScope": null,
          "officialPlaygroundNote": null,
          "officialApiUrl": null
        }
      ]
    },
    {
      "id": "lfm",
      "family": "LFM",
      "brand": "Liquid AI",
      "logo": "assets/liquid.svg",
      "popularityRank": null,
      "bestObservedModelRank": null,
      "popularitySource": "https://openrouter.ai/rankings",
      "popularityPeriod": "2026-11-06 UTC（最近完整日）",
      "versions": [
        {
          "name": "LFM3-1.7B",
          "version": "LFM3-1.7B",
          "modelId": "liquid/lfm-3-1.7b",
          "modalities": [
            "文本"
          ],
          "inputModalities": [
            "text"
          ],
          "outputModalities": [
            "text"
          ],
          "desc": "Liquid AI LFM 系列；支持文本。",
          "description": "Liquid AI LFM 系列；支持文本。",
          "source": "https://openrouter.ai/api/v1/models",
          "sourceUrl": "https://openrouter.ai/liquid/lfm-3-1.7b",
          "apiUrl": "https://openrouter.ai/liquid/lfm-3-1.7b/api",
          "playgroundUrl": "https://openrouter.ai/chat?models=liquid%2Flfm-3-1.7b",
          "inputPrice": 0.08,
          "outputPrice": 0.19999999999999998,
          "currency": "USD",
          "unit": "百万 tokens",
          "billing": "按量计费",
          "priceLabel": "OpenRouter 参考价",
          "priceSource": "https://openrouter.ai/api/v1/models",
          "collectedAt": "2026-11-07",
          "bestObservedModelRank": null,
          "contextLength": 262144,
          "rawPricing": {
            "prompt": "0.00000008",
            "completion": "0.0000002",
            "input_cache_read": "0.00000002"
          },
          "officialPricing": {
            "input": null,
            "output": null,
            "unit": "百万 tokens",
            "currency": "USD",
            "sourceUrl": null,
            "updatedAt": null,
            "status": "unsupported",
            "note": "同型号官方标准价尚未核实；OpenRouter平台参考价单独保留。"
          },
          "officialPlaygroundUrl": null,
          "officialPlaygroundScope": null,
          "officialPlaygroundNote": null,
          "officialApiUrl": null
        },
        {
          "name": "LFM3-1.7B (free)",
          "version": "LFM3-1.7B (free)",
          "modelId": "liquid/lfm-3-1.7b:free",
          "modalities": [
            "文本"
          ],
          "inputModalities": [
            "text"
          ],
          "outputModalities": [
            "text"
          ],
          "desc": "Liquid AI LFM 系列；支持文本。",
          "description": "Liquid AI LFM 系列；支持文本。",
          "source": "https://openrouter.ai/api/v1/models",
          "sourceUrl": "https://openrouter.ai/liquid/lfm-3-1.7b:free",
          "apiUrl": "https://openrouter.ai/liquid/lfm-3-1.7b:free/api",
          "playgroundUrl": "https://openrouter.ai/chat?models=liquid%2Flfm-3-1.7b%3Afree",
          "inputPrice": 0,
          "outputPrice": 0,
          "currency": "USD",
          "unit": "百万 tokens",
          "billing": "按量计费",
          "priceLabel": "OpenRouter 参考价",
          "priceSource": "https://openrouter.ai/api/v1/models",
          "collectedAt": "2026-11-07",
          "bestObservedModelRank": null,
          "contextLength": 262144,
          "rawPricing": {
            "prompt": "0",
            "completion": "0"
          },
          "officialPricing": {
            "input": null,
            "output": null,
            "unit": "百万 tokens",
            "currency": "USD",
            "sourceUrl": null,
            "updatedAt": null,
            "status": "unsupported",
            "note": "同型号官方标准价尚未核实；OpenRouter平台参考价单独保留。"
          },
          "officialPlaygroundUrl": null,
          "officialPlaygroundScope": null,
          "officialPlaygroundNote": null,
          "officialApiUrl": null
        }
      ]
    },
    {
      "id": "longcat",
      "family": "LongCat",
      "brand": "Meituan",
      "logo": "assets/longcat.svg",
      "popularityRank": null,
      "bestObservedModelRank": null,
      "popularitySource": "https://openrouter.ai/rankings",
      "popularityPeriod": "2026-11-06 UTC（最近完整日）",
      "versions": [
        {
          "name": "LongCat 2.0",
          "version": "LongCat 2.0",
          "modelId": "meituan/longcat-2.0",
          "modalities": [
            "文本"
          ],
          "inputModalities": [
            "text"
          ],
          "outputModalities": [
            "text"
          ],
          "desc": "Meituan LongCat 系列；支持文本。",
          "description": "Meituan LongCat 系列；支持文本。",
          "source": "https://openrouter.ai/api/v1/models",
          "sourceUrl": "https://openrouter.ai/meituan/longcat-2.0",
          "apiUrl": "https://openrouter.ai/meituan/longcat-2.0/api",
          "playgroundUrl": "https://openrouter.ai/chat?models=meituan%2Flongcat-2.0",
          "inputPrice": 0.3,
          "outputPrice": 1.2,
          "currency": "USD",
          "unit": "百万 tokens",
          "billing": "按量计费",
          "priceLabel": "OpenRouter 参考价",
          "priceSource": "https://openrouter.ai/api/v1/models",
          "collectedAt": "2026-11-07",
          "bestObservedModelRank": null,
          "contextLength": 1048756,
          "rawPricing": {
            "prompt": "0.0000003",
            "completion": "0.0000012",
            "input_cache_read": "0.000000006"
          },
          "officialPricing": {
            "input": null,
            "output": null,
            "unit": "百万 tokens",
            "currency": "USD",
            "sourceUrl": null,
            "updatedAt": null,
            "status": "unsupported",
            "note": "同型号官方标准价尚未核实；OpenRouter平台参考价单独保留。"
          },
          "officialPlaygroundUrl": null,
          "officialPlaygroundScope": null,
          "officialPlaygroundNote": null,
          "officialApiUrl": null
        }
      ]
    },
    {
      "id": "muse",
      "family": "Muse",
      "brand": "Meta",
      "logo": "assets/meta.svg",
      "popularityRank": null,
      "bestObservedModelRank": null,
      "popularitySource": "https://openrouter.ai/rankings",
      "popularityPeriod": "2026-11-06 UTC（最近完整日）",
      "versions": [
        {
          "name": "Muse Spark 1.1",
          "version": "Muse Spark 1.1",
          "modelId": "meta/muse-spark-1.1",
          "modalities": [
            "文本",
            "视觉"
          ],
          "inputModalities": [
            "text",
            "image",
            "video",
            "file"
          ],
          "outputModalities": [
            "text"
          ],
          "desc": "Meta Muse 系列；支持文本、视觉。",
          "description": "Meta Muse 系列；支持文本、视觉。",
          "source": "https://openrouter.ai/api/v1/models",
          "sourceUrl": "https://openrouter.ai/meta/muse-spark-1.1",
          "apiUrl": "https://openrouter.ai/meta/muse-spark-1.1/api",
          "playgroundUrl": "https://openrouter.ai/chat?models=meta%2Fmuse-spark-1.1",
          "inputPrice": 1.25,
          "outputPrice": 4.25,
          "currency": "USD",
          "unit": "百万 tokens",
          "billing": "按量计费",
          "priceLabel": "OpenRouter 参考价",
          "priceSource": "https://openrouter.ai/api/v1/models",
          "collectedAt": "2026-11-07",
          "bestObservedModelRank": null,
          "contextLength": 1048576,
          "rawPricing": {
            "prompt": "0.00000125",
            "completion": "0.00000425",
            "web_search": "0.0025",
            "input_cache_read": "0.00000015"
          },
          "officialPricing": {
            "input": null,
            "output": null,
            "unit": "百万 tokens",
            "currency": "USD",
            "sourceUrl": null,
            "updatedAt": null,
            "status": "unsupported",
            "note": "同型号官方标准价尚未核实；OpenRouter平台参考价单独保留。"
          },
          "officialPlaygroundUrl": null,
          "officialPlaygroundScope": null,
          "officialPlaygroundNote": null,
          "officialApiUrl": null
        }
      ]
    },
    {
      "id": "voxtral",
      "family": "Voxtral",
      "brand": "Mistral AI",
      "logo": "assets/mistral.svg",
      "popularityRank": null,
      "bestObservedModelRank": null,
      "popularitySource": "https://openrouter.ai/rankings",
      "popularityPeriod": "2026-11-06 UTC（最近完整日）",
      "versions": [
        {
          "name": "Voxtral Small 24B 2507",
          "version": "Voxtral Small 24B 2507",
          "modelId": "mistralai/voxtral-small-24b-2507",
          "modalities": [
            "文本",
            "语音"
          ],
          "inputModalities": [
            "text",
            "audio",
            "file"
          ],
          "outputModalities": [
            "text"
          ],
          "desc": "Mistral AI Voxtral 系列；支持文本、语音。",
          "description": "Mistral AI Voxtral 系列；支持文本、语音。",
          "source": "https://openrouter.ai/api/v1/models",
          "sourceUrl": "https://openrouter.ai/mistralai/voxtral-small-24b-2507",
          "apiUrl": "https://openrouter.ai/mistralai/voxtral-small-24b-2507/api",
          "playgroundUrl": "https://openrouter.ai/chat?models=mistralai%2Fvoxtral-small-24b-2507",
          "inputPrice": 0.09999999999999999,
          "outputPrice": 0.3,
          "currency": "USD",
          "unit": "百万 tokens",
          "billing": "按量计费",
          "priceLabel": "OpenRouter 参考价",
          "priceSource": "https://openrouter.ai/api/v1/models",
          "collectedAt": "2026-11-07",
          "bestObservedModelRank": null,
          "contextLength": 32768,
          "rawPricing": {
            "prompt": "0.0000001",
            "completion": "0.0000003",
            "audio": "0.0001",
            "input_cache_read": "0.00000001"
          },
          "officialPricing": {
            "input": null,
            "output": null,
            "unit": "百万 tokens",
            "currency": "USD",
            "sourceUrl": "https://docs.mistral.ai/models",
            "updatedAt": null,
            "status": "unsupported",
            "note": "同型号官方标准价尚未核实；OpenRouter平台参考价单独保留。"
          },
          "officialPlaygroundUrl": "https://console.mistral.ai/",
          "officialPlaygroundScope": "brand-portal",
          "officialPlaygroundNote": "官方品牌体验入口；需登录并自行确认型号可用性，不保证直达当前版本。",
          "officialApiUrl": null
        }
      ]
    },
    {
      "id": "lyria",
      "family": "Lyria",
      "brand": "Google",
      "logo": "assets/google.svg",
      "popularityRank": null,
      "bestObservedModelRank": null,
      "popularitySource": "https://openrouter.ai/rankings",
      "popularityPeriod": "2026-11-06 UTC（最近完整日）",
      "versions": [
        {
          "name": "Lyria 3 Pro Preview",
          "version": "Lyria 3 Pro Preview",
          "modelId": "google/lyria-3-pro-preview",
          "modalities": [
            "全模态",
            "文本",
            "视觉",
            "语音"
          ],
          "inputModalities": [
            "text",
            "image"
          ],
          "outputModalities": [
            "text",
            "audio"
          ],
          "desc": "Google Lyria 系列；支持文本、视觉、语音。",
          "description": "Google Lyria 系列；支持文本、视觉、语音。",
          "source": "https://openrouter.ai/api/v1/models",
          "sourceUrl": "https://openrouter.ai/google/lyria-3-pro-preview",
          "apiUrl": "https://openrouter.ai/google/lyria-3-pro-preview/api",
          "playgroundUrl": "https://openrouter.ai/chat?models=google%2Flyria-3-pro-preview",
          "inputPrice": 0,
          "outputPrice": 0,
          "currency": "USD",
          "unit": "百万 tokens",
          "billing": "按量计费",
          "priceLabel": "OpenRouter 参考价",
          "priceSource": "https://openrouter.ai/api/v1/models",
          "collectedAt": "2026-11-07",
          "bestObservedModelRank": null,
          "contextLength": 1048576,
          "rawPricing": {
            "prompt": "0",
            "completion": "0"
          },
          "officialPricing": {
            "input": null,
            "output": null,
            "unit": "百万 tokens",
            "currency": "USD",
            "sourceUrl": null,
            "updatedAt": null,
            "status": "unsupported",
            "note": "同型号官方标准价尚未核实；OpenRouter平台参考价单独保留。"
          },
          "officialPlaygroundUrl": null,
          "officialPlaygroundScope": null,
          "officialPlaygroundNote": null,
          "officialApiUrl": null
        },
        {
          "name": "Lyria 3 Clip Preview",
          "version": "Lyria 3 Clip Preview",
          "modelId": "google/lyria-3-clip-preview",
          "modalities": [
            "全模态",
            "文本",
            "视觉",
            "语音"
          ],
          "inputModalities": [
            "text",
            "image"
          ],
          "outputModalities": [
            "text",
            "audio"
          ],
          "desc": "Google Lyria 系列；支持文本、视觉、语音。",
          "description": "Google Lyria 系列；支持文本、视觉、语音。",
          "source": "https://openrouter.ai/api/v1/models",
          "sourceUrl": "https://openrouter.ai/google/lyria-3-clip-preview",
          "apiUrl": "https://openrouter.ai/google/lyria-3-clip-preview/api",
          "playgroundUrl": "https://openrouter.ai/chat?models=google%2Flyria-3-clip-preview",
          "inputPrice": 0,
          "outputPrice": 0,
          "currency": "USD",
          "unit": "百万 tokens",
          "billing": "按量计费",
          "priceLabel": "OpenRouter 参考价",
          "priceSource": "https://openrouter.ai/api/v1/models",
          "collectedAt": "2026-11-07",
          "bestObservedModelRank": null,
          "contextLength": 1048576,
          "rawPricing": {
            "prompt": "0",
            "completion": "0"
          },
          "officialPricing": {
            "input": null,
            "output": null,
            "unit": "百万 tokens",
            "currency": "USD",
            "sourceUrl": null,
            "updatedAt": null,
            "status": "unsupported",
            "note": "同型号官方标准价尚未核实；OpenRouter平台参考价单独保留。"
          },
          "officialPlaygroundUrl": null,
          "officialPlaygroundScope": null,
          "officialPlaygroundNote": null,
          "officialApiUrl": null
        }
      ]
    },
    {
      "id": "gpt-oss",
      "family": "GPT OSS",
      "brand": "OpenAI",
      "logo": "assets/openai.svg",
      "popularityRank": null,
      "bestObservedModelRank": null,
      "popularitySource": "https://openrouter.ai/rankings",
      "popularityPeriod": "2026-11-06 UTC（最近完整日）",
      "versions": [
        {
          "name": "gpt-oss-safeguard-20b",
          "version": "gpt-oss-safeguard-20b",
          "modelId": "openai/gpt-oss-safeguard-20b",
          "modalities": [
            "文本"
          ],
          "inputModalities": [
            "text"
          ],
          "outputModalities": [
            "text"
          ],
          "desc": "OpenAI GPT OSS 系列；支持文本。",
          "description": "OpenAI GPT OSS 系列；支持文本。",
          "source": "https://openrouter.ai/api/v1/models",
          "sourceUrl": "https://openrouter.ai/openai/gpt-oss-safeguard-20b",
          "apiUrl": "https://openrouter.ai/openai/gpt-oss-safeguard-20b/api",
          "playgroundUrl": "https://openrouter.ai/chat?models=openai%2Fgpt-oss-safeguard-20b",
          "inputPrice": 0.075,
          "outputPrice": 0.3,
          "currency": "USD",
          "unit": "百万 tokens",
          "billing": "按量计费",
          "priceLabel": "OpenRouter 参考价",
          "priceSource": "https://openrouter.ai/api/v1/models",
          "collectedAt": "2026-11-07",
          "bestObservedModelRank": null,
          "contextLength": 131072,
          "rawPricing": {
            "prompt": "0.000000075",
            "completion": "0.0000003",
            "input_cache_read": "0.0000000375"
          },
          "officialPricing": {
            "input": null,
            "output": null,
            "unit": "百万 tokens",
            "currency": "USD",
            "sourceUrl": null,
            "updatedAt": null,
            "status": "unsupported",
            "note": "同型号官方标准价尚未核实；OpenRouter平台参考价单独保留。"
          },
          "officialPlaygroundUrl": null,
          "officialPlaygroundScope": null,
          "officialPlaygroundNote": null,
          "officialApiUrl": null
        }
      ]
    },
    {
      "id": "inkling",
      "family": "Inkling",
      "brand": "Thinking Machines",
      "logo": null,
      "popularityRank": null,
      "bestObservedModelRank": null,
      "popularitySource": "https://openrouter.ai/rankings",
      "popularityPeriod": "2026-11-06 UTC（最近完整日）",
      "versions": [
        {
          "name": "Inkling",
          "version": "Inkling",
          "modelId": "thinkingmachines/inkling",
          "modalities": [
            "全模态",
            "文本",
            "视觉",
            "语音"
          ],
          "inputModalities": [
            "text",
            "image",
            "audio"
          ],
          "outputModalities": [
            "text"
          ],
          "desc": "Thinking Machines Inkling 系列；支持文本、视觉、语音。",
          "description": "Thinking Machines Inkling 系列；支持文本、视觉、语音。",
          "source": "https://openrouter.ai/api/v1/models",
          "sourceUrl": "https://openrouter.ai/thinkingmachines/inkling",
          "apiUrl": "https://openrouter.ai/thinkingmachines/inkling/api",
          "playgroundUrl": "https://openrouter.ai/chat?models=thinkingmachines%2Finkling",
          "inputPrice": 1,
          "outputPrice": 4.05,
          "currency": "USD",
          "unit": "百万 tokens",
          "billing": "按量计费",
          "priceLabel": "OpenRouter 参考价",
          "priceSource": "https://openrouter.ai/api/v1/models",
          "collectedAt": "2026-11-07",
          "bestObservedModelRank": null,
          "contextLength": 524288,
          "rawPricing": {
            "prompt": "0.000001",
            "completion": "0.00000405",
            "input_cache_read": "0.00000017"
          },
          "officialPricing": {
            "input": null,
            "output": null,
            "unit": "百万 tokens",
            "currency": "USD",
            "sourceUrl": null,
            "updatedAt": null,
            "status": "unsupported",
            "note": "同型号官方标准价尚未核实；OpenRouter平台参考价单独保留。"
          },
          "officialPlaygroundUrl": null,
          "officialPlaygroundScope": null,
          "officialPlaygroundNote": null,
          "officialApiUrl": null
        }
      ]
    },
    {
      "id": "ripple",
      "family": "Ripple",
      "brand": "Ricursive",
      "logo": null,
      "popularityRank": null,
      "bestObservedModelRank": null,
      "popularitySource": "https://openrouter.ai/rankings",
      "popularityPeriod": "2026-11-06 UTC（最近完整日）",
      "versions": [
        {
          "name": "Ripple 65B Preview",
          "version": "Ripple 65B Preview",
          "modelId": "ricursiveai/ripple-65b-preview",
          "modalities": [
            "文本"
          ],
          "inputModalities": [
            "text"
          ],
          "outputModalities": [
            "text"
          ],
          "desc": "Ricursive Ripple 系列；支持文本。",
          "description": "Ricursive Ripple 系列；支持文本。",
          "source": "https://openrouter.ai/api/v1/models",
          "sourceUrl": "https://openrouter.ai/ricursiveai/ripple-65b-preview",
          "apiUrl": "https://openrouter.ai/ricursiveai/ripple-65b-preview/api",
          "playgroundUrl": "https://openrouter.ai/chat?models=ricursiveai%2Fripple-65b-preview",
          "inputPrice": 0.19999999999999998,
          "outputPrice": 0.6,
          "currency": "USD",
          "unit": "百万 tokens",
          "billing": "按量计费",
          "priceLabel": "OpenRouter 参考价",
          "priceSource": "https://openrouter.ai/api/v1/models",
          "collectedAt": "2026-11-07",
          "bestObservedModelRank": null,
          "contextLength": 1048576,
          "rawPricing": {
            "prompt": "0.0000002",
            "completion": "0.0000006",
            "input_cache_read": "0.00000005"
          },
          "officialPricing": {
            "input": null,
            "output": null,
            "unit": "百万 tokens",
            "currency": "USD",
            "sourceUrl": null,
            "updatedAt": null,
            "status": "unsupported",
            "note": "同型号官方标准价尚未核实；OpenRouter平台参考价单独保留。"
          },
          "officialPlaygroundUrl": null,
          "officialPlaygroundScope": null,
          "officialPlaygroundNote": null,
          "officialApiUrl": null
        }
      ]
    },
    {
      "id": "particle",
      "family": "Particle",
      "brand": "Particle AI",
      "logo": null,
      "popularityRank": null,
      "bestObservedModelRank": null,
      "popularitySource": "https://openrouter.ai/rankings",
      "popularityPeriod": "2026-11-06 UTC（最近完整日）",
      "versions": [
        {
          "name": "Particle-1",
          "version": "Particle-1",
          "modelId": "particle-ai/particle-1",
          "modalities": [
            "文本",
            "视觉"
          ],
          "inputModalities": [
            "text",
            "image"
          ],
          "outputModalities": [
            "text"
          ],
          "desc": "Particle AI Particle 系列；支持文本、视觉。",
          "description": "Particle AI Particle 系列；支持文本、视觉。",
          "source": "https://openrouter.ai/api/v1/models",
          "sourceUrl": "https://openrouter.ai/particle-ai/particle-1",
          "apiUrl": "https://openrouter.ai/particle-ai/particle-1/api",
          "playgroundUrl": "https://openrouter.ai/chat?models=particle-ai%2Fparticle-1",
          "inputPrice": 0.049999999999999996,
          "outputPrice": 0.5,
          "currency": "USD",
          "unit": "百万 tokens",
          "billing": "按量计费",
          "priceLabel": "OpenRouter 参考价",
          "priceSource": "https://openrouter.ai/api/v1/models",
          "collectedAt": "2026-11-07",
          "bestObservedModelRank": null,
          "contextLength": 1048576,
          "rawPricing": {
            "prompt": "0.00000005",
            "completion": "0.0000005",
            "input_cache_read": "0.000000003"
          },
          "officialPricing": {
            "input": null,
            "output": null,
            "unit": "百万 tokens",
            "currency": "USD",
            "sourceUrl": null,
            "updatedAt": null,
            "status": "unsupported",
            "note": "同型号官方标准价尚未核实；OpenRouter平台参考价单独保留。"
          },
          "officialPlaygroundUrl": null,
          "officialPlaygroundScope": null,
          "officialPlaygroundNote": null,
          "officialApiUrl": null
        }
      ]
    },
    {
      "id": "flint",
      "family": "Flint",
      "brand": "Recursive",
      "logo": null,
      "popularityRank": null,
      "bestObservedModelRank": null,
      "popularitySource": "https://openrouter.ai/rankings",
      "popularityPeriod": "2026-11-06 UTC（最近完整日）",
      "versions": [
        {
          "name": "Flint (free)",
          "version": "Flint (free)",
          "modelId": "recursive/flint-v1.0:free",
          "modalities": [
            "文本"
          ],
          "inputModalities": [
            "text"
          ],
          "outputModalities": [
            "text"
          ],
          "desc": "Recursive Flint 系列；支持文本。",
          "description": "Recursive Flint 系列；支持文本。",
          "source": "https://openrouter.ai/api/v1/models",
          "sourceUrl": "https://openrouter.ai/recursive/flint-v1.0:free",
          "apiUrl": "https://openrouter.ai/recursive/flint-v1.0:free/api",
          "playgroundUrl": "https://openrouter.ai/chat?models=recursive%2Fflint-v1.0%3Afree",
          "inputPrice": 0,
          "outputPrice": 0,
          "currency": "USD",
          "unit": "百万 tokens",
          "billing": "按量计费",
          "priceLabel": "OpenRouter 参考价",
          "priceSource": "https://openrouter.ai/api/v1/models",
          "collectedAt": "2026-11-07",
          "bestObservedModelRank": null,
          "contextLength": 262144,
          "rawPricing": {
            "prompt": "0",
            "completion": "0"
          },
          "officialPricing": {
            "input": null,
            "output": null,
            "unit": "百万 tokens",
            "currency": "USD",
            "sourceUrl": null,
            "updatedAt": null,
            "status": "unsupported",
            "note": "同型号官方标准价尚未核实；OpenRouter平台参考价单独保留。"
          },
          "officialPlaygroundUrl": null,
          "officialPlaygroundScope": null,
          "officialPlaygroundNote": null,
          "officialApiUrl": null
        }
      ]
    },
    {
      "id": "skyfall",
      "family": "Skyfall",
      "brand": "TheDrummer",
      "logo": null,
      "popularityRank": null,
      "bestObservedModelRank": null,
      "popularitySource": "https://openrouter.ai/rankings",
      "popularityPeriod": "2026-11-06 UTC（最近完整日）",
      "versions": [
        {
          "name": "Skyfall 36B V2",
          "version": "Skyfall 36B V2",
          "modelId": "thedrummer/skyfall-36b-v2",
          "modalities": [
            "文本"
          ],
          "inputModalities": [
            "text"
          ],
          "outputModalities": [
            "text"
          ],
          "desc": "TheDrummer Skyfall 系列；支持文本。",
          "description": "TheDrummer Skyfall 系列；支持文本。",
          "source": "https://openrouter.ai/api/v1/models",
          "sourceUrl": "https://openrouter.ai/thedrummer/skyfall-36b-v2",
          "apiUrl": "https://openrouter.ai/thedrummer/skyfall-36b-v2/api",
          "playgroundUrl": "https://openrouter.ai/chat?models=thedrummer%2Fskyfall-36b-v2",
          "inputPrice": 0.55,
          "outputPrice": 0.7999999999999999,
          "currency": "USD",
          "unit": "百万 tokens",
          "billing": "按量计费",
          "priceLabel": "OpenRouter 参考价",
          "priceSource": "https://openrouter.ai/api/v1/models",
          "collectedAt": "2026-11-07",
          "bestObservedModelRank": null,
          "contextLength": 32768,
          "rawPricing": {
            "prompt": "0.00000055",
            "completion": "0.0000008",
            "input_cache_read": "0.00000025"
          },
          "officialPricing": {
            "input": null,
            "output": null,
            "unit": "百万 tokens",
            "currency": "USD",
            "sourceUrl": null,
            "updatedAt": null,
            "status": "unsupported",
            "note": "同型号官方标准价尚未核实；OpenRouter平台参考价单独保留。"
          },
          "officialPlaygroundUrl": null,
          "officialPlaygroundScope": null,
          "officialPlaygroundNote": null,
          "officialApiUrl": null
        }
      ]
    },
    {
      "id": "aion",
      "family": "Aion",
      "brand": "Aion Labs",
      "logo": null,
      "popularityRank": null,
      "bestObservedModelRank": null,
      "popularitySource": "https://openrouter.ai/rankings",
      "popularityPeriod": "2026-11-06 UTC（最近完整日）",
      "versions": [
        {
          "name": "Aion-RP 1.0 (8B)",
          "version": "Aion-RP 1.0 (8B)",
          "modelId": "aion-labs/aion-rp-llama-3.1-8b",
          "modalities": [
            "文本"
          ],
          "inputModalities": [
            "text"
          ],
          "outputModalities": [
            "text"
          ],
          "desc": "Aion Labs Aion 系列；支持文本。",
          "description": "Aion Labs Aion 系列；支持文本。",
          "source": "https://openrouter.ai/api/v1/models",
          "sourceUrl": "https://openrouter.ai/aion-labs/aion-rp-llama-3.1-8b",
          "apiUrl": "https://openrouter.ai/aion-labs/aion-rp-llama-3.1-8b/api",
          "playgroundUrl": "https://openrouter.ai/chat?models=aion-labs%2Faion-rp-llama-3.1-8b",
          "inputPrice": 0.7999999999999999,
          "outputPrice": 1.5999999999999999,
          "currency": "USD",
          "unit": "百万 tokens",
          "billing": "按量计费",
          "priceLabel": "OpenRouter 参考价",
          "priceSource": "https://openrouter.ai/api/v1/models",
          "collectedAt": "2026-11-07",
          "bestObservedModelRank": null,
          "contextLength": 32768,
          "rawPricing": {
            "prompt": "0.0000008",
            "completion": "0.0000016"
          },
          "officialPricing": {
            "input": null,
            "output": null,
            "unit": "百万 tokens",
            "currency": "USD",
            "sourceUrl": null,
            "updatedAt": null,
            "status": "unsupported",
            "note": "同型号官方标准价尚未核实；OpenRouter平台参考价单独保留。"
          },
          "officialPlaygroundUrl": null,
          "officialPlaygroundScope": null,
          "officialPlaygroundNote": null,
          "officialApiUrl": null
        }
      ]
    }
  ]
};