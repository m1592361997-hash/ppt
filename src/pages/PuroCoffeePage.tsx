import { Link } from '../router'
import { CaseHero, CaseSection, MetaGrid } from '../components/UI'
import { Poster } from '../components/Mockups'
import { portfolio } from '../data/portfolio'

const p = portfolio.puro

export function PuroCoffeePage() {
  return <div className="page-fade case-page puro-page">
    <CaseHero title={p.title} subtitle={p.subtitle} summary={p.summary} tags={['VISUAL SYSTEM','CONTENT DESIGN','CAMPAIGN','DELIVERY']} tone="warm"><div className="hero-poster"><Poster index={2} /><Poster index={7} /></div></CaseHero>
    <section className="case-meta-wrap"><div className="container"><MetaGrid items={p.meta} /></div></section>
    <CaseSection id="puro-background" no="01" label="PROJECT BACKGROUND / 项目背景" title="一种主色，十七种表达" intro="项目围绕咖啡产品电商传播展开，需要在连续的上新与平台物料中维持清楚、一致且具有识别度的视觉表达。"><div className="puro-stat"><strong>17</strong><span>张产品海报<br />与平台应用物料</span></div></CaseSection>
    <CaseSection id="puro-challenge" no="02" label="DESIGN CHALLENGE / 设计挑战" title="统一，但不重复"><blockquote>如何在单一主色限制下，既保持品牌统一，又让不同产品具有清楚的视觉差异？</blockquote></CaseSection>
    <CaseSection id="puro-color" no="03" label="COLOR STRATEGY / 色彩策略" title="让构图承担区分任务"><div className="color-system"><div className="swatch primary"><span>主色 / PRIMARY RED</span><b>#D94A3D</b></div><div className="swatch cream"><span>暖白 / WARM PAPER</span><b>#F4E8D5</b></div><div className="swatch ink"><span>深咖 / ROASTED INK</span><b>#2A1813</b></div></div><p className="case-note">当色彩变量被压缩，构图、字体比例、留白与图形关系承担了区分产品的主要任务。</p></CaseSection>
    <CaseSection id="puro-system" no="04" label="VISUAL SYSTEM / 视觉系统" title="建立灵活而统一的框架"><div className="strategy-grid">{p.strategies.map((x,i)=><article key={x}><span>0{i+1}</span><p>{x}</p></article>)}</div></CaseSection>
    <CaseSection id="puro-posters" no="05" label="POSTER SERIES / 海报系列" title="十七种变化，一套视觉语言" intro="当前为无损坏图标的本地 CSS 占位。将真实图片放入 public/images/puro/ 后，可在集中数据文件中替换路径。"><div className="poster-gallery">{Array.from({length:17},(_,i)=><Poster index={i} key={i} />)}</div></CaseSection>
    <CaseSection id="puro-platform" no="06" label="PLATFORM APPLICATION / 平台应用" title="为真实交付而设计"><div className="platform-grid"><div className="phone-frame"><Poster index={4} /><span>1080 × 1440 / 信息流</span></div><div className="banner-frame"><Poster index={9} /><span>1920 × 640 / 横幅</span></div><div className="tile-frame"><Poster index={12} /><span>1080 × 1080 / 方图</span></div></div></CaseSection>
    <CaseSection id="puro-delivery" no="07" label="DELIVERY / 项目交付" title="跨尺寸保持一致表达"><div className="delivery-list">{['17 张竖版产品海报','电商平台首页横幅','产品分类与活动入口','社交媒体方形物料','可复用排版与图形规则'].map((x,i)=><div key={x}><span>0{i+1}</span><strong>{x}</strong><i>已交付 / DELIVERED</i></div>)}</div></CaseSection>
    <CaseSection id="puro-reflection" no="08" label="REFLECTION / 项目反思" title="限制也能创造丰富节奏"><blockquote>限制并不意味着视觉只能重复。通过构图、层级和图形关系的变化，单一颜色同样可以形成稳定而丰富的系列表达。</blockquote></CaseSection>
    <Link className="next-project" to="/#work"><span>返回首页 / BACK</span><strong>精选项目</strong><i>→</i></Link>
  </div>
}
