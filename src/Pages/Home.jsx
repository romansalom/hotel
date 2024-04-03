import NavBar from '../Componentes/NavBar/NavBar';
import Headers from '../Componentes/Header/header';
import ResponsiveImageTextComponent from '../Componentes/Proyecto/Proyecto';
import Inversion from '../Componentes/Inversion/inversion';
import ImageSection from '../Componentes/ImageSection/imageSection';
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
    </div>
  );
}

export default Home;
