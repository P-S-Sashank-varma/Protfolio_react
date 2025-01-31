import React from "react";
import "../styles/Experience.css";

import aquarlabsLogo from "../assets/Aqualogo.jpg";
import edunetLogo from "../assets/edunetfoundation_logo.jpg";

const Experience = () => {
  return (
    <section className="experience" id="Experience">
      <h2 className="section-title">Experience</h2>
      
      <div className="experience-item">
        <img src={aquarlabsLogo} alt="Aquarlabs Logo" className="company-logo" />
        <div className="experience-details">
          <h3>
            <a href="https://drive.google.com/file/d/1Z1zcWidpLU41C1AmAcJHWJ8EjLjbVa7T/view?usp=drivesdk" 
               target="_blank" 
               rel="noopener noreferrer">
              Aquarlabs
            </a>
          </h3>
          <p className="position">Full-Stack Developer Intern | Oct 2024 – Present</p>
          <ul>
            <li>Developing and managing backend APIs for an AI PDF Converter project.</li>
            <li>Implemented JWT authentication for secure API access.</li>
            <li>Enhancing skills in backend technologies and full-stack development.</li>
          </ul>
        </div>
      </div>

      <div className="experience-item">
        <img src={edunetLogo} alt="Edunet Foundation Logo" className="company-logo" />
        <div className="experience-details">
          <h3>
            <a href="https://drive.google.com/file/d/1cKyjZ9kS1o8H61i25kw90QIWMpBwhCqR/view?usp=drivesdk" 
               target="_blank" 
               rel="noopener noreferrer">
              Edunet Foundation
            </a>
          </h3>
          <p className="position">AI/ML Intern | Apr 2024 – May 2024</p>
          <ul>
            <li>Completed a 6-week AI/ML internship under APSSDC & IBM SkillsBuild.</li>
            <li>Built a sentiment analysis model with 75% accuracy.</li>
            <li>Worked with industry-standard AI/ML tools and techniques.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
