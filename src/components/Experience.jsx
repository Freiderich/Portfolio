import React from "react";
import "../styles/Experience.css";

function Experience() {
  const dictExperience = {
    role: "OJT Intern (ICT Operations)",
    company: "Department of Information and Communications Technology (DICT) - Pampanga",
    period: "Nov 24, 2025 - Jan 27, 2026",
    summary:
      "Started on Nov 24, 2025 and completed the OJT on Jan 27, 2026 with 320 total hours, focusing on ICT operations, equipment readiness, and a web-based Inventory Management System that streamlined tracking across multiple provincial offices.",
    details: [
      { label: "Supervisor", value: "Engr. Jonathan Raineir L. Solis (Provincial Head)" },
      { label: "Program", value: "BS Computer Engineering - CPE 401" },
      { label: "Office", value: "DICT Pampanga Provincial Office" },
    ],
    highlights: [
      "Built an Inventory Management System with authentication, search, and column filtering using PHP and MySQL.",
      "Managed laptop inventories, labeling, and device readiness for training sessions and exams.",
      "Supported digital communications with posters, recap videos, and presentation materials.",
      "Coordinated training logistics, documentation, and certificate distribution to participants.",
    ],
    tasks: [
      "IT support and equipment organization, including workstation setup and troubleshooting.",
      "NetAcad course setup, PowerPoint lesson creation, and completion of training modules.",
      "SPARK social media training outputs, forms, and webinar materials.",
    ],
    learnings: [
      "Applied PHP/MySQL concepts for CRUD, authentication, and system debugging.",
      "Used networking fundamentals for device inventory and readiness checks.",
      "Practiced content design workflows in Canva and presentation tools.",
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
        <div className="experience-heading">
          <h2>Experience</h2>
          <p className="experience-lead">
            A hands-on internship blending ICT operations, system development, and
            digital communications support.
          </p>
        </div>

        <div className="experience-grid">
          <article className="experience-card">
            <div className="experience-header">
              <div>
                <span className="experience-date">{dictExperience.period}</span>
                <h3>{dictExperience.role}</h3>
                <h4>{dictExperience.company}</h4>
              </div>
              <div className="experience-badges">
                {dictExperience.skills.map((skill) => (
                  <span key={skill} className="experience-badge">
                    {skill}
                  </span>
                ))}
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

            <div className="experience-columns">
              <div>
                <h5 className="experience-subtitle">Key Highlights</h5>
                <ul className="experience-list">
                  {dictExperience.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="experience-subtitle">Primary Tasks</h5>
                <ul className="experience-list">
                  {dictExperience.tasks.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="experience-learning">
              <h5 className="experience-subtitle">Learnings Applied</h5>
              <ul className="experience-list">
                {dictExperience.learnings.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>

          <aside className="experience-stats">
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
          </aside>
        </div>
      </div>
    </section>
  );
}

export default Experience;
