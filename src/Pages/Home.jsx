import React from 'react';
import NavBar from '../Componentes/NavBar/NavBar';
import Headers from '../Componentes/Header/header';
import ResponsiveImageTextComponent from '../Componentes/Proyecto/Proyecto';
import Contacto from '../Componentes/Inversion/inversion';
import ImageSection from '../Componentes/ImageSection/imageSection';
import Características from '../Componentes/Características/características';
import Banner from '../Componentes/Banner/banner';
import Footer from '../Componentes/Footer/footer';
import './home.css';

function Home() {
  const mensaje = '¡Hola! Estoy interesado.';

  return (
    <div className="App">
      <NavBar />
      <Headers />
      <br />
      <ResponsiveImageTextComponent id="responsiveImageTextComponent" />

      <ImageSection id="imagenes" />
      <Contacto id="contacto" />
      <Características id="inversion" />

      <Footer />
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
