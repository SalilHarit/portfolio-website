import 'bootstrap/dist/css/bootstrap.min.css';
import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import AstroVista from './components/AstroVista';
import EnterpriseModernization from './components/EnterpriseModernization';
import Home from './components/Home';

import SolarPlantMonitoring from './components/SolarPowerPlantMonitoring.js';

const App: FC = () => {
  return (
    <div>
      {/* Your navigation menu or links here */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/enterprise-modernization" element={<EnterpriseModernization />} />
        <Route path="/astro-vista" element={<AstroVista />} />
        <Route path="/SolarPlantMonitoring" element={<SolarPlantMonitoring />} />
      </Routes>
    </div>
  );
}

export default App;