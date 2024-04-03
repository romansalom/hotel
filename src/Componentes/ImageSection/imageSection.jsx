import React, { useState } from 'react';

export default function ImageSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalOpen(false);
  };

  return (
    <div id="imagenes" className="flex justify-center bg-gray mt-10 ">
      <div className="grid grid-cols-1 sm:grid-cols-2  ">
        <div className="relative">
          <img
            className="h-auto max-w-full cursor-pointer hover:filter hover:brightness-75 transition duration-300"
            src="foto6.jpg"
            alt="Imagen 1"
            onClick={() => openModal('foto6.jpg')}
          />
        </div>
        <div className="relative">
          <img
            className="h-auto max-w-full  cursor-pointer hover:filter hover:brightness-75 transition duration-300"
            src="foto6.jpg"
            alt="Imagen 2"
            onClick={() => openModal('foto6.jpg')}
          />
        </div>
        <div className="relative">
          <img
            className="h-auto max-w-full  cursor-pointer hover:filter hover:brightness-75 transition duration-300"
            src="foto5.jpeg"
            alt="Imagen 3"
            onClick={() => openModal('foto5.jpeg')}
          />
        </div>
        <div className="relative">
          <img
            className="h-auto max-w-full  cursor-pointer hover:filter hover:brightness-75 transition duration-300"
            src="foto5.jpeg"
            alt="Imagen 4"
            onClick={() => openModal('foto5.jpeg')}
          />
        </div>
        {/* Agrega más imágenes aquí con el mismo patrón */}
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
              className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-prev
            >
              {/* Previous button */}
              {/* Agrega el SVG del botón previo aquí */}
            </button>
            <button
              type="button"
              className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-next
            >
              {/* Next button */}
              {/* Agrega el SVG del botón siguiente aquí */}
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
