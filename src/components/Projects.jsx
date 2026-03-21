import React from "react";
import "../styles/Projects.css";

function Projects() {
  const projects = [
    {
      title: "Fico Cafe Website",
      description:
        "Collaborated on a responsive marketing site that clarifies menus, locations, and brand voice while improving the cafe’s online visibility.",
      tech: ["React", "CSS", "JavaScript"],
    },
    {
      title: "Docker-based CRUD Application",
      description:
        "Built a containerized CRUD system with clean API endpoints and repeatable deployment workflows using Docker.",
      tech: ["Docker", "Node.js", "MongoDB"],
    },
    {
      title: "AI Platform for Registrar Transactions",
      description:
        "Thesis platform that streamlines registrar workflows with AI-driven assistance, facial recognition, and multilingual support.",
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
        "Developed a Python web app with full-stack support and a consistent, polished UI.",
      tech: ["Python", "HTML", "CSS"],
    },
    {
      title: "Inventory Management System",
      description:
        "Delivered an inventory management system during a DICT internship, using PHP and MySQL for reliable data processing.",
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
