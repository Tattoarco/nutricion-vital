import { useState, useEffect, useCallback } from "react";

export default function Carousel({ images, autoSlide = true, interval = 9000, title, text}) {
  const [current, setCurrent] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  useEffect(() => {
    if (!autoSlide) return;

    const slideInterval = setInterval(nextSlide, interval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, interval, nextSlide]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Images */}
      {images.map((img, index) => (
        <div key={index} className={`absolute w-full h-full transition-opacity duration-1000 ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"}`}>
          <img src={img} alt={`slide-${index}`} className="w-full h-full object-cover" />
        </div>
      ))}

      {/* Overlay oscuro sutil */}
      <div className="absolute inset-0 bg-black/30 z-20" />

      {/* Contenido opcional */}
      <div className="absolute inset-0 z-30 flex flex-col items-center justify-center text-white text-center px-6">
        <h2 className="text-4xl md:text-6xl font-bold">{title}</h2>
        <p className="mt-4 text-lg md:text-xl max-w-2xl">{text}</p>
      </div>

      {/* Botones */}
      <button onClick={prevSlide} className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-black px-4 py-2 rounded-full z-40">
        ‹
      </button>

      <button onClick={nextSlide} className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-black px-4 py-2 rounded-full z-40">
        ›
      </button>
    </div>
  );
}
