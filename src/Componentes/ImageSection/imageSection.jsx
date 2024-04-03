import React, { useState } from 'react';
import './imagen.css';
export default function ImageSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const images = ['foto6.jpg', 'foto6.jpg', 'foto5.jpeg', 'foto5.jpeg']; // Lista de imágenes

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalOpen(false);
  };

  const handleImageClick = (imageSrc) => {
    openModal(imageSrc);
  };

  const handlePrevClick = () => {
    const currentIndex = images.indexOf(selectedImage);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex]);
  };

  const handleNextClick = () => {
    const currentIndex = images.indexOf(selectedImage);
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
  };

  return (
    <div
      id="imagenes"
      className="contenedor-zoom flex justify-center bg-gray  "
    >
      <div className="grid grid-cols-1 sm:grid-cols-2">
        {images.map((image, index) => (
          <div
            className="relative"
            key={index}
            onClick={() => handleImageClick(image)}
          >
            <img
              className="h-auto max-w-full cursor-pointer hover:filter hover:brightness-75 transition duration-300"
              src={image}
              alt={`Imagen ${index + 1}`}
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
          <div
            id="gallery"
            className="relative w-full max-w-screen-xl mx-auto"
            data-carousel="slide"
          >
            {/* Carousel wrapper */}
            <div className="relative h-96 md:h-5/6 overflow-hidden rounded-lg">
              {/* Render the selected image */}
              <div className="flex items-center justify-center h-full">
                <img src={selectedImage} alt="" className="h-auto max-w-full" />
              </div>
            </div>
            {/* Slider controls */}
            <button
              type="button"
              className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none text-white"
              data-carousel-prev
              onClick={handlePrevClick}
            >
              {/* Previous button */}
              {/* Agrega el SVG del botón previo aquí */}
              &lt;
            </button>
            <button
              type="button"
              className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none text-white"
              data-carousel-next
              onClick={handleNextClick}
            >
              {/* Next button */}
              {/* Agrega el SVG del botón siguiente aquí */}
              &gt;
            </button>
          </div>
          {/* Botón de cierre del modal */}
          <button
            className="absolute top-4 right-4 z-50 text-white"
            onClick={closeModal}
          >
            {/* Agrega el icono de cierre aquí */}X
          </button>
        </div>
      )}
    </div>
  );
}
