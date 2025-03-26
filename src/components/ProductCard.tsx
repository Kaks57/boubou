
import React from 'react';
import { Link } from 'react-router-dom';
import { formatPrice } from '@/data/products';
import { useLocation } from '@/context/LocationContext';
import { Product } from '@/data/products';
import { Badge } from '@/components/ui/badge';

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, priority = false }) => {
  const { country } = useLocation();
  const { id, name, shortDescription, basePrice, images, new: isNew, bestseller } = product;
  
  const formattedPrice = formatPrice(
    basePrice, 
    country.priceMultiplier, 
    country.currencySymbol
  );

  return (
    <Link 
      to={`/product/${id}`} 
      className="group block overflow-hidden transition-all duration-300"
    >
      <div className="relative overflow-hidden rounded-md aspect-[3/4] mb-4 bg-sand-50">
        <img 
          src={images[0]} 
          alt={name} 
          loading={priority ? "eager" : "lazy"}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Badges overlay */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isNew && (
            <Badge variant="secondary" className="bg-white/80 backdrop-blur-sm">
              Nouveau
            </Badge>
          )}
          {bestseller && (
            <Badge variant="secondary" className="bg-gold-500/90 text-white backdrop-blur-sm border-0">
              Populaire
            </Badge>
          )}
        </div>
      </div>
      
      <h3 className="font-medium text-lg group-hover:text-primary transition-colors">
        {name}
      </h3>
      
      <p className="text-sm text-muted-foreground mb-2">
        {shortDescription}
      </p>
      
      <p className="font-medium text-earth-800">
        {formattedPrice}
      </p>
    </Link>
  );
};
