import React, { useState, useEffect, useRef } from 'react';
import { Container } from './ui/Container';
import { Button } from './ui/Button';
import { ChevronRight, Search, Paperclip, Check } from 'lucide-react';
import { IssueTrackingCluster, IntercomMockup, GithubMockup, MobileInboxMockup, RoadmapMockup, McpMockup } from './ui/Mockup';

// --- Animated Section Header ---
interface SectionHeaderProps {
    tag?: string;
    title: string;
    description: React.ReactNode;
    tagColor?: 'primary' | 'green' | 'white';
    large?: boolean;
    className?: string;
    styledWords?: Record<string, string>;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ tag, title, description, tagColor = 'primary', large = false, className, styledWords = {} }) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.disconnect();
      }
    }, { threshold: 0.2 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const getTagColorClass = () => {
      switch(tagColor) {
          case 'green': return 'text-yellow-600';
          case 'white': return 'text-text-main';
          default: return 'text-primary';
      }
  }

  const getTagDotClass = () => {
      switch(tagColor) {
          case 'green': return 'bg-yellow-500';
          case 'white': return 'bg-black';
          default: return 'bg-primary';
      }
  }

  const italicWords = ['Compliance', 'Automation', 'Trades', 'Maintenance'];

  // Determine font size classes: use custom className if provided, otherwise default logic
  const titleClasses = className || (large ? 'text-4xl md:text-5xl lg:text-7xl' : 'text-4xl md:text-5xl');

  return (
    <div ref={ref} className="mb-12">
      {tag && (
          <div className={`flex items-center gap-2 mb-4 text-sm font-medium transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <span className={`w-2 h-2 rounded-full ${getTagDotClass()}`}></span>
            <span className={getTagColorClass()}>{tag}</span>
            <ChevronRight size={14} className="text-black/30" />
          </div>
      )}
      <h2 className={`${titleClasses} font-medium text-text-main mb-6 max-w-3xl tracking-tight leading-[1.1] block`}>
        {title.split(' ').map((word, i) => {
           // Check for styled words (stripping punctuation for the key check if simpler matching needed, but exact match works for 'Maintenance')
           const customClass = styledWords[word] || '';
           const isItalic = italicWords.includes(word);
           
           return (
             <span key={i} className={`inline-block mr-[0.25em] last:mr-0 transition-all duration-700 ease-out ${isInView ? 'opacity-100 blur-0 translate-y-0' : 'opacity-0 blur-sm translate-y-4'} ${isItalic ? 'font-serif italic' : ''} ${customClass}`} style={{ transitionDelay: `${i * 100}ms` }}>
               {word}
             </span>
           );
        })}
      </h2>
      <div className={`text-base md:text-xl text-text-muted max-w-2xl leading-relaxed transition-all duration-1000 delay-500 ease-out ${isInView ? 'opacity-100 blur-0 translate-y-0' : 'opacity-0 blur-sm translate-y-4'}`}>
        {description}
      </div>
    </div>
  );
};

// --- Mockups ---

const AgentsMockup = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const [scrollProgress, setScrollProgress] = useState(0);

    const agents = [
        { name: 'Master Plumber', type: 'Trade', icon: 'P' },
        { name: 'HVAC Specialist', type: 'Trade', icon: 'H' },
        { name: 'Certified Electrician', type: 'Trade', icon: 'E' },
        { name: 'Roofer', icon: 'img' },
        { name: 'General Contractor', type: 'Trade', icon: 'G' },
        { name: 'Home Inspector', icon: 'img' }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % agents.length);
        }, 1400);
        return () => clearInterval(interval);
    }, [agents.length]);

    useEffect(() => {
        const handleScroll = () => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                const vh = window.innerHeight;
                const progress = (rect.top + rect.height/2 - vh/2) / (vh/2);
                setScrollProgress(progress); 
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const rotateX = 20 - (scrollProgress * 5); 
    const rotateY = -15 + (scrollProgress * 5); 
    const translateY = scrollProgress * 30;

    return (
        <div className="w-full h-full flex flex-col items-center justify-center relative bg-surface overflow-hidden perspective-[2000px]" ref={containerRef}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(233,78,53,0.1),transparent_50%)] pointer-events-none"></div>
            <div 
                className="relative z-10 transform-style-3d transition-transform duration-100 ease-out will-change-transform w-full flex justify-center"
                style={{
                    transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(5deg) translateY(${translateY}px) scale(0.9)`
                }}
            >
                <div className="w-full max-w-[500px] px-4 md:px-0">
                    <div className="w-full bg-white/90 backdrop-blur-xl border border-black/10 rounded-t-xl p-4 flex items-center shadow-xl relative z-20">
                        <span className="text-primary mr-2 animate-pulse">|</span>
                        <span className="text-black/50 text-lg">Dispatch trade...</span>
                    </div>
                    <div className="w-full bg-white/95 backdrop-blur-xl border-x border-b border-black/10 rounded-b-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] relative">
                        <div 
                            className="absolute left-0 w-full bg-black/5 border-l-2 border-primary transition-all duration-300 ease-in-out z-0"
                            style={{ top: `${activeIndex * 56}px`, height: '56px' }}
                        ></div>
                        {agents.map((item, idx) => (
                            <div key={idx} className="relative z-10 px-4 py-3 h-[56px] flex items-center justify-between group">
                                <div className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-black/5 flex items-center justify-center text-[10px] text-black/70 overflow-hidden shadow-inner border border-black/5">
                                        {item.icon === 'img' ? <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-orange-500"></div> : <span className="font-bold">{item.icon}</span>}
                                    </div>
                                    <span className={`text-sm transition-colors duration-300 ${idx === activeIndex ? 'text-black font-medium' : 'text-black/70'}`}>
                                        {item.name}
                                    </span>
                                    {item.type === 'Trade' && (
                                        <span className={`text-[10px] px-1.5 py-0.5 rounded border transition-colors duration-300 ${idx === activeIndex ? 'bg-yellow-500/20 text-yellow-700 border-yellow-500/30' : 'bg-black/5 text-black/50 border-black/5'}`}>
                                            Available
                                        </span>
                                    )}
                                </div>
                                <Check size={14} className={`text-black transition-all duration-300 ${idx === activeIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-surface to-transparent z-20 pointer-events-none"></div>
        </div>
    );
}

const TriageMockup = () => {
    return (
        <div className="w-full h-full bg-white p-6 relative flex flex-col overflow-hidden">
            {/* Header */}
            <div className="flex items-center gap-2 mb-6 text-black/40 text-sm">
                <span className="w-4 h-4 text-black/60">
                     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                </span>
                <span className="font-medium text-black/60">Auto-Maintenance</span>
            </div>

            <div className="space-y-4 relative z-10 font-sans">
                {/* Row 1: Suggestions */}
                <div className="flex items-center justify-between py-2 border-b border-black/5">
                    <span className="text-black/40 text-sm">System Status</span>
                    <div className="flex items-center gap-2">
                         <div className="flex items-center gap-1.5 bg-surface border border-black/5 rounded px-2 py-1">
                             <span className="text-xs text-black">Furnace</span>
                         </div>
                         <div className="flex items-center gap-1.5 bg-surface border border-black/5 rounded px-2 py-1">
                             <span className="text-xs text-black/60">🌡️</span>
                             <span className="text-xs text-black">HVAC</span>
                         </div>
                    </div>
                </div>

                {/* Row 2: Duplicate of */}
                <div className="flex items-center py-2 text-sm text-black/40 border-b border-black/5">
                    <span className="w-24">Detected</span>
                    <div className="flex items-center gap-2 text-black/80">
                        <div className="flex items-center gap-1">
                            <span className="text-black/40">❖</span>
                            <span>Age</span>
                        </div>
                        <span className="text-black/40">›</span> 
                        <div className="flex items-center gap-1.5">
                            <div className="w-2 h-2 rounded-full bg-red-500"></div>
                            <span>12 Years</span>
                        </div>
                    </div>
                </div>
                
                 {/* Row 3: Related to */}
                 <div className="flex items-center py-2 text-sm text-black/40">
                    <span className="w-24">Action</span>
                    <div className="flex items-center gap-2 text-black/80">
                        <div className="flex items-center gap-1">
                            <span className="text-black/40">❖</span>
                            <span>Recommendation</span>
                        </div>
                        <span className="text-black/40">›</span> 
                         <div className="flex items-center gap-1.5">
                            <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                            <span>Schedule Tune-up</span>
                        </div>
                    </div>
                </div>

                {/* Popover Card - Main Focus */}
                <div className="absolute top-[60px] left-[5%] right-[5%] md:left-[10%] md:right-[10%] bg-white border border-black/10 rounded-lg shadow-2xl p-4 animate-[blur-fade-in_0.5s_ease-out_forwards]">
                    <div className="text-xs text-black/50 font-medium mb-3">Predictive Analysis</div>
                    <ul className="space-y-3 mb-4">
                        <li className="flex gap-2 text-xs text-black/80 leading-relaxed items-start">
                            <span className="text-black/30 mt-1">•</span>
                            <span>Filter efficiency dropped below 40%</span>
                        </li>
                        <li className="flex gap-2 text-xs text-black/80 leading-relaxed items-start">
                             <span className="text-black/30 mt-1">•</span>
                             <div className="leading-5">
                                 Classified as <span className="inline-flex items-center gap-1 bg-[#E94E35]/10 text-primary px-1.5 py-0.5 rounded border border-[#E94E35]/20 align-middle mx-1"><Check size={10} /> Maintenance</span> for <span className="bg-black/5 px-1 rounded text-black">immediate service</span>
                             </div>
                        </li>
                    </ul>
                    <div className="pt-3 border-t border-black/5">
                        <button className="w-full flex items-center justify-center gap-2 py-2 bg-black/5 hover:bg-black/10 rounded text-xs text-black transition-colors font-medium">
                            <Check size={12} /> Dispatch Technician
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export const BentoSections: React.FC = () => {
  return (
    <div className="bg-background space-y-16 md:space-y-32 pb-20 md:pb-32">
      
      {/* AI Section */}
      <section>
        <Container>
           <SectionHeader 
             tag="Full-stack capability" 
             title="Your entire home, handled by AI"
             description={
               <>
                 Arluma models your home's unique systems to predict failures before they happen. From leaky faucets to furnace breakdowns, it's the personal facility manager you always wanted.
                 <div className="mt-8">
                   <Button variant="secondary">Meet Arluma <ChevronRight size={16} className="ml-1" /></Button>
                 </div>
               </>
             }
           />
           
           {/* Main Agents Feature */}
           <div className="w-full h-[400px] md:h-[500px] bg-surface rounded-[32px] border border-black/5 overflow-hidden mb-8 relative group">
              <AgentsMockup />
           </div>

           {/* Split Features */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="h-[480px] bg-surface rounded-[32px] border border-black/5 overflow-hidden flex flex-col">
                 <div className="p-8 pb-0">
                    <h3 className="text-xl md:text-2xl text-text-main font-medium mb-2">Predictive Maintenance</h3>
                    <p className="text-sm md:text-base text-text-muted">Arluma monitors appliance age and performance to schedule tune-ups automatically. Never forget a filter change again.</p>
                 </div>
                 <div className="flex-1 mt-6 relative overflow-hidden border-t border-black/5 bg-white">
                    <TriageMockup />
                 </div>
              </div>
              
              <div className="h-[480px] bg-surface rounded-[32px] border border-black/5 overflow-hidden flex flex-col">
                 <div className="p-8 pb-0">
                    <h3 className="text-xl md:text-2xl text-text-main font-medium mb-2">Instant Service Contracts</h3>
                    <p className="text-sm md:text-base text-text-muted">Generate, review, and sign service agreements in seconds. Secured with guaranteed pricing from verified trades.</p>
                 </div>
                 <div className="flex-1 mt-6 relative overflow-hidden border-t border-black/5 bg-white">
                    <McpMockup />
                 </div>
              </div>
           </div>
        </Container>
      </section>

       {/* Workflows and integrations */}
      <section id="security" className="scroll-mt-32">
          <Container>
               <SectionHeader 
                    tag="Seamless Integration"
                    title="Connects with your home's reality"
                    description="Arluma integrates with smart home sensors, utility data, and bank feeds to detect issues like water leaks or unusual energy spikes instantly."
                    tagColor="primary"
                    large
                 />
                {/* Updated Carousel Layout for Mobile */}
                <div className="mt-16 flex md:grid md:grid-cols-3 gap-6 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory -mx-6 px-6 md:mx-0 md:px-0 pb-12 md:pb-0 no-scrollbar">
                    <div className="min-w-[80vw] md:min-w-0 h-[400px] md:h-[500px] md:col-span-1 overflow-hidden snap-center flex-shrink-0">
                        <IntercomMockup />
                    </div>
                    <div className="min-w-[80vw] md:min-w-0 h-[400px] md:h-[500px] md:col-span-1 overflow-hidden snap-center flex-shrink-0">
                        <GithubMockup />
                    </div>
                    <div className="min-w-[80vw] md:min-w-0 h-[400px] md:h-[500px] md:col-span-1 overflow-hidden snap-center flex-shrink-0">
                        <MobileInboxMockup />
                    </div>
                </div>
          </Container>
      </section>

      {/* Issue Tracking */}
      <section id="enterprise" className="scroll-mt-32">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div>
                <SectionHeader 
                  tag="Action-oriented" 
                  title="Maintenance that moves itself"
                  description="Arluma doesn't just show you alerts. It dispatches plumbers, authorizes repairs within your budget, and verifies work completion on your behalf."
                  tagColor="primary"
                  styledWords={{ 'Maintenance': 'text-6xl md:text-7xl' }}
                />
             </div>
             <div className="h-[400px] md:h-[500px] w-full bg-surface rounded-3xl border border-black/5 overflow-hidden flex items-center justify-center relative">
                <div className="w-full h-full flex items-center justify-center transform scale-[0.8] sm:scale-90 md:scale-100">
                    <RoadmapMockup />
                </div>
             </div>
          </div>
        </Container>
      </section>
    </div>
  );
};