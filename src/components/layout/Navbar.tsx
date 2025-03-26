
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CountryDisplay } from '@/components/CountrySelector';
import { Logo } from '@/components/Logo';
import { Menu, X, Phone, Mail } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/90 backdrop-blur-md py-3 shadow-md' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-tight">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo />
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Accueil
            </Link>
            <Link to="/products" className="text-foreground hover:text-primary transition-colors">
              Collections
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">
              À propos
            </Link>
            <CountryDisplay />
          </nav>
          
          {/* Contact Info */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+2250719427881" className="flex items-center gap-1 text-sm hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span className="hidden lg:inline">+225 0719427881</span>
            </a>
            <a href="mailto:fondation.edkempire@gmail.com" className="flex items-center gap-1 text-sm hover:text-primary transition-colors">
              <Mail className="w-4 h-4" />
              <span className="hidden lg:inline">fondation.edkempire@gmail.com</span>
            </a>
          </div>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t mt-3 animate-slide-down">
          <div className="container-tight py-4">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="py-2 text-foreground hover:text-primary transition-colors">
                Accueil
              </Link>
              <Link to="/products" className="py-2 text-foreground hover:text-primary transition-colors">
                Collections
              </Link>
              <Link to="/about" className="py-2 text-foreground hover:text-primary transition-colors">
                À propos
              </Link>
              <div className="pt-2 border-t border-border">
                <CountryDisplay />
              </div>
              <div className="flex flex-col gap-2 pt-2 border-t border-border">
                <a href="tel:+2250719427881" className="flex items-center gap-2 py-2 text-sm hover:text-primary transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>+225 0719427881</span>
                </a>
                <a href="tel:+33784815961" className="flex items-center gap-2 py-2 text-sm hover:text-primary transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>+33 7 84 81 59 61</span>
                </a>
                <a href="mailto:fondation.edkempire@gmail.com" className="flex items-center gap-2 py-2 text-sm hover:text-primary transition-colors">
                  <Mail className="w-4 h-4" />
                  <span>fondation.edkempire@gmail.com</span>
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};