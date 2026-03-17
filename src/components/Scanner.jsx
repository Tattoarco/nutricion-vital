import Carousel from "./Carousel";

export default function Scanner() {
  // const imagesCarrousel = ["https://res.cloudinary.com/dpflwb7nl/image/upload/v1772569585/Scanner_2_cl5bsv.jpg", "https://res.cloudinary.com/dpflwb7nl/image/upload/v1772569584/Scanner_1_kgs29d.jpg"];

  return (
    <section id="scanner" className="py-20 bg-linear-to-r from-[#fff6e8] to-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* TEXTO */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-red-500 leading-tight">Análisis Celular con Tecnología Avanzada</h2>

          <p className="text-gray-700 text-lg">Evaluamos tu estado interno para diseñar un plan personalizado que optimice tu energía, equilibrio y bienestar.</p>

          <ul className="space-y-2 text-gray-600">
            <li> Diagnóstico rápido y no invasivo</li>
            <li>✔ Resultados inmediatos</li>
            <li>✔ Plan personalizado</li>
          </ul>

          <a
            href={`https://wa.me/573203101763?text=${encodeURIComponent("¡Hola!, me gustaría agendar mi escaneo de salud para iniciar mi tratamiento.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block" // Para que el enlace respete el tamaño del botón
          >
            <button className="mt-4 bg-red-500 text-white px-6 py-3 rounded-full hover:scale-105 transition duration-300 font-bold shadow-lg cursor-pointer">Agendar escaneo</button>
          </a>
        </div>

        {/* CONTENIDO VISUAL */}
        <div className="space-y-6">
          {/* Video */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <video src="https://res.cloudinary.com/dpflwb7nl/video/upload/v1772568971/Scanner_Cuantico_n0hq5m.mp4" className="w-full h-75 object-cover" 
              autoPlay
              controls
              loop
              muted

            />
          </div>

          {/* Carrusel */}
          {/* <div className="h-60 rounded-2xl overflow-hidden shadow-md">
            <Carousel images={imagesCarrousel} />
          </div> */}
        </div>
      </div>
    </section>
  );
}
