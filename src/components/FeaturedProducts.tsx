
import React from 'react';
import { ProductCard } from '@/components/ProductCard';
import { getFeaturedProducts } from '@/data/products';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const FeaturedProducts: React.FC = () => {
  const featuredProducts = getFeaturedProducts();
  
  return (
    <section className="py-16 md:py-24">
      <div className="container-tight">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-display mb-3">
              Collection en vedette
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Découvrez nos boubous les plus exclusifs, confectionnés avec soin par nos artisans talentueux
            </p>
          </div>
          
          <Button asChild variant="ghost" className="hidden md:inline-flex items-center gap-1">
            <Link to="/products">
              Tous les produits <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
          {featuredProducts.map((product, index) => (
            <ProductCard 
              key={product.id} 
              product={product}
              priority={index < 4}
            />
          ))}
        </div>
        
        <div className="mt-10 flex justify-center md:hidden">
          <Button asChild>
            <Link to="/products">
              Voir tous les produits
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
