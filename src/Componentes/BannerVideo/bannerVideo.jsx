import React from 'react';
import './VideoBackground.css'; // Asegúrate de tener este archivo CSS

const VideoBackground = () => {
  return (
    <div className="video-background-container mt-20">
      <video autoPlay loop muted className="video-background">
        <source src="videoBanner.mp4" type="video/mp4" />
        Tu navegador no soporta videos.
      </video>
      <div className="video-overlay">
        <button className="cta-button">Inverti en Vacamuerta</button>
      </div>
    </div>
  );
};

export default VideoBackground;
