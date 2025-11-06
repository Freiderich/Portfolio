import React, { useEffect, useState } from "react";
import "../styles/Skills.css";

function Skills() {
  const skills = [
    { name: "JavaScript", level: 90, color: "#f7df1e" },
    { name: "React", level: 85, color: "#61dafb" },
    { name: "CSS & HTML", level: 95, color: "#e34c26" },
    { name: "Node.js", level: 70, color: "#3c873a" },
    { name: "Databases", level: 75, color: "#f29111" },
  ];

  const [animatedSkills, setAnimatedSkills] = useState(
    skills.map(() => 0)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedSkills((prev) =>
        prev.map((val, i) => (val < skills[i].level ? val + 1 : val))
      );
    }, 20);

    return () => clearInterval(interval);
  }, [skills]);

  return (
    <section id="skills" className="skills-section">
      <h1>My Skills</h1>
      <p className="intro">
        Technologies I work with and my proficiency levels.
      </p>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-circle">
            <svg viewBox="0 0 36 36">
              <path
                className="circle-bg"
                d="M18 2.0845
                   a 15.9155 15.9155 0 0 1 0 31.831
                   a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="circle"
                stroke={skill.color}
                strokeDasharray={`${animatedSkills[index]}, 100`}
                d="M18 2.0845
                   a 15.9155 15.9155 0 0 1 0 31.831
                   a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <text x="18" y="20.35" className="percentage">
                {animatedSkills[index]}%
              </text>
            </svg>
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
