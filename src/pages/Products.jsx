import { useState, useMemo } from "react";
import { tratamientos, lineaInfantil } from "../data/tratamientos";
import Navbar from "../components/Navbar";
import ImageModal from "../components/ModalImg";
import Footer from "../components/Footer";

// ── Categorías inferidas de las descripciones ──────────────────────────────
const CATEGORIAS = [
  { id: "todos", label: "Todos" },
  { id: "detox", label: "Detox" },
  { id: "energia", label: "Energía" },
  { id: "cafe", label: "Café" },
  { id: "colageno", label: "Colágeno & Piel" },
  { id: "digestivo", label: "Digestivo" },
  { id: "cardiovascular", label: "Cardiovascular" },
  { id: "infantil", label: "Línea Infantil" },
];

function getCategoria(item) {
  const texto = (item.nombre + " " + item.descripcion).toLowerCase();
  if (["d fence", "smart biotics", "genius shake"].some((n) => texto.includes(n))) return "infantil";
  if (texto.includes("kafe") || texto.includes("café") || texto.includes("cafe")) return "cafe";
  if (texto.includes("colágeno") || texto.includes("colageno") || texto.includes("piel") || texto.includes("juvenil")) return "colageno";
  if (texto.includes("detox") || texto.includes("toxinas") || texto.includes("hígado") || texto.includes("metales pesados")) return "detox";
  if (texto.includes("energía") || texto.includes("energia") || texto.includes("rendimiento") || texto.includes("vitalidad")) return "energia";
  if (texto.includes("intestinal") || texto.includes("digestiv") || texto.includes("flora") || texto.includes("absorción")) return "digestivo";
  if (texto.includes("cardiovascular") || texto.includes("circulación") || texto.includes("corazón") || texto.includes("colesterol")) return "cardiovascular";
  return "energia";
}

const todosLosProductos = [
  ...tratamientos.map((t) => ({ ...t, _cat: getCategoria(t), _seccion: "tratamientos" })),
  ...lineaInfantil.map((t) => ({ ...t, _cat: "infantil", _seccion: "infantil" })),
];

// ── Card de producto ────────────────────────────────────────────────────────
const CAT_COLORS = {
  detox:         { bg: "bg-green-50",   text: "text-green-700",  dot: "bg-green-500" },
  energia:       { bg: "bg-yellow-50",  text: "text-yellow-700", dot: "bg-yellow-400" },
  cafe:          { bg: "bg-amber-50",   text: "text-amber-700",  dot: "bg-amber-500" },
  colageno:      { bg: "bg-pink-50",    text: "text-pink-700",   dot: "bg-pink-400" },
  digestivo:     { bg: "bg-blue-50",    text: "text-blue-700",   dot: "bg-blue-400" },
  cardiovascular:{ bg: "bg-red-50",     text: "text-red-700",    dot: "bg-red-400" },
  infantil:      { bg: "bg-purple-50",  text: "text-purple-700", dot: "bg-purple-400" },
};

