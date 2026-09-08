import ProjectCover from './ProjectCover'

export default function ProjectCard({ project, index, active, onOpen, buttonRef }) {
  return (
    <button
      ref={buttonRef}
      type="button"
      className={`project-card${active ? ' is-active' : ''}`}
      onClick={onOpen}
      aria-expanded={active}
      aria-controls={active ? 'project-preview' : undefined}
    >
      <span className="project-card-cover">
        <ProjectCover project={project} label={index + 1} />
      </span>
      <span className="project-card-meta">
        <span className="project-card-cat">{project.category}</span>
        <span className="project-card-title">{project.title}</span>
        <span className="project-card-desc">{project.shortDescription}</span>
        <span className="project-card-cta">
          {active ? 'Showing overview' : 'Preview project'}
          <span aria-hidden="true">→</span>
        </span>
      </span>
    </button>
  )
}