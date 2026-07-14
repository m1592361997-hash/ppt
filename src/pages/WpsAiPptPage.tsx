import { CaseHero, CaseSection, MetaGrid, NextProject, PlaceholderBadge, ScoreBars } from '../components/UI'
import { GenerationMock, NeedInputMock, OutlineMock, PlanningMock, ResultMock, WorkbenchMockup } from '../components/Mockups'
import { portfolio } from '../data/portfolio'

const w = portfolio.wps

export function WpsAiPptPage() {
  return <div className="page-fade case-page wps-page">
    <CaseHero title={w.title} subtitle={w.subtitle} claim={w.claim} summary={w.summary} tags={w.tags} tone="coral"><WorkbenchMockup compact /></CaseHero>
    <section className="case-meta-wrap"><div className="container"><MetaGrid items={w.meta} /></div></section>

    <CaseSection id="background" no="01" label="BACKGROUND" title={<>GENERATED<br />DOES NOT MEAN USABLE.</>} intro="AI 已经能够快速生成一份完整 PPT，但“生成出来”并不等于“真正可用”。用户仍然需要反复修改内容结构、页面重点和视觉风格，才能得到适合具体汇报场景的最终结果。">
      <div className="problem-grid">{w.problems.map((x,i)=><article key={x}><span>0{i+1}</span><p>{x}</p></article>)}</div>
    </CaseSection>

    <CaseSection id="hmw" no="02" label="RESEARCH GOAL" title="HOW MIGHT WE">
      <div className="hmw-list">{w.howMightWe.map((x,i)=><article key={x}><span>HMW / 0{i+1}</span><h3>{x}</h3></article>)}</div>
    </CaseSection>

    <CaseSection id="research" no="03" label="USER RESEARCH" title="LISTEN BEFORE DESIGNING" intro="以下规模用于展示研究计划与信息结构，不代表已经完成的真实研究。">
      <PlaceholderBadge />
      <div className="research-stats">{w.researchData.map(x=><article key={x.label}><strong>{x.value}</strong><span>{x.label}</span></article>)}</div>
      <div className="two-columns"><div><h3>调研对象</h3><ul className="clean-list">{w.researchGroups.map(x=><li key={x}>{x}</li>)}</ul></div><div><h3>调研问题</h3><ol className="number-list">{w.researchQuestions.map(x=><li key={x}>{x}</li>)}</ol></div></div>
      <div className="subsection-title"><span>INITIAL HYPOTHESES</span><h3>初步假设，待调研验证</h3></div>
      <div className="insight-grid">{w.insights.map((x,i)=><article key={x}><span>INSIGHT 0{i+1}</span><p>{x}</p><PlaceholderBadge>待调研验证</PlaceholderBadge></article>)}</div>
    </CaseSection>

    <CaseSection id="competitive" no="04" label="COMPETITIVE ANALYSIS" title="FROM GENERATION TO CONTROL" intro="矩阵用于梳理体验观察，不对产品作绝对优劣判断；最终结论仍需结合持续体验验证。">
      <div className="matrix" role="table" aria-label="AI PPT 产品体验比较矩阵"><div className="matrix-row head" role="row"><span role="columnheader">DIMENSION</span>{w.competitors.map(x=><b role="columnheader" key={x}>{x}</b>)}</div>{w.compareDimensions.map((x,i)=><div className="matrix-row" role="row" key={x}><span role="rowheader">{x}</span>{w.competitors.map((c,j)=><b key={c} aria-label={`${c} ${x}体验观察`}>{['●','◐','○'][(i+j)%3]}<small>{['支持','部分支持','待观察'][(i+j)%3]}</small></b>)}</div>)}</div>
      <blockquote>现有产品主要解决“从无到有”的生成效率，但在需求澄清、过程控制和结果解释方面仍有进一步优化空间。</blockquote>
    </CaseSection>

    <CaseSection id="journey" no="05" label="USER JOURNEY" title="WHERE AI CAN HELP">
      <div className="journey-flow">{w.journey.map((x,i)=><div key={x}><span>{String(i+1).padStart(2,'0')}</span><strong>{x}</strong>{i<w.journey.length-1&&<i>→</i>}</div>)}</div>
      <div className="journey-notes"><div><h3>PAIN POINTS</h3>{w.pains.map(x=><p key={x}>— {x}</p>)}</div><div><h3>AI OPPORTUNITIES</h3>{w.opportunities.map(x=><p key={x}>＋ {x}</p>)}</div></div>
    </CaseSection>

    <CaseSection id="principles" no="06" label="PRODUCT PRINCIPLES" title="UNDERSTAND. CONTROL. EXPLAIN.">
      <div className="principle-grid">{w.principles.map(x=><article key={x.no}><span>{x.no}</span><h3>{x.title}</h3><p>{x.intro}</p><ul>{x.items.map(y=><li key={y}>{y}</li>)}</ul></article>)}</div>
    </CaseSection>

    <CaseSection id="system" no="07" label="SYSTEM ARCHITECTURE" title="AI PPT CREATION SYSTEM" dark>
      <div className="architecture-grid">{w.architecture.map((module,i)=><article key={module[0]}><span>0{i+1}</span><h3>{module[0]}</h3><div>{module.slice(1).map(x=><i key={x}>{x}</i>)}</div></article>)}</div>
    </CaseSection>

    <CaseSection id="flow" no="08" label="CORE FLOW" title="FIVE STEPS, ONE CONTROLLABLE LOOP">
      <div className="flow-table"><div className="flow-head"><span>STEP</span><span>用户在做什么</span><span>AI 在做什么</span><span>系统如何反馈</span><span>如何保持控制</span></div>{w.coreFlow.map((row,i)=><div className="flow-row" key={row[0]}><span><small>STEP 0{i+1}</small><strong>{row[0]}</strong></span>{row.slice(1).map(x=><p key={x}>{x}</p>)}</div>)}</div>
    </CaseSection>

    <CaseSection id="interfaces" no="09" label="KEY INTERFACES" title="FROM INTENT TO OUTPUT" intro="五个关键界面使用统一组件、状态和反馈语言，让 AI 的工作过程对用户保持可见。">
      <div className="interface-stack"><div><span>INTERFACE / 01</span><NeedInputMock /></div><div><span>INTERFACE / 02</span><OutlineMock /></div><div><span>INTERFACE / 03</span><PlanningMock /></div><div><span>INTERFACE / 04</span><GenerationMock /></div><div><span>INTERFACE / 05</span><ResultMock /></div></div>
    </CaseSection>

    <CaseSection id="harness" no="10" label="HARNESS OVERVIEW" title="WHAT MAKES A GOOD PPT?">
      <div className="dimension-grid">{w.harnessDimensions.map(([name,text],i)=><article key={name}><span>0{i+1}</span><h3>{name}</h3><p>{text}</p></article>)}</div>
    </CaseSection>

    <CaseSection id="testing" no="11" label="TESTING & ITERATION" title="TEST THE TRUST, NOT ONLY THE TASK" intro="计划邀请 3—5 位目标用户完成原型测试。重点观察是否能顺利完成任务、停顿位置、是否理解 AI 建议、是否信任自动修改，以及希望保留哪些人工操作。">
      <PlaceholderBadge>TEST PLAN · 测试计划，待执行</PlaceholderBadge>
      <div className="iteration-card"><div><span>BEFORE / 迭代前</span><h3>系统直接自动修改存在问题的页面</h3><p><b>潜在风险：</b>用户不知道系统改了什么，也缺少撤回和确认感。</p></div><i>→</i><div><span>AFTER / 迭代后</span><h3>把决策权交还给用户</h3><div className="action-pills"><b>查看问题</b><b>接受建议</b><b>稍后处理</b></div><PlaceholderBadge>DESIGN HYPOTHESIS · 设计假设</PlaceholderBadge></div></div>
    </CaseSection>

    <CaseSection id="outcome" no="12" label="OUTCOME & REFLECTION" title="LESS PAGES. BETTER DECISIONS.">
      <div className="outcome-grid"><div><h3>OUTCOME</h3><p>本项目完成了从问题定义、产品策略、用户流程到高保真原型和评测框架的概念设计。下一阶段需要通过真实访谈、可用性测试和生成样本验证，进一步调整不同场景下的评测权重。</p></div><div><h3>REFLECTION</h3><p>AI PPT 产品的核心并不是生成更多页面，而是降低用户组织信息、判断质量和继续修改的成本。未来还需要进一步验证自动化效率与用户控制权之间的平衡。</p></div></div>
      <div className="reflection-score"><ScoreBars scores={w.scores.slice(0,4)} /><PlaceholderBadge>INTERFACE SAMPLE · 非真实测试结果</PlaceholderBadge></div>
    </CaseSection>
    <NextProject label="PPT QUALITY HARNESS" to="/work/ppt-quality-harness" />
  </div>
}
