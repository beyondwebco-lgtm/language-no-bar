import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, Award, Sparkles, ArrowDown } from 'lucide-react';

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
              <span className="hero-pill-badge">ISO Certified</span>
              <span className="hero-pill-text">ISO 9001:2008 & ISO 17100:2015 Recognized</span>
            </div>

            <h1 className="hero-title">
              Breaking Language Barriers, <span>Connecting</span> the World.
            </h1>

            <p className="hero-description">
              Professional language and translation services tailored for global enterprises, life sciences, legal firms, and institutions. Accurate human translation in 150+ languages with guaranteed cultural precision.
            </p>

            <div className="hero-actions">
              <button
                type="button"
                className="btn-yellow"
                onClick={scrollToQuote}
              >
                <span>GET A FREE QUOTE</span>
                <ArrowRight size={18} />
              </button>

              <button
                type="button"
                className="btn-blue-outline"
                onClick={scrollToServices}
              >
                <span>Explore Services</span>
              </button>
            </div>

            {/* Quick Trust Statistics */}
            <div className="hero-trust-row">
              <div className="hero-stat-item">
                <span className="hero-stat-number">150+</span>
                <span className="hero-stat-label">Global Languages</span>
              </div>
              <div className="hero-stat-item">
                <span className="hero-stat-number">5,000+</span>
                <span className="hero-stat-label">Satisfied Clients</span>
              </div>
              <div className="hero-stat-item">
                <span className="hero-stat-number">99.8%</span>
                <span className="hero-stat-label">Accuracy Rate</span>
              </div>
              <div className="hero-stat-item">
                <span className="hero-stat-number">100%</span>
                <span className="hero-stat-label">Native Linguists</span>
              </div>
            </div>
          </div>

          {/* Hero Right Visual Demo Card */}
          <div className="hero-visual">
            <div className="hero-card-showcase">
              <div className="hero-showcase-badge">
                <span className="status-dot">Live Multilingual Workflow</span>
                <span style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 600 }}>
                  Subject-Matter Expert Review
                </span>
              </div>

              {/* Translation Demo visual */}
              <div className="showcase-translation-demo">
                <div className="demo-lang-box">
                  <div className="lang-name">English (Source)</div>
                  <div className="lang-text">"Breaking Language Barriers, Connecting the World."</div>
                </div>

                <div className="demo-arrow">
                  <ArrowDown size={18} />
                </div>

                <div className="demo-lang-box">
                  <div className="lang-name">Hindi (हिन्दी)</div>
                  <div className="lang-text">"भाषा की बाधाओं को तोड़कर, दुनिया को जोड़ते हैं।"</div>
                </div>

                <div className="demo-lang-box" style={{ borderColor: 'rgba(7, 85, 165, 0.3)', background: '#f0f6fc' }}>
                  <div className="lang-name">French (Français)</div>
                  <div className="lang-text">"Briser les barrières de la langue, connecter le monde."</div>
                </div>
              </div>

              {/* Verified ISO Credential Badges */}
              <div className="hero-iso-stamps">
                <div className="iso-stamp-item">
                  <span className="iso-stamp-code">ISO 9001</span>
                  <span className="iso-stamp-title">Quality Standard</span>
                </div>
                <div className="iso-stamp-item">
                  <span className="iso-stamp-code">ISO 17100</span>
                  <span className="iso-stamp-title">Translation QA</span>
                </div>
                <div className="iso-stamp-item">
                  <span className="iso-stamp-code">ISO 27001</span>
                  <span className="iso-stamp-title">Data Security</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

