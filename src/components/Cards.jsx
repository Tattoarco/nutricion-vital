export default function Card({ image, title, description, primaryText = "Ver más", secondaryText, onPrimaryClick, onSecondaryClick }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">
      {/* Imagen */}
      {image && (
        <div className="w-full h-56 flex items-center justify-center bg-gray-50">
          <img src={image} alt={title} className="max-h-full max-w-full object-contain transition-transform duration-500 hover:scale-105" />
        </div>
      )}

      {/* Contenido */}
      <div className="p-6 flex flex-col grow">
        <h3 className="text-xl font-semibold text-red-500 mb-3">{title}</h3>

        <p className="text-gray-600 text-sm leading-relaxed grow">{description}</p>

        {/* Botones */}
        <div className="mt-6 flex flex-col gap-3">
          {primaryText && (
            <button onClick={onPrimaryClick} className="flex-1 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium transition">
              {primaryText}
            </button>
          )}

          {secondaryText && (
            <button onClick={onSecondaryClick} className="flex-1 border border-orange-400 text-orange-500 hover:bg-orange-400 hover:text-white px-4 py-2 rounded-full text-sm font-medium transition">
              {secondaryText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
