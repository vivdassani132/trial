import React, { useState, useEffect, useRef } from 'react';
import { Container } from './ui/Container';
import { Button } from './ui/Button';
import { ChevronRight, ArrowRight, Info } from 'lucide-react';

// --- Assets & Icons ---

const CardGridPattern = () => (
    <div className="absolute inset-0 z-0 opacity-30 pointer-events-none" 
         style={{ 
             backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
         }}>
    </div>
);

const OpenAILogo = ({ className = "w-full h-full" }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M22.2819 9.82116C22.1837 9.10629 21.8988 8.42392 21.4552 7.84234C21.0116 7.26075 20.4248 6.80006 19.7533 6.50576C19.8517 5.79093 19.7891 5.06456 19.5716 4.38243C19.3541 3.7003 18.9877 3.08119 18.5011 2.5723C18.0145 2.06341 17.4208 1.67818 16.7656 1.44654C16.1104 1.2149 15.4116 1.14298 14.7236 1.23632C14.0356 1.32966 13.3769 1.58572 12.7987 1.98481C12.2205 2.38391 11.7381 2.91557 11.3884 3.53856C10.7022 3.12399 9.91422 2.92319 9.1172 2.95966C8.32018 2.99613 7.54694 3.26839 6.8884 3.74457C6.22986 4.22075 5.71333 4.88126 5.39922 5.64832C5.08511 6.41537 4.98638 7.25721 5.11467 8.07546C4.42173 8.35626 3.81223 8.81057 3.34537 9.39414C2.8785 9.97771 2.57077 10.6703 2.45243 11.4037C2.33409 12.1371 2.40925 12.886 2.6705 13.577C2.93175 14.268 3.37021 14.8777 3.9429 15.3468C4.0411 16.0617 4.32604 16.744 4.76964 17.3256C5.21323 17.9072 5.80004 18.3679 6.47156 18.6622C6.37311 19.377 6.43576 20.1034 6.65325 20.7855C6.87074 21.4676 7.23713 22.0868 7.72372 22.5956C8.21031 23.1045 8.80397 23.4898 9.45919 23.7214C10.1144 23.953 10.8133 24.0249 11.5012 23.9316C12.1892 23.8383 12.848 23.5822 13.4262 23.1831C14.0044 22.784 14.4868 22.2524 14.8364 21.6294C15.5226 22.044 16.3106 22.2447 17.1077 22.2083C17.9047 22.1718 18.6779 21.8996 19.3365 21.4234C19.995 20.9472 20.5115 20.2867 20.8256 19.5196C21.1397 18.7526 21.2385 17.9107 21.1102 17.0925C21.8031 16.8117 22.4126 16.3574 22.8795 15.7738C23.3463 15.1902 23.6541 14.4976 23.7724 13.7642C23.8908 13.0309 23.8156 12.282 23.5544 11.5909C23.2931 10.8999 22.8546 10.2903 22.2819 9.82116ZM11.4542 5.37326C11.6644 5.00693 11.9547 4.69371 12.3023 4.45781C12.6499 4.22191 13.0454 4.06979 13.4579 4.01327C13.8703 3.95675 14.2887 3.99736 14.6802 4.13192C15.0718 4.26647 15.426 4.49132 15.7153 4.78877L15.6599 4.81977L10.3727 7.87189L10.3722 7.87139L8.47275 8.96781C8.6368 8.19794 9.02033 7.49479 9.57504 6.94553C10.1297 6.39627 10.8307 6.02517 11.5891 5.87879L11.4542 5.37326ZM4.39343 8.35249C4.26799 7.93922 4.23869 7.50269 4.3078 7.07689C4.37691 6.65109 4.54258 6.24718 4.79183 5.89689C5.04107 5.5466 5.36712 5.25925 5.74452 5.05739C6.12192 4.85553 6.54041 4.74457 6.96733 4.73312L12.2534 7.78523L10.3229 8.8998L7.38212 10.5973C6.77977 9.99283 6.01168 9.59972 5.17462 9.46747C4.33756 9.33522 3.46887 9.46979 2.67811 9.85429L4.39343 8.35249ZM3.38855 14.4741C3.17835 14.8404 2.88806 15.1537 2.54046 15.3896C2.19286 15.6255 1.79737 15.7776 1.38491 15.8341C0.972457 15.8906 0.554035 15.85 0.162544 15.7154C-0.228947 15.5809 -0.583196 15.356 -0.872473 15.0586L4.47012 11.9755L6.37009 10.8791C6.20604 11.6489 5.82251 12.3521 5.2678 12.9013C4.71309 13.4506 4.01205 13.8217 3.25367 13.9681L3.38855 14.4741ZM10.4394 18.4944C10.5649 18.9077 10.5942 19.3442 10.5251 19.77C10.456 20.1958 10.3593 20.5997 10.11 20.95C9.86079 21.3003 9.53474 21.5876 9.15734 21.7895C8.77994 21.9913 8.36145 22.1023 7.93453 22.1137L2.64843 19.0616L4.57891 17.947L7.51974 16.2495C8.12209 16.854 8.89018 17.2471 9.72724 17.3794C10.5643 17.5116 11.433 17.3771 12.2238 16.9926L10.4394 18.4944ZM19.6644 12.4949C19.7899 12.9082 19.8192 13.3447 19.7501 13.7705C19.681 14.1963 19.5153 14.6002 19.2661 14.9505C19.0168 15.3008 18.6908 15.5881 18.3134 15.79C17.936 15.9919 17.5175 16.1028 17.0905 16.1143L11.8044 13.0622L13.7349 11.9476L16.6758 10.2501C17.2781 10.8546 18.0462 11.2477 18.8833 11.38C19.7203 11.5122 20.589 11.3777 21.3798 10.9932L19.6644 12.4949ZM13.5187 8.95159L13.5192 8.95109L15.4187 7.85467C15.2546 8.62454 14.8711 9.32769 14.3164 9.87695C13.7617 10.4262 13.0606 10.7973 12.3023 10.9437L12.4372 11.4492C12.227 11.8156 11.9367 12.1288 11.5891 12.3647C11.2415 12.6006 10.846 12.7527 10.4335 12.8092C10.0211 12.8657 9.60269 12.8251 9.21122 12.6906C8.81976 12.556 8.46554 12.3312 8.17621 12.0337L13.5187 8.95159Z" /></svg>
);

