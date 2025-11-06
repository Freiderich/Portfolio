import React from "react";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import "../styles/Sections.css";

function Sections() {
  return (
    <main>
      <Home />
      
      <About />

      <Projects />

      <Skills />

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
