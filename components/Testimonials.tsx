import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Star, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Echte Ergebnisse.</h2>
          <p className="text-primary/70">Das sagen Menschen, die den Weg bereits gegangen sind.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-white p-8 rounded-2xl shadow-sm border border-secondary/10 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#F4B400] fill-current" />
                ))}
              </div>
              <div className="mb-6 relative">
                 <Quote className="absolute -top-2 -left-2 w-8 h-8 text-secondary/10 -z-10 fill-current" />
                 <p className="text-primary/90 leading-relaxed italic relative z-10">"{t.text}"</p>
              </div>
              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-paper">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-primary font-bold text-sm">
                    {t.name.charAt(0)}
                </div>
                <div className="font-bold text-primary text-sm">{t.name}</div>
                <div className="ml-auto">
                    {/* Google G Icon */}
                     <svg className="w-5 h-5 text-secondary/40" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M21.35 11.1h-9.17v2.98h5.69c-.59 2.77-2.86 4.45-5.29 4.45-3.27 0-5.91-2.63-5.91-5.91 0-3.27 2.64-5.91 5.91-5.91 1.29 0 2.55.49 3.53 1.34l2.16-2.19c-1.57-1.5-3.66-2.31-5.69-2.31-5.63 0-10.17 4.54-10.17 10.17s4.54 10.17 10.17 10.17c5.19 0 9.77-3.76 9.77-9.77 0-.74-.08-1.52-.2-2.19z"/>
                    </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};