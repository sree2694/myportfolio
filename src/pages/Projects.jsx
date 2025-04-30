import React from "react";
import "../css/Projects.css";
import { Fade } from "@mui/material"; // Material-UI Animations
import { FaReact, FaNodeJs, FaJava, FaDatabase, FaHtml5, FaCss3, FaBootstrap, FaGitAlt } from "react-icons/fa";
import { SiExpress, SiSpringboot,SiPython, SiMongodb, SiJavascript, SiFirebase } from "react-icons/si";

const techIcons = {
  ReactJS: <FaReact size={20} color="#61DBFB" />,
  ExpressJS: <SiExpress size={20} color="#ffffff" />,
  NodeJS: <FaNodeJs size={20} color="#68A063" />,
  Python: <SiPython size={20} color="#3776AB" />,
  HTML5: <FaHtml5 size={20} color="#E34F26" />,
  CSS3: <FaCss3 size={20} color="#1572B6" />,
  JavaScript: <SiJavascript size={20} color="#F7DF1E" />,
  Bootstrap: <FaBootstrap size={20} color="#7952B3" />,
  MongoDB: <SiMongodb size={20} color="#4DB33D" />,
  SpringBoot: <SiSpringboot size={20} color="#6DB33F" />,
  Java: <FaJava size={20} color="#007396" />,
  MySQL: <FaDatabase size={20} color="#4479A1" />,
  Git: <FaGitAlt size={20} color="#F05032" />,
  Firebase: <SiFirebase size={20} color="#FFCA28" />,
};

const projectData = [
  {
    title: "MedAssist AI",
    date: "April 2025 – May 2025",
    description:
      "AI-powered symptom checker using Cohere LLM + Machine Learning (Random Forest). Built with React & FastAPI. Suggests possible conditions & care tips in real-time.",
    techStack: ["ReactJS", "NodeJS", "Python", "Cohere(LLM)", "Machine Learning", "FastAPI", "Render"],
    demoLink: "https://ai-symptom-checker-delta.vercel.app/",
  },
  {
    title: "Code Reacher",
    date: "Nov 2024 – Jan 2025",
    description:
      "An interactive e-learning platform that streamlined course enrollment and tracking, improving accessibility for students.",
    techStack: ["ReactJS", "ExpressJS", "NodeJS", "CSS3", "HTML5", "JavaScript"],
    demoLink: "https://codereacher-2c0e3.web.app/",
  },
  {
    title: "Full Stack Web Development",
    date: "2023",
    description:
      "Developed a dynamic web app for RR Software Solutions integrating a ReactJS front end with a Spring Boot backend.",
    techStack: ["ReactJS", "NodeJS", "ExpressJS", "Java", "SpringBoot", "MySQL", "MaterialUI"],
  },
  {
    title: "X12 - EDI",
    date: "2022",
    description:
      "Built a Java library to process ANSI X12 claim files, ensuring structured data extraction and seamless integration.",
    techStack: ["SpringBoot", "Java", "MySQL", "MongoDB", "JavaScript"],
  },
  {
    title: "Efficient Traceable Authorization Search System",
    date: "Dec 2018 – Jun 2019",
    description:
      "A secure search system ensuring privacy while enabling encrypted remote data search with user-friendly tools.",
    techStack: ["Java", "Encryption Algorithms", "Secure Data Handling"],
  }
];

const Projects = () => {
  return (
    <section className="projects-container">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <Fade in timeout={1000} key={index}>
            <div className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <p className="project-tech">
                <strong>Tech Stack: </strong>
                {project.techStack.map((tech, idx) => (
                  <span key={idx} className="tech-item">
                    {techIcons[tech]} {tech}
                  </span>
                ))}
              </p>
              {project.demoLink && (
                <div className="project-links">
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                </div>
              )}
            </div>
          </Fade>
        ))}
      </div>
    </section>
  );
};

export default Projects;
