const benefits = [
  {
    icon: "fi fi-sr-bolt",
    title: "Más energía diaria",
    desc: "Activa tus células y siente la diferencia desde los primeros días.",
  },
  {
    icon: "fi fi-sr-stomach",
    title: "Sistema inmune fuerte",
    desc: "Refuerza tus defensas naturales con nutrición de precisión.",
  },
  {
    icon: "fi fi-sr-rules",
    title: "Regulación metabólica",
    desc: "Equilibra tu metabolismo para un peso y bienestar sostenibles.",
  },
  {
    icon: "fi fi-sr-time-past",
    title: "Recuperación acelerada",
    desc: "Tu cuerpo regenera y se adapta más rápido con el soporte correcto.",
  },
];

export default function AboutSection() {
  return (
    <section id="sobre-nosotros" className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Encabezado editorial */}
        <div className="grid md:grid-cols-2 gap-16 items-end mb-20">
          <div>
            <span
              className="text-sm font-semibold tracking-[0.2em] uppercase text-orange-400 block mb-4"
              style={{ fontFamily: "'system-ui', sans-serif" }}
            >
              Nuestra filosofía
            </span>
            <h2
              className="text-5xl md:text-6xl font-bold text-gray-900 leading-[1.1]"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              ¿Qué es la
              <br />
              <em className="text-red-500 not-italic">Nutrición</em>
              <br />
              Celular?
            </h2>
          </div>
          <div className="md:pb-2">
            <p
              className="text-gray-600 text-lg leading-relaxed border-l-4 border-orange-200 pl-6"
              style={{ fontFamily: "'system-ui', sans-serif" }}
            >
              La nutrición celular trabaja a nivel profundo, ayudando a optimizar el funcionamiento de cada célula para mejorar energía, defensas y equilibrio metabólico. No es una dieta — es un estilo de vida.
            </p>
          </div>
        </div>

        {/* Grid de beneficios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map(({ icon, title, desc }, i) => (
            <div
              key={i}
              className="group relative bg-[#fdf6ec] rounded-3xl p-8 hover:bg-red-500 transition-all duration-500 cursor-default"
            >
              {/* Número decorativo de fondo */}
              <span
                className="absolute top-4 right-5 text-7xl font-bold text-orange-100 group-hover:text-red-400 transition-colors duration-500 select-none leading-none"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="relative z-10">
                <div className="w-12 h-12 bg-white group-hover:bg-red-400 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-500 shadow-sm">
                  <i className={`${icon} text-blue-900 group-hover:text-white text-xl transition-colors duration-500`} />
                </div>
                <h3
                  className="font-bold text-gray-900 group-hover:text-white text-lg mb-2 transition-colors duration-500"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  {title}
                </h3>
                <p
                  className="text-sm text-gray-600 group-hover:text-red-100 leading-relaxed transition-colors duration-500"
                  style={{ fontFamily: "'system-ui', sans-serif" }}
                >
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}