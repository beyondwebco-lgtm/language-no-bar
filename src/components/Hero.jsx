import React from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';

export default function Hero({ onOpenQuote }) {
  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToQuote = () => {
    if (onOpenQuote) {
      onOpenQuote();
    } else {
      const el = document.getElementById('quote');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Hero Left Content */}
          <div className="hero-content">
            <div className="hero-pill">
              <span className="hero-pill-badge">Hyderabad, India</span>
              <span className="hero-pill-text">Founded Feb 2021 • 5+ Years Experience</span>
            </div>

            <h1 className="hero-title">
              Bridging Languages. <span>Empowering</span> Businesses.
            </h1>

            <p className="hero-description">
              IBS delivers professional language translation and business outsourcing solutions, helping organizations communicate effectively and streamline business operations.
            </p>

            <div className="hero-actions">
              <button
                type="button"
                className="btn-yellow"
                onClick={scrollToQuote}
                aria-label="Get a free translation or outsourcing quote"
              >
                <span>Get a Free Quote</span>
                <ArrowRight size={18} />
              </button>

              <button
                type="button"
                className="btn-blue-outline"
                onClick={scrollToServices}
                aria-label="Explore our language and outsourcing services"
              >
                <span>Explore Our Services</span>
              </button>
            </div>

            {/* Verified Statistics based on IBS details */}
            <div className="hero-trust-row">
              <div className="hero-stat-item">
                <span className="hero-stat-number">5+</span>
                <span className="hero-stat-label">Years of Experience</span>
              </div>
              <div className="hero-stat-item">
                <span className="hero-stat-number">2021</span>
                <span className="hero-stat-label">Established</span>
              </div>
              <div className="hero-stat-item hero-stat-dual">
                <span className="hero-stat-number" style={{ fontSize: '1.45rem' }}>Dual Focus</span>
                <span className="hero-stat-label">Translation & Outsourcing Expertise</span>
              </div>
            </div>
          </div>

          {/* Hero Right Visual Demo Card */}
          <div className="hero-visual">
            <div className="hero-card-showcase">
              <div className="hero-showcase-badge">
                <span className="status-dot">Linguistic & Operational Workflow</span>
                <span style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 600 }}>
                  Hyderabad Center of Excellence
                </span>
              </div>

              {/* Translation Demo visual */}
              <div className="showcase-translation-demo">
                <div className="demo-lang-box">
                  <div className="lang-name">English (Core Motto)</div>
                  <div className="lang-text">"Bridging Languages. Empowering Businesses."</div>
                </div>

                <div className="demo-arrow">
                  <ArrowDown size={18} />
                </div>

                <div className="demo-lang-box">
                  <div className="lang-name">Hindi (हिन्दी)</div>
                  <div className="lang-text">"भाषाओं को जोड़ना। व्यवसायों को सशक्त बनाना।"</div>
                </div>

                <div className="demo-lang-box" style={{ borderColor: 'rgba(13, 148, 136, 0.35)', background: '#f0fdfa' }}>
                  <div className="lang-name">Telugu (తెలుగు – Regional Presence)</div>
                  <div className="lang-text">"భాషల వారధి. వ్యాపారాల సాధికారత."</div>
                </div>
              </div>

              {/* Value Pillars replacing ISO stamps */}
              <div className="hero-iso-stamps">
                <div className="iso-stamp-item">
                  <span className="iso-stamp-code">Translation</span>
                  <span className="iso-stamp-title">Contextual Accuracy</span>
                </div>
                <div className="iso-stamp-item">
                  <span className="iso-stamp-code">Outsourcing</span>
                  <span className="iso-stamp-title">Back-Office & Ops</span>
                </div>
                <div className="iso-stamp-item">
                  <span className="iso-stamp-code">Excellence</span>
                  <span className="iso-stamp-title">Client-Centric</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
