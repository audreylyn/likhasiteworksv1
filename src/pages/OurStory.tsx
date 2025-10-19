import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BottomNavigation from '../components/BottomNavigation';

const OurStory = () => {
  return (
    <div>
      <Header />
      <section style={{ padding: '100px 20px', minHeight: '100vh', background: '#f9f4ef' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>Our Story</h1>
          <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#5f5f5f' }}>
            Learn about our journey, our values, and what drives us to deliver exceptional web development services.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default OurStory;
