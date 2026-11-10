/**
 * IBS - Innovative Business Solutions
 * Services Data: Language Translation Services & Business Outsourcing Solutions
 *
 * Subservices are presented as proposed offerings subject to final confirmation by IBS.
 */

// Top category quick highlights
export const CATEGORY_SERVICES = [
  {
    id: 'doc-translation',
    title: 'Document Translation',
    category: 'translation',
    bgColor: '#0B2545', // Navy
    textColor: '#ffffff',
    iconName: 'FileText',
    description: 'Accurate translation of official documents, legal agreements, corporate records, and technical materials.',
    features: ['Technical Manuals', 'Legal Documentation', 'Academic & Official Records', 'Multi-Format Delivery']
  },
  {
    id: 'corp-translation',
    title: 'Corporate Translation',
    category: 'translation',
    bgColor: '#0D9488', // Teal
    textColor: '#ffffff',
    iconName: 'Building2',
    description: 'Linguistic solutions for enterprise communication, contracts, compliance filings, and presentations.',
    features: ['Business Agreements', 'Financial Reports', 'Marketing Collaterals', 'Internal Communications']
  },
  {
    id: 'localization',
    title: 'Language Localization',
    category: 'translation',
    bgColor: '#14B8A6', // Light Teal
    textColor: '#ffffff',
    iconName: 'Globe',
    description: 'Cultural and regional adaptation of websites, software interfaces, mobile apps, and digital platforms.',
    features: ['Website Localization', 'Software UI/UX', 'Digital Marketing', 'Regional Nuance Alignment']
  },
  {
    id: 'bpo-solutions',
    title: 'Business Process Outsourcing',
    category: 'outsourcing',
    bgColor: '#0A2540', // Deep Navy
    textColor: '#ffffff',
    iconName: 'Workflow',
    description: 'Streamlined BPO services designed to optimize enterprise operations and day-to-day workflow management.',
    features: ['Process Optimization', 'Customer Support Operations', 'Vendor Coordination', 'Performance SLA Tracking']
  },
  {
    id: 'back-office',
    title: 'Back-Office Support',
    category: 'outsourcing',
    bgColor: '#0F766E', // Deep Teal
    textColor: '#ffffff',
    iconName: 'Layers',
    description: 'Reliable backend administration, record keeping, order processing, and account maintenance.',
    features: ['Order & Invoice Processing', 'Database Maintenance', 'Record Verification', 'Workflow Continuity']
  },
  {
    id: 'data-processing',
    title: 'Data Processing',
    category: 'outsourcing',
    bgColor: '#1E3A5F', // Slate Navy
    textColor: '#ffffff',
    iconName: 'Database',
    description: 'Accurate data entry, classification, digitization, validation, and analytics preparation.',
    features: ['Data Entry & Cleansing', 'Document Digitization', 'Form Processing', 'Quality Verification']
  }
];

