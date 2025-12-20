
import React, { useState, useEffect, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LogoTicker } from './components/LogoTicker';
import { Features } from './components/Features';
import { BentoSections } from './components/BentoSections';
import { Footer } from './components/Footer';
import { Pricing } from './components/Pricing';
import { Customers } from './components/Customers';
import { About } from './components/About';
import { SignUp } from './components/SignUp';
import { DeveloperHub } from './components/DeveloperHub';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentPage]);

  const pageContent = useMemo(() => {
    switch (currentPage) {
      case 'pricing': return <Pricing />;
      case 'customers': return <Customers />;
      case 'about': return <About />;
      case 'signup': return <SignUp onBack={() => setCurrentPage('home')} />;
      default:
        return (
          <>
            <Hero />
            <LogoTicker />
            <Features />
            <DeveloperHub />
            <BentoSections />
          </>
        );
    }
  }, [currentPage]);

  if (currentPage === 'signup') {
    return <>{pageContent}</>;
  }

  return (
    <div className="min-h-screen bg-white text-text-main font-sans selection:bg-primary/30 selection:text-white antialiased">
      <Navbar 
        currentPage={currentPage} 
        onNavigate={setCurrentPage} 
        onSignUp={() => setCurrentPage('signup')}
      />
      <main className={currentPage !== 'home' ? 'pt-16' : ''}>
        {pageContent}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
};

export default App;
