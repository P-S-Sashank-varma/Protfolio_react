import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "../styles/Projects.css";
import campusImage from "../assets/campus.png";
import foodlinkImage from "../assets/foodlinkimage.png";
import riceclassfication from "../assets/riceclassfication.jpeg";
import smartHireImage from "../assets/Smarthire.png";

const projects = [
  {
    title: "FoodLink (MERN Stack)",
    description: "A food donation platform connecting donors with NGOs and needy individuals.",
    github: "https://github.com/P-S-Sashank-varma",
    live: "https://foodlink123-sigma.vercel.app/", // Replace with actual deployed URL
    image: foodlinkImage,
    tags: ["React", "Node.js", "MongoDB", "Express"]
  },
  {
    title: "Campus Safety Hub",
    description: "An SOS safety alert system for Aditya College campuses using real-time data.",
    github: "https://github.com/P-S-Sashank-varma/Campus_safety_hub",
    image: campusImage,
    tags: ["React", "Firebase", "Geolocation", "Real-time"]
  },
  {
    title: "Smart Hire AI",
    description: "An AI-powered job matching and HR interview system that parses resumes, matches candidates to job listings, and conducts skill-based mock interviews with real-time scoring.",
    github: "https://github.com/P-S-Sashank-varma/ai-job-matching", 
    image: smartHireImage,  
    tags: ["React", "FastAPI", "Machine Learning", "NLP", "Resume Parsing", "LLM"]
  },
  {
    title: "GrainPalette",
    description: "A rice grain classification app using transfer learning with MobileNet, achieving 93% accuracy and real-time predictions via a Flask web interface.",
    github: "https://github.com/P-S-Sashank-varma/rice-classification-app",  
    image: riceclassfication, 
    tags: ["Transfer Learning", "MobileNet", "Flask", "Deep Learning", "Keras"]
  }
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
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                        <FaExternalLinkAlt /> Live
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
