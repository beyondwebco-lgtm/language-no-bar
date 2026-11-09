import React, { useState } from 'react';
import { 
  FileText, 
  Briefcase, 
  Globe, 
  Mic, 
  MessageSquare, 
  ClipboardList, 
  Workflow, 
  Layers, 
  FileCheck, 
  Database, 
  CheckCircle2, 
  Settings, 
  ArrowRight, 
  Languages,
  Check
} from 'lucide-react';
import { TRANSLATION_SERVICES, OUTSOURCING_SERVICES } from '../data/servicesData';

const iconMap = {
  FileText,
  Briefcase,
  Globe,
  Mic,
  MessageSquare,
  ClipboardList,
  Workflow,
  Layers,
  FileCheck,
  Database,
  CheckCircle2,
  Settings
};

export default function MainServices({ onExploreService }) {
  const [activeCategory, setActiveCategory] = useState('all'); // 'all' | 'translation' | 'outsourcing'

  const displayedServices = 
    activeCategory === 'translation' 
      ? TRANSLATION_SERVICES 
      : activeCategory === 'outsourcing' 
        ? OUTSOURCING_SERVICES 
        : [...TRANSLATION_SERVICES, ...OUTSOURCING_SERVICES];

  return (
    <section id="services" className="main-services-section">
      <div className="container">
        <div className="text-center">
          <span className="section-tag">Comprehensive Corporate Offerings</span>
          <h2 className="section-title">
            Our <span>Services</span>
          </h2>
          <p className="section-subtitle">
            Delivering professional language translation services and business outsourcing solutions to help organizations communicate effectively and optimize operations.
          </p>

          {/* Category Tabs: Language Translation vs. Business Outsourcing */}
          <div className="services-category-tabs" role="tablist">
            <button
              type="button"
              className={`services-tab-btn ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => setActiveCategory('all')}
              role="tab"
              aria-selected={activeCategory === 'all'}
            >
              <span>All Offerings ({TRANSLATION_SERVICES.length + OUTSOURCING_SERVICES.length})</span>
            </button>
            <button
              type="button"
              className={`services-tab-btn ${activeCategory === 'translation' ? 'active' : ''}`}
              onClick={() => setActiveCategory('translation')}
              role="tab"
              aria-selected={activeCategory === 'translation'}
            >
              <Languages size={17} />
              <span>Language Translation Services ({TRANSLATION_SERVICES.length})</span>
            </button>
            <button
              type="button"
              className={`services-tab-btn ${activeCategory === 'outsourcing' ? 'active' : ''}`}
              onClick={() => setActiveCategory('outsourcing')}
              role="tab"
              aria-selected={activeCategory === 'outsourcing'}
            >
              <Workflow size={17} />
              <span>Business Outsourcing Solutions ({OUTSOURCING_SERVICES.length})</span>
            </button>
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="services-cards-grid">
          {displayedServices.map((service) => {
            const IconComp = iconMap[service.iconName] || Globe;
            const isTranslation = TRANSLATION_SERVICES.some((s) => s.id === service.id);

            return (
              <div key={service.id} className="service-card">
                <div className="service-card-top">
                  <div className="service-card-icon" style={{ backgroundColor: isTranslation ? '#0B2545' : '#0D9488' }}>
                    <IconComp size={24} style={{ color: '#ffffff' }} />
                  </div>
                  <span className="service-card-badge" style={{ borderColor: isTranslation ? 'rgba(11, 37, 69, 0.2)' : 'rgba(13, 148, 136, 0.3)' }}>
                    {service.tag}
                  </span>
                </div>

                <h3 className="service-card-title">{service.title}</h3>

                <p className="service-card-description">
                  {service.description}
                </p>

                {/* Key Deliverables Bullet Preview */}
                <div className="service-deliverables-mini">
                  {service.deliverables.slice(0, 2).map((item, idx) => (
                    <div key={idx} className="service-mini-bullet">
                      <Check size={13} style={{ color: '#0D9488', flexShrink: 0 }} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: 'auto', paddingTop: 16 }}>
                  <button
                    type="button"
                    className="btn-blue-outline"
                    style={{ width: '100%', justifyContent: 'center' }}
                    onClick={() => onExploreService && onExploreService(service)}
                  >
                    <span>Explore Details</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Regulatory & Proposal Disclaimer */}
        <div className="services-proposal-notice">
          <p>
            * Note: Individual subservices listed above represent proposed corporate offerings based on IBS operational capabilities, subject to final alignment and formal scope confirmation by IBS.
          </p>
        </div>
      </div>
    </section>
  );
}
