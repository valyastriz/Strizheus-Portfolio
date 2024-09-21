import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
      <footer className="footer bg-dark text-white d-flex justify-content-center align-items-center p-3">
        <a href="https://github.com/valyastriz" className="mx-3 text-white" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} />
        </a>
        <a href="www.linkedin.com/in/valya-strizheus-b9380a2a2" className="mx-3 text-white" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} />
        </a>
        <a href="/contact" className="mx-3 text-white">
          <FaEnvelope size={30} />
        </a>
      </footer>
    );
  };
  
  export default Footer;