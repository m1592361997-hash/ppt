// Central content source. Search TODO / PLACEHOLDER before publishing.
export const portfolio = {
  profile: {
    name: 'MIA / 苗玉婷',
    englishName: 'MIA',
    title: 'AI PRODUCT & PRESENTATION DESIGN',
    chineseTitle: 'AI 产品与演示设计作品集',
    statement: '让 AI 更懂表达，也让 PPT 创作更简单。',
    intro: '我是一名具有视觉设计背景的设计硕士研究生，关注 AI 办公、演示文稿生成与智能创作体验。目前通过用户研究、竞品分析、交互设计与效果评测，探索更高效、更可控的 AI PPT 产品方案。',
    about: [
      '我目前就读于中国地质大学（武汉）设计专业硕士，具有环境设计与视觉设计背景。过去参与过出版插画、品牌视觉和内容设计项目，这些经历让我持续关注一个问题：如何把复杂的信息转化为更容易理解和使用的表达。',
      '随着 AI 工具进入办公与创作场景，我开始将关注方向延伸到 AI 产品、演示文稿生成和模型效果评测，希望通过设计连接用户需求、AI 能力与真实交付结果。',
    ],
  },
  contact: {
    // TODO: Replace with real email before publishing.
    email: 'your-email@example.com',
    // TODO: Replace /public/resume.pdf with the real resume PDF.
    resumeUrl: '/resume.pdf',
  },
  navigation: [
    { label: '作品 WORK', to: '/#work' },
    { label: '关于 ABOUT', to: '/about' },
    { label: '简历 RESUME', to: '/resume.pdf', external: true },
    { label: '联系 CONTACT', to: '/#contact' },
  ],
  hero: {
    eyebrow: ['PORTFOLIO 2026', 'AI PRODUCT / PRESENTATION / VISUAL DESIGN'],
    title: ['让 AI 更懂表达，', '让演示创作', '更简单。'],
    skills: ['USER RESEARCH', 'PRODUCT THINKING', 'AI EVALUATION', 'INTERACTION DESIGN', 'PRESENTATION DESIGN'],
  },
  capabilities: [
    { no: '01', title: '用户研究', text: '访谈、问卷、用户行为分析与需求归纳，从真实使用场景中识别产品机会。' },
    { no: '02', title: '产品设计', text: '用户流程、信息架构、功能策略和交互原型，将复杂问题转化为清晰方案。' },
    { no: '03', title: 'AI 评测', text: '建立评测维度、设计测试样本、比较输出结果并定位生成问题。' },
    { no: '04', title: '视觉表达', text: 'PPT 版式、信息可视化、品牌视觉和复杂内容的图像转译。' },
  ],
  skillGroups: [
    { title: '用户研究 / RESEARCH', items: ['用户访谈', '问卷设计', '竞品分析', '用户旅程', '需求归纳'] },
    { title: '产品设计 / PRODUCT', items: ['问题定义', '产品策略', '功能架构', '用户流程', '交互原型'] },
    { title: 'AI 评测 / AI', items: ['Prompt 设计', '模型体验', '输出评测', '错误归因', 'AI 辅助创作'] },
    { title: '视觉表达 / VISUAL', items: ['PPT 设计', '信息可视化', '品牌视觉', '出版插画', '内容转译'] },
  ],
  process: [
    { no: '01', title: '发现 / DISCOVER', text: '理解用户、任务和真实场景' },
    { no: '02', title: '定义 / DEFINE', text: '识别关键问题与产品机会' },
    { no: '03', title: '设计 / DESIGN', text: '设计流程、界面和 AI 能力' },
    { no: '04', title: '评测 / EVALUATE', text: '评测输出并定位问题' },
    { no: '05', title: '迭代 / ITERATE', text: '根据反馈持续优化' },
  ],
  projects: [
    { no: '01', slug: 'wps-ai-ppt', title: 'WPS AI PPT 视觉语言探索', subtitle: 'FROM CONTENT TO VISUAL LANGUAGE', description: '从 Word 文字稿到视觉表达，探索如何借助 AI 根据不同课堂汇报场景建立视觉风格，而不是简单套用统一模板。', tags: ['课堂汇报', '视觉策略', 'AI 辅助设计', '局部共创'], type: '独立概念项目 · INDEPENDENT CONCEPT PROJECT', tone: 'coral' },
    { no: '02', slug: 'ppt-quality-harness', title: 'AI PPT 质量评测系统', subtitle: 'PPT QUALITY HARNESS', description: '建立一套可解释的 AI PPT 生成质量评测体系。', tags: ['AI EVALUATION', 'HARNESS DESIGN', 'DATA ANALYSIS', 'ITERATION'], tone: 'blue' },
    { no: '03', slug: 'personal-ppt', title: '个人 PPT 项目展示', subtitle: 'SELECTED PRESENTATION WORKS', description: '通过六个不同主题的 PPT 作品，展示内容梳理、演示逻辑、版式系统与视觉表达能力。', tags: ['PRESENTATION DESIGN', 'CONTENT STRUCTURE', 'VISUAL SYSTEM', 'STORYTELLING'], type: '个人作品合集 · PERSONAL PROJECTS', tone: 'warm' },
    { no: '04', slug: 'personal-design', title: '个人设计作品', subtitle: 'SELECTED DESIGN WORKS', description: '通过品牌视觉、知识插画与出版插画三个项目，补充展示内容转译、系列设计和视觉叙事能力。', tags: ['VISUAL DESIGN', 'ILLUSTRATION', 'CONTENT DESIGN', 'EDITORIAL'], type: '个人设计合集 · DESIGN COLLECTION', tone: 'design' },
  ],
  visualWorks: [
    { letter: 'A', title: '个人 PPT 作品集与版式探索', text: '围绕课程汇报、研究答辩与项目提案等场景，建立清晰的内容结构和连续的演示视觉语言。' },
    { letter: 'B', title: '中小学生安全手册插画', text: '将交通、校园、消防和日常防护知识转化为儿童易于理解的角色、场景和行为对比。' },
    { letter: 'C', title: '《漫画版内务条令》插画', text: '参与政务出版合作，将文字条令转译为漫画场景。因涉及内部资料，仅展示公开或脱敏后的设计过程。' },
  ],
  education: [
    { time: '2025—至今', school: '中国地质大学（武汉）', major: '设计专业硕士' },
    { time: '本科', school: '江西师范大学', major: '环境设计专业' },
  ],
  aboutSkills: [
    { title: '产品', items: ['用户研究', '竞品分析', '功能拆解', '用户流程', '交互原型'] },
    { title: '设计', items: ['Figma', '视觉设计', '信息可视化', 'PPT 设计', '出版插画'] },
    { title: 'AI', items: ['Prompt 设计', '模型体验', '输出评测', 'AI 辅助创作', '错误归因'] },
    { title: '表达', items: ['内容拆解', '演示逻辑', '视觉转译', '项目汇报', '跨角色沟通'] },
  ],
  wps: {
    title: 'WPS AI PPT 视觉语言探索',
    subtitle: ['从文字稿到合适的视觉语言', 'FROM CONTENT TO VISUAL LANGUAGE'],
    claim: 'AI 不应该替我选择风格，而应该帮助我建立合适的视觉语言。',
    summary: '基于我使用 WPS AI PPT 完成课堂汇报的真实过程，本项目探索如何借助 AI 分析汇报类型、内容结构与视觉参考，快速建立适用于学术研究、案例分析、设计提案等不同场景的视觉风格，并通过内容提炼、风格校准和局部共创，将 AI 生成初稿进一步转化为具有清晰逻辑与个人判断的演示文稿。',
    tags: ['独立概念项目 · INDEPENDENT CONCEPT PROJECT', '课堂汇报', '视觉策略', 'AI 辅助设计', '局部共创'],
    meta: [['项目类型', '独立概念项目'], ['使用场景', '大学生课堂汇报'], ['我的角色', '内容分析、视觉策略、交互构想、PPT 设计'], ['使用工具', 'WPS、Figma、AI 模型'], ['项目范围', 'Word 文字稿、视觉方向、设计规范、局部共创']],
    startingPoints: [
      ['01', '内容完整，不等于表达准确', 'AI 可以快速拆分 Word 文字稿，却未必能判断哪些观点应该被看见、哪些解释更适合留给现场讲述。'],
      ['02', '风格统一，不等于主题匹配', '一套整齐的模板可能保持一致，却不一定适合学术研究、案例分析、设计提案或人文艺术的表达要求。'],
      ['03', '页面美观，不等于观看有效', '图片可能只是装饰，信息也可能没有明确顺序；真正的设计需要重新组织内容被观看和理解的方式。'],
    ],
    taskQuestions: ['汇报的类型是什么？', '讲给谁听？', '需要讲多长时间？', '希望观众最终理解什么？', '内容以文字、图片、数据还是设计过程为主？'],
    scenarios: [
      { no: '01', title: '学术研究型汇报', english: 'ACADEMIC RESEARCH', focus: '理性、可信与信息效率', rules: ['低饱和或中性色彩', '明确的网格与对齐关系', '使用结论式标题', '图表和数据优先', '减少无意义装饰', '保持稳定、克制的页面节奏'], tone: 'academic' },
      { no: '02', title: '案例分析型汇报', english: 'CASE ANALYSIS', focus: '证据、对照与观点推导', rules: ['提高案例图片占比', '使用局部放大、标注和对比', '观点与对应案例同屏出现', '统一图片比例和注释方式', '通过前后或横向对照建立关系'], tone: 'case' },
      { no: '03', title: '设计提案型汇报', english: 'DESIGN PROPOSAL', focus: '概念、过程与方案形成', rules: ['呈现问题、概念、推演和结果', '使用草图、流程图与情绪板', '章节形成清楚的叙事推进', '通过大图和少量文字突出成果', '建立具有识别度的视觉语言'], tone: 'proposal' },
      { no: '04', title: '人文艺术型汇报', english: 'ARTS & HUMANITIES', focus: '图像叙事、文化语境与情绪', rules: ['让图片承担主要叙事作用', '适当扩大留白', '根据主题建立色彩氛围', '减少机械化的信息卡片', '用页面节奏营造观看体验'], tone: 'arts' },
    ],
    process: [
      { no: '01', title: '理解汇报任务', english: 'UNDERSTAND', text: '先向 AI 说明课程主题、听众、汇报时长和表达目标，避免它只根据标题判断内容。' },
      { no: '02', title: '提取内容特征', english: 'ANALYZE', text: '识别 Word 稿中理论、案例图片、数据、过程和方案结果的比例，判断适合的页面结构。' },
      { no: '03', title: '生成多个视觉方向', english: 'DIVERGE', text: '先提出 2—3 组方向，并解释配色、字体层级、图文比例和页面节奏，而不是直接生成整套模板。' },
      { no: '04', title: '使用参考图校准', english: 'CALIBRATE', text: '分析参考中的色彩、网格、图片比例、留白与图形语言，提取规则，不复制某一张页面。' },
      { no: '05', title: '建立设计规范', english: 'SYSTEMIZE', text: '确认颜色、字号、边距、网格、图片裁切、图表和关键页面结构，让整套 PPT 保持一致。' },
      { no: '06', title: '锁定规则，局部共创', english: 'CO-CREATE', text: '保留已确认的字体、颜色和结构，只让 AI 针对图片、长段落或局部版式进行修改。' },
    ],
    directions: [
      { id: 'A', title: '理性学术', english: 'RATIONAL ACADEMIC', reason: '适合理论、数据和研究结论占主导的内容。', palette: ['#F4F3EF', '#25272A', '#8093A5'], ratio: '文字 55 / 图像 45', rhythm: '稳定、连续、克制' },
      { id: 'B', title: '编辑式叙事', english: 'EDITORIAL NARRATIVE', reason: '适合案例图像和观点推导需要并行呈现的内容。', palette: ['#F7F2ED', '#171717', '#E36F61'], ratio: '文字 35 / 图像 65', rhythm: '对比、停顿、推进' },
      { id: 'C', title: '实验视觉', english: 'EXPERIMENTAL VISUAL', reason: '适合强调概念表达、情绪氛围和个人风格的主题。', palette: ['#1B1A20', '#B9A7FF', '#FF7A8A'], ratio: '文字 25 / 图像 75', rhythm: '变化、留白、聚焦' },
    ],
    calibration: ['色彩关系', '字体层级', '网格方式', '图片比例', '留白程度', '版式节奏', '图形语言', '整体气质'],
    specification: [
      ['COLOR', '主色、辅助色、背景色', '控制气质与对比，不让每页重新选择颜色'],
      ['TYPE', '一级、二级标题与正文', '用稳定层级帮助观众快速建立观看顺序'],
      ['GRID', '页面边距、列数与对齐', '让不同内容仍然处于同一套空间规则中'],
      ['IMAGE', '裁切比例、标注与图注', '明确图片承担证据、分析还是情绪表达'],
      ['CHART', '数据色彩与图表样式', '保持数据表达可信、克制且易于比较'],
      ['PAGES', '章节、案例与结论结构', '形成可以复用但不机械重复的页面骨架'],
    ],
    coCreate: [
      ['保留文字', '只更换与论点更匹配的图片'],
      ['保留配色', '重新组织当前页面的版式'],
      ['保留结构', '将长段落转化为流程或图解'],
      ['保留风格', '生成适合案例对比的页面'],
      ['保留观点', '减少文字并提高作品图片权重'],
    ],
    responsibilities: {
      ai: ['读取并归纳 Word 文字稿', '识别内容类型与信息密度', '提出多个视觉方向', '分析参考图中的可复用规则', '执行重复排版和局部变体'],
      designer: ['判断真正需要强调的观点', '选择符合主题的视觉方向', '决定图片的叙事角色', '校准审美、节奏与个人表达', '确认、修改或拒绝 AI 建议'],
    },
    outcomes: [
      ['项目结论', 'AI PPT 的价值，不只是快速生成一套统一页面，而是帮助用户为不同内容找到合适的视觉表达方式。'],
      ['设计判断', '好的 AI 不是替我决定风格，而是帮助我更快地建立、验证并完善自己的视觉判断。'],
      ['下一步', '继续用真实课堂汇报内容验证视觉规则，并将后续成品补充到“个人 PPT 项目展示”中。'],
    ],
    scores: [['内容完整度', 88], ['逻辑清晰度', 76], ['视觉层级', 82], ['图文匹配', 71], ['事实准确性', 94], ['可编辑性', 86]] as [string, number][],
    suggestions: ['第 6 页同时包含五个核心信息，建议拆分为“市场规模”和“用户增长”两页。', '第 9 页标题与图表结论不一致，建议突出同比增长信息。', '第 12 页正文超过 120 字，可能影响现场阅读。'],
  },
  harness: {
    title: 'AI PPT 质量评测系统', subtitle: ['让生成质量可解释、可复用', 'PPT QUALITY HARNESS'], summary: '建立一套可解释、可复用的 AI PPT 生成质量评测框架。',
    tags: ['AI EVALUATION', 'HARNESS DESIGN', 'ERROR TAXONOMY', 'ITERATION'],
    dimensions: ['CONTENT', 'STRUCTURE', 'VISUAL', 'MATCHING', 'ACCURACY', 'EDITABILITY', 'SCENARIO'],
    errors: ['E01 内容缺失', 'E02 逻辑跳跃', 'E03 信息重复', 'E04 标题与正文不一致', 'E05 页面信息过载', 'E06 图文不匹配', 'E07 图表使用错误', 'E08 风格与场景不匹配', 'E09 事实风险', 'E10 修改困难'],
    tasks: ['五分钟课程汇报', '毕业答辩', '产品发布方案', '月度数据汇报', '项目提案', '学术研究汇报'],
    rubric: [['1 分', '明显不可用'], ['2 分', '存在较多问题'], ['3 分', '基本可用'], ['4 分', '质量较好'], ['5 分', '接近理想结果']],
    flow: ['输入任务', '生成 PPT', '规则检查', '模型评测', '人工复核', '问题归因', '优化建议', '产品迭代'],
    scores: [['CONTENT', 84], ['STRUCTURE', 72], ['VISUAL', 81], ['MATCHING', 68], ['ACCURACY', 92], ['EDITABILITY', 77], ['SCENARIO', 74]] as [string, number][],
    optimization: [['CONTENT', '优化材料理解和内容补全'], ['STRUCTURE', '优化大纲和章节规划'], ['VISUAL', '优化页面类型和模板匹配'], ['MATCHING', '优化图片检索和图表生成'], ['EDITABILITY', '优化组件结构和二次编辑路径']],
  },
  personalPpt: {
    title: '个人 PPT 项目展示',
    subtitle: ['六个作品，六种表达方式', 'SELECTED PRESENTATION WORKS'],
    summary: '这里将集中展示六个不同主题与使用场景的 PPT 作品，重点呈现我如何组织内容、建立演示逻辑，并通过版式、字体、色彩和图形系统完成视觉转译。',
    meta: [['项目类型', '个人 PPT 作品合集'], ['作品数量', '6 个项目'], ['我的角色', '内容梳理、演示设计、视觉设计'], ['展示内容', '封面、核心页面与设计说明']],
    principles: [
      ['内容结构', '先明确汇报目的、受众和核心结论，再规划章节与页面节奏。'],
      ['信息层级', '通过标题比例、网格、留白和对比，让重点在短时间内被理解。'],
      ['视觉系统', '根据项目主题建立一致的字体、色彩、图形和页面组件规则。'],
      ['场景适配', '针对课程汇报、答辩、提案等场景调整信息密度与表达方式。'],
    ],
    // TODO: Replace titles, descriptions and image paths with the six real PPT projects.
    works: [
      { no: '01', title: 'AI 产品分析与概念提案', englishTitle: 'AI PRODUCT CONCEPT', category: '产品分析 / 概念提案', description: '以产品问题、用户洞察和方案逻辑为主线，展示从分析到概念设计的完整叙事。', tags: ['产品逻辑', '用户洞察', '方案表达'], image: '', tone: 'coral', status: 'PLACEHOLDER · 待替换真实作品' },
      { no: '02', title: '设计研究课程汇报', englishTitle: 'DESIGN RESEARCH', category: '课程汇报 / 研究表达', description: '将研究背景、方法、发现和结论组织为清晰的学术汇报结构。', tags: ['研究框架', '信息可视化', '学术表达'], image: '', tone: 'blue', status: 'PLACEHOLDER · 待替换真实作品' },
      { no: '03', title: '品牌策略与视觉提案', englishTitle: 'BRAND STRATEGY', category: '品牌提案 / 视觉系统', description: '通过品牌定位、视觉概念和应用示意建立具有说服力的提案节奏。', tags: ['品牌策略', '视觉系统', '提案设计'], image: '', tone: 'orange', status: 'PLACEHOLDER · 待替换真实作品' },
      { no: '04', title: '数据洞察分析报告', englishTitle: 'DATA INSIGHT', category: '数据报告 / 信息设计', description: '把复杂数据转化为可比较、可阅读并能支持结论的图表与页面结构。', tags: ['数据叙事', '图表设计', '结论提炼'], image: '', tone: 'violet', status: 'PLACEHOLDER · 待替换真实作品' },
      { no: '05', title: '空间设计方案汇报', englishTitle: 'SPATIAL DESIGN', category: '设计方案 / 项目汇报', description: '围绕场地问题、设计策略与空间体验组织方案展示，平衡图像和文字信息。', tags: ['空间叙事', '方案逻辑', '图文编排'], image: '', tone: 'green', status: 'PLACEHOLDER · 待替换真实作品' },
      { no: '06', title: '视觉叙事专题设计', englishTitle: 'VISUAL STORYTELLING', category: '专题策划 / 视觉表达', description: '通过连续页面、图形语言和节奏变化，构建更具情绪与记忆点的演示体验。', tags: ['内容策划', '视觉叙事', '版式系统'], image: '', tone: 'pink', status: 'PLACEHOLDER · 待替换真实作品' },
    ],
  },
  personalDesign: {
    title: '个人设计作品',
    subtitle: ['三个项目，三种视觉转译', 'SELECTED DESIGN WORKS'],
    summary: '这一部分收录三个不同类型的视觉设计项目，呈现我如何根据品牌传播、知识普及和出版表达的目标，把内容转化为具有识别度、可理解且能够持续延展的视觉系统。',
    meta: [['项目类型', '个人设计作品合集'], ['作品数量', '3 个项目'], ['能力方向', '视觉设计、插画、内容转译'], ['图片状态', '待替换真实项目图']],
    strengths: [
      ['内容理解', '先理解传播目标、受众和信息重点，再选择适合的视觉语言。'],
      ['系列设计', '通过统一规则保持项目连续性，同时为不同内容建立清楚差异。'],
      ['视觉叙事', '使用构图、角色、场景与节奏，把复杂信息转化为容易理解的画面。'],
    ],
    // TODO: Replace image paths and refine descriptions after the real project images are provided.
    works: [
      { no: '01', title: '品牌与电商视觉设计', englishTitle: 'BRAND & E-COMMERCE VISUAL', category: '品牌视觉 / 平台物料', description: '围绕产品传播完成系列海报及平台应用物料，在统一视觉基调下，通过构图、字体层级与图形关系建立内容区分。', tags: ['品牌视觉', '海报设计', '系列延展'], image: '', tone: 'red', format: 'landscape', status: 'PLACEHOLDER · 待替换真实作品' },
      { no: '02', title: '中小学生安全手册插画', englishTitle: 'SAFETY HANDBOOK ILLUSTRATION', category: '知识插画 / 儿童读物', description: '将交通、校园、消防和日常防护知识转化为儿童容易理解的角色、场景与行为对比。', tags: ['知识转译', '角色设计', '场景插画'], image: '', tone: 'yellow', format: 'portrait', status: 'PLACEHOLDER · 待替换真实作品' },
      { no: '03', title: '《漫画版内务条令》插画', englishTitle: 'EDITORIAL COMIC ILLUSTRATION', category: '出版插画 / 内容设计', description: '参与政务出版合作，将文字条令转译为漫画场景。涉及内部资料的部分仅展示公开或脱敏后的设计过程。', tags: ['出版插画', '漫画叙事', '内容设计'], image: '', tone: 'blue', format: 'landscape', status: 'PLACEHOLDER · 待替换真实作品' },
    ],
  },
}

export type Portfolio = typeof portfolio
