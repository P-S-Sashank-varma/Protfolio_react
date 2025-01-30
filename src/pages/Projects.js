import React from "react";
import { FaGithub } from "react-icons/fa";
import "../styles/Projects.css";
import foodlinkImage from "../assets/foodi.jpg";
import campusImage from "../assets/campus.png";
import sentimentImage from "../assets/sentiment.jpg";
import roadAccidentImage from "../assets/road.jpg";

const projects = [
  {
    title: "FoodLink (MERN Stack)",
    description: "A food donation platform connecting donors with NGOs and needy individuals.",
    github: "https://github.com/P-S-Sashank-varma",
    image: foodlinkImage, 
  },
  {
    title: "Campus Safety Hub",
    description: "An Sos safety alert system for aditya college campuses using real-time data.",
    github: "https://github.com/P-S-Sashank-varma",
    image: campusImage, 
  },
  {
    title: "Sentiment Analysis (NLP)",
    description: "A machine learning project that classifies text reviews as positive or negative.",
    github: "https://github.com/P-S-Sashank-varma",
    image: sentimentImage,
  },
  {
    title: "Road Accident Prediction (ML)",
    description: "Predicts the likelihood of road accidents using machine learning models.",
    github: "https://github.com/P-S-Sashank-varma",
    image: roadAccidentImage,
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
              <FaGithub className="github-icon" /> View Code
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
