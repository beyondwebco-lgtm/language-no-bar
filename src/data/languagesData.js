export const FEATURED_LANGUAGE_PAIRS = [
  {
    id: 'de-en',
    pair: 'German ↔ English',
    source: 'German',
    target: 'English',
    nativeSource: 'Deutsch',
    flagA: '🇩🇪',
    flagB: '🇬🇧',
    speakers: '135M+ Speakers',
    region: 'European',
    popularUse: 'Automotive, Engineering, Legal & Financial Documents'
  },
  {
    id: 'hi-en',
    pair: 'Hindi ↔ English',
    source: 'Hindi',
    target: 'English',
    nativeSource: 'हिन्दी',
    flagA: '🇮🇳',
    flagB: '🇬🇧',
    speakers: '600M+ Speakers',
    region: 'Indian Languages',
    popularUse: 'Government, FMCG, Banking, Healthcare & Media'
  },
  {
    id: 'fr-en',
    pair: 'French ↔ English',
    source: 'French',
    target: 'English',
    nativeSource: 'Français',
    flagA: '🇫🇷',
    flagB: '🇬🇧',
    speakers: '300M+ Speakers',
    region: 'European',
    popularUse: 'Luxury Goods, Life Sciences, Aerospace & Tourism'
  },
  {
    id: 'es-en',
    pair: 'Spanish ↔ English',
    source: 'Spanish',
    target: 'English',
    nativeSource: 'Español',
    flagA: '🇪🇸',
    flagB: '🇬🇧',
    speakers: '550M+ Speakers',
    region: 'European / Americas',
    popularUse: 'E-commerce, Clinical Research, Legal & Tech'
  },
  {
    id: 'ar-en',
    pair: 'Arabic ↔ English',
    source: 'Arabic',
    target: 'English',
    nativeSource: 'العربية',
    flagA: '🇸🇦',
    flagB: '🇬🇧',
    speakers: '420M+ Speakers',
    region: 'Middle Eastern',
    popularUse: 'Energy, Oil & Gas, Construction, DTP & Finance'
  },
  {
    id: 'ja-en',
    pair: 'Japanese ↔ English',
    source: 'Japanese',
    target: 'English',
    nativeSource: '日本語',
    flagA: '🇯🇵',
    flagB: '🇬🇧',
    speakers: '125M+ Speakers',
    region: 'Asian',
    popularUse: 'Electronics, Gaming, Robotics, Patents & Manufacturing'
  },
  {
    id: 'zh-en',
    pair: 'Chinese ↔ English',
    source: 'Chinese',
    target: 'English',
    nativeSource: '中文 (Simplified & Traditional)',
    flagA: '🇨🇳',
    flagB: '🇬🇧',
    speakers: '1.3B+ Speakers',
    region: 'Asian',
    popularUse: 'International Trade, Hardware, IT & Market Surveys'
  },
  {
    id: 'mr-en',
    pair: 'Marathi ↔ English',
    source: 'Marathi',
    target: 'English',
    nativeSource: 'मराठी',
    flagA: '🇮🇳',
    flagB: '🇬🇧',
    speakers: '95M+ Speakers',
    region: 'Indian Languages',
    popularUse: 'Maharashtra State Govt, Agriculture, Pharma & Banking'
  },
  {
    id: 'gu-en',
    pair: 'Gujarati ↔ English',
    source: 'Gujarati',
    target: 'English',
    nativeSource: 'ગુજરાતી',
    flagA: '🇮🇳',
    flagB: '🇬🇧',
    speakers: '60M+ Speakers',
    region: 'Indian Languages',
    popularUse: 'Chemicals, Textiles, Diamond Industry, Legal & Fintech'
  }
];

export const ALL_SUPPORTED_LANGUAGES = {
  'Indian Languages': [
    { name: 'Hindi', native: 'हिन्दी' },
    { name: 'Marathi', native: 'मराठी' },
    { name: 'Gujarati', native: 'ગુજરાતી' },
    { name: 'Bengali', native: 'বাংলা' },
    { name: 'Tamil', native: 'தமிழ்' },
    { name: 'Telugu', native: 'తెలుగు' },
    { name: 'Kannada', native: 'ಕನ್ನಡ' },
    { name: 'Malayalam', native: 'മലയാളം' },
    { name: 'Punjabi', native: 'ਪੰਜਾਬੀ' },
    { name: 'Odia', native: 'ଓଡ଼ିଆ' },
    { name: 'Assamese', native: 'অসমীয়া' },
    { name: 'Urdu', native: 'اردو' },
    { name: 'Sanskrit', native: 'संस्कृतम्' },
    { name: 'Nepali', native: 'नेपाली' }
  ],
  'European Languages': [
    { name: 'German', native: 'Deutsch' },
    { name: 'French', native: 'Français' },
    { name: 'Spanish', native: 'Español' },
    { name: 'Italian', native: 'Italiano' },
    { name: 'Portuguese', native: 'Português' },
    { name: 'Russian', native: 'Русский' },
    { name: 'Dutch', native: 'Nederlands' },
    { name: 'Polish', native: 'Polski' },
    { name: 'Swedish', native: 'Svenska' },
    { name: 'Norwegian', native: 'Norsk' },
    { name: 'Danish', native: 'Dansk' },
    { name: 'Greek', native: 'Ελληνικά' }
  ],
  'Asian Languages': [
    { name: 'Japanese', native: '日本語' },
    { name: 'Chinese (Simplified)', native: '简体中文' },
    { name: 'Chinese (Traditional)', native: '繁體中文' },
    { name: 'Korean', native: '한국어' },
    { name: 'Vietnamese', native: 'Tiếng Việt' },
    { name: 'Thai', native: 'ไทย' },
    { name: 'Indonesian', native: 'Bahasa Indonesia' },
    { name: 'Malay', native: 'Bahasa Melayu' },
    { name: 'Burmese', native: 'မြန်မာစာ' },
    { name: 'Tagalog', native: 'Filipino' }
  ],
  'Middle Eastern & African': [
    { name: 'Arabic', native: 'العربية' },
    { name: 'Hebrew', native: 'עברית' },
    { name: 'Persian (Farsi)', native: 'فارسی' },
    { name: 'Turkish', native: 'Türkçe' },
    { name: 'Swahili', native: 'Kiswahili' },
    { name: 'Amharic', native: 'አማርኛ' }
  ]
};

