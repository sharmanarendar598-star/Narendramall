import { useParams } from "react-router-dom";
import products from "../data/products";

function ProductDetails() {
  const { id } = useParams();

  const product =
    products.find(
      (item) =>
        item.id === Number(id)
    );

  if (!product) {
    return (
      <h2>
        Product Not Found
      </h2>
    );
  }

  return (
    <div className="details">
      <img
        src={product.image}
        alt={product.name}
      />

      <h1>{product.name}</h1>

      <h2>
        ₹{product.price}
      </h2>

      <p>
        Category:
        {product.category}
      </p>

      <p>
        Premium quality product
        available at Narendra
        Mall.
      </p>
    </div>
  );
}

export default ProductDetails;