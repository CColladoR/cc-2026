
import React from 'react';

interface LiquidCardProps {
  children: React.ReactNode;
  className?: string;
}

export const LiquidCard: React.FC<LiquidCardProps> = ({ children, className = '' }) => {
  /**
   * Performance optimization:
   * Using 'contain: paint layout' where possible to isolate the card from the rest of the layout tree.
   */
  
  return (
    <div 
      className={`liquid-glass relative overflow-hidden rounded-3xl p-8 transition-all duration-500 hover:border-white/30 group ${className}`}
      style={{ contain: 'paint' }}
    >
      {/* 
          Parallax gradient layers using Pure CSS and GPU-accelerated translate3d.
          Using 'will-change' to hint the browser about incoming movement.
      */}
      <div 
        className="absolute -top-24 -left-24 w-64 h-64 bg-indigo-600/5 dark:bg-indigo-400/5 rounded-full blur-3xl pointer-events-none opacity-60 will-change-transform transform-gpu"
        style={{ 
          transform: `translate3d(0, calc(var(--scroll-y) * 0.05), 0)` 
        }}
      ></div>
      <div 
        className="absolute -bottom-24 -right-24 w-80 h-80 bg-blue-600/5 dark:bg-blue-400/5 rounded-full blur-3xl pointer-events-none opacity-40 will-change-transform transform-gpu"
        style={{ 
          transform: `translate3d(0, calc(var(--scroll-y) * -0.03), 0)` 
        }}
      ></div>
      
      {/* Card Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
