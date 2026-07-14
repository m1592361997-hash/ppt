import { Layout } from './components/Layout'
import { useLocation } from './router'
import { HomePage } from './pages/HomePage'
import { WpsAiPptPage } from './pages/WpsAiPptPage'
import { HarnessPage } from './pages/HarnessPage'
import { PersonalPptPage } from './pages/PersonalPptPage'
import { AboutPage } from './pages/AboutPage'

export default function App() {
  const location = useLocation()
  const path = location.pathname.split('#')[0]
  const Page = ({
    '/': HomePage,
    '/work/wps-ai-ppt': WpsAiPptPage,
    '/work/ppt-quality-harness': HarnessPage,
    '/work/personal-ppt': PersonalPptPage,
    // Keep the previous published path working after the project replacement.
    '/work/puro-coffee': PersonalPptPage,
    '/about': AboutPage,
  } as Record<string, typeof HomePage>)[path] ?? HomePage
  return <Layout><Page /></Layout>
}
