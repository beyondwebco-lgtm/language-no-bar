import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import IBSLogo from './IBSLogo';

export default function Navbar({ onOpenQuote }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'founder', 'services', 'quality', 'languages', 'quote', 'blog', 'contact'];
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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About Us', href: '#about', id: 'about' },
    { label: 'Founder', href: '#founder', id: 'founder' },
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
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-container">
          {/* Left Side: IBS Brand Logo */}
          <a href="#home" className="brand-wrapper" onClick={(e) => handleNavClick(e, '#home')} aria-label="IBS Home">
            <IBSLogo variant="light" size="default" />
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

          {/* Header Action Button (Desktop) */}
          <div className="navbar-action">
            <button
              type="button"
              className="btn-yellow nav-cta-btn"
              onClick={() => {
                if (onOpenQuote) onOpenQuote();
                else {
                  const el = document.getElementById('quote');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <span>Get a Free Quote</span>
              <ArrowRight size={15} />
            </button>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Backdrop Overlay */}
      <div 
        className={`mobile-nav-overlay ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Drawer Menu */}
      <aside 
        className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}
        aria-label="Mobile Navigation"
      >
        <div className="mobile-nav-header">
          <IBSLogo variant="light" size="compact" />
          <button
            type="button"
            className="modal-close-btn"
            style={{ position: 'static' }}
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close mobile menu"
          >
            <X size={20} />
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
            style={{ width: '100%', justifyContent: 'center' }}
            onClick={() => {
              setMobileMenuOpen(false);
              if (onOpenQuote) onOpenQuote();
              else {
                const el = document.getElementById('quote');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <span>Get a Free Quote</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </aside>
    </>
  );
}
