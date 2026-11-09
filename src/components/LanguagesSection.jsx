import React from 'react';
import { ArrowLeftRight, Globe, ArrowRight } from 'lucide-react';
import { FEATURED_LANGUAGE_PAIRS } from '../data/languagesData';

export default function LanguagesSection({ onOpenAllLanguages, onSelectPair }) {
  return (
    <section id="languages" className="languages-section">
      <div className="container">
        <div className="text-center">
          <span className="section-tag">Multilingual Capability</span>
          <h2 className="section-title">
            Connecting Businesses Across <span>Languages</span>
          </h2>
          <p className="section-subtitle">
            Facilitating clear communication across Indian regional and major international languages to support enterprise growth and cross-border collaboration.
          </p>
        </div>

        {/* 9 Language Pair Cards (Showcasing Hindi, English, French, Spanish, Arabic, German, Japanese, Chinese, Marathi, Gujarati) */}
        <div className="language-cards-grid">
          {FEATURED_LANGUAGE_PAIRS.map((item) => (
            <div
              key={item.id}
              className="lang-pair-card"
              role="button"
              tabIndex={0}
              onClick={() => {
                if (onSelectPair) onSelectPair(item);
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && onSelectPair) {
                  onSelectPair(item);
                }
              }}
            >
              <div className="lang-pair-card-header">
                <div className="flags-display">
                  <span>{item.flagA}</span>
                  <ArrowLeftRight size={14} style={{ color: '#0D9488' }} />
                  <span>{item.flagB}</span>
                </div>
                <span className="lang-region-tag" style={{ color: '#0D9488', backgroundColor: 'rgba(13, 148, 136, 0.08)' }}>
                  {item.region}
                </span>
              </div>

              <h3 className="lang-pair-title">{item.pair}</h3>
              <div className="lang-pair-native">{item.nativeSource}</div>

              <div className="lang-pair-meta">
                <div className="lang-meta-row">
                  <span className="lang-meta-label">Reach:</span>
                  <span className="lang-meta-val">{item.speakers}</span>
                </div>
                <div className="lang-meta-row">
                  <span className="lang-meta-label">Key Sectors:</span>
                  <span className="lang-meta-val">{item.popularUse}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Catalog Button & Illustrative Notice */}
        <div className="text-center" style={{ marginTop: 24 }}>
          <button
            type="button"
            className="btn-blue-outline"
            style={{ padding: '13px 32px' }}
            onClick={onOpenAllLanguages}
          >
            <Globe size={18} />
            <span>Explore Language Catalog</span>
            <ArrowRight size={16} />
          </button>

          <p className="languages-disclaimer-note" style={{ fontSize: '0.8rem', color: '#64748b', marginTop: 12 }}>
            * Note: Language pairs and capabilities displayed are illustrative offerings subject to final project scope confirmation by IBS.
          </p>
        </div>
      </div>
    </section>
  );
}
