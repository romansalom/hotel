import React from 'react';
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

function Home() {
  const mensaje = '¡Hola! Estoy interesado.';

  return (
    <div id="App" className="App">
      <Headers />
      <SeccionBlanca /> {/* Agregamos el NavBar aquí, si es parte del header */}
      {/* Contenido de la primera sección */}
      <ResponsiveImageTextComponent id="responsiveImageTextComponent" />
      {/* Resto del contenido */}
      <ImageSection id="imagenes" />
      <Contacto id="contacto" />
      <Footer />
      {/* Botón de WhatsApp flotante */}
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
    </div>
  );
}

export default Home;
