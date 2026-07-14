import { portfolio } from '../data/portfolio'
import { ScoreBars } from './UI'

export function WorkbenchMockup({ compact = false }: { compact?: boolean }) {
  return <div className={`workbench ${compact ? 'compact' : ''}`} role="img" aria-label="AI PPT 产品工作台界面示意图">
    <div className="wb-top"><div className="traffic"><i /><i /><i /></div><div className="prompt"><span>AI</span> 让第 6 页的结论更清晰、更适合答辩场景 <b>↵</b></div></div>
    <div className="wb-body">
      <div className="slides">{[1,2,3,4].map(n => <div className={n === 2 ? 'active' : ''} key={n}><small>0{n}</small><i /><i /></div>)}</div>
      <div className="canvas"><div className="canvas-label">MARKET INSIGHT / 06</div><h3>AI PRESENTATION<br />WORKFLOW</h3><p>从生成效率，走向更可控的共同创作</p><div className="mini-chart"><i /><i /><i /></div><div className="canvas-foot"><span>01 / CONTEXT</span><span>2026</span></div></div>
      <div className="evaluation"><div className="panel-title"><span>QUALITY CHECK</span><b>82</b></div><ScoreBars scores={portfolio.wps.scores.slice(0, 3)} /><div className="suggestion"><span>OPTIMIZE</span><p>本页信息密度偏高，建议拆分核心结论。</p><button tabIndex={-1}>查看建议 →</button></div></div>
    </div>
  </div>
}

export function VisualDirectionWorkbench() {
  const directions = [
    ['A', '理性学术', 'ACADEMIC'],
    ['B', '编辑叙事', 'EDITORIAL'],
    ['C', '实验视觉', 'EXPERIMENTAL'],
  ]
  return <div className="visual-direction-workbench" role="img" aria-label="AI 根据课堂汇报内容生成三种视觉方向的工作台示意图">
    <header><div className="traffic"><i /><i /><i /></div><div className="visual-prompt"><span>AI</span> 分析这份设计史课堂汇报，给出匹配内容的视觉方向 <b>↵</b></div></header>
    <div className="vd-body">
      <aside><small>WORD / SOURCE</small><h3>现代设计史<br />课堂汇报</h3><p>课程类型</p><strong>案例分析</strong><p>内容构成</p><strong>图片 65% · 文字 35%</strong><div className="source-lines"><i /><i /><i /><i /></div></aside>
      <main><div className="vd-heading"><span>VISUAL DIRECTIONS / 视觉方向</span><b>03</b></div><div className="direction-options">{directions.map(([id,title,en],index)=><div className={index===1?'selected':''} key={id}><span>{id}</span><small>{en}</small><strong>{title}</strong><div className={`mini-layout layout-${id.toLowerCase()}`}><i /><i /><i /></div>{index===1&&<em>RECOMMENDED</em>}</div>)}</div><div className="vd-rules"><span>提取规则</span><b>暖白背景</b><b>编辑式网格</b><b>图片优先</b><b>观点与证据同屏</b></div></main>
    </div>
  </div>
}

export function PracticeWorkflowMockup() {
  return <div className="practice-workflow-mock" role="img" aria-label="从 Word 文字稿、AI 生成初稿到人工视觉优化的课堂汇报流程示意图">
    <header><div className="traffic"><i /><i /><i /></div><span>CLASSROOM PRESENTATION / PERSONAL PRACTICE</span><b>WPS AI PPT</b></header>
    <div className="practice-stage stage-word"><small>01 / WORD SCRIPT</small><strong>完整文字稿</strong><div className="word-lines"><i /><i /><i /><i /><i /></div><span>内容与观点已整理</span></div>
    <i className="practice-arrow">→</i>
    <div className="practice-stage stage-ai"><small>02 / AI DRAFT</small><strong>快速生成初稿</strong><div className="draft-layout"><i /><i /><i /></div><span>结构完整 · 模板统一</span></div>
    <i className="practice-arrow">→</i>
    <div className="practice-stage stage-mine"><small>03 / HUMAN JUDGMENT</small><strong>视觉共创</strong><div className="mine-layout"><i /><i /><i /></div><span>提炼 · 换图 · 重组 · 校准</span></div>
    <footer><span>FAST GENERATION</span><i /><b>VISUAL CO-CREATION</b></footer>
  </div>
}

