import { useState } from "react";

import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Card from "../components/Cards";
import Modal from "../components/Modals";

export default function Home() {
  const imagesCarrousel = ["https://res.cloudinary.com/dpflwb7nl/image/upload/v1771794713/tropical-fruits-pattern_tekt9o.jpg", "https://res.cloudinary.com/dpflwb7nl/image/upload/v1771794712/watercolor-assortment-fruits_jucwds.jpg"];

  const products = [
    {
      title: "Plan Detox Frutal",
      description: "Programa diseñado para limpiar tu organismo y mejorar tu energía celular.",
      image: "https://res.cloudinary.com/dpflwb7nl/image/upload/f_auto,q_auto/v1771879505/Colageno_dlcbzp.png",
      video: "https://res.cloudinary.com/dpflwb7nl/video/upload/f_auto,q_auto/v1771880132/WhatsApp_Video_2026-02-20_at_3.44.46_PM_1_wmg167.mp4",
    },
    {
      title: "Suplemento Celular",
      description: "Nutrientes esenciales para mantener tu cuerpo en óptimas condiciones.",
      image: null,
      video: "VIDEO_URL_2",
    },
    {
      title: "Energía Natural",
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
        <section id="inicio" className=" container mx-auto">
          <Navbar />
          <div>
            <Carousel images={imagesCarrousel} title={"Nutrición que trasforma tu vida"} text={"Bienestar celular, energía y equilibrio natural."} />
          </div>

          {/* Productos destacados */}
          <div className="pt-10 px-3 bg-[#fff6e8] pb-10">
            <h2 className="text-2xl font-bold text-red-500 mb-6 text-center">Productos destacados</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {products.map((product, index) => (
                <Card
                  key={index}
                  image={product.image}
                  title={product.title}
                  description={product.description}
                  primaryText="Comprar"
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

          {/* Recomendaciones del día */}
          <div className="pt-10 px-3">
            <h2 className="text-2xl font-bold text-red-500 mb-6 text-center">Recomendaciones del día</h2>

          </div>
          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} videoUrl={selectedVideo} />
        </section>

        <Footer />
      </main>
    </>
  );
}
