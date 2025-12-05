import React from 'react';
import { FeatureItem } from '../types';

interface FeatureSectionProps {
  feature: FeatureItem;
  index: number;
}

export const FeatureSection: React.FC<FeatureSectionProps> = ({ feature, index }) => {
  const isEven = index % 2 === 0;
  
  return (
    <div id={feature.id} className={`py-20 lg:py-32 overflow-hidden ${isEven ? 'bg-paper' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col gap-12 lg:gap-24 items-center ${feature.reverseLayout ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
          
          {/* Text Content */}
          <div className="flex-1 space-y-8">
            <div className="inline-block px-4 py-1.5 rounded-full border border-secondary/20 bg-white text-primary text-xs font-bold tracking-wider uppercase shadow-sm">
              {feature.title}
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight">
              {feature.headline}
            </h2>
            
            <div className="space-y-4">
              {feature.description.map((text, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="mt-1.5 min-w-[6px] h-[6px] rounded-full bg-cta shrink-0"></div>
                  <p className="text-lg text-primary/80 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image Content */}
          <div className="flex-1 w-full flex justify-center lg:justify-end relative group">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-primary/10 bg-primary transform transition-transform duration-500 group-hover:scale-[1.01]">
                {/* 
                   Here we would normally use feature.imageSrc directly. 
                */}
                 <img 
                    src={`./assets/${feature.imageSrc}`}
                    onError={(e) => {
                        e.currentTarget.src = `https://picsum.photos/600/800?random=${index}`;
                        e.currentTarget.alt = "Screenshot placeholder - Please add " + feature.imageSrc + " to public/assets folder";
                    }}
                    alt={feature.imageAlt}
                    className="w-full max-w-[320px] lg:max-w-md h-auto object-cover"
                />
            </div>
            
            {/* Decorative background elements */}
            <div className={`absolute top-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-gradient-to-r from-secondary/10 to-cta/10 blur-3xl -z-10 rounded-full ${feature.reverseLayout ? 'right-0' : 'left-0'}`}></div>
          </div>

        </div>
      </div>
    </div>
  );
};