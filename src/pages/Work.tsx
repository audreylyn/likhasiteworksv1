import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BottomNavigation from '../components/BottomNavigation';

const Work = () => {
  return (
    <div>
      <Header />
      <section style={{ padding: '100px 20px', minHeight: '100vh', background: '#f9f4ef' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>Our Work</h1>
          <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#5f5f5f' }}>
            Explore our portfolio of successful projects and see how we've helped businesses achieve their goals.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Work;