function ProductCard({ item, onVerDetalle }) {
  const cat = CATEGORIAS.find((c) => c.id === item._cat) || CATEGORIAS[0];
  const colors = CAT_COLORS[item._cat] || CAT_COLORS.energia;

  return (
    <article className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-red-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col">
      {/* Imagen */}
      <div className="relative bg-gradient-to-b from-[#fdf6ec] to-white h-56 flex items-center justify-center overflow-hidden px-6 pt-6">
        <span
          className={`absolute top-3 left-3 inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full ${colors.bg} ${colors.text}`}
          style={{ fontFamily: "'system-ui', sans-serif" }}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />
          {cat.label}
        </span>
        <img
          src={item.img}
          alt={item.nombre}
          className="max-h-44 max-w-full object-contain transition-transform duration-700 group-hover:scale-110 drop-shadow-md"
        />
      </div>

      {/* Contenido */}
      <div className="p-6 flex flex-col flex-1">
        <h3
          className="font-bold text-gray-900 text-lg leading-tight mb-2"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          {item.nombre.trim()}
        </h3>
        <p
          className="text-gray-500 text-sm leading-relaxed flex-1 mb-5"
          style={{ fontFamily: "'system-ui', sans-serif" }}
        >
          {item.descripcion}
        </p>

        <div className="flex gap-2">
          <button
            onClick={() => onVerDetalle(item.imgDetalle)}
            className="flex-1 bg-red-500 hover:bg-red-600 text-white text-sm font-semibold py-2.5 px-4 rounded-full transition-all duration-300 hover:scale-105 shadow-sm shadow-red-100 cursor-pointer"
            style={{ fontFamily: "'system-ui', sans-serif" }}
          >
            Ver detalles
          </button>
          <a
            href={`https://wa.me/573203101763?text=${encodeURIComponent(`Hola, me interesa el producto ${item.nombre.trim()}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 border border-gray-200 hover:border-green-400 rounded-full flex items-center justify-center text-gray-400 hover:text-green-500 transition-all duration-300 flex-shrink-0"
            aria-label="Consultar por WhatsApp"
          >
            <i className="fi fi-brands-whatsapp text-base" />
          </a>
        </div>
      </div>
    </article>
  );
}

// ── Página principal ────────────────────────────────────────────────────────
export default function Products() {
  const [open, setOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);
  const [query, setQuery] = useState("");
  const [categoriaActiva, setCategoriaActiva] = useState("todos");

  const resultados = useMemo(() => {
    const q = query.toLowerCase().trim();
    return todosLosProductos.filter((item) => {
      const matchCat = categoriaActiva === "todos" || item._cat === categoriaActiva;
      const matchQuery =
        !q ||
        item.nombre.toLowerCase().includes(q) ||
        item.descripcion.toLowerCase().includes(q);
      return matchCat && matchQuery;
    });
  }, [query, categoriaActiva]);

  const handleVerDetalle = (imgDetalle) => {
    const url = imgDetalle.includes("/upload/")
      ? imgDetalle.replace("/upload/", "/upload/f_auto,q_auto:best,w_900/")
      : imgDetalle;
    setSelectedImg(url);
    setOpen(true);
  };

  return (
    <>
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="pt-[76px] bg-[#fdf6ec] relative overflow-hidden">
        <div
          className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-20 pointer-events-none"
          style={{ background: "radial-gradient(circle, #f87171 0%, transparent 70%)" }}
        />

        <div className="max-w-7xl mx-auto px-6 py-24 text-center relative z-10">
          <span
            className="text-sm font-semibold tracking-[0.2em] uppercase text-orange-400 block mb-4"
            style={{ fontFamily: "'system-ui', sans-serif" }}
          >
            Catálogo completo
          </span>
          <h1
            className="text-5xl md:text-7xl font-bold text-gray-900 leading-[1.05] mb-6"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Nuestros
            <br />
            <em className="text-red-500 not-italic">Productos</em>
          </h1>
          <p
            className="max-w-2xl mx-auto text-gray-600 text-lg md:text-xl leading-relaxed mb-12"
            style={{ fontFamily: "'system-ui', sans-serif" }}
          >
            Protocolos diseñados bajo evaluación personalizada y principios de optimización celular.
          </p>

          {/* ── Buscador ──────────────────────────────────────────────────── */}
          <div className="max-w-xl mx-auto relative">
            <div className="flex items-center bg-white border border-gray-200 rounded-full shadow-lg shadow-orange-100 px-5 py-3 gap-3 focus-within:border-red-400 transition-colors duration-300">
              <i className="fi fi-rr-search text-gray-400 text-lg flex-shrink-0" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar por nombre o beneficio…"
                className="flex-1 bg-transparent outline-none text-gray-800 placeholder-gray-400 text-base"
                style={{ fontFamily: "'system-ui', sans-serif" }}
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="text-gray-300 hover:text-gray-500 transition-colors"
                  aria-label="Limpiar búsqueda"
                >
                  <i className="fi fi-rr-cross text-sm" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Filtros de categoría ─────────────────────────────────────────── */}
      <div className="sticky top-[76px] z-40 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-3 flex gap-2 overflow-x-auto scrollbar-hide">
          {CATEGORIAS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setCategoriaActiva(id)}
              className={`flex-shrink-0 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                categoriaActiva === id
                  ? "bg-red-500 text-white shadow-md shadow-red-200"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
              style={{ fontFamily: "'system-ui', sans-serif" }}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Grid de resultados ───────────────────────────────────────────── */}
      <section className="py-16 bg-gray-50 min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-6">

          {/* Contador de resultados */}
          <div className="flex items-center justify-between mb-8">
            <p
              className="text-gray-500 text-sm"
              style={{ fontFamily: "'system-ui', sans-serif" }}
            >
              {resultados.length === 0
                ? "Sin resultados"
                : `${resultados.length} producto${resultados.length !== 1 ? "s" : ""} encontrado${resultados.length !== 1 ? "s" : ""}`}
            </p>
            {(query || categoriaActiva !== "todos") && (
              <button
                onClick={() => { setQuery(""); setCategoriaActiva("todos"); }}
                className="text-sm text-red-500 hover:underline"
                style={{ fontFamily: "'system-ui', sans-serif" }}
              >
                Limpiar filtros
              </button>
            )}
          </div>

          {/* Sin resultados */}
          {resultados.length === 0 && (
            <div className="text-center py-24">
              <p className="text-6xl mb-6">🔍</p>
              <p
                className="text-2xl font-bold text-gray-900 mb-3"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Sin resultados para "{query}"
              </p>
              <p
                className="text-gray-500 mb-6"
                style={{ fontFamily: "'system-ui', sans-serif" }}
              >
                Prueba con otro término o explora todas las categorías.
              </p>
              <button
                onClick={() => { setQuery(""); setCategoriaActiva("todos"); }}
                className="bg-red-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-600 transition"
                style={{ fontFamily: "'system-ui', sans-serif" }}
              >
                Ver todos los productos
              </button>
            </div>
          )}

          {/* Grid */}
          {resultados.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {resultados.map((item, i) => (
                <ProductCard
                  key={item.nombre + i}
                  item={item}
                  onVerDetalle={handleVerDetalle}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Banner CTA ───────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#0f172a] text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 70% 50%, #ef4444, transparent 60%)" }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            ¿No sabes cuál es el
            <br />
            <span className="text-red-400 italic">producto ideal</span> para ti?
          </h2>
          <p
            className="text-gray-400 text-lg mb-10"
            style={{ fontFamily: "'system-ui', sans-serif" }}
          >
            Agenda tu escaneo cuántico y recibe un plan 100% personalizado.
          </p>
          <a
            href={`https://wa.me/573203101763?text=${encodeURIComponent("Hola, me gustaría una asesoría para saber qué productos son mejores para mí.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-red-500 hover:bg-red-600 text-white px-10 py-4 rounded-full font-semibold text-base hover:scale-105 transition-all duration-300 shadow-lg shadow-red-900/30"
            style={{ fontFamily: "'system-ui', sans-serif" }}
          >
            <i className="fi fi-brands-whatsapp text-xl" />
            Hablar con una asesora
          </a>
        </div>
      </section>

      <ImageModal isOpen={open} onClose={() => setOpen(false)} img={selectedImg} />
      <Footer />
    </>
  );
}