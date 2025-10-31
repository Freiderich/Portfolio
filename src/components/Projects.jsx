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
      <h1>My Projects</h1>
      <p className="intro">
        Here are some of the works I’ve done — from class projects to personal
        experiments!
      </p>

      <div className="projects-list">
        {projects.map((proj, index) => (
          <div key={index} className="project-card">
            <div className="project-info">
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
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
