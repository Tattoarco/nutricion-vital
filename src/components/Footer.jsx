import { Link } from "react-router-dom";

// ── Cuando tengas Calendly, reemplaza este valor ───────────────────────────
// Ejemplo: "https://calendly.com/mariajhanet/asesoria"
const CALENDLY_URL = null; // <- pega aquí tu link de Calendly

const WHATSAPP_URL = `https://wa.me/573203101763?text=${encodeURIComponent("Hola, me interesaría obtener más información sobre sus servicios de nutrición celular y sueroterapia.")}`;

const servicios = ["Asesorías nutricionales", "Planes personalizados", "Suplementación celular", "Sueroterapia IV", "Educación en hábitos saludables"];

const navegacion = [
  { label: "Inicio", href: "/" },
  { label: "Productos", href: "/productos" },
  { label: "Sueroterapia", href: "/sueroterapia" },
  { label: "Contacto", href: "/contacto" },
];

const redes = [
  {
    icon: "fi fi-brands-instagram",
    href: "https://www.instagram.com/serumvital76?igsh=aTNmZnhpNnhrZTl1",
    label: "Instagram",
  },
  {
    icon: "fi fi-brands-facebook",
    href: "#",
    label: "Facebook",
  },
  {
    icon: "fi fi-brands-whatsapp",
    href: WHATSAPP_URL,
    label: "WhatsApp",
  },
];

export default function Footer() {
  const agendarHref = CALENDLY_URL || WHATSAPP_URL;
  const agendarTarget = "_blank";

  return (
    <footer className="bg-[#fdf6ec] border-t border-orange-200">
      {/* ── Franja superior — CTA agendar ─────────────────────────────────── */}
      <div className="bg-[#0f172a] text-white">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xl md:text-2xl font-bold" style={{ fontFamily: "'Georgia', serif" }}>
              ¿Lista para transformar tu salud?
            </p>
            <p className="text-gray-400 text-sm mt-1" style={{ fontFamily: "'system-ui', sans-serif" }}>
              {CALENDLY_URL ? "Elige el día y la hora que mejor te funcione." : "Escríbenos y agendamos tu asesoría personalizada."}
            </p>
          </div>
          <div className="flex flex-wrap gap-3 flex-shrink-0">
            <a href={agendarHref} target={agendarTarget} rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-7 py-3 rounded-full font-semibold text-sm hover:scale-105 transition-all duration-300 shadow-lg shadow-red-900/30" style={{ fontFamily: "'system-ui', sans-serif" }}>
              <i className="fi fi-rr-calendar-clock" />
              Agendar cita
            </a>
            {/* Botón WhatsApp secundario solo si ya hay Calendly */}
            {CALENDLY_URL && (
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-white/20 hover:border-white/50 text-white px-7 py-3 rounded-full font-semibold text-sm transition-all duration-300" style={{ fontFamily: "'system-ui', sans-serif" }}>
                <i className="fi fi-brands-whatsapp text-green-400" />
                WhatsApp
              </a>
            )}
          </div>
        </div>
      </div>

      {/* ── Cuerpo del footer ──────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Marca */}
        <div className="sm:col-span-2 md:col-span-1">
          <Link to="/" className="inline-block mb-4">
            <span className="text-2xl font-bold text-red-500" style={{ fontFamily: "'Georgia', serif" }}>
              Nutrición Vital
            </span>
          </Link>
          <p className="text-sm text-gray-600 leading-relaxed mb-6 max-w-xs" style={{ fontFamily: "'system-ui', sans-serif" }}>
            Transformamos tu bienestar a través de nutrición celular, hábitos saludables y productos naturales de alta calidad.
          </p>

          {/* Redes — íconos Flaticon (consistente con el resto del sitio) */}
          <div className="flex gap-3">
            {redes.map(({ icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="w-9 h-9 bg-white border border-orange-200 rounded-full flex items-center justify-center text-red-400 hover:bg-red-500 hover:text-white hover:border-red-500 transition-all duration-300">
                <i className={`${icon} text-base`} />
              </a>
            ))}
          </div>
        </div>

        {/* Servicios */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-orange-500 mb-5" style={{ fontFamily: "'system-ui', sans-serif" }}>
            Servicios
          </h3>
          <ul className="space-y-3">
            {servicios.map((s) => (
              <li key={s} className="flex items-center gap-2 text-sm text-gray-600" style={{ fontFamily: "'system-ui', sans-serif" }}>
                <span className="w-1 h-1 rounded-full bg-red-300 flex-shrink-0" />
                {s}
              </li>
            ))}
          </ul>
        </div>

        {/* Navegación */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-orange-500 mb-5" style={{ fontFamily: "'system-ui', sans-serif" }}>
            Páginas
          </h3>
          <ul className="space-y-3">
            {navegacion.map(({ label, href }) => (
              <li key={label}>
                <Link to={href} className="text-sm text-gray-600 hover:text-red-500 transition-colors duration-200 flex items-center gap-2 group" style={{ fontFamily: "'system-ui', sans-serif" }}>
                  <i className="fi fi-rr-arrow-right text-xs text-gray-300 group-hover:text-red-400 transition-colors" />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-orange-500 mb-5" style={{ fontFamily: "'system-ui', sans-serif" }}>
            Contacto
          </h3>
          <ul className="space-y-3 mb-6">
            {[
              { icon: "fi fi-rr-marker", text: "Medellín, Colombia" },
              { icon: "fi fi-rr-phone-call", text: "+57 320 310 1763" },
              { icon: "fi fi-brands-instagram", text: "@serumvital76" },
            ].map(({ icon, text }) => (
              <li key={text} className="flex items-center gap-3 text-sm text-gray-600" style={{ fontFamily: "'system-ui', sans-serif" }}>
                <i className={`${icon} text-red-400 flex-shrink-0`} />
                {text}
              </li>
            ))}
          </ul>

          {/* Calendly hint — cuando esté listo */}
          {!CALENDLY_URL && (
            <div className="bg-orange-50 border border-orange-200 rounded-2xl p-4 text-xs text-gray-500 leading-relaxed" style={{ fontFamily: "'system-ui', sans-serif" }}>
              <p className="font-semibold text-orange-600 mb-1">📅 Próximamente</p>
              Calendario de citas online. Por ahora agendamos por WhatsApp.
            </div>
          )}
        </div>
      </div>

      {/* ── Línea inferior ─────────────────────────────────────────────────── */}
      <div className="border-t border-orange-200 px-6 py-5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500" style={{ fontFamily: "'system-ui', sans-serif" }}>
          <span>© {new Date().getFullYear()} Nutrición Vital — Todos los derechos reservados.</span>
          <span>Hecho con ❤️ en Medellín, Colombia</span>
        </div>
      </div>
    </footer>
  );
}
