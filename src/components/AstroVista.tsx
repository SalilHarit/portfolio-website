import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Carousel, Col, Container, Row, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ArrowLeft, Globe, Zap, Users, Shield, Smartphone, Star, BarChart3, Database, Layout, Settings, AlertCircle, Eye, Grid, CheckCircle, Github, ExternalLink } from 'lucide-react';
import './Home.css';
import PasswordShield from './PasswordShield';
import PlayStoreLogo from './google-play-badge-logo-svgrepo-com.svg';

// Import ALL 23 screenshots for AstroVista mobile tour
import a1 from '../assets/astrovista/WhatsApp Image 2026-03-22 at 12.14.37 (1).jpeg';
import a2 from '../assets/astrovista/WhatsApp Image 2026-03-22 at 12.14.37.jpeg';
import a3 from '../assets/astrovista/WhatsApp Image 2026-03-22 at 12.14.38 (1).jpeg';
import a4 from '../assets/astrovista/WhatsApp Image 2026-03-22 at 12.14.38 (2).jpeg';
import a5 from '../assets/astrovista/WhatsApp Image 2026-03-22 at 12.14.38 (3).jpeg';
import a6 from '../assets/astrovista/WhatsApp Image 2026-03-22 at 12.14.38.jpeg';
import a7 from '../assets/astrovista/WhatsApp Image 2026-03-22 at 12.14.40.jpeg';
import a8 from '../assets/astrovista/WhatsApp Image 2026-03-22 at 12.14.41 (1).jpeg';
import a9 from '../assets/astrovista/WhatsApp Image 2026-03-22 at 12.14.41 (2).jpeg';
import a10 from '../assets/astrovista/WhatsApp Image 2026-03-22 at 12.14.41 (3).jpeg';
import a11 from '../assets/astrovista/WhatsApp Image 2026-03-22 at 12.14.41.jpeg';
import a12 from '../assets/astrovista/WhatsApp Image 2026-03-22 at 12.14.42 (1).jpeg';
import a13 from '../assets/astrovista/WhatsApp Image 2026-03-22 at 12.14.42 (2).jpeg';
import a14 from '../assets/astrovista/WhatsApp Image 2026-03-22 at 12.14.42 (3).jpeg';
import a15 from '../assets/astrovista/WhatsApp Image 2026-03-22 at 12.14.42.jpeg';
import a16 from '../assets/astrovista/WhatsApp Image 2026-03-22 at 12.14.43 (1).jpeg';
import a17 from '../assets/astrovista/WhatsApp Image 2026-03-22 at 12.14.43 (2).jpeg';
import a18 from '../assets/astrovista/WhatsApp Image 2026-03-22 at 12.14.43.jpeg';
import a19 from '../assets/astrovista/WhatsApp Image 2026-03-22 at 12.14.44 (1).jpeg';
import a20 from '../assets/astrovista/WhatsApp Image 2026-03-22 at 12.14.44 (2).jpeg';
import a21 from '../assets/astrovista/WhatsApp Image 2026-03-22 at 12.14.44 (3).jpeg';
import a22 from '../assets/astrovista/WhatsApp Image 2026-03-22 at 12.14.44.jpeg';
import a23 from '../assets/astrovista/WhatsApp Image 2026-03-22 at 12.14.45.jpeg';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      staggerChildren: 0.1
    } 
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const AstroVistaPortfolio = () => {
    const allImages = [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19, a20, a21, a22, a23];
    const [activeIndex, setActiveIndex] = useState(0);

    const handleSelect = (selectedIndex: number) => {
        setActiveIndex(selectedIndex);
    };

    const scrollToCarousel = () => {
        const carouselElement = document.getElementById('main-carousel-av');
        if (carouselElement) {
            carouselElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

  return (
    <PasswordShield>
      <div className="portfolio-wrapper min-vh-100 pb-5">
        <div className="bg-mesh" />
        
        <Container className="pt-5 mt-5">
          <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
          >
            <motion.div className="mb-5" variants={itemVariants}>
              <Link to="/" className="text-decoration-none text-primary fw-bold d-flex align-items-center mb-4 text-uppercase small spacing-1">
                <ArrowLeft size={18} className="me-2" /> Back to Engagement Portfolio
              </Link>
              
              <div className="text-center">
                <div className="d-flex justify-content-center gap-2 mb-3">
                    <Badge bg="success" className="bg-opacity-10 text-success border border-success border-opacity-25 px-3 py-2 rounded-pill small">LIVE ON PLAY STORE</Badge>
                </div>
                <h1 className="display-3 mb-3 fw-bold">AstroVista — EdTech Platform</h1>
                <p className="lead mx-auto col-lg-8 text-muted px-4">
                  Full-stack mobile application for astrology education featuring video, audio, live sessions and expert consultations.
                </p>
              </div>
            </motion.div>

            <motion.section variants={itemVariants} className="mb-5 py-4">
              <div className="glass-card mb-5 p-4 p-md-5 border-start border-4 border-primary shadow-sm" style={{ backgroundColor: '#fff' }}>
                <div className="d-flex align-items-center mb-3">
                  <AlertCircle className="text-primary me-3" size={32} />
                  <h2 className="h3 fw-bold mb-0 text-dark">Technical Challenge & Scope</h2>
                </div>
                <p className="lead text-secondary mb-0 fw-medium" style={{ lineHeight: '1.8', color: '#444' }}>
                  The spiritual wellness and EdTech market is flooded with <strong>low-quality apps</strong>. 
                  AstroVista re-engineers this as a <strong>performance-first ecosystem</strong>, focused on 
                  high-retention user paths and a robust global transactional core using Flutter, 
                  Firebase, and third-party SDKs like Razorpay and Algolia.
                </p>
              </div>
            </motion.section>

            <motion.section variants={itemVariants} className="mb-5 py-4" id="main-carousel-av">
                <div className="text-center mb-5">
                    <h2 className="h4 fw-bold">Mobile UI Architecture</h2>
                    <p className="small text-muted">A full tour of the student and creator dashboard experience</p>
                </div>
                
                <Row className="justify-content-center">
                    <Col lg={10}>
                        <Carousel activeIndex={activeIndex} onSelect={handleSelect} className="glass-card shadow-2xl overflow-hidden" indicators={true} interval={3500} fade>
                        {allImages.map((img, idx) => (
                            <Carousel.Item key={idx}>
                                <div className="bg-dark d-flex align-items-center justify-content-center" style={{ minHeight: '650px', padding: '1rem' }}>
                                    <img 
                                        src={img} 
                                        alt={`User Interface Stage ${idx + 1}`} 
                                        className="rounded-4 shadow-xl border border-light border-opacity-10"
                                        style={{ maxHeight: '600px', objectFit: 'contain' }}
                                    />
                                </div>
                            </Carousel.Item>
                        ))}
                        </Carousel>
                    </Col>
                </Row>
            </motion.section>

            <motion.section variants={itemVariants} className="mb-5 py-5 border-top border-bottom">
              <Row className="g-5 align-items-center">
                <Col lg={7}>
                    <h2 className="display-5 fw-bold mb-4">Functional Moats</h2>
                    <p className="text-secondary mb-4 fs-5" style={{ lineHeight: '1.8' }}>
                      Re-engineered high-retention user paths and a robust global transactional core.
                    </p>
                    <div className="d-flex flex-row flex-wrap gap-4 mt-2">
                        <div className="d-flex align-items-center">
                            <div className="bg-primary bg-opacity-10 p-2 rounded-circle me-3"><Star size={20} className="text-primary" /></div>
                            <div><div className="fw-bold small">Algolia Search</div></div>
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="bg-success bg-opacity-10 p-2 rounded-circle me-3"><Zap size={20} className="text-success" /></div>
                            <div><div className="fw-bold small">Razorpay SDK</div></div>
                        </div>
                    </div>
                </Col>
                <Col lg={5}>
                    <div className="glass-card p-4 p-md-5 border-0 shadow-sm">
                        <h4 className="h5 fw-bold mb-4">Tech Stack Highlights</h4>
                        <div className="d-flex flex-wrap gap-2">
                            {["Flutter", "Firebase", "Firestore", "Algolia", "Razorpay", "GCP", "Multi-language (i18n)"].map((t, i) => (
                                <span key={i} className="tech-pill bg-light text-primary px-3 py-2 rounded-3 small fw-bold">{t}</span>
                            ))}
                        </div>
                    </div>
                </Col>
              </Row>
            </motion.section>

            <motion.section variants={itemVariants} className="mb-5 py-4">
                <div className="text-center mb-5">
                    <h2 className="h4 fw-bold">Mobile UI Archives</h2>
                    <p className="small text-muted">Interactive record of all mobile interface states</p>
                </div>
                <div className="archive-grid">
                    <Row xs={2} md={5} lg={6} className="g-2">
                        {allImages.map((img, idx) => (
                            <Col key={idx}>
                                <div 
                                    className={`glass-card p-1 h-100 hover-lift hover-shadow cursor-pointer transition-all ${activeIndex === idx ? 'border border-2 border-primary' : 'border-0'}`}
                                    onClick={() => { setActiveIndex(idx); scrollToCarousel(); }}
                                >
                                    <div className="position-relative overflow-hidden rounded text-center d-flex align-items-center justify-content-center" style={{ backgroundColor: '#f8f9fa' }}>
                                        <img src={img} alt={`Mobile UI Archive ${idx}`} className="img-fluid rounded opacity-80 hover-opacity-100 transition-all" style={{ maxHeight: '180px', objectFit: 'contain' }} />
                                    </div>
                                    <div className="mt-2 text-center text-muted small fw-bold" style={{ fontSize: '0.6rem' }}>APP {idx + 1}</div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
            </motion.section>

            <motion.div variants={itemVariants} className="text-center mt-5 d-flex gap-3 justify-content-center">
              <Link to="/" className="btn btn-outline-primary px-5 py-3 fw-bold rounded-pill">
                Return to Home
              </Link>
              <a href="https://play.google.com/store/apps/details?id=com.astrovista" target="_blank" rel="noopener noreferrer" className="btn btn-primary px-4 py-3 fw-bold rounded-pill shadow-lg d-flex align-items-center gap-2">
                 <img src={PlayStoreLogo} alt="Google Play" style={{ height: '20px' }} /> View on Play Store <ExternalLink size={18} />
              </a>
              <a href="https://github.com/SalilHarit/astrovista" target="_blank" rel="noopener noreferrer" className="btn btn-dark px-5 py-3 fw-bold rounded-pill shadow-lg d-flex align-items-center gap-2">
                <Github size={18} /> View on GitHub
              </a>
            </motion.div>
          </motion.div>
        </Container>
      </div>
    </PasswordShield>
  );
};

export default AstroVistaPortfolio;
