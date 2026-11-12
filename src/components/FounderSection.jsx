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
            Over 15 Years of Industry Expertise. A Vision for Global Communication.
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
              <p className="founder-role">Founder, Innovative Business Solutions</p>

              <div className="founder-badges-stack">
                <div className="founder-badge-pill" style={{ backgroundColor: 'rgba(13, 148, 136, 0.12)', color: '#0F766E', borderColor: 'rgba(13, 148, 136, 0.3)', fontWeight: 700 }}>
                  <Briefcase size={14} />
                  <span>15+ Years Industry Expertise</span>
                </div>
                <div className="founder-badge-pill">
                  <Calendar size={14} />
                  <span>Founded IBS: Feb 2021</span>
                </div>
                <div className="founder-badge-pill">
                  <MapPin size={14} />
                  <span>Hyderabad, Telangana</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Vision, Leadership & Biography */}
          <div className="founder-content-col">
            {/* Vision & Leadership Statement */}
            <div className="founder-vision-box">
              <div className="founder-quote-icon">
                <Quote size={28} />
              </div>
              <div className="founder-quote-body">
                <h4 className="founder-block-title">Vision &amp; Leadership Statement</h4>
                <p className="founder-quote-text">
                  "At IBS, our purpose is to bridge communication gaps and deliver dependable operational support for growing enterprises. By pairing linguistic precision with disciplined business outsourcing, we help organizations work efficiently, connect meaningfully with their audiences, and achieve sustainable growth."
                </p>
                <div className="founder-quote-signoff">
                  — <strong>Abburi Tanuja</strong>, Founder
                </div>
              </div>
            </div>

            {/* Biography */}
            <div className="founder-detail-block">
              <h4 className="founder-block-title">
                <Sparkles size={18} style={{ color: '#0D9488' }} />
                <span>Biography &amp; Industry Leadership</span>
              </h4>
              <p className="founder-detail-text">
                With over 15 years of professional experience in the field, Abburi Tanuja brings valuable industry knowledge, leadership and a deep understanding of evolving business communication needs. Her vision guides Innovative Business Solutions in delivering reliable, quality-focused language and outsourcing solutions for organizations operating across markets.
              </p>
            </div>

            {/* Company History Distinction */}
            <div className="founder-detail-block biography-placeholder-box">
              <h4 className="founder-block-title">
                <ShieldCheck size={18} style={{ color: '#0B2545' }} />
                <span>15+ Years of Expertise. 5+ Years of Business Excellence.</span>
              </h4>
              <p className="founder-detail-text text-muted">
                Led by Abburi Tanuja, a seasoned professional bringing over 15 years of industry expertise in language services and business solutions, IBS was established in February 2021 and has built over five years of experience delivering business solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
