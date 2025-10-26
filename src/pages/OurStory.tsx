import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Lightbulb, Rocket, Star } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const OurStory = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [bgTheme, setBgTheme] = useState('light');

  const applyTheme = (sectionIndex: number) => {
    if (sectionIndex === 0) {
      setBgTheme('light');
    } else if (sectionIndex === 1) {
      setBgTheme('medium');
    } else if (sectionIndex === 2) {
      setBgTheme('dark');
    }
  };

  useEffect(() => {
    // Set initial states
    sectionsRef.current.forEach((section) => {
      if (!section) return;
      const textBlock = section.querySelector('.text-block');
      const imageBlock = section.querySelector('.image-block');
      if (textBlock && imageBlock) {
        gsap.set(textBlock, { opacity: 0, y: 30 });
        gsap.set(imageBlock, { opacity: 0, x: 30 });
      }
    });

    // Animate first section immediately
    const firstSection = sectionsRef.current[0];
    if (firstSection) {
      const textBlock = firstSection.querySelector('.text-block');
      const imageBlock = firstSection.querySelector('.image-block');
      
      gsap.timeline()
        .to(textBlock, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' })
        .to(imageBlock, { opacity: 1, x: 0, duration: 0.5, ease: 'power2.out' }, '-=0.3');
    }

    // Animate other sections on scroll
    sectionsRef.current.forEach((section, index) => {
      if (!section || index === 0) return;
      
      const textBlock = section.querySelector('.text-block');
      const imageBlock = section.querySelector('.image-block');

      gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 60%',
          end: 'bottom 40%',
          toggleActions: 'play reverse play reverse',
          onEnter: () => {
            setActiveStep(index);
            applyTheme(index);
          },
          onEnterBack: () => {
            setActiveStep(index);
            applyTheme(index);
          }
        }
      })
      .fromTo(textBlock, 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
      )
      .fromTo(imageBlock,
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0, duration: 0.5, ease: 'power2.out' },
        '-=0.3'
      );
    });

    // Apply initial theme
    applyTheme(0);

    // Progress bar scroll handler
    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (window.scrollY / docHeight) * 100;
      const progressHeight = Math.min(100, Math.max(0, scrollPercentage));
      
      if (progressBarRef.current) {
        progressBarRef.current.style.height = `${progressHeight}%`;
      }

      // Better section detection based on viewport position
      let currentSection = 0;
      sectionsRef.current.forEach((section, index) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          const sectionMiddle = rect.top + rect.height / 2;
          const viewportMiddle = window.innerHeight / 2;
          
          if (sectionMiddle < viewportMiddle && sectionMiddle > -rect.height / 2) {
            currentSection = index;
          }
        }
      });
      
      setActiveStep(currentSection);
      applyTheme(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const scrollToSection = (index: number) => {
    sectionsRef.current[index]?.scrollIntoView({ behavior: 'smooth' });
    setActiveStep(index);
    applyTheme(index);
  };

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const getBackgroundStyle = () => {
    const baseStyle = { transition: 'background 0.5s ease, color 0.5s ease' };
    if (bgTheme === 'light') {
      return { ...baseStyle, background: '#f9f4ef' };
    } else if (bgTheme === 'medium') {
      return { ...baseStyle, background: '#e8dfd0' };
    } else if (bgTheme === 'dark') {
      return { ...baseStyle, background: '#3d4f5c' };
    }
    return baseStyle;
  };

  return (
    <div style={{...styles.pageContainer, ...getBackgroundStyle()}}>
      <div 
        style={{
          opacity: activeStep === 2 ? 0 : 1,
          pointerEvents: activeStep === 2 ? 'none' : 'auto',
          transition: 'opacity 0.5s ease'
        }}
      >
        <Header />
      </div>
      
      {/* Progress Bar - Left Side */}
      <div 
        style={{
          ...styles.progressBar, 
          opacity: activeStep === 2 ? 0 : 1,
          pointerEvents: activeStep === 2 ? 'none' : 'auto',
          transition: 'opacity 0.5s ease'
        }} 
        className="progress-bar-container"
      >
        <div style={styles.progressBarBg}></div>
        <div ref={progressBarRef} style={styles.progressBarFill}></div>
        <div 
          style={{...styles.progressStep, ...(activeStep >= 0 ? styles.progressStepActive : {})}}
          onClick={() => scrollToSection(0)}
        >
          <Lightbulb size={20} strokeWidth={2.5} />
        </div>
        <div 
          style={{...styles.progressStep, ...(activeStep >= 1 ? styles.progressStepActive : {})}}
          onClick={() => scrollToSection(1)}
        >
          <Rocket size={20} strokeWidth={2.5} />
        </div>
        <div 
          style={{...styles.progressStep, ...(activeStep >= 2 ? styles.progressStepActive : {})}}
          onClick={() => scrollToSection(2)}
        >
          <Star size={20} strokeWidth={2.5} />
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .progress-bar-container {
            display: none !important;
          }
        }
      `}</style>

      {/* Story Container */}
      <div style={styles.storyContainer}>
        {/* Section 1: The Beginning */}
        <section 
          ref={el => { sectionsRef.current[0] = el; }}
          style={styles.storySection}
        >
          <div className="text-block" style={styles.textBlock}>
            <h2 style={styles.heading}>The Beginning of the Journey</h2>
            <p style={styles.paragraph}>
              In a world increasingly digital, we saw an opportunity to make a difference. 
              Likha Siteworks was born from a simple idea: to create stunning, functional websites 
              that help businesses thrive online. What started as a passion project quickly grew into 
              a mission to empower brands with exceptional web experiences.
            </p>
            <button 
              style={styles.nextButton}
              onClick={() => scrollToSection(1)}
              onMouseEnter={(e) => e.currentTarget.style.background = '#555'}
              onMouseLeave={(e) => e.currentTarget.style.background = '#333'}
            >
              Continue the story
            </button>
          </div>
          <div className="image-block" style={styles.imageBlock}>
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop" 
              alt="Team collaboration" 
              style={styles.imagePlaceholder}
              onClick={() => openModal('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=900&fit=crop')}
            />
          </div>
        </section>

        {/* Section 2: Growth & Innovation */}
        <section 
          ref={el => { sectionsRef.current[1] = el; }}
          style={styles.storySection}
        >
          <div className="text-block" style={styles.textBlock}>
            <h2 style={styles.heading}>Growth & Innovation</h2>
            <p style={styles.paragraph}>
              As we evolved, so did our expertise. We embraced cutting-edge technologies, 
              from React and Next.js to headless CMS solutions. Each project taught us something new, 
              and every client partnership helped us refine our craft. We didn't just build websites—we 
              built relationships and solutions that drive real results.
            </p>
            <button 
              style={styles.nextButton}
              onClick={() => scrollToSection(2)}
              onMouseEnter={(e) => e.currentTarget.style.background = '#555'}
              onMouseLeave={(e) => e.currentTarget.style.background = '#333'}
            >
              Discover what's next
            </button>
          </div>
          <div className="image-block" style={styles.imageBlock}>
            <img 
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop" 
              alt="Innovation and growth" 
              style={styles.imagePlaceholder}
              onClick={() => openModal('https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&h=900&fit=crop')}
            />
          </div>
        </section>

        {/* Section 3: Our Vision */}
        <section 
          ref={el => { sectionsRef.current[2] = el; }}
          style={styles.storySection}
        >
          <div className="text-block" style={styles.textBlock}>
            <h2 style={styles.heading}>Our Vision for the Future</h2>
            <p style={styles.paragraph}>
              Today, we're more committed than ever to pushing boundaries and creating exceptional 
              digital experiences. Our vision is clear: to be the go-to partner for businesses seeking 
              innovative web solutions that stand out in a crowded digital landscape. We're not just 
              building websites—we're building the future of your brand, one pixel at a time.
            </p>
          </div>
          <div className="image-block" style={styles.imageBlock}>
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop" 
              alt="Vision and success" 
              style={styles.imagePlaceholder}
              onClick={() => openModal('https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=900&fit=crop')}
            />
          </div>
        </section>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div 
          style={styles.modalOverlay}
          onClick={closeModal}
        >
          <img 
            src={selectedImage} 
            alt="Zoomed view" 
            style={styles.modalImage}
            onClick={(e) => e.stopPropagation()}
          />
          <div 
            style={styles.modalClose}
            onClick={closeModal}
          >
            <span>×</span>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  pageContainer: {
    background: '#f9f4ef',
    minHeight: '100vh',
    overflowX: 'hidden',
  },
  progressBar: {
    position: 'fixed',
    left: '40px',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '4px',
    height: '300px',
    zIndex: 1000,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 0,
  },
  progressBarBg: {
    position: 'absolute',
    left: '50%',
    top: '20px',
    height: 'calc(100% - 40px)',
    width: '4px',
    background: 'rgba(255, 255, 255, 0.3)',
    transform: 'translateX(-50%)',
    borderRadius: '10px',
    zIndex: 0,
  },
  progressBarFill: {
    position: 'absolute',
    left: '50%',
    top: '20px',
    height: '0%',
    width: '4px',
    background: 'linear-gradient(180deg, #f4d03f, #f1c40f)',
    transform: 'translateX(-50%)',
    zIndex: 1,
    borderRadius: '10px',
    transition: 'height 0.3s ease',
  },
  progressStep: {
    width: '45px',
    height: '45px',
    background: '#fff',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    zIndex: 2,
    transition: 'all 0.3s ease',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.15)',
    border: '3px solid #fff',
    cursor: 'pointer',
    color: '#333',
  },
  progressStepActive: {
    background: '#f4d03f',
    transform: 'scale(1.15)',
    boxShadow: '0 4px 20px rgba(243, 208, 63, 0.5)',
    color: '#fff',
    borderColor: '#f4d03f',
  },
  storyContainer: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '2rem',
  },
  storySection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    padding: '4rem',
    gap: '6rem',
    maxWidth: '1600px',
    margin: '0 auto',
  },
  textBlock: {
    flex: '0.8',
    maxWidth: '600px',
    padding: '3.5rem',
    background: 'rgba(255, 255, 255, 0.97)',
    borderRadius: '25px',
    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.08)',
    margin: '1rem',
    backdropFilter: 'blur(10px)',
    letterSpacing: '0.3px',
  },
  imageBlock: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagePlaceholder: {
    width: '100%',
    maxWidth: '500px',
    height: 'auto',
    objectFit: 'cover',
    borderRadius: '20px',
    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.3s ease',
    cursor: 'pointer',
  },
  heading: {
    fontSize: '2.8rem',
    color: '#2c3e50',
    marginBottom: '2rem',
    fontWeight: 700,
    letterSpacing: '-0.5px',
  },
  paragraph: {
    fontSize: '1.2rem',
    lineHeight: 1.9,
    marginBottom: '2.5rem',
    color: '#4a5568',
    fontWeight: 400,
  },
  nextButton: {
    display: 'inline-block',
    padding: '1rem 2rem',
    background: '#333',
    color: 'white',
    border: 'none',
    borderRadius: '30px',
    cursor: 'pointer',
    fontSize: '1.1rem',
    marginTop: '2rem',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.9)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2000,
    backdropFilter: 'blur(8px)',
  },
  modalImage: {
    maxWidth: '90%',
    maxHeight: '90vh',
    borderRadius: '20px',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
    cursor: 'pointer',
  },
  modalClose: {
    position: 'fixed',
    top: '30px',
    right: '30px',
    width: '50px',
    height: '50px',
    background: 'rgba(255, 255, 255, 0.2)',
    border: '2px solid rgba(255, 255, 255, 0.4)',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    fontSize: '28px',
    color: 'white',
    transition: 'all 0.3s ease',
    backdropFilter: 'blur(5px)',
  },
};

export default OurStory;
