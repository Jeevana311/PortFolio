import {
  FaJava,
  FaPython,
  FaCode,
  FaDatabase,
  FaWrench,
} from "react-icons/fa6";
import SectionHeading from "./SectionHeading";
import { skills } from "../data/portfolioData";

const icons = {
  java: <FaJava />,
  python: <FaPython />,
  web: <FaCode />,
  tools: <FaWrench />,
  database: <FaDatabase />,
};

function Skills() {
  return (
    <section className="section" id="skills">
      <div className="section-container">
        <SectionHeading
          eyebrow="My technical toolkit"
          title="My"
          accent="Skills"
        />

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <article
              className="skill-card reveal"
              key={skill.title}
              style={{ "--delay": `${index * 70}ms` }}
            >
              <div className="skill-icon">{icons[skill.icon]}</div>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;