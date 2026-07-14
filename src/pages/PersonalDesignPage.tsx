import { Link } from '../router'
import { CaseHero, CaseSection, MetaGrid, PlaceholderBadge, Tags } from '../components/UI'
import { DesignShowcaseHero, DesignWorkPlaceholder } from '../components/Mockups'
import { portfolio } from '../data/portfolio'

const d = portfolio.personalDesign

export function PersonalDesignPage() {
  return <div className="page-fade case-page personal-design-page">
    <CaseHero title={d.title} subtitle={d.subtitle} summary={d.summary} tags={['视觉设计', '插画设计', '内容转译', '出版表达']} tone="warm">
      <DesignShowcaseHero works={d.works} />
    </CaseHero>
    <section className="case-meta-wrap"><div className="container"><MetaGrid items={d.meta} /></div></section>

    <CaseSection id="design-overview" no="01" label="PROJECT OVERVIEW / 项目概览" title="让不同内容，找到适合自己的视觉语言" intro="三个项目对应品牌传播、儿童知识普及和出版叙事三种任务。设计方法并不相同，但都从理解内容与受众开始。">
      <div className="design-overview-stat"><strong>03</strong><div><span>SELECTED DESIGN WORKS</span><p>品牌与电商视觉、知识手册插画、出版漫画插画。真实项目图将在后续集中替换。</p></div></div>
    </CaseSection>

    <CaseSection id="design-works" no="02" label="SELECTED WORKS / 作品展示" title="三个项目，三种设计任务">
      <div className="design-work-list">{d.works.map((work, index) => <article className={`design-work-row design-row-${index + 1}`} key={work.no}>
        <div className="design-work-visual"><DesignWorkPlaceholder index={index} title={work.title} englishTitle={work.englishTitle} tone={work.tone} format={work.format} image={work.image} /></div>
        <div className="design-work-info">
          <div className="design-work-index"><span>项目 {work.no}</span><span>{work.category}</span></div>
          <h3>{work.title}</h3>
          <h4>{work.englishTitle}</h4>
          <p>{work.description}</p>
          <Tags items={work.tags} />
          {!work.image && <PlaceholderBadge>{work.status}</PlaceholderBadge>}
        </div>
      </article>)}</div>
    </CaseSection>

    <CaseSection id="design-strengths" no="03" label="DESIGN APPROACH / 设计方法" title="从理解内容，到形成系列表达">
      <div className="design-strength-grid">{d.strengths.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
    </CaseSection>

    <CaseSection id="design-status" no="04" label="CONTENT STATUS / 内容状态" title="等待真实作品图进入版式" intro="后续将图片放入 public/images/design-works/，并在 portfolio.ts 的 personalDesign.works 中填写路径即可。涉及内部资料的出版项目只使用公开或脱敏后的页面。">
      <div className="ppt-replace-note"><PlaceholderBadge>PLACEHOLDER · 待替换真实作品</PlaceholderBadge><p>建议品牌项目提供 3—5 张系列视觉图，插画项目提供封面、角色或场景代表图；下一轮可扩展为点击查看完整图库。</p></div>
    </CaseSection>

    <Link className="next-project" to="/#work"><span>返回首页 / BACK</span><strong>精选项目</strong><i>→</i></Link>
  </div>
}
