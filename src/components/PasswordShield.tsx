import React, { useState, FC, ReactNode } from 'react';
import { Container, Card, Form, Button, Alert } from 'react-bootstrap';
import { ShieldAlert, Key } from 'lucide-react';
import { motion } from 'framer-motion';

interface PasswordShieldProps {
  children: ReactNode;
}

const PasswordShield: FC<PasswordShieldProps> = ({ children }) => {
  const [password, setPassword] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(
    sessionStorage.getItem('case_study_unlocked') === 'true'
  );
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'SGC2026') {
      sessionStorage.setItem('case_study_unlocked', 'true');
      setIsUnlocked(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  if (isUnlocked) {
    return <>{children}</>;
  }

  return (
    <div className="portfolio-wrapper min-vh-100 d-flex align-items-center justify-content-center bg-dark" style={{ background: 'linear-gradient(135deg, #0f172a, #1e293b)' }}>
      <div className="bg-mesh opacity-10" />
      <Container style={{ maxWidth: '450px' }}>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
          <Card className="glass-card p-4 border-0 shadow-2xl text-center bg-white bg-opacity-10 backdrop-blur">
            <div className="mb-4">
              <div className="bg-primary bg-opacity-10 p-4 rounded-circle d-inline-block mb-3">
                <ShieldAlert className="text-primary" size={48} />
              </div>
              <h1 className="h4 fw-bold text-white mb-2">Protected Case Study</h1>
              <p className="small text-muted mb-4 px-3">
                This project contains sensitive enterprise strategy. 
                Please enter the access code to view the full product dossier.
              </p>
            </div>

            <Form onSubmit={handleSubmit} className="px-3">
              <Form.Group className="mb-4 text-start">
                <div className="position-relative">
                  <Key className="position-absolute head-key opacity-50" style={{ left: '15px', top: '50%', transform: 'translateY(-50%)' }} size={16} color="white" />
                  <Form.Control 
                    type="password" 
                    placeholder="Enter Access Key" 
                    className="bg-transparent text-white border-light border-opacity-25 ps-5 py-3"
                    style={{ borderRadius: '12px' }}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                {error && <div className="text-danger small mt-2 fw-bold">Invalid access key. Please try again.</div>}
              </Form.Group>
              <Button type="submit" className="btn-modern w-100 border-0 py-3 shadow-lg mb-3">
                Unlock Access
              </Button>
              <div className="text-center">
                <a href="/" className="text-muted small text-decoration-none hover-primary">Return to Community Home</a>
              </div>
            </Form>
          </Card>
        </motion.div>
      </Container>
    </div>
  );
};

export default PasswordShield;
