import { useEffect, useState } from "react";

import ImageWithLoader from "../utils/Loader";

export default function ImageModal({ isOpen, onClose, img }) {
  const [show, setShow] = useState(false);

  // Controla animación de salida
  useEffect(() => {
    if (isOpen) {
      setShow(true);
    } else {
      const timeout = setTimeout(() => setShow(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  // Cerrar con ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!show) return null;

  const getHighQuality = (url) => {
    return url.replace("/upload/", "/upload/f_auto,q_auto:best,dpr_auto,w_900/");
  };

  return (
    <section className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${isOpen ? "bg-black/70 opacity-100" : "bg-black/0 opacity-0"}`} onClick={onClose}>
      {/* Modal */}
      <div className={`relative max-w-3xl w-full mx-4 transform transition-all duration-300 ${isOpen ? "scale-100 opacity-100" : "scale-90 opacity-0"}`} onClick={(e) => e.stopPropagation()}>
        <ImageWithLoader src={getHighQuality(img)} alt="preview" className="w-full h-auto rounded-2xl shadow-2xl" />

        {/* Botón cerrar */}
        <button onClick={onClose} className="absolute top-2 right-2 bg-white/80 hover:bg-white text-black rounded-full w-8 h-8 flex items-center justify-center cursor-pointer">
          ✕
        </button>
      </div>
    </section>
  );
}
