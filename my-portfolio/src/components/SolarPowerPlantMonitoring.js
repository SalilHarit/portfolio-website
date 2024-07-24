import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion, useAnimation } from 'framer-motion';
import './SolarPowerPlantMonitoring.css'; // Create this file for custom styles
import awsIcon from './assets/a.svg'; // Replace with actual icon path
import mongoDbIcon from './assets/mongodb.svg';


function SolarPowerPlantMonitoring() {
  const containerControls = useAnimation();

  useEffect(() => {
    containerControls.start("visible");
  }, [containerControls]);

  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.div 
      className="container mt-5"
      variants={containerVariants}
      initial="hidden"
      animate={containerControls}
    >
      {/* Project Header */}
      <motion.h1 className="text-center mb-4" variants={itemVariants}>
        Solar Power Plant Data Ingestion Lambda Function 
        <img src={awsIcon} alt="AWS Lambda" className="ml-2" style={{ width: '30px' }} />
      </motion.h1>

      {/* Project Summary */}
      <motion.p className="lead text-center mb-5" variants={itemVariants}>
        This AWS Lambda function ingests real-time data from a Wattmon data logger and securely stores it in a MongoDB database, 
        enabling efficient monitoring and analysis of solar power generation.
        <img src={mongoDbIcon} alt="MongoDB" className="ml-2" style={{ width: '30px' }} />
      </motion.p>

      <div className="row">
        {/* Functionality Sections (with icons and animations) */}
        <motion.div className="col-md-4 mb-4" variants={itemVariants}>
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Data Extraction & Transformation</h5>
              {/* ... (your description) ... */}
            </div>
          </div>
        </motion.div>
        {/* Repeat similar blocks for other functionalities */}

        {/* ... (other sections for MongoDB, Data Insertion, etc.) ... */}
      </div>

      {/* Displaying Data in Your Portfolio (mockup) */}
      <motion.div className="mt-5" variants={itemVariants}>
        <h2>Live Data Visualization</h2>
        <div className="placeholder-chart">
          {/* Here you would embed your interactive chart component */}
          (Chart.js, Recharts, or D3.js graph here)
        </div>
      </motion.div>

      {/* ... (other sections for dashboard, historical data, etc.) ... */}
    </motion.div>
  );
}
export default SolarPowerPlantMonitoring;