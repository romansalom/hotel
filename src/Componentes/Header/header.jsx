import React from 'react';
import { Image } from '@nextui-org/react';
import './header.css';
function Headers() {
  /* useEffect(() => {
    // Configurar un temporizador para hacer scroll después de 5 segundos
    const timer = setTimeout(() => {
      // Verificar si el elemento existe y hacer scroll hacia él
      const component = document.getElementById('responsiveImageTextComponent');
      if (component) {
        // Aumentar la duración del efecto smooth
        component.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        });
      }
    }, 3000); // Aumentar el tiempo aquí para ralentizar el scroll

    return () => clearTimeout(timer);
  }, []);
*/
  return (
    <div id="Header" className="fondoheader ">
      {/* La primera imagen centrada y ajustada al ancho completo */}
      <Image
        src="logoblanco.png"
        className="w-full h-screen object-contain"
        alt="Banner Principal"
        style={{ marginTop: '-4rem' }} // Ajusta el margen superior para acercar la imagen al Navbar
      />

      {/* Contenedor para la flecha y el texto */}
      <div className="absolute bottom-0 left-0 right-0 text-center mb-4">
        {/* GIF de la flecha */}

        {/* Texto debajo de la flecha */}
      </div>
    </div>
  );
}

export default Headers;
