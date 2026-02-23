import { useEffect } from "react";

export default function Modals({ isOpen, onClose, videoUrl }) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      {/* Contenedor */}
      <div className="relative bg-white rounded-2xl w-full max-w-2xl p-6">
        {/* Botón cerrar */}

        <button onClick={onClose} className="text-red-500 right-4 top-4 rounded-full h-10 w-10 text-xl font-bold  transition bg-gray-300 cursor-pointer absolute justify-center items-center flex hover:bg-gray-400">
          ✕
        </button>

        {/* Video con proporción 16:9 */}
        <div className="w-full aspect-video">
          <video src={videoUrl} controls autoPlay className="w-full h-full object-contain rounded-xl" />
        </div>
      </div>
    </div>
  );
}
