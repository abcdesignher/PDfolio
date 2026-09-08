import { useState } from 'react'
import { siteContent } from '../data/siteContent'

function Portrait() {
  const [failed, setFailed] = useState(false)
  const { about } = siteContent

  if (!failed) {
    return (
      <img
        className="about-portrait-img"
        src={about.portraitPath}
        alt={about.portraitAlt}
        loading="lazy"
        onError={() => setFailed(true)}
      />
    )
  }

  return (
    <div
      className="about-portrait-fallback"
      role="img"
      aria-label={about.portraitAlt}
    >
      <span className="about-portrait-fallback-mark">VO</span>
      <span className="about-portrait-fallback-ring" aria-hidden="true" />
    </div>
  )
}

export default function About() {
  const { about } = siteContent

  return (
    <section id="about" className="section about-section" aria-labelledby="about-heading">
      <div className="container about-grid">
        <div className="about-portrait reveal">
          <Portrait />
        </div>
        <div className="about-body">
          <p className="eyebrow reveal">{about.eyebrow}</p>
          <h2 id="about-heading" className="reveal" style={{ animationDelay: '60ms' }}>
            {about.heading}
          </h2>
          <div className="about-copy stack">
            {about.body.map((paragraph, i) => (
              <p key={i} className="reveal" style={{ animationDelay: `${120 + i * 60}ms` }}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}