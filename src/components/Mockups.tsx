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

export function HarnessDashboard() {
  return <div className="dashboard-mock" role="img" aria-label="AI PPT 质量评测仪表盘示意图">
    <header><span>HARNESS / SAMPLE 024</span><b>QUALITY REPORT</b><i>EXPORT ↗</i></header>
    <div className="dash-grid"><div className="total-score"><small>OVERALL SCORE</small><strong>78</strong><span>/ 100</span><p>基本可用，结构与图文匹配需要优化</p></div><div className="dash-bars"><ScoreBars scores={portfolio.harness.scores.slice(0, 4)} light /></div></div>
    <div className="error-row"><div><small>PAGE ISSUES</small><b>12</b></div><div><small>HIGH FREQUENCY</small><b>E05</b><span>信息过载</span></div><div><small>RISK</small><b>03</b><span>待人工复核</span></div></div>
  </div>
}

export function ProjectVisual({ type }: { type: 'coral' | 'blue' | 'warm' | 'design' }) {
  if (type === 'blue') return <div className="project-visual dashboard-mini"><div className="visual-top"><span>AI EVALUATION</span><b>78.4</b></div><div className="mini-bars">{[78,64,86,71,91].map((n,i)=><i key={i} style={{height:`${n}%`}} />)}</div><div className="error-tags"><span>E02 LOGIC</span><span>E05 OVERLOAD</span><span>E06 MATCHING</span></div></div>
  if (type === 'warm') return <div className="project-visual ppt-stack-mini" role="img" aria-label="六个个人 PPT 作品的组合预览"><span className="ppt-stack-label">PRESENTATION WORKS / 01—06</span>{['AI 产品','设计研究','品牌策略','数据洞察'].map((title,i)=><div className={`stack-slide s${i+1}`} key={title}><small>0{i+1}</small><strong>{title}</strong><i /></div>)}<b>6 PROJECTS</b></div>
  if (type === 'design') return <div className="project-visual design-mosaic-mini" role="img" aria-label="三个个人设计作品的组合预览"><span>DESIGN WORKS / 01—03</span><div className="design-mini-poster"><b>视觉<br />设计</b><i /></div><div className="design-mini-illustration"><i /><b>知识插画</b></div><div className="design-mini-editorial"><small>03</small><b>出版<br />叙事</b></div></div>
  return <div className="project-visual visual-language-mini" role="img" aria-label="AI 根据课堂汇报内容提出三种视觉方向的界面示意"><div className="vl-source"><span>WORD / INPUT</span><i /><i /><i /><b>案例分析型汇报</b></div><div className="vl-directions"><small>VISUAL DIRECTIONS / 03</small>{['理性学术','编辑叙事','实验视觉'].map((title,index)=><div className={index===1?'active':''} key={title}><span>{String.fromCharCode(65+index)}</span><b>{title}</b><i /></div>)}</div><div className="vl-rule"><span>SELECTED</span><strong>编辑式叙事</strong><small>图片优先 · 对比网格<br />观点与证据同屏</small></div></div>
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

export function PptCoverPlaceholder({ index = 0, title, englishTitle, tone, image }: PptCoverProps) {
  if (image) return <img className="ppt-cover-image" src={image} alt={`${title} PPT 作品封面`} loading="lazy" />
  return <div className={`ppt-cover-placeholder tone-${tone}`} role="img" aria-label={`${title} PPT 封面占位，待替换真实作品图片`}>
    <span className="ppt-cover-no">PPT / {String(index + 1).padStart(2, '0')}</span>
    <div className="ppt-cover-lines"><i /><i /><i /></div>
    <div className="ppt-cover-copy"><small>{englishTitle}</small><strong>{title}</strong></div>
    <span className="ppt-cover-year">MIA · 2026</span>
  </div>
}

export function PptShowcaseHero({ works }: { works: PptCoverProps[] }) {
  return <div className="ppt-showcase-hero" aria-label="个人 PPT 作品展示预览">
    {works.slice(0, 4).map((work, index) => <div className={`hero-slide hs${index + 1}`} key={work.title}><PptCoverPlaceholder {...work} index={index} /></div>)}
    <span className="hero-slide-count"><b>06</b> SELECTED WORKS</span>
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
