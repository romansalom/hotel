import React, { useState, useEffect } from 'react';

const Faqs = () => {
  const [search, setSearch] = useState('');
  const [openIndex, setOpenIndex] = useState(-1); // Track which FAQ item is open
  const [filteredFaqItems, setFilteredFaqItems] = useState([]); // State for filtered items
  const [showAll, setShowAll] = useState(false); // State to toggle showing all FAQs
  const initialDisplayCount = 3; // Number of FAQs to display initially

  const faqItems = [
    {
      question: '¿Cuáles son los horarios de check-in y check-out?',
      answer:
        'El horario de check-in es a las 15:00 y el check-out es a las 12:00 del mediodía.',
    },
    {
      question: '¿Aceptan mascotas en el hotel?',
      answer:
        'Sí, aceptamos mascotas. Hay una tarifa adicional por noche y se aplican ciertas restricciones.',
    },
    {
      question: '¿Ofrecen servicio de transporte al aeropuerto?',
      answer:
        'Sí, tenemos servicio de transporte al aeropuerto disponible las 24 horas del día. Es necesario reservar con anticipación.',
    },
    {
      question: '¿El hotel cuenta con estacionamiento?',
      answer: 'Sí, ofrecemos estacionamiento gratuito para nuestros huéspedes.',
    },
    {
      question: '¿Se pueden hacer reservas sin tarjeta de crédito?',
      answer:
        'Para garantizar la reserva, se requiere una tarjeta de crédito válida al momento de reservar. Sin embargo, ofrecemos opciones de pago en efectivo a la llegada bajo ciertas condiciones.',
    },
    {
      question: '¿Tienen habitaciones para no fumadores?',
      answer:
        'Sí, tenemos habitaciones designadas para no fumadores. Por favor, solicite una al hacer su reserva.',
    },
    {
      question: '¿Cuáles son las opciones de restaurante dentro del hotel?',
      answer:
        'Ofrecemos un restaurante abierto para desayunos, almuerzos y cenas con una variedad de opciones gastronómicas.',
    },
    {
      question:
        '¿El hotel cuenta con acceso para personas con movilidad reducida?',
      answer:
        'Sí, todas nuestras áreas públicas y habitaciones están diseñadas para ser accesibles para personas con movilidad reducida.',
    },
    {
      question: '¿Ofrecen servicio de habitaciones las 24 horas?',
      answer:
        'Sí, tenemos servicio de habitaciones disponible las 24 horas para nuestros huéspedes.',
    },
    {
      question: '¿Cuál es la política de cancelación del hotel?',
      answer:
        'Nuestra política de cancelación varía según el tipo de tarifa y la temporada. Le recomendamos revisar los detalles al momento de hacer su reserva.',
    },
    {
      question: '¿El hotel tiene piscina y gimnasio?',
      answer:
        'Sí, contamos con piscina y gimnasio para uso exclusivo de nuestros huéspedes.',
    },
    {
      question: '¿Se ofrecen servicios de lavandería y planchado?',
      answer:
        'Sí, tenemos servicios de lavandería y planchado disponibles para nuestros huéspedes.',
    },
    {
      question: '¿Tienen programas especiales para familias con niños?',
      answer:
        'Sí, ofrecemos programas y actividades especiales para familias con niños, incluyendo áreas de juego y menús infantiles en nuestro restaurante.',
    },
    {
      question: '¿El hotel ofrece servicio de internet y Wi-Fi?',
      answer:
        'Sí, tenemos servicio de internet y Wi-Fi gratuito disponible en todas las áreas del hotel.',
    },
    {
      question: '¿El hotel organiza excursiones y tours?',
      answer:
        'Sí, ofrecemos servicios de organización de excursiones y tours locales. Consulte en recepción para más detalles y reservas.',
    },
    {
      question: '¿Tienen política de fumado en áreas comunes?',
      answer:
        'No, todas nuestras áreas comunes son libres de humo para garantizar el confort de todos nuestros huéspedes.',
    },
    {
      question: '¿Qué medidas de seguridad tienen implementadas?',
      answer:
        'Implementamos estrictos protocolos de seguridad y limpieza para asegurar la salud y bienestar de nuestros huéspedes y empleados.',
    },
    {
      question: '¿Ofrecen servicios de cambio de divisas?',
      answer:
        'Sí, tenemos servicio de cambio de divisas disponible en recepción.',
    },
    {
      question: '¿El hotel tiene salones para eventos y conferencias?',
      answer:
        'Sí, contamos con varios salones equipados para eventos y conferencias, con capacidad y servicios adaptables a sus necesidades.',
    },
    {
      question: '¿Cómo puedo hacer una solicitud especial durante mi estancia?',
      answer:
        'Puede hacer una solicitud especial contactando con nuestro equipo de atención al cliente antes de su llegada o durante su estancia.',
    },
  ];
  let totalPreguntas = faqItems.length;

  useEffect(() => {
    // Filtrar los elementos de FAQ basados en el texto de búsqueda
    const filteredItems = faqItems.filter((item) =>
      item.question
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .includes(
          search
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
        )
    );
    setFilteredFaqItems(filteredItems);
  }, [search]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const toggleOpen = (index) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const toggleShowLess = () => {
    setShowAll(false);
  };

  return (
    <div className="mx-auto max-w-6xl p-2 rounded">
      <div className="flex justify-center items-center flex-col mt-5">
        <h1 className="text-2xl font-bold text-black mb-5">
          Preguntas Frecuentes
        </h1>

        <div className="w-full max-w-xs relative text-gray-600">
          <input
            value={search}
            onChange={handleSearch}
            type="search"
            name="search"
            placeholder="Buscar"
            className="bg-white w-full h-6 px-5 rounded-full text-sm focus:outline-none"
          />
          <button
            type="submit"
            className="focus:outline-none absolute right-0 top-0 mt-3 mr-4"
          ></button>
        </div>
      </div>

      <div className="mt-6">
        <div className="flex flex-col">
          {filteredFaqItems
            .slice(0, showAll ? filteredFaqItems.length : initialDisplayCount)
            .map((item, index) => (
              <div key={index} className="p-4">
                <div className="item">
                  <a
                    href="#"
                    className="flex items-center justify-between"
                    onClick={(e) => {
                      e.preventDefault();
                      toggleOpen(index);
                    }}
                  >
                    <h4
                      className={
                        openIndex === index
                          ? 'text-[#F2D6A2] font-medium'
                          : 'font-medium'
                      }
                    >
                      {item.question}
                    </h4>
                    <svg
                      className={`w-5 h-5 text-gray-500 ${
                        openIndex === index ? 'transform rotate-180' : ''
                      }`}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </a>
                  {openIndex === index && (
                    <div className="mt-3 text-gray-600">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
        </div>

        {!showAll && filteredFaqItems.length > initialDisplayCount && (
          <div className="mt-4 flex justify-center">
            <button
              onClick={toggleShowAll}
              className="text-blue-500  py-2 px-4 rounded focus:outline-none"
            >
              Ver más ({totalPreguntas - 3})
            </button>
          </div>
        )}

        {showAll && (
          <div className="mt-4 flex justify-center">
            <button
              onClick={toggleShowLess}
              className="text-red-500 py-2 px-4 rounded focus:outline-none"
            >
              Ver menos preguntas
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Faqs;
