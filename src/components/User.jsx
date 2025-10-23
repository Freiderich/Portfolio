import { useEffect } from "react";
import "../styles/User.css";

function User({ username = "Student" }) {
  useEffect(() => {
    // Load Feather icons
    const script = document.createElement("script");
    script.src = "https://unpkg.com/feather-icons";
    script.onload = () => window.feather.replace();
    document.body.appendChild(script);
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
        </nav>
      </div>

      {/* Main content container */}
      <div className="container">
        <section id="home">
          <h1>Welcome to My Portfolio</h1>
          <p>This is the Home section.</p>
        </section>

        <section id="about">
          <h2>About Me</h2>
          <p>Write something about yourself here.</p>
        </section>

        <section id="projects">
          <h2>Projects</h2>
          <p>Showcase your projects here.</p>
        </section>

        <section id="skills">
          <h2>Skills</h2>
          <p>List your skills here.</p>
        </section>

        <section id="experience">
          <h2>Experience</h2>
          <p>Your work experience or internships go here.</p>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <p>Provide contact information or a contact form.</p>
        </section>
      </div>
    </div>
  );
}

export default User;
