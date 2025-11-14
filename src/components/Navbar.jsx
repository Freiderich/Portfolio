import { useEffect } from "react";

function Navbar({ username, onLogout }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/feather-icons";
    script.onload = () => window.feather.replace();
    document.body.appendChild(script);

    const menuItems = document.querySelectorAll(".navbar__item");
    const menu = document.querySelector(".navbar__menu");
    if (!menu) return;

    const speedline = document.createElement("div");
    speedline.classList.add("speedline");
    menu.appendChild(speedline);

    const handleMouseEnter = (item) => {
      const rect = item.getBoundingClientRect();
      const parentRect = item.parentElement.getBoundingClientRect();
      speedline.style.left = `${rect.left - parentRect.left + rect.width / 2}px`;
    };

    menuItems.forEach((item) =>
      item.addEventListener("mouseenter", () => handleMouseEnter(item))
    );

    return () => {
      menuItems.forEach((item) =>
        item.removeEventListener("mouseenter", () => handleMouseEnter(item))
      );
    };
  }, []);

  return (
    <header className="header">
      <div className="header__logo">
        <strong>FP</strong>
      </div>

      <nav className="navbar">
        <ul className="navbar__menu">
          <li className="navbar__item">
            <a href="#home" className="navbar__link">
              <i data-feather="home"></i><span>Home</span>
            </a>
          </li>
          <li className="navbar__item">
            <a href="#about" className="navbar__link">
              <i data-feather="user"></i><span>About</span>
            </a>
          </li>
          <li className="navbar__item">
            <a href="#projects" className="navbar__link">
              <i data-feather="code"></i><span>Projects</span>
            </a>
          </li>
          <li className="navbar__item">
            <a href="#skills" className="navbar__link">
              <i data-feather="layers"></i><span>Skills</span>
            </a>
          </li>
          <li className="navbar__item">
            <a href="#experience" className="navbar__link">
              <i data-feather="briefcase"></i><span>Experience</span>
            </a>
          </li>
          <li className="navbar__item">
            <a href="#contact" className="navbar__link">
              <i data-feather="mail"></i><span>Contact</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
