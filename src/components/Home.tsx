import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container, Row, Col, Card, Badge, Button, Nav, Navbar } from 'react-bootstrap';
import { 
  Smartphone, 
  Database, 
  Cloud, 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Zap, 
  Server,
  Terminal,
  Cpu,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Layers
} from 'lucide-react';
import './Home.css';
import { Link } from 'react-router-dom';
import PlayStoreLogo from './google-play-badge-logo-svgrepo-com.svg';

const projects = [
  {
    title: "FAMS — Enterprise Asset Management System",
    stack: ["Flutter", "Riverpod", "Spring Boot", "PostgreSQL", "JWT", "REST APIs"],
    oneLiner: "106-screen Flutter app replacing a legacy VB.NET system for a 40-year-old IT services company.",
    stats: "UAT Complete",
    link: "/enterprise-modernization",
    image: "/assets/fams.png",
    technicalBullets: [
      "Financial compliance engine: SLM/WDV/UOP depreciation, IT Act + Companies Act dual-rule sets, GST, multi-company data isolation",
      "JWT-based role/rights system, tamper-proof audit trail, QR/barcode asset tracking",
      "Full UAT lifecycle: 173 requirements across 17 modules tracked with P1–P4 priority framework"
    ],
    footnote: "Presented to Rajasthan State Health Department (NIC) for government hospital deployment."
  },
  {
    title: "AstroVista — EdTech Platform",
    stack: ["Flutter", "Firebase", "Firestore", "Algolia", "Razorpay", "GCP"],
    oneLiner: "Full-stack mobile EdTech platform for astrology education — video, audio, live sessions, e-books.",
    stats: "Live on Play Store",
    link: "/astrovista-wellness",
    image: "/assets/astrovista.png",
    technicalBullets: [
      "Multi-role app: student, creator, and admin dashboards with separate permission systems",
      "Algolia search integration, Razorpay payment gateway, multi-language support (EN/HI/TE/TA)",
      "White-label architecture: platform can be redeployed as custom-branded app for individual creators"
    ],
    isPlayStore: true
  },
  {
    title: "Solar Plant IoT Monitoring — Cloud Infrastructure",
    stack: ["AWS Lambda", "API Gateway", "MongoDB", "Python", "Raspberry Pi"],
    oneLiner: "End-to-end IoT data pipeline for real-time monitoring of 2.8MW industrial solar installation.",
    stats: "99.9% Uptime",
    link: "/solar-monitoring",
    image: "/assets/solar.png",
    technicalBullets: [
      "Raspberry Pi data loggers → API Gateway → Lambda → MongoDB Atlas pipeline processing 150+ parameters per reading",
      "Time-series schema design, Lambda layers, VTL mapping templates",
      "Replaced manual on-site data collection across 3 industrial sites, 31 inverters"
    ]
  },
  {
    title: "SEC ERP — Security Operations Platform",
    stack: ["Flutter", "Firebase", "Cloud Functions", "Google Maps SDK"],
    oneLiner: "Accountability and statutory compliance platform for India's private security market.",
    stats: "Deployment Ready",
    link: "/secerp-case-study",
    image: "/assets/secerp.png",
    technicalBullets: [
      "GPS-geofenced attendance system preventing remote site proxy logins",
      "Automated Indian statutory rules engine for PF/ESI/PT/GST compliance",
      "Real-time field guard tracking and incident reporting dashboard"
    ]
  }
];

const skills = [
  { category: "Mobile", items: ["Flutter", "Dart", "Riverpod", "FlutterFlow"] },
  { category: "Backend", items: ["Spring Boot", "Node.js", "Express", "AWS Lambda"] },
  { category: "Databases", items: ["PostgreSQL", "Firebase Firestore", "MongoDB"] },
  { category: "Cloud & IoT", items: ["AWS (S3, API Gateway)", "GCP", "Raspberry Pi", "VTL"] },
  { category: "Tools", items: ["Git", "Jira", "Algolia", "Razorpay", "Linux/Bash"] }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
};

