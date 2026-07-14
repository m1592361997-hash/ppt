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
    { no: '01', slug: 'wps-ai-ppt', title: 'WPS AI PPT 共创体验', subtitle: 'FROM GENERATION TO CO-CREATION', description: '从“一键生成”到“可理解、可控制、可修改”的 AI PPT 创作体验。', tags: ['USER RESEARCH', 'COMPETITIVE ANALYSIS', 'AI PRODUCT DESIGN', 'PROTOTYPE'], type: '独立概念项目 · INDEPENDENT CONCEPT PROJECT', tone: 'coral' },
    { no: '02', slug: 'ppt-quality-harness', title: 'AI PPT 质量评测系统', subtitle: 'PPT QUALITY HARNESS', description: '建立一套可解释的 AI PPT 生成质量评测体系。', tags: ['AI EVALUATION', 'HARNESS DESIGN', 'DATA ANALYSIS', 'ITERATION'], tone: 'blue' },
    { no: '03', slug: 'personal-ppt', title: '个人 PPT 项目展示', subtitle: 'SELECTED PRESENTATION WORKS', description: '通过六个不同主题的 PPT 作品，展示内容梳理、演示逻辑、版式系统与视觉表达能力。', tags: ['PRESENTATION DESIGN', 'CONTENT STRUCTURE', 'VISUAL SYSTEM', 'STORYTELLING'], type: '个人作品合集 · PERSONAL PROJECTS', tone: 'warm' },
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
    title: 'WPS AI PPT 概念优化', subtitle: ['从一键生成到人机共同创作', 'FROM GENERATION TO CO-CREATION'], claim: '让生成过程可理解、可控制，让结果真正可用。',
    summary: '围绕 AI 生成 PPT 过程中需求理解不准确、生成过程不可控、修改成本较高等问题，重新思考从需求输入、内容生成、页面规划到结果评测的完整体验。',
    tags: ['INDEPENDENT CONCEPT PROJECT', 'USER RESEARCH', 'AI PRODUCT DESIGN', 'INTERACTION', 'EVALUATION'],
    meta: [['项目类型', '独立概念项目'], ['项目周期', '4—6 周概念周期'], ['我的角色', '用户研究、产品分析、交互设计、视觉设计、效果评测'], ['使用工具', 'Figma、WPS、表格工具、AI 模型'], ['项目范围', '需求输入、大纲生成、页面规划、结果评测、二次编辑']],
    problems: ['AI 没有真正理解我的汇报目的', '生成的内容完整，但重点不清晰', '页面看起来整齐，却不方便继续修改'],
    howMightWe: ['AI 如何更准确地理解用户的汇报需求？', 'AI 如何判断一页 PPT 是否真正有效？', '用户如何在生成过程中保持控制权？'],
    researchData: [
      { value: '8', label: '位用户访谈（示例，待替换）' }, { value: '20', label: '份问卷（示例，待替换）' },
      { value: '3', label: '款产品体验' }, { value: '30', label: '份生成样本（示例，待替换）' },
    ],
    researchGroups: ['经常进行课程汇报的学生', '制作答辩 PPT 的研究生', '制作工作汇报的职场新人', '使用过 AI PPT 工具的用户'],
    researchQuestions: ['你通常在什么情况下制作 PPT？', '制作过程中最耗时的环节是什么？', '你使用过哪些 AI PPT 工具？', '哪些生成结果最让你不满意？', '你希望 AI 重点帮助你完成什么？', '哪些部分你仍然希望自己控制？'],
    insights: ['用户不是完全不知道要什么，而是不知道如何向 AI 清楚描述。', '用户最在意的不是页面数量，而是汇报逻辑是否成立。', '生成后的修改成本，决定用户是否愿意继续使用。', '不同汇报场景，对 PPT 质量的判断标准并不相同。'],
    competitors: ['WPS AI', 'Gamma', 'Canva', 'Beautiful.ai'],
    compareDimensions: ['需求输入', '场景理解', '大纲控制', '页面生成', '局部修改', '结果评测', '可编辑性'],
    journey: ['接收任务', '收集内容', '整理大纲', '寻找模板', '排版页面', '检查逻辑', '反复修改', '完成汇报'],
    pains: ['不知道如何组织内容', '模板选择困难', '内容与版式不匹配', '修改一页会影响整套风格', '缺少可理解的质量判断'],
    opportunities: ['需求澄清', '内容结构建议', '页面类型匹配', '自动质量检查', '局部修改建议'],
    principles: [
      { no: '01', title: '先理解，再生成', intro: 'AI 需要理解', items: ['使用场景', '汇报对象', '汇报目的', '汇报时长', '语言语气', '原始材料'] },
      { no: '02', title: '过程可控', intro: '用户可以确认', items: ['大纲', '页面数量', '内容重点', '视觉方向', '数据和图片', '最终结果'] },
      { no: '03', title: '结果可解释', intro: 'AI 需要告诉用户', items: ['哪里存在问题', '问题为什么出现', '建议如何修改', '修改可能产生什么影响'] },
    ],
    architecture: [
      ['需求理解', '场景', '受众', '目的', '时长', '风格'], ['内容生成', '资料理解', '大纲生成', '内容压缩', '信息补充'],
      ['页面规划', '页面类型', '内容密度', '图文关系', '视觉节奏'], ['PPT 生成', '模板匹配', '图表生成', '配图建议', '动画建议'],
      ['质量评测', '内容', '结构', '视觉', '准确性', '可编辑性'], ['二次修改', '局部改写', '页面重排', '风格切换', '重点强化'],
    ],
    coreFlow: [
      ['上传材料或输入主题', '提供原始内容', '识别材料与主题', '显示读取范围', '可删除或补充材料'],
      ['AI 主动澄清需求', '回答关键问题', '归纳场景与目标', '生成需求摘要', '确认或修改摘要'],
      ['确认大纲和内容重点', '调整章节与重点', '生成结构建议', '解释页面分配', '拖拽、增删章节'],
      ['生成并预览 PPT', '查看生成进度', '规划页面与视觉', '逐步反馈状态', '随时返回修改'],
      ['评测、修改和导出', '判断并处理建议', '定位质量问题', '解释原因和影响', '逐项接受或忽略'],
    ],
    scores: [['内容完整度', 88], ['逻辑清晰度', 76], ['视觉层级', 82], ['图文匹配', 71], ['事实准确性', 94], ['可编辑性', 86]] as [string, number][],
    suggestions: ['第 6 页同时包含五个核心信息，建议拆分为“市场规模”和“用户增长”两页。', '第 9 页标题与图表结论不一致，建议突出同比增长信息。', '第 12 页正文超过 120 字，可能影响现场阅读。'],
    harnessDimensions: [
      ['CONTENT', '内容是否完整、准确、符合主题'], ['STRUCTURE', '整体逻辑是否清晰，页面关系是否合理'], ['VISUAL', '层级、留白、对齐、颜色和字体是否有效'], ['MATCHING', '图像、图表和文字内容是否匹配'], ['EDITABILITY', '用户是否能够继续编辑和调整'], ['SCENARIO', '是否符合具体汇报场景和受众需求'],
    ],
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
}

export type Portfolio = typeof portfolio
