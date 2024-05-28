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
