import { Animal, TeamMember, DonationMethod } from './types';

export const ANIMALS: Animal[] = [
  {
    id: '1',
    name: 'Maíz',
    species: 'Perro',
    breed: 'Mestizo',
    age: '4 años',
    gender: 'Macho',
    size: 'Grande',
    imageUrl: 'https://raw.githubusercontent.com/CColladoR/apa/refs/heads/main/Maiz.jpg',
    description: 'Maíz es un perro súper casero que busca urgentemente un hogar. Ha trabajado mucho sus miedos y es un perro agradecido y listo para aprender.',
    story: 'Maíz es un perro super casero, se fue adoptado con 3 meses (en 2021) y lo devolvieron en otoño de 2023 con un cuadro de ansiedad importante. La familia no supo educarle y en lugar de trabajar con el desde una parte positiva, lo hicieron con castigos, encierros y ansiedad. Eso provocó que Maíz volviera muy vulnerable, sin entender nada y que estuviera varios meses en shock, apático y llorando de pena💔\n\nDesde que nos lo devolvieron, se encuentra en una residencia canina donde hemos trabajado con especialistas sus miedos y su frustración, además de que le han enseñado muchos trucos que le motivan en el día a día y hacen su estancia más amena. De hecho, vuelve a ser el perrito contento que era, pero no deja de estar en una residencia...es decir, como perro que siempre ha vivido en una casa, le esta afectando el vivir en un chenil 😞\n\nSabemos que por tamaño y por no ser "un bebé pequeño" sus solicitudes de adopción o acogida temporal son NULAS. Pero no por ello vamos a dejar de intentarlo, así que: buscamos sacarlo de allí bien como casa de acogida o bien con adopción definitiva 🙏🏻\n\nEsto no es un juego, hablamos de una vida que, a su corta edad, ya ha sido dañada. Los casi de perros devueltos a las protectoras son muy sensibles puesto que el animal es muy consciente del abandono y, siendo totalmente casero, tiene que pasar a vivir en un chenil de una residencia canina donde se pierden todas las comodidades de un hogar, generando en ellos un shock y adaptación brutal. Necesitamos que las personas que estén interesadas en ayudar tengan muy claro que se necesita paciencia y conectar desde el cariño con el animal para poco a poco ir enseñándole que no volverá a pasar por ese shock, que no todos somos malos y que puede llevar de nuevo una vida feliz 🥹',
    status: 'Busca acogida urgente',
    secondaryStatuses: ['Urgente', 'En Adopción'],
    medicalStatus: {
      deworming: 'Sí',
      felvFiv: 'No',
      vaccination: 'Sí',
      microchip: 'Sí',
      sterilization: 'Sí'
    }
  },
  {
    id: '2',
    name: 'Brie',
    species: 'Gato',
    breed: 'Común Europeo / Capa: Siamés',
    age: '1.5 años',
    gender: 'Hembra',
    size: '3kg',
    imageUrl: 'https://raw.githubusercontent.com/CColladoR/apa/refs/heads/main/Brie.jpg',
    description: 'Actualmente me encuentro en una casa de acogida en Madrid. No estaré en adopción hasta finalizar todos los procedimientos que tengo pendientes y la asociación tenga el visto bueno por parte de nuestras veterinarias. Mientras tanto, puedes ser mi madrina o padrino para ayudar de cubrir los gastos de mi recuperación.',
    story: 'Brie llegó a nosotras pesando solamente 1kg (siendo gata adulta) en un estado límite rozando la muerte, de hecho, un día más en la calle y no lo hubiera contado. Fue rociada con veneno/gasolina por todo el cuerpo y eso le causó inflamación y quemaduras en la boca y vías respiratorias causándole muchísima mucosidad y dificultad para respirar😭\n\nHace un mes de su tan sonada operación de boca, donde se removió cielo y tierra para conseguirlo. Y sí, aquí estamos, habiendo dado un paso gigante en su calidad de vida. Después de pasar por la operación de odontología, donde pudieron extraerle todas las piezas y curar las úlceras, Brie a día de hoy, está mucho más tranquila: come que da gusto, no tiene dolor e incluso se le ha bajado un poco la inflamación de las vías altas. \n\nActualmente, gracias a toda vuestra ayuda, hemos recorrido la mitad del camino, solo nos queda el final. Nuestras veterinarias están intentando mantener esos mocos con un tratamiento diario y así intentar que siga ganando peso, pero la realidad es que, en breves, habrá que realizarle un TAC para estudiar la causa que provoca que esos mocos no cesen y encontrar la solución para que pueda respirar con normalidad sin necesidad de aerosoles y humidificador. Asimismo, queremos recordar el hecho de que ella es + inmuno, por lo que sus defensas siempre van a estar más bajitas y el tiempo de recuperación se ralentiza más 🥹.\n\nEsto es un pacto entre ella y Apa Myanimalsm, no vamos a dejarla sola y el reto es terminar encontrándole un hogar cuando esté totalmente recuperada. Seguimos yendo a por todas, gracias infinitas a quienes nos habéis ayudado y pusisteis vuestro granito de arena, esto es una cadena...¡seguimos! ❤️',
    status: 'Pronto en adopción',
    medicalStatus: {
      deworming: 'Sí',
      felvFiv: 'Positivo (FIV)',
      vaccination: 'Sí',
      microchip: 'Sí',
      sterilization: 'Sí'
    }
  },
  {
    id: '3',
    name: 'Omega',
    species: 'Perro',
    breed: 'Mestizo de Pastor Alemán',
    age: '4 años',
    gender: 'Macho',
    size: 'Grande',
    imageUrl: 'https://raw.githubusercontent.com/CColladoR/apa/refs/heads/main/Omega.jpg',
    description: 'Las dos plazas de la residencia nos cuestan 350€ al mes. Necesitamos tu ayuda 🙏',
    story: 'Con 3 mesecitos se fueron adoptados, el que era su dueño pasó todos nuestros procesos de adopción, teníamos un buen seguimiento de como iban evolucionando y creciendo felices en la que parecía que sería su familia definitiva... Un año después nos dimos cuenta de que no fueron más que un capricho.\n\nLos dos hermanos que nos devolverlos al ser descubiertos por la policía porque su dueño los tenían en pésimas condiciones (mintieron lo más grande y los usaban como perros guardianes de una finca). \n\nActualmente se encuentran en una residencia canina especializada y trabajan para mejorar su conducta y comportamiento, ya que arrastras traumas por falta de atención, ansiedad, agresividad con otros animales y muestran indicios de maltrato. Llevan ya 3 años con nosotras y aún falta mucho progreso por delante. \n\nNow solo esperamos que descansen y vuelvan a ser los perros felices y nobles que eran cuando se marcharon. Como decimos y repetiremos siempre, aquí estamos por y para ellos ✨\n\nTiempo, paciencia, trabajo y a buscar lo mejor para ellos siempre... ❤️‍🩹',
    status: 'En residencia'
  },
  {
    id: '4',
    name: 'Delta',
    species: 'Perro',
    breed: 'Mestizo de Pastor Alemán',
    age: '4 años',
    gender: 'Macho',
    size: 'Grande',
    imageUrl: 'https://raw.githubusercontent.com/CColladoR/apa/refs/heads/main/Delta.jpg',
    description: 'Las dos plazas de la residencia nos cuestan 350€ al mes. Necesitamos tu ayuda 🙏',
    story: 'Con 3 mesecitos se fueron adoptados, el que era su dueño pasó todos nuestros procesos de adopción, teníamos un buen seguimiento de como iban evolucionando y creciendo felices en la que parecía que sería su familia definitiva... Un año después nos dimos cuenta de que no fueron más que un capricho.\n\nLos dos hermanos que nos devolverlos al ser descubiertos por la policía porque su dueño los tenían en pésimas condiciones (mintieron lo más grande y los usaban como perros guardianes de una finca). \n\nActualmente se encuentran en una residencia canina especializada y trabajan para mejorar su conducta y comportamiento, ya que arrastras traumas por falta de atención, ansiedad, agresividad con otros animales y muestran indicios de maltrato. Llevan ya 3 años con nosotras y aún falta mucho progreso por delante. \n\nNow solo esperamos que descansen y vuelvan a ser los perros felices y nobles que eran cuando se marcharon. Como decimos y repetiremos siempre, aquí estamos por y para ellos ✨\n\nTiempo, paciencia, trabajo y a buscar lo mejor para ellos siempre... ❤️‍🩹',
    status: 'En residencia'
  },
  {
    id: '5',
    name: 'Sidra',
    species: 'Gato',
    breed: 'Común Europeo / Capa: Blanco y Negro',
    age: '1 año',
    gender: 'Hembra',
    size: '3 kg',
    imageUrl: 'https://raw.githubusercontent.com/CColladoR/apa/refs/heads/main/Sidra.jpg',
    description: 'Actualmente estamos ambas juntas en una casa de acogida en Madrid. Necesitamos recaudar fondos para poder cubrir el protocolo veterinario de ambas.',
    story: 'Hace unos días publicamos la necesidad de una acogida urgente para Cava y Sidra, dos hembras jovenes ultra sociables que vivían en una colonia feral descontrolada en un pueblo de Toledo, comiendo de aquella manera y pasando las noches a la intemperie.\n\nObviamente obra del abandono, es evidente que ambas han convivido antes en un hogar por los comportamientos, mimos, ronroneos y saber estar que tienen a día de hoy en su maravillosa acogida, que no dudo ni un instante en aceptar el caso y darles la bienvenida en su casa\n\nNos propusimos que ambas terminasen el año en un hogar y así ha sido. Ambas han salido de la calle, iniciando su cuarentena para poder hacer después todo el protocolo veterinario. Iremos informando sobre sus avances y en pocas semanas, si todo va bien, esperamos poder anunciar su adopción\n\nA día de hoy, ambas necesitan madrinas y padrinos. Necesitamos cubrir una esterilización urgente para evitar sorpresas. ¿Quién se anima?',
    status: 'Adoptado',
    medicalStatus: {
      deworming: 'Sí',
      felvFiv: 'Negativo',
      vaccination: 'Sí',
      microchip: 'Sí',
      sterilization: 'Sí'
    }
  },
  {
    id: '6',
    name: 'Cava',
    species: 'Gato',
    breed: 'Común Europeo / Capa: Blanco y Negro',
    age: '1 año',
    gender: 'Hembra',
    size: '3 kg',
    imageUrl: 'https://raw.githubusercontent.com/CColladoR/apa/refs/heads/main/Cava.jpg',
    description: 'Actualmente estamos ambas juntas en una casa de acogida en Madrid. Necesitamos recaudar fondos para poder cubrir el protocolo veterinario de ambas.',
    story: 'Hace unos días publicamos la necesidad de una acogida urgente para Cava y Sidra, dos hembras jovenes ultra sociables que vivían en una colonia feral descontrolada en un pueblo de Toledo, comiendo de aquella manera y pasando las noches a la intemperie.\n\nObviamente obra del abandono, es evidente que ambas han convivido antes en un hogar por los comportamientos, mimos, ronroneos y saber estar que tienen a día de hoy en su maravillosa acogida, que no dudo ni un instante en aceptar el caso y darles la bienvenida en su casa\n\nNos propusimos que ambas terminasen el año en un hogar y así ha sido. Ambas han salido de la calle, iniciando su cuarentena para poder hacer después todo el protocolo veterinario. Iremos informando sobre sus avances y en pocas semanas, si todo va bien, esperamos poder anunciar su adopción\n\nA día de hoy, ambas necesitan madrinas y padrinos. Necesitamos cubrir una esterilización urgente para evitar sorpresas. ¿Quién se anima?',
    status: 'Adoptado',
    medicalStatus: {
      deworming: 'Sí',
      felvFiv: 'Negativo',
      vaccination: 'Sí',
      microchip: 'Sí',
      sterilization: 'Sí'
    }
  },
  {
    id: '7',
    name: 'Jengibre',
    species: 'Gato',
    breed: 'Común Europeo / Capa: Siamés',
    age: '10 meses',
    gender: 'Macho',
    size: '2.8kg',
    imageUrl: 'https://raw.githubusercontent.com/CColladoR/apa/refs/heads/main/Jengibre.jpg',
    description: 'Jengibre se recupera actualmente en una casa de acogida en Toledo. Está en proceso de sociabilización y valoración veterinaria tras ser rescatado de la calle.',
    story: 'Fui rescatado de una zona peligrosa donde corría riesgo de atropello. Vivía con Cava y Sidra, que fueron sacadas de la colonia unos pocos días antes que yo. En cuanto ellas no estuvieron, los vecinos dejaron desatendida la colonia y de repente no tenía comida ni agua. Dormía en la calle y cuando el frío llegó mi estado de salud peoró drásticamente. Además, estoy cojito. Las chicas que me rescataron me llevaron al veterinario y parece que tengo una fractura en la cadera que se está valorando a día de hoy por el equipo de Traumatólogos. \n\nEstoy ubicado en una casa de acogida en Toledo. Están sociabilizando conmigo para que empiece a confiar en las personas y pueda llevar una vida feliz cuando esté totalmente recuperada.',
    status: 'Adoptado',
    medicalStatus: {
      deworming: 'Sí',
      felvFiv: 'Pte',
      vaccination: 'Pte',
      microchip: 'Pte',
      sterilization: 'Pte'
    }
  },
  {
    id: '8',
    name: 'Ana Mena',
    species: 'Gato',
    breed: 'Común Europeo / Capa: Carey',
    age: '2.5 meses',
    gender: 'Hembra',
    size: '2kg',
    imageUrl: 'https://raw.githubusercontent.com/CColladoR/apa/refs/heads/main/AnaMena.jpg',
    description: 'Actualmente, las chicas me han trasladado a una casa de acogida estable en Madrid, en la que también tengo otros compañeros gatunos que me están ayudando en todo el proceso de adaptación.\n\n¡La bebé ya ha finalizado todo el protocolo veterinario y está lista! Busco un hogar donde me quieran mucho.',
    story: 'Aparecí una mañana en una colonia controlada en un pueblo de Toledo. Las chicas que alimentaban a todos los compis gatunos que estaban allí me vieron enseguida y supieron que me habían dejado allí, abandonada, a -3º toda la noche.\n\nMe rescataron de inmediato y ahora estoy segura, caliente y en proceso de recuperación. ¡La bebé ha finalizado todo el protocolo veterinario y está lista!',
    status: 'Adoptado',
    medicalStatus: {
      deworming: 'Sí',
      felvFiv: 'Negativo',
      vaccination: 'Sí',
      microchip: 'Sí',
      sterilization: 'Pte'
    }
  },
  {
    id: '9',
    name: 'Romeo',
    species: 'Gato',
    breed: 'Común Europeo / Capa: Atigrado',
    age: '7 meses',
    gender: 'Macho',
    size: '3kg',
    imageUrl: 'https://raw.githubusercontent.com/CColladoR/apa/refs/heads/main/IMG_20260119_190406_308%7E2.jpg',
    description: '',
    story: 'Me llaman Romeo y es un placer conocerte :P\n\nLlevo tan solo unos días en la protectora. Anteriormente, me había tenido una familia durante varias semanas, aparecí en la puerta de su casa, al principio pensaron que podría tener familia pero cuando las horas pasaban y yo no me alejaba de allí, decidieron llevarme al veterinario. No tenía microchip pero estaba muy limpito y sanito y por mi aspecto el veterinario dijo que quizás podría tener familia.\n\nMe publicaron, me difundieron y mi familia nunca apareció, tampoco nadie que me quisiera así que empezaron a contactar con asociaciones para entregarme en una de ellas.\n\nDe casualidad y en el último momento, justo antes de que valorasen el soltarme de nuevo en la calle, aparecieron estos chicos tan majos, con los que vivo actualmente en Toledo. Me están cuidando y dicen que tengo que ir al veterinario pronto y si todo está bien, podré estar oficialmente en adopción.',
    status: 'Adoptado',
    medicalStatus: {
      deworming: 'Sí',
      felvFiv: 'Negativo',
      vaccination: 'Sí',
      microchip: 'Sí',
      sterilization: 'Sí'
    }
  },
  {
    id: '10',
    name: 'Coral',
    species: 'Gato',
    breed: 'Común Europeo / Capa: Tricolor',
    age: '5 años',
    gender: 'Hembra',
    size: 'Mediano',
    imageUrl: 'https://raw.githubusercontent.com/CColladoR/apa/refs/heads/main/Coral.jpg',
    description: '¡Coral ha encontrado su hogar definitivo! Después de una larga espera, esta gata dulce y cariñosa ya disfruta de su nueva familia y de muchos ronroneos en su sofá definitivo. 💓',
    story: 'Septiembre de 2020, cuando Apa Myanimalsm se estaba formando, sacamos a la camada de "Las Piedras Preciosas" del patio de un instituto de La Sagra. Las primeras acogidas que confiaron en nosotras aceptaron cuidar a las 5 hermanas hasta salir en adopción, de hecho, ahí fue el momento donde empezamos a hacer equipo y cadena solidaria felina 🥹 Jade y Coral fueron adoptadas juntas a las pocas semanas y fue una gran celebración, ya que era de las primeras adopciones conjuntas que conseguíamos ✨\n\nEn 2023, tres años después de su adopción, la que era su familia, alegando problemas médicos y familiares, recurre a nosotras para devolverlas😡 Llegando Jade y Coral en shock a su nueva acogida, donde estuvieron más de dos meses escondidas debajo de la cama porque no se fiaban de nadie y con mucha pena, puesto que sacar a dos animales del que ha sido su hogar toda su vida también les duele y afecta. Ambas pobres estuvieron con signos de estrés y estereotipias el primer año de vuelta a Apa Myanimalsm 😭\n\nDurante estos 3 años, hemos trabajado muy despacito la adaptación y confianza de ambas. Pero, lamentablemente, la realidad es que ya es difícil una adopción conjunta de dos cachorros, imaginaos la de dos adultas...💔\n\nDespués de mucho valorarlo y ver cómo ellas, a día de hoy, no son dependientes la una de la otra, al revés, se relacionan con todo ser: gatos, perros, humanos, llega el momento de separarlas para buscarles en este 2026 su hogar definitivo, el que tanto se merecen.\n\n¡Y el sueño se ha cumplido! Coral ya ha sido adoptada y vive feliz con su nueva familia. Es el final feliz que tanto esperábamos para ella. 💓',
    status: 'Adoptado',
    medicalStatus: {
      deworming: 'Sí',
      felvFiv: 'Negativo',
      vaccination: 'Sí',
      microchip: 'Sí',
      sterilization: 'Sí'
    }
  },
  {
    id: '11',
    name: 'Jade',
    species: 'Gato',
    breed: 'Común Europeo / Capa: Tricolor',
    age: '5 años',
    gender: 'Hembra',
    size: 'Mediano',
    imageUrl: 'https://raw.githubusercontent.com/CColladoR/apa/refs/heads/main/Jade2.jpg',
    description: 'Ella es una gata tímida, pero la más noble y bella del mundo. Actualmente se está recuperando de un pico de estrés para estar pronto en adopción.',
    story: 'Septiembre de 2020, cuando Apa Myanimalsm se estaba formando, sacamos a la camada de "Las Piedras Preciosas" del patio de un instituto de La Sagra. Las primeras acogidas que confiaron en nosotras aceptaron cuidar a las 5 hermanas hasta salir en adopción, de hecho, ahí fue el momento donde empezamos a hacer equipo y cadena solidaria felina 🥹 Jade y Coral fueron adoptadas juntas a las pocas semanas y fue una gran celebración, ya que era de las primeras adopciones conjuntas que conseguíamos ✨\n\nEn 2023, tres años después de su adopción, la que era su familia, alegando problemas médicos y familiares, recurre a nosotras para devolverlas😡 Llegando Jade y Coral en shock a su nueva acogida, donde estuvieron más de dos meses escondidas debajo de la cama porque no se fiaban de nadie y con mucha pena, puesto que sacar a dos animales del que ha sido su hogar toda su vida también les duele y afecta. Ambas estuvieron con signos de estrés y estereotipias el primer año de vuelta a Apa Myanimalsm 😭\n\nDurante estos 3 años, hemos trabajado muy despacito la adaptación y confianza de ambas. Pero, lamentablemente, la realidad es que ya es difícil una adopción conjunta de dos cachorros, imaginaos la de dos adultas...💔\n\nDespués de mucho valorarlo y ver cómo ellas, a día de hoy, no son dependientes la una de la otra, al revés, se relacionan con todo ser: gatos, perros, humanos, llega el momento de separarlas para buscarles en este 2026 su hogar definitivo, el que tanto se merecen.\n\nEn el caso de Jade, después de su cambio de acogida, ha vuelto a tener un pico de estrés. En la analítica salen los valores un poquito alterados, por lo que toca estar un tiempo con inmunoestimuladores hasta estabilizarla. Ella es una gata tímida, pero la más noble y bella del mundo. Sabemos que superará el bache y pronto estará en adopción, iremos informando.',
    status: 'En Adopción',
    medicalStatus: {
      deworming: 'Sí',
      felvFiv: 'Negativo',
      vaccination: 'Sí',
      microchip: 'Sí',
      sterilization: 'Sí'
    }
  },
  {
    id: '12',
    name: 'Matilde',
    species: 'Gato',
    breed: 'Común Europeo / Capa: Negra y Blanca',
    age: '1 año',
    gender: 'Hembra',
    size: 'Pequeño',
    imageUrl: 'https://raw.githubusercontent.com/myanimalsm-apa/APA.-Myanimalsm-/refs/heads/main/IMG20260407173318.jpg',
    description: 'Matilde es la nueva integrante de la familia. Apareció famélica y con heridas debajo de un coche, pero ya está a salvo iniciando su recuperación en cuarentena.',
    story: 'Bienvenida, Matilde 🥹💕\n\nNo estábamos económicamente bien para aceptar nuevos casos, pero durante un paseo no pudimos mirar hacia otro lado 💔\n\nEsta bebé de unos 7 meses apareció ayer debajo de un coche, al lado de una de nuestras colonias controladas de Toledo, maullando y llamando nuestra atención. Como siempre, nos paramos y ella no dudó ni un instante en acercarse corriendo a saludar y a pedir ayuda. Nos dimos la vuelta a por latita, pero nos siguió hasta la puerta de casa y obviamente no iba a quedarse ahí. \n\nEstá famélica, todo un saquito de huesos, llena de heridas de pulgas y garrapatas y con signos de haber sido maltratada. Tiene gestos y reacciones de no haber sido una gatita querida 😔\n\nOs presentamos a Matilde, la nueva integrante de la familia 🌷\n \n💉 Inicia su protocolo veterinario con una buena desparasitación y queda en cuarentena para su recuperación. \n\n🆘 Necesitamos la ayuda de todxs vosotrxs para su manutención y futuras visitas veterinarias.\n\nPuedes ayudarnos con sus gastos mediante:\n💍PayPal myanimalsm@gmail.com\n💍Bizum: 04872 (sección donativos de la app)\n💍Openbank: APA. Myanimalsm | ES69 0073 0100 5205 0607 9064',
    status: 'En Adopción',
    medicalStatus: {
      deworming: 'Sí',
      felvFiv: 'Negativo',
      vaccination: 'Pte',
      microchip: 'Sí',
      sterilization: 'Sí'
    }
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: '1',
    name: 'Laura',
    role: 'Presidenta y Fundadora',
    imageUrl: 'https://raw.githubusercontent.com/myanimalsm-apa/APA.-Myanimalsm-/refs/heads/main/1775758808391%7E2.png',
    bio: 'Apasionada por los animales desde niña, fundé APA Myanimalsm a los 23 años tras años de experiencia en rescates y gestión de colonias. Hoy, junto a un equipo que comparte mis ideales, trabajamos cada día para superar retos y recompensar nuestro esfuerzo salvando vidas. Mi misión es dar una segunda oportunidad a todo aquel animalito que lo necesite.'
  },
  {
    id: '2',
    name: 'Reyes',
    role: 'Vicepresidenta',
    imageUrl: 'https://raw.githubusercontent.com/CColladoR/apa/refs/heads/main/Reyes.jpg',
    bio: 'No concibo un hogar sin un gato ronroneando cerca. Mi labor en la asociación me permite dar todo de mí por ellos, encontrando en la protección animal un refugio frente a lo peor de la sociedad. Estoy orgullosa de formar parte de este equipo imparable que salva cada vez más vidas.'
  },
  {
    id: '3',
    name: 'Angelines',
    role: 'Secretaria',
    imageUrl: 'https://raw.githubusercontent.com/CColladoR/apa/refs/heads/main/Angelines.jpg',
    bio: 'Especialista en rescates complejos, desde alcantarillas hasta ríos, mi pasión por los animales es mi motor diario. He dedicado años a aprender sobre capturas y socialización porque mi compromiso con ellos no tiene límites. Siempre digo lo mismo: aunque yo trabaje para salvarlos, al final son ellos quienes siempre me salvan a mí.'
  },
  {
    id: '4',
    name: 'Christian',
    role: 'Tesorero',
    imageUrl: 'https://raw.githubusercontent.com/CColladoR/apa/refs/heads/main/Chris.jpg',
    bio: 'La gestión de la burocracia, gestión económica y la administración de la asociación, es ayuda que quizás no se ve desde fuera. Además, me considero una pieza fundamental de nuestra red de casas de acogida, ofrezco mi hogar como refugio seguro, demostrando que el trabajo de protección animal se hace tanto detrás de una pantalla, en la calle y desde el salón de mi casa.'
  }
];

