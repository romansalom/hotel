import NavBar from '../Componentes/NavBar/NavBar';
import Headers from '../Componentes/Header/header';
import ResponsiveImageTextComponent from '../Componentes/Proyecto/Proyecto';
import Inversion from '../Componentes/Inversion/inversion';
import ImageSection from '../Componentes/ImageSection/imageSection';
import Características from '../Componentes/Características/características';
import Banner from '../Banner/banner';
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
    </div>
  );
}

export default Home;
