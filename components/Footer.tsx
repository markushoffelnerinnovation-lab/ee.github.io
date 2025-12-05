import React from 'react';
import { ArrowRight } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-paper text-primary pt-24 pb-12 border-t border-primary/5">
      <div className="max-w-4xl mx-auto px-4 text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-primary">
          Bereit für deine <br />
          <span className="text-cta">Bestform?</span>
        </h2>
        <p className="text-xl text-primary/70 mb-10 max-w-2xl mx-auto">
          Keine Wartelisten. Kein komplizierter Anmeldeprozess. Schreib mir direkt und wir finden heraus, ob das System zu dir passt.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-cta rounded-xl font-bold text-white hover:bg-cta/90 transition-all hover:scale-105 shadow-xl shadow-cta/20 flex items-center justify-center"
            >
                Kostenlos anfragen
                <ArrowRight className="ml-2 w-5 h-5" />
            </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center text-primary/60 text-sm">
        <div className="mb-4 md:mb-0">
          <span className="font-bold text-primary">ERFOLGS<span className="text-cta">ERNÄHRUNG</span></span>
          <span className="ml-4">&copy; {new Date().getFullYear()} Markus Hoffelner</span>
        </div>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-cta transition-colors">Impressum</a>
          <a href="#" className="hover:text-cta transition-colors">Datenschutz</a>
          <a href="#" className="hover:text-cta transition-colors">AGB</a>
        </div>
      </div>
    </footer>
  );
};