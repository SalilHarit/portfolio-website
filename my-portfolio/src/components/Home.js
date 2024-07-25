import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';
import './Home.css';
import profilePic from './Screenshot_2022_0829_014250.jpg';
import { Navbar, Container, Nav } from 'react-bootstrap';
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
        <motion.p className="Lead" variants={itemVariants}>
        <h1>Projects</h1>
        </motion.p>
        <motion.ul className="list-group" variants={itemVariants}>
        <li className="list-group-item">
          
          <h2>Solar Power Plant Monitoring</h2>
          <p>This Project Involved Creation of a AWS cloud based system for remote monitoring solar power plants</p>
        </li>
        <li className="list-group-item">
          <h2>AstroVista</h2>
          <p>This Project Involved Creation of an android app for Tamil Nadu astrologers that aim to spread their knowledge to other parts of India</p>
        </li>
        <li className="list-group-item">
          <h2>Little Lemon Django Project</h2>
          <p>A full stack web application created using DJango framework in python and mysql for hyphothetical restaraunt called little lemon</p>
        </li>
      </motion.ul>
        <SolarPowerPlantMonitoring />
      </motion.div>
    </div>
  );
};

export default Home;