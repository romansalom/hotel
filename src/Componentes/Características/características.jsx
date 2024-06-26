import React from 'react';
import { Image } from '@nextui-org/react';
import './caracteristicas.css'; // Asegúrate de importar tu archivo CSS aquí

function Características() {
  return (
    <div id="inversion" className="contenedore-zoom">
      <span class="relative flex justify-center bg-white mt-10 mb-5">
        <div class="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-orange-600 to-transparent opacity-200"></div>

        <span class="relative z-10 bg-white px-6 " style={{ color: 'white' }}>
          DDD
        </span>
      </span>
      <div
        id="Header"
        className="relative w-full  flex flex-col justify-center items-center py-10"
      >
        {/* Titulo con tamaño y alineación responsiva */}
        <h1 className="font-[sans-serif]  text-black text-3xl md:text-3xl lg:text-3xl text-center mb-20 font-extrabold ">
          Características de la inversión
        </h1>

        {/* Contenedor para los conjuntos de imagen y texto */}
        <div className="flex flex-col justify-center items-center gap-8 lg:flex-row lg:gap-20">
          {/* Primer conjunto de imagen y texto */}
          <div className="flex flex-col items-center ">
            <Image src="0-icon (1).png" className="feature-image mb-5" />
            <h2 className="text-black text-lg lg:text-xl font-bold mb-2">
              Renta Espera
            </h2>
            <p className="text-black text-sm lg:text-base font-bold ">
              Desde 1/4 de habitación
            </p>
          </div>

          {/* Segundo conjunto de imagen y texto */}
          <div className="flex flex-col items-center">
            <Image src="0-icon (2).png" className="feature-image mb-5" />
            <h2 className="text-black text-lg lg:text-xl font-bold  mb-2">
              Inversión en Pequeña Escala
            </h2>
            <p className="text-black text-sm lg:text-base font-bold ">
              Desde 1/4 de habitación
            </p>
          </div>

          {/* Tercer conjunto de imagen y texto */}
          <div className="flex flex-col items-center">
            <Image src="0-icon.png" className="feature-image mb-5" />
            <h2 className="text-black text-lg lg:text-xl font-bold  mb-2">
              Inversión en Pequeña Escala
            </h2>
            <p className="text-black text-sm lg:text-base font-bold ">
              Desde 1/4 de habitación
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Características;
