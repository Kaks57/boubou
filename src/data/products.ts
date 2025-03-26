
export interface Product {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  basePrice: number; // Base price in local currency (Senegal)
  images: string[];
  category: 'homme' | 'femme' | 'enfant';
  colors: string[];
  sizes: string[];
  featured?: boolean;
  new?: boolean;
  bestseller?: boolean;
}

export const products: Product[] = [
  {
    id: 'Caftan Classic',
    name: 'Boubou Africain ',
    shortDescription: 'Élégance traditionnelle avec broderies raffinées',
    description: "Un grand boubou traditionnel confectionné dans un basin riche de première qualité. La broderie complexe au col et aux manches témoigne d'un savoir-faire artisanal exceptionnel. Parfait pour les cérémonies et les occasions spéciales.",
    basePrice: 70000,
    images: [
      "/WhatsApp Image 2025-03-24 at 17.01.39.jpeg"
    ],
    category: 'homme',
    colors: [ 'Bleu ciel'],
    sizes: ['M', 'L', 'XL', 'XXL'],
    featured: true,
    bestseller: true
  },
  {
    id: 'Caftan modern 1',
    name: 'Boubou Africain',
    shortDescription: 'Ensemble bazin riche avec broderies dorées',
    description: "Cet ensemble en bazin riche est orné de broderies dorées élaborées, créant un contraste saisissant. Comprend un grand boubou et un pantalon assorti. Idéal pour les mariages et célébrations importantes.",
    basePrice: 175000, // 65,000 CFA
    images: [
      "/WhatsApp Image 2025-03-24 at 17.03.48.jpeg"
    ],
    category: 'homme',
    colors: ['Blanc'],
    sizes: ['M', 'L', 'XL', 'XXL'],
    new: true
  },
  {
    id: 'Caftan modern 2',
    name: 'Boubou Africain',
    shortDescription: 'Boubou féminin avec détails perlés exquis',
    description: "Un grand boubou pour femme élégamment conçu en basin getzner avec des détails perlés exquis et des broderies délicates. Accompagné d'un pagne assorti. Sublime pour les cérémonies et événements.",
    basePrice: 175000, // 55,000 CFA
    images: [
      "/WhatsApp Image 2025-03-24 at 17.03.49.jpeg"
    ],
    category: 'femme',
    colors: ['Blanc'],
    sizes: ['S', 'M', 'L', 'XL'],
    featured: true
  },
  {
    id: 'Caftan modern 3',
    name: 'Boubou Africain ',
    shortDescription: 'Design contemporain avec touches traditionnelles',
    description: "Une interprétation moderne du boubou traditionnel pour homme. Coupe ajustée avec des motifs géométriques subtils et une finition impeccable. Parfait pour un style élégant au quotidien ou pour des événements semi-formels.",
    basePrice: 35000, // 35,000 CFA
    images: [
     "/WhatsApp Image 2025-03-24 at 17.03.49 (1).jpeg"
    ],
    category: 'homme',
    colors: [ 'Noir', ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    bestseller: true
  },
  {
    id: 'Caftan culture 1',
    name: 'Boubou Africain',
    shortDescription: 'Élégance moderne pour les cérémonies',
    description: "Cet ensemble taille basse pour femme allie tradition et modernité. Confectionné en basin riche avec des broderies raffinées sur le haut et le pagne. Un choix parfait pour les cérémonies qui demandent élégance et raffinement.",
    basePrice: 265000, // 48,000 CFA
    images: [
     "/WhatsApp Image 2025-03-24 at 17.04.37.jpeg"
    ],
    category: 'femme',
    colors: ['Mauve',],
    sizes: ['S', 'M', 'L', 'XL'],
    bestseller: true
  },
  {
    id: 'boubou-enfant-06',
    name: 'Boubou Africain',
    shortDescription: 'Élégance pour les jeunes lors des occasions spéciales',
    description: "Un magnifique boubou pour enfant, conçu pour les occasions spéciales. Fabriqué dans un basin de qualité avec des broderies adaptées aux plus jeunes. Disponible dans des couleurs vives et festives.",
    basePrice: 265000, // 25,000 CFA
    images: [
     "/WhatsApp Image 2025-03-24 at 17.04.38.jpeg"
    ],
    category: 'enfant',
    colors: ['Bleu roi', ],
    sizes: ['S', 'M', 'L', 'XL'],
    new: true
  },
  {
    id: 'kaftan-moderne-07',
    name: 'Kaftan Moderne',
    shortDescription: 'Confort et élégance au quotidien',
    description: "Ce kaftan moderne combine le confort d'une coupe ample avec des détails raffinés. Idéal pour un style décontracté mais élégant au quotidien. Les finitions soignées et la qualité du tissu en font une pièce durable et intemporelle.",
    basePrice: 265000, // 30,000 CFA
    images: [
     "/WhatsApp Image 2025-03-24 at 17.04.38 (1).jpeg"
    ],
    category: 'homme',
    colors: ['Gris',],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    featured: true
  },

];

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getNewProducts = (): Product[] => {
  return products.filter(product => product.new);
};

export const getBestsellerProducts = (): Product[] => {
  return products.filter(product => product.bestseller);
};

export const getProductsByCategory = (category: 'homme' | 'femme' | 'enfant'): Product[] => {
  return products.filter(product => product.category === category);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const formatPrice = (
  basePrice: number, 
  multiplier: number, 
  currencySymbol: string
): string => {
  const price = Math.round(basePrice * multiplier);
  
  // Format with thousands separator
  const formattedPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  
  return `${formattedPrice} ${currencySymbol}`;
};
