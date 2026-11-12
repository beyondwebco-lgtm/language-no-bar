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

// Specialized Language, Media, AI & Research Services (Completing the 13 Website Menu Offerings)
export const SPECIALIZED_LANGUAGE_SERVICES = [
  {
    id: 'interpretation',
    title: 'Interpretation',
    tag: 'Live Language Support',
    description: 'Professional consecutive, simultaneous, and remote interpretation services for corporate meetings, conferences, and consultations.',
    fullDescription: 'IBS provides structured interpretation solutions tailored for business negotiations, executive briefings, legal consultations, and multilingual events. Based in Hyderabad, we help organizations communicate seamlessly across languages in real time.',
    useCases: [
      'Board meetings, client negotiations & corporate briefings',
      'Remote video & over-the-phone interpretation (VRI / OPI)',
      'Seminars, workshops, training sessions & trade delegations',
      'Medical, legal & technical consultation assistance'
    ],
    iconName: 'Headphones',
    languages: ['Hindi', 'English', 'Telugu', 'French', 'Spanish', 'German', 'Arabic', 'Japanese', 'Chinese'],
    deliverables: [
      'Consecutive & simultaneous interpretation support',
      'Remote video & telephonic interpreting coordination',
      'Pre-session terminology & briefing preparation',
      'Confidentiality-bound live communication support'
    ],
    qualityStandard: 'Real-Time Clarity & Cultural Neutrality'
  },
  {
    id: 'subtitling-dubbing',
    title: 'Subtitling & Dubbing',
    tag: 'Multimedia Localization',
    description: 'Synchronized multilingual subtitling, closed captioning, voiceover, and dubbing for corporate videos and e-learning.',
    fullDescription: 'Expand the reach of your video content with accurate subtitling, time-coded captions, and natural voiceover/dubbing. IBS adapts corporate training modules, marketing videos, and informational media for regional and international audiences.',
    useCases: [
      'Corporate training videos & employee onboarding modules',
      'Product demos, explainer videos & promotional campaigns',
      'Multilingual YouTube, webinar & documentary subtitling',
      'Accessible closed captions (SDH) in SRT, VTT & ASS formats'
    ],
    iconName: 'Film',
    languages: ['Hindi', 'English', 'Telugu', 'French', 'Spanish', 'German', 'Arabic', 'Japanese', 'Chinese'],
    deliverables: [
      'Time-synced multilingual subtitle files (SRT, VTT)',
      'Burned-in / open caption video rendering support',
      'Script adaptation for voiceover & dubbing sync',
      'Reading-speed & frame-accurate QA checks'
    ],
    qualityStandard: 'Frame-Accurate Sync & Natural Pacing'
  },
  {
    id: 'multilingual-dtp',
    title: 'Multilingual DTP',
    tag: 'Desktop Publishing',
    description: 'Layout adaptation, typesetting, and print-ready formatting across left-to-right and right-to-left scripts.',
    fullDescription: 'Translated content often expands or contracts and requires careful visual formatting. IBS delivers multilingual desktop publishing (DTP) to ensure brochures, manuals, catalogs, and presentations retain publication-grade design across every script.',
    useCases: [
      'Product catalogs, corporate brochures & marketing flyers',
      'Technical user manuals, safety guides & instructional booklets',
      'Right-to-left (RTL) Arabic layout mirroring & typography',
      'Multi-language corporate slide decks & annual reports'
    ],
    iconName: 'Layout',
    languages: ['Hindi', 'English', 'Arabic', 'Japanese', 'Chinese', 'French', 'German', 'Spanish', 'Marathi', 'Gujarati'],
    deliverables: [
      'Print-ready PDFs & editable source layout files',
      'Font localization & script-specific typography',
      'RTL (Arabic) formatting & graphic text localization',
      'Visual layout & pagination verification'
    ],
    qualityStandard: 'Publication-Grade Visual & Script Fidelity'
  },
  {
    id: 'linguistic-qa',
    title: 'Linguistic QA',
    tag: 'Quality Assurance',
    description: 'Independent bilingual review, proofreading, terminology verification, and UI/UX linguistic testing.',
    fullDescription: 'Before publishing critical documents, software interfaces, or marketing campaigns, IBS performs dedicated Linguistic Quality Assurance (LQA) to catch contextual errors, terminology drift, truncation, and formatting inconsistencies.',
    useCases: [
      'In-context software, web & mobile app UI linguistic testing',
      'Third-party translation audit & bilingual proofreading',
      'Glossary & brand style-guide compliance verification',
      'Pre-print sign-off for regulated & corporate materials'
    ],
    iconName: 'ShieldCheck',
    languages: ['Hindi', 'English', 'French', 'Spanish', 'German', 'Arabic', 'Japanese', 'Chinese', 'Marathi', 'Gujarati'],
    deliverables: [
      'Annotated linguistic QA reports & error logs',
      'Terminology consistency & glossary alignment',
      'In-context UI/UX screenshot & layout review',
      'Final proofread & publication-ready sign-off'
    ],
    qualityStandard: 'Zero-Defect Bilingual & Contextual Verification'
  },
  {
    id: 'back-translation',
    title: 'Back Translation',
    tag: 'Verification & Compliance',
    description: 'Independent re-translation back into the source language to verify conceptual equivalence for sensitive content.',
    fullDescription: 'For clinical, legal, regulatory, and market research questionnaires where exact meaning is critical, IBS provides independent blind back translation followed by side-by-side reconciliation to confirm zero semantic drift.',
    useCases: [
      'Clinical trial consent forms & healthcare patient questionnaires',
      'Market research surveys & psychometric assessment tools',
      'High-stakes legal clauses & compliance disclosures',
      'Cross-cultural validation & reconciliation reporting'
    ],
    iconName: 'Repeat',
    languages: ['Hindi', 'English', 'Telugu', 'Marathi', 'Gujarati', 'French', 'Spanish', 'German', 'Arabic'],
    deliverables: [
      'Blind independent back-translated documents',
      'Source vs. back-translation reconciliation matrix',
      'Discrepancy analysis & resolution notes',
      'Final validated target-language deliverables'
    ],
    qualityStandard: 'Independent Blind Verification & Semantic Integrity'
  },
  {
    id: 'content-copywriting',
    title: 'Content & Copywriting',
    tag: 'Creative & Corporate',
    description: 'Original corporate copywriting, multilingual content creation, and brand transcreation tailored to target audiences.',
    fullDescription: 'Beyond translating existing files, IBS supports businesses with clear corporate writing, website copy, product descriptions, and culturally adapted transcreation designed to engage audiences in India and international markets.',
    useCases: [
      'Corporate website pages, service brochures & company profiles',
      'SEO-friendly business articles, blogs & thought-leadership pieces',
      'Marketing taglines & campaign transcreation across regions',
      'Product descriptions, newsletters & internal communications'
    ],
    iconName: 'PenTool',
    languages: ['English', 'Hindi', 'Telugu', 'Regional & Global Support'],
    deliverables: [
      'Brand-aligned corporate & web copy',
      'Transcreated marketing & campaign messaging',
      'Structured editorial review & proofreading',
      'Audience-tailored tone and terminology'
    ],
    qualityStandard: 'Brand Voice Consistency & Editorial Precision'
  },
  {
    id: 'ai-language-solutions',
    title: 'AI Language Solutions',
    tag: 'Human-in-the-Loop AI',
    description: 'AI-assisted translation workflows paired with expert human post-editing (MTPE) for scalable enterprise efficiency.',
    fullDescription: 'Combine modern language technology with human linguistic oversight. IBS offers structured Machine Translation Post-Editing (MTPE), AI output evaluation, and hybrid workflows that balance speed, cost-efficiency, and contextual accuracy.',
    useCases: [
      'Light and full Machine Translation Post-Editing (MTPE)',
      'High-volume e-commerce catalog & knowledge-base localization',
      'AI-generated content review, fact-checking & tone polishing',
      'Custom prompt & terminology guideline alignment'
    ],
    iconName: 'Cpu',
    languages: ['Hindi', 'English', 'French', 'Spanish', 'German', 'Arabic', 'Japanese', 'Chinese'],
    deliverables: [
      'Human-reviewed post-edited target content',
      'AI translation quality evaluation & scoring',
      'Terminology & style consistency enforcement',
      'Scalable turnaround for high-volume workflows'
    ],
    qualityStandard: 'Human-in-the-Loop Accuracy & Scalable Delivery'
  },
  {
    id: 'language-data',
    title: 'Language Data',
    tag: 'AI & NLP Datasets',
    description: 'Multilingual text, speech, and annotation datasets supporting NLP, voice AI, and machine learning initiatives.',
    fullDescription: 'High-performing language models and speech systems rely on clean, well-structured data. IBS provides multilingual data collection, transcription, labeling, and linguistic annotation services with strict confidentiality and quality controls.',
    useCases: [
      'Multilingual text & speech corpus collection',
      'Named Entity Recognition (NER), sentiment & intent tagging',
      'ASR (Automatic Speech Recognition) audio transcription & validation',
      'Evaluation datasets for regional Indian & global languages'
    ],
    iconName: 'Database',
    languages: ['English', 'Hindi', 'Telugu', 'Marathi', 'Gujarati', 'Tamil', 'Kannada', 'Global Languages'],
    deliverables: [
      'Structured JSON, CSV, or XML annotated datasets',
      'Speaker-verified audio & phonetic transcripts',
      'Inter-annotator agreement & quality audits',
      'Secure data handling & NDA compliance'
    ],
    qualityStandard: 'Structured Annotation Hygiene & Data Privacy'
  },
  {
    id: 'market-research',
    title: 'Market Research',
    tag: 'Research & Insights',
    description: 'End-to-end multilingual market research support, survey localization, open-end coding, and insights compilation.',
    fullDescription: 'IBS supports research agencies and corporate strategy teams with multilingual survey translation, respondent transcript coding, and secondary research data processing across diverse Indian and international demographics.',
    useCases: [
      'Multilingual questionnaire localization & scale validation',
      'Verbatim open-ended survey response translation & coding',
      'Focus group & in-depth interview (IDI) transcription',
      'Secondary market data compilation & structured reporting'
    ],
    iconName: 'BarChart3',
    languages: ['English', 'Hindi', 'Telugu', 'Marathi', 'Gujarati', 'French', 'German', 'Spanish'],
    deliverables: [
      'Localized survey instruments & screeners',
      'Translated & categorized verbatim response sheets',
      'Cleaned research datasets ready for analysis',
      'Confidentiality-assured research handling'
    ],
    qualityStandard: 'Unbiased Phrasing & Metric Integrity'
  }
];

