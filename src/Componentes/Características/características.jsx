import React from 'react';
import { Image } from '@nextui-org/react';
import './caracteristicas.css'; // Asegúrate de importar tu archivo CSS aquí

function Características() {
  return (
    <div
      id="Header"
      className="relative w-full  flex flex-col justify-center items-center py-10"
    >
      {/* Titulo con tamaño y alineación responsiva */}
      <h1 className="text-black text-2xl md:text-3xl lg:text-4xl text-center mb-20 mt-10">
        Características de la inversión
      </h1>

      {/* Contenedor para los conjuntos de imagen y texto */}
      <div className="flex flex-col justify-center items-center gap-8 lg:flex-row lg:gap-20">
        {/* Primer conjunto de imagen y texto */}
        <div className="flex flex-col items-center ">
          <Image src="0-icon (1).png" className="feature-image mb-5" />
          <h2 className="text-black text-lg lg:text-xl  mb-2">Renta Espera</h2>
          <p className="text-black text-sm lg:text-base ">
            Desde 1/4 de habitación
          </p>
        </div>

        {/* Segundo conjunto de imagen y texto */}
        <div className="flex flex-col items-center">
          <Image src="0-icon (2).png" className="feature-image mb-5" />
          <h2 className="text-black text-lg lg:text-xl  mb-2">
            Inversión en Pequeña Escala
          </h2>
          <p className="text-black text-sm lg:text-base ">
            Desde 1/4 de habitación
          </p>
        </div>

        {/* Tercer conjunto de imagen y texto */}
        <div className="flex flex-col items-center">
          <Image src="0-icon.png" className="feature-image mb-5" />
          <h2 className="text-black text-lg lg:text-xl  mb-2">
            Inversión en Pequeña Escala
          </h2>
          <p className="text-black text-sm lg:text-base ">
            Desde 1/4 de habitación
          </p>
        </div>
      </div>
    </div>
  );
}

export default Características;