const RampLogo = ({ className = "w-full h-full" }: { className?: string }) => (
    <svg viewBox="0 0 100 100" fill="currentColor" className={className}>
       <path d="M10 10H40C65 10 80 25 80 50C80 75 65 90 40 90H10V10Z" />
    </svg>
);

const BrexLogo = ({ className = "w-full h-full" }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M7 4h5c2.5 0 4.5 1.5 4.5 4s-1.5 3.5-3.5 3.8c2.5.5 4 2 4 4.7C17 19 15 21 12 21H7V4zm3 2v6h2.5c1.5 0 2.5-1 2.5-2.5S14 7 12.5 7H10zm0 8v5h2.5c1.8 0 3-1.2 3-3s-1.2-3-3-3H10z" />
    </svg>
);

const ScaleLogo = ({ className = "w-full h-full" }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M4 4h16v16H4V4zm2 2v12h12V6H6z" />
        <rect x="8" y="8" width="8" height="8" fill="currentColor" />
    </svg>
);

// --- Components ---

const CustomerCard: React.FC<{
    logo: React.ReactNode;
    bgLogo?: React.ReactNode;
    quote: string;
    linkText: string;
    className?: string;
    size?: 'large' | 'medium';
}> = ({ logo, bgLogo, quote, linkText, className = '', size = 'large' }) => (
    <div className={`relative p-8 rounded-xl border border-black/10 bg-[#F7F8F9] hover:border-black/20 transition-colors flex flex-col justify-between overflow-hidden group ${className} ${size === 'large' ? 'h-[280px]' : 'h-[240px]'}`}>
        {/* Grid Background */}
        <CardGridPattern />

        {/* Background Watermark Logo - Animated */}
        {bgLogo && (
            <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-[0.05] pointer-events-none flex items-center justify-center overflow-hidden">
                <div className="transform scale-150 translate-x-12 translate-y-4 text-black animate-subtle-drift origin-center w-full h-full flex items-center justify-center">
                    {bgLogo}
                </div>
            </div>
        )}
        
        <div className="relative z-10 mb-auto text-black">
            {logo}
        </div>
        
        <div className="relative z-10 mt-auto flex items-end justify-between gap-4">
            <div className="max-w-[85%]">
                <h3 className="text-xl md:text-2xl font-medium text-black mb-4 leading-tight tracking-tight">
                    {quote}
                </h3>
                <div className="flex items-center text-text-muted hover:text-black transition-colors cursor-pointer text-sm font-medium">
                    <span className="mr-2">{linkText}</span>
                </div>
            </div>
            <div className="mb-1">
                 <ArrowRight size={16} className="text-black opacity-0 group-hover:opacity-100 transition-all transform -translate-x-2 group-hover:translate-x-0" />
            </div>
        </div>
    </div>
);

