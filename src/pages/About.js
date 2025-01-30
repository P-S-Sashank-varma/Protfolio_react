import React from "react";
import "../styles/About.css";
import { FaGraduationCap, FaSchool, FaUniversity} from "react-icons/fa"; 

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>
        <p className="about-description">
          My name is <span className="highlight">Sashank Varma</span>. I am currently pursuing a 
          <strong> B.Tech in CSE (AI & ML) </strong> at 
          <span className="highlight"> Aditya College of Engineering & Technology</span>, 
          and I have secured an <span className="highlight">80%</span> grade.
        </p>

        <div className="education">
          <div className="education-box">
            <FaUniversity className="edu-icon" />
            <p><strong>B.Tech (CSE-AIML)</strong></p>
            <p>Aditya College of Engineering & Technology</p>
            <p className="percentage">80% Grade</p>
          </div>

          <div className="education-box">
            <FaSchool className="edu-icon" />
            <p><strong>Intermediate (12th)</strong></p>
            <p>Aditya Junior College, Amalapuram</p>
            <p className="percentage">94%</p>
          </div>

          <div className="education-box">
            <FaGraduationCap className="edu-icon" />
            <p><strong>SSC (10th)</strong></p>
            <p>Sri Balaji High School, Mummidivaram</p>
            <p className="percentage">96%</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
