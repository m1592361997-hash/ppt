import { CaseHero, CaseSection, NextProject, PlaceholderBadge, ScoreBars } from '../components/UI'
import { HarnessDashboard } from '../components/Mockups'
import { portfolio } from '../data/portfolio'

const h = portfolio.harness

export function HarnessPage() {
  return <div className="page-fade case-page harness-page">
    <CaseHero title={h.title} subtitle={h.subtitle} summary={h.summary} tags={h.tags} tone="blue"><HarnessDashboard /></CaseHero>
    <CaseSection id="why-evaluate" no="01" label="WHY EVALUATE / 为什么评测" title="生成成功，只是开始" intro="一份 PPT 不应只通过“是否生成成功”判断，而应同时考虑内容、结构、视觉、图文匹配、事实准确性、可编辑性和具体使用场景。">
      <div className="big-statement"><span>SUCCESS ≠ QUALITY</span><p>评测把模糊的“看起来不对”转化为可以定位、解释和进入产品迭代的问题。</p></div>
    </CaseSection>
    <CaseSection id="good-ppt" no="02" label="WHAT IS GOOD / 质量定义" title="好 PPT 取决于具体场景">
      <div className="quality-equation"><span>GOOD PPT</span><i>=</i><div><b>清晰内容</b><b>连贯结构</b><b>有效视觉</b><b>适配场景</b></div></div>
    </CaseSection>
    <CaseSection id="dimensions" no="03" label="DIMENSIONS / 评测维度" title="七个维度，一套评测系统">
      <div className="dimension-grid seven">{h.dimensions.map((x,i)=><article key={x}><span>0{i+1}</span><h3>{x}</h3><p>{['内容完整与主题一致','章节与页面关系清晰','层级、留白和版式有效','图像图表与文字匹配','事实与数据风险可控','元素可继续修改','符合受众与汇报目的'][i]}</p></article>)}</div>
    </CaseSection>
    <CaseSection id="tasks" no="04" label="TASK & SAMPLE DESIGN / 任务样本" title="测试真实场景，而不是一个模板" intro="任务覆盖不同受众、时长、内容密度和表达目标，以观察同一套生成能力在不同使用场景中的表现。">
      <PlaceholderBadge>以下任务为评测框架示例，真实样本和测试结果待后续补充。</PlaceholderBadge>
      <div className="task-grid">{h.tasks.map((x,i)=><article key={x}><span>TASK / 0{i+1}</span><h3>{x}</h3><p>{['5 MIN','15 MIN','10 MIN','20 MIN','12 MIN','15 MIN'][i]} · SAMPLE BRIEF</p></article>)}</div>
    </CaseSection>
    <CaseSection id="rubric" no="05" label="HUMAN RUBRIC / 人工评分" title="让质量判断更一致">
      <div className="rubric">{h.rubric.map(([score,text])=><article key={score}><strong>{score}</strong><span>{text}</span></article>)}</div><p className="case-note">评分时同时记录证据页面与问题原因，避免只留下一个无法解释的数字。</p>
    </CaseSection>
    <CaseSection id="ai-flow" no="06" label="AI EVALUATION FLOW / 评测流程" title="规则、模型与人工复核" dark>
      <div className="evaluation-flow">{h.flow.map((x,i)=><div key={x}><span>{String(i+1).padStart(2,'0')}</span><strong>{x}</strong>{i<h.flow.length-1&&<i>→</i>}</div>)}</div>
    </CaseSection>
    <CaseSection id="taxonomy" no="07" label="ERROR TAXONOMY / 错误分类" title="先准确命名问题">
      <div className="error-system">{h.errors.map((x,i)=><span className={`e${(i%3)+1}`} key={x}>{x}</span>)}</div><p className="case-note">每条问题保留错误代码、严重程度、证据页面与建议动作，使同类问题能够被聚合比较。</p>
    </CaseSection>
    <CaseSection id="dashboard" no="08" label="RESULT DASHBOARD / 结果面板" title="从一个分数，走向问题证据" intro="面板同时展示总体得分、七项能力、高频错误、页面问题与样本差异；示意数字仅用于展示界面结构。">
      <PlaceholderBadge>INTERFACE SAMPLE · 非真实测试结果</PlaceholderBadge><HarnessDashboard />
      <div className="dashboard-detail"><div><h3>七项能力得分</h3><ScoreBars scores={h.scores} /></div><div><h3>优化建议</h3>{['优先拆分 4 个信息过载页面','复核 3 处数据来源与时间口径','调整图表标题，使结论与数据一致','保留组件结构以支持二次编辑'].map((x,i)=><p key={x}><span>0{i+1}</span>{x}</p>)}</div></div>
    </CaseSection>
    <CaseSection id="optimize" no="09" label="PRODUCT FEEDBACK LOOP / 产品闭环" title="让评测问题进入产品迭代">
      <div className="optimization-map">{h.optimization.map(([dimension,action])=><article key={dimension}><span>IF</span><h3>{dimension} 低</h3><i>→</i><p>{action}</p></article>)}</div>
    </CaseSection>
    <CaseSection id="limits" no="10" label="LIMITS & NEXT / 局限与下一步" title="分数不是最终答案">
      <div className="outcome-grid"><div><h3>当前局限</h3><p>评分权重仍需基于不同场景校准；模型评测可能受到提示词和模型版本影响；视觉与场景适配仍需要人工判断。</p></div><div><h3>下一步</h3><p>补充真实生成样本，建立评分者一致性检查，并追踪同类错误是否能在产品迭代后稳定下降。</p></div></div>
      <blockquote>评测系统的意义不是为生成结果打出一个漂亮分数，而是让问题能够被定位、解释并反向进入产品迭代。</blockquote>
    </CaseSection>
    <NextProject label="PURO 咖啡视觉系统" to="/work/puro-coffee" />
  </div>
}
