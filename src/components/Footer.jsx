import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-wrap">
        <div className="footer-grid">
          <div className="footer-col">
            <span className="footer-kicker">Follow me</span>
            <a className="footer-link" href="https://www.instagram.com/peraltafreiderich/" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a className="footer-link" href="https://www.facebook.com/peraltafreiderich" target="_blank" rel="noreferrer">
              Facebook
            </a>
            <a className="footer-link" href="https://www.linkedin.com/in/freiderich-peralta-95bbaa371/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
          <div className="footer-col">
            <span className="footer-kicker">Current location</span>
            <span className="footer-text">Mabalacat City, Philippines</span>
            <span className="footer-text">Asia / GMT+8</span>
          </div>
          <div className="footer-col">
            <span className="footer-kicker">Phone</span>
            <span className="footer-text">+63 949-405-6725</span>
          </div>
          <div className="footer-col">
            <span className="footer-kicker">Email me</span>
            <a className="footer-link" href="mailto:freiderichperalta@gmail.com">
              freiderichperalta@gmail.com
            </a>
            <a className="footer-link" href="https://github.com/Freiderich" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="footer-link" href="/freiderich-peralta-resume.pdf" download>
              Download Resume
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>Freiderich Peralta · Built with care and curiosity.</span>
      </div>
    </footer>
  );
}

export default Footer;
