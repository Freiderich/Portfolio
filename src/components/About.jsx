import React from "react";
import "../styles/About.css";

function About() {
  return (
    <section id="about" className="section about-section">
      <h2>About Me</h2>
      <div className="about-cards">
        <div className="about-card">
          <p><strong>Education:</strong> 4th year Computer Engineering student at Holy Angel University</p>
        </div>
        <div className="about-card">
          <p><strong>Hobbies:</strong> Self-studying arts and making animations when not programming</p>
        </div>
        <div className="about-card">
          <p><strong>Passion:</strong> Building intuitive and responsive web applications</p>
        </div>
      </div>
    </section>
  );
}

export default About;
