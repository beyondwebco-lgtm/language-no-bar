import React from 'react';
import { Globe, Users, Shield, CheckCircle, Award, Compass, Zap } from 'lucide-react';

export default function AboutUs({ onOpenQuote }) {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          {/* Left Column: Heading, Specified Content & Highlights */}
          <div className="about-text-content">
            <span className="section-tag">Who We Are</span>
            <h2 className="section-title">
              About <span>Language No Bar</span>
            </h2>

            <p className="about-paragraph-primary">
              Language No Bar is a professional language service provider dedicated to helping businesses and individuals communicate across different languages and cultures.
            </p>

            <p className="about-paragraph-secondary">
              We provide reliable translation, localization, transcription and multilingual solutions with a focus on accuracy, quality and customer satisfaction.
            </p>

            <div className="about-features-list">
              <div className="about-feature-item">
                <CheckCircle className="about-feature-icon" size={20} />
                <div className="about-feature-text">
                  <h4>100% Native Linguists</h4>
                  <p>In-country mother-tongue translators ensuring natural flow.</p>
                </div>
              </div>

              <div className="about-feature-item">
                <Shield className="about-feature-icon" size={20} />
                <div className="about-feature-text">
                  <h4>Strict Confidentiality (NDA)</h4>
                  <p>ISO 27001 data security protocols protecting your intellectual property.</p>
                </div>
              </div>

              <div className="about-feature-item">
                <Award className="about-feature-icon" size={20} />
                <div className="about-feature-text">
                  <h4>3-Tier QA Workflow</h4>
                  <p>Translation, editing, and independent proofreading by industry veterans.</p>
                </div>
              </div>

              <div className="about-feature-item">
                <Zap className="about-feature-icon" size={20} />
                <div className="about-feature-text">
                  <h4>Fast Turnaround Times</h4>
                  <p>Rapid delivery options with guaranteed adherence to deadlines.</p>
                </div>
              </div>
            </div>

            <div>
              <button
                type="button"
                className="btn-yellow"
                onClick={() => {
                  if (onOpenQuote) onOpenQuote();
                  else {
                    const el = document.getElementById('quote');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <span>Partner With Us</span>
              </button>
            </div>
          </div>

          {/* Right Column: Professional World Map & Global Communication Illustration */}
          <div className="about-map-card">
            <div className="map-bg-mesh" />

            <div className="map-header-row">
              <div className="map-title">Global Linguistic Footprint</div>
              <div className="map-globe-badge">
                <Globe size={14} />
                <span>Active in 65+ Countries</span>
              </div>
            </div>

            {/* SVG Global Communication Map Vector Illustration */}
            <div className="map-svg-container">
              <svg viewBox="0 0 540 280" style={{ width: '100%', height: 'auto' }} fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="curveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#FFB900" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#ffffff" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#FFB900" stopOpacity="0.8" />
                  </linearGradient>
                  <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Stylized world land silhouettes */}
                {/* North America */}
                <path d="M70,70 Q110,60 140,75 Q160,110 130,135 Q100,120 80,105 Z" fill="rgba(255,255,255,0.14)" />
                {/* South America */}
                <path d="M130,145 Q160,150 170,195 Q145,245 125,230 Q115,185 130,145 Z" fill="rgba(255,255,255,0.14)" />
                {/* Europe */}
                <path d="M235,65 Q275,60 295,85 Q285,115 250,110 Q235,90 235,65 Z" fill="rgba(255,255,255,0.18)" />
                {/* Africa */}
                <path d="M240,120 Q290,115 295,160 Q280,220 250,210 Q230,165 240,120 Z" fill="rgba(255,255,255,0.14)" />
                {/* Asia / India */}
                <path d="M305,65 Q395,50 435,100 Q400,160 355,145 Q335,155 330,175 Q310,135 305,65 Z" fill="rgba(255,255,255,0.22)" />
                {/* Australia */}
                <path d="M410,185 Q465,180 475,220 Q435,245 405,225 Z" fill="rgba(255,255,255,0.14)" />

                {/* Communication network curved connecting arcs */}
                <path d="M125,95 Q230,30 335,145" stroke="url(#curveGrad)" strokeWidth="1.8" strokeDasharray="4 4" opacity="0.85" />
                <path d="M265,85 Q300,100 335,145" stroke="url(#curveGrad)" strokeWidth="2" opacity="0.9" />
                <path d="M335,145 Q385,100 420,95" stroke="url(#curveGrad)" strokeWidth="1.8" strokeDasharray="3 3" opacity="0.8" />
                <path d="M335,145 Q375,190 435,210" stroke="url(#curveGrad)" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.75" />
                <path d="M125,95 Q190,135 260,150" stroke="url(#curveGrad)" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.7" />

                {/* Hub Node: New Delhi (HQ) */}
                <circle cx="335" cy="145" r="9" fill="#FFB900" filter="url(#glow)" />
                <circle cx="335" cy="145" r="5" fill="#ffffff" />
                <circle cx="335" cy="145" r="15" stroke="#FFB900" strokeWidth="1" opacity="0.6">
                  <animate attributeName="r" values="8;18;8" dur="2.5s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.8;0;0.8" dur="2.5s" repeatCount="indefinite" />
                </circle>
                <text x="335" y="172" fill="#ffffff" fontSize="11" fontWeight="700" textAnchor="middle">New Delhi (HQ)</text>

                {/* Node: London */}
                <circle cx="265" cy="85" r="5" fill="#ffffff" />
                <text x="265" y="75" fill="#e2e8f0" fontSize="10" fontWeight="600" textAnchor="middle">London</text>

                {/* Node: New York */}
                <circle cx="125" cy="95" r="5" fill="#ffffff" />
                <text x="125" y="85" fill="#e2e8f0" fontSize="10" fontWeight="600" textAnchor="middle">New York</text>

                {/* Node: Tokyo */}
                <circle cx="420" cy="95" r="5" fill="#ffffff" />
                <text x="420" y="85" fill="#e2e8f0" fontSize="10" fontWeight="600" textAnchor="middle">Tokyo</text>

                {/* Node: Sydney */}
                <circle cx="435" cy="210" r="4.5" fill="#ffffff" />
                <text x="435" y="228" fill="#e2e8f0" fontSize="10" fontWeight="600" textAnchor="middle">Sydney</text>

                {/* Node: Dubai */}
                <circle cx="305" cy="125" r="4.5" fill="#ffffff" />
                <text x="305" y="116" fill="#e2e8f0" fontSize="9" fontWeight="600" textAnchor="middle">Dubai</text>
              </svg>
            </div>

            {/* Communication stats strip */}
            <div className="map-stats-strip">
              <div className="map-stat-col">
                <span className="val">150+</span>
                <span className="lbl">Languages Handled</span>
              </div>
              <div className="map-stat-col">
                <span className="val">12M+</span>
                <span className="lbl">Words Translated</span>
              </div>
              <div className="map-stat-col">
                <span className="val">99.8%</span>
                <span className="lbl">On-Time Accuracy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

