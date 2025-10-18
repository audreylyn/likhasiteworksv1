import React from 'react';
import '../styles/components/Pricing.css';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: '999',
      period: 'mo',
      features: [
        '5 Page Website',
        'Responsive Design',
        'Basic SEO',
        '1 Month Support',
        'Contact Form',
        'Social Media Integration'
      ],
      featured: false
    },
    {
      name: 'Professional',
      price: '2,499',
      period: 'mo',
      features: [
        '15 Page Website',
        'Advanced Responsive Design',
        'Advanced SEO',
        '3 Months Support',
        'Custom Forms',
        'Blog Integration',
        'Analytics Setup',
        'Priority Support'
      ],
      featured: true
    },
    {
      name: 'Enterprise',
      price: '4,999',
      period: 'mo',
      features: [
        'Unlimited Pages',
        'Custom Design System',
        'Enterprise SEO',
        '12 Months Support',
        'Advanced Integrations',
        'E-Commerce Ready',
        'Performance Optimization',
        'Dedicated Account Manager',
        'Custom Features'
      ],
      featured: false
    }
  ];

  return (
    <section className="pricing-section" id="Plans">
      <div className="pricing-container">
        <div className="pricing-header">
          <h2 className="pricing-title">Simple, Transparent Pricing</h2>
          <p className="pricing-subtitle">
            Choose the perfect plan for your business needs
          </p>
        </div>

        <div className="pricing-palden">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`pricing-item ${plan.featured ? 'pricing-item--featured' : ''}`}
            >
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
                  <span className="pricing-currency">$</span>
                  {plan.price}
                  <span className="pricing-period"> / {plan.period}</span>
                </div>
                <h3 className="pricing-plan-title">{plan.name}</h3>
              </div>
              <ul className="pricing-feature-list">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="pricing-feature">{feature}</li>
                ))}
              </ul>
              <button className="pricing-action">Choose plan</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
