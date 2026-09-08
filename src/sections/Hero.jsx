import { siteContent } from '../data/siteContent'
import ThreeCircles from '../components/ThreeCircles'

export default function Hero() {
  const { hero } = siteContent

  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero-sheen" aria-hidden="true" />
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="eyebrow reveal">{hero.eyebrow}</p>
          <h1 className="hero-heading reveal" id="hero-heading" style={{ animationDelay: '80ms' }}>
            {hero.headline}
          </h1>
          <p className="hero-support reveal" style={{ animationDelay: '160ms' }}>
            {hero.supporting}
          </p>
          <div className="hero-actions reveal" style={{ animationDelay: '240ms' }}>
            <a href={hero.primaryCta.href} className="btn btn-primary">
              {hero.primaryCta.label}
            </a>
            <a href={hero.secondaryCta.href} className="btn btn-secondary">
              {hero.secondaryCta.label}
            </a>
          </div>
        </div>

        <div className="hero-aside" aria-hidden="true">
          <ThreeCircles size={112} animated className="hero-circles" />
          <span className="hero-aside-ring" />
        </div>
      </div>
    </section>
  )
}