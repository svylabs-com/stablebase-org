import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Header from './Components/Header';
import GetInvolved from './Components/GetInvolved';

function App() {
  return (
    <Router>
      <div className='bg-black text-white'>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/get-involved" element={<GetInvolved />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
