import React from "react";
import {
  Container,
  Typography,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { FaDev } from "react-icons/fa";
import { SiHashnode } from "react-icons/si";
import { Link } from "react-router-dom";
import "../css/Home.css";
import developerGif from "../assets/developer.gif";
import aboutme from "../assets/aboutme.gif";

const Home = () => {
  return (
    <>
      <Container className="home-container" disableGutters maxWidth={false}>
        <div className="home-text">
          <Typography variant="h2" className="home-title">
            Hi, I'm a Full-Stack Developer
          </Typography>

          <Typography variant="body1" className="home-description">
            Passionate about building scalable applications, crafting seamless
            user experiences, and optimizing performance. I enjoy learning new
            technologies and solving complex problems.
          </Typography>

          <div className="cta-buttons">
            <Button className="cta-button" component={Link} to="/projects">
              View My Work
            </Button>
            <Button className="cta-button" component={Link} to="/contact">
              Let's Connect
            </Button>
          </div>
        </div>

        <div className="home-image">
          <img src={developerGif} alt="Developer Animation" />
        </div>
      </Container>

      <Container className="blog-container" disableGutters maxWidth={false}>
        <div className="blog-image">
          <img src={aboutme} alt="aboutme" />
        </div>

        <div className="home-text">
          <Typography variant="body1" className="home-description">
            <Typography variant="body1" paragraph>
              <strong>Full Stack Developer</strong> with a strong command over
              <strong> Java, Spring Boot, React, REST APIs</strong>, and
              <strong> Microservices</strong>. I specialize in building
              <strong> robust, scalable, and secure web applications</strong>{" "}
              tailored to business needs.
            </Typography>

            <Typography variant="body1" paragraph>
              With a passion for
              <strong> tech writing, continuous learning, and problem-solving</strong>,
              I’m not just a developer—I’m your
              <strong> technical partner</strong> committed to quality, clarity,
              and results.
            </Typography>

            <Box mt={3}  sx={{ py: 0, my: 0 }}>
              <Typography variant="h6" gutterBottom sx={{ py: 0, my: 0 }}>
                What I Bring to the Table:
              </Typography>
              <List>
                {[
                  "Scalable backend architecture with Java & Spring Boot",
                  "Modern, responsive UIs with React & Material UI",
                  "Clean code, performance optimization & best practices",
                  "Passion for technical communication & documentation",
                ].map((text, index) => (
                  <ListItem key={index}  sx={{ py: 0, my: 0 }}>
                    <ListItemIcon>
                      <CheckCircleIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Typography>

          <div className="cta-buttons" >
            <Typography sx={{ ml: 1 }} color="white">
              Check here:
            </Typography>
            <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
              <a
                href="https://dev.to/codereacher_20b8a"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Dev.to"
                style={{ display: "flex", alignItems: "center", textDecoration: "none" }}
              >
                <FaDev size={30} color="white" />
              </a>

              <a
                href="https://hashnode.com/@CodeReacher2025"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Hashnode"
                style={{ display: "flex", alignItems: "center", textDecoration: "none" }}
              >
                <SiHashnode size={28} color="white" />
              </a>
            </Box>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
