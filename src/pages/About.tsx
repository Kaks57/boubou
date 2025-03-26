
import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Mail, MapPin, Phone } from 'lucide-react';

const About: React.FC = () => {
  return (
    <>
      <Navbar />
      
      <main className="pt-28 pb-20">
        <div className="container-tight">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-lg shadow-lg animate-fade-in">
                <img 
                  src="/dame.jpeg" 
                  alt="EDK Empire" 
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 h-3/4 w-3/4 border-2 border-primary rounded-lg -z-10 animate-slide-up animate-delay-300"></div>
            </div>
            
            {/* Text Section */}
            <div className="space-y-6">
              <div className="animate-fade-in">
                <h6 className="text-muted-foreground mb-2 font-medium">Notre Histoire</h6>
                <h1 className="text-4xl md:text-5xl font-display mb-6">EDK EMPIRE</h1>
                <p className="text-balance text-lg mb-4">
                  Bienvenue dans notre univers d'élégance authentique. EDK Empire est né d'une passion profonde pour la mode africaine et sa richesse culturelle.
                </p>
                <p className="text-balance mb-6">
                  Notre mission est de promouvoir les boubous traditionnels africains tout en les rendant accessibles au monde entier. Chaque vêtement est confectionné par des artisans talentueux qui perpétuent un savoir-faire ancestral.
                </p>
              </div>
              
              <div className="space-y-4 animate-fade-in animate-delay-200">
                <h2 className="text-xl font-medium">Contactez-nous</h2>
                
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 mt-1 text-primary" />
                  <div>
                    <p className="font-medium">Téléphone</p>
                    <p className="text-muted-foreground">+225 0719427881</p>
                    <p className="text-muted-foreground">+33 7 84 81 59 61</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 mt-1 text-primary" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">fondation.edkempire@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 mt-1 text-primary" />
                  <div>
                    <p className="font-medium">Adresse</p>
                    <p className="text-muted-foreground">Abidjan, Côte d'Ivoire</p>
                  </div>
                </div>
                
                <div className="pt-4">
                  <Button asChild size="lg" className="animate-slide-up animate-delay-400">
                    <a href="https://wa.me/2250719427881" target="_blank" rel="noopener noreferrer">
                      Contactez-nous sur WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default About;