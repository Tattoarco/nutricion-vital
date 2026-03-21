import { useState } from "react";

export default function ImageWithLoader({ src, alt }) {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative w-full h-full">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse rounded-xl">
          <span className="text-sm text-gray-900">Cargando...</span>
        </div>
      )}

      <img src={src} alt={alt} onLoad={() => setLoading(false)} className={`w-full h-full object-cover rounded-xl transition-opacity duration-300 ${loading ? "opacity-0" : "opacity-100"}`} />
    </div>
  );
}
