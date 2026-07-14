import { createContext, useContext, useEffect, useMemo, useState, type AnchorHTMLAttributes, type MouseEvent, type ReactNode } from 'react'

type Location = { pathname: string }
const RouterContext = createContext<Location>({ pathname: '/' })

function currentPath() {
  return window.location.hash.startsWith('#/') ? window.location.hash.slice(1) : '/'
}

export function RouterProvider({ children }: { children: ReactNode }) {
  const [pathname, setPathname] = useState(currentPath)
  useEffect(() => {
    const update = () => setPathname(currentPath())
    window.addEventListener('hashchange', update)
    return () => window.removeEventListener('hashchange', update)
  }, [])
  const value = useMemo(() => ({ pathname }), [pathname])
  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>
}

export function useLocation() { return useContext(RouterContext) }

export function Link({ to, children, onClick, ...rest }: AnchorHTMLAttributes<HTMLAnchorElement> & { to: string }) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event)
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || rest.target === '_blank') return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const transitionDocument = document as Document & { startViewTransition?: (callback: () => void) => unknown }
    if (!transitionDocument.startViewTransition || reducedMotion || window.location.hash === `#${to}`) return

    event.preventDefault()
    transitionDocument.startViewTransition.call(document, () => { window.location.hash = to })
  }

  return <a {...rest} href={`#${to}`} onClick={handleClick}>{children}</a>
}
