import React, { createContext, useContext, useState, useEffect } from 'react';
import { Animal } from '../types';
import { ANIMALS as INITIAL_ANIMALS } from '../constants';

interface AnimalContextType {
  animals: Animal[];
  addAnimal: (animal: Animal) => void;
  updateAnimal: (updatedAnimal: Animal) => void;
  deleteAnimal: (id: string) => void;
  resetAnimals: () => void;
}

const AnimalContext = createContext<AnimalContextType | undefined>(undefined);

const STORAGE_KEY = 'apa_animals_v2';

export const AnimalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize with localStorage if available, otherwise use constant data
  const [animals, setAnimals] = useState<Animal[]>(() => {
    try {
      const savedAnimals = localStorage.getItem(STORAGE_KEY);
      if (savedAnimals) {
        let data = JSON.parse(savedAnimals);
        // Migration: Ensure Jengibre (id: 7) is marked as Adoptado
        data = data.map((a: Animal) => a.id === '7' ? { ...a, status: 'Adoptado' } : a);
        
        // Migration: Ensure Jade (id: 11) is marked as En Adopción
        data = data.map((a: Animal) => a.id === '11' ? { ...a, status: 'En Adopción' } : a);
        
        // Migration: Ensure Maíz (id: 1) is marked as Busca acogida urgente
        data = data.map((a: Animal) => a.id === '1' ? { ...a, status: 'Busca acogida urgente', description: (INITIAL_ANIMALS.find(ia => ia.id === '1')?.description || a.description) } : a);
        
        // Migration: Ensure Matilde (id: 12) is added if not present or has the correct image
        const matildeIndex = data.findIndex((a: Animal) => a.id === '12');
        const matildeSource = INITIAL_ANIMALS.find(a => a.id === '12');
        if (matildeIndex === -1) {
          if (matildeSource) data.push(matildeSource);
        } else if (matildeSource) {
          // Update image if it's still the placeholder
          if (data[matildeIndex].imageUrl.includes('unsplash')) {
            data[matildeIndex].imageUrl = matildeSource.imageUrl;
          }
          // Update breed/capa
          data[matildeIndex].breed = matildeSource.breed;
          // Update status
          data[matildeIndex].status = 'En Adopción';
          // Update age and medicalStatus
          data[matildeIndex].age = matildeSource.age;
          data[matildeIndex].medicalStatus = matildeSource.medicalStatus;
        }
        
        return data;
      }
      return INITIAL_ANIMALS;
    } catch (error) {
      console.error('Error loading animals from localStorage:', error);
      return INITIAL_ANIMALS;
    }
  });

  // Save to localStorage whenever animals state changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(animals));
    } catch (error) {
      console.error('Error saving animals to localStorage:', error);
    }
  }, [animals]);

  const addAnimal = (animal: Animal) => {
    setAnimals(prev => [animal, ...prev]);
  };

  const updateAnimal = (updatedAnimal: Animal) => {
    setAnimals(prev => prev.map(a => a.id === updatedAnimal.id ? updatedAnimal : a));
  };

  const deleteAnimal = (id: string) => {
    setAnimals(prev => prev.filter(a => a.id !== id));
  };

  const resetAnimals = () => {
    if (window.confirm('¿Estás seguro de que quieres restaurar los datos originales? Se perderán todos los cambios locales.')) {
      setAnimals(INITIAL_ANIMALS);
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  return (
    <AnimalContext.Provider value={{ animals, addAnimal, updateAnimal, deleteAnimal, resetAnimals }}>
      {children}
    </AnimalContext.Provider>
  );
};

export const useAnimals = () => {
  const context = useContext(AnimalContext);
  if (context === undefined) {
    throw new Error('useAnimals must be used within an AnimalProvider');
  }
  return context;
};