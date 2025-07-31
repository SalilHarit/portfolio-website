import { motion } from 'framer-motion';
import { LinkedinIcon, Mail } from 'lucide-react';
import React from 'react';
import { Card, Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css';
import meImage from './me.jpg';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const projects = [
  {
    title: "FAMS Enterprise Modernization",
    description: "Legacy VB.NET system migration to Flutter/PostgreSQL architecture for established IT services company. Preventing ₹20+ lakh system replacement while ensuring business continuity.",
    client: "Established IT Services Company (40+ years)",
    status: "Active Development - Testing Phase Complete",
    impact: "₹20+ lakh cost avoidance, business continuity assurance",
    technologies: "Flutter, PostgreSQL, Enterprise Architecture, Business Process Migration",
    link: "/enterprise-modernization"
  },
  {
    title: "Solar IoT Monitoring Platform",
    description: "Proprietary AWS-based real-time monitoring system for 2.1MW Havells industrial installation, eliminating vendor dependency and generating significant cost savings.",
    client: "Industrial Solar Installation (2.1MW, 31 inverters)",
    status: "Production Deployment Successful",
    impact: "₹2-3L annual cost savings, complete technical independence",
    technologies: "AWS Lambda, MongoDB, Python, IoT Integration, VTL Mapping",
    link: "/SolarPlantMonitoring"
  },
  {
    title: "AstroVista EdTech Platform",
    description: "India's first comprehensive Astrology Education platform with Flutter app, Algolia search, and Razorpay integration. White-label ready with subscription model.",
    client: "EdTech Platform Development",
    status: "Live on Google Play Store",
    impact: "Production platform with active user base, licensing capabilities",
    technologies: "Flutter, Algolia Search, Payment Integration, Mobile Development",
    link: "/astro-vista"
  }
];

const Home: React.FC = () => {
  return (
    <>
      <Navbar bg="light" expand="lg" fixed="top" className="shadow-sm">
        <Container>
          <Navbar.Brand as={Link} to="/">Salil Harit</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#impact">Business Impact</Nav.Link>
              <Nav.Link href="#expertise">Technical Expertise</Nav.Link>
              <Nav.Link href="https://www.linkedin.com/in/salil-harit-85565622/" target="_blank">LinkedIn</Nav.Link>
              <Nav.Link href="mailto:salilharit2001@gmail.com">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="position-relative">
       
        <Container className="mt-5 pt-5 position-relative z-1">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="text-center mb-5" variants={itemVariants}>
              <img
                src={meImage}
                alt="Salil Harit"
                className="profile-pic rounded-circle mb-3 shadow"
                style={{ width: '200px', height: '200px', objectFit: 'cover' }}
              />
              <h1 className="display-4 mb-3">Salil Harit</h1>
              <h2 className="h4 text-primary mb-3">Technology Solutions Architect</h2>
              <p className="lead">Building enterprise-grade software for business-critical operations.</p>
              <p className="lead mb-4">Specializing in legacy system modernization and scalable platform development.</p>
              <div className="contact-info mb-4">
                <p className="mb-1">📧 salilharit2001@gmail.com | 📱 +91 9220966708</p>
              </div>
              <div className="d-flex justify-content-center mt-3">
                <a href="mailto:salilharit2001@gmail.com">
                  <Mail size={24} />
                </a>
                <a href="https://www.linkedin.com/in/salil-harit-85565622/" target="_blank" rel="noopener noreferrer" className="ms-3">
                  <LinkedinIcon size={24} />
                </a>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} id="projects">
              <h2 className="text-center mb-4">Current Enterprise Projects</h2>
              <Row xs={1} md={1} lg={2} className="g-4">
                {projects.map((project, index) => (
                  <Col key={index}>
                    <motion.div variants={itemVariants}>
                      <Card className="h-100 d-flex flex-column shadow-sm hover-card">
                        <Card.Body className="flex-grow-1 p-4">
                          <div className="d-flex justify-content-between align-items-start mb-2">
                            <Card.Title className="text-primary">{project.title}</Card.Title>
                            <span className="badge bg-success">{project.status}</span>
                          </div>
                          <Card.Subtitle className="mb-3 text-muted">{project.client}</Card.Subtitle>
                          <Card.Text className="mb-3">
                            {project.description}
                          </Card.Text>
                          <div className="mb-3">
                            <strong className="text-success">Business Impact:</strong>
                            <p className="mb-2">{project.impact}</p>
                          </div>
                          <div className="mb-3">
                            <strong>Technologies:</strong>
                            <p className="mb-0 text-muted small">{project.technologies}</p>
                          </div>
                        </Card.Body>
                        <Card.Footer className="bg-white border-top-0 p-3">
                          <Link to={project.link} className="btn btn-primary w-100">View Details</Link>
                        </Card.Footer>
                      </Card>
                    </motion.div>
                  </Col>
                ))}
              </Row>
            </motion.div>

            <motion.div variants={itemVariants} className="my-5" id="impact">
              <h2 className="text-center mb-4">Business Impact & Scale</h2>
              <Row xs={1} md={2} lg={4} className="g-4">
                <Col>
                  <Card className="text-center h-100 border-0 shadow-sm">
                    <Card.Body>
                      <h3 className="text-primary">₹20+ Lakh</h3>
                      <p className="mb-0">System replacement cost avoided</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card className="text-center h-100 border-0 shadow-sm">
                    <Card.Body>
                      <h3 className="text-success">₹2-3L Annual</h3>
                      <p className="mb-0">Vendor dependency eliminated</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card className="text-center h-100 border-0 shadow-sm">
                    <Card.Body>
                      <h3 className="text-info">2.1MW</h3>
                      <p className="mb-0">Industrial monitoring scale</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card className="text-center h-100 border-0 shadow-sm">
                    <Card.Body>
                      <h3 className="text-warning">40+ Years</h3>
                      <p className="mb-0">Enterprise client trust</p>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </motion.div>

            <motion.div variants={itemVariants} className="my-5" id="expertise">
              <h2 className="text-center mb-4">Technical Expertise</h2>
              <Row xs={1} md={2} className="g-4">
                <Col>
                  <Card className="h-100 border-0 shadow-sm">
                    <Card.Body>
                      <Card.Title className="text-primary">Enterprise Development</Card.Title>
                      <Card.Text>
                        Flutter, PostgreSQL, System Modernization, Legacy Migration, 
                        Business Process Integration, Financial Compliance Systems
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card className="h-100 border-0 shadow-sm">
                    <Card.Body>
                      <Card.Title className="text-success">Cloud & IoT</Card.Title>
                      <Card.Text>
                        AWS Lambda, MongoDB, Industrial Monitoring, Real-time Systems,
                        IoT Integration, VTL Mapping, Data Pipeline Architecture
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card className="h-100 border-0 shadow-sm">
                    <Card.Body>
                      <Card.Title className="text-info">Platform Architecture</Card.Title>
                      <Card.Text>
                        Scalable backend design, API development, Payment integration,
                        Search optimization, Mobile development, White-label platforms
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card className="h-100 border-0 shadow-sm">
                    <Card.Body>
                      <Card.Title className="text-warning">Business Systems</Card.Title>
                      <Card.Text>
                        Enterprise integration, Asset management, Cost optimization,
                        Vendor dependency elimination, Business continuity planning
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </motion.div>

            <motion.div variants={itemVariants} className="my-5 text-center">
              <h2 className="mb-4">Ready for Your Next Business-Critical Project?</h2>
              <p className="lead mb-4">Specializing in enterprise software modernization and scalable platform development.</p>
              <Row className="justify-content-center">
                <Col md={8}>
                  <Card className="border-0 shadow-sm">
                    <Card.Body className="p-4">
                      <h5 className="mb-3">Contact Information</h5>
                      <div className="d-flex flex-column flex-md-row justify-content-center align-items-center">
                        <div className="mb-2 mb-md-0 me-md-4">
                          <Mail className="me-2" size={18} />
                          <a href="mailto:salilharit2001@gmail.com" className="text-decoration-none">salilharit2001@gmail.com</a>
                        </div>
                        <div className="mb-2 mb-md-0 me-md-4">
                          📱 +91 9220966708
                        </div>
                        <div>
                          📍 Delhi, India
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </motion.div>
          </motion.div>
        </Container>
      </div>
    </>
  );
};

export default Home;