const CustomerListItem: React.FC<{
    name: string;
    type: string;
    link: string;
    icon?: React.ReactNode;
}> = ({ name, type, link, icon }) => (
    <div className="group flex items-center justify-between py-4 border-b border-black/5 hover:bg-surface/50 px-4 -mx-4 rounded-lg transition-colors cursor-pointer">
        <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-white border border-black/5 rounded flex items-center justify-center text-black overflow-hidden">
                {icon || <div className="w-3 h-3 bg-black/20 rounded-full"></div>}
            </div>
            <span className="font-medium text-black text-sm">{name}</span>
        </div>
        <div className="flex items-center gap-8">
                <span className="text-text-muted hidden md:block text-xs">{type}</span>
                <div className="flex items-center text-text-muted group-hover:text-black transition-colors min-w-[80px] justify-end">
                <span className="mr-1 text-xs font-medium">{link}</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[10px]">↗</span>
                </div>
        </div>
    </div>
);

// --- Animation Hooks & Components ---

// Reusable component to apply the blur-fade-in animation when the element enters view
const BlurFadeIn: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({ children, delay = 0, className = "" }) => {
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

    // The key here forces animation replay if we wanted, but standard CSS animation fill-mode forwards handles it.
    return (
        <div 
            ref={ref} 
            className={`transition-opacity duration-300 ${isInView ? 'opacity-100' : 'opacity-0'} ${className}`}
        >
            <div className={`${isInView ? 'animate-[blur-fade-in_0.8s_ease-out_forwards]' : ''}`} style={{ animationDelay: `${delay}ms` }}>
                {children}
            </div>
        </div>
    );
};

const useCountUp = (end: number, duration: number = 1500, decimals: number = 0, easing: 'easeOut' | 'easeInExpo' = 'easeOut') => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated) {
        setHasAnimated(true);
        let startTime: number | null = null;
        
        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            
            let ease;
            if (easing === 'easeInExpo') {
                // Exponential Ease In
                ease = progress * progress * progress; 
            } else {
                // Default Ease Out Quart
                ease = 1 - Math.pow(1 - progress, 4);
            }
            
            const currentVal = ease * end;
            setCount(currentVal);

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };
        
        requestAnimationFrame(animate);
        observer.disconnect();
      }
    }, { threshold: 0.5 });
    
    if (ref.current) observer.observe(ref.current as Element);
    
    return () => observer.disconnect();
  }, [end, duration, decimals, easing, hasAnimated]);
  
  return { count, ref };
};

const AnimatedStat: React.FC<{ value: number; decimals?: number; suffix?: string; label: string; duration?: number }> = ({ value, decimals = 0, suffix = '', label, duration = 1500 }) => {
    const { count, ref } = useCountUp(value, duration, decimals, 'easeOut');
    
    return (
        <BlurFadeIn>
            <div ref={ref}>
                <div className="text-6xl md:text-8xl font-medium text-black mb-2 tracking-tight">
                    {count.toFixed(decimals)}{suffix}
                </div>
                <div className="text-text-muted text-lg">{label}</div>
            </div>
        </BlurFadeIn>
    );
};

