import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom"; // For active class management
import { FaLinkedin, FaGithub, FaHackerrank } from "react-icons/fa"; // Social Icons
import "../css/NavbarComponent.css"; // Custom CSS for Navbar

const NavbarComponent = () => {
  // State for toggling Navbar in mobile view
  const [expanded, setExpanded] = useState(false);
  const location = useLocation(); // To get the current route for active link

  const handleToggle = () => setExpanded(!expanded);

  return (
    <Navbar bg="light" variant="light" expand="lg" fixed="top" expanded={expanded}>
      <Container fluid>
        {/* Brand/Logo */}
        <Navbar.Brand as={Link} to="/" onClick={() => setExpanded(false)}>
          MyPortfolio
        </Navbar.Brand>
        
        {/* Toggle Button for mobile view */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />

        {/* Navbar Links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to="/"
              onClick={() => setExpanded(false)}
              className={location.pathname === "/" ? "active" : ""}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/skills"
              onClick={() => setExpanded(false)}
              className={location.pathname === "/skills" ? "active" : ""}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/experience"
              onClick={() => setExpanded(false)}
              className={location.pathname === "/experience" ? "active" : ""}
            >
              Experience
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/projects"
              onClick={() => setExpanded(false)}
              className={location.pathname === "/projects" ? "active" : ""}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/education"
              onClick={() => setExpanded(false)}
              className={location.pathname === "/education" ? "active" : ""}
            >
              Education
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/certifications"
              onClick={() => setExpanded(false)}
              className={location.pathname === "/certifications" ? "active" : ""}
            >
              Certifications
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              onClick={() => setExpanded(false)}
              className={location.pathname === "/contact" ? "active" : ""}
            >
              Contact
            </Nav.Link>

            {/* Social Links */}
            <div className="d-flex ms-3">
              <a
                href="https://www.linkedin.com/in/sreekanth-j-developer/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black me-3"
              >
                <FaLinkedin size={25} />
              </a>
              <a
                href="https://github.com/sree2694"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black me-3"
              >
                <FaGithub size={25} />
              </a>
              <a
                href="https://www.hackerrank.com/profile/sreekanth_j26"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black"
              >
                <FaHackerrank size={25} />
              </a>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
