import React from 'react';
import './inversion.css'; // Asegúrate de importar tu archivo CSS aquí
import { Image } from '@nextui-org/react';

function Inversion() {
  return (
    <div
      id="inversion"
      className="mt-5 flex flex-wrap justify-center items-center"
    >
      {/* Primer componente */}
      <div className="w-full md:w-1/2 relative flex flex-col justify-center items-center bg-dark-gray p-4">
        <br></br>
        <br></br>
        <div className="md:ml-8 lg:ml-8 xl:ml-8 2xl:ml-8 text-center ">
          {' '}
          {/* Reducir margen superior */}
          <h2 className="text-3xl lg:text-4xl text-white font-bold mb-5">
            {' '}
            {/* Reducir margen inferior */}
            Inverti en Vaca Muerta
          </h2>
          <p className="text-lg lg:text-l text-white  font-normal nowrap w-   ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            Facilis quaerat animi, aut amet dolores culpa. Ipsa quo explicabo
            illo earum dolore, temporibus sapiente totam. Otro párrafo de texto
            con un estilo diferente.
          </p>
        </div>
        <div className="w-full flex justify-center ">
          {' '}
          {/* Ajuste de margen inferior */}{' '}
          <Image
            src="46413055_transparent-2.png"
            alt="Logo"
            className="w-64 md:w-72 lg:w-80 xl:w-96 2xl:w-108" // Aumentar tamaño del logo
          />
        </div>
      </div>

      {/* Segundo componente */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-white p-4">
        <h2 className="text-3xl lg:text-4xl text-black font-bold mt-10">
          {' '}
          {/* Reducir margen inferior */}
          Dejanos Tu Mensjae{' '}
        </h2>
        <br></br>
        <form className="w-full max-w-lg ">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                Nombre
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Nombre"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Apellido
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                id="grid-last-name"
                type="text"
                placeholder="Apellido"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Telefono
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                id="grid-last-name"
                type="text"
                placeholder="Telefono"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Telefono
              </label>
              <textarea
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                id="grid-last-name"
                type="text"
                placeholder="Mnesaje"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3 text-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                Enviar
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Espacio para el logo */}
    </div>
  );
}

export default Inversion;
