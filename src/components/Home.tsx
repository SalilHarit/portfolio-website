import { motion } from 'framer-motion';
import { LinkedinIcon, Mail, Phone, MapPin, ExternalLink, ShieldCheck, TrendingUp, Zap, Users, Code, Layout, Database, Globe, Lightbulb, PieChart, Shield, AlertCircle } from 'lucide-react';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css';
import meImage from './me.jpg';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const projects = [
  {
    title: "SEC ERP: Security Operations",
    tag: "Market Product Solution",
    problem: "Attendance fraud and statutory non-compliance in a ₹73k Cr market.",
    description: "Built to eliminate 10-15% revenue leakage and high legal liability for private security agencies by linking GPS-verified field activity directly to payroll.",
    client: "Target: 23,000+ PSARA-licensed agencies",
    status: "Product-Market Fit Stage",
    impact: "Total operational accountability and 100% statutory deduction accuracy.",
    technologies: ["Anti-Fraud GPS Logic", "Statutory Rules Engine", "Offline-First Sync"],
    link: "/secerp-case-study",
    icon: <ShieldCheck size={20} />
  },
  {
    title: "Enterprise Asset Platform (FAMS)",
    tag: "Strategic ERP Solution",
    problem: "Manual spreadsheet errors leading to audit failures and lost tax benefits.",
    description: "Replaced fragmented excel tracking with a unified source of truth for high-compliance asset lifecycles, ensuring auditor-ready accuracy and fiscal transparency.",
    client: "Client: MCS Computer Services",
    status: "Production Deployment",
    impact: "90% Faster fiscal period closings and durable financial integrity.",
    technologies: ["Lifecycle Automation", "Audit-Ready Logs", "Financial Scalability"],
    link: "/enterprise-modernization",
    icon: <Database size={20} />
  },
  {
    title: "Solar IoT Monitoring Ecosystem",
    tag: "Industrial Product Ops",
    problem: "High recurring SaaS costs and vendor-lock for inverter monitoring.",
    description: "Built a vendor-agnostic cloud pipeline to eliminate third-party dependencies, providing real-time data ingestion for 2.8MW+ of industrial solar power.",
    client: "Industrial Sector: Clean Energy",
    status: "Active Field Operations",
    impact: "₹2-3L Annual savings by replacing external monitoring platforms.",
    technologies: ["Real-Time Telemetry", "AWS IoT Cloud", "Vendor Independence"],
    link: "/SolarPlantMonitoring",
    icon: <Zap size={20} />
  },
  {
    title: "AstroVista Wellness Platform",
    tag: "B2C Product Brand",
    problem: "Low-quality user experience and poor monetization in wellness apps.",
    description: "Engineered a premium wellness ecosystem with automated content delivery and secure global transactions, achieving high retention for a growing brand.",
    client: "Sector: EdTech & Wellness",
    status: "Live on Play Store",
    impact: "Professional-grade UX and 40% reduction in infrastructure costs.",
    technologies: ["Mobile CX Mastery", "Subscription Models", "Global Payments"],
    link: "/astro-vista",
    icon: <Globe size={20} />
  }
];

const stats = [
  { value: "4 Products", label: "Built Solo/Lead", color: "var(--primary)" },
  { value: "₹3 Cr+", label: "Market Opportunity (ARR)", color: "var(--secondary)" },
  { value: "2.8MW+", label: "Solar Monitoring Scale", color: "#8b5cf6" },
  { value: "10+ Sectors", label: "Sector Versatility", color: "#f59e0b" }
];

const sectors = [
  "FinTech & ERP", "Clean Energy", "Agri-Trade", "Defence", "Skilling", "International BD", "Digital Services", "Supply Chain"
];

