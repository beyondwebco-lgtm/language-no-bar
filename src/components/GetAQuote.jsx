import React, { useState } from 'react';
import { 
  Send, 
  UploadCloud, 
  FileCheck, 
  CheckCircle2, 
  X, 
  ShieldCheck, 
  Clock, 
  Building2 
} from 'lucide-react';

export default function GetAQuote({ prefillService, prefillSourceLang, prefillTargetLang, onQuoteSuccess }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    serviceRequired: prefillService || '',
    sourceLanguage: prefillSourceLang || 'English',
    targetLanguage: prefillTargetLang || '',
    projectDescription: '',
  });

  const [uploadedFile, setUploadedFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedQuote, setSubmittedQuote] = useState(null);

  // Grouped service options: Translation Services, Specialized Language & AI, Business Outsourcing
  const serviceOptions = [
    {
      group: 'Language Translation Services',
      items: [
        'Language Translation Services (General)',
        'Document Translation',
        'Business & Corporate Translation',
        'Language Localization',
        'Interpretation',
        'Audio & Video Transcription',
        'Multilingual Communication',
        'Survey Translation'
      ]
    },
    {
      group: 'Specialized Language, Media, AI & Research',
      items: [
        'Subtitling & Dubbing',
        'Multilingual DTP',
        'Linguistic QA',
        'Back Translation',
        'Content & Copywriting',
        'AI Language Solutions',
        'Language Data',
        'Market Research'
      ]
    },
    {
      group: 'Business Outsourcing Solutions',
      items: [
        'Business Outsourcing Solutions (General)',
        'Business Process Outsourcing (BPO)',
        'Back-Office Support',
        'Administrative Support',
        'Data Processing',
        'Operational Assistance',
        'Customized Outsourcing Solutions'
      ]
    }
  ];

  // Helper: Determine if selected service is translation/language-related
  const isTranslationSelected = () => {
    if (!formData.serviceRequired) return false;
    const s = formData.serviceRequired.toLowerCase();
    return (
      s.includes('translation') ||
      s.includes('localization') ||
      s.includes('interpretation') ||
      s.includes('transcription') ||
      s.includes('subtitling') ||
      s.includes('dtp') ||
      s.includes('linguistic') ||
      s.includes('copywriting') ||
      s.includes('language') ||
      s.includes('multilingual') ||
      s.includes('research')
    );
  };

  const popularLanguages = [
    'English',
    'Hindi',
    'Telugu',
    'German',
    'French',
    'Spanish',
    'Arabic',
    'Japanese',
    'Chinese (Simplified)',
    'Chinese (Traditional)',
    'Marathi',
    'Gujarati',
    'Tamil',
    'Kannada',
    'Malayalam',
    'Bengali',
    'Other (Specify in project notes)'
  ];

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please enter your full name';
    if (!formData.email.trim()) {
      errs.email = 'Business email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }

    if (!formData.phoneNumber.trim()) {
      errs.phoneNumber = 'Phone number is required';
    } else if (!/^[\d+\-\s()]{7,18}$/.test(formData.phoneNumber)) {
      errs.phoneNumber = 'Please enter a valid phone number';
    }

    if (!formData.serviceRequired) {
      errs.serviceRequired = 'Please select a required service';
    }

    // Only validate language fields when a translation service is selected
    if (isTranslationSelected()) {
      if (!formData.sourceLanguage) {
        errs.sourceLanguage = 'Please specify source language';
      }
      if (!formData.targetLanguage) {
        errs.targetLanguage = 'Please specify target language';
      }
    }

    if (!formData.projectDescription.trim()) {
      errs.projectDescription = 'Please provide a brief project overview';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setUploadedFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        const quoteRef = 'IBS-Q-' + Math.floor(100000 + Math.random() * 900000);
        const details = {
          ...formData,
          fileName: uploadedFile ? uploadedFile.name : 'No file uploaded',
          fileSize: uploadedFile ? `${(uploadedFile.size / 1024).toFixed(1)} KB` : 'N/A',
          referenceId: quoteRef,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setSubmittedQuote(details);
        if (onQuoteSuccess) {
          onQuoteSuccess(details);
        }
      }, 700);
    }
  };

  const handleResetForm = () => {
    setSubmittedQuote(null);
    setFormData({
      fullName: '',
      email: '',
      phoneNumber: '',
      serviceRequired: '',
      sourceLanguage: 'English',
      targetLanguage: '',
      projectDescription: '',
    });
    setUploadedFile(null);
    setErrors({});
  };

  return (
    <section id="quote" className="quote-section">
      <div className="container">
        <div className="text-center">
          <span className="section-tag">Instant Proposal</span>
          <h2 className="section-title">
            Request a <span>Free Quote</span>
          </h2>
          <p className="section-subtitle">
            Submit your translation or business outsourcing requirements to receive a customized project proposal and estimated timeline from IBS.
          </p>
        </div>

        <div className="quote-grid">
          {/* Left Column: Information & Guarantees */}
          <div className="quote-info-card">
            <div>
              <span className="section-tag light" style={{ marginBottom: 12 }}>
                Hyderabad, India
              </span>
              <h3 className="quote-info-title">Tailored Solutions for Your Enterprise</h3>
              <p className="quote-info-desc">
                From specialized language translation to ongoing operational and back-office outsourcing, IBS provides structured service delivery and transparent estimates.
              </p>
            </div>

            <div className="quote-guarantees-list">
              <div className="guarantee-item">
                <Clock size={20} />
                <span>Prompt Project Assessment & Response</span>
              </div>
              <div className="guarantee-item">
                <ShieldCheck size={20} />
                <span>Strict Non-Disclosure & Confidentiality</span>
              </div>
              <div className="guarantee-item">
                <Building2 size={20} />
                <span>Hyderabad Operational Headquarters</span>
              </div>
            </div>

            <div className="quote-helpline-box">
              <span className="label">Need Immediate Project Guidance?</span>
              <span className="number" style={{ fontSize: '1.05rem', color: '#14B8A6' }}>
                Complete the quotation form for direct priority evaluation.
              </span>
              <span className="sub">Mon - Sat: 9:00 AM - 7:00 PM IST</span>
            </div>
          </div>

          {/* Right Column: Dynamic Quotation Form */}
          <div className="quote-form-card">
            {submittedQuote ? (
              <div className="quote-success-state">
                <div className="success-icon-wrapper">
                  <CheckCircle2 size={48} style={{ color: '#0D9488' }} />
                </div>
                <h3 className="success-title">Quotation Request Received</h3>
                <p className="success-msg">
                  Thank you, <strong>{submittedQuote.fullName}</strong>. Your quotation request has been recorded with reference number:
                </p>
                <div className="quote-ref-badge">{submittedQuote.referenceId}</div>
                <div className="quote-summary-box">
                  <div><strong>Service:</strong> {submittedQuote.serviceRequired}</div>
                  {isTranslationSelected() && (
                    <div><strong>Languages:</strong> {submittedQuote.sourceLanguage} → {submittedQuote.targetLanguage}</div>
                  )}
                  <div><strong>Email:</strong> {submittedQuote.email}</div>
                  <div><strong>Phone:</strong> {submittedQuote.phoneNumber}</div>
                  {submittedQuote.fileName !== 'No file uploaded' && (
                    <div><strong>Attached Document:</strong> {submittedQuote.fileName} ({submittedQuote.fileSize})</div>
                  )}
                </div>
                <button type="button" className="btn-blue-outline" onClick={handleResetForm} style={{ marginTop: 20 }}>
                  <span>Submit Another Request</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="form-fields-grid">
                  {/* Full Name */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="fullName">
                      Full Name <span className="req">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      className={`form-input ${errors.fullName ? 'error' : ''}`}
                      placeholder="e.g. Rajesh Sharma"
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                    {errors.fullName && <span className="error-text">{errors.fullName}</span>}
                  </div>

                  {/* Business Email */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">
                      Business Email <span className="req">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className={`form-input ${errors.email ? 'error' : ''}`}
                      placeholder="e.g. rajesh@company.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && <span className="error-text">{errors.email}</span>}
                  </div>

                  {/* Phone Number */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="phoneNumber">
                      Phone Number <span className="req">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      className={`form-input ${errors.phoneNumber ? 'error' : ''}`}
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                    />
                    {errors.phoneNumber && <span className="error-text">{errors.phoneNumber}</span>}
                  </div>

                  {/* Service Required Dropdown */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="serviceRequired">
                      Service Required <span className="req">*</span>
                    </label>
                    <select
                      id="serviceRequired"
                      name="serviceRequired"
                      className={`form-input ${errors.serviceRequired ? 'error' : ''}`}
                      value={formData.serviceRequired}
                      onChange={handleChange}
                    >
                      <option value="">-- Select Required Service --</option>
                      {serviceOptions.map((grp) => (
                        <optgroup key={grp.group} label={grp.group}>
                          {grp.items.map((srv) => (
                            <option key={srv} value={srv}>
                              {srv}
                            </option>
                          ))}
                        </optgroup>
                      ))}
                    </select>
                    {errors.serviceRequired && <span className="error-text">{errors.serviceRequired}</span>}
                  </div>

                  {/* Conditional Language Fields: Displayed ONLY for translation services */}
                  {isTranslationSelected() && (
                    <>
                      <div className="form-group">
                        <label className="form-label" htmlFor="sourceLanguage">
                          Source Language <span className="req">*</span>
                        </label>
                        <select
                          id="sourceLanguage"
                          name="sourceLanguage"
                          className={`form-input ${errors.sourceLanguage ? 'error' : ''}`}
                          value={formData.sourceLanguage}
                          onChange={handleChange}
                        >
                          {popularLanguages.map((lang) => (
                            <option key={lang} value={lang}>
                              {lang}
                            </option>
                          ))}
                        </select>
                        {errors.sourceLanguage && <span className="error-text">{errors.sourceLanguage}</span>}
                      </div>

                      <div className="form-group">
                        <label className="form-label" htmlFor="targetLanguage">
                          Target Language <span className="req">*</span>
                        </label>
                        <select
                          id="targetLanguage"
                          name="targetLanguage"
                          className={`form-input ${errors.targetLanguage ? 'error' : ''}`}
                          value={formData.targetLanguage}
                          onChange={handleChange}
                        >
                          <option value="">-- Select Target Language --</option>
                          {popularLanguages.map((lang) => (
                            <option key={lang} value={lang}>
                              {lang}
                            </option>
                          ))}
                        </select>
                        {errors.targetLanguage && <span className="error-text">{errors.targetLanguage}</span>}
                      </div>
                    </>
                  )}

                  {/* Project Description */}
                  <div className="form-group span-full">
                    <label className="form-label" htmlFor="projectDescription">
                      Project Description & Requirements <span className="req">*</span>
                    </label>
                    <textarea
                      id="projectDescription"
                      name="projectDescription"
                      rows={3}
                      className={`form-input ${errors.projectDescription ? 'error' : ''}`}
                      placeholder="Please describe your document scope, volume, expected deadlines, or specific outsourcing workflow..."
                      value={formData.projectDescription}
                      onChange={handleChange}
                    />
                    {errors.projectDescription && <span className="error-text">{errors.projectDescription}</span>}
                  </div>

                  {/* File Upload (Optional) */}
                  <div className="form-group span-full">
                    <label className="form-label">
                      Attach Reference Document <span style={{ fontWeight: 400, color: '#64748b' }}>(Optional)</span>
                    </label>
                    <div
                      className={`file-drop-zone ${dragActive ? 'active' : ''}`}
                      onDragEnter={handleDrag}
                      onDragLeave={handleDrag}
                      onDragOver={handleDrag}
                      onDrop={handleDrop}
                    >
                      <input
                        type="file"
                        id="quoteFileUpload"
                        style={{ display: 'none' }}
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx,.txt,.xls,.xlsx,.ppt,.pptx,.zip"
                      />
                      {uploadedFile ? (
                        <div className="file-attached-info">
                          <FileCheck size={28} style={{ color: '#0D9488' }} />
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <div className="file-name" title={uploadedFile.name}>{uploadedFile.name}</div>
                            <div className="file-size">{(uploadedFile.size / 1024).toFixed(1)} KB</div>
                          </div>
                          <button
                            type="button"
                            className="btn-remove-file"
                            onClick={() => setUploadedFile(null)}
                            title="Remove file"
                          >
                            <X size={16} />
                          </button>
                        </div>
                      ) : (
                        <label htmlFor="quoteFileUpload" className="drop-zone-content">
                          <UploadCloud size={30} style={{ color: '#0D9488', margin: '0 auto 6px' }} />
                          <span className="drop-title">Click to upload or drag & drop documents</span>
                          <span className="drop-sub">Supported formats: PDF, Word (DOCX), Excel, PPT, TXT, ZIP</span>
                        </label>
                      )}
                    </div>
                  </div>
                </div>

                <div className="quote-form-footer">
                  <div className="privacy-reassurance">
                    <ShieldCheck size={16} style={{ color: '#0D9488' }} />
                    <span>All client materials are treated with strict confidentiality.</span>
                  </div>

                  <button
                    type="submit"
                    className="btn-yellow quote-submit-btn"
                    disabled={isSubmitting}
                  >
                    <span>{isSubmitting ? 'Processing Request...' : 'Get a Free Quote'}</span>
                    <Send size={16} />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
