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
            <div className="min-h-screen w-full">
                <Navbar />
                <main className="w-full">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/resume" element={<Resume />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
