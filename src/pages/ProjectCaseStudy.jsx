import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getNextProject, getProjectBySlug } from '../data/projects'
import ProjectCover from '../components/ProjectCover'
import NotFound from './NotFound'

function Block({ heading, children }) {
  if (!children || (Array.isArray(children) && children.length === 0)) return null
  return (
    <section className="case-block">
      <h2>{heading}</h2>
      <div className="case-block-body">{children}</div>
    </section>
  )
}

export default function ProjectCaseStudy() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)
  const next = project && getNextProject(slug)

  useEffect(() => {
    if (project) {
      document.title = `${project.title} — Valerie Osuamkpe`
      const setMeta = (attr, sel) => {
        const el = document.querySelector(sel)
        if (el) el.setAttribute('content', attr)
      }
      setMeta(
        project.shortDescription,
        'meta[name="description"], meta[property="og:description"]',
      )
      setMeta(`${project.title} — Valerie Osuamkpe`, 'meta[property="og:title"]')
    }
  }, [project])

  if (!project) return <NotFound />

  return (
    <main id="main" className="case-study">
      <section className="container case-hero" aria-labelledby="case-title">
        <p className="eyebrow reveal">{project.category}</p>
        <h1 id="case-title" className="case-title reveal">
          {project.title}
        </h1>
        {project.shortDescription && (
          <p className="lede case-lede reveal">{project.shortDescription}</p>
        )}
        <div className="case-meta reveal">
          {project.role && <span>{project.role}</span>}
          {project.tools && project.tools.length > 0 && (
            <span className="case-tools">{project.tools.join(' · ')}</span>
          )}
        </div>
      </section>

      <section className="case-cover">
        <div className="case-cover-inner">
          <ProjectCover project={project} label="01" eager />
        </div>
      </section>

      <div className="container case-body">
        <Block heading="Problem">{project.problem}</Block>
        <Block heading="Context">{project.context}</Block>
        <Block heading="Role">{project.role}</Block>
        <Block heading="Goals">
          {project.goals && project.goals.length > 0 && (
            <ul className="case-list">
              {project.goals.map((g, i) => (
                <li key={i}>{g}</li>
              ))}
            </ul>
          )}
        </Block>
        <Block heading="Process">{project.process}</Block>
        <Block heading="Key decisions">
          {project.decisions && project.decisions.length > 0 && (
            <ol className="case-list">
              {project.decisions.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ol>
          )}
        </Block>
        <Block heading="Solution">{project.solution}</Block>
        <Block heading="Engineering considerations">{project.engineering}</Block>
        <Block heading="Outcome">{project.outcome}</Block>
        <Block heading="Lessons learned">{project.lessons}</Block>
      </div>

      <nav className="case-foot" aria-label="Project navigation">
        <div className="container case-foot-inner">
          <a href="/#work" className="btn btn-secondary">
            ← All work
          </a>
          {next && (
            <Link to={`/work/${next.slug}`} className="case-next">
              <span className="case-next-label">Next project</span>
              <span className="case-next-title">{next.title}</span>
            </Link>
          )}
        </div>
      </nav>
    </main>
  )
}