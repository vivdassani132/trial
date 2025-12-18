import React from 'react';
import { Eye, Github, Apple } from 'lucide-react';

interface SignUpProps {
  onBack: () => void;
}

export const SignUp: React.FC<SignUpProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row bg-[#080808]">
        
        {/* Left Side - Gradient Panel (Full Height) */}
        <div className="w-full md:w-[45%] h-full min-h-[400px] md:min-h-screen relative p-8 md:p-16 flex flex-col justify-between overflow-hidden">
          {/* Gradient Background simulation */}
          <div className="absolute inset-0 z-0 brightness-[0.75]">
            {/* Base */}
            <div className="absolute inset-0 bg-[#E94E35]"></div>
            
            {/* Soft Blurs to mimic the mesh gradient from image */}
            <div className="absolute top-[-20%] left-[-20%] w-[140%] h-[140%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#FFD1C1] via-[#E94E35] to-[#BF3621] opacity-90 blur-xl"></div>
            <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-t from-[#E94E35] to-transparent opacity-80 mix-blend-overlay"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_white_0%,_transparent_50%)] opacity-30"></div>
          </div>

          {/* Logo on Gradient */}
          <div className="relative z-10">
            <div className="flex items-center gap-2 cursor-pointer group" onClick={onBack}>
               <div className="relative w-8 h-8 transition-transform group-hover:scale-105 filter drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                 <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    {/* White logo base for visibility on gradient */}
                    <path d="M10 10H90V90H10V10Z" fill="#FFFFFF" />
                    <path d="M50 20C50 36.5685 36.5685 50 20 50C36.5685 50 50 63.4315 50 80C50 63.4315 63.4315 50 80 50C63.4315 50 50 36.5685 50 20Z" fill="#E94E35"/>
                 </svg>
               </div>
               <span className="font-serif italic font-medium text-2xl tracking-tight text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">Arluma</span>
            </div>
          </div>

          {/* Bottom Text */}
          <div className="relative z-10 mt-auto pt-20">
             <p className="text-white text-base font-medium mb-4 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">You can easily</p>
             <h2 className="text-4xl md:text-5xl font-medium text-white leading-[1.1] tracking-tight max-w-lg drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
               Get access your personal hub for <span className="font-serif italic font-bold">clarity</span> and productivity.
             </h2>
          </div>
        </div>

        {/* Right Side - Form (Full Height) */}
        <div className="w-full md:w-[55%] h-full md:min-h-screen p-8 md:p-24 flex flex-col justify-center bg-[#080808]">
           <div className="max-w-md w-full mx-auto">
              
              {/* Header */}
              <div className="mb-12 relative">
                 <div className="absolute -top-6 left-0 text-[#E94E35] text-5xl leading-none">*</div>
                 <h1 className="text-4xl md:text-5xl font-serif italic font-bold text-white mb-4">Create an account</h1>
                 <p className="text-text-muted text-base leading-relaxed">
                   Access your tasks, notes, and projects anytime, anywhere - and keep everything flowing in one place.
                 </p>
              </div>

              {/* Inputs */}
              <div className="space-y-6 mb-10">
                 <div>
                    <label className="block text-xs font-medium text-white/60 mb-2 ml-1 uppercase tracking-wider">Your email</label>
                    <input 
                      type="email" 
                      placeholder="natalia.brak@knmstudio.com" 
                      className="w-full bg-[#121212] border border-white/10 rounded-xl px-5 py-4 text-base text-white placeholder:text-white/20 focus:outline-none focus:border-[#E94E35] focus:ring-1 focus:ring-[#E94E35] transition-all"
                    />
                 </div>
                 <div>
                    <label className="block text-xs font-medium text-white/60 mb-2 ml-1 uppercase tracking-wider">Create password</label>
                    <div className="relative">
                      <input 
                        type="password" 
                        placeholder="••••••••••••" 
                        className="w-full bg-[#121212] border border-white/10 rounded-xl px-5 py-4 text-base text-white placeholder:text-white/20 focus:outline-none focus:border-[#E94E35] focus:ring-1 focus:ring-[#E94E35] transition-all pr-12"
                      />
                      <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors">
                        <Eye size={20} />
                      </button>
                    </div>
                 </div>
              </div>

              {/* Action Button */}
              <button className="w-full bg-[#E94E35] hover:bg-[#d4432d] text-white font-medium text-lg py-4 rounded-xl transition-all shadow-[0_0_30px_rgba(233,78,53,0.3)] hover:shadow-[0_0_40px_rgba(233,78,53,0.5)] mb-10 transform hover:-translate-y-0.5">
                Create account
              </button>

              {/* Divider */}
              <div className="relative flex items-center justify-center mb-10">
                 <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-white/5"></div>
                 </div>
                 <span className="relative bg-[#080808] px-4 text-xs text-white/30 uppercase tracking-widest">or continue with</span>
              </div>

              {/* Social Buttons */}
              <div className="grid grid-cols-3 gap-5 mb-10">
                 <button className="flex items-center justify-center h-14 bg-[#121212] border border-white/10 rounded-xl hover:bg-white/5 hover:border-white/20 transition-all text-white group">
                    <svg className="w-6 h-6 opacity-70 group-hover:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="currentColor">
                       <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z" />
                    </svg>
                 </button>
                 <button className="flex items-center justify-center h-14 bg-[#121212] border border-white/10 rounded-xl hover:bg-white/5 hover:border-white/20 transition-all text-white group">
                    <Github size={24} className="opacity-70 group-hover:opacity-100 transition-opacity" />
                 </button>
                 <button className="flex items-center justify-center h-14 bg-[#121212] border border-white/10 rounded-xl hover:bg-white/5 hover:border-white/20 transition-all text-white group">
                    <Apple size={24} className="opacity-70 group-hover:opacity-100 transition-opacity" />
                 </button>
              </div>

              <div className="text-center">
                <span className="text-white/40 text-sm">Already have an account? </span>
                <a href="#" className="text-[#E94E35] hover:text-[#ff6a52] text-sm font-medium transition-colors hover:underline underline-offset-4">Register</a>
              </div>
           </div>
        </div>

    </div>
  );
};