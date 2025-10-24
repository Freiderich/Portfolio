import React, { useEffect, useState } from "react";
import "../styles/home.css";

function Home() {
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
  <section id="home" className="section home-section">
    <div className="overlay"></div>

    <div className="home-container fade-in">
      {/* LEFT SIDE */}
      <div className="home-left">
        <h1>
          Hi, I’m <span className="highlight">Freiderich</span>
        </h1>
        <h2 className="typed-text">
          {displayedText}
          <span className="cursor"></span>
        </h2>
      </div>

      {/* RIGHT SIDE */}
      <div className="home-right">
        <div className="intro-text">
          <p>
            I’ve always dreamed of creating digital experiences that inspire
            and connect people. Building interactive and responsive web
            applications allows me to turn ideas into something real — things
            that others can see, use, and enjoy.
          </p>
          <p className="mission">
            My goal is to keep learning, creating, and building meaningful
            digital solutions that make an impact.
          </p>
        </div>
      </div>
    </div>

    {/* CENTER BUTTON + ARROW */}
    <div className="home-bottom">
      <a href="#projects" className="cube-btn">
        Explore My Work
      </a>
      <div className="scroll-down">&#x21E3;</div>
    </div>
  </section>
  );
}

export default Home;
