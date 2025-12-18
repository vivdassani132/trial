import React from 'react';
import { Container } from './ui/Container';
import { Button } from './ui/Button';

interface FooterProps {
    onNavigate?: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-background border-t border-black/5 pt-20 pb-10 overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-glow-gradient opacity-30 pointer-events-none"></div>
      
      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center mb-20 md:mb-32">
           <h2 className="text-5xl md:text-9xl font-serif italic font-medium tracking-tight text-text-main mb-8 opacity-90 animate-[blur-fade-in_0.8s_ease-out_forwards]">
             Arluma
           </h2>
           <p className="text-lg md:text-2xl text-text-muted max-w-2xl mx-auto mb-10 font-light leading-relaxed">
             The operating system for your Canadian home. <br className="hidden md:block"/> 
             Built for predictive peace of mind.
           </p>
           <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button size="lg" className="px-10 py-4 h-auto text-lg rounded-full shadow-2xl shadow-primary/20 bg-black hover:bg-neutral-800 text-white border-transparent">Get Arluma</Button>
              <Button variant="outline" size="lg" className="px-10 py-4 h-auto text-lg rounded-full border-black/10 hover:bg-black/5 text-text-main">Contact Support</Button>
           </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-t border-black/10 pt-10 gap-10">
           <div className="flex flex-wrap gap-8 md:gap-12">
              <div className="space-y-3">
                 <div className="text-xs font-semibold text-text-main uppercase tracking-wider mb-2">Service</div>
                 <a href="#" className="block text-text-muted hover:text-text-main transition-colors text-sm">Maintenance</a>
                 <a href="#" className="block text-text-muted hover:text-text-main transition-colors text-sm">Emergency Repairs</a>
                 <a href="#" className="block text-text-muted hover:text-text-main transition-colors text-sm">Renovations</a>
              </div>
              <div className="space-y-3">
                 <div className="text-xs font-semibold text-text-main uppercase tracking-wider mb-2">Company</div>
                 <a href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('about'); }} className="block text-text-muted hover:text-text-main transition-colors text-sm">About</a>
                 <a href="#" className="block text-text-muted hover:text-text-main transition-colors text-sm">Careers (Trades)</a>
                 <a href="#" className="block text-text-muted hover:text-text-main transition-colors text-sm">Blog</a>
              </div>
              <div className="space-y-3">
                 <div className="text-xs font-semibold text-text-main uppercase tracking-wider mb-2">Connect</div>
                 <a href="#" className="block text-text-muted hover:text-text-main transition-colors text-sm">Twitter / X</a>
                 <a href="#" className="block text-text-muted hover:text-text-main transition-colors text-sm">LinkedIn</a>
                 <a href="#" className="block text-text-muted hover:text-text-main transition-colors text-sm">Instagram</a>
              </div>
           </div>

           <div className="text-right">
              <div className="text-[10px] uppercase tracking-widest text-text-muted mb-2">Network Status</div>
              <div className="flex items-center gap-2 justify-end">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="text-xs font-medium text-text-main">Trades Active</span>
              </div>
              <div className="mt-8 text-xs text-text-dim">
                &copy; 2024 Arluma Inc. <span className="mx-2">·</span> Privacy <span className="mx-2">·</span> Terms
              </div>
           </div>
        </div>
      </Container>
    </footer>
  );
};