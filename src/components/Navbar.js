
import React, { useState, useEffect } from 'react';
import '../styles/navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <h1 className="navbar-logo">Sashank<span>.dev</span></h1>
        
        <div className={`menu-icon ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
          <li className="navbar-item"><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li className="navbar-item"><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
          <li className="navbar-item"><a href="#Experience" onClick={() => setMenuOpen(false)}>Experience</a></li>
          <li className="navbar-item"><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
          <li className="navbar-item"><a href="#Skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
          <li className="navbar-item"><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
