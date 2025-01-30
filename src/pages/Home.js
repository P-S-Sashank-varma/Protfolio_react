import React from "react";
import "../styles/Home.css";
import profileImage from "../assets/profile-pic.png";

const Home = () => {
  return (
    <div className="home" id="home">
      <div className="home-left">
        <h1 className="home-title">Welcome to My Portfolio</h1>
        <p className="home-description">
          Hi, I am a passionate developer with a knack for creating amazing web applications and solving real-world problems with AI/ML.
        </p>
        <div className="home-roles">
          <span className="static-text">I am a</span>
          <span className="dynamic-text">
            <span>MERN Stack Developer</span>   <span>AI/ML Developer</span>   <span>Programmer</span> 
            <span>Programmer</span> </span>
        </div>
        <a href="https://drive.google.com/file/d/1Yj4y2WkcfBBnclWQhm1kXWJl1pIsWHNS/view?usp=drivesdk" className="resume-button" target="_blank" rel="noopener noreferrer">
          View Resume
        </a>
      </div>
      <div className="home-right">
        <img src={profileImage} alt="Profile" className="profile-image" />
      </div>
    </div>
  );
};

export default Home;
