import { Link } from '../router'
import { Footer } from '../components/Layout'
import { ProjectVisual } from '../components/Mockups'
import { SectionHead, Tags } from '../components/UI'
import { portfolio } from '../data/portfolio'

export function HomePage() {
  return <div className="page-fade home-page">
    <section className="hero">
      <div className="hero-mesh mesh" aria-hidden="true" />
      <div className="noise" aria-hidden="true" />
      <div className="container hero-intro-shell">
        <div className="hero-topline">
          <div className="dual-eyebrow"><span>{portfolio.hero.eyebrow[0]}</span><span>{portfolio.hero.eyebrow[1]}</span></div>
          <span className="hero-availability">{portfolio.hero.availability}</span>
        </div>
        <h1 className="hero-identity" aria-label={portfolio.hero.identity.join('')}>
          {portfolio.hero.identity.map((line, index) => <span className={`hero-identity-line line-${index + 1}`} aria-hidden="true" key={line}><i>{line}</i></span>)}
        </h1>
        <div className="hero-bottomline">
          <div className="hero-statement"><span>POSITION / 定位</span><strong>{portfolio.profile.statement}</strong></div>
          <p>{portfolio.profile.intro}</p>
          <a className="hero-scroll" href="#work"><span>浏览精选项目</span><small>SELECTED WORK</small><i aria-hidden="true">↓</i></a>
        </div>
      </div>
    </section>

    <section id="work" className="selected-work section-pad">
      <div className="container">
        <SectionHead label="SELECTED CASE STUDIES / 精选案例 · 01—04" title={<>精选项目，<br />从问题到表达。</>} text={portfolio.hero.workIntro} />
        <div className="project-list">{portfolio.projects.map((project)=><Link className={`project-card tone-${project.tone}`} to={`/work/${project.slug}`} key={project.slug}>
          <div className="project-info"><div className="project-index"><span>{project.no}</span><span>{project.type ?? '精选项目 / SELECTED WORK'}</span></div><h3>{project.title}</h3><h4>{project.subtitle}</h4><p>{project.description}</p><Tags items={project.tags} /><span className="view-link">查看完整案例 VIEW CASE →</span></div>
          <div className="project-art"><div className="mesh" aria-hidden="true" /><ProjectVisual type={project.tone as 'coral'|'blue'|'warm'|'design'} /><span className="project-hover-cta" aria-hidden="true"><b>查看</b><small>VIEW PROJECT</small><i>↗</i></span></div>
        </Link>)}</div>
      </div>
    </section>

    <section className="positioning section-pad">
      <div className="container">
        <SectionHead label="POSITIONING / 个人定位 · 01" title={<>从视觉设计出发，<br />走向 AI 产品思考。</>} text="我的优势不只是把页面做得好看，而是能够从内容理解、信息结构、视觉表达和用户操作路径出发，思考 AI 如何真正帮助用户完成一份好 PPT。" />
        <div className="capability-grid">{portfolio.capabilities.map((item,i)=><article className={`capability-card c${i+1}`} key={item.no}><span>{item.no}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div>
      </div>
    </section>

    <section className="skills-section section-pad"><div className="container"><SectionHead label="CAPABILITIES / 能力结构 · 04" title={<>我能为产品<br />带来什么。</>} /><div className="skill-editorial">{portfolio.skillGroups.map((group,i)=><article key={group.title}><span>0{i+1}</span><h3>{group.title}</h3><ul>{group.items.map(x=><li key={x}>{x}</li>)}</ul></article>)}</div></div></section>

    <section className="process-section section-pad"><div className="container"><SectionHead label="PROCESS / 工作方法 · 05" title="我的设计流程" /><div className="process-line">{portfolio.process.map(x=><article key={x.no}><span>{x.no}</span><h3>{x.title}</h3><p>{x.text}</p></article>)}</div></div></section>

    <section className="visual-work section-pad"><div className="container"><SectionHead label="VISUAL PRACTICE / 视觉实践 · 06" title="精选视觉设计作品" /><div className="visual-list">{portfolio.visualWorks.map((work)=><article key={work.letter}><span>{work.letter}</span><div><h3>{work.title}</h3><p>{work.text}</p></div><i>↗</i></article>)}</div></div></section>

    <section className="about-preview section-pad"><div className="container about-grid"><div className="about-art"><div className="mesh mesh-blue" aria-hidden="true" /><span>M</span><small>DESIGN × PRODUCT × AI</small></div><div><SectionHead label="ABOUT / 关于我 · 07" title={<>拥有产品思维的<br />设计研究者。</>} />{portfolio.profile.about.map(x=><p key={x}>{x}</p>)}<Link className="text-link" to="/about">进一步了解我 MORE ABOUT →</Link></div></div></section>
    <Footer />
  </div>
}
