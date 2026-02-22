import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const NavItem = ({ to, children }) => {
    const isActive = location.pathname === to;

    return (
      <Link
        to={to}
        onClick={() => setIsOpen(false)}
        className={`px-5 py-2 rounded-full transition-all duration-300 font-semibold
        ${isActive ? "bg-red-500 text-white shadow-md" : "text-gray-800 hover:bg-yellow-300 hover:text-gray-900"}`}
      >
        {children}
      </Link>
    );
  };

  return (
    <header className="w-full absolute top-0 left-0 z-50">
      {/* Top Bar */}
      <div className="bg-orange-400 text-white text-sm">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-end space-x-6">
          <a href="#" className="hover:text-yellow-200 transition">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#" className="hover:text-yellow-200 transition">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="#" className="hover:text-yellow-200 transition">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-orange-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <h1 className="text-2xl font-extrabold text-red-600">Nutrición Vital</h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 ">
            <NavItem to="/">Inicio</NavItem>
            <NavItem to="/productos">Productos</NavItem>
            <NavItem to="/galeria">Galería</NavItem>
            <NavItem to="/contacto">Contacto</NavItem>
          </div>

          {/* Mobile Button */}
          <button className="md:hidden text-2xl text-red-500" onClick={() => setIsOpen(!isOpen)}>
            <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-orange-50 border-t border-orange-200">
            <div className="flex flex-col items-center space-y-4 py-6">
              <NavItem to="/">Inicio</NavItem>
              <NavItem to="/productos">Productos</NavItem>
              <NavItem to="/galeria">Galería</NavItem>
              <NavItem to="/contacto">Contacto</NavItem>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