// Combined list for general explorer / modals
export const ALL_SERVICES = [
  ...TRANSLATION_SERVICES,
  ...SPECIALIZED_LANGUAGE_SERVICES,
  ...OUTSOURCING_SERVICES
];

// Exact 13-item Suggested Website Menu for Navbar & Navigation
export const WEBSITE_MENU_SERVICES = [
  {
    menuLabel: 'Translation',
    category: 'Language Core',
    serviceId: 'doc-translation',
    quoteValue: 'Document Translation'
  },
  {
    menuLabel: 'Localization',
    category: 'Language Core',
    serviceId: 'localization',
    quoteValue: 'Language Localization'
  },
  {
    menuLabel: 'Interpretation',
    category: 'Language Core',
    serviceId: 'interpretation',
    quoteValue: 'Interpretation'
  },
  {
    menuLabel: 'Transcription',
    category: 'Media & Audio',
    serviceId: 'transcription',
    quoteValue: 'Audio & Video Transcription'
  },
  {
    menuLabel: 'Subtitling & Dubbing',
    category: 'Media & Audio',
    serviceId: 'subtitling-dubbing',
    quoteValue: 'Subtitling & Dubbing'
  },
  {
    menuLabel: 'Multilingual DTP',
    category: 'Design & QA',
    serviceId: 'multilingual-dtp',
    quoteValue: 'Multilingual DTP'
  },
  {
    menuLabel: 'Linguistic QA',
    category: 'Design & QA',
    serviceId: 'linguistic-qa',
    quoteValue: 'Linguistic QA'
  },
  {
    menuLabel: 'Back Translation',
    category: 'Design & QA',
    serviceId: 'back-translation',
    quoteValue: 'Back Translation'
  },
  {
    menuLabel: 'Content & Copywriting',
    category: 'Content & Insights',
    serviceId: 'content-copywriting',
    quoteValue: 'Content & Copywriting'
  },
  {
    menuLabel: 'AI Language Solutions',
    category: 'AI & Data',
    serviceId: 'ai-language-solutions',
    quoteValue: 'AI Language Solutions'
  },
  {
    menuLabel: 'Language Data',
    category: 'AI & Data',
    serviceId: 'language-data',
    quoteValue: 'Language Data'
  },
  {
    menuLabel: 'Market Research',
    category: 'Content & Insights',
    serviceId: 'market-research',
    quoteValue: 'Market Research'
  },
  {
    menuLabel: 'BPO & Outsourcing',
    category: 'Outsourcing',
    serviceId: 'bpo-support',
    quoteValue: 'Business Process Outsourcing (BPO)'
  }
];
