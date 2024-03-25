import NavBar from '../Componentes/NavBar/NavBar';
import Headers from '../Componentes/Header/header';
import ResponsiveImageTextComponent from '../Componentes/Proyecto/Proyecto';
function Home() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Headers></Headers>
      <br></br>
      <ResponsiveImageTextComponent></ResponsiveImageTextComponent>
    </div>
  );
}

export default Home;
