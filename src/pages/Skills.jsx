import React from "react";
import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import { BiLogoVisualStudio } from "react-icons/bi";
import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaGithub,
  FaGitAlt,
  FaBitbucket,
  FaJira,
  FaHtml5,
  FaCss3,
  FaBootstrap,
  FaJsSquare,
  FaDatabase,
} from "react-icons/fa";
import {
  SiRedux,
  SiTypescript,
  SiMongodb,
  SiPostman,
  SiFirebase,
  SiIntellijidea,
  SiApachetomcat,
  SiSpringboot,
  SiExpress,
  SiMysql,
  SiFlutter,
  SiApachemaven,
} from "react-icons/si";
import "../css/Skills.css"; // Import custom styling

const skillsData = [
  {
    category: "Front-End Technologies",
    skills: [
      { name: "ReactJS", icon: <FaReact /> },
      { name: "Redux", icon: <SiRedux /> },
      { name: "JavaScript (ES6)", icon: <FaJsSquare /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3 /> },
      { name: "Bootstrap", icon: <FaBootstrap /> },
      { name: "Flutter", icon: <SiFlutter /> },
    ],
  },
  {
    category: "Back-End Technologies",
    skills: [
      { name: "NodeJS", icon: <FaNodeJs /> },
      { name: "ExpressJS", icon: <SiExpress /> },
      { name: "Spring Boot", icon: <SiSpringboot /> },
      { name: "Java", icon: <FaJava /> },
      { name: "JDBC", icon: <FaDatabase /> },
      { name: "JPA", icon: <FaDatabase /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Apache Tomcat", icon: <SiApachetomcat /> },
    ],
  },
  {
    category: "Tools & DevOps",
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "BitBucket", icon: <FaBitbucket /> },
      { name: "Jira", icon: <FaJira /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "Firebase", icon: <SiFirebase /> },
      { name: "Maven", icon: <SiApachemaven /> },
      { name: "VS Code", icon: <BiLogoVisualStudio /> },
      { name: "IntelliJ IDEA", icon: <SiIntellijidea /> },
    ],
  },
];

const Skills = () => {
  return (
    <Container className="skills-container" disableGutters maxWidth={false}>
      <Typography variant="h2" className="skills-title" gutterBottom>
        My Tech Stack 
      </Typography>

      {skillsData.map((category, index) => (
        <div key={index} className="skills-category-wrapper">
          <Typography variant="h5" className="skills-category">
            {category.category}
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            {category.skills.map((skill, idx) => (
              <Grid item key={idx} xs={6} sm={4} md={3} lg={2}>
                <Card className="skill-card">
                  <CardContent className="skill-content">
                    <span className="skill-icon">{skill.icon}</span>
                    <Typography variant="body1">{skill.name}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      ))}
    </Container>
  );
};

export default Skills;
