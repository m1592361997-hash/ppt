import { createContext, useContext, useEffect, useMemo, useState, type AnchorHTMLAttributes, type ReactNode } from 'react'

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
  return <a {...rest} href={`#${to}`} onClick={onClick}>{children}</a>
}
