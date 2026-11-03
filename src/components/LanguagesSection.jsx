import React from 'react';
import { ArrowLeftRight, Globe, Layers, ArrowRight } from 'lucide-react';
import { FEATURED_LANGUAGE_PAIRS } from '../data/languagesData';

export default function LanguagesSection({ onOpenAllLanguages, onSelectPair }) {
  return (
    <section id="languages" className="languages-section">
      <div className="container">
        <div className="text-center">
          <span className="section-tag">Global & Regional Reach</span>
          <h2 className="section-title">
            Languages We <span>Support</span>
          </h2>
          <p className="section-subtitle">
            We provide seamless bidirectional translation across more than 150 international and regional Indian language pairs, powered by certified native translators.
          </p>
        </div>

        {/* 9 Language Pair Cards */}
        <div className="language-cards-grid">
          {FEATURED_LANGUAGE_PAIRS.map((item) => (
            <div
              key={item.id}
              className="lang-pair-card"
              role="button"
              tabIndex={0}
              onClick={() => onSelectPair && onSelectPair(item)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') onSelectPair && onSelectPair(item);
              }}
            >
              <div className="lang-pair-card-header">
                <div className="flags-display">
                  <span>{item.flagA}</span>
                  <ArrowLeftRight size={14} style={{ color: '#0755A5' }} />
                  <span>{item.flagB}</span>
                </div>
                <span className="lang-region-tag">{item.region}</span>
              </div>

              <h3 className="lang-pair-title">{item.pair}</h3>
              <div className="lang-pair-native">{item.nativeSource}</div>

              <div className="lang-pair-meta">
                <div className="lang-meta-row">
                  <span className="lang-meta-label">Demographics:</span>
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

        {/* View All Languages Button */}
        <div className="text-center">
          <button
            type="button"
            className="btn-blue-outline"
            style={{ padding: '13px 32px' }}
            onClick={onOpenAllLanguages}
          >
            <Globe size={18} />
            <span>View All 150+ Supported Languages</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}

