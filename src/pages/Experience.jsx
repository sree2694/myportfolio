import React from "react";
import "../css/Experience.css";
import { Fade } from "@mui/material"; // Material-UI Animation

// Importing Company Logos
import rrSoftwareLogo from "../assets/rrsoftware.png";
import nareshITLogo from "../assets/nareshit.png";
import talentSprintLogo from "../assets/talentsprint.png";

const experienceData = [
  {
    title: "Full Stack Developer",
    company: "RR Software Solutions LLC",
    date: "Nov 2021 – Nov 2024",
    location: "Baltimore, MD (Remote)",
    logo: rrSoftwareLogo,
    description:
      "Led the development of high-performance web applications, optimizing API performance by 40% and ensuring seamless UI/UX integration. Engineered scalable microservices in Spring Boot and Node.js, reducing server load and improving data retrieval times. Oversaw full project lifecycles, ensuring 98% defect-free deployments."
  },
  {
    title: "MERN Stack Developer (Internship)",
    company: "Naresh IT",
    date: "Apr 2023 – Jun 2023",
    location: "Hyderabad",
    logo: nareshITLogo,
    description:
      "Built dynamic and responsive SPAs using ReactJS, improving user engagement by 35%. Optimized backend API efficiency with Express.js and MongoDB, achieving a 25% reduction in load times. Developed reusable UI components and ensured seamless cross-device compatibility."
  },
  {
    title: "Full Stack Java Web Development (Apprenticeship)",
    company: "TalentSprint",
    date: "May 2019 – Aug 2019",
    location: "Hyderabad",
    logo: talentSprintLogo,
    description:
      "Developed and optimized full-stack web applications using Java Spring Boot and ReactJS, improving system scalability and user interaction. Refactored backend logic to enhance performance by 30%, ensuring faster data processing and seamless frontend-backend integration."
  }
];

const Experience = () => {
  return (
    <section className="experience-container">
      <h2 className="section-title">Experience</h2>
      {experienceData.map((job, index) => (
        <Fade in timeout={1000} key={index}>
          <div className="experience-card">
            <img src={job.logo} alt={job.company} className="experience-logo" />
            <div className="experience-details">
              <div className="experience-header">
                <h3>{job.title}</h3>
                <span className="date-range">{job.date}</span>
              </div>
              <p className="company-name">{job.company} | {job.location}</p>
              <p className="experience-description">{job.description}</p>
            </div>
          </div>
        </Fade>
      ))}
    </section>
  );
};

export default Experience;
