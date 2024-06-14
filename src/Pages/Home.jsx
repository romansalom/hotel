import React, { useState, useEffect } from 'react';
import NavBar from '../Componentes/NavBar/seccionBlanca';
import Headers from '../Componentes/Header/header';
import ResponsiveImageTextComponent from '../Componentes/Proyecto/Proyecto';
import Contacto from '../Componentes/Inversion/inversion';
import ImageSection from '../Componentes/ImageSection/imageSection';
import Características from '../Componentes/Características/características';
import Banner from '../Componentes/Banner/banner';
import Footer from '../Componentes/Footer/footer';
import './home.css';
import SeccionBlanca from '../Componentes/NavBar/seccionBlanca';
import BannnerSuscribe from '../Componentes/BannerSuscribe/bannerSuscribe';
import VideoBackground from '../Componentes/BannerVideo/bannerVideo';
import InvestmentComparisonChart from '../Componentes/Graficos/graficos';

function Home() {
  const [showLogo, setShowLogo] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const mensaje = '¡Hola! Estoy interesado.';

  useEffect(() => {
    const handleScroll = () => {
      // Obtén el elemento de la sección separador
      const separadorSection = document.getElementById('separador');

      if (separadorSection) {
        // Obtén las dimensiones y posición de la sección separador
        const rect = separadorSection.getBoundingClientRect();

        // Calcula si la sección está visible en la ventana
        const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;

        // Actualiza el estado de visibilidad del logo basado en la visibilidad de la sección separador
        setShowLogo(isVisible);
      }
    };

    // Añade el event listener para el scroll
    window.addEventListener('scroll', handleScroll);

    // Limpia el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Solo se ejecuta una vez, después de montar el componente

  const handleClose = () => {
    setShowBanner(false); // Ocultar el banner al hacer clic en la "x".
  };

  return (
    <div id="App" className="App">
      {showBanner && <BannnerSuscribe onClose={handleClose} />}
      <Headers />

      {/* Agregamos el NavBar aquí, si es parte del header */}
      {/* Contenido de la primera sección */}
      <div id="separador">
        <ResponsiveImageTextComponent id="responsiveImageTextComponent" />

        <VideoBackground></VideoBackground>

        <InvestmentComparisonChart></InvestmentComparisonChart>
        {
          //    <Contacto id="contacto" /> ///
        }
      </div>
      {/* Resto del contenido */}

      {/* Logo flotante, visible solo si showLogo es true */}
      {showLogo && (
        <div className="whatsapp-float">
          <a
            href={`https://wa.me/+5491164339338?text=${encodeURIComponent(
              mensaje
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
      )}
    </div>
  );
}

export default Home;
