import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';

function App() {
  return (
    <div>
      {/* Your navigation menu or links here */}

      <Routes>
        <Route path="/" element={<Home />} />

      </Routes>
    </div>
  );
}


export default App;