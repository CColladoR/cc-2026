import React from 'react';
import { DONATION_METHODS } from '../constants';
import { Users, Smartphone, CreditCard, Landmark, ArrowRight, ExternalLink, Gift, ShoppingBag, Package, Heart } from 'lucide-react';

const IconMap: Record<string, React.ReactNode> = {
  'Users': <Users size={32} />,
  'Smartphone': <Smartphone size={32} />,
  'CreditCard': <CreditCard size={32} />,
  'Landmark': <Landmark size={32} />,
  'Heart': <Heart size={32} />,
};

export const Donate: React.FC = () => {
  // Separamos el método Teaming para destacarlo, y el resto los mostramos en grid
  const mainMethods = DONATION_METHODS.filter(m => m.name !== 'Teaming');
  const teamingMethod = DONATION_METHODS.find(m => m.name === 'Teaming');

  return (
    <div className="min-h-screen py-16 bg-stone-50 dark:bg-stone-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-stone-800 dark:text-stone-100 mb-6">Ayúdanos a Ayudar</h1>
          <p className="text-base md:text-lg text-stone-600 dark:text-stone-300 max-w-2xl mx-auto">
            APA Myanimalsm se financia exclusivamente gracias a la generosidad de personas como tú. 
            El 100% de las donaciones se destina al cuidado veterinario, alimentación y bienestar de nuestros animales.
          </p>
        </div>

        {/* Grid para métodos de donación puntual (Bizum, Transferencia, PayPal, Coral) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {mainMethods.map((method) => (
            <div key={method.id} className="bg-white dark:bg-stone-900 rounded-2xl shadow-sm border border-stone-100 dark:border-stone-800 p-8 hover:shadow-xl transition-all duration-300 flex flex-col relative overflow-hidden group">
               {/* Decorative background circle */}
               <div className={`absolute -right-10 -top-10 w-32 h-32 rounded-full opacity-10 ${method.color}`}></div>
               
               <div className="flex items-start justify-between mb-6">
                 <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl text-white ${method.color} shadow-md`}>
                   {IconMap[method.iconName]}
                 </div>
               </div>

               <h3 className="text-xl md:text-2xl font-bold text-stone-800 dark:text-stone-100 mb-2">{method.name}</h3>
               <p className="text-stone-600 dark:text-stone-400 mb-6 text-base flex-grow">{method.description}</p>
               
               {method.details && (
                 <div className="mb-6 p-3 bg-stone-50 dark:bg-stone-800 rounded-lg font-mono text-[11px] sm:text-xs text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-stone-700 whitespace-nowrap overflow-x-auto scrollbar-hide">
                   {method.details}
                 </div>
               )}

               {method.note && (
                 <div className="mb-6 p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg text-xs text-amber-800 dark:text-amber-200 border border-amber-100 dark:border-amber-900/30">
                   {method.note}
                 </div>
               )}

               {method.actionUrl && (
                 <a 
                    href={method.actionUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`mt-auto inline-flex items-center justify-center w-full px-6 py-3 rounded-xl font-bold text-white transition-transform hover:-translate-y-0.5 ${method.color}`}
                 >
                    Donar con {method.name} <ExternalLink size={18} className="ml-2" />
                 </a>
               )}
            </div>
          ))}
        </div>

        {/* Sección Destacada para Teaming */}
        {teamingMethod && (
            <div className="max-w-3xl mx-auto mb-16">
                <div className="bg-gradient-to-r from-teal-500 to-emerald-600 rounded-3xl p-1 shadow-lg transform hover:scale-[1.01] transition-all duration-300">
                    <div className="bg-white dark:bg-stone-900 rounded-[1.3rem] p-6 md:p-8 h-full relative overflow-hidden">
                        {/* Decoración de fondo */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-teal-100 dark:bg-teal-900/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                        
                        <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
                            <div className="flex-shrink-0">
                                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl text-white ${teamingMethod.color} shadow-lg`}>
                                    {IconMap[teamingMethod.iconName]}
                                </div>
                            </div>
                            <div className="flex-grow text-center md:text-left">
                                <h3 className="text-xl md:text-2xl font-bold text-stone-800 dark:text-stone-100 mb-1">Únete a nuestro Teaming</h3>
                                <p className="text-sm text-stone-600 dark:text-stone-300 mb-1">
                                    {teamingMethod.description}
                                </p>
                                <p className="text-teal-600 dark:text-teal-400 font-bold text-sm">
                                    Solo 1€ al mes. Menos que un café, una vida a salvo.
                                </p>
                            </div>
                            <div className="flex-shrink-0 w-full md:w-auto">
                                 <a 
                                    href={teamingMethod.actionUrl} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className={`inline-flex items-center justify-center w-full md:w-auto px-6 py-3 rounded-xl font-bold text-white text-base transition-transform hover:-translate-y-0.5 shadow-md ${teamingMethod.color}`}
                                 >
                                    Unirme Ahora <ExternalLink size={18} className="ml-2" />
                                 </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}

        {/* Amazon Wishlist Section - More compact version */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white dark:bg-stone-900 rounded-2xl shadow-sm border border-orange-100 dark:border-orange-900/30 overflow-hidden">
            <div className="grid md:grid-cols-3 h-full">
              <div className="md:col-span-1 bg-gradient-to-br from-orange-400 to-amber-500 p-5 flex flex-col justify-center items-center text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-white opacity-10 transform -skew-x-12 translate-x-1/2"></div>
                <Gift size={32} className="mb-2 relative z-10" />
                <h3 className="text-lg md:text-xl font-serif font-bold text-center relative z-10">Lista de Deseos</h3>
                <p className="text-orange-50 text-center text-[10px] mt-0.5 relative z-10">Donación de material</p>
              </div>
              <div className="md:col-span-2 p-5 md:p-6 flex flex-col justify-center">
                <h3 className="text-lg md:text-xl font-bold text-stone-800 dark:text-stone-100 mb-2">¿Prefieres enviarnos productos?</h3>
                <p className="text-stone-600 dark:text-stone-400 mb-4 text-sm">
                  Hemos seleccionado en Amazon los productos que más consumimos. Es una forma directa de cubrir necesidades básicas diarias.
                </p>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {['Latas kitten/adultos', 'Latas Gastro', 'Pienso Gastro', 'Impromune'].map((item) => (
                      <span key={item} className="inline-flex items-center px-2 py-0.5 bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-200 rounded-full text-[9px] font-bold border border-orange-100 dark:border-orange-900/40">
                        <Package size={8} className="mr-1" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <a 
                  href="https://www.amazon.es/hz/wishlist/ls/2QSTF53HZ40Y1?ref_=wl_share&fbclid=PAT01DUAPHj95leHRuA2FlbQIxMABzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAafnocxm5Y7X35QWda1ikA-kHXwn9BwLNC4Sw9yFEjMQiBJkonV_R1IVi627qA_aem_qZkNFifijeCQInYN64XkUQ" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 bg-stone-800 hover:bg-stone-900 dark:bg-stone-700 dark:hover:bg-stone-600 text-white text-xs font-bold rounded-xl transition-all hover:shadow-lg hover:-translate-y-0.5 w-full sm:w-auto self-start"
                >
                  <ShoppingBag size={16} className="mr-2" />
                  Ver Lista en Amazon
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};