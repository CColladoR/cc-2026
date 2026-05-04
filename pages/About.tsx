import React from 'react';
import { TEAM_MEMBERS } from '../constants';
import { Camera, Instagram } from 'lucide-react';

export const About: React.FC = () => {
  // Family Album images - Mixed order
  const galleryImages = [
    "https://raw.githubusercontent.com/CColladoR/apa/refs/heads/main/Lau1.jpg",
    "https://raw.githubusercontent.com/CColladoR/apa/refs/heads/main/reyes1.jpg",
    "https://raw.githubusercontent.com/CColladoR/apa/refs/heads/main/Chris1.jpg",
    "https://raw.githubusercontent.com/CColladoR/apa/refs/heads/main/Lau2.jpg",
    "https://raw.githubusercontent.com/CColladoR/apa/refs/heads/main/reyes2.jpg",
    "https://raw.githubusercontent.com/CColladoR/apa/refs/heads/main/Chris2.jpg",
    "https://raw.githubusercontent.com/CColladoR/apa/refs/heads/main/Lau3.jpg",
    "https://raw.githubusercontent.com/CColladoR/apa/refs/heads/main/reyes3.jpg",
    "https://raw.githubusercontent.com/CColladoR/apa/refs/heads/main/Chris3.jpg",
    "https://raw.githubusercontent.com/CColladoR/apa/refs/heads/main/Lau4.jpg",
    "https://raw.githubusercontent.com/CColladoR/apa/refs/heads/main/reyes4.jpg",
    "https://raw.githubusercontent.com/CColladoR/apa/refs/heads/main/Chris4.jpg",
    "https://raw.githubusercontent.com/CColladoR/apa/refs/heads/main/Lau5.jpg",
    "https://raw.githubusercontent.com/CColladoR/apa/refs/heads/main/reyes5.jpg",
    "https://raw.githubusercontent.com/CColladoR/apa/refs/heads/main/Chris5.jpeg",
    "https://raw.githubusercontent.com/CColladoR/apa/refs/heads/main/Lau6.jpg",
    "https://raw.githubusercontent.com/CColladoR/apa/refs/heads/main/reyes6.jpg",
    "https://raw.githubusercontent.com/CColladoR/apa/refs/heads/main/Chris6.jpg",
  ];

  return (
    <div className="py-16 bg-white dark:bg-stone-900 min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-stone-800 dark:text-stone-100 mb-6">Sobre APA Myanimalsm</h1>
          <p className="text-base md:text-lg text-stone-600 dark:text-stone-300 max-w-4xl mx-auto leading-relaxed">
            Somos una asociación sin ánimo de lucro dedicada al bienestar animal. No tenemos refugio físico, únicamente trabajamos con casas de acogida en Madrid y Toledo. Hoy en día formamos un gran equipo de voluntarios, familias de acogida y veterinarios comprometidos con dar una segunda oportunidad a los animales más vulnerables. Te presentamos a la junta directiva:
          </p>
        </div>

        <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-800 dark:text-stone-100 mb-12 text-center">Nuestro Equipo</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((member) => (
            <div key={member.id} className="bg-stone-50 dark:bg-stone-800 rounded-2xl p-6 text-center hover:shadow-lg transition-all border border-stone-100 dark:border-stone-700">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white dark:border-stone-700 shadow-md">
                <img 
                  src={member.imageUrl} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-stone-800 dark:text-stone-100 mb-1">{member.name}</h3>
              <p className="text-primary font-medium text-sm uppercase tracking-wide mb-4">{member.role}</p>
              <p className="text-stone-600 dark:text-stone-400 text-base leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-4xl mx-auto text-center px-4">
          <p className="text-lg text-stone-700 dark:text-stone-300 italic leading-relaxed font-serif">
            "Los gatos nos unieron para trabajar codo con codo por los animales más necesitados. Siempre estamos al pie del cañón, por y para ellos."
          </p>
        </div>

        {/* Photo Gallery Section */}
        <div className="mt-24 mb-12">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-800 dark:text-stone-100 mb-8 text-center flex items-center justify-center gap-3">
                <Camera className="text-primary" size={32} />
                Álbum de Familia
            </h2>
            <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                {galleryImages.map((src, idx) => (
                    <div key={idx} className="break-inside-avoid rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 bg-stone-100 dark:bg-stone-800">
                        <img 
                            src={src} 
                            alt={`Momento APA Myanimalsm ${idx + 1}`} 
                            className="w-full h-auto hover:scale-105 transition-transform duration-700 block" 
                        />
                    </div>
                ))}
            </div>
            <p className="text-center text-lg text-stone-600 dark:text-stone-300 mt-10 italic font-serif">
                "Pequeños instantes de felicidad compartida que nos impulsan a seguir adelante"
            </p>
        </div>
      </div>

      {/* Floating Instagram Chat Button - Unified with Home page style */}
      <a
        href="https://ig.me/m/apa.myanimalsm"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-50 bg-teal-600 text-white p-3.5 rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95 flex items-center justify-center"
        aria-label="Chat en Instagram"
      >
        <Instagram size={24} />
      </a>
    </div>
  );
};