import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BottomNavigation from '../components/BottomNavigation';

const NotFound = () => {
  return (
    <div>
      <Header />
      <section style={{ padding: '100px 20px', minHeight: '100vh', background: '#f9f4ef', textAlign: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>404 - Page Not Found</h1>
          <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#5f5f5f', marginBottom: '30px' }}>
            The page you're looking for doesn't exist.
          </p>
          <a
            href="/"
            style={{
              display: 'inline-block',
              padding: '12px 24px',
              backgroundColor: '#000',
              color: '#fff',
              textDecoration: 'none',
              borderRadius: '4px',
              fontSize: '16px'
            }}
          >
            Go Home
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default NotFound;
