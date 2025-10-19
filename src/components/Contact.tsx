import React, { useState } from 'react';
import '../styles/components/Contact.css';

const Contact = () => {
  const [showMessageModal, setShowMessageModal] = useState(false);
  const [showCallModal, setShowCallModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Log form data for reference
    console.log('Form submitted:', formData);
    
    // Create pre-filled message for Facebook Messenger
    const message = `Hi! I'm ${formData.name}\n\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const encodedMessage = encodeURIComponent(message);
    
    // Open Facebook Messenger with pre-filled message (using Page ID: 869041956273002)
    window.open(`https://m.me/869041956273002?text=${encodedMessage}`, '_blank');
    
    // Show success message
    alert('Thank you! Redirecting you to Facebook Messenger with your message pre-filled. Just hit send!');
    
    // Close modal and reset form
    setShowMessageModal(false);
    setFormData({ name: '', email: '', message: '' });
  };

  const contactMethods = [
    {
      name: 'Phone',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.27099 2.11999 4.18C2.09501 3.90347 2.12788 3.62476 2.2165 3.36162C2.30513 3.09849 2.44757 2.85669 2.63477 2.65162C2.82196 2.44655 3.04981 2.28271 3.30379 2.17052C3.55778 2.05833 3.83234 2.00026 4.10999 2H7.10999C7.5953 1.99522 8.06579 2.16708 8.43376 2.48353C8.80173 2.79999 9.04207 3.23945 9.10999 3.72C9.23662 4.68007 9.47144 5.62273 9.80999 6.53C9.94454 6.88792 9.97366 7.27691 9.8939 7.65088C9.81415 8.02485 9.62886 8.36811 9.35999 8.64L8.08999 9.91C9.51355 12.4135 11.5864 14.4864 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9751 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      value: '+63 123 456 7890',
      link: 'tel:+631234567890'
    },
    {
      name: 'Facebook',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      value: 'Likha Siteworks',
      link: 'https://www.facebook.com/share/1SQ2Rv9wvs/'
    },
    {
      name: 'Telegram',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.015-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.009-1.252-.242-1.865-.442-.752-.244-1.349-.374-1.297-.789.027-.216.324-.437.892-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.141.121.099.155.232.171.326.016.093.036.306.02.472z"/>
        </svg>
      ),
      value: '@likhaSiteworks',
      link: 'https://t.me/likhaSiteworks' // TODO: Replace with actual Telegram
    },
    {
      name: 'Viber',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.398.002C9.473.028 5.331.344 2.85 2.826 1.121 4.555.179 7.094.102 10.315c-.078 3.221-.06 9.868 6.014 11.634h.005l-.005 2.746s-.037.98.61 1.179c.777.241 1.236-.5 1.98-1.302.407-.44.972-1.084 1.397-1.58 3.851.322 6.812-.417 7.149-.526.776-.253 5.169-.816 5.879-6.657.73-6.02-.36-9.831-2.34-11.544-.605-.548-2.736-2.490-8.29-2.293zm.132 1.612c5.074-.176 6.937 1.438 7.448 1.905 1.66 1.435 2.535 4.79 1.906 9.953-.604 4.974-4.089 5.35-4.777 5.57-.29.092-2.956.733-6.318.49 0 0-2.504 3.004-3.29 3.794-.122.122-.263.167-.355.142-.13-.035-.167-.188-.165-.414l.02-4.572c-5.082-1.488-4.78-7.264-4.713-9.957.067-2.693.811-4.774 2.295-6.258 2.086-2.086 5.598-2.376 7.949-2.653zm-.144 1.9h-.054c-.48.007-.87.415-.871.921-.001.507.387.923.867.93.481.007.872-.406.873-.913.002-.508-.386-.93-.815-.938zm3.9.01c-.008 0-.015 0-.023.001-.502.014-.894.44-.88.95.015.512.427.909.918.889.49-.02.87-.445.856-.957-.013-.49-.396-.88-.871-.883zm-6.32.38c-.504-.005-.85.39-.85.89-.002.935.662 1.932 1.318 2.61a7.271 7.271 0 003.006 1.74c.921.262 1.973.248 2.576-.314.214-.199.34-.46.361-.737.02-.276-.054-.546-.186-.774-.257-.444-.689-.776-1.165-.983-.477-.206-1.013-.298-1.516-.14-.457.142-.85.47-1.156.838-.17.204-.313.397-.52.524-.104.063-.24.097-.343.04a.558.558 0 01-.19-.151c-.376-.44-.757-1.003-.986-1.578-.07-.176-.11-.372-.087-.562.024-.19.127-.37.276-.483.326-.248.768-.376 1.157-.506.405-.136.805-.31 1.12-.61.314-.298.508-.714.518-1.145.01-.43-.167-.85-.468-1.146-.301-.296-.716-.46-1.145-.479-.43-.018-.86.128-1.185.405-.326.277-.534.679-.553 1.108 0 .432.19.848.506 1.146.315.298.746.475 1.185.52zm1.86 2.624c-.482 0-.872.39-.872.871s.39.871.871.871c.482 0 .872-.39.872-.871s-.39-.871-.871-.871zm-3.455.568c-.482 0-.872.39-.872.871s.39.871.872.871c.482 0 .871-.39.871-.871s-.39-.871-.871-.871z"/>
        </svg>
      ),
      value: '+63 123 456 7890',
      link: 'viber://chat?number=%2B631234567890' // TODO: Replace with actual Viber
    }
  ];

  return (
    <section className="contact-section" id="Contact">
      <div className="contact-container">
        <div className="contact-header">
          <h6 className="contact-subtitle-small">Get a Free Consultation</h6>
          <h2 className="contact-title rainbow-text rainbow-text-large rainbow-text-extrabold">Let's Explore How We Can Work Together</h2>
          <p className="contact-description">
            Our team will work with you to understand your business needs, your goals, and your vision. We'll listen carefully,
            and then provide you with a detailed plan of action outlining the steps we'll take to bring your project to life.
          </p>
        </div>

        <div className="consultation-cards">
          {/* Submit an Inquiry Card */}
          <div className="consultation-card consultation-card--inquiry">
            <h3 className="consultation-card__title">Submit an Inquiry</h3>
            <p className="consultation-card__description">
              This is a simple way to connect with us, request information, ask a question, or even get started with a new project.
            </p>
            <button 
              className="consultation-card__button"
              onClick={() => setShowMessageModal(true)}
            >
              LEAVE US A MESSAGE
            </button>
            <p className="consultation-card__note">The first reply takes around a business day.</p>
          </div>

          {/* Schedule a Call Card */}
          <div className="consultation-card consultation-card--call">
            <h3 className="consultation-card__title">Schedule a Call</h3>
            <p className="consultation-card__description">
              Get in touch with us directly through your preferred platform to discuss your needs.
            </p>
            <button 
              className="consultation-card__button"
              onClick={() => setShowCallModal(true)}
            >
              CALL NOW
            </button>
            <p className="consultation-card__note">Available on multiple platforms.</p>
          </div>
        </div>
      </div>

      {/* Message Modal */}
      {showMessageModal && (
        <div className="modal-overlay" onClick={() => setShowMessageModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowMessageModal(false)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <h3 className="modal-title">Submit an Inquiry</h3>
            <p className="modal-subtitle">
              Tell us more about your needs, and how we can assist you with. We will get in touch with you and do our best to help.
            </p>
            <form onSubmit={handleSubmit} className="modal-form">
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name *"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Tell us about your project or the challenge you have. *"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="form-textarea"
                />
              </div>
              <button type="submit" className="modal-submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Call Modal */}
      {showCallModal && (
        <div className="modal-overlay" onClick={() => setShowCallModal(false)}>
          <div className="modal-content modal-content--call" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowCallModal(false)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <h3 className="modal-title">Choose Your Preferred Platform</h3>
            <p className="modal-subtitle">
              Select how you'd like to get in touch with us
            </p>
            <div className="contact-methods">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.link}
                  className="contact-method"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="contact-method__icon">{method.icon}</div>
                  <div className="contact-method__info">
                    <div className="contact-method__name">{method.name}</div>
                    <div className="contact-method__value">{method.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
