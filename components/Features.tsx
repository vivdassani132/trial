import React, { useRef, useEffect, useState } from 'react';
import { Container } from './ui/Container';
import { Plus, Bookmark } from 'lucide-react';

const FeatureCard: React.FC<{ 
    title: string; 
    visual: React.ReactNode; 
    className?: string; 
    delay?: number;
    id?: string;
}> = ({ title, visual, className = '', delay = 0, id }) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={ref}
      id={id}
      className={`group relative border border-black/5 rounded-[24px] overflow-hidden hover:shadow-xl transition-all duration-1000 ease-out scroll-mt-32 ${className} ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="h-[300px] md:h-[360px] w-full relative overflow-hidden flex items-center justify-center bg-surface-highlight/30">
        {visual}
      </div>
      
      <div className="p-6 md:p-8 absolute bottom-0 left-0 w-full bg-gradient-to-t from-white via-white/80 to-transparent">
        <h3 className="text-xl md:text-xl font-medium text-text-main mb-2">{title}</h3>
        <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 w-8 h-8 rounded-full bg-white text-black flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity transform md:translate-y-2 md:group-hover:translate-y-0 border border-black/10 shadow-sm">
          <Plus size={16} />
        </div>
      </div>
    </div>
  );
};

// New Component for the "Web Designer" Card Mockup - Converted to Light Theme
const JobCardMockup = () => {
    return (
        <div className="w-[260px] md:w-[280px] h-auto bg-surface rounded-[24px] overflow-hidden border border-black/5 shadow-2xl relative font-sans select-none hover:scale-[1.02] transition-transform duration-300 group">
            {/* Dot Pattern Background */}
            <div className="absolute inset-0 z-0 opacity-50" style={{ 
                backgroundImage: 'radial-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px)', 
                backgroundSize: '16px 16px' 
            }}></div>
            
            {/* Gradient Overlay - Subtle light fade at bottom instead of dark */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/40 z-0 pointer-events-none"></div>

            <div className="relative z-10 p-5 flex flex-col h-full">
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                    <div className="flex -space-x-2">
                         <div className="w-6 h-6 rounded-full bg-white border border-black/10 z-30 shadow-sm flex items-center justify-center text-[10px] text-text-main">⚡</div>
                         <div className="w-6 h-6 rounded-full bg-white/50 border border-black/10 z-20"></div>
                    </div>
                    <button className="flex items-center gap-1 px-2 py-1 rounded border border-black/10 text-[10px] text-black/60 bg-white/50 backdrop-blur-sm hover:bg-black/5 transition-colors">
                        Save <Bookmark size={10} className="fill-current" />
                    </button>
                </div>

                {/* Title Section */}
                <div className="mb-6">
                    <div className="flex items-center gap-2 mb-1">
                        <span className="text-primary text-xs font-medium">Verified Pro</span>
                        <span className="text-black/40 text-[10px]">Available Now</span>
                    </div>
                    <h3 className="text-2xl text-black font-medium tracking-tight">Master Electrician</h3>
                </div>

                {/* Tags */}
                <div className="flex gap-2 mb-8">
                    <span className="px-3 py-1.5 bg-white border border-black/5 rounded-lg text-[10px] text-black/70 font-medium backdrop-blur-md">
                        Licensed
                    </span>
                    <span className="px-3 py-1.5 bg-white border border-black/5 rounded-lg text-[10px] text-black/70 font-medium backdrop-blur-md">
                        Insured
                    </span>
                </div>

                {/* Divider */}
                <div className="h-px w-full bg-black/5 mb-4"></div>
            </div>
        </div>
    );
};

export const Features: React.FC = () => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const title = "The complete operating system for your home";
  const words = title.split(' ');

  return (
    <section className="py-16 md:py-32 bg-background border-t border-black/5">
      <Container>
        <div ref={ref} className="flex flex-col md:flex-row justify-between items-start mb-12 md:mb-20 gap-6 md:gap-10">
          <h2 className="text-4xl md:text-6xl font-medium text-text-main leading-[1.1] max-w-2xl tracking-tight block">
             {words.map((word, i) => (
                <span 
                  key={i} 
                  className={`inline-block mr-[0.25em] last:mr-0 ${isInView ? 'blur-fade-word' : 'opacity-0'} ${word === 'home' ? 'font-serif italic' : ''}`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {word}
                </span>
             ))}
          </h2>
          <div className={`max-w-md transition-all duration-1000 ease-out ${isInView ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-8 blur-sm'}`} style={{ transitionDelay: '0.4s' }}>
            <p className="text-base md:text-xl text-text-muted leading-relaxed">
              Arluma replaces your contractor list, emergency savings panic, and DIY headaches with a single AI entity that works 24/7. It doesn't just find trades - it manages them.
            </p>
            <a href="#" className="inline-flex items-center mt-6 text-text-main hover:text-primary transition-colors font-medium">
              See how it works <span className="ml-2">→</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Predictive Maintenance */}
          <FeatureCard 
            id="maintenance"
            delay={200}
            title="Predictive AI Maintenance"
            className="bg-white"
            visual={
              <div className="relative w-full h-full flex items-center justify-center perspective-[1000px] scale-90 md:scale-100">
                  {/* Base Layer */}
                  <div className="absolute w-48 h-60 bg-surface rounded-xl border border-black/5 transform -rotate-y-12 rotate-x-6 translate-z-0 shadow-2xl opacity-40 translate-x-12 translate-y-8"></div>
                  
                  {/* Middle Layer */}
                  <div className="absolute w-48 h-60 bg-surface rounded-xl border border-black/10 transform -rotate-y-12 rotate-x-6 translate-z-10 shadow-xl opacity-70 translate-x-6 translate-y-4">
                     <div className="p-4 space-y-3 opacity-30">
                        <div className="h-2 w-12 bg-black/10 rounded-full"></div>
                        <div className="h-2 w-full bg-black/10 rounded-full"></div>
                        <div className="h-2 w-3/4 bg-black/10 rounded-full"></div>
                     </div>
                  </div>

                  {/* Top Layer (Glass) */}
                  <div className="absolute w-48 h-60 bg-surface/90 backdrop-blur-md rounded-xl border border-black/10 transform -rotate-y-12 rotate-x-6 translate-z-20 shadow-[0_20px_40px_rgba(0,0,0,0.1)] flex flex-col p-4">
                      <div className="flex justify-between items-center mb-4">
                        <div className="h-6 w-20 bg-primary/10 rounded border border-primary/20 flex items-center justify-center text-[10px] text-primary font-medium">OPTIMIZED</div>
                      </div>
                      <div className="h-3 w-20 bg-black/10 rounded mb-2"></div>
                      <div className="space-y-2 mt-4">
                         <div className="h-2 w-full bg-black/5 rounded"></div>
                         <div className="h-2 w-full bg-black/5 rounded"></div>
                         <div className="h-2 w-3/4 bg-black/5 rounded"></div>
                      </div>
                      
                      <div className="mt-auto flex items-center gap-2">
                         <div className="w-4 h-4 rounded-full bg-primary/20"></div>
                         <div className="h-2 w-16 bg-black/10 rounded"></div>
                      </div>
                  </div>
              </div>
            }
          />

          {/* Card 2: Licensed Trades */}
          <FeatureCard 
            id="trades"
            delay={400}
            title="Licensed Trades on Demand"
            className="bg-white"
            visual={
               <div className="w-full h-full flex items-center justify-center p-6">
                 <JobCardMockup />
               </div>
            }
          />

          {/* Card 3: Dynamic Calendar */}
          <FeatureCard 
            id="calendar"
            delay={600}
            title="Dynamic Home Calendar"
            className="bg-surface"
            visual={
               <div className="w-full h-full bg-white relative overflow-hidden flex items-center justify-center">
                  {/* Grid Background */}
                  <div className="absolute inset-0" 
                       style={{ 
                           backgroundImage: 'linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)', 
                           backgroundSize: '40px 40px',
                           transform: 'perspective(500px) rotateX(60deg) translateY(-50px) scale(2)',
                           opacity: 0.5
                       }}>
                  </div>

                  {/* Isometric Elements */}
                  <div className="relative z-10 transform perspective(1000px) rotateX(45deg) rotateZ(45deg) scale-90 md:scale-100">
                      {/* Button Base */}
                      <div className="w-40 h-12 bg-white border border-black/10 rounded-lg shadow-xl flex items-center justify-center gap-2 transform transition-transform hover:translate-y-1 duration-300">
                          <span className="text-black text-sm font-medium">Schedule Repair</span>
                      </div>
                      
                      {/* Selection Box */}
                      <div className="absolute -inset-2 border border-primary/50 rounded-xl opacity-0 animate-pulse"></div>

                      {/* Cursor */}
                      <div className="absolute -bottom-8 -right-8">
                         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="drop-shadow-[0_4px_4px_rgba(0,0,0,0.2)]">
                             <path d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z" fill="#E94E35" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
                         </svg>
                      </div>
                  </div>
                  
                  {/* Glow */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/10 blur-[50px] pointer-events-none"></div>
               </div>
            }
          />
        </div>
      </Container>
    </section>
  );
};