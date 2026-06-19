import { useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";

function Products() {
  const [search, setSearch] =
    useState("");

  const filteredProducts =
    products.filter((product) =>
      product.name
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

  return (
    <div className="container">
      <h1>All Products</h1>

      <SearchBar
        setSearch={setSearch}
      />

      <div className="grid">
        {filteredProducts.map(
          (product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          )
        )}
      </div>
    </div>
  );
}

export default Products;