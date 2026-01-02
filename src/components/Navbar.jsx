import React, { useState, useEffect } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen) {
        const navbar = document.querySelector('.navbar');
        if (navbar && !navbar.contains(event.target)) {
          setIsMenuOpen(false);
        }
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav className="navbar">
      <div className="nav-logo">HACKVENTO</div>
      
      {/* Mobile menu button */}
      <div className="mobile-menu-btn" onClick={(e) => {
        e.stopPropagation();
        toggleMenu();
      }}>
        <span className={`hamburger-line ${isMenuOpen ? 'line1-open' : ''}`}></span>
        <span className={`hamburger-line ${isMenuOpen ? 'line2-open' : ''}`}></span>
        <span className={`hamburger-line ${isMenuOpen ? 'line3-open' : ''}`}></span>
      </div>

      <ul className={`nav-links ${isMenuOpen ? 'mobile-active' : ''}`}>
        <li onClick={() => setIsMenuOpen(false)}>Home</li>
        <li onClick={() => setIsMenuOpen(false)}>About</li>
        <li onClick={() => setIsMenuOpen(false)}>Events</li>
        <li onClick={() => setIsMenuOpen(false)}>Register</li>
      </ul>
    </nav>
  )
}

export default Navbar
