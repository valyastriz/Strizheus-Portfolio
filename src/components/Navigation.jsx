import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className="nav" style={{ height: '100%' }}>
            <NavLink 
                className={({ isActive }) => 
                    isActive ? 'nav-link active-link' : 'nav-link'}
                to="/" 
                style={{ height: '100%', padding: '15px', margin: '0 1px' }}
            >
                About Me
            </NavLink>

            <NavLink 
                className={({ isActive }) => 
                    isActive ? 'nav-link active-link' : 'nav-link'}
                to="/portfolio" 
                style={{ height: '100%', padding: '15px', margin: '0 1px' }}
            >
                Portfolio
            </NavLink>

            <NavLink 
                className={({ isActive }) => 
                    isActive ? 'nav-link active-link' : 'nav-link'}
                to="/contact" 
                style={{ height: '100%', padding: '15px', margin: '0 1px' }}
            >
                Contact
            </NavLink>

            <NavLink 
                className={({ isActive }) => 
                    isActive ? 'nav-link active-link' : 'nav-link'}
                to="/resume" 
                style={{ height: '100%', padding: '15px', margin: '0 1px' }}
            >
                Resume
            </NavLink>
        </nav>
    );
};

export default Navigation;