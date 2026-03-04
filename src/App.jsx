import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Home from "./pages/Home";
import Productos from "./pages/Products";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // mínimo 2 segundos

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Productos" element={<Productos />} />
       
      </Routes>);
}
export default App;
