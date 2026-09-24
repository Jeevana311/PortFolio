import {
  FaArrowRight,
  FaDownload,
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaStar,
} from "react-icons/fa6";

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-left reveal">
        <div className="availability">
          <FaStar />
          <span>Open to Internships</span>
          <span className="availability-dot" />
        </div>

        <p className="eyebrow">Hello, I&apos;m</p>

        <h1>
          Perikala
          <span>Jeevana Sruthi</span>
        </h1>

        <h2>Artificial Intelligence &amp; Data Science Student</h2>

        <p className="hero-description">
          Passionate about creating modern web applications, Machine Learning
          solutions, and innovative digital experiences that solve real-world
          problems.
        </p>

        <div className="hero-buttons">
          <a className="btn btn-primary" href="#projects">
            Explore My Work <FaArrowRight />
          </a>

          <a
            className="btn btn-secondary"
            href="/resume/Perikala Jeevana Sruthi  - CV.pdf"
            target="_blank"
            rel="noreferrer"
            download
          >
            Download Resume <FaDownload />
          </a>
        </div>

        <div className="social-links">
          <a
            href="https://github.com/Jeevana311"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/jeevanasruthiperikala"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="mailto:jeevanasruthiperikala@gmail.com"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      <div className="hero-right reveal reveal-delay">
        <div className="hero-ring">
          <div className="image-box">
            <img
              src="/images/photo_jeevana.jpeg"
              alt="Perikala Jeevana Sruthi"
            />
          </div>
        </div>

        <div className="floating-card floating-card-one">
          <strong>9.52</strong>
          <span>CGPA</span>
        </div>

        <div className="floating-card floating-card-two">
          <strong>AI &amp; DS</strong>
          <span>Student</span>
        </div>
      </div>

      <a href="#about" className="scroll-cue" aria-label="Scroll to About">
        <span>Scroll Down</span>
        <span className="scroll-line" />
      </a>
    </section>
  );
}

export default Hero;