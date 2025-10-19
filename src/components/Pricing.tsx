import React from 'react';
import '../styles/components/Pricing.css';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: '799',
      originalPrice: '',
      features: [
        'Static Website Design',
        'Up to 5 Pages',
        'Responsive Layout',
        'Basic SEO'
      ],
      featured: false
    },
    {
      name: 'Professional',
      price: '3,499',
      originalPrice: '10,000',
      features: [
        'Dynamic Website',
        'Up to 15 Pages',
        'Free Hosting (1 Year)',
        'Free Domain (1 Year)',
        '1 Month Maintenance'
      ],
      featured: true,
      badge: 'Most Popular'
    },
    {
      name: 'Premium',
      price: '5,999',
      originalPrice: '15,000',
      features: [
        'Full-Featured Website',
        'Unlimited Pages',
        'Free Hosting (1 Year)',
        'Free Domain (1 Year)',
        '3 Months Maintenance',
        'Advanced Features'
      ],
      featured: false
    }
  ];

  return (
    <section className="pricing-section" id="Plans">
      <div className="pricing-container">
        <div className="pricing-header">
          <h2 className="rainbow-text rainbow-text-large rainbow-text-extrabold">Special Limited Offer</h2>
          <p className="pricing-subtitle">
            Starting from just ₱799! Discounted prices - limited slots available
          </p>
        </div>

        <div className="pricing-palden">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`pricing-item ${plan.featured ? 'pricing-item--featured' : ''}`}
            >
              {plan.badge && (
                <div className="pricing-badge">{plan.badge}</div>
              )}
              <div className="pricing-deco">
                <svg 
                  className="pricing-deco-img" 
                  enableBackground="new 0 0 300 100" 
                  height="100px" 
                  preserveAspectRatio="none" 
                  version="1.1" 
                  viewBox="0 0 300 100" 
                  width="300px" 
                  x="0px" 
                  xmlSpace="preserve" 
                  xmlns="http://www.w3.org/2000/svg" 
                  xmlnsXlink="http://www.w3.org/1999/xlink" 
                  y="0px"
                >
                  <path 
                    className="deco-layer deco-layer--1" 
                    d="M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z" 
                    fill="#FFFFFF" 
                    opacity="0.6"
                  />
                  <path 
                    className="deco-layer deco-layer--2" 
                    d="M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z" 
                    fill="#FFFFFF" 
                    opacity="0.6"
                  />
                  <path 
                    className="deco-layer deco-layer--3" 
                    d="M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716H42.401L43.415,98.342z" 
                    fill="#FFFFFF" 
                    opacity="0.7"
                  />
                  <path 
                    className="deco-layer deco-layer--4" 
                    d="M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z" 
                    fill="#FFFFFF"
                  />
                </svg>
                <div className="pricing-price">
                  <span className="pricing-currency">₱</span>
                  {plan.price}
                </div>
                {plan.originalPrice && (
                  <div className="pricing-original">was ₱{plan.originalPrice}</div>
                )}
              </div>
              <h3 className="pricing-plan-title">{plan.name}</h3>
              <ul className="pricing-feature-list">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="pricing-feature">{feature}</li>
                ))}
              </ul>
              <a href="/quote" className="envelop-btn">
                <span className="envelop-btn__text">
                  <span className="envelop-btn__text-inner">
                    Get Started
                    <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.125 16L9.125 9L2.125 2" stroke="#FFD028" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="envelop-btn__text-inner">
                    Get Started
                    <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.125 16L9.125 9L2.125 2" stroke="#FFD028" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
