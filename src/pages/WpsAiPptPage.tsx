import { CaseHero, CaseSection, MetaGrid, NextProject } from '../components/UI'
import { VisualDirectionWorkbench } from '../components/Mockups'
import { portfolio } from '../data/portfolio'

const w = portfolio.wps

function ScenarioPreview({ tone }: { tone: string }) {
  return <div className={`scenario-preview scenario-${tone}`} aria-hidden="true">
    <span />
    <div><i /><i /><i /></div>
    <b /><em />
  </div>
}

export function WpsAiPptPage() {
  return <div className="page-fade case-page wps-page visual-language-page">
    <CaseHero title={w.title} subtitle={w.subtitle} claim={w.claim} summary={w.summary} tags={w.tags} tone="coral">
      <VisualDirectionWorkbench />
    </CaseHero>
    <section className="case-meta-wrap"><div className="container"><MetaGrid items={w.meta} /></div></section>

    <CaseSection id="starting-point" no="01" label="STARTING POINT / 项目出发点" title={<>AI 可以快速生成页面，<br />但不同汇报需要不同的视觉语言。</>} intro="项目开始时，我把 AI PPT 的核心价值理解为效率：读取 Word 文字稿、提取大纲、拆分内容，再快速形成一套结构完整的演示文稿。实际使用后我发现，对设计专业学生而言，真正困难的不是让文字出现在页面上，而是判断这份内容应该以什么样的视觉方式被表达。">
      <div className="project-quote"><small>CORE QUESTION / 核心问题</small><p>我如何借助 AI 判断不同汇报的表达需求，并快速建立与内容相匹配的视觉风格？</p></div>
      <div className="starting-grid">{w.startingPoints.map(([no,title,text])=><article key={no}><span>{no}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      <p className="translation-note">从 Word 文字稿到 PPT，不只是内容压缩和模板匹配，而是根据汇报目标，重新设计信息被观看和理解的方式。</p>
    </CaseSection>

    <CaseSection id="scenarios" no="02" label="PRESENTATION TYPES / 汇报类型" title="先判断表达任务，再决定视觉形式" intro="同样是课堂汇报，学术研究、案例分析、设计提案与人文艺术主题对页面的要求并不相同。我先拆解每种场景的表达目标，再把目标转译成可执行的视觉规则。">
      <div className="scenario-grid">{w.scenarios.map(item=><article className={`scenario-card ${item.tone}`} key={item.no}>
        <div className="scenario-card-head"><span>{item.no}</span><small>{item.english}</small></div>
        <ScenarioPreview tone={item.tone} />
        <h3>{item.title}</h3><p className="scenario-focus">强调：{item.focus}</p>
        <ul>{item.rules.map(rule=><li key={rule}>{rule}</li>)}</ul>
      </article>)}</div>
    </CaseSection>

    <CaseSection id="task" no="03" label="TASK UNDERSTANDING / 任务理解" title="从“选择模板”，转向“建立视觉规则”" intro="我不再只给 AI 一个标题并要求它生成完整 PPT，而是先补充汇报场景和表达条件。AI 需要先解释它对任务的理解，再提出视觉方向。">
      <div className="task-question-grid">{w.taskQuestions.map((question,index)=><article key={question}><span>0{index+1}</span><p>{question}</p></article>)}</div>
      <div className="content-to-style" role="img" aria-label="从汇报任务到视觉策略的转译流程">
        <div><small>INPUT / 输入</small><strong>汇报类型 · 听众 · 时长<br />表达目标 · 内容构成</strong></div>
        <i>→</i>
        <div className="ai-step"><small>AI INTERPRETS / AI 判断</small><strong>内容特征 · 信息密度<br />叙事关系 · 图片角色</strong></div>
        <i>→</i>
        <div><small>OUTPUT / 输出</small><strong>配色 · 字体 · 网格<br />图文比例 · 页面节奏</strong></div>
      </div>
    </CaseSection>

    <CaseSection id="process" no="04" label="MY WORKFLOW / 探索方式" title="六步建立一套可持续的视觉语言" intro="AI 在这里不是最终页面的作者，而是视觉方向辅助工具。每一步都保留设计者的确认点，避免在尚未判断内容之前直接套用模板。">
      <div className="visual-process">{w.process.map(item=><article key={item.no}><span>{item.no}</span><small>{item.english}</small><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
    </CaseSection>

    <CaseSection id="directions" no="05" label="VISUAL DIRECTIONS / 视觉方向" title="先发散三种方向，再选择最合适的一种" intro="每个方向不只给出一张好看的参考页，还必须说明为什么适合、图文比例如何、整套页面应该保持怎样的节奏。">
      <div className="direction-showcase">{w.directions.map(direction=><article className={`direction-${direction.id.toLowerCase()}`} key={direction.id}>
        <div className="direction-cover"><span>{direction.id}</span><small>{direction.english}</small><strong>{direction.title}</strong><div>{direction.palette.map(color=><i key={color} style={{background:color}} />)}</div></div>
        <h3>方向 {direction.id} · {direction.title}</h3><p>{direction.reason}</p>
        <dl><div><dt>图文比例</dt><dd>{direction.ratio}</dd></div><div><dt>页面节奏</dt><dd>{direction.rhythm}</dd></div></dl>
      </article>)}</div>
    </CaseSection>

    <CaseSection id="calibration" no="06" label="REFERENCE CALIBRATION / 参考校准" title="提取视觉规则，而不是复制参考图" intro="我会把喜欢的 PPT、海报、网页或作品集截图提供给 AI，让它分析视觉关系。参考图的作用是帮助描述判断，而不是让 AI 机械复刻某一张页面。">
      <div className="calibration-board">
        <div className="reference-sheet" aria-label="参考图分析示意"><span>REFERENCE / 01</span><h3>IMAGE-LED<br />NARRATIVE</h3><div className="reference-image" /><p>大图建立语境<br />文字承担观点</p></div>
        <div className="calibration-list">{w.calibration.map((item,index)=><div key={item}><span>{String(index+1).padStart(2,'0')}</span><strong>{item}</strong><i /></div>)}</div>
        <div className="rule-output"><small>EXTRACTED RULES</small><h3>可复用规则</h3><p>图像占比 65%</p><p>左对齐编辑式网格</p><p>暖白背景 + 单一强调色</p><p>章节页使用节奏性留白</p></div>
      </div>
    </CaseSection>

    <CaseSection id="specification" no="07" label="DESIGN SPECIFICATION / 设计规范" title="把风格变成整套 PPT 都能执行的规则" intro="确定方向后，我把视觉判断转化为设计规范。这样 AI 在生成新页面时不会不断更换语言，人工修改也能保持连续。">
      <div className="spec-system">{w.specification.map(([name,title,text],index)=><article key={name}><span>0{index+1}</span><small>{name}</small><h3>{title}</h3><p>{text}</p><div className={`spec-demo demo-${name.toLowerCase()}`}><i /><i /><i /></div></article>)}</div>
    </CaseSection>

    <CaseSection id="co-create" no="08" label="LOCAL CO-CREATION / 局部共创" title="锁定已经满意的部分，只修改当前问题" intro="整页或整套重新生成会破坏已经满意的内容。更可控的方式是先声明需要保留的规则，再让 AI 只处理一个局部任务。">
      <div className="co-create-board"><div className="locked-system"><small>LOCKED / 已锁定</small><strong>字体 · 颜色 · 网格 · 页面结构</strong><div><i /><i /><i /><i /></div></div><div className="co-create-list">{w.coCreate.map(([keep,change],index)=><article key={keep+change}><span>0{index+1}</span><p><b>{keep}</b><i>→</i>{change}</p></article>)}</div></div>
    </CaseSection>

    <CaseSection id="responsibility" no="09" label="HUMAN × AI / 决策分工" title="AI 提高效率，设计者保留判断" intro="更好的 AI PPT 不应该替设计者完成所有决定。它应减少复制、拆页、基础排版和反复重生成，让设计者把精力留给内容判断、审美选择和个人表达。" dark>
      <div className="responsibility-grid"><article><span>AI / 辅助完成</span><h3>处理信息与重复工作</h3>{w.responsibilities.ai.map(item=><p key={item}>＋ {item}</p>)}</article><div className="responsibility-cross">×</div><article><span>DESIGNER / 保留决策</span><h3>决定什么值得被看见</h3>{w.responsibilities.designer.map(item=><p key={item}>— {item}</p>)}</article></div>
    </CaseSection>

    <CaseSection id="reflection" no="10" label="OUTCOME & REFLECTION / 结论与反思" title="好的 AI，帮助我建立自己的视觉判断">
      <div className="final-statement"><small>CORE VIEWPOINT / 核心观点</small><h3>AI SHOULD NOT<br />CHOOSE MY STYLE.<br /><em>IT SHOULD HELP ME BUILD<br />THE RIGHT VISUAL LANGUAGE.</em></h3><p>AI 不应该替我选择风格，<br />而应该帮助我建立合适的视觉语言。</p></div>
      <div className="outcome-list">{w.outcomes.map(([title,text],index)=><article key={title}><span>0{index+1}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
    </CaseSection>
    <NextProject label="AI PPT 质量评测系统" to="/work/ppt-quality-harness" />
  </div>
}
