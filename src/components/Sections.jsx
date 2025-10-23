import React from "react";
import "../styles/sections.css";
import "../styles/home.css";

function Sections({ username }) {
  return (
    <main>
      {/* HOME SECTION */}
      <section id="home" className="section home-section">
        <div className="home-content">
          <h1>
            Hi, I’m <span className="highlight">{username}</span>
          </h1>
          <p>
            Welcome to my portfolio. Scroll down to see my projects and skills!
          </p>
          <a href="#projects" className="cube-btn">Explore My Work</a>
        </div>
      </section>

      {/* OTHER SECTIONS */}
      <section id="about" className="section">
        <h2>About Me</h2>
        <p>This is the about section.</p>
      </section>

      <section id="projects" className="section">
        <h2>Projects</h2>
        <p>My projects will appear here.</p>
      </section>

      <section id="skills" className="section">
        <h2>Skills</h2>
        <p>My skills go here.</p>
      </section>

      <section id="experience" className="section">
        <h2>Experience</h2>
        <p>My experience goes here.</p>
      </section>

      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Contact info goes here.</p>
      </section>
    </main>
  );
}

export default Sections;
