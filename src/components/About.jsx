import React, { useState, useEffect } from "react";
import "../styles/About.css";

// 🎨 Images
import hobbyImage from "../assets/images/redesign N wow.jpg";
import cynImage from "../assets/images/Cyn.jpg";
import markImage from "../assets/images/Invincible.jpg";
import alImage from "../assets/images/alastor.jpg";
import huskImage from "../assets/images/husk.jpg";
import pitouImage from "../assets/images/Pitou.jpg";
import redGames from "../assets/images/Red Dead Redemption 2.png";
import teamGames from "../assets/images/TeamFortress2.jpg";
import leftGames from "../assets/images/left4dead2.jpg";
import tekkenGames from "../assets/images/Tekken-8.jpg";

// 🎥 Videos
import blackVideo from "../assets/videos/Blackhole.mp4";
import doughVideo from "../assets/videos/Doughnut hologram.mp4";
import energyVideo from "../assets/videos/Energy.mp4";
import loopVideo from "../assets/videos/Loop.mp4";

function About() {
  const [activeBox, setActiveBox] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [previewVideo, setPreviewVideo] = useState(null);

  // images + videos arrays
  const images = [hobbyImage, cynImage, markImage, alImage, huskImage, pitouImage];
  const games = [redGames, teamGames, leftGames, tekkenGames];
  const videos = [blackVideo, doughVideo, energyVideo, loopVideo];

  // current visible pair index
  const [visibleImagePair, setVisibleImagePair] = useState(0);
  const [visibleVideoPair, setVisibleVideoPair] = useState(0);
  const [visibleGamePair, setVisibleGamePair] = useState(0);

  // Fade images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleImagePair((prev) => (prev + 1) % Math.ceil(images.length / 2));
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Fade videos every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleVideoPair((prev) => (prev + 1) % Math.ceil(videos.length / 2));
    }, 5000);
    return () => clearInterval(interval);
  }, [videos.length]);

  // Fade games every 4 seconds (independent)
  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleGamePair((prev) => (prev + 1) % Math.ceil(games.length / 2));
    }, 4000);
    return () => clearInterval(interval);
  }, [games.length]);

  const handleBoxClick = (box) => setActiveBox(box);
  const closeOverlay = () => setActiveBox(null);
  const closePreview = () => {
    setPreviewImage(null);
    setPreviewVideo(null);
  };

  return (
    <section id="about" className="about-section">
      <h2 className="about-title">About Me</h2>
      <p className="about-description">
        I’m passionate about blending technology and creativity to create interactive experiences.
      </p>
      <p className="about-description">
        Beyond coding, I enjoy exploring digital art, 3D animation, and gaming, bringing imagination to life through design and motion.
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

          {/* Hobbies Section */}
          {activeBox === "hobbies" && (
            <div className="overlay-content hobbies-content">
              <h2>Hobbies</h2>
              <p className="intro-text">
                I’m a digital artist who loves to express ideas visually,
                explore 3D animation, and unwind with games that spark
                creativity and storytelling.
              </p>

              <div className="hobbies-row">
                {/* DIGITAL ART */}
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
                      const isVisible = pairIndex === visibleImagePair;
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

                {/* 3D ANIMATION */}
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
                      const isVisible = pairIndex === visibleVideoPair;
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
                          onClick={() => setPreviewVideo(video)}
                        />
                      );
                    })}
                  </div>
                </div>

                {/* GAMING */}
                <div className="hobby-column">
                  <h3>Gaming</h3>
                  <p>
                    I enjoy exploring immersive games on <strong>Steam</strong> —
                    from epic adventures to competitive multiplayer, each inspires
                    strategy, creativity, and storytelling.
                  </p>

                  <div className="fade-gallery images">
                    {games.map((game, index) => {
                      const pairIndex = Math.floor(index / 2);
                      const isVisible = pairIndex === visibleGamePair;
                      const posClass = index % 2 === 0 ? "left" : "right";

                      return (
                        <img
                          key={index}
                          src={game}
                          alt={`Game ${index + 1}`}
                          className={`pair-fade-item ${posClass} ${
                            isVisible ? "visible" : ""
                          }`}
                          onClick={() => setPreviewImage(game)}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* EDUCATION */}
            {activeBox === "education" && (
              <div className="overlay-content education-content">
                <h2>Education</h2>
                <div className="education-timeline">
                  {/* Philippine School Doha */}
                  <div className="education-item">
                    <span className="dot"></span>
                    <div className="education-info">
                      <h3>Philippine School Doha</h3>
                      <p>Doha, Qatar</p>
                      <p>2009 - 2020</p>
                      <p>Completed basic and secondary education.</p>
                    </div>
                  </div>

                  {/* Holy Angel University (Secondary STEM) */}
                  <div className="education-item">
                    <span className="dot"></span>
                    <div className="education-info">
                      <h3>Holy Angel University (Secondary - STEM)</h3>
                      <p>Angeles City, Pampanga</p>
                      <p>2020 - 2021</p>
                      <p>Focused on Science, Technology, Engineering, and Math courses.</p>
                    </div>
                  </div>

                  {/* Holy Angel University (Bachelor) */}
                  <div className="education-item current">
                    <span className="dot"></span>
                    <div className="education-info">
                      <h3>Bachelor of Science in Computer Engineering</h3>
                      <p>Holy Angel University, Angeles City, Pampanga</p>
                      <p>2021 - Present</p>
                      <p>Specializing in software development, design thinking, and innovative technologies.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}



          {/* PASSION */}
          {activeBox === "passion" && (
            <div className="overlay-content passion-content">
              <h2>Passion</h2>
              <p>
                I love creating <span className="highlight">web applications</span> that merge  
                <span className="highlight"> functionality</span> and <span className="highlight">design</span>.
              </p>
              <p>
                My passion lies in <span className="highlight">front-end React apps</span>, and <span className="highlight">bnpmack-end </span>
                experimenting with <span className="highlight">AI</span> and <span className="highlight">kiosk systems</span>.
              </p>
              <p>
                I aim to turn ideas into <span className="highlight">real, interactive experiences </span>  
                 that engage users and bring designs to life.
              </p>
            </div>
          )}
        </div>
      )}

      {/* IMAGE PREVIEW */}
      {previewImage && (
        <div className="image-preview-overlay" onClick={closePreview}>
          <img src={previewImage} alt="Preview" className="preview-image" />
          <button className="close-preview">×</button>
        </div>
      )}

      {/* VIDEO PREVIEW */}
      {previewVideo && (
        <div className="video-preview-overlay" onClick={closePreview}>
          <video
            src={previewVideo}
            className="preview-video"
            controls
            autoPlay
          />
          <button className="close-video-preview">×</button>
        </div>
      )}
    </section>
  );
}

export default About;
