import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LogoTicker } from './components/LogoTicker';
import { Features } from './components/Features';
import { BentoSections } from './components/BentoSections';
import { Footer } from './components/Footer';
import { Pricing } from './components/Pricing';
import { Customers } from './components/Customers';
import { About } from './components/About';
import { SmoothScrollWrapper } from './components/SmoothScrollWrapper';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'pricing':
        return <Pricing />;
      case 'customers':
        return <Customers />;
      case 'about':
        return <About />;
      default:
        return (
          <>
            <Hero />
            <LogoTicker />
            <Features />
            <BentoSections />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background text-text-main font-sans selection:bg-primary/30">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      <SmoothScrollWrapper resetKey={currentPage}>
          <main className={currentPage !== 'home' ? 'pt-20' : ''}>
            {renderPage()}
          </main>
          <Footer onNavigate={setCurrentPage} />
      </SmoothScrollWrapper>
    </div>
  );
}

export default App;