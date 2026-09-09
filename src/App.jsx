import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './hooks/useScrollToTop'
import CursorFX from './components/CursorFX'
import Home from './pages/Home'
import ProjectCaseStudy from './pages/ProjectCaseStudy'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/:slug" element={<ProjectCaseStudy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <CursorFX />
    </BrowserRouter>
  )
}