import React, { useEffect, useState } from "react";
import "../styles/sections.css";
import "../styles/home.css";

function TypingEffect() {
  const texts = ["A Web Developer", "A Creative Designer", "A Problem Solver"];
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    const timeout = setTimeout(() => {
      setDisplayedText(
        isDeleting
          ? currentText.substring(0, charIndex - 1)
          : currentText.substring(0, charIndex + 1)
      );
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));

      if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <h2 className="typed-text">
      {displayedText}
      <span className="cursor"></span>
    </h2>
  );
}

function Sections({ username }) {
  return (
    <main>
      {/* HOME SECTION */}
      <section id="home" className="section home-section">
        <div className="overlay"></div>

        <div className="home-box fade-in">
          <h1>
            Hi, I’m <span className="highlight">{username}</span>
          </h1>
          <TypingEffect />

          <div className="intro-text">
            <p>
              I’m passionate about building interactive and responsive web experiences
              using modern technologies. I enjoy transforming creative ideas into
              real-world projects that make an impact.
            </p>
            <p className="mission">
              My goal is to continuously learn, innovate, and contribute to meaningful digital solutions.
            </p>
          </div>

          <a href="#projects" className="cube-btn">
            Explore My Work
          </a>
        </div>
      </section>

      {/* OTHER SECTIONS */}
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
