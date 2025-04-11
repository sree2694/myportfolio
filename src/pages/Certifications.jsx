import React from "react";
import "../css/Certification.css";
import { SiCoursera, SiUdemy } from "react-icons/si";
import { FaHackerrank, FaAws } from "react-icons/fa";
import { MdDeveloperMode } from "react-icons/md";
import { Fade } from "@mui/material"; // Material UI animation

const certificationsData = [
  {
    title: "Full Stack Web Development",
    provider: "Coursera",
    icon: <SiCoursera size={25} color="#0072C6" />,
  },
  {
    title: "ReactJS Advanced Course",
    provider: "Udemy",
    icon: <SiUdemy size={25} color="#A435F0" />,
  },
  {
    title: "Frontend Developer with React JS",
    provider: "Hackerrank",
    icon: <FaHackerrank size={25} color="#A435F0" />,
  },
  {
    title: "JavaScript",
    provider: "Hackerrank",
    icon: <FaHackerrank size={25} color="#A435F0" />,
  },
  {
    title: "AWS Certified Cloud Practitioner",
    provider: "Amazon (in progress)",
    icon: <FaAws size={25} color="#A435F0" />,
  },
  {
    title: "Full Stack Web Development in Java",
    provider: "TalentSprint",
    icon: <MdDeveloperMode size={25} color="#A435F0" />,
  },
];

const Certifications = () => {
  return (
    <section className="certifications-container">
      <h2 className="section-title">Certifications</h2>
      <div className="certifications-grid">
        {certificationsData.map((cert, index) => (
          <Fade in timeout={1000} key={index}>
            <div className="certification-card">
              <div className="cert-icon">{cert.icon}</div>
              <div className="cert-content">
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-provider">{cert.provider}</p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-link"
                >
                  View Certification
                </a>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
