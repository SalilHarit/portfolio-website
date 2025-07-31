import { motion } from 'framer-motion';
import { Badge, Card, Col, Container, ProgressBar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css';

const containerVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.1
    } 
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const projectPhases = [
  {
    phase: "Business Analysis & Requirements",
    status: "Completed",
    progress: 100,
    description: "Comprehensive analysis of legacy VB.NET system identifying 30+ critical business issues threatening operations.",
    deliverables: [
      "Complete system audit and risk assessment",
      "Business process documentation and mapping",
      "Critical issue identification and impact analysis",
      "Migration strategy and timeline development"
    ]
  },
  {
    phase: "Architecture Design",
    status: "Completed", 
    progress: 100,
    description: "Flutter/PostgreSQL architecture design ensuring seamless business process migration and enhanced capabilities.",
    deliverables: [
      "Technical architecture documentation",
      "Database schema design and optimization",
      "API specifications and integration points",
      "Security and compliance framework"
    ]
  },
  {
    phase: "Development & Testing",
    status: "Completed",
    progress: 100,
    description: "Core system development with comprehensive testing ensuring business continuity during transition.",
    deliverables: [
      "Core business modules implementation",
      "Data migration tools and validation",
      "Comprehensive test suite development",
      "Performance optimization and scalability testing"
    ]
  },
  {
    phase: "Production Deployment",
    status: "In Progress",
    progress: 75,
    description: "Phased deployment approach ensuring zero downtime and business continuity.",
    deliverables: [
      "Production environment setup",
      "Data migration execution",
      "User training and change management",
      "Post-deployment monitoring and support"
    ]
  }
];

const businessMetrics = [
  { label: "System Replacement Cost Avoided", value: "₹20+ Lakh", color: "success" },
  { label: "Critical Issues Resolved", value: "30+", color: "info" },
  { label: "Client Business Continuity", value: "100%", color: "primary" },
  { label: "Legacy System Age", value: "40+ Years", color: "warning" }
];

