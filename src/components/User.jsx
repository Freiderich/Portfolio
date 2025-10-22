import { useEffect } from "react";
import "../styles/user.css";

function User({ username = "Student", onLogout }) {
  useEffect(() => {
    // Load Feather icons
    const script = document.createElement("script");
    script.src = "https://unpkg.com/feather-icons";
    script.onload = () => window.feather.replace();
    document.body.appendChild(script);

    // Animated navbar speedline
    const menuItems = document.querySelectorAll(".navbar__item");
    const speedline = document.createElement("div");
    speedline.classList.add("speedline");
    document.querySelector(".navbar__menu").appendChild(speedline);

    menuItems.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        const rect = item.getBoundingClientRect();
        const parentRect = item.parentElement.getBoundingClientRect();
        const offsetLeft = rect.left - parentRect.left;
        speedline.style.left = `${offsetLeft + rect.width / 2}px`;
      });
    });

    return () => {
      // Cleanup event listeners when component unmounts
      menuItems.forEach((item) =>
        item.removeEventListener("mouseenter", () => {})
      );
    };
  }, []);

  return (
    <div>
      {/* Header / Navbar */}
      <div className="header">
        <div className="header__logo">
          <strong>Portfolio</strong>
        </div>

        <nav className="navbar">
          <ul className="navbar__menu">
            <li className="navbar__item">
              <a href="#home" className="navbar__link">
                <i data-feather="home"></i>
                <span>Home</span>
              </a>
            </li>
            <li className="navbar__item">
              <a href="#about" className="navbar__link">
                <i data-feather="user"></i>
                <span>About</span>
              </a>
            </li>
            <li className="navbar__item">
              <a href="#projects" className="navbar__link">
                <i data-feather="code"></i>
                <span>Projects</span>
              </a>
            </li>
            <li className="navbar__item">
              <a href="#skills" className="navbar__link">
                <i data-feather="layers"></i>
                <span>Skills</span>
              </a>
            </li>
            <li className="navbar__item">
              <a href="#experience" className="navbar__link">
                <i data-feather="briefcase"></i>
                <span>Experience</span>
              </a>
            </li>
            <li className="navbar__item">
              <a href="#contact" className="navbar__link">
                <i data-feather="mail"></i>
                <span>Contact</span>
              </a>
            </li>
          </ul>

          <div className="navbar__auth">
            <span className="navbar__user">
              Welcome, <strong>{username}</strong>
            </span>
            <button className="btn btn-logout" onClick={onLogout}>
              Logout
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default User;