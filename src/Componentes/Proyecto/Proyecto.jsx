import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importa el archivo de estilos de AOS
import './proyecto.css';
import SwipeToWatchSVG from '../SwipSvg/swipe'; // Asegúrate de que el path es correcto

const ResponsiveImageTextComponent = () => {
  const [images] = useState([
    'renderExterior1.jpeg',
    'renderExterior2.jpeg',
    'renderExterior3.jpeg',
  ]);
  const [images2] = useState(['renderinterior1.jpeg', 'renderinterior2.jpeg']);
  const [images3] = useState(['fotoVaca1.jpg', 'fotoVaca2.jpg', 'ruta1.jpg']);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);
  const [currentIndex3, setCurrentIndex3] = useState(0);

  const [isVisible, setIsVisible] = useState(true);
  const [isVisible2, setIsVisible2] = useState(true);
  const [isVisible3, setIsVisible3] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoading2, setIsLoading2] = useState(true);
  const [isLoading3, setIsLoading3] = useState(true);
  const [showSwipeSVG, setShowSwipeSVG] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: 'ease-in-out',
    });

    // Preload all images
    const preloadImages = () => {
      images.forEach((src) => {
        const img = new window.Image();
        img.src = src;
      });
    };
    const preloadImages2 = () => {
      images2.forEach((src) => {
        const img2 = new window.Image();
        img2.src = src;
      });
    };
    const preloadImages3 = () => {
      images3.forEach((src) => {
        const img3 = new window.Image();
        img3.src = src;
      });
    };

    // Check if the swipe SVG should be shown
    const shouldShowSwipeSVG = localStorage.getItem('showSwipeSVG') !== 'false';
    if (currentIndex === 0 && shouldShowSwipeSVG) {
      setShowSwipeSVG(true);
    }

    preloadImages();
    preloadImages2();
    preloadImages3();
  }, [images, images2, images3, currentIndex]);

  // Function to close the SVG and update localStorage
  const handleCloseSVG = () => {
    setShowSwipeSVG(false);
    localStorage.setItem('showSwipeSVG', 'false');
  };

  // Handle image load to update state
  const handleImageLoad = () => {
    setIsLoading(false);
    setIsVisible(true); // Make the new image visible after load
  };

  const handleImageLoad2 = () => {
    setIsLoading2(false);
    setIsVisible2(true); // Make the new image visible after load
  };

  const handleImageLoad3 = () => {
    setIsLoading3(false);
    setIsVisible3(true); // Make the new image visible after load
  };

  // Handle image click to change to the next image
  const handleImageClick = (e) => {
    e.preventDefault();
    setIsVisible(false); // Start the transition
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setIsLoading(true); // Prepare to load the new image
    }, 500); // Wait for the fade-out transition to complete
  };

  const handleImageClick2 = (e) => {
    e.preventDefault();
    setIsVisible2(false); // Start the transition
    setTimeout(() => {
      setCurrentIndex2((prevIndex) => (prevIndex + 1) % images2.length);
      setIsLoading2(true); // Prepare to load the new image
    }, 500); // Wait for the fade-out transition to complete
  };

  const handleImageClick3 = (e) => {
    e.preventDefault(); // Prevent the default behavior
    setIsVisible3(false); // Start the transition
    setTimeout(() => {
      setCurrentIndex3((prevIndex) => (prevIndex + 1) % images3.length);
      setIsLoading3(true); // Prepare to load the new image
    }, 500); // Wait for the fade-out transition to complete
  };

  return (
    <div className="contenedores playfair-display bg-[#fdfef4] ">
      <div id="Nosotros" className="container mx-auto p-4 mb-8">
        {/* Primer bloque de contenido */}

        <section className="text-[#262626] body-font overflow-hidden">
          <div className="container px-5 py-20 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <div className="lg:w-1/2 w-full lg:pr-10 lg:py-20 mb-6 lg:mb-0 ">
                <h2 className="playfair-display-letras text-sm title-font text-[#262626] tracking-widest">
                  Marcus Guershon INN
                </h2>
                <h1 className="playfair-display-letras text-[#262626] text-3xl title-font font-medium mb-4">
                  ¿Quiénes somos?
                </h1>

                <div className="playfair-display-letras flex border-t border-black py-2"></div>
                <p className="playfair-display-letras leading-relaxed mb-4">
                  Set de mobiliario estilo wabisabi El wabi-sabi combina la
                  atención a la composición del minimalismo, con la calidez de
                  los objetos provenientes de la naturaleza. Algunas
                  características de la estética wabi-sabi son la asimetría,
                  aspereza, sencillez o ingenuidad, modestia e intimidad, y
                  sugiere además un proceso natural.
                </p>
              </div>
              <div className="lg:w-1/2 w-full lg:h-auto h-auto lg:py-29">
                <div className="hidden lg:block">
                  <br />
                </div>{' '}
                <div className="flex justify-center items-center h-60 lg:h-96">
                  <div className="image-container lg:py-14  object-cover object-center rounded w-full h-full">
                    <img
                      onClick={(e) => handleImageClick(e)}
                      src={images[currentIndex]}
                      alt={`Imagen ${currentIndex + 1}`}
                      className={`image ${
                        isVisible ? 'image-visible' : 'image-hidden'
                      }`}
                      onLoad={handleImageLoad}
                    />
                    {showSwipeSVG && currentIndex === 0 && (
                      <div
                        className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-10"
                        onClick={handleCloseSVG}
                      >
                        <SwipeToWatchSVG />
                        <button
                          onClick={(e) => {
                            e.stopPropagation(); // Prevent the click event from propagating to the container
                            handleCloseSVG();
                          }}
                          className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full p-1"
                        >
                          &times;
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Segundo bloque de contenido */}
        <br></br>
        <br></br>

        {/* Tercer bloque de contenido */}
        <div
          className="flex flex-col md:flex-row items-center justify-center"
          data-aos="fade-up"
        >
          <section className="text-[#262626] body-font overflow-hidden">
            <div className="relative z-10"></div>

            <div className="container px-5 py-20 mx-auto">
              <div className="lg:w-4/5 mx-auto flex flex-wrap">
                <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 ">
                  <h1 className="playfair-display-letras text-[#262626] text-3xl title-font font-medium mb-4">
                    ¿Qué es Vaca Muerta?{' '}
                  </h1>

                  <div className="playfair-display-letras flex border-t border-black py-2"></div>
                  <p className="playfair-display-letras leading-relaxed mb-4">
                    Vaca Muerta es una formación geológica de Shale en
                    Argentina, conocida por sus vastas reservas de gas y
                    petróleo no convencional.Con un potencial que podría
                    abastecer al país durante 150 años y un valor estimado en
                    cuatro veces el PBI de Argentina, Vaca Muerta es clave para
                    el desarrollo energético y económico. El epicentro de esta
                    actividad es Añelo, un núcleo industrial en crecimiento.
                  </p>
                </div>
                <div className="lg:w-1/2 w-full lg:h-auto h-auto lg:py-29">
                  <div className="hidden lg:block">
                    <br />
                  </div>{' '}
                  <div className="image-container">
                    <div className="image-container  object-cover object-center rounded w-full h-full">
                      <img
                        onClick={(e) => handleImageClick2(e)}
                        src={images2[currentIndex2]}
                        alt={`Imagen ${currentIndex2 + 1}`}
                        className={`image ${
                          isVisible2 ? 'image-visible' : 'image-hidden'
                        }`}
                        onLoad={handleImageLoad2}
                      />
                      {showSwipeSVG && currentIndex2 === 0 && (
                        <div
                          className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-10"
                          onClick={handleCloseSVG}
                        >
                          <SwipeToWatchSVG />
                          <button
                            onClick={(e) => {
                              e.stopPropagation(); // Prevent the click event from propagating to the container
                              handleCloseSVG();
                            }}
                            className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full p-1"
                          >
                            &times;
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <br></br>
        <br></br>
        <div
          className="flex flex-col md:flex-row items-center justify-center"
          data-aos="fade-up"
        >
          <section className="text-[#262626] body-font overflow-hidden">
            <div className="relative z-10"></div>

            <div className="container px-5 py-20 mx-auto">
              <div className="lg:w-4/5 mx-auto flex flex-wrap">
                <div className="lg:w-1/2 w-full lg:pr-10 lg:py-10 mb-6 lg:mb-0 ">
                  <h2 className="playfair-display-letras text-sm title-font text-[#262626] tracking-widest">
                    Añelo , Neuquén
                  </h2>
                  <h1 className="playfair-display-letras text-[#262626] text-3xl title-font font-medium mb-4">
                    ¿Por qué invertir en Añelo ?
                  </h1>

                  <div className="playfair-display-letras flex border-t border-black py-2  "></div>
                  <p className="playfair-display-letras leading-relaxed mb-4">
                    Invertir en Añelo es una oportunidad única debido a su
                    crecimiento económico exponencial. Ubicada en la región de
                    Vaca Muerta, Añelo está en el corazón de una de las mayores
                    reservas de gas y petróleo no convencional del mundo,
                    atrayendo a grandes compañías petroleras. La demanda de
                    viviendas y servicios aumenta constantemente, lo que crea un
                    entorno ideal para inversiones inmobiliarias. Añelo se está
                    desarrollando rápidamente, proyectándose como un motor
                    económico clave en Argentina, con grandes beneficios para
                    los inversores.
                  </p>
                </div>
                <div className="lg:w-1/2 w-full lg:h-auto h-auto lg:py-29">
                  <div className="hidden lg:block">
                    <br />
                  </div>{' '}
                  <div className="image-container">
                    <div className="image-container lg:py-10  object-cover object-center rounded w-full h-full">
                      {' '}
                      <img
                        onClick={(e) => handleImageClick3(e)}
                        src={images3[currentIndex3]}
                        alt={`Imagen ${currentIndex3 + 1}`}
                        className={`image ${
                          isVisible3 ? 'image-visible' : 'image-hidden'
                        }`}
                        onLoad={handleImageLoad3}
                      />
                      {showSwipeSVG && currentIndex3 === 0 && (
                        <div
                          className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-10"
                          onClick={handleCloseSVG}
                        >
                          <SwipeToWatchSVG />
                          <button
                            onClick={(e) => {
                              e.stopPropagation(); // Prevent the click event from propagating to the container
                              handleCloseSVG();
                            }}
                            className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full p-1"
                          >
                            &times;
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveImageTextComponent;
