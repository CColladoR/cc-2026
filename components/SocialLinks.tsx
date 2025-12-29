
import React from 'react';
import { Twitter, Mail, AtSign, Instagram, Music2 } from 'lucide-react';

export const SocialLinks: React.FC = () => {
  const socials = [
    { name: 'Instagram', icon: <Instagram size={18} />, url: 'https://instagram.com/ccollado_r', color: 'hover:bg-pink-50 hover:text-pink-600' },
    { name: 'TikTok', icon: <Music2 size={18} />, url: 'https://www.tiktok.com/@ccr1o', color: 'hover:bg-slate-50 hover:text-black' },
    { name: 'X', icon: <Twitter size={18} />, url: 'https://x.com/ccollado_r', color: 'hover:bg-gray-50 hover:text-black' },
    { name: 'Threads', icon: <AtSign size={18} />, url: 'https://www.threads.com/@ccollado_r', color: 'hover:bg-purple-50 hover:text-purple-600' },
    { name: 'Email', icon: <Mail size={18} />, url: 'mailto:christian@difoosion.com', color: 'hover:bg-red-50 hover:text-red-600' },
  ];

  return (
    <div className="flex flex-wrap gap-4 mt-12">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-3 px-6 py-4 rounded-2xl border border-black/5 bg-white shadow-sm transition-all duration-300 ${social.color} hover:border-black/10 hover:-translate-y-1`}
        >
          <span className="opacity-70">{social.icon}</span>
          <span className="text-xs font-bold uppercase tracking-widest">{social.name}</span>
        </a>
      ))}
    </div>
  );
};
