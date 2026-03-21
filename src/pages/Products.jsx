import { useState } from "react";
import { tratamientos, lineaInfantil } from "../data/tratamientos";

import Navbar from "../components/Navbar";
import ImageModal from "../components/ModalImg";
import Footer from "../components/Footer";
import Card from "../components/Cards";

export default function Productos() {
  const [open, setOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <>
      <Navbar />
      <section id="text" className="min-h-[65vh] bg-[#0f172a] text-white flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
        <div className="absolute w-125 h-125 bg-blue-600/20 rounded-full blur-3xl -top-25 -left-25" />
        <div className="absolute w-100 h-100 bg-blue-400/20 rounded-full blur-3xl -bottom-25 -right-25" />

        <h1 className="text-4xl md:text-6xl font-bold mb-6 relative z-10">Tratamientos Especializados</h1>

        <p className="max-w-2xl text-gray-300 text-lg md:text-xl relative z-10">Protocolos diseñados bajo evaluación personalizada y principios de optimización celular.</p>
      </section>

      {/* GRID TRATAMIENTOS */}
      <section id="productos" className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 font-bold">
            {tratamientos.map((item, index) => (
              <Card
                key={index}
                image={item.img}
                title={item.nombre}
                description={item.descripcion}
                primaryText="Ver mas"
                onPrimaryClick={() => {
                  setSelectedImg(item.imgDetalle);
                  setOpen(true);
                }}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 shadow-xl border-t-4 border-b-4 bg-[#0f172a] border-red-500">
        <div className="max-w-5xl mx-auto px-6 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Línea infantil: Nutrición desde el inicio de la vida</h2>
        </div>
      </section>

      <section id="infantil" className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1  md:grid-cols-3 gap-10 font-bold">
            {lineaInfantil.map((item, index) => (
              <Card
                key={index}
                image={item.img}
                title={item.nombre}
                description={item.descripcion}
                price={item.precio}
                duration={item.duracion}
                primaryText="Ver mas"
                onPrimaryClick={() => {
                  setSelectedImg(item.imgDetalle.replace("/upload/", "/upload/f_auto,q_auto:best,w_900/"));
                  setOpen(true);
                }}
              />
            ))}
          </div>
        </div>
      </section>

      <ImageModal isOpen={open} onClose={() => setOpen(false)} img={selectedImg} />

      <Footer />
    </>
  );
}
