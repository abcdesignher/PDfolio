import { siteContent } from '../data/siteContent'

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

        <div className="hero-aside">
          <img
            className="hero-portrait"
            src="/val1.png"
            alt="Portrait of Valerie Osuamkpe"
            width="680"
            height="850"
            fetchpriority="high"
          />
          <span className="hero-outline hero-outline-a" aria-hidden="true" />
          <span className="hero-outline hero-outline-b" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}