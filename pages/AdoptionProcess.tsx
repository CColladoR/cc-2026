import React from 'react';
import { CheckCircle2, Heart, HelpCircle, Video, Euro, ClipboardCheck, ShieldAlert, Instagram } from 'lucide-react';

export const AdoptionProcess: React.FC = () => {
  const message = "¡Hola! Me gustaría iniciar el tramite para la adopción de uno de vuestros animales.";
  const instagramUrl = `https://ig.me/m/apa.myanimalsm?text=${encodeURIComponent(message)}`;

  return (
    <div className="min-h-screen py-16 bg-white dark:bg-stone-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-stone-800 dark:text-stone-100 mb-6">Proceso de Adopción</h1>
          <p className="text-base md:text-lg text-stone-600 dark:text-stone-300">
            Adoptar es un acto de amor y responsabilidad. Queremos asegurarnos de que tanto la familia como el animal sean compatibles para toda la vida.
          </p>
        </div>

        {/* New Detailed Steps */}
        <div className="space-y-8 mb-12">
            <div className="flex flex-col md:flex-row gap-6 p-8 bg-stone-50 dark:bg-stone-800 rounded-3xl border border-stone-100 dark:border-stone-700">
                <div className="flex-shrink-0 w-16 h-16 bg-teal-100 dark:bg-teal-900/50 text-teal-600 dark:text-teal-300 rounded-2xl flex items-center justify-center">
                    <Video size={32} />
                </div>
                <div>
                    <h3 className="font-bold text-xl md:text-2xl mb-3 text-stone-800 dark:text-stone-100">1. Cuestionario y Vídeo del Domicilio</h3>
                    <p className="text-stone-600 dark:text-stone-400 mb-4 leading-relaxed">
                        Primero pedimos que se rellene nuestro cuestionario de pre-adopción y que nos enviéis un vídeo del domicilio para ver dónde viviría. 
                    </p>
                    <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-400 p-4 rounded-r-lg">
                        <p className="text-sm text-amber-800 dark:text-amber-200 font-medium flex items-center gap-2">
                            <ShieldAlert size={18} />
                            Es imprescindible que ventanas/balcones tengan protecciones.
                        </p>
                        <p className="text-xs text-amber-700 dark:text-amber-300 mt-1">
                            Necesitamos que en el vídeo se haga especial hincapié en enseñarlas. Si no tienes, ¡no te preocupes! Valoramos la seguridad y te mandaremos opciones disponibles en plataformas como Amazon.
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 p-8 bg-stone-50 dark:bg-stone-800 rounded-3xl border border-stone-100 dark:border-stone-700">
                <div className="flex-shrink-0 w-16 h-16 bg-rose-100 dark:bg-rose-900/50 text-rose-600 dark:text-rose-300 rounded-2xl flex items-center justify-center">
                    <Euro size={32} />
                </div>
                <div>
                    <h3 className="font-bold text-xl md:text-2xl mb-3 text-stone-800 dark:text-stone-100">2. Reserva del Animal</h3>
                    <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
                        Con el visto bueno de la junta directiva, procederemos a reservar al animal. Para ello, se deberá abonar una <strong>señal de reserva</strong>. 
                    </p>
                    <p className="text-xs text-stone-500 dark:text-stone-500 mt-2 italic">
                        * Esta cantidad no se devolverá en caso de cambios de opinión, arrepentimientos o anulación del proceso por parte del adoptante.
                    </p>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 p-8 bg-stone-50 dark:bg-stone-800 rounded-3xl border border-stone-100 dark:border-stone-700">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 rounded-2xl flex items-center justify-center">
                    <ClipboardCheck size={32} />
                </div>
                <div>
                    <h3 className="font-bold text-xl md:text-2xl mb-3 text-stone-800 dark:text-stone-100">3. Firma del Contrato</h3>
                    <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
                        Pasamos a la firma del contrato de adopción. En este punto os detallamos todo el historial veterinario del animal y los compromisos que adquiere la familia para su bienestar futuro.
                    </p>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 p-8 bg-stone-50 dark:bg-stone-800 rounded-3xl border border-stone-100 dark:border-stone-700">
                <div className="flex-shrink-0 w-16 h-16 bg-teal-100 dark:bg-teal-900/50 text-teal-600 dark:text-teal-300 rounded-2xl flex items-center justify-center">
                    <Heart size={32} />
                </div>
                <div>
                    <h3 className="font-bold text-xl md:text-2xl mb-3 text-stone-800 dark:text-stone-100">4. Cuota de Adopción y Entrega</h3>
                    <p className="text-stone-600 dark:text-stone-400 leading-relaxed mb-3">
                        Se abonará una <strong>cuota de adopción</strong> destinada a cubrir parte de los gastos veterinarios. De este total se restará la señal ya abonada en la reserva.
                    </p>
                    <p className="text-stone-600 dark:text-stone-400 text-sm italic">
                        Es un gesto simbólico que nos ayuda a cubrir una mínima parte de los gastos y permite que podamos rescatar a otros animales. El abono se realiza tras la firma y antes de la entrega del gato.
                    </p>
                </div>
            </div>
        </div>

        {/* Kitten Policy Highlight */}
        <div className="mb-8 bg-indigo-50 dark:bg-indigo-900/20 rounded-3xl p-8 border border-indigo-100 dark:border-indigo-900/50 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-indigo-900 dark:text-indigo-200 mb-4">
                Adopción de Gatitos
            </h2>
            <p className="text-indigo-800 dark:text-indigo-300 leading-relaxed">
                Para garantizar el crecimiento enriquecido y el apoyo felino, todos los <strong>gatitos menores de 4 meses</strong> se darán en adopción conjunta con otro hermanito a no ser que en la casa ya haya otro compi felino.
            </p>
        </div>

        {/* Medical Protocol Highlight */}
        <div className="mb-8 bg-teal-50 dark:bg-teal-900/20 rounded-3xl p-8 border border-teal-100 dark:border-teal-900/50 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-teal-900 dark:text-teal-200 mb-6">
                Protocolo Veterinario
            </h2>
            <p className="text-teal-800 dark:text-teal-300 mb-6">
                Todos nuestros gatos se entregan con el protocolo veterinario al día (según su edad):
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
                {[
                    "Desparasitación completa (interna y externa).",
                    "Test de inmunodeficiencia felina y leucemia.",
                    "Al menos la primera vacuna correspondiente.",
                    "Microchip a nombre de la asociación.",
                    "Esterilizados (en caso de junior +6 meses y adultos)."
                ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-white/50 dark:bg-stone-900/40 p-3 rounded-xl border border-teal-100/50 dark:border-teal-900/50">
                        <CheckCircle2 className="text-teal-600 dark:text-teal-400 flex-shrink-0" size={18} />
                        <span className="text-sm font-medium text-teal-900 dark:text-teal-200">{item}</span>
                    </div>
                ))}
            </div>
        </div>

        {/* Salvas dos vidas Section (Moved from Foster and adapted) */}
        <div className="mb-12 bg-teal-50 dark:bg-teal-900/20 rounded-3xl p-8 border border-teal-100 dark:border-teal-900/50 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-teal-900 dark:text-teal-200 mb-4">
                Salvas dos vidas
            </h2>
            <p className="text-teal-800 dark:text-teal-300">
                Al adoptar a un animal, le brindas un hogar definitivo y nos permites rescatar a otro de la calle. Al no disponer de refugio físico, dependemos de que nuestros animales encuentren familia para liberar casas de acogida y poder seguir salvando vidas. ¡Tu ayuda es vital!
            </p>
        </div>

        {/* Instagram CTA Button */}
        <div className="flex justify-center mb-20 scale-100 hover:scale-105 transition-transform duration-300">
            <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-3"
            >
                <Instagram size={28} />
                Iniciar trámite
            </a>
        </div>

        {/* FAQ Section */}
        <div className="mb-20">
             <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-800 dark:text-stone-100 mb-6 flex items-center gap-2">
                <HelpCircle className="text-primary" size={28}/>
                Preguntas Frecuentes
             </h2>
             <div className="space-y-4">
                <div className="bg-stone-50 dark:bg-stone-800 p-6 rounded-2xl border border-stone-100 dark:border-stone-700">
                    <h3 className="font-bold text-lg md:text-xl text-stone-800 dark:text-stone-100 mb-2">¿Qué pasa si no tengo protecciones en las ventanas?</h3>
                    <p className="text-stone-600 dark:text-stone-400 leading-relaxed text-sm">
                        Como indicamos en el proceso, no es motivo de rechazo inmediato. Valoramos que seas consciente de la seguridad y te guiaremos ofreciéndote distintas opciones que puedes encontrar fácilmente online para adaptar tu hogar antes de la llegada del nuevo miembro.
                    </p>
                </div>
                <div className="bg-stone-50 dark:bg-stone-800 p-6 rounded-2xl border border-stone-100 dark:border-stone-700">
                    <h3 className="font-bold text-lg md:text-xl text-stone-800 dark:text-stone-100 mb-2">¿Puedo adoptar si vivo fuera de Madrid/Toledo?</h3>
                    <p className="text-stone-600 dark:text-stone-400 leading-relaxed text-sm">
                        Normalmente operamos en estas zonas para facilitar el seguimiento, visitas y entregas pero valoramos cada caso individualmente. Si estás dispuesto a desplazarte para conocer al animal y cumples con los requisitos, ¡podemos estudiarlo!
                    </p>
                </div>
             </div>
        </div>

      </div>
    </div>
  );
};