import { Footer } from '../components/Layout'
import { SectionHead } from '../components/UI'
import { portfolio } from '../data/portfolio'

export function AboutPage() {
  return <div className="page-fade about-page">
    <section className="about-hero"><div className="mesh mesh-blue" aria-hidden="true" /><div className="container"><p className="eyebrow">ABOUT MIA / 关于我 · 2026</p><h1>拥有产品思维的<br />设计研究者。</h1><div className="about-intro-grid"><span>AI 产品 × 演示设计 × 视觉表达</span><div>{portfolio.profile.about.map(x=><p key={x}>{x}</p>)}</div></div></div></section>
    <section className="section-pad"><div className="container"><SectionHead label="CAPABILITIES / 能力结构 · 01" title="跨越产品、设计与 AI 的能力组合" /><div className="about-skills">{portfolio.aboutSkills.map((x,i)=><article key={x.title}><span>0{i+1}</span><h3>{x.title}</h3><ul>{x.items.map(y=><li key={y}>{y}</li>)}</ul></article>)}</div></div></section>
    <section className="education section-pad"><div className="container"><SectionHead label="EDUCATION / 教育经历 · 02" title="持续学习，也持续拓展边界" /><div className="timeline">{portfolio.education.map((x,i)=><article key={x.school}><span>{x.time}</span><div><h3>{x.school}</h3><p>{x.major}</p></div><i>0{i+1}</i></article>)}</div><div className="direction-note"><span>当前方向 / CURRENT DIRECTION</span><p>从视觉设计向 AI 产品设计、演示体验与效果评测拓展。以设计能力为基础，持续补充研究、产品与模型评测方法。</p></div></div></section>
    <Footer />
  </div>
}
