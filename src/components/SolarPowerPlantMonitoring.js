import React from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Zap, Activity, Server, Database, BarChart3, Globe, CheckCircle, Smartphone, Layout, Settings, AlertCircle, TrendingUp, ShieldCheck, History, ClipboardCheck } from 'lucide-react';
import './Home.css';
import PasswordShield from './PasswordShield';
import solarMockup from '../assets/solar.png';

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

function SolarPowerPlantMonitoring() {
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
                <span className="project-tag text-uppercase fw-bold opacity-50 spacing-1">Industrial Cloud IoT Integration</span>
                <h1 className="display-3 mb-3 fw-bold">Solar Cloud: Havells Factory Deployment</h1>
                <p className="lead mx-auto col-lg-8 text-muted">
                    Engineering a high-frequency telemetry pipeline for 31 utility-scale industrial solar inverters.
                </p>
              </div>
            </motion.div>

            <motion.section variants={itemVariants} className="mb-5 py-4">
              <div className="glass-card mb-5 p-4 p-md-5 border-start border-4 border-primary shadow-sm" style={{ backgroundColor: '#fff' }}>
                <div className="d-flex align-items-center mb-3">
                  <AlertCircle className="text-primary me-3" size={32} />
                  <h2 className="h3 fw-bold mb-0 text-dark">The Market & Field Problem</h2>
                </div>
                <div className="text-secondary mb-0 fw-medium" style={{ lineHeight: '1.8', color: '#444' }}>
                  The Havells Sriharicity plant faced critical operational dark spots:
                  <ul className="mt-2">
                    <li><strong>Financial Loss</strong>: 18/31 inverters were exporting excess energy causing reverse-feed charges.</li>
                    <li><strong>Communication Void</strong>: No centralized visibility into 31 inverters spread across 3 location clusters.</li>
                    <li><strong>Detection Lag</strong>: Physically cut DC cables on Inverters 6 and 19 went undetected without remote monitoring.</li>
                    <li><strong>Backend Loop Error</strong>: Previous algorithm looping orphaned 12 inverters from the cloud.</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            <motion.section variants={itemVariants} className="mb-5 py-4">
              <div className="glass-card overflow-hidden shadow-2xl border-0">
                <Row className="g-0 align-items-center">
                  <Col lg={7} className="p-4 p-md-5">
                    <h2 className="display-6 fw-bold mb-4">The Architectural Solution</h2>
                    <p className="text-secondary mb-4" style={{ lineHeight: '1.8' }}>
                      Deployed a three-tier IoT-to-Cloud pipeline to restore total factory visibility. 
                      Connecting on-site <strong>Wattmon Data Loggers</strong> to a serverless <strong>AWS + MongoDB Atlas</strong> backend.
                    </p>
                    <div className="d-flex flex-column gap-3">
                      <div className="d-flex align-items-center border-start border-3 border-primary ps-3">
                        <div>
                          <div className="fw-bold text-dark">AWS Serverless Pipeline</div>
                          <div className="small text-muted">API Gateway + Lambda transforming URL-encoded telemetry to JSON via VTL.</div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center border-start border-3 border-success ps-3">
                        <div>
                          <div className="fw-bold text-dark">MongoDB Atlas Ledger</div>
                          <div className="small text-muted">Time-series persistence for 170+ sensor fields per reading.</div>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg={5} className="bg-dark p-4 text-center">
                    <img src={solarMockup} alt="Solar Monitoring Product" className="img-fluid rounded-4 shadow-lg border border-light border-opacity-10" />
                  </Col>
                </Row>
              </div>
            </motion.section>

            <motion.section variants={itemVariants} className="mb-5 py-5 border-top">
                <h2 className="h4 fw-bold mb-4">Technology Stack Alignment</h2>
                <Row className="g-4">
                    <Col md={6}>
                        <Table responsive className="small border-0 glass-card p-3">
                            <thead>
                                <tr className="text-uppercase fw-bold text-primary" style={{ fontSize: '0.75rem' }}>
                                    <th>Layer</th>
                                    <th>Technology</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>Cloud Provider</td><td>Amazon Web Services (AWS)</td></tr>
                                <tr><td>Compute</td><td>AWS Lambda (Python 3.x)</td></tr>
                                <tr><td>Database</td><td>MongoDB Atlas</td></tr>
                                <tr><td>Edge Hardware</td><td>Wattmon + Raspberry Pi</td></tr>
                                <tr><td>Protocol</td><td>Modbus RS485 → Optic Fibre</td></tr>
                            </tbody>
                        </Table>
                    </Col>
                    <Col md={6}>
                        <div className="glass-card p-4 h-100 d-flex flex-column justify-content-center">
                            <h5 className="fw-bold text-primary mb-3">Measured Field Impact</h5>
                            <div className="d-flex justify-content-between mb-2">
                                <span className="text-muted">API Latency (Production)</span>
                                <span className="fw-bold">~1,969 ms</span>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <span className="text-muted">Sensor Coverage</span>
                                <span className="fw-bold">170+ fields / reading</span>
                            </div>
                            <div className="d-flex justify-content-between">
                                <span className="text-muted">System Visibility</span>
                                <span className="fw-bold text-success">31 / 31 Inverters</span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </motion.section>

            <motion.section variants={itemVariants} className="mb-5 py-4">
              <h2 className="section-title h4 mb-4">Core Functional Capabilities</h2>
              <Row className="g-4">
                <Col md={3} sm={6}>
                  <div className="glass-card p-4 h-100 text-center">
                    <Activity size={32} className="text-primary mb-3 mx-auto" />
                    <h5 className="h6 fw-bold">Real-time Telemetry</h5>
                    <p className="small text-muted mb-0">High-frequency ingestion from 31 solar PV inverters via Modbus.</p>
                  </div>
                </Col>
                <Col md={3} sm={6}>
                  <div className="glass-card p-4 h-100 text-center">
                    <ShieldCheck size={32} className="text-success mb-3 mx-auto" />
                    <h5 className="h6 fw-bold">Integrity Filtering</h5>
                    <p className="small text-muted mb-0">MD5 checksum verification for secure industrial data transmission.</p>
                  </div>
                </Col>
                <Col md={3} sm={6}>
                  <div className="glass-card p-4 h-100 text-center">
                    <Database size={32} className="text-info mb-3 mx-auto" />
                    <h5 className="h6 fw-bold">VTL Transformation</h5>
                    <p className="small text-muted mb-0">Seamless decoding of URL-encoded device payloads to cloud JSON.</p>
                  </div>
                </Col>
                <Col md={3} sm={6}>
                  <div className="glass-card p-4 h-100 text-center">
                    <Zap size={32} className="text-warning mb-3 mx-auto" />
                    <h5 className="h6 fw-bold">Remote Diagnostics</h5>
                    <p className="small text-muted mb-0">Empowering field technicians to identify cut DC cables via cloud data.</p>
                  </div>
                </Col>
              </Row>
            </motion.section>

            <motion.div variants={itemVariants} className="text-center mt-5">
              <Link to="/" className="btn btn-primary px-5 py-3 fw-bold rounded-pill shadow-lg">
                Return to Master Portfolio
              </Link>
            </motion.div>
          </motion.div>
        </Container>
      </div>
    </PasswordShield>
  );
}

export default SolarPowerPlantMonitoring;
