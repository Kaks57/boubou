
import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '@/components/Logo';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary pt-16 pb-8">
      <div className="container-tight">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand & Info */}
          <div className="space-y-4 md:col-span-3 lg:col-span-1">
            <Logo className="mb-4" />
            <p className="text-muted-foreground">
              EDK Empire propose des vêtements traditionnels africains de haute qualité, 
              confectionnés par des artisans talentueux respectant les techniques ancestrales.
            </p>
            
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="bg-background text-foreground p-2 rounded-full hover:scale-110 transition-transform">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-background text-foreground p-2 rounded-full hover:scale-110 transition-transform">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-background text-foreground p-2 rounded-full hover:scale-110 transition-transform">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-muted-foreground hover:text-foreground transition-colors">
                  Collections
                </Link>
              </li>
              <li>
                <Link to="/products/homme" className="text-muted-foreground hover:text-foreground transition-colors">
                  Homme
                </Link>
              </li>
              <li>
                <Link to="/products/femme" className="text-muted-foreground hover:text-foreground transition-colors">
                  Femme
                </Link>
              </li>
              <li>
                <Link to="/products/enfant" className="text-muted-foreground hover:text-foreground transition-colors">
                  Enfant
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h3 className="font-bold text-lg mb-4">Informations légales</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Conditions générales
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Livraisons & Retours
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href="tel:+2250719427881" className="flex items-start gap-2 text-muted-foreground hover:text-foreground transition-colors">
                  <Phone className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span>+225 0719427881</span>
                </a>
              </li>
              <li>
                <a href="tel:+33784815961" className="flex items-start gap-2 text-muted-foreground hover:text-foreground transition-colors">
                  <Phone className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span>+33 7 84 81 59 61</span>
                </a>
              </li>
              <li>
                <a href="mailto:fondation.edkempire@gmail.com" className="flex items-start gap-2 text-muted-foreground hover:text-foreground transition-colors">
                  <Mail className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span>fondation.edkempire@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>Abidjan, Côte d'Ivoire</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {year} EDK Empire. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};
