import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Porque() {
  useEffect(() => {
    AOS.init({
      once: false, // Animación solo una vez al desplazar
      offset: 10, // Desplazamiento en píxeles antes de que se active la animación
      duration: 1000, // Duración de la animación en milisegundos
    });
  }, []);

  return (
    <>
      <div className="playfair-display-letras bg-[#d3d3cb] text-[#262626] px-6 py-12">
        <div className="max-w-6xl max-md:max-w-md mx-auto">
          <div className="grid md:grid-cols-2 items-start gap-8">
            <div className="lg:sticky lg:top-20 lg:py-20">
              <h2 className="lg:text-5xl md:text-5xl text-3xl font-extrabold mb-4 lg:!leading-[55px] sm:text-4xl sm:leading-tight lg:mt-[-20px] md:mt-[-10px]">
                ¿Por qué invertir con nosotros?{' '}
              </h2>
            </div>

            <div className="space-y-9 md:max-w-md">
              <div
                className="flex max-sm:flex-col bg-white p-4 rounded-md"
                data-aos="fade-up"
              >
                <div className="sm:ml-6">
                  <p className="text-s mt-1">
                    Durante la construcción: Ofrecemos un retorno de inversión
                    del 0.5% desde el primer día.
                  </p>
                </div>
              </div>
              <div
                className="flex max-sm:flex-col p-4 bg-white rounded-md"
                data-aos="fade-up"
              >
                <div className="sm:ml-6">
                  <p className="text-s mt-1">
                    Posterior a la construcción: La rentabilidad aumenta al 1%
                    una vez finalizado el edificio.
                  </p>
                </div>
              </div>
              <div
                className="flex max-sm:flex-col bg-white p-4 rounded-md"
                data-aos="fade-right"
              >
                <div className="sm:ml-6">
                  <p className="text-s mt-1">
                    Se ofrece la opción de pagar en cuotas, facilitando la
                    inversión accesible y manejable.
                  </p>
                </div>
              </div>
              <div
                className="flex max-sm:flex-col bg-white p-4 rounded-md"
                data-aos="fade-right"
              >
                <div className="sm:ml-6">
                  <p className="text-s mt-1">
                    Al invertir en una unidad funcional, automáticamente formas
                    parte de un pool de rentas.
                  </p>
                </div>
              </div>
              <div
                className="flex max-sm:flex-col bg-white p-4 rounded-md"
                data-aos="fade-right"
              >
                <div className="sm:ml-6">
                  <p className="text-s mt-1">
                    Esto garantiza que la unidad esté siempre alquilada,
                    asegurando ingresos continuos para el inversor.
                  </p>
                </div>
              </div>
              <div
                className="flex max-sm:flex-col bg-white p-4 rounded-md"
                data-aos="fade-right"
              >
                <div className="sm:ml-6">
                  <p className="text-s mt-1">
                    Si prefieres no participar en el pool de rentas, tienes la
                    opción de gestionar la unidad funcional según tus
                    preferencias.
                  </p>
                </div>
              </div>
              <div
                className="flex max-sm:flex-col bg-white p-4 rounded-md"
                data-aos="fade-right"
              >
                <div className="sm:ml-6">
                  <p className="text-s mt-1">
                    Puedes venderla, habitarla o alquilarla por cuenta propia.
                  </p>
                </div>
              </div>
              <div
                className="flex max-sm:flex-col bg-white p-4 rounded-md"
                data-aos="fade-right"
              >
                <div className="sm:ml-6">
                  <p className="text-s mt-1">
                    Puedes venderla, habitarla o alquilarla por cuenta propia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Porque;
