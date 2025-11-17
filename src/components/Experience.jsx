import React from "react";
import "../styles/Experience.css";

function Experience() {
  const experiences = [
    {
      role: "Front-end Developer Intern",
      company: "Fico Café",
      period: "Jan 2025 – Mar 2025",
      description:
        "Worked on creating responsive web pages for menus, location info, and event promotions using HTML, CSS, and React. Collaborated with designers to improve UI/UX."
    },
    {
      role: "Web Development Project",
      company: "University Thesis Project",
      period: "Apr 2025 – Present",
      description:
        "Developed an AI-driven platform to streamline university registrar transactions. Implemented backend services using Node.js, Express, and PostgreSQL, and integrated frontend with React."
    },
    {
      role: "Freelance Developer",
      company: "Personal Projects",
      period: "2024 – Present",
      description:
        "Built several small websites and tools for clients, focusing on responsive design, performance, and clean code practices."
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <h2>Experience</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <h3>{exp.role}</h3>
            <h4>{exp.company} | {exp.period}</h4>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
