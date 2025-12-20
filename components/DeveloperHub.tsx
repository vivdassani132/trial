
import React, { useState, useEffect, useRef } from 'react';
import { Container } from './ui/Container';
import { Copy, Check } from 'lucide-react';

type PackageManager = 'npm' | 'yarn' | 'pnpm';

export const DeveloperHub: React.FC = () => {
  const [activeTab, setActiveTab] = useState<PackageManager>('npm');
  const [copied, setCopied] = useState(false);
  const [typedCode, setTypedCode] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const installCommands: Record<PackageManager, string> = {
    npm: 'npm i @vercel/speed-insights',
    yarn: 'yarn add @vercel/speed-insights',
    pnpm: 'pnpm add @vercel/speed-insights',
  };

  const fullCode = `import { SpeedInsights } from "@vercel/speed-insights/next"

function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}`;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isTyping) {
          setIsTyping(true);
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [isTyping]);

  useEffect(() => {
    if (!isTyping) return;

    let i = 0;
    const interval = setInterval(() => {
      setTypedCode(fullCode.slice(0, i));
      i++;
      if (i > fullCode.length) clearInterval(interval);
    }, 25); // Slightly faster typing for better UX

    return () => clearInterval(interval);
  }, [isTyping]);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const highlightCode = (text: string) => {
    return text.split(/(\{|\}|import|from|function|return|<html>|<body>|<\/html>|<\/body>|<SpeedInsights \/>|children|"@vercel\/speed-insights\/next")/g).map((part, i) => {
      const orangeWords = ['import', 'from', 'function', 'return', '<SpeedInsights />'];
      const stringWords = ['"@vercel/speed-insights/next"'];
      
      if (orangeWords.includes(part)) {
        return <span key={i} className="text-[#E94E35] font-bold">{part}</span>;
      }
      if (stringWords.includes(part)) {
        return <span key={i} className="text-[#E94E35]/80">{part}</span>;
      }
      return <span key={i} className="text-black/60">{part}</span>;
    });
  };

  return (
    <section id="integration" className="py-24 md:py-32 bg-white" ref={containerRef}>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-4 text-sm font-medium text-primary">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              <span>Developer SDK</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-medium text-text-main mb-8 tracking-tight leading-[1.05]">
              Home Automation <br/><span className="font-serif italic">at Scale</span>
            </h2>
            <p className="text-lg md:text-xl text-text-muted mb-8 leading-relaxed">
              Arluma's developer tools allow you to monitor performance and health metrics of any property. Seamlessly integrate our diagnostic engine into your existing Next.js application.
            </p>
            <div className="flex items-center gap-6">
               <div className="flex flex-col">
                  <span className="text-2xl font-bold text-black tracking-tight">2.4ms</span>
                  <span className="text-xs text-text-muted uppercase tracking-widest font-bold">Latency</span>
               </div>
               <div className="w-px h-10 bg-black/5"></div>
               <div className="flex flex-col">
                  <span className="text-2xl font-bold text-black tracking-tight">99.9%</span>
                  <span className="text-xs text-text-muted uppercase tracking-widest font-bold">Uptime</span>
               </div>
            </div>
          </div>

          {/* The Mockup - White */}
          <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-[0_40px_80px_rgba(0,0,0,0.06)] relative overflow-hidden border border-black/5">
            {/* Decorative Grid Lines - Super Light Gray */}
            <div className="absolute inset-0 z-0 pointer-events-none" 
                 style={{ 
                     backgroundImage: 'linear-gradient(to right, #F1F1F1 1px, transparent 1px), linear-gradient(to bottom, #F1F1F1 1px, transparent 1px)', 
                     backgroundSize: '32px 32px',
                     opacity: 0.6
                 }}>
            </div>

            {/* Step 1 */}
            <div className="mb-14 relative z-10">
              <div className="flex items-start gap-8">
                <div className="flex-shrink-0 w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-black font-serif italic text-xl shadow-sm bg-white">1</div>
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-black mb-2 tracking-tight">Install our package</h3>
                  <p className="text-black/40 text-sm mb-8 leading-relaxed">Start by installing @vercel/speed-insights in your existing project.</p>
                  
                  {/* Tabs Selector */}
                  <div className="flex items-center gap-8 mb-4 border-b border-black/5">
                    {(['npm', 'yarn', 'pnpm'] as const).map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`pb-4 text-[10px] font-bold uppercase tracking-[0.2em] transition-all relative ${
                          activeTab === tab ? 'text-black' : 'text-black/20 hover:text-black/50'
                        }`}
                      >
                        {tab}
                        {activeTab === tab && (
                          <div className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-primary"></div>
                        )}
                      </button>
                    ))}
                  </div>

                  {/* Code Block */}
                  <div className="bg-surface/50 backdrop-blur-sm rounded-xl px-5 py-4 flex items-center justify-between group border border-black/5 hover:border-black/10 transition-colors">
                    <code className="text-sm font-mono text-primary font-medium tracking-tight">
                      {installCommands[activeTab]}
                    </code>
                    <button 
                      onClick={() => handleCopy(installCommands[activeTab])}
                      className="text-black/10 hover:text-black transition-colors"
                      aria-label="Copy code"
                    >
                      {copied ? <Check size={16} className="text-green-500" /> : <Copy size={14} />}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative z-10">
              <div className="flex items-start gap-8">
                <div className="flex-shrink-0 w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-black font-serif italic text-xl shadow-sm bg-white">2</div>
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-black mb-2 tracking-tight">Add the Next.js component</h3>
                  <p className="text-black/40 text-sm mb-8 leading-relaxed">Import and use the &lt;SpeedInsights /&gt; Next.js component into your app's layout or your main file.</p>
                  
                  {/* Code Block with Typing Animation */}
                  <div className="bg-surface/50 backdrop-blur-sm rounded-xl px-6 py-8 group border border-black/5 overflow-hidden min-h-[240px]">
                    <pre className="text-xs md:text-sm font-mono whitespace-pre-wrap overflow-x-auto no-scrollbar leading-relaxed">
                      {highlightCode(typedCode)}
                      <span className="inline-block w-1.5 h-4 bg-[#E94E35] ml-1 animate-blink align-middle"></span>
                    </pre>
                  </div>
                  <div className="mt-8 flex items-center gap-1.5 text-xs text-black/20">
                     <span>For full examples and further reference, please refer to our</span>
                     <a href="#" className="text-black/40 hover:text-primary underline underline-offset-4 transition-colors">documentation</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
