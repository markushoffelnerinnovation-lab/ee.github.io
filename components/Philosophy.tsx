import React from 'react';
import { Brain, ListTodo, Target, ArrowRight, CheckCircle2 } from 'lucide-react';

export const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-sm font-bold tracking-widest text-cta uppercase mb-4">Warum Erfolgsernährung?</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-primary mb-8 animate-fade-in-up">
          Veränderung braucht Struktur.
        </h3>
        
        <div className="prose prose-lg prose-slate mx-auto text-primary/80 leading-relaxed space-y-6 animate-fade-in-up delay-100">
          <p>
            Routinen entstehen nicht zufällig – sie müssen geführt werden. 
            Meistens scheitern wir nicht am Willen, sondern an der fehlenden Klarheit im stressigen Alltag.
          </p>
          <p>
            Die Erfolgsernährung App gibt dir genau diese Klarheit zurück. 
            Über deine Mahlzeiten. Über dein Training. Über dein Verhalten und deine Fortschritte.
          </p>
          <p className="font-bold text-primary text-xl mt-8">
            Du weißt jederzeit, was zu tun ist. Kein Raten, kein Hoffen. Nur Machen.
          </p>
        </div>

        {/* Vector Graphic Animation Section */}
        <div className="mt-16 bg-paper/50 rounded-3xl p-8 md:p-12 border border-secondary/10 shadow-lg relative overflow-hidden group">
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 relative z-10">
            
            {/* Step 1: Thinking / Confusion */}
            <div className="flex flex-col items-center gap-4 opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700">
              <div className="w-20 h-20 bg-white rounded-2xl shadow-md flex items-center justify-center border border-primary/10 relative">
                 <Brain className="w-10 h-10 text-primary/60" />
                 <span className="absolute -top-2 -right-2 text-2xl animate-bounce">?</span>
              </div>
              <span className="text-sm font-medium text-primary/60 uppercase tracking-wide">Chaos</span>
            </div>

            {/* Arrow Connector */}
            <div className="hidden md:flex text-secondary/30">
               <ArrowRight className="w-8 h-8 animate-pulse" />
               <ArrowRight className="w-8 h-8 animate-pulse delay-75" />
               <ArrowRight className="w-8 h-8 animate-pulse delay-150" />
            </div>
             <div className="md:hidden text-secondary/30 rotate-90 my-2">
               <ArrowRight className="w-8 h-8 animate-pulse" />
            </div>

            {/* Step 2: Structure / Plan */}
            <div className="flex flex-col items-center gap-4">
              <div className="w-24 h-24 bg-white rounded-2xl shadow-xl flex items-center justify-center border-2 border-secondary relative z-10 transform transition-transform duration-500 hover:scale-110">
                 <ListTodo className="w-12 h-12 text-secondary" />
                 <div className="absolute top-2 right-2 w-3 h-3 bg-cta rounded-full animate-ping"></div>
              </div>
              <span className="text-sm font-bold text-secondary uppercase tracking-wide">Struktur</span>
            </div>

            {/* Arrow Connector */}
             <div className="hidden md:flex text-cta/30">
               <ArrowRight className="w-8 h-8 animate-pulse delay-300" />
               <ArrowRight className="w-8 h-8 animate-pulse delay-500" />
               <ArrowRight className="w-8 h-8 animate-pulse delay-700" />
            </div>
            <div className="md:hidden text-cta/30 rotate-90 my-2">
               <ArrowRight className="w-8 h-8 animate-pulse" />
            </div>

            {/* Step 3: Success / Done */}
            <div className="flex flex-col items-center gap-4">
               <div className="w-20 h-20 bg-cta rounded-2xl shadow-lg flex items-center justify-center border border-cta ring-4 ring-cta/20 transform transition-all duration-500 hover:rotate-3">
                 <Target className="w-10 h-10 text-white" />
                 <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1 shadow-sm">
                   <CheckCircle2 className="w-6 h-6 text-cta fill-white" />
                 </div>
              </div>
              <span className="text-sm font-bold text-cta uppercase tracking-wide">Erfolg</span>
            </div>

          </div>

          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[2s] pointer-events-none"></div>
        </div>

      </div>
    </section>
  );
};