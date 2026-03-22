import { motion } from 'framer-motion';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Smartphone, FileText, CheckCircle, SmartphoneIcon, UserCheck, Shield, Zap, Globe, Layout, AlertCircle, TrendingUp } from 'lucide-react';
import './Home.css';
import PasswordShield from './PasswordShield';
import secerpMockup from '../assets/secerp.png';

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

const SecERPPortfolio = () => {
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
              <Link to="/" className="text-decoration-none text-primary fw-bold d-flex align-items-center mb-4">
                <ArrowLeft size={18} className="me-2" /> Back to Product Portfolio
              </Link>
              
              <div className="text-center">
                <span className="project-tag text-uppercase fw-bold opacity-50 spacing-1">SaaS Growth Strategy</span>
                <h1 className="display-3 mb-3 fw-bold">SEC ERP: Security Operations Platform</h1>
                <p className="lead mx-auto col-lg-8 text-muted">
                  Optimizing accountability and statutory compliance for India's 23,000+ security agencies.
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
                  India's private security market (₹73,000 Cr) is technically primitive. Most agencies operate via 
                  paper registers, causing <strong>unchecked attendance fraud</strong> and 
                  <strong>statutory errors in PF/ESI/PT</strong>. This leads to 10-15% revenue leakage and severe legal exposure for agency owners.
                </p>
              </div>
            </motion.section>

            <motion.section variants={itemVariants} className="mb-5 py-4">
              <div className="glass-card overflow-hidden mb-5">
                <Row className="g-0 align-items-center shadow-lg">
                  <Col lg={7} className="p-4 p-md-5">
                    <h2 className="display-6 fw-bold mb-4">The Solution Approach</h2>
                    <p className="text-secondary mb-4" style={{ lineHeight: '1.8' }}>
                      SEC ERP bridges the accountability gap by linking <strong>GPS-verified field attendance</strong> directly to 
                      an automated, statutory-compliant payroll core. No manual entry, zero leakage.
                    </p>
                    <div className="d-flex flex-column gap-3">
                      <div className="d-flex align-items-center border-start border-3 border-primary ps-3">
                        <div>
                          <div className="fw-bold text-dark">GPS Geofenced Punch-ins</div>
                          <div className="small text-muted">Verification logic prevents attendance fraud at remote sites.</div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center border-start border-3 border-success ps-3">
                        <div>
                          <div className="fw-bold text-dark">Statutory Rules Engine</div>
                          <div className="small text-muted">Automated PF/ESI/PT/GST calculations as per Indian law.</div>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg={5} className="p-4 text-center bg-light">
                    <img src={secerpMockup} alt="SEC ERP Mobile App" className="img-fluid rounded-4 shadow-lg" style={{ maxHeight: '420px' }} />
                  </Col>
                </Row>
              </div>
            </motion.section>

            <motion.div variants={itemVariants} className="text-center mt-5">
              <Link to="/" className="btn btn-primary px-5 py-3 fw-bold rounded-pill">
                Return to Product Portfolio
              </Link>
            </motion.div>
          </motion.div>
        </Container>
      </div>
    </PasswordShield>
  );
};

export default SecERPPortfolio;
