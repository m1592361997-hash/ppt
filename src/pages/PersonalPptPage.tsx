import { CaseHero, CaseSection, MetaGrid, NextProject, PlaceholderBadge, Tags } from '../components/UI'
import { PptCoverPlaceholder, PptShowcaseHero } from '../components/Mockups'
import { portfolio } from '../data/portfolio'

const p = portfolio.personalPpt

export function PersonalPptPage() {
  return <div className="page-fade case-page personal-ppt-page">
    <CaseHero title={p.title} subtitle={p.subtitle} summary={p.summary} tags={['演示设计', '内容结构', '视觉系统', '叙事表达']} tone="warm">
      <PptShowcaseHero works={p.works} />
    </CaseHero>
    <section className="case-meta-wrap"><div className="container"><MetaGrid items={p.meta} /></div></section>

    <CaseSection id="ppt-overview" no="01" label="PROJECT OVERVIEW / 项目概览" title="用六个作品，展示完整的演示设计能力" intro="这一板块不只展示好看的页面，也关注一份 PPT 如何从内容理解、结构组织走向清晰、有节奏的视觉表达。">
      <div className="ppt-overview-stat"><strong>06</strong><div><span>SELECTED PRESENTATION WORKS</span><p>六个作品将覆盖不同主题、受众与汇报场景。当前为版式和内容占位，后续替换真实项目图片与说明。</p></div></div>
    </CaseSection>

    <CaseSection id="ppt-works" no="02" label="SELECTED WORKS / 作品展示" title="六个 PPT 项目，六种内容表达" intro="采用重点作品与双列作品交替的编辑式网格。每个项目都预留了 16:9 封面、项目类型、简介和能力标签。">
      <div className="ppt-work-grid">{p.works.map((work, index) => <article className={`ppt-work-card work-${index + 1}`} key={work.no}>
        <div className="ppt-work-visual"><PptCoverPlaceholder index={index} title={work.title} englishTitle={work.englishTitle} tone={work.tone} image={work.image} /></div>
        <div className="ppt-work-info">
          <div className="ppt-work-index"><span>作品 {work.no}</span><span>{work.category}</span></div>
          <h3>{work.title}</h3>
          <h4>{work.englishTitle}</h4>
          <p>{work.description}</p>
          <Tags items={work.tags} />
          {!work.image && <PlaceholderBadge>{work.status}</PlaceholderBadge>}
        </div>
      </article>)}</div>
    </CaseSection>

    <CaseSection id="ppt-principles" no="03" label="DESIGN FOCUS / 设计关注点" title="从内容逻辑，到现场表达">
      <div className="ppt-principle-grid">{p.principles.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
    </CaseSection>

    <CaseSection id="ppt-replace" no="04" label="CONTENT STATUS / 内容状态" title="版式已经准备好，等待真实作品进入" intro="后续只需要把六个项目的封面或代表页面放入 public/images/ppt-works/，并在 portfolio.ts 中填写对应图片路径、标题和说明，页面会自动显示真实作品。">
      <div className="ppt-replace-note"><PlaceholderBadge>PLACEHOLDER · 待替换真实作品</PlaceholderBadge><p>建议每个项目优先提供一张 16:9 封面图；如需进一步展示完整页面，可在下一轮扩展为项目图库或灯箱浏览。</p></div>
    </CaseSection>

    <NextProject label="个人设计作品" to="/work/personal-design" />
  </div>
}
