import React from 'react';
import { 
  Target, 
  CheckCheck, 
  Lock, 
  UserCheck, 
  Smile, 
  TrendingUp, 
  ShieldCheck, 
  Award, 
  FileCheck 
} from 'lucide-react';

export default function QualityPolicy() {
  const commitments = [
    {
      icon: Target,
      title: 'Translation Accuracy',
      desc: 'Contextually exact translations preserving tone, nuance, regulatory guidelines, and terminology accuracy.'
    },
    {
      icon: CheckCheck,
      title: 'Quality Assurance',
      desc: 'Rigorous multi-stage QA involving certified translation, independent bilingual editing, and native proofreading.'
    },
    {
      icon: Lock,
      title: 'Data Confidentiality',
      desc: 'Strict non-disclosure agreements, encrypted transmission channels, and bank-grade data security protocols.'
    },
    {
      icon: UserCheck,
      title: 'Professional Translators',
      desc: 'Domain-specialized native translators holding advanced degrees in life sciences, legal, engineering, and finance.'
    },
    {
      icon: Smile,
      title: 'Customer Satisfaction',
      desc: 'Dedicated account managers, rapid query turnaround, transparent billing, and unlimited revisions policy.'
    },
    {
      icon: TrendingUp,
      title: 'Continuous Improvement',
      desc: 'Regular linguist calibration audits, modern translation memory maintenance, and automated QA metric tracking.'
    }
  ];

  const certifications = [
    {
      code: 'ISO 9001:2008',
      title: 'Quality Management System',
      description: 'Certified operational excellence, systematic quality controls, and repeatable client satisfaction benchmarks across all project workflows.',
      standard: 'Verified QMS Framework'
    },
    {
      code: 'ISO 17100:2015',
      title: 'Translation Services Quality',
      description: 'International benchmark governing translator qualifications, technical resources, double-check processes, and post-editing quality.',
      standard: 'Verified Translation Standard'
    },
    {
      code: 'ISO 27001',
      title: 'Information Security Management',
      description: 'Comprehensive risk management framework ensuring non-negotiable confidentiality, data protection, and enterprise cybersecurity hygiene.',
      standard: 'Verified Security Certification'
    }
  ];

  return (
    <section id="quality" className="quality-section">
      <div className="container">
        <div className="text-center">
          <span className="section-tag">Quality Framework</span>
          <h2 className="section-title">
            Our <span>Quality Policy</span>
          </h2>
          <p className="section-subtitle">
            At Language No Bar, quality is not a checklist item—it is the foundational cornerstone of every word we deliver to clients worldwide.
          </p>
        </div>

        {/* 6 Commitments Grid */}
        <div className="quality-pillars-grid">
          {commitments.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="quality-pillar-card">
                <div className="quality-pillar-icon">
                  <Icon size={22} />
                </div>
                <div className="quality-pillar-content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ISO Certification Verified Company Credentials Banner */}
        <div className="iso-credentials-banner">
          <div className="iso-banner-header">
            <div className="iso-banner-title-group">
              <h3>
                <ShieldCheck size={26} style={{ color: '#0755A5' }} />
                <span>Verified Company Credentials</span>
              </h3>
              <p>Recognized and audited by international standard bodies</p>
            </div>
            <div className="iso-verified-tag">
              <FileCheck size={16} />
              <span>Audit Passed & Verified</span>
            </div>
          </div>

          <div className="iso-cards-row">
            {certifications.map((cert) => (
              <div key={cert.code} className="iso-badge-card">
                <div className="iso-card-top">
                  <span className="iso-code-badge">{cert.code}</span>
                  <Award className="iso-seal-icon" size={24} />
                </div>
                <h4 className="iso-cert-title">{cert.title}</h4>
                <p className="iso-cert-desc">{cert.description}</p>
                <div className="iso-badge-verified-foot">
                  <CheckCheck size={14} />
                  <span>{cert.standard}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

