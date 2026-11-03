import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  Building2, 
  ExternalLink, 
  CheckCircle2, 
  Globe 
} from 'lucide-react';

export default function ContactSection() {
  const [inquiryData, setInquiryData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!inquiryData.name.trim()) errs.name = 'Please enter your name';
    if (!inquiryData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inquiryData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!inquiryData.message.trim()) errs.message = 'Please enter your message';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setTimeout(() => {
        // keep submitted view or allow reset
      }, 500);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="text-center">
          <span className="section-tag">Get in Touch</span>
          <h2 className="section-title">
            Contact <span>Us</span>
          </h2>
          <p className="section-subtitle">
            Have a question about translation projects, language pairs, or enterprise partnerships? Reach out to our multilingual team today.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Contact Cards, Google Maps Placeholder, Business Inquiry Info */}
          <div className="contact-info-col">
            <div className="contact-cards-list">
              <div className="contact-item-card">
                <div className="contact-icon-box">
                  <Phone size={22} />
                </div>
                <div className="contact-details">
                  <h4>Direct Telephone</h4>
                  <a href="tel:+919711552550">+91 9711552550</a>
                  <span className="note">Mon - Sat: 9:00 AM to 7:00 PM IST</span>
                </div>
              </div>

              <div className="contact-item-card">
                <div className="contact-icon-box">
                  <Mail size={22} />
                </div>
                <div className="contact-details">
                  <h4>Email Inquiries</h4>
                  <a href="mailto:sales@languagenobar.com">sales@languagenobar.com</a>
                  <span className="note">Average reply turnaround within 1 hour</span>
                </div>
              </div>

              <div className="contact-item-card">
                <div className="contact-icon-box">
                  <Building2 size={22} />
                </div>
                <div className="contact-details">
                  <h4>Corporate Office</h4>
                  <p>Language No Bar, Sector 63, Noida, NCR Delhi, India</p>
                  <span className="note">Serving clients across 65+ countries globally</span>
                </div>
              </div>
            </div>

            {/* Google Maps Integration Placeholder */}
            <div className="map-placeholder-card">
              <div className="map-embed-mockup">
                <div className="map-grid-lines" />
                <div className="map-marker-pin">
                  <div className="map-pin-bubble">
                    Language No Bar HQ
                  </div>
                  <div className="map-pin-point" />
                </div>
              </div>
              <div className="map-card-footer">
                <div className="map-location-text">
                  <MapPin size={14} style={{ display: 'inline', marginRight: 4, color: '#0755A5' }} />
                  <span>Noida, NCR Delhi, India</span>
                </div>
                <a
                  href="https://maps.google.com/?q=Language+No+Bar+Noida"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="map-directions-btn"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="contact-form-card">
            <h3 className="contact-form-title">Send Us a Direct Message</h3>
            <p className="contact-form-subtitle">
              Fill out this quick inquiry form and our representative will get back to you promptly.
            </p>

            {submitted ? (
              <div className="success-banner-box" style={{ padding: '30px 10px' }}>
                <div className="success-icon-big">
                  <CheckCircle2 size={36} />
                </div>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a' }}>
                  Thank you for contacting us!
                </h4>
                <p style={{ color: '#475569', fontSize: '0.92rem' }}>
                  We have received your message and a team coordinator will reply to <strong>{inquiryData.email}</strong> shortly.
                </p>
                <button
                  type="button"
                  className="btn-blue-outline"
                  style={{ marginTop: 14 }}
                  onClick={() => {
                    setSubmitted(false);
                    setInquiryData({ name: '', email: '', subject: '', message: '' });
                  }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="form-field">
                  <label className="form-label" htmlFor="contactName">
                    Your Name <span className="req">*</span>
                  </label>
                  <input
                    id="contactName"
                    type="text"
                    className={`form-input ${errors.name ? 'error' : ''}`}
                    placeholder="Enter your full name"
                    value={inquiryData.name}
                    onChange={(e) => {
                      setInquiryData({ ...inquiryData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: '' });
                    }}
                  />
                  {errors.name && <span className="error-msg">{errors.name}</span>}
                </div>

                <div className="form-field">
                  <label className="form-label" htmlFor="contactEmail">
                    Business Email <span className="req">*</span>
                  </label>
                  <input
                    id="contactEmail"
                    type="email"
                    className={`form-input ${errors.email ? 'error' : ''}`}
                    placeholder="Enter your email address"
                    value={inquiryData.email}
                    onChange={(e) => {
                      setInquiryData({ ...inquiryData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: '' });
                    }}
                  />
                  {errors.email && <span className="error-msg">{errors.email}</span>}
                </div>

                <div className="form-field">
                  <label className="form-label" htmlFor="contactSubject">
                    Subject / Project Nature
                  </label>
                  <input
                    id="contactSubject"
                    type="text"
                    className="form-input"
                    placeholder="e.g. Life Sciences Localization Inquiry"
                    value={inquiryData.subject}
                    onChange={(e) => setInquiryData({ ...inquiryData, subject: e.target.value })}
                  />
                </div>

                <div className="form-field">
                  <label className="form-label" htmlFor="contactMessage">
                    Your Message <span className="req">*</span>
                  </label>
                  <textarea
                    id="contactMessage"
                    rows="4"
                    className={`form-textarea ${errors.message ? 'error' : ''}`}
                    placeholder="How can our language team help you today?"
                    value={inquiryData.message}
                    onChange={(e) => {
                      setInquiryData({ ...inquiryData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: '' });
                    }}
                  />
                  {errors.message && <span className="error-msg">{errors.message}</span>}
                </div>

                <button
                  type="submit"
                  className="btn-yellow"
                  style={{ width: '100%', padding: '13px' }}
                >
                  <Send size={16} />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

