import { CaseHero, CaseSection, MetaGrid, NextProject, ScoreBars } from '../components/UI'
import { CompetitiveLandscapeMockup } from '../components/Mockups'
import { portfolio } from '../data/portfolio'

const report = portfolio.competitiveAnalysis
type TableCell = string | number

function DataTable({ headers, rows, label }: { headers: string[]; rows: TableCell[][]; label: string }) {
  return <div className="benchmark-table-wrap" tabIndex={0} aria-label={label + '，移动端按产品分组显示'}>
    <table className="benchmark-table">
      <caption>{label}</caption>
      <thead><tr>{headers.map(header => <th key={header}>{header}</th>)}</tr></thead>
      <tbody>{rows.map((row, rowIndex) => <tr key={String(row[0]) + '-' + rowIndex}>{row.map((cell, cellIndex) => cellIndex === 0
        ? <th key={rowIndex + '-' + cellIndex}>{cell}</th>
        : <td data-label={headers[cellIndex]} key={rowIndex + '-' + cellIndex}>{cell}</td>)}</tr>)}</tbody>
    </table>
  </div>
}

export function CompetitiveAnalysisPage() {
  return <div className="page-fade case-page benchmark-page">
    <CaseHero title={report.title} subtitle={report.subtitle} claim={report.claim} summary={report.summary} tags={report.tags} tone="blue">
      <CompetitiveLandscapeMockup />
    </CaseHero>

    <CaseSection id="background" no="01" label="BACKGROUND / 项目背景" title="为什么要看“改到能用”的时间">
      <MetaGrid items={report.meta} />
      <div className="benchmark-opening">{report.opening.map((paragraph, index) => <p className={index === 1 ? 'question' : ''} key={paragraph}>{paragraph}</p>)}</div>
      <div className="observation-grid">{report.observations.map((item, index) => <article key={item}><span>{String(index + 1).padStart(2, '0')}</span><p>{item}</p></article>)}</div>
    </CaseSection>

    <CaseSection id="questions" no="02" label="RESEARCH QUESTIONS / 研究问题" title="这次研究要回答什么">
      <div className="benchmark-question-grid">{report.researchQuestions.map((question, index) => <article key={question}><span>0{index + 1}</span><h3>{question}</h3></article>)}</div>
      <blockquote className="benchmark-core-question">{report.coreQuestion}</blockquote>
    </CaseSection>

    <CaseSection id="products" no="03" label="PRODUCT SET / 测试产品" title="六款产品，三种方向">
      <DataTable headers={['产品', '选择原因']} rows={report.products} label="六款测试产品及选择原因" />
      <div className="benchmark-group-grid">{report.productGroups.map(([title, products, text], index) => <article key={title}><span>0{index + 1}</span><small>{products}</small><h3>{title}</h3><p>{text}</p></article>)}</div>
    </CaseSection>

    <CaseSection id="method" no="04" label="TEST METHOD / 测试方式" title="同一份材料，同一组要求">
      <div className="test-brief-grid">{report.testBrief.map(([label, value]) => <article key={label}><span>{label}</span><strong>{value}</strong></article>)}</div>
      <div className="benchmark-task-grid">{report.tasks.map(([no, title, text]) => <article key={no}><span>{no}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
    </CaseSection>

    <CaseSection id="metrics" no="05" label="METRICS / 评分标准" title="八项指标">
      <div className="benchmark-metric-grid">{report.metrics.map(([metric, text], index) => <article key={metric}><span>{String(index + 1).padStart(2, '0')}</span><h3>{metric}</h3><p>{text}</p></article>)}</div>
    </CaseSection>

    <CaseSection id="findings" no="06" label="KEY FINDINGS / 核心结论" title="WPS 强在哪里，问题在哪里">
      <div className="benchmark-finding-list">{report.findings.map(finding => <article key={finding.no}><header><span>{finding.no}</span><h3>{finding.title}</h3></header><div className="finding-body"><div><p>{finding.intro}</p><ScoreBars scores={finding.scores} /></div><blockquote>{finding.text}</blockquote></div></article>)}</div>
    </CaseSection>

    <CaseSection id="efficiency" no="07" label="TIME TO USABLE / 完成时间" title="生成最快，不等于完成最快" intro="同一任务下，分别记录生成第一版的时间，以及继续修改到可用状态的总时间。">
      <DataTable headers={['产品', '生成第一版', '调整到可用']} rows={report.efficiency} label="三款代表产品的生成与完成时间" />
      <div className="speed-statement"><span>FIRST DRAFT SPEED</span><i>≠</i><strong>TIME TO USABLE DECK</strong></div>
      <p className="benchmark-analysis">{report.efficiencyConclusion}</p>
    </CaseSection>

    <CaseSection id="focus" no="08" label="PRODUCT FOCUS / 产品重点" title="WPS 不需要只追求生成得更炫" intro="增加模板可以改善第一眼效果，但不能直接解决生成后的删改、换图和重排。">
      <div className="focus-action-grid">{report.notJustTemplates.map((item, index) => <article key={item}><span>0{index + 1}</span><strong>{item}</strong></article>)}</div>
    </CaseSection>

    <CaseSection id="judgment" no="09" label="WPS ASSESSMENT / 能力判断" title="哪些保持，哪些先改">
      <div className="capability-judgment-grid">{report.capabilityJudgment.map((group, index) => <article className={'judgment-' + (index + 1)} key={group.title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{group.title}</h3><ul>{group.items.map(item => <li key={item}>{item}</li>)}</ul></article>)}</div>
    </CaseSection>

    <CaseSection id="suggestions" no="10" label="PRODUCT SUGGESTIONS / 给 WPS 的建议" title="六项具体改法">
      <div className="benchmark-suggestion-list">{report.suggestions.map(suggestion => <article key={suggestion.no}><header><span>{suggestion.no}</span><h3>{suggestion.title}</h3></header><div><p>{suggestion.text}</p><ul>{suggestion.details.map(detail => <li key={detail}>{detail}</li>)}</ul></div></article>)}</div>
    </CaseSection>

    <CaseSection id="priority" no="11" label="PRIORITY / 建议优先级" title="先减少返工，再提高首稿质量">
      <div className="benchmark-priority-grid">{report.priorities.map((priority, index) => <article key={priority.phase}><span>{priority.phase}</span><h3>{priority.title}</h3><div><small>优先做</small><ul>{priority.actions.map(action => <li key={action}>{action}</li>)}</ul></div><div><small>判断是否有效</small><ul>{priority.measures.map(measure => <li key={measure}>{measure}</li>)}</ul></div><b>0{index + 1}</b></article>)}</div>
    </CaseSection>

    <CaseSection id="conclusion" no="12" label="CONCLUSION / 项目结论" title="最终判断" dark>
      <div className="benchmark-conclusion-copy">{report.conclusion.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
      <div className="benchmark-final-question">{report.finalQuestion.map(line => <span key={line}>{line}</span>)}</div>
    </CaseSection>

    <NextProject label="个人 PPT 项目展示" to="/work/personal-ppt" />
  </div>
}
