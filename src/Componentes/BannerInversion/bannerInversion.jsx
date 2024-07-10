import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './bannerinversion.css'; // Asegúrate de tener este archivo CSS para estilos adicionales

const BannerINversion = () => {
  useEffect(() => {
    AOS.init({
      duration: 700, // Duración de la animación en milisegundos
      easing: 'ease-in-out', // Tipo de animación
      offset: '40%', // Cambiado a porcentaje para iniciar animación al ver el 40% de la sección
      once: false, // Si true, la animación se ejecuta solo una vez
    });
  }, []);

  return (
    <div className="bg-[#404040] playfair-display  px-8 py-14 font-[sans-serif] text-gray-300 overflow-hidden">
      {/* overflow-hidden evita que el contenido desborde horizontalmente */}
      <div className="grid md:grid-cols-2 items-center gap-12 max-w-6xl mx-auto">
        <div>
          <h1 className="text-4xl font-bold text-[#f2d6a2]">
            ¿Cómo comenzar a invertir?
          </h1>
          <p className="mt-6 text-ml">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            accumsan, nunc et tempus blandit, metus mi consectetur nibh, a
            pharetra felis turpis vitae ligula. Etiam laoreet velit nec neque
            ultrices, non consequat mauris tincidunt.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            { value: '5.4', label: 'Total Users', animation: 'fade-right' },
            { value: '$80K', label: 'Revenue', animation: 'fade-left' },
            { value: '100K', label: 'Engagement', animation: 'fade-right' },
            { value: '99.9%', label: 'Server Uptime', animation: 'fade-left' },
          ].map((item, index) => (
            <div
              key={index}
              className={`bg-black flex flex-col items-center text-center rounded md:p-8 p-6 card ${item.animation}`}
              data-aos={item.animation}
            >
              <h3 className="lg:text-5xl text-3xl font-extrabold text-[#f2d6a2]">
                {item.value}
              </h3>
              <div className="mt-4">
                <p className="text-sm text-[#f2d6a2]">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BannerINversion;
