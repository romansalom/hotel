import React, { useState, useEffect } from 'react';
import './VideoBackground.css';

const VideoBackground = () => {
  // Array de textos para rotar en el botón
  const buttonTexts = [
    'SÉ EXCLUSIVO',
    'ÚNETE HOY',
    'DESCUBRE MÁS',
    'CONTACTATE',
  ];

  // Estado para el texto actual del botón
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  // useEffect para cambiar el texto cada 3 segundos
  useEffect(() => {
    const textChangeInterval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % buttonTexts.length);
    }, 2000); // Cambia el texto cada 3000ms (3 segundos)

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(textChangeInterval);
  }, [buttonTexts.length]);

  return (
    <div className="video-background-container">
      <video autoPlay loop muted playsInline className="video-background">
        <source src="videobannerCalidadbaja.mp4" type="video/mp4" />
        <source src="videobannerCalidadbaja.webm" type="video/webm" />
        Tu navegador no soporta videos.
      </video>

      <div className="video-overlay">
        <button className="cta-button">{buttonTexts[currentTextIndex]}</button>
      </div>
    </div>
  );
};

export default VideoBackground;
