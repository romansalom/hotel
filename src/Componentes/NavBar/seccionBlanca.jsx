import React, { useState } from 'react';
import './navBAR.css';
const SeccionBlanca = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleOpen = () => {
    setMenuOpen(true);
  };

  const handleToggleClose = () => {
    setMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <header className="flex shadow-md py-4 px-4 sm:px-10 bg-gradient-to-r from-black via-black  to-orange-00 font-sans min-h-[75px] tracking-wide relative z-50"></header>
  );
};

export default SeccionBlanca;
