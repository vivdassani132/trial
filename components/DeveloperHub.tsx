
import React, { useState } from 'react';
import { Container } from './ui/Container';
import { Copy, Check } from 'lucide-react';

type PackageManager = 'npm' | 'yarn' | 'pnpm';

export const DeveloperHub: React.FC = () => {
  const [activeTab, setActiveTab] = useState<PackageManager>('npm');
  const [copied, setCopied] = useState(false);

  const installCommands: Record<PackageManager, string> = {
    npm: 'npm i @vercel/speed-insights',
    yarn: 'yarn add @vercel/speed-insights',
    pnpm: 'pnpm add @vercel/speed-insights',
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="integration" className="py-24 md:py-32 bg-white">
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

          <div className="bg-[#0A0A0A] rounded-[40px] p-8 md:p-12 shadow-[0_50px_100px_rgba(0,0,0,0.3)] relative overflow-hidden border border-white/5">
            {/* Step 1 */}
            <div className="mb-14 relative z-10">
              <div className="flex items-start gap-8">
                <div className="flex-shrink-0 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white font-serif italic text-xl shadow-lg shadow-white/5">1</div>
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-white mb-2 tracking-tight">Install our package</h3>
                  <p className="text-white/40 text-sm mb-8 leading-relaxed">Start by installing @vercel/speed-insights in your existing project.</p>
                  
                  {/* Tabs Selector */}
                  <div className="flex items-center gap-8 mb-4 border-b border-white/5">
                    {(['npm', 'yarn', 'pnpm'] as const).map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`pb-4 text-[10px] font-bold uppercase tracking-[0.2em] transition-all relative ${
                          activeTab === tab ? 'text-white' : 'text-white/20 hover:text-white/50'
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
                  <div className="bg-[#111] rounded-xl px-5 py-4 flex items-center justify-between group border border-white/5 hover:border-white/10 transition-colors">
                    <code className="text-sm font-mono text-primary font-medium tracking-tight">
                      {installCommands[activeTab]}
                    </code>
                    <button 
                      onClick={() => handleCopy(installCommands[activeTab])}
                      className="text-white/10 hover:text-white transition-colors"
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
                <div className="flex-shrink-0 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white font-serif italic text-xl shadow-lg shadow-white/5">2</div>
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-white mb-2 tracking-tight">Add the Next.js component</h3>
                  <p className="text-white/40 text-sm mb-8 leading-relaxed">Import and use the &lt;SpeedInsights /&gt; Next.js component into your app's layout or your main file.</p>
                  
                  {/* Code Block */}
                  <div className="bg-[#111] rounded-xl px-6 py-8 group border border-white/5 overflow-hidden">
                    <pre className="text-xs md:text-sm font-mono text-white/90 overflow-x-auto no-scrollbar leading-relaxed">
                      <span className="text-purple-400">import</span> {`{ SpeedInsights } `} <span className="text-purple-400">from</span> <span className="text-green-400">"@vercel/speed-insights/next"</span>
                      {`\n\n`}
                      <span className="text-blue-400">function</span> <span className="text-yellow-400">RootLayout</span>({`{ children }`}) {`{`}
                      {`\n  `} <span className="text-purple-400">return</span> (
                      {`\n    <`}html{`>`}
                      {`\n      <`}body{`>`}
                      {`\n        {children}`}
                      {`\n        <SpeedInsights />`}
                      {`\n      </`}body{`>`}
                      {`\n    </`}html{`>`}
                      {`\n  )`}
                      {`\n}`}
                    </pre>
                  </div>
                  <div className="mt-8 flex items-center gap-1.5 text-xs text-white/20">
                     <span>For full examples and further reference, please refer to our</span>
                     <a href="#" className="text-white/40 hover:text-primary underline underline-offset-4 transition-colors">documentation</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Grid Lines */}
            <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none" 
                 style={{ 
                     backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)', 
                     backgroundSize: '32px 32px' 
                 }}>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
