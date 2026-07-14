import { Layout } from './components/Layout'
import { useLocation } from './router'
import { HomePage } from './pages/HomePage'
import { WpsAiPptPage } from './pages/WpsAiPptPage'
import { CompetitiveAnalysisPage } from './pages/CompetitiveAnalysisPage'
import { PersonalPptPage } from './pages/PersonalPptPage'
import { PersonalDesignPage } from './pages/PersonalDesignPage'
import { AboutPage } from './pages/AboutPage'

export default function App() {
  const location = useLocation()
  const path = location.pathname.split('#')[0]
  const Page = ({
    '/': HomePage,
    '/work/wps-ai-ppt': WpsAiPptPage,
    '/work/ai-ppt-competitive-analysis': CompetitiveAnalysisPage,
    // Keep the previous published path working after project 02 was replaced.
    '/work/ppt-quality-harness': CompetitiveAnalysisPage,
    '/work/personal-ppt': PersonalPptPage,
    '/work/personal-design': PersonalDesignPage,
    // Keep the previous published path working after the project replacement.
    '/work/puro-coffee': PersonalPptPage,
    '/about': AboutPage,
  } as Record<string, typeof HomePage>)[path] ?? HomePage
  return <Layout><Page /></Layout>
}
