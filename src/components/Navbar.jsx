import { Link } from "react-router-dom";
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

function Navbar() {
  const { cart, wishlist, user } = useContext(StoreContext);

  return (
    <nav className="navbar">
      <h2 className="logo">Narendra Mall</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>

        <Link to="/products">
          Products
        </Link>

        <Link to="/cart">
          Cart ({cart.length})
        </Link>

        <Link to="/dashboard">
          Dashboard
        </Link>

        <Link to="/login">
          {user ? "Profile" : "Login"}
        </Link>

        <span>
          ❤️ {wishlist.length}
        </span>
      </div>
    </nav>
  );
}

export default Navbar;