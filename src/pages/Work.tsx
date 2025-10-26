import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { X } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  subtitle: string;
  tags: string[];
  thumbnail: string;
  images: string[];
  features: string[];
  finalResult: {
    description: string;
    highlights: string[];
    image: string;
  };
  testimonial?: {
    text: string;
    author: string;
    date: string;
  };
}

const projects: Project[] = [
  {
    id: 1,
    title: 'The Venue Collective',
    subtitle: 'UI/UX Design & WordPress Development',
    tags: ['UI/UX Design', 'Custom Functionality', 'WordPress Development', 'SEO Redirects'],
    thumbnail: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=800&fit=crop'],
    features: [
      'UX Improvements',
      'Dropdown Menus UI Improvement',
      'Filter System Fixing',
      'Optimized AJAX Requests',
      'No Results Page UX Improvements',
      'Venues Listing Page Updates',
      'Changed Logo / Branding Sitewide',
      'Setup SEO-Friendly Redirects to New Domain'
    ],
    finalResult: {
      description: "We successfully revamped The Venue Collective's website, making the venue filter system more intuitive, faster, and user-friendly. The updated dropdowns are easier to navigate, and the filter process feels smoother overall. We also made sure the venue listings load faster and added 'Learn More' and 'Book Now' buttons to help users explore venues. We updated the website's look with the new logo and moved the blog section. The new domain is live with proper redirects and SEO adjustments.",
      highlights: [
        'Clean, user-friendly dropdown menus with improved design.',
        'Faster filter functionality with loading times under 3 seconds.',
        'Updated branding across the site.',
        'Simplified venue listing page.',
        'SEO-friendly setup with proper redirects to the new domain.'
      ],
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop'
    },
    testimonial: {
      text: "This was my first time working with htmlBurger and they were great to work with! We did a branding/copy overhaul and also improved UX/UI on the search and filter feature of our website. They do thorough and professional work at a fair price. If you are US-based, one thing to keep in mind when working with htmlBurger is they are based in Bulgaria, so the time difference creates a small lag in response time (on both ends) however they are always very responsive.",
      author: 'Allison Camwillet',
      date: 'October 21, 2024'
    }
  },
  {
    id: 2,
    title: 'XYAB.com',
    subtitle: 'Custom Shopify Theme Development',
    tags: ['E-commerce', 'Shopify', 'Custom Theme', 'Responsive Design'],
    thumbnail: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&h=800&fit=crop'],
    features: [
      'Custom Shopify Theme',
      'Mobile-First Design',
      'Product Filtering',
      'Cart Optimization',
      'Payment Gateway Integration',
      'SEO Optimization'
    ],
    finalResult: {
      description: "Built a custom Shopify theme for XYAB.com that delivers a seamless shopping experience. The theme features a modern design with intuitive navigation and fast loading times.",
      highlights: [
        'Fully responsive design across all devices.',
        'Optimized checkout process.',
        'Enhanced product discovery.',
        'Improved site performance.'
      ],
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop'
    }
  }
];

