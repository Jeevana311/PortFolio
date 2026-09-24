import { FaGraduationCap } from "react-icons/fa6";
import SectionHeading from "./SectionHeading";
import { education } from "../data/portfolioData";

function Education() {
  return (
    <section className="section" id="education">
      <div className="section-container">
        <SectionHeading
          eyebrow="Academic journey"
          title="My"
          accent="Education"
        />

        <div className="education-list">
          {education.map((item, index) => (
            <article
              className={`education-card reveal ${
                item.current ? "education-current" : ""
              }`}
              key={item.degree}
            >
              <div className="education-icon">
                <FaGraduationCap />
              </div>

              <div className="education-info">
                <span>0{index + 1}</span>
                <h3>{item.degree}</h3>
                <p>{item.institution}</p>
                <strong>{item.score}</strong>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;