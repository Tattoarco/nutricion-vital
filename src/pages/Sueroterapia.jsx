import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// ── DATA — agrega aquí todos tus sueros ────────────────────────────────────
// Campos disponibles:
//   nombre    (string, requerido)
//   descripcion (string, requerido)
//   img       (string, URL — opcional, si no hay se muestra un ícono)
//   tag       (string, opcional — ej: "Más solicitado")
//   beneficios (array de strings, opcional — lista corta de efectos)
const sueros = [
  {
    nombre: "Suero de Hidratación",
    descripcion: "Rehidrata tu cuerpo con sueros especialmente formulados para reponer líquidos y electrolitos de forma rápida y efectiva.",
    tag: "Esencial",
    beneficios: ["Repone electrolitos", "Mejora la energía", "Recuperación rápida"],
    img: null,
  },
  {
    nombre: "Suero Vitaminado",
    descripcion: "Fortalece tu sistema inmunológico con sueros ricos en vitaminas esenciales del complejo B, vitamina C y minerales.",
    tag: "Más solicitado",
    beneficios: ["Refuerza el sistema inmune", "Reduce el cansancio", "Mejora el ánimo"],
    img: null,
  },
  {
    nombre: "Suero Antioxidante",
    descripcion: "Combate el estrés oxidativo y mejora tu bienestar general con una fórmula de antioxidantes potentes.",
    tag: null,
    beneficios: ["Neutraliza radicales libres", "Mejora la piel", "Detox celular"],
    img: null,
  },
];

// ── Colores de tag ──────────────────────────────────────────────────────────
const TAG_COLORS = {
  "Más solicitado": "bg-red-500 text-white",
  Esencial: "bg-orange-400 text-white",
  Detox: "bg-green-600 text-white",
  Energía: "bg-yellow-400 text-gray-900",
  Inmune: "bg-blue-500 text-white",
  Belleza: "bg-pink-500 text-white",
};

