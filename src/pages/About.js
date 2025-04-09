
import React from "react";
import "../styles/About.css";
import { FaGraduationCap, FaSchool, FaUniversity} from "react-icons/fa"; 

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
            <p className="about-description">
              My name is <span className="highlight">Sashank Varma</span>. I am currently pursuing a 
              <strong> B.Tech in CSE (AI & ML) </strong> at 
              <span className="highlight"> Aditya College of Engineering & Technology</span>, 
              and I have secured an <span className="highlight">80%</span> grade.
            </p>
            <p className="about-description">
              I'm passionate about creating innovative solutions using cutting-edge technologies. 
              My journey in tech started with a curiosity about how things work and evolved into 
              a commitment to building applications that solve real-world problems.
            </p>
          </div>

          <div className="education-section">
            <h3 className="education-title">Education</h3>
            <div className="education">
              <div className="education-box">
                <FaUniversity className="edu-icon" />
                <div className="education-details">
                  <p className="degree"><strong>B.Tech (CSE-AIML)</strong></p>
                  <p className="institution">Aditya College of Engineering & Technology</p>
                  <p className="percentage">80% Grade</p>
                </div>
              </div>

              <div className="education-box">
                <FaSchool className="edu-icon" />
                <div className="education-details">
                  <p className="degree"><strong>Intermediate (12th)</strong></p>
                  <p className="institution">Aditya Junior College, Amalapuram</p>
                  <p className="percentage">94%</p>
                </div>
              </div>

              <div className="education-box">
                <FaGraduationCap className="edu-icon" />
                <div className="education-details">
                  <p className="degree"><strong>SSC (10th)</strong></p>
                  <p className="institution">Sri Balaji High School, Mummidivaram</p>
                  <p className="percentage">96%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
