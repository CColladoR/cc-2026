
import React from 'react';
import { LiquidCard } from './LiquidCard';
import { Camera, Download, Layers, Smartphone, Monitor } from 'lucide-react';

export const PresetsSection: React.FC = () => {
  return (
    <section className="mt-40 cv-auto relative group">
      {/* Elemento decorativo de fondo específico para esta sección */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-indigo-600/5 dark:bg-indigo-400/5 blur-[120px] rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

      <div className="reveal-text">
        <div className="flex items-center gap-3 mb-4 px-2">
          <span className="w-8 h-px bg-indigo-600/30 dark:bg-indigo-400/30"></span>
          <h2 className="text-[10px] uppercase tracking-[0.5em] text-indigo-600 dark:text-indigo-400 font-black">Recursos Digitales</h2>
        </div>
        <p className="text-4xl md:text-5xl font-black text-black dark:text-white tracking-tighter leading-none mb-16 px-2">
          Edita tus fotos <span className="text-black/20 dark:text-white/20 italic font-light font-serif">como yo</span>
        </p>
      </div>

      <LiquidCard className="p-0 overflow-hidden border-none shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Lado Izquierdo: Visual/Precio */}
          <div className="relative bg-black aspect-square lg:aspect-auto overflow-hidden group/visual">
            <img 
              src="https://images.unsplash.com/photo-1767022786924-b2b3cdf77999" 
              alt="Lightroom Presets Preview" 
              className="w-full h-full object-cover opacity-80 transition-transform duration-[3s] group-hover/visual:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
            
            <div className="absolute bottom-12 left-12 right-12">
              <div className="flex items-end gap-4 mb-6">
                <span className="text-7xl font-black text-white leading-none">5€</span>
                <span className="text-white/40 text-xs uppercase tracking-widest font-bold mb-2">Pago único</span>
              </div>
              <div className="flex gap-4">
                <div className="flex items-center gap-2 text-white/60 text-[10px] uppercase tracking-widest font-black">
                  <Layers size={14} className="text-indigo-400" />
                  <span>5 Presets</span>
                </div>
                <div className="w-px h-4 bg-white/10"></div>
                <div className="flex items-center gap-2 text-white/60 text-[10px] uppercase tracking-widest font-black">
                  <Camera size={14} className="text-indigo-400" />
                  <span>Estilo Profesional</span>
                </div>
              </div>
            </div>
          </div>

          {/* Lado Derecho: Contenido/Texto */}
          <div className="p-10 md:p-16 flex flex-col justify-center">
            <h3 className="text-3xl font-black text-black dark:text-white mb-8 tracking-tighter">
              Colección de mis presets de Adobe Lightroom
            </h3>
            
            <div className="space-y-6 text-black/60 dark:text-white/50 text-lg leading-relaxed font-light mb-12">
              <p>
                Cada preset ha sido cuidadosamente personalizado para coincidir con el estilo de las fotografías que comparto en Instagram, Twitter y en mis artículos.
              </p>
              <p>
                La colección incluye ajustes preestablecidos con una variedad de distintos estilos. Perfectos para fotografía de producto, estilo de vida, paisajes y más. Puedes personalizar y modificar a tu gusto cada preset para crear tu propio estilo.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 mb-12">
              <div className="flex flex-col items-center gap-3 text-center">
                <div className="p-4 rounded-2xl bg-black/5 dark:bg-white/5 text-black dark:text-white">
                  <Monitor size={20} />
                </div>
                <span className="text-[9px] font-black uppercase tracking-widest text-black/40 dark:text-white/30">Classic</span>
              </div>
              <div className="flex flex-col items-center gap-3 text-center">
                <div className="p-4 rounded-2xl bg-black/5 dark:bg-white/5 text-black dark:text-white">
                  <Layers size={20} />
                </div>
                <span className="text-[9px] font-black uppercase tracking-widest text-black/40 dark:text-white/30">Desktop</span>
              </div>
              <div className="flex flex-col items-center gap-3 text-center">
                <div className="p-4 rounded-2xl bg-black/5 dark:bg-white/5 text-black dark:text-white">
                  <Smartphone size={20} />
                </div>
                <span className="text-[9px] font-black uppercase tracking-widest text-black/40 dark:text-white/30">Mobile</span>
              </div>
            </div>

            <a 
              href="https://ccr1o.gumroad.com/l/Lightroompresets" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group/buy flex items-center justify-center gap-4 w-full py-6 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white text-[11px] font-black uppercase tracking-[0.3em] transition-all duration-300 shadow-xl shadow-indigo-600/20 active:scale-[0.98]"
            >
              <Download size={18} className="group-hover/buy:-translate-y-1 transition-transform" />
              Obtener el pack ahora
            </a>
          </div>
        </div>
      </LiquidCard>
    </section>
  );
};
