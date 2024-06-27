import React, { useEffect } from 'react';
import './galeria.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function GaleriaImagenes() {
  useEffect(() => {
    AOS.init({ once: false }); // Inicializa AOS una vez
  }, []);

  return (
    <div>
      <section className="fondex text-gray-600 body-font bg-[#404040] ">
        <br />
        <div
          className="container px-5 py-24 mx-auto flex flex-wrap"
          data-aos="fade-up"
        >
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-full md:w-1/2">
              <div className="md:p-2 p-1 w-1/2" data-aos="fade-right">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="https://dummyimage.com/500x300"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2" data-aos="fade-left">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="https://dummyimage.com/501x301"
                />
              </div>
              <div className="md:p-2 p-1 w-full" data-aos="fade-up">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"
                  src="https://dummyimage.com/600x360"
                />
              </div>
            </div>
            <div className="flex flex-wrap w-full md:w-1/2 mt-4 md:mt-0">
              <div className="md:p-2 p-1 w-full" data-aos="fade-up">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"
                  src="https://dummyimage.com/601x361"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2" data-aos="fade-right">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="https://dummyimage.com/502x302"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2" data-aos="fade-left">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="https://dummyimage.com/503x303"
                />
              </div>
            </div>
          </div>
        </div>
        <br />
      </section>
    </div>
  );
}

export default GaleriaImagenes;
