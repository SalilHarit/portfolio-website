import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShieldCheck, Database, Layout, TrendingUp, CheckCircle, Server, BarChart3, Settings, Zap, History, ClipboardCheck, AlertCircle, Eye, Grid } from 'lucide-react';
import './Home.css';
import PasswordShield from './PasswordShield';

// Import all 22 screenshots for FAMS
import f1 from '../assets/fams/image.png';
import f2 from '../assets/fams/image copy.png';
import f3 from '../assets/fams/image copy 2.png';
import f4 from '../assets/fams/image copy 3.png';
import f5 from '../assets/fams/image copy 4.png';
import f6 from '../assets/fams/image copy 5.png';
import f7 from '../assets/fams/image copy 6.png';
import f8 from '../assets/fams/image copy 7.png';
import f9 from '../assets/fams/image copy 8.png';
import f10 from '../assets/fams/image copy 9.png';
import f11 from '../assets/fams/image copy 10.png';
import f12 from '../assets/fams/image copy 11.png';
import f13 from '../assets/fams/image copy 12.png';
import f14 from '../assets/fams/image copy 13.png';
import f15 from '../assets/fams/image copy 14.png';
import f16 from '../assets/fams/image copy 15.png';
import f17 from '../assets/fams/image copy 16.png';
import f18 from '../assets/fams/image copy 17.png';
import f19 from '../assets/fams/image copy 18.png';
import f20 from '../assets/fams/image copy 19.png';
import f21 from '../assets/fams/image copy 20.png';
import f22 from '../assets/fams/image copy 21.png';

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

