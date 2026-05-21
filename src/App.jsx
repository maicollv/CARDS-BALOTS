import "./index.css";

import { products } from "./data/products";
import ProductCard from "./components/ProductCard";

export default function App() {
  return (
    <div>

      <nav className="navbar">
        <div className="container nav-content">

          <div className="logo">
            🎱 Cards & Balots
          </div>

          <div className="nav-links">
            <a href="#">Inicio</a>
            <a href="#">Productos</a>
            <a href="#">Contacto</a>
          </div>

        </div>
      </nav>

      <div className="container">

        <h1 className="title">
          Equipos Profesionales para Bingo
        </h1>

        <div className="products-grid">
          {products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

      </div>
      <a
        href="https://wa.me/573205661505"
        target="_blank"
        className="whatsapp"
      >
        💬
      </a>
    </div>
  );
}