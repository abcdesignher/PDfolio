import { useEffect } from 'react'
import { siteContent } from '../data/siteContent'
import Hero from '../sections/Hero'
import SelectedWork from '../sections/SelectedWork'
import About from '../sections/About'
import Articles from '../sections/Articles'
import MoreWork from '../sections/MoreWork'
import Contact from '../sections/Contact'

export default function Home() {
  useEffect(() => {
    const seo = siteContent.seo
    document.title = seo.title
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', seo.description)
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute('content', seo.title)
  }, [])

  return (
    <>
      <Hero />
      <main id="main">
        <SelectedWork />
        <About />
        <Articles />
        <MoreWork />
        <Contact />
      </main>
    </>
  )
}