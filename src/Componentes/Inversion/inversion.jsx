import React from 'react';
import './inversion.css'; // Asegúrate de importar tu archivo CSS aquí
import { Input, Textarea } from '@nextui-org/react';
import VideoBackground from '../BannerVideo/bannerVideo';

function Contacto() {
  return (
    <div id="contacto" className="contenedores1-zoom">
      <br></br>
      <br></br>
      <div class="grid md:grid-cols-2 gap-16 items-center relative overflow-hidden p-10 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-3xl max-w-6xl mx-auto bg-white text-[#333] my-6 font-[sans-serif] before:absolute before:right-0 before:w-[300px] before:bg-orange-600 before:h-full max-md:before:hidden">
        <div>
          <VideoBackground></VideoBackground>

          <p class="text-sm text-gray-400 mt-3">
            ¿Tienes una consulta específica o estás buscando explorar nuevas
            oportunidades? Nuestro equipo experimentado está listo para
            colaborar contigo.
          </p>
          <form>
            <div class="space-y-4 mt-8">
              <input
                type="text"
                placeholder="Full Name"
                class="px-2 py-3 bg-white w-full text-sm border-b-2 focus:border-[#333] outline-none"
              />

              <input
                type="number"
                placeholder="Phone No."
                class="px-2 py-3 bg-white text-black w-full text-sm border-b-2 focus:border-[#333] outline-none"
              />

              <input
                type="email"
                placeholder="Email"
                class="px-2 py-3 bg-white text-black w-full text-sm border-b-2 focus:border-[#333] outline-none"
              />

              <textarea
                placeholder="Write Message"
                class="px-2 pt-3 bg-white text-black w-full text-sm border-b-2 focus:border-[#333] outline-none"
              ></textarea>
            </div>
            <button
              type="button"
              class="mt-8 flex items-center justify-center text-sm w-full rounded px-4 py-2.5 font-semibold bg-[#333] text-white hover:bg-[#222]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                height="16px"
                fill="#fff"
                class="mr-2"
                viewBox="0 0 548.244 548.244"
              >
                <path
                  fill-rule="evenodd"
                  d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                  clip-rule="evenodd"
                  data-original="#000000"
                />
              </svg>
              Enviar mensaje
            </button>
          </form>
        </div>
        <div class="z-10 relative h-full max-md:min-h-[350px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62093.38941661309!2d-58.27790821623154!3d-35.122144981444315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2c90e5d5eea8b%3A0x7224a0457f7205f7!2sVaca%20muerta%20PX!5e0!3m2!1ses-419!2sar!4v1712255687784!5m2!1ses-419!2sar"
            class="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <br></br>
      <br></br>
    </div>
  );
}

export default Contacto;
