import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from '@nextui-org/react';
import './navBAR.css';
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    'Condo-Hotel',
    'Proyecto',
    'Imagenes',
    'Inversion',
    'Inversion',
    'Contacto',
  ];
  const handleScrollToComponent = () => {
    const component = document.getElementById('responsiveImageTextComponent');
    if (component) {
      component.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleScrollToComponentinversion = () => {
    const component = document.getElementById('inversion');
    if (component) {
      component.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleScrollToComponentimagenes = () => {
    const component = document.getElementById('imagenes');
    if (component) {
      component.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <Navbar
      shouldHideOnScroll
      onMenuOpenChange={setIsMenuOpen}
      style={{ backgroundColor: 'black' }}
    >
      <NavbarContent className="flex justify-start items-center  w-full">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
        <NavbarBrand className="flex justify-center w-full">
          <p className="font-bold text-center" style={{ color: 'white' }}>
            MARCUS GERSHON HOTEL
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link
            style={{ color: 'white', textDecoration: 'none' }}
            className=" font-bold text-center hover-underline-animation"
            onClick={handleScrollToComponent}
          >
            <button onClick={handleScrollToComponent}>Condo-Hotel</button>
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link
            style={{ color: 'white', textDecoration: 'none' }}
            className=" font-bold text-center hover-underline-animation"
          >
            Proyectos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            style={{ color: 'white', textDecoration: 'none' }}
            className="font-bold text-center hover-underline-animation"
          >
            <button onClick={handleScrollToComponentimagenes}>Imagenes</button>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            style={{ color: 'white', textDecoration: 'none' }}
            className=" font-bold text-center hover-underline-animation"
          >
            <button onClick={handleScrollToComponentinversion}>Inverti</button>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="nosotros"
            style={{ color: 'white', textDecoration: 'none' }}
            className=" font-bold text-center hover-underline-animation"
          >
            Contacto
          </Link>
        </NavbarItem>
        {/* Otros elementos de NavbarContent */}
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              style={{
                color: 'white',
              }}
              className="w-full"
              href="#"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
