import { useState } from "react";

import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Card from "../components/Cards";
import Modal from "../components/Modals";
import Scanner from "../components/Scanner";

export default function Home() {
  const imagesCarrousel = ["https://res.cloudinary.com/dpflwb7nl/image/upload/v1771794713/tropical-fruits-pattern_tekt9o.jpg", "https://res.cloudinary.com/dpflwb7nl/image/upload/v1771794712/watercolor-assortment-fruits_jucwds.jpg"];

  const products = [
    {
      title: "VITALAGE",
      description: "Programa diseñado para limpiar tu organismo y mejorar tu energía celular.",
      image: "https://res.cloudinary.com/dpflwb7nl/image/upload/f_auto,q_auto/v1771879505/Colageno_dlcbzp.png",
      video: "https://res.cloudinary.com/dpflwb7nl/video/upload/f_auto,q_auto/v1771880132/WhatsApp_Video_2026-02-20_at_3.44.46_PM_1_wmg167.mp4",
    },
    {
      title: "TE DETOX",
      description: "Nutrientes esenciales para mantener tu cuerpo en óptimas condiciones.",
      image: null,
      video: "VIDEO_URL_2",
    },
    {
      title: "V-NRGY",
      description: "Fórmula natural para aumentar tu vitalidad y resistencia.",
      image: null,
      video: "VIDEO_URL_3",
    },
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <>
      <main className="min-h-screen">
        <Navbar />
        <section id="inicio" className="min-h-screen w-full grid grid-cols-1 md:grid-cols-2 bg-[#fff6e8]">
          {/* Texto */}
          <div className="flex flex-col justify-center px-10 py-20 gap-6">
            <h1 className="text-4xl md:text-6xl font-bold text-red-500 leading-tight">Nutrición Celular Inteligente</h1>

            <p className="text-gray-700 text-lg md:text-xl">Recupera tu energía, equilibra tu cuerpo y transforma tu salud desde la raíz.</p>

            <div className="flex gap-4 mt-4">
              <button className="bg-red-500 text-white px-6 py-3 rounded-full hover:scale-105 transition">
                {" "}
                <i className="fi fi-rr-customer-care pr-1.5"></i>Ver servicios{" "}
              </button>
            </div>
          </div>

          {/* Imagen / Carousel */}
          <div className="h-full">
            <Carousel images={imagesCarrousel} className="h-full" />
          </div>
        </section>

        <section id="sobre-nosotros" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">¿Qué es la Nutrición Celular?</h2>
              <p className="text-gray-600 leading-relaxed">La nutrición celular trabaja a nivel profundo, ayudando a optimizar el funcionamiento de cada célula para mejorar energía, defensas y equilibrio metabólico.</p>
            </div>

            <div className="bg-[#fff6e8] p-8 rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold text-red-500 mb-4">Beneficios</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <i className="fi fi-sr-bolt text-blue-900" /> Más energía diaria
                </li>
                <li>
                  <i className="fi fi-sr-stomach text-blue-900" /> Mejor sistema inmune
                </li>
                <li>
                  <i className="fi fi-sr-rules text-blue-900"></i> Regulación metabólica
                </li>
                <li>
                  <i className="fi fi-sr-time-past text-blue-900"></i> Recuperación más rápida
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Scanner  */}
        <section id="scanner" className=" flex justify-center bg-[#fff6e8]">
          <Scanner />
        </section>

        <section id="productos">
          {/* Productos destacados */}
          <div className="pt-10 px-3 bg-[#fff6e8] pb-10">
            <h2 className="text-4xl md:text-5xl font-semibold text-[#1F2937] mb-12 text-center tracking-tight">Soluciones para tu Equilibrio Celular</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 hover:-translate-y-2 transition-all duration-300">
              {products.map((product, index) => (
                <Card
                  key={index}
                  image={product.image}
                  title={product.title}
                  description={product.description}
                  primaryText=""
                  secondaryText="Detalles"
                  onPrimaryClick={() => console.log("Comprar")}
                  onSecondaryClick={() => {
                    setSelectedVideo(product.video);
                    setIsModalOpen(true);
                  }}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Testimonios        */}
        <section id="testimonios" className="py-20 bg-red-500 text-white text-center">
          <h2 className="text-3xl font-bold mb-6">Más de 500 personas han transformado su salud</h2>
          <p className="max-w-3xl mx-auto">Nuestro enfoque combina ciencia, tecnología y bienestar natural.</p>
        </section>

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} videoUrl={selectedVideo} />
        <Footer />
      </main>
    </>
  );
}
