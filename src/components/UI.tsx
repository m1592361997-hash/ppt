import type { ReactNode } from 'react'
import { Link } from '../router'

export function SectionHead({ label, title, text, invert = false }: { label: string; title: ReactNode; text?: string; invert?: boolean }) {
  return <header className={`section-head ${invert ? 'invert' : ''}`}><p className="eyebrow">{label}</p><h2>{title}</h2>{text && <p className="section-intro">{text}</p>}</header>
}

export function Tags({ items }: { items: string[] }) { return <div className="tags">{items.map(x => <span key={x}>{x}</span>)}</div> }

export function PlaceholderBadge({ children = 'PLACEHOLDER DATA · 待真实调研后替换' }: { children?: ReactNode }) {
  return <span className="placeholder-badge">{children}</span>
}

export function ScoreBars({ scores, light = false }: { scores: [string, number][]; light?: boolean }) {
  return <div className={`score-list ${light ? 'light' : ''}`}>{scores.map(([name, value]) => <div className="score-row" key={name}><div><span>{name}</span><strong>{value}</strong></div><div className="score-track" role="img" aria-label={`${name} ${value} 分`}><i style={{ '--score': `${value}%` } as React.CSSProperties} /></div></div>)}</div>
}

export function NextProject({ label, to }: { label: string; to: string }) {
  return <Link className="next-project" to={to}><span>NEXT PROJECT</span><strong>{label}</strong><i>→</i></Link>
}

export function CaseHero({ title, subtitle, claim, summary, tags, tone, children }: { title: string; subtitle: string[]; claim?: string; summary: string; tags: string[]; tone: string; children: ReactNode }) {
  return <section className={`case-hero tone-${tone}`}><div className="mesh" aria-hidden="true" /><div className="container case-hero-grid"><div className="case-copy"><p className="eyebrow">CASE STUDY / 2026</p><h1>{title}</h1><p className="case-subtitle">{subtitle.map(x => <span key={x}>{x}</span>)}</p>{claim && <p className="case-claim">{claim}</p>}<p className="case-summary">{summary}</p><Tags items={tags} /></div><div className="case-visual">{children}</div></div></section>
}

export function MetaGrid({ items }: { items: string[][] }) { return <div className="meta-grid">{items.map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}</div> }

export function CaseSection({ id, no, label, title, intro, children, dark = false }: { id: string; no: string; label: string; title: ReactNode; intro?: string; children: ReactNode; dark?: boolean }) {
  return <section id={id} className={`case-section ${dark ? 'case-dark' : ''}`}><div className="container case-layout"><aside><span>{no}</span><p>{label}</p></aside><div className="case-content"><h2>{title}</h2>{intro && <p className="case-lead">{intro}</p>}{children}</div></div></section>
}
