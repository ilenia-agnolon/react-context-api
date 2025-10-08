import "./App.css";

//import della libreria di routing
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import delle pagine di riferimento
import HomePage from "./pages/HomePage";
import ChiSiamo from "./pages/ChiSiamo";
import Prodotti from "./pages/Prodotti";
import MainNavBar from "./components/MainNavBar";
import ProductDetailPage from "./pages/ProductDetailPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <MainNavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/who-we-are" element={<ChiSiamo />} />
          <Route path="/products" element={<Prodotti />} />
          {/* NUOVA ROTTA PER React Router Store */}
          <Route path="/products/:id" element={<ProductDetailPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
