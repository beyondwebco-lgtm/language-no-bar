import React, { useState, useEffect } from 'react';
import { Globe, Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar({ onOpenQuote }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'services', 'quality', 'languages', 'quote', 'contact', 'blog'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About Us', href: '#about', id: 'about' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Quality Policy', href: '#quality', id: 'quality' },
    { label: 'Languages', href: '#languages', id: 'languages' },
    { label: 'Blog', href: '#blog', id: 'blog' },
    { label: 'Contact', href: '#contact', id: 'contact' }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
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
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Left Side: Logo & Tagline */}
        <a href="#home" className="brand-wrapper" onClick={(e) => handleNavClick(e, '#home')}>
          <div className="brand-main">
            <div className="brand-logo-icon">
              <Globe size={24} />
            </div>
            <div className="brand-text-col">
              <span className="brand-title">
                Language <span>No Bar</span>
              </span>
              <span className="brand-tagline">
                Breaking Language Barriers, Connecting the World.
              </span>
            </div>
          </div>
        </a>

        {/* Right Side Desktop Navigation */}
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Side Quote Action & Hamburger */}
        <div className="nav-cta-col">
          <button
            type="button"
            className="btn-yellow"
            onClick={() => {
              if (onOpenQuote) {
                onOpenQuote();
              } else {
                const el = document.getElementById('quote');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <span>GET A QUOTE</span>
            <ArrowRight size={16} />
          </button>

          <button
            type="button"
            className="hamburger-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        className={`mobile-nav-overlay ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Drawer Menu */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-header">
          <div className="brand-main">
            <div className="brand-logo-icon" style={{ width: 34, height: 34 }}>
              <Globe size={20} />
            </div>
            <span className="brand-title" style={{ fontSize: '1.1rem' }}>
              Language <span>No Bar</span>
            </span>
          </div>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: '#64748b' }}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <ul className="mobile-nav-links">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="mobile-nav-footer">
          <button
            type="button"
            className="btn-yellow"
            style={{ width: '100%' }}
            onClick={() => {
              setMobileMenuOpen(false);
              const el = document.getElementById('quote');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            GET A QUOTE
          </button>
          <p style={{ fontSize: '0.78rem', color: '#64748b', textAlign: 'center' }}>
            Phone: +91 9711552550
          </p>
        </div>
      </div>
    </nav>
  );
}

