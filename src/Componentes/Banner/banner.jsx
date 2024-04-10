import React from 'react';
import { Button } from '@nextui-org/react';
import './banner.css'; // Asegúrate de importar tu archivo CSS aquí
const handleScrollToComponentinversion = () => {
  const component = document.getElementById('inversion');
  if (component) {
    component.scrollIntoView({ behavior: 'smooth' });
  }
};

function Banner() {
  return (
    <div>
      <span class="relative flex justify-center bg-white mt-0.5 mb-0.5">
        <div class="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-orange-600 to-transparent opacity-200"></div>

        <span class="relative z-10 bg-white px-6 " style={{ color: 'white' }}>
          DDD
        </span>
      </span>
      <div
        id="banner"
        className="relative w-full bg-light-blue py-8 lg:py-12 flex flex-col justify-center items-center"
      >
        <div className="text-center mb-4 ">
          <h1 className="text-white text-2xl   ">
            ¡Contactate con nuestros asesores! nos comunicaremos a la brevedad
          </h1>
        </div>
        <div className="flex justify-center items-center">
          <Button onClick={handleScrollToComponentinversion}>CONSULTAR</Button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
