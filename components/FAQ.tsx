import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQS = [
  {
    question: "Ist die App auch für Anfänger geeignet?",
    answer: "Absolut. Erfolgsernährung holt dich genau dort ab, wo du stehst. Die Pläne sind verständlich, die Übungen per Video erklärt und die Struktur hilft gerade Einsteigern, sofort Routinen zu entwickeln."
  },
  {
    question: "Muss ich jeden Tag stundenlang kochen?",
    answer: "Nein. Das System ist auf 100% Alltagstauglichkeit ausgelegt. Du kannst Mahlzeiten vorkochen (Meal Prep) oder schnelle Rezepte wählen, die in unter 15 Minuten fertig sind. Du entscheidest, wie viel Zeit du investierst."
  },
  {
    question: "Warum gibt es eine Mindestlaufzeit von 6 Monaten?",
    answer: "Echte Veränderung braucht Zeit. Wir setzen auf nachhaltige Transformation statt schneller Crash-Diäten. In 6 Monaten etablieren wir Gewohnheiten, die ein Leben lang halten."
  },
  {
    question: "Brauche ich zwingend ein Fitnessstudio?",
    answer: "Nicht zwingend. Das Training kann an deine Möglichkeiten angepasst werden. Ob Home-Workout mit Körpergewicht oder Training im Gym – das System integriert sich in deinen Alltag."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-white border-t border-primary/5">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4">Häufig gestellte Fragen</h2>
          <p className="text-primary/70">Alles, was du vor dem Start wissen musst.</p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div key={index} className="border border-primary/10 rounded-xl overflow-hidden">
              <button
                className="w-full flex items-center justify-between p-5 text-left bg-paper/50 hover:bg-paper transition-colors duration-200"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold text-primary pr-8">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-cta shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-secondary shrink-0" />
                )}
              </button>
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-5 pt-0 text-primary/80 leading-relaxed bg-paper/50 border-t border-primary/5 text-sm md:text-base">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};