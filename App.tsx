import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Results } from './components/Results';
import { Team } from './components/Team';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { InfoSection } from './components/InfoSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { TermsAndConditions } from './components/TermsAndConditions';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { AdminDashboard } from './components/AdminDashboard';
import { ResultsPage } from './components/ResultsPage';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'terms' | 'privacy' | 'admin' | 'results-page'>('home');

  const navigateToHome = () => {
    setView('home');
    window.scrollTo(0, 0);
  };

  const navigateToTerms = () => {
    setView('terms');
    window.scrollTo(0, 0);
  };

  const navigateToPrivacy = () => {
    setView('privacy');
    window.scrollTo(0, 0);
  };

  const navigateToAdmin = () => {
    setView('admin');
    window.scrollTo(0, 0);
  };

  const navigateToResultsPage = () => {
    setView('results-page');
    window.scrollTo(0, 0);
  };

  const handleBookCallFromResults = () => {
    setView('home');
    // Small timeout to allow Home view to render before scrolling to contact
    setTimeout(() => {
        const element = document.querySelector('#contact');
        if (element) {
            const headerOffset = 85;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    }, 100);
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden">
      <Header 
        isHome={view === 'home'} 
        onNavigateHome={navigateToHome} 
      />
      
      <main className="flex-grow">
        {view === 'home' && (
          <>
            <Hero onNavigateResults={navigateToResultsPage} />
            <About />
            <Services />
            <Portfolio />
            <Results />
            <Team />
            <Testimonials />
            <Contact />
            <InfoSection />
          </>
        )}
        {view === 'terms' && <TermsAndConditions />}
        {view === 'privacy' && <PrivacyPolicy />}
        {view === 'admin' && <AdminDashboard onNavigateHome={navigateToHome} />}
        {view === 'results-page' && <ResultsPage onBookCall={handleBookCallFromResults} />}
      </main>
      
      <Footer 
        isHome={view === 'home'}
        onNavigateTerms={navigateToTerms} 
        onNavigatePrivacy={navigateToPrivacy}
        onNavigateHome={navigateToHome}
        onNavigateAdmin={navigateToAdmin}
      />
      
      <FloatingWhatsApp />
    </div>
  );
};

export default App;