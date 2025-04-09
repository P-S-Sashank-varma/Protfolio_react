
import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
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
    tags: ["React", "Node.js", "MongoDB", "Express"]
  },
  {
    title: "Campus Safety Hub",
    description: "An SOS safety alert system for Aditya College campuses using real-time data.",
    github: "https://github.com/P-S-Sashank-varma",
    image: campusImage,
    tags: ["React", "Firebase", "Geolocation", "Real-time"]
  },
  {
    title: "Sentiment Analysis (NLP)",
    description: "A machine learning project that classifies text reviews as positive or negative.",
    github: "https://github.com/P-S-Sashank-varma",
    image: sentimentImage,
    tags: ["Python", "NLP", "Machine Learning", "NLTK"]
  },
  {
    title: "Road Accident Prediction (ML)",
    description: "Predicts the likelihood of road accidents using machine learning models.",
    github: "https://github.com/P-S-Sashank-varma",
    image: roadAccidentImage,
    tags: ["Python", "ML", "Data Analysis", "Scikit-learn"]
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2 className="section-title">Projects</h2>
        <div className="project-list">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FaGithub /> Code
                    </a>
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                        <FaExternalLinkAlt /> Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