// Language Translation Services (6 Services)
export const TRANSLATION_SERVICES = [
  {
    id: 'doc-translation',
    title: 'Document Translation',
    tag: 'Translation Service',
    description: 'Professional document translation services in Hyderabad maintaining contextual fidelity, formatting, and industry terminology.',
    fullDescription: 'IBS provides comprehensive document translation services across official documents, standard operating procedures, user manuals, and technical specifications. Based in Hyderabad, we support enterprises across India with conceptual precision, structural consistency, and format-preserved deliveries.',
    useCases: [
      'Legal contracts, court documents & non-disclosure agreements (NDAs)',
      'Engineering blueprints, user manuals & technical operating procedures',
      'Corporate annual reports, regulatory compliance & audit filings',
      'Academic transcripts, official certifications & immigration records'
    ],
    iconName: 'FileText',
    languages: ['Hindi', 'English', 'French', 'Spanish', 'German', 'Arabic', 'Japanese', 'Chinese', 'Marathi', 'Gujarati'],
    deliverables: [
      'Technical manuals, user guides & specifications',
      'Corporate reports, contracts & agreements',
      'Academic certificates & personal records',
      'Format-preserved ready-to-use deliveries'
    ],
    qualityStandard: 'Contextual Accuracy & Multi-Tier Review'
  },
  {
    id: 'corp-translation',
    title: 'Business & Corporate Translation',
    tag: 'Corporate Solutions',
    description: 'Enterprise language translation services tailored for commercial contracts, financial disclosures, and cross-border trade.',
    fullDescription: 'Our business translation services help companies bridge language gaps across multi-market operations. Operating from Kondapur, Hyderabad, IBS translates corporate governance policies, shareholder communications, business proposals, and compliance documentation with confidentiality.',
    useCases: [
      'Cross-border commercial agreements & partnership memorandums',
      'Investor decks, balance sheets & financial auditor disclosures',
      'Corporate governance policies, codes of conduct & HR handbooks',
      'International trade documents, import/export filings & invoices'
    ],
    iconName: 'Briefcase',
    languages: ['Hindi', 'English', 'French', 'Spanish', 'German', 'Arabic', 'Japanese', 'Chinese', 'Marathi', 'Gujarati'],
    deliverables: [
      'Commercial agreements & non-disclosure documentation',
      'Investor decks, annual statements & financial disclosures',
      'Corporate governance policies & employee handbooks',
      'Cross-border trade communications'
    ],
    qualityStandard: 'Strict Business Confidentiality & Professional Tone'
  },
  {
    id: 'localization',
    title: 'Language Localization',
    tag: 'Digital Adaptation',
    description: 'Website localization and cultural adaptation of software UI, mobile applications, and digital marketing assets.',
    fullDescription: 'Language localization goes beyond literal translation to adapt user interfaces, idiomatic expressions, date and currency formats, and imagery to match regional expectations. IBS assists technology startups and enterprises in Hyderabad and across India to connect genuinely with target demographics.',
    useCases: [
      'Corporate website & e-commerce portal multilingual localization',
      'SaaS platform, mobile app & enterprise software UI string localization',
      'E-Learning modules, employee training & instructional media',
      'Digital marketing campaigns, social media ads & regional landing pages'
    ],
    iconName: 'Globe',
    languages: ['Hindi', 'English', 'French', 'Spanish', 'German', 'Arabic', 'Japanese', 'Chinese', 'Marathi', 'Gujarati'],
    deliverables: [
      'Website & web portal localization',
      'Software & mobile application UI strings',
      'E-Learning & training multimedia modules',
      'Cultural appropriateness and UI layout checks'
    ],
    qualityStandard: 'Cultural Authenticity & Visual Integrity'
  },
  {
    id: 'transcription',
    title: 'Audio & Video Transcription',
    tag: 'Media & Audio',
    description: 'Accurate audio and video transcription services with precise time-stamping, speaker tagging, and clean formatting.',
    fullDescription: 'IBS transcribes recorded corporate meetings, executive interviews, webinars, research focus groups, and multimedia presentations into clearly formatted, searchable text files. Our Hyderabad team delivers clean verbatim or intelligent verbatim transcripts with timestamp fidelity.',
    useCases: [
      'Executive board meetings, shareholder calls & quarterly webinars',
      'Market research focus group discussions & academic research interviews',
      'Video subtitle creation (SRT, VTT) for corporate training and marketing',
      'Legal depositions, arbitration hearings & audio evidence documentation'
    ],
    iconName: 'Mic',
    languages: ['Hindi', 'English', 'French', 'Spanish', 'German', 'Arabic', 'Japanese', 'Chinese', 'Marathi', 'Gujarati'],
    deliverables: [
      'Corporate meetings, conferences & webinar transcripts',
      'Focus group recordings & academic interview notes',
      'Timecoded subtitle scripts (SRT, VTT, DOCX)',
      'Intelligent verbatim and verbatim transcription options'
    ],
    qualityStandard: 'Precise Listening & Timestamp Fidelity'
  },
  {
    id: 'multilingual-comm',
    title: 'Multilingual Communication',
    tag: 'Omnichannel Language',
    description: 'Linguistic assistance for customer correspondence, public circulars, announcements, and stakeholder newsletters.',
    fullDescription: 'Ensure your message resonates across diverse linguistic demographics with seamless multilingual communication solutions. IBS assists organizations in crafting clear customer engagement messages, regional notifications, and public stakeholder updates.',
    useCases: [
      'Omnichannel customer support email templates & messaging guidelines',
      'Public announcements, government circulars & press releases',
      'Multilingual newsletters, email bulletins & company newsletters',
      'Regional customer service documentation & localized FAQs'
    ],
    iconName: 'MessageSquare',
    languages: ['Hindi', 'English', 'French', 'Spanish', 'German', 'Arabic', 'Japanese', 'Chinese', 'Marathi', 'Gujarati'],
    deliverables: [
      'Customer correspondence & email support messaging',
      'Public announcements, press releases & circulars',
      'Multilingual newsletters & promotional bulletins',
      'Regional marketing communication adaptation'
    ],
    qualityStandard: 'Clear, Engaging & Culturally Responsive Delivery'
  },
  {
    id: 'survey-translation',
    title: 'Survey Translation',
    tag: 'Research & Insights',
    description: 'Precise translation of questionnaires, customer satisfaction surveys, and market research tools preserving scale metrics.',
    fullDescription: 'Our survey translation preserves metric validity, Likert response scales, question clarity, and unbiased phrasing across diverse respondent groups. IBS supports consumer research agencies, HR consultancies, and enterprises in conducting multilingual studies across India.',
    useCases: [
      'Customer satisfaction (CSAT) & Net Promoter Score (NPS) surveys',
      'Employee engagement questionnaires & workplace evaluation forms',
      'Demographic screeners & cross-regional consumer market studies',
      'Academic research questionnaires & psychometric evaluation forms'
    ],
    iconName: 'ClipboardList',
    languages: ['Hindi', 'English', 'French', 'Spanish', 'German', 'Arabic', 'Japanese', 'Chinese', 'Marathi', 'Gujarati'],
    deliverables: [
      'Customer satisfaction (CSAT) & feedback surveys',
      'Employee engagement & workplace evaluation forms',
      'Market research questionnaires & demographic screeners',
      'Questionnaire validation review'
    ],
    qualityStandard: 'Question Scale Preservation & Bias Prevention'
  }
];

