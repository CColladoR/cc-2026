import React from 'react';
import { PawPrint, Heart, ShieldCheck, Stethoscope, CheckCircle2, Instagram, HelpCircle } from 'lucide-react';

export const Foster: React.FC = () => {
  const message = "¡Hola! Me gustaría iniciar el trámite para ser casa de acogida.";
  const instagramUrl = `https://ig.me/m/apa.myanimalsm?text=${encodeURIComponent(message)}`;

  // Configuration for the bubbles grid - Refined for mobile
  const bubbles = [
    { size: 'w-20 h-20 md:w-40 md:h-40', z: 'z-0', rotate: '-rotate-12', mt: 'mt-6 md:mt-8' },
    { 
      size: 'w-24 h-24 md:w-48 md:h-48', 
      z: 'z-10', 
      rotate: '-rotate-3', 
      mt: 'mt-0',
      imageUrl: "https://raw.githubusercontent.com/myanimalsm-apa/APA.-Myanimalsm-/569abdbe27a3dff48861f5dc4fd16847dcbe6f2c/IMG_20260223_204216_931.jpg",
      caption: "María y Cava"
    },
    { size: 'w-16 h-16 md:w-32 md:h-32', z: 'z-0', rotate: 'rotate-12', mt: 'mt-10 md:mt-12' }, 
    { 
        // Main center bubble - User photo
        size: 'w-28 h-28 md:w-60 md:h-60', 
        z: 'z-30', 
        rotate: '-rotate-2', 
        mt: '-mt-4',
        imageUrl: "https://raw.githubusercontent.com/myanimalsm-apa/APA.-Myanimalsm-/main/IMG_20260206_180035_762.jpg",
        caption: "Helena y Jengibre"
    }, 
    { size: 'w-20 h-20 md:w-40 md:h-40', z: 'z-20', rotate: 'rotate-3', mt: 'mt-4 md:mt-6' },
    { 
      size: 'w-24 h-24 md:w-48 md:h-48', 
      z: 'z-10', 
      rotate: 'rotate-6', 
      mt: 'mt-2',
      imageUrl: "https://raw.githubusercontent.com/myanimalsm-apa/APA.-Myanimalsm-/aea1e1a9c005f2dd14a091b5df85284ad6c00d69/P1470271.jpg",
      caption: "Laura y Galia"
    },
    { size: 'w-14 h-14 md:w-32 md:h-32', z: 'z-0', rotate: '-rotate-6', mt: 'mt-8 md:mt-10' },
    { size: 'w-20 h-20 md:w-36 md:h-36', z: 'z-10', rotate: '-rotate-3', mt: 'mt-4' },
  ];

  return (
    <div className="min-h-screen py-10 md:py-16 bg-white dark:bg-stone-900 transition-colors duration-300">
      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 md:mb-16 text-center">
        <div className="inline-flex items-center justify-center p-3 bg-teal-50 dark:bg-teal-900/30 rounded-full mb-6">
          <PawPrint className="text-primary w-6 h-6 md:w-8 md:h-8" />
        </div>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-stone-800 dark:text-stone-100 mb-4 md:mb-6 leading-tight">
          ¿Quieres ser Casa de Acogida?
        </h1>
        <p className="text-base md:text-lg text-stone-600 dark:text-stone-300 max-w-3xl mx-auto px-4">
          Abre las puertas de tu hogar temporalmente y salva vidas. Sin casas de acogida, muchos animales no tendrían una segunda oportunidad.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Info Section */}
        <div className="space-y-10 md:space-y-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-800 dark:text-stone-100 mb-4 md:mb-6 flex items-center gap-3">
              <Heart className="text-accent w-5 h-5 md:w-6 md:h-6" />
              ¿Qué implica acoger?
            </h2>
            <div className="space-y-4 text-stone-600 dark:text-stone-400 leading-relaxed text-sm md:text-base pl-4 md:pl-9 border-l-2 border-stone-100 dark:border-stone-800">
                <p>Ser casa de acogida significa cuidar temporalmente de un animal en tu propia casa hasta que encuentre una familia definitiva.</p>
                <p>Es la opción ideal si quieres disfrutar de la compañía de un animal pero no puedes comprometerte a largo plazo.</p>
            </div>
          </div>

          {/* Requisitos Section */}
          <div className="bg-stone-50 dark:bg-stone-800 rounded-3xl p-6 md:p-8 border border-stone-100 dark:border-stone-700 shadow-sm">
              <h3 className="text-xl md:text-2xl font-serif font-bold text-stone-800 dark:text-stone-100 mb-6">Requisitos imprescindibles</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                  <span className="text-stone-700 dark:text-stone-300 text-sm md:text-base leading-tight">Vivir en <strong>Madrid o Toledo</strong>.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                  <span className="text-stone-700 dark:text-stone-300 text-sm md:text-base leading-tight">Disponer de un espacio aislado temporal.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                  <span className="text-stone-700 dark:text-stone-300 text-sm md:text-base leading-tight">Acudir a nuestros veterinarios habituales.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                  <span className="text-stone-700 dark:text-stone-300 text-sm md:text-base leading-tight">Amor y paciencia infinitos 💙</span>
                </li>
              </ul>
              <div className="mt-8 pt-6 border-t border-stone-200 dark:border-stone-700 text-center md:text-left">
                <p className="text-stone-800 dark:text-stone-200 font-bold mb-1 uppercase tracking-wider text-xs md:text-sm">De lo demás nos encargamos nosotros</p>
                <p className="text-primary font-bold text-lg">¿Te animas? 🚀</p>
              </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            <div className="bg-white dark:bg-stone-800 p-6 rounded-2xl border border-stone-100 dark:border-stone-700 shadow-sm">
              <ShieldCheck className="text-teal-600 dark:text-teal-400 mb-3 h-8 w-8" />
              <h3 className="font-bold text-xl md:text-2xl text-stone-800 dark:text-stone-100 mb-1">Seguridad</h3>
              <p className="text-sm md:text-base text-stone-500 dark:text-stone-400 leading-relaxed">
                El animal está bajo la tutela de la asociación. Nosotros filtramos a los adoptantes.
              </p>
            </div>
            <div className="bg-white dark:bg-stone-800 p-6 rounded-2xl border border-stone-100 dark:border-stone-700 shadow-sm">
              <Stethoscope className="text-teal-600 dark:text-teal-400 mb-3 h-8 w-8" />
              <h3 className="font-bold text-xl md:text-2xl text-stone-800 dark:text-stone-100 mb-1">Gastos Cubiertos</h3>
              <p className="text-sm md:text-base text-stone-500 dark:text-stone-400 leading-relaxed">
                Cubrimos gastos veterinarios y alimentación si lo necesitas. Tú pones el hogar.
              </p>
            </div>
          </div>
        </div>

        {/* Instagram CTA Button */}
        <div className="flex justify-center mt-12 md:mt-16 mb-16 px-4">
            <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-full font-bold text-base md:text-lg shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3 text-center"
            >
                <Instagram size={24} />
                Quiero ser casa de acogida
            </a>
        </div>

        {/* Foster Families Collage Section - Responsive Bubbles */}
        <div className="pt-12 md:pt-16 pb-20 border-t border-stone-100 dark:border-stone-800 overflow-hidden">
           <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-800 dark:text-stone-100 mb-4">
                 Nuestra gran familia de acogida
              </h2>
              <p className="text-sm md:text-base text-stone-600 dark:text-stone-400 max-w-2xl mx-auto px-4">
                 Ellxs son el corazón de APA Myanimalsm. Gracias a su generosidad abriendo las puertas de su hogar, cientos de vidas han sido salvadas.
              </p>
           </div>

           {/* Collage Container - Scale for smaller screens */}
           <div className="flex flex-col items-center">
              <div className="flex flex-wrap justify-center items-center content-center max-w-5xl mx-auto -space-x-3 md:-space-x-8">
                 {bubbles.map((bubble, index) => (
                    <div 
                       key={index}
                       className={`
                         relative ${bubble.z} 
                         transition-all duration-500 ease-out hover:scale-110
                         ${bubble.size} ${bubble.rotate} ${bubble.mt}
                         rounded-full shadow-lg md:shadow-xl
                         ${bubble.imageUrl ? '' : 'bg-stone-50 dark:bg-stone-800 border-[3px] md:border-[6px] border-white dark:border-stone-900'}
                         flex-shrink-0
                       `}
                    >
                       {bubble.imageUrl ? (
                           <div className="w-full h-full rounded-full overflow-hidden border-[3px] md:border-[6px] border-white dark:border-stone-900">
                               <img 
                                   src={bubble.imageUrl} 
                                   alt="Familia de acogida" 
                                   className="w-full h-full object-cover"
                               />
                           </div>
                       ) : (
                           <div className="w-full h-full rounded-full border border-dashed border-stone-200 dark:border-stone-700 flex items-center justify-center text-stone-200 dark:text-stone-700">
                              <HelpCircle className="w-1/3 h-1/3" />
                           </div>
                       )}

                       {(bubble as any).caption && (
                           <div className="absolute -bottom-3 md:-bottom-4 left-1/2 transform -translate-x-1/2 whitespace-nowrap z-50">
                               <span className="inline-block bg-white dark:bg-stone-800 px-2 py-0.5 md:px-3 md:py-1 rounded-full text-[8px] md:text-xs font-serif font-bold text-stone-800 dark:text-stone-100 shadow-md border border-stone-100 dark:border-stone-800">
                                   {(bubble as any).caption}
                               </span>
                           </div>
                       )}
                    </div>
                 ))}
              </div>
           </div>
           
           <p className="text-center text-[10px] md:text-xs text-stone-400 mt-12 italic">
              ¿Quieres formar parte de nuestro muro? ¡Escríbenos!
           </p>
        </div>

      </div>
    </div>
  );
};