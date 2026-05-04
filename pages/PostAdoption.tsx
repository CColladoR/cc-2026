import React from 'react';
import { Heart, Info, Lightbulb, ShieldCheck, Cat, Home, MessageCircle, Instagram } from 'lucide-react';

export const PostAdoption: React.FC = () => {
  const message = "¡Hola! He adoptado recientemente y me gustaría recibir algunos consejos post-adopción.";
  const instagramUrl = `https://ig.me/m/apa.myanimalsm?text=${encodeURIComponent(message)}`;

  return (
    <div className="min-h-screen py-16 bg-white dark:bg-stone-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-stone-800 dark:text-stone-100 mb-4">Post-adopción y consejos gatunos</h1>
          <p className="text-base md:text-lg text-stone-600 dark:text-stone-300">
            La llegada de un nuevo miembro a la familia es un momento emocionante. Aquí encontrarás consejos para que la adaptación sea lo más fluida posible.
          </p>
        </div>

        {/* Index / Table of Contents */}
        <div className="mb-8 flex justify-center sticky top-20 z-10">
          <div className="relative inline-flex items-center gap-1 p-1.5 bg-white/80 dark:bg-stone-900/80 backdrop-blur-md rounded-2xl border border-stone-200 dark:border-stone-700 shadow-lg">
            <span className="absolute -top-2 left-1/2 -translate-x-1/2 px-2 bg-white dark:bg-stone-900 text-[9px] font-bold text-stone-400 dark:text-stone-500 uppercase tracking-[0.2em] leading-none">
              Índice
            </span>
            {[
              { name: 'Antes', id: 'antes-llegada', icon: ShieldCheck },
              { name: '48h', id: 'primeras-48h', icon: Home },
              { name: 'Social', id: 'presentaciones', icon: Cat },
              { name: 'Dieta', id: 'alimentacion', icon: Heart },
              { name: 'Viajes', id: 'vacaciones', icon: Info },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
                  className="flex flex-col items-center gap-1 px-3 py-2 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-xl transition-all group min-w-[64px]"
                >
                  <Icon size={18} className="text-teal-500 group-hover:scale-110 transition-transform" />
                  <span className="text-[9px] font-bold text-stone-500 dark:text-stone-400 uppercase tracking-tight">{item.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-12 mb-20">
          <section id="antes-llegada" className="scroll-mt-24 bg-stone-50 dark:bg-stone-800 rounded-3xl border border-stone-100 dark:border-stone-700 overflow-hidden shadow-sm">
            <div className="p-8 space-y-6 text-stone-600 dark:text-stone-400 leading-relaxed">
              <div className="flex items-center gap-4 mb-2">
                <div className="p-3 bg-teal-100 dark:bg-teal-900/50 text-teal-600 dark:text-teal-300 rounded-2xl">
                  <Cat size={28} />
                </div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-800 dark:text-stone-100">Antes de la llegada del michi</h2>
              </div>

              <div className="-mx-8 mb-6">
                <img 
                  src="https://raw.githubusercontent.com/myanimalsm-apa/APA.-Myanimalsm-/refs/heads/main/1772389126375.jpg"
                  alt="Preparación para la llegada"
                  className="w-full h-auto block rounded-2xl"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="grid grid-cols-1">
                <div className="bg-rose-50 dark:bg-rose-900/20 p-5 rounded-2xl border border-rose-100 dark:border-rose-900/50 flex flex-col">
                  <h3 className="font-bold text-rose-900 dark:text-rose-200 mb-3 flex items-center gap-2 text-xl md:text-2xl">Seguridad</h3>
                  <div className="space-y-3 text-sm text-rose-800 dark:text-rose-300 leading-snug">
                    <p>
                      <strong>Prohibido:</strong> collares, arneses y cascabeles (causan ansiedad y sordera). <strong>No bañar ni llevar a peluquería</strong> (salvo prescripción médica); los gatos se lavan solos y el agua les estresa y daña la piel.
                    </p>
                    <p>
                      <strong>No sacar a pasear:</strong> los gatos son animales muy sensibles que se estresan fuera de su hogar. El exterior supone una amenaza innecesaria, riesgo de huida y exposición a enfermedades.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="primeras-48h" className="scroll-mt-24 bg-stone-50 dark:bg-stone-800 p-8 rounded-3xl border border-stone-100 dark:border-stone-700">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-teal-100 dark:bg-teal-900/50 text-teal-600 dark:text-teal-300 rounded-2xl">
                <Home size={28} />
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-800 dark:text-stone-100">Primeras 48h tras la acogida/adopción</h2>
            </div>
            
            <div className="space-y-6 text-stone-600 dark:text-stone-400 leading-relaxed">
              <p className="font-bold text-teal-600 dark:text-teal-400 text-lg">
                La base del proceso es MUCHA PACIENCIA, CARIÑO, SIN PRISAS.
              </p>
              
              <p>
                Tenéis que tener preparada una habitación para el animal. Es importante que ahí tenga sus comederos, arenero y alguna camita. El animal nuevo debe estar mínimo 48h encerrado en esa habitación.
              </p>

              <div className="bg-white dark:bg-stone-900 p-6 rounded-2xl border border-stone-100 dark:border-stone-700 shadow-sm">
                <h3 className="font-bold text-stone-800 dark:text-stone-100 mb-2 text-xl md:text-2xl">¿Por qué?</h3>
                <p>
                  Loss gatos se agobian en espacios abiertos, por ese motivo hay que ayudarles los primeros días delimitando una zona de la casa que iremos ampliando según pasen los días. En esas primeras horas puede que no quiera comer, beber o ir a la arena, no pasa nada, es totalmente normal si ocurre. Nosotros podremos entrar y salir, observarle sin invadir su espacio, dejar que se esconda si quiere o interactuar si vemos que está receptivo.
                </p>
              </div>

              <p>
                Es importante destacar que las primeras noches podéis escucharle maullar o llorar, es normal, los gatos por naturaleza "piden auxilio" de noche que es cuando mas seguros se sienten. <strong>¿Cómo actuar en ese caso?</strong> Acompañando. Podemos estar con ellos, intentar darles chuches o York/pavo para positivizar el encuentro, pero no podemos explicarles que es por su bien, por lo que hay que mantener la calma y saber que eso pasará pronto.
              </p>

              <p>
                Desde Apa Myanimalsm estaremos en contacto con las familias. Pediremos videos todos los días, sobre todo la primera semana hasta dejar la situación encarrilada. Cada gato lleva su proceso, unos se adaptan antes que otros, todo es normal, no hay prisa y al final todo sale bien.
              </p>

              <p className="italic font-medium text-stone-800 dark:text-stone-200">
                Veréis que es una experiencia muy gratificante el ver cómo poco a poco el animal se hace a la casa y pasa de ser todo desconocido a ser su hogar ❤️
              </p>

              <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-2xl border border-teal-100 dark:border-teal-900/50">
                <p className="text-sm text-teal-800 dark:text-teal-200">
                  <span className="font-bold">💡 Tip de adaptación:</span> Recomendamos el uso de <strong>feliway classic/optimum</strong> (difusor que dura 30 días) enchufado en el salón o pasillo principal. Es un producto que los humanos no percibimos, sin embargo, libera feromonas de tranquilidad y calma para los gatos y facilita mucho la adaptación del primer mes.
                </p>
              </div>
            </div>
          </section>

          <section id="presentaciones" className="scroll-mt-24 bg-stone-50 dark:bg-stone-800 rounded-3xl border border-stone-100 dark:border-stone-700 overflow-hidden shadow-sm">
            <div className="p-8 pb-0">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-teal-100 dark:bg-teal-900/50 text-teal-600 dark:text-teal-300 rounded-2xl">
                  <Cat size={28} />
                </div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-800 dark:text-stone-100">Presentaciones entre gatos</h2>
              </div>
            </div>
            
            <div className="p-8 pt-0 space-y-6 text-stone-600 dark:text-stone-400 leading-relaxed">
              <p>
                Siempre insistimos en hacer bien las presentaciones desde un principio entre nuestros gatos/perros para facilitar la adaptación y conseguir una armonía hogar. Si estás presentaciones no se realizan correctamente puede que no se consiga nunca una convivencia adecuada.
              </p>

              <div className="bg-rose-50 dark:bg-rose-900/20 p-6 rounded-2xl border border-rose-100 dark:border-rose-900/50">
                <p className="text-rose-800 dark:text-rose-200 font-medium">
                  Para ello, desde Apa Myanimalsm, os iremos pidiendo feedback y videos diarios para acompañaros y guiaros en el proceso hasta conseguir la unificación. Es imprescindible dejarse asesorar y seguir cada paso según vamos indicando para conseguir el resultado esperado.
                </p>
              </div>

              <p>
                Los gatos tardan desde 7 días hasta 3 meses aproximadamente en adaptarse a su nuevo hogar. Cada gato es un mundo, con su carácter, traumas, pasado y forma de ser. Sin embargo, como buenos adoptantes o acogidas, debemos respetar los tiempos y espacios que ellos mismos nos van marcando.
              </p>

              <div className="-mx-8 my-4">
                <img 
                  src="https://raw.githubusercontent.com/myanimalsm-apa/APA.-Myanimalsm-/refs/heads/main/1772391066278%7E2.png"
                  alt="Presentaciones entre gatos"
                  className="w-full h-auto block rounded-2xl"
                  referrerPolicy="no-referrer"
                />
              </div>



              <p className="font-medium">
                Repetimos, esto se trata de un proceso, por lo que no podemos esperar que en 24h el nuevo gato este adaptado y haciendo la croqueta. No nos sirve el "os lo devuelvo porque es agresivo o porque bufa". Los gatos necesitan comunicarse mediante su lenguaje corporal y no verbal.
              </p>

              <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-2xl border border-teal-100 dark:border-teal-900/50">
                <p className="text-sm text-teal-800 dark:text-teal-200">
                  <span className="font-bold">💡 Tip de adaptación:</span> Recomendamos el uso de <strong>feliway classic/optimum</strong> (difusor que dura 30 días) enchufado en el salón o pasillo principal para facilitar la adaptación del primer mes.
                </p>
              </div>
            </div>
          </section>

          <section id="alimentacion" className="scroll-mt-24 bg-stone-50 dark:bg-stone-800 p-8 rounded-3xl border border-stone-100 dark:border-stone-700">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-teal-100 dark:bg-teal-900/50 text-teal-600 dark:text-teal-300 rounded-2xl">
                <Cat size={28} />
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-800 dark:text-stone-100">Alimentación</h2>
            </div>
            
            <div className="space-y-6 text-stone-600 dark:text-stone-400 leading-relaxed">
              <div className="bg-white dark:bg-stone-900 p-6 rounded-2xl border border-stone-100 dark:border-stone-700 shadow-sm">
                <h3 className="font-bold text-stone-800 dark:text-stone-100 mb-3 text-xl md:text-2xl">El Pienso</h3>
                <p className="text-sm mb-4">
                  Debemos elegir un pienso en cuya composición aparezca como primer componente <strong>+25% de proteína animal deshidratada</strong>. Marcas como Royal Canin, Advance o Hills son recomendables principalmente para patologías específicas, pero para un gato sano buscaremos opciones más naturales y sin cereales.
                </p>
                <p className="text-sm mb-4">
                  Recomendamos dejar el pienso a <strong>libre disposición</strong> para evitar la ansiedad por la comida (salvo casos de obesidad controlada). Pondremos cada 24h los gramos según su edad y peso.
                </p>
              </div>

              <div className="bg-white dark:bg-stone-900 p-6 rounded-2xl border border-stone-100 dark:border-stone-700 shadow-sm">
                <h3 className="font-bold text-stone-800 dark:text-stone-100 mb-3 text-xl md:text-2xl">Comida Húmeda</h3>
                <p className="text-sm mb-4">
                  Los gatos no son grandes bebedores, por lo que su alimentación debe basarse principalmente en comida húmeda (1 o 2 raciones al día) para evitar problemas renales.
                </p>
                <p className="text-sm">
                  Es ideal variar marcas y texturas (Felix, Whiskas, Retorn, Applaws, Feringa, Purina, etc.) para que no se aburren y facilitar futuras medicaciones. Se puede complementar con comida casera sin sal (pavo, York, lomo, pescado) y siempre añadiremos un poco de agua para añadir aún más líquido diario.
                </p>
              </div>

              <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-2xl border border-teal-100 dark:border-teal-900/50">
                <h3 className="font-bold text-teal-900 dark:text-teal-200 mb-3">🍖 Composición ideal y Marcas TOP</h3>
                <div className="grid sm:grid-cols-2 gap-4 text-xs text-teal-800 dark:text-teal-300">
                  <ul className="space-y-1">
                    <li>• +25% proteína pura deshidratada</li>
                    <li>• -20% arroz (mejor si es integral o grain free)</li>
                    <li>• +500mg/kg taurina</li>
                    <li className="pt-2 font-bold italic">* Se puede dar kitten/junior hasta el año de edad.</li>
                  </ul>
                  <div>
                    <p className="font-bold mb-1">Marcas recomendadas:</p>
                    <p>Orijen, Acana, Optimanova, Gosbi grain free, Ownat, Schesir, Farmina, Purizon, feringa, Applaws, True origins, Nath.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="vacaciones" className="scroll-mt-24 bg-stone-50 dark:bg-stone-800 p-8 rounded-3xl border border-stone-100 dark:border-stone-700">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-teal-100 dark:bg-teal-900/50 text-teal-600 dark:text-teal-300 rounded-2xl">
                <Cat size={28} />
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-800 dark:text-stone-100">Consejo para las vacaciones</h2>
            </div>
            <div className="space-y-4 text-stone-600 dark:text-stone-400 leading-relaxed">
              <p>
                Los gatos no son perros, no disfrutan con los cambios o viajes. <strong>Déjalos siempre en casa</strong> y que un familiar o cat-sitter vaya cada día o cada 2 días para reponer agua, comida y limpiar areneros.
              </p>
              <p className="italic font-medium text-stone-800 dark:text-stone-200">
                Tú disfruta de tus vacaciones, pero él te agradecerá el quedarse en su casita y zona de confort ❤️
              </p>
            </div>
          </section>
        </div>

        {/* Support CTA */}
        <div className="bg-teal-600 rounded-[2rem] p-6 md:p-10 text-center text-white shadow-xl relative overflow-hidden max-w-3xl mx-auto">
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-3">¿Tienes dudas?</h2>
            <p className="text-sm md:text-base text-teal-100 mb-6 max-w-lg mx-auto leading-relaxed">
              Estamos aquí para apoyarte durante todo el proceso de adaptación. No dudes en contactarnos si necesitas asesoramiento.
            </p>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-teal-600 px-6 py-3 md:px-8 md:py-4 rounded-full font-bold shadow-lg hover:bg-teal-50 transition-colors text-sm md:text-base"
            >
              <Instagram size={18} />
              Contactar por Instagram
            </a>
          </div>
          <div className="absolute -right-10 -bottom-10 opacity-10 rotate-12">
            <Cat size={160} />
          </div>
        </div>

      </div>
    </div>
  );
};
