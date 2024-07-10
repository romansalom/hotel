import { useState, useEffect } from 'react';

const Faqs = () => {
  const [search, setSearch] = useState('');
  const [openIndex, setOpenIndex] = useState(-1); // Track which FAQ item is open
  const [filteredFaqItems, setFilteredFaqItems] = useState([]); // State for filtered items
  const [showAll, setShowAll] = useState(false); // State to toggle showing all FAQs
  const initialDisplayCount = 4; // Number of FAQs to display initially

  const faqItems = [
    {
      question: '¿Qué servicios ofrece la empresa?',
      answer:
        'Nos encargamos de equipar completamente su departamento, desde muebles y electrodomésticos hasta decoración y utensilios de cocina',
    },
    {
      question: '¿Qué tipo de departamentos equipan?',
      answer:
        'Equipamos todo tipo de departamentos, ya sean estudios, departamentos de una o varias habitaciones, o lofts.',
    },
    {
      question: '¿Cómo funciona el proceso de equipamiento?',
      answer:
        'Nuestro proceso es sencillo: nos reunimos con usted para entender sus necesidades y preferencias, le presentamos un plan de diseño y, una vez aprobado, nos encargamos de todo el equipamiento.',
    },
    {
      question: '¿Cuánto tiempo tarda el proceso de equipamiento?',
      answer:
        ' El tiempo varía según el tamaño y las especificaciones del departamento, pero generalmente completamos el equipamiento en un plazo de 2 a 4 semanas.',
    },
    {
      question: '¿Puedo personalizar los muebles y la decoración?',
      answer:
        'Si, se pueden quitar articulos de las lineas prearmadas si no le gustan y quedarse solo con los articulos deseados',
    },
    {
      question: '¿Ofrecen paquetes prediseñados?',
      answer:
        ' Sí, ofrecemos varios paquetes prediseñados con nuestro equipo de interiorismo para combinar estilo y practicidad.',
    },
    {
      question:
        '¿Qué sucede si no estoy satisfecho con algún elemento del equipamiento?',
      answer:
        'Nuestro objetivo es su satisfacción total. Si hay algo con lo que no está contento, trabajaremos con usted para solucionarlo lo más rápido posible.',
    },
    {
      question: '¿Cuál es el costo de sus servicios?',
      answer:
        'El costo varía según el tamaño del departamento y el nivel de personalización requerido. Ofrecemos cotizaciones detalladas después de la consulta inicial.',
    },
    {
      question: '¿Ofrecen financiamiento o planes de pago?',
      answer:
        'Sí, tenemos opciones de financiamiento y planes de pago para facilitarle el proceso.',
    },
    {
      question: '¿Qué incluye exactamente el servicio de equipamiento?',
      answer:
        'Nuestro servicio incluye muebles, electrodomésticos, utensilios de cocina, ropa de cama, toallas, artículos de decoración, y más. Todo lo que necesita para mudarse con la valija',
    },
    {
      question: '¿Cómo puedo solicitar una cotización?',
      answer:
        ' Puede solicitar una cotización a través de nuestro formulario en línea, por teléfono, o concertando una cita para una consulta gratuita.',
    },
    {
      question:
        '¿Tienen algún tipo de garantía sobre los productos y servicios?',
      answer:
        'Sí, ofrecemos garantías sobre todos los productos y servicios proporcionados. La duración y términos de la garantía pueden variar según el artículo y el proveedor.',
    },
    {
      question: '¿Puedo ver ejemplos de departamentos equipados por ustedes?',
      answer:
        ' Sí, en nuestra página web tenemos una galería de fotos y testimonios de clientes satisfechos.',
    },
    {
      question: '¿Ofrecen mantenimiento y servicios post-venta?',
      answer:
        'Sí, ofrecemos servicios de mantenimiento y apoyo post-venta para asegurar que su departamento se mantenga en perfectas condiciones.',
    },
    {
      question: '¿Puedo contratar solo algunos de sus servicios?',
      answer:
        'Sí, ofrecemos la flexibilidad de contratar servicios individuales según sus necesidades, ya sea solo muebles, decoración o electrodomésticos.',
    },
    {
      question: '¿Cómo se maneja la entrega e instalación?',
      answer:
        'Nos encargamos de todo el proceso de entrega e instalación, asegurándonos de que su departamento esté completamente listo para habitar.',
    },
    {
      question: '¿Tienen certificaciones o acreditaciones?',
      answer:
        'Sí, contamos con diversas certificaciones y acreditaciones que avalan la calidad de nuestros servicios y productos.',
    },
    {
      question:
        '¿Qué medidas de seguridad y salud toman durante el proceso de equipamiento?',
      answer:
        'Seguimos todas las normativas y recomendaciones en materia de seguridad y salud para garantizar un entorno seguro durante la entrega e instalación.',
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
    <div className="playfair-display-letras mx-auto max-w-6xl p-2 rounded bg-[#ffffff]">
      <div className="flex justify-center items-center flex-col mt-5">
        <h2 className="lg:text-4xl md:text-4xl text-3xl font-extrabold mb-4 lg:!leading-[55px] lg:mt-10 sm:text-4xl sm:leading-tight text-black">
          Preguntas frecuentes
        </h2>
        <div className="w-full max-w-xs relative text-gray-7600">
          <input
            value={search}
            onChange={handleSearch}
            type="search"
            name="search"
            placeholder="Buscar"
            className="bg-[#d3d3cb] w-full h-8 px-6 rounded-full text-sm focus:outline-none lg:mb-5"
          />
          <button
            type="submit"
            className="focus:outline-none absolute right-0 top-0 mt-3 mr-4"
          ></button>
        </div>
      </div>

      <div className="mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {filteredFaqItems
            .slice(0, showAll ? filteredFaqItems.length : initialDisplayCount)
            .map((item, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-4">
                <a
                  href="#"
                  className="flex items-center justify-between text-[#d3d3cb]"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleOpen(index);
                  }}
                >
                  <h4
                    className={
                      openIndex === index
                        ? 'text-[#404040] font-medium'
                        : 'text-black font-medium'
                    }
                  >
                    {item.question}
                  </h4>
                  <svg
                    className={`w-5 h-5 text-[#d3d3cb] ${
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
                  <div className="mt-3 text-black">
                    <p>{item.answer}</p>
                  </div>
                )}
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
