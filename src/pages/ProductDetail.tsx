
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CountrySelector } from '@/components/CountrySelector';
import { getProductById, formatPrice } from '@/data/products';
import { useLocation } from '@/context/LocationContext';
import { Button } from '@/components/ui/button';
import { ChevronRight, Heart, Share2, Phone } from 'lucide-react';
import { toast } from "sonner";

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { country } = useLocation();
  const product = getProductById(id || '');
  
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || '');
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || '');
  const [activeImage, setActiveImage] = useState(0);
  
  if (!product) {
    return (
      <>
        <Navbar />
        <main className="pt-28 pb-20 min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-display mb-4">Produit non trouvé</h1>
            <p className="text-muted-foreground mb-6">
              Le produit que vous recherchez n'existe pas ou a été supprimé.
            </p>
            <Button asChild>
              <Link to="/products">Retour aux produits</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </>
    );
  }
  
  const { name, description, basePrice, images, category } = product;
  const formattedPrice = formatPrice(basePrice, country.priceMultiplier, country.currencySymbol);
  
  const handleWhatsAppContact = () => {
    const whatsappMessage = `Bonjour, je suis intéressé(e) par le produit "${name}" (${selectedColor}, taille ${selectedSize}). Pouvez-vous me donner plus d'informations ?`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/2250719427881?text=${encodedMessage}`, '_blank');
    toast.success("Redirection vers WhatsApp");
  };
  
  return (
    <>
      <Navbar />
      <CountrySelector />
      
      <main className="pt-28 pb-20">
        <div className="container-tight">
          {/* Breadcrumbs */}
          <nav className="flex items-center text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-primary transition-colors">
              Accueil
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link to="/products" className="hover:text-primary transition-colors">
              Produits
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link to={`/products/${category}`} className="hover:text-primary transition-colors">
              {category === 'homme' ? 'Homme' : category === 'femme' ? 'Femme' : 'Enfant'}
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-foreground">{name}</span>
          </nav>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="bg-sand-50 rounded-lg overflow-hidden aspect-square">
                <img 
                  src={images[activeImage]} 
                  alt={name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto py-2">
                  {images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImage(index)}
                      className={`w-20 h-20 rounded-md overflow-hidden flex-shrink-0 transition-all ${
                        activeImage === index ? 'ring-2 ring-primary' : 'opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={image} alt={`${name} - vue ${index + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {/* Product Info */}
            <div>
              <h1 className="text-3xl font-display mb-2">{name}</h1>
              <p className="text-2xl font-medium text-earth-800 mb-4">{formattedPrice}</p>
              
              <div className="prose prose-sand mb-6">
                <p>{description}</p>
              </div>
              
              {/* Color Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">
                  Couleur: {selectedColor}
                </label>
                <div className="flex gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 rounded-md border transition-all ${
                        selectedColor === color
                          ? 'border-primary bg-primary/5'
                          : 'border-input hover:border-primary/50'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Size Selection */}
              <div className="mb-8">
                <label className="block text-sm font-medium mb-2">
                  Taille: {selectedSize}
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-12 h-12 rounded-md border flex items-center justify-center transition-all ${
                        selectedSize === size
                          ? 'border-primary bg-primary/5 font-medium'
                          : 'border-input hover:border-primary/50'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  size="lg" 
                  className="flex-1 gap-2"
                  onClick={handleWhatsAppContact}
                >
                  <Phone className="h-5 w-5" />
                  Contactez-nous sur WhatsApp
                </Button>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" className="h-12 w-12">
                    <Heart className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="h-12 w-12">
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>
              
              {/* Price By Country Info */}
              <div className="bg-sand-50 p-4 rounded-md mt-8">
                <p className="text-sm text-muted-foreground">
                  Les prix varient selon le pays de livraison. Vous consultez actuellement les prix pour{' '}
                  <strong>{country.name}</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default ProductDetail;