const Home = () => {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className="portfolio-wrapper min-vh-100">
      <div className="bg-mesh" />
      
      {/* Navigation */}
      <Navbar expand="lg" variant="dark" className="fixed-top glass-nav px-md-5">
        <Container fluid>
          <Navbar.Brand href="/" className="fw-bold tracking-tighter">SALIL HARIT</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto gap-4 align-items-center">
              <Nav.Link href="#built" className="nav-hover uppercase small fw-bold">What I've Built</Nav.Link>
              <Nav.Link href="#expertise" className="nav-hover uppercase small fw-bold">Expertise</Nav.Link>
              <Nav.Link href="mailto:salilharit2001@gmail.com" className="btn btn-outline-primary btn-sm px-4 rounded-pill">HIRE ME</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <section className="hero-section d-flex align-items-center justify-content-center pt-5">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={10}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <Badge bg="primary" className="mb-3 px-3 py-2 rounded-pill opacity-75">BTech · Batch of 2025</Badge>
                <h1 className="display-1 fw-bold main-title mb-3">
                  Flutter <span className="text-primary">Developer</span>
                </h1>
                <p className="lead fw-bold mb-4 opacity-75 spacing-2 text-primary">
                    Dart · Spring Boot · PostgreSQL · Firebase · AWS
                </p>
                <p className="mx-auto col-md-8 text-muted mb-5 fs-5 lh-base">
                  I build production Flutter apps and backend APIs. Recent work includes a 106-screen enterprise asset management system for a 40-year-old IT firm (Flutter/Riverpod + Spring Boot + PostgreSQL) and a live EdTech platform on the Play Store. Based in Delhi, graduating June 2025, open to full-time roles.
                </p>
                <div className="d-flex gap-3 justify-content-center mb-5 mt-4">
                  <a href="mailto:salilharit2001@gmail.com" className="btn btn-primary btn-lg px-5 py-3 rounded-pill shadow-lg d-flex align-items-center gap-2">
                    <Mail size={20} /> Get In Touch
                  </a>
                  <div className="d-flex gap-2">
                    <a href="https://github.com/SalilHarit" target="_blank" rel="noopener noreferrer" className="social-icon-btn"><Github size={24} /></a>
                    <a href="https://linkedin.com/in/salil-harit-85565622" target="_blank" rel="noopener noreferrer" className="social-icon-btn"><Linkedin size={24} /></a>
                  </div>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Projects Section */}
      <section id="built" className="py-5">
        <Container>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="section-header text-center mb-5">
              <h2 className="display-5 fw-bold mb-3">What I've Built</h2>
              <p className="text-muted">Production-ready applications and infrastructure</p>
            </div>

            <Row className="g-4">
              {projects.map((project, idx) => (
                <Col lg={6} key={idx}>
                  <motion.div variants={itemVariants} className="h-100">
                    <Card className="glass-card project-card h-100 border-0 overflow-hidden shadow-sm">
                      <div className="p-4 p-md-5 d-flex flex-column h-100">
                        <div className="mb-4">
                          <div className="d-flex flex-wrap gap-2 mb-3">
                            {project.stack.map((s, i) => (
                              <Badge key={i} bg="light" className="text-primary border border-primary border-opacity-25 px-2 py-1">{s}</Badge>
                            ))}
                          </div>
                          <h3 className="h4 fw-bold mb-2">{project.title}</h3>
                          <p className="text-muted small fw-bold mb-3">{project.oneLiner}</p>
                        </div>
                        
                        <div className="flex-grow-1 mb-4">
                            <ul className="list-unstyled mb-0">
                                {project.technicalBullets.map((bullet, i) => (
                                    <li key={i} className="d-flex align-items-start mb-2 small text-secondary">
                                        <CheckCircle2 size={16} className="text-primary me-2 mt-1 flex-shrink-0" />
                                        <span>{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {project.footnote && (
                            <div className="mb-4 p-2 bg-light rounded text-muted x-small fw-medium italic border-start border-3 border-primary">
                                {project.footnote}
                            </div>
                        )}

                        <div className="mt-auto pt-4 border-top d-flex align-items-center justify-content-between">
                          <Link to={project.link} className="btn-modern-small d-flex align-items-center gap-2 text-decoration-none">
                             View Case Study <ArrowRight size={16} />
                          </Link>
                          <div className="d-flex align-items-center gap-2">
                             <Badge bg="success" className="bg-opacity-10 text-success border border-success border-opacity-25 px-3 py-2 rounded-pill small">
                                {project.stats}
                             </Badge>
                             {project.isPlayStore && (
                                <img src={PlayStoreLogo} alt="Google Play" style={{ height: '30px' }} />
                             )}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </motion.div>
        </Container>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-5 bg-mesh-alt">
        <Container>
          <div className="section-header text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Technical Expertise</h2>
            <p className="text-muted mx-auto col-md-6">A clear breakdown of my current development stack and tools.</p>
          </div>
          
          <Row className="justify-content-center">
            <Col lg={10}>
                <div className="glass-card p-4 p-md-5 shadow-sm border-0">
                    <Row className="g-4">
                        {skills.map((skillGroup, idx) => (
                            <Col md={4} key={idx} className="mb-4">
                                <h4 className="h6 fw-bold text-primary text-uppercase spacing-1 mb-3">{skillGroup.category}</h4>
                                <div className="d-flex flex-wrap gap-2">
                                    {skillGroup.items.map((skill, i) => (
                                        <span key={i} className="skill-tag px-3 py-1 rounded-pill small bg-white border text-muted fw-medium border-opacity-50">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <footer className="py-5 text-center mt-5">
        <Container>
            <div className="d-flex justify-content-center gap-4 mb-4">
                <a href="https://github.com/SalilHarit" target="_blank" rel="noopener noreferrer" className="text-muted hover-primary"><Github size={24} /></a>
                <a href="https://linkedin.com/in/salil-harit-85565622" target="_blank" rel="noopener noreferrer" className="text-muted hover-primary"><Linkedin size={24} /></a>
                <a href="mailto:salilharit2001@gmail.com" className="text-muted hover-primary"><Mail size={24} /></a>
            </div>
          <p className="text-muted small">&copy; {new Date().getFullYear()} Salil Harit. Built with React & Flutter Spirit.</p>
        </Container>
      </footer>
    </div>
  );
};

export default Home;