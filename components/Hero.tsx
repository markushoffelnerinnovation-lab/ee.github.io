import React from 'react';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  onPricingClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onPricingClick }) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-paper">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-cta/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 text-primary text-xs font-bold tracking-widest uppercase mb-8 border border-secondary/20">
          <span className="w-2 h-2 rounded-full bg-cta animate-pulse"></span>
          Das Betriebssystem für deinen Körper
        </div>
        
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary leading-[1.1] mb-8 tracking-tight">
          Struktur schlägt <br />
          <span className="text-cta relative inline-block">
            Motivation.
            <svg className="absolute w-full h-3 -bottom-1 left-0 text-secondary/30" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
            </svg>
          </span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-primary/80 mb-10 max-w-2xl mx-auto leading-relaxed">
          Du brauchst keine weitere Diät und kein neues Trainingsprogramm. 
          Du brauchst ein System, das dir das Denken abnimmt und das Handeln automatisiert.
        </p>
        
        <div className="flex justify-center mb-12">
          <button 
            onClick={onPricingClick}
            className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-white bg-cta rounded-xl hover:bg-cta/90 transition-all hover:scale-105 shadow-xl shadow-cta/20"
          >
            Jetzt Angebote ansehen
            <ArrowDown className="ml-2 w-6 h-6 animate-bounce" />
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-primary/70 font-medium text-sm md:text-base">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-cta"></div>
            <span>Wissenschaftlich fundiert</span>
          </div>
          <div className="flex items-center gap-2">
             <div className="w-2 h-2 rounded-full bg-cta"></div>
            <span>100% Alltagstauglich</span>
          </div>
          <div className="flex items-center gap-2">
             <div className="w-2 h-2 rounded-full bg-cta"></div>
            <span>Sofort umsetzbar</span>
          </div>
        </div>

      </div>
    </section>
  );
};