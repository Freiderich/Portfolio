import React, { useState } from "react";
import "../styles/Projects.css";

function Projects() {
  const [activeTab, setActiveTab] = useState("web");
  const webProjects = [
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

  const networkingProjects = [
    {
      title: "Network Lab Design & Troubleshooting",
      description:
        "Built small network topologies in Cisco Packet Tracer, validating routing, switching, and baseline security.",
      tech: ["Cisco Packet Tracer", "Routing", "Switching"],
    },
    {
      title: "VLANs, Trunks & Inter-VLAN Routing",
      description:
        "Configured VLAN segmentation, trunk links, and inter-VLAN routing scenarios across multiple lab activities.",
      tech: ["VLANs", "Trunking", "Inter-VLAN Routing"],
    },
    {
      title: "Routing Protocols & ACL Practice",
      description:
        "Implemented static and dynamic routing labs with access control lists for basic traffic filtering.",
      tech: ["Routing", "ACLs", "Network Security"],
    },
  ];

  const hardwareProjects = [
    {
      title: "Smart Door Alert System",
      description:
        "Built a Raspberry Pi 3-based alert system that detects activity and notifies users for added security.",
      tech: ["Raspberry Pi", "Python", "GPIO"],
    },
    {
      title: "Functional Battle Bot",
      description:
        "Designed and assembled an Arduino Uno robot with motor control and responsive movement logic.",
      tech: ["Arduino Uno", "C++", "Electronics"],
    },
  ];

  const tabs = [
    { id: "web", label: "Web Development", projects: webProjects },
    { id: "networking", label: "Networking & Security", projects: networkingProjects },
    { id: "hardware", label: "Hardware & Systems", projects: hardwareProjects },
  ];

  const activeTabData = tabs.find((tab) => tab.id === activeTab) ?? tabs[0];

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
            <span>S</span> 
          </h1>
        </div>

        <div className="projects-tabs" role="tablist" aria-label="Project categories">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.id}
              className={`projects-tab ${activeTab === tab.id ? "is-active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="projects-group">
          <h2 className="projects-group-title">{activeTabData.label}</h2>
          <div className="projects-list">
            {activeTabData.projects.map((proj, index) => (
              <div key={`${activeTabData.id}-${index}`} className="project-card">
                <h3>{proj.title}</h3>
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
        </div>
      </section>
    );

}

export default Projects;
