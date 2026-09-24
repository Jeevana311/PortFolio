import {
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaPhone,
  FaArrowRight,
} from "react-icons/fa6";
import SectionHeading from "./SectionHeading";

function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="section-container">
        <SectionHeading
          eyebrow="Let&apos;s connect"
          title="Contact"
          accent="Me"
        />

        <div className="contact-grid">
          <div className="contact-intro reveal">
            <span className="contact-badge">Have an opportunity?</span>
            <h3>Let&apos;s build something meaningful.</h3>
            <p>
              I&apos;m open to internships, software development opportunities,
              collaborations, and interesting projects.
            </p>

            <a
              className="btn btn-primary"
              href="mailto:jeevanasruthiperikala@gmail.com"
            >
              Send me an email <FaArrowRight />
            </a>
          </div>

          <div className="contact-details reveal">
            <a href="mailto:jeevanasruthiperikala@gmail.com">
              <span className="contact-icon"><FaEnvelope /></span>
              <span>
                <small>Email</small>
                jeevanasruthiperikala@gmail.com
              </span>
            </a>

            <a href="tel:+917601029950">
              <span className="contact-icon"><FaPhone /></span>
              <span>
                <small>Phone</small>
                +91 7601029950
              </span>
            </a>

            <a
              href="https://github.com/Jeevana311"
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-icon"><FaGithub /></span>
              <span>
                <small>GitHub</small>
                github.com/Jeevana311
              </span>
            </a>

            <a
              href="https://linkedin.com/in/jeevanasruthiperikala"
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-icon"><FaLinkedinIn /></span>
              <span>
                <small>LinkedIn</small>
                linkedin.com/in/jeevanasruthiperikala
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;