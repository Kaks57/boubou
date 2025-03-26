
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Country, defaultCountry, getCountryById } from '@/data/countries';
import { toast } from "sonner";

interface LocationContextType {
  country: Country;
  setCountry: (country: Country) => void;
  isCountrySelected: boolean;
  openCountrySelector: () => void;
  closeCountrySelector: () => void;
  isCountrySelectorOpen: boolean;
}

const LocationContext = createContext<LocationContextType | undefined>(undefined);

export const LocationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [country, setCountryState] = useState<Country>(defaultCountry);
  const [isCountrySelected, setIsCountrySelected] = useState<boolean>(false);
  const [isCountrySelectorOpen, setIsCountrySelectorOpen] = useState<boolean>(false);

  // Check if there's a saved country preference in localStorage
  useEffect(() => {
    const savedCountryId = localStorage.getItem('selectedCountry');
    if (savedCountryId) {
      const foundCountry = getCountryById(savedCountryId);
      setCountryState(foundCountry);
      setIsCountrySelected(true);
    }
  }, []);

  const setCountry = (newCountry: Country) => {
    setCountryState(newCountry);
    setIsCountrySelected(true);
    localStorage.setItem('selectedCountry', newCountry.id);
    toast.success(`Votre localisation a été définie sur ${newCountry.name}`);
  };

  const openCountrySelector = () => {
    setIsCountrySelectorOpen(true);
  };

  const closeCountrySelector = () => {
    setIsCountrySelectorOpen(false);
  };

  return (
    <LocationContext.Provider
      value={{
        country,
        setCountry,
        isCountrySelected,
        openCountrySelector,
        closeCountrySelector,
        isCountrySelectorOpen
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = (): LocationContextType => {
  const context = useContext(LocationContext);
  if (context === undefined) {
    throw new Error('useLocation must be used within a LocationProvider');
  }
  return context;
};
