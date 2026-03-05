import React from "react";
import "../styles/Home.css";
import portraitImage from "../assets/images/Portrait.png";

function Home() {
  return (
    <section id="home" className="home-section">
      <div className="home-container hero-grid">
        <div className="home-left hero-text">
          <p className="hero-kicker">Hi, my name is</p>
          <h1 className="hero-name">Freiderich<br />Peralta</h1>
          <p className="hero-roles">Graphic Designer · Web Developer · Video Editing</p>
          <p className="hero-summary">
            Freiderich Peralta is a reliable and dedicated creative professional, known
            for his professionalism and design sense. He organizes projects efficiently,
            turning ideas into engaging visuals, videos, and web experiences that help
            businesses grow online.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="cta-btn">View Work</a>
            <a href="#contact" className="cta-btn ghost">Contact Me</a>
          </div>
          <div className="hero-badge">Creative &amp; Motivated Virtual Assistant</div>
        </div>
        <div className="home-right hero-portrait" aria-hidden="true">
          <div className="portrait-frame">
            <img src={portraitImage} alt="Portrait of Freiderich Peralta" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
