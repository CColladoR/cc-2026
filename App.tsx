
import React from 'react';
import { LiquidCard } from './components/LiquidCard';
import { SocialLinks } from './components/SocialLinks';
import { ArticleCarousel } from './components/ArticleCarousel';

const App: React.FC = () => {
  // Utilizamos la URL directa del recurso en GitHub (versión raw para que sea servida como imagen)
  const profileImageUrl = "https://raw.githubusercontent.com/CColladoR/profilepic/main/christian.jpg";

  return (
    <div className="relative max-w-6xl mx-auto px-6 py-12 md:py-20">
      {/* Elemento Decorativo de Fondo */}
      <div className="liquid-aura top-20 -left-40 opacity-50"></div>
      <div className="liquid-aura bottom-0 -right-40 opacity-30" style={{ animationDelay: '-5s' }}></div>

      {/* Navbar Minimalist */}
      <nav className="flex justify-between items-center mb-20 md:mb-32">
        <div className="flex items-center">
          <span className="text-2xl font-black tracking-tighter text-black">CC.</span>
        </div>
        <div className="hidden md:flex gap-12 text-[10px] uppercase tracking-[0.3em] font-bold text-black/40">
          <a href="#" className="hover:text-black transition-colors duration-300">Inicio</a>
          <a href="#articles" className="hover:text-black transition-colors duration-300">Artículos</a>
          <a href="#contact" className="hover:text-black transition-colors duration-300">Contacto</a>
        </div>
        <a 
          href="mailto:christian@difoosion.com" 
          className="px-8 py-3 rounded-full bg-black text-white text-[10px] font-bold uppercase tracking-widest hover:bg-indigo-600 transition-all duration-300 shadow-xl shadow-black/10"
        >
          Contactar
        </a>
      </nav>

      <main className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        {/* Left Section: Intro & Bio */}
        <section className="lg:col-span-7 relative">
          <div className="reveal-text">
            <header className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-indigo-600 font-black text-xs uppercase tracking-[0.4em]">Hola! 👋</span>
                <div className="h-px w-24 bg-indigo-600/20"></div>
              </div>
              
              <div className="relative inline-block mb-12">
                <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-black leading-none title-reveal">
                  Soy<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-black via-black to-black/30">Christian</span>
                </h1>
                <div className="absolute -right-8 -top-4 w-16 h-16 border-2 border-indigo-600/10 rounded-full animate-pulse"></div>
              </div>
            </header>
            
            <div className="relative pl-0 md:pl-12">
              <div className="absolute left-0 top-2 bottom-2 w-[2px] bg-gradient-to-b from-indigo-600/40 via-indigo-600/5 to-transparent hidden md:block"></div>

              <div className="space-y-12">
                <p className="text-2xl md:text-3xl font-light text-black/80 leading-[1.4]">
                  Director de <span className="text-black font-bold relative inline-block">
                    Andro4all
                    <span className="absolute bottom-0 left-0 w-full h-[6px] bg-indigo-600/10 -z-10"></span>
                  </span>, 
                  medio sobre Android, tecnología y telefonía móvil líder en español, integrado en el periódico <span className="font-semibold text-black">La Vanguardia</span> entre 2023 y 2025. Actualmente, Andro4all es el vertical de tecnología de consumo del periódico <span className="font-semibold text-black">La Razón</span>.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <h3 className="text-[10px] uppercase tracking-[0.3em] font-black text-indigo-600">Formación</h3>
                    <p className="text-lg text-black/60 leading-relaxed">
                      Técnico superior en desarrollo de aplicaciones multiplataforma, con experiencia en desarrollo web y apps Android.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-[10px] uppercase tracking-[0.3em] font-black text-indigo-600">Experiencia</h3>
                    <p className="text-lg text-black/60 leading-relaxed">
                      Escribo noticias, analizo productos y doy mi opinión desde hace más de 9 años. He publicado más de <span className="text-black font-bold">12.000 artículos</span>.
                    </p>
                  </div>
                </div>

                <div className="pt-8 border-t border-black/5">
                  <p className="text-lg text-black/50 italic font-light mb-8">
                    "Si quieres contactar conmigo, puedes hacerlo a través de <span className="text-black font-medium not-italic">Instagram, TikTok, X, Threads</span> o por correo electrónico."
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
        <aside className="lg:col-span-5 flex flex-col gap-10">
          {/* Profile Picture Card with Enhanced Liquid Glass & Suit Blue Accents */}
          <div className="relative group reveal-text" style={{ animationDelay: '0.4s' }}>
             {/* Decorative Accent Glow (Suit Blue) */}
             <div className="absolute -inset-8 bg-blue-900/10 rounded-[4rem] blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
             <div className="absolute -inset-1 bg-gradient-to-tr from-white/40 via-blue-200/20 to-indigo-200/20 rounded-[3rem] blur-sm opacity-50"></div>
             
             <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] overflow-hidden rounded-[2.5rem] liquid-border-glow border border-white/60 bg-white/5 backdrop-blur-md">
               <img 
                 src={profileImageUrl} 
                 alt="Christian Collado" 
                 className="w-full h-full object-cover transition-all duration-[2.5s] ease-in-out scale-[1.08] group-hover:scale-100 group-hover:brightness-105 group-hover:contrast-[1.02] object-center image-soft-mask"
                 onError={(e) => {
                   const target = e.target as HTMLImageElement;
                   target.style.display = 'none';
                   const parent = target.parentElement;
                   if (parent) {
                     parent.classList.add('flex', 'items-center', 'justify-center', 'bg-indigo-50');
                     const text = document.createElement('span');
                     text.className = 'text-4xl font-black text-indigo-200';
                     text.innerText = 'CC';
                     parent.appendChild(text);
                   }
                 }}
               />
               
               {/* Animated Liquid Overlays */}
               <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent opacity-60 mix-blend-overlay group-hover:opacity-30 transition-opacity duration-1000"></div>
               <div className="absolute inset-0 ring-1 ring-inset ring-white/30 rounded-[2.5rem]"></div>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
            <LiquidCard className="relative overflow-hidden group py-12 text-center">
              <div className="relative z-10">
                <div className="text-5xl font-black text-black mb-2 tracking-tighter">+12k</div>
                <h3 className="text-black/30 text-[10px] uppercase tracking-[0.3em] font-black mb-4">Artículos Publicados</h3>
                <div className="w-10 h-1 bg-indigo-600/20 mx-auto rounded-full"></div>
              </div>
            </LiquidCard>

            <LiquidCard className="p-10 space-y-16">
              <div>
                <h3 className="text-black/30 text-[10px] uppercase tracking-[0.3em] font-black mb-8">Especialización</h3>
                <div className="flex flex-wrap gap-2">
                  {['Android', 'Tecnología', 'Reviews', 'Editorial', 'IA'].map(tag => (
                    <span key={tag} className="px-3 py-1.5 rounded-full border border-black/5 bg-white text-[10px] font-bold uppercase tracking-wider text-black/60">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Timeline Trajectory Section */}
              <div className="pt-12 border-t border-black/5">
                <h3 className="text-black/30 text-[10px] uppercase tracking-[0.3em] font-black mb-10">Trayectoria</h3>
                
                <div className="relative pl-6 ml-1 space-y-12">
                  {/* Vertical Timeline Axis */}
                  <div className="absolute left-0 top-1 bottom-1 w-[1.5px] bg-gradient-to-b from-indigo-600 via-indigo-600/20 to-indigo-600/5"></div>
                  
                  {[
                    { 
                      year: '2026', 
                      title: 'La Razón', 
                      desc: 'Responsable del Vertical de Tecnología (Andro4all).',
                      active: true
                    },
                    { 
                      year: '2023 — 2025', 
                      title: 'La Vanguardia', 
                      desc: 'Director de Andro4all.' 
                    },
                    { 
                      year: '2016', 
                      title: 'Inicio en Andro4all', 
                      desc: 'Redactor y coordinador.' 
                    }
                  ].map((item, i) => (
                    <div key={i} className="relative group/step">
                      {/* Timeline Node with Enhanced Hover Interaction */}
                      <div className={`absolute -left-[1.85rem] top-1.5 w-3 h-3 rounded-full border-2 border-white shadow-sm transition-all duration-500 group-hover/step:scale-125 ${item.active ? 'bg-indigo-600 ring-4 ring-indigo-600/10' : 'bg-black group-hover/step:bg-indigo-500'}`}></div>
                      
                      <div className="space-y-1.5">
                        <span className={`text-[9px] font-black tracking-widest uppercase ${item.active ? 'text-indigo-600' : 'text-black/30'}`}>
                          {item.year}
                        </span>
                        <h4 className="text-sm font-extrabold text-black leading-tight group-hover/step:text-indigo-600 transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-[11px] text-black/50 leading-relaxed font-medium">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </LiquidCard>
          </div>
        </aside>
      </main>

      {/* Carousel Section */}
      <section id="articles" className="mt-40 scroll-mt-20">
        <ArticleCarousel />
      </section>

      {/* Footer */}
      <footer className="mt-40 pt-16 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-8 pb-12">
        <div className="flex items-center gap-4">
          <span className="text-lg font-black tracking-tighter text-black">CC.</span>
          <span className="w-px h-4 bg-black/10"></span>
          <p className="text-[10px] text-black/30 uppercase tracking-[0.3em] font-bold">
            &copy; {new Date().getFullYear()} — CColladoR
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
