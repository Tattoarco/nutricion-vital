import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contacto() {
  return (
    <>
      <Navbar />

      <section className="min-h-screen flex items-center bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full">
          {/* IZQUIERDA */}
          <div className="space-y-6 animate-fadeInUp">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0f172a] leading-tight">Atención personalizada para tu bienestar</h1>

            <p className="text-gray-600 text-lg">Mi nombre es <samp className="underline decoration-red-500">Maria Jhanet</samp> soy enfermera profesional enfocada en la optimización de la salud a través de evaluación personalizada y métodos naturales.</p>

            <p className="text-gray-600">Te acompaño en tu proceso para mejorar tu calidad de vida, prevenir enfermedades y alcanzar equilibrio físico y emocional.</p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="https://wa.me/573203101763" target="_blank" className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold transition transform hover:-translate-y-1 shadow-md">
                <i className="fi fi-brands-whatsapp"></i> WhatsApp
              </a>
            </div>

            {/* Info rápida */}
            <div className="pt-6 text-lg text-gray-500">
              <p> Atención personalizada </p>
              <p> Enfoque natural y clínico</p>
              <p> Acompañamiento cercano</p>
            </div>
          </div>

          {/* DERECHA */}
          <div className="relative flex justify-center items-center">
            {/* Fondo decorativo */}
            <div className="absolute w-80 h-80 bg-red-500/10 rounded-full blur-3xl"></div>

            <img src="Jhanet.jpeg" alt="Profesional de salud" className="relative rounded-2xl shadow-xl w-full max-w-md object-cover transition duration-500 hover:scale-105" />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
