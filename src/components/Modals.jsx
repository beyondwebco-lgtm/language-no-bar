import React, { useState } from 'react';
import { X, CheckCircle2, Globe, ArrowRight, ShieldCheck, Search, Filter } from 'lucide-react';
import { ALL_SUPPORTED_LANGUAGES } from '../data/languagesData';

export function ServiceModal({ service, onClose, onSelectQuoteService }) {
  if (!service) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <span className="modal-header-badge">{service.tag || 'Language Solution'}</span>
        <h2 className="modal-title">{service.title}</h2>

        <div className="modal-body">
          <p className="modal-desc">
            {service.fullDescription || service.description}
          </p>

          {service.deliverables && (
            <div>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0f172a', marginBottom: 10 }}>
                Standard Deliverables & Scope:
              </h4>
              <ul className="modal-checklist">
                {service.deliverables.map((item, idx) => (
                  <li key={idx} className="modal-checklist-item">
                    <CheckCircle2 size={16} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {service.languages && (
            <div>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0f172a', marginBottom: 8 }}>
                Available Languages:
              </h4>
              <div className="languages-tags-list">
                {service.languages.map((lang) => (
                  <span key={lang} className="language-pill-tag">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          )}

          {service.qualityStandard && (
            <div style={{ background: '#f0f6fc', border: '1px solid rgba(7, 85, 165, 0.2)', borderRadius: 8, padding: 12, display: 'flex', alignItems: 'center', gap: 10 }}>
              <ShieldCheck size={20} style={{ color: '#0755A5', flexShrink: 0 }} />
              <div style={{ fontSize: '0.84rem', color: '#1e293b' }}>
                <strong>Quality Assurance:</strong> {service.qualityStandard}
              </div>
            </div>
          )}

          <div style={{ display: 'flex', gap: 12, marginTop: 10 }}>
            <button
              type="button"
              className="btn-yellow"
              style={{ flex: 1 }}
              onClick={() => {
                onClose();
                if (onSelectQuoteService) onSelectQuoteService(service.title);
              }}
            >
              <span>Request Quote for {service.title}</span>
              <ArrowRight size={16} />
            </button>
            <button
              type="button"
              className="btn-blue-outline"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function LanguagesModal({ isOpen, onClose, onSelectLanguage }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');

  if (!isOpen) return null;

  const regions = ['All', ...Object.keys(ALL_SUPPORTED_LANGUAGES)];

  const filterLanguages = () => {
    let result = [];
    Object.entries(ALL_SUPPORTED_LANGUAGES).forEach(([region, langs]) => {
      if (selectedRegion === 'All' || selectedRegion === region) {
        langs.forEach((lang) => {
          if (
            lang.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            lang.native.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            result.push({ ...lang, region });
          }
        });
      }
    });
    return result;
  };

  const filtered = filterLanguages();

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-dialog wide" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <span className="modal-header-badge">Comprehensive Catalog</span>
        <h2 className="modal-title">150+ Supported Languages</h2>
        <p className="modal-desc" style={{ marginBottom: 16 }}>
          Select any language to automatically request a quotation or translation assessment.
        </p>

        {/* Search & Region Filter Bar */}
        <div style={{ display: 'flex', gap: 12, marginBottom: 18, flexWrap: 'wrap' }}>
          <div style={{ position: 'relative', flex: 1, minWidth: 200 }}>
            <Search size={16} style={{ position: 'absolute', left: 12, top: 12, color: '#94a3b8' }} />
            <input
              type="text"
              className="form-input"
              style={{ paddingLeft: 36 }}
              placeholder="Search by language name or native script (e.g., Hindi, Deutsch)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div style={{ display: 'flex', gap: 6, overflowX: 'auto', paddingBottom: 4 }}>
            {regions.map((reg) => (
              <button
                key={reg}
                type="button"
                onClick={() => setSelectedRegion(reg)}
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  padding: '6px 12px',
                  borderRadius: 9999,
                  border: selectedRegion === reg ? '1px solid #0755A5' : '1px solid #cbd5e1',
                  background: selectedRegion === reg ? '#0755A5' : '#ffffff',
                  color: selectedRegion === reg ? '#ffffff' : '#475569',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.2s ease'
                }}
              >
                {reg}
              </button>
            ))}
          </div>
        </div>

        {/* Languages Grid */}
        <div style={{ maxHeight: 380, overflowY: 'auto', paddingRight: 4 }}>
          {filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '30px', color: '#64748b' }}>
              No languages found matching "{searchTerm}".
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 10 }}>
              {filtered.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    background: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    borderRadius: 8,
                    padding: '10px 14px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                  onClick={() => {
                    onClose();
                    if (onSelectLanguage) onSelectLanguage(item.name);
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#0755A5';
                    e.currentTarget.style.background = '#f0f6fc';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#e2e8f0';
                    e.currentTarget.style.background = '#f8fafc';
                  }}
                >
                  <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0f172a' }}>
                    {item.name}
                  </span>
                  <span style={{ fontSize: '0.78rem', color: '#0755A5', fontWeight: 600 }}>
                    {item.native}
                  </span>
                  <span style={{ fontSize: '0.68rem', color: '#94a3b8', marginTop: 4 }}>
                    {item.region}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div style={{ marginTop: 20, paddingTop: 14, borderTop: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '0.8rem', color: '#64748b' }}>
            Showing {filtered.length} languages
          </span>
          <button type="button" className="btn-blue-outline" onClick={onClose} style={{ padding: '8px 18px', fontSize: '0.85rem' }}>
            Close Catalog
          </button>
        </div>
      </div>
    </div>
  );
}

export function BlogModal({ post, onClose }) {
  if (!post) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <span className="modal-header-badge">{post.category}</span>
        <h2 className="modal-title" style={{ fontSize: '1.45rem' }}>{post.title}</h2>

        <div style={{ display: 'flex', gap: 14, fontSize: '0.8rem', color: '#64748b', marginBottom: 16 }}>
          <span>{post.date}</span>
          <span>•</span>
          <span>By {post.author}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>

        <div className="modal-body">
          <img
            src={post.image}
            alt={post.title}
            style={{ width: '100%', height: 220, objectFit: 'cover', borderRadius: 8 }}
          />

          <p style={{ fontSize: '0.95rem', color: '#334155', lineHeight: 1.7 }}>
            {post.summary}
          </p>

          <p style={{ fontSize: '0.95rem', color: '#334155', lineHeight: 1.7 }}>
            At <strong>Language No Bar</strong>, our team implements strict ISO 17100 translation workflows. Every document undergoes initial native translation, rigorous technical cross-referencing by a subject-matter editor, and independent proofreading. This guarantees that terminology, cultural sensibilities, and legal-regulatory accuracy remain uncompromised.
          </p>

          <div style={{ background: '#f8fafc', padding: 16, borderRadius: 8, borderLeft: '4px solid #FFB900' }}>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0f172a', marginBottom: 4 }}>
              Looking to translate your documentation?
            </h4>
            <p style={{ fontSize: '0.82rem', color: '#64748b' }}>
              Speak with our language leads today for a dedicated assessment and timeline.
            </p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 8 }}>
            <button type="button" className="btn-yellow" onClick={onClose}>
              Close Article
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

