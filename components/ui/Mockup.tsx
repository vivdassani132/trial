import React, { useState, useEffect, useRef } from 'react';
import { BarChart2, Shield, Smartphone, Home, MessageSquare, GitPullRequest, Bell, FileText, DollarSign, Briefcase, Check, Plus, File, Paperclip, Search } from 'lucide-react';
import { Button } from './Button';

// A generic window container for mockups
export const AppWindow: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`bg-white rounded-xl border border-black/5 shadow-2xl overflow-hidden flex flex-col ${className}`}>
    {/* Window Header */}
    <div className="h-8 bg-surface-highlight border-b border-black/5 flex items-center px-3 gap-2">
      <div className="flex gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-black/10"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-black/10"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-black/10"></div>
      </div>
    </div>
    {/* Content */}
    <div className="flex-1 relative">
      {children}
    </div>
  </div>
);

// CSS-only implementation of the main hero screenshot - Light Theme
export const HeroMockup: React.FC<{ style?: React.CSSProperties }> = ({ style }) => {
  const [activeItem, setActiveItem] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveItem((prev) => (prev + 1) % 4);
    }, 1400); // Increased speed (~30% faster than 2000ms)
    return () => clearInterval(interval);
  }, []);

  const getItemStyles = (index: number) => {
      const isActive = index === activeItem;
      return `h-20 w-full rounded-xl flex items-center px-6 justify-between transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
          isActive 
            ? 'bg-white border border-primary/20 shadow-[0_8px_30px_rgba(233,78,53,0.15)] scale-[1.03] z-10 translate-y-0' 
            : 'bg-white border border-black/5 shadow-sm scale-100 z-0 opacity-80 hover:opacity-100'
      }`;
  };

  return (
    <div className="relative w-[1200px] h-[600px] perspective-[2000px] transform-style-3d overflow-visible mx-auto">
      {/* The Tilted Interface - Light Theme */}
      <div 
        className="w-[1200px] h-[800px] bg-white rounded-xl border border-black/10 mx-auto shadow-[0_50px_100px_rgba(0,0,0,0.15)] overflow-hidden transition-transform duration-100 ease-out will-change-transform"
        style={{ 
          transformStyle: 'preserve-3d', 
          transform: 'perspective(1000px) rotateX(20deg) scale(0.9) translateY(40px)',
          ...style
        }}
      >
        <div className="flex h-full">
          {/* Sidebar - Light Gray */}
          <div className="w-72 bg-surface border-r border-black/5 p-6 flex flex-col gap-6">
             {/* Logo Placeholder */}
             <div className="h-10 w-10 bg-black/5 rounded-xl mb-2 flex items-center justify-center">
                 <div className="w-5 h-5 rounded bg-primary"></div>
             </div>
             <div className="space-y-3">
                 <div className="h-10 w-full rounded-lg bg-white shadow-sm border border-black/5 flex items-center px-4">
                    <div className="w-6 h-6 rounded bg-primary/10 mr-3 flex items-center justify-center text-xs text-primary font-bold">H</div>
                    <span className="text-base font-medium text-black">Overview</span>
                 </div>
                 <div className="h-10 w-full rounded-lg bg-transparent hover:bg-black/5 transition-colors flex items-center px-4">
                    <div className="w-6 h-6 rounded bg-black/5 mr-3"></div>
                    <span className="text-base text-text-muted">Maintenance</span>
                 </div>
                 <div className="h-10 w-full rounded-lg bg-transparent hover:bg-black/5 transition-colors flex items-center px-4">
                    <div className="w-6 h-6 rounded bg-black/5 mr-3"></div>
                    <span className="text-base text-text-muted">Projects</span>
                 </div>
                 <div className="h-10 w-full rounded-lg bg-transparent hover:bg-black/5 transition-colors flex items-center px-4">
                    <div className="w-6 h-6 rounded bg-black/5 mr-3"></div>
                    <span className="text-base text-text-muted">Trades</span>
                 </div>
             </div>
          </div>
          
          {/* Main Area - White */}
          <div className="flex-1 bg-white p-10">
            <div className="flex justify-between items-center mb-10">
                <div className="h-10 w-64 bg-black/5 rounded-lg"></div>
                <div className="flex gap-3">
                    <div className="h-10 w-10 rounded-full bg-black/5"></div>
                    <div className="h-10 w-10 rounded-full bg-black/5"></div>
                </div>
            </div>
            
            <div className="space-y-4">
              {/* Item 1 */}
              <div className={getItemStyles(0)}>
                  <div className="flex items-center gap-5">
                    <div className="w-10 h-10 rounded-full bg-surface border border-black/5 flex items-center justify-center">
                        <div className={`w-2.5 h-2.5 rounded-full transition-colors ${activeItem === 0 ? 'bg-primary' : 'bg-black/20'}`}></div>
                    </div>
                    <div>
                        <div className="text-lg font-medium text-black">Furnace Maintenance Required</div>
                        <div className="text-sm text-text-muted">Due Today</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className={`px-3 py-1 rounded-full text-sm font-medium border transition-colors duration-500 ${activeItem === 0 ? 'bg-orange-100 text-orange-600 border-orange-200' : 'bg-surface text-text-muted border-black/5'}`}>Urgent</div>
                    <Button size="sm" variant="secondary" className="px-6">Dispatch</Button>
                  </div>
              </div>

              {/* Item 2 */}
              <div className={getItemStyles(1)}>
                  <div className="flex items-center gap-5">
                    <div className="w-10 h-10 rounded-full bg-surface border border-black/5 flex items-center justify-center">
                         <div className={`w-2.5 h-2.5 rounded-full transition-colors ${activeItem === 1 ? 'bg-primary' : 'bg-black/20'}`}></div>
                    </div>
                     <div>
                        <div className="text-lg font-medium text-black">Approve Roof Repair Estimate</div>
                         <div className="text-sm text-text-muted">Exterior Maintenance</div>
                    </div>
                  </div>
                   <div className="flex items-center gap-4">
                    <div className={`px-3 py-1 rounded-full text-sm font-medium border transition-colors duration-500 ${activeItem === 1 ? 'bg-yellow-100 text-yellow-700 border-yellow-200' : 'bg-surface text-text-muted border-black/5'}`}>Pending</div>
                  </div>
              </div>

               {/* Item 3 */}
               <div className={getItemStyles(2)}>
                  <div className="flex items-center gap-5">
                     <div className="w-10 h-10 rounded-full bg-surface border border-black/5 flex items-center justify-center">
                         <div className={`w-2.5 h-2.5 rounded-full transition-colors ${activeItem === 2 ? 'bg-primary' : 'bg-black/20'}`}></div>
                    </div>
                     <div>
                        <div className="text-lg font-medium text-black">Winterization Service</div>
                         <div className="text-sm text-text-muted">Scheduled for Nov 15</div>
                    </div>
                  </div>
                   <div className="flex items-center gap-4">
                    <div className={`px-3 py-1 rounded-full text-sm font-medium border transition-colors duration-500 ${activeItem === 2 ? 'bg-orange-50 text-orange-600 border-orange-100' : 'bg-surface text-text-muted border-black/5'}`}>Scheduled</div>
                  </div>
              </div>

               {/* Item 4 */}
               <div className={getItemStyles(3)}>
                  <div className="flex items-center gap-5">
                    <div className="w-10 h-10 rounded-full bg-surface border border-black/5 flex items-center justify-center">
                         <div className={`w-2.5 h-2.5 rounded-full transition-colors ${activeItem === 3 ? 'bg-primary' : 'bg-black/20'}`}></div>
                    </div>
                    <div>
                        <div className="text-lg font-medium text-black">Electrical Panel Upgrade Plan</div>
                         <div className="text-sm text-text-muted">Projects</div>
                    </div>
                  </div>
                   <div className="flex items-center gap-4">
                    <div className={`px-3 py-1 rounded-full text-sm font-medium border transition-colors duration-500 ${activeItem === 3 ? 'bg-yellow-50 text-yellow-600 border-yellow-100' : 'bg-surface text-text-muted border-black/5'}`}>Draft</div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const TimelineMockup = () => (
  <div className="w-full h-full bg-white relative overflow-hidden flex flex-col p-6 rounded-lg border border-black/5">
    {/* Header */}
    <div className="flex justify-between items-center mb-8">
       <div className="flex gap-2">
         <div className="w-24 h-6 bg-black/5 rounded"></div>
         <div className="w-24 h-6 bg-black/5 rounded"></div>
       </div>
    </div>
    
    {/* Timeline Grid */}
    <div className="flex-1 relative">
      {/* Vertical Lines */}
      <div className="absolute inset-0 flex justify-between pointer-events-none opacity-20">
        {[1,2,3,4,5,6].map(i => <div key={i} className="w-px h-full bg-black/10"></div>)}
      </div>
      
      {/* Bars */}
      <div className="relative z-10 space-y-4 pt-4">
        <div className="ml-[10%] w-[30%] h-8 bg-orange-500/10 border border-orange-500/20 rounded flex items-center px-3 text-xs text-orange-700">Foundation Inspection</div>
        <div className="ml-[35%] w-[20%] h-8 bg-red-500/10 border border-red-500/20 rounded flex items-center px-3 text-xs text-red-700">Emergency Repair</div>
        <div className="ml-[50%] w-[40%] h-8 bg-yellow-500/10 border border-yellow-500/20 rounded flex items-center px-3 text-xs text-yellow-700">Work Verification</div>
      </div>
      
      {/* Date Markers */}
      <div className="absolute top-0 w-full flex justify-between text-[10px] text-black/30 uppercase tracking-wider">
         <span>Mar 1</span>
         <span>Mar 15</span>
         <span>Apr 1</span>
         <span>Apr 10</span>
         <span>Apr 15</span>
      </div>
    </div>
  </div>
);

// New Roadmap Mockup based on the provided image
export const RoadmapMockup = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const [scrollProgress, setScrollProgress] = React.useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                const vh = window.innerHeight;
                // Calculate progress: 0 when centered, -1 when above, 1 when below (roughly)
                const progress = (rect.top + rect.height/2 - vh/2) / (vh/2);
                setScrollProgress(progress);
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const rotateX = -2 + (scrollProgress * 2); 
    const rotateY = 2 + (scrollProgress * 2); 
    const translateY = scrollProgress * 10;

    return (
        <div className="w-full h-full flex items-center justify-center p-4 md:p-6 relative perspective-[2000px] overflow-visible" ref={containerRef}>
            {/* Glow Background */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-[radial-gradient(circle_at_50%_50%,rgba(233,78,53,0.15),transparent_60%)] pointer-events-none"></div>

            <div 
                className="bg-white rounded-[32px] p-6 md:p-8 border border-black/5 w-full max-w-[340px] md:max-w-[420px] relative z-10 flex flex-col group transition-transform duration-100 ease-out will-change-transform"
                style={{
                    transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(0deg) translateY(${translateY}px)`,
                    transformStyle: 'preserve-3d',
                    boxShadow: '12px 12px 0px #F4F4F5, 0 30px 60px rgba(0,0,0,0.05)' 
                }}
            >
                
                {/* Graph Area */}
                <div className="h-[220px] w-full relative mb-6">
                    {/* SVG Container with viewBox for scaling */}
                    <svg className="w-full h-full visible overflow-visible" viewBox="0 0 360 240" preserveAspectRatio="xMidYMid meet">
                        <defs>
                            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#E94E35" stopOpacity="0" />
                                <stop offset="50%" stopColor="#E94E35" stopOpacity="0.4" />
                                <stop offset="100%" stopColor="#E94E35" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                        
                        {/* Static faint grid lines */}
                        <path d="M40 160 L 320 160" stroke="black" strokeOpacity="0.03" strokeWidth="1" />
                        <path d="M40 100 L 320 100" stroke="black" strokeOpacity="0.03" strokeWidth="1" />
                        
                        {/* Paths definitions - CENTERED at X=180 */}
                        {/* Input Path: Top Right Pill (290, 40) to Center Node (180, 120) */}
                        <path d="M 290 40 C 290 80, 180 80, 180 120" fill="none" stroke="black" strokeOpacity="0.05" strokeWidth="1.5" />
                        
                        {/* Output Paths: Center Node to Bottom Nodes (70, 180, 290) */}
                        <path d="M 180 120 C 180 160, 70 160, 70 200" fill="none" stroke="black" strokeOpacity="0.05" strokeWidth="1.5" />
                        <path d="M 180 120 L 180 200" fill="none" stroke="black" strokeOpacity="0.05" strokeWidth="1.5" />
                        <path d="M 180 120 C 180 160, 290 160, 290 200" fill="none" stroke="black" strokeOpacity="0.05" strokeWidth="1.5" />

                        {/* Animated Shocks - Input */}
                        <path 
                            d="M 290 40 C 290 80, 180 80, 180 120" 
                            fill="none" 
                            stroke="#D1361F" 
                            strokeWidth="3.5" 
                            strokeLinecap="round"
                            strokeDasharray="60 1000" 
                            className="animate-shock" 
                            style={{ 
                                opacity: 0,
                                filter: 'drop-shadow(0 0 4px rgba(233, 78, 53, 0.8))'
                            }} 
                        />
                        
                        {/* Output Shocks */}
                        <path 
                            d="M 180 120 C 180 160, 70 160, 70 200" 
                            fill="none" 
                            stroke="#D1361F" 
                            strokeWidth="3.5" 
                            strokeLinecap="round"
                            strokeDasharray="60 1000" 
                            className="animate-shock" 
                            style={{ 
                                animationDelay: '1.2s', 
                                opacity: 0,
                                filter: 'drop-shadow(0 0 4px rgba(233, 78, 53, 0.8))'
                            }} 
                        />
                        <path 
                            d="M 180 120 L 180 200" 
                            fill="none" 
                            stroke="#D1361F" 
                            strokeWidth="3.5" 
                            strokeLinecap="round"
                            strokeDasharray="60 1000" 
                            className="animate-shock" 
                            style={{ 
                                animationDelay: '1.4s', 
                                opacity: 0,
                                filter: 'drop-shadow(0 0 4px rgba(233, 78, 53, 0.8))'
                            }} 
                        />
                        <path 
                            d="M 180 120 C 180 160, 290 160, 290 200" 
                            fill="none" 
                            stroke="#D1361F" 
                            strokeWidth="3.5" 
                            strokeLinecap="round"
                            strokeDasharray="60 1000" 
                            className="animate-shock" 
                            style={{ 
                                animationDelay: '1.6s', 
                                opacity: 0,
                                filter: 'drop-shadow(0 0 4px rgba(233, 78, 53, 0.8))'
                            }} 
                        />

                        {/* Dots */}
                        <circle cx="290" cy="40" r="3" fill="#E4E4E7" />
                        <circle cx="70" cy="200" r="3" fill="#E4E4E7" />
                        <circle cx="180" cy="200" r="3" fill="#E4E4E7" />
                        <circle cx="290" cy="200" r="3" fill="#E4E4E7" />

                        {/* Top Right Pill (Embedded) */}
                        <foreignObject x="200" y="20" width="160" height="40">
                             <div className="w-full h-full flex items-center justify-end">
                                <div className="bg-white border border-black/5 shadow-[0_8px_20px_rgba(0,0,0,0.06)] rounded-full pl-3 pr-1 py-1 flex items-center gap-2">
                                    <span className="text-[10px] font-medium text-black/80 whitespace-nowrap">Home Health Plan</span>
                                    <div className="w-5 h-5 rounded-full bg-[#E94E35]/10 text-[#E94E35] flex items-center justify-center">
                                        <Plus size={10} strokeWidth={3} />
                                    </div>
                                </div>
                             </div>
                        </foreignObject>

                        {/* Lightning Icon Node (Center) */}
                        <foreignObject x="168" y="108" width="24" height="24">
                             <div className="w-6 h-6 rounded-full bg-[#E94E35] flex items-center justify-center text-white shadow-lg shadow-orange-500/30">
                                 <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" /></svg>
                             </div>
                        </foreignObject>

                        {/* Bottom Pills */}
                        <foreignObject x="0" y="215" width="360" height="20">
                            <div className="flex gap-4 w-full justify-center">
                                <div className="w-16 h-2 rounded-full bg-surface border border-black/5 flex items-center justify-center"></div>
                                <div className="w-16 h-2 rounded-full bg-black/80 flex items-center justify-center">
                                    <div className="w-8 h-0.5 bg-white/20 rounded-full"></div>
                                </div>
                                <div className="w-16 h-2 rounded-full bg-surface border border-black/5"></div>
                            </div>
                        </foreignObject>
                    </svg>
                </div>

                {/* Text */}
                <h3 className="text-xl md:text-2xl font-medium text-text-main mb-2 tracking-tight">Keep your home safe</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                    Plan around seasons. Prioritize critical repairs by organizing upgrades into a funded roadmap.
                </p>
            </div>
        </div>
    );
};

export const IssueTrackingCluster = () => (
    <RoadmapMockup />
);

export const KeyboardShortcutsMockup = () => (
    <RoadmapMockup />
);

export const AiChatMockup: React.FC<{ active?: boolean }> = ({ active = false }) => {
    return (
    <div className="w-full h-full flex flex-col p-6 relative">
        <div className="text-xs text-black/30 font-mono mb-4">// arluma.ai/agent</div>
        <div className="space-y-1 font-mono text-sm mb-8">
            <div className="text-orange-600">"furnace"<span className="text-black">:</span> <span className="text-black">{`{`}</span></div>
            <div className="pl-4 text-orange-600">"status"<span className="text-black">:</span> <span className="text-black">"serviced"</span></div>
            <div className="pl-8 text-orange-600">"next_check"<span className="text-black">:</span> <span className="text-yellow-600">"Nov 1"</span></div>
        </div>

        <div className="mt-auto bg-surface border border-black/5 rounded-xl p-4">
            <div className="flex items-center gap-2 text-black/50 mb-4">
                <div className="w-0.5 h-4 bg-black animate-blink"></div>
                <span id="ai-chat-text"></span>
            </div>
            <div className="flex gap-2">
                <div className="px-2 py-1 rounded bg-white border border-black/5 text-xs text-black/50 flex items-center gap-1">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path></svg>
                    Attach Photo
                </div>
            </div>
        </div>
    </div>
    )
}

// Integration Mockups - LIGHT THEME
export const IntercomMockup = () => {
    const [step, setStep] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setStep((prev) => (prev + 1) % 4);
        }, 2500); 
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-white border border-black/5 rounded-xl p-6 h-full flex flex-col relative overflow-hidden">
             {/* Notification */}
            <div className="flex items-center gap-2 mb-4">
                <Bell size={16} className="text-black/50" />
                <span className="text-sm text-black/50">Smart Home Alert · Basement Sensor</span>
            </div>
            <p className="text-black text-sm mb-4 leading-relaxed">Arluma detected a potential water leak in the utility room.</p>
            
            {/* Added: Document Preview to fill space */}
            <div className="flex-1 bg-surface border border-black/5 rounded-lg mb-4 p-4 relative overflow-hidden group flex flex-col items-center justify-center">
                <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                    <Button size="sm" variant="secondary" className="h-8 text-xs shadow-sm">View Sensor Data</Button>
                </div>
                <div className="w-16 h-20 bg-white border border-black/10 shadow-sm mb-2 flex flex-col p-2 gap-1 items-center">
                     <div className="w-full h-1 bg-black/10 rounded-sm"></div>
                     <div className="w-full h-1 bg-black/5 rounded-sm"></div>
                     <div className="w-2/3 h-1 bg-black/5 rounded-sm"></div>
                     <div className="mt-auto w-full h-4 bg-black/5 rounded-sm"></div>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] text-black/40">
                    <File size={10} />
                    <span>Moisture_Log.csv</span>
                </div>
            </div>

            {/* AI Action Box */}
            <div className={`mt-auto bg-surface border border-black/5 rounded-lg p-4 transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1) ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                 <div className="flex items-center gap-2 mb-4 pb-3 border-b border-black/5">
                     <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                        <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></div>
                     </div>
                     <span className="text-xs text-primary font-mono font-medium tracking-wide">ARLUMA ACTION</span>
                 </div>
                 
                 <div className="space-y-3 pl-1">
                     {/* Step 1: Analyzing */}
                     <div className="flex items-center gap-3">
                         <div className={`w-4 h-4 flex items-center justify-center rounded-full border transition-colors duration-300 ${step >= 1 ? 'border-green-500/50 bg-green-500/10' : 'border-black/10'}`}>
                            {step === 1 && <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>}
                            {step > 1 && <Check size={10} className="text-green-500" />}
                         </div>
                         <span className={`text-sm transition-colors duration-300 ${step >= 1 ? 'text-black' : 'text-black/40'}`}>Confirming Leak...</span>
                     </div>

                     {/* Step 2: Drafting */}
                     <div className={`flex items-center gap-3 transition-all duration-500 delay-100 ${step >= 2 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`}>
                          <div className={`w-4 h-4 flex items-center justify-center rounded-full border transition-colors duration-300 ${step >= 2 ? 'border-black/40' : 'border-black/10'}`}>
                              {step === 2 && <div className="w-1.5 h-1.5 rounded-full bg-black animate-pulse"></div>}
                              {step > 2 && <div className="w-1.5 h-1.5 rounded-full bg-black"></div>}
                          </div> 
                          <span className={`text-sm ${step >= 2 ? 'text-black' : 'text-black/40'}`}>Dispatching Plumber</span>
                     </div>
                 </div>
            </div>
        </div>
    );
};

export const GithubMockup = () => (
    <div className="bg-white border border-black/5 rounded-xl p-6 h-full flex flex-col font-mono text-sm">
        <div className="flex items-center gap-2 mb-4 bg-surface p-2 rounded w-fit">
            <Home size={14} className="text-black/70" />
            <span className="text-black/70">Bank Feed · TD Canada Trust</span>
        </div>
        
        <div className="space-y-4 relative">
            <div className="absolute left-1 top-2 bottom-2 w-px bg-black/10"></div>
            
            <div className="flex gap-3 relative z-10">
                <div className="w-2 h-2 rounded-full bg-black/20 mt-1.5 ml-0.5"></div>
                <div className="text-black/60">
                    <span className="text-black">Transaction</span> detected <span className="text-black/40">$450.00 - HOME DEPOT</span>
                </div>
            </div>
            
            <div className="flex gap-3 relative z-10">
                <div className="w-2 h-2 rounded-full bg-[#D29922] mt-1.5 ml-0.5 shadow-[0_0_10px_rgba(210,153,34,0.3)]"></div>
                <div className="text-black/60">
                    <span className="text-black">Arluma</span> categorized as <span className="px-1.5 py-0.5 rounded bg-[#D29922]/10 text-[#D29922]">Material Cost</span>
                </div>
            </div>

            <div className="flex gap-3 relative z-10">
                <div className="w-2 h-2 rounded-full bg-black/20 mt-1.5 ml-0.5"></div>
                <div className="text-black/60">
                    <span className="text-black">Budget</span> status synced to <span className="px-1.5 py-0.5 rounded bg-yellow-500/10 text-yellow-600">Deducted</span>
                </div>
            </div>
        </div>
    </div>
);

export const MobileInboxMockup = () => (
    <div className="bg-white border border-black/5 rounded-xl h-full overflow-hidden relative">
        <div className="absolute inset-0 opacity-100">
             {/* Mobile Device Simulation */}
             <div className="absolute top-0 right-0 p-8 transform rotate-12 translate-x-12 translate-y-8">
                 <div className="w-64 h-96 bg-surface border border-black/10 rounded-[32px] p-4 shadow-2xl">
                     <div className="flex justify-between items-center mb-6 px-2">
                         <span className="text-xs text-black/50">9:41</span>
                         <div className="w-4 h-4 rounded-full bg-black/5 border border-black/10"></div>
                     </div>
                     <div className="text-xl text-black font-medium mb-4 px-2">Approvals</div>
                     
                     <div className="space-y-2">
                         <div className="bg-white p-3 rounded-xl border border-black/5 shadow-sm">
                             <div className="flex gap-2 mb-1">
                                 <div className="w-4 h-4 rounded-full bg-orange-500"></div>
                                 <span className="text-xs text-black">Approve Plumber Quote</span>
                             </div>
                             <div className="text-[10px] text-black/40 pl-6">Ready for review · 2m ago</div>
                         </div>
                         <div className="bg-white p-3 rounded-xl border border-black/5 opacity-50 shadow-sm">
                             <div className="flex gap-2 mb-1">
                                 <div className="w-4 h-4 rounded-full bg-red-500"></div>
                                 <span className="text-xs text-black">Emergency Stop Triggered</span>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
        </div>
        
        {/* Foreground Content */}
        <div className="absolute bottom-6 left-6 right-6">
            <h4 className="text-black font-medium mb-2">Real-time Approvals</h4>
            <p className="text-sm text-black/50">Approve repairs, unlock the door for trades, and pay invoices from anywhere.</p>
        </div>
    </div>
);

const McpMockup = () => {
    const [displayText, setDisplayText] = useState('');
    const [isInView, setIsInView] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const fullCode = `"contract": {
  "type": "Service Agreement",
  "project": "Kitchen Reno",
  "parties": [
    "Homeowner",
    "ABC Contracting"
  ]
}`;

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsInView(true);
                observer.disconnect();
            }
        }, { threshold: 0.5 });
        
        if (containerRef.current) {
            observer.observe(containerRef.current);
        }
        
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isInView) return;

        let index = 0;
        let timeoutId: number;
        
        const typeChar = () => {
            if (index < fullCode.length) {
                setDisplayText(fullCode.slice(0, index + 1));
                index++;
                const delay = Math.random() * 50 + 30; 
                timeoutId = window.setTimeout(typeChar, delay);
            } else {
                timeoutId = window.setTimeout(() => {}, 5000);
            }
        };

        timeoutId = window.setTimeout(typeChar, 500);
        
        return () => window.clearTimeout(timeoutId);
    }, [isInView]);

    const highlightCode = (code: string) => {
        const parts = code.split(/(".*?")/g);
        return parts.map((part, i) => {
            if (part.startsWith('"')) {
                if (part === '"contract"' || part === '"type"' || part === '"project"' || part === '"parties"') 
                    return <span key={i} className="text-orange-600 font-medium">{part}</span>;
                return <span key={i} className="text-yellow-600">{part}</span>;
            }
            return <span key={i} className="text-orange-400">{part}</span>;
        });
    };

    return (
        <div ref={containerRef} className="w-full h-full bg-white relative flex flex-col font-mono text-sm overflow-hidden">
             <div className="p-8 select-none pointer-events-none absolute inset-0">
                 <div className="text-black/30 mb-4">// arluma.ai/contracts</div>
                 <div className="whitespace-pre font-mono text-sm leading-relaxed text-black">
                    {highlightCode(displayText)}
                    <span className="inline-block w-2 h-4 bg-black align-middle ml-0.5 animate-blink"></span>
                 </div>
             </div>

             <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white to-transparent z-10">
                  <div className="flex gap-1 mb-2">
                       <div className="w-[1px] h-4 bg-black/20"></div>
                       <span className="text-black/50">Describe the project</span>
                  </div>
                  <div className="flex gap-2">
                      <div className="px-3 py-1.5 rounded-full bg-surface border border-black/10 text-xs text-black/50 flex items-center gap-2">
                          <Paperclip size={12} /> Upload Quote
                      </div>
                      <div className="px-3 py-1.5 rounded-full bg-surface border border-black/10 text-xs text-black/50 flex items-center gap-2">
                          <Search size={12} /> Find Contractor
                      </div>
                  </div>
             </div>
        </div>
    );
}

export { McpMockup };