import React from "react";
import "../styles/Projects.css";

function Projects() {
  const projects = [
    {
      title: "Fico Cafe Website",
      description:
        "Created a responsive, user-friendly website with groupmates to boost a local business’s online presence and clarify menus, locations, and brand story.",
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
        "Thesis project using AI to streamline registrar workflows with transparent tracking, facial recognition, and multilingual support.",
      tech: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "Node.js",
        "PostgreSQL",
        "Prisma",
        "TensorFlow.js",
        "face-api",
        "Hugging Face",
      ],
    },
    {
      title: "Python Web App with CSS UI",
      description:
        "Built a Python-based web app with frontend and backend support, focused on clean structure and consistent UI styling.",
      tech: ["Python", "HTML", "CSS"],
    },
    {
      title: "Inventory Management System",
      description:
        "Developed an inventory system during an internship at the Department of Information and Communications Technology using PHP and MySQL for data management.",
      tech: ["PHP", "MySQL"],
    },
  ];

      return (
      <section id="projects" className="projects-section">

        <div className="projects-header">
          <h1 className="projects-vertical-title" aria-label="My Projects">
            <span>P</span>
            <span>R</span>
            <span>O</span>
            <span>J</span>
            <span>E</span>
            <span>C</span>
            <span>T</span>
          </h1>
        </div>

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
