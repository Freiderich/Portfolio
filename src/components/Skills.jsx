import React, { useEffect, useState, useRef } from "react";
import "../styles/Skills.css";

function Skills() {
  const skills = [
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "CSS & HTML", level: 95 },
    { name: "Node.js & Express", level: 70 },
    { name: "Databases (MySQL, MongoDB)", level: 75 },
    { name: "Git & GitHub", level: 80 },
  ];

  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="skills-section">
      <h1>My Skills</h1>
      <p className="intro">
        Here’s a quick overview of the technologies I work with:
      </p>

      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill-bar">
            <div className="skill-name">{skill.name}</div>
            <div className="progress">
              <div
                className="progress-fill"
                style={{ width: visible ? `${skill.level}%` : "0%" }}
              >
                <span className="percentage">{visible ? `${skill.level}%` : ""}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
