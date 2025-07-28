import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="flex justify-between items-center p-4 bg-transparent relative z-50">
            <h1 className="m-0 text-2xl sm:text-3xl text-[#88f1c5] font-bold">Shreyanshi</h1>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-8">
                <NavLink to="/" end className="nav-link">
                    Home
                </NavLink>
                <NavLink to="/resume" className="nav-link">
                    Resume
                </NavLink>
                <NavLink to="/projects" className="nav-link">
                    Projects
                </NavLink>
                <NavLink to="/contact" className="nav-link">
                    Contact
                </NavLink>
            </nav>

            {/* Mobile Menu Button - Beautiful and Styled */}
            <button 
                className={`md:hidden relative w-12 h-12 flex flex-col justify-center items-center bg-gradient-to-r from-[#88f1c5] to-[#fde047] rounded-lg shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-xl z-50 ${isMenuOpen ? 'rotate-90' : ''}`}
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : 'mb-1'}`}></span>
                <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'mb-1'}`}></span>
                <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </button>

            {/* Mobile Navigation - Fixed positioning with high z-index */}
            <nav className={`md:hidden fixed top-0 left-0 right-0 bg-gradient-to-b from-[#02160d] via-[#134c55] to-[#031012] border-b-2 border-[#88f1c5] transition-all duration-500 z-40 ${isMenuOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-full opacity-0 invisible'}`}>
                <div className="flex flex-col pt-20 pb-8 px-6 gap-6">
                    <NavLink 
                        to="/" 
                        end 
                        className="mobile-nav-link"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        🏠 Home
                    </NavLink>
                    <NavLink 
                        to="/resume" 
                        className="mobile-nav-link"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        📄 Resume
                    </NavLink>
                    <NavLink 
                        to="/projects" 
                        className="mobile-nav-link"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        💼 Projects
                    </NavLink>
                    <NavLink 
                        to="/contact" 
                        className="mobile-nav-link"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        📧 Contact
                    </NavLink>
                </div>
            </nav>

            {/* Overlay to close menu when clicking outside */}
            {isMenuOpen && (
                <div 
                    className="md:hidden fixed inset-0 bg-black/50 z-30"
                    onClick={() => setIsMenuOpen(false)}
                ></div>
            )}
        </header>
    );
};

export default Navbar;
