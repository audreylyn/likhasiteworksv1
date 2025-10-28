import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
    title: 'NightFit™',
    subtitle: 'Modern Landing Page Design & Development',
    tags: ['React', 'Vite', 'Tailwind CSS', 'UI/UX Design', 'SEO Optimization'],
    thumbnail: '/src/assets/projects/nightfit/hero-section.PNG',
    images: ['/src/assets/projects/nightfit/half1.png'],
    features: [
      'Modern Dark/Light Mode Theme Toggle',
      'Responsive Mobile-First Design',
      'Interactive AI Chatbot Integration',
      'Order Modal with Dynamic Pricing',
      'Smooth Scroll Navigation',
      'FAQ Accordion Component',
      'Testimonials Carousel',
      'Contact Form Integration',
      'SEO-Optimized Meta Tags',
      'Fast Performance with Vite'
    ],
    finalResult: {
      description: "We successfully created a modern, conversion-focused landing page for NightFit™, a revolutionary overnight fat burner supplement. The website features a sleek dark mode design with neon-lime accents, providing an engaging user experience. Built with React and Vite for optimal performance, the site includes an interactive AI chatbot for customer support, dynamic order modals with quantity selection, and comprehensive product information sections. The responsive design ensures perfect viewing on all devices, while SEO optimization helps drive organic traffic.",
      highlights: [
        'Modern dark/light theme with smooth transitions and neon-lime accents.',
        'Lightning-fast page load times with Vite build optimization.',
        'Interactive chatbot for instant customer support and order assistance.',
        'Fully responsive design optimized for mobile, tablet, and desktop.',
        'Comprehensive SEO meta tags for improved search engine visibility.',
        'Clean component architecture for easy maintenance and updates.'
      ],
      image: '/src/assets/projects/nightfit/half2.png'
    },
    testimonial: {
      text: "Working with LikhaSiteWorks on the NightFit landing page was an excellent experience. They delivered a modern, high-converting website that perfectly captures our brand's energy. The dark mode design with neon accents looks incredible, and the interactive features like the chatbot and order modal work flawlessly. The site loads incredibly fast and looks great on all devices. Highly professional work delivered on time!",
      author: 'NightFit Team',
      date: 'October 28, 2025'
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
  const navigate = useNavigate();

  // Hide scroll-to-top button when modal is open
  useEffect(() => {
    const scrollToTopBtn = document.querySelector('.scroll-to-top') as HTMLElement;
    if (scrollToTopBtn) {
      if (selectedProject) {
        scrollToTopBtn.style.display = 'none';
      } else {
        scrollToTopBtn.style.display = 'flex';
      }
    }
  }, [selectedProject]);

  const handleGetStarted = () => {
    navigate('/quote');
  };

  return (
    <div style={{ background: '#fff' }}>
      <Header />
      
      <style>{`
        @media (max-width: 768px) {
          .hero-title {
            font-size: 36px !important;
          }
          .hero-text {
            font-size: 16px !important;
          }
          .projects-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          .project-card {
            min-width: 100% !important;
          }
          .project-title {
            font-size: 24px !important;
          }
          .cta-title {
            font-size: 32px !important;
          }
          .modal-overlay {
            padding: 20px 10px !important;
          }
          .modal-content {
            margin: 0 !important;
            max-width: 100% !important;
            border-radius: 12px !important;
          }
          .modal-header {
            padding: 50px 20px 20px !important;
          }
          .modal-title {
            font-size: 28px !important;
          }
          .modal-subtitle {
            font-size: 15px !important;
          }
          .modal-tags {
            flex-direction: column !important;
            gap: 8px !important;
          }
          .modal-tag {
            width: 100% !important;
            text-align: center !important;
          }
          .modal-body {
            padding: 0 20px 30px !important;
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          .modal-body img {
            width: 100% !important;
            height: auto !important;
          }
          .modal-result {
            padding: 30px 20px !important;
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          .result-title {
            font-size: 24px !important;
          }
          .modal-testimonial {
            padding: 30px 20px !important;
          }
          .testimonial-title {
            font-size: 20px !important;
          }
          .modal-cta {
            padding: 30px 20px !important;
          }
          .cta-modal-title {
            font-size: 24px !important;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 28px !important;
          }
          .modal-overlay {
            padding: 10px 5px !important;
          }
          .modal-header {
            padding: 50px 15px 15px !important;
          }
          .modal-title {
            font-size: 22px !important;
          }
          .modal-subtitle {
            font-size: 14px !important;
          }
          .modal-body {
            padding: 0 15px 20px !important;
          }
          .modal-result {
            padding: 25px 15px !important;
          }
          .result-title {
            font-size: 20px !important;
          }
          .modal-testimonial {
            padding: 25px 15px !important;
          }
          .modal-cta {
            padding: 25px 15px !important;
          }
          .cta-modal-title {
            font-size: 20px !important;
          }
        }
      `}</style>
      
      {/* Hero Section */}
      <section style={{ 
        padding: '120px 20px 80px', 
        background: '#fff',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 className="hero-title" style={{ 
            fontSize: '64px', 
            marginBottom: '24px',
            fontWeight: '700'
          }}>
            Selected <span style={{ color: '#f4d03f' }}>Projects</span>
          </h1>
          <p className="hero-text" style={{ 
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
          <div className="projects-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
            gap: '40px'
          }}>
            {projects.map((project) => (
              <div 
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="project-card"
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
                  <h3 className="project-title" style={{ 
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
          <h2 className="cta-title" style={{ 
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
          <button 
            onClick={handleGetStarted}
            style={{
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
        <div 
          className="modal-overlay"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.8)',
            zIndex: 1000,
            overflow: 'auto',
            padding: '40px 20px',
            boxSizing: 'border-box'
          }}
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="modal-content"
            style={{
              maxWidth: '1100px',
              margin: '0 auto',
              background: '#fff',
              borderRadius: '8px',
              position: 'relative',
              boxSizing: 'border-box'
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
            <div className="modal-header" style={{ padding: '60px 60px 40px', textAlign: 'center' }}>
              <h2 className="modal-title" style={{ fontSize: '48px', marginBottom: '12px', fontWeight: '700' }}>
                {selectedProject.title}
              </h2>
              <p className="modal-subtitle" style={{ fontSize: '18px', color: '#666', marginBottom: '24px' }}>
                {selectedProject.subtitle}
              </p>
              <div className="modal-tags" style={{ 
                display: 'flex', 
                gap: '12px', 
                justifyContent: 'center',
                flexWrap: 'wrap'
              }}>
                {selectedProject.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="modal-tag"
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
            <div className="modal-body" style={{ 
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
            <div className="modal-result" style={{ 
              padding: '60px',
              background: '#f9f4ef',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '40px',
              alignItems: 'center'
            }}>
              <div>
                <h3 className="result-title" style={{ fontSize: '32px', marginBottom: '20px', fontWeight: '700' }}>
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
              <div className="modal-testimonial" style={{ 
                padding: '60px',
                background: '#f9f4ef'
              }}>
                <h3 className="testimonial-title" style={{ 
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
                <button 
                  onClick={handleGetStarted}
                  style={{
                    background: '#000',
                    color: '#fff',
                    border: 'none',
                    padding: '14px 32px',
                    fontSize: '14px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    borderRadius: '4px'
                  }}
                >
                  CHECK IT OUT LIVE
                </button>
              </div>
            )}

            {/* Modal CTA */}
            <div className="modal-cta" style={{ 
              padding: '60px',
              background: '#f4d03f',
              textAlign: 'center'
            }}>
              <h3 className="cta-modal-title" style={{ fontSize: '36px', marginBottom: '16px', fontWeight: '700' }}>
                Have a similar project?
              </h3>
              <p style={{ fontSize: '16px', marginBottom: '24px', color: '#333' }}>
                We are here to help. Let's discuss your needs and get started.
              </p>
              <button 
                onClick={handleGetStarted}
                style={{
                  background: '#000',
                  color: '#fff',
                  border: 'none',
                  padding: '14px 32px',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  borderRadius: '4px'
                }}
              >
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
