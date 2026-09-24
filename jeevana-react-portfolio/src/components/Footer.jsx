import { FaArrowUp } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer">
      <div>
        <strong>JS<span>.</span></strong>
        <p>Designed &amp; built by Perikala Jeevana Sruthi.</p>
      </div>

      <a href="#top" className="back-top" aria-label="Back to top">
        <FaArrowUp />
      </a>

      <p className="copyright">
        © {new Date().getFullYear()} Perikala Jeevana Sruthi
      </p>
    </footer>
  );
}

export default Footer;