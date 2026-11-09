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
    description: 'Accurate translation of official documents, certificates, and technical materials.',
    features: ['Technical Manuals', 'Legal Documentation', 'Academic & Official Records', 'Multi-Format Delivery']
  },
  {
    id: 'corp-translation',
    title: 'Corporate Translation',
    category: 'translation',
    bgColor: '#0D9488', // Teal
    textColor: '#ffffff',
    iconName: 'Building2',
    description: 'Linguistic solutions for enterprise communication, contracts, reports, and presentations.',
    features: ['Business Agreements', 'Financial Reports', 'Marketing Collaterals', 'Internal Communications']
  },
  {
    id: 'localization',
    title: 'Language Localization',
    category: 'translation',
    bgColor: '#14B8A6', // Light Teal
    textColor: '#ffffff',
    iconName: 'Globe',
    description: 'Cultural and regional adaptation of websites, software interfaces, and marketing content.',
    features: ['Website Localization', 'Software UI/UX', 'Digital Marketing', 'Regional Nuance Alignment']
  },
  {
    id: 'bpo-solutions',
    title: 'Business Process Outsourcing',
    category: 'outsourcing',
    bgColor: '#0A2540', // Deep Navy
    textColor: '#ffffff',
    iconName: 'Workflow',
    description: 'Streamlined outsourcing solutions designed to optimize day-to-day enterprise operations.',
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
    description: 'Precise document translation maintaining context, formatting, and industry-specific terminology.',
    fullDescription: 'IBS provides comprehensive document translation services across official papers, standard operating procedures, manuals, and technical specifications, ensuring conceptual fidelity and structural consistency.',
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
    description: 'Professional translation tailored for enterprise communications, financial filings, and cross-border trade.',
    fullDescription: 'Our business translation services help companies bridge language gaps across multi-market operations. We translate internal policies, shareholder communications, business proposals, and compliance documentation.',
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
    description: 'Cultural and linguistic adaptation of software, websites, mobile applications, and digital media.',
    fullDescription: 'Localization goes beyond literal translation to adapt UI, idiomatic expressions, date/currency formats, and imagery to match regional expectations and cultural context.',
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
    description: 'Accurate audio and video transcription with time-stamping, speaker tagging, and clean formatting.',
    fullDescription: 'IBS transcribes recorded meetings, interviews, webinars, research recordings, and multimedia presentations into clearly formatted, searchable text files.',
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
    description: 'End-to-end linguistic assistance for customer correspondence, circulars, announcements, and newsletters.',
    fullDescription: 'Ensure your message resonates across diverse linguistic demographics with seamless communication solutions designed for customer engagement, public notifications, and stakeholder updates.',
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
    description: 'Careful translation of questionnaires, customer satisfaction surveys, and market research tools.',
    fullDescription: 'Our survey translation preserves metric validity, response scales, question clarity, and unbiased phrasing across diverse respondent groups.',
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
    description: 'Comprehensive business process management enabling enterprises to focus on their core competencies.',
    fullDescription: 'IBS provides end-to-end BPO solutions tailored to streamline organizational processes, lower overhead costs, and maintain high standards of service continuity.',
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
    description: 'Dedicated backend operational support for transaction logging, record updates, and workflow management.',
    fullDescription: 'Keep your organization running smoothly with reliable back-office support handling repetitive administrative tasks, ledger entries, document collation, and file maintenance.',
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
    description: 'Professional virtual and administrative assistance for scheduling, documentation, and coordination.',
    fullDescription: 'Our administrative assistance enables executives and teams to delegate routine organizational workflows, document preparation, correspondence drafting, and scheduling.',
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
    description: 'Systematic data extraction, entry, cleansing, normalization, and preparation for analysis.',
    fullDescription: 'Transform raw data into structured, validated formats. IBS handles large volumes of digital and physical forms, invoices, logs, and database entries with rigorous error checks.',
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
    description: 'Hands-on operational support to manage workload spikes, project logistics, and service fulfillment.',
    fullDescription: 'When internal capacity faces peak demand, IBS provides agile operational support teams to bridge resource gaps and keep projects delivered on schedule.',
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
    description: 'Custom-tailored outsourcing models built around your exact operational workflows and industry needs.',
    fullDescription: 'Every enterprise has unique operational requirements. IBS collaborates with you to design a customized operational model combining language capabilities with specialized outsourcing support.',
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
