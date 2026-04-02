import { useEffect } from "react";
import "../styles/Navbar.css";

function Navbar({ username, onLogout }) {
  useEffect(() => {
    return undefined;
  }, []);

  return (
    <header className="header">
      <div className="header__logo">FP</div>
      <nav className="navbar">
        <ul className="navbar__menu">
          <li className="navbar__item">
            <a href="#home" className="navbar__link">
              <span>Home</span>
            </a>
          </li>
          <li className="navbar__item">
            <a href="#about" className="navbar__link">
              <span>About</span>
            </a>
          </li>
          <li className="navbar__item">
            <a href="#projects" className="navbar__link">
              <span>Projects</span>
            </a>
          </li>
          <li className="navbar__item">
            <a href="#skills" className="navbar__link">
              <span>Skills</span>
            </a>
          </li>
          <li className="navbar__item">
            <a href="#experience" className="navbar__link">
              <span>Experience</span>
            </a>
          </li>
          <li className="navbar__item">
            <a href="#contact" className="navbar__link">
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
