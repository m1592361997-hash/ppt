import { useEffect, useState, type ReactNode } from 'react'
import { Link, useLocation } from '../router'
import { portfolio } from '../data/portfolio'

function SmartLink({ to, children, onClick }: { to: string; children: ReactNode; onClick?: () => void }) {
  if (to.startsWith('/#')) {
    const id = to.slice(2)
    return <Link to={to} onClick={() => { onClick?.(); requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })) }}>{children}</Link>
  }
  return <Link to={to} onClick={onClick}>{children}</Link>
}

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24)
    update(); window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])
  useEffect(() => { setOpen(false); window.scrollTo({ top: 0, behavior: 'instant' }); }, [location.pathname])
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : ''; return () => { document.body.style.overflow = '' } }, [open])

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <a className="skip-link" href="#main">跳到主要内容</a>
      <div className="nav-shell">
        <Link className="brand" to="/" aria-label="MIA 首页">MIA<span>.</span></Link>
        <nav className="desktop-nav" aria-label="主导航">
          {portfolio.navigation.map((item) => item.external
            ? <a key={item.label} href={item.to}>{item.label}</a>
            : <SmartLink key={item.label} to={item.to}>{item.label}</SmartLink>)}
        </nav>
        <button className={`menu-button ${open ? 'is-open' : ''}`} aria-label={open ? '关闭菜单' : '打开菜单'} aria-expanded={open} onClick={() => setOpen(!open)}>
          <span /><span />
        </button>
      </div>
      <div className={`mobile-menu ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        <nav aria-label="移动端导航">
          {portfolio.navigation.map((item, index) => item.external
            ? <a key={item.label} href={item.to} onClick={() => setOpen(false)}><small>0{index + 1}</small>{item.label}</a>
            : <SmartLink key={item.label} to={item.to} onClick={() => setOpen(false)}><small>0{index + 1}</small>{item.label}</SmartLink>)}
        </nav>
      </div>
    </header>
  )
}

export function Footer() {
  return (
    <footer id="contact" className="contact-footer">
      <div className="mesh mesh-warm" aria-hidden="true" />
      <div className="container footer-content">
        <p className="eyebrow">CONTACT / 2026</p>
        <h2>LET&apos;S BUILD BETTER<br />AI EXPERIENCES.</h2>
        <p className="footer-cn">期待参与真实的 AI 产品迭代，<br />让复杂能力成为用户真正能够使用的体验。</p>
        <div className="button-row">
          <a className="button button-dark" href={`mailto:${portfolio.contact.email}`}>EMAIL ME <span>↗</span></a>
          {/* TODO: Replace with real resume PDF. */}
          <a className="button button-ghost" href={portfolio.contact.resumeUrl}>VIEW RESUME <span>↗</span></a>
        </div>
        <div className="footer-base"><span>MIA PORTFOLIO 2026</span><span>AI PRODUCT / PRESENTATION DESIGN</span></div>
      </div>
    </footer>
  )
}

export function BackToTop() {
  const [show, setShow] = useState(false)
  useEffect(() => { const fn = () => setShow(window.scrollY > 700); window.addEventListener('scroll', fn, { passive: true }); return () => window.removeEventListener('scroll', fn) }, [])
  return <button className={`back-top ${show ? 'show' : ''}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="返回顶部">↑</button>
}

export function Layout({ children }: { children: ReactNode }) {
  return <><Header /><main id="main" tabIndex={-1}>{children}</main><BackToTop /></>
}
