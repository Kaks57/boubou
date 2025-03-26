
import React, { useEffect } from 'react';
import { Hero } from '@/components/Hero';
import { FeaturedProducts } from '@/components/FeaturedProducts';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CountrySelector } from '@/components/CountrySelector';
import { useLocation } from '@/context/LocationContext';
import { Button } from '@/components/ui/button';
import { Sparkles, Shield, Truck, DollarSign } from 'lucide-react';

const Index: React.FC = () => {
  const { isCountrySelected } = useLocation();
  
  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      el.classList.add('opacity-0');
      observer.observe(el);
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <CountrySelector />
      
      <main>
        <Hero />
        
        {isCountrySelected && (
          <>
            <FeaturedProducts />
            
            {/* Feature Section */}
            <section className="py-20 md:py-32 bg-secondary relative overflow-hidden">
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'radial-gradient(circle at 25px 25px, black 2%, transparent 0%), radial-gradient(circle at 75px 75px, black 2%, transparent 0%)',
                  backgroundSize: '100px 100px',
                }}></div>
              </div>
              
              <div className="container-tight">
                <div className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll">
                  <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                    L'art du boubou africain
                  </h2>
                  <p className="text-xl text-muted-foreground">
                    Chaque boubou raconte une histoire, celle d'un savoir-faire transmis de génération en génération, 
                    celle d'une culture riche en symboles et en traditions.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="bg-card p-8 rounded-lg shadow-lg border animate-on-scroll group hover:shadow-xl transition-all duration-300">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Sparkles className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Artisanat authentique</h3>
                    <p className="text-muted-foreground">Chaque boubou est confectionné à la main par des artisans qualifiés respectant les techniques traditionnelles.</p>
                  </div>
                  
                  <div className="bg-card p-8 rounded-lg shadow-lg border animate-on-scroll group hover:shadow-xl transition-all duration-300" style={{animationDelay: '100ms'}}>
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <DollarSign className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Prix adaptés</h3>
                    <p className="text-muted-foreground">Nous proposons des prix différents selon votre pays de résidence, pour un accès équitable à nos créations.</p>
                  </div>
                  
                  <div className="bg-card p-8 rounded-lg shadow-lg border animate-on-scroll group hover:shadow-xl transition-all duration-300" style={{animationDelay: '200ms'}}>
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Truck className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Livraison mondiale</h3>
                    <p className="text-muted-foreground">Nous expédions dans le monde entier pour que vous puissiez recevoir votre boubou où que vous soyez.</p>
                  </div>
                  
                  <div className="bg-card p-8 rounded-lg shadow-lg border animate-on-scroll group hover:shadow-xl transition-all duration-300" style={{animationDelay: '300ms'}}>
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Shield className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Qualité garantie</h3>
                    <p className="text-muted-foreground">Nous garantissons la qualité de nos produits, tissus premium et finitions impeccables pour chaque pièce.</p>
                  </div>
                </div>
                
                <div className="text-center mt-16 animate-on-scroll">
                  <Button asChild size="lg" className="animate-pulse">
                    <a href="/products">Découvrir toute la collection</a>
                  </Button>
                </div>
              </div>
            </section>
            
          
          </>
        )}
      </main>
      
      <Footer />
    </>
  );
};

export default Index;
