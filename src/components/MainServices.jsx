import React from 'react';
import { Pill, Mic, ClipboardList, ArrowRight, Languages } from 'lucide-react';
import { MAIN_SERVICES } from '../data/servicesData';

const iconMap = {
  Pill: Pill,
  Mic: Mic,
  ClipboardList: ClipboardList
};

export default function MainServices({ onExploreService }) {
  return (
    <section id="services" className="main-services-section">
      <div className="container">
        <div className="text-center">
          <span className="section-tag">Core Specializations</span>
          <h2 className="section-title">
            Professional Language <span>Solutions</span>
          </h2>
          <p className="section-subtitle">
            Industry-certified linguistic workflows delivering precision, regulatory compliance, and cultural authenticity across high-stakes domains.
          </p>
        </div>

        <div className="services-cards-grid">
          {MAIN_SERVICES.map((service) => {
            const IconComp = iconMap[service.iconName] || Languages;

            return (
              <div key={service.id} className="service-card">
                <div className="service-card-top">
                  <div className="service-card-icon">
                    <IconComp size={28} />
                  </div>
                  <span className="service-card-badge">{service.tag}</span>
                </div>

                <h3 className="service-card-title">{service.title}</h3>

                <p className="service-card-description">
                  {service.description}
                </p>

                <div className="service-languages-box">
                  <div className="service-languages-title">
                    <Languages size={14} style={{ color: '#0755A5' }} />
                    <span>Supported Key Languages</span>
                  </div>
                  <div className="languages-tags-list">
                    {service.languages.map((lang) => (
                      <span key={lang} className="language-pill-tag">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ marginTop: 'auto' }}>
                  <button
                    type="button"
                    className="btn-blue-outline"
                    style={{ width: '100%', justifyContent: 'center' }}
                    onClick={() => onExploreService && onExploreService(service)}
                  >
                    <span>Explore More</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

