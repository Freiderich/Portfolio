import React, { useState, useEffect } from "react";
import "../styles/About.css";
import hobbyImage from "../assets/images/redesign N wow.jpg";
import cynImage from "../assets/images/Cyn.jpg";
import markImage from "../assets/images/Invincible.jpg";
import alImage from "../assets/images/alastor.jpg";
import huskImage from "../assets/images/Husk.jpg";
import pitouImage from "../assets/images/Pitou.jpg";
import blackVideo from "../assets/videos/Blackhole.mp4";
import doughVideo from "../assets/videos/Doughnut hologram.mp4";
import energyVideo from "../assets/videos/Energy.mp4";
import loopVideo from "../assets/videos/Loop.mp4";

function About() {
  const [activeBox, setActiveBox] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [previewVideo, setPreviewVideo] = useState(null);
  const [visiblePair, setVisiblePair] = useState(0);

  const images = [
    hobbyImage,
    cynImage,
    markImage,
    alImage,
    huskImage,
    pitouImage,
  ];

  const videos = [blackVideo, doughVideo, energyVideo, loopVideo];

  // Auto fade between pairs
  useEffect(() => {
    const interval = setInterval(() => {
      setVisiblePair((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleBoxClick = (box) => setActiveBox(box);
  const closeOverlay = () => setActiveBox(null);
  const closePreviewImage = () => setPreviewImage(null);
  const closePreviewVideo = () => setPreviewVideo(null);

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

      {/* Full-screen overlay for sections */}
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
                {/* Digital Art */}
                <div className="hobby-column">
                  <h3>Digital Art</h3>
                  <p>
                    I use an <strong>XP-Pen tablet</strong> in{" "}
                    <strong>Krita</strong> to draw stylized characters and
                    scenes, experimenting with color, light, and emotion.
                  </p>

                  <div className="fade-gallery images">
                    {images.map((img, index) => {
                      const pairIndex = Math.floor(index / 2);
                      const isVisible = pairIndex === visiblePair;
                      const posClass = index % 2 === 0 ? "left" : "right";

                      return (
                        <img
                          key={index}
                          src={img}
                          alt={`Artwork ${index + 1}`}
                          className={`pair-fade-item ${posClass} ${
                            isVisible ? "visible" : ""
                          }`}
                          onClick={() => setPreviewImage(img)}
                        />
                      );
                    })}
                  </div>
                </div>

                {/* 3D Animation */}
                <div className="hobby-column">
                  <h3>3D Animation</h3>
                  <p>
                    I create models and short animations in{" "}
                    <strong>Blender</strong>, learning lighting, motion, and
                    design techniques that bring imagination to life.
                  </p>

                  <div className="fade-gallery videos">
                    {videos.map((video, index) => {
                      const pairIndex = Math.floor(index / 2);
                      const isVisible = pairIndex === visiblePair;
                      const posClass = index % 2 === 0 ? "top" : "bottom";

                      return (
                        <video
                          key={index}
                          src={video}
                          className={`pair-fade-item ${posClass} ${
                            isVisible ? "visible" : ""
                          }`}
                          autoPlay
                          muted
                          loop
                          playsInline
                          style={{
                            width: "100%",
                            height: "50%",
                            objectFit: "cover",
                            borderRadius: "1rem",
                            cursor: "pointer",
                          }}
                          onClick={() => setPreviewVideo(video)}
                        />
                      );
                    })}
                  </div>
                </div>

                {/* Gaming */}
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

      {/* Full-size Image Preview Overlay */}
      {previewImage && (
        <div
          className="image-preview-overlay"
          onClick={(e) => {
            if (e.target.classList.contains("image-preview-overlay"))
              closePreviewImage();
          }}
        >
          <img src={previewImage} alt="Preview" className="preview-image" />
          <button className="close-preview" onClick={closePreviewImage}>
            ×
          </button>
        </div>
      )}

      {/* Full-size Video Preview Overlay */}
      {previewVideo && (
        <div
          className="video-preview-overlay"
          onClick={(e) => {
            if (e.target.classList.contains("video-preview-overlay"))
              closePreviewVideo();
          }}
        >
          <video
            src={previewVideo}
            className="preview-video"
            controls
            autoPlay
          />
          <button
            className="close-video-preview"
            onClick={closePreviewVideo}
          >
            ×
          </button>
        </div>
      )}
    </section>
  );
}

export default About;
