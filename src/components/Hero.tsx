import React from 'react';
import '../styles/components/Hero.css';
import StackIcon from 'tech-stack-icons';

const Hero = () => {
  const techStacks = [
    'reactjs',
    'html5',
    'css3',
    'javascript',
    'php',
    'bootstrap5',
    'figma',
    'typescript',
  ];

  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          {/* Left Side - Text Content */}
          <div className="hero-text">
            <h1 className="hero-title">
              Reliable, Scalable, and Efficient <span className="hero-title-underline">Web Design</span>
              <br />
              <span className="hero-title-underline">& Coding Services</span>
            </h1>
            
            <button className="hero-cta">
              GET A QUOTE
            </button>
            
            <ul className="hero-features">
              <li>100% Risk-Free</li>
              <li>Try Before You Buy</li>
              <li>No Payment Required</li>
            </ul>
          </div>

          {/* Right Side - Illustration */}
          <div className="hero-illustration">
            <img 
              src="https://i.imgur.com/6QKjFVz.png" 
              alt="Web Design Illustration" 
              className="hero-image"
            />
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="hero-trusted">
          <p className="hero-trusted-text">
            Trusted by 5,000+ businesses and creative agencies worldwide from all shapes and sizes.
          </p>
          
          <div className="hero-tech-stack">
            {techStacks.map((tech, index) => (
              <div key={index} className="hero-tech-item">
                <StackIcon name={tech as any} className="hero-tech-icon" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
