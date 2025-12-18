import React from 'react';
import { Container } from './ui/Container';
import { Button } from './ui/Button';

const TeamMember: React.FC<{ name: string; role: string; img?: string }> = ({ name, role, img }) => (
    <div className="flex flex-col gap-3">
        <div className="aspect-square bg-surface rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
             {/* Placeholder for team image */}
             <div className="w-full h-full bg-gradient-to-br from-black/5 to-black/20 flex items-center justify-center">
                {img ? <img src={img} alt={name} className="w-full h-full object-cover" /> : <div className="text-4xl opacity-20">👤</div>}
             </div>
        </div>
        <div>
            <div className="font-medium text-black">{name}</div>
            <div className="text-sm text-text-muted">{role}</div>
        </div>
    </div>
);

export const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <Container>
         {/* Hero */}
         <div className="mb-32">
             <h1 className="text-5xl md:text-8xl font-medium text-text-main tracking-tight leading-[1] mb-12 max-w-5xl">
                Linear is bringing magic back to software
             </h1>
             
             {/* Abstract Graphic */}
             <div className="w-full h-[400px] md:h-[600px] bg-black rounded-[32px] overflow-hidden relative mb-24">
                 {/* Recreating the "Insights" graph visual from screenshot */}
                 <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-3/4 h-3/4 relative">
                          <div className="absolute top-10 left-10 text-white/90 text-xl font-medium">Insights</div>
                          <div className="absolute top-24 left-10 text-white text-6xl font-medium">731 <span className="text-2xl text-white/50 font-normal">issues</span></div>
                          
                          {/* Fake Graph Dots */}
                          <div className="absolute bottom-10 inset-x-10 h-64 border-l border-b border-white/10">
                              {[...Array(20)].map((_, i) => (
                                  <div 
                                    key={i} 
                                    className="absolute w-2 h-2 rounded-full bg-blue-500"
                                    style={{
                                        left: `${Math.random() * 100}%`,
                                        bottom: `${Math.random() * 100}%`,
                                        opacity: Math.random()
                                    }}
                                  ></div>
                              ))}
                              {[...Array(20)].map((_, i) => (
                                  <div 
                                    key={`g-${i}`} 
                                    className="absolute w-2 h-2 rounded-full bg-green-500"
                                    style={{
                                        left: `${Math.random() * 100}%`,
                                        bottom: `${Math.random() * 100}%`,
                                        opacity: Math.random()
                                    }}
                                  ></div>
                              ))}
                          </div>
                      </div>
                 </div>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
                 <h2 className="text-4xl md:text-5xl font-medium text-text-main tracking-tight leading-[1.1]">
                    We're crafting the project planning tool for teams that care about quality
                 </h2>
                 <div className="space-y-6 text-lg text-text-muted leading-relaxed">
                    <p>
                        Computers used to be magical. But much of that magic has been lost over time, replaced by subpar tools and practices that slow teams down and hold back great work. Frustrated with the status quo, we decided to build something better. Something that teams would actually enjoy using. We named it Linear to signify progress.
                    </p>
                    <p>
                        What started as a simple issue tracker, has since evolved into a powerful project and issue tracking system that streamlines workflows across the entire product development process. We don't think of Linear as just a better "tool", but as a better "way" to build software.
                    </p>
                    <p>
                        Today, thousands of teams around the globe — from early-stage startups to public companies — use Linear to build their products. Linear helps them to focus on what they do best: Crafting software experiences that feel magical again.
                    </p>
                 </div>
             </div>
         </div>

         {/* Values */}
         <div className="mb-32">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 items-center">
                 <div className="order-2 md:order-1">
                     <h2 className="text-4xl md:text-5xl font-medium text-text-main tracking-tight leading-[1.1] mb-6">
                        We care deeply about the quality of our work
                     </h2>
                     <div className="space-y-6 text-lg text-text-muted leading-relaxed">
                        <p>
                            Linear has always been a fully remote company. Today, our small but mighty team is distributed across North America and Europe. What unites us is relentless focus, fast execution, and our passion for software craftsmanship. We are all makers at heart and care deeply about the quality of our work, down to the smallest detail.
                        </p>
                        <div className="pt-4">
                            <Button size="lg" className="rounded-full bg-black text-white hover:bg-neutral-800">We're hiring <span className="ml-2">→</span></Button>
                        </div>
                     </div>
                 </div>
                 <div className="order-1 md:order-2">
                     <div className="aspect-[4/3] bg-surface rounded-[32px] overflow-hidden">
                        {/* Placeholder for Image */}
                        <div className="w-full h-full bg-black/5 flex items-center justify-center">
                            <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center grayscale opacity-80"></div>
                        </div>
                     </div>
                 </div>
             </div>
         </div>

         {/* Team Grid */}
         <div className="mb-20">
             <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
                 <TeamMember name="Karri Saarinen" role="Co-founder, CEO" />
                 <TeamMember name="Jori Lallo" role="Co-founder, CPO" />
                 <TeamMember name="Tuomas Artman" role="Co-founder, CTO" />
                 <TeamMember name="Tom Moor" role="Head of Engineering" />
                 <TeamMember name="Nan Yu" role="Head of Product" />
                 <TeamMember name="Cristina Cordova" role="COO" />
                 <TeamMember name="Casey Bertenthal" role="Head of Sales" />
                 <TeamMember name="Jamie Finnigan" role="Head of Security" />
                 {/* Adding more rows to match density */}
                 <TeamMember name="Tim Qi" role="Engineer" />
                 <TeamMember name="Matthew Roberts" role="Engineer" />
                 <TeamMember name="Matthijs Wolting" role="Designer" />
                 <TeamMember name="Josh Pyles" role="Engineer" />
             </div>
         </div>

      </Container>
    </div>
  );
};