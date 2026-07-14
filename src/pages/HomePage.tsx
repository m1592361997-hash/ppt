import { Link } from '../router'
import { Footer } from '../components/Layout'
import { ProjectVisual, WorkbenchMockup } from '../components/Mockups'
import { SectionHead, Tags } from '../components/UI'
import { portfolio } from '../data/portfolio'

export function HomePage() {
  return <div className="page-fade home-page">
    <section className="hero">
      <div className="hero-mesh mesh" aria-hidden="true" />
      <div className="noise" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="dual-eyebrow"><span>{portfolio.hero.eyebrow[0]}</span><span>{portfolio.hero.eyebrow[1]}</span></div>
          <h1>{portfolio.hero.title.map((line,i)=><span className={i===1?'accent-line':''} key={line}>{line}</span>)}</h1>
          <p className="hero-claim">让 AI 更懂表达，<br />也让 PPT 创作更简单。</p>
          <p className="hero-intro">{portfolio.profile.intro}</p>
          <Tags items={portfolio.hero.skills} />
          <div className="button-row"><a className="button button-dark" href="#work">VIEW SELECTED WORK <span>↓</span></a><Link className="button button-text" to="/about">ABOUT ME <span>↗</span></Link></div>
        </div>
        <div className="hero-visual"><div className="visual-caption"><span>AI PPT WORKSPACE</span><span>CONCEPT / 2026</span></div><WorkbenchMockup /></div>
      </div>
    </section>

    <section className="positioning section-pad">
      <div className="container">
        <SectionHead label="POSITIONING / 01" title={<>FROM VISUAL DESIGN<br />TO AI PRODUCT THINKING.</>} text="我的优势不只是把页面做得好看，而是能够从内容理解、信息结构、视觉表达和用户操作路径出发，思考 AI 如何真正帮助用户完成一份好 PPT。" />
        <div className="capability-grid">{portfolio.capabilities.map((item,i)=><article className={`capability-card c${i+1}`} key={item.no}><span>{item.no}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div>
      </div>
    </section>

    <section id="work" className="selected-work section-pad">
      <div className="container">
        <SectionHead label="SELECTED CASE STUDIES / 01—03" title={<>WORK THAT CONNECTS<br />AI, PRODUCT & EXPRESSION.</>} />
        <div className="project-list">{portfolio.projects.map((project)=><Link className={`project-card tone-${project.tone}`} to={`/work/${project.slug}`} key={project.slug}>
          <div className="project-info"><div className="project-index"><span>{project.no}</span><span>{project.type ?? 'SELECTED WORK'}</span></div><h3>{project.title}</h3><h4>{project.subtitle}</h4><p>{project.description}</p><Tags items={project.tags} /><span className="view-link">VIEW CASE STUDY →</span></div>
          <div className="project-art"><div className="mesh" aria-hidden="true" /><ProjectVisual type={project.tone as 'coral'|'blue'|'warm'} /></div>
        </Link>)}</div>
      </div>
    </section>

    <section className="skills-section section-pad"><div className="container"><SectionHead label="CAPABILITIES / 04" title={<>WHAT I BRING<br />TO THE PRODUCT.</>} /><div className="skill-editorial">{portfolio.skillGroups.map((group,i)=><article key={group.title}><span>0{i+1}</span><h3>{group.title}</h3><ul>{group.items.map(x=><li key={x}>{x}</li>)}</ul></article>)}</div></div></section>

    <section className="process-section section-pad"><div className="container"><SectionHead label="PROCESS / 05" title="HOW I WORK" /><div className="process-line">{portfolio.process.map(x=><article key={x.no}><span>{x.no}</span><h3>{x.title}</h3><p>{x.text}</p></article>)}</div></div></section>

    <section className="visual-work section-pad"><div className="container"><SectionHead label="VISUAL PRACTICE / 06" title="SELECTED VISUAL WORK" /><div className="visual-list">{portfolio.visualWorks.map((work)=><article key={work.letter}><span>{work.letter}</span><div><h3>{work.title}</h3><p>{work.text}</p></div><i>↗</i></article>)}</div></div></section>

    <section className="about-preview section-pad"><div className="container about-grid"><div className="about-art"><div className="mesh mesh-blue" aria-hidden="true" /><span>M</span><small>DESIGN × PRODUCT × AI</small></div><div><SectionHead label="ABOUT / 07" title={<>DESIGNER WITH<br />A PRODUCT MINDSET.</>} />{portfolio.profile.about.map(x=><p key={x}>{x}</p>)}<Link className="text-link" to="/about">MORE ABOUT ME →</Link></div></div></section>
    <Footer />
  </div>
}
