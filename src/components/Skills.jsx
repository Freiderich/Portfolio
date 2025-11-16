import React from "react";
import "../styles/Skills.css";

function Skills() {
  const skills = {
    frontend: {
      description:
        "I code things from scratch and gracefully bring ideas to life in the browser, paying maximal attention to design and usability.",
      technologies: ["HTML", "CSS", "JavaScript", "React"],
      tools: ["Bootstrap", "AJAX", "GitHub", "VS Code"],
    },
    backend: {
      description:
        "I develop server-side logic, APIs, and database management systems to support applications efficiently.",
      technologies: ["Node.js", "Express", "MySQL", "PostgreSQL"],
      tools: ["Docker", "Git", "Postman"],
    },
  };

  return (
    <section id="skills" className="skills-section">
      <h1>Skills</h1>

      {/* Solid rectangle behind both boxes */}
      <div className="skills-rectangle"></div>

      <div className="skills-container">
        {/* Frontend */}
        <div className="skills-box">
          <h2>Front-end Developer</h2>
          <p>{skills.frontend.description}</p>
          <div className="skills-list">
            <h3>Technologies:</h3>
            <ul>
              {skills.frontend.technologies.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
            <h3>My Tools:</h3>
            <ul>
              {skills.frontend.tools.map((tool, i) => (
                <li key={i}>{tool}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Backend */}
        <div className="skills-box">
          <h2>Back-end Developer</h2>
          <p>{skills.backend.description}</p>
          <div className="skills-list">
            <h3>Technologies:</h3>
            <ul>
              {skills.backend.technologies.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
            <h3>My Tools:</h3>
            <ul>
              {skills.backend.tools.map((tool, i) => (
                <li key={i}>{tool}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
