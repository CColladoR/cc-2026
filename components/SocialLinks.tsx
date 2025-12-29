
import React from 'react';
import { Twitter, Mail, AtSign, Instagram, Music2 } from 'lucide-react';

export const SocialLinks: React.FC = () => {
  const socials = [
    { name: 'Instagram', icon: <Instagram size={18} />, url: 'https://instagram.com/ccollado_r', color: 'hover:bg-pink-50 hover:text-pink-600 dark:hover:bg-pink-500/20 dark:hover:text-pink-300' },
    { name: 'TikTok', icon: <Music2 size={18} />, url: 'https://www.tiktok.com/@ccr1o', color: 'hover:bg-slate-100 hover:text-black dark:hover:bg-white/20 dark:hover:text-white' },
    { name: 'X', icon: <Twitter size={18} />, url: 'https://x.com/ccollado_r', color: 'hover:bg-gray-100 hover:text-black dark:hover:bg-white/20 dark:hover:text-white' },
    { name: 'Threads', icon: <AtSign size={18} />, url: 'https://www.threads.com/@ccollado_r', color: 'hover:bg-purple-50 hover:text-purple-600 dark:hover:bg-purple-500/20 dark:hover:text-purple-300' },
    { name: 'Email', icon: <Mail size={18} />, url: 'mailto:christian@difoosion.com', color: 'hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-500/20 dark:hover:text-red-300' },
  ];

  return (
    <div className="mt-16 relative group/socials">
      {/* 
          Glass Tray Effect: 
          Un contenedor de cristal que agrupa los botones y les da un fondo consistente
          que resalta tanto en modo claro como oscuro.
      */}
      <div className="absolute -inset-4 md:-inset-6 bg-white/40 dark:bg-white/[0.02] backdrop-blur-2xl rounded-[2.5rem] md:rounded-[3rem] border border-black/[0.03] dark:border-white/[0.08] shadow-2xl shadow-black/5 -z-10 transition-all duration-700 group-hover/socials:scale-[1.01] group-hover/socials:bg-white/60 dark:group-hover/socials:bg-white/[0.04]"></div>
      
      {/* Aura decorativa interna para el modo oscuro */}
      <div className="absolute inset-0 bg-indigo-500/5 dark:bg-indigo-400/5 blur-3xl rounded-full opacity-0 group-hover/socials:opacity-100 transition-opacity duration-1000 -z-10"></div>

      <div className="flex flex-wrap gap-3 p-1">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-3 px-5 py-3.5 rounded-2xl border border-black/5 dark:border-white/10 bg-white/80 dark:bg-black/40 backdrop-blur-md shadow-sm transition-all duration-500 ${social.color} hover:border-black/10 dark:hover:border-white/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-indigo-500/10 active:scale-95 group/btn`}
          >
            <span className="opacity-60 group-hover/btn:opacity-100 transition-opacity duration-300">
              {social.icon}
            </span>
            <span className="text-[10px] font-black uppercase tracking-[0.25em] transition-colors duration-300">
              {social.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};
