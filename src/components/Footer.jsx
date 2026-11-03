import React from 'react';
import { 
  Globe, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ChevronRight, 
  ShieldCheck 
} from 'lucide-react';

// Crisp native SVG icons for brand links
const SocialIcons = {
  LinkedIn: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64c-.9 0-1.63.73-1.63 1.63s.73 1.63 1.63 1.63c.9 0 1.63-.73 1.63-1.63s-.73-1.63-1.63-1.63z" />
    </svg>
  ),
  Twitter: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  Facebook: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z" />
    </svg>
  ),
  Instagram: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  ),
  YouTube: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
};

export default function Footer({ onOpenQuote, onSelectServiceById }) {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 85;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top-grid">
          {/* Column 1: Company Logo & Description */}
          <div className="footer-brand-col">
            <div className="brand-main">
              <div className="brand-logo-icon" style={{ background: '#FFB900', color: '#111827' }}>
                <Globe size={24} />
              </div>
              <div className="brand-text-col">
                <span className="footer-logo-title">
                  Language <span>No Bar</span>
                </span>
                <span style={{ fontSize: '0.72rem', color: '#94a3b8', fontWeight: 600 }}>
                  Breaking Language Barriers, Connecting the World.
                </span>
              </div>
            </div>

            <p className="footer-desc">
              Language No Bar is an ISO 9001:2008, ISO 17100:2015 and ISO 27001 certified global language solutions provider. We deliver certified human translation, medical localization, and multilingual desktop publishing in 150+ languages.
            </p>

            <div className="footer-social-links">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="LinkedIn">
                <SocialIcons.LinkedIn />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="Twitter">
                <SocialIcons.Twitter />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="Facebook">
                <SocialIcons.Facebook />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="Instagram">
                <SocialIcons.Instagram />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="YouTube">
                <SocialIcons.YouTube />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-nav-list">
              <li>
                <a href="#home" className="footer-nav-link" onClick={(e) => handleNavClick(e, '#home')}>
                  <ChevronRight size={14} />
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#about" className="footer-nav-link" onClick={(e) => handleNavClick(e, '#about')}>
                  <ChevronRight size={14} />
                  <span>About Us</span>
                </a>
              </li>
              <li>
                <a href="#services" className="footer-nav-link" onClick={(e) => handleNavClick(e, '#services')}>
                  <ChevronRight size={14} />
                  <span>Services</span>
                </a>
              </li>
              <li>
                <a href="#quality" className="footer-nav-link" onClick={(e) => handleNavClick(e, '#quality')}>
                  <ChevronRight size={14} />
                  <span>Quality Policy</span>
                </a>
              </li>
              <li>
                <a href="#languages" className="footer-nav-link" onClick={(e) => handleNavClick(e, '#languages')}>
                  <ChevronRight size={14} />
                  <span>Languages Supported</span>
                </a>
              </li>
              <li>
                <a href="#quote" className="footer-nav-link" onClick={(e) => handleNavClick(e, '#quote')}>
                  <ChevronRight size={14} />
                  <span>Request a Quote</span>
                </a>
              </li>
              <li>
                <a href="#blog" className="footer-nav-link" onClick={(e) => handleNavClick(e, '#blog')}>
                  <ChevronRight size={14} />
                  <span>Blog & Insights</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="footer-nav-link" onClick={(e) => handleNavClick(e, '#contact')}>
                  <ChevronRight size={14} />
                  <span>Contact Us</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div>
            <h4 className="footer-col-title">Our Services</h4>
            <ul className="footer-nav-list">
              <li>
                <a href="#services" className="footer-nav-link" onClick={(e) => handleNavClick(e, '#services')}>
                  <ChevronRight size={14} />
                  <span>Translation Services</span>
                </a>
              </li>
              <li>
                <a href="#services" className="footer-nav-link" onClick={(e) => handleNavClick(e, '#services')}>
                  <ChevronRight size={14} />
                  <span>Pharma & Medical Translation</span>
                </a>
              </li>
              <li>
                <a href="#services" className="footer-nav-link" onClick={(e) => handleNavClick(e, '#services')}>
                  <ChevronRight size={14} />
                  <span>Localization Services</span>
                </a>
              </li>
              <li>
                <a href="#services" className="footer-nav-link" onClick={(e) => handleNavClick(e, '#services')}>
                  <ChevronRight size={14} />
                  <span>Audio & Video Transcription</span>
                </a>
              </li>
              <li>
                <a href="#services" className="footer-nav-link" onClick={(e) => handleNavClick(e, '#services')}>
                  <ChevronRight size={14} />
                  <span>Survey Translation</span>
                </a>
              </li>
              <li>
                <a href="#services" className="footer-nav-link" onClick={(e) => handleNavClick(e, '#services')}>
                  <ChevronRight size={14} />
                  <span>Linguistic Testing (LQA)</span>
                </a>
              </li>
              <li>
                <a href="#services" className="footer-nav-link" onClick={(e) => handleNavClick(e, '#services')}>
                  <ChevronRight size={14} />
                  <span>Multilingual DTP</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div>
            <h4 className="footer-col-title">Contact Information</h4>
            <div className="footer-contact-item">
              <Phone size={18} />
              <div>
                <strong>Phone:</strong><br />
                <a href="tel:+919711552550">+91 9711552550</a>
              </div>
            </div>

            <div className="footer-contact-item">
              <Mail size={18} />
              <div>
                <strong>Email:</strong><br />
                <a href="mailto:sales@languagenobar.com">sales@languagenobar.com</a>
              </div>
            </div>

            <div className="footer-contact-item">
              <MapPin size={18} />
              <div>
                <strong>Corporate Office:</strong><br />
                <span>Sector 63, Noida, NCR Delhi, India</span>
              </div>
            </div>

            <div className="footer-contact-item">
              <Clock size={18} />
              <div>
                <strong>Office Hours:</strong><br />
                <span>Mon - Sat: 9:00 AM - 7:00 PM IST</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar">
          <div>
            © {new Date().getFullYear()} <strong>Language No Bar</strong>. All Rights Reserved. Breaking Language Barriers, Connecting the World.
          </div>
          <div className="footer-bottom-links">
            <a href="#privacy" onClick={(e) => { e.preventDefault(); alert("Language No Bar Privacy Policy: We ensure 100% data confidentiality under ISO 27001."); }}>Privacy Policy</a>
            <a href="#terms" onClick={(e) => { e.preventDefault(); alert("Language No Bar Terms: Certified translations compliant with ISO 17100 standard quality guidelines."); }}>Terms of Service</a>
            <a href="#nda" onClick={(e) => { e.preventDefault(); alert("Language No Bar NDA: Enterprise non-disclosure protection is executed upon request."); }}>NDA Guarantee</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
