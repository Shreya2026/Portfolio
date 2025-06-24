import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
    <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem',
        backgroundColor: 'transparent'
    }}>
        <h1 style={{ margin: 0, fontSize: '35px',color:'#88f1c5' }}>Shreyanshi </h1>
        <span style={{
            display: 'flex',
            gap: '2rem',
            marginLeft: '550px'
        }}>
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
        </span>
    </header>
);

export default Navbar;
