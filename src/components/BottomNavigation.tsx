import React from 'react';
import '../styles/components/BottomNavigation.css';

const BottomNavigation = () => {
  const navItems = [
    { number: '01', label: 'About', href: 'https://www.ohhmyads.com/#About' },
    {
      number: '02',
      label: 'Process',
      href: 'https://www.ohhmyads.com/#Process',
    },
    {
      number: '03',
      label: 'Services',
      href: 'https://www.ohhmyads.com/#Services',
      hiddenOnMobile: true,
    },
    { number: '04', label: 'Work', href: 'https://www.ohhmyads.com/#Work' },
    {
      number: '05',
      label: 'Pricing',
      href: 'https://www.ohhmyads.com/#Plans',
      hiddenOnMobile: true,
    },
    {
      number: '06',
      label: 'FAQs',
      href: 'https://www.ohhmyads.com/#FAQs',
      hiddenOnMobile: true,
    },
  ];

  return (
    <div className="bottom-navigation">
      {navItems.map((item, index) => (
        <div
          key={index}
          className={`bottom-navigation-item ${
            item.hiddenOnMobile ? 'bottom-navigation-item-hidden-mobile' : ''
          }`}
        >
          <a href={item.href} className="bottom-navigation-link">
            <span className="bottom-navigation-number">{item.number}</span>
            <span className="bottom-navigation-label">{item.label}</span>
            <span className="bottom-navigation-full-link"></span>
          </a>
        </div>
      ))}
    </div>
  );
};

export default BottomNavigation;