const FAMSArchitecturalAudit = () => {
    const allImages = [f1, f2, f3, f4, f5, f6, f7, f8, f9, f10, f11, f12, f13, f14, f15, f16, f17, f18, f19, f20, f21, f22];
    const [activeIndex, setActiveIndex] = useState(0);

    const handleSelect = (selectedIndex: number) => {
        setActiveIndex(selectedIndex);
    };

    const scrollToCarousel = () => {
        const carouselElement = document.getElementById('main-carousel');
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
                <ArrowLeft size={18} className="me-2" /> Back to Project Portfolio
              </Link>
              
              <div className="text-center">
                <span className="project-tag text-uppercase fw-bold opacity-50 spacing-1">Enterprise Strategic SaaS</span>
                <h1 className="display-3 mb-3 fw-bold">Fixed Asset Management Platform</h1>
                <p className="lead mx-auto col-lg-8 text-muted">
                  Digitizing high-compliance asset lifecycles for complex, multi-site enterprise organizations.
                </p>
              </div>
            </motion.div>

            <motion.section variants={itemVariants} className="mb-5 py-4">
              <div className="glass-card mb-5 p-4 p-md-5 border-start border-4 border-primary shadow-sm" style={{ backgroundColor: '#fff' }}>
                <div className="d-flex align-items-center mb-3">
                  <AlertCircle className="text-primary me-3" size={32} />
                  <h2 className="h3 fw-bold mb-0 text-dark">The Market Problem it Solves</h2>
                </div>
                <p className="lead text-secondary mb-0 fw-medium" style={{ lineHeight: '1.8', color: '#444' }}>
                   Enterprise asset management is typically trapped in <strong>fragmented, manual spreadsheets</strong>. 
                   For high-compliance sectors, this leads to <strong>audit failures, inaccurate depreciation calculations</strong>, 
                   and millions in lost tax benefits or capital expenditure (CAPEX) errors. Managing thousands of assets 
                   without a unified ledger is a severe financial and operational risk.
                </p>
              </div>
            </motion.section>

            <motion.section variants={itemVariants} className="mb-5" id="main-carousel">
                <div className="text-center mb-4">
                    <h2 className="h4 fw-bold">Interface Feature Highlight</h2>
                    <p className="small text-muted">Viewing {activeIndex + 1} of {allImages.length} system states</p>
                </div>
                
                <Carousel activeIndex={activeIndex} onSelect={handleSelect} className="glass-card shadow-2xl overflow-hidden" indicators={true} interval={5000} fade>
                  {allImages.map((img, idx) => (
                    <Carousel.Item key={idx}>
                       <div className="bg-dark d-flex align-items-center justify-content-center" style={{ minHeight: '600px', padding: '1.5rem' }}>
                          <img 
                            src={img} 
                            alt={`Module Interface ${idx + 1}`} 
                            className="img-fluid rounded-3 shadow-lg"
                            style={{ maxHeight: '550px', objectFit: 'contain' }}
                          />
                       </div>
                    </Carousel.Item>
                  ))}
                </Carousel>
            </motion.section>

            <motion.section variants={itemVariants} className="mb-5 py-5 border-top border-bottom">
              <Row className="g-5 align-items-center">
                <Col lg={7}>
                  <h2 className="display-5 fw-bold mb-4">The Strategic Solution</h2>
                  <p className="text-secondary mb-4 fs-5" style={{ lineHeight: '1.8' }}>
                    FAMS provides a centralized source of truth—automating Asset ID generation, 
                    multi-method depreciation, and financial audit trails. It shifts the finance team 
                    from manual data entry to <strong>high-level financial governance</strong>.
                  </p>
                  <Row xs={1} md={2} className="g-4">
                    <Col>
                        <div className="d-flex align-items-center mb-1 text-primary fw-bold">
                            <CheckCircle size={18} className="me-2" /> Compliance core
                        </div>
                        <p className="small text-muted">Year-end fiscal calculations ready for external auditors.</p>
                    </Col>
                    <Col>
                        <div className="d-flex align-items-center mb-1 text-success fw-bold">
                            <TrendingUp size={18} className="me-2" /> ROI Precision
                        </div>
                        <p className="small text-muted">Preventing tax overpayments and capital loss via accurate tracking.</p>
                    </Col>
                  </Row>
                </Col>
                <Col lg={5}>
                    <div className="glass-card p-4 p-md-5 border-0 shadow-sm">
                        <h4 className="h5 fw-bold mb-4">Functional Moats</h4>
                        <div className="d-flex flex-wrap gap-2">
                            {["RBAC Governance", "WDV Automation", "Asset Lifecycles", "Auditor Logs", "FAR Reporting", "Barcode Ready"].map((t, i) => (
                                <span key={i} className="tech-pill bg-light text-primary px-3 py-2 rounded-3 small fw-bold">{t}</span>
                            ))}
                        </div>
                    </div>
                </Col>
              </Row>
            </motion.section>

            <motion.section variants={itemVariants} className="mb-5 py-4">
                <div className="text-center mb-5">
                    <h2 className="h4 fw-bold">Interface Library Explorer</h2>
                    <p className="small text-muted">Click a thumbnail below to view the module in detail above</p>
                </div>
                <div className="archive-grid">
                    <Row xs={2} md={4} lg={6} className="g-2">
                        {allImages.map((img, idx) => (
                            <Col key={idx}>
                                <div 
                                    className={`glass-card p-1 h-100 hover-lift hover-shadow cursor-pointer transition-all ${activeIndex === idx ? 'border border-2 border-primary' : 'border-0'}`}
                                    onClick={() => { setActiveIndex(idx); scrollToCarousel(); }}
                                >
                                    <div className="position-relative overflow-hidden rounded">
                                        <img src={img} alt={`Archive UI ${idx}`} className="img-fluid rounded opacity-80 hover-opacity-100 transition-all" style={{ aspectRatio: '16/10', objectFit: 'cover' }} />
                                        {activeIndex === idx && (
                                            <div className="position-absolute top-0 start-0 w-100 h-100 bg-primary bg-opacity-10 d-flex align-items-center justify-content-center">
                                                <div className="bg-primary text-white p-1 rounded-circle"><CheckCircle size={12} /></div>
                                            </div>
                                        )}
                                    </div>
                                    <div className="mt-2 text-center text-muted small fw-bold" style={{ fontSize: '0.6rem' }}>UI {idx + 1}</div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
            </motion.section>

            <motion.div variants={itemVariants} className="text-center mt-5">
              <Link to="/" className="btn btn-primary px-5 py-3 fw-bold rounded-pill shadow-lg">
                Return to Product Portfolio
              </Link>
            </motion.div>
          </motion.div>
        </Container>
      </div>
    </PasswordShield>
  );
};

export default FAMSArchitecturalAudit;
