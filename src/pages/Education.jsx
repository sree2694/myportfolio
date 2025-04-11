import React from "react";
import "../css/Education.css";
import { FaGraduationCap } from "react-icons/fa";
import { Fade } from "@mui/material"; // Material UI animation

const educationData = [
  {
    degree: "Master’s Degree in Computer Applications",
    institution: "JB Institute of Engineering & Technology",
    year: "2016 - 2019",
    gpa: "8.45/10",
    coursework: ["Java", "Javascript", "Database Management Systems"],
    icon: <FaGraduationCap size={30} color="#FFD700" />,
  },
  {
    degree: "Bachelor’s Degree in Computer Science",
    institution: "Vijetha Degree College",
    year: "2012 - 2016",
    gpa: "64/100",
    coursework: ["Software Engineering", "Database Management", "Web Technologies"],
    icon: <FaGraduationCap size={30} color="#FFD700" />,
  },
];

const Education = () => {
  return (
    <section className="education-container">
      <h2 className="section-title">Education</h2>
      <div className="education-grid">
        {educationData.map((edu, index) => (
          <Fade in timeout={1000} key={index}>
            <div className="education-card">
              <div className="icon">{edu.icon}</div>
              <div className="education-content">
                <h3 className="degree">{edu.degree}</h3>
                <p className="institution">{edu.institution} | {edu.year}</p>
                <p className="gpa"><strong>GPA:</strong> {edu.gpa}</p>
                <p className="coursework">
                  <strong>Coursework:</strong> {edu.coursework.join(", ")}
                </p>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </section>
  );
};

export default Education;
