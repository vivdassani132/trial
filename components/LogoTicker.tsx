import React, { useRef, useEffect, useState } from 'react';
import { Container } from './ui/Container';

// --- Custom Logo Components ---

const SprkitLogo = () => (
  <div className="flex items-center gap-3">
    <svg width="32" height="32" viewBox="0 0 100 100" fill="none" className="text-text-main">
        {/* Radiating lines */}
        <path fill="currentColor" d="M44 0h12v25H44z" />
        <rect x="44" y="0" width="12" height="25" rx="2" fill="currentColor"/>
        <rect x="44" y="75" width="12" height="25" rx="2" fill="currentColor"/>
        <rect x="0" y="44" width="25" height="12" rx="2" fill="currentColor"/>
        <rect x="75" y="44" width="25" height="12" rx="2" fill="currentColor"/>
        <rect x="14" y="14" width="12" height="25" rx="2" transform="rotate(-45 20 26.5)" fill="currentColor"/>
        <rect x="73" y="73" width="12" height="25" rx="2" transform="rotate(-45 79 85.5)" fill="currentColor"/>
        <rect x="73" y="14" width="12" height="25" rx="2" transform="rotate(45 79 26.5)" fill="currentColor"/>
        <rect x="14" y="73" width="12" height="25" rx="2" transform="rotate(45 20 85.5)" fill="currentColor"/>
        {/* Center Star */}
        <path d="M50 25C65 40 65 40 75 50C65 60 65 60 50 75C35 60 35 60 25 50C35 40 35 40 50 25Z" fill="currentColor"/>
    </svg>
    <span className="text-xl font-bold tracking-tight text-text-main">Sprkit.ai</span>
  </div>
);

const AlongsideLogo = () => (
    <div className="flex items-center gap-3">
        <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
             <defs>
                <linearGradient id="alongside_grad" x1="20" y1="0" x2="20" y2="40" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FDBA74"/> {/* Orange-300 */}
                    <stop offset="1" stopColor="#DC2626"/> {/* Red-600 */}
                </linearGradient>
             </defs>
             <circle cx="20" cy="20" r="20" fill="url(#alongside_grad)" />
             {/* Abstract A shape / Mountain */}
             <path d="M20 10 C 26 26, 30 28, 32 30 H 8 C 10 28, 14 26, 20 10" fill="white" />
        </svg>
        <span className="text-2xl font-serif text-text-main tracking-tight">Alongside</span>
    </div>
);

