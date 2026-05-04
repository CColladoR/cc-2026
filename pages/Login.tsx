import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Lock, AlertCircle } from 'lucide-react';

export const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(username, password)) {
      navigate('/');
    } else {
      setError('Credenciales incorrectas');
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-stone-50 dark:bg-stone-950 px-4">
      <div className="max-w-md w-full bg-white dark:bg-stone-900 rounded-2xl shadow-xl border border-stone-100 dark:border-stone-800 p-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-50 dark:bg-teal-900/30 rounded-full mb-4 text-primary">
            <Lock size={32} />
          </div>
          <h1 className="text-2xl md:text-3xl font-serif font-bold text-stone-800 dark:text-stone-100">Área de Administración</h1>
          <p className="text-stone-500 dark:text-stone-400 mt-2 text-base">Introduce tus credenciales para gestionar la protectora.</p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-xl flex items-center gap-3 text-sm font-bold border border-red-100 dark:border-red-900/50">
            <AlertCircle size={18} />
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-stone-700 dark:text-stone-300 mb-2">Usuario</label>
            <input 
              type="text" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-stone-100 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
              placeholder="Usuario"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-stone-700 dark:text-stone-300 mb-2">Contraseña</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-stone-100 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
              placeholder="••••••••"
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all active:scale-95"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};