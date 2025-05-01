import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar.js';
import Circuit from './Circuit.js';
import AM_demodulation from './AM_demodulation';
import FM from './FM';
import PM from './PM';
import Dsbsc from './Dsbsc';



function App() {
  return (
    <div>
      <Router>
        <div>
          <Sidebar />
          <Routes>
            <Route path="/AM" element={<Circuit />} />
            <Route path="/AM_demodulation" element={<AM_demodulation />} />
            <Route path="/FM" element={<FM />} />
            <Route path="/PM" element={<PM />} />
            <Route path="/Dsbsc" element={<Dsbsc />} />
          </Routes>
        </div>
      </Router>

      <h2>Welcome to Signal Processing Simulator App</h2>

      <div className="box">
        <h3>Useful Links</h3>
        <ul>
          <li><a href="/AM">Amplitude Modulation (AM)</a></li>
          <li><a href="/FM">Frequency Modulation (FM)</a></li>
          <li><a href="/PM">Phase Modulation (PM)</a></li>
        </ul>
      </div>

      {/* Optional: Uncomment for development testing */}
      {/* 
      <Circuit />
      <AM_demodulation />
      <FM />
      <div className="App1">
        <YourComponent />
      </div> 
      */}
    </div>
  );
}

export default App;
