
import React from "react";
import { FaPython, FaJava, FaHtml5, FaCss3Alt, FaJs, FaDatabase, FaNodeJs, FaReact, FaGitAlt, FaGithub, FaLinux } from "react-icons/fa";
import "../styles/Skills.css"; 

const Skills = () => {
  return (
    <section className="skills" id="Skills">
      <div className="skills-container">
        <h2 className="section-title">Technical Skills</h2>

        <div className="skills-grid">
          {/* Programming Languages */}
          <div className="skill-category">
            <h3 className="category-title">Languages</h3>
            <div className="skills-list">
              <div className="skill-item"><FaPython className="skill-icon python" /> Python</div>
              <div className="skill-item"><FaJava className="skill-icon java" /> Java</div>
              <div className="skill-item"><FaHtml5 className="skill-icon html" /> HTML</div>
              <div className="skill-item"><FaCss3Alt className="skill-icon css" /> CSS</div>
              <div className="skill-item"><FaJs className="skill-icon js" /> JavaScript</div>
              <div className="skill-item"><FaDatabase className="skill-icon sql" /> SQL</div>
            </div>
          </div>

          {/* Databases */}
          <div className="skill-category">
            <h3 className="category-title">Databases</h3>
            <div className="skills-list">
              <div className="skill-item"><FaDatabase className="skill-icon mysql" /> MySQL</div>
              <div className="skill-item"><FaDatabase className="skill-icon mongo" /> MongoDB</div>
            </div>
          </div>

          {/* Developer Tools */}
          <div className="skill-category">
            <h3 className="category-title">Developer Tools</h3>
            <div className="skills-list">
              <div className="skill-item"><FaGithub className="skill-icon github" /> GitHub</div>
              <div className="skill-item"><FaGitAlt className="skill-icon git" /> Git</div>
              <div className="skill-item">VS Code</div>
            </div>
          </div>

          {/* Frameworks & Environments */}
          <div className="skill-category">
            <h3 className="category-title">Frameworks & Environments</h3>
            <div className="skills-list">
              <div className="skill-item"><FaReact className="skill-icon react" /> React JS</div>
              <div className="skill-item"><FaNodeJs className="skill-icon node" /> Node.js</div>
              <div className="skill-item">Express.js</div>
              <div className="skill-item"><FaLinux className="skill-icon linux" /> Linux</div>
            </div>
          </div>

          {/* AI & ML */}
          <div className="skill-category">
            <h3 className="category-title">AI & Machine Learning</h3>
            <div className="skills-list">
              <div className="skill-item">AI & ML</div>
              <div className="skill-item">NLP</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
