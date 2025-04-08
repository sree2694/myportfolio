import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaArrowDown } from "react-icons/fa"; // Icon for Call-to-action
import developerGif from '../assets/developer.gif';

const Home = () => {
  return (
    <div className="home-section">
      <Container fluid className="pt-5">
        <Row className="align-items-center">
          {/* Left Side: Introduction */}
          <Col md={6} className="text-center text-md-start">
            <h1 className="display-4 fw-bold animate__animated animate__fadeInLeft">
              Welcome to My Portfolio
            </h1>
            <p className="lead text-muted animate__animated animate__fadeIn animate__delay-1s">
              I am John Doe, a passionate Fullstack Developer. I specialize in creating dynamic and scalable web applications.
            </p>
            <Button
              variant="primary"
              className="mt-4 px-5 py-3 animate__animated animate__fadeIn animate__delay-2s"
              href="#projects"
            >
              View My Projects <FaArrowDown />
            </Button>
          </Col>

          {/* Right Side: Image */}
          <Col md={6} className="text-center">
            <img
              src={developerGif} // Replace with your image path
              alt="developer gif"
              className="img-fluid rounded-circle shadow-lg animate__animated animate__fadeIn animate__delay-3s"
              style={{ maxWidth: "450px", height: "auto" }}
            />
          </Col>
        </Row>

        {/* Background Animation */}
        <div className="background-animation"></div>
      </Container>
    </div>
  );
};

export default Home;
