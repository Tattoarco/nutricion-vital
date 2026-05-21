import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const contactInfo = [
  {
    icon: "fi fi-brands-whatsapp",
    label: "WhatsApp",
    value: "+57 320 310 1763",
    href: `https://wa.me/573203101763?text=${encodeURIComponent("Hola Maria Jhanet, me gustaría recibir una asesoría personalizada.")}`,
    color: "bg-green-50 text-green-600 border-green-100",
    iconColor: "text-green-500",
  },
  {
    icon: "fi fi-brands-instagram",
    label: "Instagram",
    value: "@serumvital76",
    href: "https://www.instagram.com/serumvital76?igsh=aTNmZnhpNnhrZTl1",
    color: "bg-pink-50 text-pink-600 border-pink-100",
    iconColor: "text-pink-500",
  },
  {
    icon: "fi fi-rr-marker",
    label: "Ubicación",
    value: "Medellín, Colombia",
    href: null,
    color: "bg-orange-50 text-orange-600 border-orange-100",
    iconColor: "text-orange-500",
  },
];

const valores = [
  { icon: "fi fi-sr-heart", text: "Atención personalizada" },
  { icon: "fi fi-sr-leaf", text: "Enfoque natural y clínico" },
  { icon: "fi fi-sr-handshake", text: "Acompañamiento cercano" },
];

