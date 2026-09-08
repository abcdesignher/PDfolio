import { useRef, useState } from 'react'
import { projects } from '../data/projects'
import { siteContent } from '../data/siteContent'
import ProjectCard from '../components/ProjectCard'
import ProjectPreview from '../components/ProjectPreview'

export default function SelectedWork() {
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const cardRefs = useRef([])
  const { selectedWork } = siteContent

  const selected = selectedIndex >= 0 ? projects[selectedIndex] : null

  function openProject(index) {
    setSelectedIndex(index)
  }

  function closePreview() {
    setSelectedIndex(-1)
    cardRefs.current[selectedIndex]?.focus()
  }

  return (
    <section id="work" className="section work-section" aria-labelledby="work-heading">
      <div className="section-head">
        <div>
          <p className="eyebrow">{selectedWork.eyebrow}</p>
          <h2 id="work-heading">{selectedWork.heading}</h2>
        </div>
        <p className="lede">{selectedWork.intro}</p>
      </div>

      <div className="container">
        <ul className="project-list" aria-label={selectedWork.label}>
          {projects.map((project, i) => (
            <li key={project.slug} className={selectedIndex === i ? 'is-active' : ''}>
              <ProjectCard
                project={project}
                index={i}
                active={selectedIndex === i}
                onOpen={() => openProject(i)}
                buttonRef={(el) => (cardRefs.current[i] = el)}
              />
            </li>
          ))}
        </ul>

        {selected && (
          <ProjectPreview
            project={selected}
            index={selectedIndex}
            onClose={closePreview}
          />
        )}
      </div>
    </section>
  )
}