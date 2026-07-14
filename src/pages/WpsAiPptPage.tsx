import { CaseHero, CaseSection, MetaGrid, NextProject, PlaceholderBadge } from '../components/UI'
import { PracticeWorkflowMockup, VisualDirectionWorkbench } from '../components/Mockups'
import { portfolio } from '../data/portfolio'

const w = portfolio.wps

function FlowRail({ items, compact = false }: { items: string[]; compact?: boolean }) {
  return <div className={`practice-flow ${compact ? 'compact' : ''}`}>{items.map((item,index)=><div key={item}><span>{String(index+1).padStart(2,'0')}</span><strong>{item}</strong>{index < items.length-1 && <i>↓</i>}</div>)}</div>
}

function ComparisonVisual({ kind }: { kind: number }) {
  return <div className={`comparison-visual comparison-${kind}`} aria-hidden="true">
    <div className="compare-before"><span>AI DRAFT</span><i /><i /><i /><i /></div>
    <b>→</b>
    <div className="compare-after"><span>HUMAN EDIT</span><strong>{['核心观点','真实案例','关系结构','视觉规则'][kind]}</strong><i /><i /><i /></div>
  </div>
}

export function WpsAiPptPage() {
  return <div className="page-fade case-page wps-page practice-case-page">
    <CaseHero title={w.title} subtitle={w.subtitle} claim={w.claim} summary={w.summary} tags={w.tags} tone="coral"><PracticeWorkflowMockup /></CaseHero>
    <section className="case-meta-wrap"><div className="container"><MetaGrid items={w.meta} /></div></section>

    <CaseSection id="starting-point" no="02" label="STARTING POINT / 项目出发点" title={<>AI 可以快速生成页面，<br />但表达仍然需要被设计。</>} intro="项目开始时，我把 AI PPT 的核心价值理解为效率：读取 Word 文字稿、提取大纲、拆分内容，并生成结构完整、视觉统一的演示文稿。但在实际使用中，真正困难的不是让文字出现在页面上，而是完成从连续文本到视觉表达的转译。">
      <div className="practice-core-statement"><small>CORE VIEWPOINT / 项目核心观点</small><h3>AI PPT 的价值，不只是把文字快速放进页面，<br />而是帮助用户把已经形成的思考，<br /><em>转化为清晰、合适并具有个人判断的视觉表达。</em></h3><p>AI SHOULD NOT MAKE EVERY DECISION.<br />IT SHOULD HELP ME TURN MY THINKING INTO VISUAL EXPRESSION.</p></div>
      <div className="starting-grid practice-starting">{w.startingPoints.map(([no,title,text])=><article key={no}><span>{no}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      <div className="five-step-path"><span>内容理解</span><i>→</i><span>表达提炼</span><i>→</i><span>风格建立</span><i>→</i><span>页面生成</span><i>→</i><span>局部共创</span></div>
    </CaseSection>

    <CaseSection id="real-task" no="03" label="A REAL CLASSROOM PRESENTATION / 我的真实汇报任务" title="这不是虚构命题，而是一次真实的课堂制作过程" intro={w.realTask.description}>
      <div className="real-task-board"><div><small>WHAT I EXPECTED / 最初期待</small>{w.realTask.expectations.map((item,index)=><article key={item}><span>0{index+1}</span><p>{item}</p></article>)}</div><blockquote>{w.realTask.conclusion}</blockquote></div>
    </CaseSection>

    <CaseSection id="real-workflow" no="04" label="MY REAL WORKFLOW / 我的真实制作流程" title="从完成文字稿，到反复修改演示页面" intro="原始流程保留了 AI 介入前后的全部步骤，也让我看见：生成第一版只是中点，而不是终点。">
      <FlowRail items={w.realWorkflow} />
      <blockquote className="workflow-conclusion">AI 缩短了从 Word 文字稿到第一版 PPT 的时间，却没有完全减少将第一版变成最终版本的时间。</blockquote>
    </CaseSection>

    <CaseSection id="ai-did-well" no="05" label="WHAT AI DID WELL / AI 真正帮助了我什么" title="更快获得一个可以开始判断的版本" intro="AI 最有价值的地方，不是一次性完成最终设计，而是把最初的结构与基础操作提前完成，让我更快进入判断、比较和修改。">
      <div className="ai-strength-grid">{w.aiStrengths.map(([title,text],index)=><article key={title}><span>0{index+1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
    </CaseSection>

    <CaseSection id="generated-problems" no="06" label="GENERATED, BUT NOT READY / AI 初稿的问题" title="已经生成，不等于可以直接表达" intro="AI 初稿解决了“有没有”，却没有自动解决“重点是什么、图片为什么出现、页面如何被观看”。这些问题构成了我后续人工优化的起点。">
      <div className="generated-problem-list">{w.generatedProblems.map(([title,text,summary],index)=><article key={title}><span>{String(index+1).padStart(2,'0')}</span><div><h3>{title}</h3><p>{text}</p></div><strong>{summary}</strong></article>)}</div>
    </CaseSection>

    <CaseSection id="made-it-mine" no="07" label="HOW I MADE IT MINE / 我如何修改生成结果" title="不是只做美化，而是重新完成表达判断" intro="我把修改过程拆成六个连续判断：先决定说什么，再决定如何组织、用什么图像和版式表达，最后回到真实讲述时间检查页面。">
      <div className="manual-step-list">{w.manualSteps.map(item=><article key={item.no}><div className="manual-step-no"><span>{item.no}</span><small>JUDGMENT</small></div><div><h3>{item.title}</h3><p>{item.text}</p></div><blockquote>{item.principle}</blockquote></article>)}</div>
    </CaseSection>

    <CaseSection id="comparison" no="08" label="BEFORE & AFTER / 修改前后对比" title="用前后差异展示我做了什么判断" intro="以下先用统一结构呈现四类修改逻辑。获得真实页面截图后，可直接替换每组示意图；问题、修改与原因的叙事位置保持不变。">
      <PlaceholderBadge>PLACEHOLDER VISUALS · 待替换真实前后页面</PlaceholderBadge>
      <div className="comparison-list">{w.comparisons.map((item,index)=><article key={item.no}><div className="comparison-heading"><span>{item.no}</span><h3>{item.title}</h3></div><ComparisonVisual kind={index} /><div className="comparison-copy"><div><small>我发现的问题</small><p>{item.issue}</p></div><div><small>我做的修改</small><p>{item.change}</p></div><div><small>为什么这样修改</small><p>{item.reason}</p></div></div><footer><span>AI 生成版本：{item.before}</span><strong>人工优化版本：{item.after}</strong></footer></article>)}</div>
    </CaseSection>

    <CaseSection id="quality" no="09" label="WHAT MAKES A GOOD PRESENTATION / 我对一份好 PPT 的判断" title="一条经过选择、组织和视觉化的表达路径" intro="这些标准不是抽象理论，而是从我的实际修改过程中归纳出来的检查方式。">
      <div className="quality-criteria">{w.qualityCriteria.map(([title,text],index)=><article key={title}><span>{String(index+1).padStart(2,'0')}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      <p className="quality-summary">一份好的 PPT，不是信息、模板和图片的简单组合，而是一条经过选择、组织和视觉化的表达路径。</p>
    </CaseSection>

    <CaseSection id="style-workflow" no="10" label="AI-ASSISTED STYLE BUILDING / 我如何借助 AI 建立汇报风格" title="让 AI 帮助描述和验证风格，而不是替我决定风格" intro="这部分呈现我实际如何使用 AI：先补充任务信息，再要求它分析内容属性、提出多个有理由的方向，并通过参考图与设计规范逐步校准。">
      <div className="style-workflow-layout"><div className="visual-process">{w.process.map(item=><article key={item.no}><span>{item.no}</span><small>{item.english}</small><h3>{item.title}</h3><p>{item.text}</p></article>)}</div><VisualDirectionWorkbench /></div>
      <div className="direction-showcase">{w.directions.map(direction=><article className={`direction-${direction.id.toLowerCase()}`} key={direction.id}><div className="direction-cover"><span>{direction.id}</span><small>{direction.english}</small><strong>{direction.title}</strong><div>{direction.palette.map(color=><i key={color} style={{background:color}} />)}</div></div><h3>方向 {direction.id} · {direction.title}</h3><p>{direction.reason}</p><dl><div><dt>图文比例</dt><dd>{direction.ratio}</dd></div><div><dt>页面节奏</dt><dd>{direction.rhythm}</dd></div></dl></article>)}</div>
      <div className="spec-system compact-spec">{w.specification.map(([name,title,text],index)=><article key={name}><span>0{index+1}</span><small>{name}</small><h3>{title}</h3><p>{text}</p><div className={`spec-demo demo-${name.toLowerCase()}`}><i /><i /><i /></div></article>)}</div>
    </CaseSection>

    <CaseSection id="rethinking" no="11" label="FROM GENERATION TO CO-CREATION / 我对 AI PPT 的重新思考" title="从快速生成工具，走向可理解、可控制的共创工具" intro="通过这次实践，我把人工修改中反复出现的困难转化为五个产品机会。这里表达的是概念方向，不暗示 WPS 已经上线这些功能。" dark>
      <div className="opportunity-grid">{w.productOpportunities.map(([title,text],index)=><article key={title}><span>0{index+1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
    </CaseSection>

    <CaseSection id="features" no="12" label="KEY FEATURE CONCEPTS / 关键功能概念" title="把修改中的关键判断，转化为五个产品能力" intro="功能概念围绕内容理解、生成前确认、视觉方向、局部修改与解释反馈展开，减少整页重生成造成的失控。">
      <div className="feature-concepts">{w.keyFeatures.map(([no,title,english,text])=><article key={no}><div className="feature-ui" aria-hidden="true"><span>{english}</span><i /><i /><i /><b className="feature-button">确认并继续 →</b></div><div className="feature-copy"><span>{no}</span><h3>{title}</h3><p>{text}</p></div></article>)}</div>
    </CaseSection>

    <CaseSection id="optimized-flow" no="13" label="OPTIMIZED CO-CREATION FLOW / 优化后的完整流程" title="不追求一次生成完美，而是降低每次判断和修改的成本" intro="优化后的路径把确认点放在生成前与修改中：先确认内容和视觉规则，再生成可编辑初稿，并允许锁定满意部分。">
      <FlowRail items={w.optimizedFlow} compact />
      <div className="co-create-board"><div className="locked-system"><small>LOCKED / 已锁定</small><strong>满意的文字 · 图片 · 配色 · 版式</strong><div><i /><i /><i /><i /></div></div><div className="co-create-list">{w.coCreate.map(([keep,change],index)=><article key={keep+change}><span>0{index+1}</span><p><b>{keep}</b><i>→</i>{change}</p></article>)}</div></div>
    </CaseSection>

    <CaseSection id="reflection" no="14" label="REFLECTION / 项目反思" title="AI 不替代判断，而是帮助表达更清楚">
      <div className="reflection-text"><p>{w.reflection}</p></div>
      <div className="outcome-list">{w.outcomes.map(([title,text],index)=><article key={title}><span>0{index+1}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
      <div className="final-statement practice-final"><small>FINAL STATEMENT / 最终观点</small><h3>AI SHOULD NOT<br />REPLACE MY JUDGMENT.<br /><em>IT SHOULD HELP ME<br />EXPRESS MY THINKING<br />MORE CLEARLY.</em></h3><p>AI 不应该替代我的判断，<br />而应该帮助我更清楚地表达自己的思考。</p></div>
    </CaseSection>
    <NextProject label="AI PPT 质量评测系统" to="/work/ppt-quality-harness" />
  </div>
}
