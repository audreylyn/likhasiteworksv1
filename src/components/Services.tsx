import React from 'react';
import '../styles/components/Services.css';
import { Code, Palette, Smartphone, Megaphone, ShoppingCart, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      Icon: Code,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies and best practices for optimal performance.'
    },
    {
      Icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that provide exceptional user experiences and drive engagement.'
    },
    {
      Icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile apps for iOS and Android with seamless functionality.'
    },
    {
      Icon: Megaphone,
      title: 'Digital Marketing',
      description: 'Strategic marketing campaigns to grow your online presence and reach your target audience.'
    },
    {
      Icon: ShoppingCart,
      title: 'E-Commerce Solutions',
      description: 'Complete online store solutions with secure payment integration and inventory management.'
    },
    {
      Icon: Zap,
      title: 'Performance Optimization',
      description: 'Speed up your website and improve user experience with cutting-edge optimization techniques.'
    }
  ];

  return (
    <section className="services-section" id="Services">
      <div className="services-container">
        <div className="services-header">
          <h2 className="rainbow-text rainbow-text-large rainbow-text-extrabold">Exclusive Services</h2>
          <p className="services-subtitle">
            Comprehensive digital solutions tailored to your business needs. We deliver quality services that help you grow and succeed.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => {
            const IconComponent = service.Icon;
            return (
              <div key={index} className="service-card">
                <div className="service-content">
                  <div className="service-icon-wrapper">
                    <IconComponent className="service-icon" size={32} strokeWidth={2} />
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                </div>
                <span className="service-circle-before"></span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
