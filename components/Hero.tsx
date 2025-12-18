import React, { useEffect, useState } from 'react';
import { Container } from './ui/Container';
import { Button } from './ui/Button';
import { ChevronRight } from 'lucide-react';
import { HeroMockup } from './ui/Mockup';

export const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate transform values based on scroll
  const progress = Math.min(scrollY / 600, 1);
  
  const rotateX = 20 - (progress * 20);
  const rotateY = -10 + (progress * 10);
  const rotateZ = 5 - (progress * 5);
  const scale = 0.9 + (progress * 0.1);
  const translateY = 40 - (progress * 20);

  const slogan = "The Only App Your Home Needs.";

  return (
    <div className="relative min-h-screen pt-24 md:pt-32 pb-12 md:pb-20 overflow-hidden bg-transparent">
      {/* Background Glow - Subtle for light mode */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] md:w-[1000px] h-[500px] bg-glow-gradient opacity-60 pointer-events-none z-0"></div>
      
      <Container className="relative z-10 flex flex-col items-start text-left">
        <h1 className="max-w-6xl mb-6 md:mb-8 block text-text-main">
          <span className="block text-6xl sm:text-7xl md:text-8xl font-serif italic mb-2 md:mb-4 tracking-tight blur-fade-word" style={{ animationDelay: '0s' }}>
             Arluma:
          </span>
          <span className="block text-4xl sm:text-5xl md:text-6xl font-sans font-normal tracking-tight leading-[1.1]">
             {slogan.split(' ').map((word, i) => (
               <span 
                  key={i} 
                  className="inline-block blur-fade-word mr-[0.25em] last:mr-0" 
                  style={{ animationDelay: `${0.4 + (i * 0.1)}s` }}
               >
                 {word}
               </span>
             ))}
          </span>
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl text-text-muted max-w-3xl mb-8 md:mb-10 leading-relaxed opacity-0 animate-[blur-fade-in_0.8s_ease-out_1.2s_forwards] text-left">
          Transforming home maintenance from a series of expensive emergencies into a predictive, budgeted service. Guaranteed access to licensed trades and annual repair credits.
        </p>
        
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 mb-12 md:mb-20 opacity-0 animate-[blur-fade-in_0.8s_ease-out_1.4s_forwards]">
          <Button size="lg" className="rounded-full px-8 w-full sm:w-auto text-center justify-center bg-black hover:bg-neutral-800 text-white border-transparent shadow-lg">Get Arluma</Button>
          <a href="#" className="flex items-center justify-center sm:justify-start gap-1 text-text-main hover:text-primary transition-colors font-medium text-sm sm:text-base">
            New: Annual Repair Credit included <ChevronRight size={16} />
          </a>
        </div>
      </Container>

      {/* 3D Mockup Container */}
      <div className="w-full relative z-10 -mt-12 md:-mt-10 perspective-[2000px] pointer-events-none">
        {/* Scale wrapper for mobile to prevent overflow */}
        <div className="w-full flex justify-center md:block transform scale-[0.28] sm:scale-50 md:scale-100 origin-top h-[220px] sm:h-[400px] md:h-auto">
            <HeroMockup 
                style={{
                    transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) scale(${scale}) translateY(${translateY}px)`
                }}
            />
        </div>
      </div>

      {/* Bottom fade for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent z-20"></div>
    </div>
  );
};