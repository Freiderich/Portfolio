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
            I build professional, user-centered web applications that
            combine design and functionality. I focus on clean, maintainable
            code and responsive layouts.
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
