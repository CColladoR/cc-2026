import React, { useState, useMemo, useRef, useEffect } from 'react';
import { AnimalCard } from '../components/AnimalCard';
import { Link } from 'react-router-dom';
import { 
  HeartHandshake, Dog, Cat, LayoutGrid, Star, Quote, 
  ExternalLink, Instagram, Activity,
  AlertCircle, Clock, Home as HomeIcon, Building2, Bookmark, Heart,
  ChevronDown, Filter, XCircle, Sparkles, Grip, List, Plus, RefreshCw
} from 'lucide-react';
import { useAnimals } from '../context/AnimalContext';
import { useAuth } from '../context/AuthContext';
import { AnimalFormModal } from '../components/AnimalFormModal';
import { Animal } from '../types';

export const Home: React.FC = () => {
  const { animals, addAnimal, updateAnimal, resetAnimals } = useAnimals();
  const { isAuthenticated } = useAuth();
  
  const [activeCategory, setActiveCategory] = useState<'Todos' | 'Perro' | 'Gato'>('Todos');
  const [activeStatus, setActiveStatus] = useState<string>('Todos');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'detailed' | 'compact'>('compact');
  
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingAnimal, setEditingAnimal] = useState<Animal | null>(null);

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleAddClick = () => {
    setEditingAnimal(null);
    setIsModalOpen(true);
  };

  const handleEditClick = (animal: Animal) => {
    setEditingAnimal(animal);
    setIsModalOpen(true);
  };

  const handleSaveAnimal = (animal: Animal) => {
    if (editingAnimal) {
      updateAnimal(animal);
    } else {
      addAnimal(animal);
    }
  };

  const adoptedAnimals = useMemo(() => {
    return animals.filter(a => a.status === 'Adoptado');
  }, [animals]);

  const filteredAnimals = useMemo(() => {
    const priority: Record<string, number> = {
      'En Adopción': 1,
      'Busca acogida urgente': 2,
      'Urgente': 3,
      'Pronto en adopción': 4,
      'En residencia': 5,
      'Reservado': 6,
      'Reservada': 6
    };

    const getPriority = (status: string) => priority[status] || 99;

    return animals
      .filter(animal => animal.status !== 'Adoptado')
      .filter(animal => {
        const matchesCategory = activeCategory === 'Todos' || animal.species === activeCategory;
        const matchesStatus = activeStatus === 'Todos' || 
          animal.status === activeStatus || 
          (activeStatus === 'Reservado' && animal.status === 'Reservada') ||
          (animal.secondaryStatuses && animal.secondaryStatuses.includes(activeStatus as any));
        return matchesCategory && matchesStatus;
      })
      .sort((a, b) => getPriority(a.status) - getPriority(b.status));
  }, [activeCategory, activeStatus, animals]);

  const categories = [
    { id: 'Todos', label: 'Todos', icon: LayoutGrid },
    { id: 'Perro', label: 'Perros', icon: Dog },
    { id: 'Gato', label: 'Gatos', icon: Cat },
  ] as const;

  const statusCategories = [
    { id: 'Todos', label: 'Todos los estados', icon: LayoutGrid },
    { id: 'En Adopción', label: 'En adopción', icon: HomeIcon },
    { id: 'Busca acogida urgente', label: 'Busca acogida urgente', icon: AlertCircle },
    { id: 'Urgente', label: 'Casos Urgentes', icon: AlertCircle },
    { id: 'Pronto en adopción', label: 'Pronto en adopción', icon: Clock },
    { id: 'En residencia', label: 'En residencia', icon: Building2 },
    { id: 'Reservado', label: 'Reservados', icon: Bookmark },
  ];

  const activeStatusObj = statusCategories.find(s => s.id === activeStatus);

  const REVIEWS = [
    {
      id: 1,
      author: "Beatriz M.",
      text: "Una asociación maravillosa. Adoptamos a nuestra gata allí y el trato fue increíble. Se nota que aman a los animales y se preocupan muchísimo por encontrarles el mejor hogar posible.",
      rating: 5,
      date: "Hace 2 meses"
    },
    {
      id: 2,
      author: "Javier R.",
      text: "Hacen una labor incansable. Son transparentes y todo va íntegramente para los peludos. El proceso de adopción es serio y riguroso. 100% recomendables.",
      rating: 5,
      date: "Hace 5 meses"
    },
    {
      id: 3,
      author: "Elena S.",
      text: "Gracias a ellas mi vida cambió al adoptar a mi perro. Me asesoraron genial sobre qué animal encajaba mejor con mi estilo de vida. Sois ángeles.",
      rating: 5,
      date: "Hace 1 año"
    }
  ];

  const RESCUE_STATS = [
    { year: 2021, count: 208 },
    { year: 2022, count: 206 },
    { year: 2023, count: 63 },
    { year: 2024, count: 71 },
    { year: 2025, count: 40 },
    { year: 2026, count: animals.length },
  ];

  const maxStat = Math.max(...RESCUE_STATS.map(s => s.count));

  const GOOGLE_REVIEWS_URL = "https://www.google.com/search?q=APA.+Myanimalsm+Reseñas";

  return (
    <div className="min-h-screen relative overflow-x-hidden w-full">
      {/* Hero Section */}
      <div className="bg-background dark:bg-stone-900 pt-12 pb-8 md:pt-24 md:pb-12 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-stone-800 dark:text-stone-100 mb-4 md:mb-6">
            Encuentra a tu <span className="text-primary">mejor amigo</span>
          </h1>
          <p className="text-base md:text-lg text-stone-600 dark:text-stone-300 max-w-2xl mx-auto mb-2 md:mb-4">
            En APA Myanimalsm luchamos cada día por dar una segunda oportunidad a quienes más lo necesitan, trabajando con amor para encontrarles el hogar que merecen. Adopta, no compres.
          </p>
        </div>
      </div>

      {/* Animal List Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 overflow-x-hidden">
        
        <div className="flex items-center justify-between mb-6 md:mb-8">
           <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-800 dark:text-stone-100">
            En Adopción
          </h2>
          {isAuthenticated && (
            <div className="flex gap-2">
              <button 
                onClick={resetAnimals}
                className="bg-rose-100 hover:bg-rose-200 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300 px-4 py-2 rounded-xl font-bold text-sm shadow-sm flex items-center gap-2 transition-transform hover:scale-105"
                title="Restaurar datos originales"
              >
                  <RefreshCw size={18} />
              </button>
              <button 
                onClick={handleAddClick}
                className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-xl font-bold text-sm shadow-md flex items-center gap-2 transition-transform hover:scale-105"
              >
                  <Plus size={18} />
                  Añadir Animal
              </button>
            </div>
          )}
        </div>

        {/* Unified Filter Toolbar - Compact Version */}
        <div className="sticky top-[64px] md:top-20 z-40 bg-white/95 dark:bg-stone-900/95 backdrop-blur-md p-3 md:p-4 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-lg mb-8 flex flex-col gap-3">
          
          {/* Top Row: Categories */}
          <div className="flex overflow-x-auto pb-1 -mx-3 px-3 md:mx-0 md:px-0 scrollbar-hide gap-2 w-auto">
               {categories.map((cat) => {
                const Icon = cat.icon;
                const isSelected = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`
                      flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 border
                      ${isSelected 
                        ? 'bg-stone-800 dark:bg-stone-200 text-white dark:text-stone-900 border-stone-800 dark:border-stone-200 shadow-md' 
                        : 'bg-white dark:bg-stone-800 text-stone-600 dark:text-stone-400 border-stone-200 dark:border-stone-700 hover:border-primary'}
                    `}
                  >
                    <Icon size={14} />
                    {cat.label}
                  </button>
                );
              })}
          </div>

          {/* Bottom Row: Filters & View Toggle */}
          <div className="flex items-end justify-between gap-3">
            
            {/* Left: Status Filter + Clear Button */}
            <div className="flex items-center gap-2 flex-grow min-w-0">
               <div className="relative w-full sm:w-auto sm:min-w-[200px]" ref={dropdownRef}>
                 <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className={`
                      w-full flex items-center justify-between gap-2 px-3 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all shadow-sm border
                      ${activeStatus !== 'Todos' 
                        ? 'bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-300 border-teal-200 dark:border-teal-800' 
                        : 'bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-200 border-stone-200 dark:border-stone-700'}
                    `}
                 >
                    <div className="flex items-center gap-2 truncate">
                      <Filter size={14} className={activeStatus !== 'Todos' ? 'text-teal-600' : 'text-stone-400 flex-shrink-0'} />
                      <span className="truncate">{activeStatus === 'Todos' ? 'Estado' : activeStatusObj?.label}</span>
                    </div>
                    <ChevronDown size={14} className={`flex-shrink-0 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                 </button>

                 {isDropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-stone-800 rounded-xl shadow-2xl border border-stone-100 dark:border-stone-700 overflow-hidden z-50 animate-in fade-in zoom-in-95 duration-100 origin-top-left">
                        {statusCategories.map((status) => {
                          const Icon = status.icon;
                          const isSelected = activeStatus === status.id;
                          return (
                            <button
                                key={status.id}
                                onClick={() => {
                                    setActiveStatus(status.id);
                                    setIsDropdownOpen(false);
                                }}
                                className={`
                                  w-full text-left px-4 py-3.5 text-sm flex items-center gap-3 transition-colors border-b border-stone-50 dark:border-stone-700/50 last:border-0
                                  ${isSelected 
                                    ? 'bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-300 font-bold' 
                                    : 'text-stone-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-700/50'}
                                `}
                            >
                                 {Icon && <Icon size={16} className={isSelected ? 'text-teal-600 dark:text-teal-400' : 'text-stone-400'} />}
                                 {status.label}
                                 {isSelected && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-teal-500" />}
                            </button>
                          );
                        })}
                    </div>
                 )}
               </div>

               {(activeCategory !== 'Todos' || activeStatus !== 'Todos') && (
                  <button 
                    onClick={() => { setActiveCategory('Todos'); setActiveStatus('Todos'); }}
                    className="flex-shrink-0 p-2.5 rounded-xl bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400 hover:bg-rose-100 transition-colors"
                    title="Limpiar filtros"
                  >
                    <XCircle size={18} />
                  </button>
               )}
            </div>

            {/* Right (Mobile): View Toggle Stacked */}
            <div className="flex flex-col items-center gap-1 sm:hidden flex-shrink-0">
                <span className="text-[9px] font-bold text-stone-400 uppercase tracking-widest leading-none">Vista</span>
                <div className="flex items-center bg-stone-100 dark:bg-stone-800 p-1 rounded-xl border border-stone-200 dark:border-stone-700">
                    <button 
                      onClick={() => setViewMode('detailed')}
                      className={`p-1.5 rounded-lg transition-all ${viewMode === 'detailed' ? 'bg-white dark:bg-stone-700 text-primary shadow-sm' : 'text-stone-400'}`}
                    >
                      <List size={16} />
                    </button>
                    <button 
                      onClick={() => setViewMode('compact')}
                      className={`p-1.5 rounded-lg transition-all ${viewMode === 'compact' ? 'bg-white dark:bg-stone-700 text-primary shadow-sm' : 'text-stone-400'}`}
                    >
                      <Grip size={16} />
                    </button>
                </div>
            </div>

            {/* Right (Desktop): View Toggle */}
            <div className="hidden sm:flex items-center bg-stone-100 dark:bg-stone-800 p-1 rounded-xl border border-stone-200 dark:border-stone-700 ml-auto">
                <button 
                  onClick={() => setViewMode('detailed')}
                  className={`p-1.5 rounded-lg transition-all ${viewMode === 'detailed' ? 'bg-white dark:bg-stone-700 text-primary shadow-sm' : 'text-stone-400 hover:text-stone-600'}`}
                  title="Vista Detallada"
                >
                  <List size={18} />
                </button>
                <button 
                  onClick={() => setViewMode('compact')}
                  className={`p-1.5 rounded-lg transition-all ${viewMode === 'compact' ? 'bg-white dark:bg-stone-700 text-primary shadow-sm' : 'text-stone-400 hover:text-stone-600'}`}
                  title="Vista Cuadrícula"
                >
                  <Grip size={18} />
                </button>
            </div>
          </div>
        </div>

        <div className="mb-6 text-stone-500 dark:text-stone-400 text-xs font-bold flex items-center gap-2">
          <div className="h-px bg-stone-200 dark:bg-stone-800 flex-grow"></div>
          <span className="uppercase tracking-wider">
            {filteredAnimals.length} {filteredAnimals.length === 1 ? 'animal te espera' : 'animales te esperan'}
          </span>
          <div className="h-px bg-stone-200 dark:bg-stone-800 flex-grow"></div>
        </div>
        
        {filteredAnimals.length > 0 ? (
          <div className={`grid gap-4 md:gap-8 ${
            viewMode === 'detailed' 
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'
          }`}>
            {filteredAnimals.map(animal => (
              <AnimalCard 
                key={animal.id} 
                animal={animal} 
                compact={viewMode === 'compact'} 
                onEdit={handleEditClick}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-stone-50 dark:bg-stone-900/50 rounded-3xl border border-stone-100 dark:border-stone-800 border-dashed">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-stone-800 dark:text-stone-100 mb-2">No hay resultados</h3>
            <p className="text-stone-600 dark:text-stone-400 mb-6">Prueba con otros filtros o borra los actuales.</p>
            <button 
              onClick={() => { setActiveCategory('Todos'); setActiveStatus('Todos'); }}
              className="bg-primary text-white px-6 py-2 rounded-full font-bold text-sm shadow-md"
            >
              Ver todos los animales
            </button>
          </div>
        )}
      </div>

      {/* Adopted Animals Section - Fixed overflow */}
      {adoptedAnimals.length > 0 && (
        <div className="bg-stone-50 dark:bg-stone-950 py-12 md:py-16 border-y border-stone-100 dark:border-stone-800 overflow-hidden">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8">
                 <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-800 dark:text-stone-100 flex items-center justify-center gap-2">
                   <Sparkles className="text-amber-400 fill-amber-400" size={20} />
                   Finales Felices
                   <Sparkles className="text-amber-400 fill-amber-400" size={20} />
                 </h2>
              </div>
              
              <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-y-8 gap-x-4">
                {adoptedAnimals.map((animal) => (
                  <Link 
                      key={animal.id} 
                      to={`/animal/${animal.id}`}
                      className="group flex flex-col items-center"
                  >
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full p-1 bg-white dark:bg-stone-800 mb-2 shadow-sm group-hover:shadow-md transition-all">
                        <img 
                          src={animal.imageUrl} 
                          alt={animal.name} 
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>
                      <span className="font-bold text-[10px] sm:text-xs text-stone-600 dark:text-stone-400 text-center">
                        {animal.name}
                      </span>
                  </Link>
                ))}
              </div>
           </div>
        </div>
      )}

      {/* Reviews Section - Optimized with larger cards and text */}
      <div className="bg-white dark:bg-stone-900 py-16 border-b border-stone-200 dark:border-stone-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-800 dark:text-stone-100 mb-4">
              Reseñas
            </h2>
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="flex text-amber-400">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </span>
              <span className="text-stone-600 dark:text-stone-300 text-sm font-bold">4.9/5 en Google</span>
            </div>
          </div>

          <div className="-mx-4 sm:-mx-6 lg:-mx-8">
            <div className="flex overflow-x-auto snap-x snap-mandatory pb-8 px-4 sm:px-6 lg:px-8 gap-8 scrollbar-hide">
              {REVIEWS.map((review) => (
                <div key={review.id} className="snap-start w-[70%] sm:w-[380px] md:w-[440px] flex-shrink-0 bg-stone-50 dark:bg-stone-800 p-7 md:p-9 rounded-[2.5rem] border border-stone-100 dark:border-stone-700 flex flex-col transition-all shadow-sm">
                  <Quote className="text-teal-200/50 dark:text-teal-900/50 mb-4 w-9 h-9 md:w-11 md:h-11" />
                  <p className="text-stone-600 dark:text-stone-300 text-sm italic mb-8 line-clamp-6 flex-grow leading-relaxed">
                    "{review.text}"
                  </p>
                  <div className="flex items-center gap-4 md:gap-5">
                    <div className="w-9 h-9 md:w-11 md:h-11 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-sm md:text-base">
                      {review.author.charAt(0)}
                    </div>
                    <div className="min-w-0">
                      <p className="font-bold text-stone-800 dark:text-stone-100 text-sm md:text-base truncate">{review.author}</p>
                      <p className="text-xs md:text-sm text-stone-400 uppercase font-bold tracking-tighter truncate">{review.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-8">
            <a 
              href={GOOGLE_REVIEWS_URL}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:underline"
            >
              Ver más en Google <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* Stats Graph Section - Optimized to fit without scroll */}
      <div className="py-16 bg-background dark:bg-stone-950 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
             <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-800 dark:text-stone-100 flex items-center justify-center gap-2">
               <Activity className="text-primary" size={24} />
               Rescates
             </h2>
          </div>

          <div className="w-full overflow-hidden">
            <div className="w-full h-48 md:h-64 flex items-end justify-around gap-1 sm:gap-4 border-b border-stone-200 dark:border-stone-800 pb-2">
               {RESCUE_STATS.map((stat) => (
                 <div key={stat.year} className="flex flex-col items-center justify-end w-full group h-full">
                    <div className="mb-1 font-bold text-stone-700 dark:text-stone-300 text-[10px] md:text-sm">
                      {stat.count}
                    </div>
                    <div 
                      className="w-full max-w-[32px] md:max-w-[45px] bg-gradient-to-t from-teal-500 to-teal-300 rounded-t-lg relative shadow-md transition-all duration-500 group-hover:from-teal-400 group-hover:to-teal-200"
                      style={{ height: `${(stat.count / maxStat) * 100}%` }}
                    />
                    <div className="mt-2 font-bold text-stone-400 text-[10px] md:text-xs">
                      {stat.year}
                    </div>
                 </div>
               ))}
            </div>
          </div>
          <p className="text-center text-[10px] text-stone-400 mt-6 uppercase tracking-widest font-bold">
            Evolución de animales rescatados por año
          </p>
        </div>
      </div>

      <a
        href="https://ig.me/m/apa.myanimalsm"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-50 bg-teal-600 text-white p-3.5 rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95 flex items-center justify-center"
        aria-label="Chat en Instagram"
      >
        <Instagram size={24} />
      </a>

      {/* Admin Modal */}
      <AnimalFormModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveAnimal}
        initialData={editingAnimal}
      />
    </div>
  );
};