const Work = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div style={{ background: '#fff' }}>
      <Header />
      
      {/* Hero Section */}
      <section style={{ 
        padding: '120px 20px 80px', 
        background: '#fff',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ 
            fontSize: '64px', 
            marginBottom: '24px',
            fontWeight: '700'
          }}>
            Selected <span style={{ color: '#f4d03f' }}>Projects</span>
          </h1>
          <p style={{ 
            fontSize: '18px', 
            lineHeight: '1.8', 
            color: '#5f5f5f',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            This showcase features a tiny fraction of the websites we have done for our amazing clients over the years. We include case studies that cover various areas of our expertise in web design, front-end development, and integrations with different platforms like WordPress, Shopify, Hubspot, Craft CMS, and more.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section style={{ padding: '60px 20px 120px', background: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
            gap: '40px'
          }}>
            {projects.map((project) => (
              <div 
                key={project.id}
                onClick={() => setSelectedProject(project)}
                style={{ 
                  cursor: 'pointer',
                  background: '#f5f5f5',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  transition: 'transform 0.3s ease',
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ 
                  height: '350px', 
                  overflow: 'hidden',
                  position: 'relative'
                }}>
                  <img 
                    src={project.thumbnail} 
                    alt={project.title}
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover'
                    }}
                  />
                </div>
                <div style={{ padding: '30px' }}>
                  <h3 style={{ 
                    fontSize: '28px', 
                    marginBottom: '8px',
                    fontWeight: '700'
                  }}>
                    {project.title}
                  </h3>
                  <p style={{ 
                    fontSize: '16px', 
                    color: '#666',
                    margin: '0'
                  }}>
                    {project.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ 
        padding: '80px 20px',
        background: '#f4d03f',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: '48px', 
            marginBottom: '20px',
            fontWeight: '700'
          }}>
            Have a similar project?
          </h2>
          <p style={{ 
            fontSize: '18px', 
            marginBottom: '30px',
            color: '#333'
          }}>
            We are here to help. Let's discuss your needs and get started.
          </p>
          <button style={{
            background: '#000',
            color: '#fff',
            border: 'none',
            padding: '16px 40px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
            borderRadius: '4px',
            transition: 'transform 0.2s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            GET STARTED
          </button>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.8)',
          zIndex: 1000,
          overflow: 'auto',
          padding: '40px 20px'
        }}
        onClick={() => setSelectedProject(null)}
        >
          <div 
            style={{
              maxWidth: '1100px',
              margin: '0 auto',
              background: '#fff',
              borderRadius: '8px',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'rgba(0, 0, 0, 0.5)',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 10
              }}
            >
              <X color="#fff" size={24} />
            </button>

            {/* Modal Header */}
            <div style={{ padding: '60px 60px 40px', textAlign: 'center' }}>
              <h2 style={{ fontSize: '48px', marginBottom: '12px', fontWeight: '700' }}>
                {selectedProject.title}
              </h2>
              <p style={{ fontSize: '18px', color: '#666', marginBottom: '24px' }}>
                {selectedProject.subtitle}
              </p>
              <div style={{ 
                display: 'flex', 
                gap: '12px', 
                justifyContent: 'center',
                flexWrap: 'wrap'
              }}>
                {selectedProject.tags.map((tag, index) => (
                  <span 
                    key={index}
                    style={{
                      padding: '8px 16px',
                      border: '1px solid #ddd',
                      borderRadius: '4px',
                      fontSize: '14px',
                      color: '#333'
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Main Image and Features */}
            <div style={{ 
              padding: '0 60px 40px',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '40px',
              alignItems: 'start'
            }}>
              <div>
                <img 
                  src={selectedProject.images[0]} 
                  alt={selectedProject.title}
                  style={{ 
                    width: '100%', 
                    borderRadius: '8px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                  }}
                />
              </div>
              <div>
                <ul style={{ 
                  listStyle: 'none', 
                  padding: 0, 
                  margin: 0 
                }}>
                  {selectedProject.features.map((feature, index) => (
                    <li 
                      key={index}
                      style={{
                        padding: '12px 0',
                        borderBottom: '1px solid #eee',
                        fontSize: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px'
                      }}
                    >
                      <span style={{ 
                        width: '8px', 
                        height: '8px', 
                        background: '#000', 
                        borderRadius: '50%',
                        flexShrink: 0
                      }} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Final Result Section */}
            <div style={{ 
              padding: '60px',
              background: '#f9f4ef',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '40px',
              alignItems: 'center'
            }}>
              <div>
                <h3 style={{ fontSize: '32px', marginBottom: '20px', fontWeight: '700' }}>
                  Final Result
                </h3>
                <p style={{ 
                  fontSize: '16px', 
                  lineHeight: '1.8', 
                  color: '#5f5f5f',
                  marginBottom: '24px'
                }}>
                  {selectedProject.finalResult.description}
                </p>
                <ul style={{ 
                  listStyle: 'none', 
                  padding: 0, 
                  margin: 0 
                }}>
                  {selectedProject.finalResult.highlights.map((highlight, index) => (
                    <li 
                      key={index}
                      style={{
                        padding: '8px 0',
                        fontSize: '15px',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '12px'
                      }}
                    >
                      <span style={{ 
                        width: '6px', 
                        height: '6px', 
                        background: '#000', 
                        borderRadius: '50%',
                        flexShrink: 0,
                        marginTop: '8px'
                      }} />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <img 
                  src={selectedProject.finalResult.image} 
                  alt="Final Result"
                  style={{ 
                    width: '100%', 
                    borderRadius: '8px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                  }}
                />
              </div>
            </div>

            {/* Testimonial Section */}
            {selectedProject.testimonial && (
              <div style={{ 
                padding: '60px',
                background: '#f9f4ef'
              }}>
                <h3 style={{ 
                  fontSize: '24px', 
                  marginBottom: '20px',
                  fontWeight: '700'
                }}>
                  And the client was happy:
                </h3>
                <p style={{ 
                  fontSize: '16px', 
                  lineHeight: '1.8', 
                  color: '#333',
                  fontStyle: 'italic',
                  marginBottom: '16px'
                }}>
                  "{selectedProject.testimonial.text}"
                </p>
                <p style={{ 
                  fontSize: '14px', 
                  color: '#666',
                  marginBottom: '24px'
                }}>
                  — {selectedProject.testimonial.author}, {selectedProject.testimonial.date}
                </p>
                <button style={{
                  background: '#000',
                  color: '#fff',
                  border: 'none',
                  padding: '14px 32px',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  borderRadius: '4px'
                }}>
                  CHECK IT OUT LIVE
                </button>
              </div>
            )}

            {/* Modal CTA */}
            <div style={{ 
              padding: '60px',
              background: '#f4d03f',
              textAlign: 'center'
            }}>
              <h3 style={{ fontSize: '36px', marginBottom: '16px', fontWeight: '700' }}>
                Have a similar project?
              </h3>
              <p style={{ fontSize: '16px', marginBottom: '24px', color: '#333' }}>
                We are here to help. Let's discuss your needs and get started.
              </p>
              <button style={{
                background: '#000',
                color: '#fff',
                border: 'none',
                padding: '14px 32px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
                borderRadius: '4px'
              }}>
                GET STARTED
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Work;
