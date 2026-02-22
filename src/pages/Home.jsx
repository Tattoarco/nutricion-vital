import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";

export default function Home() {
  const images = ["https://res.cloudinary.com/dpflwb7nl/image/upload/v1771794713/tropical-fruits-pattern_tekt9o.jpg", "https://res.cloudinary.com/dpflwb7nl/image/upload/v1771794712/watercolor-assortment-fruits_jucwds.jpg"];

  return (
    <>
      <main className="bg-[#f8f2e5] min-h-screen">
        <section id="inicio" className="h-screen container mx-auto">
        <Navbar />
          <div>
            <Carousel images={images} title={"Nutrición que trasforma tu vida"} text={"Bienestar celular, energía y equilibrio natural."} />
          </div>
        </section>
      </main>
    </>
  );
}
