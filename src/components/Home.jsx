import React from "react";
import "../styles/Home.css";

function Home() {
  return (
    <section id="home" className="home-section">
      <div className="home-container">
        {/* LEFT COLUMN */}
        <div className="home-left">
          <h1>Freiderich Peralta</h1>
          <h2>Web Developer | Designer | Problem Solver</h2>
          <p>
           I’m a full-stack developer with great experience and
            a passion for coding and building clean, intuitive interfaces. 
            I love turning ideas into functional, user-friendly 
            web applications and having fun while crafting solutions that 
            people enjoy using.
          </p>
          <a href="#projects" className="cta-btn">Explore Projects</a>
        </div>

        {/* RIGHT COLUMN (optional) */}
        <div className="home-right">
          {/* You could add a minimal illustration or leave blank */}
        </div>
      </div>
    </section>
  );
}

export default Home;
