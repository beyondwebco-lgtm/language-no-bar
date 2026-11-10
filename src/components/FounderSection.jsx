import React from 'react';
import { User, Quote, Calendar, MapPin, Briefcase, Sparkles, ShieldCheck } from 'lucide-react';

export default function FounderSection() {
  return (
    <section id="founder" className="founder-section">
      <div className="container">
        <div className="text-center">
          <span className="section-tag">Executive Leadership</span>
          <h2 className="section-title">
            Meet Our <span>Founder</span>
          </h2>
          <p className="section-subtitle">
            Guiding IBS with a dedicated commitment to professional language translation and operational excellence.
          </p>
        </div>

        <div className="founder-card-container">
          {/* Left Column: Founder Photo Placeholder & Core Identity */}
          <div className="founder-profile-col">
            <div className="founder-photo-frame">
              {/* Elegant Placeholder Avatar Container */}
              <div className="founder-avatar-placeholder" role="img" aria-label="Founder Abburi Tanuja profile photo placeholder">
                <div className="founder-initials-badge">AT</div>
                <div className="founder-photo-icon-overlay">
                  <User size={38} strokeWidth={1.8} />
                </div>
              </div>
              <div className="founder-photo-notice">
                <span>Photograph to be updated</span>
              </div>
            </div>

            <div className="founder-identity">
              <h3 className="founder-name">Abburi Tanuja</h3>
              <p className="founder-role">Founder – Innovative Business Solutions</p>
              
              <div className="founder-badges-stack">
                <div className="founder-badge-pill">
                  <Calendar size={14} />
                  <span>Founded Feb 2021</span>
                </div>
                <div className="founder-badge-pill">
                  <MapPin size={14} />
                  <span>Hyderabad, Telangana</span>
                </div>
                <div className="founder-badge-pill">
                  <Briefcase size={14} />
                  <span>5+ Years Experience</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Vision, Background & Biography */}
          <div className="founder-content-col">
            {/* Vision & Leadership Statement */}
            <div className="founder-vision-box">
              <div className="founder-quote-icon">
                <Quote size={28} />
              </div>
              <div className="founder-quote-body">
                <h4 className="founder-block-title">Vision & Leadership Statement</h4>
                <p className="founder-quote-text">
                  "At IBS, our purpose is to bridge communication gaps and deliver dependable operational support for growing enterprises. By pairing linguistic precision with disciplined business outsourcing, we help organizations work efficiently, connect meaningfully with their audiences, and achieve sustainable growth."
                </p>
                <div className="founder-quote-signoff">
                  — <strong>Abburi Tanuja</strong>, Founder
                </div>
              </div>
            </div>

            {/* Professional Experience & Background */}
            <div className="founder-detail-block">
              <h4 className="founder-block-title">
                <Sparkles size={18} style={{ color: '#0D9488' }} />
                <span>Professional Experience & Background</span>
              </h4>
              <p className="founder-detail-text">
                Established in February 2021, Innovative Business Solutions was founded under the leadership of Abburi Tanuja. With over five years of industry experience, the focus has remained steadfast on building dependable language translation services and business outsourcing solutions tailored to client needs across Hyderabad and beyond.
              </p>
            </div>

            {/* Biography Placeholder */}
            <div className="founder-detail-block biography-placeholder-box">
              <h4 className="founder-block-title">
                <ShieldCheck size={18} style={{ color: '#0B2545' }} />
                <span>Biography & Professional Profile</span>
              </h4>
              <p className="founder-detail-text text-muted">
                Detailed professional biography, career milestones, and academic background will be featured here upon official confirmation by the founder.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

