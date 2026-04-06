import Navbar from "./Navbar";
import React from "react";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";
import Contact from "./Contact";
import Footer from "./Footer";
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

      <Contact />

      <Footer />
    </main>
  );
}

export default Sections;
