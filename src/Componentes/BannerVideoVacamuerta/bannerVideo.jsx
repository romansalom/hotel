import React, { useState, useEffect } from 'react';
import './VideoBackground.css';

const VideoBackgroundVaca = () => {
  return (
    <div className="video-background-container">
      <video autoPlay loop muted playsInline className="video-background">
        <source src="VideoBackgroundVaca.mp4" type="video/mp4" />
        <source src="VideoBackgroundVaca.mp4" type="video/webm" />
        Tu navegador no soporta videos.
      </video>

      <div className="video-overlay"></div>
    </div>
  );
};

export default VideoBackgroundVaca;
