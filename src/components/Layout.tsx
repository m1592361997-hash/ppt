import { useEffect, useState, type ReactNode } from 'react'
import { Link, useLocation } from '../router'
import { portfolio } from '../data/portfolio'

function SmartLink({ to, children, onClick, className }: { to: string; children: ReactNode; onClick?: () => void; className?: string }) {
  if (to.startsWith('/#')) {
    return <Link className={className} to={to} onClick={onClick}>{children}</Link>
  }
  return <Link className={className} to={to} onClick={onClick}>{children}</Link>
}

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    let frame = 0
    const update = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight
        setScrolled(window.scrollY > 24)
        setProgress(scrollable > 0 ? Math.min(1, window.scrollY / scrollable) : 0)
      })
    }
    update(); window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update, { passive: true })
    return () => { cancelAnimationFrame(frame); window.removeEventListener('scroll', update); window.removeEventListener('resize', update) }
  }, [])
  useEffect(() => {
    setOpen(false)
    const anchor = location.pathname.split('#')[1]
    window.scrollTo({ top: 0, behavior: 'instant' })
    requestAnimationFrame(() => {
      document.getElementById('main')?.focus({ preventScroll: true })
      if (anchor) document.getElementById(anchor)?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })
    })
  }, [location.pathname])
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : ''; return () => { document.body.style.overflow = '' } }, [open])
  useEffect(() => {
    if (!open) return
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [open])

  const activeClass = (to: string) => {
    if (to === '/#work' && location.pathname.startsWith('/work/')) return 'is-active'
    if (to === '/about' && location.pathname === '/about') return 'is-active'
    return undefined
  }

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <a className="skip-link" href="#main">跳到主要内容</a>
      <div className="nav-shell">
        <Link className="brand" to="/" aria-label="MIA 首页">MIA<span>.</span></Link>
        <nav className="desktop-nav" aria-label="主导航">
          {portfolio.navigation.map((item) => item.external
            ? <a key={item.label} href={item.to}>{item.label}</a>
            : <SmartLink className={activeClass(item.to)} key={item.label} to={item.to}>{item.label}</SmartLink>)}
        </nav>
        <button className={`menu-button ${open ? 'is-open' : ''}`} aria-label={open ? '关闭菜单' : '打开菜单'} aria-expanded={open} onClick={() => setOpen(!open)}>
          <span /><span />
        </button>
      </div>
      <div className={`mobile-menu ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        <nav aria-label="移动端导航">
          {portfolio.navigation.map((item, index) => item.external
            ? <a key={item.label} href={item.to} onClick={() => setOpen(false)}><small>0{index + 1}</small>{item.label}</a>
            : <SmartLink className={activeClass(item.to)} key={item.label} to={item.to} onClick={() => setOpen(false)}><small>0{index + 1}</small>{item.label}</SmartLink>)}
        </nav>
      </div>
      <div className="scroll-progress" aria-hidden="true"><i style={{ transform: `scaleX(${progress})` }} /></div>
    </header>
  )
}

export function Footer() {
  return (
    <footer id="contact" className="contact-footer">
      <div className="mesh mesh-warm" aria-hidden="true" />
      <div className="container footer-content">
        <p className="eyebrow">CONTACT / 联系我 · 2026</p>
        <h2>一起创造更好的<br />AI 产品体验。</h2>
        <p className="footer-cn">期待参与真实的 AI 产品迭代，<br />让复杂能力成为用户真正能够使用的体验。</p>
        <div className="button-row">
          <a className="button button-dark" href={`mailto:${portfolio.contact.email}`}>发送邮件 EMAIL <span>↗</span></a>
          {/* TODO: Replace with real resume PDF. */}
          <a className="button button-ghost" href={portfolio.contact.resumeUrl}>查看简历 RESUME <span>↗</span></a>
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
  const location = useLocation()

  useEffect(() => {
    const motionDisabled = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const selector = [
      '.section-head',
      '.capability-card',
      '.project-card',
      '.skill-editorial article',
      '.process-line article',
      '.visual-list article',
      '.about-grid > *',
      '.meta-grid > div',
      '.case-content > h2',
      '.case-content > .case-lead',
    ].join(',')
    const elements = Array.from(document.querySelectorAll<HTMLElement>(selector))
    if (motionDisabled || !('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'))
      return
    }

    elements.forEach((element, index) => {
      element.classList.add('reveal-item')
      element.style.setProperty('--reveal-delay', `${(index % 4) * 45}ms`)
    })
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      })
    }, { threshold: 0.08, rootMargin: '0px 0px -7% 0px' })
    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [location.pathname])

  return <><Header /><main id="main" tabIndex={-1}>{children}</main><BackToTop /></>
}
