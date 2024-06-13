import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importa el archivo de estilos de AOS
import './proyecto.css';

const ResponsiveImageTextComponent = () => {
  const [images] = useState(['header.jpg', 'foto5.jpeg', 'foto6.jpg']);
  const [images2] = useState(['header.jpg', 'foto5.jpeg', 'foto6.jpg']);
  const [images3] = useState(['header.jpg', 'foto5.jpeg', 'foto6.jpg']);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);
  const [currentIndex3, setCurrentIndex3] = useState(0);

  const [isVisible, setIsVisible] = useState(true);
  const [isVisible2, setIsVisible2] = useState(true);
  const [isVisible3, setIsVisible3] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoading2, setIsLoading2] = useState(true);
  const [isLoading3, setIsLoading3] = useState(true);

  const [allImagesLoaded, setAllImagesLoaded] = useState(false); // State to track all images loaded

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: 'ease-in-out',
    });

    // Preload all images
    const preloadImages = (
      imagesArray,
      setIsLoadingFunction,
      setIsVisibleFunction
    ) => {
      let loadedCount = 0;
      imagesArray.forEach((src) => {
        const img = new window.Image();
        img.onload = () => {
          loadedCount++;
          if (loadedCount === imagesArray.length) {
            setIsLoadingFunction(false);
            setIsVisibleFunction(true);
            setAllImagesLoaded(true); // Update state when all images are loaded
          }
        };
        img.src = src;
      });
    };

    preloadImages(images, setIsLoading, setIsVisible);
    preloadImages(images2, setIsLoading2, setIsVisible2);
    preloadImages(images3, setIsLoading3, setIsVisible3);
  }, [images, images2, images3]);
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

  // Render content only when all images are loaded
  if (!allImagesLoaded) {
    return null; // Or render a loading indicator
  }
  return (
    <div className="contenedores">
      <div
        id="responsiveImageTextComponent"
        className="container mx-auto p-4 mb-8"
      >
        <br />
        <br />
        <br />
        {/* Primer bloque de contenido */}
        <div
          className="flex flex-col md:flex-row items-center justify-center"
          data-aos="fade-up"
        >
          <div className="md:ml-2.5 lg:ml-2.5 xl:ml-2.5 2xl:ml-2.5  relative mb-4 md:mb-0 hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out">
            <div
              className="image-container"
              onClick={(e) => handleImageClick(e)}
            >
              <img
                src={images[currentIndex]}
                alt={`Imagen ${currentIndex + 1}`}
                className={`image ${
                  isVisible ? 'image-visible' : 'image-hidden'
                }`}
                onLoad={handleImageLoad}
                style={{ display: isLoading ? 'none' : 'block' }}
              />
            </div>
          </div>
          <div className="md:ml-8 lg:ml-8 xl:ml-8 2xl:ml-8 font-[sans-serif]">
            <h2 className="text-2xl font-extrabold">Título del Texto</h2>
            <br />
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium reprehenderit id dicta veniam aliquam.
            </p>
            <p className="text-lg">
              Facilis quaerat animi, aut amet dolores culpa. Ipsa quo explicabo
              illo earum dolore, temporibus sapiente totam.
            </p>
            <p className="text-lg">
              Otro párrafo de texto con un estilo diferente.
            </p>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        {/* Segundo bloque de contenido */}
        <div
          className="flex flex-col md:flex-row items-center justify-center font-[sans-serif]"
          data-aos="fade-up"
        >
          <div className="md:ml-2 lg:ml-2 xl:ml-2 2xl:ml-2 relative mb-4 md:mb-0 md:order-2 lg:order-2 xl:order-2 2xl:order-2 hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out">
            <div
              className="image-container"
              onClick={(e) => handleImageClick2(e)}
            >
              <img
                src={images2[(currentIndex2 + 1) % images2.length]}
                alt={`Imagen ${currentIndex2 + 2}`}
                className={`image ${
                  isVisible2 ? 'image-visible' : 'image-hidden'
                }`}
                onLoad={handleImageLoad2}
                style={{ display: isLoading2 ? 'none' : 'block' }}
              />
            </div>
          </div>
          <div className="md:ml-8 lg:ml-8 xl:ml-8 2xl:ml-8 font-[sans-serif]">
            <h2 className="text-2xl font-extrabold">Título del Texto</h2>
            <br />
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium reprehenderit id dicta veniam aliquam.
            </p>
            <p className="text-lg">
              Facilis quaerat animi, aut amet dolores culpa. Ipsa quo explicabo
              illo earum dolore, temporibus sapiente totam.
            </p>
            <p className="text-lg">
              Otro párrafo de texto con un estilo diferente.
            </p>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        {/* Tercer bloque de contenido */}
        <div
          className="flex flex-col md:flex-row items-center justify-center"
          data-aos="fade-up"
        >
          <div className="md:ml-2.5 lg:ml-2.5 xl:ml-2.5 2xl:ml-2.5  relative mb-4 md:mb-0 hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out">
            <div
              className="image-container"
              onClick={(e) => handleImageClick3(e)}
            >
              <img
                src={images3[currentIndex3]}
                alt={`Imagen ${currentIndex3 + 1}`}
                className={`image ${
                  isVisible3 ? 'image-visible' : 'image-hidden'
                }`}
                onLoad={handleImageLoad3}
                style={{ display: isLoading3 ? 'none' : 'block' }}
              />
            </div>
          </div>
          <div className="md:ml-8 lg:ml-8 xl:ml-8 2xl:ml-8 font-[sans-serif]">
            <h2 className="text-2xl font-extrabold">Título del Texto</h2>
            <br />
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium reprehenderit id dicta veniam aliquam.
            </p>
            <p className="text-lg">
              Facilis quaerat animi, aut amet dolores culpa. Ipsa quo explicabo
              illo earum dolore, temporibus sapiente totam.
            </p>
            <p className="text-lg">
              Otro párrafo de texto con un estilo diferente.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveImageTextComponent;
