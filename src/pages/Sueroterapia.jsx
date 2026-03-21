import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Cards";

export default function Sueroterapia() {
  return (
    <>
      <Navbar />
      <section className="max-w-7xl mx-auto px-6 py-40">
        <h2 className="text-3xl font-bold text-center mb-8">Sueroterapia</h2>
        <p className="text-center text-gray-700 mb-12">
          La sueroterapia es un tratamiento que consiste en la administración de sueros intravenosos para mejorar la hidratación, reponer nutrientes esenciales y promover el bienestar general. En Nutrición Vital, ofrecemos sueroterapia personalizada para ayudarte a sentirte revitalizado y lleno de energía. Nuestros sueros están formulados con una combinación de vitaminas, minerales y antioxidantes
          que pueden ayudar a mejorar tu salud, aumentar tu energía y fortalecer tu sistema inmunológico. Ya sea que estés buscando recuperarte de una enfermedad, mejorar tu rendimiento deportivo o simplemente sentirte mejor en tu día a día, la sueroterapia puede ser una excelente opción para ti.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card title="Sueros de Hidratación" description="Rehidrata tu cuerpo con sueros especialmente formulados para reponer líquidos y electrolitos." />
          <Card title="Sueros Vitaminados" description="Fortalece tu sistema inmunológico con sueros ricos en vitaminas esenciales." />
          <Card title="Sueros Antioxidantes" description="Combate el estrés oxidativo y mejora tu bienestar general con sueros antioxidantes." />
        </div>
      </section >

      <Footer />
    </>
  );
}
