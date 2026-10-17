
import { Link } from "react-router";

function NotFound() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, this page does not exist.</p>

      <Link to="/">Go to Home</Link>
    </div>
  );
}

export default NotFound;
