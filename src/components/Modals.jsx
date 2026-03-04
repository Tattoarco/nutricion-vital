import { useEffect, useState } from "react";

export default function Modals({ isOpen, onClose, videoUrl }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    if (isOpen) {
      setTimeout(() => setShow(true), 10); // activa animación
    } else {
      setShow(false);
    }

    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center px-4 transition-all duration-300 ${
        show ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Overlay */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 cursor-pointer"
      />

      {/* Contenedor Modal */}
      <div
        className={`relative bg-white rounded-2xl w-full max-w-3xl p-6 shadow-2xl transform transition-all duration-300 ${
          show ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
        }`}
      >
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition text-2xl cursor-pointer"
        >
          ✕
        </button>

        {/* Video */}
        <div className="w-full aspect-video rounded-xl overflow-hidden">
          <video
            src={videoUrl}
            controls
            autoPlay
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}