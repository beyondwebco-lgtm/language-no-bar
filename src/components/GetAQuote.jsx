import React, { useState } from 'react';
import { 
  Send, 
  UploadCloud, 
  FileCheck, 
  CheckCircle2, 
  X, 
  ShieldCheck, 
  Clock, 
  PhoneCall, 
  HelpCircle 
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

  const servicesList = [
    'Translation Services',
    'Pharma Translation (Life Sciences)',
    'Transcription Services',
    'Survey & Questionnaire Translation',
    'Localization Services',
    'Testing Services (LQA)',
    'Multilingual DTP',
    'Legal & Document Translation',
    'Other Specialized Services'
  ];

  const popularLanguages = [
    'English',
    'Hindi',
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
    'Telugu',
    'Bengali',
    'Russian',
    'Portuguese',
    'Italian',
    'Korean',
    'Other (Specify in notes)'
  ];

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please enter your full name';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }

    if (!formData.phoneNumber.trim()) {
      errs.phoneNumber = 'Phone number is required';
    } else if (!/^[\d+\-\s()]{7,18}$/.test(formData.phoneNumber)) {
      errs.phoneNumber = 'Please enter a valid phone number';
    }

    if (!formData.serviceRequired) {
      errs.serviceRequired = 'Please select a service';
    }

    if (!formData.sourceLanguage) {
      errs.sourceLanguage = 'Please specify source language';
    }

    if (!formData.targetLanguage) {
      errs.targetLanguage = 'Please specify target language';
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
      // Simulate API processing delay
      setTimeout(() => {
        setIsSubmitting(false);
        const quoteRef = 'LNB-Q-' + Math.floor(100000 + Math.random() * 900000);
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
          <span className="section-tag yellow">Instant Proposal</span>
          <h2 className="section-title">
            Get a Customized <span>Quotation</span>
          </h2>
          <p className="section-subtitle">
            Upload your project details or documents to receive a guaranteed fixed-price quote and timeline within 60 minutes.
          </p>
        </div>

        <div className="quote-grid">
          {/* Left Column: Guarantees & Direct Line */}
          <div className="quote-info-card">
            <div>
              <span className="section-tag light" style={{ marginBottom: 12 }}>
                Transparent Pricing
              </span>
              <h3 className="quote-info-title">Fast & Confidential Project Estimates</h3>
              <p className="quote-info-desc">
                Whether you need a one-page certificate or a 500-page clinical trial protocol, our project managers provide transparent per-word rates with no hidden fees.
              </p>
            </div>

            <div className="quote-guarantees-list">
              <div className="guarantee-item">
                <Clock size={20} />
                <span>60-Minute Rapid Response Time</span>
              </div>
              <div className="guarantee-item">
                <ShieldCheck size={20} />
                <span>Non-Disclosure Agreement (NDA) Protected</span>
              </div>
              <div className="guarantee-item">
                <CheckCircle2 size={20} />
                <span>Zero Obligation Free Estimate</span>
              </div>
              <div className="guarantee-item">
                <HelpCircle size={20} />
                <span>Dedicated Linguist & Project Lead</span>
              </div>
            </div>

            <div className="quote-contact-snippet">
              <span className="quote-snippet-label">Need urgent assistance?</span>
              <a href="tel:+919711552550" className="quote-snippet-link">
                <PhoneCall size={18} style={{ color: '#FFB900' }} />
                <span>Call Directly: +91 9711552550</span>
              </a>
              <span style={{ fontSize: '0.78rem', color: '#cbd5e1' }}>
                Mon - Sat: 9:00 AM - 7:00 PM IST
              </span>
            </div>
          </div>

          {/* Right Column: Quotation Request Form */}
          <div className="quote-form-card">
            {submittedQuote ? (
              <div className="success-banner-box">
                <div className="success-icon-big">
                  <CheckCircle2 size={36} />
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a' }}>
                  Quotation Request Received!
                </h3>
                <p style={{ color: '#475569', fontSize: '0.92rem', maxWidth: 440 }}>
                  Thank you, <strong>{submittedQuote.fullName}</strong>. Your request reference number is <strong style={{ color: '#0755A5' }}>{submittedQuote.referenceId}</strong>. Our localization specialist will email you the official estimate shortly at <strong>{submittedQuote.email}</strong>.
                </p>

                <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 8, padding: 14, width: '100%', textAlign: 'left', fontSize: '0.84rem' }}>
                  <div><strong>Service:</strong> {submittedQuote.serviceRequired}</div>
                  <div><strong>Language Pair:</strong> {submittedQuote.sourceLanguage} → {submittedQuote.targetLanguage}</div>
                  <div><strong>Attached File:</strong> {submittedQuote.fileName} ({submittedQuote.fileSize})</div>
                </div>

                <button
                  type="button"
                  className="btn-yellow"
                  style={{ marginTop: 12 }}
                  onClick={handleResetForm}
                >
                  Submit Another Project
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                {/* Row 1: Name & Email */}
                <div className="form-grid-row">
                  <div className="form-field no-margin">
                    <label className="form-label" htmlFor="fullName">
                      Full Name <span className="req">*</span>
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      className={`form-input ${errors.fullName ? 'error' : ''}`}
                      placeholder="e.g. Dr. Rajesh Sharma"
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                    {errors.fullName && <span className="error-msg">{errors.fullName}</span>}
                  </div>

                  <div className="form-field no-margin">
                    <label className="form-label" htmlFor="email">
                      Email Address <span className="req">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className={`form-input ${errors.email ? 'error' : ''}`}
                      placeholder="e.g. name@company.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && <span className="error-msg">{errors.email}</span>}
                  </div>
                </div>

                {/* Row 2: Phone & Service */}
                <div className="form-grid-row">
                  <div className="form-field no-margin">
                    <label className="form-label" htmlFor="phoneNumber">
                      Phone Number <span className="req">*</span>
                    </label>
                    <input
                      id="phoneNumber"
                      name="phoneNumber"
                      type="tel"
                      className={`form-input ${errors.phoneNumber ? 'error' : ''}`}
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                    />
                    {errors.phoneNumber && <span className="error-msg">{errors.phoneNumber}</span>}
                  </div>

                  <div className="form-field no-margin">
                    <label className="form-label" htmlFor="serviceRequired">
                      Service Required <span className="req">*</span>
                    </label>
                    <select
                      id="serviceRequired"
                      name="serviceRequired"
                      className={`form-select ${errors.serviceRequired ? 'error' : ''}`}
                      value={formData.serviceRequired}
                      onChange={handleChange}
                    >
                      <option value="">-- Select Service --</option>
                      {servicesList.map((srv) => (
                        <option key={srv} value={srv}>
                          {srv}
                        </option>
                      ))}
                    </select>
                    {errors.serviceRequired && <span className="error-msg">{errors.serviceRequired}</span>}
                  </div>
                </div>

                {/* Row 3: Source & Target Language */}
                <div className="form-grid-row">
                  <div className="form-field no-margin">
                    <label className="form-label" htmlFor="sourceLanguage">
                      Source Language <span className="req">*</span>
                    </label>
                    <select
                      id="sourceLanguage"
                      name="sourceLanguage"
                      className={`form-select ${errors.sourceLanguage ? 'error' : ''}`}
                      value={formData.sourceLanguage}
                      onChange={handleChange}
                    >
                      {popularLanguages.map((lang) => (
                        <option key={lang} value={lang}>
                          {lang}
                        </option>
                      ))}
                    </select>
                    {errors.sourceLanguage && <span className="error-msg">{errors.sourceLanguage}</span>}
                  </div>

                  <div className="form-field no-margin">
                    <label className="form-label" htmlFor="targetLanguage">
                      Target Language <span className="req">*</span>
                    </label>
                    <select
                      id="targetLanguage"
                      name="targetLanguage"
                      className={`form-select ${errors.targetLanguage ? 'error' : ''}`}
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
                    {errors.targetLanguage && <span className="error-msg">{errors.targetLanguage}</span>}
                  </div>
                </div>

                {/* Project Description */}
                <div className="form-field">
                  <label className="form-label" htmlFor="projectDescription">
                    Project Description (Scope, word count, or deadlines)
                  </label>
                  <textarea
                    id="projectDescription"
                    name="projectDescription"
                    rows="3"
                    className="form-textarea"
                    placeholder="Briefly describe your requirements, expected deadline, or specific formatting needs..."
                    value={formData.projectDescription}
                    onChange={handleChange}
                  />
                </div>

                {/* Upload Document Field */}
                <div className="form-field">
                  <label className="form-label">
                    <span>Upload Document (Optional)</span>
                    <span style={{ fontSize: '0.72rem', color: '#64748b' }}>PDF, DOCX, XLSX, TXT (Max 25MB)</span>
                  </label>

                  <div
                    className={`file-upload-box ${dragActive ? 'drag-active' : ''}`}
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                    onClick={() => document.getElementById('docUploadInput').click()}
                  >
                    <input
                      id="docUploadInput"
                      type="file"
                      style={{ display: 'none' }}
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt,.zip"
                    />
                    <div className="file-upload-inner">
                      <UploadCloud className="upload-icon" size={32} />
                      <span className="upload-title">
                        {uploadedFile ? 'Click to replace document' : 'Drag & drop your files here, or browse'}
                      </span>
                      <span className="upload-hint">100% secure with enterprise-grade encryption</span>
                    </div>
                  </div>

                  {uploadedFile && (
                    <div style={{ textAlign: 'center' }}>
                      <span className="selected-file-pill">
                        <FileCheck size={14} />
                        <span>{uploadedFile.name} ({(uploadedFile.size / 1024).toFixed(1)} KB)</span>
                        <button
                          type="button"
                          className="file-remove-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            setUploadedFile(null);
                          }}
                          aria-label="Remove uploaded file"
                        >
                          <X size={14} />
                        </button>
                      </span>
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="btn-yellow"
                  style={{ width: '100%', padding: '14px', fontSize: '1.02rem' }}
                  disabled={isSubmitting}
                >
                  <Send size={18} />
                  <span>{isSubmitting ? 'Processing Request...' : 'Submit Request'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

