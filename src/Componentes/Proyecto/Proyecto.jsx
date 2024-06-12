import React from 'react';
import { Image } from '@nextui-org/react';
import './proyecto.css';
const ResponsiveImageTextComponent = () => {
  return (
    <div className="contenedores">
      <div
        id="responsiveImageTextComponent"
        className="container mx-auto p-4 mb-8"
      >
        {' '}
        <br></br> <br></br> <br></br>
        <div className="flex flex-col md:flex-row items-center justify-center">
          {/* Imagen más grande y más cerca del texto en pantallas grandes */}
          <div className="md:ml-2.5 lg:ml-2.5 xl:ml-2.5 2xl:ml-2.5 relative mb-4 md:mb-0 hover:scale-10 hover:-translate-y-2 hover:shadow-2xl transition duration-300 ease-in-out">
            <Image
              src="header.jpg"
              className="w-full h-full md:w-full lg:w-full xl:w-full 2xl:w-full"
              layout="fill"
              objectFit="cover"
            />
          </div>

          {/* Texto debajo de la imagen */}
          <div className="md:ml-8 lg:ml-8 xl:ml-8 2xl:ml-8 font-[sans-serif]  ">
            <h2 className="text-2xl font-extrabold  ">Título del Texto</h2>
            <br></br>
            <p className="text-lg   ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium reprehenderit id dicta veniam aliquam.
            </p>
            <p className="text-lg  ">
              Facilis quaerat animi, aut amet dolores culpa. Ipsa quo explicabo
              illo earum dolore, temporibus sapiente totam.
            </p>
            <p className="text-lg ">
              Otro párrafo de texto con un estilo diferente.
            </p>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="flex flex-col md:flex-row items-center justify-center font-[sans-serif] ">
          {/* Imagen más grande y más cerca del texto en pantallas grandes */}
          <div className="md:ml-2 lg:ml-2 xl:ml-2 2xl:ml-2 relative mb-4 md:mb-0 md:order-2 lg:order-2 xl:order-2 2xl:order-2  hover:scale-10 hover:-translate-y-2 hover:shadow-2xl transition duration-300 ease-in-out">
            <Image
              src="foto5.jpeg"
              className="w-full h-full md:w-full lg:w-full xl:w-full 2xl:w-full"
              layout="fill"
              objectFit="cover"
            />
          </div>
          {/* Texto debajo de la imagen */}
          <div className="md:ml-8 lg:ml-8 xl:ml-8 2xl:ml-8 font-[sans-serif] ">
            <h2 className="text-2xl font-extrabold  ">Título del Texto</h2>
            <br></br>
            <p className="text-lg   ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium reprehenderit id dicta veniam aliquam.
            </p>
            <p className="text-lg  ">
              Facilis quaerat animi, aut amet dolores culpa. Ipsa quo explicabo
              illo earum dolore, temporibus sapiente totam.
            </p>
            <p className="text-lg ">
              Otro párrafo de texto con un estilo diferente.
            </p>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="flex flex-col md:flex-row items-center justify-center font-[sans-serif] ">
          {/* Imagen más grande y más cerca del texto en pantallas grandes */}
          <div className="md:ml-2.5 lg:ml-2.5 xl:ml-2.5 2xl:ml-2.5 relative mb-4 md:mb-0 hover:scale-10 hover:-translate-y-2 hover:shadow-2xl transition duration-300 ease-in-out">
            <Image
              src="foto6.jpg"
              className="w-full h-full md:w-full lg:w-full xl:w-full 2xl:w-full"
              layout="fill"
              objectFit="cover"
            />
          </div>

          {/* Texto debajo de la imagen */}
          <div className="md:ml-8 lg:ml-8 xl:ml-8 2xl:ml-8">
            <h2 className="text-2xl font-extrabold  ">Título del Texto</h2>
            <br></br>
            <p className="text-lg  ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium reprehenderit id dicta veniam aliquam.
            </p>
            <p className="text-lg  ">
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
