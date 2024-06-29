import './styles.css';
const UnderHeader = () => {
  return (
    <section
      className="zooms py-20"
      style={{
        background:
          'linear-gradient(152.92deg, rgba(64, 64, 64, 0.2) 4.54%, rgba(242, 214, 162, 0.17) 34.2%, rgba(64, 64, 64, 0.1) 77.55%)',
      }}
    >
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center">
          {/* ¿Qué es Vaca Muerta? */}
          <div className="flex flex-col items-center">
            <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              ¿Qué es Vaca Muerta?
            </p>
            <p className="text-gray-600 mt-4 max-w-md mx-auto">
              Vaca Muerta, en la provincia de Neuquén, Argentina, es una de las
              mayores reservas de petróleo y gas no convencional del mundo. Esta
              formación geológica es esencial para el futuro energético global,
              atrayendo inversiones significativas y desarrollo continuo.
            </p>
            <a
              href="/queesvacamuerta"
              className="text-blue-500 mt-4 inline-block"
            >
              Ver más
            </a>
          </div>

          {/* ¿Quiénes Somos? */}
          <div className="flex flex-col items-center">
            <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              ¿Quiénes Somos?
            </p>
            <p className="text-gray-600 mt-4 max-w-md mx-auto">
              Aquí va el contenido para la cuarta pregunta, proporcionando
              detalles y atrayendo al lector. Aquí va el contenido para la
              cuarta pregunta, proporcionando detalles y atrayendo al lector.
              Aquí va el contenido para la cuarta pregunta, proporcionando
              detalles y atrayendo al lector.
            </p>
            <a
              href="/invertiranelo"
              className="text-blue-500 mt-4 inline-block"
            >
              Ver más
            </a>
          </div>

          {/* ¿Por qué invertir en Añelo/Vaca Muerta? */}
          <div className="flex flex-col items-center">
            <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              ¿Por qué invertir en Añelo/Vaca Muerta?
            </p>
            <p className="text-gray-600 mt-4 max-w-md mx-auto">
              Añelo, situado en el corazón de Vaca Muerta, es una región en
              crecimiento con enormes oportunidades de inversión. Nuestro
              proyecto de aparthotel ofrece una puerta de entrada única para
              aprovechar el potencial económico de esta área estratégica.
            </p>
            <a href="/tercera" className="text-blue-500 mt-4 inline-block">
              Ver más
            </a>
          </div>

          {/* ¿Cómo funciona el proceso de Inversión? */}
          <div className="flex flex-col items-center">
            <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              ¿Cómo funciona el proceso de Inversión?
            </p>
            <p className="text-gray-600 mt-4 max-w-md mx-auto">
              Aquí va el contenido para la cuarta pregunta, proporcionando
              detalles y atrayendo al lector. Aquí va el contenido para la
              cuarta pregunta, proporcionando detalles y atrayendo al lector.
              Aquí va el contenido para la cuarta pregunta, proporcionando
              detalles y atrayendo al lector.
            </p>
            <a href="/cuarta" className="text-blue-500 mt-4 inline-block">
              Ver más
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnderHeader;
