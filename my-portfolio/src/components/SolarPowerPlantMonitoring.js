import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion, useAnimation } from 'framer-motion';
import './SolarPowerPlantMonitoring.css'; // Create this file for custom styles
import Chart from './chart';
import CodeBlock from './codeblock';
import solardata from './solardata.png';
import Tree from 'react-d3-tree';

function SolarPowerPlantMonitoring() {
  const containerControls = useAnimation();
  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'Monthly Solar Generation in KWh',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  };

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

      </motion.h1>

      {/* Project Summary */}
      <motion.p className="lead text-center mb-5" variants={itemVariants}>
        This AWS Lambda function ingests real-time data from a Wattmon data logger and securely stores it in a MongoDB database, 
        enabling efficient monitoring and analysis of solar power generation.
        
        
      </motion.p>


      <div className="row">

          <motion.div className="col mb-4 d-flex justify-content-center" variants={itemVariants}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Data Extraction & Transformation</h5>
                <p className='my-5'>
            This section documents my first internship project at G S Solar Systems (Noida) which involved displaying live generation graphs using data from a data logger on Raspberry Pi remotely. A big part of this project involved cloud infrastructure management and configuration, such as using and configuring AWS Cloud API, creating configurations, making mapping templates for request payload transformation, creating and configuring Lambda functions, and enabling Lambda functions to use external libraries. Additionally, MongoDB collection was used for data storage and potential direct data visualization.
                </p>
              <CodeBlock />
              <h6 marginTop="10rem">The lambda function has been provided access to mongodb library by uploading a compressed zip folder containing necessary libraries and mongodb connection string and client code structure is used to establish connection to mongodb and once data is successfully inserted or if data is unable to be inserted then connection is closed and lambda function execution ends</h6>
              </div>
            </div>
          </motion.div>
          <img src={solardata} alt="Solar Data" className="img-fluid" />
              </div>

              {/* Displaying Data in Your Portfolio (mockup) */}
      <motion.div className="my-5 " variants={itemVariants}>
        <h2>Live Data Visualization</h2>
        <div style={{marginTop:'100px',marginLeft:'25%', width: '600px', height: '400px' }}>
        <Chart chartData={chartData} />
      </div>
      </motion.div>

    </motion.div>
  );
}

export default SolarPowerPlantMonitoring;