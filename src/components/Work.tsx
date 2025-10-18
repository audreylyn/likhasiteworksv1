import React from 'react';
import '../styles/components/Work.css';
import { ExternalLink } from 'lucide-react';

const Work = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
      link: '#'
    },
    {
      title: 'Mobile Banking App',
      category: 'Mobile Development',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop',
      link: '#'
    },
    {
      title: 'SaaS Dashboard',
      category: 'UI/UX Design',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      link: '#'
    },
    {
      title: 'Restaurant Website',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
      link: '#'
    },
    {
      title: 'Fitness Tracking App',
      category: 'Mobile Development',
      image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=600&fit=crop',
      link: '#'
    },
    {
      title: 'Corporate Branding',
      category: 'Branding',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
      link: '#'
    }
  ];

  return (
    <section className="work-section" id="Work">
      <div className="work-container">
        <div className="work-header">
          <h2 className="work-title">Our Work</h2>
          <p className="work-subtitle">
            Explore our portfolio of successful projects and satisfied clients
          </p>
        </div>

        <div className="work-grid">
          {projects.map((project, index) => (
            <a 
              key={index} 
              href={project.link}
              className="work-project-card"
            >
              <div className="work-project-image">
                <img src={project.image} alt={project.title} />
                <div className="work-project-overlay">
                  <ExternalLink className="work-project-icon" size={24} />
                </div>
              </div>
              <div className="work-project-info">
                <span className="work-project-category">{project.category}</span>
                <h3 className="work-project-title">{project.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
