import {
  faAngular,
  faAws,
  faBootstrap,
  faCss3Alt,
  faCuttlefish,
  faDocker,
  faGithub,
  faHtml5,
  faJava,
  faJsSquare,
  faMicrosoft,
  faNodeJs,
  faPhp,
  faPython,
  faReact,
  faSass,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

// Create a map of icon names to Font Awesome icons
const iconMap = {
  HTML5: faHtml5,
  CSS3: faCss3Alt,
  Angular: faAngular,
  TypeScript: faJsSquare,
  JavaScript: faJsSquare,
  Sass: faSass,
  Bootstrap: faBootstrap,
  React: faReact,
  NodeJS: faNodeJs,
  Python: faPython,
  Java: faJava,
  PHP: faPhp,
  MySQL: faDatabase,
  GitHub: faGithub,
  Docker: faDocker,
  AWS: faAws,
  CSharp: faMicrosoft,
  CPlusPlus: faCuttlefish,
};

const skillsData = [
  { name: "HTML5", icon: "HTML5" },
  { name: "CSS3", icon: "CSS3" },
  { name: "Angular", icon: "Angular" },
  { name: "TypeScript", icon: "TypeScript" },
  { name: "JavaScript", icon: "JavaScript" },
  { name: "Sass", icon: "Sass" },
  { name: "Bootstrap", icon: "Bootstrap" },
  { name: "C#", icon: "CSharp" },
  { name: "MySQL", icon: "MySQL" },
];

const SkillsSection = () => {
  const skillStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "10px",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#444",
    color: "#ffffff",
    fontSize: "20px",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    width: "80px",
    height: "80px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
  };

  const skillHoverStyle = {
    transform: "scale(1.1)",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.5)",
  };

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: "20px",
  };

  const iconStyle = {
    fontSize: "40px",
    textShadow:
      "2px 2px 4px rgba(0, 0, 0, 0.5), -1px -1px 2px rgba(255, 255, 255, 0.3)",
  };

  return (
    <section id="skills" style={{ backgroundColor: "#fff", padding: "40px 0" }}>
      <div className="col-md-12 text-center">
        <h1 className="section-title">
          <span className="text-dark">Skills</span>
        </h1>
      </div>
      <div style={containerStyle}>
        {skillsData.map((skill) => (
          <div
            key={skill.name}
            style={skillStyle}
            onMouseEnter={(e) =>
              Object.assign(e.currentTarget.style, skillHoverStyle)
            }
            onMouseLeave={(e) =>
              Object.assign(e.currentTarget.style, skillStyle)
            }
          >
            <FontAwesomeIcon icon={iconMap[skill.icon]} style={iconStyle} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
