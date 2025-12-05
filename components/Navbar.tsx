import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';
import { ViewState } from '../App';

interface NavbarProps {
  onNavigate: (view: ViewState) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const featureLinks = [
    { name: 'Herausforderungen', id: 'feature-challenges' },
    { name: 'Ernährung', id: 'feature-nutrition' },
    { name: 'Timing & Training', id: 'feature-timing' },
    { name: 'Protokolle', id: 'feature-progress' },
    { name: 'Wissen', id: 'feature-knowledge' },
    { name: 'Verwaltung', id: 'feature-admin' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-4' : 'bg-white/80 backdrop-blur-sm py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => onNavigate('home')}>
            <span className={`font-bold text-2xl tracking-tight text-primary`}>
              ERFOLGS<span className="text-cta">ERNÄHRUNG</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => onNavigate('home')} className="text-primary/80 hover:text-cta font-medium transition-colors text-sm uppercase tracking-wide">
              Konzept
            </button>

            {/* Features Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center text-primary/80 hover:text-cta font-medium transition-colors text-sm uppercase tracking-wide focus:outline-none"
                onMouseEnter={() => setIsFeaturesOpen(true)}
                onClick={() => setIsFeaturesOpen(!isFeaturesOpen)}
              >
                Features
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              
              <div 
                className={`absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-200 transform origin-top-left ${isFeaturesOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible group-hover:opacity-100 group-hover:scale-100 group-hover:visible'}`}
              >
                <div className="py-1">
                  {featureLinks.map((link) => (
                    <button
                      key={link.id}
                      onClick={() => {
                        onNavigate(link.id);
                        setIsFeaturesOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-primary hover:bg-paper hover:text-cta"
                    >
                      {link.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button onClick={() => onNavigate('pricing')} className="text-primary/80 hover:text-cta font-medium transition-colors text-sm uppercase tracking-wide">
              Preise
            </button>
            <button onClick={() => onNavigate('testimonials')} className="text-primary/80 hover:text-cta font-medium transition-colors text-sm uppercase tracking-wide">
              Ergebnisse
            </button>
            <button 
              onClick={() => onNavigate('pricing')}
              className="bg-cta text-white px-5 py-2.5 rounded-lg font-medium hover:bg-cta/90 transition-colors text-sm shadow-lg shadow-cta/20"
            >
              Starten
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-primary focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-paper h-screen overflow-y-auto pb-20">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <button onClick={() => { onNavigate('home'); setIsOpen(false); }} className="block w-full text-left px-3 py-3 text-base font-medium text-primary hover:text-cta rounded-md border-b border-gray-100">
              Konzept
            </button>
            
            <div className="px-3 py-3">
              <span className="block text-base font-medium text-cta mb-2">Features</span>
              <div className="pl-4 space-y-2 border-l-2 border-cta/20">
                {featureLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => {
                        onNavigate(link.id);
                        setIsOpen(false);
                    }}
                    className="block w-full text-left text-sm text-primary/80 hover:text-cta py-1"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>

            <button onClick={() => { onNavigate('pricing'); setIsOpen(false); }} className="block w-full text-left px-3 py-3 text-base font-medium text-primary hover:text-cta rounded-md border-b border-gray-100">
              Preise
            </button>

             <button onClick={() => { onNavigate('testimonials'); setIsOpen(false); }} className="block w-full text-left px-3 py-3 text-base font-medium text-primary hover:text-cta rounded-md border-b border-gray-100">
              Ergebnisse
            </button>
            
             <button
                onClick={() => { onNavigate('pricing'); setIsOpen(false); }}
                className="block w-full mt-6 mx-3 px-3 py-4 text-center text-base font-bold text-white bg-cta hover:bg-cta/90 rounded-xl shadow-lg"
              >
                Preise ansehen
              </button>
          </div>
        </div>
      )}
    </nav>
  );
};