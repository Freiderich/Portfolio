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
      <div className="about-header">
        <div className="about-title-row">
          <h2 className="about-title">About Me</h2>
          <span className="about-title-rule" aria-hidden="true"></span>
        </div>
        <p className="about-quote">"Design is the quiet confidence behind every great experience."</p>
      </div>

      <div className="about-panels">
        <div className="about-panel about-panel-left">
          <div className="overlay-content passion-box">
            <h2>Passion</h2>
            <p>
              I enjoy building interactive web applications that combine usability, motion, and clean architecture.
              I explore AI-driven experiences and systems that make processes simpler and more transparent.
            </p>
            <p>
              My interests include 3D modeling, animation, and game design, which sharpen my eye for motion
              and interface storytelling.
            </p>
            <p>
              Beyond tech, I experiment with music production and illustration to keep my creative process sharp.
            </p>
          </div>
          <div className="about-subbox">
            <h3>Certificates</h3>
            <ul className="about-list">
              <li><span className="about-item">Junior Cybersecurity Analyst Career Path</span><span className="about-year">2025</span></li>
              <li><span className="about-item">Introduction to Data Science</span><span className="about-year">2025</span></li>
              <li><span className="about-item">Using Computer and Mobile Devices</span><span className="about-year">2025</span></li>
              <li><span className="about-item">Introduction to Modern AI</span><span className="about-year">2025</span></li>
              <li><span className="about-item">SPARK Social Media Marketing Certificate of Completion</span><span className="about-year">2025</span></li>
              <li><span className="about-item">AI for Digital Novice MSMEs</span><span className="about-year">2025</span></li>
              <li><span className="about-item">Introduction to IoT and Digital Transformation</span><span className="about-year">2026</span></li>
              <li><span className="about-item">Introduction to Data Science</span><span className="about-year">2026</span></li>
            </ul>
          </div>
        </div>

        <div className="about-panel about-panel-middle">
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
          <div className="about-subbox">
            <h3>Seminars</h3>
            <ul className="about-list">
              <li><span className="about-item">ICpEP.se Region 3 Webinar 1 - Future Forward</span><span className="about-year">2025</span></li>
              <li><span className="about-item">ICpEP Region 3 Webinar 2 - How Data Analytics Transforms Strategy</span><span className="about-year">2025</span></li>
              <li><span className="about-item">ICpEP Region 3 Webinar 3 - Empowering Global Community with Cloud-Network Innovation</span><span className="about-year">2026</span></li>
              <li><span className="about-item">Professional Development Workshop Seminar</span><span className="about-year">2026</span></li>
              <li><span className="about-item">Cisco Student Regional Congress 2026</span><span className="about-year">2026</span></li>
              <li><span className="about-item">ICpEP Region 3 Webinar 4 - Educating Humans for Robotic World</span><span className="about-year">2026</span></li>
              <li><span className="about-item">Professional Development Workshop</span><span className="about-year">2026</span></li>
              <li><span className="about-item">Orientation on SSS, PAG-IBIG, and PhilHealth</span><span className="about-year">2026</span></li>
              <li><span className="about-item">Labor Education for Graduating Students (LEGS)</span><span className="about-year">2026</span></li>
            </ul>
          </div>
        </div>

        <div className="about-panel about-panel-right">
          <div className="hobbies-content hobby-box">
            <h2>Hobbies</h2>
            <p className="intro-text">
              Outside of development, I explore visual storytelling through digital art, 3D animation, and games that inspire design ideas.
            </p>

            <div className="hobbies-row">
              <div className="hobby-column hobby-box">
                <h3>Digital Art</h3>
                <p>
                  I use an <strong>XP-Pen tablet</strong> in <strong>Krita</strong> to create stylized character work, focusing on color, lighting, and mood.
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

              <div className="hobby-column hobby-box">
                <h3>3D Animation</h3>
                <p>
                  I create models and short animations in <strong>Blender</strong>, practicing lighting, motion, and visual composition.
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

              <div className="hobby-column hobby-box">
                <h3>Gaming</h3>
                <p>
                  I enjoy immersive games on <strong>Steam</strong> for their pacing, interaction design, and storytelling.
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
