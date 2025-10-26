import React, { useState } from "react";
import "../styles/About.css";
import hobbyImage from "../assets/redesign N wow.jpg";

function About() {
  const [activeBox, setActiveBox] = useState(null);

  const handleBoxClick = (box) => setActiveBox(box);
  const closeOverlay = () => setActiveBox(null);

  return (
    <section id="about" className="about-section">
      <h2 className="about-title">About Me</h2>
      <p className="about-description">
        I love exploring creative ways to combine technology and design. 
        When I’m not coding, I experiment with digital art, animations, and solving challenging problems.
      </p>

      {/* Boxes */}
      <div className="about-boxes">
        <div className="about-box" onClick={() => handleBoxClick("hobbies")}>
          <h3>Hobbies</h3>
        </div>
        <div className="about-box" onClick={() => handleBoxClick("education")}>
          <h3>Education</h3>
        </div>
        <div className="about-box" onClick={() => handleBoxClick("passion")}>
          <h3>Passion</h3>
        </div>
      </div>

      {/* Full-screen overlay */}
{activeBox && (
  <div className="overlay-screen">
    <button className="close-btn" onClick={closeOverlay}>×</button>

    {activeBox === "hobbies" && (
      <div className="overlay-content hobbies-content">
        <h2>Hobbies</h2>
        <p>Here’s my digital art, animations, and games.</p>
        <div className="hobbies-gallery">
            <img src={hobbyImage} alt="Digital art" className="hobby-image" />
        </div>
      </div>
    )}

    {activeBox === "education" && (
      <div className="overlay-content education-content">
        <h2>Education</h2>
        <p>Courses, certifications, and achievements.</p>
      </div>
    )}

    {activeBox === "passion" && (
      <div className="overlay-content passion-content">
        <h2>Passion Projects</h2>
        <p>Web applications, UI/UX designs, and coding challenges.</p>
      </div>
    )}
  </div>
)}

    </section>
  );
}

export default About;
