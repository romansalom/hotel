import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './inversion.css'; // Asegúrate de importar tu archivo CSS aquí
import VideoBackground from '../BannerVideo/bannerVideo';

function Contacto() {
  const [isSending, setIsSending] = useState(false); // Estado para indicar si se está enviando el formulario
  const [errorMessage, setErrorMessage] = useState(''); // Estado para mensaje de error
  const [successMessage, setSuccessMessage] = useState(''); // Estado para mensaje de éxito

  function sendEmail(e) {
    e.preventDefault();

    // Validar campos vacíos
    const { from_name, from_mobile, from_email, mensaje } = e.target.elements;
    if (
      !from_name.value ||
      !from_mobile.value ||
      !from_email.value ||
      !mensaje.value
    ) {
      setErrorMessage('Todos los campos son obligatorios');
      return;
    }

    // Validar número de teléfono usando regex
    const telefonoRegex =
      /^\+?(\d{1,3})?[-. ]?\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;
    if (!telefonoRegex.test(from_mobile.value)) {
      setErrorMessage('Por favor, introduce un número de teléfono válido');
      return;
    }

    setIsSending(true); // Establece el estado de carga a true
    setErrorMessage('');
    setSuccessMessage('');

    emailjs
      .sendForm(
        'servicioContacto',
        'template_f6650pa',
        e.target,
        'PxlqQfCYGvW0q_OMs'
      )
      .then((result) => {
        console.log(result.text);
        setSuccessMessage('Mensaje enviado correctamente');
      })
      .catch((error) => {
        console.error('Error al enviar el mensaje:', error);
        setErrorMessage('Error al enviar el mensaje');
      })
      .finally(() => {
        setIsSending(false); // Establece el estado de carga de nuevo a false después del envío
        e.target.reset(); // Reinicia el formulario
      });
  }

  // Función para limpiar el mensaje de error cuando se edita un campo específico
  function handleInputChange() {
    if (errorMessage) {
      setErrorMessage('');
    }
  }

  return (
    <div
      id="contacto"
      className="contenedores1-zoom playfair-display-letras bg-white"
    >
      <br></br>
      <div className="grid md:grid-cols-2 mt-15 gap-16 items-center relative overflow-hidden p-10 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-3xl max-w-6xl mx-auto  text-[#333] my-6 font-[sans-serif] before:absolute before:right-0 before:w-[300px] before:bg-[#e7ebda] before:h-full max-md:before:hidden">
        <div>
          <h2 className="hidden lg:block lg:text-5xl md:text-5xl text-3xl font-extrabold text-[#404040] mb-4 lg:!leading-[55px] sm:text-4xl sm:leading-tight lg:mt-[-20px] md:mt-[-10px]">
            Contactate
          </h2>

          {/* En móviles, muestra el video */}
          <div className="lg:hidden">
            <VideoBackground />
          </div>
          <p className="text-sm text-black-400 playfair-display-letras  mt-3">
            ¿Tienes una consulta específica o estás buscando explorar nuevas
            oportunidades? Nuestro equipo experimentado está listo para
            colaborar contigo.
          </p>
          <form onSubmit={sendEmail}>
            <div className="space-y-4 mt-8">
              <input
                type="text"
                name="from_name"
                placeholder="Nombre completo"
                className="px-2 playfair-display-letras py-3 bg-white w-full text-sm border-b-2 focus:border-[#f2d6a2] outline-none"
                onChange={handleInputChange}
              />

              <input
                type="tel"
                name="from_mobile"
                placeholder="Teléfono"
                className="px-2 py-3 playfair-display-letras bg-white text-black w-full text-sm border-b-2 focus:border-[#f2d6a2] outline-none"
                onChange={handleInputChange}
              />

              <input
                type="email"
                name="from_email"
                placeholder="Email"
                className="px-2 py-3 bg-white playfair-display-letras text-black w-full text-sm border-b-2 focus:border-[#f2d6a2] outline-none"
                onChange={handleInputChange}
              />

              <textarea
                name="mensaje"
                placeholder="Escribe tu mensaje"
                className="px-2 pt-3 bg-white playfair-display-letras text-black w-full text-sm border-b-2 focus:border-[#f2d6a2] outline-none"
                onChange={handleInputChange}
              ></textarea>
            </div>
            {errorMessage && (
              <p className="text-red-500 playfair-display-letras text-sm mt-2">
                {errorMessage}
              </p>
            )}
            {successMessage && (
              <p className="text-green-500  playfair-display-letras text-sm mt-2">
                {successMessage}
              </p>
            )}
            <button
              type="submit"
              className={`mt-8 playfair-display-letras flex items-center justify-center text-sm w-full rounded px-4 py-2.5 font-semibold bg-[#333] text-white hover:bg-[#222] ${
                isSending ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={isSending}
            >
              {isSending ? (
                <svg
                  className="animate-spin h-5 w-5 mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V2.5a.5.5 0 10-1 0V4a7 7 0 00-7 7h1.5a.5.5 0 000-1H2.5a.5.5 0 00-.5.5v1.5a.5.5 0 001 0V12zm10 0a8 8 0 01-8 8V21.5a.5.5 0 101 0V20a7 7 0 007-7h-1.5a.5.5 0 000 1h1.5a.5.5 0 00.5-.5v-1.5a.5.5 0 10-1 0V12z"
                  ></path>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  fill="#fff"
                  className="mr-2"
                  viewBox="0 0 548.244 548.244"
                >
                  <path
                    fillRule="evenodd"
                    d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                    clipRule="evenodd"
                    data-original="#000000"
                  />
                </svg>
              )}
              {isSending ? 'Enviando...' : 'Enviar mensaje'}
            </button>
          </form>
        </div>
        <div className="z-10 relative h-full max-md:min-h-[350px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62093.38941661309!2d-58.27790821623154!3d-35.122144981444315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2c90e5d5eea8b%3A0x7224a0457f7205f7!2sVaca%20muerta%20PX!5e0!3m2!1ses-419!2sar!4v1712255687784!5m2!1ses-419!2sar"
            className="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
