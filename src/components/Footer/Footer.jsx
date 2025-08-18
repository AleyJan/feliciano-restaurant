import "./footer.css";

import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = ({ setCurrentPage }) => {
  return (
    <footer className="footer">
      {/* Top Section */}
      <div className="footer-top">
        <h2 className="footer-logo" onClick={() => setCurrentPage("home")}>
          Feliciano
        </h2>
        <nav className="footer-nav">
          <a onClick={() => setCurrentPage("home")} href="#home">
            Home
          </a>
          <a onClick={() => setCurrentPage("blog")} href="#blog">
            Blog
          </a>
          <a onClick={() => setCurrentPage("about")} href="#about">
            About
          </a>
          <a onClick={() => setCurrentPage("services")} href="#services">
            Services
          </a>
          <a onClick={() => setCurrentPage("contact")} href="#contact">
            Contact
          </a>
        </nav>
        <div className="footer-social">
          <a href="#">
            <FaFacebookF />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Feliciano. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
