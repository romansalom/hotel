import React from 'react';
import { Image } from '@nextui-org/react';

function Headers() {
  return (
    <div className="relative w-full">
      {/* La imagen se ajustará al ancho completo y la altura será automática */}
      <Image
        src="foto2.jpg"
        className="w-full h-auto object-cover"
        alt="Banner"
      />
      {/* Contenedor de texto superpuesto con sombra para mejorar la visibilidad */}
    </div>
  );
}

export default Headers;