export function CompetitiveLandscapeMockup() {
  const stats = portfolio.competitiveAnalysis.heroStats
  const times = portfolio.competitiveAnalysis.efficiency.map(([name, draft, usable]) => [name, draft.replace(' 分钟', ''), usable.replace(' 分钟', '')])
  return <div className="competitive-mock benchmark-mock" role="img" aria-label="六款 AI PPT 产品、三组任务、八项指标与五十四次测试的竞品研究数据概览">
    <header><span>INDEPENDENT PRODUCT RESEARCH</span><b>AI PPT PRODUCT BENCHMARK</b><i>2026</i></header>
    <div className="benchmark-mock-stats">{stats.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div>
    <div className="benchmark-mock-chart">
      <div className="benchmark-chart-heading"><span>TIME TO USABLE / MIN</span><b>首稿与完成时间</b></div>
      {times.map(([name, draft, usable]) => <div className={name === 'WPS' ? 'active' : ''} key={name}><strong>{name}</strong><span><i style={{ width: `${Number(draft) * 6}%` }} />{draft}</span><span><i style={{ width: `${Number(usable) * 3.2}%` }} />{usable}</span></div>)}
      <footer><span><i />生成第一版</span><span><i />调整到可用</span></footer>
    </div>
  </div>
}

export function ProjectVisual({ type }: { type: 'coral' | 'blue' | 'warm' | 'design' }) {
  if (type === 'blue') {
    const stats = portfolio.competitiveAnalysis.heroStats
    const times = portfolio.competitiveAnalysis.efficiency.map(([name, , usable]) => [name.toUpperCase(), usable.replace(' 分钟', '')])
    return <div className="project-visual competition-mini benchmark-mini" role="img" aria-label="WPS AI PPT 竞品分析数据概览"><div className="visual-top"><span>PRODUCT BENCHMARK</span><b>{stats[3][0]}</b></div><div className="benchmark-mini-stats">{stats.map(([value,label])=><div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div><div className="benchmark-mini-chart">{times.map(([name,time])=><div className={name==='WPS'?'active':''} key={name}><span>{name}</span><i><b style={{width:`${Number(time) * 3.2}%`}} /></i><small>{time}m</small></div>)}</div><footer>调整到可用 / TIME TO USABLE</footer></div>
  }
  if (type === 'warm') {
    const works = portfolio.personalPpt.works
    const order = [4, 0, 5, 2, 1, 3]
    return <div className="project-visual ppt-stack-mini real-ppt-stack-mini" role="img" aria-label="六套个人 PPT 作品封面拼贴预览"><span className="ppt-stack-label">PRESENTATION WORKS / 01—06</span>{order.map((workIndex, index) => <img className={`real-stack-slide rss-${index + 1}`} src={works[workIndex].image} alt="" aria-hidden="true" loading="lazy" key={works[workIndex].no} />)}<b>6 PROJECTS · 118 PAGES</b></div>
  }
  if (type === 'design') return <div className="project-visual design-mosaic-mini" role="img" aria-label="三个个人设计作品的组合预览"><span>DESIGN WORKS / 01—03</span><div className="design-mini-poster"><b>视觉<br />设计</b><i /></div><div className="design-mini-illustration"><i /><b>知识插画</b></div><div className="design-mini-editorial"><small>03</small><b>出版<br />叙事</b></div></div>
  return <div className="project-visual practice-card-mini" role="img" aria-label="从 Word 文字稿到 AI 初稿再到个人视觉表达的项目流程示意"><div><small>01 / WORD</small><strong>文字稿</strong><i /><i /><i /></div><span>→</span><div><small>02 / AI DRAFT</small><strong>生成初稿</strong><div className="mini-draft"><i /><i /></div></div><span>→</span><div className="made-mine"><small>03 / MADE MINE</small><strong>视觉共创</strong><div className="mini-final"><i /><i /></div></div><footer>FAST GENERATION <b>→</b> VISUAL CO-CREATION</footer></div>
}

export function NeedInputMock() {
  const fields = [['这份 PPT 将用于什么场景？', '课程汇报', '工作汇报', '项目提案', '答辩'], ['主要受众是谁？', '老师', '客户', '领导', '同事'], ['预计汇报多长时间？', '5 分钟', '10 分钟', '20 分钟'], ['希望更强调什么？', '逻辑清晰', '数据专业', '视觉吸引', '情绪感染']]
  return <div className="interface-mock"><header><span>01 / REQUIREMENT</span><b>告诉 AI 这次汇报要解决什么</b></header>{fields.map(([q,...opts], i)=><div className="mock-field" key={q}><label>{q}</label><div>{opts.map((o,j)=><span className={j===i%opts.length?'selected':''} key={o}>{o}</span>)}</div></div>)}<button>继续：确认需求 <span>→</span></button></div>
}

export function OutlineMock() {
  return <div className="interface-mock outline-mock"><header><span>02 / OUTLINE</span><b>智能大纲</b><small>12 页 · 预计 10 分钟</small></header>{['研究背景','问题定义','核心洞察','方案设计','评测与反思'].map((x,i)=><div className="outline-row" key={x}><i>⠿</i><span>0{i+1}</span><strong>{x}</strong>{i===2&&<em>重点</em>}<button aria-label={`编辑${x}`}>编辑</button></div>)}<div className="outline-actions"><button>＋ 添加章节</button><button className="primary">生成页面 →</button></div></div>
}

export function PlanningMock() {
  const types=['封面页','问题提出页','核心数据页','流程说明页','对比分析页','结论页']
  return <div className="interface-mock planning-mock"><header><span>03 / PAGE PLANNING</span><b>页面规划</b></header><div className="page-types">{types.map((x,i)=><div className={i===2?'chosen':''} key={x}><i><b>{i+1}</b><span /></i><strong>{x}</strong></div>)}</div><div className="ai-explain"><span>AI EXPLAINS</span><p>当前内容包含三个并列数据，推荐使用横向对比结构。</p></div></div>
}

export function GenerationMock() {
  const steps=['理解用户材料','生成内容结构','匹配页面类型','检查数据一致性','生成视觉方案','执行质量评测']
  return <div className="interface-mock generation-mock"><header><span>04 / GENERATING</span><b>正在共同完成演示文稿</b></header><div className="generation-orb" /><div className="generation-list">{steps.map((x,i)=><div className={i<4?'done':i===4?'active':''} key={x}><span>{i<4?'✓':`0${i+1}`}</span><strong>{x}</strong><i /></div>)}</div></div>
}

export function ResultMock() {
  return <div className="interface-mock result-mock"><header><span>05 / QUALITY REPORT</span><b>结果评测</b></header><ScoreBars scores={portfolio.wps.scores} /><div className="result-notes">{portfolio.wps.suggestions.map((x,i)=><div key={x}><span>PAGE {String([6,9,12][i]).padStart(2,'0')}</span><p>{x}</p><button>查看页面 →</button></div>)}</div></div>
}

type PptCoverProps = { index?: number; title: string; englishTitle: string; tone: string; image?: string }

export function PptShowcaseHero({ works }: { works: PptCoverProps[] }) {
  const order = [4, 0, 5, 2, 1, 3]
  return <div className="ppt-showcase-hero real-ppt-showcase-hero" role="img" aria-label="六套个人 PPT 作品封面拼贴">
    <span className="real-ppt-hero-label">PRESENTATION WORKS / 01—06</span>
    {order.map((workIndex, index) => <div className={`hero-slide real-hero-slide rhs-${index + 1}`} key={works[workIndex].title}><img src={works[workIndex].image} alt="" aria-hidden="true" loading={index === 0 ? 'eager' : 'lazy'} /></div>)}
    <span className="hero-slide-count"><b>118</b> PAGES / 6 WORKS</span>
  </div>
}

type DesignWorkProps = { index?: number; title: string; englishTitle: string; tone: string; format: string; image?: string }

export function DesignWorkPlaceholder({ index = 0, title, englishTitle, tone, format, image }: DesignWorkProps) {
  if (image) return <img className={`design-work-image format-${format}`} src={image} alt={`${title}项目展示图`} loading="lazy" />
  return <div className={`design-work-placeholder tone-${tone} format-${format}`} role="img" aria-label={`${title}项目图片占位，待替换真实作品`}>
    <span className="design-cover-no">DESIGN / {String(index + 1).padStart(2, '0')}</span>
    <div className="design-cover-shape"><i /><i /></div>
    <div className="design-cover-copy"><small>{englishTitle}</small><strong>{title}</strong></div>
    <span className="design-cover-meta">MIA PORTFOLIO · 2026</span>
  </div>
}

export function DesignShowcaseHero({ works }: { works: DesignWorkProps[] }) {
  return <div className="design-showcase-hero" aria-label="三个个人设计作品预览">
    {works.map((work, index) => <div className={`design-hero-item dhi-${index + 1}`} key={work.title}><DesignWorkPlaceholder {...work} index={index} /></div>)}
    <span className="design-hero-count"><b>03</b> SELECTED WORKS</span>
  </div>
}
