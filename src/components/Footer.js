import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "../css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container maxWidth="lg">
        <Grid container spacing={3} className="footer-content">
          <Grid sx={{ gridColumn: { xs: "span 12", md: "span 4" } }} className="footer-section">
            <Typography variant="h6" className="footer-title">About Me</Typography>
            <Typography variant="body2" className="footer-text">
              Passionate Full Stack Developer specializing in MERN Stack and Java Spring Boot.
              Crafting seamless digital experiences.
            </Typography>
          </Grid>

          <Grid sx={{ gridColumn: { xs: "span 12", md: "span 4" } }} className="footer-section">
            <Typography variant="h6" className="footer-title">Connect with Me</Typography>
            <div className="footer-icons">
              <a href="https://github.com/sree2694" target="_blank" rel="noopener noreferrer" className="icon-link">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/sreekanth-j-developer/" target="_blank" rel="noopener noreferrer" className="icon-link">
                <FaLinkedin />
              </a>
            </div>
          </Grid>
        </Grid>

        <div className="footer-bottom">
          <Typography variant="body2">
            © {new Date().getFullYear()} Sreekanth. All Rights Reserved.
          </Typography>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
