export default function ProductCard({ product }) {
  return (
    <div className="card">

      <img
        src={product.image}
        alt={product.name}
        className="card-image"
      />

      <div className="card-content">

        <div className="card-emoji">
          {product.emoji}
        </div>

        <h2 className="card-title">
          {product.name}
        </h2>

        <p className="card-desc">
          {product.desc}
        </p>

        <div className="card-price">
          {product.price}
        </div>

        <div className="card-time">
          ⏱ {product.time}
        </div>

      </div>

    </div>
  );
}