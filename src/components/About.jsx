import React, { useState, useEffect } from "react";
import "../styles/About.css";
import hobbyImage from "../assets/redesign N wow.jpg";
import cynImage from "../assets/Cyn.jpg";
import markImage from "../assets/Invincible.jpg";
import alImage from "../assets/alastor.jpg";

function About() {
  const [activeBox, setActiveBox] = useState(null);
  const [previewImage, setPreviewImage] = useState(null); // for image preview
  const [visiblePair, setVisiblePair] = useState(0); // which pair of images is showing

  const images = [hobbyImage, cynImage, markImage, alImage];

  // Fade to next pair every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setVisiblePair((prev) => (prev + 1) % 2); // 0 -> 1 -> 0 loop
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleBoxClick = (box) => setActiveBox(box);
  const closeOverlay = () => setActiveBox(null);
  const closePreview = () => setPreviewImage(null);

  return (
    <section id="about" className="about-section">
      <h2 className="about-title">About Me</h2>
      <p className="about-description">
        I’m passionate about blending technology and creativity to build
        interactive experiences. Beyond coding, I explore art, animation, and
        gaming — expressing imagination through digital design and motion.
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
          <button className="close-btn" onClick={closeOverlay}>
            ×
          </button>

          {/* Hobbies */}
          {activeBox === "hobbies" && (
            <div className="overlay-content hobbies-content">
              <h2>Hobbies</h2>
              <p className="intro-text">
                I’m a digital artist who loves to express ideas visually,
                explore 3D animation, and unwind with games that spark
                creativity and storytelling.
              </p>

              <div className="hobbies-row">
                <div className="hobby-column">
                  <h3>Digital Art</h3>
                  <p>
                    I use an <strong>XP-Pen tablet</strong> in{" "}
                    <strong>Krita</strong> to draw stylized characters and
                    scenes, experimenting with color, light, and emotion.
                  </p>

                  {/* Fade Gallery (2 images visible at once) */}
                  <div className="fade-gallery pair-mode">
                   {images.map((img, index) => {
  const isVisible =
    (visiblePair === 0 && (index === 0 || index === 1)) ||
    (visiblePair === 1 && (index === 2 || index === 3));

  if (!isVisible) return null; // only render the visible pair

  const posClass = (index % 2 === 0) ? "left" : "right"; // first of pair = left, second = right

  return (
    <img
      key={index}
      src={img}
      alt={`Artwork ${index + 1}`}
      className={`pair-fade-item visible ${posClass}`}
      onClick={() => setPreviewImage(img)}
    />
  );
})}

                  </div>
                </div>

                <div className="hobby-column">
                  <h3>3D Animation</h3>
                  <p>
                    I create models and short animations in{" "}
                    <strong>Blender</strong>, learning lighting, motion, and
                    design techniques that bring imagination to life.
                  </p>
                </div>

                <div className="hobby-column">
                  <h3>Gaming</h3>
                  <p>
                    I play games on <strong>Steam</strong> — mostly indie and
                    story-driven titles that inspire creativity, design, and
                    strategy.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Education */}
          {activeBox === "education" && (
            <div className="overlay-content education-content">
              <h2>Education</h2>
              <p>
                Currently pursuing a{" "}
                <strong>Bachelor’s in Computer Engineering</strong> — focusing on
                software development, design thinking, and innovative
                technologies.
              </p>
              <p>
                I’ve explored fields like web development, data analysis, and
                emerging technologies, aiming to combine them into practical and
                creative solutions.
              </p>
            </div>
          )}

          {/* Passion */}
          {activeBox === "passion" && (
            <div className="overlay-content passion-content">
              <h2>Passion Projects</h2>
              <p>
                I love creating web applications that merge functionality and
                design. My passion lies in making interfaces that are not just
                usable but enjoyable.
              </p>
              <p>
                From front-end React apps to experimenting with AI and kiosk
                systems, I aim to turn ideas into real, interactive experiences.
              </p>
            </div>
          )}
        </div>
      )}

      {/* Full-size image preview overlay */}
      {previewImage && (
        <div className="image-preview-overlay" onClick={closePreview}>
          <img src={previewImage} alt="Preview" className="preview-image" />
          <button className="close-preview">×</button>
        </div>
      )}
    </section>
  );
}

export default About;
