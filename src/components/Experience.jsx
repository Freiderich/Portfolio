import React from "react";
import "../styles/Experience.css";

function Experience() {
  const dictExperience = {
    role: "OJT Intern (ICT Operations)",
    company: "Department of Information and Communications Technology (DICT) - Pampanga",
    period: "Nov 24, 2025 - Jan 27, 2026",
    summary:
      "Completed 320 hours (Nov 24, 2025 - Jan 27, 2026) focused on ICT operations and an Inventory Management System that improved equipment tracking across multiple offices.",
    details: [
      { label: "Supervisor", value: "Engr. Jonathan Raineir L. Solis (Provincial Head)" },
      { label: "Program", value: "BS Computer Engineering - CPE 401" },
      { label: "Office", value: "DICT Pampanga Provincial Office" },
    ],
    highlights: [
      "Built an Inventory Management System with authentication, search, and filtering (PHP/MySQL).",
      "Handled equipment inventories, labeling, and readiness for trainings/exams.",
      "Delivered communications support: posters, recap videos, and certificates.",
    ],
    tasks: [
      "IT support, workstation setup, and troubleshooting.",
      "NetAcad course setup and training materials (PowerPoint).",
      "SPARK social media outputs and webinar materials.",
    ],
    learnings: [
      "Applied PHP/MySQL for CRUD, authentication, and debugging.",
      "Used networking fundamentals for device checks and readiness.",
      "Improved content design workflows in Canva and presentations.",
    ],
    takeaways: [
      "Strengthened web development, database management, and IT support skills.",
      "Improved communication, teamwork, and time management.",
    ],
    skills: [
      "PHP",
      "MySQL",
      "HTML/CSS",
      "Canva",
      "PowerPoint",
      "Hardware Management",
      "Documentation",
    ],
    stats: [
      { label: "Hours Completed", value: "320" },
      { label: "Offices Supported", value: "7+ (MySQL records)" },
      { label: "Key Features", value: "Auth, Search, Filters" },
    ],
  };

  return (
    <section id="experience" className="experience-section">
      <div className="experience-wrap">
        <header className="experience-heading">
          <h2>Experience</h2>
          <p className="experience-lead">
            A focused OJT that combined ICT operations, system development, and
            digital communications support.
          </p>
        </header>

        <div className="experience-dashboard">
          <div className="dashboard-main">
            <article className="dashboard-card intro">
              <div className="dashboard-header">
                <span className="experience-date">{dictExperience.period}</span>
                <div>
                  <h3>{dictExperience.role}</h3>
                  <h4>{dictExperience.company}</h4>
                </div>
              </div>

              <p className="experience-summary">{dictExperience.summary}</p>

              <div className="experience-details">
                {dictExperience.details.map((item) => (
                  <div key={item.label} className="detail-row">
                    <span className="detail-label">{item.label}</span>
                    <span className="detail-value">{item.value}</span>
                  </div>
                ))}
              </div>

              <div className="dashboard-badges">
                {dictExperience.skills.map((skill) => (
                  <span key={skill} className="experience-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </article>

            <div className="dashboard-panels">
              <div className="panel">
                <h5 className="experience-subtitle">Key Highlights</h5>
                <ul className="experience-list">
                  {dictExperience.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="panel">
                <h5 className="experience-subtitle">Primary Tasks</h5>
                <ul className="experience-list">
                  {dictExperience.tasks.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="panel">
                <h5 className="experience-subtitle">Learnings Applied</h5>
                <ul className="experience-list">
                  {dictExperience.learnings.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <aside className="dashboard-side">
            <div className="stat-grid">
              {dictExperience.stats.map((stat) => (
                <div key={stat.label} className="stat-card">
                  <span className="stat-label">{stat.label}</span>
                  <span className="stat-value">{stat.value}</span>
                </div>
              ))}
              <div className="stat-card highlight">
                <span className="stat-label">Impact</span>
                <span className="stat-value">Improved inventory visibility and training readiness</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default Experience;
