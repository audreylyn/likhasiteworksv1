import React from 'react';
import '../styles/components/Header.css';

const Header = () => {
  return (
    <>
      {/* Top Banner */}
      <div className="header-banner">
        <div className="header-banner-content">
          <div className="header-banner-text">
            <div className="text-center">
              For marketing help, click here -&nbsp;
              <a
                href="https://www.ohhmyads.com/"
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
              href="https://www.ohhmyads.com/"
              className="main-navigation-logo-link"
            >
              <img
                src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F52bba0fa61098a078d43b8fc284625c270ee2b3b.svg?generation=1760727381529893&alt=media"
                className="main-navigation-logo-image"
                alt="Ohhmyads Logo"
              />
            </a>
          </div>

          <nav role="navigation" className="main-navigation-nav">
            <div className="main-navigation-menu">
              <a
                href="https://ohhmyads.webflow.io/#About"
                className="main-navigation-link"
              >
                About
              </a>
              <a
                href="https://www.ohhmyads.com/our-work"
                className="main-navigation-link"
              >
                Work
              </a>
              <a
                href="https://ohhmyads.webflow.io/#Plans"
                className="main-navigation-link"
              >
                Pricing
              </a>
              <a
                href="https://www.ohhmyads.com/our-work"
                className="main-navigation-link"
              >
                Showreel
              </a>
            </div>

            <div>
              <a
                href="https://cal.com/ohhmyads/30min"
                className="main-navigation-cta"
              >
                Contact Us
              </a>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