export default function Contacto() {
  return (
    <>
      <Navbar />

      {/* ── Hero / sección principal ─────────────────────────────────────── */}
      <section className="pt-[76px] min-h-screen bg-[#fdf6ec] relative overflow-hidden flex items-center">
        {/* Decoración orgánica */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-20 pointer-events-none" style={{ background: "radial-gradient(circle, #f87171 0%, transparent 70%)" }} />
        <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full opacity-10 pointer-events-none" style={{ background: "radial-gradient(circle, #fb923c 0%, transparent 70%)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center w-full">
          {/* ── Columna izquierda — texto ─────────────────────────────── */}
          <div className="space-y-8">
            <div>
              <span className="text-sm font-semibold tracking-[0.2em] uppercase text-orange-400 block mb-4" style={{ fontFamily: "'system-ui', sans-serif" }}>
                Háblame directamente
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-[1.05]" style={{ fontFamily: "'Georgia', serif" }}>
                Atención
                <br />
                <em className="text-red-500 not-italic">personalizada</em>
                <br />
                para tu bienestar
              </h1>
            </div>

            {/* Bio */}
            <div className="space-y-4 border-l-4 border-orange-200 pl-6">
              <p className="text-gray-700 text-lg leading-relaxed" style={{ fontFamily: "'system-ui', sans-serif" }}>
                Mi nombre es <span className="font-semibold text-gray-900 underline decoration-red-400 decoration-2 underline-offset-2">Maria Jhanet Arco Aguilar</span>, soy enfermera profesional enfocada en la optimización de la salud a través de evaluación personalizada y métodos naturales.
              </p>
              <p className="text-gray-600 leading-relaxed" style={{ fontFamily: "'system-ui', sans-serif" }}>
                Te acompaño en tu proceso para mejorar tu calidad de vida, prevenir enfermedades y alcanzar equilibrio físico y emocional.
              </p>
            </div>

            {/* Valores */}
            <div className="flex flex-wrap gap-3">
              {valores.map(({ icon, text }) => (
                <div key={text} className="flex items-center gap-2 bg-white border border-orange-100 rounded-full px-4 py-2 shadow-sm">
                  <i className={`${icon} text-red-400 text-sm`} />
                  <span className="text-sm text-gray-700 font-medium" style={{ fontFamily: "'system-ui', sans-serif" }}>
                    {text}
                  </span>
                </div>
              ))}
            </div>

            {/* Contacto directo */}
            <div className="space-y-3 pt-2">
              {contactInfo.map(({ icon, label, value, href, color, iconColor }) => {
                const Wrapper = href ? "a" : "div";
                const extraProps = href ? { href, target: "_blank", rel: "noopener noreferrer" } : {};
                return (
                  <Wrapper key={label} {...extraProps} className={`flex items-center gap-4 bg-white border rounded-2xl px-5 py-4 shadow-sm ${href ? "hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-pointer" : ""} ${color}`}>
                    <div className={`w-10 h-10 rounded-xl bg-white flex items-center justify-center flex-shrink-0 shadow-sm`}>
                      <i className={`${icon} text-lg ${iconColor}`} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-0.5" style={{ fontFamily: "'system-ui', sans-serif" }}>
                        {label}
                      </p>
                      <p className="font-semibold text-gray-800 text-sm" style={{ fontFamily: "'system-ui', sans-serif" }}>
                        {value}
                      </p>
                    </div>
                    {href && <i className="fi fi-rr-arrow-right text-gray-300 ml-auto text-sm" />}
                  </Wrapper>
                );
              })}
            </div>

            {/* CTA principal */}
            <a
              href={`https://wa.me/573203101763?text=${encodeURIComponent("Hola Maria Jhanet, me gustaría agendar una asesoría personalizada.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full font-semibold text-base hover:scale-105 transition-all duration-300 shadow-lg shadow-red-200"
              style={{ fontFamily: "'system-ui', sans-serif" }}
            >
              <i className="fi fi-brands-whatsapp text-xl" />
              Agendar asesoría ahora
            </a>
          </div>

          {/* ── Columna derecha — foto ────────────────────────────────── */}
          <div className="relative flex justify-center items-center">
            {/* Marco decorativo */}
            <div className="absolute inset-0 rounded-[45%_55%_50%_50%_/_50%_45%_55%_50%] bg-orange-100 translate-x-4 translate-y-4 pointer-events-none" />

            {/* Foto con forma orgánica */}
            <div className="relative w-full max-w-md aspect-[3/4] rounded-[45%_55%_50%_50%_/_50%_45%_55%_50%] overflow-hidden shadow-2xl">
              <img src="/Jhanet.jpeg" alt="Maria Jhanet Arco Aguilar — Enfermera y asesora de nutrición celular" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>

            {/* Badge credencial */}
            <div className="absolute -bottom-4 left-4 bg-white rounded-2xl shadow-xl px-5 py-4 flex items-center gap-3 max-w-[220px]" style={{ fontFamily: "'system-ui', sans-serif" }}>
              <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center text-lg flex-shrink-0">👩‍⚕️</div>
              <div>
                <p className="text-xs text-gray-400 font-medium">Profesión</p>
                <p className="text-sm font-bold text-gray-800 leading-tight">Enfermera profesional</p>
              </div>
            </div>

            {/* Badge experiencia */}
            <div className="absolute -top-4 -right-2 bg-red-500 text-white rounded-2xl shadow-xl px-5 py-4 text-center" style={{ fontFamily: "'system-ui', sans-serif" }}>
              <p className="text-2xl font-bold" style={{ fontFamily: "'Georgia', serif" }}>
                10+
              </p>
              <p className="text-xs text-red-100 font-medium">años de experiencia</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Franja CTA final ─────────────────────────────────────────────── */}
      <section className="py-20 bg-[#0f172a] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 0%, #ef4444, transparent 60%)" }} />
        <div className="relative z-10 max-w-2xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Georgia', serif" }}>
            ¿Lista para empezar
            <br />
            <span className="text-red-400 italic">tu transformación?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10" style={{ fontFamily: "'system-ui', sans-serif" }}>
            Un mensaje es todo lo que se necesita. Respondo personalmente.
          </p>
          <a
            href={`https://wa.me/573203101763?text=${encodeURIComponent("Hola, me interesaría obtener más información sobre sus servicios de nutrición celular.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-10 py-4 rounded-full font-semibold text-base hover:scale-105 transition-all duration-300 shadow-lg shadow-green-900/30"
            style={{ fontFamily: "'system-ui', sans-serif" }}
          >
            <i className="fi fi-brands-whatsapp text-xl" />
            Escribir por WhatsApp
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
