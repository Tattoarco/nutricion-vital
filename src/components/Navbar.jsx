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

  // FIX: Cerrar menú mobile al cambiar de ruta
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-lg" : "bg-white/30 backdrop-blur-md"}`}>
      <nav>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo — FIX: h1/h2 → span para no romper jerarquía semántica */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10">
              <img src="/NutricionVital_icon.png" alt="Logo Nutrición Vital" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-extrabold text-red-500 leading-tight">Nutrición Vital</span>
              <span className="text-sm text-gray-600 leading-tight">Maria Jhanet Arco Aguilar</span>
            </div>
          </Link>

          {/* Desktop — FIX: rutas unificadas en minúscula + CTA "Agendar" visible */}
          <div className="hidden md:flex space-x-2 items-center">
            <NavItem to="/" isActive={location.pathname === "/"}>
              <i className="fi fi-rr-home pr-1"></i> Inicio
            </NavItem>
            <NavItem to="/productos" isActive={location.pathname === "/productos"}>
              <i className="fi fi-rr-box-open pr-1"></i> Productos
            </NavItem>
            <NavItem to="/sueroterapia" isActive={location.pathname === "/sueroterapia"}>
              <i className="fi fi-rr-syringe pr-1"></i> Suero-terapia
            </NavItem>
            <NavItem to="/contacto" isActive={location.pathname === "/contacto"}>
              <i className="fi fi-rr-customer-service pr-1"></i> Contacto
            </NavItem>

            {/* FIX: CTA "Agendar" ahora visible también en desktop */}
            <Link to="/contacto" className="ml-4 bg-red-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-600 hover:scale-105 transition-all duration-200 shadow-sm">
              Agendar cita
            </Link>
          </div>

          {/* Mobile — botón hamburguesa */}
          <button className="md:hidden text-2xl text-red-500 transition" onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}>
            <i className={isOpen ? "fi fi-rr-cross" : "fi fi-rr-menu-burger"}></i>
          </button>
        </div>

        {/* Mobile Menu — FIX: rutas unificadas en minúscula, sin animate-spin */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="flex flex-col items-center space-y-4 py-6 bg-white shadow-lg">
            <NavItem to="/" isActive={location.pathname === "/"} onClose={() => setIsOpen(false)}>
              {/* FIX: quitado animate-spin del ícono */}
              <i className="fi fi-rr-home pr-1"></i> Inicio
            </NavItem>
            <NavItem to="/productos" isActive={location.pathname === "/productos"} onClose={() => setIsOpen(false)}>
              <i className="fi fi-rr-box-open pr-1"></i> Productos
            </NavItem>
            <NavItem to="/sueroterapia" isActive={location.pathname === "/sueroterapia"} onClose={() => setIsOpen(false)}>
              <i className="fi fi-rr-syringe pr-1"></i> Suero-terapia
            </NavItem>
            <NavItem to="/contacto" isActive={location.pathname === "/contacto"} onClose={() => setIsOpen(false)}>
              <i className="fi fi-rr-customer-service pr-1"></i> Contacto
            </NavItem>

            <Link to="/contacto" onClick={() => setIsOpen(false)} className="bg-red-500 text-white px-8 py-2 rounded-full font-semibold hover:bg-red-600 transition">
              Agendar cita
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
