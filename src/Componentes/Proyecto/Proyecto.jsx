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
      duration: 800,
      once: false,
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
    <div className="contenedores">
      <div
        id="responsiveImageTextComponent"
        className="container mx-auto p-4 mb-8"
      >
        {/* Primer bloque de contenido */}
        <div
          className="flex flex-col md:flex-row items-start md:items-center justify-center space-y-4 md:space-y-0 md:space-x-8"
          data-aos="fade-right"
        >
          <div className="relative overflow-hidden rounded-xl hover:scale-10 hover:shadow-2xl transition duration-300 ease-in-out">
            <div className="image-container relative">
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
          <div className="flex flex-col justify-center text-center md:text-left md:ml-8 font-[sans-serif]">
            <h2 className="text-2xl font-extrabold">Render exterior</h2>
            <br />
            <div className="text-lg">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium reprehenderit id dicta veniam aliquam.
              </p>
              <p>
                Facilis quaerat animi, aut amet dolores culpa. Ipsa quo
                explicabo illo earum dolore, temporibus sapiente totam.
              </p>
              <p>Otro párrafo de texto con un estilo diferente.</p>
            </div>
          </div>
        </div>

        <br />
        <br />
        <br />

        <br />
        <br />
        <br />
        {/* Segundo bloque de contenido */}
        <div
          className="flex flex-col md:flex-row items-center justify-center font-[sans-serif]"
          data-aos="fade-left"
        >
          <div
            className="md:ml-2 lg:ml-2 xl:ml-5 2xl:ml-2 relative mb-4 md:mb-0 md:order-2 lg:order-2 xl:order-2 2xl:order-2 hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out"
            onClick={(e) => handleImageClick2(e)}
          >
            <div className="image-container">
              <img
                src={images2[(currentIndex2 + 1) % images2.length]}
                alt={`Imagen ${currentIndex2 + 2}`}
                className={`image ${
                  isVisible2 ? 'image-visible' : 'image-hidden'
                }`}
                onLoad={handleImageLoad2}
              />
            </div>
          </div>
          <div className="flex flex-col justify-center text-center md:text-left md:ml-8 font-[sans-serif]">
            <h2 className="text-2xl font-extrabold">Render Interior</h2>
            <br />
            <div className="text-lg">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium reprehenderit id dicta veniam aliquam.
              </p>
              <p>
                Facilis quaerat animi, aut amet dolores culpa. Ipsa quo
                explicabo illo earum dolore, temporibus sapiente totam.
              </p>
              <p>Otro párrafo de texto con un estilo diferente.</p>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />

        <br />
        <br />

        {/* Tercer bloque de contenido */}
        <div
          className="flex flex-col md:flex-row items-center justify-center"
          data-aos="fade-right"
        >
          <div
            className="md:ml-2.5 lg:ml-2.5 xl:ml-2.5 2xl:ml-2.5  relative mb-4 md:mb-0 hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out"
            onClick={(e) => handleImageClick3(e)}
          >
            <div className="image-container">
              <img
                src={images3[currentIndex3]}
                alt={`Imagen ${currentIndex3 + 1}`}
                className={`image ${
                  isVisible3 ? 'image-visible' : 'image-hidden'
                }`}
                onLoad={handleImageLoad3}
              />
            </div>
          </div>
          <div className="flex flex-col justify-center text-center md:text-left md:ml-8 font-[sans-serif]">
            <h2 className="text-2xl font-extrabold">Añelo, Nequen </h2>
            <br />
            <div className="text-lg">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium reprehenderit id dicta veniam aliquam.
              </p>
              <p>
                Facilis quaerat animi, aut amet dolores culpa. Ipsa quo
                explicabo illo earum dolore, temporibus sapiente totam.
              </p>
              <p>Otro párrafo de texto con un estilo diferente.</p>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
      </div>
    </div>
  );
};

export default ResponsiveImageTextComponent;
