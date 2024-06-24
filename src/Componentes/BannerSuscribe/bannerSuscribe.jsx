import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './banner.css';

function BannnerSuscribe({ onClose }) {
  const [isLoading, setIsLoading] = useState(false); // State for loading indicator

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading state

    const USER_ID = 'xKpm3cse7rdoAfbV1'; // Your USER_ID from EmailJS Dashboard
    const SERVICE_ID = 'hotelidservice45454545'; // Your SERVICE_ID from EmailJS Dashboard
    const TEMPLATE_ID = 'template_srm4iz7'; // Your TEMPLATE_ID from EmailJS Dashboard
    const userEmail = e.target.email.value;

    // Prepare the template parameters
    const templateParams = {
      from_email: userEmail, // This is where the user's email is passed
      // You can add more parameters if your EmailJS template requires them
    };

    // Send email using emailjs.sendForm
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        // Show success message to the user if desired
      })
      .catch((error) => {
        console.error('Failed to send email:', error.text);
        // Show error message to the user if desired
      })
      .finally(() => {
        setIsLoading(false); // Turn off loading state
        onClose(); // Close the banner after sending the email
      });
  };

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
          <form onSubmit={sendEmail} className="flex flex-col space-y-4">
            <div className="w-full">
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-transparent border-2 rounded-full py-2 px-4 text-sm leading-5 placeholder:text-white text-white"
                placeholder="E-mail"
              />
            </div>
            <button
              type="submit"
              className="w-full max-w-[160px] mx-auto rounded-full bg-white text-black py-2"
              disabled={isLoading} // Disable button when loading
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
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
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.001 8.001 0 0120.709 15H19v-2h5v5h-2v-1.709A8.001 8.001 0 016 17.291z"
                    ></path>
                  </svg>
                  Enviando...
                </span>
              ) : (
                <span className="text-teal-900 font-semibold">Suscríbete</span>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BannnerSuscribe;
