import NavBar from '../Componentes/NavBar/NavBar';
import Headers from '../Componentes/Header/header';
import ResponsiveImageTextComponent from '../Componentes/Proyecto/Proyecto';
import Inversion from '../Componentes/Inversion/inversion';
import ImageSection from '../Componentes/ImageSection/imageSection';
import Características from '../Componentes/Características/características';
import Banner from '../Componentes/Banner/banner';
import Footer from '../Componentes/Footer/footer';
import './home.css';
function Home() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Headers></Headers>
      <br></br>
      <ResponsiveImageTextComponent id="responsiveImageTextComponent"></ResponsiveImageTextComponent>
      <Inversion id="inversion"></Inversion>
      <ImageSection id="imagenes"></ImageSection>
      <Características></Características>
      <Banner></Banner>
      <Footer></Footer>
      <div className="whatsapp-float">
        <a
          href="https://wa.me/yourphonenumber"
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
