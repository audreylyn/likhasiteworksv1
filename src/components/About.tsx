import React, { useState } from 'react';
import '../styles/components/About.css';
import '../styles/components/RainbowText.css';
import whyusImg from '../assets/images/why-us.png';
import { Target, Zap, Briefcase, DollarSign, Shield, User, Gift, ChevronDown } from 'lucide-react';

const About = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const features = [
    {
      Icon: Target,
      title: 'Top Notch Quality',
      description: 'High quality every step of the way – detailed project reviews to guarantee a great understanding of your project needs, handcrafted code that speaks for itself, direct and open communication, and use of the latest best tools and practices. And that\'s just a part of it all.'
    },
    {
      Icon: Zap,
      title: 'Fast Turnarounds',
      description: 'We understand the importance of timely delivery. Our streamlined processes and dedicated team ensure quick turnaround times without compromising on quality.'
    },
    {
      Icon: DollarSign,
      title: 'Reasonable Pricing',
      description: 'Quality doesn\'t have to break the bank. We offer competitive pricing that provides excellent value for businesses of all sizes.'
    },
    {
      Icon: Shield,
      title: 'Reliability & Flexibility',
      description: 'Count on us to be there when you need us. We adapt to your changing requirements and maintain consistent communication throughout the project.'
    },
    {
      Icon: Gift,
      title: 'Post-Delivery Support',
      description: 'Our commitment doesn\'t end at delivery. We provide ongoing support and maintenance to ensure your solution continues to perform optimally.'
    }
  ];

  const stats = [
    { number: 'Begun', label: 'Freelance Web Development Journey' },
    { number: '5,000+', label: 'Clients from diverse Backgrounds' }
  ];

  return (
    <section className="about-section" id="About">
      {/* Hero Section */}
      <div className="about-hero">
        <div className="about-hero-image">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop&q=80" 
            alt="Office workspace"
          />
        </div>
        <div className="about-hero-content">
          <h2 className="about-hero-title">
            Web development service you can trust.
          </h2>
          <p className="about-hero-description">
            We offer a reliable and easy-to-use web development service that empowers you to take control of your project from start to finish. With a commitment to direct and open communication, high code quality, and a reliable post-delivery support, we help you scale your business and achieve your goals.
          </p>
          <a href="#Contact" className="about-hero-cta">
            START A CONVERSATION
          </a>
        </div>
      </div>

      {/* Why Us Section */}
      <div className="about-why-us">
        <div className="about-why-us-container">
          <div className="about-why-us-left">
            <h2 className="about-why-us-title rainbow-text rainbow-text-large rainbow-text-extrabold">
              So, Why Us?
            </h2>
            <p className="about-why-us-description">
              Unbeatable code quality at reasonable cost and delivery terms. A perfect choice for businesses who prioritize semantic code over the lowest possible price.
            </p>

            {/* Stats Illustration */}
            <div className="about-stats-illustration">
            <img src="{whyUsImg}" alt="Why Us" className="about-stats-img"/>
            </div>

            {/* Stats Numbers */}
            <div className="about-stats-numbers">
              {stats.map((stat, index) => (
                <div key={index} className="about-stat-item">
                  <div className="about-stat-number">{stat.number}</div>
                  <div className="about-stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-why-us-right">
            {/* Accordion Features */}
            <div className="about-accordion">
              {features.map((feature, index) => {
                const IconComponent = feature.Icon;
                const isOpen = openAccordion === index;
                return (
                  <div 
                    key={index} 
                    className={`about-accordion-item ${isOpen ? 'active' : ''}`}
                  >
                    <button 
                      className="about-accordion-header"
                      onClick={() => toggleAccordion(index)}
                    >
                      <div className="about-accordion-icon-wrapper">
                        <IconComponent className="about-accordion-icon" size={24} />
                      </div>
                      <span className="about-accordion-title">{feature.title}</span>
                      <ChevronDown 
                        className={`about-accordion-arrow ${isOpen ? 'rotated' : ''}`}
                        size={20}
                      />
                    </button>
                    {isOpen && (
                      <div className="about-accordion-content">
                        <p>{feature.description}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
