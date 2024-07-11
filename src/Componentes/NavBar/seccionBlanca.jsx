import React, { useState, useEffect } from 'react';
import './navBAR.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [showSmallCircles, setShowSmallCircles] = useState(false);
  const mensaje = '¡Hola! Estoy interesado.';

  const handleMainCircleClick = () => {
    setShowSmallCircles(!showSmallCircles);
  };
  const handleClickBoton = () => {
    setIsOpen(!isOpen);
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
  }, []);
  return (
    <div>
      {' '}
      <header className="fondoheader playfair-display  flex shadow-sm bg-white font-sans min-h-[70px]">
        <div className="flex flex-wrap items-center justify-between sm:px-10 px-6 py-3 relative lg:gap-y-4 gap-y-6 gap-x-4 w-full">
          <div className="flex">
            <button id="toggleOpen" onClick={handleClickBoton}>
              <svg
                className="w-9 h-9"
                fill="#000"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          <div className="flex items-center space-x-8 max-md:ml-auto"></div>
        </div>

        <nav
          className={`fixed top-0 bg-gold-gradient h-screen z-50 transition-all ${
            isOpen ? 'left-0' : '-left-full'
          } w-3/4 max-w-sm`}
        >
          <div className="flex justify-end items-center px-4 py-6">
            <button id="toggleClose" onClick={handleClickBoton}>
              <svg
                className="w-7 h-7"
                fill="white"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          <ul className="mt-12 space-y-2 px-4">
            <li className="border-b border-gray-300">
              <a href="#" className="block py-4 text-lg text-white ">
                Home
              </a>
            </li>
            <li className="border-b border-gray-300">
              <a href="#Nosotros" className="block py-4 text-lg text-white ">
                Nosotros
              </a>
            </li>
            <li className="border-b border-gray-300">
              <a href="#Inverti" className="block py-4 text-lg text-white">
                Inverti
              </a>
            </li>
            <li className="border-b border-gray-300">
              <a href="#contacto" className="block py-4 text-lg text-white">
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </header>
      {showLogo && (
        <div className="botonMenuCirucular" onClick={handleMainCircleClick}>
          <a target="_blank" rel="noopener noreferrer">
            <svg
              class="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              fill="white"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9.408-5.5a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2h-.01ZM10 10a1 1 0 1 0 0 2h1v3h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-4a1 1 0 0 0-1-1h-2Z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </div>
      )}
      {/* Círculos adicionales */}
      {showSmallCircles && (
        <div className="botonMenuCirucularw fixed bottom-32 right-20 z-50 flex flex-col items-end space-y-4">
          <button className="bg-[#25d366] text-white w-10 h-10 rounded-full flex justify-center items-center shadow-md transition duration-300 hover:bg-[#128c7e]">
            <a
              href={`https://wa.me/+5491164339338?text=${encodeURIComponent(
                mensaje
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
          </button>

          <button
            className="bg-black text-white w-10 h-10 rounded-full flex justify-center items-center shadow-md transition duration-300 hover:bg-[#bea87f]"
            onClick={handleClickBoton} // Aquí se agrega el onClick para el botón SVG
          >
            <svg
              className="w-5 h-5"
              fill="white"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export const handleClickBoton = Navbar.handleClickBoton;

export default Navbar;
