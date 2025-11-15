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
  const [activeBox, setActiveBox] = useState("hobbies");
  const [visibleImage, setVisibleImage] = useState(0);
  const [visibleVideo, setVisibleVideo] = useState(0);
  const [visibleGame, setVisibleGame] = useState(0);
  const [previewMedia, setPreviewMedia] = useState(null);
  const [isVideo, setIsVideo] = useState(false);

  const images = [hobbyImage, cynImage, markImage, alImage, huskImage, pitouImage];
  const videos = [blackVideo, doughVideo, energyVideo, loopVideo];
  const games = [redGames, teamGames, leftGames, tekkenGames];

  // Automatic cycling
  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleVideo((prev) => (prev + 1) % videos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [videos.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleGame((prev) => (prev + 1) % games.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [games.length]);

  return (
    <section id="about" className="about-section">
      <h2 className="about-title">About Me</h2>
      <p className="about-description">
        I’m passionate about blending technology and creativity to create interactive experiences.
      </p>

      <div className="about-main">
        {/* LEFT BOXES */}
        <div className="about-left">
          {["hobbies", "education", "passion"].map((box) => (
            <div
              key={box}
              className={`about-box ${activeBox === box ? "active" : ""}`}
              onClick={() => setActiveBox(box)}
            >
              <div className="inner-box">
                <h3>{box.charAt(0).toUpperCase() + box.slice(1)}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT CONTENT */}
        <div className="about-right">
          {/* HOBBIES */}
          {activeBox === "hobbies" && (
            <div className="hobbies-content hobby-box">
              <h2>Hobbies</h2>
              <p className="intro-text">
                I’m a digital artist who loves to express ideas visually, explore 3D animation, and unwind with games that spark creativity and storytelling.
              </p>

              <div className="hobbies-row">
                {/* DIGITAL ART */}
                <div className="hobby-column hobby-box">
                  <h3>Digital Art</h3>
                  <p>
                    I use an <strong>XP-Pen tablet</strong> in <strong>Krita</strong> to draw stylized characters and scenes, experimenting with color, light, and emotion.
                  </p>
                  <div className="fade-gallery images">
                    {images.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt={`Artwork ${index + 1}`}
                        className={`pair-fade-item ${index === visibleImage ? "visible" : ""}`}
                        onClick={() => {
                          if (index === visibleImage) {
                            setPreviewMedia(img);
                            setIsVideo(false);
                          }
                        }}
                        style={{ cursor: index === visibleImage ? "pointer" : "default" }}
                      />
                    ))}
                  </div>
                </div>

                {/* 3D ANIMATION */}
                <div className="hobby-column hobby-box">
                  <h3>3D Animation</h3>
                  <p>
                    I create models and short animations in <strong>Blender</strong>, learning lighting, motion, and design techniques that bring imagination to life.
                  </p>
                  <div className="fade-gallery videos">
                    {videos.map((video, index) => (
                      <video
                        key={index}
                        src={video}
                        className={`pair-fade-item ${index === visibleVideo ? "visible" : ""}`}
                        autoPlay
                        muted
                        loop
                        playsInline
                        onClick={() => {
                          if (index === visibleVideo) {
                            setPreviewMedia(video);
                            setIsVideo(true);
                          }
                        }}
                        style={{ cursor: index === visibleVideo ? "pointer" : "default" }}
                      />
                    ))}
                  </div>
                </div>

                {/* GAMING */}
                <div className="hobby-column hobby-box">
                  <h3>Gaming</h3>
                  <p>
                    I enjoy exploring immersive games on <strong>Steam</strong> — from epic adventures to competitive multiplayer, each inspires strategy, creativity, and storytelling.
                  </p>
                  <div className="fade-gallery images">
                    {games.map((game, index) => (
                      <img
                        key={index}
                        src={game}
                        alt={`Game ${index + 1}`}
                        className={`pair-fade-item ${index === visibleGame ? "visible" : ""}`}
                        onClick={() => {
                          if (index === visibleGame) {
                            setPreviewMedia(game);
                            setIsVideo(false);
                          }
                        }}
                        style={{ cursor: index === visibleGame ? "pointer" : "default" }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* EDUCATION TIMELINE */}
          {activeBox === "education" && (
            <div className="overlay-content education-box">
              <h2>Education</h2>
              <div className="education-timeline">
                <div className="edu-item">
                  <span className="edu-date">2009 - 2020</span>
                  <p className="edu-school">Philippine School Doha, Doha, Qatar</p>
                </div>
                <div className="edu-item">
                  <span className="edu-date">2020 - 2021</span>
                  <p className="edu-school">Holy Angel University, Angeles City, Pampanga (STEM Course)</p>
                </div>
                <div className="edu-item">
                  <span className="edu-date">2021 - Present</span>
                  <p className="edu-school">Holy Angel University, Angeles City, Pampanga (B.S. Computer Engineering)</p>
                </div>
              </div>
            </div>
          )}

          {/* PASSION */}
          {activeBox === "passion" && (
            <div className="overlay-content passion-box">
              <h2>Passion</h2>
              <p>
                I love creating interactive web applications that merge functionality and design.
                I’m also passionate about exploring AI, blockchain technologies, and digital storytelling.
              </p>
              <p>
                My interests extend to 3D modeling, animation, and game design, as I enjoy crafting experiences
                that combine creativity with technology.
              </p>
              <p>
                Beyond tech, I enjoy music production, sketching, and experimenting with new creative tools that enhance learning and innovation.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* OVERLAY FOR PREVIEW */}
      {previewMedia && (
        <div
          className="image-preview-overlay"
          onClick={() => setPreviewMedia(null)}
        >
          {isVideo ? (
            <video
              src={previewMedia}
              className="image-preview"
              autoPlay
              controls
              muted
              loop
            />
          ) : (
            <img src={previewMedia} alt="Preview" className="image-preview" />
          )}
        </div>
      )}
    </section>
  );
}

export default About;
