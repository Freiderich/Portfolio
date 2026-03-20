import React from "react";
import "../styles/Projects.css";

function Projects() {
  const projects = [
    {
      title: "Fico Cafe Website",
      description:
        "Designed and built a responsive cafe site that highlights menus, locations, and brand personality with clean UX and quick navigation.",
      tech: ["React", "CSS", "JavaScript"],
    },
    {
      title: "Docker-based CRUD Application",
      description:
        "Containerized full-stack CRUD app with robust API endpoints and deployment-focused workflows using Docker.",
      tech: ["Docker", "Node.js", "MongoDB"],
    },
    {
      title: "AI Platform for Registrar Transactions",
      description:
        "Thesis project using AI to streamline registrar workflows with transparent tracking and faster approvals.",
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
