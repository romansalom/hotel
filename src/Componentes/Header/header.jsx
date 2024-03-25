import React from 'react';
import { Image } from '@nextui-org/react';

function Headers() {
  return (
    <div className="relative w-full bg-black flex justify-center items-center">
      {/* La primera imagen centrada y ajustada al ancho completo */}
      <Image
        src="46413055_transparent-2.png"
        className="w-full h-screen object-contain"
        alt="Banner Principal"
        style={{ marginTop: '-4rem' }} // Ajusta el margen superior para acercar la imagen al Navbar
      />

      {/* Contenedor para la flecha y el texto */}
      <div className="absolute bottom-0 left-0 right-0 text-center mb-4">
        {/* GIF de la flecha */}
        <div
          src="ruta_de_la_flecha.gif"
          alt="Flecha"
          className="w-12 mx-auto animate-bounce"
        >
          {' '}
          <svg
            class="w-[48px] h-[48px] text-white dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
              d="m8 7 4 4 4-4m-8 6 4 4 4-4"
            />
          </svg>
        </div>{' '}
        {/* Texto debajo de la flecha */}
        <p className="text-white font-bold mt-2">Inverti en Vaca Muerta</p>
      </div>
    </div>
  );
}

export default Headers;
