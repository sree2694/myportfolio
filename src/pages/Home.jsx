import React from "react";
import { Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "../css/Home.css";
import developerGif from "../assets/developer.gif"; // Ensure correct path

const Home = () => {
  return (
    
    <Container className="home-container" disableGutters maxWidth={false}>

      {/* Left Section - Text */}
      <div className="home-text">
        <Typography variant="h2" className="home-title">
          Hi, I'm a Full-Stack Developer
        </Typography>

        <Typography variant="body1" className="home-description">
          Passionate about building scalable applications, crafting seamless
          user experiences, and optimizing performance. I enjoy learning new
          technologies and solving complex problems.
        </Typography>

        {/* Call to Action Buttons */}
        <div className="cta-buttons">
          <Button className="cta-button" component={Link} to="/projects">
            View My Work
          </Button>
          <Button className="cta-button" component={Link} to="/contact">
            Let's Connect
          </Button>
        </div>
      </div>

      {/* Right Section - GIF Image */}
      <div className="home-image">
        <img src={developerGif} alt="Developer Animation" />
      </div>
    </Container>
  );
};

export default Home;
