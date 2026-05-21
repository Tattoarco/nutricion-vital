import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import HeroSection from "../section/Herosection";
import AboutSection from "../section/Aboutsection";
import ScannerSection from "../section/Scannersection";
import ProductsSection from "../section/Productssection";
import TestimonialsSection from "../section/Testimonialssection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="pt-19">
        <HeroSection />
        <AboutSection />
        <ScannerSection />
        <ProductsSection />
        <TestimonialsSection />
        <Footer />
      </div>
    </main>
  );
}
