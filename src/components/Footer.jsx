export default function Footer() {
  return (
    <footer className="bg-[#fff6e8] border-t border-orange-300">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Marca */}
        <div>
          <h2 className="text-2xl font-bold text-red-500">Nutrición Vital</h2>
          <p className="mt-4 text-sm text-gray-700 leading-relaxed">Transformamos tu bienestar a través de nutrición celular, hábitos saludables y productos naturales de alta calidad.</p>

          <div className="flex gap-4 mt-6 text-xl text-red-500">
            <a href="https://www.instagram.com/serumvital76?igsh=aTNmZnhpNnhrZTl1" className="hover:text-orange-500 transition">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-orange-500 transition">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="#" className="hover:text-orange-500 transition">
              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </div>
        </div>

        {/* Servicios */}
        <div>
          <h3 className="text-lg font-semibold text-orange-500 mb-4">Servicios</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>Asesorías nutricionales</li>
            <li>Planes personalizados</li>
            <li>Suplementación celular</li>
            <li>Educación en hábitos saludables</li>
          </ul>
        </div>

        {/* Navegación */}
        <div>
          <h3 className="text-lg font-semibold text-orange-500 mb-4">Navegación</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>
              <a href="/" className="hover:text-red-500 transition">
                Inicio
              </a>
            </li>
            <li>
              <a href="/productos" className="hover:text-red-500 transition">
                Productos
              </a>
            </li>
            <li>
              <a href="/sueroterapia" className="hover:text-red-500 transition">
                Sueroterapia
              </a>
            </li>
            <li>
              <a href="/contacto" className="hover:text-red-500 transition">
                Contacto
              </a>
            </li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="text-lg font-semibold text-orange-500 mb-4">Contacto</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>📍 Medellín, Colombia</li>
            <li>📞 +57 3203101763</li>
          </ul>

          <a
            href={`https://wa.me/573203101763?text=${encodeURIComponent("Hola, me interesaría obtener más información sobre sus servicios de nutrición celular y sueroterapia.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block" // Para que el enlace respete el tamaño del botón
          >
            <button className="mt-4 bg-red-500 text-white px-6 py-3 rounded-full hover:scale-105 transition duration-300 font-bold shadow-lg">Agenda tu asesoría</button>
          </a>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="border-t border-orange-200 text-center text-sm py-4 text-gray-600">© {new Date().getFullYear()} Nutrición Vital — Todos los derechos reservados.</div>
    </footer>
  );
}
