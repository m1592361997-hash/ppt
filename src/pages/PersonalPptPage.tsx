import { CaseHero, CaseSection, MetaGrid, NextProject, Tags } from '../components/UI'
import { PptShowcaseHero } from '../components/Mockups'
import { portfolio } from '../data/portfolio'

const p = portfolio.personalPpt
type PptWork = (typeof p.works)[number]

function scrollToDeck(no: string) {
  document.getElementById(`ppt-work-${no}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function DeckShowcase({ work }: { work: PptWork }) {
  const previewSlides = work.slides.slice(1, 5)
  return <article className={`ppt-deck-showcase deck-tone-${work.tone}`} id={`ppt-work-${work.no}`}>
    <header className="ppt-deck-heading">
      <div className="ppt-deck-number"><span>作品</span><strong>{work.no}</strong></div>
      <div className="ppt-deck-title">
        <span>{work.category}</span>
        <h3>{work.title}</h3>
        <h4>{work.englishTitle}</h4>
      </div>
      <div className="ppt-deck-description">
        <p>{work.description}</p>
        <Tags items={work.tags} />
        <span className="ppt-page-total">{String(work.slides.length).padStart(2, '0')} PAGES</span>
      </div>
    </header>

    <div className="ppt-deck-board">
      <div className="ppt-board-caption"><span>PPT PRESENTATION</span><b>{work.no} / 06</b></div>
      <div className="ppt-cover-stage" aria-label={`${work.title}封面与页面预览`}>
        {previewSlides.map((slide, index) => <img className={`ppt-cover-preview preview-${index + 1}`} src={slide} alt="" aria-hidden="true" loading="lazy" decoding="async" key={slide} />)}
        <a className="ppt-main-cover" href={work.slides[0]} target="_blank" rel="noreferrer" aria-label={`查看${work.title}封面大图`}>
          <img src={work.slides[0]} alt={`${work.title}封面`} width="1920" height="1080" loading="lazy" decoding="async" />
          <span>封面 / COVER</span>
        </a>
      </div>

      <div className="ppt-slide-wall">
        {work.slides.slice(1).map((slide, index) => <figure key={slide}>
          <a href={slide} target="_blank" rel="noreferrer" aria-label={`查看${work.title}第 ${index + 2} 页大图`}>
            <img src={slide} alt={`${work.title}第 ${index + 2} 页`} width="1920" height="1080" loading="lazy" decoding="async" />
          </a>
          <figcaption><span>PAGE</span><b>{String(index + 2).padStart(2, '0')}</b></figcaption>
        </figure>)}
      </div>
    </div>
  </article>
}

export function PersonalPptPage() {
  return <div className="page-fade case-page personal-ppt-page real-ppt-page">
    <CaseHero title={p.title} subtitle={p.subtitle} summary={p.summary} tags={['演示设计', '内容结构', '视觉系统', '完整页面']} tone="warm">
      <PptShowcaseHero works={p.works} />
    </CaseHero>
    <section className="case-meta-wrap"><div className="container"><MetaGrid items={p.meta} /></div></section>

    <CaseSection id="ppt-overview" no="01" label="PROJECT OVERVIEW / 项目概览" title="六套作品，118 张完整页面" intro="不只挑选少量好看的页面，而是保留每套 PPT 从封面、章节、内容展开到结尾的完整顺序，呈现不同任务下的真实版式能力。">
      <div className="ppt-overview-stat real-ppt-overview"><strong>118</strong><div><span>COMPLETE PRESENTATION PAGES</span><p>六套作品涵盖课程案例研究、艺术党课项目、英文演讲、个人平面设计作品集与商业空间设计汇报。</p></div></div>
      <nav className="ppt-deck-index" aria-label="六套 PPT 作品快速导航">
        <span>快速查看 / JUMP TO</span>
        <div>{p.works.map(work => <button type="button" onClick={() => scrollToDeck(work.no)} key={work.no}><b>{work.no}</b><span>{work.title}</span><i>↓</i></button>)}</div>
      </nav>
    </CaseSection>

    <CaseSection id="ppt-works" no="02" label="FULL DECKS / 完整作品" title="按真实演示顺序展开" intro="每套作品先以主封面建立视觉印象，再按照原始页序进入双列页面墙。点击任意页面可单独查看大图。">
      <div className="ppt-deck-list">{p.works.map(work => <DeckShowcase work={work} key={work.no} />)}</div>
    </CaseSection>

    <CaseSection id="ppt-principles" no="03" label="DESIGN FOCUS / 设计关注点" title="不同内容，使用不同表达方式">
      <div className="ppt-principle-grid">{p.principles.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
    </CaseSection>

    <NextProject label="个人设计作品" to="/work/personal-design" />
  </div>
}
