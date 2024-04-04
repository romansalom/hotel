import React from 'react';
import './inversion.css'; // Asegúrate de importar tu archivo CSS aquí
import { Input, Textarea } from '@nextui-org/react';

function Inversion() {
  return (
    <div
      id="inversion"
      className="mt-5 flex flex-wrap justify-center items-stretch  bg-dark-gray"
    >
      {/* Primer componente */}
      <div className="w-full sm:w-1/2 relative flex flex-col justify-center items-center  bg-dark-grays p-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62093.38941661309!2d-58.27790821623154!3d-35.122144981444315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2c90e5d5eea8b%3A0x7224a0457f7205f7!2sVaca%20muerta%20PX!5e0!3m2!1ses-419!2sar!4v1712255687784!5m2!1ses-419!2sar"
          style={{ width: '100%', height: '100%', border: '0' }}
          allowFullScreen=""
          title="iframwe"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Segundo componente */}
      <div className="w-full sm:w-1/2 flex flex-col justify-center items-center  bg-dark-gray p-4">
        <h2 className="text-3xl lg:text-4xl text-white font-bold mt-10">
          ¿Querés saber más?
        </h2>
        <p className="text-lg lg:text-l text-white  font-normal nowrap w-   ">
          Estamos listos para asesorarte
        </p>
        <form className="w-full max-w-lg mt-8">
          <div className="flex flex-wrap -mx-3 ">
            <div className="w-full sm:w-1/2 px-3 flex flex-col">
              <Input
                className="appearance-none bg-white-200 text-gray-700  py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Nombre"
              />
            </div>
            <div className="w-full sm:w-1/2 px-3 flex flex-col">
              <Input
                className="appearance-none bg-white-200  text-gray-700  py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                id="grid-last-name"
                type="text"
                placeholder="Apellido"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 ">
            <div className="w-full sm:w-1/2 px-3 flex flex-col">
              <Input
                className="appearance-none bg-white-200  text-gray-700  py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                id="grid-last-name"
                type="text"
                placeholder="Telefono"
              />
            </div>
            <div className="w-full sm:w-1/2 px-3 flex flex-col">
              <Input
                className="appearance-none bg-white-200  text-gray-700  py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                id="grid-last-name"
                type="text"
                placeholder="Correo Electronico"
              />
            </div>
            <div className="w-full px-3 flex flex-col">
              <Textarea
                className="appearance-none bg-white-200  text-gray-700 py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                id="grid-message"
                placeholder="Mensaje"
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
