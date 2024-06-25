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
import BannerINversion from '../Componentes/BannerInversion/bannerInversion';
import Faq from '../Componentes/faq/faq';
import Faqs from '../Componentes/faq/faq';

function Home() {
  const [showLogo, setShowLogo] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const mensaje = '¡Hola! Estoy interesado.';

  useEffect(() => {
    const handleScroll = () => {
      // Obtener las secciones de contacto y footer
      const contactoSection = document.getElementById('contacto');
      const footerSection = document.getElementById('footer');
      const separadorSection = document.getElementById('separador');

      if (separadorSection) {
        const separadorRect = separadorSection.getBoundingClientRect();
        const contactoRect = contactoSection
          ? contactoSection.getBoundingClientRect()
          : null;
        const footerRect = footerSection
          ? footerSection.getBoundingClientRect()
          : null;

        // Verificar si estamos en la sección de contacto o footer
        const inContacto = contactoRect
          ? contactoRect.top <= window.innerHeight && contactoRect.bottom >= 0
          : false;
        const inFooter = footerRect
          ? footerRect.top <= window.innerHeight && footerRect.bottom >= 0
          : false;

        // Mostrar el logo solo si estamos en la sección separador y no en contacto o footer
        const isVisible =
          separadorRect.top <= window.innerHeight &&
          separadorRect.bottom >= 0 &&
          !inContacto &&
          !inFooter;

        setShowLogo(isVisible);
      }
    };

    // Añadir el event listener para el scroll
    window.addEventListener('scroll', handleScroll);

    // Limpiar el event listener cuando el componente se desmonta
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

        <BannerINversion />
        <div className="bg-[#F2F2F2]">
          {' '}
          <Faqs></Faqs>
          <br></br>
          <Contacto id="contacto" />
        </div>

        <div id="footer">
          <Footer />
        </div>
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
