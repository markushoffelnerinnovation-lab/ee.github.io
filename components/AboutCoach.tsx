import React from 'react';
import { Instagram } from 'lucide-react';

export const AboutCoach: React.FC = () => {
  return (
    <section className="py-20 bg-white overflow-hidden border-t border-secondary/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
            <h2 className="text-sm font-bold tracking-widest text-cta uppercase">Das bin ich</h2>
            
            <h3 className="text-3xl md:text-4xl font-bold text-primary">
              Markus Hoffelner
            </h3>

            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl max-w-md mx-auto bg-gray-100 my-8">
                <img 
                  alt="Markus Hoffelner Fitness Coach Portrait" 
                  className="w-full h-full object-cover" 
                  src="https://raw.githubusercontent.com/markushoffelnerinnovation-lab/ee.github.io/main/DSC06573.jpg" 
                />
            </div>
            
            <div className="prose prose-lg mx-auto text-primary/80 leading-relaxed">
                <p className="text-lg">
                Seit mehr als 8 Jahren unterstütze ich als zertifizierter Ernährungscoach Menschen dabei, das eigene mentale und körperliche Potenzial zu nutzen, um der eigene Beweis zu werden, dass alles möglich ist, was man sich als Ziel setzt!
                </p>
                <p className="text-lg font-medium mt-4">
                Denn ALLES, was wir noch nicht können, ist dennoch erreichbar.
                </p>
                <p className="text-xl text-primary font-bold pt-4">
                Die Tür bleibt geöffnet.
                </p>
            </div>

            <div className="pt-8">
                <a 
                    href="https://www.instagram.com/hoffelnerfitness?igsh=MThuM2pjbGt1anJkNA%3D%3D&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-4 bg-secondary text-white rounded-xl font-bold hover:bg-secondary/90 transition-all shadow-lg hover:shadow-secondary/30"
                >
                    <Instagram className="w-5 h-5 mr-3" />
                    Mehr von mir
                </a>
            </div>
        </div>
      </div>
    </section>
  );
};