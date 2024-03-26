import NavBar from '../Componentes/NavBar/NavBar';
import Headers from '../Componentes/Header/header';
import ResponsiveImageTextComponent from '../Componentes/Proyecto/Proyecto';
import Inversion from '../Componentes/Inversion/inversion';
function Home() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Headers></Headers>
      <br></br>
      <ResponsiveImageTextComponent id="responsiveImageTextComponent"></ResponsiveImageTextComponent>
      <Inversion id="inversion"></Inversion>
    </div>
  );
}

export default Home;
