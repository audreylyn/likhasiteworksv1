import React, { useState } from 'react';
import '../styles/components/Header.css';
import AnimatedLogo from './AnimatedLogo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Top Banner */}
      <div className="header-banner">
        <div className="header-banner-content">
          <div className="header-banner-text">
            <div className="text-center">
              For marketing help, click here -&nbsp;
              <a
                href="#"
                className="header-banner-link"
              >
                coming soon...
              </a>
            </div>
          </div>
        </div>
        <div className="header-banner-corner header-banner-corner-left">
          <div className="header-banner-corner-shape header-banner-corner-shape-left"></div>
        </div>
        <div className="header-banner-corner header-banner-corner-right">
          <div className="header-banner-corner-shape header-banner-corner-shape-right"></div>
        </div>
      </div>

      {/* Main Navigation */}
      <div role="banner" className="main-navigation">
        <div className="main-navigation-content">
          <div className="main-navigation-logo">
            <a
              href="#"
              className="main-navigation-logo-link"
            >
              <AnimatedLogo />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav role="navigation" className="main-navigation-nav desktop-nav">
            <div className="main-navigation-menu">
              <a href="#" className="main-navigation-link">About</a>
              <a href="#" className="main-navigation-link">Work</a>
              <a href="#" className="main-navigation-link">Pricing</a>
              <a href="#" className="main-navigation-link">Showreel</a>
            </div>
          </nav>

          {/* Hamburger Button */}
          <button 
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-content">
          <a href="#" className="mobile-menu-link" onClick={closeMenu}>About</a>
          <a href="#" className="mobile-menu-link" onClick={closeMenu}>Work</a>
          <a href="#" className="mobile-menu-link" onClick={closeMenu}>Pricing</a>
          <a href="#" className="mobile-menu-link" onClick={closeMenu}>Showreel</a>
          <a href="#" className="mobile-menu-cta" onClick={closeMenu}>Contact Us</a>
        </div>
      </div>

      {/* Backdrop */}
      {isMenuOpen && (
        <div className="mobile-menu-backdrop" onClick={closeMenu}></div>
      )}
    </>
  );
};

export default Header;
