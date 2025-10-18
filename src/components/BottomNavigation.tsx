import React, { useState, useEffect } from 'react';
import '../styles/components/BottomNavigation.css';

const BottomNavigation = () => {
  const [activeSection, setActiveSection] = useState('About');

  const navItems = [
    { number: '01', label: 'About', href: '#About' },
    { number: '02', label: 'Process', href: '#Process' },
    { number: '03', label: 'Services', href: '#Services', hiddenOnMobile: true },
    { number: '04', label: 'Work', href: '#Work' },
    { number: '05', label: 'Pricing', href: '#Plans', hiddenOnMobile: true },
    { number: '06', label: 'FAQs', href: '#FAQs', hiddenOnMobile: true },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bottom-navigation">
      {navItems.map((item, index) => {
        const sectionId = item.href.substring(1);
        const isActive = activeSection === sectionId;
        
        return (
          <div
            key={index}
            className={`bottom-navigation-item ${
              item.hiddenOnMobile ? 'bottom-navigation-item-hidden-mobile' : ''
            } ${isActive ? 'active' : ''}`}
          >
            <a href={item.href} className="bottom-navigation-link">
              <span className="bottom-navigation-number">{item.number}</span>
              <span className="bottom-navigation-label">{item.label}</span>
              <span className="bottom-navigation-full-link"></span>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default BottomNavigation;
