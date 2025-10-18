import React, { useState } from 'react';
import '../styles/components/About.css';
import '../styles/components/RainbowText.css';
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
      Icon: Briefcase,
      title: 'Diverse Expertise',
      description: 'Our team brings together diverse skills and experiences across multiple technologies and industries, allowing us to tackle any challenge that comes our way.'
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
      Icon: User,
      title: 'Dedicated Project Manager',
      description: 'Every project gets a dedicated manager who serves as your single point of contact, ensuring smooth communication and project coordination.'
    },
    {
      Icon: Gift,
      title: 'Post-Delivery Support',
      description: 'Our commitment doesn\'t end at delivery. We provide ongoing support and maintenance to ensure your solution continues to perform optimally.'
    }
  ];

  const stats = [
    { number: '5,000+', label: 'Happy Clients from all Over the Globe' },
    { number: '30,000+', label: 'Projects from All Shapes and Sizes Completed' },
    { number: '150+', label: 'Dedicated Team of 150+ In-House Experts' },
    { number: '17 Yrs', label: 'Delivering Exceptional Quality Since 2007' }
  ];

  return (
    <section className="about-section" id="About">
      {/* Hero Section */}
      <div className="about-hero">
        <div className="about-hero-image">
          <img 
            src="https://i.imgur.com/8kZJN5d.jpg" 
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
          <button className="about-hero-cta">
            START A CONVERSATION
          </button>
        </div>
      </div>

      {/* Why Us Section */}
      <div className="about-why-us">
        <div className="about-why-us-container">
          <div className="about-why-us-left">
            <h2 className="about-why-us-title">
              <span className="rainbow-text rainbow-text-large rainbow-text-extrabold">So, Why Us?</span>
            </h2>
            <p className="about-why-us-description">
              Unbeatable code quality at reasonable cost and delivery terms. A perfect choice for businesses who prioritize semantic code over the lowest possible price.
            </p>

            {/* Stats Illustration */}
            <div className="about-stats-illustration">
              <svg className="about-stats-svg" viewBox="0 0 577 334" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_2024_25853)">
                  <path d="M74.5 229.89L84.77 263.98C85.76 267.26 89.03 269.29 92.41 268.72C95.79 268.15 98.22 265.14 98.07 261.72L96.5 226.55L74.5 229.88V229.89Z" fill="#E3736C"></path>
                  <path d="M52.1719 109.89L58.5019 140.22L62.0019 139.05C62.0019 139.05 62.0019 126.38 69.6719 124.88C77.3419 123.38 88.1719 127.55 88.1719 127.55L87.3419 104.38L52.1719 109.88V109.89Z" fill="#E3736C"></path>
                  <path d="M55.92 -1H39.25V15.67H55.92V-1Z" fill="black"></path>
                  <path d="M5.42188 7.33H89.7519" stroke="black" strokeWidth="3" strokeMiterlimit="10"></path>
                  <path d="M91.2919 11.5C93.8434 11.5 95.9119 9.43156 95.9119 6.88C95.9119 4.32845 93.8434 2.26 91.2919 2.26C88.7403 2.26 86.6719 4.32845 86.6719 6.88C86.6719 9.43156 88.7403 11.5 91.2919 11.5Z" fill="black"></path>
                  <path d="M4.62 11.5C7.17156 11.5 9.24 9.43156 9.24 6.88C9.24 4.32845 7.17156 2.26 4.62 2.26C2.06844 2.26 0 4.32845 0 6.88C0 9.43156 2.06844 11.5 4.62 11.5Z" fill="black"></path>
                  <path d="M177 160.11V277.44H297V160.11H177Z" fill="#EEEDED"></path>
                  <path d="M243.78 86.55H178.91C177.402 86.55 176.18 87.7723 176.18 89.28C176.18 90.7877 177.402 92.01 178.91 92.01H243.78C245.287 92.01 246.51 90.7877 246.51 89.28C246.51 87.7723 245.287 86.55 243.78 86.55Z" fill="#EEEDED"></path>
                  <path d="M335.78 138.59H178.91C177.402 138.59 176.18 139.812 176.18 141.32C176.18 142.828 177.402 144.05 178.91 144.05H335.78C337.287 144.05 338.51 142.828 338.51 141.32C338.51 139.812 337.287 138.59 335.78 138.59Z" fill="#EEEDED"></path>
                  <path d="M334.12 121.34H178.91C177.402 121.34 176.18 122.562 176.18 124.07C176.18 125.578 177.402 126.8 178.91 126.8H334.12C335.627 126.8 336.85 125.578 336.85 124.07C336.85 122.562 335.627 121.34 334.12 121.34Z" fill="#EEEDED"></path>
                  <path d="M334.12 104.09H178.91C177.402 104.09 176.18 105.312 176.18 106.82C176.18 108.328 177.402 109.55 178.91 109.55H334.12C335.627 109.55 336.85 108.328 336.85 106.82C336.85 105.312 335.627 104.09 334.12 104.09Z" fill="#EEEDED"></path>
                  <path d="M557.867 60.41H528.297V298.52H557.867V60.41Z" fill="#B3E2F1"></path>
                  <path d="M458.668 20.56H530.528C542.068 20.56 551.428 29.92 551.428 41.46V298.52H149.578" stroke="black" strokeWidth="3" strokeMiterlimit="10"></path>
                  <path d="M150.203 217.44V41.46C150.203 29.92 159.563 20.56 171.103 20.56H445.003" stroke="black" strokeWidth="3" strokeMiterlimit="10"></path>
                  <path d="M518.83 58.96C485.33 58.89 451.33 58.89 417 58.96" stroke="black" strokeWidth="3" strokeMiterlimit="10"></path>
                  <path d="M551.437 58.96C545.337 58.89 538.337 58.89 532.047 58.96" stroke="black" strokeWidth="3" strokeMiterlimit="10"></path>
                  <path d="M400.563 58.96H150.203" stroke="black" strokeWidth="3" strokeMiterlimit="10"></path>
                  <path d="M448.332 296.97C467.832 274.86 479.673 245.83 479.673 214.04C479.673 144.77 423.512 88.61 354.242 88.61C284.972 88.61 228.812 144.77 228.812 214.04C228.812 245.84 240.652 274.86 260.152 296.97H448.323H448.332Z" fill="#FFE26D"></path>
                  <path d="M236.801 153.89C227.021 171.75 221.461 192.25 221.461 214.04C221.461 245.84 234.501 276.12 254.001 298.22" stroke="black" strokeWidth="3" strokeMiterlimit="10"></path>
                  <path d="M269.587 115.26C258.297 124.11 248.567 134.85 240.867 147" stroke="black" strokeWidth="3" strokeMiterlimit="10"></path>
                  <path d="M440.004 298.22C459.504 276.11 472.324 245.83 472.324 214.04C472.324 144.77 416.164 88.61 346.894 88.61C322.794 88.61 300.284 95.41 281.164 107.19" stroke="black" strokeWidth="3" strokeMiterlimit="10"></path>
                  <path d="M313.328 205.53C318.79 205.53 323.217 195.958 323.217 184.15C323.217 172.342 318.79 162.77 313.328 162.77C307.865 162.77 303.438 172.342 303.438 184.15C303.438 195.958 307.865 205.53 313.328 205.53Z" fill="black"></path>
                  <path d="M384.413 205.53C389.876 205.53 394.303 195.958 394.303 184.15C394.303 172.342 389.876 162.77 384.413 162.77C378.951 162.77 374.523 172.342 374.523 184.15C374.523 195.958 378.951 205.53 384.413 205.53Z" fill="black"></path>
                  <path d="M295.805 243.47C295.805 243.47 346.245 291.71 401.935 243.47" stroke="black" strokeWidth="3" strokeMiterlimit="10"></path>
                  <path d="M462.328 314.79H532.588V333.41H102.328V314.79H397.668" stroke="black" strokeWidth="3" strokeMiterlimit="10"></path>
                  <path d="M540.813 103.6H540.143C537.691 103.6 535.703 105.588 535.703 108.04V159.3C535.703 161.752 537.691 163.74 540.143 163.74H540.813C543.265 163.74 545.253 161.752 545.253 159.3V108.04C545.253 105.588 543.265 103.6 540.813 103.6Z" fill="#009FD1"></path>
                  <path d="M215.15 42.84L212.18 48.33C212.11 48.45 211.93 48.44 211.88 48.31L206.12 33.96C206.07 33.82 206.2 33.69 206.34 33.74L220.69 39.5C220.82 39.55 220.83 39.73 220.71 39.8L215.22 42.77C215.22 42.77 215.17 42.81 215.15 42.84Z" stroke="black" strokeWidth="3" strokeMiterlimit="10"></path>
                  <path d="M293.419 33.26H277.789V48.89H293.419V33.26Z" stroke="black" strokeWidth="3" strokeMiterlimit="10"></path>
                  <path d="M238.922 45.72H256.722" stroke="black" strokeWidth="3" strokeMiterlimit="10"></path>
                  <path d="M238.922 36.43H256.722" stroke="black" strokeWidth="3" strokeMiterlimit="10"></path>
                  <path d="M243.172 32.17V49.97" stroke="black" strokeWidth="3" strokeMiterlimit="10"></path>
                  <path d="M252.469 32.17V49.97" stroke="black" strokeWidth="3" strokeMiterlimit="10"></path>
                  <path d="M361.583 33.94H348.023" stroke="black" strokeWidth="3" strokeMiterlimit="10"></path>
                  <path d="M354.805 48.2V34.65" stroke="black" strokeWidth="3" strokeMiterlimit="10"></path>
                  <path d="M331.423 47.22L331.123 42.42L327.463 37.43L318.203 33.86L318.823 43.77L322.483 48.76L327.083 50.47" stroke="black" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round"></path>
                  <path d="M324.89 43.03L318.57 34.36" stroke="black" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round"></path>
                  <path d="M70.7375 101.63L85.7675 75.29L81.1475 43.56L47.4375 4.66L26.1875 51.55L30.8075 83.28L52.7175 104.25" fill="white"></path>
                  <path d="M70.7375 101.63L85.7675 75.29L81.1475 43.56L47.4375 4.66L26.1875 51.55L30.8075 83.28L52.7175 104.25" stroke="black" strokeWidth="3" strokeMiterlimit="10"></path>
                  <path d="M54.4141 54.14L47.6641 6.67001" stroke="black" strokeWidth="3" strokeMiterlimit="10"></path>
                  <path d="M55.0341 65.72C58.6902 65.72 61.6541 62.7561 61.6541 59.1C61.6541 55.4439 58.6902 52.48 55.0341 52.48C51.3779 52.48 48.4141 55.4439 48.4141 59.1C48.4141 62.7561 51.3779 65.72 55.0341 65.72Z" fill="black"></path>
                  <path d="M384.262 48.98C388.63 48.98 392.172 45.4386 392.172 41.07C392.172 36.7014 388.63 33.16 384.262 33.16C379.893 33.16 376.352 36.7014 376.352 41.07C376.352 45.4386 379.893 48.98 384.262 48.98Z" stroke="black" strokeWidth="3" strokeMiterlimit="10"></path>
                  <path d="M186.223 35.11H168.562" stroke="black" strokeWidth="3" strokeMiterlimit="10"></path>
                  <path d="M186.223 40.9H168.562" stroke="black" strokeWidth="3" strokeMiterlimit="10"></path>
                  <path d="M186.223 46.44H168.562" stroke="black" strokeWidth="3" strokeMiterlimit="10"></path>
                  <path d="M533.328 47.06C537.47 47.06 540.828 43.7021 540.828 39.56C540.828 35.4179 537.47 32.06 533.328 32.06C529.186 32.06 525.828 35.4179 525.828 39.56C525.828 43.7021 529.186 47.06 533.328 47.06Z" fill="#E3736C"></path>
                  <path d="M47.4237 202.08L91.2837 196.42C99.4637 195.36 105.244 187.87 104.184 179.69C103.124 171.51 95.6337 165.73 87.4537 166.79L43.5938 172.45" stroke="black" strokeWidth="3" strokeMiterlimit="10"></path>
                  <path d="M43.6034 172.46L87.4634 166.8C95.6434 165.74 101.423 158.25 100.363 150.07C99.3034 141.89 91.8134 136.11 83.6334 137.17L39.7734 142.83" stroke="black" strokeWidth="3" strokeMiterlimit="10"></path>
                  <path d="M33.2465 206.57C33.2465 206.57 27.0865 216.31 36.1165 227.27C41.2565 233.5 51.2965 232 51.2965 232L95.1565 226.34C103.337 225.28 109.117 217.79 108.057 209.61C106.997 201.43 99.5065 195.65 91.3265 196.71L47.4665 202.37" stroke="black" strokeWidth="3" strokeMiterlimit="10"></path>
                  <path d="M51.6737 131.89C17.3437 134.89 13.4237 159.8 25.8937 172.56C25.8937 172.56 20.9337 181.64 23.7237 193.27" stroke="black" strokeWidth="3" strokeMiterlimit="10"></path>
                  <path d="M55.7253 141.18L45.4453 105.44L79.6753 100.56L82.0653 136.29" stroke="black" strokeWidth="3" strokeMiterlimit="10"></path>
                  <path d="M90.3372 227.22L91.8072 259.13C91.9872 262.94 89.1872 266.25 85.4072 266.71C81.8472 267.15 78.5072 264.93 77.5072 261.49L68.1172 229" stroke="black" strokeWidth="3" strokeMiterlimit="10"></path>
                  <path d="M108.907 134.66L77.7765 123.87C71.9665 121.86 65.0665 126.54 62.3665 134.34C59.6665 142.13 62.1765 150.09 67.9865 152.1L99.9965 163.56" fill="white"></path>
                  <path d="M108.907 134.66L77.7765 123.87C71.9665 121.86 65.0665 126.54 62.3665 134.34C59.6665 142.13 62.1765 150.09 67.9865 152.1L99.9965 163.56" stroke="black" strokeWidth="3" strokeMiterlimit="10"></path>
                  <path d="M107.023 133.95C117.653 138.18 135.943 163.6 118.233 186.05" stroke="black" strokeWidth="3" strokeMiterlimit="10"></path>
                  <path d="M149.438 240.11V276.11" stroke="black" strokeWidth="3" strokeMiterlimit="10"></path>
                  <path d="M457.672 123.22C457.672 123.22 484.672 151.55 488.002 196.55" stroke="black" strokeWidth="3" strokeMiterlimit="10"></path>
                  <path d="M124.997 173.89C124.997 173.89 133.437 173.89 134.777 185.89C136.107 197.89 124.367 217.5 118.337 222.78C111.227 229 104.117 222.78 104.117 222.78" stroke="black" strokeWidth="3" strokeMiterlimit="10"></path>
                  <path d="M129.438 207.22C129.438 207.22 140.998 228.11 167.658 240.11C200.398 254.84 223.658 235.67 223.658 235.67" stroke="black" strokeWidth="3" strokeMiterlimit="10"></path>
                  <path d="M472.328 221.89C472.328 221.89 520.108 207.67 551.658 247.22" stroke="black" strokeWidth="3" strokeMiterlimit="10"></path>
                  <path d="M366.328 333.41H576.998" stroke="black" strokeWidth="3" strokeMiterlimit="10"></path>
                  <path d="M568.328 48.56V71.22" stroke="black" strokeWidth="3" strokeMiterlimit="10"></path>
                  <path d="M60.5625 261C66.3425 281.44 77.8925 288.11 88.1225 288.11" stroke="black" strokeWidth="3" strokeMiterlimit="10"></path>
                </g>
                <defs>
                  <clipPath id="clip0_2024_25853">
                    <rect width="577" height="335.91" fill="white" transform="translate(0 -1)"></rect>
                  </clipPath>
                </defs>
              </svg>
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
