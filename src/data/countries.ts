
export interface Country {
  id: string;
  name: string;
  currencySymbol: string;
  priceMultiplier: number;
}

interface CountryGroups {
  africa: Country[];
  europe: Country[];
  america: Country[];
}

export const countries: Country[] = [
  // Africa
  {
    id: 'senegal',
    name: 'Sénégal',
    currencySymbol: 'CFA',
    priceMultiplier: 1
  },
  {
    id: 'mali',
    name: 'Mali',
    currencySymbol: 'CFA',
    priceMultiplier: 1
  },
  {
    id: 'cote-ivoire',
    name: 'Côte d\'Ivoire',
    currencySymbol: 'CFA',
    priceMultiplier: 1
  },
  {
    id: 'cameroun',
    name: 'Cameroun',
    currencySymbol: 'CFA',
    priceMultiplier: 1
  },
  {
    id: 'guinee',
    name: 'Guinée',
    currencySymbol: 'GNF',
    priceMultiplier: 1500
  },
  // Europe
  {
    id: 'france',
    name: 'France',
    currencySymbol: '€',
    priceMultiplier: 0.0015
  },
  {
    id: 'belgique',
    name: 'Belgique',
    currencySymbol: '€',
    priceMultiplier: 0.0015
  },
  {
    id: 'royaume-uni',
    name: 'Royaume-Uni',
    currencySymbol: '£',
    priceMultiplier: 0.0013
  },
  // America
  {
    id: 'usa',
    name: 'États-Unis',
    currencySymbol: '$',
    priceMultiplier: 0.0016
  },
  {
    id: 'canada',
    name: 'Canada',
    currencySymbol: 'CA$',
    priceMultiplier: 0.0022
  }
];

export const defaultCountry: Country = countries[0]; // Senegal as default

export const getCountryById = (id: string): Country => {
  const foundCountry = countries.find(country => country.id === id);
  return foundCountry || defaultCountry;
};

export const getCountryGroups = (): CountryGroups => {
  return {
    africa: countries.slice(0, 5),
    europe: countries.slice(5, 8),
    america: countries.slice(8)
  };
};
