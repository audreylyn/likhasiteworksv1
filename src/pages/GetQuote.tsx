import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BottomNavigation from '../components/BottomNavigation';
import '../styles/pages/GetQuote.css';

const GetQuote = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    projectDetails: '',
    timeline: '',
    referral: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Create pre-filled message for Facebook Messenger with all form details
    let message = `Hi! I'm ${formData.name}\n\nEmail: ${formData.email}\n\nService: ${formData.service}\n\nProject Details:\n${formData.projectDetails}`;
    
    // Add optional fields if filled
    if (formData.timeline) {
      message += `\n\nTimeline: ${formData.timeline}`;
    }
    
    if (formData.referral) {
      message += `\n\nHow I heard about you: ${formData.referral}`;
    }
    
    const encodedMessage = encodeURIComponent(message);
    
    // Open Facebook Messenger with pre-filled message (using Page ID: 869041956273002)
    window.open(`https://m.me/869041956273002?text=${encodedMessage}`, '_blank');
    
    // Show success message
    alert('Thank you! Redirecting you to Facebook Messenger with your project details pre-filled. Just hit send!');
  };

  return (
    <div className="text-black text-[16px] leading-[normal] w-full max-w-none mx-auto font-sans">
      <div className="min-h-full bg-[rgb(255,_253,_235)] text-[rgb(31,_31,_31)] leading-[22.4px] font-['Bricolage_Grotesque',sans-serif]">
        <Header />
        
        <div className="get-quote-page">
          <div className="get-quote-container">
            <div className="get-quote-content">
              {/* Left Side - Info */}
              <div className="quote-info">
                <h1 className="quote-title">
                  Submit Your Project &<br />
                  <span className="quote-highlight">Get a Precise</span><br />
                  <span className="quote-highlight">Quote</span>
                </h1>
                
                <p className="quote-description">
                  Send us a brief describing all your project requirements.<br />
                  Then, we will prepare a detailed quote providing<br />
                  information about pricing, terms, and project timeline,<br />
                  and send it off for your approval.
                </p>

                <div className="quote-features">
                  <div className="quote-feature">
                    <div className="feature-icon">✓</div>
                    <span className="feature-text">No Strings Attached</span>
                  </div>
                  <div className="quote-feature">
                    <div className="feature-icon">✓</div>
                    <span className="feature-text">NDA</span>
                  </div>
                </div>

                <div className="quote-additional-info">
                  <h3 className="info-title">Our business relies on fast and reliable partnerships</h3>
                </div>
              </div>

              {/* Right Side - Form */}
              <div className="quote-form-wrapper">
                <form className="quote-form" onSubmit={handleSubmit}>
                  {/* Name Input */}
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      className="form-input"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                    <span className="required-indicator">*</span>
                  </div>

                  {/* Email Input */}
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      className="form-input"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                    <span className="required-indicator">*</span>
                  </div>

                  {/* Service Dropdown */}
                  <div className="form-group full-width">
                    <select
                      name="service"
                      className="form-select"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">What service are you looking for?</option>
                      <option value="web-development">Web Development</option>
                      <option value="web-design">Web Design</option>
                      <option value="mobile-app">Mobile App Development</option>
                      <option value="ui-ux">UI/UX Design</option>
                      <option value="branding">Branding</option>
                      <option value="consultation">Consultation</option>
                      <option value="other">Other</option>
                    </select>
                    <span className="required-indicator">*</span>
                  </div>

                  {/* Project Details Textarea */}
                  <div className="form-group full-width">
                    <textarea
                      name="projectDetails"
                      placeholder="Tell us about your project"
                      className="form-textarea"
                      value={formData.projectDetails}
                      onChange={handleInputChange}
                      rows={6}
                      required
                    />
                    <span className="required-indicator">*</span>
                  </div>


                  {/* Timeline Dropdown */}
                  <div className="form-group full-width">
                    <select
                      name="timeline"
                      className="form-select"
                      value={formData.timeline}
                      onChange={handleInputChange}
                    >
                      <option value="">How time sensitive is your project?</option>
                      <option value="urgent">Urgent (1-2 weeks)</option>
                      <option value="normal">Normal (1-2 months)</option>
                      <option value="flexible">Flexible (3+ months)</option>
                    </select>
                  </div>

                  {/* Referral Dropdown */}
                  <div className="form-group full-width">
                    <select
                      name="referral"
                      className="form-select"
                      value={formData.referral}
                      onChange={handleInputChange}
                    >
                      <option value="">How did you hear about us?</option>
                      <option value="google">Google Search</option>
                      <option value="social-media">Social Media</option>
                      <option value="referral">Referral</option>
                      <option value="advertisement">Advertisement</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Submit Button */}
                  <div className="form-group full-width">
                    <button type="submit" className="submit-btn">
                      <span className="submit-btn__text">Submit Your Project</span>
                      <span className="submit-btn__icon"></span>
                      <span className="submit-btn__filler"></span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default GetQuote;
