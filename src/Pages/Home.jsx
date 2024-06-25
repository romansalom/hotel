import React, { useState, useEffect } from 'react';
import Headers from '../Componentes/Header/header';
import ResponsiveImageTextComponent from '../Componentes/Proyecto/Proyecto';
import Contacto from '../Componentes/Inversion/inversion';
import BannerINversion from '../Componentes/BannerInversion/bannerInversion';
import Faqs from '../Componentes/faq/faq';
import BannnerSuscribe from '../Componentes/BannerSuscribe/bannerSuscribe';
import './home.css';
import Footer from '../Componentes/Footer/footer.jsx';

function Home() {
  const [showLogo, setShowLogo] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const mensaje = '¡Hola! Estoy interesado.';

  useEffect(() => {
    const handleScroll = () => {
      const separadorSection = document.getElementById('separador');

      if (separadorSection) {
        const separadorRect = separadorSection.getBoundingClientRect();

        // Mostrar el logo solo si estamos en la sección separador
        const isVisible =
          separadorRect.top <= window.innerHeight && separadorRect.bottom >= 0;

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

      {/* Contenido de la primera sección */}
      <div id="separador">
        <ResponsiveImageTextComponent id="responsiveImageTextComponent" />

        <BannerINversion />
        <div className="bg-[#F2F2F2]">
          <Faqs></Faqs>
          <br></br>
          <Contacto id="contacto" />
          <Footer></Footer>
        </div>
      </div>

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
