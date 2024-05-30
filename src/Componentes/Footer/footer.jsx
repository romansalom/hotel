import './footer.css'; // Asegúrate de importar tu archivo CSS aquí
function Footer() {
  return (
    <div className="contenedores-zoom bg-black">
      <footer className="text-white bg-black px-4 py-5 max-w-screen-xl mx-auto md:px-8">
        <div className="max-w-lg sm:mx-auto sm:text-center">
          <img src="copia3.png" alt="foto" className="w-32 sm:mx-auto" />
        </div>

        <style jsx>{`
          .svg-icon path,
          .svg-icon polygon,
          .svg-icon rect {
            fill: currentColor;
          }
        `}</style>
      </footer>
    </div>
  );
}

export default Footer;
