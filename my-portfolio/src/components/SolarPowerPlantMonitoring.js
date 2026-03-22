import { Card, Col, Container, Row } from 'react-bootstrap';

function SolarPowerPlantMonitoring() {
  return (
    <Container className="mt-5 mb-5">
      <Row className="justify-content-center mb-4">
        <Col md={10}>
          <h1 className="display-5 fw-bold mb-2">Solar Cloud Integration System</h1>
          <h2 className="h4 text-primary mb-3">Real-time IoT Monitoring Platform for Industrial Solar Installations</h2>
          <div className="mb-2 text-muted">
            <strong>Project Duration:</strong> Summer 2023 Internship &nbsp;|&nbsp;
            <strong>Company:</strong> G S Solar Systems, Noida &nbsp;|&nbsp;
            <strong>Role:</strong> Cloud Infrastructure Developer & IoT Systems Engineer &nbsp;|&nbsp;
            <strong>Team Size:</strong> 2 (Self + Project Guide: Mr. Prashanth Pai, CEO)
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center mb-4">
        <Col md={10}>
          <Card className="mb-4 shadow-sm">
            <Card.Body>
              <h3 className="h5 mb-3">Executive Summary</h3>
              <p>Architected and implemented a comprehensive cloud-based monitoring system for industrial solar power installations, enabling real-time data visualization and remote monitoring across multiple facilities. The system successfully processes data from 31+ inverters at Havells Sriharicity Factory and additional installations, providing critical operational insights through a scalable cloud infrastructure.</p>
              <ul>
                <li>Deployed monitoring across 3+ industrial facilities</li>
                <li>Achieved 99.9% data pipeline reliability</li>
                <li>Reduced system downtime through proactive monitoring</li>
                <li>Enabled real-time performance tracking for 2.8MW+ solar capacity</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center mb-4">
        <Col md={10}>
          <Card className="mb-4 shadow-sm">
            <Card.Body>
              <h3 className="h5 mb-3">Technical Architecture</h3>
              <div className="mb-2"><strong>System Overview</strong></div>
              <pre className="bg-light p-2 rounded mb-3">Data Logger (Raspberry Pi) → API Gateway → Lambda Function → MongoDB Atlas → Visualization Dashboard</pre>
              <p>The system follows a serverless microservices architecture, ensuring scalability and cost-effectiveness while maintaining high availability for critical industrial monitoring.</p>
              <div className="mb-2"><strong>Core Components</strong></div>
              <ul>
                <li><strong>Data Acquisition Layer:</strong> Raspberry Pi data loggers, Modbus RS485 to TCP/IP, fiber optic network, real-time data collection from Havells inverters</li>
                <li><strong>Cloud Infrastructure (AWS):</strong> API Gateway (VTL mapping), Lambda Functions, IAM, CloudWatch</li>
                <li><strong>Data Storage & Management:</strong> MongoDB Atlas, time-series schema, deduplication, compressed storage</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center mb-4">
        <Col md={10}>
          <Card className="mb-4 shadow-sm">
            <Card.Body>
              <h3 className="h5 mb-3">Technical Implementation</h3>
              <div className="mb-2"><strong>API Gateway Configuration</strong></div>
              <ul>
                <li>Endpoint: <code>/solar-data</code> (POST), Content-Type: <code>application/x-www-form-urlencoded</code></li>
                <li>VTL mapping for payload transformation, error handling, and custom field mapping</li>
                <li>Handles 150+ parameters per request, robust error handling, and confirmation response</li>
              </ul>
              <div className="mb-2"><strong>Lambda Function Architecture</strong></div>
              <ul>
                <li>Python 3.9 runtime, 512MB memory, 30s timeout, 100 concurrency</li>
                <li>Data extraction, validation, deduplication, batch processing, error handling, connection pooling</li>
                <li>Dependencies: MongoDB driver, JSON, URL parsing</li>
              </ul>
              <div className="mb-2"><strong>Data Schema Design</strong></div>
              <ul>
                <li>Timestamp-based indexing, nested value objects, metadata fields</li>
                <li>Compressed storage, strategic indexing, document size optimization</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center mb-4">
        <Col md={10}>
          <Card className="mb-4 shadow-sm">
            <Card.Body>
              <h3 className="h5 mb-3">System Monitoring Parameters</h3>
              <ul>
                <li><strong>Inverter Metrics:</strong> AC/DC power, voltage, current, frequency, power factor, string voltages, daily/total kWh, status codes, temperature</li>
                <li><strong>Grid Integration:</strong> Import/export, diesel generator monitoring, power quality, energy balance</li>
                <li><strong>Environmental Data:</strong> String performance, temperature, system health</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center mb-4">
        <Col md={10}>
          <Card className="mb-4 shadow-sm">
            <Card.Body>
              <h3 className="h5 mb-3">Problem-Solving & Optimization</h3>
              <ul>
                <li><strong>Large Dataset Processing:</strong> Bypassed VTL limits, direct Lambda processing, 100% data success rate</li>
                <li><strong>Industrial Hardware Integration:</strong> Retry logic, local buffering, industrial networking, 99.9% reliability</li>
                <li><strong>Real-time Performance:</strong> MongoDB indexing, connection pooling, auto-scaling, &lt;2000ms API response</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center mb-4">
        <Col md={10}>
          <Card className="mb-4 shadow-sm">
            <Card.Body>
              <h3 className="h5 mb-3">Field Installation Experience</h3>
              <ul>
                <li><strong>Havells Sriharicity Factory:</strong> 28 inverters, fiber backbone, troubleshooting, DG integration</li>
                <li><strong>A K Automatics:</strong> 3 IoT DG meters, remote config, predictive maintenance</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center mb-4">
        <Col md={10}>
          <Card className="mb-4 shadow-sm">
            <Card.Body>
              <h3 className="h5 mb-3">Performance Metrics & Results</h3>
              <ul>
                <li><strong>Technical:</strong> 1000+ req/hr, 150+ params/reading in &lt;500ms, 40% storage savings, 99.9% uptime</li>
                <li><strong>Business Impact:</strong> Real-time monitoring of 2.8MW+, 30% downtime reduction, 15% efficiency gain, 60% fewer site visits</li>
                <li><strong>Scalability:</strong> 3+ sites, 31+ inverters, 10,000+ data points/day, 10x scale ready</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center mb-4">
        <Col md={10}>
          <Card className="mb-4 shadow-sm">
            <Card.Body>
              <h3 className="h5 mb-3">Technology Stack Deep Dive</h3>
              <ul>
                <li><strong>Cloud:</strong> AWS API Gateway, Lambda (Python 3.9), IAM, CloudWatch</li>
                <li><strong>Database:</strong> MongoDB Atlas M10, compound indexes, backup, time-series optimization</li>
                <li><strong>Programming:</strong> Python 3.9, PyMongo, urllib, JSON</li>
                <li><strong>IoT/Hardware:</strong> Raspberry Pi 4, Modbus, RS485/TCP, MC4 connectors</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center mb-4">
        <Col md={10}>
          <Card className="mb-4 shadow-sm">
            <Card.Body>
              <h3 className="h5 mb-3">Security Implementation</h3>
              <ul>
                <li><strong>Data Protection:</strong> TLS 1.2, API key validation, VPC, MD5 checksums</li>
                <li><strong>Access Control:</strong> IAM policies, MongoDB auth, API rate limiting, audit logging</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center mb-4">
        <Col md={10}>
          <Card className="mb-4 shadow-sm">
            <Card.Body>
              <h3 className="h5 mb-3">Future Enhancements & Scalability</h3>
              <ul>
                <li>Machine learning for predictive maintenance</li>
                <li>Advanced analytics and forecasting</li>
                <li>Mobile apps for field technicians</li>
                <li>Alert system for anomalies</li>
                <li>Multi-region and data lake integration</li>
                <li>Edge computing for reduced latency</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center mb-4">
        <Col md={10}>
          <Card className="mb-4 shadow-sm">
            <Card.Body>
              <h3 className="h5 mb-3">Lessons Learned & Best Practices</h3>
              <ul>
                <li>Serverless is ideal for variable IoT workloads</li>
                <li>Data validation and error handling are critical</li>
                <li>Proactive monitoring prevents failures</li>
                <li>Industrial environments require robust hardware and network</li>
                <li>Extensive field testing and documentation are essential</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center mb-4">
        <Col md={10}>
          <Card className="mb-4 shadow-sm">
            <Card.Body>
              <h3 className="h5 mb-3">Skills Demonstrated</h3>
              <ul>
                <li>Cloud architecture, serverless design, API integration</li>
                <li>IoT systems engineering, industrial protocol integration</li>
                <li>Python development, database optimization</li>
                <li>Project management, multi-site deployment, documentation</li>
              </ul>
              <div className="mt-3 text-muted small">
                <em>This comprehensive solar monitoring system demonstrates the successful integration of cloud computing, IoT technologies, and industrial systems to deliver measurable business value through improved operational visibility and system reliability.</em>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default SolarPowerPlantMonitoring;
