import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const NavItem = ({ to, children, isActive, onClose }) => {
  return (
    <Link
      to={to}
      onClick={onClose}
      className={`px-5 py-2 rounded-full transition-all duration-300 font-semibold
      ${isActive ? "bg-red-500 text-white shadow-md" : "text-gray-800 hover:text-red-500"}`}
    >
      {children}
    </Link>
  );
};

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

  return (
    <header className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-lg" : "bg-white/30 backdrop-blur-md"}`}>
      <nav>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <h1 className="text-2xl font-extrabold text-red-500 tracking-wide">Nutrición Vital</h1>

          {/* Desktop */}
          <div className="hidden md:flex space-x-6 items-center">
            <NavItem to="/" isActive={location.pathname === "/"} onClose={() => setIsOpen(false)}>
              <i className="fi fi-rr-home pr-1"></i> Inicio
            </NavItem>
            <NavItem to="/Productos" isActive={location.pathname === "/Productos"} onClose={() => setIsOpen(false)}>
              <i className="fi fi-rr-box-open pr-1"></i>
              Productos
            </NavItem>
            <NavItem to="/Sueroterapia" isActive={location.pathname === "/Sueroterapia"} onClose={() => setIsOpen(false)}>
              <i className="fi fi-rr-syringe pr-1"></i> Suero-terapia
            </NavItem>
            <NavItem to="/Contacto" isActive={location.pathname === "/Contacto"} onClose={() => setIsOpen(false)}>
              <i className="fi fi-rr-customer-service pr-1"></i>
              Contacto
            </NavItem>
          </div>

          {/* Mobile Button */}
          <button className="md:hidden text-2xl text-red-500 transition" onClick={() => setIsOpen(!isOpen)}>
            <i className={isOpen ? "fi fi-rr-cross" : "fi fi-rr-menu-burger"}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="flex flex-col items-center space-y-4 py-6 bg-white shadow-lg">
            <NavItem to="/" isActive={location.pathname === "/"} onClose={() => setIsOpen(false)}>
              <i className="fi fi-rr-home pr-1 animate-spin"></i>
              Inicio
            </NavItem>
            <NavItem to="/productos" isActive={location.pathname === "/productos"} onClose={() => setIsOpen(false)}>
              <i className="fi fi-rr-box-open pr-1"></i>
              Productos
            </NavItem>
            <NavItem to="/Sueroterapia" isActive={location.pathname === "/Sueroterapia"} onClose={() => setIsOpen(false)}>
              <i className="fi fi-rr-syringe pr-1"></i>
              Suero-terapia
            </NavItem>
            <NavItem to="/contacto" isActive={location.pathname === "/contacto"} onClose={() => setIsOpen(false)}>
              <i className="fi fi-rr-customer-service pr-1"></i>
              Contacto
            </NavItem>

            <Link to="/contacto" onClick={() => setIsOpen(false)} className="bg-red-500 text-white px-6 py-2 rounded-full">
              Agendar
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
