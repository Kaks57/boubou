
import React from 'react';
import { useLocation } from '@/context/LocationContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const { openCountrySelector, isCountrySelected, country } = useLocation();
  
  return (
    <section className="relative min-h-screen pt-32 pb-20 md:pb-32 flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary"></div>
        <div 
          className="absolute inset-y-0 right-0 w-1/2 bg-[url('https://images.unsplash.com/photo-1653926834628-87e74284f867?q=80&w=2787&auto=format&fit=crop')] bg-cover bg-center opacity-10"
        ></div>
        {/* Animated pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 25px 25px, black 2%, transparent 0%), radial-gradient(circle at 75px 75px, black 2%, transparent 0%)',
            backgroundSize: '100px 100px',
          }}></div>
        </div>
      </div>
      
      {/* Content */}
      <div className="container-tight flex flex-col items-center text-center relative z-10">
        <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-foreground text-sm font-medium mb-6 animate-fade-in">
          EDK EMPIRE COLLECTION
        </span>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold max-w-4xl mb-6 tracking-tight overflow-hidden">
          <span className="block overflow-hidden">
            <span className="block animate-text-reveal" style={{animationDelay: '100ms'}}>
              Élégance authentique
            </span>
          </span>
          <span className="block overflow-hidden">
            <span className="block animate-text-reveal" style={{animationDelay: '300ms'}}>
              des boubous africains
            </span>
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 animate-fade-in animate-delay-500">
          Découvrez notre collection de boubous traditionnels, confectionnés par des artisans talentueux, 
          avec des prix adaptés à votre pays de résidence.
        </p>
        
        {isCountrySelected ? (
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animate-delay-500">
            <Button asChild size="lg" className="px-8 group">
              <Link to="/products" className="flex items-center">
                Découvrir la collection
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8"
              onClick={openCountrySelector}
            >
              Vous êtes au {country.name} - Changer
            </Button>
          </div>
        ) : (
          <div className="animate-zoom-in p-8 rounded-lg bg-card backdrop-blur-sm border shadow-lg">
            <p className="text-card-foreground font-medium mb-5">
              Sélectionnez votre pays pour voir les prix adaptés à votre région
            </p>
            <Button onClick={openCountrySelector} size="lg" className="px-8 group">
              Choisir mon pays
              <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        )}
        
        {/* Animated decorative elements */}
        <div className="absolute -left-16 top-1/4 w-32 h-32 border border-primary/20 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute -right-16 bottom-1/4 w-48 h-48 border border-primary/20 rounded-full animate-pulse opacity-30" style={{animationDelay: '1s'}}></div>
      </div>
    </section>
  );
};
