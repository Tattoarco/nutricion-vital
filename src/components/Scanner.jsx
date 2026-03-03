import Carousel from "./Carousel";

export default function Scanner() {
  const imagesCarrousel = ["https://res.cloudinary.com/dpflwb7nl/image/upload/v1772569585/Scanner_2_cl5bsv.jpg", "https://res.cloudinary.com/dpflwb7nl/image/upload/v1772569584/Scanner_1_kgs29d.jpg"];

  return (
    <>
      <section id="scanner" className="flex justify-center bg-[#fff6e8] p-5">
        <div className="text-center ">
          <h2 className="text-3xl font-bold text-red-500 mb-4">Escanea el código QR</h2>
          <p className="text-gray-700 mb-6">Conoce sobre el Scanner, sus beneficios y cómo podemos realizar escaneos rápidos y seguros.</p>

          <div className="bg-red-500 grid grid-cols-1 md:grid-cols-2 gap-6 p-6 rounded-lg shadow-md w-[90vw] md:w-[80vw] ">

            <div className="bg-white rounded-lg p-4 flex flex-col items-center justify-center min-h-120">
              <Carousel images={imagesCarrousel} />
            </div>

            <div className="bg-white rounded-lg p-4 flex flex-col items-center justify-center min-h-120">
              <iframe src="https://res.cloudinary.com/dpflwb7nl/video/upload/v1772568971/Scanner_Cuantico_n0hq5m.mp4" frameborder="0" className="h-full w-full"></iframe>
            </div>
          </div>

          <div className="bg-red-500 rounded-lg p-4 mt-2 shadow-md w-[90vw] md:w-full justify-center items-center">
            <h3 className="text-lg font-semibold text-red-500 mb-2">Escaneo Rápido</h3>
            <p className="text-gray-600 text-sm">Obtén información instantánea sobre nuestros productos y servicios con solo escanear el código QR.</p>
          </div>
        </div>
      </section>
    </>
  );
}
