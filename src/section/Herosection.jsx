import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";

const imagesCarrousel = ["https://res.cloudinary.com/dpflwb7nl/image/upload/v1771794713/tropical-fruits-pattern_tekt9o.jpg", "https://res.cloudinary.com/dpflwb7nl/image/upload/v1771794712/watercolor-assortment-fruits_jucwds.jpg"];

export default function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen w-full overflow-hidden bg-[#fdf6ec]" style={{ fontFamily: "'Georgia', serif" }}>
      {/* Fondo decorativo — manchas orgánicas */}
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-20 pointer-events-none" style={{ background: "radial-gradient(circle, #f87171 0%, transparent 70%)" }} />
      <div className="absolute bottom-0 -left-24 w-[400px] h-[400px] rounded-full opacity-10 pointer-events-none" style={{ background: "radial-gradient(circle, #fb923c 0%, transparent 70%)" }} />

      {/* Grid principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 min-h-screen grid grid-cols-1 md:grid-cols-2 gap-0 items-center">
        {/* Columna texto */}
        <div className="flex flex-col justify-center py-32 md:py-0 pr-0 md:pr-16">
          {/* Etiqueta superior */}
          <div className="inline-flex items-center gap-2 mb-8 w-fit">
            <span className="block w-8 h-px bg-red-400" />
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-red-400" style={{ fontFamily: "'system-ui', sans-serif", letterSpacing: "0.18em" }}>
              Salud desde la raíz
            </span>
          </div>

          {/* Titular principal */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-[1.05] mb-6" style={{ fontFamily: "'Georgia', serif" }}>
            Nutrición
            <br />
            <span className="text-red-500 italic">Celular</span>
            <br />
            Inteligente
          </h1>

          <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-10 max-w-md" style={{ fontFamily: "'system-ui', sans-serif" }}>
            Recupera tu energía, equilibra tu cuerpo y transforma tu salud desde adentro hacia afuera.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Link to="/contacto" className="inline-flex items-center gap-2 bg-red-500 text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-red-600 hover:scale-105 transition-all duration-300 shadow-lg shadow-red-200" style={{ fontFamily: "'system-ui', sans-serif" }}>
              <i className="fi fi-rr-calendar-clock" />
              Agendar asesoría
            </Link>
            <a href="#productos" className="inline-flex items-center gap-2 text-gray-800 px-8 py-4 rounded-full font-semibold text-base border border-gray-300 hover:border-red-400 hover:text-red-500 transition-all duration-300" style={{ fontFamily: "'system-ui', sans-serif" }}>
              Ver productos
              <i className="fi fi-rr-arrow-right" />
            </a>
          </div>

          {/* Stats rápidos */}
          <div className="flex gap-10 mt-14 pt-10 border-t border-orange-100">
            {[
              { num: "500+", label: "Personas transformadas" },
              { num: "100%", label: "Natural y certificado" },
              { num: "10+", label: "Años de experiencia" },
            ].map(({ num, label }) => (
              <div key={num}>
                <p className="text-3xl font-bold text-red-500" style={{ fontFamily: "'Georgia', serif" }}>
                  {num}
                </p>
                <p className="text-xs text-gray-500 mt-1 leading-tight max-w-[80px]" style={{ fontFamily: "'system-ui', sans-serif" }}>
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Columna imagen — carousel con forma orgánica */}
        <div className="hidden md:flex items-center justify-center py-16">
          <div className="relative w-full max-w-lg" style={{ aspectRatio: "4/5" }}>
            {/* Marco decorativo desplazado */}
            <div className="absolute inset-0 rounded-[40%_60%_55%_45%_/_45%_55%_60%_40%] bg-orange-100 translate-x-4 translate-y-4" />
            {/* Carousel con forma de blob */}
            <div className="relative w-full h-full rounded-[40%_60%_55%_45%_/_45%_55%_60%_40%] overflow-hidden shadow-2xl">
              <Carousel images={imagesCarrousel} />
            </div>

            {/* Badge flotante */}
            <div className="absolute -bottom-4 -left-6 bg-white rounded-2xl shadow-xl px-5 py-4 flex items-center gap-3" style={{ fontFamily: "'system-ui', sans-serif" }}>
              <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-lg">🌿</div>
              <div>
                <p className="text-xs text-gray-400 font-medium">Certificado</p>
                <p className="text-sm font-bold text-gray-800">100% Natural</p>
              </div>
            </div>

            {/* Badge flotante 2 */}
            <div className="absolute -top-4 -right-4 bg-red-500 text-white rounded-2xl shadow-xl px-5 py-4" style={{ fontFamily: "'system-ui', sans-serif" }}>
              <p className="text-xs font-medium opacity-80">Diagnóstico</p>
              <p className="text-sm font-bold">Escáner Cuántico</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 z-10">
        <span className="text-xs tracking-widest uppercase text-gray-500" style={{ fontFamily: "'system-ui', sans-serif", fontSize: "10px" }}>
          scroll
        </span>
        <div className="w-px h-10 bg-gray-400 animate-pulse" />
      </div>
    </section>
  );
}
