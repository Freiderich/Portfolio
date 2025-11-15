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
  const [visibleImagePair, setVisibleImagePair] = useState(0);
  const [visibleVideoPair, setVisibleVideoPair] = useState(0);
  const [visibleGamePair, setVisibleGamePair] = useState(0);
  const [previewImage, setPreviewImage] = useState(null);
  const [isVideo, setIsVideo] = useState(false); 



  const images = [hobbyImage, cynImage, markImage, alImage, huskImage, pitouImage];
  const videos = [blackVideo, doughVideo, energyVideo, loopVideo];
  const games = [redGames, teamGames, leftGames, tekkenGames];

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleImagePair((prev) => (prev + 1) % Math.ceil(images.length / 2));
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleVideoPair((prev) => (prev + 1) % Math.ceil(videos.length / 2));
    }, 5000);
    return () => clearInterval(interval);
  }, [videos.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleGamePair((prev) => (prev + 1) % Math.ceil(games.length / 2));
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
                <div className="hobby-column hobby-box">
                  <h3>Digital Art</h3>
                  <p>
                    I use an <strong>XP-Pen tablet</strong> in <strong>Krita</strong> to draw stylized characters and scenes, experimenting with color, light, and emotion.
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
                          className={`pair-fade-item ${posClass} ${isVisible ? "visible" : ""}`}
                          onClick={() => setPreviewImage(img)}  // ← Add this line
                          style={{ cursor: "pointer" }}       // ← Optional: shows pointer on hover
                        />
                      );
                    })}
                  </div>
                </div>
                

                <div className="hobby-column hobby-box">
                  <h3>3D Animation</h3>
                  <p>
                    I create models and short animations in <strong>Blender</strong>, learning lighting, motion, and design techniques that bring imagination to life.
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
                          className={`pair-fade-item ${posClass} ${isVisible ? "visible" : ""}`}
                          autoPlay
                          muted
                          loop
                          playsInline
                          onClick={() => setPreviewImage(img)}  // ← Add this line
                          style={{ cursor: "pointer" }}       // ← Optional: shows pointer on hover
                        />
                      );
                    })}
                  </div>
                </div>

                <div className="hobby-column hobby-box">
                  <h3>Gaming</h3>
                  <p>
                    I enjoy exploring immersive games on <strong>Steam</strong> — from epic adventures to competitive multiplayer, each inspires strategy, creativity, and storytelling.
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
                          className={`pair-fade-item ${posClass} ${isVisible ? "visible" : ""}`}
                          onClick={() => setPreviewImage(img)}  // ← Add this line
                          style={{ cursor: "pointer" }}       // ← Optional: shows pointer on hover
                        />
                      );
                    })}
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
    </section>
  );
}

export default About;
