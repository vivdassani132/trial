import React, { useState, useEffect, useRef } from 'react';
import { Container } from './ui/Container';
import { Button } from './ui/Button';
import { Menu, X, ChevronDown } from 'lucide-react';

interface NavbarProps {
  currentPage?: string;
  onNavigate: (page: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (e: React.MouseEvent, page: string) => {
    e.preventDefault();
    onNavigate(page);
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getNavbarBg = () => {
    if (mobileMenuOpen) return 'bg-white';
    if (scrolled || activeDropdown) return 'bg-white/80 backdrop-blur-xl border-b border-black/5';
    return 'bg-transparent';
  };

  const renderDropdownContent = () => {
    if (activeDropdown === 'product') {
      return (
        <div className="py-12 grid grid-cols-3 gap-12 animate-[blur-fade-in_0.3s_ease-out]">
          <div className="space-y-6">
            <h4 className="text-xs font-bold text-text-muted uppercase tracking-widest">Platform</h4>
            <div className="space-y-4">
              <a href="#" className="block group">
                <div className="text-black font-medium group-hover:text-primary transition-colors">AI Maintenance</div>
                <div className="text-sm text-text-muted">Predictive systems for your home</div>
              </a>
              <a href="#" className="block group">
                <div className="text-black font-medium group-hover:text-primary transition-colors">Trade Dispatch</div>
                <div className="text-sm text-text-muted">Direct access to licensed pros</div>
              </a>
            </div>
          </div>
          <div className="space-y-6">
            <h4 className="text-xs font-bold text-text-muted uppercase tracking-widest">Capabilities</h4>
            <div className="space-y-4">
              <a href="#" className="block group">
                <div className="text-black font-medium group-hover:text-primary transition-colors">Project Planning</div>
                <div className="text-sm text-text-muted">Funding roadmaps for renovations</div>
              </a>
              <a href="#" className="block group">
                <div className="text-black font-medium group-hover:text-primary transition-colors">Budget Sync</div>
                <div className="text-sm text-text-muted">Real-time finance tracking</div>
              </a>
            </div>
          </div>
          <div className="bg-black/5 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="text-black font-medium mb-2">New: Repair Credit</div>
              <div className="text-sm text-text-muted">Get $500/year towards any repair with Arluma Pro.</div>
            </div>
            <a href="#" className="text-primary text-sm font-medium flex items-center gap-1 mt-4">Learn more <ChevronDown size={14} className="-rotate-90" /></a>
          </div>
        </div>
      );
    }
    if (activeDropdown === 'resources') {
      return (
        <div className="py-12 grid grid-cols-3 gap-12 animate-[blur-fade-in_0.3s_ease-out]">
          <div className="space-y-6">
            <h4 className="text-xs font-bold text-text-muted uppercase tracking-widest">Learn</h4>
            <div className="space-y-4">
              <a href="#" className="block group">
                <div className="text-black font-medium group-hover:text-primary transition-colors">Documentation</div>
                <div className="text-sm text-text-muted">How Arluma models your home</div>
              </a>
              <a href="#" className="block group">
                <div className="text-black font-medium group-hover:text-primary transition-colors">Maintenance Guide</div>
                <div className="text-sm text-text-muted">Seasonal checklists for homeowners</div>
              </a>
            </div>
          </div>
          <div className="space-y-6">
            <h4 className="text-xs font-bold text-text-muted uppercase tracking-widest">Support</h4>
            <div className="space-y-4">
              <a href="#" className="block group">
                <div className="text-black font-medium group-hover:text-primary transition-colors">Help Center</div>
                <div className="text-sm text-text-muted">Get answers to common questions</div>
              </a>
              <a href="#" className="block group">
                <div className="text-black font-medium group-hover:text-primary transition-colors">Community</div>
                <div className="text-sm text-text-muted">Join the homeowner network</div>
              </a>
            </div>
          </div>
          <div className="bg-primary/5 rounded-2xl p-6 flex flex-col justify-between border border-primary/10">
            <div>
              <div className="text-primary font-medium mb-2">Partner with us</div>
              <div className="text-sm text-text-muted">Are you a licensed trade professional? Join our verified network today.</div>
            </div>
            <a href="#" className="text-primary text-sm font-medium flex items-center gap-1 mt-4">Trade Portal <ChevronDown size={14} className="-rotate-90" /></a>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <nav 
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${getNavbarBg()}`}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <Container>
        <div className="flex items-center justify-between h-16 relative z-50">
          <div className="flex items-center gap-8">
            <a 
                href="#" 
                onClick={(e) => handleNavClick(e, 'home')} 
                onMouseEnter={() => setActiveDropdown(null)}
                className="flex items-center gap-2 group cursor-pointer"
            >
              <div className="relative w-8 h-8">
                 <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <path d="M10 10H90V90H10V10Z" fill="#E94E35" />
                    <path d="M50 20C50 36.5685 36.5685 50 20 50C36.5685 50 50 63.4315 50 80C50 63.4315 63.4315 50 80 50C63.4315 50 50 36.5685 50 20Z" fill="#18181B"/>
                 </svg>
              </div>
              <span className="font-serif italic font-medium text-2xl tracking-tight text-text-main">Arluma</span>
            </a>

            <div className="hidden md:flex items-center gap-1">
              <button 
                onMouseEnter={() => setActiveDropdown('product')}
                className={`text-sm px-3 py-2 rounded-md transition-colors flex items-center gap-1 ${activeDropdown === 'product' ? 'text-black bg-black/5' : 'text-text-muted hover:text-black hover:bg-black/5'}`}
              >
                Product <ChevronDown size={12} className={`transition-transform duration-300 ${activeDropdown === 'product' ? 'rotate-180' : ''}`} />
              </button>

              <button 
                onMouseEnter={() => setActiveDropdown('resources')}
                className={`text-sm px-3 py-2 rounded-md transition-colors flex items-center gap-1 ${activeDropdown === 'resources' ? 'text-black bg-black/5' : 'text-text-muted hover:text-black hover:bg-black/5'}`}
              >
                Resources <ChevronDown size={12} className={`transition-transform duration-300 ${activeDropdown === 'resources' ? 'rotate-180' : ''}`} />
              </button>

              <a 
                href="#" 
                onMouseEnter={() => setActiveDropdown(null)}
                onClick={(e) => handleNavClick(e, 'customers')} 
                className={`text-sm px-3 py-2 rounded-md transition-colors ${currentPage === 'customers' ? 'text-black bg-black/5' : 'text-text-muted hover:text-black hover:bg-black/5'}`}
              >
                Customers
              </a>

              <a 
                href="#" 
                onMouseEnter={() => setActiveDropdown(null)}
                onClick={(e) => handleNavClick(e, 'pricing')} 
                className={`text-sm px-3 py-2 rounded-md transition-colors ${currentPage === 'pricing' ? 'text-black bg-black/5' : 'text-text-muted hover:text-black hover:bg-black/5'}`}
              >
                Pricing
              </a>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button size="sm" className="rounded-full px-6 bg-black text-white hover:bg-neutral-800">Start Free</Button>
          </div>

          <button className="md:hidden text-text-main" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </Container>
      
      {/* Mega Menu Dropdown */}
      <div 
        className={`dropdown-ease absolute top-full left-0 right-0 bg-white border-b border-black/5 shadow-2xl overflow-hidden z-40 ${activeDropdown ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible pointer-events-none'}`}
      >
        <Container>
            {renderDropdownContent()}
        </Container>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-black/5 p-6 space-y-4 animate-in fade-in slide-in-from-top-4">
            <a href="#" onClick={(e) => handleNavClick(e, 'home')} className="block text-lg font-medium">Product</a>
            <a href="#" onClick={(e) => handleNavClick(e, 'customers')} className="block text-lg font-medium">Customers</a>
            <a href="#" onClick={(e) => handleNavClick(e, 'pricing')} className="block text-lg font-medium">Pricing</a>
            <Button className="w-full rounded-full">Start Free</Button>
        </div>
      )}
    </nav>
  );
};