// Inline helper for numbers in text (e.g. 20,000)
const InlineAnimatedNumber: React.FC<{ value: number; duration?: number; className?: string }> = ({ value, duration = 1500, className = "" }) => {
    const { count, ref } = useCountUp(value, duration, 0, 'easeInExpo');
    return <span ref={ref as React.RefObject<HTMLSpanElement>} className={className}>{Math.floor(count).toLocaleString()}</span>;
};

// Word-by-word animation component
const BlurFadeWords: React.FC<{ 
    text: string | (string | React.ReactNode)[]; 
    className?: string;
    baseDelay?: number;
}> = ({ text, className = "", baseDelay = 0 }) => {
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

    // If text is string, split by space. If array, use as is.
    const words = Array.isArray(text) ? text : (typeof text === 'string' ? text.split(' ') : []);

    return (
        <div ref={ref} className={className}>
            {words.map((word, i) => (
                <span 
                  key={i} 
                  className={`inline-block mr-[0.25em] last:mr-0 transition-all duration-700 ease-out ${isInView ? 'opacity-100 blur-0 translate-y-0' : 'opacity-0 blur-sm translate-y-4'}`}
                  style={{ transitionDelay: `${baseDelay + (i * 100)}ms` }}
                >
                  {word}
                </span>
            ))}
        </div>
    );
}

// --- Data ---
const FILTERS = ['Featured', 'SaaS', 'AI', 'Fintech', 'Consumer', 'Hardware', 'Health', 'Enterprise'];

interface CustomerData {
    id: string;
    name: string;
    logo: React.ReactNode;
    bgLogo?: React.ReactNode;
    quote: string;
    tags: string[];
    link: string;
    featured?: boolean;
}

const CUSTOMERS: CustomerData[] = [
    {
        id: 'mercury',
        name: 'Mercury',
        logo: <div className="font-medium text-xl flex items-center gap-2"><div className="w-6 h-6 border border-black/20 rounded-full flex items-center justify-center">🌀</div> Mercury</div>,
        quote: "Linear Projects give Mercury a source-of-truth across all their work",
        tags: ['Fintech', 'SaaS', 'Featured'],
        link: "Read story"
    },
    {
        id: 'retool',
        name: 'Retool',
        logo: <div className="font-medium text-xl flex items-center gap-2"><div className="w-6 h-6 bg-blue-600 rounded text-white flex items-center justify-center text-[10px]">R</div> Retool</div>,
        quote: "Linear keeps Retool's teams customer-focused",
        tags: ['SaaS', 'Enterprise', 'Featured'],
        link: "Read story"
    },
    {
        id: 'cashapp',
        name: 'Cash App',
        logo: <div className="font-medium text-xl flex items-center gap-2"><div className="w-6 h-6 bg-green-500 rounded-full text-white flex items-center justify-center text-xs">$</div> Cash App</div>,
        quote: "Linear helps Cash App manage aggressive roadmaps",
        tags: ['Fintech', 'Consumer', 'Featured'],
        link: "Read story"
    },
    {
        id: 'pleo',
        name: 'Pleo',
        logo: <div className="font-medium text-xl flex items-center gap-2">Pleo</div>,
        quote: "Pleo transitioned their internal support workflows to Linear Asks",
        tags: ['Fintech', 'SaaS', 'Featured'],
        link: "Read story"
    },
    {
        id: 'clio',
        name: 'Clio',
        logo: <div className="font-medium text-xl flex items-center gap-2"><div className="w-6 h-6 bg-blue-500 rounded-full text-white flex items-center justify-center text-xs">✓</div> Clio</div>,
        quote: "How Linear helps engineering managers at Clio operate more efficiently",
        tags: ['SaaS', 'Featured'],
        link: "Read story"
    },
    {
        id: 'sierra',
        name: 'Sierra',
        logo: <div className="font-medium text-xl flex items-center gap-2"><div className="w-6 h-6 rounded-full border border-black/20 flex items-center justify-center text-xs">⚛</div> Sierra</div>,
        quote: "From project updates to accountability, Sierra moves as one company in Linear",
        tags: ['AI', 'Featured'],
        link: "Read story"
    },
    // Extra Data for Filtering
    {
        id: 'runway',
        name: 'Runway',
        logo: <div className="font-medium text-xl flex items-center gap-2"><div className="w-6 h-6 bg-purple-500 rounded-full"></div>Runway</div>,
        quote: "Building the next generation of creative tools",
        tags: ['AI', 'SaaS'],
        link: "Read story"
    },
    {
        id: 'arc',
        name: 'Arc',
        logo: <div className="font-medium text-xl flex items-center gap-2">Arc</div>,
        quote: "Reimagining the internet browser",
        tags: ['Consumer', 'SaaS'],
        link: "Read story"
    },
     {
        id: 'frame',
        name: 'Frame',
        logo: <div className="font-medium text-xl flex items-center gap-2">Frame</div>,
        quote: "The future of computing glasses",
        tags: ['Hardware', 'AI'],
        link: "Read story"
    },
    {
        id: 'levels',
        name: 'Levels',
        logo: <div className="font-medium text-xl flex items-center gap-2">Levels</div>,
        quote: "Metabolic health monitoring for everyone",
        tags: ['Health', 'Consumer'],
        link: "Read story"
    }
];

