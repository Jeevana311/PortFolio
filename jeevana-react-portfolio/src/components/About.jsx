import { FaCode, FaBrain, FaRocket } from "react-icons/fa6";
import SectionHeading from "./SectionHeading";

const highlights = [
  {
    icon: <FaCode />,
    title: "Development",
    text: "Building responsive and practical web applications.",
  },
  {
    icon: <FaBrain />,
    title: "AI & Data",
    text: "Exploring Machine Learning and data-driven solutions.",
  },
  {
    icon: <FaRocket />,
    title: "Problem Solving",
    text: "Focused on turning real-world problems into useful products.",
  },
];

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="section-container">
        <SectionHeading
          eyebrow="Get to know me"
          title="About"
          accent="Me"
        />

        <div className="about-grid">
          <div className="about-copy reveal">
            <p className="lead">
              I am <strong>Perikala Jeevana Sruthi</strong>, an Artificial
              Intelligence &amp; Data Science student from Vishnu Institute of
              Technology.
            </p>

            <p>
              I enjoy building web applications, machine learning models, and
              solving real-world problems using technology. I am particularly
              interested in software development, Artificial Intelligence, and
              Data Science.
            </p>

            <p>
              I am hardworking, adaptable, and continuously improving my
              technical skills through projects, internships, and hands-on
              learning.
            </p>
          </div>

          <div className="highlight-grid">
            {highlights.map((item) => (
              <article className="highlight-card reveal" key={item.title}>
                <div className="highlight-icon">{item.icon}</div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;