function SueroCard({ suero, onAgendar }) {
  const tagClass = TAG_COLORS[suero.tag] || "bg-gray-200 text-gray-700";

  return (
    <article className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-red-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col">
      {/* Imagen o placeholder visual */}
      <div className="relative bg-gradient-to-b from-[#fdf6ec] to-white h-48 flex items-center justify-center overflow-hidden">
        {suero.tag && (
          <span className={`absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full z-10 ${tagClass}`} style={{ fontFamily: "'system-ui', sans-serif" }}>
            {suero.tag}
          </span>
        )}

        {suero.img ? (
          <img src={suero.img} alt={suero.nombre} className="max-h-40 max-w-full object-contain transition-transform duration-700 group-hover:scale-110 drop-shadow-md" />
        ) : (
          <div className="flex flex-col items-center gap-2 opacity-30 group-hover:opacity-50 transition-opacity duration-500">
            <i className="fi fi-rr-syringe text-6xl text-red-300" />
          </div>
        )}
      </div>

      {/* Contenido */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-bold text-gray-900 text-xl leading-tight mb-2" style={{ fontFamily: "'Georgia', serif" }}>
          {suero.nombre}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-5" style={{ fontFamily: "'system-ui', sans-serif" }}>
          {suero.descripcion}
        </p>

        {/* Beneficios */}
        {suero.beneficios?.length > 0 && (
          <ul className="space-y-1.5 mb-6 flex-1">
            {suero.beneficios.map((b) => (
              <li key={b} className="flex items-center gap-2 text-sm text-gray-600" style={{ fontFamily: "'system-ui', sans-serif" }}>
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
                {b}
              </li>
            ))}
          </ul>
        )}

        <button onClick={() => onAgendar(suero.nombre)} className="w-full bg-red-500 hover:bg-red-600 text-white text-sm font-semibold py-3 px-4 rounded-full transition-all duration-300 hover:scale-105 shadow-sm shadow-red-100 cursor-pointer mt-auto" style={{ fontFamily: "'system-ui', sans-serif" }}>
          Agendar este suero
        </button>
      </div>
    </article>
  );
}

// ── Página ──────────────────────────────────────────────────────────────────
export default function Sueroterapia() {
  const handleAgendar = (nombre) => {
    const msg = encodeURIComponent(`Hola Maria Jhanet, me interesa agendar una sesión de: ${nombre}`);
    window.open(`https://wa.me/573203101763?text=${msg}`, "_blank");
  };

  return (
    <>
      <Navbar />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="pt-[76px] bg-[#0f172a] text-white relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none" style={{ background: "radial-gradient(circle, #ef4444, transparent 65%)" }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-10 pointer-events-none" style={{ background: "radial-gradient(circle, #f97316, transparent 70%)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center">
          {/* Texto */}
          <div>
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-orange-400 block mb-5" style={{ fontFamily: "'system-ui', sans-serif" }}>
              Tratamiento intravenoso
            </span>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] mb-6" style={{ fontFamily: "'Georgia', serif" }}>
              Suero-
              <br />
              <em className="text-red-400 not-italic">terapia</em>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md" style={{ fontFamily: "'system-ui', sans-serif" }}>
              Administración de sueros intravenosos personalizados para reponer nutrientes esenciales, mejorar la hidratación y promover tu bienestar desde adentro.
            </p>
          </div>

          {/* Stats / puntos clave */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { num: "30–60", unit: "min", label: "Duración de sesión" },
              { num: "100%", unit: "", label: "Personalizado" },
              { icon: "fi fi-sr-shield-check", label: "Procedimiento seguro y certificado" },
              { icon: "fi fi-sr-bolt", label: "Resultados desde la primera sesión" },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col gap-2">
                {item.num ? (
                  <>
                    <p className="text-3xl font-bold text-white leading-none" style={{ fontFamily: "'Georgia', serif" }}>
                      {item.num}
                      <span className="text-lg text-red-400 ml-1">{item.unit}</span>
                    </p>
                    <p className="text-sm text-gray-400" style={{ fontFamily: "'system-ui', sans-serif" }}>
                      {item.label}
                    </p>
                  </>
                ) : (
                  <>
                    <i className={`${item.icon} text-red-400 text-2xl`} />
                    <p className="text-sm text-gray-300 leading-snug" style={{ fontFamily: "'system-ui', sans-serif" }}>
                      {item.label}
                    </p>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Qué es / cómo funciona ────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-orange-400 block mb-4" style={{ fontFamily: "'system-ui', sans-serif" }}>
              ¿En qué consiste?
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6" style={{ fontFamily: "'Georgia', serif" }}>
              Nutrición directa
              <br />
              <em className="text-red-500 not-italic">al torrente sanguíneo</em>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed" style={{ fontFamily: "'system-ui', sans-serif" }}>
              A diferencia de los suplementos orales, la sueroterapia intravenosa entrega vitaminas, minerales y antioxidantes directamente al torrente sanguíneo, logrando una absorción del 100% y resultados visibles desde la primera sesión.
            </p>
          </div>

          {/* Pasos del proceso */}
          <div className="space-y-4">
            {[
              { n: "01", title: "Evaluación personalizada", desc: "Analizamos tu estado de salud con el escáner cuántico para definir el suero ideal." },
              { n: "02", title: "Preparación del suero", desc: "Formulamos tu suero con los componentes exactos que tu cuerpo necesita." },
              { n: "03", title: "Aplicación intravenosa", desc: "Sesión de 30–60 minutos en un ambiente cómodo y controlado." },
              { n: "04", title: "Seguimiento y ajuste", desc: "Monitoreamos tu respuesta y ajustamos el protocolo en cada visita." },
            ].map(({ n, title, desc }) => (
              <div key={n} className="flex gap-5 p-5 rounded-2xl bg-[#fdf6ec] hover:bg-red-50 transition-colors duration-300 group">
                <span className="text-3xl font-bold text-red-200 group-hover:text-red-300 transition-colors flex-shrink-0 leading-none mt-1" style={{ fontFamily: "'Georgia', serif" }}>
                  {n}
                </span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1" style={{ fontFamily: "'Georgia', serif" }}>
                    {title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: "'system-ui', sans-serif" }}>
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Grid de sueros ────────────────────────────────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-orange-400 block mb-3" style={{ fontFamily: "'system-ui', sans-serif" }}>
              Nuestros tratamientos
            </span>
            <h2 className="text-5xl font-bold text-gray-900" style={{ fontFamily: "'Georgia', serif" }}>
              Sueros disponibles
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {sueros.map((suero, i) => (
              <SueroCard key={i} suero={suero} onAgendar={handleAgendar} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA final ─────────────────────────────────────────────────────── */}
      <section className="py-20 bg-red-500 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 0%, #fff, transparent 55%)" }} />
        <div className="relative z-10 max-w-2xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Georgia', serif" }}>
            ¿Lista para tu primera
            <br />
            sesión?
          </h2>
          <p className="text-red-100 text-lg mb-10" style={{ fontFamily: "'system-ui', sans-serif" }}>
            Escríbeme y agendamos tu evaluación personalizada sin costo.
          </p>
          <a
            href={`https://wa.me/573203101763?text=${encodeURIComponent("Hola, me interesa agendar una sesión de sueroterapia personalizada.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-red-500 hover:bg-red-50 px-10 py-4 rounded-full font-bold text-base hover:scale-105 transition-all duration-300 shadow-xl"
            style={{ fontFamily: "'system-ui', sans-serif" }}
          >
            <i className="fi fi-brands-whatsapp text-xl text-green-500" />
            Agendar mi sesión
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
