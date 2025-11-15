import Navbar from "./Navbar";
import React from "react";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";
import "../styles/Sections.css";

function Sections() {
  return (
    <main>
      <Navbar />
      
      <Home />
      
      <About />

      <Projects />

      <Skills />

      <Experience />

      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Contact info goes here.</p>
      </section>
    </main>
  );
}

export default Sections;
