export const CATEGORY_SERVICES = [
  {
    id: 'translation',
    title: 'Translation Services',
    bgColor: '#FFB900', // Yellow
    textColor: '#1e293b',
    iconName: 'Languages',
    description: 'Accurate human translation by certified native linguists in over 150 global and Indian languages.',
    features: ['Document Translation', 'Legal & Technical Contracts', 'Certified Official Translation', 'Fast Turnaround']
  },
  {
    id: 'localization',
    title: 'Localization Services',
    bgColor: '#0755A5', // Blue
    textColor: '#ffffff',
    iconName: 'Globe',
    description: 'Cultural and linguistic adaptation of software, websites, mobile applications, and digital media.',
    features: ['Website Localization', 'Software & App UI/UX', 'E-Learning Modules', 'Cultural Nuance Review']
  },
  {
    id: 'life-sciences',
    title: 'Life Sciences Services',
    bgColor: '#EA580C', // Orange
    textColor: '#ffffff',
    iconName: 'Activity',
    description: 'Specialized medical, clinical trial, pharmaceutical, and regulatory translations complying with ISO 17100.',
    features: ['Clinical Trial Protocols', 'Informed Consent Forms (ICF)', 'SmPC & Drug Leaflets', 'Medical Device Manuals']
  },
  {
    id: 'transcription',
    title: 'Transcription Services',
    bgColor: '#0D9488', // Teal
    textColor: '#ffffff',
    iconName: 'FileAudio',
    description: 'Precise audio and video transcription with time-stamping, speaker diarization, and multi-format output.',
    features: ['Audio & Video Transcription', 'Medical & Legal Transcripts', 'Multi-Speaker Identification', 'Subtitling & Captioning']
  },
  {
    id: 'testing',
    title: 'Testing Services',
    bgColor: '#DC2626', // Red
    textColor: '#ffffff',
    iconName: 'CheckCircle2',
    description: 'Rigorous linguistic and functional QA testing to ensure zero truncation, proper text direction, and UX fidelity.',
    features: ['Linguistic Quality Assurance (LQA)', 'Pseudo-Localization Testing', 'Font & Layout Verification', 'Cross-Platform Testing']
  },
  {
    id: 'dtp',
    title: 'Multilingual DTP',
    bgColor: '#16A34A', // Green
    textColor: '#ffffff',
    iconName: 'LayoutTemplate',
    description: 'Desktop publishing ensuring right-to-left scripts, bi-directional text, and graphic formatting in InDesign & Illustrator.',
    features: ['InDesign / Illustrator / FrameMaker', 'RTL Layout (Arabic, Hebrew)', 'Complex Indian Scripts', 'Print-Ready Formats']
  }
];

export const MAIN_SERVICES = [
  {
    id: 'pharma-translation',
    title: 'Pharma Translation',
    tag: 'Medical & Life Sciences',
    description: 'Professional pharmaceutical and medical translation services in multiple languages.',
    fullDescription: 'Our certified medical linguists and PhD subject-matter experts deliver error-free translations for clinical research organizations, pharma giants, and medical device manufacturers adhering to ISO 17100 and HIPAA compliance guidelines.',
    iconName: 'Pill',
    languages: ['Hindi', 'French', 'Marathi', 'Gujarati', 'Spanish', 'Arabic'],
    deliverables: [
      'Clinical Study Reports & Protocols',
      'Patient Information Leaflets (PIL)',
      'Regulatory submissions (FDA, EMA, CDSCO)',
      'Pharmacovigilance & Adverse Event Reports'
    ],
    qualityStandard: 'ISO 17100 & ISO 9001 Certified Double-Blind Review'
  },
  {
    id: 'transcription-service',
    title: 'Transcription',
    tag: 'Audio & Video Intelligence',
    description: 'Accurate audio and video transcription services in multiple languages.',
    fullDescription: 'We provide human-crafted, verbatim and intelligent verbatim transcripts for corporate meetings, academic research, focus groups, legal depositions, and media productions with accurate timecodes.',
    iconName: 'Mic',
    languages: ['Hindi', 'French', 'Marathi', 'Gujarati', 'Spanish', 'Arabic'],
    deliverables: [
      'Interviews & Focus Group Discussions',
      'Legal Depositions & Court Hearings',
      'Medical Audio Dictation & Telemedicine',
      'Multilingual Timecoded Subtitles (SRT/VTT)'
    ],
    qualityStandard: '99.5%+ Verbatim Accuracy Guarantee'
  },
  {
    id: 'survey-translation',
    title: 'Survey Translation',
    tag: 'Market Research & Insights',
    description: 'Professional survey and questionnaire translation for global audiences.',
    fullDescription: 'Cross-cultural market research translations that preserve survey validity, question tone, and answer scales across demographics. Supported with back-translation and cognitive debriefing.',
    iconName: 'ClipboardList',
    languages: ['Hindi', 'French', 'Marathi', 'Gujarati', 'Spanish', 'Arabic'],
    deliverables: [
      'Customer Satisfaction (CSAT) Questionnaires',
      'Employee Engagement Surveys',
      'Cross-Border Market Feasibility Surveys',
      'Online Survey Platform Programming (Confirmit, Qualtrics)'
    ],
    qualityStandard: 'Native Cultural Localization & Back-Translation'
  }
];

