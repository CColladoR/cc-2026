import React from 'react';
import { Link } from 'react-router-dom';
import { Animal } from '../types';
import { Heart, Pencil } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface AnimalCardProps {
  animal: Animal;
  compact?: boolean;
  onEdit?: (animal: Animal) => void;
}

export const AnimalCard: React.FC<AnimalCardProps> = ({ animal, compact = false, onEdit }) => {
  const { isAuthenticated } = useAuth();

  const handleEditClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onEdit) onEdit(animal);
  };

  if (compact) {
    return (
      <div className="bg-white dark:bg-stone-900 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-stone-100 dark:border-stone-800 group flex flex-col h-full relative">
        {isAuthenticated && onEdit && (
            <button 
                onClick={handleEditClick}
                className="absolute top-2 right-2 z-10 bg-teal-600 text-white p-1.5 rounded-full shadow-lg hover:bg-teal-700"
                title="Editar"
            >
                <Pencil size={12} />
            </button>
        )}
        <div className="relative h-40 sm:h-48 overflow-hidden flex-shrink-0">
          <img 
            src={animal.imageUrl} 
            alt={animal.name} 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-full text-[9px] font-bold text-stone-700 tracking-wide shadow-sm">
            {animal.status}
          </div>
        </div>
        <div className="p-3 flex flex-col flex-grow">
          <div className="flex justify-between items-start mb-1">
            <h3 className="text-sm font-bold text-stone-800 dark:text-stone-100 truncate">{animal.name}</h3>
            <span className="text-sm">{animal.species === 'Perro' ? '🐕' : '🐈'}</span>
          </div>
          <p className="text-[10px] text-stone-500 dark:text-stone-400 mb-3 truncate">{animal.breed}</p>
          
          <div className="flex items-center gap-2 mt-auto">
            <Link 
              to={`/animal/${animal.id}`}
              className="flex-grow text-center bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-200 font-bold py-1.5 rounded-lg transition-colors duration-200 text-[10px]"
            >
              Ver
            </Link>
            <Link 
              to="/donar"
              className="p-1.5 bg-rose-50 dark:bg-rose-900/20 text-rose-400 rounded-lg"
              title="Apadrinar"
            >
              <Heart size={14} />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-stone-900 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-stone-100 dark:border-stone-800 group flex flex-col h-full relative">
      {isAuthenticated && onEdit && (
            <button 
                onClick={handleEditClick}
                className="absolute top-4 right-4 z-10 bg-teal-600 text-white p-2 rounded-full shadow-lg hover:bg-teal-700"
                title="Editar"
            >
                <Pencil size={18} />
            </button>
      )}
      <div className="relative h-64 overflow-hidden flex-shrink-0">
        <img 
          src={animal.imageUrl} 
          alt={animal.name} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-stone-700 tracking-wide shadow-sm">
          {animal.status}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <div>
             <h3 className="text-xl font-serif font-bold text-stone-800 dark:text-stone-100">{animal.name}</h3>
             <p className="text-sm text-stone-500 dark:text-stone-400">{animal.breed} • {animal.age}</p>
          </div>
          {animal.species === 'Perro' ? (
             <span className="text-2xl" role="img" aria-label="perro">🐕</span>
          ) : (
             <span className="text-2xl" role="img" aria-label="gato">🐈</span>
          )}
        </div>
        
        <p className="text-stone-600 dark:text-stone-400 text-sm mb-6 line-clamp-2 min-h-[40px] flex-grow">
          {animal.description}
        </p>
        
        <div className="flex items-center gap-3 mt-auto pt-4 border-t border-stone-50 dark:border-stone-800">
          <Link 
            to={`/animal/${animal.id}`}
            className="flex-grow text-center bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-200 font-semibold py-2.5 rounded-lg transition-colors duration-200 text-sm"
          >
            Ver Perfil
          </Link>
          <Link 
            to="/donar"
            className="flex-shrink-0 p-2.5 bg-white dark:bg-stone-900 border border-rose-200 dark:border-rose-900/50 text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-900/20 hover:text-rose-500 rounded-lg transition-colors duration-200 group/icon"
            title="Apadrinar"
            aria-label="Apadrinar"
          >
            <Heart size={20} className="group-hover/icon:fill-rose-500 transition-colors" />
          </Link>
        </div>
      </div>
    </div>
  );
};