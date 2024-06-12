import React, { useState, useEffect } from 'react';
import './VideoBackground.css';

const VideoBackground = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Función para detectar si el usuario está en un dispositivo móvil
    const checkMobile = () => {
      const match = window.matchMedia || window.msMatchMedia;
      if (match) {
        const mq = match('(pointer:coarse)');
        setIsMobile(!!mq.matches);
      }
    };

    // Ejecutar la función al cargar el componente
    checkMobile();

    // Agregar listener para cambios de tamaño de pantalla
    window.addEventListener('resize', checkMobile);

    // Limpiar el listener al desmontar el componente
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <div className="video-background-container">
      <video
        loop
        muted
        className="video-background"
        autoPlay={!isMobile} // Desactiva autoplay en dispositivos móviles
        controls={isMobile} // Muestra controles en dispositivos móviles
      >
        <source src="videoBanner.mp4" type="video/mp4" />
        Tu navegador no soporta videos.
      </video>
      <div className="video-overlay">
        <h1>Tu camino hacia la libertad financiera</h1>
        <button className="cta-button">SÉ EXCLUSIVO</button>
      </div>
    </div>
  );
};

export default VideoBackground;
