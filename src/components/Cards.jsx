import ImageWithLoader from "../utils/Loader"

export default function Card({
  image,
  title,
  description,
  primaryText = "",
  secondaryText,
  onPrimaryClick,
  onSecondaryClick,
}) {
  return (
    <section className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col transform hover:-translate-y-2">
      
      {/* Imagen */}
      {image && (
        <div className="w-full h-56 bg-linear-to-b from-gray-50 to-white flex items-center justify-center overflow-hidden">
          <ImageWithLoader
            src={image}
            alt={title}
            className="max-h-full max-w-full object-contain transition-transform duration-700 group-hover:scale-105 rounded-lg"
          />
        </div>
      )}

      {/* Contenido */}
      <div className="p-6 flex flex-col grow">
        <h3 className="text-xl font-semibold text-red-500 mb-3 tracking-wide">
          {title}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed grow">
          {description}
        </p>

        {/* Botones */}
        <div className="mt-6 flex flex-col gap-3">
          
          {primaryText && (
            <button
              onClick={onPrimaryClick}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              {primaryText}
            </button>
          )}

          {secondaryText && (
            <button
              onClick={onSecondaryClick}
              className="border border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer"
            >
              {secondaryText}
            </button>
          )}

        </div>
      </div>
    </section>
  );
}