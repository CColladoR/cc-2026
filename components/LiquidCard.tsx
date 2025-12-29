
import React, { useState, useEffect } from 'react';

interface LiquidCardProps {
  children: React.ReactNode;
  className?: string;
}

export const LiquidCard: React.FC<LiquidCardProps> = ({ children, className = '' }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Usamos un factor de escala pequeño para que el movimiento sea muy sutil
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculamos los offsets de paralaje
  const offset1 = scrollY * 0.05;
  const offset2 = scrollY * -0.03;

  return (
    <div className={`liquid-glass relative overflow-hidden rounded-3xl p-8 transition-all duration-500 hover:border-white/30 group ${className}`}>
      {/* Capas de gradiente con paralaje */}
      <div 
        className="absolute -top-24 -left-24 w-64 h-64 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none transition-transform duration-300 ease-out opacity-60"
        style={{ transform: `translate3d(0, ${offset1}px, 0)` }}
      ></div>
      <div 
        className="absolute -bottom-24 -right-24 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl pointer-events-none transition-transform duration-300 ease-out opacity-40"
        style={{ transform: `translate3d(0, ${offset2}px, 0)` }}
      ></div>
      
      {/* Contenido de la tarjeta */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
