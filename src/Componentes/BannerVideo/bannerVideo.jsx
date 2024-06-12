import React from 'react';
import './VideoBackground.css'; // Asegúrate de tener este archivo CSS

const VideoBackground = () => {
  return (
    <div className="video-background-container">
      <video
        autoPlay
        loop
        muted
        playsInline // Esto evita que el video se abra en pantalla completa en iOS
        className="video-background"
      >
        <source src="videoBanner.mp4" type="video/mp4" />
        Tu navegador no soporta videos.
      </video>
      <div className="video-overlay">
        <button className="cta-button">SÉ EXCLUSIVO</button>
      </div>
    </div>
  );
};

export default VideoBackground;
