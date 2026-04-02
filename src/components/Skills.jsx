import React from "react";
import "../styles/Skills.css";
function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-header">
        <h1>Tech &amp; Tools I Use</h1>
        <a
          className="skills-github"
          href="https://github.com/Freiderich"
          target="_blank"
          rel="noreferrer"
        >
          github.com/Freiderich
        </a>
      </div>

      <div className="skills-grid">
        <div className="skills-card">
          <h2>Backend / Servers / Databases</h2>
          <div className="skills-tags">
            <span>PHP</span>
            <span>MySQL</span>
            <span>Django</span>
            <span>Node.js</span>
          </div>
        </div>

        <div className="skills-card">
          <h2>Frontend Development / Styling</h2>
          <div className="skills-tags">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>Vite</span>
            <span>Tailwind</span>
          </div>
        </div>

        <div className="skills-card">
          <h2>Frameworks / Libraries</h2>
          <div className="skills-tags">
            <span>React</span>
            <span>Django</span>
            <span>Node.js</span>
            <span>Vercel</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;
