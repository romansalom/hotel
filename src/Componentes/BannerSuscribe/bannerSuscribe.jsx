import React from 'react';
import './banner.css';
function BannnerSuscribe({ onClose }) {
  return (
    <div className="banner flex items-center justify-center fixed inset-0 bg-gray-800 bg-opacity-50 z-50">
      <div className="relative flex flex-col items-center gap-y-3 p-5 bg-gradient-to-br from-[#404040] to-[#f2d6a2] text-white rounded-xl max-w-[408px] max-h-[374.4px] shadow-lg transform hover:scale-105 transition-transform duration-300">
        <div className="self-end">
          <button onClick={onClose} className="text-white">
            x
          </button>
        </div>
        <div className="text-center">
          <div className="font-semibold text-xl pb-2">
            Suscríbete para mantenerte informado
          </div>
          <p className="text-sm leading-6">
            Ingresa tu correo electrónico para recibir actualizaciones
            exclusivas y promociones especiales.
          </p>
        </div>
        <div className="w-full">
          <form method="post" action="" className="flex flex-col space-y-4">
            <div className="w-full">
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-transparent border-2 rounded-full py-2 px-4 text-sm leading-5 placeholder:text-white text-white"
                placeholder="E-mail "
              />
            </div>
            <button
              type="submit"
              className="w-full max-w-[160px] mx-auto rounded-full bg-white text-black py-2"
            >
              <span className="text-teal-900 font-semibold">Suscríbete </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BannnerSuscribe;
