import React from "react";
import "./skills.css";

function Skills() {
  return (
    <div className="home">
      {/* Left Box like Profile (About-style) */}
      <div className="home-profile">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2922/2922510.png"
          alt="Skills"
        />
        <h4>Web Development Skills</h4>
        <p className="text-justify">
          Proficient in modern front-end technologies including frameworks, tools, and libraries that ensure responsive, scalable, and efficient web applications.
        </p>
      </div>

      {/* Right Side – Skill Images */}
      <div className="home-info">
        <div className="skills-box">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            alt="React"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/62/HTML5_logo_and_wordmark.svg"
            alt="HTML5"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
            alt="CSS3"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
            alt="JavaScript"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png"
            alt="Redux"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
            alt="Tailwind CSS"
          />
        </div>
        <p className="skills-note">
          Always learning and exploring new tools in the front-end ecosystem.
        </p>
      </div>
    </div>
  );
}

export default Skills;     
