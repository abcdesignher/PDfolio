import { useState } from 'react'
import ThreeCircles from './ThreeCircles'

export function BrandVisual({ project, label }) {
  const { accent, accentSoft } = project.cover || {}
  const tint = accent || 'var(--accent-strong)'
  const soft = accentSoft || 'var(--bg-soft)'
  const index = String(label).padStart(2, '0')

  return (
    <div
      className="brand-visual"
      style={{ '--proj-accent': tint, '--proj-soft': soft }}
      aria-hidden="true"
    >
      <span className="brand-visual-base" />
      <span className="brand-visual-sheer">
        <ThreeCircles size={86} animated className="brand-visual-circles" />
      </span>
      <span className="brand-visual-note">
        <span className="brand-visual-index">{index}</span>
        <span className="brand-visual-line" />
      </span>
    </div>
  )
}

export default function ProjectCover({ project, label = '', eager = false }) {
  const [failed, setFailed] = useState(false)
  const src = project.coverImage || (project.images && project.images[0])

  if (src && !failed) {
    return (
      <img
        className="project-cover-img"
        src={src}
        alt=""
        loading={eager ? 'eager' : 'lazy'}
        onError={() => setFailed(true)}
      />
    )
  }

  return <BrandVisual project={project} label={label} />
}