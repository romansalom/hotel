import React, { useState, useEffect } from 'react';
import Headers from '../Componentes/Header/header';
import ResponsiveImageTextComponent from '../Componentes/Proyecto/Proyecto';
import Contacto from '../Componentes/Inversion/inversion';
import BannerINversion from '../Componentes/BannerInversion/bannerInversion';
import Faqs from '../Componentes/faq/faq';
import BannnerSuscribe from '../Componentes/BannerSuscribe/bannerSuscribe';
import './home.css';
import Footer from '../Componentes/Footer/footer.jsx';
import TimeLine from '../Componentes/TimeLine/timeLine.jsx';
import GaleriaImagenes from '../Componentes/GaleriaImagenes/galeriaDeImagenes.jsx';
import Navbar, {
  handleClickBoton,
} from '../Componentes/NavBar/seccionBlanca.jsx';
import Porque from '../Componentes/BannerPorque/bannerPoruqe.jsx';

function Home() {
  const [showLogo, setShowLogo] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const [showSmallCircles, setShowSmallCircles] = useState(false);
  const mensaje = '¡Hola! Estoy interesado.';

  const handleMainCircleClick = () => {
    setShowSmallCircles(!showSmallCircles);
  };

  useEffect(() => {
    const handleScroll = () => {
      const separadorSection = document.getElementById('separador');
      const headerSection = document.querySelector('header');

      if (separadorSection && headerSection) {
        const separadorRect = separadorSection.getBoundingClientRect();
        const headerRect = headerSection.getBoundingClientRect();

        // Mostrar el logo solo si estamos en la sección separador
        const isSeparadorVisible =
          separadorRect.top <= window.innerHeight && separadorRect.bottom >= 0;

        // Cerrar los círculos adicionales si estamos en el header
        if (headerRect.top <= window.innerHeight && headerRect.bottom >= 0) {
          setShowSmallCircles(false);
        }

        setShowLogo(isSeparadorVisible);
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

  const handleNavbarClick = () => {
    // Llama a handleClickBoton para cambiar el estado del Navbar
    handleClickBoton();
  };

  return (
    <div id="App" className="App">
      {showBanner && <BannnerSuscribe onClose={handleClose} />}
      <Navbar />

      <Headers />

      {/* Contenido de la primera sección */}
      <div id="separador">
        <ResponsiveImageTextComponent id="Nosotros" />
        <Porque id="Inverti"></Porque>
        <BannerINversion />
        <TimeLine />
        <GaleriaImagenes />
        <div className="bg-[#ffffff]">
          <Faqs />
          <br />

          <Contacto id="contacto" />
        </div>

        <Footer />
      </div>

      {/* Logo flotante, visible solo si showLogo es true */}
    </div>
  );
}

export default Home;
