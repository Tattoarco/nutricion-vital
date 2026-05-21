const features = [
  { icon: "fi fi-sr-duration-alt", text: "Diagnóstico rápido y no invasivo" },
  { icon: "fi fi-sr-customize-edit", text: "Resultados inmediatos" },
  { icon: "fi fi-sr-people-poll", text: "Plan personalizado según tu estado celular" },
];

export default function ScannerSection() {
  return (
    <section id="scanner" className="py-28 bg-[#0f172a] text-white overflow-hidden relative">
      {/* Decoración de fondo */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] opacity-10 pointer-events-none" style={{ background: "radial-gradient(circle at top right, #ef4444, transparent 65%)" }} />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] opacity-10 pointer-events-none" style={{ background: "radial-gradient(circle at bottom left, #f97316, transparent 70%)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Video lado izquierdo */}
        <div className="relative">
          {/* Marco decorativo */}
          <div className="absolute -inset-3 rounded-3xl border border-red-500/20" />
          <div className="absolute -inset-6 rounded-3xl border border-orange-500/10" />

          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-900">
            <video src="https://res.cloudinary.com/dpflwb7nl/video/upload/v1772568971/Scanner_Cuantico_n0hq5m.mp4" className="w-full object-cover" style={{ maxHeight: "400px" }} autoPlay controls loop muted />

            {/* Badge sobre el video */}
            <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5" style={{ fontFamily: "'system-ui', sans-serif" }}>
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              Tecnología cuántica
            </div>
          </div>
        </div>

        {/* Texto lado derecho */}
        <div className="space-y-8">
          <div>
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-orange-400 block mb-4" style={{ fontFamily: "'system-ui', sans-serif" }}>
              Diagnóstico de precisión
            </span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight" style={{ fontFamily: "'Georgia', serif" }}>
              Análisis Celular
              <br />
              <span className="text-red-400 italic">Avanzado</span>
            </h2>
          </div>

          <p className="text-gray-400 text-lg leading-relaxed" style={{ fontFamily: "'system-ui', sans-serif" }}>
            Evaluamos tu estado interno con tecnología de escaneo cuántico para diseñar un plan personalizado que optimice tu energía, equilibrio y bienestar desde la raíz.
          </p>

          <ul className="space-y-4">
            {features.map(({ icon, text }) => (
              <li key={text} className="flex items-start gap-4">
                <div className="w-10 h-10 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                  <i className={`${icon} text-red-400 text-base`} />
                </div>
                <span className="text-gray-300 text-base leading-relaxed pt-2" style={{ fontFamily: "'system-ui', sans-serif" }}>
                  {text}
                </span>
              </li>
            ))}
          </ul>

          <a
            href={`https://wa.me/573203101763?text=${encodeURIComponent("¡Hola!, me gustaría agendar mi escaneo de salud para iniciar mi tratamiento.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-red-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-red-600 hover:scale-105 transition-all duration-300 shadow-lg shadow-red-900/30"
            style={{ fontFamily: "'system-ui', sans-serif" }}
          >
            <i className="fi fi-brands-whatsapp text-xl" />
            Agendar mi escaneo
          </a>
        </div>
      </div>
    </section>
  );
}
