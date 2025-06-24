import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Projects from './pages/Project';
import Contact from './pages/Contact';

function App() {
    return (
        <Router>
          <div style={{marginTop:'15px', padding: '0' }}>
          <Navbar />
              </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
         
        </Router>
      
    );
}

export default App;