export const Customers: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('Featured');
  
  // Filter customers logic
  const filteredCustomers = activeFilter === 'Featured' 
    ? CUSTOMERS.filter(c => c.tags.includes('Featured'))
    : CUSTOMERS.filter(c => c.tags.includes(activeFilter));

  return (
    <div className="min-h-screen bg-background pt-24">
      <Container>
        {/* Left Aligned Hero Section - Optimized spacing */}
        <div className="mb-16 flex flex-col items-start text-left max-w-3xl">
            <h1 className="text-5xl md:text-6xl lg:text-[5.5rem] font-medium text-text-main mb-6 tracking-tight leading-[0.95] text-left">
                <BlurFadeWords 
                   text={["Meet", "the", "teams", "who", "build", "the", "future"]} 
                />
            </h1>
            
            <BlurFadeIn delay={400}>
                <p className="text-lg text-text-muted mb-6 leading-relaxed text-left max-w-xl">
                    Trusted by more than 20,000 organizations,<br className="hidden md:block"/> from ambitious startups to major enterprises.
                </p>
            </BlurFadeIn>
            
            <BlurFadeIn delay={600}>
                 <a href="#" className="flex items-center gap-1 text-primary hover:text-[#d4432d] transition-colors font-medium text-base">
                    Make the switch <ChevronRight size={16} />
                </a>
            </BlurFadeIn>
        </div>

        {/* Featured Customers Grid - Compact sizing & Grid Pattern */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-24 opacity-0 animate-[blur-fade-in_0.8s_ease-out_0.6s_forwards]">
            {/* OpenAI */}
            <CustomerCard 
                logo={
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 text-black border border-black/10 rounded-lg p-1.5 bg-white shadow-sm">
                            <OpenAILogo /> 
                        </div>
                        <div className="flex flex-col">
                            <span className="font-medium text-sm text-black">OpenAI</span>
                            <span className="text-[10px] text-text-muted">ChatGPT</span>
                        </div>
                    </div>
                }
                bgLogo={<OpenAILogo />}
                quote="Moving fast and tackling complexity: building systems that scale at OpenAI"
                linkText="Read story"
            />
            {/* Ramp */}
            <CustomerCard 
                logo={
                    <div className="flex items-center gap-2">
                        {/* Ramp Logo Icon */}
                        <div className="w-10 h-10 bg-[#FBCE00] rounded-lg flex items-center justify-center text-black font-bold text-xs relative overflow-hidden shadow-sm border border-black/5">
                            <div className="absolute inset-0 flex items-center justify-center font-bold text-xl">r</div>
                        </div>
                    </div>
                }
                bgLogo={<RampLogo />}
                quote="Why Ramp chose the fastest-moving product tool"
                linkText="Read story"
            />
             {/* Brex */}
            <CustomerCard 
                logo={
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center text-white font-serif text-xl italic shadow-sm">B</div>
                    </div>
                }
                bgLogo={<BrexLogo />}
                quote="“One roadmap”: How Brex consolidated their fragmented planning"
                linkText="Read story"
            />
             {/* Scale */}
             <CustomerCard 
                logo={
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center text-white text-xs font-bold shadow-sm">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M22 2L2 22H22V2Z" /></svg>
                        </div>
                    </div>
                }
                bgLogo={<ScaleLogo />}
                quote="Linear accelerates Scale’s high velocity"
                linkText="Read story"
            />
        </div>

        {/* Stats Section - Redesigned Layout */}
        <div className="border-y border-black/5 py-24 mb-32 w-full">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-0 items-center">
                
                {/* Left Side: Stats (aligned to end) */}
                <div className="flex flex-col md:flex-row gap-12 md:gap-24 justify-center md:justify-end md:pr-20 text-center md:text-left">
                    <AnimatedStat value={2} suffix="x" label="Increase in filed issues" duration={800} />
                    <AnimatedStat value={1.6} decimals={1} suffix="x" label="Faster issue resolution" duration={800} />
                </div>
                
                {/* Divider (centered) */}
                <div className="hidden md:block w-px h-24 bg-black/10 justify-self-center"></div>
                
                {/* Right Side: Text (aligned to start) */}
                <div className="flex justify-center md:justify-start md:pl-20">
                     <p className="text-lg md:text-xl text-text-muted max-w-xs leading-relaxed text-center md:text-left">
                        Teams that switch to Linear create more issues and close them faster <span className="opacity-50 inline-block align-middle ml-1"><Info size={16} /></span>
                    </p>
                </div>
            </div>
        </div>

        {/* More Stories Section */}
        <div className="max-w-[1200px] mx-auto pb-32">
            <h2 className="text-3xl md:text-4xl font-medium text-black mb-12 text-center tracking-tight">
                <BlurFadeWords 
                    text={[
                        "Powering", 
                        <InlineAnimatedNumber key="num" value={20000} duration={1800} />, 
                        "+", 
                        "ambitious", 
                        "product", 
                        "teams", 
                        "of", 
                        "all", 
                        "shapes", 
                        "and", 
                        "sizes"
                    ]}
                />
            </h2>
            
            {/* Filter Pills - Functional with Orange Theme */}
            <div className="flex flex-wrap justify-center gap-2 mb-16">
                {FILTERS.map(filter => (
                    <button 
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all hover:scale-105 ${
                            activeFilter === filter 
                            ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                            : 'bg-surface border border-black/5 text-text-muted hover:text-primary hover:bg-black/5'
                        }`}
                    >
                        {filter}
                    </button>
                ))}
            </div>

            {/* Medium Grid - Dynamic Filtering */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {filteredCustomers.length > 0 ? (
                    filteredCustomers.map(customer => (
                        <CustomerCard 
                            key={customer.id}
                            size="medium"
                            logo={customer.logo}
                            quote={customer.quote}
                            linkText={customer.link}
                            className="animate-[blur-fade-in_0.3s_ease-out]"
                        />
                    ))
                ) : (
                    <div className="col-span-3 text-center py-20 text-text-muted">
                        No stories found for this category.
                    </div>
                )}
            </div>

            {/* Customer List */}
            <div className="border-t border-black/5 pt-4">
                <CustomerListItem 
                    name="Watershed" 
                    type="SaaS" 
                    link="Read story" 
                    icon={<div className="w-full h-full bg-black rounded-full"></div>}
                />
                <CustomerListItem 
                    name="Lovable" 
                    type="AI" 
                    link="Visit site" 
                    icon={<span className="text-lg">♥</span>}
                />
                <CustomerListItem 
                    name="Remote" 
                    type="SaaS, Enterprise" 
                    link="Read story" 
                    icon={<div className="w-full h-full bg-black rounded-full"></div>}
                />
                <CustomerListItem 
                    name="Polymarket" 
                    type="Consumer" 
                    link="Visit site" 
                    icon={<div className="w-full h-full border-2 border-blue-500 rounded-full"></div>}
                />
                <CustomerListItem 
                    name="Boom" 
                    type="Hardware" 
                    link="Visit site" 
                    icon={<div className="text-xl">✈</div>}
                />
            </div>
        </div>
      </Container>
    </div>
  );
};