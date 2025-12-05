import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutCoach } from './components/AboutCoach';
import { Philosophy } from './components/Philosophy';
import { FeatureSection } from './components/FeatureSection';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { FEATURES } from './constants';
import { ArrowLeft } from 'lucide-react';

export type ViewState = 'home' | 'pricing' | 'testimonials' | string; // string can be 'feature-id'

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');

  // Handle back button on browser
  useEffect(() => {
    const handlePopState = () => {
      setCurrentView('home');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (view: ViewState) => {
    if (view === 'testimonials') {
      setCurrentView('home');
      // Timeout ensures the view has switched to home (rendering the testimonials section) before scrolling
      setTimeout(() => {
        const testimonialsSection = document.getElementById('testimonials');
        if (testimonialsSection) {
          testimonialsSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      setCurrentView(view);
      window.scrollTo(0, 0);
    }
  };

  // Helper to get specific feature data
  const getFeatureData = (viewId: string) => {
    const featureId = viewId.replace('feature-', '');
    return FEATURES.find(f => f.id === featureId);
  };

  const renderContent = () => {
    // 1. PRICING PAGE
    if (currentView === 'pricing') {
      return (
        <div className="pt-24 min-h-screen bg-paper">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <button 
              onClick={() => navigateTo('home')}
              className="inline-flex items-center text-primary hover:text-cta font-medium transition-colors mb-8"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Zurück zur Startseite
            </button>
          </div>
          <Pricing />
          <div className="bg-white py-12 text-center">
             <p className="text-primary/70 mb-6">Noch Fragen? Wir sind für dich da.</p>
             <button 
              onClick={() => navigateTo('home')}
              className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-primary bg-white border-2 border-primary/10 rounded-xl hover:bg-paper transition-all"
            >
              Zurück zur Übersicht
            </button>
          </div>
        </div>
      );
    }

    // 2. FEATURE DETAIL PAGE
    if (currentView.startsWith('feature-')) {
      const feature = getFeatureData(currentView);
      if (feature) {
        return (
          <div className="pt-24 min-h-screen bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <button 
                onClick={() => navigateTo('home')}
                className="inline-flex items-center text-primary hover:text-cta font-medium transition-colors mb-8"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Zurück zur Startseite
              </button>
            </div>
            {/* Render the feature section standalone, forcing styling */}
            <FeatureSection feature={feature} index={0} />
            
             <div className="bg-paper py-16 text-center">
                <h3 className="text-2xl font-bold text-primary mb-6">Bereit für diese Veränderung?</h3>
                <div className="flex justify-center gap-4">
                  <button 
                    onClick={() => navigateTo('pricing')}
                    className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-cta rounded-xl hover:bg-cta/90 transition-all shadow-lg"
                  >
                    Jetzt Angebote ansehen
                  </button>
                </div>
             </div>
          </div>
        );
      }
    }

    // 3. HOME PAGE (Default)
    return (
      <main>
        <Hero onPricingClick={() => {
            const pricingElement = document.getElementById('pricing');
            if(pricingElement) {
                pricingElement.scrollIntoView({ behavior: 'smooth' });
            }
        }} />
        <AboutCoach />
        <Philosophy />
        
        {/* Features list is purposefully hidden on Home as per request, accessible only via menu */}
        
        <Pricing />
        <Testimonials />
      </main>
    );
  };

  return (
    <div className="min-h-screen bg-paper text-primary font-sans selection:bg-secondary/30 selection:text-primary">
      <Navbar onNavigate={navigateTo} />
      
      {renderContent()}

      <FAQ />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;