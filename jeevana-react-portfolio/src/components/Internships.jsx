import { FaBriefcase } from "react-icons/fa6";
import SectionHeading from "./SectionHeading";
import { internships } from "../data/portfolioData";

function Internships() {
  return (
    <section className="section" id="internships">
      <div className="section-container">
        <SectionHeading
          eyebrow="Experience"
          title="My"
          accent="Internships"
        />

        <div className="timeline">
          {internships.map((internship, index) => (
            <article className="timeline-item reveal" key={internship.title}>
              <div className="timeline-marker">
                <FaBriefcase />
              </div>

              <div className="timeline-card">
                <span className="timeline-index">
                  0{index + 1} / EXPERIENCE
                </span>
                <h3>{internship.title}</h3>
                <h4>{internship.company}</h4>
                <p>{internship.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Internships;