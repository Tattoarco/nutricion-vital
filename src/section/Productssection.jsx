import { useState } from "react";
import { Link } from "react-router-dom";
import { optimizeImage } from "../utils/cloudinary";
import Modal from "../components/Modals";

const products = [
  {
    nombre: "VITALAGE COLLAGEN",
    img: optimizeImage("https://res.cloudinary.com/dpflwb7nl/image/upload/v1774110452/0052_jt3k1n.png"),
    descripcion: "Colágeno hidrolizado que promueve la salud de la piel, articulaciones y huesos, ayudando a mantener una apariencia juvenil.",
    tag: "Más vendido",
    tagColor: "bg-red-500",
    video: "https://res.cloudinary.com/dpflwb7nl/video/upload/f_auto,q_auto/v1771880132/WhatsApp_Video_2026-02-20_at_3.44.46_PM_1_wmg167.mp4",
  },
  {
    nombre: "TÉ DETOX",
    img: optimizeImage("https://res.cloudinary.com/dpflwb7nl/image/upload/v1774110416/0032_rzn0g4.png"),
    descripcion: "Proporciona una limpieza suave de los órganos internos, regula el metabolismo y ayuda a expulsar toxinas.",
    tag: "Depurativo",
    tagColor: "bg-green-600",
    video: null,
  },
  {
    nombre: "V-ORGANEX",
    img: optimizeImage("https://res.cloudinary.com/dpflwb7nl/image/upload/v1774110379/0006_vfkmlk.png"),
    descripcion: "Especializado en el detox de hígado, ayuda a liberar toxinas, brinda apoyo en alergias y en la pérdida de peso.",
    tag: "Detox hepático",
    tagColor: "bg-orange-500",
    video: null,
  },
];

function ProductCard({ product, onVideoClick }) {
  return (
    <article className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col border border-gray-100 hover:border-red-100">
      {/* Imagen */}
      <div className="relative bg-gradient-to-b from-[#fdf6ec] to-white h-64 flex items-center justify-center overflow-hidden px-8 pt-8">
        {/* Tag */}
        <span className={`absolute top-4 left-4 ${product.tagColor} text-white text-xs font-bold px-3 py-1 rounded-full z-10`} style={{ fontFamily: "'system-ui', sans-serif" }}>
          {product.tag}
        </span>

        <img src={product.img} alt={product.nombre} className="max-h-52 max-w-full object-contain transition-transform duration-700 group-hover:scale-110 drop-shadow-lg" />
      </div>

      {/* Contenido */}
      <div className="p-7 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight" style={{ fontFamily: "'Georgia', serif" }}>
          {product.nombre}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-6" style={{ fontFamily: "'system-ui', sans-serif" }}>
          {product.descripcion}
        </p>

        {/* Acciones */}
        <div className="flex gap-3">
          <a
            href={`https://wa.me/573203101763?text=${encodeURIComponent(`Hola, me interesa el producto ${product.nombre}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-red-500 hover:bg-red-600 text-white text-sm font-semibold py-3 px-4 rounded-full text-center transition-all duration-300 hover:scale-105 shadow-sm shadow-red-200"
            style={{ fontFamily: "'system-ui', sans-serif" }}
          >
            Consultar
          </a>

          {product.video && (
            <button onClick={() => onVideoClick(product.video)} className="w-12 h-12 border border-gray-200 hover:border-red-300 rounded-full flex items-center justify-center text-gray-500 hover:text-red-500 transition-all duration-300 flex-shrink-0" aria-label="Ver video del producto">
              <i className="fi fi-rr-play text-sm" />
            </button>
          )}
        </div>
      </div>
    </article>
  );
}

export default function ProductsSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <section id="productos" className="py-28 bg-[#fdf6ec]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Encabezado */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-orange-400 block mb-3" style={{ fontFamily: "'system-ui', sans-serif" }}>
              Nuestros productos
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight" style={{ fontFamily: "'Georgia', serif" }}>
              Soluciones para tu
              <br />
              <em className="text-red-500 not-italic">Equilibrio Celular</em>
            </h2>
          </div>

          <Link to="/productos" className="inline-flex items-center gap-2 text-red-500 font-semibold hover:gap-4 transition-all duration-300 group" style={{ fontFamily: "'system-ui', sans-serif" }}>
            Ver catálogo completo
            <i className="fi fi-rr-arrow-right group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

        {/* Grid de productos — hover individual, no en contenedor */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              onVideoClick={(url) => {
                setSelectedVideo(url);
                setIsModalOpen(true);
              }}
            />
          ))}
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} videoUrl={selectedVideo} />
    </section>
  );
}
