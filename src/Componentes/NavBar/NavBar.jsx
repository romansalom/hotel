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

  const handleScrollToComponent = () => {
    const component = document.getElementById('responsiveImageTextComponent');
    if (component) {
      component.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };
  const handleScrollToComponentinversion = () => {
    const component = document.getElementById('inversion');
    if (component) {
      setIsMenuOpen(false);
      component.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleScrollToComponentimagenes = () => {
    const component = document.getElementById('imagenes');
    if (component) {
      component.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };
  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      style={{ backgroundColor: 'black' }}
    >
      <NavbarContent className="flex justify-start items-center  w-full">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden "
          style={{ color: 'white', textDecoration: 'none' }}
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

      <NavbarMenu style={{ marginBottom: 0 }}>
        <NavbarMenuItem>
          <div className="flex flex-col items-center">
            <NavbarItem>
              <Link
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '1.2rem',
                  marginBottom: '0.5rem',
                }}
                className="font-bold text-center hover-underline-animation"
                onClick={handleScrollToComponent}
              >
                Condo-Hotel
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '1.2rem',
                  marginBottom: '0.5rem',
                }}
                className="font-bold text-center hover-underline-animation"
              >
                Proyectos
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '1.2rem',
                  marginBottom: '0.5rem',
                }}
                className="font-bold text-center hover-underline-animation"
                onClick={handleScrollToComponentimagenes}
              >
                Imagenes
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '1.2rem',
                  marginBottom: '0.5rem',
                }}
                className="font-bold text-center hover-underline-animation"
                onClick={handleScrollToComponentinversion}
              >
                Inverti
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link
                href="nosotros"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '1.2rem',
                  marginBottom: '0.5rem',
                }}
                className="font-bold text-center hover-underline-animation"
              >
                Contacto
              </Link>
            </NavbarItem>
          </div>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
