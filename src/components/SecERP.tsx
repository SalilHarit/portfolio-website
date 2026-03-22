import { motion } from 'framer-motion';
import { Col, Container, Row, Badge } from 'react-bootstrap';
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
              <Link to="/" className="text-decoration-none text-primary fw-bold d-flex align-items-center mb-4 text-uppercase small spacing-1">
                <ArrowLeft size={18} className="me-2" /> Back to Project Portfolio
              </Link>
              
              <div className="text-center">
                <div className="d-flex justify-content-center gap-2 mb-3">
                    <Badge bg="primary" className="bg-opacity-10 text-primary border border-primary border-opacity-25 px-3 py-2 rounded-pill small">DEPLOYMENT READY</Badge>
                </div>
                <h1 className="display-3 mb-3 fw-bold">SEC ERP — Security Operations</h1>
                <p className="lead mx-auto col-lg-8 text-muted px-4">
                  Accountability and statutory compliance platform for India's private security market.
                </p>
              </div>
            </motion.div>

            <motion.section variants={itemVariants} className="mb-5 py-4">
              <div className="glass-card mb-5 p-4 p-md-5 border-start border-4 border-primary shadow-sm" style={{ backgroundColor: '#fff' }}>
                <div className="d-flex align-items-center mb-3">
                  <AlertCircle className="text-primary me-3" size={32} />
                  <h2 className="h3 fw-bold mb-0 text-dark">Technical Challenge: Operational Leakage</h2>
                </div>
                <p className="lead text-secondary mb-0 fw-medium" style={{ lineHeight: '1.8', color: '#444' }}>
                  India's private security market is technically primitive. Agencies operate via 
                  paper registers, causing unchecked attendance fraud and statutory errors in PF/ESI. 
                  SEC ERP re-engineers this with <strong>GPS-geofenced attendance</strong> and a 
                  <strong>real-time rules engine</strong> for 100% compliance automation.
                </p>
              </div>
            </motion.section>

            <motion.section variants={itemVariants} className="mb-5 py-4">
              <div className="glass-card shadow-lg overflow-hidden border-0">
                <Row className="g-0 align-items-center">
                  <Col lg={7} className="p-4 p-md-5">
                    <h2 className="display-6 fw-bold mb-4">Architecture & Logic</h2>
                    <p className="text-secondary mb-4 fs-5" style={{ lineHeight: '1.8' }}>
                      Bridging the accountability gap by linking physical field state to financial core.
                    </p>
                    <div className="d-flex flex-column gap-4">
                        <div className="d-flex align-items-center">
                            <div className="bg-primary bg-opacity-10 p-2 rounded-circle me-3"><MapPin size={24} className="text-primary" /></div>
                            <div>
                                <div className="fw-bold h6 mb-1">Geofencing Algorithm</div>
                                <div className="small text-muted">Google Maps SDK verification prevents remote site proxy logins.</div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="bg-success bg-opacity-10 p-2 rounded-circle me-3"><FileText size={24} className="text-success" /></div>
                            <div>
                                <div className="fw-bold h6 mb-1">Statutory Rules Engine</div>
                                <div className="small text-muted">Cloud Functions for automated PF/ESI/PT/GST compliance.</div>
                            </div>
                        </div>
                    </div>
                  </Col>
                  <Col lg={5} className="p-4 text-center bg-light">
                    <img src={secerpMockup} alt="SEC ERP UI" className="img-fluid rounded-4 shadow-xl" style={{ maxHeight: '450px', objectFit: 'contain' }} />
                  </Col>
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

export default SecERPPortfolio;
