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

    <CaseSection id="scope" no="01" label="SCOPE / 研究范围" title="先定义比较问题，再收集功能清单" intro="这不是一份把官网卖点重新排列的功能表。比较围绕用户完成一份 PPT 的完整链路：输入材料、确认结构、建立风格、局部修改与最终交付。">
      <MetaGrid items={report.meta} />
      <div className="research-question-grid">{report.questions.map(([no, title, text]) => <article key={no}><span>{no}</span><small>RESEARCH QUESTION</small><h3>{title}</h3><p>{text}</p></article>)}</div>
    </CaseSection>

    <CaseSection id="landscape" no="02" label="MARKET LANDSCAPE / 市场图谱" title="三条产品路径，竞争同一个交付结果" intro="产品形态不同，但用户最终都需要一份能够被理解、继续修改并正式交付的演示文稿。">
      <div className="landscape-grid">{report.landscape.map((group, index) => <article key={group.title}><div><span>0{index + 1}</span><small>{group.english}</small></div><h3>{group.title}</h3><p>{group.description}</p><ul>{group.products.map(product => <li key={product}>{product}</li>)}</ul></article>)}</div>
    </CaseSection>

    <CaseSection id="method" no="03" label="METHOD / 证据方法" title="把事实、分析和待实测项分开" intro="功能随版本、地区和账号变化。本报告只把官方公开资料作为已验证事实；生成质量、速度和导出保真不凭印象下结论。">
      <div className="evidence-grid">{report.evidenceLevels.map(([title, english, text], index) => <article className={`evidence-${index + 1}`} key={title}><span>{english}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      <PlaceholderBadge>研究截点：2026-07-14 · 产品权益与价格需在正式使用前再次核验</PlaceholderBadge>
    </CaseSection>

    <CaseSection id="profiles" no="04" label="PRODUCT PROFILES / 产品拆解" title="8 款产品，各自解决哪一段问题">
      <div className="product-profile-list">{report.products.map((product, index) => <article key={product.name}><header><span>{String(index + 1).padStart(2, '0')}</span><div><small>{product.origin} · {product.type}</small><h3>{product.name}</h3></div></header><p className="product-position">{product.position}</p><div className="verified-list"><small>官方资料已验证</small>{product.verified.map(item => <p key={item}>✓ {item}</p>)}</div><div className="product-boundary"><small>边界 / 待核验</small><p>{product.boundary}</p></div><footer><span>{product.access}</span><SourceLinks ids={product.sourceIds} /></footer></article>)}</div>
    </CaseSection>

    <CaseSection id="public-data" no="05" label="PUBLIC DATA / 公开边界数据" title="用可核验数字，替代模糊的“强大”" intro="这些数字来自公开官方页面，用于说明资源规模、输入限制、免费额度和付费门槛；它们不是生成质量评分。">
      <div className="public-number-grid">{report.publicNumbers.map(item => {
        const source = report.sources.find(sourceItem => sourceItem.id === item.sourceId)
        return <article key={`${item.product}-${item.value}`}><small>{item.product}</small><strong>{item.value}</strong><span>{item.unit}</span><p>{item.detail}</p>{source && <a href={source.url} target="_blank" rel="noreferrer">{item.sourceId} 核验来源 ↗</a>}</article>
      })}</div>
    </CaseSection>

    <CaseSection id="capability-matrix" no="06" label="CAPABILITY MATRIX / 能力矩阵" title="生成入口相近，控制与交付开始拉开差异" intro="矩阵表示公开资料中是否能确认该能力，不代表能力质量高低，也不是产品综合评分。">
      <div className="matrix-legend"><StatusMark value="yes" /><StatusMark value="partial" /><StatusMark value="verify" /></div>
      <div className="responsive-table" tabIndex={0} aria-label="AI PPT 产品能力矩阵，可横向滚动查看">
        <table className="capability-table"><thead><tr><th>产品</th>{report.capabilityColumns.map(column => <th key={column}>{column}</th>)}</tr></thead><tbody>{report.capabilityMatrix.map(row => <tr key={row.product}><th>{row.product}</th>{row.values.map((value, index) => <td data-label={report.capabilityColumns[index]} key={`${row.product}-${report.capabilityColumns[index]}`}><StatusMark value={value} /></td>)}</tr>)}</tbody></table>
      </div>
      <p className="case-note">“部分验证”表示官网已显示相近能力，但支持格式、版本或操作颗粒度未完全公开；“待实测”不等于产品没有该功能。</p>
    </CaseSection>

    <CaseSection id="delivery" no="07" label="EDIT & DELIVERY / 编辑与交付" title="生成之后，谁能真正进入工作流" intro="对 WPS AI PPT 而言，可编辑性不是附加项，而是连接生成初稿与正式交付的核心价值。">
      <div className="responsive-table delivery-table-wrap" tabIndex={0} aria-label="AI PPT 产品编辑、交付与付费方式对比，可横向滚动查看"><table className="delivery-table"><thead><tr><th>产品</th><th>编辑方式</th><th>导出</th><th>品牌 / 模板</th><th>流程特征</th><th>访问 / 价格</th></tr></thead><tbody>{report.deliveryComparison.map(row => <tr key={row[0]}>{row.map((value, index) => index === 0 ? <th key={value}>{value}</th> : <td data-label={['', '编辑方式', '导出', '品牌 / 模板', '流程特征', '访问 / 价格'][index]} key={`${row[0]}-${index}`}>{value}</td>)}</tr>)}</tbody></table></div>
    </CaseSection>

    <CaseSection id="findings" no="08" label="KEY FINDINGS / 关键发现" title="从功能数量，转向完成成本">
      <div className="finding-list">{report.findings.map(([no, title, text]) => <article key={no}><span>{no}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
    </CaseSection>

    <CaseSection id="wps-baseline" no="09" label="WPS BASELINE / 现有基础" title="WPS 已经拥有一条很难复制的起跑线" dark>
      <div className="wps-strength-grid">{report.wpsStrengths.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      <p className="dark-source-note">以上为基于 WPS 官方产品页与社区公开说明的分析，不代表 WPS 内部路线图。 <a href="https://ai.wps.com/zh-CN/" target="_blank" rel="noreferrer">查看官方来源 ↗</a></p>
    </CaseSection>

    <CaseSection id="opportunities" no="10" label="OPPORTUNITY MAP / 产品机会" title="把原生编辑优势，升级为可控的 AI 共创" intro="以下内容为基于竞品差异与第一项目个人实践形成的产品分析，不是已上线功能。">
      <div className="opportunity-list">{report.opportunities.map(([no, title, text, value]) => <article key={no}><span>{no}</span><div><small>{value}</small><h3>{title}</h3><p>{text}</p></div><i>→</i></article>)}</div>
    </CaseSection>

    <CaseSection id="priorities" no="11" label="PRIORITY / 优先级建议" title="先建立信任，再扩展表达与团队能力">
      <div className="priority-grid">{report.priorities.map(priority => <article key={priority.level}><span>{priority.level}</span><h3>{priority.title}</h3><p>{priority.goal}</p><ul>{priority.actions.map(action => <li key={action}>{action}</li>)}</ul></article>)}</div>
    </CaseSection>

    <CaseSection id="ideal-flow" no="12" label="PROPOSED FLOW / 建议流程" title="从导入材料，到可解释地完成一份 PPT">
      <div className="competitive-flow">{report.idealFlow.map((step, index) => <div key={step}><span>{String(index + 1).padStart(2, '0')}</span><strong>{step}</strong>{index < report.idealFlow.length - 1 && <i>→</i>}</div>)}</div>
    </CaseSection>

    <CaseSection id="next-test" no="13" label="NEXT TEST / 下一步验证" title="把桌面研究推进到统一任务实测" intro="当前报告可以支持产品定位和测试设计，但不能替代真实生成结果。下一阶段需要在相同输入、相同约束下完成账号实测。">
      <div className="next-test-grid">{report.nextTest.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      <blockquote>竞品分析的价值，不是证明某个产品“最好”，而是找到用户完成任务时仍然需要付出的成本，并判断 WPS 最适合从哪里降低它。</blockquote>
    </CaseSection>

    <CaseSection id="sources" no="14" label="SOURCES / 官方来源" title="可追溯的资料清单" intro="所有链接均为产品官网、官方帮助中心或官方定价页面；访问日期为 2026-07-14。">
      <div className="source-list">{report.sources.map(source => <a key={source.id} href={source.url} target="_blank" rel="noreferrer"><span>{source.id}</span><small>{source.product}</small><strong>{source.title}</strong><i>↗</i></a>)}</div>
    </CaseSection>

    <NextProject label="个人 PPT 项目展示" to="/work/personal-ppt" />
  </div>
}