// Business Outsourcing Solutions (6 Services)
export const OUTSOURCING_SERVICES = [
  {
    id: 'bpo-support',
    title: 'Business Process Outsourcing',
    tag: 'BPO Solutions',
    description: 'Comprehensive BPO services in Hyderabad enabling organizations to streamline operations and reduce overhead.',
    fullDescription: 'IBS delivers dependable business process outsourcing (BPO) solutions tailored to optimize enterprise operations, control administrative costs, and maintain high standards of service continuity. Headquartered in Kondapur, Hyderabad, we support growing enterprises with structured SLA-driven workflows.',
    useCases: [
      'End-to-end business process workflow mapping & outsourced task execution',
      'Customer support operations & multichannel ticketing management',
      'Vendor coordination, purchase order tracking & billing reconciliation',
      'Operational service level agreement (SLA) monitoring and reporting'
    ],
    iconName: 'Workflow',
    languages: ['English', 'Hindi', 'Regional Support'],
    deliverables: [
      'Process flow mapping & task execution',
      'Vendor coordination & operational tracking',
      'SLA-driven quality management',
      'Scalable resource allocation'
    ],
    qualityStandard: 'Standardized Operating Procedures & Metric Reporting'
  },
  {
    id: 'back-office',
    title: 'Back-Office Support',
    tag: 'Operations',
    description: 'Reliable back-office outsourcing services for transaction logging, record updates, and administrative workflow management.',
    fullDescription: 'Keep your organization running smoothly with reliable back-office support handling repetitive administrative tasks, ledger entries, document collation, and file maintenance. IBS provides dedicated teams in Hyderabad to maintain workflow continuity and data hygiene.',
    useCases: [
      'Sales order entry, transaction validation & invoice reconciliation',
      'Customer database updates & CRM data hygiene maintenance',
      'Inventory tracking, fulfillment coordination & shipment logging',
      'Routine administrative bookkeeping & compliance documentation'
    ],
    iconName: 'Layers',
    languages: ['English', 'Hindi', 'Regional Support'],
    deliverables: [
      'Order entry, transaction verification & billing coordination',
      'Customer record updates & CRM data hygiene',
      'Inventory tracking & order fulfillment assistance',
      'Daily operational reporting'
    ],
    qualityStandard: 'Zero-Disruption Operational Reliability'
  },
  {
    id: 'administrative-support',
    title: 'Administrative Support',
    tag: 'Office Administration',
    description: 'Professional virtual and administrative support services for scheduling, correspondence, and team coordination.',
    fullDescription: 'Our administrative assistance enables executives and teams to delegate routine organizational workflows, document preparation, correspondence drafting, and scheduling. IBS provides dedicated administrative resources so leadership can focus on core strategic priorities.',
    useCases: [
      'Executive calendar coordination, meeting scheduling & appointment setting',
      'Corporate document formatting, presentation proofing & digital filing',
      'Email triage, inbox management & structured customer correspondence',
      'Meeting minutes documentation, action item tracking & team follow-ups'
    ],
    iconName: 'FileCheck',
    languages: ['English', 'Hindi', 'Regional Support'],
    deliverables: [
      'Executive scheduling & calendar coordination',
      'Documentation formatting, filing & proofing',
      'Email triage & structured correspondence handling',
      'Meeting minutes documentation & action tracking'
    ],
    qualityStandard: 'Timely, Meticulous & Confidential Execution'
  },
  {
    id: 'data-processing',
    title: 'Data Processing',
    tag: 'Data Management',
    description: 'High-accuracy data processing services including extraction, entry, cleansing, normalization, and validation.',
    fullDescription: 'Transform raw business data into structured, validated digital assets. IBS handles large volumes of paper and electronic forms, invoices, logs, and database entries with rigorous error checks, strict confidentiality, and systematic verification in Hyderabad.',
    useCases: [
      'Multi-format high-volume data entry from forms, PDFs, scans & sheets',
      'Database deduplication, cleansing, normalization & validation',
      'Invoice, receipt & purchase order digitization with automated checks',
      'Structured catalog updates & product information management (PIM)'
    ],
    iconName: 'Database',
    languages: ['English', 'Hindi', 'Regional Support'],
    deliverables: [
      'High-accuracy data entry from multiple source formats',
      'Data verification, deduplication & normalization',
      'Form digitizing & automated field validation',
      'Secure data transfers with strict privacy controls'
    ],
    qualityStandard: 'Systematic Double-Entry Verification & Integrity Checks'
  },
  {
    id: 'operational-assistance',
    title: 'Operational Assistance',
    tag: 'Business Continuity',
    description: 'Agile operational support teams in Hyderabad to manage workload spikes, project logistics, and service fulfillment.',
    fullDescription: 'When internal capacity encounters peak demand or special project surges, IBS provides agile operational support teams to bridge resource gaps, handle project logistics, and keep deliverables on schedule with high accountability.',
    useCases: [
      'Peak season operational overflow handling & surge task management',
      'Project logistics coordination, tracking & cross-team follow-up',
      'Digital document archiving, indexing & record cataloging',
      'Routine operational audit preparation & process documentation'
    ],
    iconName: 'CheckCircle2',
    languages: ['English', 'Hindi', 'Regional Support'],
    deliverables: [
      'Peak-season operational overflow handling',
      'Project logistics & cross-team task follow-up',
      'Document indexing & digital archiving',
      'Continuous milestone reporting'
    ],
    qualityStandard: 'Flexible Resource Scaling & SLA Adherence'
  },
  {
    id: 'customized-outsourcing',
    title: 'Customized Outsourcing Solutions',
    tag: 'Bespoke Services',
    description: 'Bespoke business outsourcing solutions in India combining language capabilities with tailored back-office operations.',
    fullDescription: 'Every enterprise has unique operational challenges. IBS collaborates with you to design a customized operational model combining multilingual language capabilities with specialized outsourcing support, dedicated management, and flexible scaling.',
    useCases: [
      'Hybrid language translation + back-office operational teams',
      'Custom workflow architecture designed around proprietary software',
      'Dedicated offshore support pods for international SME clients',
      'Continuous process review, KPI reporting & efficiency optimization'
    ],
    iconName: 'Settings',
    languages: ['English', 'Hindi', 'Regional Support'],
    deliverables: [
      'Bespoke workflow architecture and staffing',
      'Hybrid language translation + back-office bundles',
      'Customized milestone checkpoints and KPI dashboards',
      'Continuous operational optimization reviews'
    ],
    qualityStandard: 'Tailored Client Workflows & Dedicated Oversight'
  }
];

// Combined list for general explorer / modals
export const ALL_SERVICES = [...TRANSLATION_SERVICES, ...OUTSOURCING_SERVICES];
