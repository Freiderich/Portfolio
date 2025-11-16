import React from "react";
import "../styles/Projects.css";

function Projects() {
  const projects = [
    {
      title: "Fico Café Website",
      description:
        "A modern website designed for Fico Café in Angeles City, showcasing menus, locations, and ambiance with responsive web design principles.",
      tech: ["React", "CSS", "JavaScript"],
    },
    {
      title: "Docker-based CRUD Application",
      description:
        "A containerized CRUD web app demonstrating backend integration and deployment using Docker and Node.js.",
      tech: ["Docker", "Node.js", "MongoDB"],
    },
    {
      title: "AI-Driven Platform for University Registrar’s Transactions",
      description:
        "Our ongoing thesis project that integrates AI to streamline university registrar processes, ensuring transparency and efficiency.",
      tech: ["AI", "React", "Node.js"],
    },
  ];

      return (
      <section id="projects" className="projects-section">

        {/* Clean separator line */}
        <div className="section-divider"></div>

        {/* Header with icon */}
        <div className="projects-header">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1828/1828911.png"
            alt="projects icon"
            className="projects-icon"
          />
          <h1>My Projects</h1>
        </div>

        <p className="intro">
          Below are examples of the work I’ve created, academic, personal, and research based.
        </p>

        <div className="projects-list">
          {projects.map((proj, index) => (
            <div key={index} className="project-card">
              <h2>{proj.title}</h2>
              <p>{proj.description}</p>

              <div className="tech-stack">
                {proj.tech.map((tech, i) => (
                  <span key={i} className="tech-item">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    );

}

export default Projects;
