
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { countries, getCountryGroups, Country } from '@/data/countries';
import { useLocation } from '@/context/LocationContext';
import { Globe, MapPin, Check } from 'lucide-react';

export const CountrySelector: React.FC = () => {
  const { country, setCountry, isCountrySelectorOpen, closeCountrySelector } = useLocation();
  const countryGroups = getCountryGroups();

  const handleSelectCountry = (selectedCountry: Country) => {
    setCountry(selectedCountry);
    closeCountrySelector();
  };

  const renderCountryGroup = (title: string, countries: Country[]) => (
    <div className="mb-6">
      <h3 className="text-sm font-medium text-muted-foreground mb-3">{title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {countries.map((c) => (
          <button
            key={c.id}
            onClick={() => handleSelectCountry(c)}
            className={`flex items-center px-4 py-3 rounded-md text-left transition-colors ${
              country.id === c.id
                ? 'bg-primary text-primary-foreground'
                : 'hover:bg-muted'
            }`}
          >
            <span className="flex-1">{c.name}</span>
            {country.id === c.id && <Check className="h-4 w-4 ml-2" />}
            <span className="text-xs opacity-75 ml-2">{c.currencySymbol}</span>
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <Dialog open={isCountrySelectorOpen} onOpenChange={closeCountrySelector}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Globe className="h-5 w-5" />
            <span>Choisissez votre pays</span>
          </DialogTitle>
        </DialogHeader>
        
        <div className="mt-4 max-h-[60vh] overflow-y-auto pr-1">
          <div className="bg-secondary p-3 rounded-md mb-5 flex items-start gap-2">
            <MapPin className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
            <p className="text-sm text-muted-foreground">
              Les prix des boubous varient selon votre pays de résidence. 
              Veuillez sélectionner votre pays pour voir les prix corrects.
            </p>
          </div>
          
          {renderCountryGroup('Afrique', countryGroups.africa)}
          {renderCountryGroup('Europe', countryGroups.europe)}
          {renderCountryGroup('Amérique', countryGroups.america)}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export const CountryDisplay: React.FC = () => {
  const { country, openCountrySelector } = useLocation();
  
  return (
    <button 
      onClick={openCountrySelector}
      className="flex items-center gap-1 px-2 py-1 text-sm rounded hover:bg-secondary transition-colors"
    >
      <Globe className="h-4 w-4 opacity-70" />
      <span>{country.name}</span>
    </button>
  );
};
