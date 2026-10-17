
import { useEffect, useState } from "react";
import { Link } from "react-router";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=30")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, []);

  return (
    <div >
      <h1>Products</h1>

      <div class="products-grid">

      {products.map((product) => (
        <div key={product.id} class="product-card">
          <img src={product.thumbnail} alt={product.title} width="150" />

          <h3>{product.title}</h3>
          <p>Price: {product.price}</p>
          <p>Rating: {product.rating}</p>
          <Link to={`/products/${product.id}`}>
            View Details
          </Link>
        </div>
      ))}
        </div>
    </div>
  );
}

export default Products;
