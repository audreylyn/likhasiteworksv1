import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/components/Header.css';
import AnimatedLogo from './AnimatedLogo';

// Extend Window interface for GSAP
declare global {
  interface Window {
    gsap: any;
    DrawSVGPlugin: any;
  }
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Load GSAP and DrawSVGPlugin
    const loadGSAP = async () => {
      // Check if GSAP is already loaded
      if (window.gsap && window.DrawSVGPlugin) {
        initDrawAnimation();
        return;
      }

      // Load GSAP
      const gsapScript = document.createElement('script');
      gsapScript.src = 'https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js';
      gsapScript.async = true;
      
      gsapScript.onload = () => {
        // Load DrawSVGPlugin after GSAP
        const drawSVGScript = document.createElement('script');
        drawSVGScript.src = 'https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/DrawSVGPlugin.min.js';
        drawSVGScript.async = true;
        
        drawSVGScript.onload = () => {
          if (window.gsap) {
            window.gsap.registerPlugin(window.DrawSVGPlugin);
            initDrawAnimation();
          }
        };
        
        document.body.appendChild(drawSVGScript);
      };
      
      document.body.appendChild(gsapScript);
    };

    const initDrawAnimation = () => {
      const { gsap } = window;
      if (!gsap) return;

      const drawLines = document.querySelectorAll('[data-draw-line]');
      
      drawLines.forEach((drawLine) => {
        const svgPath = drawLine.querySelector('svg path');
        if (!svgPath) return;

        // Set initial state
        gsap.set(svgPath, { drawSVG: '0%' });

        // Mouse enter animation
        drawLine.addEventListener('mouseenter', () => {
          gsap.to(svgPath, {
            drawSVG: '100%',
            duration: 0.8,
            ease: 'power2.out'
          });
        });

        // Mouse leave animation
        drawLine.addEventListener('mouseleave', () => {
          gsap.to(svgPath, {
            drawSVG: '0%',
            duration: 0.6,
            ease: 'power2.in'
          });
        });
      });
    };

    loadGSAP();

    // Cleanup function
    return () => {
      const drawLines = document.querySelectorAll('[data-draw-line]');
      drawLines.forEach((drawLine) => {
        const newDrawLine = drawLine.cloneNode(true);
        drawLine.parentNode?.replaceChild(newDrawLine, drawLine);
      });
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const shouldHideBanner = () => {
    // Hide when menu is open on About page
    if (isMenuOpen && location.pathname === '/about') {
      return true;
    }

    // Hide on Work, Our Story, Quote pages on mobile/tablet
    if (shouldHideBannerOnMobile(location.pathname)) {
      return true;
    }

    // Hide when menu is open (existing logic)
    if (isMenuOpen) {
      return true;
    }

    return false;
  };

  const shouldHideBannerOnMobile = (pathname) => {
    const pagesToHide = ['/work', '/our-story', '/quote'];
    return pagesToHide.includes(pathname);
  };

  return (
    <>
      {/* Top Banner */}
      <div className={`header-banner ${shouldHideBanner() ? 'header-banner--hidden' : ''}`}>
        <div className="header-banner-content">
          <div className="header-banner-text">
            <div className="text-center">
              Unlock powerful marketing solutions -&nbsp;
              <a
                href="about#Contact"
                className="header-banner-link"
              >
                Submit an inquiry
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
            <Link
              to="/"
              className="main-navigation-logo-link"
            >
              <AnimatedLogo />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav role="navigation" className="main-navigation-nav desktop-nav">
            <div className="main-navigation-menu">
              <Link to="/about" className={`main-navigation-link text-draw ${location.pathname === '/about' ? 'active' : ''}`} data-draw-line="">
                <span className="text-draw__text">About</span>
                <div data-draw-line-box="" className="text-draw__box">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 310 41" fill="none" preserveAspectRatio="none" className="text-draw__box-svg">
                    <path d="M17.0039 33.582C32.2307 33.7406 47.4552 33.7271 62.676 33.7113C67.3044 33.7064 96.546 33.9549 104.728 32.9769C113.615 31.9146 104.516 29.2022 102.022 28.1821C89.9573 23.2459 77.3751 19.9248 65.0451 15.9546C57.8987 13.6536 37.2813 9.3934 44.2314 7.00157C50.9667 4.68363 64.2873 6.71856 70.4249 6.86582C105.866 7.71618 141.306 8.48751 176.75 9.49827C217.874 10.671 258.906 11.9547 300 15.3886" stroke="currentColor" strokeWidth="10" strokeLinecap="round"></path>
                  </svg>
                </div>
              </Link>
              <Link to="/work" className={`main-navigation-link text-draw ${location.pathname === '/work' ? 'active' : ''}`} data-draw-line="">
                <span className="text-draw__text">Work</span>
                <div data-draw-line-box="" className="text-draw__box">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 310 41" fill="none" preserveAspectRatio="none" className="text-draw__box-svg">
                    <path d="M5 25C25 25 35 20 55 22C75 24 85 30 105 28C125 26 135 18 155 20C175 22 185 28 205 26C225 24 245 20 265 22C280 23.5 290 25 305 25" stroke="currentColor" strokeWidth="10" strokeLinecap="round"></path>
                  </svg>
                </div>
              </Link>
              <Link to="/our-story" className={`main-navigation-link text-draw ${location.pathname === '/our-story' ? 'active' : ''}`} data-draw-line="">
                <span className="text-draw__text">Our Story</span>
                <div data-draw-line-box="" className="text-draw__box">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 310 41" fill="none" preserveAspectRatio="none" className="text-draw__box-svg">
                    <path d="M8 20C28 18 48 22 68 20C88 18 108 14 128 16C148 18 168 24 188 22C208 20 228 15 248 17C268 19 288 23 308 20" stroke="currentColor" strokeWidth="10" strokeLinecap="round"></path>
                  </svg>
                </div>
              </Link>
              <Link to="/quote" className={`stars-btn ${location.pathname === '/quote' ? 'stars-btn--disabled' : ''}`}>
                <span className="stars-btn__inner">
                  <span className="stars-btn__text">Get a Quote</span>
                </span>
                <span className="stars-btn__stars">
                  <i></i><i></i><i></i><i></i>
                </span>
              </Link>
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
        <button 
          className="mobile-menu-close"
          onClick={closeMenu}
          aria-label="Close menu"
        >
          <span></span>
          <span></span>
        </button>
        <div className="mobile-menu-content">
          <Link to="/about" className="mobile-menu-link" onClick={closeMenu}>About</Link>
          <Link to="/work" className="mobile-menu-link" onClick={closeMenu}>Work</Link>
          <Link to="/our-story" className="mobile-menu-link" onClick={closeMenu}>Our Story</Link>
          <Link to="/quote" className={`mobile-menu-cta ${location.pathname === '/quote' ? 'mobile-menu-cta--disabled' : ''}`} onClick={closeMenu}>Get a Quote</Link>
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
