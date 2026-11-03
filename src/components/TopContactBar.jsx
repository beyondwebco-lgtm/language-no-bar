import React from 'react';
import { Phone, Mail, Award, Clock } from 'lucide-react';

export default function TopContactBar() {
  return (
    <div className="top-contact-bar">
      <div className="container top-bar-container">
        <div className="top-bar-left">
          <a href="tel:+919711552550" className="top-contact-item" title="Call Language No Bar">
            <Phone size={14} />
            <span>+91 9711552550</span>
          </a>
          <a href="mailto:sales@languagenobar.com" className="top-contact-item" title="Email Language No Bar">
            <Mail size={14} />
            <span>sales@languagenobar.com</span>
          </a>
          <span className="top-contact-item" style={{ cursor: 'default' }}>
            <Clock size={14} />
            <span>Mon - Sat: 9:00 AM - 7:00 PM IST | 24/7 Support</span>
          </span>
        </div>
        <div className="top-bar-right">
          <div className="top-badge-item">
            <Award size={13} style={{ color: '#FFB900' }} />
            <span>ISO 9001:2008 & 17100:2015 Certified</span>
          </div>
        </div>
      </div>
    </div>
  );
}

