import { Link } from "react-router-dom";
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

function ProductCard({ product }) {
  const { addToCart } =
    useContext(StoreContext);

  return (
    <div className="card">
      <img
        src={product.image}
        alt={product.name}
      />

      <h3>{product.name}</h3>

      <p>₹{product.price}</p>

      <p>{product.category}</p>

      <button
        onClick={() =>
          addToCart(product)
        }
      >
        Add To Cart
      </button>

      <Link
        to={`/product/${product.id}`}
      >
        View Details
      </Link>
    </div>
  );
}

export default ProductCard;