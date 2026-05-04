import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAnimals } from '../context/AnimalContext';
import { Heart, Home, Ruler, Calendar, Info, ArrowLeft, Check, X, Clock, Stethoscope, AlertCircle } from 'lucide-react';

export const AnimalDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { animals } = useAnimals();
  const animal = useMemo(() => animals.find(a => a.id === id), [id, animals]);

  if (!animal) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-6">
        <h2 className="text-2xl font-bold text-stone-600 dark:text-stone-300 mb-4">Animal no encontrado</h2>
        <Link to="/" className="bg-primary text-white px-6 py-2 rounded-full font-bold">Volver al inicio</Link>
      </div>
    );
  }

  const renderStatusBadge = (status?: string) => {
    if (!status) return <span className="text-stone-400">-</span>;

    const styles: Record<string, string> = {
      'Sí': 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border-green-100 dark:border-green-900/30',
      'Negativo': 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border-green-100 dark:border-green-900/30',
      'No': 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 border-red-100 dark:border-red-900/30',
      'Pte': 'bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 border-amber-100 dark:border-amber-900/30',
      'Positivo (FELV)': 'bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 border-amber-100 dark:border-amber-900/30',
      'Positivo (FIV)': 'bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 border-amber-100 dark:border-amber-900/30',
    };

    return (
      <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] md:text-xs font-bold border ${styles[status] || styles['Pte']}`}>
        {status}
      </span>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-12">
      <Link to="/" className="inline-flex items-center text-stone-500 hover:text-primary dark:text-stone-400 transition-colors mb-6 md:mb-8 font-bold text-sm">
        <ArrowLeft size={18} className="mr-2" />
        Volver
      </Link>

      <div className="bg-white dark:bg-stone-900 rounded-3xl shadow-xl overflow-hidden border border-stone-100 dark:border-stone-800">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image Side - Fixed aspect ratio for mobile */}
          <div className="aspect-square lg:aspect-auto lg:h-[700px] relative">
            <img 
              src={animal.imageUrl} 
              alt={animal.name} 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-stone-800 shadow-md">
              {animal.status}
            </div>
          </div>

          {/* Content Side */}
          <div className="p-6 md:p-12 flex flex-col">
            <div className="mb-8">
              <h1 className="text-3xl md:text-5xl font-serif font-bold text-stone-800 dark:text-stone-100 mb-2">{animal.name}</h1>
              <p className="text-base md:text-lg text-stone-50 dark:text-stone-400">{animal.breed}</p>
            </div>

            <div className="grid grid-cols-2 gap-3 md:gap-4 mb-8">
              <div className="flex items-center p-3 md:p-4 bg-stone-50 dark:bg-stone-800 rounded-2xl">
                <Calendar className="text-primary mr-3" size={20} />
                <div className="min-w-0">
                  <p className="text-[10px] text-stone-400 uppercase font-bold truncate">Edad</p>
                  <p className="font-bold text-sm md:text-base text-stone-700 dark:text-stone-200 truncate">{animal.age}</p>
                </div>
              </div>
              <div className="flex items-center p-3 md:p-4 bg-stone-50 dark:bg-stone-800 rounded-2xl">
                <Info className="text-primary mr-3" size={20} />
                <div className="min-w-0">
                  <p className="text-[10px] text-stone-400 uppercase font-bold truncate">Sexo</p>
                  <p className="font-bold text-sm md:text-base text-stone-700 dark:text-stone-200 truncate">{animal.gender}</p>
                </div>
              </div>
            </div>

            {/* Medical Status Section - Compact Mobile */}
            {animal.medicalStatus && (
              <div className="mb-8 bg-teal-50/50 dark:bg-teal-900/10 rounded-2xl p-4 md:p-6 border border-teal-100/50 dark:border-teal-900/30">
                 <h3 className="flex items-center font-serif font-bold text-teal-800 dark:text-teal-200 mb-4 text-xl md:text-2xl">
                   <Stethoscope size={18} className="mr-2" />
                   Veterinario
                 </h3>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                    <div className="flex justify-between items-center text-xs md:text-sm">
                      <span className="text-stone-500 dark:text-stone-400">Desparasitación</span>
                      {renderStatusBadge(animal.medicalStatus.deworming)}
                    </div>
                    {animal.species === 'Gato' && (
                        <div className="flex justify-between items-center text-xs md:text-sm">
                          <span className="text-stone-500 dark:text-stone-400">Test FELV/FIV</span>
                          {renderStatusBadge(animal.medicalStatus.felvFiv)}
                        </div>
                    )}
                    <div className="flex justify-between items-center text-xs md:text-sm">
                      <span className="text-stone-500 dark:text-stone-400">Vacunación</span>
                      {renderStatusBadge(animal.medicalStatus.vaccination)}
                    </div>
                    <div className="flex justify-between items-center text-xs md:text-sm">
                      <span className="text-stone-500 dark:text-stone-400">Microchip</span>
                      {renderStatusBadge(animal.medicalStatus.microchip)}
                    </div>
                    <div className="flex justify-between items-center text-xs md:text-sm">
                      <span className="text-stone-500 dark:text-stone-400">Esterilizado</span>
                      {renderStatusBadge(animal.medicalStatus.sterilization)}
                    </div>
                 </div>
              </div>
            )}

            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-bold font-serif mb-3 text-stone-800 dark:text-stone-100">Mi Historia</h3>
              <p className="text-stone-600 dark:text-stone-300 text-base leading-relaxed whitespace-pre-line">
                {animal.story}
              </p>
            </div>

            {animal.status !== 'Adoptado' && animal.status !== 'Adoptada' ? (
              <div className="mt-auto flex flex-col sm:flex-row gap-3">
                <Link 
                  to="/adopta" 
                  className="w-full bg-primary hover:bg-teal-600 text-white text-center py-4 rounded-2xl font-bold text-base md:text-lg transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2"
                >
                  <Home size={20} />
                  Adoptar
                </Link>
                <Link 
                  to="/donar"
                  className="w-full bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-200 text-center py-4 rounded-2xl font-bold text-base md:text-lg transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  <Heart size={20} className="text-accent" />
                  Apadrinar
                </Link>
              </div>
            ) : (
               <div className="mt-auto p-6 bg-stone-50 dark:bg-stone-800/50 rounded-2xl border border-stone-100 dark:border-stone-800 text-center">
                  <p className="text-lg font-serif font-bold text-primary flex items-center justify-center gap-2">
                     <Heart className="fill-primary" size={20} />
                     ¡Final Feliz!
                  </p>
                  <p className="text-stone-500 dark:text-stone-400 text-sm mt-1">
                     {animal.name} ya tiene una familia definitiva.
                  </p>
               </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};