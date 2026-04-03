import React from "react";
import "../styles/Skills.css";
function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-header">
        <h1>Tech &amp; Tools I Use</h1>
      </div>
      <div className="skills-showcase">
        <div className="skills-intro">
          <h2>Toolset Overview</h2>
          <p>
            A focused stack for building reliable web products, from backend logic to polished interfaces and
            creative production.
          </p>
          <div className="skills-pill-row">
            <span>Full-stack</span>
            <span>UI/UX</span>
            <span>Prototyping</span>
            <span>Content</span>
          </div>
        </div>

        <div className="skills-cards">
          <div className="skills-card">
            <h3>Backend / Servers / Databases</h3>
            <p>Server-side logic, APIs, and structured data handling.</p>
            <div className="skills-tags">
              <span>PHP</span>
              <span>MySQL</span>
              <span>Django</span>
              <span>Node.js</span>
            </div>
          </div>

          <div className="skills-card">
            <h3>Frontend Development / Styling</h3>
            <p>Clean interfaces, responsive layouts, and modern UI systems.</p>
            <div className="skills-tags">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>Vite</span>
              <span>Tailwind</span>
            </div>
          </div>

          <div className="skills-card">
            <h3>Frameworks / Libraries</h3>
            <p>Scalable frameworks and platforms for faster delivery.</p>
            <div className="skills-tags">
              <span>React</span>
              <span>Django</span>
              <span>Node.js</span>
              <span>Vercel</span>
            </div>
          </div>

          <div className="skills-card">
            <h3>Design &amp; Video Tools</h3>
            <p>Visual design, prototyping, and editing workflows.</p>
            <div className="skills-tags">
              <span>Canva</span>
              <span>Framer</span>
              <span>Figma</span>
              <span>CapCut</span>
              <span>Filmora</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
