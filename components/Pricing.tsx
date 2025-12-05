import React from 'react';
import { PRICING } from '../constants';
import { Check } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Investiere in dich selbst.</h2>
          <p className="text-white/90 text-lg">
            Keine versteckten Kosten. Volle Transparenz. Wähle den Weg, der dich am schnellsten an dein Ziel bringt.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PRICING.map((tier, index) => (
            <div 
              key={tier.name}
              className={`relative flex flex-col rounded-2xl p-8 transition-all duration-300 ${
                tier.isPopular 
                  ? 'bg-paper text-primary shadow-2xl shadow-black/20 scale-105 z-10' 
                  : 'bg-secondary/10 border border-white/10 text-white hover:bg-secondary/20'
              }`}
            >
              {tier.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cta text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-lg">
                  Empfohlen
                </div>
              )}
              
              <div className="mb-6">
                <h3 className={`text-sm font-bold tracking-widest uppercase mb-4 ${tier.isPopular ? 'text-cta' : 'text-secondary'}`}>
                  {tier.name}
                </h3>
                <div className="flex items-baseline flex-wrap">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className={`ml-2 text-sm ${tier.isPopular ? 'text-primary/60' : 'text-white/60'}`}>{tier.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 shrink-0 ${tier.isPopular ? 'text-cta' : 'text-secondary'}`} />
                    <span className="text-sm font-medium leading-tight opacity-90">{feature}</span>
                  </li>
                ))}
              </ul>

              <a 
                href={tier.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-4 rounded-xl font-bold transition-all flex justify-center items-center mt-auto ${
                tier.isPopular 
                  ? 'bg-cta text-white hover:bg-cta/90 shadow-lg shadow-cta/20' 
                  : 'bg-transparent border-2 border-white/20 hover:bg-white hover:text-primary'
              }`}>
                {tier.buttonText}
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center text-white/40 text-sm">
            Alle Preise inkl. MwSt. • Mindestlaufzeit 6 Monate • Zufriedenheitsgarantie
        </div>
      </div>
    </section>
  );
};