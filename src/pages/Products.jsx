import { useState } from "react";
import Navbar from "../components/Navbar";
import Modal from "../components/Modals";
import Footer from "../components/Footer";

export default function Productos() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const tratamientos = [
    {
      nombre: "Plan Detox Frutal",
      descripcion:
        "Optimización digestiva y desintoxicación celular progresiva.",
      precio: "$320.000",
      duracion: "30 días",
      video:
        "https://res.cloudinary.com/dpflwb7nl/video/upload/f_auto,q_auto/v1771880132/WhatsApp_Video_2026-02-20_at_3.44.46_PM_1_wmg167.mp4",
    },
    {
      nombre: "Suplementación Celular Avanzada",
      descripcion:
        "Protocolo de soporte metabólico y fortalecimiento inmunológico.",
      precio: "$280.000",
      duracion: "21 días",
      video: "",
    },
    {
      nombre: "Programa Energía Natural",
      descripcion:
        "Mejora integral del rendimiento físico y mental.",
      precio: "$250.000",
      duracion: "15 días",
      video: "",
    },
  ];

  return (
    <>
      <Navbar />

      {/* HERO DIFERENTE AL HOME */}
      <section className="min-h-[75vh] bg-[#0f172a] text-white flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl top-[-100px] left-[-100px]" />
        <div className="absolute w-[400px] h-[400px] bg-blue-400/20 rounded-full blur-3xl bottom-[-100px] right-[-100px]" />

        <h1 className="text-4xl md:text-6xl font-bold mb-6 relative z-10">
          Tratamientos Especializados
        </h1>

        <p className="max-w-2xl text-gray-300 text-lg md:text-xl relative z-10">
          Protocolos diseñados bajo evaluación personalizada y principios de
          optimización celular.
        </p>
      </section>

      {/* GRID TRATAMIENTOS */}
      <section className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {tratamientos.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 transition duration-300 hover:-translate-y-3 hover:shadow-2xl border border-gray-100"
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {item.nombre}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {item.descripcion}
                </p>

                <div className="mb-6">
                  <p className="text-sm text-gray-500">
                    Duración estimada: {item.duracion}
                  </p>
                </div>

                <div className="flex items-center justify-between border-t pt-6">
                  <span className="text-3xl font-bold text-blue-600">
                    {item.precio}
                  </span>

                  <button
                    onClick={() => {
                      setSelectedVideo(item.video);
                      setIsModalOpen(true);
                    }}
                    className="text-sm text-blue-600 font-medium hover:underline"
                  >
                    Ver información
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN QUE JUSTIFICA VALOR */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            ¿Por qué estos valores?
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            Cada tratamiento incluye análisis previo, selección personalizada
            de protocolo, seguimiento y evaluación de resultados. No es un
            producto aislado, es un proceso estructurado.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Trabajamos bajo principios de biodisponibilidad, absorción celular
            y equilibrio metabólico para garantizar resultados sostenibles.
          </p>
        </div>
      </section>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoUrl={selectedVideo}
      />

      <Footer />
    </>
  );
}