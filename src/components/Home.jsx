import React from "react";
import "../styles/home.css";

function TypingEffect() {
  const texts = ["A Web Developer", "A Creative Designer", "A Problem Solver"];
  const [displayedText, setDisplayedText] = React.useState("");
  const [textIndex, setTextIndex] = React.useState(0);
  const [charIndex, setCharIndex] = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
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
      <div className="home-content fade-in">
        <h1>
          Hi, I’m <span className="highlight">Freiderich</span>
        </h1>
        <h2 className="typed-text">
          {displayedText}
          <span className="cursor"></span>
        </h2>

        <div className="intro-text">
          <p>
            I'm passionate about building interactive and responsive web
            experiences using modern technologies. I enjoy transforming creative
            ideas into real-world projects that make an impact.
          </p>
          <p className="mission">
            My goal is to continuously learn, innovate, and contribute to
            meaningful digital solutions.
          </p>
        </div>

        <a href="#projects" className="cube-btn">
          Explore My Work
        </a>

        <div className="scroll-down">&#x21E3;</div>
      </div>
    </section>
  );
}

export default Home;
