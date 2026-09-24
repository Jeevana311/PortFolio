import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
import SectionHeading from "./SectionHeading";
import { projects } from "../data/portfolioData";

function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="section-container">
        <SectionHeading
          eyebrow="Things I have built"
          title="Featured"
          accent="Projects"
        />

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article
              className="project-card reveal"
              key={project.title}
              style={{ "--delay": `${index * 70}ms` }}
            >
              <div className="project-top">
                <span className="project-icon">{project.icon}</span>

                <span className="project-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="tech-list">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </div>

              {(project.demo || project.github) && (
                <div className="project-actions">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="project-action"
                    >
                      <span>Live MVP</span>
                      <FaArrowUpRightFromSquare />
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="project-action"
                    >
                      <FaGithub />
                      <span>GitHub</span>
                      <FaArrowUpRightFromSquare />
                    </a>
                  )}
                </div>
              )}

              {!project.demo && !project.github && (
                <span className="project-arrow" aria-hidden="true">
                  <FaArrowUpRightFromSquare />
                </span>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

