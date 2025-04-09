
import React from "react";
import "../styles/Home.css";
import profileImage from "../assets/profile-pic.png";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <div className="home-left">
          <h1 className="home-title">
            <span>Welcome to My Portfolio</span>
          </h1>
          <p className="home-description">
            Hi, I am <span className="name">Sashank Varma</span>, a passionate developer 
            with a knack for creating amazing web applications and solving real-world problems with AI/ML.
          </p>
          <div className="home-roles">
            <span className="static-text">I am a</span>
            <div className="dynamic-text-wrapper">
              <span className="dynamic-text">
                <span>MERN Stack Developer</span>
                <span>AI/ML Developer</span>
                <span>Programmer</span>
              </span>
            </div>
          </div>
          <div className="button-group">
            <a 
              href="https://drive.google.com/file/d/1Yj4y2WkcfBBnclWQhm1kXWJl1pIsWHNS/view?usp=drivesdk" 
              className="resume-button" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              View Resume
            </a>
            <a href="#contact" className="contact-button">
              Contact Me
            </a>
          </div>
        </div>
        <div className="home-right">
          <div className="profile-image-container">
            <img src={profileImage} alt="Profile" className="profile-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
