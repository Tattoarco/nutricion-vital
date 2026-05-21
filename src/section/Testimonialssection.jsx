const testimonials = [
  {
    text: "Después de 3 semanas con el plan de nutrición celular, mi energía cambió completamente. Ya no siento ese cansancio crónico de las tardes.",
    name: "Laura M.",
    role: "Medellín, Colombia",
    initial: "L",
    color: "bg-red-100 text-red-600",
  },
  {
    text: "El escáner cuántico fue revelador. Por primera vez entendí qué estaba pasando en mi cuerpo y cómo mejorar desde adentro.",
    name: "Carlos R.",
    role: "Bogotá, Colombia",
    initial: "C",
    color: "bg-orange-100 text-orange-600",
  },
  {
    text: "VITALAGE COLLAGEN transformó mi piel en dos meses. Mis amigas me preguntan qué hago diferente — ahora siempre lo recomiendo.",
    name: "Andrea P.",
    role: "Cali, Colombia",
    initial: "A",
    color: "bg-green-100 text-green-700",
  },
];

const stats = [
  { num: "500+", label: "Vidas transformadas" },
  { num: "98%", label: "Satisfacción de clientes" },
  { num: "10+", label: "Años de experiencia" },
  { num: "3", label: "Líneas de productos" },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonios" className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Encabezado */}
        <div className="text-center mb-20">
          <span className="text-sm font-semibold tracking-[0.2em] uppercase text-orange-400 block mb-4" style={{ fontFamily: "'system-ui', sans-serif" }}>
            Testimonios reales
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900" style={{ fontFamily: "'Georgia', serif" }}>
            Más de <span className="text-red-500 italic">500 personas</span>
            <br />
            han transformado su salud
          </h2>
        </div>

        {/* Testimonios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {testimonials.map(({ text, name, role, initial, color }) => (
            <div key={name} className="bg-[#fdf6ec] rounded-3xl p-8 flex flex-col gap-6 hover:shadow-lg transition-shadow duration-300">
              {/* Comillas decorativas */}
              <span className="text-6xl text-orange-200 leading-none font-serif select-none" style={{ fontFamily: "'Georgia', serif", lineHeight: 0.8 }}>
                "
              </span>
              <p className="text-gray-700 text-base leading-relaxed flex-1" style={{ fontFamily: "'system-ui', sans-serif" }}>
                {text}
              </p>
              <div className="flex items-center gap-3 pt-2 border-t border-orange-100">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 ${color}`} style={{ fontFamily: "'Georgia', serif" }}>
                  {initial}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm" style={{ fontFamily: "'system-ui', sans-serif" }}>
                    {name}
                  </p>
                  <p className="text-gray-400 text-xs" style={{ fontFamily: "'system-ui', sans-serif" }}>
                    {role}
                  </p>
                </div>
                {/* Estrellas */}
                <div className="ml-auto text-yellow-400 text-sm">★★★★★</div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats — franja visual */}
        <div className="bg-red-500 rounded-3xl px-8 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
          {stats.map(({ num, label }) => (
            <div key={num}>
              <p className="text-4xl md:text-5xl font-bold mb-2" style={{ fontFamily: "'Georgia', serif" }}>
                {num}
              </p>
              <p className="text-red-100 text-sm" style={{ fontFamily: "'system-ui', sans-serif" }}>
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
