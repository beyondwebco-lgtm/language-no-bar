import React, { useState } from 'react';
import TopContactBar from './components/TopContactBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategoryBanners from './components/CategoryBanners';
import MainServices from './components/MainServices';
import AboutUs from './components/AboutUs';
import FounderSection from './components/FounderSection';
import QualityPolicy from './components/QualityPolicy';
import LanguagesSection from './components/LanguagesSection';
import GetAQuote from './components/GetAQuote';
import ContactSection from './components/ContactSection';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import BackToTop from './components/BackToTop';
import { ServiceModal, LanguagesModal, BlogModal } from './components/Modals';

export default function App() {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedBlogPost, setSelectedBlogPost] = useState(null);
  const [languagesModalOpen, setLanguagesModalOpen] = useState(false);

  // Quote form pre-fill state
  const [quotePrefill, setQuotePrefill] = useState({
    service: '',
    source: 'English',
    target: ''
  });

  const handleOpenQuote = (serviceName = '', sourceLang = 'English', targetLang = '') => {
    setQuotePrefill({
      service: serviceName,
      source: sourceLang,
      target: targetLang
    });
    const el = document.getElementById('quote');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCategorySelect = (category) => {
    setSelectedService({
      title: category.title,
      description: category.description,
      deliverables: category.features,
      tag: category.category === 'translation' ? 'Language Translation' : 'Business Outsourcing',
      languages: category.category === 'translation' 
        ? ['Hindi', 'English', 'French', 'Spanish', 'German', 'Arabic', 'Japanese', 'Chinese', 'Marathi', 'Gujarati']
        : ['English', 'Hindi', 'Regional Languages']
    });
  };

  const handleExploreService = (service) => {
    setSelectedService(service);
  };

  const handleSelectLanguagePair = (pair) => {
    handleOpenQuote('Document Translation', pair.source, pair.target);
  };

  const handleSelectLanguageFromCatalog = (langName) => {
    handleOpenQuote('Language Translation Services (General)', 'English', langName);
  };

  return (
    <div className="app-root">
      {/* 1. Top Slim Contact Bar */}
      <TopContactBar />

      {/* 2. Navigation Bar with IBS Brand Logo */}
      <Navbar onOpenQuote={() => handleOpenQuote()} />

      <main id="main-content">
        {/* 3. Hero Section: Bridging Languages. Empowering Businesses. */}
        <Hero onOpenQuote={() => handleOpenQuote()} />

        {/* 4. Quick Highlights: 6 Horizontal Category Highlights */}
        <CategoryBanners onSelectCategory={handleCategorySelect} />

        {/* 5. Services: Language Translation Services & Business Outsourcing Solutions */}
        <MainServices onExploreService={handleExploreService} />

        {/* 6. About Us: About Innovative Business Solutions */}
        <AboutUs onOpenQuote={() => handleOpenQuote()} />

        {/* 6b. Founder Section: Meet Our Founder (Abburi Tanuja) */}
        <FounderSection />

        {/* 7. Quality Policy: Translation Accuracy, QA, Confidentiality & Delivery */}
        <QualityPolicy />

        {/* 8. Languages Section: Connecting Businesses Across Languages */}
        <LanguagesSection 
          onOpenAllLanguages={() => setLanguagesModalOpen(true)}
          onSelectPair={handleSelectLanguagePair}
        />

        {/* 9. Get a Quote Form Section */}
        <GetAQuote 
          key={`${quotePrefill.service}-${quotePrefill.source}-${quotePrefill.target}`}
          prefillService={quotePrefill.service}
          prefillSourceLang={quotePrefill.source}
          prefillTargetLang={quotePrefill.target}
        />

        {/* 10. Contact Us Section: Hyderabad Address, Form, and Maps */}
        <ContactSection />

        {/* 11. Blog & Insights Section */}
        <BlogSection onSelectPost={(post) => setSelectedBlogPost(post)} />
      </main>

      {/* 12. Corporate Navy Footer */}
      <Footer 
        onOpenQuote={() => handleOpenQuote()}
        onSelectServiceById={(id) => handleOpenQuote(id)}
      />

      {/* Interactive Utilities */}
      <WhatsAppButton />
      <BackToTop />

      {/* Modals */}
      <ServiceModal 
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onSelectQuoteService={(serviceTitle) => {
          setSelectedService(null);
          handleOpenQuote(serviceTitle);
        }}
      />

      <LanguagesModal 
        isOpen={languagesModalOpen}
        onClose={() => setLanguagesModalOpen(false)}
        onSelectLanguage={handleSelectLanguageFromCatalog}
      />

      <BlogModal 
        post={selectedBlogPost}
        onClose={() => setSelectedBlogPost(null)}
      />
    </div>
  );
}
