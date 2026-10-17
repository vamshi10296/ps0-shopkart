
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { Link } from "react-router";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    fetch("https://dummyjson.com/products/" + id)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (product === null) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Link to="/products">Back to Products</Link>

      <h1>{product.title}</h1>
      <img src={product.thumbnail} alt={product.title} width="200" />

      <p>Brand: {product.brand}</p>
      <p>Description: {product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Discount: {product.discountPercentage}%</p>
      <p>Stock: {product.stock}</p>

      <h2>Reviews</h2>
      {product.reviews.map((review, index) => (
        <div key={index}>
          <p>Rating: {review.rating}</p>
          <p>{review.comment}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductDetails;
