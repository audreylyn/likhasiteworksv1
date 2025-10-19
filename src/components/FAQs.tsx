import React, { useState } from 'react';
import '../styles/components/FAQs.css';
import { ChevronDown } from 'lucide-react';

const FAQs = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: 'What services do you offer?',
      answer: 'We offer a comprehensive range of digital services including web development, mobile app development, UI/UX design, digital marketing, e-commerce solutions, and performance optimization. Our team is equipped to handle projects of any size and complexity.'
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary depending on scope and complexity. A simple website might take 2-4 weeks, while a complex web application could take 3-6 months. We provide detailed timeline estimates during our initial consultation and keep you updated throughout the development process.'
    },
    {
      question: 'Do you provide ongoing support after project completion?',
      answer: 'Yes! We offer various support packages ranging from 1 month to 12 months depending on your chosen plan. Our support includes bug fixes, minor updates, technical assistance, and maintenance to ensure your solution continues to perform optimally.'
    },
    {
      question: 'What is your design and development process?',
      answer: 'Our process is simple and transparent: (1) Subscribe - Choose your plan and schedule a consultation, (2) Request - Submit your project brief through our communication channels, (3) Revise - Review deliverables and request unlimited revisions, (4) Enjoy - Launch your project and benefit from ongoing support.'
    },
    {
      question: 'Can I request revisions?',
      answer: 'Absolutely! We offer unlimited revisions until you are 100% satisfied with the results. We believe in getting it right and work closely with you to ensure the final product meets your expectations and business goals.'
    },
    {
      question: 'What technologies do you work with?',
      answer: 'We work with modern, industry-standard technologies including React, TypeScript, Node.js, PHP, HTML5, CSS3, and various frameworks and tools. We choose the best technology stack for each project based on your specific requirements and long-term goals.'
    },
    {
      question: 'How do you ensure code quality?',
      answer: 'Quality is our top priority. We conduct detailed project reviews, write clean and semantic code, follow best practices and industry standards, perform thorough testing, and maintain clear documentation. Every project undergoes multiple quality checks before delivery.'
    },
    {
      question: 'What makes you different from other agencies?',
      answer: 'We combine top-notch quality with reasonable pricing and transparent communication. You get a dedicated project manager, fast turnaround times, unlimited revisions, and a team of 150+ in-house experts with 17 years of experience. We prioritize semantic code over the lowest price.'
    }
  ];

  return (
    <section className="faqs-section" id="FAQs">
      <div className="faqs-container">
        <div className="faqs-header">
          <h2 className="rainbow-text rainbow-text-large rainbow-text-extrabold">Frequently Asked Questions</h2>
          <p className="faqs-subtitle">
            Find answers to common questions about our services and process
          </p>
        </div>

        <div className="faqs-accordion">
          {faqs.map((faq, index) => {
            const isOpen = openFAQ === index;
            return (
              <div 
                key={index} 
                className={`faq-item ${isOpen ? 'active' : ''}`}
              >
                <button 
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="faq-question-text">{faq.question}</span>
                  <ChevronDown 
                    className={`faq-arrow ${isOpen ? 'rotated' : ''}`}
                    size={24}
                  />
                </button>
                {isOpen && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
