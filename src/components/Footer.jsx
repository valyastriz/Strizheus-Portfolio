import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
      <footer className="footer text-white d-flex justify-content-center align-items-center p-3">
        <a href="https://github.com/valyastriz" className="mx-3 text-white" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} />
        </a>
        <a href="https://www.linkedin.com/in/valya-strizheus-b9380a2a2" className="mx-3 text-white" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} />
        </a>
        <Link to="/contact" className="mx-3 text-white">
          <FaEnvelope size={30} />
        </Link>
      </footer>
    );
  };
  
  export default Footer;