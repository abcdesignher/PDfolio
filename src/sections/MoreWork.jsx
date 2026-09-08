import { siteContent } from '../data/siteContent'
import ThreeCircles from '../components/ThreeCircles'

export default function MoreWork() {
  const { moreWork } = siteContent

  return (
    <section className="section morework-section" aria-labelledby="morework-heading">
      <div className="container morework-panel">
        <div className="morework-copy">
          <p className="eyebrow">{moreWork.eyebrow}</p>
          <h2 id="morework-heading" className="morework-heading">
            {moreWork.heading}
          </h2>
          <p className="lede">{moreWork.intro}</p>
          <a
            className="btn btn-secondary morework-cta"
            href={moreWork.cta.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {moreWork.cta.label} <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="morework-motif" aria-hidden="true">
          <ThreeCircles size={96} animated />
        </div>
      </div>
    </section>
  )
}