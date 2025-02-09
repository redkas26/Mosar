// src/components/Navbar.js
import React, { useState } from 'react';
import '../styles/Navbar.css';

const Navbar = ({ toggleTheme, isDarkTheme }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isDarkTheme ? 'dark' : 'light'}`}>
      <div className="navbar-logo">MOSAR CONSULTING</div>
      <div className={`navbar-links ${isOpen ? '' : 'active'}`}>
        <a href="/">Accueil</a>
        <a href="/about">À propos</a>
        <a href="/services">Services</a>
        <a href="/contact">Contact</a>
      </div>
      <button className="theme-toggle" onClick={toggleTheme}>
        {isDarkTheme ? '🌞' : '🌙'}
      </button>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;