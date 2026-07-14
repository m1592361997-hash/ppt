import { CaseHero, CaseSection, MetaGrid, NextProject, PlaceholderBadge } from '../components/UI'
import { CompetitiveLandscapeMockup } from '../components/Mockups'
import { portfolio } from '../data/portfolio'

const report = portfolio.competitiveAnalysis
type CapabilityStatus = 'yes' | 'partial' | 'verify'

const statusCopy: Record<CapabilityStatus, string> = {
  yes: '已验证',
  partial: '部分验证',
  verify: '待实测',
}

function StatusMark({ value }: { value: string }) {
  const status = value as CapabilityStatus
  return <span className={`capability-status status-${status}`} aria-label={statusCopy[status]}><i />{statusCopy[status]}</span>
}

function SourceLinks({ ids }: { ids: string[] }) {
  return <div className="inline-sources">{ids.map(id => {
    const source = report.sources.find(item => item.id === id)
    return source ? <a key={id} href={source.url} target="_blank" rel="noreferrer">{id} 官方来源 ↗</a> : null
  })}</div>
}

export function CompetitiveAnalysisPage() {
  return <div className="page-fade case-page competitive-page">
    <CaseHero title={report.title} subtitle={report.subtitle} claim={report.claim} summary={report.summary} tags={report.tags} tone="blue">
      <CompetitiveLandscapeMockup />
    </CaseHero>

    <CaseSection id="executive-summary" no="01" label="EXECUTIVE SUMMARY / 结论摘要" title="先说结论" intro="如果这份材料只看三分钟，下面四点就是需要带走的内容。">
      <div className="executive-summary-grid">{report.executiveSummary.map(([no, title, finding, action]) => <article key={no}><span>{no}</span><small>{title}</small><h3>{finding}</h3><p>{action}</p></article>)}</div>
    </CaseSection>

    <CaseSection id="scope" no="02" label="SCOPE / 研究范围" title="这次具体比什么" intro="比较范围覆盖一份 PPT 从开始到交付的五个环节：材料导入、大纲确认、风格选择、局部修改和文件导出。">
      <MetaGrid items={report.meta} />
      <PlaceholderBadge>独立研究 · 按 WPS 产品团队内部汇报方式组织 · 非 WPS 内部资料</PlaceholderBadge>
      <div className="research-question-grid">{report.questions.map(([no, title, text]) => <article key={no}><span>{no}</span><small>RESEARCH QUESTION</small><h3>{title}</h3><p>{text}</p></article>)}</div>
    </CaseSection>

    <CaseSection id="landscape" no="03" label="MARKET LANDSCAPE / 市场分类" title="目前主要有三类产品" intro="它们的入口不同，但最后都要解决同一件事：交付一份能讲、能改、能继续协作的 PPT。">
      <div className="landscape-grid">{report.landscape.map((group, index) => <article key={group.title}><div><span>0{index + 1}</span><small>{group.english}</small></div><h3>{group.title}</h3><p>{group.description}</p><ul>{group.products.map(product => <li key={product}>{product}</li>)}</ul></article>)}</div>
    </CaseSection>

    <CaseSection id="method" no="04" label="METHOD / 判断方式" title="哪些能确认，哪些还要测试" intro="官网或帮助中心能直接查到的记为“已验证”；支持范围不清楚的记为“部分验证”；必须登录或生成后才能判断的记为“待实测”。">
      <div className="evidence-grid">{report.evidenceLevels.map(([title, english, text], index) => <article className={`evidence-${index + 1}`} key={title}><span>{english}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      <PlaceholderBadge>研究截点：2026-07-14 · 产品权益与价格需在正式使用前再次核验</PlaceholderBadge>
    </CaseSection>

    <CaseSection id="profiles" no="05" label="PRODUCT PROFILES / 产品拆解" title="8 款产品分别在做什么">
      <div className="product-profile-list">{report.products.map((product, index) => <article key={product.name}><header><span>{String(index + 1).padStart(2, '0')}</span><div><small>{product.origin} · {product.type}</small><h3>{product.name}</h3></div></header><p className="product-position">{product.position}</p><div className="verified-list"><small>官方资料已验证</small>{product.verified.map(item => <p key={item}>✓ {item}</p>)}</div><div className="product-boundary"><small>边界 / 待核验</small><p>{product.boundary}</p></div><footer><span>{product.access}</span><SourceLinks ids={product.sourceIds} /></footer></article>)}</div>
    </CaseSection>

    <CaseSection id="public-data" no="06" label="PUBLIC DATA / 公开数据" title="只放能核验的数字" intro="这里列的是资源数量、输入限制、免费额度和公开价格，不把用户量估算或主观评分当作事实。">
      <div className="public-number-grid">{report.publicNumbers.map(item => {
        const source = report.sources.find(sourceItem => sourceItem.id === item.sourceId)
        return <article key={`${item.product}-${item.value}`}><small>{item.product}</small><strong>{item.value}</strong><span>{item.unit}</span><p>{item.detail}</p>{source && <a href={source.url} target="_blank" rel="noreferrer">{item.sourceId} 核验来源 ↗</a>}</article>
      })}</div>
    </CaseSection>

    <CaseSection id="capability-matrix" no="07" label="CAPABILITY MATRIX / 能力矩阵" title="差异主要出现在控制和交付" intro="这张表只回答官网是否能确认某项功能，不代表功能做得好不好，也不是综合评分。">
      <div className="matrix-legend"><StatusMark value="yes" /><StatusMark value="partial" /><StatusMark value="verify" /></div>
      <div className="responsive-table" tabIndex={0} aria-label="AI PPT 产品能力矩阵，可横向滚动查看">
        <table className="capability-table"><thead><tr><th>产品</th>{report.capabilityColumns.map(column => <th key={column}>{column}</th>)}</tr></thead><tbody>{report.capabilityMatrix.map(row => <tr key={row.product}><th>{row.product}</th>{row.values.map((value, index) => <td data-label={report.capabilityColumns[index]} key={`${row.product}-${report.capabilityColumns[index]}`}><StatusMark value={value} /></td>)}</tr>)}</tbody></table>
      </div>
      <p className="case-note">“部分验证”表示官网已显示相近能力，但支持格式、版本或操作颗粒度未完全公开；“待实测”不等于产品没有该功能。</p>
    </CaseSection>

    <CaseSection id="delivery" no="08" label="EDIT & DELIVERY / 编辑与交付" title="生成完以后还能怎么改" intro="这一项直接影响用户要不要换工具、重新排版，或者回到传统 PPT 编辑器继续做。">
      <div className="responsive-table delivery-table-wrap" tabIndex={0} aria-label="AI PPT 产品编辑、交付与付费方式对比，可横向滚动查看"><table className="delivery-table"><thead><tr><th>产品</th><th>编辑方式</th><th>导出</th><th>品牌 / 模板</th><th>流程特征</th><th>访问 / 价格</th></tr></thead><tbody>{report.deliveryComparison.map(row => <tr key={row[0]}>{row.map((value, index) => index === 0 ? <th key={value}>{value}</th> : <td data-label={['', '编辑方式', '导出', '品牌 / 模板', '流程特征', '访问 / 价格'][index]} key={`${row[0]}-${index}`}>{value}</td>)}</tr>)}</tbody></table></div>
    </CaseSection>

    <CaseSection id="findings" no="09" label="KEY FINDINGS / 主要判断" title="六点判断">
      <div className="finding-list">{report.findings.map(([no, title, text]) => <article key={no}><span>{no}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
    </CaseSection>

    <CaseSection id="wps-baseline" no="10" label="WPS BASELINE / 现有基础" title="WPS 目前具备的五项基础" dark>
      <div className="wps-strength-grid">{report.wpsStrengths.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      <p className="dark-source-note">以上为基于 WPS 官方产品页与社区公开说明的分析，不代表 WPS 内部路线图。 <a href="https://ai.wps.com/zh-CN/" target="_blank" rel="noreferrer">查看官方来源 ↗</a></p>
    </CaseSection>

    <CaseSection id="opportunities" no="11" label="RECOMMENDATIONS / 功能建议" title="建议补充的五项能力" intro="这些建议来自竞品对比和第一项目的实际制作过程，不代表 WPS 已经立项或上线。">
      <div className="opportunity-list">{report.opportunities.map(([no, title, text, value]) => <article key={no}><span>{no}</span><div><small>{value}</small><h3>{title}</h3><p>{text}</p></div><i>→</i></article>)}</div>
    </CaseSection>

    <CaseSection id="priorities" no="12" label="PRIORITY / 优先级" title="建议按返工影响排序">
      <div className="priority-grid">{report.priorities.map(priority => <article key={priority.level}><span>{priority.level}</span><h3>{priority.title}</h3><p>{priority.goal}</p><ul>{priority.actions.map(action => <li key={action}>{action}</li>)}</ul></article>)}</div>
    </CaseSection>

    <CaseSection id="ideal-flow" no="13" label="PROPOSED FLOW / 建议流程" title="建议的完整流程">
      <div className="competitive-flow">{report.idealFlow.map((step, index) => <div key={step}><span>{String(index + 1).padStart(2, '0')}</span><strong>{step}</strong>{index < report.idealFlow.length - 1 && <i>→</i>}</div>)}</div>
    </CaseSection>

    <CaseSection id="next-test" no="14" label="NEXT TEST / 下一步" title="用同一套任务做实测" intro="当前资料能说明产品公开能力，但不能说明实际效果。下一步需要让 8 款产品处理同样的材料，再记录结果。">
      <div className="next-test-grid">{report.nextTest.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      <blockquote>这份分析不需要证明谁最好，只需要找出用户在哪一步最费时间，以及 WPS 能不能把这一步做得更省事。</blockquote>
    </CaseSection>

    <CaseSection id="sources" no="15" label="SOURCES / 官方来源" title="资料清单" intro="链接均来自产品官网、官方帮助中心或官方定价页面；访问日期为 2026-07-14。">
      <div className="source-list">{report.sources.map(source => <a key={source.id} href={source.url} target="_blank" rel="noreferrer"><span>{source.id}</span><small>{source.product}</small><strong>{source.title}</strong><i>↗</i></a>)}</div>
    </CaseSection>

    <NextProject label="个人 PPT 项目展示" to="/work/personal-ppt" />
  </div>
}
