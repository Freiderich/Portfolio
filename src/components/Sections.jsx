import React from "react";

function Sections({ username }) {
  return (
    <main>
      <section id="home" className="section home-section">
        <h1>Hi, I’m {username}</h1>
        <p>Welcome to my portfolio. Scroll down to see my projects and skills!</p>
      </section>

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
