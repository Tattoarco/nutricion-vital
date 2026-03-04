import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavItem = ({ to, children }) => {
    const isActive = location.pathname === to;

    return (
      <Link
        to={to}
        onClick={() => setIsOpen(false)}
        className={`px-5 py-2 rounded-full transition-all duration-300 font-semibold
        ${isActive ? "bg-red-500 text-white shadow-md" : "text-gray-800 hover:text-red-500"}`}
      >
        {children}
      </Link>
    );
  };

  return (
    <header className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-lg" : "bg-white/30 backdrop-blur-md"}`}>
      <nav>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <h1 className="text-2xl font-extrabold text-red-500 tracking-wide">Nutrición Vital</h1>

          {/* Desktop */}
          <div className="hidden md:flex space-x-6 items-center">
            <NavItem to="/">Inicio</NavItem>
            <NavItem to="/Productos">Productos</NavItem>
            <NavItem to="/galeria">Galería</NavItem>
            <NavItem to="/contacto">Contacto</NavItem>

            {/* <Link to="/contacto" className="ml-4 bg-red-500 text-white px-5 py-2 rounded-full hover:scale-105 transition">
              Agendar
            </Link> */}
          </div>

          {/* Mobile Button */}
          <button className="md:hidden text-2xl text-red-500 transition" onClick={() => setIsOpen(!isOpen)}>
            <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="flex flex-col items-center space-y-4 py-6 bg-white shadow-lg">
            <NavItem to="/">Inicio</NavItem>
            <NavItem to="/productos">Productos</NavItem>
            <NavItem to="/galeria">Galería</NavItem>
            <NavItem to="/contacto">Contacto</NavItem>

            <Link to="/contacto" onClick={() => setIsOpen(false)} className="bg-red-500 text-white px-6 py-2 rounded-full">
              Agendar
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
