import React from 'react';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen py-16 bg-white dark:bg-stone-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-stone-800 dark:text-stone-100 mb-8">Política de Privacidad</h1>
        
        <div className="text-stone-600 dark:text-stone-300 space-y-6 leading-relaxed">
          <p>
            El presente Política de Privacidad establece los términos en que usa y protege la información que es proporcionada por sus usuarios al momento de utilizar su sitio web. Esta asociación está comprometida con la seguridad de los datos de sus usuarios. Cuando le pedimos llenar los campos de información personal con la cual usted pueda ser identificado, lo hacemos asegurando que sólo se empleará de acuerdo con los términos de este documento. Sin embargo esta Política de Privacidad puede cambiar con el tiempo o ser actualizada por lo que le recomendamos y enfatizamos revisar continuamente esta página para asegurarse que está de acuerdo con dichos cambios.
          </p>

          <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-800 dark:text-stone-100 mt-8 mb-4">Información que es recogida</h2>
          <p>
            Nuestra base de datos podrá recoger información personal por ejemplo: Nombre, información de contacto como su dirección de correo electrónica e información demográfica. Así mismo cuando sea necesario podrá ser requerida información específica para procesar algún pedido o realizar una entrega o facturación.
          </p>

          <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-800 dark:text-stone-100 mt-8 mb-4">Uso de la información recogida</h2>
          <p>
            Nuestra base de datos emplea la información con el fin de proporcionar el mejor servicio posible, particularmente para mantener un registro de usuarios, de pedidos en caso que aplique, y mejorar nuestros productos y servicios. Es posible que sean enviados correos electrónicos periódicamente a través de nuestro sitio con ofertas especiales, nuevos productos y otra información publicitaria que consideremos relevante para usted o que pueda brindarle algún beneficio, estos correos electrónicos serán enviados a la dirección que usted proporcione y podrán ser cancelados en cualquier momento.
          </p>
          <p>
            APA. Myanimalsm está altamente comprometido para cumplir con el compromiso de mantener su información segura. Usamos los sistemas más avanzados y los actualizamos constantemente para asegurarnos que no exista ningún acceso no autorizado.
          </p>

          <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-800 dark:text-stone-100 mt-8 mb-4">Enlaces a Terceros</h2>
          <p>
            Este sitio web pudiera contener enlaces a otros sitios que pudieran ser de su interés. Una vez que usted de clic en estos enlaces y abandone nuestra página, ya no tenemos control sobre al sitio al que es redirigido y por lo tanto no somos responsables de los términos o privacidad ni de la protección de sus datos en esos otros sitios terceros. Dichos sitios están sujetos a sus propias políticas de privacidad por lo cual es recomendable que los consulte para confirmar que usted está de acuerdo con estas.
          </p>

          <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-800 dark:text-stone-100 mt-8 mb-4">Control de su información personal</h2>
          <p>
            Esta compañía no venderá, cederá ni distribuirá la información personal que es recopilada sin su consentimiento, salvo que sea requerido por un juez con un orden judicial.
          </p>
          <p>
            APA. Myanimalsm se reserva el derecho de cambiar los términos de la presente Política de Privacidad en cualquier momento.
          </p>

          <div className="mt-12 pt-8 border-t border-stone-200 dark:border-stone-800 font-serif font-bold text-stone-800 dark:text-stone-100">
            Equipo de APA. Myanimalsm
          </div>
        </div>
      </div>
    </div>
  );
};