const EnterpriseModernization: React.FC = () => {
  return (
    <motion.div
      className="enterprise-modernization"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Container className="mt-5">
        <motion.div className="text-center mb-5" variants={itemVariants}>
          <h1 className="display-4 mb-3">FAMS Enterprise Modernization</h1>
          <p className="lead mb-3">Legacy VB.NET System Migration to Flutter/PostgreSQL Architecture</p>
          <div className="d-flex justify-content-center mb-3">
            <Badge bg="success" className="me-2 fs-6">Testing Phase Complete</Badge>
            <Badge bg="primary" className="fs-6">Production Deployment In Progress</Badge>
          </div>
          <p className="text-muted">Established IT Services Company • 40+ Years in Business • Business-Critical System</p>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-5">
          <Row>
            <Col md={6}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body>
                  <Card.Title className="text-danger mb-3">Business Challenge</Card.Title>
                  <Card.Text className="mb-3">
                    A 40+ year IT services company faced imminent system failure with their legacy VB.NET business management system. 
                    The system had developed 30+ critical issues threatening daily operations, customer management, and business continuity.
                  </Card.Text>
                  <ul className="list-unstyled">
                    <li>• Legacy VB.NET system with critical vulnerabilities</li>
                    <li>• 30+ business-critical issues requiring immediate resolution</li>
                    <li>• Threat to daily operations and customer service</li>
                    <li>• Potential ₹20+ lakh system replacement cost</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body>
                  <Card.Title className="text-success mb-3">Enterprise Solution</Card.Title>
                  <Card.Text className="mb-3">
                    Developed comprehensive Flutter/PostgreSQL modernization strategy ensuring seamless migration 
                    while preserving all business processes and preventing costly system replacement.
                  </Card.Text>
                  <ul className="list-unstyled">
                    <li>• Modern Flutter cross-platform architecture</li>
                    <li>• PostgreSQL database optimization and migration</li>
                    <li>• Zero-downtime deployment strategy</li>
                    <li>• Complete business continuity assurance</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-5">
          <h2 className="text-center mb-4">Business Impact Metrics</h2>
          <Row xs={1} md={2} lg={4} className="g-4">
            {businessMetrics.map((metric, index) => (
              <Col key={index}>
                <Card className={`text-center h-100 border-0 shadow-sm border-${metric.color} border-top`} style={{borderTopWidth: '4px'}}>
                  <Card.Body>
                    <h3 className={`text-${metric.color} mb-2`}>{metric.value}</h3>
                    <p className="mb-0 small">{metric.label}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-5">
          <h2 className="text-center mb-4">Project Timeline & Milestones</h2>
          <Row className="g-4">
            {projectPhases.map((phase, index) => (
              <Col key={index} md={6} lg={3}>
                <Card className="h-100 shadow-sm">
                  <Card.Body>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <Card.Title className="h6 mb-0">{phase.phase}</Card.Title>
                      <Badge bg={phase.status === 'Completed' ? 'success' : phase.status === 'In Progress' ? 'primary' : 'secondary'}>
                        {phase.status}
                      </Badge>
                    </div>
                    <ProgressBar 
                      now={phase.progress} 
                      variant={phase.status === 'Completed' ? 'success' : 'primary'} 
                      className="mb-3"
                      style={{height: '8px'}}
                    />
                    <Card.Text className="small text-muted mb-3">
                      {phase.description}
                    </Card.Text>
                    <div>
                      <strong className="small">Key Deliverables:</strong>
                      <ul className="list-unstyled small mt-2">
                        {phase.deliverables.map((deliverable, i) => (
                          <li key={i} className="mb-1">• {deliverable}</li>
                        ))}
                      </ul>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-5">
          <Row>
            <Col lg={8}>
              <Card className="shadow-sm">
                <Card.Body>
                  <Card.Title className="text-primary mb-3">Technical Architecture & Implementation</Card.Title>
                  <Row>
                    <Col md={6}>
                      <h6 className="text-success mb-2">Modern Technology Stack</h6>
                      <ul className="list-unstyled small">
                        <li>• <strong>Frontend:</strong> Flutter cross-platform framework</li>
                        <li>• <strong>Database:</strong> PostgreSQL with optimized schema</li>
                        <li>• <strong>Architecture:</strong> Microservices with API-first design</li>
                        <li>• <strong>Security:</strong> Enterprise-grade authentication and authorization</li>
                      </ul>
                    </Col>
                    <Col md={6}>
                      <h6 className="text-info mb-2">Migration Strategy</h6>
                      <ul className="list-unstyled small">
                        <li>• <strong>Data Migration:</strong> Automated tools with validation</li>
                        <li>• <strong>Process Mapping:</strong> Complete business logic preservation</li>
                        <li>• <strong>Testing:</strong> Comprehensive QA and user acceptance</li>
                        <li>• <strong>Deployment:</strong> Phased rollout with rollback capability</li>
                      </ul>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4}>
              <Card className="shadow-sm h-100">
                <Card.Body className="d-flex flex-column justify-content-center">
                  <div className="text-center">
                    <h5 className="text-primary mb-3">Client Testimonial</h5>
                    <blockquote className="blockquote small">
                      <p className="mb-3">"Delivered business-critical system modernization preventing major capital expenditure replacement while ensuring complete business continuity."</p>
                      <footer className="blockquote-footer">
                        <cite title="Source Title">IT Services Company CFO</cite>
                      </footer>
                    </blockquote>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </motion.div>

        <motion.div variants={itemVariants} className="text-center mb-5">
          <Card className="shadow-sm">
            <Card.Body className="p-4">
              <h5 className="mb-3">Enterprise System Modernization Services</h5>
              <p className="mb-3">
                Specializing in legacy system migration and business-critical application modernization 
                for established enterprises requiring zero-downtime transitions.
              </p>
              <div className="d-flex flex-column flex-md-row justify-content-center align-items-center">
                <Link to="/" className="btn btn-primary me-md-3 mb-2 mb-md-0">
                  ← Back to Portfolio
                </Link>
                <div className="text-muted">
                  <small>📧 salilharit2001@gmail.com | 📱 +91 9220966708</small>
                </div>
              </div>
            </Card.Body>
          </Card>
        </motion.div>
      </Container>
    </motion.div>
  );
};

export default EnterpriseModernization;
