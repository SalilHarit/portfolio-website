import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';
import './Home.css';
import profilePic from './Screenshot_2022_0829_014250.jpg';
import { NavDropdown, Navbar, Container, Nav } from 'react-bootstrap';
import SolarPowerPlantMonitoring  from './SolarPowerPlantMonitoring';
const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/about">About</Nav.Link>
              <NavDropdown title="Projects" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Solar Power Plant Monitoring System</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">AstroVista</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">DJango Erp</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="https://github.com/SalilHarit?tab=repositories">More Projects</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <motion.div
        className="container mt-5 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.img
          src={profilePic}
          alt="Your Name"
          className="profile-pic rounded-circle mb-3"
          variants={itemVariants}
        />

        <motion.p className="lead" variants={itemVariants}>
          Crafting digital experiences with code and creativity.
        </motion.p>

        <SolarPowerPlantMonitoring />
      </motion.div>
    </div>
  );
};

export default Home;