const SleepFuelLogo = () => (
    <div className="flex items-center gap-3">
        <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
             <defs>
                <linearGradient id="sleep_grad" x1="0" y1="0" x2="0" y2="40">
                    <stop stopColor="#60A5FA"/> 
                    <stop offset="1" stopColor="#2563EB"/> 
                </linearGradient>
             </defs>
             <path d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z" fill="url(#sleep_grad)"/>
             <circle cx="20" cy="20" r="10" fill="white"/>
             <path d="M28 20C28 24.4183 24.4183 28 20 28C15.5817 28 12 24.4183 12 20H28Z" fill="#1E40AF"/>
        </svg>
        <span className="text-xl font-sans font-medium text-text-main tracking-tighter">SleepFuel&reg;</span>
    </div>
);

const SicoinLogo = () => (
    <div className="flex items-center gap-2">
        <svg width="36" height="32" viewBox="0 0 36 32" fill="none">
             <defs>
                 <linearGradient id="sicoin_red" x1="0" y1="0" x2="1" y2="1">
                     <stop stopColor="#F43F5E" />
                     <stop offset="1" stopColor="#FB7185" />
                 </linearGradient>
                 <linearGradient id="sicoin_yellow" x1="0" y1="0" x2="1" y2="1">
                     <stop stopColor="#FBBF24" />
                     <stop offset="1" stopColor="#F59E0B" />
                 </linearGradient>
             </defs>
             <ellipse cx="16" cy="16" rx="10" ry="14" transform="rotate(-30 16 16)" fill="url(#sicoin_red)" style={{mixBlendMode: 'multiply'}} />
             <ellipse cx="22" cy="16" rx="10" ry="14" transform="rotate(-30 22 16)" fill="url(#sicoin_yellow)" style={{mixBlendMode: 'multiply'}} />
        </svg>
        <span className="text-2xl font-bold text-text-main tracking-tight lowercase">sicoin<span className="align-top text-[0.4em] font-normal translate-y-[-1em]">TM</span></span>
    </div>
);

const ZenithLogo = () => (
    <div className="flex items-center gap-3">
        <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
             <defs>
                 <linearGradient id="zenith_grad" x1="0" y1="0" x2="40" y2="40">
                     <stop stopColor="#374151" />
                     <stop offset="1" stopColor="#111827" />
                 </linearGradient>
             </defs>
             <rect x="16" y="0" width="8" height="40" rx="4" fill="url(#zenith_grad)" />
             <rect x="16" y="0" width="8" height="40" rx="4" transform="rotate(60 20 20)" fill="url(#zenith_grad)" />
             <rect x="16" y="0" width="8" height="40" rx="4" transform="rotate(-60 20 20)" fill="url(#zenith_grad)" />
        </svg>
        <span className="text-2xl font-medium text-text-main tracking-tight lowercase">zenith<span className="text-xs align-top">&reg;</span></span>
    </div>
);

const OmegaLogo = () => (
    <div className="flex items-center gap-3">
        <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
             <path d="M10 11L20 5L30 11" stroke="#0EA5E9" strokeWidth="3" strokeLinecap="round" />
             <path d="M30 14L35 22.5L30 31" stroke="#0EA5E9" strokeWidth="3" strokeLinecap="round" />
             <path d="M30 34L20 40L10 34" stroke="#0EA5E9" strokeWidth="3" strokeLinecap="round" />
             <path d="M10 31L5 22.5L10 14" stroke="#0EA5E9" strokeWidth="3" strokeLinecap="round" />
        </svg>
        <span className="text-2xl font-sans text-text-main tracking-tight lowercase">omega</span>
    </div>
);

const CoinupLogo = () => (
    <div className="flex items-center gap-3">
        <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
             <defs>
                 <linearGradient id="coinup_grad" x1="0" y1="0" x2="40" y2="40">
                     <stop stopColor="#FB923C" /> {/* Orange-400 */}
                     <stop offset="1" stopColor="#EA580C" /> {/* Orange-600 */}
                 </linearGradient>
             </defs>
             <circle cx="20" cy="20" r="20" fill="url(#coinup_grad)" />
             <path d="M20 28V12M20 12L14 18M20 12L26 18" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" transform="rotate(45 20 20)" />
        </svg>
        <span className="text-2xl font-bold text-text-main tracking-tight">Coinup<span className="align-top text-[0.4em] font-normal translate-y-[-1em]">TM</span></span>
    </div>
);

const LOGOS = [
    SprkitLogo,
    AlongsideLogo,
    SleepFuelLogo,
    SicoinLogo,
    ZenithLogo,
    OmegaLogo,
    CoinupLogo
];

export const LogoTicker: React.FC = () => {
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
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const title = "Trusted by Canadian homeowners in 100+ cities.";
  const words = title.split(' ');

  // Create an array of logo items to scroll
  const scrollingLogos = [...LOGOS, ...LOGOS, ...LOGOS];

  return (
    <div className="bg-background py-10 md:py-20 border-t border-black/5 overflow-hidden">
      <Container className="text-center relative">
        <div ref={ref}>
          <h2 className="text-xl md:text-3xl font-medium text-text-main mb-2 flex flex-wrap justify-center gap-x-1.5 md:gap-x-2">
             {words.map((word, i) => (
                <span 
                  key={i} 
                  className={`inline-block ${isInView ? 'blur-fade-word' : 'opacity-0'}`}
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  {word}
                </span>
             ))}
          </h2>
          <p 
            className={`text-text-muted text-base md:text-lg mb-10 md:mb-16 transition-all duration-1000 ease-out ${isInView ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-4 blur-sm'}`} 
            style={{ transitionDelay: '0.4s' }}
          >
            From single-family homes to large estates.
          </p>
        </div>
        
        <div 
          className={`relative w-full overflow-hidden mask-linear-gradient transition-all duration-1000 ease-out ${isInView ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'}`} 
          style={{ transitionDelay: '0.6s' }}
        >
           {/* Placeholder Logos - Dual Track for Seamless Loop */}
           <div className="flex overflow-hidden w-full select-none">
               <div 
                    className="flex flex-shrink-0 gap-16 md:gap-24 pr-16 md:pr-24 items-center animate-marquee whitespace-nowrap"
                    style={{ animationDuration: '40s' }}
               >
                  {scrollingLogos.map((Logo, idx) => (
                    <div key={`a-${idx}`} className="flex justify-center items-center flex-shrink-0 transition-opacity duration-300">
                       <Logo />
                    </div>
                  ))}
               </div>
               <div 
                    className="flex flex-shrink-0 gap-16 md:gap-24 pr-16 md:pr-24 items-center animate-marquee whitespace-nowrap"
                    style={{ animationDuration: '40s' }}
               >
                  {scrollingLogos.map((Logo, idx) => (
                    <div key={`b-${idx}`} className="flex justify-center items-center flex-shrink-0 transition-opacity duration-300">
                       <Logo />
                    </div>
                  ))}
               </div>
           </div>
        </div>
      </Container>
    </div>
  );
};
