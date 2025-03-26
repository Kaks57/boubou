
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CountrySelector } from '@/components/CountrySelector';
import { ProductCard } from '@/components/ProductCard';
import { products, getProductsByCategory, Product } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Filter, SlidersHorizontal, ChevronDown } from 'lucide-react';

const Products: React.FC = () => {
  const { category } = useParams<{ category?: 'homme' | 'femme' | 'enfant' }>();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  
  useEffect(() => {
    if (category) {
      setFilteredProducts(getProductsByCategory(category as 'homme' | 'femme' | 'enfant'));
    } else {
      setFilteredProducts(products);
    }
  }, [category]);
  
  const categoryTitle = category 
    ? `Boubous ${category === 'homme' ? 'pour homme' : category === 'femme' ? 'pour femme' : 'pour enfant'}`
    : 'Tous nos boubous';
  
  return (
    <>
      <Navbar />
      <CountrySelector />
      
      <main className="pt-28 pb-20">
        <div className="container-tight">
          <header className="mb-10">
            <h1 className="text-3xl md:text-4xl font-display mb-4">{categoryTitle}</h1>
            <p className="text-muted-foreground max-w-2xl">
              Découvrez notre sélection de boubous africains de qualité, confectionnés par des artisans talentueux.
            </p>
          </header>
          
          {/* Filters */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <p className="text-sm text-muted-foreground">
                {filteredProducts.length} produit{filteredProducts.length > 1 ? 's' : ''}
              </p>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2"
              >
                <SlidersHorizontal className="h-4 w-4" />
                Filtres
                <ChevronDown className={`h-4 w-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
              </Button>
            </div>
            
            {showFilters && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-secondary rounded-md mb-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">Prix</label>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" size="sm" className="text-xs">Tous</Button>
                    <Button variant="outline" size="sm" className="text-xs">Moins cher</Button>
                    <Button variant="outline" size="sm" className="text-xs">Plus cher</Button>
                  </div>
                </div>
                
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Taille</label>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" size="sm" className="text-xs">Toutes</Button>
                    <Button variant="outline" size="sm" className="text-xs">S</Button>
                    <Button variant="outline" size="sm" className="text-xs">M</Button>
                    <Button variant="outline" size="sm" className="text-xs">L</Button>
                    <Button variant="outline" size="sm" className="text-xs">XL</Button>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Products grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
              {filteredProducts.map((product, index) => (
                <ProductCard 
                  key={product.id} 
                  product={product}
                  priority={index < 8}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-muted-foreground">Aucun produit trouvé</p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default Products;