const Home: React.FC = () => {
  return (
    <div className="portfolio-wrapper">
      <div className="bg-mesh" />
      
      <motion.div initial={{ y: -100 }} animate={{ y: 0 }} className="nav-glass py-3 fixed-top w-100 z-1000">
        <Container className="d-flex justify-content-between align-items-center">
          <Link to="/" className="gradient-text h4 mb-0 fw-bold text-decoration-none">Salil Harit</Link>
          <div className="d-none d-md-flex gap-4">
            <a href="#projects" className="text-muted small fw-bold text-uppercase text-decoration-none hover-primary">Product Solutions</a>
            <a href="#sectors" className="text-muted small fw-bold text-uppercase text-decoration-none hover-primary">Sectors</a>
            <a href="#strategy" className="text-muted small fw-bold text-uppercase text-decoration-none hover-primary">Market Impact</a>
          </div>
          <a href="mailto:salilharit2001@gmail.com" className="btn-modern py-2 px-4 shadow-sm" style={{ fontSize: '0.85rem' }}>Open Engagement</a>
        </Container>
      </motion.div>

      <Container className="hero-section text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="profile-pic-container mb-4" variants={itemVariants}>
            <img src={meImage} alt="Salil Harit" className="profile-pic shadow" />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <span className="project-tag text-uppercase fw-bold mb-2 d-block">SGC Enterprises Global • Product Coordinator</span>
            <h1 className="display-4 mb-2 fw-bold">Salil Harit</h1>
            <h2 className="h4 gradient-text mb-4 fw-semibold">Technology Solutions • Product Architecture • Market Execution</h2>
            <div className="col-lg-8 mx-auto">
              <p className="lead text-muted mb-4 px-2" style={{ lineHeight: '1.7' }}>
                I architect and manage technology products that solve high-stakes operational gaps 
                across enterprise, industrial, and consumer markets. 
                Focused on delivering <strong>measured business impact</strong> and durable software systems.
              </p>
            </div>
            
            <div className="d-flex justify-content-center gap-3">
              <a href="https://www.linkedin.com/in/salil-harit-85565622/" target="_blank" rel="noopener noreferrer" className="btn btn-primary px-4 py-2 rounded-3 fw-bold shadow">
                LinkedIn Engagement Portal
              </a>
              <a href="#projects" className="btn btn-outline-secondary px-4 py-2 rounded-3 fw-bold">
                Explore Market Solutions
              </a>
            </div>
          </motion.div>
        </motion.div>
      </Container>

      <Container className="py-5" id="projects">
        <div className="text-center mb-5">
          <h2 className="section-title">High-Stakes Market Solutions</h2>
          <p className="text-muted">Transforming operational pain-points into robust technology products</p>
        </div>
        
        <Row xs={1} lg={2} className="g-5">
          {projects.map((project, index) => (
            <Col key={index}>
              <motion.div 
                variants={itemVariants} 
                initial="hidden"
                animate="visible"
                className="glass-card h-100 overflow-hidden"
              >
                <div className="card-content-wrapper p-4 p-md-5">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <div>
                      <span className="project-tag text-primary">{project.tag}</span>
                      <h3 className="h4 fw-bold mb-1">{project.title}</h3>
                      <p className="small text-muted mb-0 fw-bold">{project.client}</p>
                    </div>
                    <span className="status-badge">{project.status}</span>
                  </div>
                  
                  <div className="mb-4 bg-primary bg-opacity-5 p-3 rounded-4 border-start border-4 border-primary">
                    <div className="d-flex align-items-center mb-1">
                      <AlertCircle size={16} className="text-primary me-2" />
                      <strong className="text-primary small uppercase">The Market Problem</strong>
                    </div>
                    <p className="mb-0 small fw-bold text-dark">{project.problem}</p>
                  </div>

                  <p className="mb-4 text-secondary" style={{ lineHeight: '1.7' }}>
                    {project.description}
                  </p>
                  
                  <div className="mb-4 bg-light p-3 rounded-4 border-start border-4 border-success shadow-sm">
                    <div className="d-flex align-items-center mb-1">
                      <TrendingUp size={16} className="text-success me-2" />
                      <strong className="text-success small uppercase">Business Outcome</strong>
                    </div>
                    <p className="mb-0 small fw-medium">{project.impact}</p>
                  </div>
                  
                  <Link to={project.link} className="btn-modern w-100 d-flex align-items-center justify-content-center mt-auto shadow-sm">
                    View Product Strategy <ExternalLink size={16} className="ms-2" />
                  </Link>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>

      <Container className="py-5" id="sectors">
        <div className="text-center mb-5">
          <h2 className="section-title">Multi-Sector Versatility</h2>
          <p className="text-muted">Applied strategy across diverse industrial and consumer verticals</p>
        </div>
        <div className="d-flex flex-wrap justify-content-center gap-3">
          {sectors.map((sector, idx) => (
            <span key={idx} className="sector-tag">
              {sector}
            </span>
          ))}
        </div>
      </Container>

      <Container className="py-5 bg-white rounded-5 shadow-sm my-5" id="impact">
        <div className="text-center mb-5 pt-4">
          <h2 className="section-title h3">Commercial Value & Outcomes</h2>
          <p className="text-muted">Measurable impact delivered for industry-critical operations</p>
        </div>
        <Row xs={1} md={2} lg={4} className="g-4 px-4 pb-5">
          {stats.map((stat, idx) => (
            <Col key={idx}>
              <div className="stat-card border-light bg-light bg-opacity-30">
                <div className="stat-value" style={{ color: stat.color }}>{stat.value}</div>
                <div className="text-muted fw-bold small text-uppercase">{stat.label}</div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      <Container className="py-5" id="strategy">
        <div className="text-center mb-5">
          <h2 className="section-title">Execution Matrix</h2>
          <p className="text-muted">Bridging technical architecture with market-side execution</p>
        </div>
        <Row xs={1} md={2} className="g-4">
          {[
            { 
              title: "Product Ecosystem Design", 
              icon: <Lightbulb className="text-primary mb-3" size={32} />,
              skills: "Identifying high-stakes operational gaps, workflow re-engineering, governance automation, RBAC & security logic, multi-user engagement portals."
            },
            { 
              title: "Strategic Coordination", 
              icon: <Users className="text-success mb-3" size={32} />,
              skills: "Leading multi-city project teams, stakeholder coordination, bid/proposal management, 5W1H scoping analysis, international partner liaison."
            },
            { 
              title: "Market Impact Tracking", 
              icon: <PieChart className="text-info mb-3" size={32} />,
              skills: "Market sizing, competitive white-space analysis, project feasibility worksheet design, measurable outcome monitoring, ROI modeling."
            },
            { 
              title: "Enterprise Governance", 
              icon: <Shield className="text-warning mb-3" size={32} />,
              skills: "Codifying statutory requirements (Indian business laws, PF/ESI/PT) into software, audit-ready data trails, asset lifecycle integrity."
            }
          ].map((item, idx) => (
            <Col key={idx}>
              <div className="glass-card p-4 p-md-5 h-100 border-0 shadow-sm">
                {item.icon}
                <h4 className="h5 fw-bold mb-3">{item.title}</h4>
                <p className="text-muted small mb-0" style={{ lineHeight: '1.6' }}>{item.skills}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      <footer className="py-5 text-center border-top border-light opacity-50 small fw-bold">
        <div className="mb-2">salilharit2001@gmail.com • +91 81302 12010 • Delhi / Hyderabad</div>
        &copy; {new Date().getFullYear()} Salil Harit • SGC Enterprises Global
      </footer>
    </div>
  );
};

export default Home;