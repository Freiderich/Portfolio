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

        {/* RIGHT SIDE: abstract shapes + rotating globe */}
        <div className="home-right">
          <div className="right-inner">
            {/* Abstract geometric composition (left of globe) */}
            <div className="geom-wrap" aria-hidden="true">
              <svg className="geom-svg" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid meet">
                
                <line x1="10" y1="40" x2="190" y2="40" className="g-line g-line-1" />
                <line x1="20" y1="80" x2="180" y2="80" className="g-line g-line-2" />
                <line x1="40" y1="130" x2="160" y2="130" className="g-line g-line-3" />

              
                <polygon points="30,160 70,100 110,160" className="g-tri g-tri-1" />
                <polygon points="120,45 155,95 85,95" className="g-tri-2" />


                <circle cx="150" cy="30" r="8" className="g-dot g-dot-1" />
                <circle cx="40" cy="30" r="6" className="g-dot g-dot-2" />
              </svg>
            </div>

            {/* Globe (right) */}
            <div className="globe-wrap" role="img" aria-label="Animated globe showing global work">
              <div className="globe-sphere">
                <div className="globe-core" />


                <svg className="globe-lines" viewBox="0 0 120 120" preserveAspectRatio="xMidYMid meet">
                  <g className="globe-group">
                    <ellipse className="g-lat g-lat-1" cx="60" cy="60" rx="45" ry="4" />
                    <ellipse className="g-lat g-lat-2" cx="60" cy="60" rx="35" ry="3" />
                    <ellipse className="g-lat g-lat-3" cx="60" cy="60" rx="25" ry="2.5" />
                    <circle cx="60" cy="60" r="46" className="g-ring" />
                    <circle cx="85" cy="35" r="1.6" className="g-glint" />
                    <circle cx="42" cy="28" r="1.4" className="g-glint" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
