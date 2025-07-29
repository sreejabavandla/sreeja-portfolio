import './Skills.css';
import { FaReact, FaPython, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaLinux } from 'react-icons/fa';
import { SiJavascript, SiMongodb, SiExpress, SiCplusplus, SiMysql } from 'react-icons/si';

function Skills() {
  const skills = {
    "languages": [
      { name: "javascript", icon: <SiJavascript /> },
      { name: "python", icon: <FaPython /> },
    ],
    "frontend": [
      { name: "react", icon: <FaReact /> },
      { name: "html", icon: <FaHtml5 /> },
      { name: "css", icon: <FaCss3Alt /> },
    ],
    "backend & db": [
      { name: "node.js", icon: <FaNodeJs /> },
      { name: "express", icon: <SiExpress /> },
      { name: "mongodb", icon: <SiMongodb /> },
      { name: "sql", icon: <SiMysql /> },
    ],
    "tools & os": [
      { name: "git", icon: <FaGitAlt /> },
      { name: "linux", icon: <FaLinux /> },
    ]
  };

  return (
    <section className="skills" id="skills">
      <h2>skills</h2>
      <div className="skill-wrapper">
        {Object.entries(skills).map(([category, items]) => (
          <div className="skill-block" key={category}>
            <h3>{category}</h3>
            <div className="skill-list">
              {items.map(skill => (
                <div className="skill" key={skill.name}>
                  <div className="icon">{skill.icon}</div>
                  <p>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
