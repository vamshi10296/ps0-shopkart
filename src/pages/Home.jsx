
import { Link } from "react-router";

function Home() {
  return (
    <div className="home">
      <h1>Welcome to ShopKart</h1>
      <p>Find your favourite products at low prices.</p>

      <Link to="/products" className="shop-button">
        Shop Now
      </Link>
    </div>
  );
}

export default Home;
