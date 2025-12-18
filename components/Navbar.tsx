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

  // Close dropdown when clicking outside
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

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  const getNavbarBg = () => {
    if (mobileMenuOpen) return 'bg-transparent';
    if (scrolled || activeDropdown) return 'bg-white/90 backdrop-blur-md border-b border-black/5';
    return 'bg-transparent';
  };

  return (
    <nav 
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${getNavbarBg()}`}
    >
      <Container>
        <div className="flex items-center justify-between h-16 relative z-50">
          <div className="flex items-center gap-8">
            <a 
                href="#" 
                onClick={(e) => handleNavClick(e, 'home')} 
                onMouseEnter={() => setActiveDropdown(null)}
                className="flex items-center gap-2 group cursor-pointer relative"
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
                onClick={() => toggleDropdown('product')}
                onMouseEnter={() => setActiveDropdown('product')}
                className={`text-sm px-3 py-2 rounded-md transition-colors flex items-center gap-1 ${activeDropdown === 'product' ? 'text-black bg-black/5' : 'text-text-muted hover:text-text-main hover:bg-black/5'}`}
              >
                Product <ChevronDown size={12} className={`transition-transform duration-200 ${activeDropdown === 'product' ? 'rotate-180' : ''}`} />
              </button>

              <button 
                onClick={() => toggleDropdown('resources')}
                onMouseEnter={() => setActiveDropdown('resources')}
                className={`text-sm px-3 py-2 rounded-md transition-colors flex items-center gap-1 ${activeDropdown === 'resources' ? 'text-black bg-black/5' : 'text-text-muted hover:text-text-main hover:bg-black/5'}`}
              >
                Resources <ChevronDown size={12} className={`transition-transform duration-200 ${activeDropdown === 'resources' ? 'rotate-180' : ''}`} />
              </button>

              <a 
                href="#"
                onClick={(e) => handleNavClick(e, 'pricing')}
                onMouseEnter={() => setActiveDropdown(null)}
                className={`text-sm px-3 py-2 rounded-md transition-colors ${currentPage === 'pricing' ? 'text-black bg-black/5' : 'text-text-muted hover:text-text-main hover:bg-black/5'}`}
              >
                Pricing
              </a>
              <a 
                href="#"
                onClick={(e) => handleNavClick(e, 'customers')}
                onMouseEnter={() => setActiveDropdown(null)}
                className={`text-sm px-3 py-2 rounded-md transition-colors ${currentPage === 'customers' ? 'text-black bg-black/5' : 'text-text-muted hover:text-text-main hover:bg-black/5'}`}
              >
                Customers
              </a>
              <a 
                href="#"
                onClick={(e) => handleNavClick(e, 'home')} 
                onMouseEnter={() => setActiveDropdown(null)}
                className="text-sm px-3 py-2 rounded-md transition-colors text-text-muted hover:text-text-main hover:bg-black/5"
              >
                Contact
              </a>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a href="#" className="text-sm font-medium text-text-main hover:text-primary transition-colors">Log in</a>
            <Button size="sm" className="rounded-full px-4 bg-black text-white hover:bg-neutral-800">Sign up</Button>
          </div>

          <button className="md:hidden text-text-main relative z-50 p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </Container>
      
      {/* Mega Menus Container */}
      <div 
        className={`dropdown-ease absolute top-full left-0 right-0 bg-white border-b border-black/5 shadow-2xl overflow-hidden z-40 ${activeDropdown ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible pointer-events-none'}`}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <Container>
            <div className="relative">
                {/* Product Content */}
                <div className={`transition-all duration-300 ease-in-out ${activeDropdown === 'product' ? 'opacity-100 translate-x-0 relative' : 'opacity-0 -translate-x-4 absolute inset-0 pointer-events-none'}`}>
                  {activeDropdown === 'product' && (
                    <div className="flex py-8 gap-12">
                        <div className="w-1/3 border-r border-black/5 pr-8">
                            <div className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-4">Core Features</div>
                            <div className="space-y-4">
                                <a href="#" className="group block">
                                    <div className="font-medium text-black group-hover:text-primary transition-colors mb-1">Plan</div>
                                    <div className="text-sm text-text-muted">Set the product direction with projects and initiatives</div>
                                </a>
                                <a href="#" className="group block">
                                    <div className="font-medium text-black group-hover:text-primary transition-colors mb-1">Build</div>
                                    <div className="text-sm text-text-muted">Make progress with issue tracking and cycle planning</div>
                                </a>
                            </div>
                        </div>
                        <div className="w-2/3 grid grid-cols-2 gap-8">
                            <div>
                                <div className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-4">More</div>
                                <div className="space-y-3">
                                    <a href="#" className="block font-medium text-black hover:text-primary text-sm">Customer requests</a>
                                    <a href="#" className="block font-medium text-black hover:text-primary text-sm">Insights</a>
                                    <a href="#" className="block font-medium text-black hover:text-primary text-sm">Linear Asks</a>
                                </div>
                            </div>
                            <div>
                                <div className="h-5 mb-3"></div>
                                <div className="space-y-3">
                                    <a href="#" className="block font-medium text-black hover:text-primary text-sm">Integrations</a>
                                    <a href="#" className="block font-medium text-black hover:text-primary text-sm">Mobile app</a>
                                    <a href="#" className="block font-medium text-black hover:text-primary text-sm">Artificial intelligence</a>
                                </div>
                            </div>
                        </div>
                    </div>
                  )}
                </div>

                {/* Resources Content */}
                <div className={`transition-all duration-300 ease-in-out ${activeDropdown === 'resources' ? 'opacity-100 translate-x-0 relative' : 'opacity-0 translate-x-4 absolute inset-0 pointer-events-none'}`}>
                  {activeDropdown === 'resources' && (
                    <div className="flex py-8 gap-12">
                        <div className="w-1/3 border-r border-black/5 pr-8">
                            <div className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-4">Company</div>
                            <div className="space-y-4">
                                <a href="#" onClick={(e) => handleNavClick(e, 'about')} className="group block">
                                    <div className="font-medium text-black group-hover:text-primary transition-colors mb-1">About</div>
                                    <div className="text-sm text-text-muted">Meet the team</div>
                                </a>
                                <a href="#" className="group block">
                                    <div className="font-medium text-black group-hover:text-primary transition-colors mb-1">Careers</div>
                                    <div className="text-sm text-text-muted">We're hiring</div>
                                </a>
                            </div>
                        </div>
                        <div className="w-2/3 grid grid-cols-2 gap-8">
                            <div>
                                <div className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-4">Explore</div>
                                <div className="space-y-3">
                                    <a href="#" className="block font-medium text-black hover:text-primary text-sm">Developers</a>
                                    <a href="#" className="block font-medium text-black hover:text-primary text-sm">Security</a>
                                    <a href="#" className="block font-medium text-black hover:text-primary text-sm">Docs</a>
                                </div>
                            </div>
                            <div>
                                <div className="h-5 mb-3"></div>
                                <div className="space-y-3">
                                    <a href="#" className="block font-medium text-black hover:text-primary text-sm">Switch to Linear</a>
                                    <a href="#" className="block font-medium text-black hover:text-primary text-sm">Download</a>
                                    <a href="#" className="block font-medium text-black hover:text-primary text-sm">Quality</a>
                                </div>
                            </div>
                        </div>
                    </div>
                  )}
                </div>
            </div>
        </Container>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-40 flex flex-col pt-24 px-6 pb-6 animate-[blur-fade-in_0.2s_ease-out_forwards] overflow-y-auto">
           <div className="flex flex-col gap-6">
                <a href="#" onClick={(e) => handleNavClick(e, 'home')} className="text-xl font-medium text-black border-b border-black/5 pb-2">Product</a>
                <a href="#" onClick={(e) => handleNavClick(e, 'pricing')} className="text-xl font-medium text-black border-b border-black/5 pb-2">Pricing</a>
                <a href="#" onClick={(e) => handleNavClick(e, 'customers')} className="text-xl font-medium text-black border-b border-black/5 pb-2">Customers</a>
                <a href="#" onClick={(e) => handleNavClick(e, 'about')} className="text-xl font-medium text-black border-b border-black/5 pb-2">About</a>
            </div>
            <div className="mt-auto flex flex-col gap-4">
              <Button className="w-full justify-center py-4 text-lg bg-black text-white hover:bg-neutral-800" onClick={() => setMobileMenuOpen(false)}>Sign up</Button>
              <div className="flex justify-center gap-6 pt-4 text-text-muted">
                 <a href="#" className="text-sm">Log in</a>
              </div>
            </div>
        </div>
      )}
    </nav>
  );
};