import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import ProjectCover from './ProjectCover'

export default function ProjectPreview({ project, index, onClose }) {
  const panelRef = useRef(null)

  useEffect(() => {
    panelRef.current?.focus()
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <section
      ref={panelRef}
      id="project-preview"
      className="project-preview"
      tabIndex={-1}
      aria-label={`${project.title} overview`}
    >
      <div className="project-preview-close">
        <button
          type="button"
          className="btn btn-ghost"
          onClick={onClose}
          aria-label={`Close ${project.title} overview`}
        >
          Close
        </button>
      </div>

      <div className="project-preview-grid">
        <div className="project-preview-cover">
          <ProjectCover project={project} label={index + 1} eager />
        </div>
        <div className="project-preview-body">
          <p className="eyebrow">{project.category}</p>
          <h3 className="project-preview-title">{project.title}</h3>
          <p className="project-preview-desc">{project.shortDescription}</p>

          {project.role && (
            <p className="project-preview-role">Role: {project.role}</p>
          )}

          <div className="project-preview-actions">
            <Link
              className="btn btn-primary"
              to={`/work/${project.slug}`}
              onClick={onClose}
            >
              Read the full case study
            </Link>
            {project.behanceUrl && (
              <a
                className="btn btn-secondary"
                href={project.behanceUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on Behance
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}