export const DONATION_METHODS: DonationMethod[] = [
  {
    id: '2',
    name: 'Bizum',
    description: 'Donación inmediata y sencilla desde tu móvil.',
    iconName: 'Smartphone',
    details: 'Código de envío: 04872',
    color: 'bg-blue-500'
  },
  {
    id: '3',
    name: 'Transferencia',
    description: 'Realiza una transferencia bancaria directa a nuestra cuenta.',
    iconName: 'Landmark',
    details: 'IBAN: ES69 0073 0100 5205 0607 9064',
    color: 'bg-purple-500'
  },
  {
    id: '4',
    name: 'PayPal',
    description: 'Dona de forma segura a través de PayPal, con tarjeta o saldo.',
    iconName: 'CreditCard',
    actionUrl: 'https://paypal.me/myanimalsm',
    details: 'myanimalsm@gmail.com',
    color: 'bg-indigo-500',
    note: 'Marcar el envío como Amigos y Familiares para recibir el importe íntegro, sin retenciones'
  },
  {
    id: '5',
    name: 'Coral',
    description: 'Colabora de forma sencilla a través de Coral.',
    iconName: 'Heart',
    actionUrl: 'https://coral.to/apa-myanimalsm',
    color: 'bg-rose-400'
  },
  {
    id: '1',
    name: 'Teaming',
    description: 'Ayúdanos con solo 1€ al mes. Una pequeña aportación que hace una gran diferencia.',
    iconName: 'Users',
    actionUrl: 'https://www.teaming.net/asociacionmyanimalsm',
    color: 'bg-teal-500'
  }
];