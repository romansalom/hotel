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

  return (
    <Navbar
      shouldHideOnScroll
      onMenuOpenChange={setIsMenuOpen}
      style={{ backgroundColor: 'white' }}
    >
      <NavbarContent className="flex justify-start items-center  w-full">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold " style={{ color: 'black' }}>
            MARCUS GERSHON HOTEL
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link
            style={{ color: 'black', textDecoration: 'none' }}
            className="hover-underline-animation"
          >
            Condo-Hotel
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link
            style={{ color: 'black', textDecoration: 'none' }}
            className="hover-underline-animation"
          >
            Proyectos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            style={{ color: 'black', textDecoration: 'none' }}
            className="hover-underline-animation"
          >
            Imagenes{' '}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="#"
            style={{ color: 'black', textDecoration: 'none' }}
            className="hover-underline-animation"
          >
            Inversion
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="nosotros"
            style={{ color: 'black', textDecoration: 'none' }}
            className="hover-underline-animation"
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
                color: 'black',
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
