window.HIAI_RECOGNITION = {
  schemaVersion: 1,
  title: '全球知名模型',
  checkedAt: '2026-11-08T00:00:00+08:00',
  nextReviewAt: '2026-12-01T09:00:00+08:00',
  schedule: '每月 1 日 09:00（北京时间）',
  method: 'HiAi 知名度参考顺序：优先参考公开 AI 产品使用热度，再补充主流开发者生态中的系列；不是统一官方知名度榜单，也不是模型能力排名。',
  source: {
    title: 'DataReportal · Digital 2027 Global Overview（Similarweb 数据）',
    url: 'https://datareportal.com/reports/digital-2027-global-overview-report',
    dataPeriod: '2026-08',
    scope: '网页端月活用户，中国以外地区；不含移动 App、API 调用或模型能力',
    leaders: ['gpt', 'gemini', 'claude', 'deepseek', 'grok'],
    mapping: 'ChatGPT 的产品认知映射到 GPT 系列；Gemini、Claude、DeepSeek、Grok 按同名产品映射。产品使用热度不代表具体型号的知名度或能力。'
  },
  editorialNote: '其余系列按 HiAi 主流生态参考顺序补充展示，暂无同口径可比知名度数据，不附虚构名次或分数。',
  order: ['gpt','gemini','claude','deepseek','grok','qwen','llama','mistral','sonar','kimi','glm','minimax','gemma','nova','command','hy','muse','gpt-oss','mimo','longcat','reka','lfm','voxtral','lyria','inkling','ripple','particle','flint','skyfall','aion'],
  labels: {gpt:'ChatGPT · OpenAI',gemini:'Google',claude:'Anthropic',sonar:'Perplexity'}
};
