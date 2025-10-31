import React from "react";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import "../styles/Sections.css";

function Sections() {
  return (
    <main>
      <Home />
      
      <About />

      <Projects />

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
