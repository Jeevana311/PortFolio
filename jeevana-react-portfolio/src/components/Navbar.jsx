import { useEffect, useState } from "react";
import {
  FaBars,
  FaGithub,
  FaMoon,
  FaSun,
  FaTimes,
} from "react-icons/fa";

const links = [
  ["about", "About"],
  ["skills", "Skills"],
  ["projects", "Projects"],
  ["internships", "Internships"],
  ["education", "Education"],
  ["contact", "Contact"],
];

function Navbar({ theme, toggleTheme, activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`header ${scrolled ? "header-scrolled" : ""}`}>
      <a href="#top" className="logo" onClick={closeMenu} aria-label="Home">
        JS<span>.</span>
      </a>

      <nav className={`navbar ${menuOpen ? "navbar-open" : ""}`}>
        {links.map(([id, label]) => (
          <a
            key={id}
            href={`#${id}`}
            className={activeSection === id ? "active" : ""}
            onClick={closeMenu}
          >
            {label}
          </a>
        ))}
      </nav>

      <div className="nav-actions">
        <a
          className="nav-github"
          href="https://github.com/Jeevana311"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>

        <button
          className="theme-btn"
          onClick={toggleTheme}
          aria-label="Toggle theme"
          title={theme === "dark" ? "Light mode" : "Dark mode"}
        >
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </button>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;