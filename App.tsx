
import React, { useState, useEffect } from 'react';
import { LiquidCard } from './components/LiquidCard';
import { SocialLinks } from './components/SocialLinks';
import { ArticleCarousel } from './components/ArticleCarousel';
import { PresetsSection } from './components/PresetsSection';
import { Sun, Moon } from 'lucide-react';

const App: React.FC = () => {
  const profileImageUrl = "https://raw.githubusercontent.com/CColladoR/profilepic/main/christian.jpg";
  
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    }
    return 'light';
  });

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className="relative max-w-6xl mx-auto px-6 py-12 md:py-20 transition-colors duration-500 will-change-[background-color] overflow-x-hidden touch-pan-y overscroll-y-none">
      {/* Elemento Decorativo de Fondo - High Performance Layers */}
      <div className="liquid-aura top-20 -left-40 opacity-50 pointer-events-none transform-gpu"></div>
      <div className="liquid-aura bottom-0 -right-40 opacity-30 pointer-events-none transform-gpu" style={{ animationDelay: '-5s' }}></div>

      {/* Navbar Minimalist */}
      <nav className="flex justify-between items-center mb-20 md:mb-32 relative z-50">
        <div className="flex items-center">
          <span className="text-2xl font-black tracking-tighter text-black dark:text-white">CC.</span>
        </div>
        <div className="hidden md:flex gap-12 text-[10px] uppercase tracking-[0.3em] font-bold text-black/40 dark:text-white/40">
          <a href="#" className="hover:text-black dark:hover:text-white transition-colors duration-300">Inicio</a>
          <a href="#articles" className="hover:text-black dark:hover:text-white transition-colors duration-300">Artículos</a>
          <a href="#presets" className="hover:text-black dark:hover:text-white transition-colors duration-300">Presets</a>
          <a href="#contact" className="hover:text-black dark:hover:text-white transition-colors duration-300">Contacto</a>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="p-3 rounded-xl border border-black/5 dark:border-white/5 bg-white dark:bg-black/40 text-black dark:text-white hover:scale-110 active:scale-95 transition-all duration-300 touch-manipulation"
            aria-label="Alternar modo oscuro"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <a 
            href="mailto:christian@difoosion.com" 
            className="px-6 py-3 md:px-8 md:py-3 rounded-full bg-black text-white dark:bg-white dark:text-black text-[10px] font-bold uppercase tracking-widest hover:bg-indigo-600 dark:hover:bg-indigo-400 transition-all duration-300 shadow-xl shadow-black/10 active:scale-95 touch-manipulation"
          >
            Contactar
          </a>
        </div>
      </nav>

      <main className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        {/* Left Section: Intro & Bio */}
        <section className="lg:col-span-7 relative cv-auto">
          <div className="reveal-text transform-gpu">
            <header className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-indigo-600 dark:text-indigo-400 font-black text-xs uppercase tracking-[0.4em]">¡Hola! 👋</span>
                <div className="h-px w-24 bg-indigo-600/20 dark:bg-indigo-400/20"></div>
              </div>
              
              <div className="relative inline-block mb-12">
                <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-black dark:text-white leading-none title-reveal">
                  Soy<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-black via-black to-black/30 dark:from-white dark:via-white dark:to-white/30">Christian</span>
                </h1>
                <div className="absolute -right-8 -top-4 w-16 h-16 border-2 border-indigo-600/10 dark:border-indigo-400/10 rounded-full animate-pulse pointer-events-none"></div>
              </div>
            </header>
            
            <div className="relative pl-0 md:pl-12">
              <div className="absolute left-0 top-2 bottom-2 w-[2px] bg-gradient-to-b from-indigo-600/40 via-indigo-600/5 to-transparent hidden md:block"></div>

              <div className="space-y-12">
                <p className="text-2xl md:text-3xl font-light text-black/80 dark:text-white/80 leading-[1.4]">
                  Director de <span className="text-black dark:text-white font-bold relative inline-block">
                    Andro4all
                    <span className="absolute bottom-0 left-0 w-full h-[6px] bg-indigo-600/10 dark:bg-indigo-400/10 -z-10"></span>
                  </span>, 
                  medio sobre Android, tecnología y telefonía móvil líder en español, integrado en el periódico <span className="font-semibold text-black dark:text-white">La Vanguardia</span> entre 2023 y 2025. Actualmente, Andro4all es el vertical de tecnología de consumo del periódico <span className="font-semibold text-black dark:text-white">La Razón</span>.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <h3 className="text-[10px] uppercase tracking-[0.3em] font-black text-indigo-600 dark:text-indigo-400">Formación</h3>
                    <p className="text-lg text-black/60 dark:text-white/60 leading-relaxed">
                      Técnico superior en desarrollo de aplicaciones multiplataforma, con experiencia en desarrollo web y apps Android.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-[10px] uppercase tracking-[0.3em] font-black text-indigo-600 dark:text-indigo-400">Experiencia</h3>
                    <p className="text-lg text-black/60 dark:text-white/60 leading-relaxed">
                      Escribo noticias, analizo productos y doy mi opinión desde hace más de 9 años. He publicado más de <span className="text-black dark:text-white font-bold">12.000 artículos</span>.
                    </p>
                  </div>
                </div>

                <div className="pt-8 border-t border-black/5 dark:border-white/5">
                  <p className="text-lg text-black/50 dark:text-white/40 italic font-light mb-8">
                    "Si quieres contactar conmigo, puedes hacerlo a través de <span className="text-black dark:text-white font-medium">mis redes sociales</span> o por correo electrónico."
                  </p>
                </div>
              </div>
            </div>

            <div id="contact" className="scroll-mt-20">
              <SocialLinks />
            </div>
          </div>
        </section>

        {/* Right Section: Photo & Stats */}
        <aside className="lg:col-span-5 flex flex-col gap-10 cv-auto">
          <div className="relative group reveal-text transform-gpu" style={{ animationDelay: '0.4s' }}>
             {/* Dynamic background glow */}
             <div className="absolute -inset-10 bg-indigo-600/5 dark:bg-indigo-500/10 rounded-[5rem] blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"></div>
             
             {/* Sub-border glow */}
             <div className="absolute -inset-0.5 bg-gradient-to-tr from-black/5 to-white/10 dark:from-white/5 dark:to-white/10 rounded-[2.6rem] blur-[2px] opacity-30 pointer-events-none"></div>
             
             <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] overflow-hidden rounded-[2.5rem] liquid-border-glow border border-white/60 dark:border-white/10 bg-white/5 backdrop-blur-md transform-gpu">
               <img 
                 src={profileImageUrl} 
                 alt="Christian Collado" 
                 className="w-full h-full object-cover transition-all duration-[2.5s] ease-in-out scale-[1.08] group-hover:scale-100 group-hover:brightness-105 group-hover:contrast-[1.02] object-center image-soft-mask will-change-transform"
                 onError={(e) => {
                   const target = e.target as HTMLImageElement;
                   target.style.display = 'none';
                   const parent = target.parentElement;
                   if (parent) {
                     parent.classList.add('flex', 'items-center', 'justify-center', 'bg-indigo-50', 'dark:bg-indigo-950');
                     const text = document.createElement('span');
                     text.className = 'text-4xl font-black text-indigo-200 dark:text-indigo-800';
                     text.innerText = 'CC';
                     parent.appendChild(text);
                   }
                 }}
               />
               <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent pointer-events-none"></div>
               <div className="absolute inset-0 ring-1 ring-inset ring-white/20 dark:ring-white/5 rounded-[2.5rem] pointer-events-none"></div>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
            <LiquidCard className="relative overflow-hidden group py-16 flex flex-col items-center justify-center text-center hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 transform-gpu active:scale-[0.98] touch-manipulation">
              <div className="relative z-10 flex flex-col items-center">
                <div className="text-7xl md:text-8xl lg:text-9xl font-black text-black dark:text-white mb-4 tracking-[-0.05em] leading-none transition-all duration-700 group-hover:scale-110 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 will-change-transform">
                  +12k
                </div>
                <h3 className="text-black/40 dark:text-white/40 text-[11px] uppercase tracking-[0.4em] font-black mb-6 transition-colors duration-500 group-hover:text-black dark:group-hover:text-white">Artículos Publicados</h3>
                <div className="w-12 h-[3px] bg-indigo-600 dark:bg-indigo-400 rounded-full opacity-20 group-hover:opacity-100 group-hover:w-24 group-hover:scale-x-110 transition-all duration-700 ease-out will-change-[width,transform]"></div>
              </div>
            </LiquidCard>

            <LiquidCard className="p-10 space-y-16 hover:-translate-y-1 hover:shadow-xl transition-all duration-500 transform-gpu active:scale-[0.99] touch-manipulation">
              <div>
                <h3 className="text-black/30 dark:text-white/30 text-[10px] uppercase tracking-[0.3em] font-black mb-8">Especialización</h3>
                <div className="flex flex-wrap gap-2">
                  {['Android', 'Tecnología', 'Reviews', 'Editorial', 'IA'].map(tag => (
                    <span key={tag} className="px-3 py-1.5 rounded-full border border-black/5 dark:border-white/5 bg-white dark:bg-black/40 text-[10px] font-bold uppercase tracking-wider text-black/60 dark:text-white/60 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 dark:hover:bg-indigo-400 dark:hover:text-black dark:hover:border-indigo-400 transition-all duration-300 cursor-default touch-manipulation">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-12">
                <h3 className="text-black/30 dark:text-white/30 text-[10px] uppercase tracking-[0.3em] font-black mb-10">Trayectoria</h3>
                <div className="relative pl-6 ml-1 space-y-12">
                  <div className="absolute left-0 top-1 bottom-1 w-[1.5px] bg-gradient-to-b from-indigo-600 via-indigo-600/20 to-indigo-600/5 dark:from-indigo-400 dark:via-indigo-400/20 dark:to-indigo-400/5"></div>
                  
                  {[
                    { year: '2026', title: 'La Razón', desc: 'Responsable del Vertical de Tecnología (Andro4all).', active: true },
                    { year: '2023 — 2025', title: 'La Vanguardia', desc: 'Director de Andro4all.' },
                    { year: '2016', title: 'Inicio en Andro4all', desc: 'Redactor y coordinador.' }
                  ].map((item, i) => (
                    <div key={i} className="relative group/step">
                      <div className={`absolute -left-[1.85rem] top-1.5 w-3 h-3 rounded-full border-2 border-white dark:border-black shadow-sm transition-all duration-500 group-hover/step:scale-125 ${item.active ? 'bg-indigo-600 dark:bg-indigo-400 ring-4 ring-indigo-600/10' : 'bg-black dark:bg-white/20 group-hover/step:bg-indigo-500'}`}></div>
                      <div className="space-y-1.5">
                        <span className={`text-[9px] font-black tracking-widest uppercase ${item.active ? 'text-indigo-600 dark:text-indigo-400' : 'text-black/30 dark:text-white/30'}`}>{item.year}</span>
                        <h4 className="text-sm font-extrabold text-black dark:text-white leading-tight group-hover/step:text-indigo-600 dark:group-hover/step:text-indigo-400 transition-colors">{item.title}</h4>
                        <p className="text-[11px] text-black/50 dark:text-white/40 leading-relaxed font-medium">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </LiquidCard>
          </div>
        </aside>
      </main>

      {/* Carousel Section - Optimized horizontal container */}
      <section id="articles" className="mt-40 scroll-mt-20 cv-auto hide-scrollbar overflow-x-hidden">
        <ArticleCarousel />
      </section>

      {/* Presets Section */}
      <div id="presets" className="scroll-mt-20">
        <PresetsSection />
      </div>

      {/* Footer */}
      <footer className="mt-40 pt-16 border-t border-black/5 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 pb-12 relative z-50">
        <div className="flex items-center gap-4">
          <span className="text-lg font-black tracking-tighter text-black dark:text-white">CC.</span>
          <span className="w-px h-4 bg-black/10 dark:bg-white/10"></span>
          <p className="text-[10px] text-black/30 dark:text-white/30 uppercase tracking-[0.3em] font-bold">
            &copy; {new Date().getFullYear()} — CColladoR
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
