import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <ul className="navbar-nav ms-auto">
            <li className="nav-item">
            <NavLink className="nav-link" to="/">About Me</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to="/portfolio">Portfolio</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </li>
            {/* <li className="nav-item">
            <NavLink className="nav-link" to="/resume">Resume</NavLink>
            </li> */}
        </ul>
    );
};

export default Navigation;